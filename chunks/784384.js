n.d(t, {
    HY: () => I,
    nm: () => O,
    pU: () => T,
    y: () => C,
}),
    n(388685),
    n(361932),
    n(187205);
var r = n(473749),
    i = n(106351),
    a = n(442837),
    o = n(911969),
    s = n(622822),
    l = n(933557),
    c = n(987509),
    u = n(926491),
    d = n(378233),
    f = n(131704),
    p = n(592125),
    _ = n(496675),
    m = n(699516),
    h = n(594174),
    g = n(408433),
    E = n(823379),
    b = n(981631),
    y = n(388032);
function O(e) {
    let t = e.map(c.hl).find(E.lm),
        n = (0, a.e7)([p.Z], () => p.Z.getChannel(t), [t]);
    return r.useMemo(
        () =>
            null != n
                ? n
                : (0, f.createChannelRecord)({
                      id: "1",
                      type: i.d.DM,
                  }),
        [n],
    );
}
function v(e, t) {
    let n = u.Z.getStickerById(e.id);
    return null != n && !!(0, d.J8)(n) && (n.guild_id !== t.guild_id || void 0);
}
function S(e) {
    return e.components.length > 0 && e.components[0].type === o.re.CHECKPOINT_CARD;
}
function I(e, t, n, r) {
    let i = n instanceof f.Sf;
    if (null != r) {
        let e = r(n);
        if (null != e) return e;
    }
    if (null == e) return;
    let a = S(e),
        o = e.messageSnapshots.length > 0 && S(e.messageSnapshots[0].message);
    if (null != t || a) {
        if ((0, s.Y3)(t) && !(i && (0, s.Y3)(n))) return { label: y.intl.string(y.t.KgPx1D) };
        if (i && (0, f.Km)(n.type)) {
            if (
                (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
                !_.Z.can(b.Plq.ATTACH_FILES, n)
            )
                return { label: y.intl.string(y.t.P7yvbm) };
            if (
                ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
                    !(0, g.eC)(n, _.Z) &&
                    !(0, g.En)(e)) ||
                ((a || o) && !(0, g.eC)(n, _.Z))
            )
                return { label: y.intl.string(y.t.Wr4RIX) };
            let t = [
                ...(0, d.cv)(e),
                ...e.messageSnapshots.flatMap((e) => {
                    let { message: t } = e;
                    return (0, d.cv)(t);
                }),
            ];
            if (t.length > 0 && !_.Z.can(b.Plq.USE_EXTERNAL_STICKERS, n) && t.some((e) => v(e, n)))
                return { label: y.intl.string(y.t["0Yyrua"]) };
            if (
                (e.hasFlag(b.iLy.IS_VOICE_MESSAGE) ||
                    e.messageSnapshots.some((e) => e.message.hasFlag(b.iLy.IS_VOICE_MESSAGE))) &&
                !_.Z.can(b.Plq.SEND_VOICE_MESSAGES, n)
            )
                return { label: y.intl.string(y.t.quj4DY) };
        }
    }
}
function T(e, t) {
    return (
        !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) &&
        !(t.can(b.Plq.MANAGE_CHANNELS, e) || t.can(b.Plq.MANAGE_MESSAGES, e))
    );
}
function C(e) {
    let t = (0, a.Wu)(
        [p.Z, _.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return "channel" === t ? p.Z.getChannel(n) : null;
                })
                .filter(E.lm)
                .filter((e) => T(e, _.Z)),
        [e],
    );
    return (0, a.Wu)([h.default, m.Z], () => t.map((e) => (0, l.F6)(e, h.default, m.Z, !0)), [t]);
}
