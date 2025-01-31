i.d(n, { Z: () => Z });
var r = i(200651);
i(192379);
var s = i(442837),
    d = i(692547),
    t = i(481060),
    a = i(493683),
    l = i(129861),
    o = i(700582),
    c = i(594174),
    u = i(388032),
    m = i(597539);
function h(e) {
    let { color: n, className: i } = e;
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
function Z(e, n) {
    let i = (0, s.e7)([c.default], () => c.default.getCurrentUser());
    return null == i || n.ownerId !== i.id || e.id === i.id
        ? null
        : (0, r.jsx)(t.sNh, {
              id: 'make-dm-owner',
              color: 'danger',
              label: u.intl.string(u.t['6t3CyM']),
              action: () => {
                  (0, t.h7j)((s) =>
                      (0, r.jsxs)(t.ConfirmModal, {
                          bodyClassName: m.confirmModal,
                          header: u.intl.string(u.t.WZoUsr),
                          confirmText: u.intl.string(u.t['cY+Ooa']),
                          cancelText: u.intl.string(u.t['ETE/oK']),
                          onConfirm: () => a.Z.setDMOwner(n.id, e.id),
                          ...s,
                          children: [
                              (0, r.jsx)(h, { color: d.Z.unsafe_rawColors.PRIMARY_300.css }),
                              (0, r.jsxs)('div', {
                                  className: m.fromToWrapper,
                                  children: [
                                      (0, r.jsx)('div', {
                                          className: m.from,
                                          children: (0, r.jsx)(o.Z, {
                                              user: i,
                                              size: t.EFr.SIZE_80
                                          })
                                      }),
                                      (0, r.jsx)('div', {
                                          className: m.to,
                                          children: (0, r.jsx)(o.Z, {
                                              user: e,
                                              size: t.EFr.SIZE_80
                                          })
                                      })
                                  ]
                              }),
                              (0, r.jsx)(t.Text, {
                                  variant: 'text-md/normal',
                                  children: u.intl.format(u.t.gsBb3N, {
                                      usernameHook: (n, i) =>
                                          (0, r.jsx)(
                                              l.Z,
                                              {
                                                  usernameIcon: (0, r.jsx)(t.qEK, {
                                                      className: m.avatarIcon,
                                                      src: e.getAvatarURL(void 0, 16),
                                                      size: t.EFr.SIZE_16,
                                                      'aria-hidden': !0
                                                  }),
                                                  className: m.discordTag,
                                                  usernameClass: m.username,
                                                  discriminatorClass: m.discriminator,
                                                  user: e
                                              },
                                              i
                                          )
                                  })
                              })
                          ]
                      })
                  );
              }
          });
}
