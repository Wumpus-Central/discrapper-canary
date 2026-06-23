t.d(l, { A: () => I });
var e,
    a = t(627968);
t(64700);
var i = t(503698),
    h = t.n(i),
    c = t(17928),
    r = t(778712),
    n = t(666654),
    d = t(990836),
    A = t(83107),
    o = t(661531),
    g = t(573435),
    u = t(394459),
    v = t(863089),
    w = t(556525),
    m = t(126957),
    N = (((e = N || {})[(e.OUTGOING = 0)] = "OUTGOING"), (e[(e.INCOMING = 1)] = "INCOMING"), e);
function x(s) {
    let {
            userId: l,
            size: t,
            speaking: e = !1,
            muted: i = !1,
            deafen: N = !1,
            src: x,
            disabled: I = !1,
            ringing: p,
            ringingType: _ = 0,
            avatarClassName: f,
            renderIcon: T,
            style: j,
            onClick: C,
            onContextMenu: E,
            className: Z,
        } = s,
        y = (0, c.bG)([u.Ay], () => null != l && u.Ay.isLocalMute(l)),
        M = (0, v.A)(l),
        O = (0, w.v)({ isSpeaking: e, voiceDb: M }),
        V = (0, r.Kj)(t),
        L = () => {
            let s = y ? n.O : N ? d.c : A.z;
            return i || N || y
                ? (0, a.jsx)("div", {
                      className: m.II,
                      style: { width: V.status + 2 * V.offset, height: V.status + 2 * V.offset },
                      children: (0, a.jsx)(
                          s,
                          { color: o.A.colors.WHITE.css, style: { width: V.status, height: V.status } },
                          "status",
                      ),
                  })
                : null;
        },
        R = () => (0, a.jsx)("div", { className: m.PQ, style: O }, "border"),
        F = h()(
            m.iE,
            {
                [m.vk]: null != C,
                [m.tb]: p && 0 === _,
                [m.hs]: p && 1 === _,
                [m.EX]: t === r._3.SIZE_32 || t === r._3.SIZE_24,
            },
            Z,
        ),
        b = (0, r.FT)(t),
        G = { height: b, width: b, ...j };
    return (0, a.jsx)("div", {
        style: G,
        onContextMenu: E,
        className: F,
        children: (() => {
            let s = (0, r.FT)(t),
                l = (0, a.jsx)("img", { src: x, alt: " ", className: h()(m.sb, f, { [m.tb]: p && 0 === _ }) });
            if (I) return l;
            let c = g.hW.AVATAR_DEFAULT;
            return (
                null != T
                    ? (c = t === r._3.SIZE_32 ? g.hW.AVATAR_CALL_ICON_32 : g.hW.AVATAR_CALL_ICON)
                    : (i || N || y) && (c = g.hW.AVATAR_VOICE_CALL_80),
                (0, a.jsxs)("div", {
                    className: m.lN,
                    children: [
                        (0, a.jsxs)(g.Ay, { className: m.KQ, width: s, height: s, mask: c, children: [T?.(), l] }),
                        i && e
                            ? (0, a.jsxs)(a.Fragment, { children: [R(), L()] })
                            : i || N || y
                              ? (0, a.jsx)(a.Fragment, { children: L() })
                              : (0, a.jsx)(a.Fragment, { children: R() }),
                    ],
                })
            );
        })(),
    });
}
x.RingingType = N;
let I = x;
