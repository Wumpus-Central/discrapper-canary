n.d(t, {
    Vq: () => w,
    Xo: () => z,
    qE: () => V,
    qe: () => F,
}),
    n(415506),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(636606),
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
    b = n(257702);
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
            case g.EF.SIZE_72:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_72;
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
            case g.EF.SIZE_72:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_72;
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
        case g.EF.SIZE_72:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_72;
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
            case g.EF.SIZE_72:
                return _.QS.AVATAR_STATUS_TYPING_72;
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
            case g.EF.SIZE_72:
                return _.QS.AVATAR_STATUS_MOBILE_72;
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
        case g.EF.SIZE_72:
            return _.QS.AVATAR_STATUS_ROUND_72;
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
function j(e, t, n, i, a) {
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
function k(e, t, n, i) {
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
            null != i && j(l, c, t.status, i, t),
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
    let { src: n, isSpeaking: i, isLatched: a, className: s } = e;
    return (0, r.jsxs)(
        "div",
        {
            ref: t,
            className: o()(b.avatarStack, s),
            children: [
                (0, r.jsx)("img", {
                    src: null != n ? n : void 0,
                    alt: " ",
                    className: b.avatar,
                    "aria-hidden": !0,
                }),
                (i || a) && (0, r.jsx)("div", { className: i ? b.avatarSpeaking : b.avatarLatched }),
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
            isLatched: y = !1,
            statusTooltip: v = !1,
            statusTooltipDelay: T,
            statusBackdropColor: S,
            "aria-hidden": A = !1,
            "aria-label": C,
            imageClassName: N,
            ref: R,
            CutoutIcon: P,
            avatarTooltipAsset: L,
            avatarTooltipText: M,
            avatarTooltipTitle: j,
        } = e,
        B = n !== h.Skl.UNKNOWN ? n : null,
        V = (0, g.UC)(a),
        H = null != B ? Math.ceil((V.status * g.D6 - V.status) / 2) : 0,
        Y = V.size + H,
        W = (0, u.vj)(B, s),
        K = i.useId();
    return (0, r.jsx)(
        Z,
        I(O({}, e), {
            ariaLabel: C,
            ariaHidden: A,
            status: B,
            specs: V,
            typingOffset: H,
            children: (0, r.jsxs)("svg", {
                ref: R,
                width: Y,
                height: Y,
                viewBox: "0 0 ".concat(Y, " ").concat(Y),
                className: o()(b.mask, b.svg),
                "aria-hidden": !0,
                children: [
                    null != L &&
                        k(
                            K,
                            V,
                            {
                                status: B,
                                isMobile: l,
                                isTyping: f,
                            },
                            L,
                        ),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: V.size,
                        height: V.size,
                        mask: null != L ? "url(#".concat(K, ")") : "url(#".concat(D(B, a, l, f), ")"),
                        children: (0, r.jsx)(F, {
                            ref: m,
                            src: t,
                            isSpeaking: E,
                            isLatched: y,
                            className: N,
                        }),
                    }),
                    null != B && null != S ? x(S, l, V, B) : null,
                    null != B
                        ? (0, r.jsx)(d.aM, {
                              "data-migration-pending": !0,
                              text: v ? (0, p.u5)(B) : null,
                              "aria-label": !1,
                              position: "top",
                              spacing: 5 + 1.5 * V.stroke,
                              delay: T,
                              children: (e) =>
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(
                                              "rect",
                                              I(O({}, e, w(V, B, l, f)), {
                                                  fill: W,
                                                  mask: "url(#".concat((0, u.rs)(B, l, f), ")"),
                                                  className: b.pointerEvents,
                                              }),
                                          ),
                                          f
                                              ? (0, r.jsx)(c.b, {
                                                    ref: _,
                                                    dotRadius: V.status / 4,
                                                    x: V.size - 1.375 * V.status - V.offset,
                                                    y: V.size - V.status / 1.333 - V.offset,
                                                })
                                              : null,
                                      ],
                                  }),
                          })
                        : null,
                    null != P && U(V, P),
                    null != j &&
                        G(
                            V,
                            l,
                            f,
                            {
                                avatarTooltipTitle: j,
                                avatarTooltipText: M,
                            },
                            L,
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
            isLatched: E = !1,
            size: y,
            src: v,
            status: S,
            statusColor: R,
            statusTooltip: P = !1,
            statusTooltipDelay: D,
            statusBackdropColor: w,
            "aria-hidden": L = !1,
            "aria-label": M,
            imageClassName: k,
            pulseStatusIcon: V,
            CutoutIcon: W,
            avatarTooltipAsset: K,
            avatarTooltipText: z,
            avatarTooltipTitle: q,
        } = e,
        X = (0, u.vj)(S, R),
        Q = i.useId(),
        J = i.useId(),
        [$] = i.useState(() =>
            O(
                { fill: a },
                B({
                    size: y,
                    status: n,
                    isMobile: t,
                    isTyping: !1,
                }),
            ),
        ),
        ee = i.useMemo(
            () =>
                O(
                    { fill: X },
                    B({
                        size: y,
                        status: S,
                        isMobile: f,
                        isTyping: _,
                    }),
                ),
            [X, y, S, f, _],
        ),
        et = (0, l.q_F)(
            {
                config: A,
                from: $,
                to: ee,
            },
            C() ? "animate-always" : "animate-never",
        ),
        {
            avatarCutoutX: en,
            avatarCutoutY: er,
            avatarCutoutWidth: ei,
            avatarCutoutHeight: ea,
            avatarCutoutRadius: eo,
            fill: es,
        } = et,
        el = T(et, [
            "avatarCutoutX",
            "avatarCutoutY",
            "avatarCutoutWidth",
            "avatarCutoutHeight",
            "avatarCutoutRadius",
            "fill",
        ]),
        ec = (0, g.px)(y),
        eu = (0, g.UC)(y),
        ed = eu.status * g.D6,
        ef = eu.status * g.EW,
        e_ = null != S ? (eu.status * g.D6 - eu.status) / 2 : 0,
        ep = eu.size + Math.ceil(e_),
        [eh, em, eg] = (0, l.q_F)(
            {
                config: {
                    tension: 450,
                    friction: 20,
                    clamp: !0,
                },
                from: { scale: 1 },
                to: V ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            C() ? "animate-always" : "animate-never",
            [V, S],
        );
    return (0, r.jsx)(
        Z,
        I(O({}, e), {
            ariaLabel: M,
            ariaHidden: L,
            typingOffset: e_,
            specs: eu,
            children: (0, r.jsxs)("svg", {
                width: ep,
                height: ep,
                viewBox: "0 0 ".concat(ep, " ").concat(ep),
                className: o()(b.mask, b.svg),
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: Q,
                        width: ec,
                        height: ec,
                        children: [
                            (0, r.jsx)("circle", {
                                cx: ec / 2,
                                cy: ec / 2,
                                r: ec / 2,
                                fill: "white",
                            }),
                            (0, r.jsx)(s.animated.rect, {
                                color: "black",
                                x: en,
                                y: er,
                                width: ei,
                                height: ea,
                                rx: eo,
                                ry: eo,
                            }),
                            null != K && j(eu.size - eu.status - eu.offset, eu.offset, eu.status, K, eu),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        className: b.__invalid_foreignObject,
                        x: 0,
                        y: 0,
                        width: ec,
                        height: ec,
                        mask: "url(#".concat(Q, ")"),
                        children: (0, r.jsx)(F, {
                            src: v,
                            isSpeaking: m,
                            isLatched: E,
                            className: k,
                        }),
                    }),
                    null != w && x(w, f, eu, S),
                    (0, r.jsx)(d.aM, {
                        "data-migration-pending": !0,
                        text: P ? (0, p.u5)(S) : null,
                        "aria-label": !1,
                        position: "top",
                        spacing: H(eu.status, eu.stroke, f, _),
                        delay: D,
                        children: (e) =>
                            (0, r.jsxs)(s.animated.g, {
                                transform: eh.scale.to((e) => "scale(".concat(e, ") ").concat(Y(eu, e, S))),
                                children: [
                                    (0, r.jsxs)("svg", {
                                        width: ed,
                                        height: ef,
                                        viewBox: "0 0 ".concat(ed, " ").concat(ef),
                                        className: P ? b.cursorDefault : void 0,
                                        children: [
                                            (0, u.vP)(el, eu.status, J),
                                            (0, r.jsx)(s.animated.rect, {
                                                fill: es,
                                                width: ed,
                                                height: ef,
                                                mask: "url(#".concat(J, ")"),
                                            }),
                                            (0, r.jsx)(c.b, {
                                                ref: h,
                                                dotRadius: eu.status / 4,
                                                x: 0.15 * ed,
                                                y: 0.5 * ef,
                                                hide: !_,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(
                                        N,
                                        O(
                                            {
                                                size: y,
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
                    null != W && U(eu, W),
                    null != q &&
                        G(
                            eu,
                            f,
                            _,
                            {
                                avatarTooltipTitle: q,
                                avatarTooltipText: z,
                            },
                            K,
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
