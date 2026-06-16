"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(723702),
    a = n(652215);
let o = {
        desktopType: s.isPlatformEmbedded ? a.nRU.ALL : a.nRU.NEVER,
        disableAllSounds: !1,
        disabledSounds: [],
        ttsType: a.aVn.NEVER,
        disableUnreadBadge: !1,
        taskbarFlash: !0,
        notifyMessagesInSelectedChannel: !1,
        screenDowntimeReminder: !0,
    },
    l = o;
function u(e) {
    let { desktopType: t } = e;
    l.desktopType = t;
}
class c extends i.Ay.DeviceSettingsStore {
    static displayName = "NotificationSettingsStore";
    static persistKey = "notifications";
    static migrations = [
        (e) => {
            let t = { ...e };
            return (
                (t.disabledSounds = t.disabledSounds || []),
                (t.disableUnreadBadge = t.disableUnreadBadge || !1),
                (t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash),
                (t.ttsType = t.ttsType || a.aVn.NEVER),
                null == t.desktopType && (t.desktopType = s.isPlatformEmbedded ? a.nRU.ALL : a.nRU.NEVER),
                t
            );
        },
    ];
    initialize(e) {
        l = { ...o, ...e };
    }
    getUserAgnosticState() {
        return l;
    }
    getDesktopType() {
        return l.desktopType;
    }
    getTTSType() {
        return l.ttsType;
    }
    getDisabledSounds() {
        return l.disabledSounds;
    }
    getDisableAllSounds() {
        return l.disableAllSounds;
    }
    getDisableUnreadBadge() {
        return l.disableUnreadBadge;
    }
    getNotifyMessagesInSelectedChannel() {
        return l.notifyMessagesInSelectedChannel;
    }
    get taskbarFlash() {
        return l.taskbarFlash;
    }
    get screenDowntimeReminder() {
        return l.screenDowntimeReminder;
    }
    isSoundDisabled(e) {
        return l.disableAllSounds || -1 !== l.disabledSounds.indexOf(e);
    }
}
let d = new c(r.h, {
    NOTIFICATIONS_SET_DESKTOP_TYPE: u,
    NOTIFICATIONS_SET_TTS_TYPE: function (e) {
        let { ttsType: t } = e;
        l.ttsType = t;
    },
    NOTIFICATIONS_SET_DISABLED_SOUNDS: function (e) {
        let { sounds: t } = e;
        l.disabledSounds = t;
    },
    NOTIFICATIONS_TOGGLE_ALL_DISABLED: function () {
        l.disableAllSounds = !l.disableAllSounds;
    },
    NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
        let { enabled: t } = e;
        t === a.kCE.BLOCKED ? u({ desktopType: a.nRU.NEVER }) : t === a.kCE.ENABLED && u({ desktopType: a.nRU.ALL });
    },
    NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function (e) {
        let { disableUnreadBadge: t } = e;
        l.disableUnreadBadge = t;
    },
    NOTIFICATIONS_SET_TASKBAR_FLASH: function (e) {
        let { taskbarFlash: t } = e;
        l.taskbarFlash = t;
    },
    NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function (e) {
        let { notify: t } = e;
        l.notifyMessagesInSelectedChannel = t;
    },
    NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER: function (e) {
        let { screenDowntimeReminder: t } = e;
        l.screenDowntimeReminder = t;
    },
});
