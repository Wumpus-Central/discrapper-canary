n.d(t, {
    Vq: () => L,
    Xo: () => q,
    qE: () => H,
    qe: () => V,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(137317),
    l = n(722770),
    c = n(793030),
    u = n(438784),
    d = n(696826),
    f = n(981729),
    _ = n(454399),
    p = n(686546),
    h = n(51144),
    m = n(981631),
    g = n(419061),
    E = n(268685),
    b = n(388032),
    y = n(536537);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = {
    tension: 1200,
    friction: 70,
};
function N() {
    return document.hasFocus();
}
function R(e) {
    var { size: t, isMobile: n, isTyping: i } = e,
        a = S(e, ["size", "isMobile", "isTyping"]);
    let o = (0, E.UC)(t),
        s = o.status * (n && !i ? E.EW : 1),
        l = o.status * (i ? E.D6 : 1),
        c = i ? (o.status * E.D6 - o.status) / 2 : 0,
        u = o.size - o.status - c - o.offset,
        d = o.size - s - o.offset;
    return (0, r.jsx)(
        "rect",
        v(
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
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t
        ? b.intl.formatToPlainString(b.t["/6mw19"], {
              label: e,
              status: (0, h.u5)(t, n),
          })
        : e;
}
function w(e, t, n, r) {
    if (null == e) return null;
    if (r)
        switch (t) {
            case E.EF.SIZE_16:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_16;
            case E.EF.SIZE_20:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_20;
            case E.EF.SIZE_24:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_24;
            case E.EF.SIZE_32:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_32;
            case E.EF.SIZE_40:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_40;
            case E.EF.SIZE_44:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_44;
            case E.EF.SIZE_48:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_48;
            case E.EF.SIZE_56:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_56;
            case E.EF.SIZE_80:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_80;
            case E.EF.SIZE_96:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_96;
            case E.EF.SIZE_120:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_120;
        }
    if (n)
        switch (t) {
            case E.EF.SIZE_16:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
            case E.EF.SIZE_20:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
            case E.EF.SIZE_24:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
            case E.EF.SIZE_32:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
            case E.EF.SIZE_40:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
            case E.EF.SIZE_44:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_44;
            case E.EF.SIZE_48:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_48;
            case E.EF.SIZE_56:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
            case E.EF.SIZE_80:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
            case E.EF.SIZE_96:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_96;
            case E.EF.SIZE_120:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_120;
        }
    switch (t) {
        case E.EF.SIZE_16:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_16;
        case E.EF.SIZE_20:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_20;
        case E.EF.SIZE_24:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_24;
        case E.EF.SIZE_32:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_32;
        case E.EF.SIZE_40:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_40;
        case E.EF.SIZE_44:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_44;
        case E.EF.SIZE_48:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_48;
        case E.EF.SIZE_56:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_56;
        case E.EF.SIZE_80:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_80;
        case E.EF.SIZE_96:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_96;
        case E.EF.SIZE_120:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_120;
    }
    return null;
}
function D(e, t, n, r) {
    if (null == e) return p.QS.AVATAR_DEFAULT;
    if (r)
        switch (t) {
            case E.EF.SIZE_16:
                return p.QS.AVATAR_STATUS_TYPING_16;
            case E.EF.SIZE_20:
                return p.QS.AVATAR_STATUS_TYPING_20;
            case E.EF.SIZE_24:
                return p.QS.AVATAR_STATUS_TYPING_24;
            case E.EF.SIZE_32:
                return p.QS.AVATAR_STATUS_TYPING_32;
            case E.EF.SIZE_40:
                return p.QS.AVATAR_STATUS_TYPING_40;
            case E.EF.SIZE_44:
                return p.QS.AVATAR_STATUS_TYPING_44;
            case E.EF.SIZE_48:
                return p.QS.AVATAR_STATUS_TYPING_48;
            case E.EF.SIZE_56:
                return p.QS.AVATAR_STATUS_TYPING_56;
            case E.EF.SIZE_80:
                return p.QS.AVATAR_STATUS_TYPING_80;
            case E.EF.SIZE_96:
                return p.QS.AVATAR_STATUS_TYPING_96;
            case E.EF.SIZE_120:
                return p.QS.AVATAR_STATUS_TYPING_120;
        }
    if (e === m.Skl.ONLINE && n)
        switch (t) {
            case E.EF.SIZE_16:
                return p.QS.AVATAR_STATUS_MOBILE_16;
            case E.EF.SIZE_20:
                return p.QS.AVATAR_STATUS_MOBILE_20;
            case E.EF.SIZE_24:
                return p.QS.AVATAR_STATUS_MOBILE_24;
            case E.EF.SIZE_32:
                return p.QS.AVATAR_STATUS_MOBILE_32;
            case E.EF.SIZE_40:
                return p.QS.AVATAR_STATUS_MOBILE_40;
            case E.EF.SIZE_44:
                return p.QS.AVATAR_STATUS_MOBILE_44;
            case E.EF.SIZE_48:
                return p.QS.AVATAR_STATUS_MOBILE_48;
            case E.EF.SIZE_56:
                return p.QS.AVATAR_STATUS_MOBILE_56;
            case E.EF.SIZE_80:
                return p.QS.AVATAR_STATUS_MOBILE_80;
            case E.EF.SIZE_96:
                return p.QS.AVATAR_STATUS_MOBILE_96;
            case E.EF.SIZE_120:
                return p.QS.AVATAR_STATUS_MOBILE_120;
        }
    switch (t) {
        case E.EF.SIZE_16:
            return p.QS.AVATAR_STATUS_ROUND_16;
        case E.EF.SIZE_20:
            return p.QS.AVATAR_STATUS_ROUND_20;
        case E.EF.SIZE_24:
            return p.QS.AVATAR_STATUS_ROUND_24;
        case E.EF.SIZE_32:
            return p.QS.AVATAR_STATUS_ROUND_32;
        case E.EF.SIZE_40:
            return p.QS.AVATAR_STATUS_ROUND_40;
        case E.EF.SIZE_44:
            return p.QS.AVATAR_STATUS_ROUND_44;
        case E.EF.SIZE_48:
            return p.QS.AVATAR_STATUS_ROUND_48;
        case E.EF.SIZE_56:
            return p.QS.AVATAR_STATUS_ROUND_56;
        case E.EF.SIZE_80:
            return p.QS.AVATAR_STATUS_ROUND_80;
        case E.EF.SIZE_96:
            return p.QS.AVATAR_STATUS_ROUND_96;
        case E.EF.SIZE_120:
            return p.QS.AVATAR_STATUS_ROUND_120;
    }
    throw Error(
        "getMaskId(): Unsupported type, size: "
            .concat(t, ", status: ")
            .concat(e, ", isMobile: ")
            .concat(n ? "true" : "false"),
    );
}
function L(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = (0, d.W5)(e.status, t, n, r),
        a = (r ? e.size - (i.width / 2 + e.status / 2) : e.size - i.width) - e.offset;
    return T(v({}, i), {
        x: a,
        y: e.size - i.height - e.offset,
    });
}
function x(e, t, n) {
    let { size: r, status: i, stroke: a, offset: o } = e,
        s = n ? i * E.D6 : i,
        l = (s - i) / 2,
        c = t ? i * E.EW : i;
    return {
        avatarCutoutX: r - s + l - a - o,
        avatarCutoutY: r - c - a - o,
        avatarCutoutWidth: s + 2 * a,
        avatarCutoutHeight: c + 2 * a,
        avatarCutoutRadius: t ? (c + 2 * a) * E.ZC : (i + 2 * a) / 2,
    };
}
function M(e, t, n, i) {
    let a = L(n, i, t, !1),
        o = (0, d.lm)(i, e);
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
        u = a.y - n.stroke;
    return (0, r.jsx)("rect", {
        fill: e,
        height: s,
        width: l,
        style: { opacity: o },
        x: c,
        y: u,
        rx: n.stroke,
    });
}
let j = {
    FireIcon:
        "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
};
function k(e, t, n, i) {
    let a = j[i];
    if (null != a) {
        let i = n / 20;
        return (0, r.jsx)("g", {
            transform: "translate("
                .concat(e - 1, ", ")
                .concat(t - 1, ") scale(")
                .concat(i, ")"),
            children: (0, r.jsx)("path", {
                d: a,
                fill: "none",
                stroke: "black",
                strokeWidth: "10",
                strokeLinejoin: "round",
                strokeLinecap: "round",
            }),
        });
    }
    let o = n / 2,
        s = e + o,
        l = t + o;
    return (0, r.jsx)("circle", {
        cx: s,
        cy: l,
        r: 1.5 * o,
        fill: "black",
    });
}
function U(e, t, n, i) {
    let { status: a, isMobile: o, isTyping: s } = n,
        l = t.size - t.status - t.offset,
        c = t.offset,
        u = x(t, o, s);
    return (0, r.jsxs)("mask", {
        id: e,
        width: t.size,
        height: t.size,
        children: [
            (0, r.jsx)("circle", {
                cx: t.size / 2,
                cy: t.size / 2,
                r: t.size / 2,
                fill: "white",
            }),
            null != a &&
                (0, r.jsx)("rect", {
                    x: u.avatarCutoutX,
                    y: u.avatarCutoutY,
                    width: u.avatarCutoutWidth,
                    height: u.avatarCutoutHeight,
                    rx: u.avatarCutoutRadius,
                    ry: u.avatarCutoutRadius,
                    fill: "black",
                }),
            null != i && k(l, c, t.status, i),
        ],
    });
}
function G(e, t) {
    let n = e.size - e.status - e.offset,
        i = e.offset;
    return (0, r.jsx)("foreignObject", {
        x: n,
        y: i,
        width: e.status,
        height: e.status,
        children: (0, r.jsx)("div", {
            className: y.cutoutIcon,
            children: (0, r.jsx)(t, {
                size: "custom",
                width: e.status,
                height: e.status,
                color: l.Z.NEUTRAL_29,
            }),
        }),
    });
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        { avatarTooltipTitle: a, avatarTooltipText: o } = i,
        s = e.size - e.status - e.offset - e.stroke,
        l = x(e, t, n),
        c = s,
        u = 0,
        d = l.avatarCutoutWidth,
        f = e.size - (l.avatarCutoutHeight - e.stroke);
    return (0, r.jsx)(_.i, {
        title: a,
        body: null != o ? o : "",
        align: "center",
        position: "top",
        spacing: 12,
        delay: 0,
        children: (0, r.jsxs)("g", {
            children: [
                (0, r.jsx)("rect", {
                    x: 0,
                    y: 0,
                    width: s,
                    height: e.size,
                    fill: "transparent",
                    className: y.pointerEvents,
                }),
                (0, r.jsx)("rect", {
                    x: c,
                    y: u,
                    width: d,
                    height: f,
                    fill: "transparent",
                    className: y.pointerEvents,
                }),
            ],
        }),
    });
}
function Z(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        a = n && !r && t === m.Skl.ONLINE,
        o = (0, E.UC)(i);
    return v(
        {},
        x(o, a, r),
        (0, d.Dk)({
            status: t,
            size: o.status,
            isMobile: a,
            isTyping: r,
            topOffset: 2,
            leftOffset: 6,
        }),
    );
}
function F(e) {
    let {
            children: t,
            size: n,
            onClick: i,
            onMouseDown: a,
            onKeyDown: s,
            onContextMenu: l,
            onMouseEnter: u,
            onMouseLeave: d,
            className: f,
            tabIndex: _,
            ariaLabel: p,
            ariaHidden: h,
            status: m,
            isMobile: b = !1,
            isTyping: O = !1,
            avatarDecoration: v,
            typingOffset: I,
            specs: T,
        } = e,
        S = {
            width: (0, E.px)(n),
            height: (0, E.px)(n),
        },
        A = null == p || h ? void 0 : P(p, m, b),
        C = T.size * g.hs,
        N = w(m, n, b, O),
        R =
            null != v &&
            (0, r.jsx)("svg", {
                width: C + I,
                height: C,
                viewBox: "0 0 ".concat(C + I, " ").concat(C),
                className: y.avatarDecoration,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: C,
                    height: C,
                    mask: null != N ? "url(#".concat(N, ")") : void 0,
                    children: (0, r.jsx)("div", {
                        className: y.avatarStack,
                        children: (0, r.jsx)("img", {
                            className: y.avatar,
                            src: v,
                            alt: " ",
                            "aria-hidden": !0,
                        }),
                    }),
                }),
            });
    return null != i || null != a
        ? (0, r.jsxs)(c.P3F, {
              className: o()(y.wrapper, y.pointer, f),
              style: S,
              onClick: i,
              tabIndex: _,
              onContextMenu: l,
              onMouseDown: a,
              onKeyDown: s,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              "aria-label": A,
              "aria-hidden": h,
              children: [t, R],
          })
        : (0, r.jsxs)("div", {
              className: o()(y.wrapper, f),
              style: S,
              onContextMenu: null != l ? l : void 0,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              role: "img",
              "aria-label": A,
              "aria-hidden": h,
              children: [t, R],
          });
}
let V = i.forwardRef((e, t) => {
    let { src: n, isSpeaking: i, className: a } = e;
    return (0, r.jsxs)(
        "div",
        {
            ref: t,
            className: o()(y.avatarStack, a),
            children: [
                (0, r.jsx)("img", {
                    src: null != n ? n : void 0,
                    alt: " ",
                    className: y.avatar,
                    "aria-hidden": !0,
                }),
                i && (0, r.jsx)("div", { className: y.avatarSpeaking }),
            ],
        },
        n,
    );
});
function H(e) {
    let {
            src: t,
            status: n,
            size: a,
            statusColor: s,
            isMobile: l = !1,
            isTyping: c = !1,
            typingIndicatorRef: _,
            avatarContentRef: p,
            isSpeaking: g = !1,
            statusTooltip: b = !1,
            statusTooltipDelay: O,
            statusBackdropColor: I,
            "aria-hidden": S = !1,
            "aria-label": A,
            imageClassName: C,
            ref: N,
            CutoutIcon: R,
            cutoutIconName: P,
            avatarTooltipText: w,
            avatarTooltipTitle: x,
        } = e,
        j = n !== m.Skl.UNKNOWN ? n : null,
        k = (0, E.UC)(a),
        Z = null != j ? Math.ceil((k.status * E.D6 - k.status) / 2) : 0,
        H = k.size + Z,
        Y = (0, d.vj)(j, s),
        W = i.useId();
    return (0, r.jsx)(
        F,
        T(v({}, e), {
            ariaLabel: A,
            ariaHidden: S,
            status: j,
            specs: k,
            typingOffset: Z,
            children: (0, r.jsxs)("svg", {
                ref: N,
                width: H,
                height: H,
                viewBox: "0 0 ".concat(H, " ").concat(H),
                className: o()(y.mask, y.svg),
                "aria-hidden": !0,
                children: [
                    null != P &&
                        U(
                            W,
                            k,
                            {
                                status: j,
                                isMobile: l,
                                isTyping: c,
                            },
                            P,
                        ),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: k.size,
                        height: k.size,
                        mask: null != P ? "url(#".concat(W, ")") : "url(#".concat(D(j, a, l, c), ")"),
                        children: (0, r.jsx)(V, {
                            ref: p,
                            src: t,
                            isSpeaking: g,
                            className: C,
                        }),
                    }),
                    null != j && null != I ? M(I, l, k, j) : null,
                    null != j
                        ? (0, r.jsx)(f.u, {
                              text: b ? (0, h.u5)(j) : null,
                              "aria-label": !1,
                              position: "top",
                              spacing: 5 + 1.5 * k.stroke,
                              delay: O,
                              children: (e) =>
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(
                                              "rect",
                                              T(v({}, e, L(k, j, l, c)), {
                                                  fill: Y,
                                                  mask: "url(#".concat((0, d.rs)(j, l, c), ")"),
                                                  className: y.pointerEvents,
                                              }),
                                          ),
                                          c
                                              ? (0, r.jsx)(u.b, {
                                                    ref: _,
                                                    dotRadius: k.status / 4,
                                                    x: k.size - 1.375 * k.status - k.offset,
                                                    y: k.size - k.status / 1.333 - k.offset,
                                                })
                                              : null,
                                      ],
                                  }),
                          })
                        : null,
                    null != R && G(k, R),
                    null != x &&
                        B(k, l, c, {
                            avatarTooltipTitle: x,
                            avatarTooltipText: w,
                        }),
                ],
            }),
        }),
    );
}
function Y(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
}
function W(e, t, n) {
    let r = e.status * t,
        i = null != n ? (r * E.D6 - r) / 2 : 0,
        a = (e.status - r) / 2,
        o = e.size - r - i - e.offset - a,
        s = e.size - r * E.EW - e.offset - a,
        l = Math.round((o / t) * 100) / 100,
        c = Math.round((s / t) * 100) / 100;
    return "translate(".concat(l, ", ").concat(c, ")");
}
function K(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: a,
            isMobile: l = !1,
            isTyping: _ = !1,
            typingIndicatorRef: p,
            isSpeaking: m = !1,
            size: g,
            src: b,
            status: O,
            statusColor: I,
            statusTooltip: A = !1,
            statusTooltipDelay: P,
            statusBackdropColor: w,
            "aria-hidden": D = !1,
            "aria-label": L,
            imageClassName: x,
            pulseStatusIcon: j,
            CutoutIcon: U,
            cutoutIconName: H,
            avatarTooltipText: K,
            avatarTooltipTitle: z,
        } = e,
        q = (0, d.vj)(O, I),
        X = i.useId(),
        Q = i.useId(),
        [J] = i.useState(() =>
            v(
                { fill: a },
                Z({
                    size: g,
                    status: n,
                    isMobile: t,
                    isTyping: !1,
                }),
            ),
        ),
        $ = i.useMemo(
            () =>
                v(
                    { fill: q },
                    Z({
                        size: g,
                        status: O,
                        isMobile: l,
                        isTyping: _,
                    }),
                ),
            [q, g, O, l, _],
        ),
        ee = (0, c.q_F)(
            {
                config: C,
                from: J,
                to: $,
            },
            N() ? "animate-always" : "animate-never",
        ),
        {
            avatarCutoutX: et,
            avatarCutoutY: en,
            avatarCutoutWidth: er,
            avatarCutoutHeight: ei,
            avatarCutoutRadius: ea,
            fill: eo,
        } = ee,
        es = S(ee, [
            "avatarCutoutX",
            "avatarCutoutY",
            "avatarCutoutWidth",
            "avatarCutoutHeight",
            "avatarCutoutRadius",
            "fill",
        ]),
        el = (0, E.px)(g),
        ec = (0, E.UC)(g),
        eu = ec.status * E.D6,
        ed = ec.status * E.EW,
        ef = null != O ? (ec.status * E.D6 - ec.status) / 2 : 0,
        e_ = ec.size + Math.ceil(ef),
        [ep, eh, em] = (0, c.q_F)(
            {
                config: {
                    tension: 450,
                    friction: 20,
                    clamp: !0,
                },
                from: { scale: 1 },
                to: j ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            N() ? "animate-always" : "animate-never",
            [j, O],
        );
    return (0, r.jsx)(
        F,
        T(v({}, e), {
            ariaLabel: L,
            ariaHidden: D,
            typingOffset: ef,
            specs: ec,
            children: (0, r.jsxs)("svg", {
                width: e_,
                height: e_,
                viewBox: "0 0 ".concat(e_, " ").concat(e_),
                className: o()(y.mask, y.svg),
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: X,
                        width: el,
                        height: el,
                        children: [
                            (0, r.jsx)("circle", {
                                cx: el / 2,
                                cy: el / 2,
                                r: el / 2,
                                fill: "white",
                            }),
                            (0, r.jsx)(s.animated.rect, {
                                color: "black",
                                x: et,
                                y: en,
                                width: er,
                                height: ei,
                                rx: ea,
                                ry: ea,
                            }),
                            null != H && k(ec.size - ec.status - ec.offset, ec.offset, ec.status, H),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        className: y.__invalid_foreignObject,
                        x: 0,
                        y: 0,
                        width: el,
                        height: el,
                        mask: "url(#".concat(X, ")"),
                        children: (0, r.jsx)(V, {
                            src: b,
                            isSpeaking: m,
                            className: x,
                        }),
                    }),
                    null != w && M(w, l, ec, O),
                    (0, r.jsx)(f.u, {
                        text: A ? (0, h.u5)(O) : null,
                        "aria-label": !1,
                        position: "top",
                        spacing: Y(ec.status, ec.stroke, l, _),
                        delay: P,
                        children: (e) =>
                            (0, r.jsxs)(s.animated.g, {
                                transform: ep.scale.to((e) => "scale(".concat(e, ") ").concat(W(ec, e, O))),
                                children: [
                                    (0, r.jsxs)("svg", {
                                        width: eu,
                                        height: ed,
                                        viewBox: "0 0 ".concat(eu, " ").concat(ed),
                                        className: A ? y.cursorDefault : void 0,
                                        children: [
                                            (0, d.vP)(es, ec.status, Q),
                                            (0, r.jsx)(s.animated.rect, {
                                                fill: eo,
                                                width: eu,
                                                height: ed,
                                                mask: "url(#".concat(Q, ")"),
                                            }),
                                            (0, r.jsx)(u.b, {
                                                ref: p,
                                                dotRadius: ec.status / 4,
                                                x: 0.15 * eu,
                                                y: 0.5 * ed,
                                                hide: !_,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(
                                        R,
                                        v(
                                            {
                                                size: g,
                                                isMobile: l,
                                                isTyping: _,
                                                className: y.pointerEvents,
                                            },
                                            e,
                                        ),
                                    ),
                                ],
                            }),
                    }),
                    null != U && G(ec, U),
                    null != z &&
                        B(ec, l, _, {
                            avatarTooltipTitle: z,
                            avatarTooltipText: K,
                        }),
                ],
            }),
        }),
    );
}
function z(e, t, n, r, i) {
    return null != n && null != t && (!!e || t !== n || (t === m.Skl.ONLINE && r !== i));
}
V.displayName = "AvatarImg";
let q = i.memo(function (e) {
    var { statusColor: t, status: n } = e,
        a = S(e, ["statusColor", "status"]);
    let { isMobile: o = !1, isTyping: s = !1 } = a,
        l = i.useRef(n),
        c = i.useRef(o),
        u = (0, d.vj)(n, t),
        f = i.useRef(u),
        _ = i.useRef(!1),
        p = _.current || z(s, n, l.current, o, c.current);
    return (
        i.useLayoutEffect(() => {
            (_.current = p), (l.current = n), (c.current = o), (f.current = u);
        }, [n, o, u, p]),
        null != n && null != l.current && p
            ? (0, r.jsx)(
                  K,
                  T(v({}, a), {
                      status: n,
                      statusColor: u,
                      fromStatus: l.current,
                      fromIsMobile: c.current,
                      fromColor: f.current,
                  }),
              )
            : (0, r.jsx)(
                  H,
                  T(v({}, a), {
                      status: n,
                      statusColor: u,
                  }),
              )
    );
});
