t.d(n, { Z: () => g });
var r = t(200651);
t(192379);
var i = t(442837),
    l = t(692547),
    o = t(481060),
    a = t(493683),
    s = t(129861),
    c = t(700582),
    u = t(594174),
    d = t(388032),
    f = t(837014);
function p(e) {
    let { color: n, className: t } = e;
    return (0, r.jsx)('svg', {
        className: t,
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
                    stroke: n,
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
function g(e, n) {
    let t = (0, i.e7)([u.default], () => u.default.getCurrentUser());
    return null == t || n.ownerId !== t.id || e.id === t.id
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'make-dm-owner',
              color: 'danger',
              label: d.NW.string(d.t['6t3CyM']),
              action: () => {
                  (0, o.h7j)((i) => {
                      var u, g;
                      return (0, r.jsxs)(
                          o.ConfirmModal,
                          ((u = (function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = null != arguments[n] ? arguments[n] : {},
                                      r = Object.keys(t);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(t).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (n) {
                                          var r;
                                          (r = t[n]),
                                              n in e
                                                  ? Object.defineProperty(e, n, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[n] = r);
                                      });
                              }
                              return e;
                          })(
                              {
                                  bodyClassName: f.confirmModal,
                                  header: d.NW.string(d.t.WZoUsr),
                                  confirmText: d.NW.string(d.t['cY+Ooa']),
                                  cancelText: d.NW.string(d.t['ETE/oK']),
                                  onConfirm: () => a.Z.setDMOwner(n.id, e.id)
                              },
                              i
                          )),
                          (g = g =
                              {
                                  children: [
                                      (0, r.jsx)(p, { color: l.Z.unsafe_rawColors.PRIMARY_300.css }),
                                      (0, r.jsxs)('div', {
                                          className: f.fromToWrapper,
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: f.from,
                                                  children: (0, r.jsx)(c.Z, {
                                                      user: t,
                                                      size: o.EFr.SIZE_80
                                                  })
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: f.to,
                                                  children: (0, r.jsx)(c.Z, {
                                                      user: e,
                                                      size: o.EFr.SIZE_80
                                                  })
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-md/normal',
                                          children: d.NW.format(d.t.gsBb3N, {
                                              usernameHook: (n, t) =>
                                                  (0, r.jsx)(
                                                      s.Z,
                                                      {
                                                          usernameIcon: (0, r.jsx)(o.qEK, {
                                                              className: f.avatarIcon,
                                                              src: e.getAvatarURL(void 0, 16),
                                                              size: o.EFr.SIZE_16,
                                                              'aria-hidden': !0
                                                          }),
                                                          className: f.discordTag,
                                                          usernameClass: f.username,
                                                          discriminatorClass: f.discriminator,
                                                          user: e
                                                      },
                                                      t
                                                  )
                                          })
                                      })
                                  ]
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(g))
                              : (function (e, n) {
                                    var t = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t.push.apply(t, r);
                                    }
                                    return t;
                                })(Object(g)).forEach(function (e) {
                                    Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(g, e));
                                }),
                          u)
                      );
                  });
              }
          });
}
