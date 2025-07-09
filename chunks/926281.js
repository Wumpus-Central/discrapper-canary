(r.d(t, { default: () => u }), r(388685));
var n = r(255367),
    l = r(73800),
    o = r(755721),
    c = r(481060),
    i = r(388032);
function s(e) {
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
function a(e, t) {
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
function u(e) {
    var {
            modalProps: t,
            settings: { onConfirm: r }
        } = e,
        u = (function (e, t) {
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
    let [b, d] = l.useState({
            Account: {
                value: 'Account',
                label: i.intl.string(i.t['rfe/x8']),
                checked: !1
            },
            Analytics: {
                value: 'Analytics',
                label: i.intl.string(i.t['j+d6RE']),
                checked: !1
            },
            Activities: {
                value: 'Activities',
                label: i.intl.string(i.t.KO88BQ),
                checked: !1
            },
            Ads: {
                value: 'Ads',
                label: i.intl.string(i.t.wb7QJy),
                checked: !1
            },
            Messages: {
                value: 'Messages',
                label: i.intl.string(i.t['0dO1t7']),
                checked: !1
            },
            Programs: {
                value: 'Programs',
                label: i.intl.string(i.t.M4ddeX),
                checked: !1
            },
            Servers: {
                value: 'Servers',
                label: i.intl.string(i.t.JN9c39),
                checked: !1
            }
        }),
        [p, y] = l.useState(!1),
        g = (e) => (t, r) => {
            (d((t) => a(s({}, t), { [e]: a(s({}, t[e]), { checked: r }) })), r && p && y(!1));
        },
        x = Object.values(b).some((e) => e.checked);
    return (0, n.jsxs)(
        c.Y0X,
        a(s({}, t), {
            parentComponent: 'DataHarvestModal',
            children: [
                (0, n.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(c.X6q, {
                        variant: 'heading-lg/semibold',
                        children: u.header
                    })
                }),
                (0, n.jsxs)(c.hzk, {
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            style: { marginBottom: '5px' },
                            children: u.body
                        }),
                        Object.keys(b).map((e) => {
                            let { label: t, checked: r } = b[e];
                            return (0, n.jsx)(
                                c.XZJ,
                                {
                                    type: c.XZJ.Types.INVERTED,
                                    value: r,
                                    style: { marginBottom: '2px' },
                                    onChange: g(e),
                                    children: (0, n.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        children: t
                                    })
                                },
                                e
                            );
                        }),
                        p &&
                            (0, n.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-danger',
                                style: { marginTop: '8px' },
                                children: i.intl.string(i.t.W1Rw3N)
                            })
                    ]
                }),
                (0, n.jsxs)(c.mzw, {
                    children: [
                        (0, n.jsx)(o.zx, {
                            type: 'button',
                            size: o.zx.Sizes.MEDIUM,
                            color: null != u.confirmButtonColor ? u.confirmButtonColor : o.zx.Colors.RED,
                            onClick: () => {
                                if (!x) return void y(!0);
                                let e = Object.keys(b)
                                    .filter((e) => b[e].checked)
                                    .map((e) => b[e].value);
                                (null == r || r(e), t.onClose());
                            },
                            children: u.confirmText
                        }),
                        null != u.cancelText &&
                            '' !== u.cancelText &&
                            (0, n.jsx)(o.zx, {
                                type: 'button',
                                look: o.zx.Looks.FILLED,
                                color: o.zx.Colors.PRIMARY,
                                size: o.zx.Sizes.MEDIUM,
                                onClick: () => {
                                    var e;
                                    (null == (e = u.onCancel) || e.call(u), t.onClose());
                                },
                                style: { marginRight: 8 },
                                children: u.cancelText
                            })
                    ]
                })
            ]
        })
    );
}
