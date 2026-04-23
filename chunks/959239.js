n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(477782),
    a = n(217306),
    r = n(192308),
    s = n(969632),
    o = n(985018);
function d(e) {
    return null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, s.Gh)(e))
        ? null
        : (0, i.jsx)(l.Dr, {
              id: "reactions",
              label: o.intl.string(o.t.wikODq),
              leadingAccessory: { type: "icon", icon: a.S },
              icon: a.S,
              action: () =>
                  (0, r.openModalLazy)(async () => {
                      let { default: t } = await Promise.resolve().then(n.bind(n, 112753));
                      return (n) => (0, i.jsx)(t, { ...n, message: e });
                  }),
          });
}
