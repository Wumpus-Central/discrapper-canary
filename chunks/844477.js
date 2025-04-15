n.d(t, { z: () => m });
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    o = n(84735),
    l = n(993365),
    s = n(994971);
function c(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = {
        xs: 'text-sm/semibold',
        sm: 'text-sm/semibold',
        md: 'text-md/semibold',
        lg: 'text-lg/semibold'
    },
    _ = {
        xs: 'xs',
        sm: 'xs',
        md: 'sm',
        lg: 'md'
    };
function m(e) {
    var { role: t = 'button', variant: n = 'primary', size: i = 'md', text: m, icon: f, iconPosition: p = 'end', iconOpticalOffsetMargin: g = 0, focusProps: h } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['role', 'variant', 'size', 'text', 'icon', 'iconPosition', 'iconOpticalOffsetMargin', 'focusProps']);
    function b() {
        if (null == f) return;
        let e = (function () {
            if (0 === g) return {};
            switch (p) {
                case 'start':
                    return { marginLeft: g };
                case 'end':
                    return { marginRight: g };
            }
            return {};
        })();
        return (0, r.jsx)(f, {
            color: 'currentColor',
            style: e,
            size: _[i]
        });
    }
    return (0, r.jsx)(
        o.t,
        d(c({}, h), {
            children: (0, r.jsxs)(
                'button',
                d(
                    c(
                        {
                            role: t,
                            className: a()(s.button, s[i], s[n])
                        },
                        v
                    ),
                    {
                        children: [
                            null != f && 'start' === p && (0, r.jsx)(b, {}),
                            (0, r.jsx)(l.x, {
                                tag: 'span',
                                variant: u[i],
                                color: 'none',
                                className: s.text,
                                lineClamp: 1,
                                children: m
                            }),
                            null != f && 'end' === p && (0, r.jsx)(b, {})
                        ]
                    }
                )
            )
        })
    );
}
