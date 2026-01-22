n.d(t, {
    F: () => u,
    _: () => d,
});
var r = n(311907),
    i = n(937161),
    a = n(576705),
    s = n(101392),
    o = n(403362),
    l = n(652215);

function c(e, t, n) {
    if (n.can(l.xBc.BYPASS_SLOWMODE, e)) return !0;
    if (
        i.A.getCurrentConfig({
            guildId: e.guild_id,
            location: "canBypassSlowmodeHelper",
        }).enabled
    )
        return !1;
    switch (t) {
        case s.R.SendMessage:
            return n.can(l.xBc.MANAGE_CHANNELS, e) || n.can(l.xBc.MANAGE_MESSAGES, e);
        case s.R.CreateThread:
            return n.can(l.xBc.MANAGE_THREADS, e);
        default:
            (0, o.xb)(t);
    }
}

function u(e, t) {
    return c(e, t, a.A);
}

function d(e, t) {
    return (0, r.bG)([a.A], () => c(e, t, a.A));
}
