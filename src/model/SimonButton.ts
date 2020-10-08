export class SimonButton {
  constructor(
    color: string, title: string, onPlay: () => void
  ) {
    this.Color = color;
    this.Title = title;
    this.PlayAudio = onPlay;
  }

  public Color: string;

  public Title: string;

  public PlayAudio: () => void;
}
