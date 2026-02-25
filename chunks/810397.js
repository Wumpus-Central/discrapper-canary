n.d(t, { A: () => d }), n(321073);
var i = n(311907),
    l = n(554146),
    s = n(801667),
    a = n(71393),
    r = n(320501),
    o = n(379848),
    c = n(652215);
function d(e) {
    let t = (0, i.bG)([r.A], () => r.A.isReady(e.id), [e.id]),
        n = [],
        d = (0, i.bG)([a.A], () => a.A.getGuild(e.guild_id)),
        u = (0, s.A)(e);
    t && u && n.push(l.M.FIRST_BOOSTER_UPSELL);
    let [h, m] = (0, o.ww)(n, d?.id ?? c.eGj);
    return [h, m];
}
