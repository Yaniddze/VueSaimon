export class SimonButton {
  constructor(color: string, sound: HTMLAudioElement) {
    this.Color = color;
    this.audio = sound;
  }

  public Color: string;

  private audio: HTMLAudioElement;

  public PlayAudio() {
    this.audio.play();
  }
}
