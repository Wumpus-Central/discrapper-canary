t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    r = t(496675),
    u = t(981631),
    d = t(647086),
    o = t(388032);
function c(e) {
    let n = (0, a.e7)([r.Z], () => r.Z.can(u.Plq.MANAGE_CHANNELS, e));
    return __OVERLAY__
        ? null
        : e.id === d._
          ? (0, l.jsx)(l.Fragment, {
                children: (0, l.jsx)(i.MenuItem, {
                    id: 'create-category',
                    label: o.intl.string(o.t['ISN+ND']),
                    action: () =>
                        (0, i.openModalLazy)(async () => {
                            let { default: e } = await t.e('1812').then(t.bind(t, 477782));
                            return (n) => (0, l.jsx)(e, { ...n });
                        })
                })
            })
          : n
            ? [
                  (0, l.jsx)(
                      i.MenuItem,
                      {
                          id: 'create-channel',
                          label: o.intl.string(o.t['fUYU+v']),
                          action: () =>
                              (0, i.openModalLazy)(async () => {
                                  let { default: n } = await Promise.all([t.e('7590'), t.e('45094'), t.e('74100')]).then(t.bind(t, 218613));
                                  return (t) =>
                                      (0, l.jsx)(n, {
                                          ...t,
                                          channelType: u.d4z.GUILD_TEXT,
                                          guildId: e.id
                                      });
                              })
                      },
                      'create-channel'
                  ),
                  (0, l.jsx)(
                      i.MenuItem,
                      {
                          id: 'create-category',
                          label: o.intl.string(o.t['ISN+ND']),
                          action: () =>
                              (0, i.openModalLazy)(async () => {
                                  let { default: n } = await Promise.all([t.e('7590'), t.e('45094'), t.e('74100')]).then(t.bind(t, 218613));
                                  return (t) =>
                                      (0, l.jsx)(n, {
                                          ...t,
                                          channelType: u.d4z.GUILD_CATEGORY,
                                          guildId: e.id
                                      });
                              })
                      },
                      'create-category'
                  )
              ]
            : null;
}
