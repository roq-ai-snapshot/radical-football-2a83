import { NoteInterface } from 'interfaces/note';
import { ParentInterface } from 'interfaces/parent';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  skills?: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  note?: NoteInterface[];
  parent?: ParentInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    note?: number;
    parent?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
  skills?: string;
}
