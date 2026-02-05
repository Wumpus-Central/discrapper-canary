l.d(t, { A: () => m });
var n = l(627968);
l(64700);
var i = l(33851),
    s = l.n(i),
    a = l(989349),
    r = l.n(a),
    o = l(417597),
    C = l(266047),
    d = l(221950),
    c = l(487518),
    u = l(985018);
function m(e) {
    let { guildId: t, onClose: l } = e,
        i = (0, o.bG)([C.A], () => C.A.getSearchStateByGuildId(t), [t], s()),
        { selectedJoinDateOption: a } = i,
        { afterDate: m, beforeDate: x, optionId: h } = a,
        g = h === c.H_.CUSTOM,
        _ = g && null != m ? r()(m).format(c.Ti) : null,
        H = g && null != x ? r()(x).format(c.Ti) : null;
    return (0, n.jsx)(c.Ay, {
        startDateLabel: _,
        endDateLabel: H,
        afterDate: m,
        beforeDate: x,
        selectedOption: h,
        isCustomDateRange: g,
        menuName: "joined-date",
        accessibilityLabel: u.intl.string(u.t.XMVinX),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let n = null != l ? r()().subtract(l.input, l.unit).valueOf() : null;
            (0, d.Ld)(t, { ...i, selectedJoinDateOption: { optionId: e, afterDate: n, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, d.Ld)(t, {
                ...i,
                selectedJoinDateOption: { optionId: c.H_.CUSTOM, afterDate: g ? m : null, beforeDate: g ? x : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, d.Ld)(t, {
                ...i,
                selectedJoinDateOption: { optionId: c.H_.CUSTOM, afterDate: e.valueOf(), beforeDate: x },
            });
        },
        onSelectEndDate: function (e) {
            (0, d.Ld)(t, {
                ...i,
                selectedJoinDateOption: { optionId: c.H_.CUSTOM, afterDate: m, beforeDate: e.valueOf() },
            });
        },
    });
}
