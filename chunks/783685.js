n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(626135),
    o = n(424602),
    c = n(827498),
    s = n(915346),
    u = n(981631),
    d = n(388032);
function p(e) {
    let { botUserId: t, applicationId: n, buttonSize: p, analyticsLocations: m } = e,
        [f, h] = r.useState(!1),
        b = r.useRef(null),
        C = r.useCallback(async () => {
            a.default.track(u.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: c._y.OPEN_APP_DM
            }),
                h(!0);
            try {
                await (0, s.W)({
                    appId: n,
                    botId: t,
                    analyticsLocations: m
                });
            } catch (e) {}
            clearTimeout(b.current), h(!1);
        }, [t, n, m]),
        _ = o.PM.useExperiment({ location: 'AppTryItOutButton()' }).enabled ? d.NW.string(d.t['e+CzPj']) : d.NW.string(d.t.AUM8hY);
    return (0, i.jsx)(l.zxk, {
        type: 'submit',
        size: p,
        color: l.zxk.Colors.PRIMARY,
        submitting: f,
        onClick: C,
        'aria-label': _,
        children: _
    });
}
