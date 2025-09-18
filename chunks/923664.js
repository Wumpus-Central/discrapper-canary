n.d(t, {
    t: () => c,
    w: () => u,
});
var r = n(442837),
    i = n(496675),
    a = n(300429),
    o = n(823379),
    s = n(981631);
function l(e, t, n) {
    if (n.can(s.Plq.BYPASS_SLOWMODE, e)) return !0;
    switch (t) {
        case a.S.SendMessage:
            return n.can(s.Plq.MANAGE_CHANNELS, e) || n.can(s.Plq.MANAGE_MESSAGES, e);
        case a.S.CreateThread:
            return n.can(s.Plq.MANAGE_THREADS, e);
        default:
            (0, o.vE)(t);
    }
}
function c(e, t) {
    return l(e, t, i.Z);
}
function u(e, t) {
    return (0, r.e7)([i.Z], () => l(e, t, i.Z));
}
