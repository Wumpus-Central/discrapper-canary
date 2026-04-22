"use strict";
n.d(t, { Js: () => L, Rb: () => N, d9: () => C, eu: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(517738),
    l = n(939249),
    u = n(717421),
    d = n(863610),
    c = n(935154),
    _ = n(990078),
    f = n(556525),
    E = n(573435),
    h = n(427262),
    p = n(652215),
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
        d = a.size - a.status - u - a.offset,
        c = a.size - o - a.offset;
    return (0, r.jsx)("rect", { x: d, y: c, width: l, height: o, fill: "transparent", "aria-hidden": !0, ...s });
}
function N(e, t, n) {
    let { isTyping: r, isMobile: i, isVR: s } = n,
        a = (0, c.i0)(e.status, t, { isTyping: r, isMobile: i, isVR: s }),
        o = (r ? e.size - (a.width / 2 + e.status / 2) : e.size - a.width) - e.offset;
    return { ...a, x: o, y: e.size - a.height - e.offset };
}
function O(e, t, n, i) {
    let { isMobile: s, isTyping: a, isVR: o } = i,
        l = N(t, n, { isMobile: s, isTyping: a, isVR: o }),
        u = (0, c.yi)(n, e);
    if (!(s && !o)) {
        let n = l.height / 2 + t.stroke,
            i = l.x + t.status / 2;
        return (0, r.jsx)("circle", { style: { opacity: u }, fill: e, r: n, cx: i, cy: i });
    }
    let d = l.height + 2 * t.stroke,
        _ = l.width + 2 * t.stroke,
        f = l.x - t.stroke,
        E = l.y - t.stroke;
    return (0, r.jsx)("rect", { fill: e, height: d, width: _, style: { opacity: u }, x: f, y: E, rx: t.stroke });
}
function R(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        s = n && !r && t === p.clD.ONLINE,
        a = (0, g.Kj)(i);
    return {
        ...(function (e, t) {
            let { size: n, status: r, stroke: i, offset: s } = e,
                { isTyping: a, isMobile: o, isVR: l } = t,
                u = a ? 2.5 * r : r,
                d = o && !l,
                c = d ? 1.5 * r : r;
            return {
                avatarCutoutX: n - u + (u - r) / 2 - i - s,
                avatarCutoutY: n - c - i - s,
                avatarCutoutWidth: u + 2 * i,
                avatarCutoutHeight: c + 2 * i,
                avatarCutoutRadius: d ? (c + 2 * i) * 0.2 : (r + 2 * i) / 2,
            };
        })(a, { isMobile: s, isTyping: r, isVR: !1 }),
        ...(0, c.v)({ status: t, size: a.status, isMobile: s, isTyping: r, topOffset: 2, leftOffset: 6 }),
    };
}
function v(e) {
    let {
            children: t,
            size: n,
            onClick: i,
            onMouseDown: s,
            onKeyDown: o,
            onContextMenu: u,
            onMouseEnter: d,
            onMouseLeave: c,
            className: _,
            tabIndex: f,
            ariaLabel: p,
            ariaHidden: T,
            status: S,
            isMobile: y = !1,
            isVR: N = !1,
            isTyping: O = !1,
            avatarDecoration: R,
            typingOffset: v,
            specs: C,
        } = e,
        b = { width: (0, g.FT)(n), height: (0, g.FT)(n) },
        D =
            null == p || T
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
                  })(p, S, y, N),
        L = C.size * m.Xq,
        w = (function (e, t, n, r) {
            let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return null;
            if (r)
                switch (t) {
                    case g._3.SIZE_16:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_16;
                    case g._3.SIZE_20:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_20;
                    case g._3.SIZE_24:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_24;
                    case g._3.SIZE_32:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_32;
                    case g._3.SIZE_40:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_40;
                    case g._3.SIZE_44:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_44;
                    case g._3.SIZE_48:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_48;
                    case g._3.SIZE_56:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_56;
                    case g._3.SIZE_72:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_72;
                    case g._3.SIZE_80:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_80;
                    case g._3.SIZE_96:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_96;
                    case g._3.SIZE_120:
                        return E.hW.AVATAR_DECORATION_STATUS_TYPING_120;
                }
            if (n && !i)
                switch (t) {
                    case g._3.SIZE_16:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_16;
                    case g._3.SIZE_20:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_20;
                    case g._3.SIZE_24:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_24;
                    case g._3.SIZE_32:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_32;
                    case g._3.SIZE_40:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_40;
                    case g._3.SIZE_44:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_44;
                    case g._3.SIZE_48:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_48;
                    case g._3.SIZE_56:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_56;
                    case g._3.SIZE_72:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_72;
                    case g._3.SIZE_80:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_80;
                    case g._3.SIZE_96:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_96;
                    case g._3.SIZE_120:
                        return E.hW.AVATAR_DECORATION_STATUS_MOBILE_120;
                }
            switch (t) {
                case g._3.SIZE_16:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_16;
                case g._3.SIZE_20:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_20;
                case g._3.SIZE_24:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_24;
                case g._3.SIZE_32:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_32;
                case g._3.SIZE_40:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_40;
                case g._3.SIZE_44:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_44;
                case g._3.SIZE_48:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_48;
                case g._3.SIZE_56:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_56;
                case g._3.SIZE_72:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_72;
                case g._3.SIZE_80:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_80;
                case g._3.SIZE_96:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_96;
                case g._3.SIZE_120:
                    return E.hW.AVATAR_DECORATION_STATUS_ROUND_120;
            }
            return null;
        })(S, n, y, O, N),
        M =
            null != R &&
            (0, r.jsx)("svg", {
                width: L + v,
                height: L,
                viewBox: `0 0 ${L + v} ${L}`,
                className: I.DX,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: L,
                    height: L,
                    mask: null != w ? `url(#${w})` : void 0,
                    children: (0, r.jsx)("img", { className: I.M, src: R, alt: " ", "aria-hidden": !0 }),
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
              onMouseEnter: d ?? void 0,
              onMouseLeave: c ?? void 0,
              "aria-label": D,
              "aria-hidden": T,
              children: [t, M],
          })
        : (0, r.jsxs)("div", {
              className: a()(I.iE, _),
              style: b,
              onContextMenu: u ?? void 0,
              onMouseEnter: d ?? void 0,
              onMouseLeave: c ?? void 0,
              role: "img",
              "aria-label": D,
              "aria-hidden": T,
              children: [t, M],
          });
}
let C = i.forwardRef((e, t) => {
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
            statusTooltipDelay: R,
            statusBackdropColor: b,
            "aria-hidden": D = !1,
            "aria-label": L,
            imageClassName: w,
            ref: M,
        } = e,
        P = n !== p.clD.UNKNOWN ? n : null,
        U = (0, g.Kj)(i),
        k = null != P ? Math.ceil((2.5 * U.status - U.status) / 2) : 0,
        x = U.size + k,
        G = (0, c.S3)(P, s);
    return (0, r.jsx)(v, {
        ...e,
        ariaLabel: L,
        ariaHidden: D,
        status: P,
        specs: U,
        typingOffset: k,
        children: (0, r.jsxs)("svg", {
            ref: M,
            width: x,
            height: x,
            viewBox: `0 0 ${x} ${x}`,
            className: a()(I.dK, I.JW),
            "aria-hidden": !0,
            children: [
                (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: U.size,
                    height: U.size,
                    mask: `url(#${(function (e, t, n, r) {
                        let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        if (null == e) return E.hW.AVATAR_DEFAULT;
                        if (r)
                            switch (t) {
                                case g._3.SIZE_16:
                                    return E.hW.AVATAR_STATUS_TYPING_16;
                                case g._3.SIZE_20:
                                    return E.hW.AVATAR_STATUS_TYPING_20;
                                case g._3.SIZE_24:
                                    return E.hW.AVATAR_STATUS_TYPING_24;
                                case g._3.SIZE_32:
                                    return E.hW.AVATAR_STATUS_TYPING_32;
                                case g._3.SIZE_40:
                                    return E.hW.AVATAR_STATUS_TYPING_40;
                                case g._3.SIZE_44:
                                    return E.hW.AVATAR_STATUS_TYPING_44;
                                case g._3.SIZE_48:
                                    return E.hW.AVATAR_STATUS_TYPING_48;
                                case g._3.SIZE_56:
                                    return E.hW.AVATAR_STATUS_TYPING_56;
                                case g._3.SIZE_72:
                                    return E.hW.AVATAR_STATUS_TYPING_72;
                                case g._3.SIZE_80:
                                    return E.hW.AVATAR_STATUS_TYPING_80;
                                case g._3.SIZE_96:
                                    return E.hW.AVATAR_STATUS_TYPING_96;
                                case g._3.SIZE_120:
                                    return E.hW.AVATAR_STATUS_TYPING_120;
                            }
                        if (e === p.clD.ONLINE && n && !i)
                            switch (t) {
                                case g._3.SIZE_16:
                                    return E.hW.AVATAR_STATUS_MOBILE_16;
                                case g._3.SIZE_20:
                                    return E.hW.AVATAR_STATUS_MOBILE_20;
                                case g._3.SIZE_24:
                                    return E.hW.AVATAR_STATUS_MOBILE_24;
                                case g._3.SIZE_32:
                                    return E.hW.AVATAR_STATUS_MOBILE_32;
                                case g._3.SIZE_40:
                                    return E.hW.AVATAR_STATUS_MOBILE_40;
                                case g._3.SIZE_44:
                                    return E.hW.AVATAR_STATUS_MOBILE_44;
                                case g._3.SIZE_48:
                                    return E.hW.AVATAR_STATUS_MOBILE_48;
                                case g._3.SIZE_56:
                                    return E.hW.AVATAR_STATUS_MOBILE_56;
                                case g._3.SIZE_72:
                                    return E.hW.AVATAR_STATUS_MOBILE_72;
                                case g._3.SIZE_80:
                                    return E.hW.AVATAR_STATUS_MOBILE_80;
                                case g._3.SIZE_96:
                                    return E.hW.AVATAR_STATUS_MOBILE_96;
                                case g._3.SIZE_120:
                                    return E.hW.AVATAR_STATUS_MOBILE_120;
                            }
                        switch (t) {
                            case g._3.SIZE_16:
                                return E.hW.AVATAR_STATUS_ROUND_16;
                            case g._3.SIZE_20:
                                return E.hW.AVATAR_STATUS_ROUND_20;
                            case g._3.SIZE_24:
                                return E.hW.AVATAR_STATUS_ROUND_24;
                            case g._3.SIZE_32:
                                return E.hW.AVATAR_STATUS_ROUND_32;
                            case g._3.SIZE_40:
                                return E.hW.AVATAR_STATUS_ROUND_40;
                            case g._3.SIZE_44:
                                return E.hW.AVATAR_STATUS_ROUND_44;
                            case g._3.SIZE_48:
                                return E.hW.AVATAR_STATUS_ROUND_48;
                            case g._3.SIZE_56:
                                return E.hW.AVATAR_STATUS_ROUND_56;
                            case g._3.SIZE_72:
                                return E.hW.AVATAR_STATUS_ROUND_72;
                            case g._3.SIZE_80:
                                return E.hW.AVATAR_STATUS_ROUND_80;
                            case g._3.SIZE_96:
                                return E.hW.AVATAR_STATUS_ROUND_96;
                            case g._3.SIZE_120:
                                return E.hW.AVATAR_STATUS_ROUND_120;
                        }
                        throw Error(
                            `getMaskId(): Unsupported type, size: ${t}, status: ${e}, isMobile: ${n ? "true" : "false"}`,
                        );
                    })(P, i, o, u, l)})`,
                    children: (0, r.jsx)(C, {
                        ref: m,
                        src: t,
                        isSpeaking: A,
                        voiceDb: T,
                        speakingStylesConfig: S,
                        className: w,
                    }),
                }),
                null != P && null != b ? O(b, U, P, { isMobile: o, isTyping: u, isVR: l }) : null,
                null != P
                    ? (0, r.jsx)(_.m, {
                          text: y ? (0, h.MU)(P) : null,
                          ariaHidden: !0,
                          position: "top",
                          spacing: 5 + 1.5 * U.stroke,
                          delay: R,
                          children: (0, r.jsxs)("g", {
                              children: [
                                  (0, r.jsx)("rect", {
                                      ...N(U, P, { isMobile: o, isTyping: u, isVR: l }),
                                      fill: G,
                                      mask: `url(#${(0, c.p8)(P, { isMobile: o, isTyping: u, isVR: l })})`,
                                      className: I.Hs,
                                  }),
                                  u
                                      ? (0, r.jsx)(d.n, {
                                            ref: f,
                                            dotRadius: U.status / 4,
                                            x: U.size - 1.375 * U.status - U.offset,
                                            y: U.size - U.status / 1.333 - U.offset,
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
            typingIndicatorRef: E,
            isSpeaking: p = !1,
            voiceDb: m,
            speakingStylesConfig: A,
            size: N,
            src: b,
            status: D,
            statusColor: L,
            statusTooltip: w = !1,
            statusTooltipDelay: M,
            statusBackdropColor: P,
            "aria-hidden": U = !1,
            "aria-label": k,
            imageClassName: x,
            pulseStatusIcon: G,
        } = e,
        V = (0, c.S3)(D, L),
        F = i.useId(),
        B = i.useId(),
        [H] = i.useState(() => ({ fill: s, ...R({ size: N, status: n, isMobile: t, isTyping: !1 }) })),
        Y = i.useMemo(() => ({ fill: V, ...R({ size: N, status: D, isMobile: l, isTyping: f }) }), [V, N, D, l, f]),
        {
            avatarCutoutX: W,
            avatarCutoutY: j,
            avatarCutoutWidth: K,
            avatarCutoutHeight: $,
            avatarCutoutRadius: z,
            fill: q,
            ...X
        } = (0, u.z)({ config: T, from: H, to: Y }, S() ? "animate-always" : "animate-never"),
        Q = (0, g.FT)(N),
        J = (0, g.Kj)(N),
        Z = 2.5 * J.status,
        ee = 1.5 * J.status,
        et = null != D ? (2.5 * J.status - J.status) / 2 : 0,
        en = J.size + Math.ceil(et),
        [er, ei, es] = (0, u.z)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: G ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            S() ? "animate-always" : "animate-never",
            [G, D],
        );
    return (0, r.jsx)(v, {
        ...e,
        ariaLabel: k,
        ariaHidden: U,
        typingOffset: et,
        specs: J,
        children: (0, r.jsxs)("svg", {
            width: en,
            height: en,
            viewBox: `0 0 ${en} ${en}`,
            className: a()(I.dK, I.JW),
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("mask", {
                    id: F,
                    width: Q,
                    height: Q,
                    children: [
                        (0, r.jsx)("circle", { cx: Q / 2, cy: Q / 2, r: Q / 2, fill: "white" }),
                        (0, r.jsx)(o.animated.rect, { color: "black", x: W, y: j, width: K, height: $, rx: z, ry: z }),
                    ],
                }),
                (0, r.jsx)("foreignObject", {
                    className: I.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: Q,
                    height: Q,
                    mask: `url(#${F})`,
                    children: (0, r.jsx)(C, {
                        src: b,
                        isSpeaking: p,
                        voiceDb: m,
                        className: x,
                        speakingStylesConfig: A,
                    }),
                }),
                null != P && O(P, J, D, { isMobile: l, isTyping: f, isVR: !1 }),
                (0, r.jsx)(_.m, {
                    text: w ? (0, h.MU)(D) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: (function (e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
                    })(J.status, J.stroke, l, f),
                    delay: M,
                    children: (0, r.jsxs)(o.animated.g, {
                        transform: er.scale.to((e) => {
                            let t, n, r, i, s, a;
                            return `scale(${e}) ${((t = J.status * e), (n = (J.status - t) / 2), (r = J.size - t - (null != D ? (2.5 * t - t) / 2 : 0) - J.offset - n), (i = J.size - 1.5 * t - J.offset - n), (s = Math.round((r / e) * 100) / 100), (a = Math.round((i / e) * 100) / 100), `translate(${s}, ${a})`)}`;
                        }),
                        children: [
                            (0, r.jsxs)("svg", {
                                width: Z,
                                height: ee,
                                viewBox: `0 0 ${Z} ${ee}`,
                                className: w ? I.Oi : void 0,
                                children: [
                                    (0, c.pF)(X, J.status, B),
                                    (0, r.jsx)(o.animated.rect, { fill: q, width: Z, height: ee, mask: `url(#${B})` }),
                                    (0, r.jsx)(d.n, {
                                        ref: E,
                                        dotRadius: J.status / 4,
                                        x: 0.15 * Z,
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
C.displayName = "AvatarImg";
let L = i.memo(function (e) {
    var t, n;
    let { statusColor: s, status: a, ...o } = e,
        { isMobile: l = !1, isTyping: u = !1, isVR: d = !1 } = o,
        _ = i.useRef(a),
        f = i.useRef(l),
        E = (0, c.S3)(a, s),
        h = i.useRef(E),
        m = i.useRef(!1),
        g =
            m.current ||
            ((t = _.current),
            (n = f.current),
            null != t && null != a && (!!u || a !== t || (a === p.clD.ONLINE && l !== n)));
    return (
        i.useLayoutEffect(() => {
            (m.current = g), (_.current = a), (f.current = l), (h.current = E);
        }, [a, l, E, g]),
        !d && null != a && null != _.current && g
            ? (0, r.jsx)(D, {
                  ...o,
                  status: a,
                  statusColor: E,
                  fromStatus: _.current,
                  fromIsMobile: f.current,
                  fromColor: h.current,
              })
            : (0, r.jsx)(b, { ...o, status: a, statusColor: E })
    );
});
