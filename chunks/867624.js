n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(863922),
    r = n(513272),
    o = n(954571),
    c = n(58736),
    d = n(652215),
    u = n(521732),
    h = n(985018);
function A(e) {
    let { channel: t } = e,
        n = (0, l.bG)([r.A], () => r.A.shouldShowTopicsBar());
    return (0, i.jsx)(c.Ay.Icon, {
        icon: s.Kck,
        onClick: () => {
            o.default.track(d.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !n,
                source: u.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, a.Oz)();
        },
        tooltip: n ? h.intl.string(h.t.nGs3kO) : h.intl.string(h.t.bIm2sF),
        selected: n,
        "aria-expanded": n,
    });
}
