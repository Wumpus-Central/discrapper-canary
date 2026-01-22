n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(863922),
    s = n(513272),
    o = n(954571),
    c = n(58736),
    u = n(652215),
    d = n(521732),
    f = n(985018);

function p(e) {
    let { channel: t } = e,
        n = (0, l.bG)([s.A], () => s.A.shouldShowTopicsBar());
    return (0, r.jsx)(c.Ay.Icon, {
        icon: i.Kck,
        onClick: () => {
            o.default.track(u.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !n,
                source: d.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, a.Oz)();
        },
        tooltip: n ? f.intl.string(f.t.nGs3kO) : f.intl.string(f.t.bIm2sF),
        selected: n,
        "aria-expanded": n,
    });
}
