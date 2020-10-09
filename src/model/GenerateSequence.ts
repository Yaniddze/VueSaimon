import { SimonButton } from '@/model/SimonButton';

export function GenerateSequence(buttons: SimonButton[], length: number): SimonButton[] {
  if (length < 1) return [];

  const buttonsLength = buttons.length;

  const result: SimonButton[] = [];

  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * buttonsLength);
    const btn = buttons[rand];
    result.push(btn);
  }

  return result;
}
