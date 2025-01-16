var i = r(200651);
r(192379);
var a = r(481060),
    s = r(565138),
    o = r(430824),
    l = r(388032),
    u = r(273652);
let c = (e) => {
    let { stageInstance: n } = e,
        r = o.Z.getGuild(n.guild_id);
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
                                  (0, i.jsx)(s.Z, {
                                      guild: r,
                                      size: s.Z.Sizes.MINI,
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
