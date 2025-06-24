r.d(t, { default: () => O }), r(388685);
var n = r(255367),
    l = r(73800),
    o = r(442837),
    i = r(481060),
    s = r(749210),
    a = r(910693),
    c = r(501517),
    u = r(592125),
    d = r(51144),
    p = r(981631),
    g = r(388032),
    f = r(130883),
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
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ['guildId', 'user', 'location', 'modReportId']);
    let [y, v] = l.useState(''),
        [P, C] = l.useState(!1),
        k = (0, a.sE)(t, {
            location: O,
            targetUserId: r.id
        }),
        { isModReportClosed: w, isModReport: E } = (0, o.cj)([u.Z], () => {
            let e = u.Z.getChannel(b);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel()
            };
        }),
        T = l.useCallback(() => {
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
        N = l.useCallback((e) => {
            v(e);
        }, []);
    return null != b && E
        ? (0, n.jsxs)(
              i.Y0X,
              m(h({}, x), {
                  parentComponent: 'KickConfirm',
                  children: [
                      (0, n.jsx)(i.xBx, {
                          separator: !1,
                          children: (0, n.jsxs)(i.Kqy, {
                              direction: 'vertical',
                              justify: 'space-between',
                              children: [
                                  (0, n.jsx)(i.olH, {
                                      className: j.closeButton,
                                      onClick: x.onClose
                                  }),
                                  (0, n.jsx)(i.X6q, {
                                      variant: 'heading-lg/semibold',
                                      children: g.intl.formatToPlainString(g.t['1Ie87u'], { user: r.username })
                                  })
                              ]
                          })
                      }),
                      (0, n.jsxs)(i.hzk, {
                          children: [
                              (0, n.jsx)(i.Text, {
                                  variant: 'text-md/normal',
                                  className: j.spacing,
                                  children: g.intl.format(g.t['/yH0UV'], { user: '@'.concat(d.ZP.getName(r)) })
                              }),
                              (0, n.jsx)(i.xJW, {
                                  titleClassName: j.title,
                                  title: g.intl.string(null != b ? g.t.hmKy8P : g.t['+2QEPj']),
                                  className: j.spacing,
                                  children: (0, n.jsx)(i.Kx8, {
                                      maxLength: p.GNZ,
                                      onChange: N,
                                      value: y,
                                      rows: 2
                                  })
                              })
                          ]
                      }),
                      (0, n.jsxs)(i.mzw, {
                          children: [
                              (0, n.jsx)(i.zxk, {
                                  type: 'submit',
                                  color: i.zxk.Colors.RED,
                                  size: i.zxk.Sizes.SMALL,
                                  onClick: T,
                                  children: g.intl.string(g.t['3glT6e'])
                              }),
                              !w &&
                                  (0, n.jsx)(i.XZJ, {
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
              i.ConfirmModal,
              m(
                  h(
                      {
                          header: g.intl.formatToPlainString(g.t['1Ie87u'], { user: r.username }),
                          confirmText: g.intl.string(g.t['3glT6e']),
                          cancelText: g.intl.string(g.t['ETE/oK']),
                          onConfirm: T
                      },
                      x
                  ),
                  {
                      children: [
                          (0, n.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              className: j.spacing,
                              children: g.intl.format(g.t['/yH0UV'], { user: '@'.concat(d.ZP.getName(r)) })
                          }),
                          (0, n.jsx)(i.xJW, {
                              title: g.intl.string(g.t['+2QEPj']),
                              className: j.spacing,
                              children: (0, n.jsx)(i.Kx8, {
                                  maxLength: p.GNZ,
                                  onChange: N,
                                  value: y,
                                  rows: 2
                              })
                          })
                      ]
                  }
              )
          );
}
