n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(323073),
    r = n(863922),
    o = n(513272),
    d = n(954571),
    c = n(58736),
    u = n(652215),
    h = n(521732),
    A = n(985018);
function _(e) {
    let { channel: t } = e,
        n = (0, a.ni)(t),
        _ = (0, l.bG)([o.A], () => o.A.shouldShowTopicsBar());
    return (0, i.jsx)(c.Ay.Icon, {
        icon: s.Kck,
        onClick: () => {
            d.default.track(u.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !_,
                source: h.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, r.Oz)();
        },
        tooltip: _ ? A.intl.string(A.t.nGs3kO) : A.intl.string(A.t.bIm2sF),
        selected: _,
        "aria-expanded": _,
        disabled: n,
    });
}
