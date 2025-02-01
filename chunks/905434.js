n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(565138),
    s = n(430824),
    o = n(388032),
    l = n(273652);
let u = (e) => {
    let { stageInstance: t } = e,
        n = s.Z.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, i.jsxs)('div', {
              className: l.container,
              children: [
                  (0, i.jsx)(r.X6q, {
                      className: l.header,
                      variant: 'heading-sm/semibold',
                      children: o.intl.string(o.t['InbJ8/'])
                  }),
                  (0, i.jsxs)('div', {
                      className: l.guildContainer,
                      children: [
                          (0, i.jsxs)('div', {
                              className: l.guildInfo,
                              children: [
                                  (0, i.jsx)(a.Z, {
                                      guild: n,
                                      size: a.Z.Sizes.MINI,
                                      className: l.guildIcon
                                  }),
                                  (0, i.jsx)(r.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: n.name
                                  })
                              ]
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.topic
                          })
                      ]
                  })
              ]
          });
};
