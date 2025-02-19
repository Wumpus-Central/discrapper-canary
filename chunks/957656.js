t.d(r, { Z: () => d });
var n = t(200651);
t(192379);
var o = t(481060),
    s = t(198952),
    c = t(329242),
    i = t(388032),
    l = t(720779);
let a = (e) => {
    var r,
        t,
        { children: s, className: c } = e,
        i = (function (e, r) {
            if (null == e) return {};
            var t,
                n,
                o = (function (e, r) {
                    if (null == e) return {};
                    var t,
                        n,
                        o = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (t = s[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (t = s[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['children', 'className']);
    return (0, n.jsx)(
        o.Y0X,
        ((r = (function (e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {},
                    n = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    n.forEach(function (r) {
                        var n;
                        (n = t[r]),
                            r in e
                                ? Object.defineProperty(e, r, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[r] = n);
                    });
            }
            return e;
        })({ className: c }, i)),
        (t = t = { children: s }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
            : (function (e, r) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        r)
    );
};
(a.ButtonFooter = (e) => {
    let { children: r } = e;
    return (0, n.jsx)('div', {
        className: l.footer,
        children: r
    });
}),
    (a.Header = (e) => {
        let { icon: r, currentUser: t, otherUser: i, header: a } = e;
        return (0, n.jsxs)('div', {
            className: l.header,
            children: [
                (0, n.jsx)(s.Z, {
                    currentUser: t,
                    otherUser: i,
                    children: r
                }),
                (0, n.jsxs)('div', {
                    className: l.heading,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'text-lg/bold',
                            children: a
                        }),
                        (0, n.jsx)(c.Z, { user: i })
                    ]
                })
            ]
        });
    }),
    (a.Content = (e) => {
        let { children: r } = e;
        return (0, n.jsx)('div', {
            className: l.content,
            children: r
        });
    }),
    (a.Notice = (e) => {
        let { notice: r } = e;
        return (0, n.jsxs)('div', {
            className: l.notice,
            children: [
                (0, n.jsx)(o.Text, {
                    variant: 'eyebrow',
                    color: 'header-primary',
                    children: i.NW.string(i.t.cXgKMD)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: r
                })
            ]
        });
    }),
    (a.Error = (e) => {
        let { error: r, onDismiss: t } = e;
        return null == r
            ? null
            : (0, n.jsx)(o.kzN, {
                  className: l.error,
                  onDismiss: t,
                  children: r
              });
    });
let d = a;
