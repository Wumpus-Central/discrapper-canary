t.d(r, { Z: () => u });
var n = t(255367);
t(73800);
var o = t(481060),
    i = t(198952),
    a = t(329242),
    s = t(916723),
    l = t(388032),
    c = t(305623);
let d = (e) => {
    var r,
        t,
        { children: i, className: a } = e,
        s = (function (e, r) {
            if (null == e) return {};
            var t,
                n,
                o = (function (e, r) {
                    if (null == e) return {};
                    var t,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) ((t = i[n]), r.indexOf(t) >= 0 || (o[t] = e[t]));
                    return o;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) ((t = i[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
            }
            return o;
        })(e, ['children', 'className']);
    return (0, n.jsx)(
        o.Y0X,
        ((r = (function (e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {},
                    n = Object.keys(t);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    n.forEach(function (r) {
                        var n;
                        ((n = t[r]),
                            r in e
                                ? Object.defineProperty(e, r, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[r] = n));
                    }));
            }
            return e;
        })(
            {
                'data-migration-pending': !0,
                className: a
            },
            s
        )),
        (t = t =
            {
                parentComponent: 'FamilyCenterCommonModal',
                children: i
            }),
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
((d.ButtonFooter = (e) => {
    let { children: r } = e;
    return (0, n.jsx)('div', {
        className: c.footer,
        children: r
    });
}),
    (d.Header = (e) => {
        let { icon: r, currentUser: t, otherUser: s, header: l } = e;
        return (0, n.jsxs)('div', {
            className: c.header,
            children: [
                (0, n.jsx)(i.Z, {
                    currentUser: t,
                    otherUser: s,
                    children: r
                }),
                (0, n.jsxs)('div', {
                    className: c.heading,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'text-lg/bold',
                            children: l
                        }),
                        (0, n.jsx)(a.Z, { user: s })
                    ]
                })
            ]
        });
    }),
    (d.Content = (e) => {
        let { children: r } = e;
        return (0, n.jsx)('div', {
            className: c.content,
            children: r
        });
    }),
    (d.Notice = (e) => {
        let { notice: r } = e;
        return (0, n.jsxs)('div', {
            className: c.notice,
            children: [
                (0, n.jsx)(o.Text, {
                    variant: 'eyebrow',
                    color: 'header-primary',
                    children: l.intl.string(s.default.cXgKMD)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: r
                })
            ]
        });
    }),
    (d.Error = (e) => {
        let { error: r, onDismiss: t } = e;
        return null == r
            ? null
            : (0, n.jsx)(o.kzN, {
                  className: c.error,
                  onDismiss: t,
                  children: r
              });
    }));
let u = d;
