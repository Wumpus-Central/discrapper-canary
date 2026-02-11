"use strict";
n.d(t, { Js: () => H, Rb: () => N, d9: () => U, eu: () => G });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(158954),
    u = n(863610),
    c = n(935154),
    d = n(435371),
    _ = n(659974),
    f = n(573435),
    h = n(427262),
    p = n(652215),
    g = n(398094),
    E = n(778712),
    A = n(985018),
    I = n(595300);
let T = { tension: 1200, friction: 70 };
function y() {
    return document.hasFocus();
}
function S(e) {
    let { size: t, isMobile: n, isTyping: i, ...a } = e,
        s = (0, E.Kj)(t),
        o = s.status * (n && !i ? 1.5 : 1),
        l = s.status * (i ? 2.5 : 1),
        u = i ? (2.5 * s.status - s.status) / 2 : 0,
        c = s.size - s.status - u - s.offset,
        d = s.size - o - s.offset;
    return (0, r.jsx)("rect", { x: c, y: d, width: l, height: o, fill: "transparent", "aria-hidden": !0, ...a });
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t ? A.intl.formatToPlainString(A.t["/6mw10"], { label: e, status: (0, h.MU)(t, n) }) : e;
}
function C(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e) return null;
    if (r)
        switch (t) {
            case E._3.SIZE_16:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_16;
            case E._3.SIZE_20:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_20;
            case E._3.SIZE_24:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_24;
            case E._3.SIZE_32:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_32;
            case E._3.SIZE_40:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_40;
            case E._3.SIZE_44:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_44;
            case E._3.SIZE_48:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_48;
            case E._3.SIZE_56:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_56;
            case E._3.SIZE_72:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_72;
            case E._3.SIZE_80:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_80;
            case E._3.SIZE_96:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_96;
            case E._3.SIZE_120:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_120;
        }
    if (n && !i)
        switch (t) {
            case E._3.SIZE_16:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_16;
            case E._3.SIZE_20:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_20;
            case E._3.SIZE_24:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_24;
            case E._3.SIZE_32:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_32;
            case E._3.SIZE_40:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_40;
            case E._3.SIZE_44:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_44;
            case E._3.SIZE_48:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_48;
            case E._3.SIZE_56:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_56;
            case E._3.SIZE_72:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_72;
            case E._3.SIZE_80:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_80;
            case E._3.SIZE_96:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_96;
            case E._3.SIZE_120:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_120;
        }
    switch (t) {
        case E._3.SIZE_16:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_16;
        case E._3.SIZE_20:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_20;
        case E._3.SIZE_24:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_24;
        case E._3.SIZE_32:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_32;
        case E._3.SIZE_40:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_40;
        case E._3.SIZE_44:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_44;
        case E._3.SIZE_48:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_48;
        case E._3.SIZE_56:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_56;
        case E._3.SIZE_72:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_72;
        case E._3.SIZE_80:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_80;
        case E._3.SIZE_96:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_96;
        case E._3.SIZE_120:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_120;
    }
    return null;
}
function b(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e) return f.hW.AVATAR_DEFAULT;
    if (r)
        switch (t) {
            case E._3.SIZE_16:
                return f.hW.AVATAR_STATUS_TYPING_16;
            case E._3.SIZE_20:
                return f.hW.AVATAR_STATUS_TYPING_20;
            case E._3.SIZE_24:
                return f.hW.AVATAR_STATUS_TYPING_24;
            case E._3.SIZE_32:
                return f.hW.AVATAR_STATUS_TYPING_32;
            case E._3.SIZE_40:
                return f.hW.AVATAR_STATUS_TYPING_40;
            case E._3.SIZE_44:
                return f.hW.AVATAR_STATUS_TYPING_44;
            case E._3.SIZE_48:
                return f.hW.AVATAR_STATUS_TYPING_48;
            case E._3.SIZE_56:
                return f.hW.AVATAR_STATUS_TYPING_56;
            case E._3.SIZE_72:
                return f.hW.AVATAR_STATUS_TYPING_72;
            case E._3.SIZE_80:
                return f.hW.AVATAR_STATUS_TYPING_80;
            case E._3.SIZE_96:
                return f.hW.AVATAR_STATUS_TYPING_96;
            case E._3.SIZE_120:
                return f.hW.AVATAR_STATUS_TYPING_120;
        }
    if (e === p.clD.ONLINE && n && !i)
        switch (t) {
            case E._3.SIZE_16:
                return f.hW.AVATAR_STATUS_MOBILE_16;
            case E._3.SIZE_20:
                return f.hW.AVATAR_STATUS_MOBILE_20;
            case E._3.SIZE_24:
                return f.hW.AVATAR_STATUS_MOBILE_24;
            case E._3.SIZE_32:
                return f.hW.AVATAR_STATUS_MOBILE_32;
            case E._3.SIZE_40:
                return f.hW.AVATAR_STATUS_MOBILE_40;
            case E._3.SIZE_44:
                return f.hW.AVATAR_STATUS_MOBILE_44;
            case E._3.SIZE_48:
                return f.hW.AVATAR_STATUS_MOBILE_48;
            case E._3.SIZE_56:
                return f.hW.AVATAR_STATUS_MOBILE_56;
            case E._3.SIZE_72:
                return f.hW.AVATAR_STATUS_MOBILE_72;
            case E._3.SIZE_80:
                return f.hW.AVATAR_STATUS_MOBILE_80;
            case E._3.SIZE_96:
                return f.hW.AVATAR_STATUS_MOBILE_96;
            case E._3.SIZE_120:
                return f.hW.AVATAR_STATUS_MOBILE_120;
        }
    switch (t) {
        case E._3.SIZE_16:
            return f.hW.AVATAR_STATUS_ROUND_16;
        case E._3.SIZE_20:
            return f.hW.AVATAR_STATUS_ROUND_20;
        case E._3.SIZE_24:
            return f.hW.AVATAR_STATUS_ROUND_24;
        case E._3.SIZE_32:
            return f.hW.AVATAR_STATUS_ROUND_32;
        case E._3.SIZE_40:
            return f.hW.AVATAR_STATUS_ROUND_40;
        case E._3.SIZE_44:
            return f.hW.AVATAR_STATUS_ROUND_44;
        case E._3.SIZE_48:
            return f.hW.AVATAR_STATUS_ROUND_48;
        case E._3.SIZE_56:
            return f.hW.AVATAR_STATUS_ROUND_56;
        case E._3.SIZE_72:
            return f.hW.AVATAR_STATUS_ROUND_72;
        case E._3.SIZE_80:
            return f.hW.AVATAR_STATUS_ROUND_80;
        case E._3.SIZE_96:
            return f.hW.AVATAR_STATUS_ROUND_96;
        case E._3.SIZE_120:
            return f.hW.AVATAR_STATUS_ROUND_120;
    }
    throw Error(`getMaskId(): Unsupported type, size: ${t}, status: ${e}, isMobile: ${n ? "true" : "false"}`);
}
function N(e, t, n) {
    let { isTyping: r, isMobile: i, isVR: a } = n,
        s = (0, c.i0)(e.status, t, { isTyping: r, isMobile: i, isVR: a }),
        o = (r ? e.size - (s.width / 2 + e.status / 2) : e.size - s.width) - e.offset;
    return { ...s, x: o, y: e.size - s.height - e.offset };
}
function R(e, t) {
    let { size: n, status: r, stroke: i, offset: a } = e,
        { isTyping: s, isMobile: o, isVR: l } = t,
        u = s ? 2.5 * r : r,
        c = (u - r) / 2,
        d = o && !l,
        _ = d ? 1.5 * r : r;
    return {
        avatarCutoutX: n - u + c - i - a,
        avatarCutoutY: n - _ - i - a,
        avatarCutoutWidth: u + 2 * i,
        avatarCutoutHeight: _ + 2 * i,
        avatarCutoutRadius: d ? (_ + 2 * i) * 0.2 : (r + 2 * i) / 2,
    };
}
function O(e, t, n, i) {
    let { isMobile: a, isTyping: s, isVR: o } = i,
        l = N(t, n, { isMobile: a, isTyping: s, isVR: o }),
        u = (0, c.yi)(n, e);
    if (!(a && !o)) {
        let n = l.height / 2 + t.stroke,
            i = l.x + t.status / 2;
        return (0, r.jsx)("circle", { style: { opacity: u }, fill: e, r: n, cx: i, cy: i });
    }
    let d = l.height + 2 * t.stroke,
        _ = l.width + 2 * t.stroke,
        f = l.x - t.stroke,
        h = l.y - t.stroke;
    return (0, r.jsx)("rect", { fill: e, height: d, width: _, style: { opacity: u }, x: f, y: h, rx: t.stroke });
}
let D = {
    "\uD83D\uDD25":
        "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
};
function L(e, t, n, i, a) {
    let s = D[i];
    if (null != s) {
        let i = n / 20;
        return (0, r.jsx)("g", {
            transform: `translate(${e - 1}, ${t - 1}) scale(${i})`,
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
    let o = R(a, { isTyping: !1, isMobile: !1, isVR: !1 });
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
function w(e, t, n, i, a) {
    let { isMobile: s, isTyping: o, isVR: l } = i,
        u = t.size - t.status - t.offset,
        c = t.offset,
        d = R(t, { isMobile: s, isTyping: o, isVR: l });
    return (0, r.jsxs)("mask", {
        id: e,
        width: t.size,
        height: t.size,
        children: [
            (0, r.jsx)("circle", { cx: t.size / 2, cy: t.size / 2, r: t.size / 2, fill: "white" }),
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
            null != a && L(u, c, t.status, a, t),
        ],
    });
}
function x(e, t) {
    let n = e.size - e.status - e.offset,
        i = e.offset;
    return (0, r.jsx)("foreignObject", {
        x: n,
        y: i,
        width: e.status,
        height: e.status,
        children: (0, r.jsx)("div", {
            className: I.QP,
            children: (0, r.jsx)(t, { size: "custom", width: e.status, height: e.status, color: "currentColor" }),
        }),
    });
}
function P(e, t, n, i) {
    let { isMobile: a = !1, isTyping: s = !1, isVR: o = !1 } = t,
        { avatarTooltipTitle: l, avatarTooltipText: u } = n,
        c = e.size - e.status - e.offset - e.stroke,
        _ = R(e, { isMobile: a, isTyping: s, isVR: o }),
        f = c,
        h = 0,
        p = _.avatarCutoutWidth,
        g = e.size - (_.avatarCutoutHeight - e.stroke),
        E = (0, r.jsxs)("g", {
            children: [
                (0, r.jsx)("rect", { x: 0, y: 0, width: c, height: e.size, fill: "transparent", className: I.Hs }),
                (0, r.jsx)("rect", { x: f, y: h, width: p, height: g, fill: "transparent", className: I.Hs }),
            ],
        });
    return null == u
        ? (0, r.jsx)(d.m_, { text: l, align: "center", position: "top", spacing: 12, delay: 0, children: E })
        : (0, r.jsx)(d.un, {
              title: l,
              body: u,
              align: "center",
              position: "top",
              delay: 0,
              asset: (0, r.jsx)("span", { role: "img", "aria-label": u, className: I.mh, children: i }),
              children: E,
          });
}
function M(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        a = n && !r && t === p.clD.ONLINE,
        s = (0, E.Kj)(i);
    return {
        ...R(s, { isMobile: a, isTyping: r, isVR: !1 }),
        ...(0, c.v)({ status: t, size: s.status, isMobile: a, isTyping: r, topOffset: 2, leftOffset: 6 }),
    };
}
function k(e) {
    let {
            children: t,
            size: n,
            onClick: i,
            onMouseDown: a,
            onKeyDown: o,
            onContextMenu: u,
            onMouseEnter: c,
            onMouseLeave: d,
            className: _,
            tabIndex: f,
            ariaLabel: h,
            ariaHidden: p,
            status: A,
            isMobile: T = !1,
            isVR: y = !1,
            isTyping: S = !1,
            avatarDecoration: b,
            typingOffset: N,
            specs: R,
        } = e,
        O = { width: (0, E.FT)(n), height: (0, E.FT)(n) },
        D = null == h || p ? void 0 : v(h, A, T),
        L = R.size * g.Xq,
        w = C(A, n, T, S, y),
        x =
            null != b &&
            (0, r.jsx)("svg", {
                width: L + N,
                height: L,
                viewBox: `0 0 ${L + N} ${L}`,
                className: I.DX,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: L,
                    height: L,
                    mask: null != w ? `url(#${w})` : void 0,
                    children: (0, r.jsx)("img", { className: I.M, src: b, alt: " ", "aria-hidden": !0 }),
                }),
            });
    return null != i || null != a
        ? (0, r.jsxs)(l.DUT, {
              className: s()(I.iE, I.Wn, _),
              style: O,
              onClick: i,
              tabIndex: f,
              onContextMenu: u,
              onMouseDown: a,
              onKeyDown: o,
              onMouseEnter: c ?? void 0,
              onMouseLeave: d ?? void 0,
              "aria-label": D,
              "aria-hidden": p,
              children: [t, x],
          })
        : (0, r.jsxs)("div", {
              className: s()(I.iE, _),
              style: O,
              onContextMenu: u ?? void 0,
              onMouseEnter: c ?? void 0,
              onMouseLeave: d ?? void 0,
              role: "img",
              "aria-label": D,
              "aria-hidden": p,
              children: [t, x],
          });
}
let U = i.forwardRef((e, t) => {
    let { src: n, isSpeaking: i, isLatched: a, className: o, voiceDb: l = -1 / 0, speakingStylesConfig: u } = e,
        c = (0, _.v)({
            isSpeaking: i,
            isLatched: a,
            voiceDb: l,
            spreadDirection: _.O.INSET_ONLY,
            maxInnerSpreadRadius: 4,
            ...u,
        });
    return (0, r.jsxs)(
        "div",
        {
            ref: t,
            className: s()(I.yA, o),
            children: [
                (0, r.jsx)("img", { src: n ?? void 0, alt: " ", className: I.my, "aria-hidden": !0 }),
                (i || a) && (0, r.jsx)("div", { className: I.uh, style: c }),
            ],
        },
        n,
    );
});
function G(e) {
    let {
            src: t,
            status: n,
            size: a,
            statusColor: o,
            isMobile: l = !1,
            isVR: _ = !1,
            isTyping: f = !1,
            typingIndicatorRef: g,
            avatarContentRef: A,
            isSpeaking: T = !1,
            isLatched: y = !1,
            voiceDb: S,
            speakingStylesConfig: v,
            statusTooltip: C = !1,
            statusTooltipDelay: R,
            statusBackdropColor: D,
            "aria-hidden": L = !1,
            "aria-label": M,
            imageClassName: G,
            ref: F,
            CutoutIcon: V,
            avatarTooltipAsset: B,
            avatarTooltipText: j,
            avatarTooltipTitle: H,
        } = e,
        Y = n !== p.clD.UNKNOWN ? n : null,
        W = (0, E.Kj)(a),
        K = null != Y ? Math.ceil((2.5 * W.status - W.status) / 2) : 0,
        $ = W.size + K,
        z = (0, c.S3)(Y, o),
        q = i.useId();
    return (0, r.jsx)(k, {
        ...e,
        ariaLabel: M,
        ariaHidden: L,
        status: Y,
        specs: W,
        typingOffset: K,
        children: (0, r.jsxs)("svg", {
            ref: F,
            width: $,
            height: $,
            viewBox: `0 0 ${$} ${$}`,
            className: s()(I.dK, I.JW),
            "aria-hidden": !0,
            children: [
                null != B && w(q, W, Y, { isMobile: l, isTyping: f, isVR: _ }, B),
                (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: W.size,
                    height: W.size,
                    mask: null != B ? `url(#${q})` : `url(#${b(Y, a, l, f, _)})`,
                    children: (0, r.jsx)(U, {
                        ref: A,
                        src: t,
                        isSpeaking: T,
                        isLatched: y,
                        voiceDb: S,
                        speakingStylesConfig: v,
                        className: G,
                    }),
                }),
                null != Y && null != D ? O(D, W, Y, { isMobile: l, isTyping: f, isVR: _ }) : null,
                null != Y
                    ? (0, r.jsx)(d.m_, {
                          text: C ? (0, h.MU)(Y) : null,
                          ariaHidden: !0,
                          position: "top",
                          spacing: 5 + 1.5 * W.stroke,
                          delay: R,
                          children: (0, r.jsxs)("g", {
                              children: [
                                  (0, r.jsx)("rect", {
                                      ...N(W, Y, { isMobile: l, isTyping: f, isVR: _ }),
                                      fill: z,
                                      mask: `url(#${(0, c.p8)(Y, { isMobile: l, isTyping: f, isVR: _ })})`,
                                      className: I.Hs,
                                  }),
                                  f
                                      ? (0, r.jsx)(u.n, {
                                            ref: g,
                                            dotRadius: W.status / 4,
                                            x: W.size - 1.375 * W.status - W.offset,
                                            y: W.size - W.status / 1.333 - W.offset,
                                        })
                                      : null,
                              ],
                          }),
                      })
                    : null,
                null != V && x(W, V),
                null != H &&
                    P(W, { isMobile: l, isTyping: f, isVR: _ }, { avatarTooltipTitle: H, avatarTooltipText: j }, B),
            ],
        }),
    });
}
function F(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
}
function V(e, t, n) {
    let r = e.status * t,
        i = null != n ? (2.5 * r - r) / 2 : 0,
        a = (e.status - r) / 2,
        s = e.size - r - i - e.offset - a,
        o = e.size - 1.5 * r - e.offset - a,
        l = Math.round((s / t) * 100) / 100,
        u = Math.round((o / t) * 100) / 100;
    return `translate(${l}, ${u})`;
}
function B(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: a,
            isMobile: _ = !1,
            isTyping: f = !1,
            typingIndicatorRef: p,
            isSpeaking: g = !1,
            isLatched: A = !1,
            voiceDb: v,
            speakingStylesConfig: C,
            size: b,
            src: N,
            status: R,
            statusColor: D,
            statusTooltip: w = !1,
            statusTooltipDelay: G,
            statusBackdropColor: B,
            "aria-hidden": j = !1,
            "aria-label": H,
            imageClassName: Y,
            pulseStatusIcon: W,
            CutoutIcon: K,
            avatarTooltipAsset: $,
            avatarTooltipText: z,
            avatarTooltipTitle: q,
        } = e,
        X = (0, c.S3)(R, D),
        Z = i.useId(),
        Q = i.useId(),
        [J] = i.useState(() => ({ fill: a, ...M({ size: b, status: n, isMobile: t, isTyping: !1 }) })),
        ee = i.useMemo(() => ({ fill: X, ...M({ size: b, status: R, isMobile: _, isTyping: f }) }), [X, b, R, _, f]),
        {
            avatarCutoutX: et,
            avatarCutoutY: en,
            avatarCutoutWidth: er,
            avatarCutoutHeight: ei,
            avatarCutoutRadius: ea,
            fill: es,
            ...eo
        } = (0, l.zhh)({ config: T, from: J, to: ee }, y() ? "animate-always" : "animate-never"),
        el = (0, E.FT)(b),
        eu = (0, E.Kj)(b),
        ec = 2.5 * eu.status,
        ed = 1.5 * eu.status,
        e_ = null != R ? (2.5 * eu.status - eu.status) / 2 : 0,
        ef = eu.size + Math.ceil(e_),
        [eh, ep, em] = (0, l.zhh)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: W ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            y() ? "animate-always" : "animate-never",
            [W, R],
        );
    return (0, r.jsx)(k, {
        ...e,
        ariaLabel: H,
        ariaHidden: j,
        typingOffset: e_,
        specs: eu,
        children: (0, r.jsxs)("svg", {
            width: ef,
            height: ef,
            viewBox: `0 0 ${ef} ${ef}`,
            className: s()(I.dK, I.JW),
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("mask", {
                    id: Z,
                    width: el,
                    height: el,
                    children: [
                        (0, r.jsx)("circle", { cx: el / 2, cy: el / 2, r: el / 2, fill: "white" }),
                        (0, r.jsx)(o.animated.rect, {
                            color: "black",
                            x: et,
                            y: en,
                            width: er,
                            height: ei,
                            rx: ea,
                            ry: ea,
                        }),
                        null != $ && L(eu.size - eu.status - eu.offset, eu.offset, eu.status, $, eu),
                    ],
                }),
                (0, r.jsx)("foreignObject", {
                    className: I.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: el,
                    height: el,
                    mask: `url(#${Z})`,
                    children: (0, r.jsx)(U, {
                        src: N,
                        isSpeaking: g,
                        isLatched: A,
                        voiceDb: v,
                        className: Y,
                        speakingStylesConfig: C,
                    }),
                }),
                null != B && O(B, eu, R, { isMobile: _, isTyping: f, isVR: !1 }),
                (0, r.jsx)(d.m_, {
                    text: w ? (0, h.MU)(R) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: F(eu.status, eu.stroke, _, f),
                    delay: G,
                    children: (0, r.jsxs)(o.animated.g, {
                        transform: eh.scale.to((e) => `scale(${e}) ${V(eu, e, R)}`),
                        children: [
                            (0, r.jsxs)("svg", {
                                width: ec,
                                height: ed,
                                viewBox: `0 0 ${ec} ${ed}`,
                                className: w ? I.Oi : void 0,
                                children: [
                                    (0, c.pF)(eo, eu.status, Q),
                                    (0, r.jsx)(o.animated.rect, {
                                        fill: es,
                                        width: ec,
                                        height: ed,
                                        mask: `url(#${Q})`,
                                    }),
                                    (0, r.jsx)(u.n, {
                                        ref: p,
                                        dotRadius: eu.status / 4,
                                        x: 0.15 * ec,
                                        y: 0.5 * ed,
                                        hide: !f,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S, { size: b, isMobile: _, isTyping: f, className: I.Hs }),
                        ],
                    }),
                }),
                null != K && x(eu, K),
                null != q &&
                    P(eu, { isMobile: _, isTyping: f, isVR: !1 }, { avatarTooltipTitle: q, avatarTooltipText: z }, $),
            ],
        }),
    });
}
function j(e, t, n, r, i) {
    return null != n && null != t && (!!e || t !== n || (t === p.clD.ONLINE && r !== i));
}
U.displayName = "AvatarImg";
let H = i.memo(function (e) {
    let { statusColor: t, status: n, ...a } = e,
        { isMobile: s = !1, isTyping: o = !1, isVR: l = !1 } = a,
        u = i.useRef(n),
        d = i.useRef(s),
        _ = (0, c.S3)(n, t),
        f = i.useRef(_),
        h = i.useRef(!1),
        p = h.current || j(o, n, u.current, s, d.current);
    return (
        i.useLayoutEffect(() => {
            (h.current = p), (u.current = n), (d.current = s), (f.current = _);
        }, [n, s, _, p]),
        !l && null != n && null != u.current && p
            ? (0, r.jsx)(B, {
                  ...a,
                  status: n,
                  statusColor: _,
                  fromStatus: u.current,
                  fromIsMobile: d.current,
                  fromColor: f.current,
              })
            : (0, r.jsx)(G, { ...a, status: n, statusColor: _ })
    );
});
