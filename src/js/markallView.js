import View from "./View";

class MarkAllView extends View {
   _parentEl = document.querySelector(".popup");
   _btnMark = document.getElementById("mark-all");
   _popupBox = document.querySelector(".popup__box");

   constructor() {
      super();
      this._addHandlerDisplayConfirmationWindow();
   }

   _displayWindow() {
      this._parentEl.classList.remove("hidden");
   }

   _hideWindow() {
      this._parentEl.classList.add("hidden");
   }

   _addHandlerDisplayConfirmationWindow() {
      this._btnMark.addEventListener("click", this._displayWindow.bind(this));
   }

   addHandlerConfirmSelection(handler) {
      this._popupBox.addEventListener("click", (e) => {
         const btn = e.target.closest(".confirm__button");
         if (!btn) return;

         if (btn.id === "confirm-no") {
            this._hideWindow();
         } else {
            this._hideWindow();
            handler();
         }
      });
   }
}

export default new MarkAllView();
