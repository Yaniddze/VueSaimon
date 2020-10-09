import { SimonButton } from '@/model/SimonButton';

export function GenerateSequence(
  oldSequence: SimonButton[], buttons: SimonButton[],
): SimonButton[] {
  const rand = Math.floor(Math.random() * buttons.length);
  const btn = buttons[rand];

  const result: SimonButton[] = [...oldSequence, btn];

  return result;
}
