l.d(e, { A: () => T });
var t,
    n = l(627968);
l(64700);
var i = l(503698),
    r = l.n(i),
    a = l(17928),
    c = l(666654),
    A = l(990836),
    h = l(83107),
    d = l(661531),
    u = l(778712),
    _ = l(573435),
    N = l(235058),
    I = l(863089),
    o = l(556525),
    m = l(126957),
    x = (((t = x || {})[(t.OUTGOING = 0)] = "OUTGOING"), (t[(t.INCOMING = 1)] = "INCOMING"), t);
function C(s) {
    let {
            userId: e,
            size: l,
            speaking: t = !1,
            muted: i = !1,
            deafen: x = !1,
            src: C,
            disabled: T = !1,
            ringing: g,
            ringingType: j = 0,
            avatarClassName: O,
            renderIcon: p,
            style: v,
            onClick: b,
            onContextMenu: E,
            className: G,
        } = s,
        L = (0, a.bG)([N.Ay], () => null != e && N.Ay.isLocalMute(e)),
        k = (0, I.A)(e),
        y = (0, o.v)({ isSpeaking: t, voiceDb: k }),
        V = () => {
            let s = L ? c.O : x ? A.c : h.z;
            return i || x || L
                ? (0, n.jsx)("div", {
                      className: m.II,
                      children: (0, n.jsx)(s, { className: m.h5, color: d.A.colors.WHITE.css }, "status"),
                  })
                : null;
        },
        F = () => (0, n.jsx)("div", { className: m.PQ, style: y }, "border"),
        R = r()(
            m.iE,
            {
                [m.vk]: null != b,
                [m.tb]: g && 0 === j,
                [m.hs]: g && 1 === j,
                [m.EX]: l === u._3.SIZE_32 || l === u._3.SIZE_24,
            },
            G,
        ),
        W = (0, u.FT)(l),
        w = { height: W, width: W, ...v };
    return (0, n.jsx)("div", {
        style: w,
        onContextMenu: E,
        className: R,
        children: (() => {
            let s = (0, u.FT)(l),
                e = (0, n.jsx)("img", { src: C, alt: " ", className: r()(m.sb, O, { [m.tb]: g && 0 === j }) });
            if (T) return e;
            let a = _.hW.AVATAR_DEFAULT;
            return (
                null != p
                    ? (a = l === u._3.SIZE_32 ? _.hW.AVATAR_CALL_ICON_32 : _.hW.AVATAR_CALL_ICON)
                    : (i || x || L) && (a = _.hW.AVATAR_VOICE_CALL_80),
                (0, n.jsxs)("div", {
                    className: m.lN,
                    children: [
                        (0, n.jsxs)(_.Ay, { className: m.KQ, width: s, height: s, mask: a, children: [p?.(), e] }),
                        i && t
                            ? (0, n.jsxs)(n.Fragment, { children: [F(), V()] })
                            : i || x || L
                              ? (0, n.jsx)(n.Fragment, { children: V() })
                              : (0, n.jsx)(n.Fragment, { children: F() }),
                    ],
                })
            );
        })(),
    });
}
C.RingingType = x;
let T = C;
