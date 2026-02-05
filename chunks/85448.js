"use strict";
n.d(t, { A: () => h });
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
function p(e) {
    let {
            userId: t,
            size: n,
            speaking: i = !1,
            latched: f = !1,
            muted: p = !1,
            deafen: h = !1,
            src: m,
            disabled: g = !1,
            ringing: E,
            ringingType: A = 0,
            avatarClassName: I,
            renderIcon: T,
            style: y,
            onClick: S,
            onContextMenu: v,
            className: C,
        } = e,
        b = (0, s.bG)([u.A], () => null != t && u.A.isLocalMute(t)),
        N = (0, d.A)(t),
        R = (0, c.v)({ isSpeaking: i, isLatched: f, voiceDb: N }),
        O = () => {
            let e = b ? o.O1p : h ? o.cQT : o.z0P;
            return p || h || b
                ? (0, r.jsx)("div", {
                      className: _.II,
                      children: (0, r.jsx)(e, { className: _.h5, color: o.LU0.colors.WHITE.css }, "status"),
                  })
                : null;
        },
        D = () => (0, r.jsx)("div", { className: _.PQ, style: R }, "border"),
        L = () =>
            p && i
                ? (0, r.jsxs)(r.Fragment, { children: [D(), O()] })
                : p || h || b
                  ? (0, r.jsx)(r.Fragment, { children: O() })
                  : (0, r.jsx)(r.Fragment, { children: D() }),
        w = () => {
            let e = (0, o.FT9)(n),
                t = (0, r.jsx)("img", { src: m, alt: " ", className: a()(_.sb, I, { [_.tb]: E && 0 === A }) });
            if (g) return t;
            let i = l.hW.AVATAR_DEFAULT;
            return (
                null != T
                    ? (i = n === o._3J.SIZE_32 ? l.hW.AVATAR_CALL_ICON_32 : l.hW.AVATAR_CALL_ICON)
                    : (p || h || b) && (i = l.hW.AVATAR_VOICE_CALL_80),
                (0, r.jsxs)("div", {
                    className: _.lN,
                    children: [
                        (0, r.jsxs)(l.Ay, { className: _.KQ, width: e, height: e, mask: i, children: [T?.(), t] }),
                        L(),
                    ],
                })
            );
        },
        x = a()(
            _.iE,
            { [_.vk]: null != S, [_.tb]: E && 0 === A, [_.hs]: E && 1 === A, [_.EX]: n === o._3J.SIZE_32 },
            C,
        ),
        P = (0, o.FT9)(n),
        M = { height: P, width: P, ...y };
    return (0, r.jsx)("div", { style: M, onContextMenu: v, className: x, children: w() });
}
p.RingingType = f;
let h = p;
