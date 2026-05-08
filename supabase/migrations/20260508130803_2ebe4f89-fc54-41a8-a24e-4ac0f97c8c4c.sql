
-- Trigger function for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- regions
CREATE TABLE public.regions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  code TEXT NOT NULL,
  name TEXT NOT NULL,
  sub TEXT NOT NULL,
  tagline TEXT NOT NULL,
  intro TEXT NOT NULL,
  geography TEXT NOT NULL,
  accent_class TEXT NOT NULL DEFAULT '',
  history JSONB NOT NULL DEFAULT '[]'::jsonb,
  heritages JSONB NOT NULL DEFAULT '[]'::jsonb,
  cuisine JSONB NOT NULL DEFAULT '[]'::jsonb,
  intangible JSONB NOT NULL DEFAULT '[]'::jsonb,
  intangible_note TEXT NOT NULL DEFAULT '',
  landmarks JSONB NOT NULL DEFAULT '[]'::jsonb,
  landmarks_note TEXT NOT NULL DEFAULT '',
  tangible JSONB NOT NULL DEFAULT '[]'::jsonb,
  tangible_note TEXT NOT NULL DEFAULT '',
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.regions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Regions are viewable by everyone"
  ON public.regions FOR SELECT
  USING (true);

CREATE TRIGGER update_regions_updated_at
  BEFORE UPDATE ON public.regions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- heritages
CREATE TABLE public.heritages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  img_key TEXT NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  year TEXT NOT NULL,
  unesco_type TEXT NOT NULL,
  region TEXT NOT NULL,
  origin TEXT NOT NULL,
  short_desc TEXT NOT NULL,
  long_desc JSONB NOT NULL DEFAULT '[]'::jsonb,
  history JSONB NOT NULL DEFAULT '[]'::jsonb,
  characteristics JSONB NOT NULL DEFAULT '[]'::jsonb,
  preservation TEXT NOT NULL DEFAULT '',
  extended JSONB NOT NULL DEFAULT '[]'::jsonb,
  "references" JSONB NOT NULL DEFAULT '[]'::jsonb,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.heritages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Heritages are viewable by everyone"
  ON public.heritages FOR SELECT
  USING (true);

CREATE INDEX idx_heritages_display_order ON public.heritages(display_order);

CREATE TRIGGER update_heritages_updated_at
  BEFORE UPDATE ON public.heritages
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- heritage_feedback
CREATE TABLE public.heritage_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  heritage_slug TEXT NOT NULL,
  name TEXT,
  message TEXT NOT NULL,
  reaction TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.heritage_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit heritage feedback"
  ON public.heritage_feedback FOR INSERT
  WITH CHECK (
    length(message) BETWEEN 1 AND 2000
    AND length(coalesce(name, '')) <= 120
    AND length(heritage_slug) BETWEEN 1 AND 120
  );

CREATE INDEX idx_heritage_feedback_slug ON public.heritage_feedback(heritage_slug, created_at DESC);

-- site_feedback
CREATE TABLE public.site_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  rating SMALLINT NOT NULL DEFAULT 5,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.site_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit site feedback"
  ON public.site_feedback FOR INSERT
  WITH CHECK (
    rating BETWEEN 1 AND 5
    AND length(message) BETWEEN 1 AND 2000
    AND length(coalesce(name, '')) <= 120
  );
