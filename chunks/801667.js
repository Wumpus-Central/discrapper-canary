n.d(t, { A: () => E });
var i = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(932001),
    r = n(153488),
    o = n(197305),
    c = n(498642),
    d = n(71393),
    u = n(320501),
    h = n(576705),
    m = n(927813),
    A = n(661191),
    g = n(342220),
    _ = n(652215);
let p = 90 * m.A.Millis.DAY,
    f = 14 * m.A.Millis.DAY;
function E(e) {
    let t = (0, l.bG)([d.A], () => d.A.getGuild(e.guild_id)),
        n = (0, l.bG)([c.A], () => c.A.getMemberCount(t?.id) ?? 0),
        m = (0, l.bG)([u.A], () => u.A.getLastMessage(e.id)),
        E = (0, l.bG)([h.A], () => null != t && h.A.can(_.xBc.ADMINISTRATOR, t)),
        C = (0, l.bG)([o.A], () => o.A.getGuildAffinity(e.guild_id)?.score),
        x = (0, l.bG)([r.A], () => r.A.hasConsented(_.YAq.PERSONALIZATION)),
        S = (0, g.A)(),
        [I] = (0, a.Wl)(s.M.FIRST_BOOSTER_UPSELL_OVERSEER, { cooldownDurationMs: 0, numTimesToRecur: 3 }),
        T = I === s.M.FIRST_BOOSTER_UPSELL_OVERSEER;
    return i.useMemo(
        () =>
            !(
                !T ||
                !x ||
                null == C ||
                C <= 17.06 ||
                e.type !== _.rbe.GUILD_TEXT ||
                null == t ||
                A.default.age(t.id) < p ||
                null == t.premiumSubscriberCount ||
                0 !== t.premiumSubscriberCount ||
                n < 10 ||
                m?.id == null ||
                A.default.age(m.id) > f
            ) &&
            (E || S),
        [T, x, e.type, t, n, C, m?.id, E, S],
    );
}
