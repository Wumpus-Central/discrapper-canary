n.d(t, {
    HY: () => y,
    nm: () => x,
    pU: () => w,
    y: () => j,
}),
    n(388685),
    n(361932),
    n(187205);
var l = n(647438),
    r = n(106351),
    a = n(442837),
    s = n(622822),
    i = n(933557),
    o = n(987509),
    u = n(926491),
    c = n(378233),
    d = n(131704),
    h = n(592125),
    f = n(496675),
    m = n(699516),
    g = n(594174),
    p = n(408433),
    b = n(823379),
    _ = n(981631),
    v = n(388032);
function x(e) {
    let t = e.map(o.hl).find(b.lm),
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
function y(e, t, n) {
    let l = n instanceof d.Sf;
    if ((0, s.aC)(t) && !(l && (0, s.aC)(n))) return { label: v.intl.string(v.t.KgPx1N) };
    if (l && (0, d.Km)(n.type)) {
        if (
            (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
            !f.Z.can(_.Plq.ATTACH_FILES, n)
        )
            return { label: v.intl.string(v.t.P7yvbm) };
        if (
            (e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
            !(0, p.eC)(n, f.Z) &&
            !(0, p.En)(e)
        )
            return { label: v.intl.string(v.t.Wr4RIS) };
        let t = [
            ...(0, c.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
                let { message: t } = e;
                return (0, c.cv)(t);
            }),
        ];
        if (
            t.length > 0 &&
            !f.Z.can(_.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
                (function (e, t) {
                    let n = u.Z.getStickerById(e.id);
                    return null != n && !!(0, c.J8)(n) && (n.guild_id !== t.guild_id || void 0);
                })(e, n),
            )
        )
            return { label: v.intl.string(v.t["0Yyrub"]) };
        if (
            (e.hasFlag(_.iLy.IS_VOICE_MESSAGE) ||
                e.messageSnapshots.some((e) => e.message.hasFlag(_.iLy.IS_VOICE_MESSAGE))) &&
            !f.Z.can(_.Plq.SEND_VOICE_MESSAGES, n)
        )
            return { label: v.intl.string(v.t.quj4DQ) };
    }
}
function w(e, t) {
    return (
        !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) &&
        !(t.can(_.Plq.MANAGE_CHANNELS, e) || t.can(_.Plq.MANAGE_MESSAGES, e))
    );
}
function j(e) {
    let t = (0, a.Wu)(
        [h.Z, f.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return "channel" === t ? h.Z.getChannel(n) : null;
                })
                .filter(b.lm)
                .filter((e) => w(e, f.Z)),
        [e],
    );
    return (0, a.Wu)([g.default, m.Z], () => t.map((e) => (0, i.F6)(e, g.default, m.Z, !0)), [t]);
}
