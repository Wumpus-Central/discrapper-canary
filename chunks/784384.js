n.d(t, {
    HY: () => y,
    nm: () => E,
    pU: () => I,
    y: () => S
}),
    n(388685),
    n(361932),
    n(187205);
var l = n(192379),
    r = n(106351),
    i = n(442837),
    a = n(933557),
    s = n(987509),
    o = n(926491),
    c = n(378233),
    u = n(131704),
    d = n(592125),
    f = n(496675),
    h = n(699516),
    _ = n(594174),
    g = n(408433),
    m = n(823379),
    p = n(981631),
    b = n(388032);
function E(e) {
    let t = e.map(s.hl).find(m.lm),
        n = (0, i.e7)([d.Z], () => d.Z.getChannel(t), [t]);
    return l.useMemo(
        () =>
            null != n
                ? n
                : (0, u.kt)({
                      id: '1',
                      type: r.d.DM
                  }),
        [n]
    );
}
function y(e, t, n) {
    let l = n instanceof u.Sf;
    if (t.isNSFW() && !(l && n.isNSFW())) return { label: b.intl.string(b.t.KgPx1N) };
    if (l && (0, u.Km)(n.type)) {
        if ((e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) && !f.Z.can(p.Plq.ATTACH_FILES, n)) return { label: b.intl.string(b.t.P7yvbm) };
        if ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) && !(0, g.eC)(n, f.Z) && !(0, g.En)(e)) return { label: b.intl.string(b.t.Wr4RIS) };
        let t = [
            ...(0, c.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
                let { message: t } = e;
                return (0, c.cv)(t);
            })
        ];
        if (
            t.length > 0 &&
            !f.Z.can(p.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
                (function (e, t) {
                    let n = o.Z.getStickerById(e.id);
                    return null != n && !!(0, c.J8)(n) && (n.guild_id !== t.guild_id || void 0);
                })(e, n)
            )
        )
            return { label: b.intl.string(b.t['0Yyrub']) };
        if ((e.hasFlag(p.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some((e) => e.message.hasFlag(p.iLy.IS_VOICE_MESSAGE))) && !f.Z.can(p.Plq.SEND_VOICE_MESSAGES, n)) return { label: b.intl.string(b.t.quj4DQ) };
    }
}
function I(e, t) {
    return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(t.can(p.Plq.MANAGE_CHANNELS, e) || t.can(p.Plq.MANAGE_MESSAGES, e));
}
function S(e) {
    let t = (0, i.Wu)(
        [d.Z, f.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return 'channel' === t ? d.Z.getChannel(n) : null;
                })
                .filter(m.lm)
                .filter((e) => I(e, f.Z)),
        [e]
    );
    return (0, i.Wu)([_.default, h.Z], () => t.map((e) => (0, a.F6)(e, _.default, h.Z, !0)), [t]);
}
