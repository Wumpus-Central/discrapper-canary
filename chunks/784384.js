n.d(t, {
    HY: () => v,
    nm: () => Z,
    pU: () => P,
    y: () => O,
}),
    n(388685),
    n(361932),
    n(187205);
var l = n(473749),
    r = n(106351),
    i = n(442837),
    s = n(911969),
    u = n(622822),
    a = n(933557),
    c = n(987509),
    o = n(926491),
    d = n(378233),
    f = n(131704),
    h = n(592125),
    m = n(496675),
    p = n(699516),
    g = n(594174),
    b = n(408433),
    y = n(823379),
    E = n(981631),
    S = n(388032);
function Z(e) {
    let t = e.map(c.hl).find(y.lm),
        n = (0, i.e7)([h.Z], () => h.Z.getChannel(t), [t]);
    return l.useMemo(
        () =>
            null != n
                ? n
                : (0, f.createChannelRecord)({
                      id: "1",
                      type: r.d.DM,
                  }),
        [n],
    );
}
function v(e, t, n, l) {
    let r = n instanceof f.Sf;
    if (null != l) {
        let e = l(n);
        if (null != e) return e;
    }
    if (null != e && null != t) {
        if ((0, u.Y3)(t) && !(r && (0, u.Y3)(n))) return { label: S.intl.string(S.t.KgPx1D) };
        if (r && (0, f.Km)(n.type)) {
            if (
                (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
                !m.Z.can(E.Plq.ATTACH_FILES, n)
            )
                return { label: S.intl.string(S.t.P7yvbm) };
            if (
                ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
                    !(0, b.eC)(n, m.Z) &&
                    !(0, b.En)(e)) ||
                (e.components.length > 0 && e.components[0].type === s.re.CHECKPOINT_CARD && !(0, b.eC)(n, m.Z))
            )
                return { label: S.intl.string(S.t.Wr4RIX) };
            let t = [
                ...(0, d.cv)(e),
                ...e.messageSnapshots.flatMap((e) => {
                    let { message: t } = e;
                    return (0, d.cv)(t);
                }),
            ];
            if (
                t.length > 0 &&
                !m.Z.can(E.Plq.USE_EXTERNAL_STICKERS, n) &&
                t.some((e) =>
                    (function (e, t) {
                        let n = o.Z.getStickerById(e.id);
                        return null != n && !!(0, d.J8)(n) && (n.guild_id !== t.guild_id || void 0);
                    })(e, n),
                )
            )
                return { label: S.intl.string(S.t["0Yyrua"]) };
            if (
                (e.hasFlag(E.iLy.IS_VOICE_MESSAGE) ||
                    e.messageSnapshots.some((e) => e.message.hasFlag(E.iLy.IS_VOICE_MESSAGE))) &&
                !m.Z.can(E.Plq.SEND_VOICE_MESSAGES, n)
            )
                return { label: S.intl.string(S.t.quj4DY) };
        }
    }
}
function P(e, t) {
    return (
        !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) &&
        !(t.can(E.Plq.MANAGE_CHANNELS, e) || t.can(E.Plq.MANAGE_MESSAGES, e))
    );
}
function O(e) {
    let t = (0, i.Wu)(
        [h.Z, m.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return "channel" === t ? h.Z.getChannel(n) : null;
                })
                .filter(y.lm)
                .filter((e) => P(e, m.Z)),
        [e],
    );
    return (0, i.Wu)([g.default, p.Z], () => t.map((e) => (0, a.F6)(e, g.default, p.Z, !0)), [t]);
}
