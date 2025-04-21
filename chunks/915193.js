n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(692547),
    o = n(481060),
    s = n(493683),
    a = n(129861),
    d = n(700582),
    c = n(594174),
    u = n(388032),
    g = n(837014);
function f(e) {
    let { color: t, className: n } = e;
    return (0, i.jsx)('svg', {
        className: n,
        height: '16',
        width: '80',
        viewBox: '0 0 80 16',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, i.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            opacity: '.6',
            children: [
                (0, i.jsx)('path', { d: 'm0 0h80v16h-80z' }),
                (0, i.jsxs)('g', {
                    stroke: t,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '2',
                    children: [
                        (0, i.jsx)('path', { d: 'm71 1h4v4.16' }),
                        (0, i.jsx)('path', {
                            d: 'm2 1h4v4.16',
                            transform: 'matrix(-1 0 0 1 8 0)'
                        }),
                        (0, i.jsx)('path', { d: 'm51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4' }),
                        (0, i.jsx)('path', { d: 'm72.13 10.474 2.869 3.12 2.631-3.12' })
                    ]
                })
            ]
        })
    });
}
function m(e, t) {
    let n = (0, r.e7)([c.default], () => c.default.getCurrentUser());
    return null == n || t.ownerId !== n.id || e.id === n.id
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'make-dm-owner',
              color: 'danger',
              label: u.intl.string(u.t['6t3CyM']),
              action: () => {
                  (0, o.h7j)((r) => {
                      var c, m;
                      return (0, i.jsxs)(
                          o.ConfirmModal,
                          ((c = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          (i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = i);
                                      });
                              }
                              return e;
                          })(
                              {
                                  bodyClassName: g.confirmModal,
                                  header: u.intl.string(u.t.WZoUsr),
                                  confirmText: u.intl.string(u.t['cY+Ooa']),
                                  cancelText: u.intl.string(u.t['ETE/oK']),
                                  onConfirm: () => s.Z.setDMOwner(t.id, e.id)
                              },
                              r
                          )),
                          (m = m =
                              {
                                  children: [
                                      (0, i.jsx)(f, { color: l.Z.unsafe_rawColors.PRIMARY_300.css }),
                                      (0, i.jsxs)('div', {
                                          className: g.fromToWrapper,
                                          children: [
                                              (0, i.jsx)('div', {
                                                  className: g.from,
                                                  children: (0, i.jsx)(d.Z, {
                                                      user: n,
                                                      size: o.EFr.SIZE_80
                                                  })
                                              }),
                                              (0, i.jsx)('div', {
                                                  className: g.to,
                                                  children: (0, i.jsx)(d.Z, {
                                                      user: e,
                                                      size: o.EFr.SIZE_80
                                                  })
                                              })
                                          ]
                                      }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-md/normal',
                                          children: u.intl.format(u.t.gsBb3N, {
                                              usernameHook: (t, n) =>
                                                  (0, i.jsx)(
                                                      a.Z,
                                                      {
                                                          usernameIcon: (0, i.jsx)(o.qEK, {
                                                              className: g.avatarIcon,
                                                              src: e.getAvatarURL(void 0, 16),
                                                              size: o.EFr.SIZE_16,
                                                              'aria-hidden': !0
                                                          }),
                                                          className: g.discordTag,
                                                          usernameClass: g.username,
                                                          discriminatorClass: g.discriminator,
                                                          user: e
                                                      },
                                                      n
                                                  )
                                          })
                                      })
                                  ]
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(m))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(m)).forEach(function (e) {
                                    Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(m, e));
                                }),
                          c)
                      );
                  });
              }
          });
}
