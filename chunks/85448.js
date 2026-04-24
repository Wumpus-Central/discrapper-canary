"use strict";
l.d(t, { A: () => b });
var n,
    i = l(627968);
l(64700);
var s = l(503698),
    a = l.n(s),
    r = l(17928),
    o = l(666654),
    d = l(990836),
    c = l(83107),
    u = l(661531),
    h = l(778712),
    g = l(573435),
    m = l(969341),
    p = l(863089),
    x = l(556525),
    _ = l(126957),
    A = (((n = A || {})[(n.OUTGOING = 0)] = "OUTGOING"), (n[(n.INCOMING = 1)] = "INCOMING"), n);
function f(e) {
    let {
            userId: t,
            size: l,
            speaking: n = !1,
            muted: s = !1,
            deafen: A = !1,
            src: f,
            disabled: b = !1,
            ringing: C,
            ringingType: S = 0,
            avatarClassName: v,
            renderIcon: N,
            style: j,
            onClick: E,
            onContextMenu: I,
            className: T,
        } = e,
        y = (0, r.bG)([m.Ay], () => null != t && m.Ay.isLocalMute(t)),
        R = (0, p.A)(t),
        M = (0, x.v)({ isSpeaking: n, voiceDb: R }),
        L = () => {
            let e = y ? o.O : A ? d.c : c.z;
            return s || A || y
                ? (0, i.jsx)("div", {
                      className: _.II,
                      children: (0, i.jsx)(e, { className: _.h5, color: u.A.colors.WHITE.css }, "status"),
                  })
                : null;
        },
        w = () => (0, i.jsx)("div", { className: _.PQ, style: M }, "border"),
        O = a()(
            _.iE,
            {
                [_.vk]: null != E,
                [_.tb]: C && 0 === S,
                [_.hs]: C && 1 === S,
                [_.EX]: l === h._3.SIZE_32 || l === h._3.SIZE_24,
            },
            T,
        ),
        D = (0, h.FT)(l),
        G = { height: D, width: D, ...j };
    return (0, i.jsx)("div", {
        style: G,
        onContextMenu: I,
        className: O,
        children: (() => {
            let e = (0, h.FT)(l),
                t = (0, i.jsx)("img", { src: f, alt: " ", className: a()(_.sb, v, { [_.tb]: C && 0 === S }) });
            if (b) return t;
            let r = g.hW.AVATAR_DEFAULT;
            return (
                null != N
                    ? (r = l === h._3.SIZE_32 ? g.hW.AVATAR_CALL_ICON_32 : g.hW.AVATAR_CALL_ICON)
                    : (s || A || y) && (r = g.hW.AVATAR_VOICE_CALL_80),
                (0, i.jsxs)("div", {
                    className: _.lN,
                    children: [
                        (0, i.jsxs)(g.Ay, { className: _.KQ, width: e, height: e, mask: r, children: [N?.(), t] }),
                        s && n
                            ? (0, i.jsxs)(i.Fragment, { children: [w(), L()] })
                            : s || A || y
                              ? (0, i.jsx)(i.Fragment, { children: L() })
                              : (0, i.jsx)(i.Fragment, { children: w() }),
                    ],
                })
            );
        })(),
    });
}
f.RingingType = A;
let b = f;
