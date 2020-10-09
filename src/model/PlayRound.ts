import { SimonButton } from '@/model/SimonButton';
import { Difficult } from '@/model/DifficultLevels';

export function PlayRound(seq: SimonButton[], difficult: Difficult): void {
  for (let i = 0; i < seq.length; i++) {
    setTimeout(seq[i].PlayAudio, difficult.value * (i + 1));
  }
}
