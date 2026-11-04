s.d(t, { pE: () => P, lP: () => j, M6: () => G, QK: () => I, l2: () => v });
var n = s(582128),
    a = s(687123),
    i = s(478437),
    l = s(855986),
    r = s(155718),
    u = s(36149),
    o = s(323073),
    d = s(47167),
    c = s(960850),
    b = s(207560),
    m = s(223863),
    g = s(898578),
    A = s(378058),
    f = s(95701),
    p = s(734057),
    h = s(576705),
    E = s(994500),
    C = s(287809),
    L = s(659674),
    S = s(403362),
    x = s(427262);
let _ = (0, s(400845).Ay)({
    kind: "user",
    name: "2026-08-forward-age-restricted-destinations",
    defaultConfig: { disableAgeRestrictedDestinations: !1 },
    variations: { 1: { disableAgeRestrictedDestinations: !0 } },
});
var D = s(652215),
    N = s(792996);
function I(e) {
    let t = e.map(m._g).find(S.Vq),
        s = (0, l.bG)([p.A], () => p.A.getChannel(t), [t]);
    return n.useMemo(() => s ?? (0, f.createChannelRecord)({ id: "1", type: i.r.DM }), [s]);
}
function y(e) {
    return e.components.length > 0 && e.components[0].type === r.I5.CHECKPOINT_CARD;
}
function P(e, t, s, n) {
    let i = s instanceof f.YB;
    if (null != n) {
        let e = n(s);
        if (null != e) return e;
    }
    if (null == e) return;
    let l = y(e),
        r = e.messageSnapshots.length > 0 && y(e.messageSnapshots[0].message);
    if (null != t || l) {
        if ((0, o.Gc)(t) && !(i && (0, o.Gc)(s))) return { label: N.intl.string(N.t.KgPx1D), lineClamp: 2 };
        if (
            (function (e) {
                if (!(e instanceof f.YB) || !(0, o.Gc)(e)) return !1;
                let t = C.default.getCurrentUser()?.nsfwAllowed === !1,
                    s = (0, u.u5)() && (0, b.d6)(a.t.AGE_GATED_SPACES);
                return (
                    (!!t || !!s) &&
                    _.getConfig({ location: "getDestinationIsUnavailable" }).disableAgeRestrictedDestinations
                );
            })(s)
        )
            return { label: N.intl.string(N.t.QHrFo6), lineClamp: 2 };
        if (i && (0, f.zy)(s.type)) {
            if (
                (e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) &&
                !h.A.can(D.xBc.ATTACH_FILES, s)
            )
                return { label: N.intl.string(N.t.P7yvbm) };
            if (
                ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) &&
                    !(0, L.fS)(s, h.A) &&
                    !(0, L.ax)(e)) ||
                ((l || r) && !(0, L.fS)(s, h.A))
            )
                return { label: N.intl.string(N.t.Wr4RIX) };
            let t = [
                ...(0, A.o6)(e),
                ...e.messageSnapshots.flatMap((e) => {
                    let { message: t } = e;
                    return (0, A.o6)(t);
                }),
            ];
            if (
                t.length > 0 &&
                !h.A.can(D.xBc.USE_EXTERNAL_STICKERS, s) &&
                t.some((e) => {
                    let t;
                    return (
                        null != (t = g.A.getStickerById(e.id)) &&
                        !!(0, A.Xw)(t) &&
                        (t.guild_id !== s.guild_id || void 0)
                    );
                })
            )
                return { label: N.intl.string(N.t["0Yyrua"]) };
            if (
                (e.hasFlag(D.pr7.IS_VOICE_MESSAGE) ||
                    e.messageSnapshots.some((e) => e.message.hasFlag(D.pr7.IS_VOICE_MESSAGE))) &&
                !h.A.can(D.xBc.SEND_VOICE_MESSAGES, s)
            )
                return { label: N.intl.string(N.t.quj4DY) };
        }
    }
}
function j(e, t) {
    return !!(null != e.rateLimitPerUser && e.rateLimitPerUser > 0) && !(0, c.js)(e, t);
}
function v(e) {
    return (0, l.yK)(
        [C.default, p.A, E.A],
        () =>
            e
                .map((e) => {
                    let { type: t, id: s } = e;
                    if ("user" === t) {
                        let e = C.default.getUser(s);
                        return null != e ? (E.A.getNickname(e.id) ?? x.Ay.getName(e)) : null;
                    }
                    let n = p.A.getChannel(s);
                    return null != n ? (0, d.m1)(n, C.default, E.A, !0) : null;
                })
                .filter(S.Vq),
        [e],
    );
}
function G(e) {
    let t = (0, l.yK)(
        [p.A, h.A],
        () =>
            e
                .map((e) => {
                    let { type: t, id: s } = e;
                    return "channel" === t ? p.A.getChannel(s) : null;
                })
                .filter(S.Vq)
                .filter((e) => j(e, h.A)),
        [e],
    );
    return (0, l.yK)([C.default, E.A], () => t.map((e) => (0, d.m1)(e, C.default, E.A, !0)), [t]);
}
