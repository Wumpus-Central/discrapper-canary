"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    a = n(500049);
let s = {
    show: !1,
    entrypoint: a.s4.NONE,
    lastShownEntrypoint: a.s4.NONE,
    activeViewType: null,
    activeChannelId: null,
    closeReason: a.Se.DISMISSED,
    initialState: void 0,
};
function o(e) {
    let { entrypoint: t, activeViewType: n, initialState: r, activeChannelId: i } = e;
    return (
        (s.show = !0),
        (s.entrypoint = t),
        (s.lastShownEntrypoint = t),
        (s.closeReason = a.Se.DISMISSED),
        (s.activeViewType = n),
        (s.activeChannelId = i),
        (s.initialState = r),
        !0
    );
}
function l(e) {
    let { closeReason: t = a.Se.DISMISSED } = e;
    return (
        (s.show = !1),
        (s.entrypoint = a.s4.NONE),
        (s.closeReason = t),
        (s.initialState = void 0),
        (s.activeChannelId = null),
        !0
    );
}
class u extends r.Ay.Store {
    static displayName = "AppLauncherStore";
    initialize() {}
    shouldShowPopup() {
        return s.show && s.entrypoint === a.s4.TEXT;
    }
    shouldShowModal() {
        return s.show && s.entrypoint === a.s4.VOICE;
    }
    entrypoint() {
        return s.entrypoint;
    }
    lastShownEntrypoint() {
        return s.lastShownEntrypoint;
    }
    activeViewType() {
        return s.activeViewType;
    }
    activeChannelId() {
        return s.activeChannelId ?? null;
    }
    closeReason() {
        return s.closeReason;
    }
    initialState() {
        return s.initialState;
    }
}
function c() {
    l({ closeReason: a.Se.DISMISSED });
}
function d() {
    l({ closeReason: a.Se.COMMAND });
}
let _ = new u(i.h, {
    APP_LAUNCHER_SHOW: o,
    APP_LAUNCHER_DISMISS: l,
    CONNECTION_OPEN: c,
    LOGOUT: c,
    CHANNEL_SELECT: c,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: d,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: d,
});
