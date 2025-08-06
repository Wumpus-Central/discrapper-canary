n.d(t, { Z: () => d }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(755721),
    a = n(626135),
    s = n(827498),
    l = n(915346),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { botUserId: t, applicationId: n, buttonSize: d, analyticsLocations: f } = e,
        [_, p] = i.useState(!1),
        h = i.useRef(null),
        m = i.useCallback(async () => {
            a.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: s._y.OPEN_APP_DM,
            }),
                p(!0);
            try {
                await (0, l.W)({
                    appId: n,
                    botId: t,
                    analyticsLocations: f,
                });
            } catch (e) {}
            clearTimeout(h.current), p(!1);
        }, [t, n, f]);
    return (0, r.jsx)(o.zx, {
        type: "submit",
        size: d,
        color: o.zx.Colors.PRIMARY,
        submitting: _,
        onClick: m,
        "aria-label": u.intl.string(u.t.AUM8hY),
        children: u.intl.string(u.t.AUM8hY),
    });
}
