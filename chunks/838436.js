n.d(t, {
    H: () => p,
    U: () => g,
}),
    n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(921801),
    l = n(3957),
    c = n(279743),
    u = n(334709),
    d = n(702315);
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
function _(e) {
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
function p(e) {
    let { header: t, description: n, relatedId: i, disabled: s } = e;
    return (0, r.jsxs)("div", {
        className: d.header,
        children: [
            (0, r.jsx)(o.X6q, {
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
                color: "header-secondary",
                className: a()(d.description, { [d.disabled]: s }),
                children: n,
            }),
        ],
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
function m(e) {
    let { setting: t, className: n, children: i, scrollPosition: o, scrollHighlightDelay: f } = e,
        _ = (0, l.a)(o);
    return (0, r.jsx)(s.F, {
        setting: t,
        children: (0, r.jsxs)("div", {
            className: a()(d.container, n, { [u.settingsBackgroundFlashElement]: null != o }),
            ref: _,
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
function g(e) {
    return null != e.scrollPosition ? (0, r.jsx)(m, _({}, e)) : (0, r.jsx)(h, _({}, e));
}
