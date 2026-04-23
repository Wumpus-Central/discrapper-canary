"use strict";
n.d(t, { Js: () => L, Rb: () => N, d9: () => R, eu: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(939249),
    u = n(717421),
    c = n(863610),
    d = n(935154),
    _ = n(990078),
    f = n(556525),
    p = n(573435),
    h = n(427262),
    E = n(652215),
    m = n(190460),
    g = n(778712),
    A = n(985018),
    I = n(282291);
let T = { tension: 1200, friction: 70 };
function S() {
    return document.hasFocus();
}
function y(e) {
    let { size: t, isMobile: n, isTyping: i, ...s } = e,
        a = (0, g.Kj)(t),
        o = a.status * (n && !i ? 1.5 : 1),
        l = a.status * (i ? 2.5 : 1),
        u = i ? (2.5 * a.status - a.status) / 2 : 0,
        c = a.size - a.status - u - a.offset,
        d = a.size - o - a.offset;
    return (0, r.jsx)("rect", { x: c, y: d, width: l, height: o, fill: "transparent", "aria-hidden": !0, ...s });
}
function N(e, t, n) {
    let { isTyping: r, isMobile: i, isVR: s } = n,
        a = (0, d.i0)(e.status, t, { isTyping: r, isMobile: i, isVR: s }),
        o = (r ? e.size - (a.width / 2 + e.status / 2) : e.size - a.width) - e.offset;
    return { ...a, x: o, y: e.size - a.height - e.offset };
}
function v(e, t, n, i) {
    let { isMobile: s, isTyping: a, isVR: o } = i,
        l = N(t, n, { isMobile: s, isTyping: a, isVR: o }),
        u = (0, d.yi)(n, e);
    if (!(s && !o)) {
        let n = l.height / 2 + t.stroke,
            i = l.x + t.status / 2;
        return (0, r.jsx)("circle", { style: { opacity: u }, fill: e, r: n, cx: i, cy: i });
    }
    let c = l.height + 2 * t.stroke,
        _ = l.width + 2 * t.stroke,
        f = l.x - t.stroke,
        p = l.y - t.stroke;
    return (0, r.jsx)("rect", { fill: e, height: c, width: _, style: { opacity: u }, x: f, y: p, rx: t.stroke });
}
function C(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        s = n && !r && t === E.clD.ONLINE,
        a = (0, g.Kj)(i);
    return {
        ...(function (e, t) {
            let { size: n, status: r, stroke: i, offset: s } = e,
                { isTyping: a, isMobile: o, isVR: l } = t,
                u = a ? 2.5 * r : r,
                c = o && !l,
                d = c ? 1.5 * r : r;
            return {
                avatarCutoutX: n - u + (u - r) / 2 - i - s,
                avatarCutoutY: n - d - i - s,
                avatarCutoutWidth: u + 2 * i,
                avatarCutoutHeight: d + 2 * i,
                avatarCutoutRadius: c ? (d + 2 * i) * 0.2 : (r + 2 * i) / 2,
            };
        })(a, { isMobile: s, isTyping: r, isVR: !1 }),
        ...(0, d.v)({ status: t, size: a.status, isMobile: s, isTyping: r, topOffset: 2, leftOffset: 6 }),
    };
}
function O(e) {
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
            ariaLabel: E,
            ariaHidden: T,
            status: S,
            isMobile: y = !1,
            isVR: N = !1,
            isTyping: v = !1,
            avatarDecoration: C,
            typingOffset: O,
            specs: R,
        } = e,
        b = { width: (0, g.FT)(n), height: (0, g.FT)(n) },
        D =
            null == E || T
                ? void 0
                : (function (e, t) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                      return null != t
                          ? A.intl.formatToPlainString(A.t["/6mw10"], {
                                label: e,
                                status: (0, h.MU)(t, { isMobile: n, isVR: r }),
                            })
                          : e;
                  })(E, S, y, N),
        L = R.size * m.Xq,
        w = (function (e, t, n, r) {
            let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return null;
            if (r)
                switch (t) {
                    case g._3.SIZE_16:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_16;
                    case g._3.SIZE_20:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_20;
                    case g._3.SIZE_24:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_24;
                    case g._3.SIZE_32:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_32;
                    case g._3.SIZE_40:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_40;
                    case g._3.SIZE_44:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_44;
                    case g._3.SIZE_48:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_48;
                    case g._3.SIZE_56:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_56;
                    case g._3.SIZE_72:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_72;
                    case g._3.SIZE_80:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_80;
                    case g._3.SIZE_96:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_96;
                    case g._3.SIZE_120:
                        return p.hW.AVATAR_DECORATION_STATUS_TYPING_120;
                }
            if (n && !i)
                switch (t) {
                    case g._3.SIZE_16:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_16;
                    case g._3.SIZE_20:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_20;
                    case g._3.SIZE_24:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_24;
                    case g._3.SIZE_32:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_32;
                    case g._3.SIZE_40:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_40;
                    case g._3.SIZE_44:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_44;
                    case g._3.SIZE_48:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_48;
                    case g._3.SIZE_56:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_56;
                    case g._3.SIZE_72:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_72;
                    case g._3.SIZE_80:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_80;
                    case g._3.SIZE_96:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_96;
                    case g._3.SIZE_120:
                        return p.hW.AVATAR_DECORATION_STATUS_MOBILE_120;
                }
            switch (t) {
                case g._3.SIZE_16:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_16;
                case g._3.SIZE_20:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_20;
                case g._3.SIZE_24:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_24;
                case g._3.SIZE_32:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_32;
                case g._3.SIZE_40:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_40;
                case g._3.SIZE_44:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_44;
                case g._3.SIZE_48:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_48;
                case g._3.SIZE_56:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_56;
                case g._3.SIZE_72:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_72;
                case g._3.SIZE_80:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_80;
                case g._3.SIZE_96:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_96;
                case g._3.SIZE_120:
                    return p.hW.AVATAR_DECORATION_STATUS_ROUND_120;
            }
            return null;
        })(S, n, y, v, N),
        M =
            null != C &&
            (0, r.jsx)("svg", {
                width: L + O,
                height: L,
                viewBox: `0 0 ${L + O} ${L}`,
                className: I.DX,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: L,
                    height: L,
                    mask: null != w ? `url(#${w})` : void 0,
                    children: (0, r.jsx)("img", { className: I.M, src: C, alt: " ", "aria-hidden": !0 }),
                }),
            });
    return null != i || null != s
        ? (0, r.jsxs)(l.D, {
              className: a()(I.iE, I.Wn, _),
              style: b,
              onClick: i,
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
        : (0, r.jsxs)("div", {
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
let R = i.forwardRef((e, t) => {
    let { src: n, isSpeaking: i, className: s, voiceDb: o = -1 / 0, speakingStylesConfig: l } = e,
        u = (0, f.v)({ isSpeaking: i, voiceDb: o, spreadDirection: f.O.INSET_ONLY, maxInnerSpreadRadius: 4, ...l });
    return (0, r.jsxs)(
        "div",
        {
            ref: t,
            className: a()(I.yA, s),
            children: [
                (0, r.jsx)("img", { src: n ?? void 0, alt: " ", className: I.my, "aria-hidden": !0 }),
                i && (0, r.jsx)("div", { className: I.uh, style: u }),
            ],
        },
        n,
    );
});
function b(e) {
    let {
            src: t,
            status: n,
            size: i,
            statusColor: s,
            isMobile: o = !1,
            isVR: l = !1,
            isTyping: u = !1,
            typingIndicatorRef: f,
            avatarContentRef: m,
            isSpeaking: A = !1,
            voiceDb: T,
            speakingStylesConfig: S,
            statusTooltip: y = !1,
            statusTooltipDelay: C,
            statusBackdropColor: b,
            "aria-hidden": D = !1,
            "aria-label": L,
            imageClassName: w,
            ref: M,
        } = e,
        P = n !== E.clD.UNKNOWN ? n : null,
        x = (0, g.Kj)(i),
        k = null != P ? Math.ceil((2.5 * x.status - x.status) / 2) : 0,
        U = x.size + k,
        G = (0, d.S3)(P, s);
    return (0, r.jsx)(O, {
        ...e,
        ariaLabel: L,
        ariaHidden: D,
        status: P,
        specs: x,
        typingOffset: k,
        children: (0, r.jsxs)("svg", {
            ref: M,
            width: U,
            height: U,
            viewBox: `0 0 ${U} ${U}`,
            className: a()(I.dK, I.JW),
            "aria-hidden": !0,
            children: [
                (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: x.size,
                    height: x.size,
                    mask: `url(#${(function (e, t, n, r) {
                        let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        if (null == e) return p.hW.AVATAR_DEFAULT;
                        if (r)
                            switch (t) {
                                case g._3.SIZE_16:
                                    return p.hW.AVATAR_STATUS_TYPING_16;
                                case g._3.SIZE_20:
                                    return p.hW.AVATAR_STATUS_TYPING_20;
                                case g._3.SIZE_24:
                                    return p.hW.AVATAR_STATUS_TYPING_24;
                                case g._3.SIZE_32:
                                    return p.hW.AVATAR_STATUS_TYPING_32;
                                case g._3.SIZE_40:
                                    return p.hW.AVATAR_STATUS_TYPING_40;
                                case g._3.SIZE_44:
                                    return p.hW.AVATAR_STATUS_TYPING_44;
                                case g._3.SIZE_48:
                                    return p.hW.AVATAR_STATUS_TYPING_48;
                                case g._3.SIZE_56:
                                    return p.hW.AVATAR_STATUS_TYPING_56;
                                case g._3.SIZE_72:
                                    return p.hW.AVATAR_STATUS_TYPING_72;
                                case g._3.SIZE_80:
                                    return p.hW.AVATAR_STATUS_TYPING_80;
                                case g._3.SIZE_96:
                                    return p.hW.AVATAR_STATUS_TYPING_96;
                                case g._3.SIZE_120:
                                    return p.hW.AVATAR_STATUS_TYPING_120;
                            }
                        if (e === E.clD.ONLINE && n && !i)
                            switch (t) {
                                case g._3.SIZE_16:
                                    return p.hW.AVATAR_STATUS_MOBILE_16;
                                case g._3.SIZE_20:
                                    return p.hW.AVATAR_STATUS_MOBILE_20;
                                case g._3.SIZE_24:
                                    return p.hW.AVATAR_STATUS_MOBILE_24;
                                case g._3.SIZE_32:
                                    return p.hW.AVATAR_STATUS_MOBILE_32;
                                case g._3.SIZE_40:
                                    return p.hW.AVATAR_STATUS_MOBILE_40;
                                case g._3.SIZE_44:
                                    return p.hW.AVATAR_STATUS_MOBILE_44;
                                case g._3.SIZE_48:
                                    return p.hW.AVATAR_STATUS_MOBILE_48;
                                case g._3.SIZE_56:
                                    return p.hW.AVATAR_STATUS_MOBILE_56;
                                case g._3.SIZE_72:
                                    return p.hW.AVATAR_STATUS_MOBILE_72;
                                case g._3.SIZE_80:
                                    return p.hW.AVATAR_STATUS_MOBILE_80;
                                case g._3.SIZE_96:
                                    return p.hW.AVATAR_STATUS_MOBILE_96;
                                case g._3.SIZE_120:
                                    return p.hW.AVATAR_STATUS_MOBILE_120;
                            }
                        switch (t) {
                            case g._3.SIZE_16:
                                return p.hW.AVATAR_STATUS_ROUND_16;
                            case g._3.SIZE_20:
                                return p.hW.AVATAR_STATUS_ROUND_20;
                            case g._3.SIZE_24:
                                return p.hW.AVATAR_STATUS_ROUND_24;
                            case g._3.SIZE_32:
                                return p.hW.AVATAR_STATUS_ROUND_32;
                            case g._3.SIZE_40:
                                return p.hW.AVATAR_STATUS_ROUND_40;
                            case g._3.SIZE_44:
                                return p.hW.AVATAR_STATUS_ROUND_44;
                            case g._3.SIZE_48:
                                return p.hW.AVATAR_STATUS_ROUND_48;
                            case g._3.SIZE_56:
                                return p.hW.AVATAR_STATUS_ROUND_56;
                            case g._3.SIZE_72:
                                return p.hW.AVATAR_STATUS_ROUND_72;
                            case g._3.SIZE_80:
                                return p.hW.AVATAR_STATUS_ROUND_80;
                            case g._3.SIZE_96:
                                return p.hW.AVATAR_STATUS_ROUND_96;
                            case g._3.SIZE_120:
                                return p.hW.AVATAR_STATUS_ROUND_120;
                        }
                        throw Error(
                            `getMaskId(): Unsupported type, size: ${t}, status: ${e}, isMobile: ${n ? "true" : "false"}`,
                        );
                    })(P, i, o, u, l)})`,
                    children: (0, r.jsx)(R, {
                        ref: m,
                        src: t,
                        isSpeaking: A,
                        voiceDb: T,
                        speakingStylesConfig: S,
                        className: w,
                    }),
                }),
                null != P && null != b ? v(b, x, P, { isMobile: o, isTyping: u, isVR: l }) : null,
                null != P
                    ? (0, r.jsx)(_.m, {
                          text: y ? (0, h.MU)(P) : null,
                          ariaHidden: !0,
                          position: "top",
                          spacing: 5 + 1.5 * x.stroke,
                          delay: C,
                          children: (0, r.jsxs)("g", {
                              children: [
                                  (0, r.jsx)("rect", {
                                      ...N(x, P, { isMobile: o, isTyping: u, isVR: l }),
                                      fill: G,
                                      mask: `url(#${(0, d.p8)(P, { isMobile: o, isTyping: u, isVR: l })})`,
                                      className: I.Hs,
                                  }),
                                  u
                                      ? (0, r.jsx)(c.n, {
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
            typingIndicatorRef: p,
            isSpeaking: E = !1,
            voiceDb: m,
            speakingStylesConfig: A,
            size: N,
            src: b,
            status: D,
            statusColor: L,
            statusTooltip: w = !1,
            statusTooltipDelay: M,
            statusBackdropColor: P,
            "aria-hidden": x = !1,
            "aria-label": k,
            imageClassName: U,
            pulseStatusIcon: G,
        } = e,
        F = (0, d.S3)(D, L),
        V = i.useId(),
        B = i.useId(),
        [H] = i.useState(() => ({ fill: s, ...C({ size: N, status: n, isMobile: t, isTyping: !1 }) })),
        j = i.useMemo(() => ({ fill: F, ...C({ size: N, status: D, isMobile: l, isTyping: f }) }), [F, N, D, l, f]),
        {
            avatarCutoutX: Y,
            avatarCutoutY: W,
            avatarCutoutWidth: K,
            avatarCutoutHeight: $,
            avatarCutoutRadius: z,
            fill: q,
            ...X
        } = (0, u.z)({ config: T, from: H, to: j }, S() ? "animate-always" : "animate-never"),
        Q = (0, g.FT)(N),
        Z = (0, g.Kj)(N),
        J = 2.5 * Z.status,
        ee = 1.5 * Z.status,
        et = null != D ? (2.5 * Z.status - Z.status) / 2 : 0,
        en = Z.size + Math.ceil(et),
        [er, ei, es] = (0, u.z)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: G ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            S() ? "animate-always" : "animate-never",
            [G, D],
        );
    return (0, r.jsx)(O, {
        ...e,
        ariaLabel: k,
        ariaHidden: x,
        typingOffset: et,
        specs: Z,
        children: (0, r.jsxs)("svg", {
            width: en,
            height: en,
            viewBox: `0 0 ${en} ${en}`,
            className: a()(I.dK, I.JW),
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("mask", {
                    id: V,
                    width: Q,
                    height: Q,
                    children: [
                        (0, r.jsx)("circle", { cx: Q / 2, cy: Q / 2, r: Q / 2, fill: "white" }),
                        (0, r.jsx)(o.animated.rect, { color: "black", x: Y, y: W, width: K, height: $, rx: z, ry: z }),
                    ],
                }),
                (0, r.jsx)("foreignObject", {
                    className: I.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: Q,
                    height: Q,
                    mask: `url(#${V})`,
                    children: (0, r.jsx)(R, {
                        src: b,
                        isSpeaking: E,
                        voiceDb: m,
                        className: U,
                        speakingStylesConfig: A,
                    }),
                }),
                null != P && v(P, Z, D, { isMobile: l, isTyping: f, isVR: !1 }),
                (0, r.jsx)(_.m, {
                    text: w ? (0, h.MU)(D) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: (function (e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
                    })(Z.status, Z.stroke, l, f),
                    delay: M,
                    children: (0, r.jsxs)(o.animated.g, {
                        transform: er.scale.to((e) => {
                            let t, n, r, i, s, a;
                            return `scale(${e}) ${((t = Z.status * e), (n = (Z.status - t) / 2), (r = Z.size - t - (null != D ? (2.5 * t - t) / 2 : 0) - Z.offset - n), (i = Z.size - 1.5 * t - Z.offset - n), (s = Math.round((r / e) * 100) / 100), (a = Math.round((i / e) * 100) / 100), `translate(${s}, ${a})`)}`;
                        }),
                        children: [
                            (0, r.jsxs)("svg", {
                                width: J,
                                height: ee,
                                viewBox: `0 0 ${J} ${ee}`,
                                className: w ? I.Oi : void 0,
                                children: [
                                    (0, d.pF)(X, Z.status, B),
                                    (0, r.jsx)(o.animated.rect, { fill: q, width: J, height: ee, mask: `url(#${B})` }),
                                    (0, r.jsx)(c.n, {
                                        ref: p,
                                        dotRadius: Z.status / 4,
                                        x: 0.15 * J,
                                        y: 0.5 * ee,
                                        hide: !f,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(y, { size: N, isMobile: l, isTyping: f, className: I.Hs }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
R.displayName = "AvatarImg";
let L = i.memo(function (e) {
    var t, n;
    let { statusColor: s, status: a, ...o } = e,
        { isMobile: l = !1, isTyping: u = !1, isVR: c = !1 } = o,
        _ = i.useRef(a),
        f = i.useRef(l),
        p = (0, d.S3)(a, s),
        h = i.useRef(p),
        m = i.useRef(!1),
        g =
            m.current ||
            ((t = _.current),
            (n = f.current),
            null != t && null != a && (!!u || a !== t || (a === E.clD.ONLINE && l !== n)));
    return (
        i.useLayoutEffect(() => {
            (m.current = g), (_.current = a), (f.current = l), (h.current = p);
        }, [a, l, p, g]),
        !c && null != a && null != _.current && g
            ? (0, r.jsx)(D, {
                  ...o,
                  status: a,
                  statusColor: p,
                  fromStatus: _.current,
                  fromIsMobile: f.current,
                  fromColor: h.current,
              })
            : (0, r.jsx)(b, { ...o, status: a, statusColor: p })
    );
});
