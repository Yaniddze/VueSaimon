export function CompareSequences(seq1: string[], seq2: string[]): boolean {
  if (seq1.length !== seq2.length) return false;

  for (let i = 0; i < seq1.length; i++) {
    if (seq1[i] !== seq2[i]) return false;
  }

  return true;
}
