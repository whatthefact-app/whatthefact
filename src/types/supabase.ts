export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      facts: {
        Row: {
          answers: string[]
          created_at: string | null
          deleted_at: string | null
          fun_fact: string | null
          fun_fact_image_url: string | null
          id: string
          question: string
          question_image_url: string | null
          slug: string | null
          updated_at: string | null
        }
        Insert: {
          answers: string[]
          created_at?: string | null
          deleted_at?: string | null
          fun_fact?: string | null
          fun_fact_image_url?: string | null
          id?: string
          question: string
          question_image_url?: string | null
          slug?: string | null
          updated_at?: string | null
        }
        Update: {
          answers?: string[]
          created_at?: string | null
          deleted_at?: string | null
          fun_fact?: string | null
          fun_fact_image_url?: string | null
          id?: string
          question?: string
          question_image_url?: string | null
          slug?: string | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
