n.d(t, { Js: () => P, Rb: () => C, d9: () => D, eu: () => b });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(925747),
    o = n(939249),
    d = n(717421),
    c = n(863610),
    _ = n(133171),
    E = n(990078),
    u = n(556525),
    A = n(573435),
    I = n(427262),
    T = n(652215),
    h = n(190460),
    S = n(778712),
    N = n(985018),
    f = n(282291);
let p = { tension: 1200, friction: 70 };
function m() {
    return document.hasFocus();
}
function O(e) {
    let { size: t, isMobile: n, isTyping: a, ...r } = e,
        s = (0, S.Kj)(t),
        l = s.status * (n && !a ? 1.5 : 1),
        o = s.status * (a ? 2.5 : 1),
        d = a ? (2.5 * s.status - s.status) / 2 : 0,
        c = s.size - s.status - d - s.offset,
        _ = s.size - l - s.offset;
    return (0, i.jsx)("rect", { x: c, y: _, width: o, height: l, fill: "transparent", "aria-hidden": !0, ...r });
}
function C(e, t, n) {
    let { isTyping: i, isMobile: a, isVR: r } = n,
        s = (0, _.i0)(e.status, t, { isTyping: i, isMobile: a, isVR: r }),
        l = (i ? e.size - (s.width / 2 + e.status / 2) : e.size - s.width) - e.offset;
    return { ...s, x: l, y: e.size - s.height - e.offset };
}
function R(e, t, n, a) {
    let { isMobile: r, isTyping: s, isVR: l } = a,
        o = C(t, n, { isMobile: r, isTyping: s, isVR: l }),
        d = (0, _.yi)(n, e);
    if (!(r && !l)) {
        let n = o.height / 2 + t.stroke,
            a = o.x + t.status / 2;
        return (0, i.jsx)("circle", { style: { opacity: d }, fill: e, r: n, cx: a, cy: a });
    }
    let c = o.height + 2 * t.stroke,
        E = o.width + 2 * t.stroke,
        u = o.x - t.stroke,
        A = o.y - t.stroke;
    return (0, i.jsx)("rect", { fill: e, height: c, width: E, style: { opacity: d }, x: u, y: A, rx: t.stroke });
}
function g(e) {
    let { status: t, isMobile: n, isTyping: i, size: a } = e,
        r = n && !i && t === T.clD.ONLINE,
        s = (0, S.Kj)(a);
    return {
        ...(function (e, t) {
            let { size: n, status: i, stroke: a, offset: r } = e,
                { isTyping: s, isMobile: l, isVR: o } = t,
                d = s ? 2.5 * i : i,
                c = l && !o,
                _ = c ? 1.5 * i : i;
            return {
                avatarCutoutX: n - d + (d - i) / 2 - a - r,
                avatarCutoutY: n - _ - a - r,
                avatarCutoutWidth: d + 2 * a,
                avatarCutoutHeight: _ + 2 * a,
                avatarCutoutRadius: c ? (_ + 2 * a) * 0.2 : (i + 2 * a) / 2,
            };
        })(s, { isMobile: r, isTyping: i, isVR: !1 }),
        ...(0, _.v)({ status: t, size: s.status, isMobile: r, isTyping: i, topOffset: 2, leftOffset: 6 }),
    };
}
function L(e) {
    let {
            children: t,
            size: n,
            onClick: a,
            onMouseDown: r,
            onKeyDown: l,
            onContextMenu: d,
            onMouseEnter: c,
            onMouseLeave: _,
            className: E,
            tabIndex: u,
            ariaLabel: T,
            ariaHidden: p,
            status: m,
            isMobile: O = !1,
            isVR: C = !1,
            isTyping: R = !1,
            avatarDecoration: g,
            typingOffset: L,
            specs: D,
        } = e,
        b = { width: (0, S.FT)(n), height: (0, S.FT)(n) },
        M =
            null == T || p
                ? void 0
                : (function (e, t) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                      return null != t
                          ? N.intl.formatToPlainString(N.t["/6mw10"], {
                                label: e,
                                status: (0, I.MU)(t, { isMobile: n, isVR: i }),
                            })
                          : e;
                  })(T, m, O, C),
        P = D.size * h.Xq,
        U = (function (e, t, n, i) {
            let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return null;
            if (i)
                switch (t) {
                    case S._3.SIZE_16:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_16;
                    case S._3.SIZE_20:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_20;
                    case S._3.SIZE_24:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_24;
                    case S._3.SIZE_32:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_32;
                    case S._3.SIZE_40:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_40;
                    case S._3.SIZE_44:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_44;
                    case S._3.SIZE_48:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_48;
                    case S._3.SIZE_56:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_56;
                    case S._3.SIZE_72:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_72;
                    case S._3.SIZE_80:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_80;
                    case S._3.SIZE_96:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_96;
                    case S._3.SIZE_120:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_120;
                }
            if (n && !a)
                switch (t) {
                    case S._3.SIZE_16:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_16;
                    case S._3.SIZE_20:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_20;
                    case S._3.SIZE_24:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_24;
                    case S._3.SIZE_32:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_32;
                    case S._3.SIZE_40:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_40;
                    case S._3.SIZE_44:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_44;
                    case S._3.SIZE_48:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_48;
                    case S._3.SIZE_56:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_56;
                    case S._3.SIZE_72:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_72;
                    case S._3.SIZE_80:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_80;
                    case S._3.SIZE_96:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_96;
                    case S._3.SIZE_120:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_120;
                }
            switch (t) {
                case S._3.SIZE_16:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_16;
                case S._3.SIZE_20:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_20;
                case S._3.SIZE_24:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_24;
                case S._3.SIZE_32:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_32;
                case S._3.SIZE_40:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_40;
                case S._3.SIZE_44:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_44;
                case S._3.SIZE_48:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_48;
                case S._3.SIZE_56:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_56;
                case S._3.SIZE_72:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_72;
                case S._3.SIZE_80:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_80;
                case S._3.SIZE_96:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_96;
                case S._3.SIZE_120:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_120;
            }
            return null;
        })(m, n, O, R, C),
        v =
            null != g &&
            (0, i.jsx)("svg", {
                width: P + L,
                height: P,
                viewBox: `0 0 ${P + L} ${P}`,
                className: f.DX,
                "aria-hidden": !0,
                children: (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: P,
                    height: P,
                    mask: null != U ? `url(#${U})` : void 0,
                    children: (0, i.jsx)("img", { className: f.M, src: g, alt: " ", "aria-hidden": !0 }),
                }),
            });
    return null != a || null != r
        ? (0, i.jsxs)(o.D, {
              className: s()(f.iE, f.Wn, E),
              style: b,
              onClick: a,
              tabIndex: u,
              onContextMenu: d,
              onMouseDown: r,
              onKeyDown: l,
              onMouseEnter: c ?? void 0,
              onMouseLeave: _ ?? void 0,
              "aria-label": M,
              "aria-hidden": p,
              children: [t, v],
          })
        : (0, i.jsxs)("div", {
              className: s()(f.iE, E),
              style: b,
              onContextMenu: d ?? void 0,
              onMouseEnter: c ?? void 0,
              onMouseLeave: _ ?? void 0,
              role: "img",
              "aria-label": M,
              "aria-hidden": p,
              children: [t, v],
          });
}
let D = a.forwardRef((e, t) => {
    let { src: n, isSpeaking: a, className: r, voiceDb: l = -1 / 0, speakingStylesConfig: o } = e,
        d = (0, u.v)({ isSpeaking: a, voiceDb: l, spreadDirection: u.O.INSET_ONLY, maxInnerSpreadRadius: 4, ...o });
    return (0, i.jsxs)(
        "div",
        {
            ref: t,
            className: s()(f.yA, r),
            children: [
                (0, i.jsx)("img", { src: n ?? void 0, alt: " ", className: f.my, "aria-hidden": !0 }),
                a && (0, i.jsx)("div", { className: f.uh, style: d }),
            ],
        },
        n,
    );
});
function b(e) {
    let {
            src: t,
            status: n,
            size: a,
            statusColor: r,
            isMobile: l = !1,
            isVR: o = !1,
            isTyping: d = !1,
            typingIndicatorRef: u,
            avatarContentRef: h,
            isSpeaking: N = !1,
            voiceDb: p,
            speakingStylesConfig: m,
            statusTooltip: O = !1,
            statusTooltipDelay: g,
            statusBackdropColor: b,
            "aria-hidden": M = !1,
            "aria-label": P,
            imageClassName: U,
            ref: v,
        } = e,
        y = n !== T.clD.UNKNOWN ? n : null,
        G = (0, S.Kj)(a),
        w = null != y ? Math.ceil((2.5 * G.status - G.status) / 2) : 0,
        x = G.size + w,
        V = (0, _.S3)(y, r);
    return (0, i.jsx)(L, {
        ...e,
        ariaLabel: P,
        ariaHidden: M,
        status: y,
        specs: G,
        typingOffset: w,
        children: (0, i.jsxs)("svg", {
            ref: v,
            width: x,
            height: x,
            viewBox: `0 0 ${x} ${x}`,
            className: s()(f.dK, f.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: G.size,
                    height: G.size,
                    mask: `url(#${(function (e, t, n, i) {
                        let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        if (null == e) return A.hW.AVATAR_DEFAULT;
                        if (i)
                            switch (t) {
                                case S._3.SIZE_16:
                                    return A.hW.AVATAR_STATUS_TYPING_16;
                                case S._3.SIZE_20:
                                    return A.hW.AVATAR_STATUS_TYPING_20;
                                case S._3.SIZE_24:
                                    return A.hW.AVATAR_STATUS_TYPING_24;
                                case S._3.SIZE_32:
                                    return A.hW.AVATAR_STATUS_TYPING_32;
                                case S._3.SIZE_40:
                                    return A.hW.AVATAR_STATUS_TYPING_40;
                                case S._3.SIZE_44:
                                    return A.hW.AVATAR_STATUS_TYPING_44;
                                case S._3.SIZE_48:
                                    return A.hW.AVATAR_STATUS_TYPING_48;
                                case S._3.SIZE_56:
                                    return A.hW.AVATAR_STATUS_TYPING_56;
                                case S._3.SIZE_72:
                                    return A.hW.AVATAR_STATUS_TYPING_72;
                                case S._3.SIZE_80:
                                    return A.hW.AVATAR_STATUS_TYPING_80;
                                case S._3.SIZE_96:
                                    return A.hW.AVATAR_STATUS_TYPING_96;
                                case S._3.SIZE_120:
                                    return A.hW.AVATAR_STATUS_TYPING_120;
                            }
                        if (e === T.clD.ONLINE && n && !a)
                            switch (t) {
                                case S._3.SIZE_16:
                                    return A.hW.AVATAR_STATUS_MOBILE_16;
                                case S._3.SIZE_20:
                                    return A.hW.AVATAR_STATUS_MOBILE_20;
                                case S._3.SIZE_24:
                                    return A.hW.AVATAR_STATUS_MOBILE_24;
                                case S._3.SIZE_32:
                                    return A.hW.AVATAR_STATUS_MOBILE_32;
                                case S._3.SIZE_40:
                                    return A.hW.AVATAR_STATUS_MOBILE_40;
                                case S._3.SIZE_44:
                                    return A.hW.AVATAR_STATUS_MOBILE_44;
                                case S._3.SIZE_48:
                                    return A.hW.AVATAR_STATUS_MOBILE_48;
                                case S._3.SIZE_56:
                                    return A.hW.AVATAR_STATUS_MOBILE_56;
                                case S._3.SIZE_72:
                                    return A.hW.AVATAR_STATUS_MOBILE_72;
                                case S._3.SIZE_80:
                                    return A.hW.AVATAR_STATUS_MOBILE_80;
                                case S._3.SIZE_96:
                                    return A.hW.AVATAR_STATUS_MOBILE_96;
                                case S._3.SIZE_120:
                                    return A.hW.AVATAR_STATUS_MOBILE_120;
                            }
                        switch (t) {
                            case S._3.SIZE_16:
                                return A.hW.AVATAR_STATUS_ROUND_16;
                            case S._3.SIZE_20:
                                return A.hW.AVATAR_STATUS_ROUND_20;
                            case S._3.SIZE_24:
                                return A.hW.AVATAR_STATUS_ROUND_24;
                            case S._3.SIZE_32:
                                return A.hW.AVATAR_STATUS_ROUND_32;
                            case S._3.SIZE_40:
                                return A.hW.AVATAR_STATUS_ROUND_40;
                            case S._3.SIZE_44:
                                return A.hW.AVATAR_STATUS_ROUND_44;
                            case S._3.SIZE_48:
                                return A.hW.AVATAR_STATUS_ROUND_48;
                            case S._3.SIZE_56:
                                return A.hW.AVATAR_STATUS_ROUND_56;
                            case S._3.SIZE_72:
                                return A.hW.AVATAR_STATUS_ROUND_72;
                            case S._3.SIZE_80:
                                return A.hW.AVATAR_STATUS_ROUND_80;
                            case S._3.SIZE_96:
                                return A.hW.AVATAR_STATUS_ROUND_96;
                            case S._3.SIZE_120:
                                return A.hW.AVATAR_STATUS_ROUND_120;
                        }
                        throw Error(
                            `getMaskId(): Unsupported type, size: ${t}, status: ${e}, isMobile: ${n ? "true" : "false"}`,
                        );
                    })(y, a, l, d, o)})`,
                    children: (0, i.jsx)(D, {
                        ref: h,
                        src: t,
                        isSpeaking: N,
                        voiceDb: p,
                        speakingStylesConfig: m,
                        className: U,
                    }),
                }),
                null != y && null != b ? R(b, G, y, { isMobile: l, isTyping: d, isVR: o }) : null,
                null != y
                    ? (0, i.jsx)(E.m, {
                          text: O ? (0, I.MU)(y) : null,
                          ariaHidden: !0,
                          position: "top",
                          spacing: 5 + 1.5 * G.stroke,
                          delay: g,
                          children: (0, i.jsxs)("g", {
                              children: [
                                  (0, i.jsx)("rect", {
                                      ...C(G, y, { isMobile: l, isTyping: d, isVR: o }),
                                      fill: V,
                                      mask: `url(#${(0, _.p8)(y, { isMobile: l, isTyping: d, isVR: o })})`,
                                      className: f.Hs,
                                  }),
                                  d
                                      ? (0, i.jsx)(c.n, {
                                            ref: u,
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
    });
}
function M(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: r,
            isMobile: o = !1,
            isTyping: u = !1,
            typingIndicatorRef: A,
            isSpeaking: T = !1,
            voiceDb: h,
            speakingStylesConfig: N,
            size: C,
            src: b,
            status: M,
            statusColor: P,
            statusTooltip: U = !1,
            statusTooltipDelay: v,
            statusBackdropColor: y,
            "aria-hidden": G = !1,
            "aria-label": w,
            imageClassName: x,
            pulseStatusIcon: V,
        } = e,
        B = (0, _.S3)(M, P),
        F = a.useId(),
        k = a.useId(),
        [H] = a.useState(() => ({ fill: r, ...g({ size: C, status: n, isMobile: t, isTyping: !1 }) })),
        j = a.useMemo(() => ({ fill: B, ...g({ size: C, status: M, isMobile: o, isTyping: u }) }), [B, C, M, o, u]),
        {
            avatarCutoutX: Y,
            avatarCutoutY: W,
            avatarCutoutWidth: K,
            avatarCutoutHeight: $,
            avatarCutoutRadius: Z,
            fill: q,
            ...Q
        } = (0, d.z)({ config: p, from: H, to: j }, m() ? "animate-always" : "animate-never"),
        z = (0, S.FT)(C),
        X = (0, S.Kj)(C),
        J = 2.5 * X.status,
        ee = 1.5 * X.status,
        et = null != M ? (2.5 * X.status - X.status) / 2 : 0,
        en = X.size + Math.ceil(et),
        [ei, ea, er] = (0, d.z)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: V ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            m() ? "animate-always" : "animate-never",
            [V, M],
        );
    return (0, i.jsx)(L, {
        ...e,
        ariaLabel: w,
        ariaHidden: G,
        typingOffset: et,
        specs: X,
        children: (0, i.jsxs)("svg", {
            width: en,
            height: en,
            viewBox: `0 0 ${en} ${en}`,
            className: s()(f.dK, f.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: F,
                    width: z,
                    height: z,
                    children: [
                        (0, i.jsx)("circle", { cx: z / 2, cy: z / 2, r: z / 2, fill: "white" }),
                        (0, i.jsx)(l.animated.rect, { color: "black", x: Y, y: W, width: K, height: $, rx: Z, ry: Z }),
                    ],
                }),
                (0, i.jsx)("foreignObject", {
                    className: f.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: z,
                    height: z,
                    mask: `url(#${F})`,
                    children: (0, i.jsx)(D, {
                        src: b,
                        isSpeaking: T,
                        voiceDb: h,
                        className: x,
                        speakingStylesConfig: N,
                    }),
                }),
                null != y && R(y, X, M, { isMobile: o, isTyping: u, isVR: !1 }),
                (0, i.jsx)(E.m, {
                    text: U ? (0, I.MU)(M) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: (function (e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return 5 - (n && !i ? 0 : 0.5 * e) + 1.5 * t;
                    })(X.status, X.stroke, o, u),
                    delay: v,
                    children: (0, i.jsxs)(l.animated.g, {
                        transform: ei.scale.to((e) => {
                            let t, n, i, a, r, s;
                            return `scale(${e}) ${((t = X.status * e), (n = (X.status - t) / 2), (i = X.size - t - (null != M ? (2.5 * t - t) / 2 : 0) - X.offset - n), (a = X.size - 1.5 * t - X.offset - n), (r = Math.round((i / e) * 100) / 100), (s = Math.round((a / e) * 100) / 100), `translate(${r}, ${s})`)}`;
                        }),
                        children: [
                            (0, i.jsxs)("svg", {
                                width: J,
                                height: ee,
                                viewBox: `0 0 ${J} ${ee}`,
                                className: U ? f.Oi : void 0,
                                children: [
                                    (0, _.pF)(Q, X.status, k),
                                    (0, i.jsx)(l.animated.rect, { fill: q, width: J, height: ee, mask: `url(#${k})` }),
                                    (0, i.jsx)(c.n, {
                                        ref: A,
                                        dotRadius: X.status / 4,
                                        x: 0.15 * J,
                                        y: 0.5 * ee,
                                        hide: !u,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(O, { size: C, isMobile: o, isTyping: u, className: f.Hs }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
D.displayName = "AvatarImg";
let P = a.memo(function (e) {
    var t, n;
    let { statusColor: r, status: s, ...l } = e,
        { isMobile: o = !1, isTyping: d = !1, isVR: c = !1 } = l,
        E = a.useRef(s),
        u = a.useRef(o),
        A = (0, _.S3)(s, r),
        I = a.useRef(A),
        h = a.useRef(!1),
        S =
            h.current ||
            ((t = E.current),
            (n = u.current),
            null != t && null != s && (!!d || s !== t || (s === T.clD.ONLINE && o !== n)));
    return (
        a.useLayoutEffect(() => {
            (h.current = S), (E.current = s), (u.current = o), (I.current = A);
        }, [s, o, A, S]),
        !c && null != s && null != E.current && S
            ? (0, i.jsx)(M, {
                  ...l,
                  status: s,
                  statusColor: A,
                  fromStatus: E.current,
                  fromIsMobile: u.current,
                  fromColor: I.current,
              })
            : (0, i.jsx)(b, { ...l, status: s, statusColor: A })
    );
});
