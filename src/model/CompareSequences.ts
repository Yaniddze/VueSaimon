import { SimonButton } from '@/model/SimonButton';

export function CompareSequences(seq1: SimonButton[], seq2: SimonButton[]): boolean {
  if (seq1.length !== seq2.length) return false;

  for (let i = 0; i < seq1.length; i++) {
    const first = seq1[i];
    const second = seq2[i];
    if (first.Color !== second.Color) return false;
  }

  return true;
}
