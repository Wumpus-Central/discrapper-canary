n.d(t, {
    A: () => g,
}),
    n(65821);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(953727),
    o = n(106199);

function l(e, t, n) {
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

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
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

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var _ = (function (e) {
    return (
        (e.LEFT = "LEFT"),
        (e.RIGHT = "RIGHT"),
        (e.UP = "UP"),
        (e.DOWN = "DOWN"),
        (e.UP_LEFT = "UP_LEFT"),
        (e.DOWN_RIGHT = "DOWN_RIGHT"),
        e
    );
})({});

function h(e) {
    switch (e) {
        case "LEFT":
            return o.kb;
        case "RIGHT":
            return o.pG;
        case "UP":
            return null;
        case "DOWN":
            return o.TR;
        case "UP_LEFT":
            return o.l0;
        case "DOWN_RIGHT":
            return o.Nu;
        default:
            throw Error("Invalid Direction ".concat(e));
    }
}
let m = (e) => {
    let {
            width: t = 24,
            height: n = 24,
            color: i = "currentColor",
            direction: o,
            foreground: l,
            className: u,
            title: p,
        } = e,
        _ = f(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
    return (0, r.jsxs)(
        "svg",
        d(c({}, (0, s.A)(_)), {
            width: t,
            height: n,
            className: a()(u, h(o)),
            viewBox: "0 0 24 24",
            children: [
                null != p
                    ? (0, r.jsx)("title", {
                          children: p,
                      })
                    : null,
                (0, r.jsx)("polygon", {
                    className: l,
                    fill: i,
                    fillRule: "nonzero",
                    points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
                }),
            ],
        }),
    );
};
m.Directions = _;
let g = m;
