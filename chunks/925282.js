l.d(t, { A: () => m });
var n = l(627968);
l(64700);
var i = l(33851),
    a = l.n(i),
    s = l(989349),
    C = l.n(s),
    r = l(417597),
    o = l(266047),
    d = l(221950),
    c = l(487518),
    u = l(985018);
function m(e) {
    let { guildId: t, onClose: l } = e,
        i = (0, r.bG)([o.A], () => o.A.getSearchStateByGuildId(t), [t], a()),
        { selectedJoinDateOption: s } = i,
        { afterDate: m, beforeDate: h, optionId: x } = s,
        g = x === c.H_.CUSTOM,
        H = g && null != m ? C()(m).format(c.Ti) : null,
        _ = g && null != h ? C()(h).format(c.Ti) : null;
    return (0, n.jsx)(c.Ay, {
        startDateLabel: H,
        endDateLabel: _,
        afterDate: m,
        beforeDate: h,
        selectedOption: x,
        isCustomDateRange: g,
        menuName: "joined-date",
        accessibilityLabel: u.intl.string(u.t.XMVinX),
        onClose: l,
        onSelectDateOption: function (e, l) {
            let n = null != l ? C()().subtract(l.input, l.unit).valueOf() : null;
            (0, d.Ld)(t, { ...i, selectedJoinDateOption: { optionId: e, afterDate: n, beforeDate: null } });
        },
        onToggleCustomDateRange: function () {
            (0, d.Ld)(t, {
                ...i,
                selectedJoinDateOption: { optionId: c.H_.CUSTOM, afterDate: g ? m : null, beforeDate: g ? h : null },
            });
        },
        onSelectStartDate: function (e) {
            (0, d.Ld)(t, {
                ...i,
                selectedJoinDateOption: { optionId: c.H_.CUSTOM, afterDate: e.valueOf(), beforeDate: h },
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
