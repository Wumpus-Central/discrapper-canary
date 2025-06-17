n.d(t, { default: () => b }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    s = n(481060),
    o = n(749210),
    a = n(910693),
    c = n(501517),
    u = n(592125),
    d = n(51144),
    p = n(981631),
    g = n(388032),
    f = n(130883),
    m = n(373283);
function j(e) {
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
function h(e, t) {
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
function b(e) {
    var { guildId: t, user: n, location: b, modReportId: x } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['guildId', 'user', 'location', 'modReportId']);
    let [O, v] = l.useState(''),
        [P, C] = l.useState(!1),
        k = (0, a.sE)(t, {
            location: b,
            targetUserId: n.id
        }),
        w = (0, i.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getChannel(x)) ? void 0 : e.isArchivedThread();
        }),
        S = l.useCallback(() => {
            if (
                (o.Z.kickUser(t, n.id, O, x).then(() => {
                    P && null != x && c.Z.resolveFlag(x);
                }),
                k(a.jQ.KICK),
                null != x)
            ) {
                var e;
                null == (e = y.onClose) || e.call(y);
            }
        }, [t, n.id, O, k, x, P, y]),
        N = l.useCallback((e) => {
            v(e);
        }, []);
    return null != x
        ? (0, r.jsxs)(
              s.Y0X,
              h(j({}, y), {
                  parentComponent: 'KickConfirm',
                  children: [
                      (0, r.jsx)(s.xBx, {
                          separator: !1,
                          children: (0, r.jsxs)(s.Kqy, {
                              direction: 'vertical',
                              justify: 'space-between',
                              children: [
                                  (0, r.jsx)(s.olH, {
                                      className: m.closeButton,
                                      onClick: y.onClose
                                  }),
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-lg/semibold',
                                      children: g.intl.formatToPlainString(g.t['1Ie87u'], { user: n.username })
                                  })
                              ]
                          })
                      }),
                      (0, r.jsxs)(s.hzk, {
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  className: m.spacing,
                                  children: g.intl.format(g.t['/yH0UV'], { user: '@'.concat(d.ZP.getName(n)) })
                              }),
                              (0, r.jsx)(s.xJW, {
                                  titleClassName: m.title,
                                  title: g.intl.string(null != x ? g.t.hmKy8P : g.t['+2QEPj']),
                                  className: m.spacing,
                                  children: (0, r.jsx)(s.Kx8, {
                                      maxLength: p.GNZ,
                                      onChange: N,
                                      value: O,
                                      rows: 2
                                  })
                              })
                          ]
                      }),
                      (0, r.jsxs)(s.mzw, {
                          children: [
                              (0, r.jsx)(s.zxk, {
                                  type: 'submit',
                                  color: s.zxk.Colors.RED,
                                  size: s.zxk.Sizes.SMALL,
                                  onClick: S,
                                  children: g.intl.string(g.t['3glT6e'])
                              }),
                              !w &&
                                  (0, r.jsx)(s.XZJ, {
                                      value: P,
                                      onChange: (e, t) => {
                                          C(t);
                                      },
                                      children: g.intl.string(f.default['8yIKen'])
                                  })
                          ]
                      })
                  ]
              })
          )
        : (0, r.jsxs)(
              s.ConfirmModal,
              h(
                  j(
                      {
                          header: g.intl.formatToPlainString(g.t['1Ie87u'], { user: n.username }),
                          confirmText: g.intl.string(g.t['3glT6e']),
                          cancelText: g.intl.string(g.t['ETE/oK']),
                          onConfirm: S
                      },
                      y
                  ),
                  {
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              className: m.spacing,
                              children: g.intl.format(g.t['/yH0UV'], { user: '@'.concat(d.ZP.getName(n)) })
                          }),
                          (0, r.jsx)(s.xJW, {
                              title: g.intl.string(g.t['+2QEPj']),
                              className: m.spacing,
                              children: (0, r.jsx)(s.Kx8, {
                                  maxLength: p.GNZ,
                                  onChange: N,
                                  value: O,
                                  rows: 2
                              })
                          })
                      ]
                  }
              )
          );
}
