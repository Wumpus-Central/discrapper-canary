n.d(t, { D: () => p });
var r = n(627968);
n(64700);
var i = n(408238),
    a = n(528226);
function s(e, t, n) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e, t) {
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
    if (((a = d(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let f = () =>
        (0, r.jsx)("div", {
            style: {
                height: 250,
                width: 250,
                background: "pink",
                borderRadius: 6,
            },
        }),
    p = {
        title: "Contained Hero",
        stories: [
            {
                name: "ContainedHero",
                id: "contained-hero",
                component: (e) => {
                    let { containerHeight: t, showChildren: n } = e,
                        s = u(e, ["containerHeight", "showChildren"]),
                        l = () =>
                            n
                                ? (0, r.jsxs)(i.A, {
                                      children: [
                                          (0, r.jsx)(f, {}),
                                          (0, r.jsx)(f, {}),
                                          (0, r.jsx)(f, {}),
                                          (0, r.jsx)(f, {}),
                                          (0, r.jsx)(f, {}),
                                          (0, r.jsx)(f, {}),
                                          (0, r.jsx)(f, {}),
                                          (0, r.jsx)(f, {}),
                                          (0, r.jsx)(f, {}),
                                          (0, r.jsx)(f, {}),
                                      ],
                                  })
                                : null;
                    return (0, r.jsx)("div", {
                        style: { height: n ? void 0 : t },
                        children: (0, r.jsx)(a.A, c(o({}, s), { children: l() })),
                    });
                },
                controls: {
                    bannerSrc: {
                        label: "Banner Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                    },
                    logoSrc: {
                        label: "Logo Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                    },
                    backgroundColor: {
                        label: "Background Color",
                        type: "text",
                        defaultValue: "#171D55",
                    },
                    containerHeight: {
                        label: "Container Height",
                        type: "number",
                        defaultValue: 150,
                    },
                    showChildren: {
                        label: "Show Children",
                        type: "boolean",
                        defaultValue: !1,
                    },
                },
            },
        ],
    };
