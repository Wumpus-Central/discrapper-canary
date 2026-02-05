n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(969632),
    r = n(985018);
function s(e) {
    return null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, a.Gh)(e))
        ? null
        : (0, i.jsx)(l.Drp, {
              id: "reactions",
              label: r.intl.string(r.t.wikODq),
              leadingAccessory: { type: "icon", icon: l.ShF },
              icon: l.ShF,
              action: () =>
                  (0, l.mMO)(async () => {
                      let { default: t } = await Promise.resolve().then(n.bind(n, 112753));
                      return (n) => (0, i.jsx)(t, { ...n, message: e });
                  }),
          });
}
