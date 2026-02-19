"use strict";
n.d(t, { Js: () => H, Rb: () => C, d9: () => k, eu: () => U });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(522160),
    l = n(158954),
    u = n(863610),
    c = n(935154),
    d = n(435371),
    _ = n(659974),
    f = n(573435),
    p = n(427262),
    h = n(652215),
    m = n(398094),
    E = n(778712),
    g = n(985018),
    A = n(920466);
let I = { tension: 1200, friction: 70 };
function T() {
    return document.hasFocus();
}
function S(e) {
    let { size: t, isMobile: n, isTyping: i, ...s } = e,
        a = (0, E.Kj)(t),
        o = a.status * (n && !i ? 1.5 : 1),
        l = a.status * (i ? 2.5 : 1),
        u = i ? (2.5 * a.status - a.status) / 2 : 0,
        c = a.size - a.status - u - a.offset,
        d = a.size - o - a.offset;
    return (0, r.jsx)("rect", { x: c, y: d, width: l, height: o, fill: "transparent", "aria-hidden": !0, ...s });
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return null != t
        ? g.intl.formatToPlainString(g.t["/6mw10"], { label: e, status: (0, p.MU)(t, { isMobile: n, isVR: r }) })
        : e;
}
function v(e, t, n, r) {
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
function N(e, t, n, r) {
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
    if (e === h.clD.ONLINE && n && !i)
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
function C(e, t, n) {
    let { isTyping: r, isMobile: i, isVR: s } = n,
        a = (0, c.i0)(e.status, t, { isTyping: r, isMobile: i, isVR: s }),
        o = (r ? e.size - (a.width / 2 + e.status / 2) : e.size - a.width) - e.offset;
    return { ...a, x: o, y: e.size - a.height - e.offset };
}
function b(e, t) {
    let { size: n, status: r, stroke: i, offset: s } = e,
        { isTyping: a, isMobile: o, isVR: l } = t,
        u = a ? 2.5 * r : r,
        c = (u - r) / 2,
        d = o && !l,
        _ = d ? 1.5 * r : r;
    return {
        avatarCutoutX: n - u + c - i - s,
        avatarCutoutY: n - _ - i - s,
        avatarCutoutWidth: u + 2 * i,
        avatarCutoutHeight: _ + 2 * i,
        avatarCutoutRadius: d ? (_ + 2 * i) * 0.2 : (r + 2 * i) / 2,
    };
}
function R(e, t, n, i) {
    let { isMobile: s, isTyping: a, isVR: o } = i,
        l = C(t, n, { isMobile: s, isTyping: a, isVR: o }),
        u = (0, c.yi)(n, e);
    if (!(s && !o)) {
        let n = l.height / 2 + t.stroke,
            i = l.x + t.status / 2;
        return (0, r.jsx)("circle", { style: { opacity: u }, fill: e, r: n, cx: i, cy: i });
    }
    let d = l.height + 2 * t.stroke,
        _ = l.width + 2 * t.stroke,
        f = l.x - t.stroke,
        p = l.y - t.stroke;
    return (0, r.jsx)("rect", { fill: e, height: d, width: _, style: { opacity: u }, x: f, y: p, rx: t.stroke });
}
let O = {
    "\uD83D\uDD25":
        "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
};
function D(e, t, n, i, s) {
    let a = O[i];
    if (null != a) {
        let i = n / 20;
        return (0, r.jsx)("g", {
            transform: `translate(${e - 1}, ${t - 1}) scale(${i})`,
            children: (0, r.jsx)("path", {
                d: a,
                fill: "black",
                stroke: "black",
                strokeWidth: "10",
                strokeLinejoin: "round",
                strokeLinecap: "round",
            }),
        });
    }
    let o = b(s, { isTyping: !1, isMobile: !1, isVR: !1 });
    return (0, r.jsx)("rect", {
        x: o.avatarCutoutX,
        y: 0 - s.stroke,
        width: o.avatarCutoutWidth,
        height: o.avatarCutoutHeight,
        rx: o.avatarCutoutRadius - 1,
        ry: o.avatarCutoutRadius - 1,
        fill: "black",
    });
}
function L(e, t, n, i, s) {
    let { isMobile: a, isTyping: o, isVR: l } = i,
        u = t.size - t.status - t.offset,
        c = t.offset,
        d = b(t, { isMobile: a, isTyping: o, isVR: l });
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
            null != s && D(u, c, t.status, s, t),
        ],
    });
}
function w(e, t) {
    let n = e.size - e.status - e.offset,
        i = e.offset;
    return (0, r.jsx)("foreignObject", {
        x: n,
        y: i,
        width: e.status,
        height: e.status,
        children: (0, r.jsx)("div", {
            className: A.QP,
            children: (0, r.jsx)(t, { size: "custom", width: e.status, height: e.status, color: "currentColor" }),
        }),
    });
}
function x(e, t, n, i) {
    let { isMobile: s = !1, isTyping: a = !1, isVR: o = !1 } = t,
        { avatarTooltipTitle: l, avatarTooltipText: u } = n,
        c = e.size - e.status - e.offset - e.stroke,
        _ = b(e, { isMobile: s, isTyping: a, isVR: o }),
        f = c,
        p = 0,
        h = _.avatarCutoutWidth,
        m = e.size - (_.avatarCutoutHeight - e.stroke),
        E = (0, r.jsxs)("g", {
            children: [
                (0, r.jsx)("rect", { x: 0, y: 0, width: c, height: e.size, fill: "transparent", className: A.Hs }),
                (0, r.jsx)("rect", { x: f, y: p, width: h, height: m, fill: "transparent", className: A.Hs }),
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
              asset: (0, r.jsx)("span", { role: "img", "aria-label": u, className: A.mh, children: i }),
              children: E,
          });
}
function M(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        s = n && !r && t === h.clD.ONLINE,
        a = (0, E.Kj)(i);
    return {
        ...b(a, { isMobile: s, isTyping: r, isVR: !1 }),
        ...(0, c.v)({ status: t, size: a.status, isMobile: s, isTyping: r, topOffset: 2, leftOffset: 6 }),
    };
}
function P(e) {
    let {
            children: t,
            size: n,
            onClick: i,
            onMouseDown: s,
            onKeyDown: o,
            onContextMenu: u,
            onMouseEnter: c,
            onMouseLeave: d,
            className: _,
            tabIndex: f,
            ariaLabel: p,
            ariaHidden: h,
            status: g,
            isMobile: I = !1,
            isVR: T = !1,
            isTyping: S = !1,
            avatarDecoration: N,
            typingOffset: C,
            specs: b,
        } = e,
        R = { width: (0, E.FT)(n), height: (0, E.FT)(n) },
        O = null == p || h ? void 0 : y(p, g, I, T),
        D = b.size * m.Xq,
        L = v(g, n, I, S, T),
        w =
            null != N &&
            (0, r.jsx)("svg", {
                width: D + C,
                height: D,
                viewBox: `0 0 ${D + C} ${D}`,
                className: A.DX,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: D,
                    height: D,
                    mask: null != L ? `url(#${L})` : void 0,
                    children: (0, r.jsx)("img", { className: A.M, src: N, alt: " ", "aria-hidden": !0 }),
                }),
            });
    return null != i || null != s
        ? (0, r.jsxs)(l.DUT, {
              className: a()(A.iE, A.Wn, _),
              style: R,
              onClick: i,
              tabIndex: f,
              onContextMenu: u,
              onMouseDown: s,
              onKeyDown: o,
              onMouseEnter: c ?? void 0,
              onMouseLeave: d ?? void 0,
              "aria-label": O,
              "aria-hidden": h,
              children: [t, w],
          })
        : (0, r.jsxs)("div", {
              className: a()(A.iE, _),
              style: R,
              onContextMenu: u ?? void 0,
              onMouseEnter: c ?? void 0,
              onMouseLeave: d ?? void 0,
              role: "img",
              "aria-label": O,
              "aria-hidden": h,
              children: [t, w],
          });
}
let k = i.forwardRef((e, t) => {
    let { src: n, isSpeaking: i, className: s, voiceDb: o = -1 / 0, speakingStylesConfig: l } = e,
        u = (0, _.v)({ isSpeaking: i, voiceDb: o, spreadDirection: _.O.INSET_ONLY, maxInnerSpreadRadius: 4, ...l });
    return (0, r.jsxs)(
        "div",
        {
            ref: t,
            className: a()(A.yA, s),
            children: [
                (0, r.jsx)("img", { src: n ?? void 0, alt: " ", className: A.my, "aria-hidden": !0 }),
                i && (0, r.jsx)("div", { className: A.uh, style: u }),
            ],
        },
        n,
    );
});
function U(e) {
    let {
            src: t,
            status: n,
            size: s,
            statusColor: o,
            isMobile: l = !1,
            isVR: _ = !1,
            isTyping: f = !1,
            typingIndicatorRef: m,
            avatarContentRef: g,
            isSpeaking: I = !1,
            voiceDb: T,
            speakingStylesConfig: S,
            statusTooltip: y = !1,
            statusTooltipDelay: v,
            statusBackdropColor: b,
            "aria-hidden": O = !1,
            "aria-label": D,
            imageClassName: M,
            ref: U,
            CutoutIcon: G,
            avatarTooltipAsset: F,
            avatarTooltipText: V,
            avatarTooltipTitle: B,
        } = e,
        H = n !== h.clD.UNKNOWN ? n : null,
        j = (0, E.Kj)(s),
        Y = null != H ? Math.ceil((2.5 * j.status - j.status) / 2) : 0,
        W = j.size + Y,
        K = (0, c.S3)(H, o),
        z = i.useId();
    return (0, r.jsx)(P, {
        ...e,
        ariaLabel: D,
        ariaHidden: O,
        status: H,
        specs: j,
        typingOffset: Y,
        children: (0, r.jsxs)("svg", {
            ref: U,
            width: W,
            height: W,
            viewBox: `0 0 ${W} ${W}`,
            className: a()(A.dK, A.JW),
            "aria-hidden": !0,
            children: [
                null != F && L(z, j, H, { isMobile: l, isTyping: f, isVR: _ }, F),
                (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: j.size,
                    height: j.size,
                    mask: null != F ? `url(#${z})` : `url(#${N(H, s, l, f, _)})`,
                    children: (0, r.jsx)(k, {
                        ref: g,
                        src: t,
                        isSpeaking: I,
                        voiceDb: T,
                        speakingStylesConfig: S,
                        className: M,
                    }),
                }),
                null != H && null != b ? R(b, j, H, { isMobile: l, isTyping: f, isVR: _ }) : null,
                null != H
                    ? (0, r.jsx)(d.m_, {
                          text: y ? (0, p.MU)(H) : null,
                          ariaHidden: !0,
                          position: "top",
                          spacing: 5 + 1.5 * j.stroke,
                          delay: v,
                          children: (0, r.jsxs)("g", {
                              children: [
                                  (0, r.jsx)("rect", {
                                      ...C(j, H, { isMobile: l, isTyping: f, isVR: _ }),
                                      fill: K,
                                      mask: `url(#${(0, c.p8)(H, { isMobile: l, isTyping: f, isVR: _ })})`,
                                      className: A.Hs,
                                  }),
                                  f
                                      ? (0, r.jsx)(u.n, {
                                            ref: m,
                                            dotRadius: j.status / 4,
                                            x: j.size - 1.375 * j.status - j.offset,
                                            y: j.size - j.status / 1.333 - j.offset,
                                        })
                                      : null,
                              ],
                          }),
                      })
                    : null,
                null != G && w(j, G),
                null != B &&
                    x(j, { isMobile: l, isTyping: f, isVR: _ }, { avatarTooltipTitle: B, avatarTooltipText: V }, F),
            ],
        }),
    });
}
function G(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return 5 - (n && !r ? 0 : 0.5 * e) + 1.5 * t;
}
function F(e, t, n) {
    let r = e.status * t,
        i = null != n ? (2.5 * r - r) / 2 : 0,
        s = (e.status - r) / 2,
        a = e.size - r - i - e.offset - s,
        o = e.size - 1.5 * r - e.offset - s,
        l = Math.round((a / t) * 100) / 100,
        u = Math.round((o / t) * 100) / 100;
    return `translate(${l}, ${u})`;
}
function V(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: s,
            isMobile: _ = !1,
            isTyping: f = !1,
            typingIndicatorRef: h,
            isSpeaking: m = !1,
            voiceDb: g,
            speakingStylesConfig: y,
            size: v,
            src: N,
            status: C,
            statusColor: b,
            statusTooltip: O = !1,
            statusTooltipDelay: L,
            statusBackdropColor: U,
            "aria-hidden": V = !1,
            "aria-label": B,
            imageClassName: H,
            pulseStatusIcon: j,
            CutoutIcon: Y,
            avatarTooltipAsset: W,
            avatarTooltipText: K,
            avatarTooltipTitle: z,
        } = e,
        $ = (0, c.S3)(C, b),
        q = i.useId(),
        Z = i.useId(),
        [X] = i.useState(() => ({ fill: s, ...M({ size: v, status: n, isMobile: t, isTyping: !1 }) })),
        Q = i.useMemo(() => ({ fill: $, ...M({ size: v, status: C, isMobile: _, isTyping: f }) }), [$, v, C, _, f]),
        {
            avatarCutoutX: J,
            avatarCutoutY: ee,
            avatarCutoutWidth: et,
            avatarCutoutHeight: en,
            avatarCutoutRadius: er,
            fill: ei,
            ...es
        } = (0, l.zhh)({ config: I, from: X, to: Q }, T() ? "animate-always" : "animate-never"),
        ea = (0, E.FT)(v),
        eo = (0, E.Kj)(v),
        el = 2.5 * eo.status,
        eu = 1.5 * eo.status,
        ec = null != C ? (2.5 * eo.status - eo.status) / 2 : 0,
        ed = eo.size + Math.ceil(ec),
        [e_, ef, ep] = (0, l.zhh)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: j ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            T() ? "animate-always" : "animate-never",
            [j, C],
        );
    return (0, r.jsx)(P, {
        ...e,
        ariaLabel: B,
        ariaHidden: V,
        typingOffset: ec,
        specs: eo,
        children: (0, r.jsxs)("svg", {
            width: ed,
            height: ed,
            viewBox: `0 0 ${ed} ${ed}`,
            className: a()(A.dK, A.JW),
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("mask", {
                    id: q,
                    width: ea,
                    height: ea,
                    children: [
                        (0, r.jsx)("circle", { cx: ea / 2, cy: ea / 2, r: ea / 2, fill: "white" }),
                        (0, r.jsx)(o.animated.rect, {
                            color: "black",
                            x: J,
                            y: ee,
                            width: et,
                            height: en,
                            rx: er,
                            ry: er,
                        }),
                        null != W && D(eo.size - eo.status - eo.offset, eo.offset, eo.status, W, eo),
                    ],
                }),
                (0, r.jsx)("foreignObject", {
                    className: A.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: ea,
                    height: ea,
                    mask: `url(#${q})`,
                    children: (0, r.jsx)(k, {
                        src: N,
                        isSpeaking: m,
                        voiceDb: g,
                        className: H,
                        speakingStylesConfig: y,
                    }),
                }),
                null != U && R(U, eo, C, { isMobile: _, isTyping: f, isVR: !1 }),
                (0, r.jsx)(d.m_, {
                    text: O ? (0, p.MU)(C) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: G(eo.status, eo.stroke, _, f),
                    delay: L,
                    children: (0, r.jsxs)(o.animated.g, {
                        transform: e_.scale.to((e) => `scale(${e}) ${F(eo, e, C)}`),
                        children: [
                            (0, r.jsxs)("svg", {
                                width: el,
                                height: eu,
                                viewBox: `0 0 ${el} ${eu}`,
                                className: O ? A.Oi : void 0,
                                children: [
                                    (0, c.pF)(es, eo.status, Z),
                                    (0, r.jsx)(o.animated.rect, {
                                        fill: ei,
                                        width: el,
                                        height: eu,
                                        mask: `url(#${Z})`,
                                    }),
                                    (0, r.jsx)(u.n, {
                                        ref: h,
                                        dotRadius: eo.status / 4,
                                        x: 0.15 * el,
                                        y: 0.5 * eu,
                                        hide: !f,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(S, { size: v, isMobile: _, isTyping: f, className: A.Hs }),
                        ],
                    }),
                }),
                null != Y && w(eo, Y),
                null != z &&
                    x(eo, { isMobile: _, isTyping: f, isVR: !1 }, { avatarTooltipTitle: z, avatarTooltipText: K }, W),
            ],
        }),
    });
}
function B(e, t, n, r, i) {
    return null != n && null != t && (!!e || t !== n || (t === h.clD.ONLINE && r !== i));
}
k.displayName = "AvatarImg";
let H = i.memo(function (e) {
    let { statusColor: t, status: n, ...s } = e,
        { isMobile: a = !1, isTyping: o = !1, isVR: l = !1 } = s,
        u = i.useRef(n),
        d = i.useRef(a),
        _ = (0, c.S3)(n, t),
        f = i.useRef(_),
        p = i.useRef(!1),
        h = p.current || B(o, n, u.current, a, d.current);
    return (
        i.useLayoutEffect(() => {
            (p.current = h), (u.current = n), (d.current = a), (f.current = _);
        }, [n, a, _, h]),
        !l && null != n && null != u.current && h
            ? (0, r.jsx)(V, {
                  ...s,
                  status: n,
                  statusColor: _,
                  fromStatus: u.current,
                  fromIsMobile: d.current,
                  fromColor: f.current,
              })
            : (0, r.jsx)(U, { ...s, status: n, statusColor: _ })
    );
});
