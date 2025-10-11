n.d(t, { Z: () => d }), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(481060),
    a = n(626135),
    o = n(827498),
    s = n(915346),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { botUserId: t, applicationId: n, analyticsLocations: d } = e,
        [p, m] = l.useState(!1),
        f = l.useRef(null),
        h = l.useCallback(async () => {
            a.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: o._y.OPEN_APP_DM,
            }),
                m(!0);
            try {
                await (0, s.W)({
                    appId: n,
                    botId: t,
                    analyticsLocations: d,
                });
            } catch (e) {}
            clearTimeout(f.current), m(!1);
        }, [t, n, d]);
    return (0, i.jsx)(r.Button, {
        type: "submit",
        size: "md",
        variant: "secondary",
        loading: p,
        onClick: h,
        "aria-label": u.intl.string(u.t.AUM8hY),
        text: u.intl.string(u.t.AUM8hY),
    });
}
