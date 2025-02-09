n.d(t, { Z: () => _ });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(399606),
    o = n(481060),
    c = n(734893),
    d = n(346632),
    u = n(314897),
    m = n(8426),
    h = n(969632),
    g = n(535907),
    x = n(388032),
    p = n(767837);
let _ = function (e) {
    let { guildId: t } = e,
        l = (0, a.cj)([h.Z], () => {
            var e;
            return null !== (e = h.Z.getSettings().welcomeMessage) && void 0 !== e ? e : g.z;
        }),
        _ = r.useCallback(
            () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('36371').then(n.bind(n, 893626));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            welcomeMessage: l,
                            onSave: (e) => (0, m._N)(e)
                        });
                }),
            [t, l]
        ),
        C = (0, a.e7)([u.default], () => u.default.getId());
    return (0, c.pw)(l)
        ? (0, i.jsx)(o.zxk, {
              size: o.zxk.Sizes.SMALL,
              onClick: _,
              children: (0, i.jsx)(o.Text, {
                  variant: 'text-sm/medium',
                  children: x.intl.string(x.t['9Z+aEB'])
              })
          })
        : (0, i.jsxs)(o.P3F, {
              className: p.editWelcomeSection,
              onClick: _,
              children: [
                  (0, i.jsx)(d.Z, {
                      guildId: t,
                      welcomeMessage: {
                          authorIds: l.authorIds.length > 0 ? l.authorIds : [C],
                          message: l.message
                      }
                  }),
                  (0, i.jsx)(o.ua7, {
                      text: x.intl.string(x.t.bt75u7),
                      children: (e) =>
                          (0, i.jsxs)('div', {
                              ...e,
                              className: s()(p.actionItemEditButton, p.editWelcomeButton),
                              children: [
                                  (0, i.jsx)(o.vdY, {
                                      size: 'md',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(o.nn4, { children: x.intl.string(x.t.bt75u7) })
                              ]
                          })
                  })
              ]
          });
};
