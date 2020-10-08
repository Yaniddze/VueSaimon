export class SimonButton {
  constructor(
    color: string, title: string
  ) {
    this.Color = color;
    this.Title = title;
  }

  public Color: string;

  public Title: string;

  public PlayAudio() {
    console.log('Not implemented')
  };
}
