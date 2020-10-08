import { SimonButton } from "@/model/SimonButton";

export function GenerateSequence(buttons: SimonButton[], length: number): string[] {
  if (length < 1) return [];

  const buttonsLength = buttons.length;

  const result: string[] = [];

  for (let i = 0; i < buttonsLength; i++) {
    const rand = Math.floor(Math.random() * buttonsLength);
    const title = buttons[rand].Title;
    result.push(title);
  }

  return result;
}
