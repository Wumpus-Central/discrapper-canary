n.d(t, { Z: () => d }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(481060),
    o = n(626135),
    a = n(827498),
    s = n(915346),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { botUserId: t, applicationId: n, buttonSize: d, analyticsLocations: p } = e,
        [m, f] = r.useState(!1),
        h = r.useRef(null),
        b = r.useCallback(async () => {
            o.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: a._y.OPEN_APP_DM
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
    return (0, i.jsx)(l.zxk, {
        type: 'submit',
        size: d,
        color: l.zxk.Colors.PRIMARY,
        submitting: m,
        onClick: b,
        'aria-label': u.intl.string(u.t.AUM8hY),
        children: u.intl.string(u.t.AUM8hY)
    });
}
