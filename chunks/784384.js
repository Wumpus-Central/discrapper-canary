n.d(t, {
    HY: () => C,
    nm: () => I,
    pU: () => x,
    y: () => A
}),
    n(47120),
    n(390547);
var a = n(192379),
    l = n(106351),
    i = n(442837),
    s = n(933557),
    r = n(987509),
    o = n(926491),
    c = n(378233),
    d = n(131704),
    u = n(592125),
    m = n(496675),
    _ = n(699516),
    h = n(594174),
    g = n(408433),
    p = n(823379),
    f = n(981631),
    E = n(388032);
function I(e) {
    let t = e.map(r.hl).find(p.lm),
        n = (0, i.e7)([u.Z], () => u.Z.getChannel(t), [t]);
    return a.useMemo(
        () =>
            null != n
                ? n
                : (0, d.kt)({
                      id: '1',
                      type: l.d.DM
                  }),
        [n]
    );
}
function C(e, t, n) {
    let a = n instanceof d.Sf;
    if (t.isNSFW() && !(a && n.isNSFW())) return { label: E.intl.string(E.t.KgPx1N) };
    if (a && (0, d.Km)(n.type)) {
        if ((e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) && !m.Z.can(f.Plq.ATTACH_FILES, n)) return { label: E.intl.string(E.t.P7yvbm) };
        if ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) && !(0, g.eC)(n, m.Z) && !(0, g.En)(e)) return { label: E.intl.string(E.t.Wr4RIS) };
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
                    return !!(null != n && (0, c.J8)(n)) && (n.guild_id !== t.guild_id || void 0);
                })(e, n)
            )
        )
            return { label: E.intl.string(E.t['0Yyrub']) };
        if ((e.hasFlag(f.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some((e) => e.message.hasFlag(f.iLy.IS_VOICE_MESSAGE))) && !m.Z.can(f.Plq.SEND_VOICE_MESSAGES, n)) return { label: E.intl.string(E.t.quj4DQ) };
    }
}
function x(e, t) {
    return null != e.rateLimitPerUser && e.rateLimitPerUser > 0 && !(t.can(f.Plq.MANAGE_CHANNELS, e) || t.can(f.Plq.MANAGE_MESSAGES, e));
}
function A(e) {
    let t = (0, i.Wu)(
        [u.Z, m.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return 'channel' === t ? u.Z.getChannel(n) : null;
                })
                .filter(p.lm)
                .filter((e) => x(e, m.Z)),
        [e]
    );
    return (0, i.Wu)([h.default, _.Z], () => t.map((e) => (0, s.F6)(e, h.default, _.Z, !0)), [t]);
}
