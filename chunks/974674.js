n.d(t, {
    Vq: () => D,
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
    s = n(205120),
    l = n(793030),
    c = n(438784),
    u = n(696826),
    d = n(506802),
    f = n(681715),
    p = n(686546),
    _ = n(51144),
    m = n(981631),
    h = n(419061),
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
function S(e, t) {
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
let A = {
    tension: 1200,
    friction: 70,
};
function C() {
    return document.hasFocus();
}
function N(e) {
    var { size: t, isMobile: n, isTyping: i } = e,
        a = I(e, ["size", "isMobile", "isTyping"]);
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
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t
        ? E.intl.formatToPlainString(E.t["/6mw10"], {
              label: e,
              status: (0, _.u5)(t, n),
          })
        : e;
}
function R(e, t, n, r) {
    if (null == e) return null;
    if (r)
        switch (t) {
            case g.EF.SIZE_16:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_16;
            case g.EF.SIZE_20:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_20;
            case g.EF.SIZE_24:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_24;
            case g.EF.SIZE_32:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_32;
            case g.EF.SIZE_40:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_40;
            case g.EF.SIZE_44:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_44;
            case g.EF.SIZE_48:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_48;
            case g.EF.SIZE_56:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_56;
            case g.EF.SIZE_72:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_72;
            case g.EF.SIZE_80:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_80;
            case g.EF.SIZE_96:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_96;
            case g.EF.SIZE_120:
                return p.QS.AVATAR_DECORATION_STATUS_TYPING_120;
        }
    if (n)
        switch (t) {
            case g.EF.SIZE_16:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
            case g.EF.SIZE_20:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
            case g.EF.SIZE_24:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
            case g.EF.SIZE_32:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
            case g.EF.SIZE_40:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
            case g.EF.SIZE_44:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_44;
            case g.EF.SIZE_48:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_48;
            case g.EF.SIZE_56:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
            case g.EF.SIZE_72:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_72;
            case g.EF.SIZE_80:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
            case g.EF.SIZE_96:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_96;
            case g.EF.SIZE_120:
                return p.QS.AVATAR_DECORATION_STATUS_MOBILE_120;
        }
    switch (t) {
        case g.EF.SIZE_16:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_16;
        case g.EF.SIZE_20:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_20;
        case g.EF.SIZE_24:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_24;
        case g.EF.SIZE_32:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_32;
        case g.EF.SIZE_40:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_40;
        case g.EF.SIZE_44:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_44;
        case g.EF.SIZE_48:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_48;
        case g.EF.SIZE_56:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_56;
        case g.EF.SIZE_72:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_72;
        case g.EF.SIZE_80:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_80;
        case g.EF.SIZE_96:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_96;
        case g.EF.SIZE_120:
            return p.QS.AVATAR_DECORATION_STATUS_ROUND_120;
    }
    return null;
}
function w(e, t, n, r) {
    if (null == e) return p.QS.AVATAR_DEFAULT;
    if (r)
        switch (t) {
            case g.EF.SIZE_16:
                return p.QS.AVATAR_STATUS_TYPING_16;
            case g.EF.SIZE_20:
                return p.QS.AVATAR_STATUS_TYPING_20;
            case g.EF.SIZE_24:
                return p.QS.AVATAR_STATUS_TYPING_24;
            case g.EF.SIZE_32:
                return p.QS.AVATAR_STATUS_TYPING_32;
            case g.EF.SIZE_40:
                return p.QS.AVATAR_STATUS_TYPING_40;
            case g.EF.SIZE_44:
                return p.QS.AVATAR_STATUS_TYPING_44;
            case g.EF.SIZE_48:
                return p.QS.AVATAR_STATUS_TYPING_48;
            case g.EF.SIZE_56:
                return p.QS.AVATAR_STATUS_TYPING_56;
            case g.EF.SIZE_72:
                return p.QS.AVATAR_STATUS_TYPING_72;
            case g.EF.SIZE_80:
                return p.QS.AVATAR_STATUS_TYPING_80;
            case g.EF.SIZE_96:
                return p.QS.AVATAR_STATUS_TYPING_96;
            case g.EF.SIZE_120:
                return p.QS.AVATAR_STATUS_TYPING_120;
        }
    if (e === m.Skl.ONLINE && n)
        switch (t) {
            case g.EF.SIZE_16:
                return p.QS.AVATAR_STATUS_MOBILE_16;
            case g.EF.SIZE_20:
                return p.QS.AVATAR_STATUS_MOBILE_20;
            case g.EF.SIZE_24:
                return p.QS.AVATAR_STATUS_MOBILE_24;
            case g.EF.SIZE_32:
                return p.QS.AVATAR_STATUS_MOBILE_32;
            case g.EF.SIZE_40:
                return p.QS.AVATAR_STATUS_MOBILE_40;
            case g.EF.SIZE_44:
                return p.QS.AVATAR_STATUS_MOBILE_44;
            case g.EF.SIZE_48:
                return p.QS.AVATAR_STATUS_MOBILE_48;
            case g.EF.SIZE_56:
                return p.QS.AVATAR_STATUS_MOBILE_56;
            case g.EF.SIZE_72:
                return p.QS.AVATAR_STATUS_MOBILE_72;
            case g.EF.SIZE_80:
                return p.QS.AVATAR_STATUS_MOBILE_80;
            case g.EF.SIZE_96:
                return p.QS.AVATAR_STATUS_MOBILE_96;
            case g.EF.SIZE_120:
                return p.QS.AVATAR_STATUS_MOBILE_120;
        }
    switch (t) {
        case g.EF.SIZE_16:
            return p.QS.AVATAR_STATUS_ROUND_16;
        case g.EF.SIZE_20:
            return p.QS.AVATAR_STATUS_ROUND_20;
        case g.EF.SIZE_24:
            return p.QS.AVATAR_STATUS_ROUND_24;
        case g.EF.SIZE_32:
            return p.QS.AVATAR_STATUS_ROUND_32;
        case g.EF.SIZE_40:
            return p.QS.AVATAR_STATUS_ROUND_40;
        case g.EF.SIZE_44:
            return p.QS.AVATAR_STATUS_ROUND_44;
        case g.EF.SIZE_48:
            return p.QS.AVATAR_STATUS_ROUND_48;
        case g.EF.SIZE_56:
            return p.QS.AVATAR_STATUS_ROUND_56;
        case g.EF.SIZE_72:
            return p.QS.AVATAR_STATUS_ROUND_72;
        case g.EF.SIZE_80:
            return p.QS.AVATAR_STATUS_ROUND_80;
        case g.EF.SIZE_96:
            return p.QS.AVATAR_STATUS_ROUND_96;
        case g.EF.SIZE_120:
            return p.QS.AVATAR_STATUS_ROUND_120;
    }
    throw Error(
        "getMaskId(): Unsupported type, size: "
            .concat(t, ", status: ")
            .concat(e, ", isMobile: ")
            .concat(n ? "true" : "false"),
    );
}
function D(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = (0, u.W5)(e.status, t, n, r),
        a = (r ? e.size - (i.width / 2 + e.status / 2) : e.size - i.width) - e.offset;
    return S(O({}, i), {
        x: a,
        y: e.size - i.height - e.offset,
    });
}
function x(e, t, n) {
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
function L(e, t, n, i) {
    let a = D(n, i, t, !1),
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
let j = {
    "\uD83D\uDD25":
        "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
};
function M(e, t, n, i, a) {
    let o = j[i];
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
    let s = x(a, !1, !1);
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
            null != i && M(l, c, t.status, i, t),
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
        c = x(e, t, n),
        u = l,
        d = 0,
        p = c.avatarCutoutWidth,
        _ = e.size - (c.avatarCutoutHeight - e.stroke),
        m = (0, r.jsxs)("g", {
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
                    width: p,
                    height: _,
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
              children: m,
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
              children: m,
          });
}
function Z(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        a = n && !r && t === m.Skl.ONLINE,
        o = (0, g.UC)(i);
    return O(
        {},
        x(o, a, r),
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
function B(e) {
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
            tabIndex: p,
            ariaLabel: _,
            ariaHidden: m,
            status: E,
            isMobile: y = !1,
            isTyping: O = !1,
            avatarDecoration: v,
            typingOffset: S,
            specs: I,
        } = e,
        T = {
            width: (0, g.px)(n),
            height: (0, g.px)(n),
        },
        A = null == _ || m ? void 0 : P(_, E, y),
        C = I.size * h.hs,
        N = R(E, n, y, O),
        w =
            null != v &&
            (0, r.jsx)("svg", {
                width: C + S,
                height: C,
                viewBox: "0 0 ".concat(C + S, " ").concat(C),
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
              style: T,
              onClick: i,
              tabIndex: p,
              onContextMenu: c,
              onMouseDown: a,
              onKeyDown: s,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              "aria-label": A,
              "aria-hidden": m,
              children: [t, w],
          })
        : (0, r.jsxs)("div", {
              className: o()(b.wrapper, f),
              style: T,
              onContextMenu: null != c ? c : void 0,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              role: "img",
              "aria-label": A,
              "aria-hidden": m,
              children: [t, w],
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
            typingIndicatorRef: p,
            avatarContentRef: h,
            isSpeaking: E = !1,
            isLatched: y = !1,
            statusTooltip: v = !1,
            statusTooltipDelay: I,
            statusBackdropColor: T,
            "aria-hidden": A = !1,
            "aria-label": C,
            imageClassName: N,
            ref: P,
            CutoutIcon: R,
            avatarTooltipAsset: x,
            avatarTooltipText: j,
            avatarTooltipTitle: M,
        } = e,
        Z = n !== m.Skl.UNKNOWN ? n : null,
        V = (0, g.UC)(a),
        H = null != Z ? Math.ceil((V.status * g.D6 - V.status) / 2) : 0,
        Y = V.size + H,
        W = (0, u.vj)(Z, s),
        K = i.useId();
    return (0, r.jsx)(
        B,
        S(O({}, e), {
            ariaLabel: C,
            ariaHidden: A,
            status: Z,
            specs: V,
            typingOffset: H,
            children: (0, r.jsxs)("svg", {
                ref: P,
                width: Y,
                height: Y,
                viewBox: "0 0 ".concat(Y, " ").concat(Y),
                className: o()(b.mask, b.svg),
                "aria-hidden": !0,
                children: [
                    null != x &&
                        k(
                            K,
                            V,
                            {
                                status: Z,
                                isMobile: l,
                                isTyping: f,
                            },
                            x,
                        ),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: V.size,
                        height: V.size,
                        mask: null != x ? "url(#".concat(K, ")") : "url(#".concat(w(Z, a, l, f), ")"),
                        children: (0, r.jsx)(F, {
                            ref: h,
                            src: t,
                            isSpeaking: E,
                            isLatched: y,
                            className: N,
                        }),
                    }),
                    null != Z && null != T ? L(T, l, V, Z) : null,
                    null != Z
                        ? (0, r.jsx)(d.aM, {
                              "data-migration-pending": !0,
                              text: v ? (0, _.u5)(Z) : null,
                              "aria-label": !1,
                              position: "top",
                              spacing: 5 + 1.5 * V.stroke,
                              delay: I,
                              children: (e) =>
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(
                                              "rect",
                                              S(O({}, e, D(V, Z, l, f)), {
                                                  fill: W,
                                                  mask: "url(#".concat((0, u.rs)(Z, l, f), ")"),
                                                  className: b.pointerEvents,
                                              }),
                                          ),
                                          f
                                              ? (0, r.jsx)(c.b, {
                                                    ref: p,
                                                    dotRadius: V.status / 4,
                                                    x: V.size - 1.375 * V.status - V.offset,
                                                    y: V.size - V.status / 1.333 - V.offset,
                                                })
                                              : null,
                                      ],
                                  }),
                          })
                        : null,
                    null != R && U(V, R),
                    null != M &&
                        G(
                            V,
                            l,
                            f,
                            {
                                avatarTooltipTitle: M,
                                avatarTooltipText: j,
                            },
                            x,
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
            isTyping: p = !1,
            typingIndicatorRef: m,
            isSpeaking: h = !1,
            isLatched: E = !1,
            size: y,
            src: v,
            status: T,
            statusColor: P,
            statusTooltip: R = !1,
            statusTooltipDelay: w,
            statusBackdropColor: D,
            "aria-hidden": x = !1,
            "aria-label": j,
            imageClassName: k,
            pulseStatusIcon: V,
            CutoutIcon: W,
            avatarTooltipAsset: K,
            avatarTooltipText: z,
            avatarTooltipTitle: q,
        } = e,
        X = (0, u.vj)(T, P),
        Q = i.useId(),
        J = i.useId(),
        [$] = i.useState(() =>
            O(
                { fill: a },
                Z({
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
                    Z({
                        size: y,
                        status: T,
                        isMobile: f,
                        isTyping: p,
                    }),
                ),
            [X, y, T, f, p],
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
        el = I(et, [
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
        ep = null != T ? (eu.status * g.D6 - eu.status) / 2 : 0,
        e_ = eu.size + Math.ceil(ep),
        [em, eh, eg] = (0, l.q_F)(
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
            [V, T],
        );
    return (0, r.jsx)(
        B,
        S(O({}, e), {
            ariaLabel: j,
            ariaHidden: x,
            typingOffset: ep,
            specs: eu,
            children: (0, r.jsxs)("svg", {
                width: e_,
                height: e_,
                viewBox: "0 0 ".concat(e_, " ").concat(e_),
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
                            null != K && M(eu.size - eu.status - eu.offset, eu.offset, eu.status, K, eu),
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
                            isSpeaking: h,
                            isLatched: E,
                            className: k,
                        }),
                    }),
                    null != D && L(D, f, eu, T),
                    (0, r.jsx)(d.aM, {
                        "data-migration-pending": !0,
                        text: R ? (0, _.u5)(T) : null,
                        "aria-label": !1,
                        position: "top",
                        spacing: H(eu.status, eu.stroke, f, p),
                        delay: w,
                        children: (e) =>
                            (0, r.jsxs)(s.animated.g, {
                                transform: em.scale.to((e) => "scale(".concat(e, ") ").concat(Y(eu, e, T))),
                                children: [
                                    (0, r.jsxs)("svg", {
                                        width: ed,
                                        height: ef,
                                        viewBox: "0 0 ".concat(ed, " ").concat(ef),
                                        className: R ? b.cursorDefault : void 0,
                                        children: [
                                            (0, u.vP)(el, eu.status, J),
                                            (0, r.jsx)(s.animated.rect, {
                                                fill: es,
                                                width: ed,
                                                height: ef,
                                                mask: "url(#".concat(J, ")"),
                                            }),
                                            (0, r.jsx)(c.b, {
                                                ref: m,
                                                dotRadius: eu.status / 4,
                                                x: 0.15 * ed,
                                                y: 0.5 * ef,
                                                hide: !p,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(
                                        N,
                                        O(
                                            {
                                                size: y,
                                                isMobile: f,
                                                isTyping: p,
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
                            p,
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
    return null != n && null != t && (!!e || t !== n || (t === m.Skl.ONLINE && r !== i));
}
F.displayName = "AvatarImg";
let z = i.memo(function (e) {
    var { statusColor: t, status: n } = e,
        a = I(e, ["statusColor", "status"]);
    let { isMobile: o = !1, isTyping: s = !1 } = a,
        l = i.useRef(n),
        c = i.useRef(o),
        d = (0, u.vj)(n, t),
        f = i.useRef(d),
        p = i.useRef(!1),
        _ = p.current || K(s, n, l.current, o, c.current);
    return (
        i.useLayoutEffect(() => {
            (p.current = _), (l.current = n), (c.current = o), (f.current = d);
        }, [n, o, d, _]),
        null != n && null != l.current && _
            ? (0, r.jsx)(
                  W,
                  S(O({}, a), {
                      status: n,
                      statusColor: d,
                      fromStatus: l.current,
                      fromIsMobile: c.current,
                      fromColor: f.current,
                  }),
              )
            : (0, r.jsx)(
                  V,
                  S(O({}, a), {
                      status: n,
                      statusColor: d,
                  }),
              )
    );
});
