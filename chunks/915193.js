t.d(n, {
    Z: function () {
        return Z;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(692547),
    s = t(481060),
    a = t(493683),
    d = t(129861),
    o = t(700582),
    u = t(594174),
    c = t(388032),
    m = t(597539);
function h(e) {
    let { color: n, className: t } = e;
    return (0, i.jsx)('svg', {
        className: t,
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
                    stroke: n,
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
function Z(e, n) {
    let t = (0, r.e7)([u.default], () => u.default.getCurrentUser());
    return null == t || n.ownerId !== t.id || e.id === t.id
        ? null
        : (0, i.jsx)(s.MenuItem, {
              id: 'make-dm-owner',
              color: 'danger',
              label: c.intl.string(c.t['6t3CyM']),
              action: () => {
                  var r;
                  return (
                      (r = t),
                      void (0, s.openModal)((t) =>
                          (0, i.jsxs)(s.ConfirmModal, {
                              bodyClassName: m.confirmModal,
                              header: c.intl.string(c.t.WZoUsr),
                              confirmText: c.intl.string(c.t['cY+Ooa']),
                              cancelText: c.intl.string(c.t['ETE/oK']),
                              onConfirm: () => a.Z.setDMOwner(n.id, e.id),
                              ...t,
                              children: [
                                  (0, i.jsx)(h, { color: l.Z.unsafe_rawColors.PRIMARY_300.css }),
                                  (0, i.jsxs)('div', {
                                      className: m.fromToWrapper,
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: m.from,
                                              children: (0, i.jsx)(o.Z, {
                                                  user: r,
                                                  size: s.AvatarSizes.SIZE_80
                                              })
                                          }),
                                          (0, i.jsx)('div', {
                                              className: m.to,
                                              children: (0, i.jsx)(o.Z, {
                                                  user: e,
                                                  size: s.AvatarSizes.SIZE_80
                                              })
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/normal',
                                      children: c.intl.format(c.t.gsBb3N, {
                                          usernameHook: (n, t) =>
                                              (0, i.jsx)(
                                                  d.Z,
                                                  {
                                                      usernameIcon: (0, i.jsx)(s.Avatar, {
                                                          className: m.avatarIcon,
                                                          src: e.getAvatarURL(void 0, 16),
                                                          size: s.AvatarSizes.SIZE_16,
                                                          'aria-hidden': !0
                                                      }),
                                                      className: m.discordTag,
                                                      usernameClass: m.username,
                                                      discriminatorClass: m.discriminator,
                                                      user: e
                                                  },
                                                  t
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
