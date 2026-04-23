"use strict";
n.d(t, { C$: () => E, S3: () => p, i0: () => S, nW: () => y, p8: () => T, pF: () => I, v: () => A, yi: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(419354),
    o = n(827734),
    l = n(462887),
    u = n(749401),
    c = n(573435),
    d = n(652215),
    _ = n(778712),
    f = n(107965);
function p(e, t) {
    let n = (function (e) {
        switch (e) {
            case d.clD.ONLINE:
                return o.A.unsafe_rawColors.GREEN_NEW_38;
            case d.clD.IDLE:
                return o.A.unsafe_rawColors.YELLOW_NEW_30;
            case d.clD.DND:
                return o.A.unsafe_rawColors.RED_NEW_46;
            case d.clD.STREAMING:
                return o.A.unsafe_rawColors.PLATFORM_TWITCH;
            case d.clD.INVISIBLE:
            case d.clD.UNKNOWN:
            case d.clD.OFFLINE:
            default:
                return o.A.unsafe_rawColors.NEUTRAL_34;
        }
    })(e)
        .resolve({ saturation: 1 })
        .hex();
    return (0, u.a)(t ?? n) ?? void 0;
}
function h(e, t) {
    return t === _.F_.WHITE && e === d.clD.IDLE ? _.Iq.HIGH : _.Iq.LOW;
}
function E(e) {
    return (0, l.M)(e) ? _.F_.BLACK : _.F_.WHITE;
}
function m(e, t, n, r) {
    return `scale(${t}) translate(${0.5625 * e + r} ${0.75 * e + n})`;
}
function g(e, t, n) {
    return `${0.5625 * e + n}px ${0.75 * e + t}px`;
}
function A(e) {
    let { size: t, status: n, isMobile: r, isTyping: i, topOffset: s = 0, leftOffset: a = 0 } = e,
        o = (s / 8) * t,
        l = (a / 8) * t;
    if (i)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + o,
            bgX: 0,
            bgHeight: t,
            bgWidth: 2.5 * t,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + o,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: m(t, 0, o, l),
            polygonOrigin: g(t, o, l),
            dotY: 0.75 * t + o,
            dotX: 0.5 * t + l,
            dotRadius: 0,
        };
    switch (n) {
        case d.clD.ONLINE:
            if (r)
                return {
                    bgRadius: 1.5 * t * 0.125,
                    bgY: 0,
                    bgX: l,
                    bgHeight: 1.5 * t,
                    bgWidth: t,
                    cutoutX: 0.125 * t + l,
                    cutoutY: 0.25 * t,
                    cutoutWidth: 0.75 * t,
                    cutoutHeight: 0.75 * t,
                    cutoutRadius: 0,
                    polygonScale: m(t, 0, o, l),
                    polygonOrigin: g(t, o, l),
                    dotY: 1.25 * t,
                    dotX: 0.5 * t + l,
                    dotRadius: 0.125 * t,
                };
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + o,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0,
                polygonScale: m(t, 0, o, l),
                polygonOrigin: g(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.clD.IDLE:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: -(0.125 * t) + l,
                cutoutY: 0.125 * t + o,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.75 * t,
                cutoutRadius: 0.375 * t,
                polygonScale: m(t, 0, o, l),
                polygonOrigin: g(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.clD.DND:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.125 * t + l,
                cutoutY: 0.625 * t + o,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.25 * t,
                cutoutRadius: 0.125 * t,
                polygonScale: m(t, 0, o, l),
                polygonOrigin: g(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.clD.STREAMING:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + o,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0.25 * t,
                polygonScale: m(t, 1, o, l),
                polygonOrigin: g(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.clD.INVISIBLE:
        case d.clD.UNKNOWN:
        case d.clD.OFFLINE:
        default:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + o,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.25 * t + l,
                cutoutY: 0.5 * t + o,
                cutoutWidth: 0.5 * t,
                cutoutHeight: 0.5 * t,
                cutoutRadius: 0.25 * t,
                polygonScale: m(t, 0, o, l),
                polygonOrigin: g(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
    }
}
function I(e, t, n) {
    let {
        bgRadius: i,
        bgY: s,
        bgX: o,
        bgHeight: l,
        bgWidth: u,
        cutoutX: c,
        cutoutY: d,
        cutoutWidth: _,
        cutoutHeight: f,
        cutoutRadius: p,
        polygonScale: h,
        polygonOrigin: E,
        dotY: m,
        dotX: g,
        dotRadius: A,
    } = e;
    return (0, r.jsxs)("mask", {
        id: n,
        children: [
            (0, r.jsx)(a.animated.rect, { x: o, y: s, width: u, height: l, rx: i, ry: i, fill: "white" }),
            (0, r.jsx)(a.animated.rect, { x: c, y: d, width: _, height: f, rx: p, ry: p, fill: "black" }),
            (0, r.jsx)(a.animated.polygon, {
                points: `-${0.216506 * t},-${0.25 * t} ${0.216506 * t},0 -${0.216506 * t},${0.25 * t}`,
                fill: "black",
                transform: h,
                style: { transformOrigin: E },
            }),
            (0, r.jsx)(a.animated.circle, { fill: "black", cx: g, cy: m, r: A }),
        ],
    });
}
function T(e, t) {
    let { isMobile: n, isTyping: r, isVR: i } = t;
    if (r) return c.Ay.Masks.STATUS_TYPING;
    switch (e) {
        case d.clD.IDLE:
            return c.Ay.Masks.STATUS_IDLE;
        case d.clD.DND:
            return c.Ay.Masks.STATUS_DND;
        case d.clD.STREAMING:
            return c.Ay.Masks.STATUS_STREAMING;
        case d.clD.INVISIBLE:
        case d.clD.UNKNOWN:
        case d.clD.OFFLINE:
            return c.Ay.Masks.STATUS_OFFLINE;
        case d.clD.ONLINE:
        default:
            if (i) return c.Ay.Masks.STATUS_ONLINE_VR;
            if (n) return c.Ay.Masks.STATUS_ONLINE_MOBILE;
            return c.Ay.Masks.STATUS_ONLINE;
    }
}
function S(e, t, n) {
    let { isMobile: r, isTyping: i, isVR: s } = n;
    return i
        ? { width: 2.5 * e, height: e }
        : t === d.clD.ONLINE && r && !s
          ? { width: e, height: 1.5 * e }
          : { width: e, height: e };
}
function y(e) {
    let { status: t, isMobile: n = !1, isVR: i = !1, size: a = 8, className: o, style: l, color: u } = e,
        _ = t === d.clD.ONLINE && n,
        h = t === d.clD.ONLINE && i,
        E = p(t, u);
    return (0, r.jsx)(c.Ay, {
        mask: T(t, { isMobile: _, isTyping: !1, isVR: h }),
        className: s()(f.d, o),
        style: l,
        ...S(a, t, { isMobile: _, isTyping: !1, isVR: h }),
        children: (0, r.jsx)("div", { style: { backgroundColor: E }, className: f.h }),
    });
}
