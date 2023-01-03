import * as model from "./model";
import notificationView from "./notificationsView";
import pendingNotificationsView from "./pendingNotifications";
import markallView from "./markallView";

const controlPendingNotifications = function () {
   model.getPendingNotifications();
   pendingNotificationsView.render(model.state.unreadMessages);
};

const controlNotifications = function () {
   model.generateRandomNotificationId();
   notificationView.render(model.state.notifications);
};

const controlMarkNotificationAsRead = function (notification) {
   model.markNotificationAsRead(+notification.dataset.id);

   notificationView.update(notification);

   controlPendingNotifications();
};

const controlMarkAllNotifcationsAsRead = function () {
   model.markAllNotificationsAsRead();
   notificationView.updateAll();
   controlPendingNotifications();
};

const init = function () {
   notificationView.addHandlerRenderOnLoad(controlNotifications);
   pendingNotificationsView.addHandlerRenderOnLoad(controlPendingNotifications);
   notificationView.addHandlerRenderAsRead(controlMarkNotificationAsRead);
   markallView.addHandlerConfirmSelection(controlMarkAllNotifcationsAsRead);
};
init();
