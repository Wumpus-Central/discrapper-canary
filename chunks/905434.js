n.d(t, { Z: () => d });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(565138),
    a = n(430824),
    s = n(388032),
    o = n(827745);
let d = (e) => {
    let { stageInstance: t } = e,
        n = a.Z.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, l.jsxs)('div', {
              className: o.container,
              children: [
                  (0, l.jsx)(i.X6q, {
                      className: o.header,
                      variant: 'heading-sm/semibold',
                      children: s.intl.string(s.t['InbJ8/'])
                  }),
                  (0, l.jsxs)('div', {
                      className: o.guildContainer,
                      children: [
                          (0, l.jsxs)('div', {
                              className: o.guildInfo,
                              children: [
                                  (0, l.jsx)(r.Z, {
                                      guild: n,
                                      size: r.Z.Sizes.MINI,
                                      className: o.guildIcon
                                  }),
                                  (0, l.jsx)(i.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: n.name
                                  })
                              ]
                          }),
                          (0, l.jsx)(i.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.topic
                          })
                      ]
                  })
              ]
          });
};
