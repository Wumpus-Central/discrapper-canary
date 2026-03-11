"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    l = n(573435),
    u = n(430452),
    c = n(659974),
    d = n(863089),
    _ = n(15772),
    f = (function (e) {
        return (e[(e.OUTGOING = 0)] = "OUTGOING"), (e[(e.INCOMING = 1)] = "INCOMING"), e;
    })(f || {});
function p(e) {
    let {
            userId: t,
            size: n,
            speaking: i = !1,
            muted: f = !1,
            deafen: p = !1,
            src: h,
            disabled: m = !1,
            ringing: E,
            ringingType: g = 0,
            avatarClassName: A,
            renderIcon: I,
            style: T,
            onClick: S,
            onContextMenu: y,
            className: v,
        } = e,
        N = (0, a.bG)([u.Ay], () => null != t && u.Ay.isLocalMute(t)),
        C = (0, d.A)(t),
        R = (0, c.v)({ isSpeaking: i, voiceDb: C }),
        O = () => {
            let e = N ? o.O1p : p ? o.cQT : o.z0P;
            return f || p || N
                ? (0, r.jsx)("div", {
                      className: _.II,
                      children: (0, r.jsx)(e, { className: _.h5, color: o.LU0.colors.WHITE.css }, "status"),
                  })
                : null;
        },
        b = () => (0, r.jsx)("div", { className: _.PQ, style: R }, "border"),
        D = () =>
            f && i
                ? (0, r.jsxs)(r.Fragment, { children: [b(), O()] })
                : f || p || N
                  ? (0, r.jsx)(r.Fragment, { children: O() })
                  : (0, r.jsx)(r.Fragment, { children: b() }),
        L = () => {
            let e = (0, o.FT9)(n),
                t = (0, r.jsx)("img", { src: h, alt: " ", className: s()(_.sb, A, { [_.tb]: E && 0 === g }) });
            if (m) return t;
            let i = l.hW.AVATAR_DEFAULT;
            return (
                null != I
                    ? (i = n === o._3J.SIZE_32 ? l.hW.AVATAR_CALL_ICON_32 : l.hW.AVATAR_CALL_ICON)
                    : (f || p || N) && (i = l.hW.AVATAR_VOICE_CALL_80),
                (0, r.jsxs)("div", {
                    className: _.lN,
                    children: [
                        (0, r.jsxs)(l.Ay, { className: _.KQ, width: e, height: e, mask: i, children: [I?.(), t] }),
                        D(),
                    ],
                })
            );
        },
        w = s()(
            _.iE,
            {
                [_.vk]: null != S,
                [_.tb]: E && 0 === g,
                [_.hs]: E && 1 === g,
                [_.EX]: n === o._3J.SIZE_32 || n === o._3J.SIZE_24,
            },
            v,
        ),
        M = (0, o.FT9)(n),
        x = { height: M, width: M, ...T };
    return (0, r.jsx)("div", { style: x, onContextMenu: y, className: w, children: L() });
}
p.RingingType = f;
let h = p;
