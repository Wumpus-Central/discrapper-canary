n.d(t, {
    _: () => _,
    h: () => E,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(195043),
    l = n(725010),
    c = n(446541),
    u = n(480357),
    d = n(606360);

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
    let { header: t, description: n, relatedId: i, disabled: o } = e;
    return (0, r.jsxs)("div", {
        className: d.wx,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "text-md/medium",
                color: "text-strong",
                children: (0, r.jsx)("label", {
                    htmlFor: i,
                    className: a()(d.DD, {
                        [d.r9]: o,
                    }),
                    children: t,
                }),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: a()(d.h_, {
                    [d.r9]: o,
                }),
                children: n,
            }),
        ],
    });
}

function h(e) {
    let { className: t, children: n } = e;
    return (0, r.jsx)("div", {
        className: a()(d.kL, t),
        children: n,
    });
}

function m(e) {
    let { setting: t, className: n, children: i } = e;
    return (0, r.jsx)(o.x, {
        setting: t,
        children: (0, r.jsx)("div", {
            className: a()(d.kL, n),
            children: i,
        }),
    });
}

function g(e) {
    let { setting: t, className: n, children: i, scrollPosition: s, scrollHighlightDelay: f } = e,
        p = (0, l.s)(s);
    return (0, r.jsx)(o.x, {
        setting: t,
        children: (0, r.jsxs)("div", {
            className: a()(d.kL, n, {
                [u.m]: null != s,
            }),
            ref: p,
            children: [
                i,
                null != s
                    ? (0, r.jsx)(c.A, {
                          animationDelay: f,
                          scrollPosition: s,
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
          ? (0, r.jsx)(m, p({}, e))
          : (0, r.jsx)(h, p({}, e));
}
