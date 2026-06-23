_.d(e, { default: () => S });
var r = _(627968),
    n = _(64700),
    l = _(33851),
    s = _.n(l),
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
function S(t) {
    let { guildId: e, onClose: _ } = t,
        l = (0, a.bG)([R.A], () => R.A.getSearchStateByGuildId(e), [e], s()),
        S = n.useCallback(
            (t) => {
                (0, u.Ld)(e, { ...l, selectedSort: t });
            },
            [e, l],
        );
    return (0, r.jsx)(D.W, {
        "data-menu-migrated": !0,
        navId: "members-table-sort-menu",
        onClose: function () {
            _?.();
        },
        "aria-label": d.intl.string(d.t["u/7Rdc"]),
        onSelect: c.tEg,
        children: (0, r.jsx)(i.rX, {
            children: m.map((t) => {
                var e;
                let _ = (function (t) {
                    switch (t) {
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
                })(t);
                return (
                    null != _ &&
                    (0, r.jsx)(
                        i.iD,
                        {
                            id: `members-table-sort-${t}`,
                            label: _,
                            checked:
                                (e = l.selectedSort) === E.mF.ORDER_BY_UNSPECIFIED || null == e
                                    ? t === E.mF.ORDER_BY_GUILD_JOINED_AT_DESC
                                    : t === e,
                            disabled: !1,
                            action: () => S(t),
                            group: "members-table-sort",
                        },
                        `members-table-sort-${t}`,
                    )
                );
            }),
        }),
    });
}
