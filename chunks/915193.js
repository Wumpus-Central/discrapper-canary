t.d(n, { Z: () => p });
var i = t(200651);
t(192379);
var r = t(442837),
    a = t(692547),
    l = t(481060),
    o = t(493683),
    s = t(129861),
    d = t(700582),
    u = t(594174),
    c = t(388032),
    _ = t(663230);
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
function p(e, n) {
    let t = (0, r.e7)([u.default], () => u.default.getCurrentUser());
    return null == t || n.ownerId !== t.id || e.id === t.id
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'make-dm-owner',
              color: 'danger',
              label: c.intl.string(c.t['6t3CyM']),
              action: () => {
                  (0, l.h7j)((r) =>
                      (0, i.jsxs)(l.ConfirmModal, {
                          bodyClassName: _.confirmModal,
                          header: c.intl.string(c.t.WZoUsr),
                          confirmText: c.intl.string(c.t['cY+Ooa']),
                          cancelText: c.intl.string(c.t['ETE/oK']),
                          onConfirm: () => o.Z.setDMOwner(n.id, e.id),
                          ...r,
                          children: [
                              (0, i.jsx)(h, { color: a.Z.unsafe_rawColors.PRIMARY_300.css }),
                              (0, i.jsxs)('div', {
                                  className: _.fromToWrapper,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: _.from,
                                          children: (0, i.jsx)(d.Z, {
                                              user: t,
                                              size: l.EFr.SIZE_80
                                          })
                                      }),
                                      (0, i.jsx)('div', {
                                          className: _.to,
                                          children: (0, i.jsx)(d.Z, {
                                              user: e,
                                              size: l.EFr.SIZE_80
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  children: c.intl.format(c.t.gsBb3N, {
                                      usernameHook: (n, t) =>
                                          (0, i.jsx)(
                                              s.Z,
                                              {
                                                  usernameIcon: (0, i.jsx)(l.qEK, {
                                                      className: _.avatarIcon,
                                                      src: e.getAvatarURL(void 0, 16),
                                                      size: l.EFr.SIZE_16,
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
                      })
                  );
              }
          });
}
