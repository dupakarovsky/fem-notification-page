import View from "./View";

class PendingNotifications extends View {
   _parentEl = document.querySelector("#pending");

   _generateMarkup() {
      return this._data;
   }
}

export default new PendingNotifications();
