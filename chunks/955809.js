i.d(t, {
    Z: function () {
        return u;
    }
});
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(131951),
    d = i(388032);
function u(n) {
    return (0, l.e7)([r.Z], () => r.Z.hasContext(n.id), [n.id])
        ? (0, e.jsx)(a.MenuItem, {
              id: 'ingame-voice',
              label: d.intl.string(d.t['pOul5+']),
              action: () =>
                  (0, a.openModalLazy)(async () => {
                      let { default: t } = await i.e('45406').then(i.bind(i, 344516));
                      return (i) =>
                          (0, e.jsx)(t, {
                              ...i,
                              mediaEngineContext: n.id,
                              title: n.name
                          });
                  })
          })
        : null;
}
