l.d(t, { A: () => f });
var e,
    a = l(627968);
l(64700);
var i = l(503698),
    c = l.n(i),
    h = l(17928),
    n = l(778712),
    r = l(666654),
    d = l(990836),
    A = l(83107),
    o = l(661531),
    u = l(573435),
    g = l(451409),
    v = l(863089),
    w = l(556525),
    m = l(126957),
    N = (((e = N || {})[(e.OUTGOING = 0)] = "OUTGOING"), (e[(e.INCOMING = 1)] = "INCOMING"), e);
function x(s) {
    let {
            userId: t,
            size: l,
            speaking: e = !1,
            muted: i = !1,
            deafen: N = !1,
            src: x,
            disabled: f = !1,
            ringing: I,
            ringingType: p = 0,
            avatarClassName: _,
            renderIcon: T,
            style: j,
            onClick: C,
            onContextMenu: E,
            className: Z,
        } = s,
        y = (0, h.bG)([g.Ay], () => null != t && g.Ay.isLocalMute(t)),
        M = (0, v.A)(t),
        O = (0, w.v)({ isSpeaking: e, voiceDb: M }),
        V = (0, n.Kj)(l);
    function L() {
        let s = y ? r.O : N ? d.c : A.z;
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
    }
    function R() {
        return (0, a.jsx)("div", { className: m.PQ, style: O }, "border");
    }
    let F = c()(
            m.iE,
            {
                [m.vk]: null != C,
                [m.tb]: I && 0 === p,
                [m.hs]: I && 1 === p,
                [m.EX]: l === n._3.SIZE_32 || l === n._3.SIZE_24,
            },
            Z,
        ),
        b = (0, n.FT)(l),
        G = { height: b, width: b, ...j };
    return (0, a.jsx)("div", {
        style: G,
        onContextMenu: E,
        className: F,
        children: (function () {
            let s = (0, n.FT)(l),
                t = (0, a.jsx)("img", { src: x, alt: " ", className: c()(m.sb, _, { [m.tb]: I && 0 === p }) });
            if (f) return t;
            let h = u.hW.AVATAR_DEFAULT;
            return (
                null != T
                    ? (h = l === n._3.SIZE_32 ? u.hW.AVATAR_CALL_ICON_32 : u.hW.AVATAR_CALL_ICON)
                    : (i || N || y) && (h = u.hW.AVATAR_VOICE_CALL_80),
                (0, a.jsxs)("div", {
                    className: m.lN,
                    children: [
                        (0, a.jsxs)(u.Ay, { className: m.KQ, width: s, height: s, mask: h, children: [T?.(), t] }),
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
let f = (xype = g);
let I = A;
