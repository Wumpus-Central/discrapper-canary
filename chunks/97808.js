"use strict";
n.d(t, { Js: () => j, Rb: () => b, d9: () => k, eu: () => U });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(158954),
    u = n(863610),
    c = n(935154),
    d = n(435371),
    _ = n(659974),
    f = n(573435),
    p = n(427262),
    h = n(652215),
    m = n(398094),
    g = n(778712),
    E = n(985018),
    A = n(920466);
let I = { tension: 1200, friction: 70 };
function T() {
    return document.hasFocus();
}
function y(e) {
    let { size: t, isMobile: n, isTyping: i, ...a } = e,
        s = (0, g.Kj)(t),
        o = s.status * (n && !i ? 1.5 : 1),
        l = s.status * (i ? 2.5 : 1),
        u = i ? (2.5 * s.status - s.status) / 2 : 0,
        c = s.size - s.status - u - s.offset,
        d = s.size - o - s.offset;
    return (0, r.jsx)("rect", { x: c, y: d, width: l, height: o, fill: "transparent", "aria-hidden": !0, ...a });
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null != t ? E.intl.formatToPlainString(E.t["/6mw10"], { label: e, status: (0, p.MU)(t, n) }) : e;
}
function v(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e) return null;
    if (r)
        switch (t) {
            case g._3.SIZE_16:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_16;
            case g._3.SIZE_20:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_20;
            case g._3.SIZE_24:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_24;
            case g._3.SIZE_32:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_32;
            case g._3.SIZE_40:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_40;
            case g._3.SIZE_44:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_44;
            case g._3.SIZE_48:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_48;
            case g._3.SIZE_56:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_56;
            case g._3.SIZE_72:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_72;
            case g._3.SIZE_80:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_80;
            case g._3.SIZE_96:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_96;
            case g._3.SIZE_120:
                return f.hW.AVATAR_DECORATION_STATUS_TYPING_120;
        }
    if (n && !i)
        switch (t) {
            case g._3.SIZE_16:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_16;
            case g._3.SIZE_20:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_20;
            case g._3.SIZE_24:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_24;
            case g._3.SIZE_32:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_32;
            case g._3.SIZE_40:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_40;
            case g._3.SIZE_44:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_44;
            case g._3.SIZE_48:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_48;
            case g._3.SIZE_56:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_56;
            case g._3.SIZE_72:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_72;
            case g._3.SIZE_80:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_80;
            case g._3.SIZE_96:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_96;
            case g._3.SIZE_120:
                return f.hW.AVATAR_DECORATION_STATUS_MOBILE_120;
        }
    switch (t) {
        case g._3.SIZE_16:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_16;
        case g._3.SIZE_20:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_20;
        case g._3.SIZE_24:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_24;
        case g._3.SIZE_32:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_32;
        case g._3.SIZE_40:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_40;
        case g._3.SIZE_44:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_44;
        case g._3.SIZE_48:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_48;
        case g._3.SIZE_56:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_56;
        case g._3.SIZE_72:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_72;
        case g._3.SIZE_80:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_80;
        case g._3.SIZE_96:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_96;
        case g._3.SIZE_120:
            return f.hW.AVATAR_DECORATION_STATUS_ROUND_120;
    }
    return null;
}
function C(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (null == e) return f.hW.AVATAR_DEFAULT;
    if (r)
        switch (t) {
            case g._3.SIZE_16:
                return f.hW.AVATAR_STATUS_TYPING_16;
            case g._3.SIZE_20:
                return f.hW.AVATAR_STATUS_TYPING_20;
            case g._3.SIZE_24:
                return f.hW.AVATAR_STATUS_TYPING_24;
            case g._3.SIZE_32:
                return f.hW.AVATAR_STATUS_TYPING_32;
            case g._3.SIZE_40:
                return f.hW.AVATAR_STATUS_TYPING_40;
            case g._3.SIZE_44:
                return f.hW.AVATAR_STATUS_TYPING_44;
            case g._3.SIZE_48:
                return f.hW.AVATAR_STATUS_TYPING_48;
            case g._3.SIZE_56:
                return f.hW.AVATAR_STATUS_TYPING_56;
            case g._3.SIZE_72:
                return f.hW.AVATAR_STATUS_TYPING_72;
            case g._3.SIZE_80:
                return f.hW.AVATAR_STATUS_TYPING_80;
            case g._3.SIZE_96:
                return f.hW.AVATAR_STATUS_TYPING_96;
            case g._3.SIZE_120:
                return f.hW.AVATAR_STATUS_TYPING_120;
        }
    if (e === h.clD.ONLINE && n && !i)
        switch (t) {
            case g._3.SIZE_16:
                return f.hW.AVATAR_STATUS_MOBILE_16;
            case g._3.SIZE_20:
                return f.hW.AVATAR_STATUS_MOBILE_20;
            case g._3.SIZE_24:
                return f.hW.AVATAR_STATUS_MOBILE_24;
            case g._3.SIZE_32:
                return f.hW.AVATAR_STATUS_MOBILE_32;
            case g._3.SIZE_40:
                return f.hW.AVATAR_STATUS_MOBILE_40;
            case g._3.SIZE_44:
                return f.hW.AVATAR_STATUS_MOBILE_44;
            case g._3.SIZE_48:
                return f.hW.AVATAR_STATUS_MOBILE_48;
            case g._3.SIZE_56:
                return f.hW.AVATAR_STATUS_MOBILE_56;
            case g._3.SIZE_72:
                return f.hW.AVATAR_STATUS_MOBILE_72;
            case g._3.SIZE_80:
                return f.hW.AVATAR_STATUS_MOBILE_80;
            case g._3.SIZE_96:
                return f.hW.AVATAR_STATUS_MOBILE_96;
            case g._3.SIZE_120:
                return f.hW.AVATAR_STATUS_MOBILE_120;
        }
    switch (t) {
        case g._3.SIZE_16:
            return f.hW.AVATAR_STATUS_ROUND_16;
        case g._3.SIZE_20:
            return f.hW.AVATAR_STATUS_ROUND_20;
        case g._3.SIZE_24:
            return f.hW.AVATAR_STATUS_ROUND_24;
        case g._3.SIZE_32:
            return f.hW.AVATAR_STATUS_ROUND_32;
        case g._3.SIZE_40:
            return f.hW.AVATAR_STATUS_ROUND_40;
        case g._3.SIZE_44:
            return f.hW.AVATAR_STATUS_ROUND_44;
        case g._3.SIZE_48:
            return f.hW.AVATAR_STATUS_ROUND_48;
        case g._3.SIZE_56:
            return f.hW.AVATAR_STATUS_ROUND_56;
        case g._3.SIZE_72:
            return f.hW.AVATAR_STATUS_ROUND_72;
        case g._3.SIZE_80:
            return f.hW.AVATAR_STATUS_ROUND_80;
        case g._3.SIZE_96:
            return f.hW.AVATAR_STATUS_ROUND_96;
        case g._3.SIZE_120:
            return f.hW.AVATAR_STATUS_ROUND_120;
    }
    throw Error(`getMaskId(): Unsupported type, size: ${t}, status: ${e}, isMobile: ${n ? "true" : "false"}`);
}
function b(e, t, n) {
    let { isTyping: r, isMobile: i, isVR: a } = n,
        s = (0, c.i0)(e.status, t, { isTyping: r, isMobile: i, isVR: a }),
        o = (r ? e.size - (s.width / 2 + e.status / 2) : e.size - s.width) - e.offset;
    return { ...s, x: o, y: e.size - s.height - e.offset };
}
function N(e, t) {
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
function R(e, t, n, i) {
    let { isMobile: a, isTyping: s, isVR: o } = i,
        l = b(t, n, { isMobile: a, isTyping: s, isVR: o }),
        u = (0, c.yi)(n, e);
    if (!(a && !o)) {
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
function D(e, t, n, i, a) {
    let s = O[i];
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
    let o = N(a, { isTyping: !1, isMobile: !1, isVR: !1 });
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
function L(e, t, n, i, a) {
    let { isMobile: s, isTyping: o, isVR: l } = i,
        u = t.size - t.status - t.offset,
        c = t.offset,
        d = N(t, { isMobile: s, isTyping: o, isVR: l });
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
            null != a && D(u, c, t.status, a, t),
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
    let { isMobile: a = !1, isTyping: s = !1, isVR: o = !1 } = t,
        { avatarTooltipTitle: l, avatarTooltipText: u } = n,
        c = e.size - e.status - e.offset - e.stroke,
        _ = N(e, { isMobile: a, isTyping: s, isVR: o }),
        f = c,
        p = 0,
        h = _.avatarCutoutWidth,
        m = e.size - (_.avatarCutoutHeight - e.stroke),
        g = (0, r.jsxs)("g", {
            children: [
                (0, r.jsx)("rect", { x: 0, y: 0, width: c, height: e.size, fill: "transparent", className: A.Hs }),
                (0, r.jsx)("rect", { x: f, y: p, width: h, height: m, fill: "transparent", className: A.Hs }),
            ],
        });
    return null == u
        ? (0, r.jsx)(d.m_, { text: l, align: "center", position: "top", spacing: 12, delay: 0, children: g })
        : (0, r.jsx)(d.un, {
              title: l,
              body: u,
              align: "center",
              position: "top",
              delay: 0,
              asset: (0, r.jsx)("span", { role: "img", "aria-label": u, className: A.mh, children: i }),
              children: g,
          });
}
function P(e) {
    let { status: t, isMobile: n, isTyping: r, size: i } = e,
        a = n && !r && t === h.clD.ONLINE,
        s = (0, g.Kj)(i);
    return {
        ...N(s, { isMobile: a, isTyping: r, isVR: !1 }),
        ...(0, c.v)({ status: t, size: s.status, isMobile: a, isTyping: r, topOffset: 2, leftOffset: 6 }),
    };
}
function M(e) {
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
            ariaLabel: p,
            ariaHidden: h,
            status: E,
            isMobile: I = !1,
            isVR: T = !1,
            isTyping: y = !1,
            avatarDecoration: C,
            typingOffset: b,
            specs: N,
        } = e,
        R = { width: (0, g.FT)(n), height: (0, g.FT)(n) },
        O = null == p || h ? void 0 : S(p, E, I),
        D = N.size * m.Xq,
        L = v(E, n, I, y, T),
        w =
            null != C &&
            (0, r.jsx)("svg", {
                width: D + b,
                height: D,
                viewBox: `0 0 ${D + b} ${D}`,
                className: A.DX,
                "aria-hidden": !0,
                children: (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: D,
                    height: D,
                    mask: null != L ? `url(#${L})` : void 0,
                    children: (0, r.jsx)("img", { className: A.M, src: C, alt: " ", "aria-hidden": !0 }),
                }),
            });
    return null != i || null != a
        ? (0, r.jsxs)(l.DUT, {
              className: s()(A.iE, A.Wn, _),
              style: R,
              onClick: i,
              tabIndex: f,
              onContextMenu: u,
              onMouseDown: a,
              onKeyDown: o,
              onMouseEnter: c ?? void 0,
              onMouseLeave: d ?? void 0,
              "aria-label": O,
              "aria-hidden": h,
              children: [t, w],
          })
        : (0, r.jsxs)("div", {
              className: s()(A.iE, _),
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
            className: s()(A.yA, o),
            children: [
                (0, r.jsx)("img", { src: n ?? void 0, alt: " ", className: A.my, "aria-hidden": !0 }),
                (i || a) && (0, r.jsx)("div", { className: A.uh, style: c }),
            ],
        },
        n,
    );
});
function U(e) {
    let {
            src: t,
            status: n,
            size: a,
            statusColor: o,
            isMobile: l = !1,
            isVR: _ = !1,
            isTyping: f = !1,
            typingIndicatorRef: m,
            avatarContentRef: E,
            isSpeaking: I = !1,
            isLatched: T = !1,
            voiceDb: y,
            speakingStylesConfig: S,
            statusTooltip: v = !1,
            statusTooltipDelay: N,
            statusBackdropColor: O,
            "aria-hidden": D = !1,
            "aria-label": P,
            imageClassName: U,
            ref: G,
            CutoutIcon: V,
            avatarTooltipAsset: F,
            avatarTooltipText: B,
            avatarTooltipTitle: j,
        } = e,
        H = n !== h.clD.UNKNOWN ? n : null,
        Y = (0, g.Kj)(a),
        W = null != H ? Math.ceil((2.5 * Y.status - Y.status) / 2) : 0,
        K = Y.size + W,
        z = (0, c.S3)(H, o),
        $ = i.useId();
    return (0, r.jsx)(M, {
        ...e,
        ariaLabel: P,
        ariaHidden: D,
        status: H,
        specs: Y,
        typingOffset: W,
        children: (0, r.jsxs)("svg", {
            ref: G,
            width: K,
            height: K,
            viewBox: `0 0 ${K} ${K}`,
            className: s()(A.dK, A.JW),
            "aria-hidden": !0,
            children: [
                null != F && L($, Y, H, { isMobile: l, isTyping: f, isVR: _ }, F),
                (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: Y.size,
                    height: Y.size,
                    mask: null != F ? `url(#${$})` : `url(#${C(H, a, l, f, _)})`,
                    children: (0, r.jsx)(k, {
                        ref: E,
                        src: t,
                        isSpeaking: I,
                        isLatched: T,
                        voiceDb: y,
                        speakingStylesConfig: S,
                        className: U,
                    }),
                }),
                null != H && null != O ? R(O, Y, H, { isMobile: l, isTyping: f, isVR: _ }) : null,
                null != H
                    ? (0, r.jsx)(d.m_, {
                          text: v ? (0, p.MU)(H) : null,
                          ariaHidden: !0,
                          position: "top",
                          spacing: 5 + 1.5 * Y.stroke,
                          delay: N,
                          children: (0, r.jsxs)("g", {
                              children: [
                                  (0, r.jsx)("rect", {
                                      ...b(Y, H, { isMobile: l, isTyping: f, isVR: _ }),
                                      fill: z,
                                      mask: `url(#${(0, c.p8)(H, { isMobile: l, isTyping: f, isVR: _ })})`,
                                      className: A.Hs,
                                  }),
                                  f
                                      ? (0, r.jsx)(u.n, {
                                            ref: m,
                                            dotRadius: Y.status / 4,
                                            x: Y.size - 1.375 * Y.status - Y.offset,
                                            y: Y.size - Y.status / 1.333 - Y.offset,
                                        })
                                      : null,
                              ],
                          }),
                      })
                    : null,
                null != V && w(Y, V),
                null != j &&
                    x(Y, { isMobile: l, isTyping: f, isVR: _ }, { avatarTooltipTitle: j, avatarTooltipText: B }, F),
            ],
        }),
    });
}
function G(e, t, n) {
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
function F(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: a,
            isMobile: _ = !1,
            isTyping: f = !1,
            typingIndicatorRef: h,
            isSpeaking: m = !1,
            isLatched: E = !1,
            voiceDb: S,
            speakingStylesConfig: v,
            size: C,
            src: b,
            status: N,
            statusColor: O,
            statusTooltip: L = !1,
            statusTooltipDelay: U,
            statusBackdropColor: F,
            "aria-hidden": B = !1,
            "aria-label": j,
            imageClassName: H,
            pulseStatusIcon: Y,
            CutoutIcon: W,
            avatarTooltipAsset: K,
            avatarTooltipText: z,
            avatarTooltipTitle: $,
        } = e,
        q = (0, c.S3)(N, O),
        Z = i.useId(),
        Q = i.useId(),
        [X] = i.useState(() => ({ fill: a, ...P({ size: C, status: n, isMobile: t, isTyping: !1 }) })),
        J = i.useMemo(() => ({ fill: q, ...P({ size: C, status: N, isMobile: _, isTyping: f }) }), [q, C, N, _, f]),
        {
            avatarCutoutX: ee,
            avatarCutoutY: et,
            avatarCutoutWidth: en,
            avatarCutoutHeight: er,
            avatarCutoutRadius: ei,
            fill: ea,
            ...es
        } = (0, l.zhh)({ config: I, from: X, to: J }, T() ? "animate-always" : "animate-never"),
        eo = (0, g.FT)(C),
        el = (0, g.Kj)(C),
        eu = 2.5 * el.status,
        ec = 1.5 * el.status,
        ed = null != N ? (2.5 * el.status - el.status) / 2 : 0,
        e_ = el.size + Math.ceil(ed),
        [ef, ep, eh] = (0, l.zhh)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: Y ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            T() ? "animate-always" : "animate-never",
            [Y, N],
        );
    return (0, r.jsx)(M, {
        ...e,
        ariaLabel: j,
        ariaHidden: B,
        typingOffset: ed,
        specs: el,
        children: (0, r.jsxs)("svg", {
            width: e_,
            height: e_,
            viewBox: `0 0 ${e_} ${e_}`,
            className: s()(A.dK, A.JW),
            "aria-hidden": !0,
            children: [
                (0, r.jsxs)("mask", {
                    id: Z,
                    width: eo,
                    height: eo,
                    children: [
                        (0, r.jsx)("circle", { cx: eo / 2, cy: eo / 2, r: eo / 2, fill: "white" }),
                        (0, r.jsx)(o.animated.rect, {
                            color: "black",
                            x: ee,
                            y: et,
                            width: en,
                            height: er,
                            rx: ei,
                            ry: ei,
                        }),
                        null != K && D(el.size - el.status - el.offset, el.offset, el.status, K, el),
                    ],
                }),
                (0, r.jsx)("foreignObject", {
                    className: A.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: eo,
                    height: eo,
                    mask: `url(#${Z})`,
                    children: (0, r.jsx)(k, {
                        src: b,
                        isSpeaking: m,
                        isLatched: E,
                        voiceDb: S,
                        className: H,
                        speakingStylesConfig: v,
                    }),
                }),
                null != F && R(F, el, N, { isMobile: _, isTyping: f, isVR: !1 }),
                (0, r.jsx)(d.m_, {
                    text: L ? (0, p.MU)(N) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: G(el.status, el.stroke, _, f),
                    delay: U,
                    children: (0, r.jsxs)(o.animated.g, {
                        transform: ef.scale.to((e) => `scale(${e}) ${V(el, e, N)}`),
                        children: [
                            (0, r.jsxs)("svg", {
                                width: eu,
                                height: ec,
                                viewBox: `0 0 ${eu} ${ec}`,
                                className: L ? A.Oi : void 0,
                                children: [
                                    (0, c.pF)(es, el.status, Q),
                                    (0, r.jsx)(o.animated.rect, {
                                        fill: ea,
                                        width: eu,
                                        height: ec,
                                        mask: `url(#${Q})`,
                                    }),
                                    (0, r.jsx)(u.n, {
                                        ref: h,
                                        dotRadius: el.status / 4,
                                        x: 0.15 * eu,
                                        y: 0.5 * ec,
                                        hide: !f,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(y, { size: C, isMobile: _, isTyping: f, className: A.Hs }),
                        ],
                    }),
                }),
                null != W && w(el, W),
                null != $ &&
                    x(el, { isMobile: _, isTyping: f, isVR: !1 }, { avatarTooltipTitle: $, avatarTooltipText: z }, K),
            ],
        }),
    });
}
function B(e, t, n, r, i) {
    return null != n && null != t && (!!e || t !== n || (t === h.clD.ONLINE && r !== i));
}
k.displayName = "AvatarImg";
let j = i.memo(function (e) {
    let { statusColor: t, status: n, ...a } = e,
        { isMobile: s = !1, isTyping: o = !1, isVR: l = !1 } = a,
        u = i.useRef(n),
        d = i.useRef(s),
        _ = (0, c.S3)(n, t),
        f = i.useRef(_),
        p = i.useRef(!1),
        h = p.current || B(o, n, u.current, s, d.current);
    return (
        i.useLayoutEffect(() => {
            (p.current = h), (u.current = n), (d.current = s), (f.current = _);
        }, [n, s, _, h]),
        !l && null != n && null != u.current && h
            ? (0, r.jsx)(F, {
                  ...a,
                  status: n,
                  statusColor: _,
                  fromStatus: u.current,
                  fromIsMobile: d.current,
                  fromColor: f.current,
              })
            : (0, r.jsx)(U, { ...a, status: n, statusColor: _ })
    );
});
