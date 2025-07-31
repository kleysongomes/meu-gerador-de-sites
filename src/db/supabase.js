// src/db/supabase.js

import { createClient } from '@supabase/supabase-js'

// O Vite busca as variáveis de ambiente do arquivo .env e as expõe aqui
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)