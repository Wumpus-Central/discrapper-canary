n.d(t, { z: () => m });
var i = n(627968);
n(64700);
var s = n(780964),
    r = n(358776),
    a = n(782844),
    l = n(840065),
    o = n(871930),
    c = n(355097),
    d = n(531525),
    u = n(652215),
    _ = n(985018);
function m() {
    return (0, i.jsx)(o.h, {
        setting: d.H.PRIVACY_DATA_BASIC_SERVICE_V2,
        children: (0, i.jsx)(o._, {
            header: _.intl.string(_.t.D60Gfj),
            description: _.intl.format(_.t.R5N31P, {
                onClick: () => {
                    let e = (0, r.WJ)("DataUsageDisclaimer");
                    (0, l.openUserSettings)(e ? s.X.ACCOUNT_REMOVAL_SETTING : s.X.ACCOUNT_PANEL, {
                        section: u.nc_.ACCOUNT,
                        subsection: a.D.SECURITY,
                        scrollPosition: e ? void 0 : c.Ew.AccountScrollPositions.DISABLE_ACCOUNT,
                    });
                },
            }),
        }),
    });
}
