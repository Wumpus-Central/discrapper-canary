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
    let { botUserId: t, applicationId: n, analyticsLocations: d } = e,
        [p, m] = i.useState(!1),
        f = i.useRef(null),
        h = i.useCallback(async () => {
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
    return (0, l.jsx)(r.zxk, {
        type: "submit",
        size: "md",
        variant: "secondary",
        loading: p,
        onClick: h,
        "aria-label": u.intl.string(u.t.AUM8hY),
        text: u.intl.string(u.t.AUM8hY),
    });
}
