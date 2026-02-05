l.d(t, { default: () => h });
var n = l(627968),
    i = l(64700),
    s = l(33851),
    a = l.n(s),
    r = l(417597),
    o = l(397927),
    C = l(70738),
    d = l(266047),
    c = l(221950),
    u = l(652215),
    m = l(985018);
let x = [
    C.mF.ORDER_BY_GUILD_JOINED_AT_DESC,
    C.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
    C.mF.ORDER_BY_USER_ID_DESC,
    C.mF.ORDER_BY_USER_ID_ASC,
];
function h(e) {
    let { guildId: t, onClose: l } = e,
        s = (0, r.bG)([d.A], () => d.A.getSearchStateByGuildId(t), [t], a()),
        h = i.useCallback(
            (e) => {
                (0, c.Ld)(t, { ...s, selectedSort: e });
            },
            [t, s],
        );
    return (0, n.jsx)(o.W1t, {
        "data-menu-migrated": !0,
        navId: "members-table-sort-menu",
        onClose: () => {
            l?.();
        },
        "aria-label": m.intl.string(m.t["u/7Rdc"]),
        onSelect: u.tEg,
        children: (0, n.jsx)(o.rXV, {
            children: x.map((e) => {
                var t;
                let l = (function (e) {
                    switch (e) {
                        case C.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
                            return m.intl.string(m.t.V7zCwB);
                        case C.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
                            return m.intl.string(m.t.l2Zaet);
                        case C.mF.ORDER_BY_USER_ID_DESC:
                            return m.intl.string(m.t.xMA6RG);
                        case C.mF.ORDER_BY_USER_ID_ASC:
                            return m.intl.string(m.t.bUKkZx);
                        default:
                            return null;
                    }
                })(e);
                return (
                    null != l &&
                    (0, n.jsx)(
                        o.iDA,
                        {
                            id: `members-table-sort-${e}`,
                            label: l,
                            checked:
                                (t = s.selectedSort) === C.mF.ORDER_BY_UNSPECIFIED || null == t
                                    ? e === C.mF.ORDER_BY_GUILD_JOINED_AT_DESC
                                    : e === t,
                            disabled: !1,
                            action: () => h(e),
                            group: "members-table-sort",
                        },
                        `members-table-sort-${e}`,
                    )
                );
            }),
        }),
    });
}
