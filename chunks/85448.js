"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(573435),
    u = n(430452),
    c = n(659974),
    d = n(863089),
    _ = n(503434),
    f = (function (e) {
        return (e[(e.OUTGOING = 0)] = "OUTGOING"), (e[(e.INCOMING = 1)] = "INCOMING"), e;
    })(f || {});
function h(e) {
    let {
            userId: t,
            size: n,
            speaking: i = !1,
            latched: f = !1,
            muted: h = !1,
            deafen: p = !1,
            src: g,
            disabled: E = !1,
            ringing: A,
            ringingType: I = 0,
            avatarClassName: T,
            renderIcon: y,
            style: S,
            onClick: v,
            onContextMenu: C,
            className: b,
        } = e,
        N = (0, s.bG)([u.Ay], () => null != t && u.Ay.isLocalMute(t)),
        R = (0, d.A)(t),
        O = (0, c.v)({ isSpeaking: i, isLatched: f, voiceDb: R }),
        D = () => {
            let e = N ? o.O1p : p ? o.cQT : o.z0P;
            return h || p || N
                ? (0, r.jsx)("div", {
                      className: _.II,
                      children: (0, r.jsx)(e, { className: _.h5, color: o.LU0.colors.WHITE.css }, "status"),
                  })
                : null;
        },
        L = () => (0, r.jsx)("div", { className: _.PQ, style: O }, "border"),
        w = () =>
            h && i
                ? (0, r.jsxs)(r.Fragment, { children: [L(), D()] })
                : h || p || N
                  ? (0, r.jsx)(r.Fragment, { children: D() })
                  : (0, r.jsx)(r.Fragment, { children: L() }),
        x = () => {
            let e = (0, o.FT9)(n),
                t = (0, r.jsx)("img", { src: g, alt: " ", className: a()(_.sb, T, { [_.tb]: A && 0 === I }) });
            if (E) return t;
            let i = l.hW.AVATAR_DEFAULT;
            return (
                null != y
                    ? (i = n === o._3J.SIZE_32 ? l.hW.AVATAR_CALL_ICON_32 : l.hW.AVATAR_CALL_ICON)
                    : (h || p || N) && (i = l.hW.AVATAR_VOICE_CALL_80),
                (0, r.jsxs)("div", {
                    className: _.lN,
                    children: [
                        (0, r.jsxs)(l.Ay, { className: _.KQ, width: e, height: e, mask: i, children: [y?.(), t] }),
                        w(),
                    ],
                })
            );
        },
        P = a()(
            _.iE,
            { [_.vk]: null != v, [_.tb]: A && 0 === I, [_.hs]: A && 1 === I, [_.EX]: n === o._3J.SIZE_32 },
            b,
        ),
        M = (0, o.FT9)(n),
        k = { height: M, width: M, ...S };
    return (0, r.jsx)("div", { style: k, onContextMenu: C, className: P, children: x() });
}
h.RingingType = f;
let p = h;
