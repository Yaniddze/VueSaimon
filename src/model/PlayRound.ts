import { SimonButton } from "@/model/SimonButton";
import { DifficultLevels } from "@/model/DifficultLevels";

export function PlayRound(seq: SimonButton[], difficult: DifficultLevels): void {
  for (let i = 0; i < seq.length; i++) {
    setTimeout(seq[i].PlayAudio, difficult * (i + 1));
  }
}
