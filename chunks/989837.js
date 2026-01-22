n.d(t, {
    A: () => _,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(500049);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = {
    show: !1,
    entrypoint: s.s4.NONE,
    lastShownEntrypoint: s.s4.NONE,
    activeViewType: null,
    activeChannelId: null,
    closeReason: s.Se.DISMISSED,
    initialState: void 0,
};

function c(e) {
    let { entrypoint: t, activeViewType: n, initialState: r, activeChannelId: i } = e;
    return (
        (l.show = !0),
        (l.entrypoint = t),
        (l.lastShownEntrypoint = t),
        (l.closeReason = s.Se.DISMISSED),
        (l.activeViewType = n),
        (l.activeChannelId = i),
        (l.initialState = r),
        !0
    );
}

function u(e) {
    let { closeReason: t = s.Se.DISMISSED } = e;
    return (
        (l.show = !1),
        (l.entrypoint = s.s4.NONE),
        (l.closeReason = t),
        (l.initialState = void 0),
        (l.activeChannelId = null),
        !0
    );
}
class d extends (r = i.Ay.Store) {
    initialize() {}
    shouldShowPopup() {
        return l.show && l.entrypoint === s.s4.TEXT;
    }
    shouldShowModal() {
        return l.show && l.entrypoint === s.s4.VOICE;
    }
    entrypoint() {
        return l.entrypoint;
    }
    lastShownEntrypoint() {
        return l.lastShownEntrypoint;
    }
    activeViewType() {
        return l.activeViewType;
    }
    activeChannelId() {
        var e;
        return null != (e = l.activeChannelId) ? e : null;
    }
    closeReason() {
        return l.closeReason;
    }
    initialState() {
        return l.initialState;
    }
}

function f() {
    u({
        closeReason: s.Se.DISMISSED,
    });
}

function p() {
    u({
        closeReason: s.Se.COMMAND,
    });
}
o(d, "displayName", "AppLauncherStore");
let _ = new d(a.h, {
    APP_LAUNCHER_SHOW: c,
    APP_LAUNCHER_DISMISS: u,
    CONNECTION_OPEN: f,
    LOGOUT: f,
    CHANNEL_SELECT: f,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: p,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: p,
});
