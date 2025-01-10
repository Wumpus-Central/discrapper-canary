t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(481060),
    o = t(626135),
    r = t(827498),
    s = t(606192),
    c = t(981631),
    d = t(388032);
function u(e) {
    let { botUserId: n, applicationId: t, buttonSize: u, analyticsLocations: m } = e,
        [p, h] = l.useState(!1),
        f = l.useRef(null),
        C = l.useCallback(async () => {
            o.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: t,
                button_action: r._y.OPEN_APP_DM
            }),
                h(!0);
            try {
                await (0, s.W)(t, n, m);
            } catch (e) {}
            clearTimeout(f.current), h(!1);
        }, [n, t, m]);
    return (0, i.jsx)(a.Button, {
        type: 'submit',
        size: u,
        color: a.Button.Colors.PRIMARY,
        submitting: p,
        onClick: C,
        'aria-label': d.intl.string(d.t.AUM8hY),
        children: d.intl.string(d.t.AUM8hY)
    });
}
