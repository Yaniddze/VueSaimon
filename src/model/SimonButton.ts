export class SimonButton {
  constructor(color: string, sound: HTMLAudioElement, title: string) {
    this.Color = color;
    this.audio = sound;
    this.Title = title;
  }

  public Color: string;

  public Title: string;

  private audio: HTMLAudioElement;

  public PlayAudio() {
    this.audio.play();
  }
}
