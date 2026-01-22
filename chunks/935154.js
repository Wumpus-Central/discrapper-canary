n.d(t, {
    C$: () => A,
    S3: () => y,
    cl: () => d.clD,
    i0: () => R,
    nW: () => w,
    p8: () => N,
    pF: () => C,
    v: () => I,
    yi: () => O,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(432022),
    o = n(827734),
    l = n(582754);
n(397927);
var c = n(749401),
    u = n(573435),
    d = n(652215),
    f = n(778712),
    p = n(529904);
function _(e, t, n) {
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 8;
function b(e) {
    switch (e) {
        case d.clD.ONLINE:
            return o.A.unsafe_rawColors.GREEN_NEW_38;
        case d.clD.IDLE:
            return o.A.unsafe_rawColors.YELLOW_NEW_30;
        case d.clD.DND:
            return o.A.unsafe_rawColors.RED_NEW_46;
        case d.clD.STREAMING:
            return o.A.unsafe_rawColors.TWITCH;
        case d.clD.INVISIBLE:
        case d.clD.UNKNOWN:
        case d.clD.OFFLINE:
        default:
            return o.A.unsafe_rawColors.NEUTRAL_34;
    }
}
function y(e, t) {
    let n = b(e).resolve({ saturation: 1 }).hex(),
        r = null != t ? t : n,
        i = (0, c.a)(r);
    return null != i ? i : void 0;
}
function O(e, t) {
    return t === f.F_.WHITE && e === d.clD.IDLE ? f.Iq.HIGH : f.Iq.LOW;
}
function A(e) {
    return (0, l.Mw)(e) ? f.F_.BLACK : f.F_.WHITE;
}
function v(e, t, n, r) {
    return "scale("
        .concat(t, ") translate(")
        .concat(0.5625 * e + r, " ")
        .concat(0.75 * e + n, ")");
}
function S(e, t, n) {
    return "".concat(0.5625 * e + n, "px ").concat(0.75 * e + t, "px");
}
function I(e) {
    let { size: t, status: n, isMobile: r, isTyping: i, topOffset: a = 0, leftOffset: s = 0 } = e,
        o = (a / E) * t,
        l = (s / E) * t;
    if (i)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + o,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * f.x,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + o,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: v(t, 0, o, l),
            polygonOrigin: S(t, o, l),
            dotY: 0.75 * t + o,
            dotX: 0.5 * t + l,
            dotRadius: 0,
        };
    switch (n) {
        case d.clD.ONLINE:
            if (r)
                return {
                    bgRadius: t * f.jo * f.sf,
                    bgY: 0,
                    bgX: l,
                    bgHeight: t * f.jo,
                    bgWidth: t,
                    cutoutX: 0.125 * t + l,
                    cutoutY: 0.25 * t,
                    cutoutWidth: 0.75 * t,
                    cutoutHeight: 0.75 * t,
                    cutoutRadius: 0,
                    polygonScale: v(t, 0, o, l),
                    polygonOrigin: S(t, o, l),
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
                polygonScale: v(t, 0, o, l),
                polygonOrigin: S(t, o, l),
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
                polygonScale: v(t, 0, o, l),
                polygonOrigin: S(t, o, l),
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
                polygonScale: v(t, 0, o, l),
                polygonOrigin: S(t, o, l),
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
                polygonScale: v(t, 1, o, l),
                polygonOrigin: S(t, o, l),
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
                polygonScale: v(t, 0, o, l),
                polygonOrigin: S(t, o, l),
                dotY: 0.75 * t + o,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
    }
}
function T(e) {
    return "-"
        .concat(0.216506 * e, ",-")
        .concat(0.25 * e, " ")
        .concat(0.216506 * e, ",0 -")
        .concat(0.216506 * e, ",")
        .concat(0.25 * e);
}
function C(e, t, n) {
    let {
        bgRadius: i,
        bgY: a,
        bgX: o,
        bgHeight: l,
        bgWidth: c,
        cutoutX: u,
        cutoutY: d,
        cutoutWidth: f,
        cutoutHeight: p,
        cutoutRadius: _,
        polygonScale: h,
        polygonOrigin: m,
        dotY: g,
        dotX: E,
        dotRadius: b,
    } = e;
    return (0, r.jsxs)("mask", {
        id: n,
        children: [
            (0, r.jsx)(s.animated.rect, {
                x: o,
                y: a,
                width: c,
                height: l,
                rx: i,
                ry: i,
                fill: "white",
            }),
            (0, r.jsx)(s.animated.rect, {
                x: u,
                y: d,
                width: f,
                height: p,
                rx: _,
                ry: _,
                fill: "black",
            }),
            (0, r.jsx)(s.animated.polygon, {
                points: T(t),
                fill: "black",
                transform: h,
                style: { transformOrigin: m },
            }),
            (0, r.jsx)(s.animated.circle, {
                fill: "black",
                cx: E,
                cy: g,
                r: b,
            }),
        ],
    });
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (n) return u.Ay.Masks.STATUS_TYPING;
    switch (e) {
        case d.clD.IDLE:
            return u.Ay.Masks.STATUS_IDLE;
        case d.clD.DND:
            return u.Ay.Masks.STATUS_DND;
        case d.clD.STREAMING:
            return u.Ay.Masks.STATUS_STREAMING;
        case d.clD.INVISIBLE:
        case d.clD.UNKNOWN:
        case d.clD.OFFLINE:
            return u.Ay.Masks.STATUS_OFFLINE;
        case d.clD.ONLINE:
        default:
            if (t) return u.Ay.Masks.STATUS_ONLINE_MOBILE;
            return u.Ay.Masks.STATUS_ONLINE;
    }
}
function R(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return t === d.clD.ONLINE && n && !r
        ? {
              width: e,
              height: e * f.jo,
          }
        : {
              width: r ? e * f.x : e,
              height: e,
          };
}
function w(e) {
    let { status: t, isMobile: n = !1, size: i = E, className: s, style: o, color: l } = e,
        c = t === d.clD.ONLINE && n,
        f = y(t, l);
    return (0, r.jsx)(
        u.Ay,
        g(
            h(
                {
                    mask: N(t, c),
                    className: a()(p.d, s),
                    style: o,
                },
                R(i, t, c),
            ),
            {
                children: (0, r.jsx)("div", {
                    style: { backgroundColor: f },
                    className: p.h,
                }),
            },
        ),
    );
}
