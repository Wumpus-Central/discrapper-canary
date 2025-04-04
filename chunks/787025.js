n.d(t, {
    G: () => E,
    j: () => b
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(466377),
    s = n(481060),
    l = n(252618),
    c = n(981631),
    u = n(388032),
    d = n(484618);
function f(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: i } = e;
    return (
        (0, l.Tt)({ location: u.NW.string(u.t['3S249/']) }),
        (0, r.jsx)(s.f6W, {
            theme: c.BRd.DARK,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: o()(e, d.oauth2PageWrapper, i),
                    children:
                        !0 === n
                            ? t
                            : (0, r.jsx)('div', {
                                  className: d.oauth2PageContent,
                                  children: t
                              })
                })
        })
    );
}
function b(e) {
    var { children: t, footer: n, transitionState: i, modalSize: o } = e,
        s = m(e, ['children', 'footer', 'transitionState', 'modalSize']);
    return (0, r.jsxs)(
        a.Y0,
        h(
            _(
                {
                    size: null != o ? o : a.Cg.DYNAMIC,
                    transitionState: i,
                    className: d.oauth2ModalWrapper
                },
                s
            ),
            {
                children: [
                    (0, r.jsx)(a.hz, { children: t }),
                    null != n &&
                        (0, r.jsx)(a.mz, {
                            className: d.footer,
                            children: n
                        })
                ]
            }
        )
    );
}
