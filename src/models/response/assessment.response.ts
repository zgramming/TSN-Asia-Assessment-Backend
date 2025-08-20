export interface IAssessmentResponse {
  template_id: number;
  code: string;
  name: string;
  description: string;
  is_active: boolean;
  created_at?: Date;
  updated_at?: Date;
}
