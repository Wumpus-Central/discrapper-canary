r.d(t, { default: () => a }), r(47120);
var n = r(200651),
    c = r(192379),
    l = r(481060),
    o = r(388032);
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
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
                c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        c = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (c[r] = e[r]);
                    return c;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
            }
            return c;
        })(e.settings, ['onConfirm']);
    let [u, b] = c.useState({
            Account: {
                value: 'Account',
                label: o.NW.string(o.t['rfe/x8']),
                checked: !1
            },
            Analytics: {
                value: 'Analytics',
                label: o.NW.string(o.t['j+d6RE']),
                checked: !1
            },
            Activities: {
                value: 'Activities',
                label: o.NW.string(o.t.KO88BQ),
                checked: !1
            },
            Messages: {
                value: 'Messages',
                label: o.NW.string(o.t['0dO1t7']),
                checked: !1
            },
            Programs: {
                value: 'Programs',
                label: o.NW.string(o.t.M4ddeX),
                checked: !1
            },
            Servers: {
                value: 'Servers',
                label: o.NW.string(o.t.JN9c39),
                checked: !1
            }
        }),
        p = (e) => (t, r) => {
            b((t) => s(i({}, t), { [e]: s(i({}, t[e]), { checked: r }) }));
        };
    return (0, n.jsxs)(
        l.ConfirmModal,
        s(i({}, t, a), {
            onConfirm: () => {
                let e = Object.keys(u)
                    .filter((e) => u[e].checked)
                    .map((e) => u[e].value);
                null == r || r(e);
            },
            children: [
                (0, n.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    style: { marginBottom: '5px' },
                    children: a.body
                }),
                Object.keys(u).map((e) => {
                    let { label: t, checked: r } = u[e];
                    return (0, n.jsx)(
                        l.XZJ,
                        {
                            type: l.XZJ.Types.INVERTED,
                            value: r,
                            style: { marginBottom: '2px' },
                            onChange: p(e),
                            children: (0, n.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: t
                            })
                        },
                        e
                    );
                })
            ]
        })
    );
}
