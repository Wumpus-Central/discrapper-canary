n.d(t, {
    G: () => E,
    j: () => b,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(481060),
    l = n(252618),
    c = n(981631),
    u = n(388032),
    d = n(697257);
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
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: i } = e;
    return (
        (0, l.Tt)({ location: u.intl.string(u.t["3S2494"]) }),
        (0, r.jsx)(s.f6W, {
            theme: c.BRd.DARK,
            children: (e) =>
                (0, r.jsx)("div", {
                    className: a()(e, d.oauth2PageWrapper, i),
                    children:
                        !0 === n
                            ? t
                            : (0, r.jsx)("div", {
                                  className: d.oauth2PageContent,
                                  children: t,
                              }),
                }),
        })
    );
}
function b(e) {
    var t,
        n,
        { hideHeader: i } = e,
        a = m(e, ["hideHeader"]);
    return (0, r.jsxs)(
        o.IX,
        h(_({}, a), {
            onClose: () => {
                var e;
                return Promise.resolve(null == (e = a.onClose) ? void 0 : e.call(a));
            },
            children: [
                i
                    ? null
                    : (0, r.jsx)(o.xBx, {
                          title: null != (t = a.title) ? t : "",
                          subtitle: a.subtitle,
                      }),
                (0, r.jsx)(o.fef, {
                    controls: a.input,
                    children: a.children,
                }),
                (0, r.jsx)(o.mzw, { children: a.preview }),
                (0, r.jsx)(o.Go$, {
                    leading: a.actionBarInput,
                    actions: null != (n = a.actions) ? n : [],
                    actionsFullWidth: null == a.actionBarInput,
                }),
            ],
        }),
    );
}
