"use strict";
n.d(t, { C$: () => I, S3: () => A, i0: () => S, nW: () => N, p8: () => g, pF: () => m, v: () => T, yi: () => h });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(221877),
    l = n(661531),
    o = n(462887),
    d = n(749401),
    c = n(573435),
    u = n(652215),
    _ = n(778712),
    E = n(791966);
function A(e, t) {
    let n = (function (e) {
        switch (e) {
            case u.clD.ONLINE:
                return l.A.unsafe_rawColors.GREEN_NEW_38;
            case u.clD.IDLE:
                return l.A.unsafe_rawColors.YELLOW_NEW_30;
            case u.clD.DND:
                return l.A.unsafe_rawColors.RED_NEW_46;
            case u.clD.STREAMING:
                return l.A.unsafe_rawColors.PLATFORM_TWITCH;
            case u.clD.INVISIBLE:
            case u.clD.UNKNOWN:
            case u.clD.OFFLINE:
            default:
                return l.A.unsafe_rawColors.NEUTRAL_34;
        }
    })(e)
        .resolve({ saturation: 1 })
        .hex();
    return (0, d.a)(t ?? n) ?? void 0;
}
function h(e, t) {
    return t === _.F_.WHITE && e === u.clD.IDLE ? _.Iq.HIGH : _.Iq.LOW;
}
function I(e) {
    return (0, o.M)(e) ? _.F_.BLACK : _.F_.WHITE;
}
function f(e, t, n, i) {
    return `scale(${t}) translate(${0.5625 * e + i} ${0.75 * e + n})`;
}
function p(e, t, n) {
    return `${0.5625 * e + n}px ${0.75 * e + t}px`;
}
function T(e) {
    let { size: t, status: n, isMobile: i, isTyping: r, topOffset: a = 0, leftOffset: s = 0 } = e,
        l = (a / 8) * t,
        o = (s / 8) * t;
    if (r)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + l,
            bgX: 0,
            bgHeight: t,
            bgWidth: 2.5 * t,
            cutoutX: 0.5 * t + o,
            cutoutY: 0.75 * t + l,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: f(t, 0, l, o),
            polygonOrigin: p(t, l, o),
            dotY: 0.75 * t + l,
            dotX: 0.5 * t + o,
            dotRadius: 0,
        };
    switch (n) {
        case u.clD.ONLINE:
            if (i)
                return {
                    bgRadius: 1.5 * t * 0.125,
                    bgY: 0,
                    bgX: o,
                    bgHeight: 1.5 * t,
                    bgWidth: t,
                    cutoutX: 0.125 * t + o,
                    cutoutY: 0.25 * t,
                    cutoutWidth: 0.75 * t,
                    cutoutHeight: 0.75 * t,
                    cutoutRadius: 0,
                    polygonScale: f(t, 0, l, o),
                    polygonOrigin: p(t, l, o),
                    dotY: 1.25 * t,
                    dotX: 0.5 * t + o,
                    dotRadius: 0.125 * t,
                };
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + l,
                bgX: o,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + o,
                cutoutY: 0.75 * t + l,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0,
                polygonScale: f(t, 0, l, o),
                polygonOrigin: p(t, l, o),
                dotY: 0.75 * t + l,
                dotX: 0.5 * t + o,
                dotRadius: 0,
            };
        case u.clD.IDLE:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + l,
                bgX: o,
                bgHeight: t,
                bgWidth: t,
                cutoutX: -(0.125 * t) + o,
                cutoutY: 0.125 * t + l,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.75 * t,
                cutoutRadius: 0.375 * t,
                polygonScale: f(t, 0, l, o),
                polygonOrigin: p(t, l, o),
                dotY: 0.75 * t + l,
                dotX: 0.5 * t + o,
                dotRadius: 0,
            };
        case u.clD.DND:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + l,
                bgX: o,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.125 * t + o,
                cutoutY: 0.625 * t + l,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.25 * t,
                cutoutRadius: 0.125 * t,
                polygonScale: f(t, 0, l, o),
                polygonOrigin: p(t, l, o),
                dotY: 0.75 * t + l,
                dotX: 0.5 * t + o,
                dotRadius: 0,
            };
        case u.clD.STREAMING:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + l,
                bgX: o,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + o,
                cutoutY: 0.75 * t + l,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0.25 * t,
                polygonScale: f(t, 1, l, o),
                polygonOrigin: p(t, l, o),
                dotY: 0.75 * t + l,
                dotX: 0.5 * t + o,
                dotRadius: 0,
            };
        case u.clD.INVISIBLE:
        case u.clD.UNKNOWN:
        case u.clD.OFFLINE:
        default:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + l,
                bgX: o,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.25 * t + o,
                cutoutY: 0.5 * t + l,
                cutoutWidth: 0.5 * t,
                cutoutHeight: 0.5 * t,
                cutoutRadius: 0.25 * t,
                polygonScale: f(t, 0, l, o),
                polygonOrigin: p(t, l, o),
                dotY: 0.75 * t + l,
                dotX: 0.5 * t + o,
                dotRadius: 0,
            };
    }
}
function m(e, t, n) {
    let {
        bgRadius: r,
        bgY: a,
        bgX: l,
        bgHeight: o,
        bgWidth: d,
        cutoutX: c,
        cutoutY: u,
        cutoutWidth: _,
        cutoutHeight: E,
        cutoutRadius: A,
        polygonScale: h,
        polygonOrigin: I,
        dotY: f,
        dotX: p,
        dotRadius: T,
    } = e;
    return (0, i.jsxs)("mask", {
        id: n,
        children: [
            (0, i.jsx)(s.animated.rect, { x: l, y: a, width: d, height: o, rx: r, ry: r, fill: "white" }),
            (0, i.jsx)(s.animated.rect, { x: c, y: u, width: _, height: E, rx: A, ry: A, fill: "black" }),
            (0, i.jsx)(s.animated.polygon, {
                points: `-${0.216506 * t},-${0.25 * t} ${0.216506 * t},0 -${0.216506 * t},${0.25 * t}`,
                fill: "black",
                transform: h,
                style: { transformOrigin: I },
            }),
            (0, i.jsx)(s.animated.circle, { fill: "black", cx: p, cy: f, r: T }),
        ],
    });
}
function g(e, t) {
    let { isMobile: n, isTyping: i, isVR: r } = t;
    if (i) return c.Ay.Masks.STATUS_TYPING;
    switch (e) {
        case u.clD.IDLE:
            return c.Ay.Masks.STATUS_IDLE;
        case u.clD.DND:
            return c.Ay.Masks.STATUS_DND;
        case u.clD.STREAMING:
            return c.Ay.Masks.STATUS_STREAMING;
        case u.clD.INVISIBLE:
        case u.clD.UNKNOWN:
        case u.clD.OFFLINE:
            return c.Ay.Masks.STATUS_OFFLINE;
        case u.clD.ONLINE:
        default:
            if (r) return c.Ay.Masks.STATUS_ONLINE_VR;
            if (n) return c.Ay.Masks.STATUS_ONLINE_MOBILE;
            return c.Ay.Masks.STATUS_ONLINE;
    }
}
function S(e, t, n) {
    let { isMobile: i, isTyping: r, isVR: a } = n;
    if (r) return { width: 2.5 * e, height: e };
    if (t === u.clD.ONLINE && a) {
        let t = +e;
        return { width: 1.5 * t, height: t };
    }
    return t === u.clD.ONLINE && i && !a ? { width: e, height: 1.5 * e } : { width: e, height: e };
}
function N(e) {
    let { status: t, isMobile: n = !1, isVR: r = !1, size: s = 8, className: l, style: o, color: d } = e,
        _ = t === u.clD.ONLINE && n,
        h = t === u.clD.ONLINE && r,
        I = A(t, d);
    return (0, i.jsx)(c.Ay, {
        mask: g(t, { isMobile: _, isTyping: !1, isVR: h }),
        className: a()(E.d, l),
        style: o,
        ...S(s, t, { isMobile: _, isTyping: !1, isVR: h }),
        children: (0, i.jsx)("div", { style: { backgroundColor: I }, className: E.h }),
    });
}
