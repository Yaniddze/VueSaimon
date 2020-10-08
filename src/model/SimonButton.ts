export class SimonButton {
  constructor(
    color: string, sound: HTMLAudioElement, title: string, onPlay: () => void
  ) {
    this.Color = color;
    this.audio = sound;
    this.Title = title;
    this.PlayAudio = onPlay;
  }

  public Color: string;

  public Title: string;

  private audio: HTMLAudioElement;

  public PlayAudio: () => void;
}
