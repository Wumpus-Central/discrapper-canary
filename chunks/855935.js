l.d(t, { Z: () => x });
var n = l(200651),
    a = l(192379),
    i = l(498607),
    o = l.n(i),
    s = l(399606),
    r = l(481060),
    c = l(588215),
    C = l(893966),
    d = l(527379),
    u = l(981631),
    m = l(388032);
let h = [c.d$.ORDER_BY_GUILD_JOINED_AT_DESC, c.d$.ORDER_BY_GUILD_JOINED_AT_ASC, c.d$.ORDER_BY_USER_ID_DESC, c.d$.ORDER_BY_USER_ID_ASC];
function x(e) {
    let { guildId: t, onClose: l } = e,
        i = (0, s.e7)([C.Z], () => C.Z.getSearchStateByGuildId(t), [t], o()),
        x = a.useCallback(
            (e) => {
                (0, d.Dr)(t, {
                    ...i,
                    selectedSort: e
                });
            },
            [t, i]
        );
    return (0, n.jsx)(r.v2r, {
        navId: 'members-table-sort-menu',
        onClose: () => {
            null == l || l();
        },
        'aria-label': m.intl.string(m.t['u/7RdX']),
        onSelect: u.dG4,
        children: (0, n.jsx)(r.kSQ, {
            children: h.map((e) => {
                var t;
                return (0, n.jsx)(
                    r.k5B,
                    {
                        id: 'members-table-sort-'.concat(e),
                        label: (function (e) {
                            switch (e) {
                                case c.d$.ORDER_BY_GUILD_JOINED_AT_DESC:
                                    return m.intl.string(m.t.V7zCwM);
                                case c.d$.ORDER_BY_GUILD_JOINED_AT_ASC:
                                    return m.intl.string(m.t.l2Zaen);
                                case c.d$.ORDER_BY_USER_ID_DESC:
                                    return m.intl.string(m.t.xMA6RE);
                                case c.d$.ORDER_BY_USER_ID_ASC:
                                    return m.intl.string(m.t.bUKkZ2);
                                default:
                                    return null;
                            }
                        })(e),
                        checked: (t = i.selectedSort) === c.d$.ORDER_BY_UNSPECIFIED || null == t ? e === c.d$.ORDER_BY_GUILD_JOINED_AT_DESC : e === t,
                        disabled: !1,
                        action: () => x(e),
                        group: 'members-table-sort'
                    },
                    'members-table-sort-'.concat(e)
                );
            })
        })
    });
}
