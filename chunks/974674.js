n.d(t, {
    Vq: () => x,
    Xo: () => q,
    qE: () => H,
    qe: () => V,
}),
    n(415506),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(467721),
    l = n(793030),
    c = n(438784),
    u = n(696826),
    d = n(506802),
    f = n(681715),
    p = n(538870),
    _ = n(686546),
    m = n(51144),
    h = n(981631),
    g = n(419061),
    E = n(268685),
    b = n(388032),
    y = n(649674);
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
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
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
function N() {
    return document.hasFocus();
}
function P(e) {
    var { size: t, isMobile: n, isTyping: i } = e,
        a = T(e, ["size", "isMobile", "isTyping"]);
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
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t
        ? b.intl.formatToPlainString(b.t["/6mw10"], {
              label: e,
              status: (0, m.u5)(t, n),
          })
        : e;
}
function w(e, t, n, r) {
    if (null == e) return null;
    if (r)
        switch (t) {
            case E.EF.SIZE_16:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_16;
            case E.EF.SIZE_20:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_20;
            case E.EF.SIZE_24:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_24;
            case E.EF.SIZE_32:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_32;
            case E.EF.SIZE_40:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_40;
            case E.EF.SIZE_44:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_44;
            case E.EF.SIZE_48:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_48;
            case E.EF.SIZE_56:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_56;
            case E.EF.SIZE_72:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_72;
            case E.EF.SIZE_80:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_80;
            case E.EF.SIZE_96:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_96;
            case E.EF.SIZE_120:
                return _.QS.AVATAR_DECORATION_STATUS_TYPING_120;
        }
    if (n)
        switch (t) {
            case E.EF.SIZE_16:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_16;
            case E.EF.SIZE_20:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_20;
            case E.EF.SIZE_24:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_24;
            case E.EF.SIZE_32:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_32;
            case E.EF.SIZE_40:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_40;
            case E.EF.SIZE_44:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_44;
            case E.EF.SIZE_48:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_48;
            case E.EF.SIZE_56:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_56;
            case E.EF.SIZE_72:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_72;
            case E.EF.SIZE_80:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_80;
            case E.EF.SIZE_96:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_96;
            case E.EF.SIZE_120:
                return _.QS.AVATAR_DECORATION_STATUS_MOBILE_120;
        }
    switch (t) {
        case E.EF.SIZE_16:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_16;
        case E.EF.SIZE_20:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_20;
        case E.EF.SIZE_24:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_24;
        case E.EF.SIZE_32:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_32;
        case E.EF.SIZE_40:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_40;
        case E.EF.SIZE_44:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_44;
        case E.EF.SIZE_48:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_48;
        case E.EF.SIZE_56:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_56;
        case E.EF.SIZE_72:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_72;
        case E.EF.SIZE_80:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_80;
        case E.EF.SIZE_96:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_96;
        case E.EF.SIZE_120:
            return _.QS.AVATAR_DECORATION_STATUS_ROUND_120;
    }
    return null;
}
function D(e, t, n, r) {
    if (null == e) return _.QS.AVATAR_DEFAULT;
    if (r)
        switch (t) {
            case E.EF.SIZE_16:
                return _.QS.AVATAR_STATUS_TYPING_16;
            case E.EF.SIZE_20:
                return _.QS.AVATAR_STATUS_TYPING_20;
            case E.EF.SIZE_24:
                return _.QS.AVATAR_STATUS_TYPING_24;
            case E.EF.SIZE_32:
                return _.QS.AVATAR_STATUS_TYPING_32;
            case E.EF.SIZE_40:
                return _.QS.AVATAR_STATUS_TYPING_40;
            case E.EF.SIZE_44:
                return _.QS.AVATAR_STATUS_TYPING_44;
            case E.EF.SIZE_48:
                return _.QS.AVATAR_STATUS_TYPING_48;
            case E.EF.SIZE_56:
                return _.QS.AVATAR_STATUS_TYPING_56;
            case E.EF.SIZE_72:
                return _.QS.AVATAR_STATUS_TYPING_72;
            case E.EF.SIZE_80:
                return _.QS.AVATAR_STATUS_TYPING_80;
            case E.EF.SIZE_96:
                return _.QS.AVATAR_STATUS_TYPING_96;
            case E.EF.SIZE_120:
                return _.QS.AVATAR_STATUS_TYPING_120;
        }
    if (e === h.Skl.ONLINE && n)
        switch (t) {
            case E.EF.SIZE_16:
                return _.QS.AVATAR_STATUS_MOBILE_16;
            case E.EF.SIZE_20:
                return _.QS.AVATAR_STATUS_MOBILE_20;
            case E.EF.SIZE_24:
                return _.QS.AVATAR_STATUS_MOBILE_24;
            case E.EF.SIZE_32:
                return _.QS.AVATAR_STATUS_MOBILE_32;
            case E.EF.SIZE_40:
                return _.QS.AVATAR_STATUS_MOBILE_40;
            case E.EF.SIZE_44:
                return _.QS.AVATAR_STATUS_MOBILE_44;
            case E.EF.SIZE_48:
                return _.QS.AVATAR_STATUS_MOBILE_48;
            case E.EF.SIZE_56:
                return _.QS.AVATAR_STATUS_MOBILE_56;
            case E.EF.SIZE_72:
                return _.QS.AVATAR_STATUS_MOBILE_72;
            case E.EF.SIZE_80:
                return _.QS.AVATAR_STATUS_MOBILE_80;
            case E.EF.SIZE_96:
                return _.QS.AVATAR_STATUS_MOBILE_96;
            case E.EF.SIZE_120:
                return _.QS.AVATAR_STATUS_MOBILE_120;
        }
    switch (t) {
        case E.EF.SIZE_16:
            return _.QS.AVATAR_STATUS_ROUND_16;
        case E.EF.SIZE_20:
            return _.QS.AVATAR_STATUS_ROUND_20;
        case E.EF.SIZE_24:
            return _.QS.AVATAR_STATUS_ROUND_24;
        case E.EF.SIZE_32:
            return _.QS.AVATAR_STATUS_ROUND_32;
        case E.EF.SIZE_40:
            return _.QS.AVATAR_STATUS_ROUND_40;
        case E.EF.SIZE_44:
            return _.QS.AVATAR_STATUS_ROUND_44;
        case E.EF.SIZE_48:
            return _.QS.AVATAR_STATUS_ROUND_48;
        case E.EF.SIZE_56:
            return _.QS.AVATAR_STATUS_ROUND_56;
        case E.EF.SIZE_72:
            return _.QS.AVATAR_STATUS_ROUND_72;
        case E.EF.SIZE_80:
            return _.QS.AVATAR_STATUS_ROUND_80;
        case E.EF.SIZE_96:
            return _.QS.AVATAR_STATUS_ROUND_96;
        case E.EF.SIZE_120:
            return _.QS.AVATAR_STATUS_ROUND_120;
    }
    throw Error(
        "getMaskId(): Unsupported type, size: "
            .concat(t, ", status: ")
            .concat(e, ", isMobile: ")
            .concat(n ? "true" : "false"),
    );
}
function x(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = (0, u.W5)(e.status, t, n, r),
        a = (r ? e.size - (i.width / 2 + e.status / 2) : e.size - i.width) - e.offset;
    return I(v({}, i), {
        x: a,
        y: e.size - i.height - e.offset,
    });
}
function L(e, t, n) {
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
function j(e, t, n, i) {
    let a = x(n, i, t, !1),
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
function U(e, t, n, i) {
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
                color: "currentColor",
            }),
        }),
    });
}
function Z(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        { avatarTooltipTitle: o, avatarTooltipText: s } = i,
        l = e.size - e.status - e.offset - e.stroke,
        c = L(e, t, n),
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
                    className: y.pointerEvents,
                }),
                (0, r.jsx)("rect", {
                    x: u,
                    y: d,
                    width: p,
                    height: _,
                    fill: "transparent",
                    className: y.pointerEvents,
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
                  className: y.largeEmoji,
                  children: a,
              }),
              children: m,
          });
}
function B(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        a = n && !r && t === h.Skl.ONLINE,
        o = (0, E.UC)(i);
    return v(
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
function F(e) {
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
            status: h,
            isMobile: b = !1,
            isTyping: O = !1,
            avatarDecoration: v,
            typingOffset: S,
            specs: I,
        } = e,
        T = {
            width: (0, E.px)(n),
            height: (0, E.px)(n),
        },
        C = null == _ || m ? void 0 : R(_, h, b),
        A = I.size * g.hs,
        N = w(h, n, b, O),
        P =
            null != v &&
            (0, r.jsx)("svg", {
                width: A + S,
                height: A,
                viewBox: "0 0 ".concat(A + S, " ").concat(A),
                className: y.avatarDecoration,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: A,
                    height: A,
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
        ? (0, r.jsxs)(l.P3F, {
              className: o()(y.wrapper, y.pointer, f),
              style: T,
              onClick: i,
              tabIndex: p,
              onContextMenu: c,
              onMouseDown: a,
              onKeyDown: s,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              "aria-label": C,
              "aria-hidden": m,
              children: [t, P],
          })
        : (0, r.jsxs)("div", {
              className: o()(y.wrapper, f),
              style: T,
              onContextMenu: null != c ? c : void 0,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              role: "img",
              "aria-label": C,
              "aria-hidden": m,
              children: [t, P],
          });
}
let V = i.forwardRef((e, t) => {
    let { src: n, isSpeaking: i, isLatched: a, className: s, voiceDb: l = -1 / 0, speakingStylesConfig: c } = e,
        u = (0, p._)(
            v(
                {
                    isSpeaking: i,
                    isLatched: a,
                    voiceDb: l,
                    spreadDirection: p.h.INSET_ONLY,
                    maxInnerSpreadRadius: 5,
                },
                c,
            ),
        );
    return (0, r.jsxs)(
        "div",
        {
            ref: t,
            className: o()(y.avatarStack, s),
            children: [
                (0, r.jsx)("img", {
                    src: null != n ? n : void 0,
                    alt: " ",
                    className: y.avatar,
                    "aria-hidden": !0,
                }),
                (i || a) &&
                    (0, r.jsx)("div", {
                        className: y.avatarBorder,
                        style: u,
                    }),
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
            isTyping: f = !1,
            typingIndicatorRef: p,
            avatarContentRef: _,
            isSpeaking: g = !1,
            isLatched: b = !1,
            voiceDb: O,
            speakingStylesConfig: S,
            statusTooltip: T = !1,
            statusTooltipDelay: C,
            statusBackdropColor: A,
            "aria-hidden": N = !1,
            "aria-label": P,
            imageClassName: R,
            ref: w,
            CutoutIcon: L,
            avatarTooltipAsset: M,
            avatarTooltipText: k,
            avatarTooltipTitle: B,
        } = e,
        H = n !== h.Skl.UNKNOWN ? n : null,
        Y = (0, E.UC)(a),
        W = null != H ? Math.ceil((Y.status * E.D6 - Y.status) / 2) : 0,
        K = Y.size + W,
        z = (0, u.vj)(H, s),
        q = i.useId();
    return (0, r.jsx)(
        F,
        I(v({}, e), {
            ariaLabel: P,
            ariaHidden: N,
            status: H,
            specs: Y,
            typingOffset: W,
            children: (0, r.jsxs)("svg", {
                ref: w,
                width: K,
                height: K,
                viewBox: "0 0 ".concat(K, " ").concat(K),
                className: o()(y.mask, y.svg),
                "aria-hidden": !0,
                children: [
                    null != M &&
                        U(
                            q,
                            Y,
                            {
                                status: H,
                                isMobile: l,
                                isTyping: f,
                            },
                            M,
                        ),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: Y.size,
                        height: Y.size,
                        mask: null != M ? "url(#".concat(q, ")") : "url(#".concat(D(H, a, l, f), ")"),
                        children: (0, r.jsx)(V, {
                            ref: _,
                            src: t,
                            isSpeaking: g,
                            isLatched: b,
                            voiceDb: O,
                            speakingStylesConfig: S,
                            className: R,
                        }),
                    }),
                    null != H && null != A ? j(A, l, Y, H) : null,
                    null != H
                        ? (0, r.jsx)(d.aM, {
                              "data-migration-pending": !0,
                              text: T ? (0, m.u5)(H) : null,
                              "aria-label": !1,
                              position: "top",
                              spacing: 5 + 1.5 * Y.stroke,
                              delay: C,
                              children: (e) =>
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(
                                              "rect",
                                              I(v({}, e, x(Y, H, l, f)), {
                                                  fill: z,
                                                  mask: "url(#".concat((0, u.rs)(H, l, f), ")"),
                                                  className: y.pointerEvents,
                                              }),
                                          ),
                                          f
                                              ? (0, r.jsx)(c.b, {
                                                    ref: p,
                                                    dotRadius: Y.status / 4,
                                                    x: Y.size - 1.375 * Y.status - Y.offset,
                                                    y: Y.size - Y.status / 1.333 - Y.offset,
                                                })
                                              : null,
                                      ],
                                  }),
                          })
                        : null,
                    null != L && G(Y, L),
                    null != B &&
                        Z(
                            Y,
                            l,
                            f,
                            {
                                avatarTooltipTitle: B,
                                avatarTooltipText: k,
                            },
                            M,
                        ),
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
            isMobile: f = !1,
            isTyping: p = !1,
            typingIndicatorRef: _,
            isSpeaking: h = !1,
            isLatched: g = !1,
            voiceDb: b,
            speakingStylesConfig: O,
            size: S,
            src: C,
            status: R,
            statusColor: w,
            statusTooltip: D = !1,
            statusTooltipDelay: x,
            statusBackdropColor: L,
            "aria-hidden": M = !1,
            "aria-label": U,
            imageClassName: H,
            pulseStatusIcon: K,
            CutoutIcon: z,
            avatarTooltipAsset: q,
            avatarTooltipText: Q,
            avatarTooltipTitle: X,
        } = e,
        J = (0, u.vj)(R, w),
        $ = i.useId(),
        ee = i.useId(),
        [et] = i.useState(() =>
            v(
                { fill: a },
                B({
                    size: S,
                    status: n,
                    isMobile: t,
                    isTyping: !1,
                }),
            ),
        ),
        en = i.useMemo(
            () =>
                v(
                    { fill: J },
                    B({
                        size: S,
                        status: R,
                        isMobile: f,
                        isTyping: p,
                    }),
                ),
            [J, S, R, f, p],
        ),
        er = (0, l.q_F)(
            {
                config: A,
                from: et,
                to: en,
            },
            N() ? "animate-always" : "animate-never",
        ),
        {
            avatarCutoutX: ei,
            avatarCutoutY: ea,
            avatarCutoutWidth: eo,
            avatarCutoutHeight: es,
            avatarCutoutRadius: el,
            fill: ec,
        } = er,
        eu = T(er, [
            "avatarCutoutX",
            "avatarCutoutY",
            "avatarCutoutWidth",
            "avatarCutoutHeight",
            "avatarCutoutRadius",
            "fill",
        ]),
        ed = (0, E.px)(S),
        ef = (0, E.UC)(S),
        ep = ef.status * E.D6,
        e_ = ef.status * E.EW,
        em = null != R ? (ef.status * E.D6 - ef.status) / 2 : 0,
        eh = ef.size + Math.ceil(em),
        [eg, eE, eb] = (0, l.q_F)(
            {
                config: {
                    tension: 450,
                    friction: 20,
                    clamp: !0,
                },
                from: { scale: 1 },
                to: K ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            N() ? "animate-always" : "animate-never",
            [K, R],
        );
    return (0, r.jsx)(
        F,
        I(v({}, e), {
            ariaLabel: U,
            ariaHidden: M,
            typingOffset: em,
            specs: ef,
            children: (0, r.jsxs)("svg", {
                width: eh,
                height: eh,
                viewBox: "0 0 ".concat(eh, " ").concat(eh),
                className: o()(y.mask, y.svg),
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: $,
                        width: ed,
                        height: ed,
                        children: [
                            (0, r.jsx)("circle", {
                                cx: ed / 2,
                                cy: ed / 2,
                                r: ed / 2,
                                fill: "white",
                            }),
                            (0, r.jsx)(s.animated.rect, {
                                color: "black",
                                x: ei,
                                y: ea,
                                width: eo,
                                height: es,
                                rx: el,
                                ry: el,
                            }),
                            null != q && k(ef.size - ef.status - ef.offset, ef.offset, ef.status, q, ef),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        className: y.__invalid_foreignObject,
                        x: 0,
                        y: 0,
                        width: ed,
                        height: ed,
                        mask: "url(#".concat($, ")"),
                        children: (0, r.jsx)(V, {
                            src: C,
                            isSpeaking: h,
                            isLatched: g,
                            voiceDb: b,
                            className: H,
                            speakingStylesConfig: O,
                        }),
                    }),
                    null != L && j(L, f, ef, R),
                    (0, r.jsx)(d.aM, {
                        "data-migration-pending": !0,
                        text: D ? (0, m.u5)(R) : null,
                        "aria-label": !1,
                        position: "top",
                        spacing: Y(ef.status, ef.stroke, f, p),
                        delay: x,
                        children: (e) =>
                            (0, r.jsxs)(s.animated.g, {
                                transform: eg.scale.to((e) => "scale(".concat(e, ") ").concat(W(ef, e, R))),
                                children: [
                                    (0, r.jsxs)("svg", {
                                        width: ep,
                                        height: e_,
                                        viewBox: "0 0 ".concat(ep, " ").concat(e_),
                                        className: D ? y.cursorDefault : void 0,
                                        children: [
                                            (0, u.vP)(eu, ef.status, ee),
                                            (0, r.jsx)(s.animated.rect, {
                                                fill: ec,
                                                width: ep,
                                                height: e_,
                                                mask: "url(#".concat(ee, ")"),
                                            }),
                                            (0, r.jsx)(c.b, {
                                                ref: _,
                                                dotRadius: ef.status / 4,
                                                x: 0.15 * ep,
                                                y: 0.5 * e_,
                                                hide: !p,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(
                                        P,
                                        v(
                                            {
                                                size: S,
                                                isMobile: f,
                                                isTyping: p,
                                                className: y.pointerEvents,
                                            },
                                            e,
                                        ),
                                    ),
                                ],
                            }),
                    }),
                    null != z && G(ef, z),
                    null != X &&
                        Z(
                            ef,
                            f,
                            p,
                            {
                                avatarTooltipTitle: X,
                                avatarTooltipText: Q,
                            },
                            q,
                        ),
                ],
            }),
        }),
    );
}
function z(e, t, n, r, i) {
    return null != n && null != t && (!!e || t !== n || (t === h.Skl.ONLINE && r !== i));
}
V.displayName = "AvatarImg";
let q = i.memo(function (e) {
    var { statusColor: t, status: n } = e,
        a = T(e, ["statusColor", "status"]);
    let { isMobile: o = !1, isTyping: s = !1 } = a,
        l = i.useRef(n),
        c = i.useRef(o),
        d = (0, u.vj)(n, t),
        f = i.useRef(d),
        p = i.useRef(!1),
        _ = p.current || z(s, n, l.current, o, c.current);
    return (
        i.useLayoutEffect(() => {
            (p.current = _), (l.current = n), (c.current = o), (f.current = d);
        }, [n, o, d, _]),
        null != n && null != l.current && _
            ? (0, r.jsx)(
                  K,
                  I(v({}, a), {
                      status: n,
                      statusColor: d,
                      fromStatus: l.current,
                      fromIsMobile: c.current,
                      fromColor: f.current,
                  }),
              )
            : (0, r.jsx)(
                  H,
                  I(v({}, a), {
                      status: n,
                      statusColor: d,
                  }),
              )
    );
});
