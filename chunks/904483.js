n.d(t, { Z: () => u });
var l = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    d = n(496675),
    r = n(981631),
    s = n(647086),
    c = n(388032);
function u(e) {
    let t = (0, i.e7)([d.Z], () => d.Z.can(r.Plq.MANAGE_CHANNELS, e));
    return __OVERLAY__
        ? null
        : e.id === s._
          ? (0, l.jsx)(l.Fragment, {
                children: (0, l.jsx)(a.sNh, {
                    id: 'create-category',
                    label: c.intl.string(c.t['ISN+ND']),
                    action: () =>
                        (0, a.ZDy)(async () => {
                            let { default: e } = await n.e('1812').then(n.bind(n, 477782));
                            return (t) => (0, l.jsx)(e, { ...t });
                        })
                })
            })
          : t
            ? [
                  (0, l.jsx)(
                      a.sNh,
                      {
                          id: 'create-channel',
                          label: c.intl.string(c.t['fUYU+v']),
                          action: () =>
                              (0, a.ZDy)(async () => {
                                  let { default: t } = await Promise.all([n.e('7590'), n.e('45094'), n.e('30762')]).then(n.bind(n, 218613));
                                  return (n) =>
                                      (0, l.jsx)(t, {
                                          ...n,
                                          channelType: r.d4z.GUILD_TEXT,
                                          guildId: e.id
                                      });
                              })
                      },
                      'create-channel'
                  ),
                  (0, l.jsx)(
                      a.sNh,
                      {
                          id: 'create-category',
                          label: c.intl.string(c.t['ISN+ND']),
                          action: () =>
                              (0, a.ZDy)(async () => {
                                  let { default: t } = await Promise.all([n.e('7590'), n.e('45094'), n.e('30762')]).then(n.bind(n, 218613));
                                  return (n) =>
                                      (0, l.jsx)(t, {
                                          ...n,
                                          channelType: r.d4z.GUILD_CATEGORY,
                                          guildId: e.id
                                      });
                              })
                      },
                      'create-category'
                  )
              ]
            : null;
}
