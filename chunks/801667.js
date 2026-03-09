n.d(t, { A: () => x });
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
    g = n(302909),
    p = n(342220),
    f = n(652215);
let _ = 90 * m.A.Millis.DAY,
    E = 14 * m.A.Millis.DAY;
function x(e) {
    let t = (0, l.bG)([d.A], () => d.A.getGuild(e.guild_id)),
        n = (0, l.bG)([c.A], () => c.A.getMemberCount(t?.id) ?? 0),
        m = (0, l.bG)([u.A], () => u.A.getLastMessage(e.id)),
        x = (0, l.bG)([h.A], () => null != t && h.A.can(f.xBc.ADMINISTRATOR, t)),
        C = (0, l.bG)([o.A], () => o.A.getGuildAffinity(e.guild_id)?.score),
        S = (0, l.bG)([r.A], () => r.A.hasConsented(f.YAq.PERSONALIZATION)),
        I = (0, p.A)(),
        { enabled: T } = g.A.useConfig({ location: "useIsEligibleForFirstBoosterUpsell" }),
        [N] = (0, a.Wl)(s.M.FIRST_BOOSTER_UPSELL_OVERSEER, { cooldownDurationMs: 0, numTimesToRecur: 3 }),
        y = N === s.M.FIRST_BOOSTER_UPSELL_OVERSEER;
    return i.useMemo(
        () =>
            !(
                !T ||
                !y ||
                !S ||
                null == C ||
                C <= 17.06 ||
                e.type !== f.rbe.GUILD_TEXT ||
                null == t ||
                A.default.age(t.id) < _ ||
                null == t.premiumSubscriberCount ||
                0 !== t.premiumSubscriberCount ||
                n < 10 ||
                m?.id == null ||
                A.default.age(m.id) > E
            ) &&
            (x || I),
        [T, y, S, e.type, t, n, C, m?.id, x, I],
    );
}
