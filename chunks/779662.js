_.d(t, { default: () => S });
var r = _(627968),
    l = _(64700),
    n = _(33851),
    s = _.n(n),
    a = _(702841),
    D = _(980707),
    i = _(477782),
    E = _(70738),
    R = _(151781),
    u = _(221950),
    c = _(652215),
    d = _(375708);
let m = [
    E.mF.ORDER_BY_GUILD_JOINED_AT_DESC,
    E.mF.ORDER_BY_GUILD_JOINED_AT_ASC,
    E.mF.ORDER_BY_USER_ID_DESC,
    E.mF.ORDER_BY_USER_ID_ASC,
];
function S(e) {
    let { guildId: t, onClose: _ } = e,
        n = (0, a.bG)([R.A], () => R.A.getSearchStateByGuildId(t), [t], s()),
        S = l.useCallback(
            (e) => {
                (0, u.Ld)(t, { ...n, selectedSort: e });
            },
            [t, n],
        );
    return (0, r.jsx)(D.W, {
        "data-menu-migrated": !0,
        navId: "members-table-sort-menu",
        onClose: () => {
            _?.();
        },
        "aria-label": d.intl.string(d.t["u/7Rdc"]),
        onSelect: c.tEg,
        children: (0, r.jsx)(i.rX, {
            children: m.map((e) => {
                var t;
                let _ = (function (e) {
                    switch (e) {
                        case E.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
                            return d.intl.string(d.t.V7zCwB);
                        case E.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
                            return d.intl.string(d.t.l2Zaet);
                        case E.mF.ORDER_BY_USER_ID_DESC:
                            return d.intl.string(d.t.xMA6RG);
                        case E.mF.ORDER_BY_USER_ID_ASC:
                            return d.intl.string(d.t.bUKkZx);
                        default:
                            return null;
                    }
                })(e);
                return (
                    null != _ &&
                    (0, r.jsx)(
                        i.iD,
                        {
                            id: `members-table-sort-${e}`,
                            label: _,
                            checked:
                                (t = n.selectedSort) === E.mF.ORDER_BY_UNSPECIFIED || null == t
                                    ? e === E.mF.ORDER_BY_GUILD_JOINED_AT_DESC
                                    : e === t,
                            disabled: !1,
                            action: () => S(e),
                            group: "members-table-sort",
                        },
                        `members-table-sort-${e}`,
                    )
                );
            }),
        }),
    });
}
