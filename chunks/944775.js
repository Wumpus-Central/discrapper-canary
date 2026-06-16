"use strict";
n.d(t, { Ax: () => I, Lk: () => y, cu: () => T, hK: () => S });
var i = n(627968);
n(64700);
var r = n(228366),
    s = n(489277),
    a = n(979186),
    o = n(574172),
    l = n(734057),
    u = n(763827),
    c = n(184809),
    d = n(19575),
    _ = n(317084),
    h = n(980504),
    f = n(652215),
    p = n(375708);
let E = {
        width: h.ed.width,
        height: h.ed.height,
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
    m = h.ed.padding,
    g = E.width - m,
    A = E.height - m;
async function I(e) {
    let t = u.A.getGuildId(),
        n = u.A.getChannelId(),
        r = l.A.getChannel(n);
    if (null == t || null == r) return;
    let { x: s, y: c } = await d.Ay.invoke("GET_MOUSE_COORDINATES");
    (0, o.open)(
        f.MLl.SOUNDBOARD,
        (n) =>
            (0, i.jsx)(a.A, {
                windowKey: n,
                withTitleBar: !1,
                title: p.intl.string(p.t["IiA///"]),
                onBlur: T,
                children: (0, i.jsx)(_.A, {
                    guildId: t,
                    channel: r,
                    width: g,
                    height: A,
                    keepOpen: e,
                    onClose: T,
                    analyticsSource: "global",
                }),
            }),
        { ...E, left: s - E.width / 2, top: c - E.height / 2 },
    );
}
function T() {
    (0, o.close)(f.MLl.SOUNDBOARD);
}
function S(e, t) {
    let n = s.A.isOverlayV3EnabledForPID(t),
        i = c.default.disableClickableRegions;
    n || i || r.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !1, pid: t }),
        r.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: t, enabled: !0, keepOpen: e });
}
function y(e) {
    r.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: e, enabled: !1 });
    let t = s.A.isOverlayV3EnabledForPID(e),
        n = c.default.disableClickableRegions;
    c.default.isLocked(e) || t || n || r.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e });
}
