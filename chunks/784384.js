(n.d(t, {
    HY: () => I,
    nm: () => y,
    pU: () => S,
    y: () => O
}),
    n(388685),
    n(361932),
    n(187205));
var l = n(73800),
    r = n(106351),
    i = n(442837),
    a = n(622822),
    s = n(933557),
    o = n(987509),
    c = n(926491),
    u = n(378233),
    d = n(131704),
    f = n(592125),
    h = n(496675),
    _ = n(699516),
    g = n(594174),
    m = n(408433),
    p = n(823379),
    b = n(981631),
    E = n(388032);
function y(e) {
    let t = e.map(o.hl).find(p.lm),
        n = (0, i.e7)([f.Z], () => f.Z.getChannel(t), [t]);
    return l.useMemo(
        () =>
            null != n
                ? n
                : (0, d.kt)({
                      id: '1',
                      type: r.d.DM
                  }),
        [n]
    );
}
function I(e, t, n) {
    let l = n instanceof d.Sf;
    if ((0, a.aC)(t) && !(l && (0, a.aC)(n))) return { label: E.intl.string(E.t.KgPx1N) };
    if (l && (0, d.Km)(n.type)) {
        if ((e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) && !h.Z.can(b.Plq.ATTACH_FILES, n)) return { label: E.intl.string(E.t.P7yvbm) };
        if ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) && !(0, m.eC)(n, h.Z) && !(0, m.En)(e)) return { label: E.intl.string(E.t.Wr4RIS) };
        let t = [
            ...(0, u.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
                let { message: t } = e;
                return (0, u.cv)(t);
            })
        ];
        if (
            t.length > 0 &&
            !h.Z.can(b.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
                (function (e, t) {
                    let n = c.Z.getStickerById(e.id);
                    return null != n && !!(0, u.J8)(n) && (n.guild_id !== t.guild_id || void 0);
                })(e, n)
            )
        )
            return { label: E.intl.string(E.t['0Yyrub']) };
        if ((e.hasFlag(b.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some((e) => e.message.hasFlag(b.iLy.IS_VOICE_MESSAGE))) && !h.Z.can(b.Plq.SEND_VOICE_MESSAGES, n)) return { label: E.intl.string(E.t.quj4DQ) };
    }
}
function S(e, t) {
    return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(t.can(b.Plq.MANAGE_CHANNELS, e) || t.can(b.Plq.MANAGE_MESSAGES, e));
}
function O(e) {
    let t = (0, i.Wu)(
        [f.Z, h.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return 'channel' === t ? f.Z.getChannel(n) : null;
                })
                .filter(p.lm)
                .filter((e) => S(e, h.Z)),
        [e]
    );
    return (0, i.Wu)([g.default, _.Z], () => t.map((e) => (0, s.F6)(e, g.default, _.Z, !0)), [t]);
}
