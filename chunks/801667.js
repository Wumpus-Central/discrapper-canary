n.d(t, { A: () => p });
var i = n(64700),
    l = n(311907),
    s = n(498642),
    a = n(71393),
    r = n(320501),
    o = n(576705),
    c = n(927813),
    d = n(661191),
    u = n(302909),
    h = n(342220),
    m = n(652215);
let A = 90 * c.A.Millis.DAY,
    g = 14 * c.A.Millis.DAY;
function p(e) {
    let t = (0, l.bG)([a.A], () => a.A.getGuild(e.guild_id)),
        n = (0, l.bG)([s.A], () => s.A.getMemberCount(t?.id) ?? 0),
        c = (0, l.bG)([r.A], () => r.A.getLastMessage(e.id)),
        p = (0, l.bG)([o.A], () => null != t && o.A.can(m.xBc.ADMINISTRATOR, t)),
        f = (0, h.A)(),
        { enabled: _ } = u.A.useConfig({ location: "useIsEligibleForFirstBoosterUpsell" });
    return i.useMemo(
        () =>
            !(
                !_ ||
                e.type !== m.rbe.GUILD_TEXT ||
                null == t ||
                d.default.age(t.id) < A ||
                null == t.premiumSubscriberCount ||
                0 !== t.premiumSubscriberCount ||
                n < 10 ||
                c?.id == null ||
                d.default.age(c.id) > g
            ) &&
            (p || f),
        [_, e.type, t, n, c?.id, p, f],
    );
}
