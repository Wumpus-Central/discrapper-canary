t.d(i, { Z: () => c });
var l = t(200651);
t(192379);
var a = t(442837),
    e = t(481060),
    r = t(131951),
    d = t(388032);
function c(n) {
    return (0, a.e7)([r.Z], () => r.Z.hasContext(n.id), [n.id])
        ? (0, l.jsx)(e.sNh, {
              id: 'ingame-voice',
              label: d.intl.string(d.t['pOul5+']),
              action: () =>
                  (0, e.ZDy)(async () => {
                      let { default: i } = await t.e('45406').then(t.bind(t, 344516));
                      return (t) =>
                          (0, l.jsx)(i, {
                              ...t,
                              mediaEngineContext: n.id,
                              title: n.name
                          });
                  })
          })
        : null;
}
