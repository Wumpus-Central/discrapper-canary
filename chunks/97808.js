"use strict";
n.d(t, { Js: () => L, Rb: () => y, d9: () => R, eu: () => b });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(785651),
    l = n(939249),
    u = n(717421),
    c = n(863610),
    d = n(133171),
    _ = n(990078),
    f = n(556525),
    h = n(573435),
    p = n(427262),
    E = n(652215),
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
        c = a.size - a.status - u - a.offset,
        d = a.size - o - a.offset;
    return (0, i.jsx)("rect", { x: c, y: d, width: l, height: o, fill: "transparent", "aria-hidden": !0, ...s });
}
function y(e, t, n) {
    let { isTyping: i, isMobile: r, isVR: s } = n,
        a = (0, d.i0)(e.status, t, { isTyping: i, isMobile: r, isVR: s }),
        o = (i ? e.size - (a.width / 2 + e.status / 2) : e.size - a.width) - e.offset;
    return { ...a, x: o, y: e.size - a.height - e.offset };
}
function C(e, t, n, r) {
    let { isMobile: s, isTyping: a, isVR: o } = r,
        l = y(t, n, { isMobile: s, isTyping: a, isVR: o }),
        u = (0, d.yi)(n, e);
    if (!(s && !o)) {
        let n = l.height / 2 + t.stroke,
            r = l.x + t.status / 2;
        return (0, i.jsx)("circle", { style: { opacity: u }, fill: e, r: n, cx: r, cy: r });
    }
    let c = l.height + 2 * t.stroke,
        _ = l.width + 2 * t.stroke,
        f = l.x - t.stroke,
        h = l.y - t.stroke;
    return (0, i.jsx)("rect", { fill: e, height: c, width: _, style: { opacity: u }, x: f, y: h, rx: t.stroke });
}
function v(e) {
    let { status: t, isMobile: n, isTyping: i, size: r } = e,
        s = n && !i && t === E.clD.ONLINE,
        a = (0, g.Kj)(r);
    return {
        ...(function (e, t) {
            let { size: n, status: i, stroke: r, offset: s } = e,
                { isTyping: a, isMobile: o, isVR: l } = t,
                u = a ? 2.5 * i : i,
                c = o && !l,
                d = c ? 1.5 * i : i;
            return {
                avatarCutoutX: n - u + (u - i) / 2 - r - s,
                avatarCutoutY: n - d - r - s,
                avatarCutoutWidth: u + 2 * r,
                avatarCutoutHeight: d + 2 * r,
                avatarCutoutRadius: c ? (d + 2 * r) * 0.2 : (i + 2 * r) / 2,
            };
        })(a, { isMobile: s, isTyping: i, isVR: !1 }),
        ...(0, d.v)({ status: t, size: a.status, isMobile: s, isTyping: i, topOffset: 2, leftOffset: 6 }),
    };
}
function O(e) {
    let {
            children: t,
            size: n,
            onClick: r,
            onMouseDown: s,
            onKeyDown: o,
            onContextMenu: u,
            onMouseEnter: c,
            onMouseLeave: d,
            className: _,
            tabIndex: f,
            ariaLabel: E,
            ariaHidden: T,
            status: S,
            isMobile: N = !1,
            isVR: y = !1,
            isTyping: C = !1,
            avatarDecoration: v,
            typingOffset: O,
            specs: R,
        } = e,
        b = { width: (0, g.FT)(n), height: (0, g.FT)(n) },
        D =
            null == E || T
                ? void 0
                : (function (e, t) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                      return null != t
                          ? A.intl.formatToPlainString(A.t["/6mw10"], {
                                label: e,
                                status: (0, p.MU)(t, { isMobile: n, isVR: i }),
                            })
                          : e;
                  })(E, S, N, y),
        L = R.size * m.Xq,
        w = (function (e, t, n, i) {
            let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return null;
            if (i)
                switch (t) {
                    case g._3.SIZE_16:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_16;
                    case g._3.SIZE_20:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_20;
                    case g._3.SIZE_24:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_24;
                    case g._3.SIZE_32:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_32;
                    case g._3.SIZE_40:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_40;
                    case g._3.SIZE_44:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_44;
                    case g._3.SIZE_48:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_48;
                    case g._3.SIZE_56:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_56;
                    case g._3.SIZE_72:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_72;
                    case g._3.SIZE_80:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_80;
                    case g._3.SIZE_96:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_96;
                    case g._3.SIZE_120:
                        return h.hW.AVATAR_DECORATION_STATUS_TYPING_120;
                }
            if (n && !r)
                switch (t) {
                    case g._3.SIZE_16:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_16;
                    case g._3.SIZE_20:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_20;
                    case g._3.SIZE_24:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_24;
                    case g._3.SIZE_32:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_32;
                    case g._3.SIZE_40:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_40;
                    case g._3.SIZE_44:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_44;
                    case g._3.SIZE_48:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_48;
                    case g._3.SIZE_56:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_56;
                    case g._3.SIZE_72:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_72;
                    case g._3.SIZE_80:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_80;
                    case g._3.SIZE_96:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_96;
                    case g._3.SIZE_120:
                        return h.hW.AVATAR_DECORATION_STATUS_MOBILE_120;
                }
            switch (t) {
                case g._3.SIZE_16:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_16;
                case g._3.SIZE_20:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_20;
                case g._3.SIZE_24:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_24;
                case g._3.SIZE_32:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_32;
                case g._3.SIZE_40:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_40;
                case g._3.SIZE_44:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_44;
                case g._3.SIZE_48:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_48;
                case g._3.SIZE_56:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_56;
                case g._3.SIZE_72:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_72;
                case g._3.SIZE_80:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_80;
                case g._3.SIZE_96:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_96;
                case g._3.SIZE_120:
                    return h.hW.AVATAR_DECORATION_STATUS_ROUND_120;
            }
            return null;
        })(S, n, N, C, y),
        M =
            null != v &&
            (0, i.jsx)("svg", {
                width: L + O,
                height: L,
                viewBox: `0 0 ${L + O} ${L}`,
                className: I.DX,
                "aria-hidden": !0,
                children: (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: L,
                    height: L,
                    mask: null != w ? `url(#${w})` : void 0,
                    children: (0, i.jsx)("img", { className: I.M, src: v, alt: " ", "aria-hidden": !0 }),
                }),
            });
    return null != r || null != s
        ? (0, i.jsxs)(l.D, {
              className: a()(I.iE, I.Wn, _),
              style: b,
              onClick: r,
              tabIndex: f,
              onContextMenu: u,
              onMouseDown: s,
              onKeyDown: o,
              onMouseEnter: c ?? void 0,
              onMouseLeave: d ?? void 0,
              "aria-label": D,
              "aria-hidden": T,
              children: [t, M],
          })
        : (0, i.jsxs)("div", {
              className: a()(I.iE, _),
              style: b,
              onContextMenu: u ?? void 0,
              onMouseEnter: c ?? void 0,
              onMouseLeave: d ?? void 0,
              role: "img",
              "aria-label": D,
              "aria-hidden": T,
              children: [t, M],
          });
}
let R = r.forwardRef((e, t) => {
    let { src: n, isSpeaking: r, className: s, voiceDb: o = -1 / 0, speakingStylesConfig: l } = e,
        u = (0, f.v)({ isSpeaking: r, voiceDb: o, spreadDirection: f.O.INSET_ONLY, maxInnerSpreadRadius: 4, ...l });
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
            typingIndicatorRef: f,
            avatarContentRef: m,
            isSpeaking: A = !1,
            voiceDb: T,
            speakingStylesConfig: S,
            statusTooltip: N = !1,
            statusTooltipDelay: v,
            statusBackdropColor: b,
            "aria-hidden": D = !1,
            "aria-label": L,
            imageClassName: w,
            ref: M,
        } = e,
        P = n !== E.clD.UNKNOWN ? n : null,
        x = (0, g.Kj)(r),
        U = null != P ? Math.ceil((2.5 * x.status - x.status) / 2) : 0,
        k = x.size + U,
        G = (0, d.S3)(P, s);
    return (0, i.jsx)(O, {
        ...e,
        ariaLabel: L,
        ariaHidden: D,
        status: P,
        specs: x,
        typingOffset: U,
        children: (0, i.jsxs)("svg", {
            ref: M,
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
                        if (null == e) return h.hW.AVATAR_DEFAULT;
                        if (i)
                            switch (t) {
                                case g._3.SIZE_16:
                                    return h.hW.AVATAR_STATUS_TYPING_16;
                                case g._3.SIZE_20:
                                    return h.hW.AVATAR_STATUS_TYPING_20;
                                case g._3.SIZE_24:
                                    return h.hW.AVATAR_STATUS_TYPING_24;
                                case g._3.SIZE_32:
                                    return h.hW.AVATAR_STATUS_TYPING_32;
                                case g._3.SIZE_40:
                                    return h.hW.AVATAR_STATUS_TYPING_40;
                                case g._3.SIZE_44:
                                    return h.hW.AVATAR_STATUS_TYPING_44;
                                case g._3.SIZE_48:
                                    return h.hW.AVATAR_STATUS_TYPING_48;
                                case g._3.SIZE_56:
                                    return h.hW.AVATAR_STATUS_TYPING_56;
                                case g._3.SIZE_72:
                                    return h.hW.AVATAR_STATUS_TYPING_72;
                                case g._3.SIZE_80:
                                    return h.hW.AVATAR_STATUS_TYPING_80;
                                case g._3.SIZE_96:
                                    return h.hW.AVATAR_STATUS_TYPING_96;
                                case g._3.SIZE_120:
                                    return h.hW.AVATAR_STATUS_TYPING_120;
                            }
                        if (e === E.clD.ONLINE && n && !r)
                            switch (t) {
                                case g._3.SIZE_16:
                                    return h.hW.AVATAR_STATUS_MOBILE_16;
                                case g._3.SIZE_20:
                                    return h.hW.AVATAR_STATUS_MOBILE_20;
                                case g._3.SIZE_24:
                                    return h.hW.AVATAR_STATUS_MOBILE_24;
                                case g._3.SIZE_32:
                                    return h.hW.AVATAR_STATUS_MOBILE_32;
                                case g._3.SIZE_40:
                                    return h.hW.AVATAR_STATUS_MOBILE_40;
                                case g._3.SIZE_44:
                                    return h.hW.AVATAR_STATUS_MOBILE_44;
                                case g._3.SIZE_48:
                                    return h.hW.AVATAR_STATUS_MOBILE_48;
                                case g._3.SIZE_56:
                                    return h.hW.AVATAR_STATUS_MOBILE_56;
                                case g._3.SIZE_72:
                                    return h.hW.AVATAR_STATUS_MOBILE_72;
                                case g._3.SIZE_80:
                                    return h.hW.AVATAR_STATUS_MOBILE_80;
                                case g._3.SIZE_96:
                                    return h.hW.AVATAR_STATUS_MOBILE_96;
                                case g._3.SIZE_120:
                                    return h.hW.AVATAR_STATUS_MOBILE_120;
                            }
                        switch (t) {
                            case g._3.SIZE_16:
                                return h.hW.AVATAR_STATUS_ROUND_16;
                            case g._3.SIZE_20:
                                return h.hW.AVATAR_STATUS_ROUND_20;
                            case g._3.SIZE_24:
                                return h.hW.AVATAR_STATUS_ROUND_24;
                            case g._3.SIZE_32:
                                return h.hW.AVATAR_STATUS_ROUND_32;
                            case g._3.SIZE_40:
                                return h.hW.AVATAR_STATUS_ROUND_40;
                            case g._3.SIZE_44:
                                return h.hW.AVATAR_STATUS_ROUND_44;
                            case g._3.SIZE_48:
                                return h.hW.AVATAR_STATUS_ROUND_48;
                            case g._3.SIZE_56:
                                return h.hW.AVATAR_STATUS_ROUND_56;
                            case g._3.SIZE_72:
                                return h.hW.AVATAR_STATUS_ROUND_72;
                            case g._3.SIZE_80:
                                return h.hW.AVATAR_STATUS_ROUND_80;
                            case g._3.SIZE_96:
                                return h.hW.AVATAR_STATUS_ROUND_96;
                            case g._3.SIZE_120:
                                return h.hW.AVATAR_STATUS_ROUND_120;
                        }
                        throw Error(
                            `getMaskId(): Unsupported type, size: ${t}, status: ${e}, isMobile: ${n ? "true" : "false"}`,
                        );
                    })(P, r, o, u, l)})`,
                    children: (0, i.jsx)(R, {
                        ref: m,
                        src: t,
                        isSpeaking: A,
                        voiceDb: T,
                        speakingStylesConfig: S,
                        className: w,
                    }),
                }),
                null != P && null != b ? C(b, x, P, { isMobile: o, isTyping: u, isVR: l }) : null,
                null != P
                    ? (0, i.jsx)(_.m, {
                          text: N ? (0, p.MU)(P) : null,
                          ariaHidden: !0,
                          position: "top",
                          spacing: 5 + 1.5 * x.stroke,
                          delay: v,
                          children: (0, i.jsxs)("g", {
                              children: [
                                  (0, i.jsx)("rect", {
                                      ...y(x, P, { isMobile: o, isTyping: u, isVR: l }),
                                      fill: G,
                                      mask: `url(#${(0, d.p8)(P, { isMobile: o, isTyping: u, isVR: l })})`,
                                      className: I.Hs,
                                  }),
                                  u
                                      ? (0, i.jsx)(c.n, {
                                            ref: f,
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
function D(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: s,
            isMobile: l = !1,
            isTyping: f = !1,
            typingIndicatorRef: h,
            isSpeaking: E = !1,
            voiceDb: m,
            speakingStylesConfig: A,
            size: y,
            src: b,
            status: D,
            statusColor: L,
            statusTooltip: w = !1,
            statusTooltipDelay: M,
            statusBackdropColor: P,
            "aria-hidden": x = !1,
            "aria-label": U,
            imageClassName: k,
            pulseStatusIcon: G,
        } = e,
        F = (0, d.S3)(D, L),
        V = r.useId(),
        B = r.useId(),
        [H] = r.useState(() => ({ fill: s, ...v({ size: y, status: n, isMobile: t, isTyping: !1 }) })),
        j = r.useMemo(() => ({ fill: F, ...v({ size: y, status: D, isMobile: l, isTyping: f }) }), [F, y, D, l, f]),
        {
            avatarCutoutX: Y,
            avatarCutoutY: W,
            avatarCutoutWidth: K,
            avatarCutoutHeight: z,
            avatarCutoutRadius: $,
            fill: q,
            ...Z
        } = (0, u.z)({ config: T, from: H, to: j }, S() ? "animate-always" : "animate-never"),
        X = (0, g.FT)(y),
        Q = (0, g.Kj)(y),
        J = 2.5 * Q.status,
        ee = 1.5 * Q.status,
        et = null != D ? (2.5 * Q.status - Q.status) / 2 : 0,
        en = Q.size + Math.ceil(et),
        [ei, er, es] = (0, u.z)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: G ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            S() ? "animate-always" : "animate-never",
            [G, D],
        );
    return (0, i.jsx)(O, {
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
                    id: V,
                    width: X,
                    height: X,
                    children: [
                        (0, i.jsx)("circle", { cx: X / 2, cy: X / 2, r: X / 2, fill: "white" }),
                        (0, i.jsx)(o.animated.rect, { color: "black", x: Y, y: W, width: K, height: z, rx: $, ry: $ }),
                    ],
                }),
                (0, i.jsx)("foreignObject", {
                    className: I.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: X,
                    height: X,
                    mask: `url(#${V})`,
                    children: (0, i.jsx)(R, {
                        src: b,
                        isSpeaking: E,
                        voiceDb: m,
                        className: k,
                        speakingStylesConfig: A,
                    }),
                }),
                null != P && C(P, Q, D, { isMobile: l, isTyping: f, isVR: !1 }),
                (0, i.jsx)(_.m, {
                    text: w ? (0, p.MU)(D) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: (function (e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return 5 - (n && !i ? 0 : 0.5 * e) + 1.5 * t;
                    })(Q.status, Q.stroke, l, f),
                    delay: M,
                    children: (0, i.jsxs)(o.animated.g, {
                        transform: ei.scale.to((e) => {
                            let t, n, i, r, s, a;
                            return `scale(${e}) ${((t = Q.status * e), (n = (Q.status - t) / 2), (i = Q.size - t - (null != D ? (2.5 * t - t) / 2 : 0) - Q.offset - n), (r = Q.size - 1.5 * t - Q.offset - n), (s = Math.round((i / e) * 100) / 100), (a = Math.round((r / e) * 100) / 100), `translate(${s}, ${a})`)}`;
                        }),
                        children: [
                            (0, i.jsxs)("svg", {
                                width: J,
                                height: ee,
                                viewBox: `0 0 ${J} ${ee}`,
                                className: w ? I.Oi : void 0,
                                children: [
                                    (0, d.pF)(Z, Q.status, B),
                                    (0, i.jsx)(o.animated.rect, { fill: q, width: J, height: ee, mask: `url(#${B})` }),
                                    (0, i.jsx)(c.n, {
                                        ref: h,
                                        dotRadius: Q.status / 4,
                                        x: 0.15 * J,
                                        y: 0.5 * ee,
                                        hide: !f,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(N, { size: y, isMobile: l, isTyping: f, className: I.Hs }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
R.displayName = "AvatarImg";
let L = r.memo(function (e) {
    var t, n;
    let { statusColor: s, status: a, ...o } = e,
        { isMobile: l = !1, isTyping: u = !1, isVR: c = !1 } = o,
        _ = r.useRef(a),
        f = r.useRef(l),
        h = (0, d.S3)(a, s),
        p = r.useRef(h),
        m = r.useRef(!1),
        g =
            m.current ||
            ((t = _.current),
            (n = f.current),
            null != t && null != a && (!!u || a !== t || (a === E.clD.ONLINE && l !== n)));
    return (
        r.useLayoutEffect(() => {
            (m.current = g), (_.current = a), (f.current = l), (p.current = h);
        }, [a, l, h, g]),
        !c && null != a && null != _.current && g
            ? (0, i.jsx)(D, {
                  ...o,
                  status: a,
                  statusColor: h,
                  fromStatus: _.current,
                  fromIsMobile: f.current,
                  fromColor: p.current,
              })
            : (0, i.jsx)(b, { ...o, status: a, statusColor: h })
    );
});
