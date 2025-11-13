n.d(t, { Z: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(626135),
    s = n(827498),
    l = n(915346),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { botUserId: t, applicationId: n, analyticsLocations: d } = e,
        [f, _] = i.useState(!1),
        p = i.useRef(null),
        h = i.useCallback(async () => {
            o.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: s._y.OPEN_APP_DM,
            }),
                _(!0);
            try {
                await (0, l.W)({
                    appId: n,
                    botId: t,
                    analyticsLocations: d,
                });
            } catch (e) {}
            clearTimeout(p.current), _(!1);
        }, [t, n, d]);
    return (0, r.jsx)(a.Button, {
        type: "submit",
        size: "md",
        variant: "secondary",
        loading: f,
        onClick: h,
        "aria-label": u.intl.string(u.t.AUM8hY),
        text: u.intl.string(u.t.AUM8hY),
    });
}
