n.d(t, {
    t: () => u,
    w: () => d,
});
var r = n(442837),
    i = n(110259),
    a = n(496675),
    o = n(300429),
    s = n(823379),
    l = n(981631);
function c(e, t, n) {
    if (n.can(l.Plq.BYPASS_SLOWMODE, e)) return !0;
    if (
        i.Z.getCurrentConfig({
            guildId: e.guild_id,
            location: "canBypassSlowmodeHelper",
        }).enabled
    )
        return !1;
    switch (t) {
        case o.S.SendMessage:
            return n.can(l.Plq.MANAGE_CHANNELS, e) || n.can(l.Plq.MANAGE_MESSAGES, e);
        case o.S.CreateThread:
            return n.can(l.Plq.MANAGE_THREADS, e);
        default:
            (0, s.vE)(t);
    }
}
function u(e, t) {
    return c(e, t, a.Z);
}
function d(e, t) {
    return (0, r.e7)([a.Z], () => c(e, t, a.Z));
}
