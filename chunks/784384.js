n.d(t, {
    HY: () => Z,
    nm: () => S,
    pU: () => v,
    y: () => P,
}),
    n(388685),
    n(361932),
    n(187205);
var l = n(647438),
    r = n(106351),
    i = n(442837),
    s = n(622822),
    u = n(933557),
    a = n(987509),
    c = n(926491),
    o = n(378233),
    d = n(131704),
    f = n(592125),
    h = n(496675),
    m = n(699516),
    b = n(594174),
    g = n(408433),
    p = n(823379),
    y = n(981631),
    E = n(388032);
function S(e) {
    let t = e.map(a.hl).find(p.lm),
        n = (0, i.e7)([f.Z], () => f.Z.getChannel(t), [t]);
    return l.useMemo(
        () =>
            null != n
                ? n
                : (0, d.createChannelRecord)({
                      id: "1",
                      type: r.d.DM,
                  }),
        [n],
    );
}
function Z(e, t, n, l) {
    let r = n instanceof d.Sf;
    if (null != l) {
        let e = l(n);
        if (null != e) return e;
    }
    if (null != e && null != t) {
        if ((0, s.Y3)(t) && !(r && (0, s.Y3)(n))) return { label: E.intl.string(E.t.KgPx1D) };
        if (r && (0, d.Km)(n.type)) {
            if (
                (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
                !h.Z.can(y.Plq.ATTACH_FILES, n)
            )
                return { label: E.intl.string(E.t.P7yvbm) };
            if (
                (e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
                !(0, g.eC)(n, h.Z) &&
                !(0, g.En)(e)
            )
                return { label: E.intl.string(E.t.Wr4RIX) };
            let t = [
                ...(0, o.cv)(e),
                ...e.messageSnapshots.flatMap((e) => {
                    let { message: t } = e;
                    return (0, o.cv)(t);
                }),
            ];
            if (
                t.length > 0 &&
                !h.Z.can(y.Plq.USE_EXTERNAL_STICKERS, n) &&
                t.some((e) =>
                    (function (e, t) {
                        let n = c.Z.getStickerById(e.id);
                        return null != n && !!(0, o.J8)(n) && (n.guild_id !== t.guild_id || void 0);
                    })(e, n),
                )
            )
                return { label: E.intl.string(E.t["0Yyrua"]) };
            if (
                (e.hasFlag(y.iLy.IS_VOICE_MESSAGE) ||
                    e.messageSnapshots.some((e) => e.message.hasFlag(y.iLy.IS_VOICE_MESSAGE))) &&
                !h.Z.can(y.Plq.SEND_VOICE_MESSAGES, n)
            )
                return { label: E.intl.string(E.t.quj4DY) };
        }
    }
}
function v(e, t) {
    return (
        !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) &&
        !(t.can(y.Plq.MANAGE_CHANNELS, e) || t.can(y.Plq.MANAGE_MESSAGES, e))
    );
}
function P(e) {
    let t = (0, i.Wu)(
        [f.Z, h.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return "channel" === t ? f.Z.getChannel(n) : null;
                })
                .filter(p.lm)
                .filter((e) => v(e, h.Z)),
        [e],
    );
    return (0, i.Wu)([b.default, m.Z], () => t.map((e) => (0, u.F6)(e, b.default, m.Z, !0)), [t]);
}
