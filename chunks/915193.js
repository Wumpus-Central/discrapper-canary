i.d(e, {
    Z: function () {
        return Z;
    }
});
var r = i(200651);
i(192379);
var t = i(442837),
    a = i(692547),
    s = i(481060),
    d = i(493683),
    o = i(129861),
    l = i(700582),
    u = i(594174),
    c = i(388032),
    m = i(985254);
function f(n) {
    let { color: e, className: i } = n;
    return (0, r.jsx)('svg', {
        className: i,
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
                    stroke: e,
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
function Z(n, e) {
    let i = (0, t.e7)([u.default], () => u.default.getCurrentUser());
    return null == i || e.ownerId !== i.id || n.id === i.id
        ? null
        : (0, r.jsx)(s.MenuItem, {
              id: 'make-dm-owner',
              color: 'danger',
              label: c.intl.string(c.t['6t3CyM']),
              action: () => {
                  var t;
                  return (
                      (t = i),
                      void (0, s.openModal)((i) =>
                          (0, r.jsxs)(s.ConfirmModal, {
                              bodyClassName: m.confirmModal,
                              header: c.intl.string(c.t.WZoUsr),
                              confirmText: c.intl.string(c.t['cY+Ooa']),
                              cancelText: c.intl.string(c.t['ETE/oK']),
                              onConfirm: () => d.Z.setDMOwner(e.id, n.id),
                              ...i,
                              children: [
                                  (0, r.jsx)(f, { color: a.Z.unsafe_rawColors.PRIMARY_300.css }),
                                  (0, r.jsxs)('div', {
                                      className: m.fromToWrapper,
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: m.from,
                                              children: (0, r.jsx)(l.Z, {
                                                  user: t,
                                                  size: s.AvatarSizes.SIZE_80
                                              })
                                          }),
                                          (0, r.jsx)('div', {
                                              className: m.to,
                                              children: (0, r.jsx)(l.Z, {
                                                  user: n,
                                                  size: s.AvatarSizes.SIZE_80
                                              })
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-md/normal',
                                      children: c.intl.format(c.t.gsBb3N, {
                                          usernameHook: (e, i) =>
                                              (0, r.jsx)(
                                                  o.Z,
                                                  {
                                                      usernameIcon: (0, r.jsx)(s.Avatar, {
                                                          className: m.avatarIcon,
                                                          src: n.getAvatarURL(void 0, 16),
                                                          size: s.AvatarSizes.SIZE_16,
                                                          'aria-hidden': !0
                                                      }),
                                                      className: m.discordTag,
                                                      usernameClass: m.username,
                                                      discriminatorClass: m.discriminator,
                                                      user: n
                                                  },
                                                  i
                                              )
                                      })
                                  })
                              ]
                          })
                      )
                  );
              }
          });
}
