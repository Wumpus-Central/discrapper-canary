"use strict";
n.d(t, { Js: () => M, Rb: () => O, d9: () => y, eu: () => v });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(580929),
    o = n(939249),
    d = n(717421),
    c = n(863610),
    u = n(133171),
    _ = n(990078),
    E = n(556525),
    A = n(573435),
    h = n(849442),
    I = n(427262),
    f = n(652215),
    p = n(190460),
    T = n(778712),
    m = n(375708),
    g = n(282291);
let S = { tension: 1200, friction: 70 };
function N() {
    return document.hasFocus();
}
function C(e) {
    let { size: t, isMobile: n, isTyping: r, ...a } = e,
        s = (0, T.Kj)(t),
        l = s.status * (n && !r ? 1.5 : 1),
        o = s.status * (r ? 2.5 : 1),
        d = r ? (2.5 * s.status - s.status) / 2 : 0,
        c = s.size - s.status - d - s.offset,
        u = s.size - l - s.offset;
    return (0, i.jsx)("rect", { x: c, y: u, width: o, height: l, fill: "transparent", "aria-hidden": !0, ...a });
}
function O(e, t, n) {
    let { isTyping: i, isMobile: r, isVR: a } = n,
        s = (0, u.i0)(e.status, t, { isTyping: i, isMobile: r, isVR: a }),
        l = (i ? e.size - (s.width / 2 + e.status / 2) : e.size - s.width) - e.offset;
    return { ...s, x: l, y: e.size - s.height - e.offset };
}
function R(e, t, n, r) {
    let { isMobile: a, isTyping: s, isVR: l } = r,
        o = O(t, n, { isMobile: a, isTyping: s, isVR: l }),
        d = (0, u.yi)(n, e),
        c = n === f.clD.ONLINE && l;
    if (!(a || c)) {
        let n = o.height / 2 + t.stroke,
            r = o.x + t.status / 2;
        return (0, i.jsx)("circle", { style: { opacity: d }, fill: e, r: n, cx: r, cy: r });
    }
    let _ = o.height + 2 * t.stroke,
        E = o.width + 2 * t.stroke,
        A = o.x - t.stroke,
        h = o.y - t.stroke,
        I = c ? _ / 2 : t.stroke;
    return (0, i.jsx)("rect", { fill: e, height: _, width: E, style: { opacity: d }, x: A, y: h, rx: I });
}
function L(e) {
    let { status: t, isMobile: n, isTyping: i, size: r } = e,
        a = n && !i && t === f.clD.ONLINE,
        s = (0, T.Kj)(r);
    return {
        ...(function (e, t) {
            let { size: n, status: i, stroke: r, offset: a } = e,
                { isTyping: s, isMobile: l, isVR: o } = t,
                d = s ? 2.5 * i : i,
                c = l && !o,
                u = c ? 1.5 * i : i;
            return {
                avatarCutoutX: n - d + (d - i) / 2 - r - a,
                avatarCutoutY: n - u - r - a,
                avatarCutoutWidth: d + 2 * r,
                avatarCutoutHeight: u + 2 * r,
                avatarCutoutRadius: c ? (u + 2 * r) * 0.2 : (i + 2 * r) / 2,
            };
        })(s, { isMobile: a, isTyping: i, isVR: !1 }),
        ...(0, u.v)({ status: t, size: s.status, isMobile: a, isTyping: i, topOffset: 2, leftOffset: 6 }),
    };
}
function D(e) {
    let {
            children: t,
            size: n,
            onClick: r,
            onMouseDown: a,
            onKeyDown: l,
            onContextMenu: d,
            onMouseEnter: c,
            onMouseLeave: u,
            className: _,
            tabIndex: E,
            ariaLabel: S,
            ariaHidden: N,
            status: C,
            isMobile: O = !1,
            isVR: R = !1,
            isTyping: L = !1,
            avatarDecoration: D,
            typingOffset: y,
            specs: v,
        } = e,
        b = { width: (0, T.FT)(n), height: (0, T.FT)(n) },
        M =
            null == S || N
                ? void 0
                : (function (e, t) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                      return null != t
                          ? m.intl.formatToPlainString(m.t["/6mw10"], {
                                label: e,
                                status: (0, I.MU)(t, { isMobile: n, isVR: i }),
                            })
                          : e;
                  })(S, C, O, R),
        P = v.size * p.Xq,
        U = (function (e, t, n, i) {
            let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return null;
            if (i)
                switch (t) {
                    case T._3.SIZE_16:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_16;
                    case T._3.SIZE_20:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_20;
                    case T._3.SIZE_24:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_24;
                    case T._3.SIZE_32:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_32;
                    case T._3.SIZE_40:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_40;
                    case T._3.SIZE_44:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_44;
                    case T._3.SIZE_48:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_48;
                    case T._3.SIZE_56:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_56;
                    case T._3.SIZE_72:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_72;
                    case T._3.SIZE_80:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_80;
                    case T._3.SIZE_96:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_96;
                    case T._3.SIZE_120:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_120;
                }
            if (e === f.clD.ONLINE && r)
                switch (t) {
                    case T._3.SIZE_16:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_16;
                    case T._3.SIZE_20:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_20;
                    case T._3.SIZE_24:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_24;
                    case T._3.SIZE_32:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_32;
                    case T._3.SIZE_40:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_40;
                    case T._3.SIZE_44:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_44;
                    case T._3.SIZE_48:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_48;
                    case T._3.SIZE_56:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_56;
                    case T._3.SIZE_72:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_72;
                    case T._3.SIZE_80:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_80;
                    case T._3.SIZE_96:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_96;
                    case T._3.SIZE_120:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_120;
                }
            if (n && !r)
                switch (t) {
                    case T._3.SIZE_16:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_16;
                    case T._3.SIZE_20:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_20;
                    case T._3.SIZE_24:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_24;
                    case T._3.SIZE_32:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_32;
                    case T._3.SIZE_40:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_40;
                    case T._3.SIZE_44:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_44;
                    case T._3.SIZE_48:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_48;
                    case T._3.SIZE_56:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_56;
                    case T._3.SIZE_72:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_72;
                    case T._3.SIZE_80:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_80;
                    case T._3.SIZE_96:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_96;
                    case T._3.SIZE_120:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_120;
                }
            switch (t) {
                case T._3.SIZE_16:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_16;
                case T._3.SIZE_20:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_20;
                case T._3.SIZE_24:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_24;
                case T._3.SIZE_32:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_32;
                case T._3.SIZE_40:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_40;
                case T._3.SIZE_44:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_44;
                case T._3.SIZE_48:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_48;
                case T._3.SIZE_56:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_56;
                case T._3.SIZE_72:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_72;
                case T._3.SIZE_80:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_80;
                case T._3.SIZE_96:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_96;
                case T._3.SIZE_120:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_120;
            }
            return null;
        })(C, n, O, L, R);
    (0, h.HZ)(null != D ? U : null);
    let w =
        null != D &&
        (0, i.jsx)("svg", {
            width: P + y,
            height: P,
            viewBox: `0 0 ${P + y} ${P}`,
            className: g.DX,
            "aria-hidden": !0,
            children: (0, i.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: P,
                height: P,
                mask: null != U ? `url(#${U})` : void 0,
                children: (0, i.jsx)("img", { className: g.M, src: D, alt: " ", "aria-hidden": !0 }),
            }),
        });
    return null != r || null != a
        ? (0, i.jsxs)(o.D, {
              className: s()(g.iE, g.Wn, _),
              style: b,
              onClick: r,
              tabIndex: E,
              onContextMenu: d,
              onMouseDown: a,
              onKeyDown: l,
              onMouseEnter: c ?? void 0,
              onMouseLeave: u ?? void 0,
              "aria-label": M,
              "aria-hidden": N,
              children: [t, w],
          })
        : (0, i.jsxs)("div", {
              className: s()(g.iE, _),
              style: b,
              onContextMenu: d ?? void 0,
              onMouseEnter: c ?? void 0,
              onMouseLeave: u ?? void 0,
              role: "img",
              "aria-label": M,
              "aria-hidden": N,
              children: [t, w],
          });
}
let y = r.forwardRef((e, t) => {
    let { src: n, isSpeaking: r, className: a, voiceDb: l = -1 / 0, speakingStylesConfig: o } = e,
        d = (0, E.v)({ isSpeaking: r, voiceDb: l, spreadDirection: E.O.INSET_ONLY, maxInnerSpreadRadius: 4, ...o });
    return (0, i.jsxs)(
        "div",
        {
            ref: t,
            className: s()(g.yA, a),
            children: [
                (0, i.jsx)("img", { src: n ?? void 0, alt: " ", className: g.my, "aria-hidden": !0 }),
                r && (0, i.jsx)("div", { className: g.uh, style: d }),
            ],
        },
        n,
    );
});
function v(e) {
    let {
            src: t,
            status: n,
            size: r,
            statusColor: a,
            isMobile: l = !1,
            isVR: o = !1,
            isTyping: d = !1,
            typingIndicatorRef: E,
            avatarContentRef: p,
            isSpeaking: m = !1,
            voiceDb: S,
            speakingStylesConfig: N,
            statusTooltip: C = !1,
            statusTooltipDelay: L,
            statusBackdropColor: v,
            "aria-hidden": b = !1,
            "aria-label": M,
            imageClassName: P,
            ref: U,
        } = e,
        w = n !== f.clD.UNKNOWN ? n : null,
        G = (0, T.Kj)(r),
        x = null != w ? Math.ceil((2.5 * G.status - G.status) / 2) : 0,
        k = G.size + x,
        F = (0, u.S3)(w, a),
        V = (function (e, t, n, i) {
            let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return A.hW.AVATAR_DEFAULT;
            if (i)
                switch (t) {
                    case T._3.SIZE_16:
                        return A.hW.AVATAR_STATUS_TYPING_16;
                    case T._3.SIZE_20:
                        return A.hW.AVATAR_STATUS_TYPING_20;
                    case T._3.SIZE_24:
                        return A.hW.AVATAR_STATUS_TYPING_24;
                    case T._3.SIZE_32:
                        return A.hW.AVATAR_STATUS_TYPING_32;
                    case T._3.SIZE_40:
                        return A.hW.AVATAR_STATUS_TYPING_40;
                    case T._3.SIZE_44:
                        return A.hW.AVATAR_STATUS_TYPING_44;
                    case T._3.SIZE_48:
                        return A.hW.AVATAR_STATUS_TYPING_48;
                    case T._3.SIZE_56:
                        return A.hW.AVATAR_STATUS_TYPING_56;
                    case T._3.SIZE_72:
                        return A.hW.AVATAR_STATUS_TYPING_72;
                    case T._3.SIZE_80:
                        return A.hW.AVATAR_STATUS_TYPING_80;
                    case T._3.SIZE_96:
                        return A.hW.AVATAR_STATUS_TYPING_96;
                    case T._3.SIZE_120:
                        return A.hW.AVATAR_STATUS_TYPING_120;
                }
            if (e === f.clD.ONLINE && r)
                switch (t) {
                    case T._3.SIZE_16:
                        return A.hW.AVATAR_STATUS_VR_16;
                    case T._3.SIZE_20:
                        return A.hW.AVATAR_STATUS_VR_20;
                    case T._3.SIZE_24:
                        return A.hW.AVATAR_STATUS_VR_24;
                    case T._3.SIZE_32:
                        return A.hW.AVATAR_STATUS_VR_32;
                    case T._3.SIZE_40:
                        return A.hW.AVATAR_STATUS_VR_40;
                    case T._3.SIZE_44:
                        return A.hW.AVATAR_STATUS_VR_44;
                    case T._3.SIZE_48:
                        return A.hW.AVATAR_STATUS_VR_48;
                    case T._3.SIZE_56:
                        return A.hW.AVATAR_STATUS_VR_56;
                    case T._3.SIZE_72:
                        return A.hW.AVATAR_STATUS_VR_72;
                    case T._3.SIZE_80:
                        return A.hW.AVATAR_STATUS_VR_80;
                    case T._3.SIZE_96:
                        return A.hW.AVATAR_STATUS_VR_96;
                    case T._3.SIZE_120:
                        return A.hW.AVATAR_STATUS_VR_120;
                }
            if (e === f.clD.ONLINE && n && !r)
                switch (t) {
                    case T._3.SIZE_16:
                        return A.hW.AVATAR_STATUS_MOBILE_16;
                    case T._3.SIZE_20:
                        return A.hW.AVATAR_STATUS_MOBILE_20;
                    case T._3.SIZE_24:
                        return A.hW.AVATAR_STATUS_MOBILE_24;
                    case T._3.SIZE_32:
                        return A.hW.AVATAR_STATUS_MOBILE_32;
                    case T._3.SIZE_40:
                        return A.hW.AVATAR_STATUS_MOBILE_40;
                    case T._3.SIZE_44:
                        return A.hW.AVATAR_STATUS_MOBILE_44;
                    case T._3.SIZE_48:
                        return A.hW.AVATAR_STATUS_MOBILE_48;
                    case T._3.SIZE_56:
                        return A.hW.AVATAR_STATUS_MOBILE_56;
                    case T._3.SIZE_72:
                        return A.hW.AVATAR_STATUS_MOBILE_72;
                    case T._3.SIZE_80:
                        return A.hW.AVATAR_STATUS_MOBILE_80;
                    case T._3.SIZE_96:
                        return A.hW.AVATAR_STATUS_MOBILE_96;
                    case T._3.SIZE_120:
                        return A.hW.AVATAR_STATUS_MOBILE_120;
                }
            switch (t) {
                case T._3.SIZE_16:
                    return A.hW.AVATAR_STATUS_ROUND_16;
                case T._3.SIZE_20:
                    return A.hW.AVATAR_STATUS_ROUND_20;
                case T._3.SIZE_24:
                    return A.hW.AVATAR_STATUS_ROUND_24;
                case T._3.SIZE_32:
                    return A.hW.AVATAR_STATUS_ROUND_32;
                case T._3.SIZE_40:
                    return A.hW.AVATAR_STATUS_ROUND_40;
                case T._3.SIZE_44:
                    return A.hW.AVATAR_STATUS_ROUND_44;
                case T._3.SIZE_48:
                    return A.hW.AVATAR_STATUS_ROUND_48;
                case T._3.SIZE_56:
                    return A.hW.AVATAR_STATUS_ROUND_56;
                case T._3.SIZE_72:
                    return A.hW.AVATAR_STATUS_ROUND_72;
                case T._3.SIZE_80:
                    return A.hW.AVATAR_STATUS_ROUND_80;
                case T._3.SIZE_96:
                    return A.hW.AVATAR_STATUS_ROUND_96;
                case T._3.SIZE_120:
                    return A.hW.AVATAR_STATUS_ROUND_120;
            }
            throw Error(`getMaskId(): Unsupported type, size: ${t}, status: ${e}, isMobile: ${n ? "true" : "false"}`);
        })(w, r, l, d, o),
        B = null != w ? (0, u.p8)(w, { isMobile: l, isTyping: d, isVR: o }) : null;
    return (
        (0, h.HZ)(V),
        (0, h.HZ)(B),
        (0, i.jsx)(D, {
            ...e,
            ariaLabel: M,
            ariaHidden: b,
            status: w,
            specs: G,
            typingOffset: x,
            children: (0, i.jsxs)("svg", {
                ref: U,
                width: k,
                height: k,
                viewBox: `0 0 ${k} ${k}`,
                className: s()(g.dK, g.JW),
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: G.size,
                        height: G.size,
                        mask: `url(#${V})`,
                        children: (0, i.jsx)(y, {
                            ref: p,
                            src: t,
                            isSpeaking: m,
                            voiceDb: S,
                            speakingStylesConfig: N,
                            className: P,
                        }),
                    }),
                    null != w && null != v ? R(v, G, w, { isMobile: l, isTyping: d, isVR: o }) : null,
                    null != w
                        ? (0, i.jsx)(_.m, {
                              text: C ? (0, I.MU)(w) : null,
                              ariaHidden: !0,
                              position: "top",
                              spacing: 5 + 1.5 * G.stroke,
                              delay: L,
                              children: (0, i.jsxs)("g", {
                                  children: [
                                      (0, i.jsx)("rect", {
                                          ...O(G, w, { isMobile: l, isTyping: d, isVR: o }),
                                          fill: F,
                                          mask: `url(#${(0, u.p8)(w, { isMobile: l, isTyping: d, isVR: o })})`,
                                          className: g.Hs,
                                      }),
                                      d
                                          ? (0, i.jsx)(c.n, {
                                                ref: E,
                                                dotRadius: G.status / 4,
                                                x: G.size - 1.375 * G.status - G.offset,
                                                y: G.size - G.status / 1.333 - G.offset,
                                            })
                                          : null,
                                  ],
                              }),
                          })
                        : null,
                ],
            }),
        })
    );
}
function b(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: a,
            isMobile: o = !1,
            isTyping: E = !1,
            typingIndicatorRef: A,
            isSpeaking: h = !1,
            voiceDb: f,
            speakingStylesConfig: p,
            size: m,
            src: O,
            status: v,
            statusColor: b,
            statusTooltip: M = !1,
            statusTooltipDelay: P,
            statusBackdropColor: U,
            "aria-hidden": w = !1,
            "aria-label": G,
            imageClassName: x,
            pulseStatusIcon: k,
        } = e,
        F = (0, u.S3)(v, b),
        V = r.useId(),
        B = r.useId(),
        [H] = r.useState(() => ({ fill: a, ...L({ size: m, status: n, isMobile: t, isTyping: !1 }) })),
        j = r.useMemo(() => ({ fill: F, ...L({ size: m, status: v, isMobile: o, isTyping: E }) }), [F, m, v, o, E]),
        {
            avatarCutoutX: W,
            avatarCutoutY: Y,
            avatarCutoutWidth: K,
            avatarCutoutHeight: $,
            avatarCutoutRadius: z,
            fill: q,
            ...Z
        } = (0, d.z)({ config: S, from: H, to: j }, N() ? "animate-always" : "animate-never"),
        X = (0, T.FT)(m),
        Q = (0, T.Kj)(m),
        J = 2.5 * Q.status,
        ee = 1.5 * Q.status,
        et = null != v ? (2.5 * Q.status - Q.status) / 2 : 0,
        en = Q.size + Math.ceil(et),
        [ei, er, ea] = (0, d.z)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: k ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            N() ? "animate-always" : "animate-never",
            [k, v],
        );
    return (0, i.jsx)(D, {
        ...e,
        ariaLabel: G,
        ariaHidden: w,
        typingOffset: et,
        specs: Q,
        children: (0, i.jsxs)("svg", {
            width: en,
            height: en,
            viewBox: `0 0 ${en} ${en}`,
            className: s()(g.dK, g.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: V,
                    width: X,
                    height: X,
                    children: [
                        (0, i.jsx)("circle", { cx: X / 2, cy: X / 2, r: X / 2, fill: "white" }),
                        (0, i.jsx)(l.animated.rect, { color: "black", x: W, y: Y, width: K, height: $, rx: z, ry: z }),
                    ],
                }),
                (0, i.jsx)("foreignObject", {
                    className: g.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: X,
                    height: X,
                    mask: `url(#${V})`,
                    children: (0, i.jsx)(y, {
                        src: O,
                        isSpeaking: h,
                        voiceDb: f,
                        className: x,
                        speakingStylesConfig: p,
                    }),
                }),
                null != U && R(U, Q, v, { isMobile: o, isTyping: E, isVR: !1 }),
                (0, i.jsx)(_.m, {
                    text: M ? (0, I.MU)(v) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: (function (e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return 5 - (n && !i ? 0 : 0.5 * e) + 1.5 * t;
                    })(Q.status, Q.stroke, o, E),
                    delay: P,
                    children: (0, i.jsxs)(l.animated.g, {
                        transform: ei.scale.to((e) => {
                            let t, n, i, r, a, s;
                            return `scale(${e}) ${((t = Q.status * e), (n = (Q.status - t) / 2), (i = Q.size - t - (null != v ? (2.5 * t - t) / 2 : 0) - Q.offset - n), (r = Q.size - 1.5 * t - Q.offset - n), (a = Math.round((i / e) * 100) / 100), (s = Math.round((r / e) * 100) / 100), `translate(${a}, ${s})`)}`;
                        }),
                        children: [
                            (0, i.jsxs)("svg", {
                                width: J,
                                height: ee,
                                viewBox: `0 0 ${J} ${ee}`,
                                className: M ? g.Oi : void 0,
                                children: [
                                    (0, u.pF)(Z, Q.status, B),
                                    (0, i.jsx)(l.animated.rect, { fill: q, width: J, height: ee, mask: `url(#${B})` }),
                                    (0, i.jsx)(c.n, {
                                        ref: A,
                                        dotRadius: Q.status / 4,
                                        x: 0.15 * J,
                                        y: 0.5 * ee,
                                        hide: !E,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(C, { size: m, isMobile: o, isTyping: E, className: g.Hs }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
y.displayName = "AvatarImg";
let M = r.memo(function (e) {
    var t, n;
    let { statusColor: a, status: s, ...l } = e,
        { isMobile: o = !1, isTyping: d = !1, isVR: c = !1 } = l,
        _ = r.useRef(s),
        E = r.useRef(o),
        A = (0, u.S3)(s, a),
        h = r.useRef(A),
        I = r.useRef(!1),
        p =
            I.current ||
            ((t = _.current),
            (n = E.current),
            null != t && null != s && (!!d || s !== t || (s === f.clD.ONLINE && o !== n)));
    return (
        r.useLayoutEffect(() => {
            (I.current = p), (_.current = s), (E.current = o), (h.current = A);
        }, [s, o, A, p]),
        !c && null != s && null != _.current && p
            ? (0, i.jsx)(b, {
                  ...l,
                  status: s,
                  statusColor: A,
                  fromStatus: _.current,
                  fromIsMobile: E.current,
                  fromColor: h.current,
              })
            : (0, i.jsx)(v, { ...l, status: s, statusColor: A })
    );
});
