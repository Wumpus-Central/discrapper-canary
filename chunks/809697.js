n.d(t, { A: () => c });
var i = n(417597),
    s = n(954571),
    r = n(899847),
    a = n(695515),
    l = n(191627),
    o = n(652215);
let c = () => ({
    selectedTab: (0, i.bG)([a.A], () => a.A.getSelectedTab()),
    handleTabChange: (e) => {
        r.Ay.selectTab(e), s.default.track(o.HAw.FAMILY_CENTER_ACTION, { action: l.qb.TabChange, tab: e });
    },
});
