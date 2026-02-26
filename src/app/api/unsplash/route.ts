import { NextRequest, NextResponse } from "next/server";

// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || "";
const UNSPLASH_API_URL = "https://api.unsplash.com";

// Cache duration in seconds (1 hour)
const CACHE_DURATION = 3600;

interface UnsplashImage {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string | null;
  description: string | null;
  user: {
    name: string;
    username: string;
  };
}

interface UnsplashSearchResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

/**
 * GET /api/unsplash?query=luxury+car&per_page=10
 * Fetches images from Unsplash API based on search query
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query") || "luxury car";
    const perPage = Math.min(parseInt(searchParams.get("per_page") || "10"), 30);
    const page = parseInt(searchParams.get("page") || "1");

    // Check if Unsplash API key is configured
    if (!UNSPLASH_ACCESS_KEY) {
      console.warn("Unsplash API key not configured, using fallback images");
      return NextResponse.json(
        { 
          data: getFallbackImages(query, perPage),
          warning: "Unsplash API key not configured. Using fallback images."
        },
        { 
          status: 200,
          headers: {
            "Cache-Control": `public, max-age=${CACHE_DURATION}`,
          },
        }
      );
    }

    // Build Unsplash API URL
    const searchUrl = new URL(`${UNSPLASH_API_URL}/search/photos`);
    searchUrl.searchParams.set("query", query);
    searchUrl.searchParams.set("per_page", perPage.toString());
    searchUrl.searchParams.set("page", page.toString());
    searchUrl.searchParams.set("orientation", "landscape");
    searchUrl.searchParams.set("content_filter", "high");

    // Fetch from Unsplash API
    const response = await fetch(searchUrl.toString(), {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: CACHE_DURATION },
    });

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
    }

    const data: UnsplashSearchResponse = await response.json();

    // Transform response to our format
    const images = data.results.map((image) => ({
      id: image.id,
      url: image.urls.regular,
      urlSmall: image.urls.small,
      urlThumb: image.urls.thumb,
      alt: image.alt_description || image.description || `${query} image`,
      photographer: image.user.name,
      photographerUsername: image.user.username,
    }));

    return NextResponse.json(
      { 
        data: images,
        total: data.total,
        totalPages: data.total_pages,
        page,
      },
      {
        headers: {
          "Cache-Control": `public, max-age=${CACHE_DURATION}`,
        },
      }
    );
  } catch (error) {
    console.error("Error fetching Unsplash images:", error);
    
    // Return fallback images on error
    return NextResponse.json(
      { 
        data: getFallbackImages("luxury car", 10),
        error: "Failed to fetch from Unsplash API. Using fallback images.",
      },
      { status: 200 }
    );
  }
}

/**
 * Returns fallback images when Unsplash API is unavailable
 */
function getFallbackImages(query: string, count: number): Array<{
  id: string;
  url: string;
  urlSmall: string;
  urlThumb: string;
  alt: string;
  photographer: string;
  photographerUsername: string;
}> {
  // Predefined high-quality car images from Unsplash
  const fallbackImages = [
    {
      id: "luxury-car-1",
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
      urlSmall: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
      urlThumb: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&q=80",
      alt: "Luxury sports car front view",
      photographer: "Owen",
      photographerUsername: "owen",
    },
    {
      id: "luxury-car-2",
      url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80",
      urlSmall: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80",
      urlThumb: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&q=80",
      alt: "White luxury car",
      photographer: "Peter Broomfield",
      photographerUsername: "peterbroomfield",
    },
    {
      id: "luxury-car-3",
      url: "https://images.unsplash.com/photo-1492144534655-ae79e964c10d?w=1200&q=80",
      urlSmall: "https://images.unsplash.com/photo-1492144534655-ae79e964c10d?w=400&q=80",
      urlThumb: "https://images.unsplash.com/photo-1492144534655-ae79e964c10d?w=200&q=80",
      alt: "Red sports car",
      photographer: "Adam",
      photographerUsername: "adam",
    },
    {
      id: "car-interior-1",
      url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=80",
      urlSmall: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80",
      urlThumb: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=200&q=80",
      alt: "Luxury car interior with leather seats",
      photographer: "Toni",
      photographerUsername: "toni",
    },
    {
      id: "car-wheels-1",
      url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
      urlSmall: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80",
      urlThumb: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&q=80",
      alt: "Premium car wheels with alloy rims",
      photographer: "Caleb",
      photographerUsername: "caleb",
    },
    {
      id: "car-engine-1",
      url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
      urlSmall: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80",
      urlThumb: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&q=80",
      alt: "High-performance car engine",
      photographer: "Vidar",
      photographerUsername: "vidar",
    },
    {
      id: "car-dashboard-1",
      url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80",
      urlSmall: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80",
      urlThumb: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=200&q=80",
      alt: "Car dashboard and steering wheel",
      photographer: "Samuele",
      photographerUsername: "samuele",
    },
    {
      id: "car-detail-1",
      url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
      urlSmall: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80",
      urlThumb: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=200&q=80",
      alt: "Car headlight detail",
      photographer: "Martin",
      photographerUsername: "martin",
    },
    {
      id: "luxury-car-4",
      url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80",
      urlSmall: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&q=80",
      urlThumb: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=200&q=80",
      alt: "Luxury car side view",
      photographer: "Alex",
      photographerUsername: "alex",
    },
    {
      id: "luxury-car-5",
      url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80",
      urlSmall: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80",
      urlThumb: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=200&q=80",
      alt: "BMW luxury car",
      photographer: "Omar",
      photographerUsername: "omar",
    },
  ];

  // Filter based on query
  const queryLower = query.toLowerCase();
  const filtered = fallbackImages.filter((img) => {
    if (queryLower.includes("interior")) return img.alt.includes("interior");
    if (queryLower.includes("wheel")) return img.alt.includes("wheel");
    if (queryLower.includes("engine")) return img.alt.includes("engine");
    if (queryLower.includes("dashboard")) return img.alt.includes("dashboard");
    return true;
  });

  return filtered.slice(0, count);
}
