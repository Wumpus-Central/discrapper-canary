"use strict";
n.d(t, { C$: () => p, S3: () => E, i0: () => S, nW: () => y, p8: () => T, pF: () => I, v: () => A, yi: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(517738),
    o = n(827734),
    l = n(462887),
    u = n(749401),
    d = n(573435),
    c = n(652215),
    _ = n(778712),
    f = n(107965);
function E(e, t) {
    let n = (function (e) {
        switch (e) {
            case c.clD.ONLINE:
                return o.A.unsafe_rawColors.GREEN_NEW_38;
            case c.clD.IDLE:
                return o.A.unsafe_rawColors.YELLOW_NEW_30;
            case c.clD.DND:
                return o.A.unsafe_rawColors.RED_NEW_46;
            case c.clD.STREAMING:
                return o.A.unsafe_rawColors.PLATFORM_TWITCH;
            case c.clD.INVISIBLE:
            case c.clD.UNKNOWN:
            case c.clD.OFFLINE:
            default:
                return o.A.unsafe_rawColors.NEUTRAL_34;
        }
    })(e)
        .resolve({ saturation: 1 })
        .hex();
    return (0, u.a)(t ?? n) ?? void 0;
}
function h(e, t) {
    return t === _.F_.WHITE && e === c.clD.IDLE ? _.Iq.HIGH : _.Iq.LOW;
}
function p(e) {
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
        case c.clD.ONLINE:
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
        case c.clD.IDLE:
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
        case c.clD.DND:
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
        case c.clD.STREAMING:
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
        case c.clD.INVISIBLE:
        case c.clD.UNKNOWN:
        case c.clD.OFFLINE:
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
        cutoutX: d,
        cutoutY: c,
        cutoutWidth: _,
        cutoutHeight: f,
        cutoutRadius: E,
        polygonScale: h,
        polygonOrigin: p,
        dotY: m,
        dotX: g,
        dotRadius: A,
    } = e;
    return (0, r.jsxs)("mask", {
        id: n,
        children: [
            (0, r.jsx)(a.animated.rect, { x: o, y: s, width: u, height: l, rx: i, ry: i, fill: "white" }),
            (0, r.jsx)(a.animated.rect, { x: d, y: c, width: _, height: f, rx: E, ry: E, fill: "black" }),
            (0, r.jsx)(a.animated.polygon, {
                points: `-${0.216506 * t},-${0.25 * t} ${0.216506 * t},0 -${0.216506 * t},${0.25 * t}`,
                fill: "black",
                transform: h,
                style: { transformOrigin: p },
            }),
            (0, r.jsx)(a.animated.circle, { fill: "black", cx: g, cy: m, r: A }),
        ],
    });
}
function T(e, t) {
    let { isMobile: n, isTyping: r, isVR: i } = t;
    if (r) return d.Ay.Masks.STATUS_TYPING;
    switch (e) {
        case c.clD.IDLE:
            return d.Ay.Masks.STATUS_IDLE;
        case c.clD.DND:
            return d.Ay.Masks.STATUS_DND;
        case c.clD.STREAMING:
            return d.Ay.Masks.STATUS_STREAMING;
        case c.clD.INVISIBLE:
        case c.clD.UNKNOWN:
        case c.clD.OFFLINE:
            return d.Ay.Masks.STATUS_OFFLINE;
        case c.clD.ONLINE:
        default:
            if (i) return d.Ay.Masks.STATUS_ONLINE_VR;
            if (n) return d.Ay.Masks.STATUS_ONLINE_MOBILE;
            return d.Ay.Masks.STATUS_ONLINE;
    }
}
function S(e, t, n) {
    let { isMobile: r, isTyping: i, isVR: s } = n;
    return i
        ? { width: 2.5 * e, height: e }
        : t === c.clD.ONLINE && r && !s
          ? { width: e, height: 1.5 * e }
          : { width: e, height: e };
}
function y(e) {
    let { status: t, isMobile: n = !1, isVR: i = !1, size: a = 8, className: o, style: l, color: u } = e,
        _ = t === c.clD.ONLINE && n,
        h = t === c.clD.ONLINE && i,
        p = E(t, u);
    return (0, r.jsx)(d.Ay, {
        mask: T(t, { isMobile: _, isTyping: !1, isVR: h }),
        className: s()(f.d, o),
        style: l,
        ...S(a, t, { isMobile: _, isTyping: !1, isVR: h }),
        children: (0, r.jsx)("div", { style: { backgroundColor: p }, className: f.h }),
    });
}
