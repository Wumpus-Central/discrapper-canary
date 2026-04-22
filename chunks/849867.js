e.d(t, { A: () => g });
var i = e(627968),
    r = e(64700),
    l = e(311907),
    a = e(192308),
    d = e(477782),
    s = e(499373),
    c = e(967198),
    o = e(652215),
    A = e(335993),
    u = e(985018);
function g(n) {
    let t = (0, l.bG)([c.A], () => c.A.getGuildId()),
        g = n.type === o.rbe.GUILD_CATEGORY,
        _ = r.useCallback(() => {
            (0, a.openModalLazy)(async () => {
                let { default: t } = await e.e("59839").then(e.bind(e, 889186));
                return (e) => (0, i.jsx)(t, { ...e, parentId: n.id, source: "favorites_add_to_category" });
            });
        }, [n.id]);
    return __OVERLAY__ || t !== o.YYv || !g
        ? null
        : (0, i.jsx)(d.Dr, {
              id: "add-channel-to-category",
              trailingIndicator: { type: "icon", icon: s.T },
              label: u.intl.string(A.default["1QJmIL"]),
              action: _,
          });
}
