-- Database Schema for Premium Car Landing Page
-- Created: 2025

-- Car Models Table
CREATE TABLE IF NOT EXISTS car_models (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  tagline VARCHAR(500),
  description TEXT,
  acceleration_0_60 VARCHAR(50),
  top_speed VARCHAR(50),
  horsepower INTEGER,
  price DECIMAL(12, 2),
  image_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Customer Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255),
  avatar_url VARCHAR(500),
  quote TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Contact Form Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Bookings Table (test drives and appointments)
CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  car_model_id INTEGER REFERENCES car_models(id) ON DELETE SET NULL,
  booking_type VARCHAR(50) NOT NULL DEFAULT 'test_drive',
  preferred_date DATE NOT NULL,
  preferred_time VARCHAR(50),
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Car Colors Table (for configurator)
CREATE TABLE IF NOT EXISTS car_colors (
  id SERIAL PRIMARY KEY,
  car_model_id INTEGER REFERENCES car_models(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  hex_code VARCHAR(7) NOT NULL,
  image_url VARCHAR(500),
  price_modifier DECIMAL(12, 2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Gallery Images Table
CREATE TABLE IF NOT EXISTS gallery_images (
  id SERIAL PRIMARY KEY,
  car_model_id INTEGER REFERENCES car_models(id) ON DELETE CASCADE,
  image_url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(500),
  category VARCHAR(100),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_testimonials_is_active ON testimonials(is_active);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_car_colors_car_model_id ON car_colors(car_model_id);
CREATE INDEX IF NOT EXISTS idx_gallery_images_car_model_id ON gallery_images(car_model_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_car_model_id ON bookings(car_model_id);

-- Insert sample data for Apex GT
INSERT INTO car_models (name, tagline, description, acceleration_0_60, top_speed, horsepower, price, image_url)
VALUES (
  'Apex GT',
  'Redefining the boundaries of performance and luxury',
  'Experience the pinnacle of automotive excellence. The Apex GT combines cutting-edge technology with timeless design.',
  '2.8s',
  '205mph',
  670,
  185000.00,
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80'
)
ON CONFLICT DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (name, role, avatar_url, quote, rating)
VALUES 
  ('Michael Chen', 'Tech Executive', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', 'The Apex GT exceeded every expectation. The acceleration is breathtaking, and the interior craftsmanship is unmatched. It''s not just a car; it''s an experience.', 5),
  ('Sarah Williams', 'Automotive Journalist', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', 'I''ve driven countless luxury vehicles, but the Apex GT stands apart. The perfect balance of raw power and refined elegance. A true masterpiece of engineering.', 5),
  ('James Rodriguez', 'Professional Driver', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', 'From the track to the highway, the Apex GT delivers pure driving joy. The handling is precise, the power is instant, and the comfort is exceptional.', 5),
  ('Emily Zhang', 'Business Owner', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', 'Every detail of the Apex GT speaks to quality. The configurator let me create my perfect car, and the delivery experience was world-class.', 5)
ON CONFLICT DO NOTHING;


