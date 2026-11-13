var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(120692),
    o = n(939249),
    d = n(866665),
    c = n(717421),
    u = n(264701),
    _ = n(935154),
    E = n(556525),
    A = n(573435),
    f = n(849442),
    h = n(427262),
    I = n(652215);
n(190460);
var p = n(778712),
    m = n(792996),
    g = n(185864);
let T = { tension: 1200, friction: 70 };
function S() {
    return document.hasFocus();
}
function N(e) {
    let { size: t, isMobile: n, isTyping: r, ...a } = e,
        s = (0, p.Kj)(t),
        l = s.status * (n && !r ? 1.5 : 1),
        o = s.status * (r ? 2.5 : 1),
        d = r ? (2.5 * s.status - s.status) / 2 : 0,
        c = s.size - s.status - d - s.offset,
        u = s.size - l - s.offset;
    return (0, i.jsx)("rect", { x: c, y: u, width: o, height: l, fill: "transparent", "aria-hidden": !0, ...a });
}
function C(e, t, n) {
    let { isTyping: i, isMobile: r, isVR: a } = n,
        s = (0, _.i0)(e.status, t, { isTyping: i, isMobile: r, isVR: a }),
        l = (i ? e.size - (s.width / 2 + e.status / 2) : e.size - s.width) - e.offset;
    return { ...s, x: l, y: e.size - s.height - e.offset };
}
function O(e, t, n, r) {
    let { isMobile: a, isTyping: s, isVR: l } = r,
        o = C(t, n, { isMobile: a, isTyping: s, isVR: l }),
        d = (0, _.yi)(n, e),
        c = n === I.clD.ONLINE && l;
    if (!(a || c)) {
        let n = o.height / 2 + t.stroke,
            r = o.x + t.status / 2;
        return (0, i.jsx)("circle", { style: { opacity: d }, fill: e, r: n, cx: r, cy: r });
    }
    let u = o.height + 2 * t.stroke,
        E = o.width + 2 * t.stroke,
        A = o.x - t.stroke,
        f = o.y - t.stroke,
        h = c ? u / 2 : t.stroke;
    return (0, i.jsx)("rect", { fill: e, height: u, width: E, style: { opacity: d }, x: A, y: f, rx: h });
}
function R(e) {
    let { status: t, isMobile: n, isTyping: i, size: r } = e,
        a = n && !i && t === I.clD.ONLINE,
        s = (0, p.Kj)(r);
    return {
        ...(function (e, t) {
            let { size: n, status: i, stroke: r, offset: a } = e,
                { isTyping: s, isMobile: l, isVR: o } = t,
                d = s ? 2.5 * i : i,
                c = l && !o,
                u = c ? 1.5 * i : i;
            return {
                avatarCutoutX: n - d + (d - i) / 2 - r - a,
                avatarCutoutY: n - u - r - a,
                avatarCutoutWidth: d + 2 * r,
                avatarCutoutHeight: u + 2 * r,
                avatarCutoutRadius: c ? (u + 2 * r) * 0.2 : (i + 2 * r) / 2,
            };
        })(s, { isMobile: a, isTyping: i, isVR: !1 }),
        ...(0, _.v)({ status: t, size: s.status, isMobile: a, isTyping: i, topOffset: 2, leftOffset: 6 }),
    };
}
function L(e) {
    let {
            children: t,
            size: n,
            onClick: r,
            onMouseDown: a,
            onKeyDown: l,
            onContextMenu: d,
            onMouseEnter: c,
            onMouseLeave: u,
            className: _,
            tabIndex: E,
            ariaLabel: T,
            ariaHidden: S,
            status: N,
            isMobile: C = !1,
            isVR: O = !1,
            isTyping: R = !1,
            avatarDecoration: L,
            typingOffset: y,
            specs: D,
        } = e,
        b = { width: (0, p.FT)(n), height: (0, p.FT)(n) },
        v =
            null == T || S
                ? void 0
                : (function (e, t) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                      return null != t
                          ? m.intl.formatToPlainString(m.t["/6mw10"], {
                                label: e,
                                status: (0, h.MU)(t, { isMobile: n, isVR: i }),
                            })
                          : e;
                  })(T, N, C, O),
        P = 1.2 * D.size,
        M = (function (e, t, n, i) {
            let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return null;
            if (i)
                switch (t) {
                    case p._3.SIZE_16:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_16;
                    case p._3.SIZE_20:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_20;
                    case p._3.SIZE_24:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_24;
                    case p._3.SIZE_32:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_32;
                    case p._3.SIZE_40:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_40;
                    case p._3.SIZE_44:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_44;
                    case p._3.SIZE_48:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_48;
                    case p._3.SIZE_56:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_56;
                    case p._3.SIZE_72:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_72;
                    case p._3.SIZE_80:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_80;
                    case p._3.SIZE_96:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_96;
                    case p._3.SIZE_120:
                        return A.hW.AVATAR_DECORATION_STATUS_TYPING_120;
                }
            if (e === I.clD.ONLINE && r)
                switch (t) {
                    case p._3.SIZE_16:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_16;
                    case p._3.SIZE_20:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_20;
                    case p._3.SIZE_24:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_24;
                    case p._3.SIZE_32:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_32;
                    case p._3.SIZE_40:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_40;
                    case p._3.SIZE_44:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_44;
                    case p._3.SIZE_48:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_48;
                    case p._3.SIZE_56:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_56;
                    case p._3.SIZE_72:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_72;
                    case p._3.SIZE_80:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_80;
                    case p._3.SIZE_96:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_96;
                    case p._3.SIZE_120:
                        return A.hW.AVATAR_DECORATION_STATUS_VR_120;
                }
            if (n && !r)
                switch (t) {
                    case p._3.SIZE_16:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_16;
                    case p._3.SIZE_20:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_20;
                    case p._3.SIZE_24:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_24;
                    case p._3.SIZE_32:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_32;
                    case p._3.SIZE_40:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_40;
                    case p._3.SIZE_44:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_44;
                    case p._3.SIZE_48:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_48;
                    case p._3.SIZE_56:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_56;
                    case p._3.SIZE_72:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_72;
                    case p._3.SIZE_80:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_80;
                    case p._3.SIZE_96:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_96;
                    case p._3.SIZE_120:
                        return A.hW.AVATAR_DECORATION_STATUS_MOBILE_120;
                }
            switch (t) {
                case p._3.SIZE_16:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_16;
                case p._3.SIZE_20:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_20;
                case p._3.SIZE_24:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_24;
                case p._3.SIZE_32:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_32;
                case p._3.SIZE_40:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_40;
                case p._3.SIZE_44:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_44;
                case p._3.SIZE_48:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_48;
                case p._3.SIZE_56:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_56;
                case p._3.SIZE_72:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_72;
                case p._3.SIZE_80:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_80;
                case p._3.SIZE_96:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_96;
                case p._3.SIZE_120:
                    return A.hW.AVATAR_DECORATION_STATUS_ROUND_120;
            }
            return null;
        })(N, n, C, R, O);
    (0, f.HZ)(null != L ? M : null);
    let U =
        null != L &&
        (0, i.jsx)("svg", {
            width: P + y,
            height: P,
            viewBox: `0 0 ${P + y} ${P}`,
            className: g.DX,
            "aria-hidden": !0,
            children: (0, i.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: P,
                height: P,
                mask: null != M ? `url(#${M})` : void 0,
                children: (0, i.jsx)("img", { className: g.M, src: L, alt: " ", "aria-hidden": !0 }),
            }),
        });
    return null != r || null != a
        ? (0, i.jsxs)(o.D, {
              className: s()(g.iE, g.Wn, _),
              style: b,
              onClick: r,
              tabIndex: E,
              onContextMenu: d,
              onMouseDown: a,
              onKeyDown: l,
              onMouseEnter: c ?? void 0,
              onMouseLeave: u ?? void 0,
              "aria-label": v,
              "aria-hidden": S,
              children: [t, U],
          })
        : (0, i.jsxs)("div", {
              className: s()(g.iE, _),
              style: b,
              onContextMenu: d ?? void 0,
              onMouseEnter: c ?? void 0,
              onMouseLeave: u ?? void 0,
              role: "img",
              "aria-label": v,
              "aria-hidden": S,
              children: [t, U],
          });
}
function y(e) {
    let { src: t, voiceStatus: n, className: r, voiceDb: a = -1 / 0, speakingStylesConfig: l, ref: o } = e,
        d = (0, E.v)({ voiceStatus: n, voiceDb: a, spreadDirection: E.O.INSET_ONLY, maxInnerSpreadRadius: 4, ...l });
    return (0, i.jsxs)(
        "div",
        {
            ref: o,
            className: s()(g.yA, r),
            children: [
                (0, i.jsx)("img", { src: t ?? void 0, alt: " ", className: g.my, "aria-hidden": !0 }),
                null != n && (0, i.jsx)("div", { className: g.uh, style: d }),
            ],
        },
        t,
    );
}
function D(e) {
    let {
            src: t,
            status: n,
            size: r,
            statusColor: a,
            isMobile: l = !1,
            isVR: o = !1,
            isTyping: c = !1,
            typingIndicatorRef: E,
            avatarContentRef: m,
            voiceStatus: T,
            voiceDb: S,
            speakingStylesConfig: N,
            statusTooltip: R = !1,
            statusTooltipDelay: D,
            statusBackdropColor: b,
            "aria-hidden": v = !1,
            "aria-label": P,
            imageClassName: M,
            ref: U,
        } = e,
        w = n !== I.clD.UNKNOWN ? n : null,
        G = (0, p.Kj)(r),
        x = null != w ? Math.ceil((2.5 * G.status - G.status) / 2) : 0,
        k = G.size + x,
        F = (0, _.S3)(w, a),
        B = (function (e, t, n, i) {
            let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null == e) return A.hW.AVATAR_DEFAULT;
            if (i)
                switch (t) {
                    case p._3.SIZE_16:
                        return A.hW.AVATAR_STATUS_TYPING_16;
                    case p._3.SIZE_20:
                        return A.hW.AVATAR_STATUS_TYPING_20;
                    case p._3.SIZE_24:
                        return A.hW.AVATAR_STATUS_TYPING_24;
                    case p._3.SIZE_32:
                        return A.hW.AVATAR_STATUS_TYPING_32;
                    case p._3.SIZE_40:
                        return A.hW.AVATAR_STATUS_TYPING_40;
                    case p._3.SIZE_44:
                        return A.hW.AVATAR_STATUS_TYPING_44;
                    case p._3.SIZE_48:
                        return A.hW.AVATAR_STATUS_TYPING_48;
                    case p._3.SIZE_56:
                        return A.hW.AVATAR_STATUS_TYPING_56;
                    case p._3.SIZE_72:
                        return A.hW.AVATAR_STATUS_TYPING_72;
                    case p._3.SIZE_80:
                        return A.hW.AVATAR_STATUS_TYPING_80;
                    case p._3.SIZE_96:
                        return A.hW.AVATAR_STATUS_TYPING_96;
                    case p._3.SIZE_120:
                        return A.hW.AVATAR_STATUS_TYPING_120;
                }
            if (e === I.clD.ONLINE && r)
                switch (t) {
                    case p._3.SIZE_16:
                        return A.hW.AVATAR_STATUS_VR_16;
                    case p._3.SIZE_20:
                        return A.hW.AVATAR_STATUS_VR_20;
                    case p._3.SIZE_24:
                        return A.hW.AVATAR_STATUS_VR_24;
                    case p._3.SIZE_32:
                        return A.hW.AVATAR_STATUS_VR_32;
                    case p._3.SIZE_40:
                        return A.hW.AVATAR_STATUS_VR_40;
                    case p._3.SIZE_44:
                        return A.hW.AVATAR_STATUS_VR_44;
                    case p._3.SIZE_48:
                        return A.hW.AVATAR_STATUS_VR_48;
                    case p._3.SIZE_56:
                        return A.hW.AVATAR_STATUS_VR_56;
                    case p._3.SIZE_72:
                        return A.hW.AVATAR_STATUS_VR_72;
                    case p._3.SIZE_80:
                        return A.hW.AVATAR_STATUS_VR_80;
                    case p._3.SIZE_96:
                        return A.hW.AVATAR_STATUS_VR_96;
                    case p._3.SIZE_120:
                        return A.hW.AVATAR_STATUS_VR_120;
                }
            if (e === I.clD.ONLINE && n && !r)
                switch (t) {
                    case p._3.SIZE_16:
                        return A.hW.AVATAR_STATUS_MOBILE_16;
                    case p._3.SIZE_20:
                        return A.hW.AVATAR_STATUS_MOBILE_20;
                    case p._3.SIZE_24:
                        return A.hW.AVATAR_STATUS_MOBILE_24;
                    case p._3.SIZE_32:
                        return A.hW.AVATAR_STATUS_MOBILE_32;
                    case p._3.SIZE_40:
                        return A.hW.AVATAR_STATUS_MOBILE_40;
                    case p._3.SIZE_44:
                        return A.hW.AVATAR_STATUS_MOBILE_44;
                    case p._3.SIZE_48:
                        return A.hW.AVATAR_STATUS_MOBILE_48;
                    case p._3.SIZE_56:
                        return A.hW.AVATAR_STATUS_MOBILE_56;
                    case p._3.SIZE_72:
                        return A.hW.AVATAR_STATUS_MOBILE_72;
                    case p._3.SIZE_80:
                        return A.hW.AVATAR_STATUS_MOBILE_80;
                    case p._3.SIZE_96:
                        return A.hW.AVATAR_STATUS_MOBILE_96;
                    case p._3.SIZE_120:
                        return A.hW.AVATAR_STATUS_MOBILE_120;
                }
            switch (t) {
                case p._3.SIZE_16:
                    return A.hW.AVATAR_STATUS_ROUND_16;
                case p._3.SIZE_20:
                    return A.hW.AVATAR_STATUS_ROUND_20;
                case p._3.SIZE_24:
                    return A.hW.AVATAR_STATUS_ROUND_24;
                case p._3.SIZE_32:
                    return A.hW.AVATAR_STATUS_ROUND_32;
                case p._3.SIZE_40:
                    return A.hW.AVATAR_STATUS_ROUND_40;
                case p._3.SIZE_44:
                    return A.hW.AVATAR_STATUS_ROUND_44;
                case p._3.SIZE_48:
                    return A.hW.AVATAR_STATUS_ROUND_48;
                case p._3.SIZE_56:
                    return A.hW.AVATAR_STATUS_ROUND_56;
                case p._3.SIZE_72:
                    return A.hW.AVATAR_STATUS_ROUND_72;
                case p._3.SIZE_80:
                    return A.hW.AVATAR_STATUS_ROUND_80;
                case p._3.SIZE_96:
                    return A.hW.AVATAR_STATUS_ROUND_96;
                case p._3.SIZE_120:
                    return A.hW.AVATAR_STATUS_ROUND_120;
            }
            throw Error(`getMaskId(): Unsupported type, size: ${t}, status: ${e}, isMobile: ${n ? "true" : "false"}`);
        })(w, r, l, c, o),
        V = null != w ? (0, _.p8)(w, { isMobile: l, isTyping: c, isVR: o }) : null;
    return (
        (0, f.HZ)(B),
        (0, f.HZ)(V),
        (0, i.jsx)(L, {
            ...e,
            ariaLabel: P,
            ariaHidden: v,
            status: w,
            specs: G,
            typingOffset: x,
            children: (0, i.jsxs)("svg", {
                ref: U,
                width: k,
                height: k,
                viewBox: `0 0 ${k} ${k}`,
                className: s()(g.dK, g.JW),
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: G.size,
                        height: G.size,
                        mask: `url(#${B})`,
                        children: (0, i.jsx)(y, {
                            ref: m,
                            src: t,
                            voiceStatus: T,
                            voiceDb: S,
                            speakingStylesConfig: N,
                            className: M,
                        }),
                    }),
                    null != w && null != b ? O(b, G, w, { isMobile: l, isTyping: c, isVR: o }) : null,
                    null != w
                        ? (0, i.jsx)(d.m, {
                              text: R ? (0, h.MU)(w) : null,
                              ariaHidden: !0,
                              position: "top",
                              spacing: 5 + 1.5 * G.stroke,
                              delay: D,
                              children: (0, i.jsxs)("g", {
                                  children: [
                                      (0, i.jsx)("rect", {
                                          ...C(G, w, { isMobile: l, isTyping: c, isVR: o }),
                                          fill: F,
                                          mask: `url(#${(0, _.p8)(w, { isMobile: l, isTyping: c, isVR: o })})`,
                                          className: g.Hs,
                                      }),
                                      c
                                          ? (0, i.jsx)(u.C, {
                                                ref: E,
                                                location: "Avatar",
                                                dotRadius: G.status / 4,
                                                x: G.size - 1.375 * G.status - G.offset,
                                                y: G.size - G.status / 1.333 - G.offset,
                                            })
                                          : null,
                                  ],
                              }),
                          })
                        : null,
                ],
            }),
        })
    );
}
function b(e) {
    let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: a,
            isMobile: o = !1,
            isTyping: E = !1,
            typingIndicatorRef: A,
            voiceStatus: f,
            voiceDb: I,
            speakingStylesConfig: m,
            size: C,
            src: D,
            status: b,
            statusColor: v,
            statusTooltip: P = !1,
            statusTooltipDelay: M,
            statusBackdropColor: U,
            "aria-hidden": w = !1,
            "aria-label": G,
            imageClassName: x,
            pulseStatusIcon: k,
        } = e,
        F = (0, _.S3)(b, v),
        B = r.useId(),
        V = r.useId(),
        [H] = r.useState(() => ({ fill: a, ...R({ size: C, status: n, isMobile: t, isTyping: !1 }) })),
        j = r.useMemo(() => ({ fill: F, ...R({ size: C, status: b, isMobile: o, isTyping: E }) }), [F, C, b, o, E]),
        {
            avatarCutoutX: W,
            avatarCutoutY: Y,
            avatarCutoutWidth: K,
            avatarCutoutHeight: $,
            avatarCutoutRadius: X,
            fill: z,
            ...q
        } = (0, c.z)({ config: T, from: H, to: j }, S() ? "animate-always" : "animate-never"),
        Q = (0, p.FT)(C),
        J = (0, p.Kj)(C),
        Z = 2.5 * J.status,
        ee = 1.5 * J.status,
        et = null != b ? (2.5 * J.status - J.status) / 2 : 0,
        en = J.size + Math.ceil(et),
        [ei, er, ea] = (0, c.z)(
            {
                config: { tension: 450, friction: 20, clamp: !0 },
                from: { scale: 1 },
                to: k ? [{ scale: 0.8 }, { scale: 1.1 }, { scale: 1 }] : [],
            },
            S() ? "animate-always" : "animate-never",
            [k, b],
        );
    return (0, i.jsx)(L, {
        ...e,
        ariaLabel: G,
        ariaHidden: w,
        typingOffset: et,
        specs: J,
        children: (0, i.jsxs)("svg", {
            width: en,
            height: en,
            viewBox: `0 0 ${en} ${en}`,
            className: s()(g.dK, g.JW),
            "aria-hidden": !0,
            children: [
                (0, i.jsxs)("mask", {
                    id: B,
                    width: Q,
                    height: Q,
                    children: [
                        (0, i.jsx)("circle", { cx: Q / 2, cy: Q / 2, r: Q / 2, fill: "white" }),
                        (0, i.jsx)(l.animated.rect, { color: "black", x: W, y: Y, width: K, height: $, rx: X, ry: X }),
                    ],
                }),
                (0, i.jsx)("foreignObject", {
                    className: g.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: Q,
                    height: Q,
                    mask: `url(#${B})`,
                    children: (0, i.jsx)(y, {
                        src: D,
                        voiceStatus: f,
                        voiceDb: I,
                        className: x,
                        speakingStylesConfig: m,
                    }),
                }),
                null != U && O(U, J, b, { isMobile: o, isTyping: E, isVR: !1 }),
                (0, i.jsx)(d.m, {
                    text: P ? (0, h.MU)(b) : null,
                    ariaHidden: !0,
                    position: "top",
                    spacing: (function (e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return 5 - (n && !i ? 0 : 0.5 * e) + 1.5 * t;
                    })(J.status, J.stroke, o, E),
                    delay: M,
                    children: (0, i.jsxs)(l.animated.g, {
                        transform: ei.scale.to((e) => {
                            let t, n, i, r, a, s;
                            return `scale(${e}) ${((t = J.status * e), (n = (J.status - t) / 2), (i = J.size - t - (null != b ? (2.5 * t - t) / 2 : 0) - J.offset - n), (r = J.size - 1.5 * t - J.offset - n), (a = Math.round((i / e) * 100) / 100), (s = Math.round((r / e) * 100) / 100), `translate(${a}, ${s})`)}`;
                        }),
                        children: [
                            (0, i.jsxs)("svg", {
                                width: Z,
                                height: ee,
                                viewBox: `0 0 ${Z} ${ee}`,
                                className: P ? g.Oi : void 0,
                                children: [
                                    (0, _.pF)(q, J.status, V),
                                    (0, i.jsx)(l.animated.rect, { fill: z, width: Z, height: ee, mask: `url(#${V})` }),
                                    (0, i.jsx)(u.C, {
                                        ref: A,
                                        location: "Avatar",
                                        dotRadius: J.status / 4,
                                        x: 0.15 * Z,
                                        y: 0.5 * ee,
                                        hide: !E,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(N, { size: C, isMobile: o, isTyping: E, className: g.Hs }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
y.displayName = "AvatarImg";
let v = r.memo(function (e) {
    var t, n;
    let { statusColor: a, status: s, ...l } = e,
        { isMobile: o = !1, isTyping: d = !1, isVR: c = !1 } = l,
        u = r.useRef(s),
        E = r.useRef(o),
        A = (0, _.S3)(s, a),
        f = r.useRef(A),
        h = r.useRef(!1),
        p =
            h.current ||
            ((t = u.current),
            (n = E.current),
            null != t && null != s && (!!d || s !== t || (s === I.clD.ONLINE && o !== n)));
    return (
        r.useLayoutEffect(() => {
            ((h.current = p), (u.current = s), (E.current = o), (f.current = A));
        }, [s, o, A, p]),
        !c && null != s && null != u.current && p
            ? (0, i.jsx)(b, {
                  ...l,
                  status: s,
                  statusColor: A,
                  fromStatus: u.current,
                  fromIsMobile: E.current,
                  fromColor: f.current,
              })
            : (0, i.jsx)(D, { ...l, status: s, statusColor: A })
    );
});
n.d(t, {}, { Js: v, Rb: C, d9: y, eu: D });
