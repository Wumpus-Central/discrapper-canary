n.d(t, { A: () => x });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(666654),
    c = n(990836),
    d = n(83107),
    u = n(661531),
    h = n(778712),
    _ = n(573435),
    g = n(969341),
    f = n(863089),
    A = n(556525),
    m = n(126957),
    v = (((i = v || {})[(i.OUTGOING = 0)] = "OUTGOING"), (i[(i.INCOMING = 1)] = "INCOMING"), i);
function p(e) {
    let {
            userId: t,
            size: n,
            speaking: i = !1,
            muted: s = !1,
            deafen: v = !1,
            src: p,
            disabled: x = !1,
            ringing: b,
            ringingType: I = 0,
            avatarClassName: E,
            renderIcon: C,
            style: D,
            onClick: y,
            onContextMenu: N,
            className: j,
        } = e,
        O = (0, r.bG)([g.Ay], () => null != t && g.Ay.isLocalMute(t)),
        T = (0, f.A)(t),
        L = (0, A.v)({ isSpeaking: i, voiceDb: T }),
        w = () => {
            let e = O ? o.O : v ? c.c : d.z;
            return s || v || O
                ? (0, l.jsx)("div", {
                      className: m.II,
                      children: (0, l.jsx)(e, { className: m.h5, color: u.A.colors.WHITE.css }, "status"),
                  })
                : null;
        },
        R = () => (0, l.jsx)("div", { className: m.PQ, style: L }, "border"),
        M = a()(
            m.iE,
            {
                [m.vk]: null != y,
                [m.tb]: b && 0 === I,
                [m.hs]: b && 1 === I,
                [m.EX]: n === h._3.SIZE_32 || n === h._3.SIZE_24,
            },
            j,
        ),
        k = (0, h.FT)(n),
        U = { height: k, width: k, ...D };
    return (0, l.jsx)("div", {
        style: U,
        onContextMenu: N,
        className: M,
        children: (() => {
            let e = (0, h.FT)(n),
                t = (0, l.jsx)("img", { src: p, alt: " ", className: a()(m.sb, E, { [m.tb]: b && 0 === I }) });
            if (x) return t;
            let r = _.hW.AVATAR_DEFAULT;
            return (
                null != C
                    ? (r = n === h._3.SIZE_32 ? _.hW.AVATAR_CALL_ICON_32 : _.hW.AVATAR_CALL_ICON)
                    : (s || v || O) && (r = _.hW.AVATAR_VOICE_CALL_80),
                (0, l.jsxs)("div", {
                    className: m.lN,
                    children: [
                        (0, l.jsxs)(_.Ay, { className: m.KQ, width: e, height: e, mask: r, children: [C?.(), t] }),
                        s && i
                            ? (0, l.jsxs)(l.Fragment, { children: [R(), w()] })
                            : s || v || O
                              ? (0, l.jsx)(l.Fragment, { children: w() })
                              : (0, l.jsx)(l.Fragment, { children: R() }),
                    ],
                })
            );
        })(),
    });
}
p.RingingType = v;
let x = p;
