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
    f = n(451409),
    E = n(863089),
    p = n(556525),
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
            avatarClassName: N,
            renderIcon: C,
            style: y,
            onClick: O,
            onContextMenu: R,
            className: v,
        } = e,
        b = (0, o.bG)([f.Ay], () => null != t && f.Ay.isLocalMute(t)),
        L = (0, E.A)(t),
        D = (0, p.v)({ isSpeaking: i, voiceDb: L }),
        w = (0, l.Kj)(n);
    function P() {
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
    }
    function M() {
        return (0, r.jsx)("div", { className: m.PQ, style: D }, "border");
    }
    let x = a()(
            m.iE,
            {
                [m.vk]: null != O,
                [m.tb]: T && 0 === S,
                [m.hs]: T && 1 === S,
                [m.EX]: n === l._3.SIZE_32 || n === l._3.SIZE_24,
            },
            v,
        ),
        U = (0, l.FT)(n),
        k = { height: U, width: U, ...y };
    return (0, r.jsx)("div", {
        style: k,
        onContextMenu: R,
        className: x,
        children: (function () {
            let e = (0, l.FT)(n),
                t = (0, r.jsx)("img", { src: A, alt: " ", className: a()(m.sb, N, { [m.tb]: T && 0 === S }) });
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
                            ? (0, r.jsxs)(r.Fragment, { children: [M(), P()] })
                            : s || g || b
                              ? (0, r.jsx)(r.Fragment, { children: P() })
                              : (0, r.jsx)(r.Fragment, { children: M() }),
                    ],
                })
            );
        })(),
    });
}
A.RingingType = g;
let I = A;
