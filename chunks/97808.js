"use strict";
n.d(t, { Js: () => U, Rb: () => C, d9: () => L, eu: () => w });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(382222),
    l = n(158954),
    u = n(863610),
    c = n(935154),
    d = n(435371),
    _ = n(659974),
    f = n(573435),
    p = n(427262),
    h = n(652215),
    m = n(190460),
    E = n(778712),
    g = n(985018),
    A = n(774659);
let I = { tension: 1200, friction: 70 };
function T() {
    return document.hasFocus();
}
function S(e) {
    let { size: t, isMobile: n, isTyping: i, ...s } = e,
        a = (0, E.Kj)(t),
        o = a.status * (n && !i ? 1.5 : 1),
        l = a.status * (i ? 2.5 : 1),
        u = i ? (2.5 * a.status - a.status) / 2 : 0,
        c = a.size - a.status - u - a.offset,
        d = a.size - o - a.offset;
    return (0, r.jsx)("rect", { x: c, y: d, width: l, height: o, fill: "transparent", "aria-hidden": !0, ...s });
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return null != t
        ? g.intl.formatToPlainString(g.t["/6mw10"], { label: e, status: (0, p.MU)(t, { isMobile: n, isVR: r }) })
        : e;
}
function v(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e) return null;
    if (r)
        switch (t) {
            case E._3.SIZE_16:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_16;
            case E._3.SIZE_20:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_20;
            case E._3.SIZE_24:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_24;
            case E._3.SIZE_32:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_32;
            case E._3.SIZE_40:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_40;
            case E._3.SIZE_44:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_44;
            case E._3.SIZE_48:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_48;
            case E._3.SIZE_56:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_56;
            case E._3.SIZE_72:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_72;
            case E._3.SIZE_80:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_80;
            case E._3.SIZE_96:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_96;
            case E._3.SIZE_120:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_120;
        }
    if (n && !i)
        switch (t) {
            case E._3.SIZE_16:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_16;
            case E._3.SIZE_20:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_20;
            case E._3.SIZE_24:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_24;
            case E._3.SIZE_32:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_32;
            case E._3.SIZE_40:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_40;
            case E._3.SIZE_44:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_44;
            case E._3.SIZE_48:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_48;
            case E._3.SIZE_56:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_56;
            case E._3.SIZE_72:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_72;
            case E._3.SIZE_80:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_80;
            case E._3.SIZE_96:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_96;
            case E._3.SIZE_120:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_120;
        }
    switch (t) {
        case E._3.SIZE_16:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_16;
        case E._3.SIZE_20:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_20;
        case E._3.SIZE_24:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_24;
        case E._3.SIZE_32:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_32;
        case E._3.SIZE_40:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_40;
        case E._3.SIZE_44:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_44;
        case E._3.SIZE_48:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_48;
        case E._3.SIZE_56:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_56;
        case E._3.SIZE_72:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_72;
        case E._3.SIZE_80:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_80;
        case E._3.SIZE_96:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_96;
        case E._3.SIZE_120:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_120;
    }
    return null;
}
function N(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e) return f.hW.AVATAR_DEFAULT;
    if (r)
        switch (t) {
            case E._3.SIZE_16:
                return f.hW.AVATAR_STATUS_TYPING_16;
            case E._3.SIZE_20:
                return f.hW.AVATAR_STATUS_TYPING_20;
            case E._3.SIZE_24:
                return f.hW.AVATAR_STATUS_TYPING_24;
            case E._3.SIZE_32:
                return f.hW.AVATAR_STATUS_TYPING_32;
            case E._3.SIZE_40:
                return f.hW.AVATAR_STATUS_TYPING_40;
            case E._3.SIZE_44:
                return f.hW.AVATAR_STATUS_TYPING_44;
            case E._3.SIZE_48:
                return f.hW.AVATAR_STATUS_TYPING_48;
            case E._3.SIZE_56:
                return f.hW.AVATAR_STATUS_TYPING_56;
            case E._3.SIZE_72:
                return f.hW.AVATAR_STATUS_TYPING_72;
            case E._3.SIZE_80:
                return f.hW.AVATAR_STATUS_TYPING_80;
            case E._3.SIZE_96:
                return f.hW.AVATAR_STATUS_TYPING_96;
            case E._3.SIZE_120:
                return f.hW.AVATAR_STATUS_TYPING_120;
        }
    if (e === h.clD.ONLINE && n && !i)
        switch (t) {
            case E._3.SIZE_16:
                return f.hW.AVATAR_STATUS_MOBILE_16;
            case E._3.SIZE_20:
                return f.hW.AVATAR_STATUS_MOBILE_20;
            case E._3.SIZE_24:
                return f.hW.AVATAR_STATUS_MOBILE_24;
            case E._3.SIZE_32:
                return f.hW.AVATAR_STATUS_MOBILE_32;
            case E._3.SIZE_40:
                return f.hW.AVATAR_STATUS_MOBILE_40;
            case E._3.SIZE_44:
                return f.hW.AVATAR_STATUS_MOBILE_44;
            case E._3.SIZE_48:
                return f.hW.AVATAR_STATUS_MOBILE_48;
            case E._3.SIZE_56:
                return f.hW.AVATAR_STATUS_MOBILE_56;
            case E._3.SIZE_72:
                return f.hW.AVATAR_STATUS_MOBILE_72;
            case E._3.SIZE_80:
                return f.hW.AVATAR_STATUS_MOBILE_80;
            case E._3.SIZE_96:
                return f.hW.AVATAR_STATUS_MOBILE_96;
            case E._3.SIZE_120:
                return f.hW.AVATAR_STATUS_MOBILE_120;
        }
    switch (t) {
        case E._3.SIZE_16:
            return f.hW.AVATAR_STATUS_ROUND_16;
        case E._3.SIZE_20:
            return f.hW.AVATAR_STATUS_ROUND_20;
        case E._3.SIZE_24:
            return f.hW.AVATAR_STATUS_ROUND_24;
        case E._3.SIZE_32:
            return f.hW.AVATAR_STATUS_ROUND_32;
        case E._3.SIZE_40:
            return f.hW.AVATAR_STATUS_ROUND_40;
        case E._3.SIZE_44:
            return f.hW.AVATAR_STATUS_ROUND_44;
        case E._3.SIZE_48:
            return f.hW.AVATAR_STATUS_ROUND_48;
        case E._3.SIZE_56:
            return f.hW.AVATAR_STATUS_ROUND_56;
        case E._3.SIZE_72:
            return f.hW.AVATAR_STATUS_ROUND_72;
        case E._3.SIZE_80:
            return f.hW.AVATAR_STATUS_ROUND_80;
        case E._3.SIZE_96:
            return f.hW.AVATAR_STATUS_ROUND_96;
        case E._3.SIZE_120:
            return f.hW.AVATAR_STATUS_ROUND_120;
    }
    throw Error(`getMaskId(): Unsupported type, size: ${t}, status: ${e}, isMobile: ${n ? "true" : "false"}`);
}
function C(e, t, n) {
    let { isTyping: r, isMobile: i, isVR: s } = n,
        a = (0, c.i0)(e.status, t, { isTyping: r, isMobile: i, isVR: s }),
        o = (r ? e.size - (a.width / 2 + e.status / 2) : e.size - a.width) - e.offset;
    return { ...a, x: o, y: e.size - a.height - e.offset };
}
function R(e, t) {
    let { size: n, status: r, stroke: i, offset: s } = e,
        { isTyping: a, isMobile: o, isVR: l } = t,
        u = a ? 2.5 * r : r,
        c = (u - r) / 2,
        d = o && !l,
        _ = d ? 1.5 * r : r;
    return {
        avatarCutoutX: n - u + c - i - s,
        avatarCutoutY: n - _ - i - s,
        avatarCutoutWidth: u + 2 * i,
        avatarCutoutHeight: _ + 2 * i,
        avatarCutoutRadius: d ? (_ + 2 * i) * 0.2 : (r + 2 * i) / 2,
    };
}
function O(e, t, n, i) {
    let { isMobile: s, isTyping: a, isVR: o } = i,
        l = C(t, n, { isMobile: s, isTyping: a, isVR: o }),
        u = (0, c.yi)(n, e);
    if (!(s && !o)) {
        let n = l.height / 2 + t.stroke,
            i = l.x + t.status / 2;
        return (0, r.jsx)("circle", { style: { opacity: u }, fill: e, r: n, cx: i, cy: i });
    }
    let d = l.height + 2 * t.stroke,
        _ = l.width + 2 * t.stroke,
        f = l.x - t.stroke,
        p = l.y - t.stroke;
    return (0, r.jsx)("rect", { fill: e, height: d, width: _, style: { opacity: u }, x: f, y: p, rx: t.stroke });
}
function b(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        s = n && !r && t === h.clD.ONLINE,
        a = (0, E.Kj)(i);
    return {
        ...R(a, { isMobile: s, isTyping: r, isVR: !1 }),
        ...(0, c.v)({ status: t, size: a.status, isMobile: s, isTyping: r, topOffset: 2, leftOffset: 6 }),
    };
}
function D(e) {
    let {
            children: t,
            size: n,
            onClick: i,
            onMouseDown: s,
            onKeyDown: o,
            onContextMenu: u,
            onMouseEnter: c,
            onMouseLeave: d,
            className: _,
            tabIndex: f,
            ariaLabel: p,
            ariaHidden: h,
            status: g,
            isMobile: I = !1,
            isVR: T = !1,
            isTyping: S = !1,
            avatarDecoration: N,
            typingOffset: C,
            specs: R,
        } = e,
        O = { width: (0, E.FT)(n), height: (0, E.FT)(n) },
        b = null == p || h ? void 0 : y(p, g, I, T),
        D = R.size * m.Xq,
        L = v(g, n, I, S, T),
        w =
            null != N &&
            (0, r.jsx)("svg", {
                width: D + C,
                height: D,
                viewBox: `0 0 ${D + C} ${D}`,
                className: A.DX,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: D,
                    height: D,
                    mask: null != L ? `url(#${L})` : void 0,
                    children: (0, r.jsx)("img", { className: A.M, src: N, alt: " ", "aria-hidden": !0 }),
                }),
            });
    return null != i || null != s
        ? (0, r.jsxs)(l.DUT, {
              className: a()(A.iE, A.Wn, _),
              style: O,
              onClick: i,
              tabIndex: f,
              onContextMenu: u,
              onMouseDown: s,
              onKeyDown: o,
              onMouseEnter: c ?? void 0,
              onMouseLeave: d ?? void 0,
              "aria-label": b,
              "aria-hidden": h,
              children: [t, w],
          })
        : (0, r.jsxs)("div", {
              className: a()(A.iE, _),
              style: O,
              onContextMenu: u ?? void 0,
              onMouseEnter: c ?? void 0,
              onMouseLeave: d ?? void 0,
              role: "img",
              "aria-label": b,
              "aria-hidden": h,
              children: [t, w],
          });
}
let L = i.forwardRef((e, t) => {
    let { src: n, isSpeaking: i, className: s, voiceDb: o = -1 / 0, speakingStylesConfig: l } = e,
        u = (0, _.v)({ isSpeaking: i, voiceDb: o, spreadDirection: _.O.INSET_ONLY, maxInnerSpreadRadius: 4, ...l });
    return (0, r.jsxs)(
        "div",
        {
            ref: t,
            className: a()(A.yA, s),
            children: [
                (0, r.jsx)("img", { src: n ?? void 0, alt: " ", className: A.my, "aria-hidden": !0 }),
                i && (0, r.jsx)("div", { className: A.uh, style: u }),
            ],
        },
        n,
    );
});
function w(e) {
    let {
            src: t,
            status: n,
            size: i,
            statusColor: s,
            isMobile: o = !1,
            isVR: l = !1,
            isTyping: _ = !1,
            typingIndicatorRef: f,
            avatarContentRef: m,
            isSpeaking: g = !1,
            voiceDb: I,
            speakingStylesConfig: T,
            statusTooltip: S = !1,
            statusTooltipDelay: y,
            statusBackdropColor: v,
            "aria-hidden": R = !1,
            "aria-label": b,
            imageClassName: w,
            ref: M,
        } = e,
        P = n !== h.clD.UNKNOWN ? n : null,
        x = (0, E.Kj)(i),
        k = null != P ? Math.ceil((2.5 * x.status - x.status) / 2) : 0,
        U = x.size + k,
        G = (0, c.S3)(P, s);
    return (0, r.jsx)(D, {
        ...e,
        ariaLabel: b,
        ariaHidden: R,
        status: P,
        specs: x,
        typingOffset: k,
        children: (0, r.jsxs)("svg", {
            ref: M,
            width: U,
            height: U,
            viewBox: `0 0 ${U} ${U}`,
            className: a()(A.dK, A.JW),
            "aria-hidden": !0,
            children: [
                (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: x.size,
                    height: x.size,
                    mask: `url(#${N(P, i, o, _, l)})`,
                    children: (0, r.jsx)(L, {
                        ref: m,
                        src: t,
                        isSpeaking: g,
                        voiceDb: I,
                        speakingStylesConfig: T,
                        className: w,
                    }),
                }),
                null != P && null != v ? O(v, x, P, { isMobile: o, isTyping: _, isVR: l }) : null,
                null != P
                    ? (0, r.jsx)(d.m_, {
                          text: S ? (0, p.MU)(P) : null,
                          ariaHidden: !0,
                          position: "top",
                          spacing: 5 + 1.5 * x.stroke,
                          delay: y,
                          children: (0, r.jsxs)("g", {
                              children: [
                                  (0, r.jsx)("rect", {
                                      ...C(x, P, { isMobile: o, isTyping: _, isVR: l }),
                                      fill: G,
                                      mask: `url(#${(0, c.p8)(P, { isMobile: o, isTyping: _, isVR: l })})`,
                                      className: A.Hs,
                                  }),
                                  _
                                      ? (0, r.jsx)(u.n, {
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
function M(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
}
function P(e, t, n) {
    let r = e.status * t,
        i = null != n ? (2.5 * r - r) / 2 : 0,
        s = (e.status - r) / 2,
        a = e.size - r - i - e.offset - s,
        o = e.size - 1.5 * r - e.offset - s,
        l = Math.round((a / t) * 100) / 100,
        u = Math.round((o / t) * 100) / 100;
    return `translate(${l}, ${u})`;
}
function x(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: s,
            isMobile: _ = !1,
            isTyping: f = !1,
            typingIndicatorRef: h,
            isSpeaking: m = !1,
            voiceDb: g,
            speakingStylesConfig: y,
            size: v,
            src: N,
            status: C,
            statusColor: R,
            statusTooltip: w = !1,
            statusTooltipDelay: x,
            statusBackdropColor: k,
            "aria-hidden": U = !1,
            "aria-label": G,
            imageClassName: F,
            pulseStatusIcon: V,
        } = e,
        B = (0, c.S3)(C, R),
        H = i.useId(),
        j = i.useId(),
        [Y] = i.useState(() => ({ fill: s, ...b({ size: v, status: n, isMobile: t, isTyping: !1 }) })),
        W = i.useMemo(() => ({ fill: B, ...b({ size: v, status: C, isMobile: _, isTyping: f }) }), [B, v, C, _, f]),
        {
            avatarCutoutX: K,
            avatarCutoutY: $,
            avatarCutoutWidth: z,
            avatarCutoutHeight: q,
            avatarCutoutRadius: Z,
            fill: X,
            ...Q
        } = (0, l.zhh)({ config: I, from: Y, to: W }, T() ? "animate-always" : "animate-never"),
        J = (0, E.FT)(v),
        ee = (0, E.Kj)(v),
        et = 2.5 * ee.status,
        en = 1.5 * ee.status,
        er = null != C ? (2.5 * ee.status - ee.status) / 2 : 0,
        ei = ee.size + Math.ceil(er),
        [es, ea, eo] = (0, l.zhh)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: V ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            T() ? "animate-always" : "animate-never",
            [V, C],
        );
    return (0, r.jsx)(D, {
        ...e,
        ariaLabel: G,
        ariaHidden: U,
        typingOffset: er,
        specs: ee,
        children: (0, r.jsxs)("svg", {
            width: ei,
            height: ei,
            viewBox: `0 0 ${ei} ${ei}`,
            className: a()(A.dK, A.JW),
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("mask", {
                    id: H,
                    width: J,
                    height: J,
                    children: [
                        (0, r.jsx)("circle", { cx: J / 2, cy: J / 2, r: J / 2, fill: "white" }),
                        (0, r.jsx)(o.animated.rect, { color: "black", x: K, y: $, width: z, height: q, rx: Z, ry: Z }),
                    ],
                }),
                (0, r.jsx)("foreignObject", {
                    className: A.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: J,
                    height: J,
                    mask: `url(#${H})`,
                    children: (0, r.jsx)(L, {
                        src: N,
                        isSpeaking: m,
                        voiceDb: g,
                        className: F,
                        speakingStylesConfig: y,
                    }),
                }),
                null != k && O(k, ee, C, { isMobile: _, isTyping: f, isVR: !1 }),
                (0, r.jsx)(d.m_, {
                    text: w ? (0, p.MU)(C) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: M(ee.status, ee.stroke, _, f),
                    delay: x,
                    children: (0, r.jsxs)(o.animated.g, {
                        transform: es.scale.to((e) => `scale(${e}) ${P(ee, e, C)}`),
                        children: [
                            (0, r.jsxs)("svg", {
                                width: et,
                                height: en,
                                viewBox: `0 0 ${et} ${en}`,
                                className: w ? A.Oi : void 0,
                                children: [
                                    (0, c.pF)(Q, ee.status, j),
                                    (0, r.jsx)(o.animated.rect, { fill: X, width: et, height: en, mask: `url(#${j})` }),
                                    (0, r.jsx)(u.n, {
                                        ref: h,
                                        dotRadius: ee.status / 4,
                                        x: 0.15 * et,
                                        y: 0.5 * en,
                                        hide: !f,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S, { size: v, isMobile: _, isTyping: f, className: A.Hs }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function k(e, t, n, r, i) {
    return null != n && null != t && (!!e || t !== n || (t === h.clD.ONLINE && r !== i));
}
L.displayName = "AvatarImg";
let U = i.memo(function (e) {
    let { statusColor: t, status: n, ...s } = e,
        { isMobile: a = !1, isTyping: o = !1, isVR: l = !1 } = s,
        u = i.useRef(n),
        d = i.useRef(a),
        _ = (0, c.S3)(n, t),
        f = i.useRef(_),
        p = i.useRef(!1),
        h = p.current || k(o, n, u.current, a, d.current);
    return (
        i.useLayoutEffect(() => {
            (p.current = h), (u.current = n), (d.current = a), (f.current = _);
        }, [n, a, _, h]),
        !l && null != n && null != u.current && h
            ? (0, r.jsx)(x, {
                  ...s,
                  status: n,
                  statusColor: _,
                  fromStatus: u.current,
                  fromIsMobile: d.current,
                  fromColor: f.current,
              })
            : (0, r.jsx)(w, { ...s, status: n, statusColor: _ })
    );
});
