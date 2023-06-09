import * as yup from 'yup';
import { noteValidationSchema } from 'validationSchema/notes';
import { parentValidationSchema } from 'validationSchema/parents';

export const playerValidationSchema = yup.object().shape({
  skills: yup.string(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  note: yup.array().of(noteValidationSchema),
  parent: yup.array().of(parentValidationSchema),
});
