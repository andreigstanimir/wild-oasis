import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ghktfqcdumehabrblptr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdoa3RmcWNkdW1laGFicmJscHRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNzU5NjEsImV4cCI6MjAwOTc1MTk2MX0.ushyXUwvYgxUtyTmGslvv_TO9K1Z6n5ei2LEXHyBrkI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
