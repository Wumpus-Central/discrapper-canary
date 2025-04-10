n.d(t, { Z: () => p }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(626135),
    o = n(424602),
    s = n(827498),
    c = n(915346),
    d = n(981631),
    u = n(388032);
function p(e) {
    let { botUserId: t, applicationId: n, buttonSize: p, analyticsLocations: m } = e,
        [f, h] = r.useState(!1),
        b = r.useRef(null),
        x = r.useCallback(async () => {
            a.default.track(d.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: s._y.OPEN_APP_DM
            }),
                h(!0);
            try {
                await (0, c.W)({
                    appId: n,
                    botId: t,
                    analyticsLocations: m
                });
            } catch (e) {}
            clearTimeout(b.current), h(!1);
        }, [t, n, m]),
        C = o.PM.useExperiment({ location: 'AppTryItOutButton()' }).enabled ? u.NW.string(u.t['e+CzPj']) : u.NW.string(u.t.AUM8hY);
    return (0, i.jsx)(l.zxk, {
        type: 'submit',
        size: p,
        color: l.zxk.Colors.PRIMARY,
        submitting: f,
        onClick: x,
        'aria-label': C,
        children: C
    });
}
