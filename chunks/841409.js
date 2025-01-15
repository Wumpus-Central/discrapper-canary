var i = n(399606),
    s = n(626135),
    r = n(260722),
    a = n(914788),
    l = n(292352),
    o = n(981631);
t.Z = () => {
    let e = (0, i.e7)([a.Z], () => a.Z.getSelectedTab());
    return {
        selectedTab: e,
        handleTabChange: (e) => {
            r.ZP.selectTab(e),
                s.default.track(o.rMx.FAMILY_CENTER_ACTION, {
                    action: l.YC.TabChange,
                    tab: e
                });
        }
    };
};
