n.d(t, { Z: () => c });
var r = n(399606),
    i = n(626135),
    s = n(260722),
    a = n(914788),
    l = n(292352),
    o = n(981631);
let c = () => ({
    selectedTab: (0, r.e7)([a.Z], () => a.Z.getSelectedTab()),
    handleTabChange: (e) => {
        s.ZP.selectTab(e),
            i.default.track(o.rMx.FAMILY_CENTER_ACTION, {
                action: l.YC.TabChange,
                tab: e
            });
    }
});
