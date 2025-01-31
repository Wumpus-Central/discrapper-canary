n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(79390),
    s = n(388032);
function r(e) {
    return null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, a.eQ)(e))
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'reactions',
              label: s.intl.string(s.t.wikODg),
              icon: l.EO4,
              action: () =>
                  (0, l.ZDy)(async () => {
                      let { default: t } = await Promise.resolve().then(n.bind(n, 785388));
                      return (n) =>
                          (0, i.jsx)(t, {
                              ...n,
                              message: e
                          });
                  })
          });
}
