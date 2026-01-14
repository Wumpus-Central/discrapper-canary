n.d(e, { Z: () => S });
var i = n(509613),
    l = n(313789),
    s = n(526665),
    u = n(393681),
    r = n(518596),
    a = n(526761),
    o = n(981631),
    T = n(388032);
let S = (0, i.n4)(l.n.DATA_USAGE_DISCLAIMER_SETTING, {
    useTitle: () => T.intl.string(T.t.D60Gfj),
    useSubtitle: () =>
        T.intl.format(T.t.R5N31P, {
            onClick: () => {
                let t = (0, s.Gl)("DataUsageDisclaimerSetting");
                (0, r.openUserSettings)(t ? l.n.ACCOUNT_REMOVAL_SETTING : l.n.ACCOUNT_PANEL, {
                    section: o.oAB.ACCOUNT,
                    subsection: u.D.SECURITY,
                    scrollPosition: t ? void 0 : a.KQ.AccountScrollPositions.DISABLE_ACCOUNT,
                });
            },
        }),
});
