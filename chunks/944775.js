"use strict";
n.d(t, { Ax: () => m, Lk: () => N, cu: () => g, hK: () => S });
var i = n(627968);
n(64700);
var r = n(228366),
    a = n(489277),
    s = n(979186),
    l = n(574172),
    o = n(734057),
    d = n(763827),
    c = n(184809),
    u = n(19575),
    _ = n(317084),
    E = n(980504),
    A = n(652215),
    h = n(375708);
let I = {
        width: E.ed.width,
        height: E.ed.height,
        resizable: !1,
        movable: !1,
        alwaysOnTop: !0,
        frame: !1,
        transparent: !0,
        hasShadow: !1,
        skipTaskbar: !0,
        menubar: !0,
        backgroundColor: "#00000000",
        titleBarStyle: null,
    },
    f = E.ed.padding,
    p = I.width - f,
    T = I.height - f;
async function m(e) {
    let t = d.A.getGuildId(),
        n = d.A.getChannelId(),
        r = o.A.getChannel(n);
    if (null == t || null == r) return;
    let { x: a, y: c } = await u.Ay.invoke("GET_MOUSE_COORDINATES");
    (0, l.open)(
        A.MLl.SOUNDBOARD,
        (n) =>
            (0, i.jsx)(s.A, {
                windowKey: n,
                withTitleBar: !1,
                title: h.intl.string(h.t["IiA///"]),
                onBlur: g,
                children: (0, i.jsx)(_.A, {
                    guildId: t,
                    channel: r,
                    width: p,
                    height: T,
                    keepOpen: e,
                    onClose: g,
                    analyticsSource: "global",
                }),
            }),
        { ...I, left: a - I.width / 2, top: c - I.height / 2 },
    );
}
function g() {
    (0, l.close)(A.MLl.SOUNDBOARD);
}
function S(e, t) {
    let n = a.A.isOverlayV3EnabledForPID(t),
        i = c.default.disableClickableRegions;
    n || i || r.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !1, pid: t }),
        r.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: t, enabled: !0, keepOpen: e });
}
function N(e) {
    r.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: e, enabled: !1 });
    let t = a.A.isOverlayV3EnabledForPID(e),
        n = c.default.disableClickableRegions;
    c.default.isLocked(e) || t || n || r.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e });
}
