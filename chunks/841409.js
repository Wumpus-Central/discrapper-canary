n.d(t, { Z: () => c });
var i = n(399606),
    r = n(626135),
    s = n(260722),
    l = n(914788),
    a = n(292352),
    o = n(981631);
let c = () => ({
    selectedTab: (0, i.e7)([l.Z], () => l.Z.getSelectedTab()),
    handleTabChange: (e) => {
        s.ZP.selectTab(e),
            r.default.track(o.rMx.FAMILY_CENTER_ACTION, {
                action: a.YC.TabChange,
                tab: e
            });
    }
});
