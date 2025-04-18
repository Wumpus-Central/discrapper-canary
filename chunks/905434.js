n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(565138),
    a = n(430824),
    o = n(388032),
    s = n(680006);
let c = (e) => {
    let { stageInstance: t } = e,
        n = a.Z.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, r.jsxs)('div', {
              className: s.container,
              children: [
                  (0, r.jsx)(l.X6q, {
                      className: s.header,
                      variant: 'heading-sm/semibold',
                      children: o.NW.string(o.t['InbJ8/'])
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
                                  (0, r.jsx)(l.Text, {
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: n.name
                                  })
                              ]
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: 'text-md/semibold',
                              color: 'header-primary',
                              children: t.topic
                          })
                      ]
                  })
              ]
          });
};
