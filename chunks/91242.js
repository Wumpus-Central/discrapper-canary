n.d(t, { A: () => S });
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
    E = null,
    A = !1;
function h(e, t) {
    return "hidden" === e || t || A;
}
function f(e, t) {
    return I(e, c.YQ, t);
}
function I(e, t, n) {
    if (null == e) return !1;
    let i = u.get(e);
    return !!(0, o.x1)(i) && !!t(i.data) && (u.set(e, { ...i, data: n(i.data) }), !0);
}
function p(e, t) {
    return null != t && e.launchRequestId !== t;
}
function T(e) {
    for (let t of u.values()) if ((0, o.x1)(t) && t.data.iframeId === e) return t;
}
function m(e, t) {
    let n = T(e);
    return null != n && f(n.id, t);
}
class g extends i.Ay.Store {
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
        return T(e);
    }
    isDeviceMuted() {
        return A;
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
let S = new g(r.h, {
    FRAME_LAUNCH_START: function (e) {
        let {
                applicationId: t,
                frameId: n,
                surface: i,
                hostWindowKey: r,
                launch: a,
                invite: s,
                launchRequestId: l,
            } = e,
            d = (0, o.Yf)(i);
        (u.set(n, {
            id: n,
            applicationId: t,
            intent: d,
            surface: i,
            state: "loading",
            data: null,
            hostWindowKey: r ?? null,
            launch: a,
            invite: s,
            launchRequestId: l,
        }),
            d === o.sV.MAIN && (E = n));
    },
    FRAME_LAUNCH: function (e) {
        let { frameId: t, proxyTicket: n, launch: i, invite: r, hostWindowKey: s, launchRequestId: l } = e,
            c = u.get(t);
        if (null == c || p(c, l)) return !1;
        let h = (0, a.Ay)(c.applicationId);
        if (null == h) {
            (u.delete(t), E === t && (E = null));
            return;
        }
        let { id: f, applicationId: I, intent: T, surface: m } = c;
        u.set(t, {
            id: f,
            applicationId: I,
            intent: T,
            surface: m,
            launchRequestId: c.launchRequestId,
            state: "launched",
            data: {
                url: h,
                connectedSince: Date.now(),
                layoutMode: o.y0.FOCUSED,
                activityPanelMode: d.Gd.PANEL,
                proxyTicket: n,
                proxyTicketRefreshing: !1,
                orientationLock: null,
                pipOrientationLock: null,
                runsInBackground: !1,
                poolVisibility: "unpooled",
                muted: A,
                userMuted: !1,
                ..._,
                iframeId: null,
                hostWindowKey: s ?? null,
                launch: i,
                invite: r,
            },
        });
    },
    FRAME_LAUNCH_FAIL: function (e) {
        let { frameId: t, launchRequestId: n } = e,
            i = u.get(t);
        if (null != i && p(i, n)) return !1;
        (u.delete(t), E === t && (E = null));
    },
    FRAME_STOP: function (e) {
        let { frameId: t } = e;
        (u.delete(t), E === t && (E = null), Array.from(u.values()).some(o.x1) || (A = !1));
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
        return f(t, (e) => ({ ...e, layoutMode: n }));
    },
    FRAME_SET_PANEL_MODE: function (e) {
        let { frameId: t, activityPanelMode: n } = e;
        return f(t, (e) => ({ ...e, activityPanelMode: n }));
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { frameId: t, lockState: n, pictureInPictureLockState: i } = e;
        return f(t, (e) => ({
            ...e,
            orientationLock: n ?? null,
            pipOrientationLock: void 0 === i ? e.pipOrientationLock : i,
        }));
    },
    FRAME_SET_RUNS_IN_BACKGROUND: function (e) {
        let { frameId: t, enabled: n } = e;
        return f(t, (e) => ({ ...e, runsInBackground: n }));
    },
    FRAME_SET_PROXY_TICKET_REFRESHING: function (e) {
        let { frameId: t, refreshing: n } = e;
        return f(t, (e) => ({ ...e, proxyTicketRefreshing: n }));
    },
    FRAME_UPDATE_PROXY_TICKET: function (e) {
        let { frameId: t, proxyTicket: n } = e;
        return f(t, (e) => ({ ...e, proxyTicket: n }));
    },
    FRAME_POOL_VISIBILITY_UPDATE: function (e) {
        let { frameId: t, poolVisibility: n } = e;
        return f(t, (e) => ({ ...e, poolVisibility: n, muted: h(n, e.userMuted) }));
    },
    FRAME_SET_USER_MUTED: function (e) {
        let { frameId: t, muted: n } = e;
        return I(
            t,
            (e) => e.userMuted !== n,
            (e) => ({ ...e, userMuted: n, muted: h(e.poolVisibility, n) }),
        );
    },
    FRAME_SET_DEVICE_MUTED: function (e) {
        let { muted: t } = e;
        if (A === t) return !1;
        for (let e of ((A = t), u.values()))
            (0, o.x1)(e) &&
                u.set(e.id, { ...e, data: { ...e.data, muted: h(e.data.poolVisibility, e.data.userMuted) } });
    },
    EMBEDDED_APP_SHIM_STATE_UPDATE: function (e) {
        let { iframeId: t, state: n } = e;
        return m(t, (e) => ({ ...e, audible: n.audible }));
    },
    EMBEDDED_APP_SHIM_DISCONNECT: function (e) {
        let { iframeId: t } = e;
        return m(t, (e) => ({ ...e, ..._ }));
    },
    FRAME_IFRAME_MOUNT: function (e) {
        let { frameId: t, iframeId: n } = e;
        return I(
            t,
            (e) => e.iframeId !== n,
            (e) => ({ ...e, iframeId: n, runsInBackground: !1, ..._ }),
        );
    },
    FRAME_IFRAME_UNMOUNT: function (e) {
        let { frameId: t, iframeId: n } = e;
        return I(
            t,
            (e) => e.iframeId === n,
            (e) => ({ ...e, iframeId: null, runsInBackground: !1, ..._ }),
        );
    },
    FRAME_HOST_WINDOW_MOUNT: function (e) {
        let { frameId: t, windowKey: n } = e;
        return f(t, (e) => ({ ...e, hostWindowKey: n }));
    },
    FRAME_HOST_WINDOW_UNMOUNT: function (e) {
        let { frameId: t, windowKey: n } = e;
        return I(
            t,
            (e) => e.hostWindowKey === n,
            (e) => ({ ...e, hostWindowKey: null }),
        );
    },
    CHANNEL_SELECT: function (e) {
        return f(E, (e) => ({ ...e, layoutMode: o.y0.PIP }));
    },
});
