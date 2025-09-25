n.d(t, {
    Vq: () => w,
    Xo: () => F,
    qE: () => k,
    qe: () => M,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(6383),
    l = n(793030),
    c = n(438784),
    u = n(696826),
    d = n(981729),
    f = n(686546),
    _ = n(51144),
    p = n(981631),
    h = n(419061),
    m = n(268685),
    g = n(388032),
    E = n(536537);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = {
    tension: 1200,
    friction: 70,
};
function A() {
    return document.hasFocus();
}
function C(e) {
    var { size: t, isMobile: n, isTyping: i } = e,
        a = I(e, ["size", "isMobile", "isTyping"]);
    let o = (0, m.UC)(t),
        s = o.status * (n && !i ? m.EW : 1),
        l = o.status * (i ? m.D6 : 1),
        c = i ? (o.status * m.D6 - o.status) / 2 : 0,
        u = o.size - o.status - c - o.offset,
        d = o.size - s - o.offset;
    return (0, r.jsx)(
        "rect",
        y(
            {
                x: u,
                y: d,
                width: l,
                height: s,
                fill: "transparent",
                "aria-hidden": !0,
            },
            a,
        ),
    );
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t
        ? g.intl.formatToPlainString(g.t["/6mw19"], {
              label: e,
              status: (0, _.u5)(t, n),
          })
        : e;
}
function R(e, t, n, r) {
    if (null == e) return null;
    if (r)
        switch (t) {
            case m.EF.SIZE_16:
                return f.QS.AVATAR_DECORATION_STATUS_TYPING_16;
            case m.EF.SIZE_20:
                return f.QS.AVATAR_DECORATION_STATUS_TYPING_20;
            case m.EF.SIZE_24:
                return f.QS.AVATAR_DECORATION_STATUS_TYPING_24;
            case m.EF.SIZE_32:
                return f.QS.AVATAR_DECORATION_STATUS_TYPING_32;
            case m.EF.SIZE_40:
                return f.QS.AVATAR_DECORATION_STATUS_TYPING_40;
            case m.EF.SIZE_44:
                return f.QS.AVATAR_DECORATION_STATUS_TYPING_44;
            case m.EF.SIZE_48:
                return f.QS.AVATAR_DECORATION_STATUS_TYPING_48;
            case m.EF.SIZE_56:
                return f.QS.AVATAR_DECORATION_STATUS_TYPING_56;
            case m.EF.SIZE_80:
                return f.QS.AVATAR_DECORATION_STATUS_TYPING_80;
            case m.EF.SIZE_96:
                return f.QS.AVATAR_DECORATION_STATUS_TYPING_96;
            case m.EF.SIZE_120:
                return f.QS.AVATAR_DECORATION_STATUS_TYPING_120;
        }
    if (n)
        switch (t) {
            case m.EF.SIZE_16:
                return f.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
            case m.EF.SIZE_20:
                return f.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
            case m.EF.SIZE_24:
                return f.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
            case m.EF.SIZE_32:
                return f.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
            case m.EF.SIZE_40:
                return f.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
            case m.EF.SIZE_44:
                return f.QS.AVATAR_DECORATION_STATUS_MOBILE_44;
            case m.EF.SIZE_48:
                return f.QS.AVATAR_DECORATION_STATUS_MOBILE_48;
            case m.EF.SIZE_56:
                return f.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
            case m.EF.SIZE_80:
                return f.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
            case m.EF.SIZE_96:
                return f.QS.AVATAR_DECORATION_STATUS_MOBILE_96;
            case m.EF.SIZE_120:
                return f.QS.AVATAR_DECORATION_STATUS_MOBILE_120;
        }
    switch (t) {
        case m.EF.SIZE_16:
            return f.QS.AVATAR_DECORATION_STATUS_ROUND_16;
        case m.EF.SIZE_20:
            return f.QS.AVATAR_DECORATION_STATUS_ROUND_20;
        case m.EF.SIZE_24:
            return f.QS.AVATAR_DECORATION_STATUS_ROUND_24;
        case m.EF.SIZE_32:
            return f.QS.AVATAR_DECORATION_STATUS_ROUND_32;
        case m.EF.SIZE_40:
            return f.QS.AVATAR_DECORATION_STATUS_ROUND_40;
        case m.EF.SIZE_44:
            return f.QS.AVATAR_DECORATION_STATUS_ROUND_44;
        case m.EF.SIZE_48:
            return f.QS.AVATAR_DECORATION_STATUS_ROUND_48;
        case m.EF.SIZE_56:
            return f.QS.AVATAR_DECORATION_STATUS_ROUND_56;
        case m.EF.SIZE_80:
            return f.QS.AVATAR_DECORATION_STATUS_ROUND_80;
        case m.EF.SIZE_96:
            return f.QS.AVATAR_DECORATION_STATUS_ROUND_96;
        case m.EF.SIZE_120:
            return f.QS.AVATAR_DECORATION_STATUS_ROUND_120;
    }
    return null;
}
function P(e, t, n, r) {
    if (null == e) return f.QS.AVATAR_DEFAULT;
    if (r)
        switch (t) {
            case m.EF.SIZE_16:
                return f.QS.AVATAR_STATUS_TYPING_16;
            case m.EF.SIZE_20:
                return f.QS.AVATAR_STATUS_TYPING_20;
            case m.EF.SIZE_24:
                return f.QS.AVATAR_STATUS_TYPING_24;
            case m.EF.SIZE_32:
                return f.QS.AVATAR_STATUS_TYPING_32;
            case m.EF.SIZE_40:
                return f.QS.AVATAR_STATUS_TYPING_40;
            case m.EF.SIZE_44:
                return f.QS.AVATAR_STATUS_TYPING_44;
            case m.EF.SIZE_48:
                return f.QS.AVATAR_STATUS_TYPING_48;
            case m.EF.SIZE_56:
                return f.QS.AVATAR_STATUS_TYPING_56;
            case m.EF.SIZE_80:
                return f.QS.AVATAR_STATUS_TYPING_80;
            case m.EF.SIZE_96:
                return f.QS.AVATAR_STATUS_TYPING_96;
            case m.EF.SIZE_120:
                return f.QS.AVATAR_STATUS_TYPING_120;
        }
    if (e === p.Skl.ONLINE && n)
        switch (t) {
            case m.EF.SIZE_16:
                return f.QS.AVATAR_STATUS_MOBILE_16;
            case m.EF.SIZE_20:
                return f.QS.AVATAR_STATUS_MOBILE_20;
            case m.EF.SIZE_24:
                return f.QS.AVATAR_STATUS_MOBILE_24;
            case m.EF.SIZE_32:
                return f.QS.AVATAR_STATUS_MOBILE_32;
            case m.EF.SIZE_40:
                return f.QS.AVATAR_STATUS_MOBILE_40;
            case m.EF.SIZE_44:
                return f.QS.AVATAR_STATUS_MOBILE_44;
            case m.EF.SIZE_48:
                return f.QS.AVATAR_STATUS_MOBILE_48;
            case m.EF.SIZE_56:
                return f.QS.AVATAR_STATUS_MOBILE_56;
            case m.EF.SIZE_80:
                return f.QS.AVATAR_STATUS_MOBILE_80;
            case m.EF.SIZE_96:
                return f.QS.AVATAR_STATUS_MOBILE_96;
            case m.EF.SIZE_120:
                return f.QS.AVATAR_STATUS_MOBILE_120;
        }
    switch (t) {
        case m.EF.SIZE_16:
            return f.QS.AVATAR_STATUS_ROUND_16;
        case m.EF.SIZE_20:
            return f.QS.AVATAR_STATUS_ROUND_20;
        case m.EF.SIZE_24:
            return f.QS.AVATAR_STATUS_ROUND_24;
        case m.EF.SIZE_32:
            return f.QS.AVATAR_STATUS_ROUND_32;
        case m.EF.SIZE_40:
            return f.QS.AVATAR_STATUS_ROUND_40;
        case m.EF.SIZE_44:
            return f.QS.AVATAR_STATUS_ROUND_44;
        case m.EF.SIZE_48:
            return f.QS.AVATAR_STATUS_ROUND_48;
        case m.EF.SIZE_56:
            return f.QS.AVATAR_STATUS_ROUND_56;
        case m.EF.SIZE_80:
            return f.QS.AVATAR_STATUS_ROUND_80;
        case m.EF.SIZE_96:
            return f.QS.AVATAR_STATUS_ROUND_96;
        case m.EF.SIZE_120:
            return f.QS.AVATAR_STATUS_ROUND_120;
    }
    throw Error(
        "getMaskId(): Unsupported type, size: "
            .concat(t, ", status: ")
            .concat(e, ", isMobile: ")
            .concat(n ? "true" : "false"),
    );
}
function w(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = (0, u.W5)(e.status, t, n, r),
        a = (r ? e.size - (i.width / 2 + e.status / 2) : e.size - i.width) - e.offset;
    return v(y({}, i), {
        x: a,
        y: e.size - i.height - e.offset,
    });
}
function D(e, t, n) {
    let { size: r, status: i, stroke: a, offset: o } = e,
        s = n ? i * m.D6 : i,
        l = (s - i) / 2,
        c = t ? i * m.EW : i;
    return {
        avatarCutoutX: r - s + l - a - o,
        avatarCutoutY: r - c - a - o,
        avatarCutoutWidth: s + 2 * a,
        avatarCutoutHeight: c + 2 * a,
        avatarCutoutRadius: t ? (c + 2 * a) * m.ZC : (i + 2 * a) / 2,
    };
}
function x(e, t, n, i) {
    let a = w(n, i, t, !1),
        o = (0, u.lm)(i, e);
    if (!t) {
        let t = a.height / 2 + n.stroke,
            i = a.x + n.status / 2;
        return (0, r.jsx)("circle", {
            style: { opacity: o },
            fill: e,
            r: t,
            cx: i,
            cy: i,
        });
    }
    let s = a.height + 2 * n.stroke,
        l = a.width + 2 * n.stroke,
        c = a.x - n.stroke,
        d = a.y - n.stroke;
    return (0, r.jsx)("rect", {
        fill: e,
        height: s,
        width: l,
        style: { opacity: o },
        x: c,
        y: d,
        rx: n.stroke,
    });
}
function L(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        a = n && !r && t === p.Skl.ONLINE,
        o = (0, m.UC)(i);
    return y(
        {},
        D(o, a, r),
        (0, u.Dk)({
            status: t,
            size: o.status,
            isMobile: a,
            isTyping: r,
            topOffset: 2,
            leftOffset: 6,
        }),
    );
}
function j(e) {
    let {
            children: t,
            size: n,
            onClick: i,
            onMouseDown: a,
            onKeyDown: s,
            onContextMenu: c,
            onMouseEnter: u,
            onMouseLeave: d,
            className: f,
            tabIndex: _,
            ariaLabel: p,
            ariaHidden: g,
            status: b,
            isMobile: y = !1,
            isTyping: O = !1,
            avatarDecoration: v,
            typingOffset: I,
            specs: T,
        } = e,
        S = {
            width: (0, m.px)(n),
            height: (0, m.px)(n),
        },
        A = null == p || g ? void 0 : N(p, b, y),
        C = T.size * h.hs,
        P = R(b, n, y, O),
        w =
            null != v &&
            (0, r.jsx)("svg", {
                width: C + I,
                height: C,
                viewBox: "0 0 ".concat(C + I, " ").concat(C),
                className: E.avatarDecoration,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: C,
                    height: C,
                    mask: null != P ? "url(#".concat(P, ")") : void 0,
                    children: (0, r.jsx)("div", {
                        className: E.avatarStack,
                        children: (0, r.jsx)("img", {
                            className: E.avatar,
                            src: v,
                            alt: " ",
                            "aria-hidden": !0,
                        }),
                    }),
                }),
            });
    return null != i || null != a
        ? (0, r.jsxs)(l.P3F, {
              className: o()(E.wrapper, E.pointer, f),
              style: S,
              onClick: i,
              tabIndex: _,
              onContextMenu: c,
              onMouseDown: a,
              onKeyDown: s,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              "aria-label": A,
              "aria-hidden": g,
              children: [t, w],
          })
        : (0, r.jsxs)("div", {
              className: o()(E.wrapper, f),
              style: S,
              onContextMenu: null != c ? c : void 0,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              role: "img",
              "aria-label": A,
              "aria-hidden": g,
              children: [t, w],
          });
}
let M = i.forwardRef((e, t) => {
    let { src: n, isSpeaking: i, className: a } = e;
    return (0, r.jsxs)(
        "div",
        {
            ref: t,
            className: o()(E.avatarStack, a),
            children: [
                (0, r.jsx)("img", {
                    src: null != n ? n : void 0,
                    alt: " ",
                    className: E.avatar,
                    "aria-hidden": !0,
                }),
                i && (0, r.jsx)("div", { className: E.avatarSpeaking }),
            ],
        },
        n,
    );
});
function k(e) {
    let {
            src: t,
            status: n,
            size: i,
            statusColor: a,
            isMobile: s = !1,
            isTyping: l = !1,
            typingIndicatorRef: f,
            avatarContentRef: h,
            isSpeaking: g = !1,
            statusTooltip: b = !1,
            statusTooltipDelay: O,
            statusBackdropColor: I,
            "aria-hidden": T = !1,
            "aria-label": S,
            imageClassName: A,
            ref: C,
        } = e,
        N = n !== p.Skl.UNKNOWN ? n : null,
        R = (0, m.UC)(i),
        D = null != N ? Math.ceil((R.status * m.D6 - R.status) / 2) : 0,
        L = R.size + D,
        k = (0, u.vj)(N, a);
    return (0, r.jsx)(
        j,
        v(y({}, e), {
            ariaLabel: S,
            ariaHidden: T,
            status: N,
            specs: R,
            typingOffset: D,
            children: (0, r.jsxs)("svg", {
                ref: C,
                width: L,
                height: L,
                viewBox: "0 0 ".concat(L, " ").concat(L),
                className: o()(E.mask, E.svg),
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: R.size,
                        height: R.size,
                        mask: "url(#".concat(P(N, i, s, l), ")"),
                        children: (0, r.jsx)(M, {
                            ref: h,
                            src: t,
                            isSpeaking: g,
                            className: A,
                        }),
                    }),
                    null != N && null != I ? x(I, s, R, N) : null,
                    null != N
                        ? (0, r.jsx)(d.u, {
                              text: b ? (0, _.u5)(N) : null,
                              "aria-label": !1,
                              position: "top",
                              spacing: 5 + 1.5 * R.stroke,
                              delay: O,
                              children: (e) =>
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(
                                              "rect",
                                              v(y({}, e, w(R, N, s, l)), {
                                                  fill: k,
                                                  mask: "url(#".concat((0, u.rs)(N, s, l), ")"),
                                                  className: E.pointerEvents,
                                              }),
                                          ),
                                          l
                                              ? (0, r.jsx)(c.b, {
                                                    ref: f,
                                                    dotRadius: R.status / 4,
                                                    x: R.size - 1.375 * R.status - R.offset,
                                                    y: R.size - R.status / 1.333 - R.offset,
                                                })
                                              : null,
                                      ],
                                  }),
                          })
                        : null,
                ],
            }),
        }),
    );
}
function U(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
}
function G(e, t, n) {
    let r = e.status * t,
        i = null != n ? (r * m.D6 - r) / 2 : 0,
        a = (e.status - r) / 2,
        o = e.size - r - i - e.offset - a,
        s = e.size - r * m.EW - e.offset - a,
        l = Math.round((o / t) * 100) / 100,
        c = Math.round((s / t) * 100) / 100;
    return "translate(".concat(l, ", ").concat(c, ")");
}
function B(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: a,
            isMobile: f = !1,
            isTyping: p = !1,
            typingIndicatorRef: h,
            isSpeaking: g = !1,
            size: b,
            src: O,
            status: T,
            statusColor: N,
            statusTooltip: R = !1,
            statusTooltipDelay: P,
            statusBackdropColor: w,
            "aria-hidden": D = !1,
            "aria-label": k,
            imageClassName: B,
            pulseStatusIcon: Z,
        } = e,
        F = (0, u.vj)(T, N),
        V = i.useId(),
        H = i.useId(),
        [Y] = i.useState(() =>
            y(
                { fill: a },
                L({
                    size: b,
                    status: n,
                    isMobile: t,
                    isTyping: !1,
                }),
            ),
        ),
        W = i.useMemo(
            () =>
                y(
                    { fill: F },
                    L({
                        size: b,
                        status: T,
                        isMobile: f,
                        isTyping: p,
                    }),
                ),
            [F, b, T, f, p],
        ),
        K = (0, l.q_F)(
            {
                config: S,
                from: Y,
                to: W,
            },
            A() ? "animate-always" : "animate-never",
        ),
        {
            avatarCutoutX: z,
            avatarCutoutY: q,
            avatarCutoutWidth: X,
            avatarCutoutHeight: Q,
            avatarCutoutRadius: J,
            fill: $,
        } = K,
        ee = I(K, [
            "avatarCutoutX",
            "avatarCutoutY",
            "avatarCutoutWidth",
            "avatarCutoutHeight",
            "avatarCutoutRadius",
            "fill",
        ]),
        et = (0, m.px)(b),
        en = (0, m.UC)(b),
        er = en.status * m.D6,
        ei = en.status * m.EW,
        ea = null != T ? (en.status * m.D6 - en.status) / 2 : 0,
        eo = en.size + Math.ceil(ea),
        [es, el, ec] = (0, l.q_F)(
            {
                config: {
                    tension: 450,
                    friction: 20,
                    clamp: !0,
                },
                from: { scale: 1 },
                to: Z ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            A() ? "animate-always" : "animate-never",
            [Z, T],
        );
    return (0, r.jsx)(
        j,
        v(y({}, e), {
            ariaLabel: k,
            ariaHidden: D,
            typingOffset: ea,
            specs: en,
            children: (0, r.jsxs)("svg", {
                width: eo,
                height: eo,
                viewBox: "0 0 ".concat(eo, " ").concat(eo),
                className: o()(E.mask, E.svg),
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: V,
                        width: et,
                        height: et,
                        children: [
                            (0, r.jsx)("circle", {
                                cx: et / 2,
                                cy: et / 2,
                                r: et / 2,
                                fill: "white",
                            }),
                            (0, r.jsx)(s.animated.rect, {
                                color: "black",
                                x: z,
                                y: q,
                                width: X,
                                height: Q,
                                rx: J,
                                ry: J,
                            }),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        className: E.__invalid_foreignObject,
                        x: 0,
                        y: 0,
                        width: et,
                        height: et,
                        mask: "url(#".concat(V, ")"),
                        children: (0, r.jsx)(M, {
                            src: O,
                            isSpeaking: g,
                            className: B,
                        }),
                    }),
                    null != w && x(w, f, en, T),
                    (0, r.jsx)(d.u, {
                        text: R ? (0, _.u5)(T) : null,
                        "aria-label": !1,
                        position: "top",
                        spacing: U(en.status, en.stroke, f, p),
                        delay: P,
                        children: (e) =>
                            (0, r.jsxs)(s.animated.g, {
                                transform: es.scale.to((e) => "scale(".concat(e, ") ").concat(G(en, e, T))),
                                children: [
                                    (0, r.jsxs)("svg", {
                                        width: er,
                                        height: ei,
                                        viewBox: "0 0 ".concat(er, " ").concat(ei),
                                        className: R ? E.cursorDefault : void 0,
                                        children: [
                                            (0, u.vP)(ee, en.status, H),
                                            (0, r.jsx)(s.animated.rect, {
                                                fill: $,
                                                width: er,
                                                height: ei,
                                                mask: "url(#".concat(H, ")"),
                                            }),
                                            (0, r.jsx)(c.b, {
                                                ref: h,
                                                dotRadius: en.status / 4,
                                                x: 0.15 * er,
                                                y: 0.5 * ei,
                                                hide: !p,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(
                                        C,
                                        y(
                                            {
                                                size: b,
                                                isMobile: f,
                                                isTyping: p,
                                                className: E.pointerEvents,
                                            },
                                            e,
                                        ),
                                    ),
                                ],
                            }),
                    }),
                ],
            }),
        }),
    );
}
function Z(e, t, n, r, i) {
    return null != n && null != t && (!!e || t !== n || (t === p.Skl.ONLINE && r !== i));
}
M.displayName = "AvatarImg";
let F = i.memo(function (e) {
    var { statusColor: t, status: n } = e,
        a = I(e, ["statusColor", "status"]);
    let { isMobile: o = !1, isTyping: s = !1 } = a,
        l = i.useRef(n),
        c = i.useRef(o),
        d = (0, u.vj)(n, t),
        f = i.useRef(d),
        _ = i.useRef(!1),
        p = _.current || Z(s, n, l.current, o, c.current);
    return (
        i.useLayoutEffect(() => {
            (_.current = p), (l.current = n), (c.current = o), (f.current = d);
        }, [n, o, d, p]),
        null != n && null != l.current && p
            ? (0, r.jsx)(
                  B,
                  v(y({}, a), {
                      status: n,
                      statusColor: d,
                      fromStatus: l.current,
                      fromIsMobile: c.current,
                      fromColor: f.current,
                  }),
              )
            : (0, r.jsx)(
                  k,
                  v(y({}, a), {
                      status: n,
                      statusColor: d,
                  }),
              )
    );
});
