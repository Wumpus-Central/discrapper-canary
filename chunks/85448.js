n.d(t, { A: () => x });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(666654),
    d = n(990836),
    c = n(83107),
    u = n(827734),
    h = n(778712),
    A = n(573435),
    _ = n(430452),
    m = n(863089),
    g = n(556525),
    p = n(126957),
    f = (((i = f || {})[(i.OUTGOING = 0)] = "OUTGOING"), (i[(i.INCOMING = 1)] = "INCOMING"), i);
function E(e) {
    let {
            userId: t,
            size: n,
            speaking: i = !1,
            muted: s = !1,
            deafen: f = !1,
            src: E,
            disabled: x = !1,
            ringing: I,
            ringingType: C = 0,
            avatarClassName: b,
            renderIcon: N,
            style: S,
            onClick: v,
            onContextMenu: T,
            className: y,
        } = e,
        j = (0, r.bG)([_.Ay], () => null != t && _.Ay.isLocalMute(t)),
        R = (0, m.A)(t),
        L = (0, g.v)({ isSpeaking: i, voiceDb: R }),
        O = () => {
            let e = j ? o.O : f ? d.c : c.z;
            return s || f || j
                ? (0, l.jsx)("div", {
                      className: p.II,
                      children: (0, l.jsx)(e, { className: p.h5, color: u.A.colors.WHITE.css }, "status"),
                  })
                : null;
        },
        G = () => (0, l.jsx)("div", { className: p.PQ, style: L }, "border"),
        M = a()(
            p.iE,
            {
                [p.vk]: null != v,
                [p.tb]: I && 0 === C,
                [p.hs]: I && 1 === C,
                [p.EX]: n === h._3.SIZE_32 || n === h._3.SIZE_24,
            },
            y,
        ),
        D = (0, h.FT)(n),
        U = { height: D, width: D, ...S };
    return (0, l.jsx)("div", {
        style: U,
        onContextMenu: T,
        className: M,
        children: (() => {
            let e = (0, h.FT)(n),
                t = (0, l.jsx)("img", { src: E, alt: " ", className: a()(p.sb, b, { [p.tb]: I && 0 === C }) });
            if (x) return t;
            let r = A.hW.AVATAR_DEFAULT;
            return (
                null != N
                    ? (r = n === h._3.SIZE_32 ? A.hW.AVATAR_CALL_ICON_32 : A.hW.AVATAR_CALL_ICON)
                    : (s || f || j) && (r = A.hW.AVATAR_VOICE_CALL_80),
                (0, l.jsxs)("div", {
                    className: p.lN,
                    children: [
                        (0, l.jsxs)(A.Ay, { className: p.KQ, width: e, height: e, mask: r, children: [N?.(), t] }),
                        s && i
                            ? (0, l.jsxs)(l.Fragment, { children: [G(), O()] })
                            : s || f || j
                              ? (0, l.jsx)(l.Fragment, { children: O() })
                              : (0, l.jsx)(l.Fragment, { children: G() }),
                    ],
                })
            );
        })(),
    });
}
E.RingingType = f;
let x = E;
