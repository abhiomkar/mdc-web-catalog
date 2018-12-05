import './drawer.scss';
import {MDCList} from "@material/list";
const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;
import {MDCDrawer} from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
import {MDCTopAppBar} from "@material/top-app-bar";
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});