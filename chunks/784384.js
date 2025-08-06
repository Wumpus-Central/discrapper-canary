n.d(t, {
    HY: () => x,
    nm: () => v,
    pU: () => E,
    y: () => C,
}),
    n(388685),
    n(361932),
    n(187205);
var l = n(73800),
    r = n(106351),
    a = n(442837),
    i = n(622822),
    s = n(933557),
    o = n(987509),
    c = n(926491),
    u = n(378233),
    d = n(131704),
    h = n(592125),
    f = n(496675),
    m = n(699516),
    g = n(594174),
    _ = n(408433),
    p = n(823379),
    b = n(981631),
    y = n(388032);
function v(e) {
    let t = e.map(o.hl).find(p.lm),
        n = (0, a.e7)([h.Z], () => h.Z.getChannel(t), [t]);
    return l.useMemo(
        () =>
            null != n
                ? n
                : (0, d.kt)({
                      id: "1",
                      type: r.d.DM,
                  }),
        [n],
    );
}
function x(e, t, n) {
    let l = n instanceof d.Sf;
    if ((0, i.aC)(t) && !(l && (0, i.aC)(n))) return { label: y.intl.string(y.t.KgPx1N) };
    if (l && (0, d.Km)(n.type)) {
        if (
            (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
            !f.Z.can(b.Plq.ATTACH_FILES, n)
        )
            return { label: y.intl.string(y.t.P7yvbm) };
        if (
            (e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
            !(0, _.eC)(n, f.Z) &&
            !(0, _.En)(e)
        )
            return { label: y.intl.string(y.t.Wr4RIS) };
        let t = [
            ...(0, u.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
                let { message: t } = e;
                return (0, u.cv)(t);
            }),
        ];
        if (
            t.length > 0 &&
            !f.Z.can(b.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
                (function (e, t) {
                    let n = c.Z.getStickerById(e.id);
                    return null != n && !!(0, u.J8)(n) && (n.guild_id !== t.guild_id || void 0);
                })(e, n),
            )
        )
            return { label: y.intl.string(y.t["0Yyrub"]) };
        if (
            (e.hasFlag(b.iLy.IS_VOICE_MESSAGE) ||
                e.messageSnapshots.some((e) => e.message.hasFlag(b.iLy.IS_VOICE_MESSAGE))) &&
            !f.Z.can(b.Plq.SEND_VOICE_MESSAGES, n)
        )
            return { label: y.intl.string(y.t.quj4DQ) };
    }
}
function E(e, t) {
    return (
        !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) &&
        !(t.can(b.Plq.MANAGE_CHANNELS, e) || t.can(b.Plq.MANAGE_MESSAGES, e))
    );
}
function C(e) {
    let t = (0, a.Wu)(
        [h.Z, f.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return "channel" === t ? h.Z.getChannel(n) : null;
                })
                .filter(p.lm)
                .filter((e) => E(e, f.Z)),
        [e],
    );
    return (0, a.Wu)([g.default, m.Z], () => t.map((e) => (0, s.F6)(e, g.default, m.Z, !0)), [t]);
}
