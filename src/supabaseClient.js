import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://byflyenbgczzyqvcpjng.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5Zmx5ZW5iZ2N6enlxdmNwam5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4ODQ2MjQsImV4cCI6MjA2OTQ2MDYyNH0.qo4OW1sw535u33yVMAg_oHkjfmjh2kNqRVLUbz3NnIQ';
export const supabase = createClient(supabaseUrl, supabaseKey);
