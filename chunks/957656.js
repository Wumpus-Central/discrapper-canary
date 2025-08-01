r.d(t, { Z: () => u });
var n = r(255367);
r(73800);
var o = r(481060),
    i = r(198952),
    s = r(329242),
    a = r(916723),
    c = r(388032),
    l = r(305623);
let d = (e) => {
    var t,
        r,
        { children: i, className: s } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) ((r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
            }
            return o;
        })(e, ['children', 'className']);
    return (0, n.jsx)(
        o.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })(
            {
                'data-migration-pending': !0,
                className: s
            },
            a
        )),
        (r = r =
            {
                parentComponent: 'FamilyCenterCommonModal',
                children: i
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
};
((d.ButtonFooter = (e) => {
    let { children: t } = e;
    return (0, n.jsx)('div', {
        className: l.footer,
        children: t
    });
}),
    (d.Header = (e) => {
        let { icon: t, currentUser: r, otherUser: a, header: c } = e;
        return (0, n.jsxs)('div', {
            className: l.header,
            children: [
                (0, n.jsx)(i.Z, {
                    currentUser: r,
                    otherUser: a,
                    children: t
                }),
                (0, n.jsxs)('div', {
                    className: l.heading,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'text-lg/bold',
                            children: c
                        }),
                        (0, n.jsx)(s.Z, { user: a })
                    ]
                })
            ]
        });
    }),
    (d.Content = (e) => {
        let { children: t } = e;
        return (0, n.jsx)('div', {
            className: l.content,
            children: t
        });
    }),
    (d.Notice = (e) => {
        let { notice: t } = e;
        return (0, n.jsxs)('div', {
            className: l.notice,
            children: [
                (0, n.jsx)(o.Text, {
                    variant: 'eyebrow',
                    color: 'header-primary',
                    children: c.intl.string(a.default.cXgKMD)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: t
                })
            ]
        });
    }),
    (d.Error = (e) => {
        let { error: t, onDismiss: r } = e;
        return null == t
            ? null
            : (0, n.jsx)(o.kzN, {
                  className: l.error,
                  onDismiss: r,
                  children: t
              });
    }));
let u = d;
