n.d(t, {
    H: () => _,
    U: () => E,
}),
    n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(921801),
    l = n(3957),
    c = n(279743),
    u = n(7822),
    d = n(989093);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    let { header: t, description: n, relatedId: i, disabled: s } = e;
    return (0, r.jsxs)("div", {
        className: d.header,
        children: [
            (0, r.jsx)(o.Heading, {
                variant: "text-md/medium",
                color: "header-primary",
                children: (0, r.jsx)("label", {
                    htmlFor: i,
                    className: a()(d.title, { [d.disabled]: s }),
                    children: t,
                }),
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: a()(d.description, { [d.disabled]: s }),
                children: n,
            }),
        ],
    });
}
function m(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)("div", {
        className: a()(d.container, t),
        children: n,
    });
}
function h(e) {
    let { setting: t, className: n, children: i } = e;
    return (0, r.jsx)(s.F, {
        setting: t,
        children: (0, r.jsx)("div", {
            className: a()(d.container, n),
            children: i,
        }),
    });
}
function g(e) {
    let { setting: t, className: n, children: i, scrollPosition: o, scrollHighlightDelay: f } = e,
        p = (0, l.a)(o);
    return (0, r.jsx)(s.F, {
        setting: t,
        children: (0, r.jsxs)("div", {
            className: a()(d.container, n, { [u.settingsBackgroundFlashElement]: null != o }),
            ref: p,
            children: [
                i,
                null != o
                    ? (0, r.jsx)(c.Z, {
                          animationDelay: f,
                          scrollPosition: o,
                      })
                    : null,
            ],
        }),
    });
}
function E(e) {
    return null != e.scrollPosition
        ? (0, r.jsx)(g, p({}, e))
        : null != e.setting
          ? (0, r.jsx)(h, p({}, e))
          : (0, r.jsx)(m, p({}, e));
}
