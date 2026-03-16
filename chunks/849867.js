e.d(t, { A: () => A });
var i = e(627968),
    r = e(64700),
    l = e(311907),
    a = e(397927),
    d = e(967198),
    s = e(652215),
    c = e(665606),
    o = e(985018);
function A(n) {
    let t = (0, l.bG)([d.A], () => d.A.getGuildId()),
        A = n.type === s.rbe.GUILD_CATEGORY,
        u = r.useCallback(() => {
            (0, a.mMO)(async () => {
                let { default: t } = await Promise.all([e.e("59839"), e.e("5743")]).then(e.bind(e, 889186));
                return (e) => (0, i.jsx)(t, { ...e, parentId: n.id });
            });
        }, [n.id]);
    return __OVERLAY__ || t !== s.YYv || !A
        ? null
        : (0, i.jsx)(a.Drp, {
              id: "add-channel-to-category",
              trailingIndicator: { type: "icon", icon: a.TIR },
              label: o.intl.string(c.default["1QJmIL"]),
              action: u,
          });
}
