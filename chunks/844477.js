n.d(t, { z: () => g });
var r = n(200651),
    i = n(120356),
    s = n.n(i),
    a = n(84735),
    l = n(993365),
    o = n(985856);
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
    m = {
        xs: 'xs',
        sm: 'xs',
        md: 'sm',
        lg: 'md'
    };
function g(e) {
    var { role: t = 'button', variant: n = 'primary', size: i = 'md', text: g, icon: p, iconPosition: h = 'end', iconOpticalOffsetMargin: f = 0, focusProps: N } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['role', 'variant', 'size', 'text', 'icon', 'iconPosition', 'iconOpticalOffsetMargin', 'focusProps']);
    function b() {
        if (null == p) return;
        let e = (function () {
            if (0 === f) return {};
            switch (h) {
                case 'start':
                    return { marginLeft: f };
                case 'end':
                    return { marginRight: f };
            }
            return {};
        })();
        return (0, r.jsx)(p, {
            color: 'currentColor',
            style: e,
            size: m[i]
        });
    }
    return (0, r.jsx)(
        a.t,
        d(c({}, N), {
            children: (0, r.jsxs)(
                'button',
                d(
                    c(
                        {
                            role: t,
                            className: s()(o.button, o[i], o[n])
                        },
                        x
                    ),
                    {
                        children: [
                            null != p && 'start' === h && (0, r.jsx)(b, {}),
                            (0, r.jsx)(l.x, {
                                tag: 'span',
                                variant: u[i],
                                color: 'none',
                                className: o.text,
                                lineClamp: 1,
                                children: g
                            }),
                            null != p && 'end' === h && (0, r.jsx)(b, {})
                        ]
                    }
                )
            )
        })
    );
}
