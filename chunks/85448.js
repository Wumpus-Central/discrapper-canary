"use strict";
n.d(t, { A: () => I });
var i,
    r = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(778712),
    u = n(666654),
    c = n(990836),
    d = n(83107),
    _ = n(661531),
    h = n(573435),
    f = n(394459),
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
            renderIcon: C,
            style: N,
            onClick: v,
            onContextMenu: R,
            className: O,
        } = e,
        b = (0, o.bG)([f.Ay], () => null != t && f.Ay.isLocalMute(t)),
        D = (0, p.A)(t),
        L = (0, E.v)({ isSpeaking: i, voiceDb: D }),
        w = (0, l.Kj)(n),
        M = () => {
            let e = b ? u.O : g ? c.c : d.z;
            return s || g || b
                ? (0, r.jsx)("div", {
                      className: m.II,
                      style: { width: w.status + 2 * w.offset, height: w.status + 2 * w.offset },
                      children: (0, r.jsx)(
                          e,
                          { color: _.A.colors.WHITE.css, style: { width: w.status, height: w.status } },
                          "status",
                      ),
                  })
                : null;
        },
        P = () => (0, r.jsx)("div", { className: m.PQ, style: L }, "border"),
        x = a()(
            m.iE,
            {
                [m.vk]: null != v,
                [m.tb]: T && 0 === S,
                [m.hs]: T && 1 === S,
                [m.EX]: n === l._3.SIZE_32 || n === l._3.SIZE_24,
            },
            O,
        ),
        k = (0, l.FT)(n),
        U = { height: k, width: k, ...N };
    return (0, r.jsx)("div", {
        style: U,
        onContextMenu: R,
        className: x,
        children: (() => {
            let e = (0, l.FT)(n),
                t = (0, r.jsx)("img", { src: A, alt: " ", className: a()(m.sb, y, { [m.tb]: T && 0 === S }) });
            if (I) return t;
            let o = h.hW.AVATAR_DEFAULT;
            return (
                null != C
                    ? (o = n === l._3.SIZE_32 ? h.hW.AVATAR_CALL_ICON_32 : h.hW.AVATAR_CALL_ICON)
                    : (s || g || b) && (o = h.hW.AVATAR_VOICE_CALL_80),
                (0, r.jsxs)("div", {
                    className: m.lN,
                    children: [
                        (0, r.jsxs)(h.Ay, { className: m.KQ, width: e, height: e, mask: o, children: [C?.(), t] }),
                        s && i
                            ? (0, r.jsxs)(r.Fragment, { children: [P(), M()] })
                            : s || g || b
                              ? (0, r.jsx)(r.Fragment, { children: M() })
                              : (0, r.jsx)(r.Fragment, { children: P() }),
                    ],
                })
            );
        })(),
    });
}
A.RingingType = g;
let I = A;
