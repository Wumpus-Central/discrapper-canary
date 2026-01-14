n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(313789),
    a = n(526665),
    o = n(393681),
    s = n(518596),
    l = n(838436),
    c = n(526761),
    u = n(726985),
    d = n(981631),
    f = n(388032);
function p() {
    return (0, r.jsx)(l.U, {
        setting: u.s6.PRIVACY_DATA_BASIC_SERVICE_V2,
        children: (0, r.jsx)(l.H, {
            header: f.intl.string(f.t.D60Gfj),
            description: f.intl.format(f.t.R5N31P, {
                onClick: () => {
                    let e = (0, a.Gl)("DataUsageDisclaimer");
                    (0, s.openUserSettings)(e ? i.n.ACCOUNT_REMOVAL_SETTING : i.n.ACCOUNT_PANEL, {
                        section: d.oAB.ACCOUNT,
                        subsection: o.D.SECURITY,
                        scrollPosition: e ? void 0 : c.KQ.AccountScrollPositions.DISABLE_ACCOUNT,
                    });
                },
            }),
        }),
    });
}
