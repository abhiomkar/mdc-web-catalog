import {MDCRipple} from '@material/ripple';
import './button.scss';

const buttons = document.querySelectorAll('.mdc-button');

for (const button of buttons) {
  new MDCRipple(button);
}
