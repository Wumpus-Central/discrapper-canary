n.d(t, {
    Js: () => q,
    Rb: () => D,
    d9: () => B,
    eu: () => H,
}),
    n(65821),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(108531),
    l = n(158954),
    c = n(863610),
    u = n(935154),
    d = n(435371),
    f = n(659974),
    p = n(573435),
    _ = n(427262),
    h = n(652215),
    m = n(398094),
    g = n(778712),
    E = n(985018),
    b = n(920466);

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

function A(e, t) {
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
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = I(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let T = {
    tension: 1200,
    friction: 70,
};

function C() {
    return document.hasFocus();
}

function N(e) {
    let { size: t, isMobile: n, isTyping: i } = e,
        a = S(e, ["size", "isMobile", "isTyping"]),
        s = (0, g.Kj)(t),
        o = s.status * (n && !i ? g.jo : 1),
        l = s.status * (i ? g.x : 1),
        c = i ? (s.status * g.x - s.status) / 2 : 0,
        u = s.size - s.status - c - s.offset,
        d = s.size - o - s.offset;
    return (0, r.jsx)(
        "rect",
        O(
            {
                x: u,
                y: d,
                width: l,
                height: o,
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
              status: (0, _.MU)(t, n),
          })
        : e;
}

function w(e, t, n, r) {
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
    if (n)
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
}

function P(e, t, n, r) {
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
    if (e === h.clD.ONLINE && n)
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
        "getMaskId(): Unsupported type, size: "
            .concat(t, ", status: ")
            .concat(e, ", isMobile: ")
            .concat(n ? "true" : "false"),
    );
}

function D(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = (0, u.i0)(e.status, t, n, r),
        a = (r ? e.size - (i.width / 2 + e.status / 2) : e.size - i.width) - e.offset;
    return v(O({}, i), {
        x: a,
        y: e.size - i.height - e.offset,
    });
}

function x(e, t, n) {
    let { size: r, status: i, stroke: a, offset: s } = e,
        o = n ? i * g.x : i,
        l = (o - i) / 2,
        c = t ? i * g.jo : i;
    return {
        avatarCutoutX: r - o + l - a - s,
        avatarCutoutY: r - c - a - s,
        avatarCutoutWidth: o + 2 * a,
        avatarCutoutHeight: c + 2 * a,
        avatarCutoutRadius: t ? (c + 2 * a) * g.hn : (i + 2 * a) / 2,
    };
}

function L(e, t, n, i) {
    let a = D(n, i, t, !1),
        s = (0, u.yi)(i, e);
    if (!t) {
        let t = a.height / 2 + n.stroke,
            i = a.x + n.status / 2;
        return (0, r.jsx)("circle", {
            style: {
                opacity: s,
            },
            fill: e,
            r: t,
            cx: i,
            cy: i,
        });
    }
    let o = a.height + 2 * n.stroke,
        l = a.width + 2 * n.stroke,
        c = a.x - n.stroke,
        d = a.y - n.stroke;
    return (0, r.jsx)("rect", {
        fill: e,
        height: o,
        width: l,
        style: {
            opacity: s,
        },
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
    let s = j[i];
    if (null != s) {
        let i = n / 20;
        return (0, r.jsx)("g", {
            transform: "translate("
                .concat(e - 1, ", ")
                .concat(t - 1, ") scale(")
                .concat(i, ")"),
            children: (0, r.jsx)("path", {
                d: s,
                fill: "black",
                stroke: "black",
                strokeWidth: "10",
                strokeLinejoin: "round",
                strokeLinecap: "round",
            }),
        });
    }
    let o = x(a, !1, !1);
    return (0, r.jsx)("rect", {
        x: o.avatarCutoutX,
        y: 0 - a.stroke,
        width: o.avatarCutoutWidth,
        height: o.avatarCutoutHeight,
        rx: o.avatarCutoutRadius - 1,
        ry: o.avatarCutoutRadius - 1,
        fill: "black",
    });
}

function k(e, t, n, i) {
    let { status: a, isMobile: s, isTyping: o } = n,
        l = t.size - t.status - t.offset,
        c = t.offset,
        u = x(t, s, o);
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
            className: b.QP,
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
        { avatarTooltipTitle: s, avatarTooltipText: o } = i,
        l = e.size - e.status - e.offset - e.stroke,
        c = x(e, t, n),
        u = l,
        f = 0,
        p = c.avatarCutoutWidth,
        _ = e.size - (c.avatarCutoutHeight - e.stroke),
        h = (0, r.jsxs)("g", {
            children: [
                (0, r.jsx)("rect", {
                    x: 0,
                    y: 0,
                    width: l,
                    height: e.size,
                    fill: "transparent",
                    className: b.Hs,
                }),
                (0, r.jsx)("rect", {
                    x: u,
                    y: f,
                    width: p,
                    height: _,
                    fill: "transparent",
                    className: b.Hs,
                }),
            ],
        });
    return null == o
        ? (0, r.jsx)(d.m_, {
              text: s,
              align: "center",
              position: "top",
              spacing: 12,
              delay: 0,
              children: h,
          })
        : (0, r.jsx)(d.un, {
              title: s,
              body: o,
              align: "center",
              position: "top",
              delay: 0,
              asset: (0, r.jsx)("span", {
                  role: "img",
                  "aria-label": o,
                  className: b.mh,
                  children: a,
              }),
              children: h,
          });
}

function V(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        a = n && !r && t === h.clD.ONLINE,
        s = (0, g.Kj)(i);
    return O(
        {},
        x(s, a, r),
        (0, u.v)({
            status: t,
            size: s.status,
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
            onKeyDown: o,
            onContextMenu: c,
            onMouseEnter: u,
            onMouseLeave: d,
            className: f,
            tabIndex: p,
            ariaLabel: _,
            ariaHidden: h,
            status: E,
            isMobile: y = !1,
            isTyping: O = !1,
            avatarDecoration: A,
            typingOffset: v,
            specs: S,
        } = e,
        I = {
            width: (0, g.FT)(n),
            height: (0, g.FT)(n),
        },
        T = null == _ || h ? void 0 : R(_, E, y),
        C = S.size * m.Xq,
        N = w(E, n, y, O),
        P =
            null != A &&
            (0, r.jsx)("svg", {
                width: C + v,
                height: C,
                viewBox: "0 0 ".concat(C + v, " ").concat(C),
                className: b.DX,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: C,
                    height: C,
                    mask: null != N ? "url(#".concat(N, ")") : void 0,
                    children: (0, r.jsx)("img", {
                        className: b.M,
                        src: A,
                        alt: " ",
                        "aria-hidden": !0,
                    }),
                }),
            });
    return null != i || null != a
        ? (0, r.jsxs)(l.DUT, {
              className: s()(b.iE, b.Wn, f),
              style: I,
              onClick: i,
              tabIndex: p,
              onContextMenu: c,
              onMouseDown: a,
              onKeyDown: o,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              "aria-label": T,
              "aria-hidden": h,
              children: [t, P],
          })
        : (0, r.jsxs)("div", {
              className: s()(b.iE, f),
              style: I,
              onContextMenu: null != c ? c : void 0,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              role: "img",
              "aria-label": T,
              "aria-hidden": h,
              children: [t, P],
          });
}
let B = i.forwardRef((e, t) => {
    let { src: n, isSpeaking: i, isLatched: a, className: o, voiceDb: l = -1 / 0, speakingStylesConfig: c } = e,
        u = (0, f.v)(
            O(
                {
                    isSpeaking: i,
                    isLatched: a,
                    voiceDb: l,
                    spreadDirection: f.O.INSET_ONLY,
                    maxInnerSpreadRadius: 4,
                },
                c,
            ),
        );
    return (0, r.jsxs)(
        "div",
        {
            ref: t,
            className: s()(b.yA, o),
            children: [
                (0, r.jsx)("img", {
                    src: null != n ? n : void 0,
                    alt: " ",
                    className: b.my,
                    "aria-hidden": !0,
                }),
                (i || a) &&
                    (0, r.jsx)("div", {
                        className: b.uh,
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
            statusColor: o,
            isMobile: l = !1,
            isTyping: f = !1,
            typingIndicatorRef: p,
            avatarContentRef: m,
            isSpeaking: E = !1,
            isLatched: y = !1,
            voiceDb: A,
            speakingStylesConfig: S,
            statusTooltip: I = !1,
            statusTooltipDelay: T,
            statusBackdropColor: C,
            "aria-hidden": N = !1,
            "aria-label": R,
            imageClassName: w,
            ref: x,
            CutoutIcon: j,
            avatarTooltipAsset: M,
            avatarTooltipText: V,
            avatarTooltipTitle: H,
        } = e,
        Y = n !== h.clD.UNKNOWN ? n : null,
        W = (0, g.Kj)(a),
        K = null != Y ? Math.ceil((W.status * g.x - W.status) / 2) : 0,
        z = W.size + K,
        q = (0, u.S3)(Y, o),
        X = i.useId();
    return (0, r.jsx)(
        F,
        v(O({}, e), {
            ariaLabel: R,
            ariaHidden: N,
            status: Y,
            specs: W,
            typingOffset: K,
            children: (0, r.jsxs)("svg", {
                ref: x,
                width: z,
                height: z,
                viewBox: "0 0 ".concat(z, " ").concat(z),
                className: s()(b.dK, b.JW),
                "aria-hidden": !0,
                children: [
                    null != M &&
                        k(
                            X,
                            W,
                            {
                                status: Y,
                                isMobile: l,
                                isTyping: f,
                            },
                            M,
                        ),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: W.size,
                        height: W.size,
                        mask: null != M ? "url(#".concat(X, ")") : "url(#".concat(P(Y, a, l, f), ")"),
                        children: (0, r.jsx)(B, {
                            ref: m,
                            src: t,
                            isSpeaking: E,
                            isLatched: y,
                            voiceDb: A,
                            speakingStylesConfig: S,
                            className: w,
                        }),
                    }),
                    null != Y && null != C ? L(C, l, W, Y) : null,
                    null != Y
                        ? (0, r.jsx)(d.m_, {
                              text: I ? (0, _.MU)(Y) : null,
                              ariaHidden: !0,
                              position: "top",
                              spacing: 5 + 1.5 * W.stroke,
                              delay: T,
                              children: (0, r.jsxs)("g", {
                                  children: [
                                      (0, r.jsx)(
                                          "rect",
                                          v(O({}, D(W, Y, l, f)), {
                                              fill: q,
                                              mask: "url(#".concat((0, u.p8)(Y, l, f), ")"),
                                              className: b.Hs,
                                          }),
                                      ),
                                      f
                                          ? (0, r.jsx)(c.n, {
                                                ref: p,
                                                dotRadius: W.status / 4,
                                                x: W.size - 1.375 * W.status - W.offset,
                                                y: W.size - W.status / 1.333 - W.offset,
                                            })
                                          : null,
                                  ],
                              }),
                          })
                        : null,
                    null != j && U(W, j),
                    null != H &&
                        G(
                            W,
                            l,
                            f,
                            {
                                avatarTooltipTitle: H,
                                avatarTooltipText: V,
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
        i = null != n ? (r * g.x - r) / 2 : 0,
        a = (e.status - r) / 2,
        s = e.size - r - i - e.offset - a,
        o = e.size - r * g.jo - e.offset - a,
        l = Math.round((s / t) * 100) / 100,
        c = Math.round((o / t) * 100) / 100;
    return "translate(".concat(l, ", ").concat(c, ")");
}

function K(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: a,
            isMobile: f = !1,
            isTyping: p = !1,
            typingIndicatorRef: h,
            isSpeaking: m = !1,
            isLatched: E = !1,
            voiceDb: y,
            speakingStylesConfig: A,
            size: I,
            src: R,
            status: w,
            statusColor: P,
            statusTooltip: D = !1,
            statusTooltipDelay: x,
            statusBackdropColor: j,
            "aria-hidden": k = !1,
            "aria-label": H,
            imageClassName: K,
            pulseStatusIcon: z,
            CutoutIcon: q,
            avatarTooltipAsset: X,
            avatarTooltipText: Z,
            avatarTooltipTitle: Q,
        } = e,
        $ = (0, u.S3)(w, P),
        J = i.useId(),
        ee = i.useId(),
        [et] = i.useState(() =>
            O(
                {
                    fill: a,
                },
                V({
                    size: I,
                    status: n,
                    isMobile: t,
                    isTyping: !1,
                }),
            ),
        ),
        en = i.useMemo(
            () =>
                O(
                    {
                        fill: $,
                    },
                    V({
                        size: I,
                        status: w,
                        isMobile: f,
                        isTyping: p,
                    }),
                ),
            [$, I, w, f, p],
        ),
        er = (0, l.zhh)(
            {
                config: T,
                from: et,
                to: en,
            },
            C() ? "animate-always" : "animate-never",
        ),
        {
            avatarCutoutX: ei,
            avatarCutoutY: ea,
            avatarCutoutWidth: es,
            avatarCutoutHeight: eo,
            avatarCutoutRadius: el,
            fill: ec,
        } = er,
        eu = S(er, [
            "avatarCutoutX",
            "avatarCutoutY",
            "avatarCutoutWidth",
            "avatarCutoutHeight",
            "avatarCutoutRadius",
            "fill",
        ]),
        ed = (0, g.FT)(I),
        ef = (0, g.Kj)(I),
        ep = ef.status * g.x,
        e_ = ef.status * g.jo,
        eh = null != w ? (ef.status * g.x - ef.status) / 2 : 0,
        em = ef.size + Math.ceil(eh),
        [eg, eE, eb] = (0, l.zhh)(
            {
                config: {
                    tension: 450,
                    friction: 20,
                    clamp: !0,
                },
                from: {
                    scale: 1,
                },
                to: z
                    ? [
                          {
                              scale: 0.8,
                          },
                          {
                              scale: 1.1,
                          },
                          {
                              scale: 1,
                          },
                      ]
                    : [],
            },
            C() ? "animate-always" : "animate-never",
            [z, w],
        );
    return (0, r.jsx)(
        F,
        v(O({}, e), {
            ariaLabel: H,
            ariaHidden: k,
            typingOffset: eh,
            specs: ef,
            children: (0, r.jsxs)("svg", {
                width: em,
                height: em,
                viewBox: "0 0 ".concat(em, " ").concat(em),
                className: s()(b.dK, b.JW),
                "aria-hidden": !0,
                children: [
                    (0, r.jsxs)("mask", {
                        id: J,
                        width: ed,
                        height: ed,
                        children: [
                            (0, r.jsx)("circle", {
                                cx: ed / 2,
                                cy: ed / 2,
                                r: ed / 2,
                                fill: "white",
                            }),
                            (0, r.jsx)(o.animated.rect, {
                                color: "black",
                                x: ei,
                                y: ea,
                                width: es,
                                height: eo,
                                rx: el,
                                ry: el,
                            }),
                            null != X && M(ef.size - ef.status - ef.offset, ef.offset, ef.status, X, ef),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        className: b.__invalid_foreignObject,
                        x: 0,
                        y: 0,
                        width: ed,
                        height: ed,
                        mask: "url(#".concat(J, ")"),
                        children: (0, r.jsx)(B, {
                            src: R,
                            isSpeaking: m,
                            isLatched: E,
                            voiceDb: y,
                            className: K,
                            speakingStylesConfig: A,
                        }),
                    }),
                    null != j && L(j, f, ef, w),
                    (0, r.jsx)(d.m_, {
                        text: D ? (0, _.MU)(w) : null,
                        ariaHidden: !0,
                        position: "top",
                        spacing: Y(ef.status, ef.stroke, f, p),
                        delay: x,
                        children: (0, r.jsxs)(o.animated.g, {
                            transform: eg.scale.to((e) => "scale(".concat(e, ") ").concat(W(ef, e, w))),
                            children: [
                                (0, r.jsxs)("svg", {
                                    width: ep,
                                    height: e_,
                                    viewBox: "0 0 ".concat(ep, " ").concat(e_),
                                    className: D ? b.Oi : void 0,
                                    children: [
                                        (0, u.pF)(eu, ef.status, ee),
                                        (0, r.jsx)(o.animated.rect, {
                                            fill: ec,
                                            width: ep,
                                            height: e_,
                                            mask: "url(#".concat(ee, ")"),
                                        }),
                                        (0, r.jsx)(c.n, {
                                            ref: h,
                                            dotRadius: ef.status / 4,
                                            x: 0.15 * ep,
                                            y: 0.5 * e_,
                                            hide: !p,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(N, {
                                    size: I,
                                    isMobile: f,
                                    isTyping: p,
                                    className: b.Hs,
                                }),
                            ],
                        }),
                    }),
                    null != q && U(ef, q),
                    null != Q &&
                        G(
                            ef,
                            f,
                            p,
                            {
                                avatarTooltipTitle: Q,
                                avatarTooltipText: Z,
                            },
                            X,
                        ),
                ],
            }),
        }),
    );
}

function z(e, t, n, r, i) {
    return null != n && null != t && (!!e || t !== n || (t === h.clD.ONLINE && r !== i));
}
B.displayName = "AvatarImg";
let q = i.memo(function (e) {
    let { statusColor: t, status: n } = e,
        a = S(e, ["statusColor", "status"]),
        { isMobile: s = !1, isTyping: o = !1 } = a,
        l = i.useRef(n),
        c = i.useRef(s),
        d = (0, u.S3)(n, t),
        f = i.useRef(d),
        p = i.useRef(!1),
        _ = p.current || z(o, n, l.current, s, c.current);
    return (
        i.useLayoutEffect(() => {
            (p.current = _), (l.current = n), (c.current = s), (f.current = d);
        }, [n, s, d, _]),
        null != n && null != l.current && _
            ? (0, r.jsx)(
                  K,
                  v(O({}, a), {
                      status: n,
                      statusColor: d,
                      fromStatus: l.current,
                      fromIsMobile: c.current,
                      fromColor: f.current,
                  }),
              )
            : (0, r.jsx)(
                  H,
                  v(O({}, a), {
                      status: n,
                      statusColor: d,
                  }),
              )
    );
});
