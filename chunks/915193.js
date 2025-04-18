n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(692547),
    l = n(481060),
    s = n(493683),
    a = n(129861),
    d = n(700582),
    c = n(594174),
    u = n(388032),
    g = n(991380);
function f(e) {
    let { color: t, className: n } = e;
    return (0, r.jsx)('svg', {
        className: n,
        height: '16',
        width: '80',
        viewBox: '0 0 80 16',
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, r.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            opacity: '.6',
            children: [
                (0, r.jsx)('path', { d: 'm0 0h80v16h-80z' }),
                (0, r.jsxs)('g', {
                    stroke: t,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: '2',
                    children: [
                        (0, r.jsx)('path', { d: 'm71 1h4v4.16' }),
                        (0, r.jsx)('path', {
                            d: 'm2 1h4v4.16',
                            transform: 'matrix(-1 0 0 1 8 0)'
                        }),
                        (0, r.jsx)('path', { d: 'm51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4' }),
                        (0, r.jsx)('path', { d: 'm72.13 10.474 2.869 3.12 2.631-3.12' })
                    ]
                })
            ]
        })
    });
}
function m(e, t) {
    let n = (0, i.e7)([c.default], () => c.default.getCurrentUser());
    return null == n || t.ownerId !== n.id || e.id === n.id
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'make-dm-owner',
              color: 'danger',
              label: u.NW.string(u.t['6t3CyM']),
              action: () => {
                  (0, l.h7j)((i) => {
                      var c, m;
                      return (0, r.jsxs)(
                          l.ConfirmModal,
                          ((c = (function (e) {
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
                          })(
                              {
                                  bodyClassName: g.confirmModal,
                                  header: u.NW.string(u.t.WZoUsr),
                                  confirmText: u.NW.string(u.t['cY+Ooa']),
                                  cancelText: u.NW.string(u.t['ETE/oK']),
                                  onConfirm: () => s.Z.setDMOwner(t.id, e.id)
                              },
                              i
                          )),
                          (m = m =
                              {
                                  children: [
                                      (0, r.jsx)(f, { color: o.Z.unsafe_rawColors.PRIMARY_300.css }),
                                      (0, r.jsxs)('div', {
                                          className: g.fromToWrapper,
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: g.from,
                                                  children: (0, r.jsx)(d.Z, {
                                                      user: n,
                                                      size: l.EFr.SIZE_80
                                                  })
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: g.to,
                                                  children: (0, r.jsx)(d.Z, {
                                                      user: e,
                                                      size: l.EFr.SIZE_80
                                                  })
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          children: u.NW.format(u.t.gsBb3N, {
                                              usernameHook: (t, n) =>
                                                  (0, r.jsx)(
                                                      a.Z,
                                                      {
                                                          usernameIcon: (0, r.jsx)(l.qEK, {
                                                              className: g.avatarIcon,
                                                              src: e.getAvatarURL(void 0, 16),
                                                              size: l.EFr.SIZE_16,
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
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
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
