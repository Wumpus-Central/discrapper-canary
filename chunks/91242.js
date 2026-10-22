n.d(t, { A: () => m });
var i = n(17928),
    r = n(73153),
    a = n(956518),
    s = n(477754),
    l = n(197184),
    o = n(165610),
    d = n(5867),
    c = n(818348);
let u = new Map(),
    _ = { audible: !1 },
    E = null;
function A(e, t) {
    return h(e, c.YQ, t);
}
function h(e, t, n) {
    if (null == e) return !1;
    let i = u.get(e);
    return !!(0, o.x1)(i) && !!t(i.data) && (u.set(e, { ...i, data: n(i.data) }), !0);
}
function f(e, t) {
    return null != t && e.launchRequestId !== t;
}
function I(e) {
    for (let t of u.values()) if ((0, o.x1)(t) && t.data.iframeId === e) return t;
}
function p(e, t) {
    let n = I(e);
    return null != n && A(n.id, t);
}
class T extends i.Ay.Store {
    static displayName = "FramesStore";
    getFrame(e) {
        if (null != e) return u.get(e);
    }
    isFramePooled(e) {
        let t = u.get(e);
        return (0, o.x1)(t) && "unpooled" !== t.data.poolVisibility;
    }
    isFrameVisible(e) {
        let t = u.get(e);
        return !(0, o.x1)(t) || "hidden" !== t.data.poolVisibility;
    }
    getFrameByIframeId(e) {
        return I(e);
    }
    getMainFrame() {
        return null != E ? (u.get(E) ?? null) : null;
    }
    getAllFrames() {
        return Array.from(u.values());
    }
    getFrameByEmbeddedContext(e, t) {
        if (e.source.type !== s.f.FRAME) return;
        let n = (0, o.ny)(u.get(e.source.frameId));
        if (null != n && n.data.iframeId === t) return n;
    }
    getFrameBySurface(e, t) {
        return u.get((0, o.VA)(e, t));
    }
    getFramesForSurface(e) {
        return Array.from(u.values()).filter((t) => (0, o.VA)(t.applicationId, e) === t.id);
    }
    getFramesForChannel(e) {
        return Array.from(u.values()).filter((t) => (0, l.A)(t.surface) === e);
    }
}
let m = new T(r.h, {
    FRAME_LAUNCH_START: function (e) {
        let { applicationId: t, frameId: n, surface: i, hostWindowKey: r, launch: a, launchRequestId: s } = e,
            l = (0, o.Yf)(i);
        (u.set(n, {
            id: n,
            applicationId: t,
            intent: l,
            surface: i,
            state: "loading",
            data: null,
            hostWindowKey: r ?? null,
            launch: a,
            launchRequestId: s,
        }),
            l === o.sV.MAIN && (E = n));
    },
    FRAME_LAUNCH: function (e) {
        let { frameId: t, proxyTicket: n, launch: i, hostWindowKey: r, launchRequestId: s } = e,
            l = u.get(t);
        if (null == l || f(l, s)) return !1;
        let c = (0, a.Ay)(l.applicationId);
        if (null == c) {
            (u.delete(t), E === t && (E = null));
            return;
        }
        let { id: A, applicationId: h, intent: I, surface: p } = l;
        u.set(t, {
            id: A,
            applicationId: h,
            intent: I,
            surface: p,
            launchRequestId: l.launchRequestId,
            state: "launched",
            data: {
                url: c,
                connectedSince: Date.now(),
                layoutMode: o.y0.FOCUSED,
                activityPanelMode: d.Gd.PANEL,
                proxyTicket: n,
                proxyTicketRefreshing: !1,
                orientationLock: null,
                pipOrientationLock: null,
                runsInBackground: !1,
                poolVisibility: "unpooled",
                muted: !1,
                userMuted: !1,
                ..._,
                iframeId: null,
                hostWindowKey: r ?? null,
                launch: i,
            },
        });
    },
    FRAME_LAUNCH_FAIL: function (e) {
        let { frameId: t, launchRequestId: n } = e,
            i = u.get(t);
        if (null != i && f(i, n)) return !1;
        (u.delete(t), E === t && (E = null));
    },
    FRAME_STOP: function (e) {
        let { frameId: t } = e;
        (u.delete(t), E === t && (E = null));
    },
    FRAME_CLEAR_MAIN_SLOT: function (e) {
        let { frameId: t } = e;
        if (E !== t) return !1;
        E = null;
    },
    FRAME_PROMOTE: function (e) {
        let { frameId: t } = e;
        if (null == u.get(t)) return !1;
        E = t;
    },
    FRAME_UPDATE_LAYOUT_MODE: function (e) {
        let { frameId: t, layoutMode: n } = e;
        return A(t, (e) => ({ ...e, layoutMode: n }));
    },
    FRAME_SET_PANEL_MODE: function (e) {
        let { frameId: t, activityPanelMode: n } = e;
        return A(t, (e) => ({ ...e, activityPanelMode: n }));
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { frameId: t, lockState: n, pictureInPictureLockState: i } = e;
        return A(t, (e) => ({
            ...e,
            orientationLock: n ?? null,
            pipOrientationLock: void 0 === i ? e.pipOrientationLock : i,
        }));
    },
    FRAME_SET_RUNS_IN_BACKGROUND: function (e) {
        let { frameId: t, enabled: n } = e;
        return A(t, (e) => ({ ...e, runsInBackground: n }));
    },
    FRAME_SET_PROXY_TICKET_REFRESHING: function (e) {
        let { frameId: t, refreshing: n } = e;
        return A(t, (e) => ({ ...e, proxyTicketRefreshing: n }));
    },
    FRAME_UPDATE_PROXY_TICKET: function (e) {
        let { frameId: t, proxyTicket: n } = e;
        return A(t, (e) => ({ ...e, proxyTicket: n }));
    },
    FRAME_POOL_VISIBILITY_UPDATE: function (e) {
        let { frameId: t, poolVisibility: n } = e;
        return A(t, (e) => ({ ...e, poolVisibility: n, muted: "hidden" === n || e.userMuted }));
    },
    FRAME_SET_USER_MUTED: function (e) {
        let { frameId: t, muted: n } = e;
        return h(
            t,
            (e) => e.userMuted !== n,
            (e) => ({ ...e, userMuted: n, muted: "hidden" === e.poolVisibility || n }),
        );
    },
    EMBEDDED_APP_SHIM_STATE_UPDATE: function (e) {
        let { iframeId: t, state: n } = e;
        return p(t, (e) => ({ ...e, audible: n.audible }));
    },
    EMBEDDED_APP_SHIM_DISCONNECT: function (e) {
        let { iframeId: t } = e;
        return p(t, (e) => ({ ...e, ..._ }));
    },
    FRAME_IFRAME_MOUNT: function (e) {
        let { frameId: t, iframeId: n } = e;
        return h(
            t,
            (e) => e.iframeId !== n,
            (e) => ({ ...e, iframeId: n, runsInBackground: !1, ..._ }),
        );
    },
    FRAME_IFRAME_UNMOUNT: function (e) {
        let { frameId: t, iframeId: n } = e;
        return h(
            t,
            (e) => e.iframeId === n,
            (e) => ({ ...e, iframeId: null, runsInBackground: !1, ..._ }),
        );
    },
    FRAME_HOST_WINDOW_MOUNT: function (e) {
        let { frameId: t, windowKey: n } = e;
        return A(t, (e) => ({ ...e, hostWindowKey: n }));
    },
    FRAME_HOST_WINDOW_UNMOUNT: function (e) {
        let { frameId: t, windowKey: n } = e;
        return h(
            t,
            (e) => e.hostWindowKey === n,
            (e) => ({ ...e, hostWindowKey: null }),
        );
    },
    CHANNEL_SELECT: function (e) {
        return A(E, (e) => ({ ...e, layoutMode: o.y0.PIP }));
    },
});
