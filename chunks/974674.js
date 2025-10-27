n.d(t, {
    Vq: () => w,
    Xo: () => z,
    qE: () => V,
    qe: () => F,
}),
    n(415506),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(13941),
    l = n(793030),
    c = n(438784),
    u = n(696826),
    d = n(506802),
    f = n(681715),
    _ = n(686546),
    p = n(51144),
    h = n(981631),
    m = n(419061),
    g = n(268685),
    E = n(388032),
    b = n(536537);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = {
    tension: 1200,
    friction: 70,
};
function C() {
    return document.hasFocus();
}
function N(e) {
    var { size: t, isMobile: n, isTyping: i } = e,
        a = T(e, ["size", "isMobile", "isTyping"]);
    let o = (0, g.UC)(t),
        s = o.status * (n && !i ? g.EW : 1),
        l = o.status * (i ? g.D6 : 1),
        c = i ? (o.status * g.D6 - o.status) / 2 : 0,
        u = o.size - o.status - c - o.offset,
        d = o.size - s - o.offset;
    return (0, r.jsx)(
        "rect",
        O(
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
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t
        ? E.intl.formatToPlainString(E.t["/6mw10"], {
              label: e,
              status: (0, p.u5)(t, n),
          })
        : e;
}
function P(e, t, n, r) {
    if (null == e) return null;
    if (r)
        switch (t) {
            case g.EF.SIZE_16:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_16;
            case g.EF.SIZE_20:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_20;
            case g.EF.SIZE_24:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_24;
            case g.EF.SIZE_32:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_32;
            case g.EF.SIZE_40:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_40;
            case g.EF.SIZE_44:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_44;
            case g.EF.SIZE_48:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_48;
            case g.EF.SIZE_56:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_56;
            case g.EF.SIZE_80:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_80;
            case g.EF.SIZE_96:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_96;
            case g.EF.SIZE_120:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_120;
        }
    if (n)
        switch (t) {
            case g.EF.SIZE_16:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
            case g.EF.SIZE_20:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
            case g.EF.SIZE_24:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
            case g.EF.SIZE_32:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
            case g.EF.SIZE_40:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
            case g.EF.SIZE_44:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_44;
            case g.EF.SIZE_48:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_48;
            case g.EF.SIZE_56:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
            case g.EF.SIZE_80:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
            case g.EF.SIZE_96:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_96;
            case g.EF.SIZE_120:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_120;
        }
    switch (t) {
        case g.EF.SIZE_16:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_16;
        case g.EF.SIZE_20:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_20;
        case g.EF.SIZE_24:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_24;
        case g.EF.SIZE_32:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_32;
        case g.EF.SIZE_40:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_40;
        case g.EF.SIZE_44:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_44;
        case g.EF.SIZE_48:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_48;
        case g.EF.SIZE_56:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_56;
        case g.EF.SIZE_80:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_80;
        case g.EF.SIZE_96:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_96;
        case g.EF.SIZE_120:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_120;
    }
    return null;
}
function D(e, t, n, r) {
    if (null == e) return _.QS.AVATAR_DEFAULT;
    if (r)
        switch (t) {
            case g.EF.SIZE_16:
                return _.QS.AVATAR_STATUS_TYPING_16;
            case g.EF.SIZE_20:
                return _.QS.AVATAR_STATUS_TYPING_20;
            case g.EF.SIZE_24:
                return _.QS.AVATAR_STATUS_TYPING_24;
            case g.EF.SIZE_32:
                return _.QS.AVATAR_STATUS_TYPING_32;
            case g.EF.SIZE_40:
                return _.QS.AVATAR_STATUS_TYPING_40;
            case g.EF.SIZE_44:
                return _.QS.AVATAR_STATUS_TYPING_44;
            case g.EF.SIZE_48:
                return _.QS.AVATAR_STATUS_TYPING_48;
            case g.EF.SIZE_56:
                return _.QS.AVATAR_STATUS_TYPING_56;
            case g.EF.SIZE_80:
                return _.QS.AVATAR_STATUS_TYPING_80;
            case g.EF.SIZE_96:
                return _.QS.AVATAR_STATUS_TYPING_96;
            case g.EF.SIZE_120:
                return _.QS.AVATAR_STATUS_TYPING_120;
        }
    if (e === h.Skl.ONLINE && n)
        switch (t) {
            case g.EF.SIZE_16:
                return _.QS.AVATAR_STATUS_MOBILE_16;
            case g.EF.SIZE_20:
                return _.QS.AVATAR_STATUS_MOBILE_20;
            case g.EF.SIZE_24:
                return _.QS.AVATAR_STATUS_MOBILE_24;
            case g.EF.SIZE_32:
                return _.QS.AVATAR_STATUS_MOBILE_32;
            case g.EF.SIZE_40:
                return _.QS.AVATAR_STATUS_MOBILE_40;
            case g.EF.SIZE_44:
                return _.QS.AVATAR_STATUS_MOBILE_44;
            case g.EF.SIZE_48:
                return _.QS.AVATAR_STATUS_MOBILE_48;
            case g.EF.SIZE_56:
                return _.QS.AVATAR_STATUS_MOBILE_56;
            case g.EF.SIZE_80:
                return _.QS.AVATAR_STATUS_MOBILE_80;
            case g.EF.SIZE_96:
                return _.QS.AVATAR_STATUS_MOBILE_96;
            case g.EF.SIZE_120:
                return _.QS.AVATAR_STATUS_MOBILE_120;
        }
    switch (t) {
        case g.EF.SIZE_16:
            return _.QS.AVATAR_STATUS_ROUND_16;
        case g.EF.SIZE_20:
            return _.QS.AVATAR_STATUS_ROUND_20;
        case g.EF.SIZE_24:
            return _.QS.AVATAR_STATUS_ROUND_24;
        case g.EF.SIZE_32:
            return _.QS.AVATAR_STATUS_ROUND_32;
        case g.EF.SIZE_40:
            return _.QS.AVATAR_STATUS_ROUND_40;
        case g.EF.SIZE_44:
            return _.QS.AVATAR_STATUS_ROUND_44;
        case g.EF.SIZE_48:
            return _.QS.AVATAR_STATUS_ROUND_48;
        case g.EF.SIZE_56:
            return _.QS.AVATAR_STATUS_ROUND_56;
        case g.EF.SIZE_80:
            return _.QS.AVATAR_STATUS_ROUND_80;
        case g.EF.SIZE_96:
            return _.QS.AVATAR_STATUS_ROUND_96;
        case g.EF.SIZE_120:
            return _.QS.AVATAR_STATUS_ROUND_120;
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
    return I(O({}, i), {
        x: a,
        y: e.size - i.height - e.offset,
    });
}
function L(e, t, n) {
    let { size: r, status: i, stroke: a, offset: o } = e,
        s = n ? i * g.D6 : i,
        l = (s - i) / 2,
        c = t ? i * g.EW : i;
    return {
        avatarCutoutX: r - s + l - a - o,
        avatarCutoutY: r - c - a - o,
        avatarCutoutWidth: s + 2 * a,
        avatarCutoutHeight: c + 2 * a,
        avatarCutoutRadius: t ? (c + 2 * a) * g.ZC : (i + 2 * a) / 2,
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
let M = {
    "\uD83D\uDD25":
        "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
};
function k(e, t, n, i, a) {
    let o = M[i];
    if (null != o) {
        let i = n / 20;
        return (0, r.jsx)("g", {
            transform: "translate("
                .concat(e - 1, ", ")
                .concat(t - 1, ") scale(")
                .concat(i, ")"),
            children: (0, r.jsx)("path", {
                d: o,
                fill: "black",
                stroke: "black",
                strokeWidth: "10",
                strokeLinejoin: "round",
                strokeLinecap: "round",
            }),
        });
    }
    let s = L(a, !1, !1);
    return (0, r.jsx)("rect", {
        x: s.avatarCutoutX,
        y: 0 - a.stroke,
        width: s.avatarCutoutWidth,
        height: s.avatarCutoutHeight,
        rx: s.avatarCutoutRadius - 1,
        ry: s.avatarCutoutRadius - 1,
        fill: "black",
    });
}
function j(e, t, n, i) {
    let { status: a, isMobile: o, isTyping: s } = n,
        l = t.size - t.status - t.offset,
        c = t.offset,
        u = L(t, o, s);
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
            null != i && k(l, c, t.status, i, t),
        ],
    });
}
function U(e, t) {
    let n = e.size - e.status - e.offset,
        i = e.offset;
    return (0, r.jsx)("foreignObject", {
        x: n,
        y: i,
        width: e.status,
        height: e.status,
        children: (0, r.jsx)("div", {
            className: b.cutoutIcon,
            children: (0, r.jsx)(t, {
                size: "custom",
                width: e.status,
                height: e.status,
                color: "currentColor",
            }),
        }),
    });
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        { avatarTooltipTitle: o, avatarTooltipText: s } = i,
        l = e.size - e.status - e.offset - e.stroke,
        c = L(e, t, n),
        u = l,
        d = 0,
        _ = c.avatarCutoutWidth,
        p = e.size - (c.avatarCutoutHeight - e.stroke),
        h = (0, r.jsxs)("g", {
            children: [
                (0, r.jsx)("rect", {
                    x: 0,
                    y: 0,
                    width: l,
                    height: e.size,
                    fill: "transparent",
                    className: b.pointerEvents,
                }),
                (0, r.jsx)("rect", {
                    x: u,
                    y: d,
                    width: _,
                    height: p,
                    fill: "transparent",
                    className: b.pointerEvents,
                }),
            ],
        });
    return null == s
        ? (0, r.jsx)(f.u, {
              text: o,
              align: "center",
              position: "top",
              spacing: 12,
              delay: 0,
              children: h,
          })
        : (0, r.jsx)(f.i_, {
              title: o,
              body: s,
              align: "center",
              position: "top",
              delay: 0,
              asset: (0, r.jsx)("span", {
                  role: "img",
                  "aria-label": s,
                  className: b.largeEmoji,
                  children: a,
              }),
              children: h,
          });
}
function B(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        a = n && !r && t === h.Skl.ONLINE,
        o = (0, g.UC)(i);
    return O(
        {},
        L(o, a, r),
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
function Z(e) {
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
            ariaHidden: h,
            status: E,
            isMobile: y = !1,
            isTyping: O = !1,
            avatarDecoration: v,
            typingOffset: I,
            specs: T,
        } = e,
        S = {
            width: (0, g.px)(n),
            height: (0, g.px)(n),
        },
        A = null == p || h ? void 0 : R(p, E, y),
        C = T.size * m.hs,
        N = P(E, n, y, O),
        D =
            null != v &&
            (0, r.jsx)("svg", {
                width: C + I,
                height: C,
                viewBox: "0 0 ".concat(C + I, " ").concat(C),
                className: b.avatarDecoration,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: C,
                    height: C,
                    mask: null != N ? "url(#".concat(N, ")") : void 0,
                    children: (0, r.jsx)("div", {
                        className: b.avatarStack,
                        children: (0, r.jsx)("img", {
                            className: b.avatar,
                            src: v,
                            alt: " ",
                            "aria-hidden": !0,
                        }),
                    }),
                }),
            });
    return null != i || null != a
        ? (0, r.jsxs)(l.P3F, {
              className: o()(b.wrapper, b.pointer, f),
              style: S,
              onClick: i,
              tabIndex: _,
              onContextMenu: c,
              onMouseDown: a,
              onKeyDown: s,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              "aria-label": A,
              "aria-hidden": h,
              children: [t, D],
          })
        : (0, r.jsxs)("div", {
              className: o()(b.wrapper, f),
              style: S,
              onContextMenu: null != c ? c : void 0,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              role: "img",
              "aria-label": A,
              "aria-hidden": h,
              children: [t, D],
          });
}
let F = i.forwardRef((e, t) => {
    let { src: n, isSpeaking: i, className: a } = e;
    return (0, r.jsxs)(
        "div",
        {
            ref: t,
            className: o()(b.avatarStack, a),
            children: [
                (0, r.jsx)("img", {
                    src: null != n ? n : void 0,
                    alt: " ",
                    className: b.avatar,
                    "aria-hidden": !0,
                }),
                i && (0, r.jsx)("div", { className: b.avatarSpeaking }),
            ],
        },
        n,
    );
});
function V(e) {
    let {
            src: t,
            status: n,
            size: a,
            statusColor: s,
            isMobile: l = !1,
            isTyping: f = !1,
            typingIndicatorRef: _,
            avatarContentRef: m,
            isSpeaking: E = !1,
            statusTooltip: y = !1,
            statusTooltipDelay: v,
            statusBackdropColor: T,
            "aria-hidden": S = !1,
            "aria-label": A,
            imageClassName: C,
            ref: N,
            CutoutIcon: R,
            avatarTooltipAsset: P,
            avatarTooltipText: L,
            avatarTooltipTitle: M,
        } = e,
        k = n !== h.Skl.UNKNOWN ? n : null,
        B = (0, g.UC)(a),
        V = null != k ? Math.ceil((B.status * g.D6 - B.status) / 2) : 0,
        H = B.size + V,
        Y = (0, u.vj)(k, s),
        W = i.useId();
    return (0, r.jsx)(
        Z,
        I(O({}, e), {
            ariaLabel: A,
            ariaHidden: S,
            status: k,
            specs: B,
            typingOffset: V,
            children: (0, r.jsxs)("svg", {
                ref: N,
                width: H,
                height: H,
                viewBox: "0 0 ".concat(H, " ").concat(H),
                className: o()(b.mask, b.svg),
                "aria-hidden": !0,
                children: [
                    null != P &&
                        j(
                            W,
                            B,
                            {
                                status: k,
                                isMobile: l,
                                isTyping: f,
                            },
                            P,
                        ),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: B.size,
                        height: B.size,
                        mask: null != P ? "url(#".concat(W, ")") : "url(#".concat(D(k, a, l, f), ")"),
                        children: (0, r.jsx)(F, {
                            ref: m,
                            src: t,
                            isSpeaking: E,
                            className: C,
                        }),
                    }),
                    null != k && null != T ? x(T, l, B, k) : null,
                    null != k
                        ? (0, r.jsx)(d.aM, {
                              "data-migration-pending": !0,
                              text: y ? (0, p.u5)(k) : null,
                              "aria-label": !1,
                              position: "top",
                              spacing: 5 + 1.5 * B.stroke,
                              delay: v,
                              children: (e) =>
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(
                                              "rect",
                                              I(O({}, e, w(B, k, l, f)), {
                                                  fill: Y,
                                                  mask: "url(#".concat((0, u.rs)(k, l, f), ")"),
                                                  className: b.pointerEvents,
                                              }),
                                          ),
                                          f
                                              ? (0, r.jsx)(c.b, {
                                                    ref: _,
                                                    dotRadius: B.status / 4,
                                                    x: B.size - 1.375 * B.status - B.offset,
                                                    y: B.size - B.status / 1.333 - B.offset,
                                                })
                                              : null,
                                      ],
                                  }),
                          })
                        : null,
                    null != R && U(B, R),
                    null != M &&
                        G(
                            B,
                            l,
                            f,
                            {
                                avatarTooltipTitle: M,
                                avatarTooltipText: L,
                            },
                            P,
                        ),
                ],
            }),
        }),
    );
}
function H(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
}
function Y(e, t, n) {
    let r = e.status * t,
        i = null != n ? (r * g.D6 - r) / 2 : 0,
        a = (e.status - r) / 2,
        o = e.size - r - i - e.offset - a,
        s = e.size - r * g.EW - e.offset - a,
        l = Math.round((o / t) * 100) / 100,
        c = Math.round((s / t) * 100) / 100;
    return "translate(".concat(l, ", ").concat(c, ")");
}
function W(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: a,
            isMobile: f = !1,
            isTyping: _ = !1,
            typingIndicatorRef: h,
            isSpeaking: m = !1,
            size: E,
            src: y,
            status: v,
            statusColor: S,
            statusTooltip: R = !1,
            statusTooltipDelay: P,
            statusBackdropColor: D,
            "aria-hidden": w = !1,
            "aria-label": L,
            imageClassName: M,
            pulseStatusIcon: j,
            CutoutIcon: V,
            avatarTooltipAsset: W,
            avatarTooltipText: K,
            avatarTooltipTitle: z,
        } = e,
        q = (0, u.vj)(v, S),
        X = i.useId(),
        Q = i.useId(),
        [J] = i.useState(() =>
            O(
                { fill: a },
                B({
                    size: E,
                    status: n,
                    isMobile: t,
                    isTyping: !1,
                }),
            ),
        ),
        $ = i.useMemo(
            () =>
                O(
                    { fill: q },
                    B({
                        size: E,
                        status: v,
                        isMobile: f,
                        isTyping: _,
                    }),
                ),
            [q, E, v, f, _],
        ),
        ee = (0, l.q_F)(
            {
                config: A,
                from: J,
                to: $,
            },
            C() ? "animate-always" : "animate-never",
        ),
        {
            avatarCutoutX: et,
            avatarCutoutY: en,
            avatarCutoutWidth: er,
            avatarCutoutHeight: ei,
            avatarCutoutRadius: ea,
            fill: eo,
        } = ee,
        es = T(ee, [
            "avatarCutoutX",
            "avatarCutoutY",
            "avatarCutoutWidth",
            "avatarCutoutHeight",
            "avatarCutoutRadius",
            "fill",
        ]),
        el = (0, g.px)(E),
        ec = (0, g.UC)(E),
        eu = ec.status * g.D6,
        ed = ec.status * g.EW,
        ef = null != v ? (ec.status * g.D6 - ec.status) / 2 : 0,
        e_ = ec.size + Math.ceil(ef),
        [ep, eh, em] = (0, l.q_F)(
            {
                config: {
                    tension: 450,
                    friction: 20,
                    clamp: !0,
                },
                from: { scale: 1 },
                to: j ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            C() ? "animate-always" : "animate-never",
            [j, v],
        );
    return (0, r.jsx)(
        Z,
        I(O({}, e), {
            ariaLabel: L,
            ariaHidden: w,
            typingOffset: ef,
            specs: ec,
            children: (0, r.jsxs)("svg", {
                width: e_,
                height: e_,
                viewBox: "0 0 ".concat(e_, " ").concat(e_),
                className: o()(b.mask, b.svg),
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
                            null != W && k(ec.size - ec.status - ec.offset, ec.offset, ec.status, W, ec),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        className: b.__invalid_foreignObject,
                        x: 0,
                        y: 0,
                        width: el,
                        height: el,
                        mask: "url(#".concat(X, ")"),
                        children: (0, r.jsx)(F, {
                            src: y,
                            isSpeaking: m,
                            className: M,
                        }),
                    }),
                    null != D && x(D, f, ec, v),
                    (0, r.jsx)(d.aM, {
                        "data-migration-pending": !0,
                        text: R ? (0, p.u5)(v) : null,
                        "aria-label": !1,
                        position: "top",
                        spacing: H(ec.status, ec.stroke, f, _),
                        delay: P,
                        children: (e) =>
                            (0, r.jsxs)(s.animated.g, {
                                transform: ep.scale.to((e) => "scale(".concat(e, ") ").concat(Y(ec, e, v))),
                                children: [
                                    (0, r.jsxs)("svg", {
                                        width: eu,
                                        height: ed,
                                        viewBox: "0 0 ".concat(eu, " ").concat(ed),
                                        className: R ? b.cursorDefault : void 0,
                                        children: [
                                            (0, u.vP)(es, ec.status, Q),
                                            (0, r.jsx)(s.animated.rect, {
                                                fill: eo,
                                                width: eu,
                                                height: ed,
                                                mask: "url(#".concat(Q, ")"),
                                            }),
                                            (0, r.jsx)(c.b, {
                                                ref: h,
                                                dotRadius: ec.status / 4,
                                                x: 0.15 * eu,
                                                y: 0.5 * ed,
                                                hide: !_,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(
                                        N,
                                        O(
                                            {
                                                size: E,
                                                isMobile: f,
                                                isTyping: _,
                                                className: b.pointerEvents,
                                            },
                                            e,
                                        ),
                                    ),
                                ],
                            }),
                    }),
                    null != V && U(ec, V),
                    null != z &&
                        G(
                            ec,
                            f,
                            _,
                            {
                                avatarTooltipTitle: z,
                                avatarTooltipText: K,
                            },
                            W,
                        ),
                ],
            }),
        }),
    );
}
function K(e, t, n, r, i) {
    return null != n && null != t && (!!e || t !== n || (t === h.Skl.ONLINE && r !== i));
}
F.displayName = "AvatarImg";
let z = i.memo(function (e) {
    var { statusColor: t, status: n } = e,
        a = T(e, ["statusColor", "status"]);
    let { isMobile: o = !1, isTyping: s = !1 } = a,
        l = i.useRef(n),
        c = i.useRef(o),
        d = (0, u.vj)(n, t),
        f = i.useRef(d),
        _ = i.useRef(!1),
        p = _.current || K(s, n, l.current, o, c.current);
    return (
        i.useLayoutEffect(() => {
            (_.current = p), (l.current = n), (c.current = o), (f.current = d);
        }, [n, o, d, p]),
        null != n && null != l.current && p
            ? (0, r.jsx)(
                  W,
                  I(O({}, a), {
                      status: n,
                      statusColor: d,
                      fromStatus: l.current,
                      fromIsMobile: c.current,
                      fromColor: f.current,
                  }),
              )
            : (0, r.jsx)(
                  V,
                  I(O({}, a), {
                      status: n,
                      statusColor: d,
                  }),
              )
    );
});
