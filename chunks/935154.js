n.d(t, {
    C$: () => v,
    S3: () => b,
    cl: () => d.clD,
    i0: () => w,
    nW: () => R,
    p8: () => N,
    pF: () => C,
    v: () => S,
    yi: () => O,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(92674),
    s = n(827734),
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

function y(e) {
    switch (e) {
        case d.clD.ONLINE:
            return s.A.unsafe_rawColors.GREEN_NEW_38;
        case d.clD.IDLE:
            return s.A.unsafe_rawColors.YELLOW_NEW_30;
        case d.clD.DND:
            return s.A.unsafe_rawColors.RED_NEW_46;
        case d.clD.STREAMING:
            return s.A.unsafe_rawColors.TWITCH;
        case d.clD.INVISIBLE:
        case d.clD.UNKNOWN:
        case d.clD.OFFLINE:
        default:
            return s.A.unsafe_rawColors.NEUTRAL_34;
    }
}

function b(e, t) {
    let n = y(e)
            .resolve({
                saturation: 1,
            })
            .hex(),
        r = null != t ? t : n,
        i = (0, c.a)(r);
    return null != i ? i : void 0;
}

function O(e, t) {
    return t === f.F_.WHITE && e === d.clD.IDLE ? f.Iq.HIGH : f.Iq.LOW;
}

function v(e) {
    return (0, l.Mw)(e) ? f.F_.BLACK : f.F_.WHITE;
}

function A(e, t, n, r) {
    return "scale("
        .concat(t, ") translate(")
        .concat(0.5625 * e + r, " ")
        .concat(0.75 * e + n, ")");
}

function I(e, t, n) {
    return "".concat(0.5625 * e + n, "px ").concat(0.75 * e + t, "px");
}

function S(e) {
    let { size: t, status: n, isMobile: r, isTyping: i, topOffset: a = 0, leftOffset: o = 0 } = e,
        s = (a / E) * t,
        l = (o / E) * t;
    if (i)
        return {
            bgRadius: 0.5 * t,
            bgY: 0.25 * t + s,
            bgX: 0,
            bgHeight: t,
            bgWidth: t * f.x,
            cutoutX: 0.5 * t + l,
            cutoutY: 0.75 * t + s,
            cutoutWidth: 0,
            cutoutHeight: 0,
            cutoutRadius: 0,
            polygonScale: A(t, 0, s, l),
            polygonOrigin: I(t, s, l),
            dotY: 0.75 * t + s,
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
                    polygonScale: A(t, 0, s, l),
                    polygonOrigin: I(t, s, l),
                    dotY: 1.25 * t,
                    dotX: 0.5 * t + l,
                    dotRadius: 0.125 * t,
                };
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + s,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0,
                polygonScale: A(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.clD.IDLE:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: -(0.125 * t) + l,
                cutoutY: 0.125 * t + s,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.75 * t,
                cutoutRadius: 0.375 * t,
                polygonScale: A(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.clD.DND:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.125 * t + l,
                cutoutY: 0.625 * t + s,
                cutoutWidth: 0.75 * t,
                cutoutHeight: 0.25 * t,
                cutoutRadius: 0.125 * t,
                polygonScale: A(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.clD.STREAMING:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.5 * t + l,
                cutoutY: 0.75 * t + s,
                cutoutWidth: 0,
                cutoutHeight: 0,
                cutoutRadius: 0.25 * t,
                polygonScale: A(t, 1, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
                dotX: 0.5 * t + l,
                dotRadius: 0,
            };
        case d.clD.INVISIBLE:
        case d.clD.UNKNOWN:
        case d.clD.OFFLINE:
        default:
            return {
                bgRadius: 0.5 * t,
                bgY: 0.25 * t + s,
                bgX: l,
                bgHeight: t,
                bgWidth: t,
                cutoutX: 0.25 * t + l,
                cutoutY: 0.5 * t + s,
                cutoutWidth: 0.5 * t,
                cutoutHeight: 0.5 * t,
                cutoutRadius: 0.25 * t,
                polygonScale: A(t, 0, s, l),
                polygonOrigin: I(t, s, l),
                dotY: 0.75 * t + s,
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
        bgX: s,
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
        dotRadius: y,
    } = e;
    return (0, r.jsxs)("mask", {
        id: n,
        children: [
            (0, r.jsx)(o.animated.rect, {
                x: s,
                y: a,
                width: c,
                height: l,
                rx: i,
                ry: i,
                fill: "white",
            }),
            (0, r.jsx)(o.animated.rect, {
                x: u,
                y: d,
                width: f,
                height: p,
                rx: _,
                ry: _,
                fill: "black",
            }),
            (0, r.jsx)(o.animated.polygon, {
                points: T(t),
                fill: "black",
                transform: h,
                style: {
                    transformOrigin: m,
                },
            }),
            (0, r.jsx)(o.animated.circle, {
                fill: "black",
                cx: E,
                cy: g,
                r: y,
            }),
        ],
    });
}

function N(e, t) {
    let { isMobile: n, isTyping: r, isVR: i } = t;
    if (r) return u.Ay.Masks.STATUS_TYPING;
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
            if (i) return u.Ay.Masks.STATUS_ONLINE_VR;
            if (n) return u.Ay.Masks.STATUS_ONLINE_MOBILE;
            return u.Ay.Masks.STATUS_ONLINE;
    }
}

function w(e, t, n) {
    let { isMobile: r, isTyping: i, isVR: a } = n;
    return i
        ? {
              width: e * f.x,
              height: e,
          }
        : t === d.clD.ONLINE && r && !a
          ? {
                width: e,
                height: e * f.jo,
            }
          : {
                width: e,
                height: e,
            };
}

function R(e) {
    let { status: t, isMobile: n = !1, isVR: i = !1, size: o = E, className: s, style: l, color: c } = e,
        f = t === d.clD.ONLINE && n,
        _ = t === d.clD.ONLINE && i,
        m = b(t, c);
    return (0, r.jsx)(
        u.Ay,
        g(
            h(
                {
                    mask: N(t, {
                        isMobile: f,
                        isTyping: !1,
                        isVR: _,
                    }),
                    className: a()(p.d, s),
                    style: l,
                },
                w(o, t, {
                    isMobile: f,
                    isTyping: !1,
                    isVR: _,
                }),
            ),
            {
                children: (0, r.jsx)("div", {
                    style: {
                        backgroundColor: m,
                    },
                    className: p.h,
                }),
            },
        ),
    );
}
