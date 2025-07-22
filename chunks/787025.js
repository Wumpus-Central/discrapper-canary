n.d(t, {
    G: () => v,
    j: () => I
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(257465),
    s = n(369585),
    l = n(103866),
    c = n(213734),
    u = n(37148),
    d = n(481060),
    f = n(252618),
    _ = n(981631),
    p = n(388032),
    h = n(484618);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function v(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: i } = e;
    return (
        (0, f.Tt)({ location: p.intl.string(p.t['3S249/']) }),
        (0, r.jsx)(d.f6W, {
            theme: _.BRd.DARK,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: a()(e, h.oauth2PageWrapper, i),
                    children:
                        !0 === n
                            ? t
                            : (0, r.jsx)('div', {
                                  className: h.oauth2PageContent,
                                  children: t
                              })
                })
        })
    );
}
function I(e) {
    var t,
        n,
        { hideHeader: i } = e,
        a = y(e, ['hideHeader']);
    return (0, r.jsxs)(
        o.I,
        b(g({}, a), {
            onClose: () => {
                var e;
                return Promise.resolve(null == (e = a.onClose) ? void 0 : e.call(a));
            },
            children: [
                i
                    ? null
                    : (0, r.jsx)(u.x, {
                          title: null != (t = a.title) ? t : '',
                          subtitle: a.subtitle
                      }),
                (0, r.jsx)(l.f, {
                    controls: a.input,
                    children: a.children
                }),
                (0, r.jsx)(c.m, { children: a.preview }),
                (0, r.jsx)(s.G, {
                    leading: a.actionBarInput,
                    actions: null != (n = a.actions) ? n : [],
                    actionsFullWidth: null == a.actionBarInput
                })
            ]
        })
    );
}
