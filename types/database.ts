export interface Database {
  public: {
    Tables: {
      articles: {
        Row: {
          id: string
          title: string
          slug: string
          content: string | null
          thumbnail_path: string | null
          category: string
          author: string
          views: number
          status: "published" | "draft" | "scheduled"
          is_breaking: boolean
          created_at: string
          user_id: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content?: string | null
          thumbnail_path?: string | null
          category: string
          author: string
          views?: number
          status: "published" | "draft" | "scheduled"
          is_breaking?: boolean
          created_at?: string
          user_id: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string | null
          thumbnail_path?: string | null
          category?: string
          author?: string
          views?: number
          status?: "published" | "draft" | "scheduled"
          is_breaking?: boolean
          created_at?: string
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
  }
}
