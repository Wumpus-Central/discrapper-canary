l.d(t, { default: () => g });
var n = l(627968),
    i = l(64700),
    a = l(33851),
    s = l.n(a),
    C = l(417597),
    r = l(861672),
    o = l(477782),
    d = l(70738),
    c = l(266047),
    u = l(221950),
    m = l(652215),
    h = l(985018);
let x = [
    d.mF.ORDER_BY_GUILD_JOINED_AT_DESC,
    d.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
    d.mF.ORDER_BY_USER_ID_DESC,
    d.mF.ORDER_BY_USER_ID_ASC,
];
function g(e) {
    let { guildId: t, onClose: l } = e,
        a = (0, C.bG)([c.A], () => c.A.getSearchStateByGuildId(t), [t], s()),
        g = i.useCallback(
            (e) => {
                (0, u.Ld)(t, { ...a, selectedSort: e });
            },
            [t, a],
        );
    return (0, n.jsx)(r.W, {
        "data-menu-migrated": !0,
        navId: "members-table-sort-menu",
        onClose: () => {
            l?.();
        },
        "aria-label": h.intl.string(h.t["u/7Rdc"]),
        onSelect: m.tEg,
        children: (0, n.jsx)(o.rX, {
            children: x.map((e) => {
                var t;
                let l = (function (e) {
                    switch (e) {
                        case d.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
                            return h.intl.string(h.t.V7zCwB);
                        case d.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
                            return h.intl.string(h.t.l2Zaet);
                        case d.mF.ORDER_BY_USER_ID_DESC:
                            return h.intl.string(h.t.xMA6RG);
                        case d.mF.ORDER_BY_USER_ID_ASC:
                            return h.intl.string(h.t.bUKkZx);
                        default:
                            return null;
                    }
                })(e);
                return (
                    null != l &&
                    (0, n.jsx)(
                        o.iD,
                        {
                            id: `members-table-sort-${e}`,
                            label: l,
                            checked:
                                (t = a.selectedSort) === d.mF.ORDER_BY_UNSPECIFIED || null == t
                                    ? e === d.mF.ORDER_BY_GUILD_JOINED_AT_DESC
                                    : e === t,
                            disabled: !1,
                            action: () => g(e),
                            group: "members-table-sort",
                        },
                        `members-table-sort-${e}`,
                    )
                );
            }),
        }),
    });
}
