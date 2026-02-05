"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    a = n(723702),
    s = n(652215);
let o = {
        desktopType: a.isPlatformEmbedded ? s.nRU.ALL : s.nRU.NEVER,
        disableAllSounds: !1,
        disabledSounds: [],
        ttsType: s.aVn.NEVER,
        disableUnreadBadge: !1,
        taskbarFlash: !0,
        notifyMessagesInSelectedChannel: !1,
    },
    l = o;
function u(e) {
    let { desktopType: t } = e;
    l.desktopType = t;
}
function c(e) {
    let { sounds: t } = e;
    l.disabledSounds = t;
}
function d() {
    l.disableAllSounds = !l.disableAllSounds;
}
function _(e) {
    let { ttsType: t } = e;
    l.ttsType = t;
}
function f(e) {
    let { disableUnreadBadge: t } = e;
    l.disableUnreadBadge = t;
}
function p(e) {
    let { taskbarFlash: t } = e;
    l.taskbarFlash = t;
}
function h(e) {
    let { notify: t } = e;
    l.notifyMessagesInSelectedChannel = t;
}
function m(e) {
    let { enabled: t } = e;
    t === s.kCE.BLOCKED ? u({ desktopType: s.nRU.NEVER }) : t === s.kCE.ENABLED && u({ desktopType: s.nRU.ALL });
}
class g extends r.Ay.DeviceSettingsStore {
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
    isSoundDisabled(e) {
        return l.disableAllSounds || -1 !== l.disabledSounds.indexOf(e);
    }
}
let E = new g(i.h, {
    NOTIFICATIONS_SET_DESKTOP_TYPE: u,
    NOTIFICATIONS_SET_TTS_TYPE: _,
    NOTIFICATIONS_SET_DISABLED_SOUNDS: c,
    NOTIFICATIONS_TOGGLE_ALL_DISABLED: d,
    NOTIFICATIONS_SET_PERMISSION_STATE: m,
    NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: f,
    NOTIFICATIONS_SET_TASKBAR_FLASH: p,
    NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: h,
});
