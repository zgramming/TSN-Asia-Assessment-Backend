export interface IAssessmentDetailResponse {
  template_id: number;
  code: string;
  name: string;
  description: string;
  is_active: boolean;
  categories: {
    question_category_id: number;
    template_id: number;
    name: string;
    display_order: number;
    questions:
      | {
          question_id: number;
          question_category_id: number;
          template_id: number;
          label: string;
          type: string;
          max_weight_value: number;
          display_order: number;
          options:
            | {
                option_id: number;
                question_id: number;
                label: string;
                value: string;
                weight: number;
                display_order: number;
              }[]
            | undefined;
        }[]
      | undefined;
  }[];
}
