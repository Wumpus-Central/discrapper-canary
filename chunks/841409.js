n.d(t, { Z: () => c });
var i = n(399606),
    s = n(626135),
    r = n(260722),
    l = n(914788),
    a = n(292352),
    o = n(981631);
let c = () => ({
    selectedTab: (0, i.e7)([l.Z], () => l.Z.getSelectedTab()),
    handleTabChange: (e) => {
        r.ZP.selectTab(e),
            s.default.track(o.rMx.FAMILY_CENTER_ACTION, {
                action: a.YC.TabChange,
                tab: e
            });
    }
});
