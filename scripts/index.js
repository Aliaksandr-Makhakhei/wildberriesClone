import { setNightMode } from "./components/nightMode";
import { slider } from "./components/slider";
import { openQuickView } from "./components/quickView";
import { getCards } from "./components/serverDataAPI";
import { addBasketEvents } from "./components/basket"
import {connectSearch} from './components/templateSearch';

document.addEventListener("DOMContentLoaded", app);

function app() {
  slider();
  getCards();
  openQuickView('cards');
  setNightMode();
  connectSearch();
  addBasketEvents()
}
