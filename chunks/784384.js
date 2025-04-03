n.d(t, {
    HY: () => E,
    nm: () => y,
    pU: () => I,
    y: () => S
}),
    n(47120),
    n(13667),
    n(390547);
var a = n(192379),
    r = n(106351),
    l = n(442837),
    i = n(933557),
    s = n(987509),
    o = n(926491),
    c = n(378233),
    u = n(131704),
    d = n(592125),
    m = n(496675),
    p = n(699516),
    h = n(594174),
    g = n(408433),
    _ = n(823379),
    f = n(981631),
    b = n(388032);
function y(e) {
    let t = e.map(s.hl).find(_.lm),
        n = (0, l.e7)([d.Z], () => d.Z.getChannel(t), [t]);
    return a.useMemo(
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
function E(e, t, n) {
    let a = n instanceof u.Sf;
    if (t.isNSFW() && !(a && n.isNSFW())) return { label: b.NW.string(b.t.KgPx1N) };
    if (a && (0, u.Km)(n.type)) {
        if ((e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) && !m.Z.can(f.Plq.ATTACH_FILES, n)) return { label: b.NW.string(b.t.P7yvbm) };
        if ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) && !(0, g.eC)(n, m.Z) && !(0, g.En)(e)) return { label: b.NW.string(b.t.Wr4RIS) };
        let t = [
            ...(0, c.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
                let { message: t } = e;
                return (0, c.cv)(t);
            })
        ];
        if (
            t.length > 0 &&
            !m.Z.can(f.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
                (function (e, t) {
                    let n = o.Z.getStickerById(e.id);
                    return null != n && !!(0, c.J8)(n) && (n.guild_id !== t.guild_id || void 0);
                })(e, n)
            )
        )
            return { label: b.NW.string(b.t['0Yyrub']) };
        if ((e.hasFlag(f.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some((e) => e.message.hasFlag(f.iLy.IS_VOICE_MESSAGE))) && !m.Z.can(f.Plq.SEND_VOICE_MESSAGES, n)) return { label: b.NW.string(b.t.quj4DQ) };
    }
}
function I(e, t) {
    return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(t.can(f.Plq.MANAGE_CHANNELS, e) || t.can(f.Plq.MANAGE_MESSAGES, e));
}
function S(e) {
    let t = (0, l.Wu)(
        [d.Z, m.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return 'channel' === t ? d.Z.getChannel(n) : null;
                })
                .filter(_.lm)
                .filter((e) => I(e, m.Z)),
        [e]
    );
    return (0, l.Wu)([h.default, p.Z], () => t.map((e) => (0, i.F6)(e, h.default, p.Z, !0)), [t]);
}
