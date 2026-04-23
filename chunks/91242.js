n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    a = n(956518),
    l = n(165610),
    s = n(5867);
let o = null,
    u = new Map(),
    _ = new Map(),
    E = new Map(),
    A = new Map();
class c extends i.Ay.Store {
    static displayName = "FramesStore";
    getConnectedFrame() {
        return o;
    }
    getFrameLayoutMode() {
        return o?.layoutMode;
    }
    getActivityPanelMode() {
        return o?.activityPanelMode ?? s.Gd.DISCONNECTED;
    }
    isFrameActive() {
        return null != o;
    }
    isLaunchingFrame(e) {
        return null != e ? (u.get(e) ?? !1) : u.size > 0;
    }
    isProxyTicketRefreshing(e) {
        return _.has(e);
    }
    getOrientationLockStateForApp(e) {
        return E.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        return A.get(e) ?? this.getOrientationLockStateForApp(e);
    }
}
let d = new c(r.h, {
    FRAME_LAUNCH_START: function (e) {
        let { applicationId: t } = e;
        u.set(t, !0);
    },
    FRAME_LAUNCH: function (e) {
        let { applicationId: t, proxyTicket: n } = e,
            i = (0, a.Ay)(t);
        null == i
            ? u.delete(t)
            : (u.delete(t),
              (o = {
                  applicationId: t,
                  url: i,
                  connectedSince: Date.now(),
                  layoutMode: l.y.FOCUSED,
                  activityPanelMode: s.Gd.PANEL,
                  proxyTicket: n,
              }));
    },
    FRAME_LAUNCH_FAIL: function (e) {
        let { applicationId: t } = e;
        u.delete(t);
    },
    FRAME_STOP: function (e) {
        let { applicationId: t } = e;
        o?.applicationId === t && (o = null);
    },
    FRAME_UPDATE_LAYOUT_MODE: function (e) {
        let { applicationId: t, layoutMode: n } = e;
        o?.applicationId === t && (o = { ...o, layoutMode: n });
    },
    FRAME_SET_PANEL_MODE: function (e) {
        let { activityPanelMode: t } = e;
        null != o && (o = { ...o, activityPanelMode: t });
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { applicationId: t, lockState: n, pictureInPictureLockState: i } = e;
        null == n ? E.delete(t) : E.set(t, n), null === i ? A.delete(t) : void 0 !== i && A.set(t, i);
    },
    FRAME_SET_PROXY_TICKET_REFRESHING: function (e) {
        let { applicationId: t, refreshing: n } = e;
        n ? _.set(t, !0) : _.delete(t);
    },
    FRAME_UPDATE_PROXY_TICKET: function (e) {
        let { applicationId: t, proxyTicket: n } = e;
        o?.applicationId === t && (o = { ...o, proxyTicket: n });
    },
    CHANNEL_SELECT: function (e) {
        return null != o && o.layoutMode !== l.y.PIP && ((o = { ...o, layoutMode: l.y.PIP }), !0);
    },
});
