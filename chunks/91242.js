n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    a = n(956518),
    s = n(165610),
    l = n(5867),
    o = n(818348);
let d = new Map(),
    c = null;
function u(e, t) {
    return _(e, o.YQ, t);
}
function _(e, t, n) {
    if (null == e) return !1;
    let i = d.get(e);
    return !!(0, s.x1)(i) && !!t(i.data) && (d.set(e, { ...i, data: n(i.data) }), !0);
}
class E extends i.Ay.Store {
    static displayName = "FramesStore";
    getFrame(e) {
        if (null != e) return d.get(e);
    }
    getMainFrame() {
        return null != c ? (d.get(c) ?? null) : null;
    }
    getAllFrames() {
        return Array.from(d.values());
    }
    getFrameByIframeId(e) {
        for (let t of d.values()) if ((0, s.x1)(t) && t.data.iframeId === e) return t;
    }
    getFrameBySurface(e, t) {
        return d.get((0, s.VA)(e, t));
    }
}
let A = new E(r.h, {
    FRAME_LAUNCH_START: function (e) {
        let { applicationId: t, frameId: n, surface: i } = e,
            r = (0, s.Yf)(i);
        d.set(n, { id: n, applicationId: t, intent: r, surface: i, state: "loading", data: null }),
            r === s.sV.MAIN && (c = n);
    },
    FRAME_LAUNCH: function (e) {
        let { frameId: t, proxyTicket: n, customId: i, referrerId: r } = e,
            o = d.get(t);
        if (null == o) return;
        let u = (0, a.Ay)(o.applicationId);
        if (null == u) {
            d.delete(t), c === t && (c = null);
            return;
        }
        d.set(t, {
            ...o,
            state: "launched",
            data: {
                url: u,
                connectedSince: Date.now(),
                layoutMode: s.y0.FOCUSED,
                activityPanelMode: l.Gd.PANEL,
                proxyTicket: n,
                proxyTicketRefreshing: !1,
                orientationLock: null,
                pipOrientationLock: null,
                prefersPictureInPictureOnNavigateAway: !1,
                iframeId: null,
                customId: i,
                referrerId: r,
            },
        });
    },
    FRAME_LAUNCH_FAIL: function (e) {
        let { frameId: t } = e;
        d.delete(t), c === t && (c = null);
    },
    FRAME_STOP: function (e) {
        let { frameId: t } = e;
        d.delete(t), c === t && (c = null);
    },
    FRAME_CLEAR_MAIN_SLOT: function (e) {
        let { frameId: t } = e;
        if (c !== t) return !1;
        c = null;
    },
    FRAME_PROMOTE: function (e) {
        let { frameId: t } = e;
        if (null == d.get(t)) return !1;
        c = t;
    },
    FRAME_UPDATE_LAYOUT_MODE: function (e) {
        let { frameId: t, layoutMode: n } = e;
        return u(t, (e) => ({ ...e, layoutMode: n }));
    },
    FRAME_SET_PANEL_MODE: function (e) {
        let { frameId: t, activityPanelMode: n } = e;
        return u(t, (e) => ({ ...e, activityPanelMode: n }));
    },
    FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
        let { frameId: t, lockState: n, pictureInPictureLockState: i } = e;
        return u(t, (e) => ({
            ...e,
            orientationLock: n ?? null,
            pipOrientationLock: void 0 === i ? e.pipOrientationLock : i,
        }));
    },
    FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY: function (e) {
        let { frameId: t, enabled: n } = e;
        return u(t, (e) => ({ ...e, prefersPictureInPictureOnNavigateAway: n }));
    },
    FRAME_SET_PROXY_TICKET_REFRESHING: function (e) {
        let { frameId: t, refreshing: n } = e;
        return u(t, (e) => ({ ...e, proxyTicketRefreshing: n }));
    },
    FRAME_UPDATE_PROXY_TICKET: function (e) {
        let { frameId: t, proxyTicket: n } = e;
        return u(t, (e) => ({ ...e, proxyTicket: n }));
    },
    FRAME_IFRAME_MOUNT: function (e) {
        let { frameId: t, iframeId: n } = e;
        return u(t, (e) => ({
            ...e,
            iframeId: n,
            prefersPictureInPictureOnNavigateAway: e.iframeId === n && e.prefersPictureInPictureOnNavigateAway,
        }));
    },
    FRAME_IFRAME_UNMOUNT: function (e) {
        let { frameId: t, iframeId: n } = e;
        return _(
            t,
            (e) => e.iframeId === n,
            (e) => ({ ...e, iframeId: null, prefersPictureInPictureOnNavigateAway: !1 }),
        );
    },
    CHANNEL_SELECT: function (e) {
        return u(c, (e) => ({ ...e, layoutMode: s.y0.PIP }));
    },
});
