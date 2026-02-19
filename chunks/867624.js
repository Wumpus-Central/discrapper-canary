"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(863922),
    a = n(513272),
    o = n(954571),
    c = n(58736),
    d = n(652215),
    u = n(521732),
    h = n(985018);
function A(e) {
    let { channel: t } = e,
        n = (0, s.bG)([a.A], () => a.A.shouldShowTopicsBar());
    return (0, i.jsx)(c.Ay.Icon, {
        icon: l.Kck,
        onClick: () => {
            o.default.track(d.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !n,
                source: u.er.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, r.Oz)();
        },
        tooltip: n ? h.intl.string(h.t.nGs3kO) : h.intl.string(h.t.bIm2sF),
        selected: n,
        "aria-expanded": n,
    });
}
