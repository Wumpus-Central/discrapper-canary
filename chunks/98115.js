n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(953727);

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

function s(e) {
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

function o(e, t) {
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
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function c(e, t) {
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
    if (((a = u(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let d = function (e) {
    let { width: t = 16, height: n = 16, color: a = "currentColor", foreground: o } = e,
        u = c(e, ["width", "height", "color", "foreground"]);
    return (0, r.jsx)(
        "svg",
        l(s({}, (0, i.A)(u)), {
            width: t,
            height: n,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
                className: o,
                fill: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.52995 0.431867C6.27995 0.181867 7.2 1.23199 8 1.23199C8.8 1.23199 9.75007 0.231867 10.4701 0.431867C11.19 0.631965 11.38 2.07173 12 2.52171C12.62 2.9717 14.0003 2.70184 14.4603 3.32184C14.9199 3.94191 14.2303 5.16178 14.4603 5.91169C14.6903 6.66159 15.9998 7.21166 16 8.00153C16 8.79146 14.72 9.38146 14.4798 10.0914C14.2398 10.8014 14.9198 12.0919 14.4798 12.6819C14.0397 13.2716 12.6401 13.0321 12.0202 13.482C11.4002 13.932 11.2298 15.3219 10.4798 15.5719C9.72987 15.8216 8.80967 14.7717 8.00973 14.7717C7.2098 14.7719 6.25964 15.7718 5.53971 15.5719C4.81995 15.3716 4.61982 13.9321 4 13.482C3.38 13.032 1.99971 13.3019 1.53971 12.6819C1.07975 12.0619 1.76971 10.8414 1.53971 10.0914C1.30939 9.34159 0 8.79139 0 8.00153C0.000177681 7.21159 1.2802 6.62163 1.52018 5.91169C1.76012 5.20167 1.08021 3.91183 1.52018 3.32184C1.96018 2.73184 3.36999 3.0017 4 2.52171C4.62997 2.04173 4.78003 0.681954 5.52995 0.431867Z",
            }),
        }),
    );
};
