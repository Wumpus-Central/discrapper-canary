n.d(t, { Q: () => h });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(657707),
    a = n(84735),
    o = n(766646),
    c = n(993365),
    d = n(185033),
    u = n(388032),
    m = n(516935);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    var { role: t = 'button', text: n, external: r = !1, focusProps: h, variant: f = 'primary', iconPosition: b = 'start', lineClamp: _ = 1, icon: x } = e,
        E = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['role', 'text', 'external', 'focusProps', 'variant', 'iconPosition', 'lineClamp', 'icon']);
    let j = r ? l.Gr1 : x,
        C =
            null != j
                ? (0, i.jsx)(j, {
                      color: 'currentColor',
                      size: 'sm'
                  })
                : null;
    return (0, i.jsx)(
        a.t,
        p(g({}, h), {
            children: (0, i.jsxs)(
                'button',
                p(
                    g(
                        {
                            role: t,
                            className: s()(m.linkButton, m[f])
                        },
                        E
                    ),
                    {
                        children: [
                            !r && 'start' === b && C,
                            (0, i.jsx)(c.x, {
                                tag: 'span',
                                variant: 'text-sm/medium',
                                color: 'none',
                                lineClamp: _,
                                className: m.text,
                                children: n
                            }),
                            (r || 'end' === b) && C,
                            r && (0, i.jsx)(o.n, { children: u.intl.string(d.default.cgdAs7) })
                        ]
                    }
                )
            )
        })
    );
}
