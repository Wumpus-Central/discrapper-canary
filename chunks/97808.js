"use strict";
n.d(t, { Js: () => D, Rb: () => C, d9: () => O, eu: () => b });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(939249),
    u = n(717421),
    d = n(863610),
    c = n(133171),
    _ = n(990078),
    h = n(556525),
    f = n(573435),
    E = n(427262),
    p = n(652215),
    m = n(190460),
    g = n(778712),
    A = n(375708),
    I = n(282291);
let T = { tension: 1200, friction: 70 };
function S() {
    return document.hasFocus();
}
function N(e) {
    let { size: t, isMobile: n, isTyping: r, ...s } = e,
        a = (0, g.Kj)(t),
        o = a.status * (n && !r ? 1.5 : 1),
        l = a.status * (r ? 2.5 : 1),
        u = r ? (2.5 * a.status - a.status) / 2 : 0,
        d = a.size - a.status - u - a.offset,
        c = a.size - o - a.offset;
    return (0, i.jsx)("rect", { x: d, y: c, width: l, height: o, fill: "transparent", "aria-hidden": !0, ...s });
}
function C(e, t, n) {
    let { isTyping: i, isMobile: r, isVR: s } = n,
        a = (0, c.i0)(e.status, t, { isTyping: i, isMobile: r, isVR: s }),
        o = (i ? e.size - (a.width / 2 + e.status / 2) : e.size - a.width) - e.offset;
    return { ...a, x: o, y: e.size - a.height - e.offset };
}
function y(e, t, n, r) {
    let { isMobile: s, isTyping: a, isVR: o } = r,
        l = C(t, n, { isMobile: s, isTyping: a, isVR: o }),
        u = (0, c.yi)(n, e),
        d = n === p.clD.ONLINE && o;
    if (!(s || d)) {
        let n = l.height / 2 + t.stroke,
            r = l.x + t.status / 2;
        return (0, i.jsx)("circle", { style: { opacity: u }, fill: e, r: n, cx: r, cy: r });
    }
    let _ = l.height + 2 * t.stroke,
        h = l.width + 2 * t.stroke,
        f = l.x - t.stroke,
        E = l.y - t.stroke,
        m = d ? _ / 2 : t.stroke;
    return (0, i.jsx)("rect", { fill: e, height: _, width: h, style: { opacity: u }, x: f, y: E, rx: m });
}
function v(e) {
    let { status: t, isMobile: n, isTyping: i, size: r } = e,
        s = n && !i && t === p.clD.ONLINE,
        a = (0, g.Kj)(r);
    return {
        ...(function (e, t) {
            let { size: n, status: i, stroke: r, offset: s } = e,
                { isTyping: a, isMobile: o, isVR: l } = t,
                u = a ? 2.5 * i : i,
                d = o && !l,
                c = d ? 1.5 * i : i;
            return {
                avatarCutoutX: n - u + (u - i) / 2 - r - s,
                avatarCutoutY: n - c - r - s,
                avatarCutoutWidth: u + 2 * r,
                avatarCutoutHeight: c + 2 * r,
                avatarCutoutRadius: d ? (c + 2 * r) * 0.2 : (i + 2 * r) / 2,
            };
        })(a, { isMobile: s, isTyping: i, isVR: !1 }),
        ...(0, c.v)({ status: t, size: a.status, isMobile: s, isTyping: i, topOffset: 2, leftOffset: 6 }),
    };
}
function R(e) {
    let {
            children: t,
            size: n,
            onClick: r,
            onMouseDown: s,
            onKeyDown: o,
            onContextMenu: u,
            onMouseEnter: d,
            onMouseLeave: c,
            className: _,
            tabIndex: h,
            ariaLabel: T,
            ariaHidden: S,
            status: N,
            isMobile: C = !1,
            isVR: y = !1,
            isTyping: v = !1,
            avatarDecoration: R,
            typingOffset: O,
            specs: b,
        } = e,
        L = { width: (0, g.FT)(n), height: (0, g.FT)(n) },
        D =
            null == T || S
                ? void 0
                : (function (e, t) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                      return null != t
                          ? A.intl.formatToPlainString(A.t["/6mw10"], {
                                label: e,
                                status: (0, E.MU)(t, { isMobile: n, isVR: i }),
                            })
                          : e;
                  })(T, N, C, y),
        P = b.size * m.Xq,
        w = (function (e, t, n, i) {
            let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return null;
            if (i)
                switch (t) {
                    case g._3.SIZE_16:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_16;
                    case g._3.SIZE_20:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_20;
                    case g._3.SIZE_24:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_24;
                    case g._3.SIZE_32:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_32;
                    case g._3.SIZE_40:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_40;
                    case g._3.SIZE_44:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_44;
                    case g._3.SIZE_48:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_48;
                    case g._3.SIZE_56:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_56;
                    case g._3.SIZE_72:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_72;
                    case g._3.SIZE_80:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_80;
                    case g._3.SIZE_96:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_96;
                    case g._3.SIZE_120:
                        return f.hW.AVATAR_DECORATION_STATUS_TYPING_120;
                }
            if (e === p.clD.ONLINE && r)
                switch (t) {
                    case g._3.SIZE_16:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_16;
                    case g._3.SIZE_20:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_20;
                    case g._3.SIZE_24:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_24;
                    case g._3.SIZE_32:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_32;
                    case g._3.SIZE_40:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_40;
                    case g._3.SIZE_44:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_44;
                    case g._3.SIZE_48:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_48;
                    case g._3.SIZE_56:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_56;
                    case g._3.SIZE_72:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_72;
                    case g._3.SIZE_80:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_80;
                    case g._3.SIZE_96:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_96;
                    case g._3.SIZE_120:
                        return f.hW.AVATAR_DECORATION_STATUS_VR_120;
                }
            if (n && !r)
                switch (t) {
                    case g._3.SIZE_16:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_16;
                    case g._3.SIZE_20:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_20;
                    case g._3.SIZE_24:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_24;
                    case g._3.SIZE_32:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_32;
                    case g._3.SIZE_40:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_40;
                    case g._3.SIZE_44:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_44;
                    case g._3.SIZE_48:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_48;
                    case g._3.SIZE_56:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_56;
                    case g._3.SIZE_72:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_72;
                    case g._3.SIZE_80:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_80;
                    case g._3.SIZE_96:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_96;
                    case g._3.SIZE_120:
                        return f.hW.AVATAR_DECORATION_STATUS_MOBILE_120;
                }
            switch (t) {
                case g._3.SIZE_16:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_16;
                case g._3.SIZE_20:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_20;
                case g._3.SIZE_24:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_24;
                case g._3.SIZE_32:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_32;
                case g._3.SIZE_40:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_40;
                case g._3.SIZE_44:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_44;
                case g._3.SIZE_48:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_48;
                case g._3.SIZE_56:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_56;
                case g._3.SIZE_72:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_72;
                case g._3.SIZE_80:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_80;
                case g._3.SIZE_96:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_96;
                case g._3.SIZE_120:
                    return f.hW.AVATAR_DECORATION_STATUS_ROUND_120;
            }
            return null;
        })(N, n, C, v, y),
        M =
            null != R &&
            (0, i.jsx)("svg", {
                width: P + O,
                height: P,
                viewBox: `0 0 ${P + O} ${P}`,
                className: I.DX,
                "aria-hidden": !0,
                children: (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: P,
                    height: P,
                    mask: null != w ? `url(#${w})` : void 0,
                    children: (0, i.jsx)("img", { className: I.M, src: R, alt: " ", "aria-hidden": !0 }),
                }),
            });
    return null != r || null != s
        ? (0, i.jsxs)(l.D, {
              className: a()(I.iE, I.Wn, _),
              style: L,
              onClick: r,
              tabIndex: h,
              onContextMenu: u,
              onMouseDown: s,
              onKeyDown: o,
              onMouseEnter: d ?? void 0,
              onMouseLeave: c ?? void 0,
              "aria-label": D,
              "aria-hidden": S,
              children: [t, M],
          })
        : (0, i.jsxs)("div", {
              className: a()(I.iE, _),
              style: L,
              onContextMenu: u ?? void 0,
              onMouseEnter: d ?? void 0,
              onMouseLeave: c ?? void 0,
              role: "img",
              "aria-label": D,
              "aria-hidden": S,
              children: [t, M],
          });
}
let O = r.forwardRef((e, t) => {
    let { src: n, isSpeaking: r, className: s, voiceDb: o = -1 / 0, speakingStylesConfig: l } = e,
        u = (0, h.v)({ isSpeaking: r, voiceDb: o, spreadDirection: h.O.INSET_ONLY, maxInnerSpreadRadius: 4, ...l });
    return (0, i.jsxs)(
        "div",
        {
            ref: t,
            className: a()(I.yA, s),
            children: [
                (0, i.jsx)("img", { src: n ?? void 0, alt: " ", className: I.my, "aria-hidden": !0 }),
                r && (0, i.jsx)("div", { className: I.uh, style: u }),
            ],
        },
        n,
    );
});
function b(e) {
    let {
            src: t,
            status: n,
            size: r,
            statusColor: s,
            isMobile: o = !1,
            isVR: l = !1,
            isTyping: u = !1,
            typingIndicatorRef: h,
            avatarContentRef: m,
            isSpeaking: A = !1,
            voiceDb: T,
            speakingStylesConfig: S,
            statusTooltip: N = !1,
            statusTooltipDelay: v,
            statusBackdropColor: b,
            "aria-hidden": L = !1,
            "aria-label": D,
            imageClassName: P,
            ref: w,
        } = e,
        M = n !== p.clD.UNKNOWN ? n : null,
        x = (0, g.Kj)(r),
        U = null != M ? Math.ceil((2.5 * x.status - x.status) / 2) : 0,
        k = x.size + U,
        G = (0, c.S3)(M, s);
    return (0, i.jsx)(R, {
        ...e,
        ariaLabel: D,
        ariaHidden: L,
        status: M,
        specs: x,
        typingOffset: U,
        children: (0, i.jsxs)("svg", {
            ref: w,
            width: k,
            height: k,
            viewBox: `0 0 ${k} ${k}`,
            className: a()(I.dK, I.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: x.size,
                    height: x.size,
                    mask: `url(#${(function (e, t, n, i) {
                        let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        if (null == e) return f.hW.AVATAR_DEFAULT;
                        if (i)
                            switch (t) {
                                case g._3.SIZE_16:
                                    return f.hW.AVATAR_STATUS_TYPING_16;
                                case g._3.SIZE_20:
                                    return f.hW.AVATAR_STATUS_TYPING_20;
                                case g._3.SIZE_24:
                                    return f.hW.AVATAR_STATUS_TYPING_24;
                                case g._3.SIZE_32:
                                    return f.hW.AVATAR_STATUS_TYPING_32;
                                case g._3.SIZE_40:
                                    return f.hW.AVATAR_STATUS_TYPING_40;
                                case g._3.SIZE_44:
                                    return f.hW.AVATAR_STATUS_TYPING_44;
                                case g._3.SIZE_48:
                                    return f.hW.AVATAR_STATUS_TYPING_48;
                                case g._3.SIZE_56:
                                    return f.hW.AVATAR_STATUS_TYPING_56;
                                case g._3.SIZE_72:
                                    return f.hW.AVATAR_STATUS_TYPING_72;
                                case g._3.SIZE_80:
                                    return f.hW.AVATAR_STATUS_TYPING_80;
                                case g._3.SIZE_96:
                                    return f.hW.AVATAR_STATUS_TYPING_96;
                                case g._3.SIZE_120:
                                    return f.hW.AVATAR_STATUS_TYPING_120;
                            }
                        if (e === p.clD.ONLINE && r)
                            switch (t) {
                                case g._3.SIZE_16:
                                    return f.hW.AVATAR_STATUS_VR_16;
                                case g._3.SIZE_20:
                                    return f.hW.AVATAR_STATUS_VR_20;
                                case g._3.SIZE_24:
                                    return f.hW.AVATAR_STATUS_VR_24;
                                case g._3.SIZE_32:
                                    return f.hW.AVATAR_STATUS_VR_32;
                                case g._3.SIZE_40:
                                    return f.hW.AVATAR_STATUS_VR_40;
                                case g._3.SIZE_44:
                                    return f.hW.AVATAR_STATUS_VR_44;
                                case g._3.SIZE_48:
                                    return f.hW.AVATAR_STATUS_VR_48;
                                case g._3.SIZE_56:
                                    return f.hW.AVATAR_STATUS_VR_56;
                                case g._3.SIZE_72:
                                    return f.hW.AVATAR_STATUS_VR_72;
                                case g._3.SIZE_80:
                                    return f.hW.AVATAR_STATUS_VR_80;
                                case g._3.SIZE_96:
                                    return f.hW.AVATAR_STATUS_VR_96;
                                case g._3.SIZE_120:
                                    return f.hW.AVATAR_STATUS_VR_120;
                            }
                        if (e === p.clD.ONLINE && n && !r)
                            switch (t) {
                                case g._3.SIZE_16:
                                    return f.hW.AVATAR_STATUS_MOBILE_16;
                                case g._3.SIZE_20:
                                    return f.hW.AVATAR_STATUS_MOBILE_20;
                                case g._3.SIZE_24:
                                    return f.hW.AVATAR_STATUS_MOBILE_24;
                                case g._3.SIZE_32:
                                    return f.hW.AVATAR_STATUS_MOBILE_32;
                                case g._3.SIZE_40:
                                    return f.hW.AVATAR_STATUS_MOBILE_40;
                                case g._3.SIZE_44:
                                    return f.hW.AVATAR_STATUS_MOBILE_44;
                                case g._3.SIZE_48:
                                    return f.hW.AVATAR_STATUS_MOBILE_48;
                                case g._3.SIZE_56:
                                    return f.hW.AVATAR_STATUS_MOBILE_56;
                                case g._3.SIZE_72:
                                    return f.hW.AVATAR_STATUS_MOBILE_72;
                                case g._3.SIZE_80:
                                    return f.hW.AVATAR_STATUS_MOBILE_80;
                                case g._3.SIZE_96:
                                    return f.hW.AVATAR_STATUS_MOBILE_96;
                                case g._3.SIZE_120:
                                    return f.hW.AVATAR_STATUS_MOBILE_120;
                            }
                        switch (t) {
                            case g._3.SIZE_16:
                                return f.hW.AVATAR_STATUS_ROUND_16;
                            case g._3.SIZE_20:
                                return f.hW.AVATAR_STATUS_ROUND_20;
                            case g._3.SIZE_24:
                                return f.hW.AVATAR_STATUS_ROUND_24;
                            case g._3.SIZE_32:
                                return f.hW.AVATAR_STATUS_ROUND_32;
                            case g._3.SIZE_40:
                                return f.hW.AVATAR_STATUS_ROUND_40;
                            case g._3.SIZE_44:
                                return f.hW.AVATAR_STATUS_ROUND_44;
                            case g._3.SIZE_48:
                                return f.hW.AVATAR_STATUS_ROUND_48;
                            case g._3.SIZE_56:
                                return f.hW.AVATAR_STATUS_ROUND_56;
                            case g._3.SIZE_72:
                                return f.hW.AVATAR_STATUS_ROUND_72;
                            case g._3.SIZE_80:
                                return f.hW.AVATAR_STATUS_ROUND_80;
                            case g._3.SIZE_96:
                                return f.hW.AVATAR_STATUS_ROUND_96;
                            case g._3.SIZE_120:
                                return f.hW.AVATAR_STATUS_ROUND_120;
                        }
                        throw Error(
                            `getMaskId(): Unsupported type, size: ${t}, status: ${e}, isMobile: ${n ? "true" : "false"}`,
                        );
                    })(M, r, o, u, l)})`,
                    children: (0, i.jsx)(O, {
                        ref: m,
                        src: t,
                        isSpeaking: A,
                        voiceDb: T,
                        speakingStylesConfig: S,
                        className: P,
                    }),
                }),
                null != M && null != b ? y(b, x, M, { isMobile: o, isTyping: u, isVR: l }) : null,
                null != M
                    ? (0, i.jsx)(_.m, {
                          text: N ? (0, E.MU)(M) : null,
                          ariaHidden: !0,
                          position: "top",
                          spacing: 5 + 1.5 * x.stroke,
                          delay: v,
                          children: (0, i.jsxs)("g", {
                              children: [
                                  (0, i.jsx)("rect", {
                                      ...C(x, M, { isMobile: o, isTyping: u, isVR: l }),
                                      fill: G,
                                      mask: `url(#${(0, c.p8)(M, { isMobile: o, isTyping: u, isVR: l })})`,
                                      className: I.Hs,
                                  }),
                                  u
                                      ? (0, i.jsx)(d.n, {
                                            ref: h,
                                            dotRadius: x.status / 4,
                                            x: x.size - 1.375 * x.status - x.offset,
                                            y: x.size - x.status / 1.333 - x.offset,
                                        })
                                      : null,
                              ],
                          }),
                      })
                    : null,
            ],
        }),
    });
}
function L(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: s,
            isMobile: l = !1,
            isTyping: h = !1,
            typingIndicatorRef: f,
            isSpeaking: p = !1,
            voiceDb: m,
            speakingStylesConfig: A,
            size: C,
            src: b,
            status: L,
            statusColor: D,
            statusTooltip: P = !1,
            statusTooltipDelay: w,
            statusBackdropColor: M,
            "aria-hidden": x = !1,
            "aria-label": U,
            imageClassName: k,
            pulseStatusIcon: G,
        } = e,
        V = (0, c.S3)(L, D),
        F = r.useId(),
        B = r.useId(),
        [j] = r.useState(() => ({ fill: s, ...v({ size: C, status: n, isMobile: t, isTyping: !1 }) })),
        H = r.useMemo(() => ({ fill: V, ...v({ size: C, status: L, isMobile: l, isTyping: h }) }), [V, C, L, l, h]),
        {
            avatarCutoutX: W,
            avatarCutoutY: Y,
            avatarCutoutWidth: K,
            avatarCutoutHeight: $,
            avatarCutoutRadius: z,
            fill: q,
            ...Z
        } = (0, u.z)({ config: T, from: j, to: H }, S() ? "animate-always" : "animate-never"),
        X = (0, g.FT)(C),
        Q = (0, g.Kj)(C),
        J = 2.5 * Q.status,
        ee = 1.5 * Q.status,
        et = null != L ? (2.5 * Q.status - Q.status) / 2 : 0,
        en = Q.size + Math.ceil(et),
        [ei, er, es] = (0, u.z)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: G ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            S() ? "animate-always" : "animate-never",
            [G, L],
        );
    return (0, i.jsx)(R, {
        ...e,
        ariaLabel: U,
        ariaHidden: x,
        typingOffset: et,
        specs: Q,
        children: (0, i.jsxs)("svg", {
            width: en,
            height: en,
            viewBox: `0 0 ${en} ${en}`,
            className: a()(I.dK, I.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: F,
                    width: X,
                    height: X,
                    children: [
                        (0, i.jsx)("circle", { cx: X / 2, cy: X / 2, r: X / 2, fill: "white" }),
                        (0, i.jsx)(o.animated.rect, { color: "black", x: W, y: Y, width: K, height: $, rx: z, ry: z }),
                    ],
                }),
                (0, i.jsx)("foreignObject", {
                    className: I.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: X,
                    height: X,
                    mask: `url(#${F})`,
                    children: (0, i.jsx)(O, {
                        src: b,
                        isSpeaking: p,
                        voiceDb: m,
                        className: k,
                        speakingStylesConfig: A,
                    }),
                }),
                null != M && y(M, Q, L, { isMobile: l, isTyping: h, isVR: !1 }),
                (0, i.jsx)(_.m, {
                    text: P ? (0, E.MU)(L) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: (function (e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return 5 - (n && !i ? 0 : 0.5 * e) + 1.5 * t;
                    })(Q.status, Q.stroke, l, h),
                    delay: w,
                    children: (0, i.jsxs)(o.animated.g, {
                        transform: ei.scale.to((e) => {
                            let t, n, i, r, s, a;
                            return `scale(${e}) ${((t = Q.status * e), (n = (Q.status - t) / 2), (i = Q.size - t - (null != L ? (2.5 * t - t) / 2 : 0) - Q.offset - n), (r = Q.size - 1.5 * t - Q.offset - n), (s = Math.round((i / e) * 100) / 100), (a = Math.round((r / e) * 100) / 100), `translate(${s}, ${a})`)}`;
                        }),
                        children: [
                            (0, i.jsxs)("svg", {
                                width: J,
                                height: ee,
                                viewBox: `0 0 ${J} ${ee}`,
                                className: P ? I.Oi : void 0,
                                children: [
                                    (0, c.pF)(Z, Q.status, B),
                                    (0, i.jsx)(o.animated.rect, { fill: q, width: J, height: ee, mask: `url(#${B})` }),
                                    (0, i.jsx)(d.n, {
                                        ref: f,
                                        dotRadius: Q.status / 4,
                                        x: 0.15 * J,
                                        y: 0.5 * ee,
                                        hide: !h,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(N, { size: C, isMobile: l, isTyping: h, className: I.Hs }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
O.displayName = "AvatarImg";
let D = r.memo(function (e) {
    var t, n;
    let { statusColor: s, status: a, ...o } = e,
        { isMobile: l = !1, isTyping: u = !1, isVR: d = !1 } = o,
        _ = r.useRef(a),
        h = r.useRef(l),
        f = (0, c.S3)(a, s),
        E = r.useRef(f),
        m = r.useRef(!1),
        g =
            m.current ||
            ((t = _.current),
            (n = h.current),
            null != t && null != a && (!!u || a !== t || (a === p.clD.ONLINE && l !== n)));
    return (
        r.useLayoutEffect(() => {
            (m.current = g), (_.current = a), (h.current = l), (E.current = f);
        }, [a, l, f, g]),
        !d && null != a && null != _.current && g
            ? (0, i.jsx)(L, {
                  ...o,
                  status: a,
                  statusColor: f,
                  fromStatus: _.current,
                  fromIsMobile: h.current,
                  fromColor: E.current,
              })
            : (0, i.jsx)(b, { ...o, status: a, statusColor: f })
    );
});
