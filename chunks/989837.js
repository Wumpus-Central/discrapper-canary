n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
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
class o extends i.Ay.Store {
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
function d() {
    l({ closeReason: a.Se.DISMISSED });
}
function c() {
    l({ closeReason: a.Se.COMMAND });
}
let u = new o(r.h, {
    APP_LAUNCHER_SHOW: function (e) {
        let { entrypoint: t, activeViewType: n, initialState: i, activeChannelId: r } = e;
        return (
            (s.show = !0),
            (s.entrypoint = t),
            (s.lastShownEntrypoint = t),
            (s.closeReason = a.Se.DISMISSED),
            (s.activeViewType = n),
            (s.activeChannelId = r),
            (s.initialState = i),
            !0
        );
    },
    APP_LAUNCHER_DISMISS: l,
    CONNECTION_OPEN: d,
    LOGOUT: d,
    CHANNEL_SELECT: d,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: c,
    APP_LAUNCHER_SET_ACTIVE_COMMAND: c,
});
