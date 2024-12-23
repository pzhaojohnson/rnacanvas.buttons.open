import * as styles from './OpenButton.module.css';

export class OpenButton {
  readonly domNode = document.createElement('button');

  constructor() {
    this.domNode.classList.add(styles['open-button']);

    this.domNode.textContent = 'Open';
  }
}
