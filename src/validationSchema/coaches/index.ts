import * as yup from 'yup';
import { noteValidationSchema } from 'validationSchema/notes';

export const coachValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  note: yup.array().of(noteValidationSchema),
});
