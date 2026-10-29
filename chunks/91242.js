n.d(t, { A: () => N });
var i = n(17928),
    r = n(73153),
    a = n(956518),
    s = n(477754),
    l = n(197184),
    o = n(998218),
    d = n(165610),
    c = n(5867),
    u = n(818348);
let _ = new Map(),
    E = { audible: !1 },
    A = null,
    h = !1;
function f(e, t) {
    return "hidden" === e || t || h;
}
function I(e, t) {
    return p(e, u.YQ, t);
}
function p(e, t, n) {
    if (null == e) return !1;
    let i = _.get(e);
    return !!(0, d.x1)(i) && !!t(i.data) && (_.set(e, { ...i, data: n(i.data) }), !0);
}
function T(e, t) {
    return null != t && e.launchRequestId !== t;
}
function m(e) {
    for (let t of _.values()) if ((0, d.x1)(t) && t.data.iframeId === e) return t;
}
function g(e, t) {
    let n = m(e);
    return null != n && I(n.id, t);
}
class S extends i.Ay.Store {
    static displayName = "FramesStore";
    getFrame(e) {
        if (null != e) return _.get(e);
    }
    isFramePooled(e) {
        let t = _.get(e);
        return (0, d.x1)(t) && "unpooled" !== t.data.poolVisibility;
    }
    isFrameVisible(e) {
        let t = _.get(e);
        return !(0, d.x1)(t) || "hidden" !== t.data.poolVisibility;
    }
    getFrameByIframeId(e) {
        return m(e);
    }
    isDeviceMuted() {
        return h;
    }
    getMainFrame() {
        return null != A ? (_.get(A) ?? null) : null;
    }
    getAllFrames() {
        return Array.from(_.values());
    }
    getFrameByEmbeddedContext(e, t) {
        if (e.source.type !== s.f.FRAME) return;
        let n = (0, d.ny)(_.get(e.source.frameId));
        if (null != n && n.data.iframeId === t) return n;
    }
    getFrameBySurface(e, t) {
        return _.get((0, d.VA)(e, t));
    }
    getFramesForSurface(e) {
        return Array.from(_.values()).filter((t) => (0, d.VA)(t.applicationId, e) === t.id);
    }
    getFramesForChannel(e) {
        return Array.from(_.values()).filter((t) => (0, l.A)(t.surface) === e);
    }
}
let N = new S(r.h, {
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
            o = (0, d.Yf)(i);
        (_.set(n, {
            id: n,
            applicationId: t,
            intent: o,
            surface: i,
            state: "loading",
            data: null,
            hostWindowKey: r ?? null,
            launch: a,
            invite: s,
            launchRequestId: l,
        }),
            o === d.sV.MAIN && (A = n));
    },
    FRAME_LAUNCH: function (e) {
        let { frameId: t, proxyTicket: n, launch: i, invite: r, hostWindowKey: s, launchRequestId: l } = e,
            u = _.get(t);
        if (null == u || T(u, l)) return !1;
        let f = (0, a.Ay)(u.applicationId),
            I = null != f && null != i.path ? o.A.toURLSafe(i.path, f)?.toString() : f;
        if (null == I) {
            (_.delete(t), A === t && (A = null));
            return;
        }
        let { id: p, applicationId: m, intent: g, surface: S } = u;
        _.set(t, {
            id: p,
            applicationId: m,
            intent: g,
            surface: S,
            launchRequestId: u.launchRequestId,
            state: "launched",
            data: {
                url: I,
                connectedSince: Date.now(),
                layoutMode: d.y0.FOCUSED,
                activityPanelMode: c.Gd.PANEL,
                proxyTicket: n,
                proxyTicketRefreshing: !1,
                orientationLock: null,
                pipOrientationLock: null,
                runsInBackground: !1,
                poolVisibility: "unpooled",
                muted: h,
                userMuted: !1,
                ...E,
                iframeId: null,
                hostWindowKey: s ?? null,
                launch: i,
                invite: r,
            },
        });
    },
    FRAME_LAUNCH_FAIL: function (e) {
        let { frameId: t, launchRequestId: n } = e,
            i = _.get(t);
        if (null != i && T(i, n)) return !1;
        (_.delete(t), A === t && (A = null));
    },
    FRAME_STOP: function (e) {
        let { frameId: t } = e;
        (_.delete(t), A === t && (A = null), Array.from(_.values()).some(d.x1) || (h = !1));
    },
    FRAME_CLEAR_MAIN_SLOT: function (e) {
        let { frameId: t } = e;
        if (A !== t) return !1;
        A = null;
    },
    FRAME_PROMOTE: function (e) {
        let { frameId: t } = e;
        if (null == _.get(t)) return !1;
        A = t;
    },
    FRAME_UPDATE_LAYOUT_MODE: function (e) {
        let { frameId: t, layoutMode: n } = e;
        return I(t, (e) => ({ ...e, layoutMode: n }));
    },
    FRAME_SET_PANEL_MODE: function (e) {
        let { frameId: t, activityPanelMode: n } = e;
        return I(t, (e) => ({ ...e, activityPanelMode: n }));
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { frameId: t, lockState: n, pictureInPictureLockState: i } = e;
        return I(t, (e) => ({
            ...e,
            orientationLock: n ?? null,
            pipOrientationLock: void 0 === i ? e.pipOrientationLock : i,
        }));
    },
    FRAME_SET_RUNS_IN_BACKGROUND: function (e) {
        let { frameId: t, enabled: n } = e;
        return I(t, (e) => ({ ...e, runsInBackground: n }));
    },
    FRAME_SET_PROXY_TICKET_REFRESHING: function (e) {
        let { frameId: t, refreshing: n } = e;
        return I(t, (e) => ({ ...e, proxyTicketRefreshing: n }));
    },
    FRAME_UPDATE_PROXY_TICKET: function (e) {
        let { frameId: t, proxyTicket: n } = e;
        return I(t, (e) => ({ ...e, proxyTicket: n }));
    },
    FRAME_POOL_VISIBILITY_UPDATE: function (e) {
        let { frameId: t, poolVisibility: n } = e;
        return I(t, (e) => ({ ...e, poolVisibility: n, muted: f(n, e.userMuted) }));
    },
    FRAME_SET_USER_MUTED: function (e) {
        let { frameId: t, muted: n } = e;
        return p(
            t,
            (e) => e.userMuted !== n,
            (e) => ({ ...e, userMuted: n, muted: f(e.poolVisibility, n) }),
        );
    },
    FRAME_SET_DEVICE_MUTED: function (e) {
        let { muted: t } = e;
        if (h === t) return !1;
        for (let e of ((h = t), _.values()))
            (0, d.x1)(e) &&
                _.set(e.id, { ...e, data: { ...e.data, muted: f(e.data.poolVisibility, e.data.userMuted) } });
    },
    EMBEDDED_APP_SHIM_STATE_UPDATE: function (e) {
        let { iframeId: t, state: n } = e;
        return g(t, (e) => ({ ...e, audible: n.audible }));
    },
    EMBEDDED_APP_SHIM_DISCONNECT: function (e) {
        let { iframeId: t } = e;
        return g(t, (e) => ({ ...e, ...E }));
    },
    FRAME_IFRAME_MOUNT: function (e) {
        let { frameId: t, iframeId: n } = e;
        return p(
            t,
            (e) => e.iframeId !== n,
            (e) => ({ ...e, iframeId: n, runsInBackground: !1, ...E }),
        );
    },
    FRAME_IFRAME_UNMOUNT: function (e) {
        let { frameId: t, iframeId: n } = e;
        return p(
            t,
            (e) => e.iframeId === n,
            (e) => ({ ...e, iframeId: null, runsInBackground: !1, ...E }),
        );
    },
    FRAME_HOST_WINDOW_MOUNT: function (e) {
        let { frameId: t, windowKey: n } = e;
        return I(t, (e) => ({ ...e, hostWindowKey: n }));
    },
    FRAME_HOST_WINDOW_UNMOUNT: function (e) {
        let { frameId: t, windowKey: n } = e;
        return p(
            t,
            (e) => e.hostWindowKey === n,
            (e) => ({ ...e, hostWindowKey: null }),
        );
    },
    CHANNEL_SELECT: function (e) {
        return I(A, (e) => ({ ...e, layoutMode: d.y0.PIP }));
    },
});
