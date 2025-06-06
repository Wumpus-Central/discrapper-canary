r.d(t, { default: () => O }), r(388685);
var n = r(255367),
    l = r(73800),
    i = r(442837),
    o = r(481060),
    s = r(749210),
    a = r(910693),
    c = r(501517),
    u = r(592125),
    d = r(51144),
    p = r(981631),
    g = r(388032),
    f = r(463959),
    j = r(373283);
function h(e) {
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
function m(e, t) {
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
function O(e) {
    var { guildId: t, user: r, location: O, modReportId: b } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ['guildId', 'user', 'location', 'modReportId']);
    let [y, v] = l.useState(''),
        [P, C] = l.useState(!1),
        k = (0, a.sE)(t, {
            location: O,
            targetUserId: r.id
        }),
        w = (0, i.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getChannel(b)) ? void 0 : e.isArchivedThread();
        }),
        E = l.useCallback(() => {
            if (
                (s.Z.kickUser(t, r.id, y, b).then(() => {
                    P && null != b && c.Z.resolveFlag(b);
                }),
                k(a.jQ.KICK),
                null != b)
            ) {
                var e;
                null == (e = x.onClose) || e.call(x);
            }
        }, [t, r.id, y, k, b, P, x]),
        T = l.useCallback((e) => {
            v(e);
        }, []);
    return null != b
        ? (0, n.jsxs)(
              o.Y0X,
              m(h({}, x), {
                  parentComponent: 'KickConfirm',
                  children: [
                      (0, n.jsx)(o.xBx, {
                          separator: !1,
                          children: (0, n.jsxs)(o.Kqy, {
                              direction: 'vertical',
                              justify: 'space-between',
                              children: [
                                  (0, n.jsx)(o.olH, {
                                      className: j.closeButton,
                                      onClick: x.onClose
                                  }),
                                  (0, n.jsx)(o.X6q, {
                                      variant: 'heading-lg/semibold',
                                      children: g.intl.formatToPlainString(g.t['1Ie87u'], { user: r.username })
                                  })
                              ]
                          })
                      }),
                      (0, n.jsxs)(o.hzk, {
                          children: [
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  className: j.spacing,
                                  children: g.intl.format(g.t['/yH0UV'], { user: '@'.concat(d.ZP.getName(r)) })
                              }),
                              (0, n.jsx)(o.xJW, {
                                  titleClassName: j.title,
                                  title: g.intl.string(null != b ? g.t.hmKy8P : g.t['+2QEPj']),
                                  className: j.spacing,
                                  children: (0, n.jsx)(o.Kx8, {
                                      maxLength: p.GNZ,
                                      onChange: T,
                                      value: y,
                                      rows: 2
                                  })
                              })
                          ]
                      }),
                      (0, n.jsxs)(o.mzw, {
                          children: [
                              (0, n.jsx)(o.zxk, {
                                  type: 'submit',
                                  color: o.zxk.Colors.RED,
                                  size: o.zxk.Sizes.SMALL,
                                  onClick: E,
                                  children: g.intl.string(g.t['3glT6e'])
                              }),
                              !w &&
                                  (0, n.jsx)(o.XZJ, {
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
        : (0, n.jsxs)(
              o.ConfirmModal,
              m(
                  h(
                      {
                          header: g.intl.formatToPlainString(g.t['1Ie87u'], { user: r.username }),
                          confirmText: g.intl.string(g.t['3glT6e']),
                          cancelText: g.intl.string(g.t['ETE/oK']),
                          onConfirm: E
                      },
                      x
                  ),
                  {
                      children: [
                          (0, n.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              className: j.spacing,
                              children: g.intl.format(g.t['/yH0UV'], { user: '@'.concat(d.ZP.getName(r)) })
                          }),
                          (0, n.jsx)(o.xJW, {
                              title: g.intl.string(g.t['+2QEPj']),
                              className: j.spacing,
                              children: (0, n.jsx)(o.Kx8, {
                                  maxLength: p.GNZ,
                                  onChange: T,
                                  value: y,
                                  rows: 2
                              })
                          })
                      ]
                  }
              )
          );
}
