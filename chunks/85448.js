e.d(l, { A: () => I });
var a,
    t = e(627968);
e(64700);
var i = e(503698),
    c = e.n(i),
    h = e(17928),
    r = e(666654),
    n = e(990836),
    A = e(83107),
    d = e(661531),
    o = e(778712),
    g = e(573435),
    v = e(394459),
    m = e(863089),
    N = e(556525),
    u = e(126957),
    w = (((a = w || {})[(a.OUTGOING = 0)] = "OUTGOING"), (a[(a.INCOMING = 1)] = "INCOMING"), a);
function x(s) {
    let {
            userId: l,
            size: e,
            speaking: a = !1,
            muted: i = !1,
            deafen: w = !1,
            src: x,
            disabled: I = !1,
            ringing: p,
            ringingType: _ = 0,
            avatarClassName: T,
            renderIcon: j,
            style: f,
            onClick: C,
            onContextMenu: E,
            className: Z,
        } = s,
        M = (0, h.bG)([v.Ay], () => null != l && v.Ay.isLocalMute(l)),
        O = (0, m.A)(l),
        V = (0, N.v)({ isSpeaking: a, voiceDb: O }),
        y = () => {
            let s = M ? r.O : w ? n.c : A.z;
            return i || w || M
                ? (0, t.jsx)("div", {
                      className: u.II,
                      children: (0, t.jsx)(s, { className: u.h5, color: d.A.colors.WHITE.css }, "status"),
                  })
                : null;
        },
        L = () => (0, t.jsx)("div", { className: u.PQ, style: V }, "border"),
        R = c()(
            u.iE,
            {
                [u.vk]: null != C,
                [u.tb]: p && 0 === _,
                [u.hs]: p && 1 === _,
                [u.EX]: e === o._3.SIZE_32 || e === o._3.SIZE_24,
            },
            Z,
        ),
        F = (0, o.FT)(e),
        b = { height: F, width: F, ...f };
    return (0, t.jsx)("div", {
        style: b,
        onContextMenu: E,
        className: R,
        children: (() => {
            let s = (0, o.FT)(e),
                l = (0, t.jsx)("img", { src: x, alt: " ", className: c()(u.sb, T, { [u.tb]: p && 0 === _ }) });
            if (I) return l;
            let h = g.hW.AVATAR_DEFAULT;
            return (
                null != j
                    ? (h = e === o._3.SIZE_32 ? g.hW.AVATAR_CALL_ICON_32 : g.hW.AVATAR_CALL_ICON)
                    : (i || w || M) && (h = g.hW.AVATAR_VOICE_CALL_80),
                (0, t.jsxs)("div", {
                    className: u.lN,
                    children: [
                        (0, t.jsxs)(g.Ay, { className: u.KQ, width: s, height: s, mask: h, children: [j?.(), l] }),
                        i && a
                            ? (0, t.jsxs)(t.Fragment, { children: [L(), y()] })
                            : i || w || M
                              ? (0, t.jsx)(t.Fragment, { children: y() })
                              : (0, t.jsx)(t.Fragment, { children: L() }),
                    ],
                })
            );
        })(),
    });
}
x.RingingType = w;
let I = (xype = g);
let I = A;
