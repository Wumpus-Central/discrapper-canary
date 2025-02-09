n.d(t, { Z: () => c });
var i = n(399606),
    r = n(626135),
    a = n(260722),
    s = n(914788),
    l = n(292352),
    o = n(981631);
let c = () => ({
    selectedTab: (0, i.e7)([s.Z], () => s.Z.getSelectedTab()),
    handleTabChange: (e) => {
        a.ZP.selectTab(e),
            r.default.track(o.rMx.FAMILY_CENTER_ACTION, {
                action: l.YC.TabChange,
                tab: e
            });
    }
});
