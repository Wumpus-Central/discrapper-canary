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
    o = n.n(a),
    s = n(353709),
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
    y = n(920466);

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
                b(e, t, n[t]);
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

function A(e, t) {
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = S(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function S(e, t) {
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
        a = I(e, ["size", "isMobile", "isTyping"]),
        o = (0, g.Kj)(t),
        s = o.status * (n && !i ? g.jo : 1),
        l = o.status * (i ? g.x : 1),
        c = i ? (o.status * g.x - o.status) / 2 : 0,
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

function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t
        ? E.intl.formatToPlainString(E.t["/6mw10"], {
              label: e,
              status: (0, _.MU)(t, n),
          })
        : e;
}

function R(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
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
    if (n && !i)
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
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
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
    if (e === h.clD.ONLINE && n && !i)
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
    let { isTyping: r, isMobile: i, isVR: a } = n,
        o = (0, u.i0)(e.status, t, {
            isTyping: r,
            isMobile: i,
            isVR: a,
        }),
        s = (r ? e.size - (o.width / 2 + e.status / 2) : e.size - o.width) - e.offset;
    return A(O({}, o), {
        x: s,
        y: e.size - o.height - e.offset,
    });
}

function L(e, t) {
    let { size: n, status: r, stroke: i, offset: a } = e,
        { isTyping: o, isMobile: s, isVR: l } = t,
        c = o ? r * g.x : r,
        u = (c - r) / 2,
        d = s && !l,
        f = d ? r * g.jo : r;
    return {
        avatarCutoutX: n - c + u - i - a,
        avatarCutoutY: n - f - i - a,
        avatarCutoutWidth: c + 2 * i,
        avatarCutoutHeight: f + 2 * i,
        avatarCutoutRadius: d ? (f + 2 * i) * g.hn : (r + 2 * i) / 2,
    };
}

function x(e, t, n, i) {
    let { isMobile: a, isTyping: o, isVR: s } = i,
        l = D(t, n, {
            isMobile: a,
            isTyping: o,
            isVR: s,
        }),
        c = (0, u.yi)(n, e);
    if (!(a && !s)) {
        let n = l.height / 2 + t.stroke,
            i = l.x + t.status / 2;
        return (0, r.jsx)("circle", {
            style: {
                opacity: c,
            },
            fill: e,
            r: n,
            cx: i,
            cy: i,
        });
    }
    let d = l.height + 2 * t.stroke,
        f = l.width + 2 * t.stroke,
        p = l.x - t.stroke,
        _ = l.y - t.stroke;
    return (0, r.jsx)("rect", {
        fill: e,
        height: d,
        width: f,
        style: {
            opacity: c,
        },
        x: p,
        y: _,
        rx: t.stroke,
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
    let s = L(a, {
        isTyping: !1,
        isMobile: !1,
        isVR: !1,
    });
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

function k(e, t, n, i, a) {
    let { isMobile: o, isTyping: s, isVR: l } = i,
        c = t.size - t.status - t.offset,
        u = t.offset,
        d = L(t, {
            isMobile: o,
            isTyping: s,
            isVR: l,
        });
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
            null != n &&
                (0, r.jsx)("rect", {
                    x: d.avatarCutoutX,
                    y: d.avatarCutoutY,
                    width: d.avatarCutoutWidth,
                    height: d.avatarCutoutHeight,
                    rx: d.avatarCutoutRadius,
                    ry: d.avatarCutoutRadius,
                    fill: "black",
                }),
            null != a && j(c, u, t.status, a, t),
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
            className: y.QP,
            children: (0, r.jsx)(t, {
                size: "custom",
                width: e.status,
                height: e.status,
                color: "currentColor",
            }),
        }),
    });
}

function G(e, t, n, i) {
    let { isMobile: a = !1, isTyping: o = !1, isVR: s = !1 } = t,
        { avatarTooltipTitle: l, avatarTooltipText: c } = n,
        u = e.size - e.status - e.offset - e.stroke,
        f = L(e, {
            isMobile: a,
            isTyping: o,
            isVR: s,
        }),
        p = u,
        _ = 0,
        h = f.avatarCutoutWidth,
        m = e.size - (f.avatarCutoutHeight - e.stroke),
        g = (0, r.jsxs)("g", {
            children: [
                (0, r.jsx)("rect", {
                    x: 0,
                    y: 0,
                    width: u,
                    height: e.size,
                    fill: "transparent",
                    className: y.Hs,
                }),
                (0, r.jsx)("rect", {
                    x: p,
                    y: _,
                    width: h,
                    height: m,
                    fill: "transparent",
                    className: y.Hs,
                }),
            ],
        });
    return null == c
        ? (0, r.jsx)(d.m_, {
              text: l,
              align: "center",
              position: "top",
              spacing: 12,
              delay: 0,
              children: g,
          })
        : (0, r.jsx)(d.un, {
              title: l,
              body: c,
              align: "center",
              position: "top",
              delay: 0,
              asset: (0, r.jsx)("span", {
                  role: "img",
                  "aria-label": c,
                  className: y.mh,
                  children: i,
              }),
              children: g,
          });
}

function V(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        a = n && !r && t === h.clD.ONLINE,
        o = (0, g.Kj)(i);
    return O(
        {},
        L(o, {
            isMobile: a,
            isTyping: r,
            isVR: !1,
        }),
        (0, u.v)({
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
            ariaHidden: h,
            status: E,
            isMobile: b = !1,
            isVR: O = !1,
            isTyping: v = !1,
            avatarDecoration: A,
            typingOffset: I,
            specs: S,
        } = e,
        T = {
            width: (0, g.FT)(n),
            height: (0, g.FT)(n),
        },
        C = null == _ || h ? void 0 : w(_, E, b),
        N = S.size * m.Xq,
        P = R(E, n, b, v, O),
        D =
            null != A &&
            (0, r.jsx)("svg", {
                width: N + I,
                height: N,
                viewBox: "0 0 ".concat(N + I, " ").concat(N),
                className: y.DX,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: N,
                    height: N,
                    mask: null != P ? "url(#".concat(P, ")") : void 0,
                    children: (0, r.jsx)("img", {
                        className: y.M,
                        src: A,
                        alt: " ",
                        "aria-hidden": !0,
                    }),
                }),
            });
    return null != i || null != a
        ? (0, r.jsxs)(l.DUT, {
              className: o()(y.iE, y.Wn, f),
              style: T,
              onClick: i,
              tabIndex: p,
              onContextMenu: c,
              onMouseDown: a,
              onKeyDown: s,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              "aria-label": C,
              "aria-hidden": h,
              children: [t, D],
          })
        : (0, r.jsxs)("div", {
              className: o()(y.iE, f),
              style: T,
              onContextMenu: null != c ? c : void 0,
              onMouseEnter: null != u ? u : void 0,
              onMouseLeave: null != d ? d : void 0,
              role: "img",
              "aria-label": C,
              "aria-hidden": h,
              children: [t, D],
          });
}
let B = i.forwardRef((e, t) => {
    let { src: n, isSpeaking: i, isLatched: a, className: s, voiceDb: l = -1 / 0, speakingStylesConfig: c } = e,
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
            className: o()(y.yA, s),
            children: [
                (0, r.jsx)("img", {
                    src: null != n ? n : void 0,
                    alt: " ",
                    className: y.my,
                    "aria-hidden": !0,
                }),
                (i || a) &&
                    (0, r.jsx)("div", {
                        className: y.uh,
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
            isVR: f = !1,
            isTyping: p = !1,
            typingIndicatorRef: m,
            avatarContentRef: E,
            isSpeaking: b = !1,
            isLatched: v = !1,
            voiceDb: I,
            speakingStylesConfig: S,
            statusTooltip: T = !1,
            statusTooltipDelay: C,
            statusBackdropColor: N,
            "aria-hidden": w = !1,
            "aria-label": R,
            imageClassName: L,
            ref: M,
            CutoutIcon: j,
            avatarTooltipAsset: V,
            avatarTooltipText: H,
            avatarTooltipTitle: Y,
        } = e,
        W = n !== h.clD.UNKNOWN ? n : null,
        K = (0, g.Kj)(a),
        z = null != W ? Math.ceil((K.status * g.x - K.status) / 2) : 0,
        q = K.size + z,
        Z = (0, u.S3)(W, s),
        Q = i.useId();
    return (0, r.jsx)(
        F,
        A(O({}, e), {
            ariaLabel: R,
            ariaHidden: w,
            status: W,
            specs: K,
            typingOffset: z,
            children: (0, r.jsxs)("svg", {
                ref: M,
                width: q,
                height: q,
                viewBox: "0 0 ".concat(q, " ").concat(q),
                className: o()(y.dK, y.JW),
                "aria-hidden": !0,
                children: [
                    null != V &&
                        k(
                            Q,
                            K,
                            W,
                            {
                                isMobile: l,
                                isTyping: p,
                                isVR: f,
                            },
                            V,
                        ),
                    (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: K.size,
                        height: K.size,
                        mask: null != V ? "url(#".concat(Q, ")") : "url(#".concat(P(W, a, l, p, f), ")"),
                        children: (0, r.jsx)(B, {
                            ref: E,
                            src: t,
                            isSpeaking: b,
                            isLatched: v,
                            voiceDb: I,
                            speakingStylesConfig: S,
                            className: L,
                        }),
                    }),
                    null != W && null != N
                        ? x(N, K, W, {
                              isMobile: l,
                              isTyping: p,
                              isVR: f,
                          })
                        : null,
                    null != W
                        ? (0, r.jsx)(d.m_, {
                              text: T ? (0, _.MU)(W) : null,
                              ariaHidden: !0,
                              position: "top",
                              spacing: 5 + 1.5 * K.stroke,
                              delay: C,
                              children: (0, r.jsxs)("g", {
                                  children: [
                                      (0, r.jsx)(
                                          "rect",
                                          A(
                                              O(
                                                  {},
                                                  D(K, W, {
                                                      isMobile: l,
                                                      isTyping: p,
                                                      isVR: f,
                                                  }),
                                              ),
                                              {
                                                  fill: Z,
                                                  mask: "url(#".concat(
                                                      (0, u.p8)(W, {
                                                          isMobile: l,
                                                          isTyping: p,
                                                          isVR: f,
                                                      }),
                                                      ")",
                                                  ),
                                                  className: y.Hs,
                                              },
                                          ),
                                      ),
                                      p
                                          ? (0, r.jsx)(c.n, {
                                                ref: m,
                                                dotRadius: K.status / 4,
                                                x: K.size - 1.375 * K.status - K.offset,
                                                y: K.size - K.status / 1.333 - K.offset,
                                            })
                                          : null,
                                  ],
                              }),
                          })
                        : null,
                    null != j && U(K, j),
                    null != Y &&
                        G(
                            K,
                            {
                                isMobile: l,
                                isTyping: p,
                                isVR: f,
                            },
                            {
                                avatarTooltipTitle: Y,
                                avatarTooltipText: H,
                            },
                            V,
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
        o = e.size - r - i - e.offset - a,
        s = e.size - r * g.jo - e.offset - a,
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
            typingIndicatorRef: h,
            isSpeaking: m = !1,
            isLatched: E = !1,
            voiceDb: b,
            speakingStylesConfig: v,
            size: S,
            src: w,
            status: R,
            statusColor: P,
            statusTooltip: D = !1,
            statusTooltipDelay: L,
            statusBackdropColor: M,
            "aria-hidden": k = !1,
            "aria-label": H,
            imageClassName: K,
            pulseStatusIcon: z,
            CutoutIcon: q,
            avatarTooltipAsset: Z,
            avatarTooltipText: Q,
            avatarTooltipTitle: X,
        } = e,
        J = (0, u.S3)(R, P),
        $ = i.useId(),
        ee = i.useId(),
        [et] = i.useState(() =>
            O(
                {
                    fill: a,
                },
                V({
                    size: S,
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
                        fill: J,
                    },
                    V({
                        size: S,
                        status: R,
                        isMobile: f,
                        isTyping: p,
                    }),
                ),
            [J, S, R, f, p],
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
            avatarCutoutWidth: eo,
            avatarCutoutHeight: es,
            avatarCutoutRadius: el,
            fill: ec,
        } = er,
        eu = I(er, [
            "avatarCutoutX",
            "avatarCutoutY",
            "avatarCutoutWidth",
            "avatarCutoutHeight",
            "avatarCutoutRadius",
            "fill",
        ]),
        ed = (0, g.FT)(S),
        ef = (0, g.Kj)(S),
        ep = ef.status * g.x,
        e_ = ef.status * g.jo,
        eh = null != R ? (ef.status * g.x - ef.status) / 2 : 0,
        em = ef.size + Math.ceil(eh),
        [eg, eE, ey] = (0, l.zhh)(
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
            [z, R],
        );
    return (0, r.jsx)(
        F,
        A(O({}, e), {
            ariaLabel: H,
            ariaHidden: k,
            typingOffset: eh,
            specs: ef,
            children: (0, r.jsxs)("svg", {
                width: em,
                height: em,
                viewBox: "0 0 ".concat(em, " ").concat(em),
                className: o()(y.dK, y.JW),
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
                            null != Z && j(ef.size - ef.status - ef.offset, ef.offset, ef.status, Z, ef),
                        ],
                    }),
                    (0, r.jsx)("foreignObject", {
                        className: y.__invalid_foreignObject,
                        x: 0,
                        y: 0,
                        width: ed,
                        height: ed,
                        mask: "url(#".concat($, ")"),
                        children: (0, r.jsx)(B, {
                            src: w,
                            isSpeaking: m,
                            isLatched: E,
                            voiceDb: b,
                            className: K,
                            speakingStylesConfig: v,
                        }),
                    }),
                    null != M &&
                        x(M, ef, R, {
                            isMobile: f,
                            isTyping: p,
                            isVR: !1,
                        }),
                    (0, r.jsx)(d.m_, {
                        text: D ? (0, _.MU)(R) : null,
                        ariaHidden: !0,
                        position: "top",
                        spacing: Y(ef.status, ef.stroke, f, p),
                        delay: L,
                        children: (0, r.jsxs)(s.animated.g, {
                            transform: eg.scale.to((e) => "scale(".concat(e, ") ").concat(W(ef, e, R))),
                            children: [
                                (0, r.jsxs)("svg", {
                                    width: ep,
                                    height: e_,
                                    viewBox: "0 0 ".concat(ep, " ").concat(e_),
                                    className: D ? y.Oi : void 0,
                                    children: [
                                        (0, u.pF)(eu, ef.status, ee),
                                        (0, r.jsx)(s.animated.rect, {
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
                                    size: S,
                                    isMobile: f,
                                    isTyping: p,
                                    className: y.Hs,
                                }),
                            ],
                        }),
                    }),
                    null != q && U(ef, q),
                    null != X &&
                        G(
                            ef,
                            {
                                isMobile: f,
                                isTyping: p,
                                isVR: !1,
                            },
                            {
                                avatarTooltipTitle: X,
                                avatarTooltipText: Q,
                            },
                            Z,
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
        a = I(e, ["statusColor", "status"]),
        { isMobile: o = !1, isTyping: s = !1, isVR: l = !1 } = a,
        c = i.useRef(n),
        d = i.useRef(o),
        f = (0, u.S3)(n, t),
        p = i.useRef(f),
        _ = i.useRef(!1),
        h = _.current || z(s, n, c.current, o, d.current);
    return (
        i.useLayoutEffect(() => {
            (_.current = h), (c.current = n), (d.current = o), (p.current = f);
        }, [n, o, f, h]),
        !l && null != n && null != c.current && h
            ? (0, r.jsx)(
                  K,
                  A(O({}, a), {
                      status: n,
                      statusColor: f,
                      fromStatus: c.current,
                      fromIsMobile: d.current,
                      fromColor: p.current,
                  }),
              )
            : (0, r.jsx)(
                  H,
                  A(O({}, a), {
                      status: n,
                      statusColor: f,
                  }),
              )
    );
});
