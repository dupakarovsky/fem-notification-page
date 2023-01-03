import View from "./View";
import icon from "url:../images/symbol-defs.svg";

class NotificationView extends View {
   _parentEl = document.querySelector(".notifications-wrapper");

   update(notif) {
      if (notif.classList.contains("unread")) notif.classList.remove("unread");
   }

   updateAll() {
      const allNotifications = Array.from(this._parentEl.children);
      allNotifications.forEach((notification) => notification.classList.remove("unread"));
   }

   addHandlerRenderAsRead(handler) {
      this._parentEl.addEventListener("click", (e) => {
         const notif = e.target.closest(".notification");
         if (!notif) return;

         this._displayMessage(notif);
         handler(notif);
      });
   }

   _displayMessage(notif) {
      const messagewrapper = notif.querySelector(".content__message-wrapper");
      const message = messagewrapper.firstElementChild;

      if (message.innerHTML === "") return;

      const selected = window.getSelection();
      if (selected.focusNode.textContent === message.textContent && selected.type === "Range") return;

      messagewrapper.classList.contains("hidden")
         ? messagewrapper.classList.remove("hidden")
         : messagewrapper.classList.add("hidden");
   }

   _generateMarkup() {
      return this._data.map(this._generateMarkupContent).join("");
   }

   _generateMarkupContent(notif) {
      const imageThumb = notif.imgURL ? `<div class="content__attachment"><img src="${notif.imgURL}"</div>` : "";
      const messageIcon = notif.message
         ? `<div class="content__attachment"><svg class="icon message-icon"><use xlink:href="${icon}#icon-message"></use></svg></div>`
         : "";

      return `
        <li class="notification ${notif.unread ? "unread" : ""}" data-id="${notif.id}">
            <!-- Avatar  -->
            <div class="notification__img-wrapper">
               <img class="notification__avatar" src=${notif.avatarURL} alt="Picture of ${notif.user}" />
            </div>
            <!-- Notification Content  -->
            <div class="content">
               <!-- Header  -->
               <div class="content__header-wrapper">
                  <div class="content__header">
                     <span class="poster" tabindex="0">${notif.user}</span>
                     <span class="action">${notif.action}</span>
                     <span class="subject" ${notif.subject ? 'tabindex="0"' : ""}>${notif.subject}</span>
                     <span class="red-icon" ${notif.unread ? "unread" : ""}></span>
                  </div>
               </div>
               <!-- Timestamp  -->
               <div class="content__timestamp">
                  <span class="timestamp">${notif.timestamp}</span>
               </div>
               <!-- Message  -->
               <div class="content__message-wrapper hidden">
                  <div class="content__message">${notif.message}</div>
               </div>
            </div>
            <!-- Attachment -->
            ${messageIcon}
            ${imageThumb}
        </li>`;
   }
}

export default new NotificationView();
