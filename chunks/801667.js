n.d(t, { A: () => _ });
var i = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(932001),
    r = n(498642),
    o = n(71393),
    c = n(320501),
    d = n(576705),
    u = n(927813),
    h = n(661191),
    m = n(302909),
    A = n(342220),
    g = n(652215);
let p = 90 * u.A.Millis.DAY,
    f = 14 * u.A.Millis.DAY;
function _(e) {
    let t = (0, l.bG)([o.A], () => o.A.getGuild(e.guild_id)),
        n = (0, l.bG)([r.A], () => r.A.getMemberCount(t?.id) ?? 0),
        u = (0, l.bG)([c.A], () => c.A.getLastMessage(e.id)),
        _ = (0, l.bG)([d.A], () => null != t && d.A.can(g.xBc.ADMINISTRATOR, t)),
        E = (0, A.A)(),
        { enabled: x } = m.A.useConfig({ location: "useIsEligibleForFirstBoosterUpsell" }),
        [C] = (0, a.Wl)(s.M.FIRST_BOOSTER_UPSELL_OVERSEER, { cooldownDurationMs: 0, numTimesToRecur: 3 }),
        S = C === s.M.FIRST_BOOSTER_UPSELL_OVERSEER;
    return i.useMemo(
        () =>
            !(
                !x ||
                !S ||
                e.type !== g.rbe.GUILD_TEXT ||
                null == t ||
                h.default.age(t.id) < p ||
                null == t.premiumSubscriberCount ||
                0 !== t.premiumSubscriberCount ||
                n < 10 ||
                u?.id == null ||
                h.default.age(u.id) > f
            ) &&
            (_ || E),
        [x, S, e.type, t, n, u?.id, _, E],
    );
}
