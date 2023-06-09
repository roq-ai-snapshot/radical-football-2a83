import * as yup from 'yup';

export const noteValidationSchema = yup.object().shape({
  content: yup.string().required(),
  coach_id: yup.string().nullable().required(),
  player_id: yup.string().nullable().required(),
});
