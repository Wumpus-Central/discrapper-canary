t.d(n, { Z: () => p });
var r = t(200651);
t(192379);
var i = t(442837),
    a = t(692547),
    o = t(481060),
    l = t(493683),
    s = t(129861),
    d = t(700582),
    c = t(594174),
    u = t(388032),
    _ = t(649176);
function f(e) {
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
function p(e, n) {
    let t = (0, i.e7)([c.default], () => c.default.getCurrentUser());
    return null == t || n.ownerId !== t.id || e.id === t.id
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'make-dm-owner',
              color: 'danger',
              label: u.NW.string(u.t['6t3CyM']),
              action: () => {
                  (0, o.h7j)((i) => {
                      var c, p;
                      return (0, r.jsxs)(
                          o.ConfirmModal,
                          ((c = (function (e) {
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
                                  bodyClassName: _.confirmModal,
                                  header: u.NW.string(u.t.WZoUsr),
                                  confirmText: u.NW.string(u.t['cY+Ooa']),
                                  cancelText: u.NW.string(u.t['ETE/oK']),
                                  onConfirm: () => l.Z.setDMOwner(n.id, e.id)
                              },
                              i
                          )),
                          (p = p =
                              {
                                  children: [
                                      (0, r.jsx)(f, { color: a.Z.unsafe_rawColors.PRIMARY_300.css }),
                                      (0, r.jsxs)('div', {
                                          className: _.fromToWrapper,
                                          children: [
                                              (0, r.jsx)('div', {
                                                  className: _.from,
                                                  children: (0, r.jsx)(d.Z, {
                                                      user: t,
                                                      size: o.EFr.SIZE_80
                                                  })
                                              }),
                                              (0, r.jsx)('div', {
                                                  className: _.to,
                                                  children: (0, r.jsx)(d.Z, {
                                                      user: e,
                                                      size: o.EFr.SIZE_80
                                                  })
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          variant: 'text-md/normal',
                                          children: u.NW.format(u.t.gsBb3N, {
                                              usernameHook: (n, t) =>
                                                  (0, r.jsx)(
                                                      s.Z,
                                                      {
                                                          usernameIcon: (0, r.jsx)(o.qEK, {
                                                              className: _.avatarIcon,
                                                              src: e.getAvatarURL(void 0, 16),
                                                              size: o.EFr.SIZE_16,
                                                              'aria-hidden': !0
                                                          }),
                                                          className: _.discordTag,
                                                          usernameClass: _.username,
                                                          discriminatorClass: _.discriminator,
                                                          user: e
                                                      },
                                                      t
                                                  )
                                          })
                                      })
                                  ]
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(p))
                              : (function (e, n) {
                                    var t = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t.push.apply(t, r);
                                    }
                                    return t;
                                })(Object(p)).forEach(function (e) {
                                    Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(p, e));
                                }),
                          c)
                      );
                  });
              }
          });
}
