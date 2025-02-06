n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    o = n(626135),
    s = n(827498),
    r = n(606192),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { botUserId: t, applicationId: n, buttonSize: u, analyticsLocations: m } = e,
        [p, h] = l.useState(!1),
        x = l.useRef(null),
        v = l.useCallback(async () => {
            o.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: s._y.OPEN_APP_DM
            }),
                h(!0);
            try {
                await (0, r.W)({
                    appId: n,
                    botId: t,
                    analyticsLocations: m
                });
            } catch (e) {}
            clearTimeout(x.current), h(!1);
        }, [t, n, m]);
    return (0, i.jsx)(a.zxk, {
        type: 'submit',
        size: u,
        color: a.zxk.Colors.PRIMARY,
        submitting: p,
        onClick: v,
        'aria-label': d.intl.string(d.t.AUM8hY),
        children: d.intl.string(d.t.AUM8hY)
    });
}
