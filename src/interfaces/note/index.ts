import { CoachInterface } from 'interfaces/coach';
import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface NoteInterface {
  id?: string;
  content: string;
  coach_id: string;
  player_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  coach?: CoachInterface;
  player?: PlayerInterface;
  _count?: {};
}

export interface NoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  coach_id?: string;
  player_id?: string;
}
