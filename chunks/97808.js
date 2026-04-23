n.d(t, { Js: () => P, Rb: () => m, d9: () => g, eu: () => b });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(419354),
    l = n(939249),
    o = n(717421),
    E = n(863610),
    d = n(133171),
    c = n(990078),
    u = n(556525),
    I = n(573435),
    A = n(427262),
    T = n(652215),
    S = n(190460),
    N = n(778712),
    O = n(985018),
    R = n(282291);
let f = { tension: 1200, friction: 70 };
function C() {
    return document.hasFocus();
}
function p(e) {
    let { size: t, isMobile: n, isTyping: r, ...a } = e,
        s = (0, N.Kj)(t),
        _ = s.status * (n && !r ? 1.5 : 1),
        l = s.status * (r ? 2.5 : 1),
        o = r ? (2.5 * s.status - s.status) / 2 : 0,
        E = s.size - s.status - o - s.offset,
        d = s.size - _ - s.offset;
    return (0, i.jsx)("rect", { x: E, y: d, width: l, height: _, fill: "transparent", "aria-hidden": !0, ...a });
}
function m(e, t, n) {
    let { isTyping: i, isMobile: r, isVR: a } = n,
        s = (0, d.i0)(e.status, t, { isTyping: i, isMobile: r, isVR: a }),
        _ = (i ? e.size - (s.width / 2 + e.status / 2) : e.size - s.width) - e.offset;
    return { ...s, x: _, y: e.size - s.height - e.offset };
}
function L(e, t, n, r) {
    let { isMobile: a, isTyping: s, isVR: _ } = r,
        l = m(t, n, { isMobile: a, isTyping: s, isVR: _ }),
        o = (0, d.yi)(n, e);
    if (!(a && !_)) {
        let n = l.height / 2 + t.stroke,
            r = l.x + t.status / 2;
        return (0, i.jsx)("circle", { style: { opacity: o }, fill: e, r: n, cx: r, cy: r });
    }
    let E = l.height + 2 * t.stroke,
        c = l.width + 2 * t.stroke,
        u = l.x - t.stroke,
        I = l.y - t.stroke;
    return (0, i.jsx)("rect", { fill: e, height: E, width: c, style: { opacity: o }, x: u, y: I, rx: t.stroke });
}
function D(e) {
    let { status: t, isMobile: n, isTyping: i, size: r } = e,
        a = n && !i && t === T.clD.ONLINE,
        s = (0, N.Kj)(r);
    return {
        ...(function (e, t) {
            let { size: n, status: i, stroke: r, offset: a } = e,
                { isTyping: s, isMobile: _, isVR: l } = t,
                o = s ? 2.5 * i : i,
                E = _ && !l,
                d = E ? 1.5 * i : i;
            return {
                avatarCutoutX: n - o + (o - i) / 2 - r - a,
                avatarCutoutY: n - d - r - a,
                avatarCutoutWidth: o + 2 * r,
                avatarCutoutHeight: d + 2 * r,
                avatarCutoutRadius: E ? (d + 2 * r) * 0.2 : (i + 2 * r) / 2,
            };
        })(s, { isMobile: a, isTyping: i, isVR: !1 }),
        ...(0, d.v)({ status: t, size: s.status, isMobile: a, isTyping: i, topOffset: 2, leftOffset: 6 }),
    };
}
function h(e) {
    let {
            children: t,
            size: n,
            onClick: r,
            onMouseDown: a,
            onKeyDown: _,
            onContextMenu: o,
            onMouseEnter: E,
            onMouseLeave: d,
            className: c,
            tabIndex: u,
            ariaLabel: T,
            ariaHidden: f,
            status: C,
            isMobile: p = !1,
            isVR: m = !1,
            isTyping: L = !1,
            avatarDecoration: D,
            typingOffset: h,
            specs: g,
        } = e,
        b = { width: (0, N.FT)(n), height: (0, N.FT)(n) },
        U =
            null == T || f
                ? void 0
                : (function (e, t) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                      return null != t
                          ? O.intl.formatToPlainString(O.t["/6mw10"], {
                                label: e,
                                status: (0, A.MU)(t, { isMobile: n, isVR: i }),
                            })
                          : e;
                  })(T, C, p, m),
        P = g.size * S.Xq,
        M = (function (e, t, n, i) {
            let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return null;
            if (i)
                switch (t) {
                    case N._3.SIZE_16:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_16;
                    case N._3.SIZE_20:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_20;
                    case N._3.SIZE_24:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_24;
                    case N._3.SIZE_32:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_32;
                    case N._3.SIZE_40:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_40;
                    case N._3.SIZE_44:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_44;
                    case N._3.SIZE_48:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_48;
                    case N._3.SIZE_56:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_56;
                    case N._3.SIZE_72:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_72;
                    case N._3.SIZE_80:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_80;
                    case N._3.SIZE_96:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_96;
                    case N._3.SIZE_120:
                        return I.hW.AVATAR_DECORATION_STATUS_TYPING_120;
                }
            if (n && !r)
                switch (t) {
                    case N._3.SIZE_16:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_16;
                    case N._3.SIZE_20:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_20;
                    case N._3.SIZE_24:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_24;
                    case N._3.SIZE_32:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_32;
                    case N._3.SIZE_40:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_40;
                    case N._3.SIZE_44:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_44;
                    case N._3.SIZE_48:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_48;
                    case N._3.SIZE_56:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_56;
                    case N._3.SIZE_72:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_72;
                    case N._3.SIZE_80:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_80;
                    case N._3.SIZE_96:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_96;
                    case N._3.SIZE_120:
                        return I.hW.AVATAR_DECORATION_STATUS_MOBILE_120;
                }
            switch (t) {
                case N._3.SIZE_16:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_16;
                case N._3.SIZE_20:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_20;
                case N._3.SIZE_24:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_24;
                case N._3.SIZE_32:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_32;
                case N._3.SIZE_40:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_40;
                case N._3.SIZE_44:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_44;
                case N._3.SIZE_48:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_48;
                case N._3.SIZE_56:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_56;
                case N._3.SIZE_72:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_72;
                case N._3.SIZE_80:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_80;
                case N._3.SIZE_96:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_96;
                case N._3.SIZE_120:
                    return I.hW.AVATAR_DECORATION_STATUS_ROUND_120;
            }
            return null;
        })(C, n, p, L, m),
        y =
            null != D &&
            (0, i.jsx)("svg", {
                width: P + h,
                height: P,
                viewBox: `0 0 ${P + h} ${P}`,
                className: R.DX,
                "aria-hidden": !0,
                children: (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: P,
                    height: P,
                    mask: null != M ? `url(#${M})` : void 0,
                    children: (0, i.jsx)("img", { className: R.M, src: D, alt: " ", "aria-hidden": !0 }),
                }),
            });
    return null != r || null != a
        ? (0, i.jsxs)(l.D, {
              className: s()(R.iE, R.Wn, c),
              style: b,
              onClick: r,
              tabIndex: u,
              onContextMenu: o,
              onMouseDown: a,
              onKeyDown: _,
              onMouseEnter: E ?? void 0,
              onMouseLeave: d ?? void 0,
              "aria-label": U,
              "aria-hidden": f,
              children: [t, y],
          })
        : (0, i.jsxs)("div", {
              className: s()(R.iE, c),
              style: b,
              onContextMenu: o ?? void 0,
              onMouseEnter: E ?? void 0,
              onMouseLeave: d ?? void 0,
              role: "img",
              "aria-label": U,
              "aria-hidden": f,
              children: [t, y],
          });
}
let g = r.forwardRef((e, t) => {
    let { src: n, isSpeaking: r, className: a, voiceDb: _ = -1 / 0, speakingStylesConfig: l } = e,
        o = (0, u.v)({ isSpeaking: r, voiceDb: _, spreadDirection: u.O.INSET_ONLY, maxInnerSpreadRadius: 4, ...l });
    return (0, i.jsxs)(
        "div",
        {
            ref: t,
            className: s()(R.yA, a),
            children: [
                (0, i.jsx)("img", { src: n ?? void 0, alt: " ", className: R.my, "aria-hidden": !0 }),
                r && (0, i.jsx)("div", { className: R.uh, style: o }),
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
            statusColor: a,
            isMobile: _ = !1,
            isVR: l = !1,
            isTyping: o = !1,
            typingIndicatorRef: u,
            avatarContentRef: S,
            isSpeaking: O = !1,
            voiceDb: f,
            speakingStylesConfig: C,
            statusTooltip: p = !1,
            statusTooltipDelay: D,
            statusBackdropColor: b,
            "aria-hidden": U = !1,
            "aria-label": P,
            imageClassName: M,
            ref: y,
        } = e,
        G = n !== T.clD.UNKNOWN ? n : null,
        v = (0, N.Kj)(r),
        B = null != G ? Math.ceil((2.5 * v.status - v.status) / 2) : 0,
        w = v.size + B,
        F = (0, d.S3)(G, a);
    return (0, i.jsx)(h, {
        ...e,
        ariaLabel: P,
        ariaHidden: U,
        status: G,
        specs: v,
        typingOffset: B,
        children: (0, i.jsxs)("svg", {
            ref: y,
            width: w,
            height: w,
            viewBox: `0 0 ${w} ${w}`,
            className: s()(R.dK, R.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: v.size,
                    height: v.size,
                    mask: `url(#${(function (e, t, n, i) {
                        let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        if (null == e) return I.hW.AVATAR_DEFAULT;
                        if (i)
                            switch (t) {
                                case N._3.SIZE_16:
                                    return I.hW.AVATAR_STATUS_TYPING_16;
                                case N._3.SIZE_20:
                                    return I.hW.AVATAR_STATUS_TYPING_20;
                                case N._3.SIZE_24:
                                    return I.hW.AVATAR_STATUS_TYPING_24;
                                case N._3.SIZE_32:
                                    return I.hW.AVATAR_STATUS_TYPING_32;
                                case N._3.SIZE_40:
                                    return I.hW.AVATAR_STATUS_TYPING_40;
                                case N._3.SIZE_44:
                                    return I.hW.AVATAR_STATUS_TYPING_44;
                                case N._3.SIZE_48:
                                    return I.hW.AVATAR_STATUS_TYPING_48;
                                case N._3.SIZE_56:
                                    return I.hW.AVATAR_STATUS_TYPING_56;
                                case N._3.SIZE_72:
                                    return I.hW.AVATAR_STATUS_TYPING_72;
                                case N._3.SIZE_80:
                                    return I.hW.AVATAR_STATUS_TYPING_80;
                                case N._3.SIZE_96:
                                    return I.hW.AVATAR_STATUS_TYPING_96;
                                case N._3.SIZE_120:
                                    return I.hW.AVATAR_STATUS_TYPING_120;
                            }
                        if (e === T.clD.ONLINE && n && !r)
                            switch (t) {
                                case N._3.SIZE_16:
                                    return I.hW.AVATAR_STATUS_MOBILE_16;
                                case N._3.SIZE_20:
                                    return I.hW.AVATAR_STATUS_MOBILE_20;
                                case N._3.SIZE_24:
                                    return I.hW.AVATAR_STATUS_MOBILE_24;
                                case N._3.SIZE_32:
                                    return I.hW.AVATAR_STATUS_MOBILE_32;
                                case N._3.SIZE_40:
                                    return I.hW.AVATAR_STATUS_MOBILE_40;
                                case N._3.SIZE_44:
                                    return I.hW.AVATAR_STATUS_MOBILE_44;
                                case N._3.SIZE_48:
                                    return I.hW.AVATAR_STATUS_MOBILE_48;
                                case N._3.SIZE_56:
                                    return I.hW.AVATAR_STATUS_MOBILE_56;
                                case N._3.SIZE_72:
                                    return I.hW.AVATAR_STATUS_MOBILE_72;
                                case N._3.SIZE_80:
                                    return I.hW.AVATAR_STATUS_MOBILE_80;
                                case N._3.SIZE_96:
                                    return I.hW.AVATAR_STATUS_MOBILE_96;
                                case N._3.SIZE_120:
                                    return I.hW.AVATAR_STATUS_MOBILE_120;
                            }
                        switch (t) {
                            case N._3.SIZE_16:
                                return I.hW.AVATAR_STATUS_ROUND_16;
                            case N._3.SIZE_20:
                                return I.hW.AVATAR_STATUS_ROUND_20;
                            case N._3.SIZE_24:
                                return I.hW.AVATAR_STATUS_ROUND_24;
                            case N._3.SIZE_32:
                                return I.hW.AVATAR_STATUS_ROUND_32;
                            case N._3.SIZE_40:
                                return I.hW.AVATAR_STATUS_ROUND_40;
                            case N._3.SIZE_44:
                                return I.hW.AVATAR_STATUS_ROUND_44;
                            case N._3.SIZE_48:
                                return I.hW.AVATAR_STATUS_ROUND_48;
                            case N._3.SIZE_56:
                                return I.hW.AVATAR_STATUS_ROUND_56;
                            case N._3.SIZE_72:
                                return I.hW.AVATAR_STATUS_ROUND_72;
                            case N._3.SIZE_80:
                                return I.hW.AVATAR_STATUS_ROUND_80;
                            case N._3.SIZE_96:
                                return I.hW.AVATAR_STATUS_ROUND_96;
                            case N._3.SIZE_120:
                                return I.hW.AVATAR_STATUS_ROUND_120;
                        }
                        throw Error(
                            `getMaskId(): Unsupported type, size: ${t}, status: ${e}, isMobile: ${n ? "true" : "false"}`,
                        );
                    })(G, r, _, o, l)})`,
                    children: (0, i.jsx)(g, {
                        ref: S,
                        src: t,
                        isSpeaking: O,
                        voiceDb: f,
                        speakingStylesConfig: C,
                        className: M,
                    }),
                }),
                null != G && null != b ? L(b, v, G, { isMobile: _, isTyping: o, isVR: l }) : null,
                null != G
                    ? (0, i.jsx)(c.m, {
                          text: p ? (0, A.MU)(G) : null,
                          ariaHidden: !0,
                          position: "top",
                          spacing: 5 + 1.5 * v.stroke,
                          delay: D,
                          children: (0, i.jsxs)("g", {
                              children: [
                                  (0, i.jsx)("rect", {
                                      ...m(v, G, { isMobile: _, isTyping: o, isVR: l }),
                                      fill: F,
                                      mask: `url(#${(0, d.p8)(G, { isMobile: _, isTyping: o, isVR: l })})`,
                                      className: R.Hs,
                                  }),
                                  o
                                      ? (0, i.jsx)(E.n, {
                                            ref: u,
                                            dotRadius: v.status / 4,
                                            x: v.size - 1.375 * v.status - v.offset,
                                            y: v.size - v.status / 1.333 - v.offset,
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
function U(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: a,
            isMobile: l = !1,
            isTyping: u = !1,
            typingIndicatorRef: I,
            isSpeaking: T = !1,
            voiceDb: S,
            speakingStylesConfig: O,
            size: m,
            src: b,
            status: U,
            statusColor: P,
            statusTooltip: M = !1,
            statusTooltipDelay: y,
            statusBackdropColor: G,
            "aria-hidden": v = !1,
            "aria-label": B,
            imageClassName: w,
            pulseStatusIcon: F,
        } = e,
        V = (0, d.S3)(U, P),
        H = r.useId(),
        k = r.useId(),
        [x] = r.useState(() => ({ fill: a, ...D({ size: m, status: n, isMobile: t, isTyping: !1 }) })),
        W = r.useMemo(() => ({ fill: V, ...D({ size: m, status: U, isMobile: l, isTyping: u }) }), [V, m, U, l, u]),
        {
            avatarCutoutX: Y,
            avatarCutoutY: j,
            avatarCutoutWidth: K,
            avatarCutoutHeight: $,
            avatarCutoutRadius: Q,
            fill: q,
            ...X
        } = (0, o.z)({ config: f, from: x, to: W }, C() ? "animate-always" : "animate-never"),
        z = (0, N.FT)(m),
        J = (0, N.Kj)(m),
        Z = 2.5 * J.status,
        ee = 1.5 * J.status,
        et = null != U ? (2.5 * J.status - J.status) / 2 : 0,
        en = J.size + Math.ceil(et),
        [ei, er, ea] = (0, o.z)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: F ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            C() ? "animate-always" : "animate-never",
            [F, U],
        );
    return (0, i.jsx)(h, {
        ...e,
        ariaLabel: B,
        ariaHidden: v,
        typingOffset: et,
        specs: J,
        children: (0, i.jsxs)("svg", {
            width: en,
            height: en,
            viewBox: `0 0 ${en} ${en}`,
            className: s()(R.dK, R.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: H,
                    width: z,
                    height: z,
                    children: [
                        (0, i.jsx)("circle", { cx: z / 2, cy: z / 2, r: z / 2, fill: "white" }),
                        (0, i.jsx)(_.animated.rect, { color: "black", x: Y, y: j, width: K, height: $, rx: Q, ry: Q }),
                    ],
                }),
                (0, i.jsx)("foreignObject", {
                    className: R.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: z,
                    height: z,
                    mask: `url(#${H})`,
                    children: (0, i.jsx)(g, {
                        src: b,
                        isSpeaking: T,
                        voiceDb: S,
                        className: w,
                        speakingStylesConfig: O,
                    }),
                }),
                null != G && L(G, J, U, { isMobile: l, isTyping: u, isVR: !1 }),
                (0, i.jsx)(c.m, {
                    text: M ? (0, A.MU)(U) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: (function (e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return 5 - (n && !i ? 0 : 0.5 * e) + 1.5 * t;
                    })(J.status, J.stroke, l, u),
                    delay: y,
                    children: (0, i.jsxs)(_.animated.g, {
                        transform: ei.scale.to((e) => {
                            let t, n, i, r, a, s;
                            return `scale(${e}) ${((t = J.status * e), (n = (J.status - t) / 2), (i = J.size - t - (null != U ? (2.5 * t - t) / 2 : 0) - J.offset - n), (r = J.size - 1.5 * t - J.offset - n), (a = Math.round((i / e) * 100) / 100), (s = Math.round((r / e) * 100) / 100), `translate(${a}, ${s})`)}`;
                        }),
                        children: [
                            (0, i.jsxs)("svg", {
                                width: Z,
                                height: ee,
                                viewBox: `0 0 ${Z} ${ee}`,
                                className: M ? R.Oi : void 0,
                                children: [
                                    (0, d.pF)(X, J.status, k),
                                    (0, i.jsx)(_.animated.rect, { fill: q, width: Z, height: ee, mask: `url(#${k})` }),
                                    (0, i.jsx)(E.n, {
                                        ref: I,
                                        dotRadius: J.status / 4,
                                        x: 0.15 * Z,
                                        y: 0.5 * ee,
                                        hide: !u,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(p, { size: m, isMobile: l, isTyping: u, className: R.Hs }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
g.displayName = "AvatarImg";
let P = r.memo(function (e) {
    var t, n;
    let { statusColor: a, status: s, ..._ } = e,
        { isMobile: l = !1, isTyping: o = !1, isVR: E = !1 } = _,
        c = r.useRef(s),
        u = r.useRef(l),
        I = (0, d.S3)(s, a),
        A = r.useRef(I),
        S = r.useRef(!1),
        N =
            S.current ||
            ((t = c.current),
            (n = u.current),
            null != t && null != s && (!!o || s !== t || (s === T.clD.ONLINE && l !== n)));
    return (
        r.useLayoutEffect(() => {
            (S.current = N), (c.current = s), (u.current = l), (A.current = I);
        }, [s, l, I, N]),
        !E && null != s && null != c.current && N
            ? (0, i.jsx)(U, {
                  ..._,
                  status: s,
                  statusColor: I,
                  fromStatus: c.current,
                  fromIsMobile: u.current,
                  fromColor: A.current,
              })
            : (0, i.jsx)(b, { ..._, status: s, statusColor: I })
    );
});
