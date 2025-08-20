export interface IAssessmentCreateResponse {
  message: string;
  is_success: boolean;
  data: {
    respondent_id: number;
    first_name: string;
    last_name: string;
    department: string;
    years_working: number;
  };
}
