n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var a = n(481060),
    i = n(565138),
    l = n(430824),
    o = n(388032),
    s = n(43829);
let c = (e) => {
    let { stageInstance: t } = e,
        n = l.Z.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: s.container,
              children: [
                  (0, r.jsx)(a.X6q, {
                      className: s.header,
                      variant: 'heading-sm/semibold',
                      children: o.intl.string(o.t['InbJ8/'])
                  }),
                  (0, r.jsxs)('div', {
                      className: s.guildContainer,
                      children: [
                          (0, r.jsxs)('div', {
                              className: s.guildInfo,
                              children: [
                                  (0, r.jsx)(i.Z, {
                                      guild: n,
                                      size: i.Z.Sizes.MINI,
                                      className: s.guildIcon
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: n.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.topic
                          })
                      ]
                  })
              ]
          });
};
