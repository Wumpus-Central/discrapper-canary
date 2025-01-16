t.d(e, {
    Z: function () {
        return p;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(692547),
    a = t(481060),
    o = t(493683),
    d = t(129861),
    u = t(700582),
    s = t(594174),
    c = t(388032),
    f = t(597539);
function m(n) {
    let { color: e, className: t } = n;
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
                    stroke: e,
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
function p(n, e) {
    let t = (0, r.e7)([s.default], () => s.default.getCurrentUser());
    return null == t || e.ownerId !== t.id || n.id === t.id
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'make-dm-owner',
              color: 'danger',
              label: c.intl.string(c.t['6t3CyM']),
              action: () => {
                  var r;
                  return (
                      (r = t),
                      void (0, a.openModal)((t) =>
                          (0, i.jsxs)(a.ConfirmModal, {
                              bodyClassName: f.confirmModal,
                              header: c.intl.string(c.t.WZoUsr),
                              confirmText: c.intl.string(c.t['cY+Ooa']),
                              cancelText: c.intl.string(c.t['ETE/oK']),
                              onConfirm: () => o.Z.setDMOwner(e.id, n.id),
                              ...t,
                              children: [
                                  (0, i.jsx)(m, { color: l.Z.unsafe_rawColors.PRIMARY_300.css }),
                                  (0, i.jsxs)('div', {
                                      className: f.fromToWrapper,
                                      children: [
                                          (0, i.jsx)('div', {
                                              className: f.from,
                                              children: (0, i.jsx)(u.Z, {
                                                  user: r,
                                                  size: a.AvatarSizes.SIZE_80
                                              })
                                          }),
                                          (0, i.jsx)('div', {
                                              className: f.to,
                                              children: (0, i.jsx)(u.Z, {
                                                  user: n,
                                                  size: a.AvatarSizes.SIZE_80
                                              })
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: c.intl.format(c.t.gsBb3N, {
                                          usernameHook: (e, t) =>
                                              (0, i.jsx)(
                                                  d.Z,
                                                  {
                                                      usernameIcon: (0, i.jsx)(a.Avatar, {
                                                          className: f.avatarIcon,
                                                          src: n.getAvatarURL(void 0, 16),
                                                          size: a.AvatarSizes.SIZE_16,
                                                          'aria-hidden': !0
                                                      }),
                                                      className: f.discordTag,
                                                      usernameClass: f.username,
                                                      discriminatorClass: f.discriminator,
                                                      user: n
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
