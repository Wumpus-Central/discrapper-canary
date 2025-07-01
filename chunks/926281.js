(r.d(t, { default: () => a }), r(388685));
var n = r(255367),
    l = r(73800),
    o = r(481060),
    c = r(388032);
function i(e) {
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
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function a(e) {
    var {
            modalProps: t,
            settings: { onConfirm: r }
        } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) ((r = o[n]), t.indexOf(r) >= 0 || (l[r] = e[r]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) ((r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]));
            }
            return l;
        })(e.settings, ['onConfirm']);
    let [u, b] = l.useState({
            Account: {
                value: 'Account',
                label: c.intl.string(c.t['rfe/x8']),
                checked: !1
            },
            Analytics: {
                value: 'Analytics',
                label: c.intl.string(c.t['j+d6RE']),
                checked: !1
            },
            Activities: {
                value: 'Activities',
                label: c.intl.string(c.t.KO88BQ),
                checked: !1
            },
            Ads: {
                value: 'Ads',
                label: c.intl.string(c.t.wb7QJy),
                checked: !1
            },
            Messages: {
                value: 'Messages',
                label: c.intl.string(c.t['0dO1t7']),
                checked: !1
            },
            Programs: {
                value: 'Programs',
                label: c.intl.string(c.t.M4ddeX),
                checked: !1
            },
            Servers: {
                value: 'Servers',
                label: c.intl.string(c.t.JN9c39),
                checked: !1
            }
        }),
        [d, p] = l.useState(!1),
        y = (e) => (t, r) => {
            (b((t) => s(i({}, t), { [e]: s(i({}, t[e]), { checked: r }) })), r && d && p(!1));
        },
        g = Object.values(u).some((e) => e.checked);
    return (0, n.jsxs)(
        o.Y0X,
        s(i({}, t), {
            parentComponent: 'DataHarvestModal',
            children: [
                (0, n.jsx)(o.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: a.header
                    })
                }),
                (0, n.jsxs)(o.hzk, {
                    children: [
                        (0, n.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            style: { marginBottom: '5px' },
                            children: a.body
                        }),
                        Object.keys(u).map((e) => {
                            let { label: t, checked: r } = u[e];
                            return (0, n.jsx)(
                                o.XZJ,
                                {
                                    type: o.XZJ.Types.INVERTED,
                                    value: r,
                                    style: { marginBottom: '2px' },
                                    onChange: y(e),
                                    children: (0, n.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        children: t
                                    })
                                },
                                e
                            );
                        }),
                        d &&
                            (0, n.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-danger',
                                style: { marginTop: '8px' },
                                children: c.intl.string(c.t.W1Rw3N)
                            })
                    ]
                }),
                (0, n.jsxs)(o.mzw, {
                    children: [
                        (0, n.jsx)(o.zxk, {
                            type: 'button',
                            size: o.zxk.Sizes.MEDIUM,
                            color: null != a.confirmButtonColor ? a.confirmButtonColor : o.zxk.Colors.RED,
                            onClick: () => {
                                if (!g) return void p(!0);
                                let e = Object.keys(u)
                                    .filter((e) => u[e].checked)
                                    .map((e) => u[e].value);
                                (null == r || r(e), t.onClose());
                            },
                            children: a.confirmText
                        }),
                        null != a.cancelText &&
                            '' !== a.cancelText &&
                            (0, n.jsx)(o.zxk, {
                                type: 'button',
                                look: o.zxk.Looks.FILLED,
                                color: o.zxk.Colors.PRIMARY,
                                size: o.zxk.Sizes.MEDIUM,
                                onClick: () => {
                                    var e;
                                    (null == (e = a.onCancel) || e.call(a), t.onClose());
                                },
                                style: { marginRight: 8 },
                                children: a.cancelText
                            })
                    ]
                })
            ]
        })
    );
}
