n.d(t, { Z: () => d }), n(388685);
var l = n(255367),
    i = n(73800),
    r = n(481060),
    a = n(626135),
    o = n(827498),
    s = n(915346),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { botUserId: t, applicationId: n, buttonSize: d, analyticsLocations: p } = e,
        [m, f] = i.useState(!1),
        h = i.useRef(null),
        v = i.useCallback(async () => {
            a.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: o._y.OPEN_APP_DM
            }),
                f(!0);
            try {
                await (0, s.W)({
                    appId: n,
                    botId: t,
                    analyticsLocations: p
                });
            } catch (e) {}
            clearTimeout(h.current), f(!1);
        }, [t, n, p]);
    return (0, l.jsx)(r.zxk, {
        type: 'submit',
        size: d,
        color: r.zxk.Colors.PRIMARY,
        submitting: m,
        onClick: v,
        'aria-label': u.intl.string(u.t.AUM8hY),
        children: u.intl.string(u.t.AUM8hY)
    });
}
