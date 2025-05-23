r.d(t, { default: () => d }), r(388685);
var n = r(255367),
    i = r(73800),
    o = r(481060),
    c = r(749210),
    a = r(910693),
    l = r(51144),
    u = r(981631),
    s = r(388032),
    _ = r(605292);
function d(e) {
    var t,
        r,
        { guildId: d, user: f, location: O, modReportId: b } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['guildId', 'user', 'location', 'modReportId']);
    let [E, g] = i.useState(''),
        y = (0, a.sE)(d, {
            location: O,
            targetUserId: f.id
        }),
        m = i.useCallback(() => {
            c.Z.kickUser(d, f.id, E, b), y(a.jQ.KICK);
        }, [d, f.id, E, y, b]),
        j = i.useCallback((e) => {
            g(e);
        }, []);
    return (0, n.jsxs)(
        o.ConfirmModal,
        ((t = (function (e) {
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
        })(
            {
                header: s.intl.formatToPlainString(s.t['1Ie87u'], { user: f.username }),
                confirmText: s.intl.string(s.t['3glT6e']),
                cancelText: s.intl.string(s.t['ETE/oK']),
                onConfirm: m
            },
            p
        )),
        (r = r =
            {
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        className: _.spacing,
                        children: s.intl.format(s.t['/yH0UV'], { user: '@'.concat(l.ZP.getName(f)) })
                    }),
                    (0, n.jsx)(o.xJW, {
                        title: s.intl.string(s.t['+2QEPj']),
                        className: _.spacing,
                        children: (0, n.jsx)(o.Kx8, {
                            maxLength: u.GNZ,
                            onChange: j,
                            value: E,
                            rows: 2
                        })
                    })
                ]
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
}
