n.d(t, {
    HY: () => A,
    nm: () => I,
    pU: () => S,
    y: () => C
}),
    n(47120),
    n(390547);
var l = n(192379),
    i = n(106351),
    a = n(442837),
    s = n(933557),
    r = n(987509),
    o = n(926491),
    c = n(378233),
    u = n(131704),
    d = n(592125),
    _ = n(496675),
    h = n(699516),
    f = n(594174),
    g = n(408433),
    m = n(823379),
    E = n(981631),
    p = n(388032);
function I(e) {
    let t = e.map(r.hl).find(m.lm),
        n = (0, a.e7)([d.Z], () => d.Z.getChannel(t), [t]);
    return l.useMemo(
        () =>
            null != n
                ? n
                : (0, u.kt)({
                      id: '1',
                      type: i.d.DM
                  }),
        [n]
    );
}
function A(e, t, n) {
    let l = n instanceof u.Sf;
    if (t.isNSFW() && !(l && n.isNSFW())) return { label: p.intl.string(p.t.KgPx1N) };
    if (l && (0, u.Km)(n.type)) {
        if ((e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) && !_.Z.can(E.Plq.ATTACH_FILES, n)) return { label: p.intl.string(p.t.P7yvbm) };
        if ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) && !(0, g.eC)(n, _.Z) && !(0, g.En)(e)) return { label: p.intl.string(p.t.Wr4RIS) };
        let t = [
            ...(0, c.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
                let { message: t } = e;
                return (0, c.cv)(t);
            })
        ];
        if (
            t.length > 0 &&
            !_.Z.can(E.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
                (function (e, t) {
                    let n = o.Z.getStickerById(e.id);
                    return !!(null != n && (0, c.J8)(n)) && (n.guild_id !== t.guild_id || void 0);
                })(e, n)
            )
        )
            return { label: p.intl.string(p.t['0Yyrub']) };
        if ((e.hasFlag(E.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some((e) => e.message.hasFlag(E.iLy.IS_VOICE_MESSAGE))) && !_.Z.can(E.Plq.SEND_VOICE_MESSAGES, n)) return { label: p.intl.string(p.t.quj4DQ) };
    }
}
function S(e, t) {
    return null != e.rateLimitPerUser && e.rateLimitPerUser > 0 && !(t.can(E.Plq.MANAGE_CHANNELS, e) || t.can(E.Plq.MANAGE_MESSAGES, e));
}
function C(e) {
    let t = (0, a.Wu)(
        [d.Z, _.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return 'channel' === t ? d.Z.getChannel(n) : null;
                })
                .filter(m.lm)
                .filter((e) => S(e, _.Z)),
        [e]
    );
    return (0, a.Wu)([f.default, h.Z], () => t.map((e) => (0, s.F6)(e, f.default, h.Z, !0)), [t]);
}
