n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    o = n(626135),
    a = n(827498),
    s = n(606192),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { botUserId: t, applicationId: n, buttonSize: d, analyticsLocations: m } = e,
        [p, h] = l.useState(!1),
        f = l.useRef(null),
        v = l.useCallback(async () => {
            o.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: a._y.OPEN_APP_DM
            }),
                h(!0);
            try {
                await (0, s.W)({
                    appId: n,
                    botId: t,
                    analyticsLocations: m
                });
            } catch (e) {}
            clearTimeout(f.current), h(!1);
        }, [t, n, m]);
    return (0, i.jsx)(r.zxk, {
        type: 'submit',
        size: d,
        color: r.zxk.Colors.PRIMARY,
        submitting: p,
        onClick: v,
        'aria-label': u.NW.string(u.t.AUM8hY),
        children: u.NW.string(u.t.AUM8hY)
    });
}
