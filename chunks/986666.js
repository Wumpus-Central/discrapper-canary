n.d(t, {
    z: () => p,
});
var r = n(627968);
n(64700);
var i = n(780964),
    a = n(358776),
    s = n(782844),
    o = n(840065),
    l = n(871930),
    c = n(355097),
    u = n(531525),
    d = n(652215),
    f = n(985018);

function p() {
    return (0, r.jsx)(l.h, {
        setting: u.H.PRIVACY_DATA_BASIC_SERVICE_V2,
        children: (0, r.jsx)(l._, {
            header: f.intl.string(f.t.D60Gfj),
            description: f.intl.format(f.t.R5N31P, {
                onClick: () => {
                    let e = (0, a.WJ)("DataUsageDisclaimer");
                    (0, o.openUserSettings)(e ? i.X.ACCOUNT_REMOVAL_SETTING : i.X.ACCOUNT_PANEL, {
                        section: d.nc_.ACCOUNT,
                        subsection: s.D.SECURITY,
                        scrollPosition: e ? void 0 : c.Ew.AccountScrollPositions.DISABLE_ACCOUNT,
                    });
                },
            }),
        }),
    });
}
