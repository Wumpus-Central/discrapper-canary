n.d(t, {
    G: () => y,
    j: () => O,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(442837),
    l = n(481060),
    c = n(252618),
    u = n(906467),
    d = n(981631),
    f = n(388032),
    _ = n(101389);
function p(e, t, n) {
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
                p(e, t, n[t]);
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
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: i } = e;
    (0, c.Tt)({ location: f.intl.string(f.t["3S2494"]) });
    let o = (0, s.e7)([u.Z], () => u.Z.isDeveloper) ? "92px" : void 0;
    return (0, r.jsx)(l.f6W, {
        theme: d.BRd.DARK,
        children: (e) =>
            (0, r.jsx)("div", {
                className: a()(e, _.oauth2PageWrapper, i),
                style: { marginBottom: o },
                children:
                    !0 === n
                        ? t
                        : (0, r.jsx)("div", {
                              className: _.oauth2PageContent,
                              children: t,
                          }),
            }),
    });
}
function O(e) {
    var t,
        n,
        { hideHeader: i } = e,
        a = E(e, ["hideHeader"]);
    return (0, r.jsxs)(
        o.IX,
        g(h({}, a), {
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
