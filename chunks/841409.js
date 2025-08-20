n.d(t, { Z: () => c });
var r = n(399606),
    i = n(626135),
    a = n(260722),
    o = n(914788),
    s = n(292352),
    l = n(981631);
let c = () => ({
    selectedTab: (0, r.e7)([o.Z], () => o.Z.getSelectedTab()),
    handleTabChange: (e) => {
        a.ZP.selectTab(e),
            i.default.track(l.rMx.FAMILY_CENTER_ACTION, {
                action: s.YC.TabChange,
                tab: e,
            });
    },
});
