export default class View {
   _data;

   render(data) {
      this._data = data;
      const markup = this._generateMarkup();
      this._clear();
      this._parentEl.insertAdjacentHTML("beforeend", markup);
   }

   addHandlerRenderOnLoad(handler) {
      window.addEventListener("DOMContentLoaded", handler);
   }

   _clear() {
      this._parentEl.textContent = "";
   }
}
