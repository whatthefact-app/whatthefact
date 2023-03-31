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
          answer1: string
          answer2: string
          answer3: string
          answer4: string
          country: string
          created_at: string | null
          fun_fact: string
          fun_fact_image_url: string | null
          id: number
          question: string
          question_image_url: string | null
          slug: number
          updated_at: string | null
        }
        Insert: {
          answer1: string
          answer2: string
          answer3: string
          answer4: string
          country: string
          created_at?: string | null
          fun_fact: string
          fun_fact_image_url?: string | null
          id: number
          question: string
          question_image_url?: string | null
          slug: number
          updated_at?: string | null
        }
        Update: {
          answer1?: string
          answer2?: string
          answer3?: string
          answer4?: string
          country?: string
          created_at?: string | null
          fun_fact?: string
          fun_fact_image_url?: string | null
          id?: number
          question?: string
          question_image_url?: string | null
          slug?: number
          updated_at?: string | null
        }
      }
      facts_legacy: {
        Row: {
          answer_1: string
          answer_2: string
          answer_3: string | null
          answer_4: string | null
          answers: string[]
          country: string
          created_at: string | null
          deleted_at: string | null
          fun_fact: string | null
          fun_fact_image_url: string | null
          id: string
          question: string
          question_image_url: string | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          answer_1: string
          answer_2: string
          answer_3?: string | null
          answer_4?: string | null
          answers: string[]
          country: string
          created_at?: string | null
          deleted_at?: string | null
          fun_fact?: string | null
          fun_fact_image_url?: string | null
          id?: string
          question: string
          question_image_url?: string | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          answer_1?: string
          answer_2?: string
          answer_3?: string | null
          answer_4?: string | null
          answers?: string[]
          country?: string
          created_at?: string | null
          deleted_at?: string | null
          fun_fact?: string | null
          fun_fact_image_url?: string | null
          id?: string
          question?: string
          question_image_url?: string | null
          slug?: string
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
