"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    s = n(956518),
    a = n(165610),
    o = n(5867);
let l = null,
    u = new Map(),
    c = new Map(),
    d = new Map(),
    _ = new Map();
class f extends i.Ay.Store {
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
        return c.has(e);
    }
    getOrientationLockStateForApp(e) {
        return d.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        return _.get(e) ?? this.getOrientationLockStateForApp(e);
    }
}
let h = new f(r.h, {
    FRAME_LAUNCH_START: function (e) {
        let { applicationId: t } = e;
        u.set(t, !0);
    },
    FRAME_LAUNCH: function (e) {
        let { applicationId: t, proxyTicket: n } = e,
            i = (0, s.Ay)(t);
        null == i
            ? u.delete(t)
            : (u.delete(t),
              (l = {
                  applicationId: t,
                  url: i,
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
        let { applicationId: t, lockState: n, pictureInPictureLockState: i } = e;
        null == n ? d.delete(t) : d.set(t, n), null === i ? _.delete(t) : void 0 !== i && _.set(t, i);
    },
    FRAME_SET_PROXY_TICKET_REFRESHING: function (e) {
        let { applicationId: t, refreshing: n } = e;
        n ? c.set(t, !0) : c.delete(t);
    },
    FRAME_UPDATE_PROXY_TICKET: function (e) {
        let { applicationId: t, proxyTicket: n } = e;
        l?.applicationId === t && (l = { ...l, proxyTicket: n });
    },
    CHANNEL_SELECT: function (e) {
        return null != l && l.layoutMode !== a.y.PIP && ((l = { ...l, layoutMode: a.y.PIP }), !0);
    },
});
