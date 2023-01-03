export const state = {
   notifications: [
      {
         user: "Mark Webber",
         avatarURL: "avatar-mark-webber.webp",
         action: "reacted to your recent post",
         subject: "My first tournament today!",
         message: "",
         imgURL: "",
         timestamp: "1m ago",
         unread: true,
      },
      {
         user: "Angela Gray",
         avatarURL: "avatar-angela-gray.webp",
         action: "followed you",
         subject: "",
         message: "",
         imgURL: "",
         timestamp: "5m ago",
         unread: true,
      },
      {
         user: "Jacob Thompson",
         avatarURL: "avatar-jacob-thompson.webp",
         action: "has joined your group",
         subject: "Chess Club",
         message: "",
         imgURL: "",
         timestamp: "1 day ago",
         unread: true,
      },
      {
         user: "Rizky Hasanuddin",
         avatarURL: "avatar-rizky-hasanuddin.webp",
         action: "has sent you a private message",
         subject: "",
         message:
            "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
         imgURL: "",
         timestamp: "5 days ago",
         unread: true,
      },
      {
         user: "Kimberly Smith",
         avatarURL: "avatar-kimberly-smith.webp",
         action: "commented on your picture",
         subject: "",
         message: "",
         imgURL: "image-chess.webp",
         timestamp: "1 week ago",
         unread: false,
      },
      {
         user: "Nathan Peterson",
         avatarURL: "avatar-nathan-peterson.webp",
         action: "reacted to your recent post",
         message: "",
         subject: "5 end-game strategies to increase your win rate",
         imgURL: "",
         timestamp: "2 weeks ago",
         unread: false,
      },

      {
         user: "Anna Kim",
         avatarURL: "avatar-anna-kim.webp",
         action: "left the group",
         subject: "Chess Club",
         message: "",
         imgURL: "",
         timestamp: "2 weeks ago",
         unread: false,
      },
   ],
   unreadMessages: 0,
};

export const generateRandomNotificationId = function () {
   state.notifications.forEach((notif) => {
      let id = Math.ceil((Math.random() * Date.now()) / 100000);
      notif.id = id;
   });
};

export const getPendingNotifications = function () {
   const unread = state.notifications.filter((notification) => notification.unread === true);
   state.unreadMessages = unread.length;
};

export const markNotificationAsRead = function (id) {
   const clicked = state.notifications.find((notif) => notif.id === id);
   clicked.unread = false;
};

export const markAllNotificationsAsRead = function () {
   state.notifications.forEach((notif) => (notif.unread = false));
};
