r.d(t, { default: () => f }), r(47120);
var n = r(200651),
    o = r(192379),
    c = r(481060),
    i = r(749210),
    a = r(910693),
    s = r(51144),
    l = r(981631),
    u = r(388032),
    p = r(373283);
function f(e) {
    var t,
        r,
        { guildId: f, user: b, location: O } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['guildId', 'user', 'location']);
    let [y, d] = o.useState(''),
        j = (0, a.sE)(f, {
            location: O,
            targetUserId: b.id
        }),
        m = o.useCallback(() => {
            i.Z.kickUser(f, b.id, y), j(a.jQ.KICK);
        }, [f, b.id, y, j]),
        h = o.useCallback((e) => {
            d(e);
        }, []);
    return (0, n.jsxs)(
        c.ConfirmModal,
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
                header: u.NW.formatToPlainString(u.t['1Ie87u'], { user: b.username }),
                confirmText: u.NW.string(u.t['3glT6e']),
                cancelText: u.NW.string(u.t['ETE/oK']),
                onConfirm: m
            },
            g
        )),
        (r = r =
            {
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        className: p.spacing,
                        children: u.NW.format(u.t['/yH0UV'], { user: '@'.concat(s.ZP.getName(b)) })
                    }),
                    (0, n.jsx)(c.xJW, {
                        title: u.NW.string(u.t['+2QEPj']),
                        className: p.spacing,
                        children: (0, n.jsx)(c.Kx8, {
                            maxLength: l.GNZ,
                            onChange: h,
                            value: y,
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
