n.d(t, {
    A: () => c,
});
var r = n(417597),
    i = n(954571),
    a = n(899847),
    s = n(695515),
    o = n(191627),
    l = n(652215);
let c = () => ({
    selectedTab: (0, r.bG)([s.A], () => s.A.getSelectedTab()),
    handleTabChange: (e) => {
        a.Ay.selectTab(e),
            i.default.track(l.HAw.FAMILY_CENTER_ACTION, {
                action: o.qb.TabChange,
                tab: e,
            });
    },
});
