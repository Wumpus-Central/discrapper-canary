var i = r(200651);
r(192379);
var a = r(481060),
    o = r(565138),
    s = r(430824),
    l = r(388032),
    u = r(273652);
let c = (e) => {
    let { stageInstance: n } = e,
        r = s.Z.getGuild(n.guild_id);
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: u.container,
              children: [
                  (0, i.jsx)(a.Heading, {
                      className: u.header,
                      variant: 'heading-sm/semibold',
                      children: l.intl.string(l.t['InbJ8/'])
                  }),
                  (0, i.jsxs)('div', {
                      className: u.guildContainer,
                      children: [
                          (0, i.jsxs)('div', {
                              className: u.guildInfo,
                              children: [
                                  (0, i.jsx)(o.Z, {
                                      guild: r,
                                      size: o.Z.Sizes.MINI,
                                      className: u.guildIcon
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: r.name
                                  })
                              ]
                          }),
                          (0, i.jsx)(a.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: n.topic
                          })
                      ]
                  })
              ]
          });
};
n.Z = c;
