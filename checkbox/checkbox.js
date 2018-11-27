import {MDCCheckbox} from '@material/checkbox/index';
import './checkbox.scss';

const checkboxes = document.querySelectorAll('.mdc-checkbox');

for (const checkbox of checkboxes) {
  new MDCCheckbox(checkbox);
}

const indeterminateCheckboxInputEl
    = document.querySelector('.demo-checkbox-indeterimate-input');
indeterminateCheckboxInputEl.indeterminate = true;