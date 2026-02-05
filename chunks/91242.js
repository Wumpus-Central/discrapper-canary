"use strict";
n.d(t, { A: () => S });
var r = n(311907),
    i = n(73153),
    a = n(956518),
    s = n(165610),
    o = n(5867);
let l = null,
    u = new Map(),
    c = new Map(),
    d = new Map(),
    _ = new Map();
function f(e) {
    let { applicationId: t } = e;
    u.set(t, !0);
}
function p(e) {
    let { applicationId: t, proxyTicket: n } = e,
        r = (0, a.Ay)(t);
    null == r
        ? u.delete(t)
        : (u.delete(t),
          (l = {
              applicationId: t,
              url: r,
              connectedSince: Date.now(),
              layoutMode: s.y.FOCUSED,
              activityPanelMode: o.Gd.PANEL,
              proxyTicket: n,
          }));
}
function h(e) {
    let { applicationId: t } = e;
    u.delete(t);
}
function m(e) {
    let { applicationId: t } = e;
    l?.applicationId === t && (l = null);
}
function g(e) {
    let { applicationId: t, layoutMode: n } = e;
    l?.applicationId === t && (l = { ...l, layoutMode: n });
}
function E(e) {
    let { activityPanelMode: t } = e;
    null != l && (l = { ...l, activityPanelMode: t });
}
function A(e) {
    let { applicationId: t, lockState: n, pictureInPictureLockState: r } = e;
    null == n ? d.delete(t) : d.set(t, n), null === r ? _.delete(t) : void 0 !== r && _.set(t, r);
}
function I(e) {
    let { applicationId: t, refreshing: n } = e;
    n ? c.set(t, !0) : c.delete(t);
}
function T(e) {
    let { applicationId: t, proxyTicket: n } = e;
    l?.applicationId === t && (l = { ...l, proxyTicket: n });
}
class y extends r.Ay.Store {
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
let S = new y(i.h, {
    FRAME_LAUNCH_START: f,
    FRAME_LAUNCH: p,
    FRAME_LAUNCH_FAIL: h,
    FRAME_STOP: m,
    FRAME_UPDATE_LAYOUT_MODE: g,
    FRAME_SET_PANEL_MODE: E,
    FRAME_SET_ORIENTATION_LOCK_STATE: A,
    FRAME_SET_PROXY_TICKET_REFRESHING: I,
    FRAME_UPDATE_PROXY_TICKET: T,
});
