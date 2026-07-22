"use strict";
n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    a = n(956518),
    s = n(165610),
    l = n(5867);
let o = null,
    d = new Map(),
    c = new Map(),
    u = new Map(),
    _ = new Map();
class E extends i.Ay.Store {
    static displayName = "FramesStore";
    getConnectedFrame() {
        return o;
    }
    getFrameLayoutMode() {
        return o?.layoutMode;
    }
    getActivityPanelMode() {
        return o?.activityPanelMode ?? l.Gd.DISCONNECTED;
    }
    isFrameActive() {
        return null != o;
    }
    isLaunchingFrame(e) {
        return null != e ? (d.get(e) ?? !1) : d.size > 0;
    }
    isProxyTicketRefreshing(e) {
        return c.has(e);
    }
    getOrientationLockStateForApp(e) {
        return u.get(e);
    }
    getPipOrientationLockStateForApp(e) {
        return _.get(e) ?? this.getOrientationLockStateForApp(e);
    }
}
let A = new E(r.h, {
    FRAME_LAUNCH_START: function (e) {
        let { applicationId: t } = e;
        d.set(t, !0);
    },
    FRAME_LAUNCH: function (e) {
        let { applicationId: t, proxyTicket: n, channelId: i } = e,
            r = (0, a.Ay)(t);
        null == r
            ? d.delete(t)
            : (d.delete(t),
              (o = {
                  applicationId: t,
                  url: r,
                  connectedSince: Date.now(),
                  layoutMode: s.y.FOCUSED,
                  activityPanelMode: l.Gd.PANEL,
                  proxyTicket: n,
                  channelId: i,
              }));
    },
    FRAME_LAUNCH_FAIL: function (e) {
        let { applicationId: t } = e;
        d.delete(t);
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
        null == n ? u.delete(t) : u.set(t, n), null === i ? _.delete(t) : void 0 !== i && _.set(t, i);
    },
    FRAME_SET_PROXY_TICKET_REFRESHING: function (e) {
        let { applicationId: t, refreshing: n } = e;
        n ? c.set(t, !0) : c.delete(t);
    },
    FRAME_UPDATE_PROXY_TICKET: function (e) {
        let { applicationId: t, proxyTicket: n } = e;
        o?.applicationId === t && (o = { ...o, proxyTicket: n });
    },
    CHANNEL_SELECT: function (e) {
        return null != o && o.layoutMode !== s.y.PIP && ((o = { ...o, layoutMode: s.y.PIP }), !0);
    },
});
