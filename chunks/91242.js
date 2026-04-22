"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    s = n(956518),
    a = n(165610),
    o = n(5867);
let l = null,
    u = new Map(),
    d = new Map(),
    c = new Map(),
    _ = new Map();
class f extends r.Ay.Store {
    static displayName = "FramesStore";
    getConnectedFrame() {
        return l;
    }
    getFrameLayoutMode() {
        return l?.layoutMode;
    }
    getActivityPanelMode() {
        return l?.activityPanelMode ?? o.Gd.DISCONNECTED;
    }
    isFrameActive() {
        return null != l;
    }
    isLaunchingFrame(e) {
        return null != e ? (u.get(e) ?? !1) : u.size > 0;
    }
    isProxyTicketRefreshing(e) {
        return d.has(e);
    }
    getOrientationLockStateForApp(e) {
        return c.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        return _.get(e) ?? this.getOrientationLockStateForApp(e);
    }
}
let E = new f(i.h, {
    FRAME_LAUNCH_START: function (e) {
        let { applicationId: t } = e;
        u.set(t, !0);
    },
    FRAME_LAUNCH: function (e) {
        let { applicationId: t, proxyTicket: n } = e,
            r = (0, s.Ay)(t);
        null == r
            ? u.delete(t)
            : (u.delete(t),
              (l = {
                  applicationId: t,
                  url: r,
                  connectedSince: Date.now(),
                  layoutMode: a.y.FOCUSED,
                  activityPanelMode: o.Gd.PANEL,
                  proxyTicket: n,
              }));
    },
    FRAME_LAUNCH_FAIL: function (e) {
        let { applicationId: t } = e;
        u.delete(t);
    },
    FRAME_STOP: function (e) {
        let { applicationId: t } = e;
        l?.applicationId === t && (l = null);
    },
    FRAME_UPDATE_LAYOUT_MODE: function (e) {
        let { applicationId: t, layoutMode: n } = e;
        l?.applicationId === t && (l = { ...l, layoutMode: n });
    },
    FRAME_SET_PANEL_MODE: function (e) {
        let { activityPanelMode: t } = e;
        null != l && (l = { ...l, activityPanelMode: t });
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { applicationId: t, lockState: n, pictureInPictureLockState: r } = e;
        null == n ? c.delete(t) : c.set(t, n), null === r ? _.delete(t) : void 0 !== r && _.set(t, r);
    },
    FRAME_SET_PROXY_TICKET_REFRESHING: function (e) {
        let { applicationId: t, refreshing: n } = e;
        n ? d.set(t, !0) : d.delete(t);
    },
    FRAME_UPDATE_PROXY_TICKET: function (e) {
        let { applicationId: t, proxyTicket: n } = e;
        l?.applicationId === t && (l = { ...l, proxyTicket: n });
    },
    CHANNEL_SELECT: function (e) {
        return null != l && l.layoutMode !== a.y.PIP && ((l = { ...l, layoutMode: a.y.PIP }), !0);
    },
});
