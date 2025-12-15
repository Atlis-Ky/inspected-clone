import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://whmumicggykkvpwgdlzg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobXVtaWNnZ3lra3Zwd2dkbHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4MDU5MzMsImV4cCI6MjA4MTM4MTkzM30.fsRj7r8Wip1Y_5km4rANFiKzOLr-v6YuTfNVyNFW7vc";

export const supabase = createClient(supabaseUrl, supabaseKey);
