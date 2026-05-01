n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    a = n(956518),
    l = n(165610),
    s = n(5867);
let E = null,
    _ = new Map(),
    o = new Map(),
    u = new Map(),
    A = new Map();
class d extends i.Ay.Store {
    static displayName = "FramesStore";
    getConnectedFrame() {
        return E;
    }
    getFrameLayoutMode() {
        return E?.layoutMode;
    }
    getActivityPanelMode() {
        return E?.activityPanelMode ?? s.Gd.DISCONNECTED;
    }
    isFrameActive() {
        return null != E;
    }
    isLaunchingFrame(e) {
        return null != e ? (_.get(e) ?? !1) : _.size > 0;
    }
    isProxyTicketRefreshing(e) {
        return o.has(e);
    }
    getOrientationLockStateForApp(e) {
        return u.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        return A.get(e) ?? this.getOrientationLockStateForApp(e);
    }
}
let c = new d(r.h, {
    FRAME_LAUNCH_START: function (e) {
        let { applicationId: t } = e;
        _.set(t, !0);
    },
    FRAME_LAUNCH: function (e) {
        let { applicationId: t, proxyTicket: n } = e,
            i = (0, a.Ay)(t);
        null == i
            ? _.delete(t)
            : (_.delete(t),
              (E = {
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
        _.delete(t);
    },
    FRAME_STOP: function (e) {
        let { applicationId: t } = e;
        E?.applicationId === t && (E = null);
    },
    FRAME_UPDATE_LAYOUT_MODE: function (e) {
        let { applicationId: t, layoutMode: n } = e;
        E?.applicationId === t && (E = { ...E, layoutMode: n });
    },
    FRAME_SET_PANEL_MODE: function (e) {
        let { activityPanelMode: t } = e;
        null != E && (E = { ...E, activityPanelMode: t });
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { applicationId: t, lockState: n, pictureInPictureLockState: i } = e;
        null == n ? u.delete(t) : u.set(t, n), null === i ? A.delete(t) : void 0 !== i && A.set(t, i);
    },
    FRAME_SET_PROXY_TICKET_REFRESHING: function (e) {
        let { applicationId: t, refreshing: n } = e;
        n ? o.set(t, !0) : o.delete(t);
    },
    FRAME_UPDATE_PROXY_TICKET: function (e) {
        let { applicationId: t, proxyTicket: n } = e;
        E?.applicationId === t && (E = { ...E, proxyTicket: n });
    },
    CHANNEL_SELECT: function (e) {
        return null != E && E.layoutMode !== l.y.PIP && ((E = { ...E, layoutMode: l.y.PIP }), !0);
    },
});
