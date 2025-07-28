n.d(t, { V: () => p });
var r = n(255367);
n(73800);
var i = n(652141),
    a = n(481060),
    o = n(699682),
    s = n(165005);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            }));
    }
    return e;
}
function u(e, t) {
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
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function p(e) {
    let { error: t } = e,
        n = (0, a.Yzy)(t, {
            config: {
                tension: 250,
                clamp: !0
            },
            from: {
                marginTop: 0,
                height: 0,
                opacity: 0,
                transform: 'translate3d(0, -100%, 0)'
            },
            enter: {
                marginTop: 8,
                height: 'auto',
                opacity: 1,
                transform: 'translate3d(0, -0px, 0)'
            },
            leave: {
                marginTop: 0,
                height: 0,
                opacity: 0,
                transform: 'translate3d(0, -100%, 0)'
            }
        }),
        l = (0, o.Z)(t);
    return (0, r.jsx)(r.Fragment, {
        children: n((e, n, o) => {
            let { key: u } = o,
                { transform: _ } = e,
                p = f(e, ['transform']);
            return null != n && '' !== n
                ? (0, r.jsx)(
                      i.animated.div,
                      {
                          style: d(c({}, p), { overflow: 'hidden' }),
                          children: (0, r.jsxs)(i.animated.div, {
                              style: { transform: _ },
                              className: s.inputError,
                              children: [
                                  (0, r.jsx)(a.Mgn, {
                                      size: 'xs',
                                      color: a.TVs.colors.TEXT_DANGER.css
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      color: 'text-danger',
                                      variant: 'text-sm/medium',
                                      children: null != t && '' !== t ? t : l
                                  })
                              ]
                          })
                      },
                      u
                  )
                : null;
        })
    });
}
