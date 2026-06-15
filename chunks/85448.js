"use strict";
n.d(t, { A: () => I });
var i,
    r = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(666654),
    u = n(990836),
    c = n(83107),
    d = n(661531),
    _ = n(778712),
    h = n(573435),
    f = n(136491),
    p = n(863089),
    E = n(556525),
    m = n(126957),
    g = (((i = g || {})[(i.OUTGOING = 0)] = "OUTGOING"), (i[(i.INCOMING = 1)] = "INCOMING"), i);
function A(e) {
    let {
            userId: t,
            size: n,
            speaking: i = !1,
            muted: s = !1,
            deafen: g = !1,
            src: A,
            disabled: I = !1,
            ringing: T,
            ringingType: S = 0,
            avatarClassName: y,
            renderIcon: N,
            style: v,
            onClick: C,
            onContextMenu: R,
            className: O,
        } = e,
        b = (0, o.bG)([f.Ay], () => null != t && f.Ay.isLocalMute(t)),
        D = (0, p.A)(t),
        L = (0, E.v)({ isSpeaking: i, voiceDb: D }),
        w = () => {
            let e = b ? l.O : g ? u.c : c.z;
            return s || g || b
                ? (0, r.jsx)("div", {
                      className: m.II,
                      children: (0, r.jsx)(e, { className: m.h5, color: d.A.colors.WHITE.css }, "status"),
                  })
                : null;
        },
        M = () => (0, r.jsx)("div", { className: m.PQ, style: L }, "border"),
        P = a()(
            m.iE,
            {
                [m.vk]: null != C,
                [m.tb]: T && 0 === S,
                [m.hs]: T && 1 === S,
                [m.EX]: n === _._3.SIZE_32 || n === _._3.SIZE_24,
            },
            O,
        ),
        x = (0, _.FT)(n),
        k = { height: x, width: x, ...v };
    return (0, r.jsx)("div", {
        style: k,
        onContextMenu: R,
        className: P,
        children: (() => {
            let e = (0, _.FT)(n),
                t = (0, r.jsx)("img", { src: A, alt: " ", className: a()(m.sb, y, { [m.tb]: T && 0 === S }) });
            if (I) return t;
            let o = h.hW.AVATAR_DEFAULT;
            return (
                null != N
                    ? (o = n === _._3.SIZE_32 ? h.hW.AVATAR_CALL_ICON_32 : h.hW.AVATAR_CALL_ICON)
                    : (s || g || b) && (o = h.hW.AVATAR_VOICE_CALL_80),
                (0, r.jsxs)("div", {
                    className: m.lN,
                    children: [
                        (0, r.jsxs)(h.Ay, { className: m.KQ, width: e, height: e, mask: o, children: [N?.(), t] }),
                        s && i
                            ? (0, r.jsxs)(r.Fragment, { children: [M(), w()] })
                            : s || g || b
                              ? (0, r.jsx)(r.Fragment, { children: w() })
                              : (0, r.jsx)(r.Fragment, { children: M() }),
                    ],
                })
            );
        })(),
    });
}
A.RingingType = g;
let I = A;
