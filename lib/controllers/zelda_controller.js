import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ "trigger" ];

  connect() {
    this.originalTriggerText = this.triggerTarget.innerText;
  }

  play() {
    this.triggerTarget.innerText = "Bingo!";
    this.triggerTarget.setAttribute('disabled', '');
    const sound = new Audio(this.data.get('sound'));
    sound.play();
    sound.addEventListener("ended", () => {
      this.triggerTarget.removeAttribute('disabled');
      this.triggerTarget.innerText = this.originalTriggerText;
    });
  }
}
