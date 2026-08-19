"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    a = n(723702),
    s = n(652215);
let l = {
        desktopType: a.isPlatformEmbedded ? s.nRU.ALL : s.nRU.NEVER,
        disableAllSounds: !1,
        disabledSounds: [],
        ttsType: s.aVn.NEVER,
        disableUnreadBadge: !1,
        taskbarFlash: !0,
        notifyMessagesInSelectedChannel: !1,
        screenDowntimeReminder: !0,
    },
    o = l;
function d(e) {
    let { desktopType: t } = e;
    o.desktopType = t;
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
                (t.ttsType = t.ttsType || s.aVn.NEVER),
                null == t.desktopType && (t.desktopType = a.isPlatformEmbedded ? s.nRU.ALL : s.nRU.NEVER),
                t
            );
        },
    ];
    initialize(e) {
        o = { ...l, ...e };
    }
    getUserAgnosticState() {
        return o;
    }
    getDesktopType() {
        return o.desktopType;
    }
    getTTSType() {
        return o.ttsType;
    }
    getDisabledSounds() {
        return o.disabledSounds;
    }
    getDisableAllSounds() {
        return o.disableAllSounds;
    }
    getDisableUnreadBadge() {
        return o.disableUnreadBadge;
    }
    getNotifyMessagesInSelectedChannel() {
        return o.notifyMessagesInSelectedChannel;
    }
    get taskbarFlash() {
        return o.taskbarFlash;
    }
    get screenDowntimeReminder() {
        return o.screenDowntimeReminder;
    }
    isSoundDisabled(e) {
        return o.disableAllSounds || -1 !== o.disabledSounds.indexOf(e);
    }
}
let u = new c(r.h, {
    NOTIFICATIONS_SET_DESKTOP_TYPE: d,
    NOTIFICATIONS_SET_TTS_TYPE: function (e) {
        let { ttsType: t } = e;
        o.ttsType = t;
    },
    NOTIFICATIONS_SET_DISABLED_SOUNDS: function (e) {
        let { sounds: t } = e;
        o.disabledSounds = t;
    },
    NOTIFICATIONS_TOGGLE_ALL_DISABLED: function () {
        o.disableAllSounds = !o.disableAllSounds;
    },
    NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
        let { enabled: t } = e;
        t === s.kCE.BLOCKED ? d({ desktopType: s.nRU.NEVER }) : t === s.kCE.ENABLED && d({ desktopType: s.nRU.ALL });
    },
    NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function (e) {
        let { disableUnreadBadge: t } = e;
        o.disableUnreadBadge = t;
    },
    NOTIFICATIONS_SET_TASKBAR_FLASH: function (e) {
        let { taskbarFlash: t } = e;
        o.taskbarFlash = t;
    },
    NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function (e) {
        let { notify: t } = e;
        o.notifyMessagesInSelectedChannel = t;
    },
    NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER: function (e) {
        let { screenDowntimeReminder: t } = e;
        o.screenDowntimeReminder = t;
    },
});
