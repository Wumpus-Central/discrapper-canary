n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(325767);
function a(e, t, n) {
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
function o(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let d = (e) => {
    var { className: t, backgroundColor: n, backgroundCircleSize: a } = e,
        s = c(e, ["className", "backgroundColor", "backgroundCircleSize"]);
    return (0, r.jsxs)(
        "svg",
        l(
            o(
                {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 100 100",
                    fill: "none",
                    style: { overflow: "visible" },
                    xmlns: "http://www.w3.org/2000/svg",
                },
                (0, i.Z)(o({}, s)),
            ),
            {
                children: [
                    (0, r.jsx)("circle", {
                        r: null != a ? a : "40%",
                        cx: "50%",
                        cy: "50%",
                        className: n,
                    }),
                    (0, r.jsxs)("g", {
                        transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
                        children: [
                            (0, r.jsx)("path", {
                                d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
                                fill: "#FF6BFA",
                                className: t,
                            }),
                            (0, r.jsx)("path", {
                                d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
                                fill: "#FFDEF9",
                            }),
                            (0, r.jsx)("path", {
                                d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
                                fill: "#FFB0FF",
                            }),
                        ],
                    }),
                ],
            },
        ),
    );
};
