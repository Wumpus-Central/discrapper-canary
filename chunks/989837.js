"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153),
    s = n(500049);
let a = {
    show: !1,
    entrypoint: s.s4.NONE,
    lastShownEntrypoint: s.s4.NONE,
    activeViewType: null,
    activeChannelId: null,
    closeReason: s.Se.DISMISSED,
    initialState: void 0,
};
function o(e) {
    let { closeReason: t = s.Se.DISMISSED } = e;
    return (
        (a.show = !1),
        (a.entrypoint = s.s4.NONE),
        (a.closeReason = t),
        (a.initialState = void 0),
        (a.activeChannelId = null),
        !0
    );
}
class l extends r.Ay.Store {
    static displayName = "AppLauncherStore";
    initialize() {}
    shouldShowPopup() {
        return a.show && a.entrypoint === s.s4.TEXT;
    }
    shouldShowModal() {
        return a.show && a.entrypoint === s.s4.VOICE;
    }
    entrypoint() {
        return a.entrypoint;
    }
    lastShownEntrypoint() {
        return a.lastShownEntrypoint;
    }
    activeViewType() {
        return a.activeViewType;
    }
    activeChannelId() {
        return a.activeChannelId ?? null;
    }
    closeReason() {
        return a.closeReason;
    }
    initialState() {
        return a.initialState;
    }
}
function u() {
    o({ closeReason: s.Se.DISMISSED });
}
function d() {
    o({ closeReason: s.Se.COMMAND });
}
let c = new l(i.h, {
    APP_LAUNCHER_SHOW: function (e) {
        let { entrypoint: t, activeViewType: n, initialState: r, activeChannelId: i } = e;
        return (
            (a.show = !0),
            (a.entrypoint = t),
            (a.lastShownEntrypoint = t),
            (a.closeReason = s.Se.DISMISSED),
            (a.activeViewType = n),
            (a.activeChannelId = i),
            (a.initialState = r),
            !0
        );
    },
    APP_LAUNCHER_DISMISS: o,
    CONNECTION_OPEN: u,
    LOGOUT: u,
    CHANNEL_SELECT: u,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: d,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: d,
});
