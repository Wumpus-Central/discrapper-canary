n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(704215),
    a = n(779618),
    s = n(464792),
    o = n(324085),
    c = n(243778),
    d = n(446226),
    u = n(441167),
    h = n(822183),
    p = n(641015),
    m = n(861254),
    f = n(983131),
    g = n(131951),
    C = n(213652),
    x = n(320427),
    v = n(145010),
    _ = n(933686),
    I = n(361057),
    E = n(997614),
    b = n(159909),
    Z = n(637335);
function N(e) {
    let { channel: t, hasActiveStream: n, themeable: N = !1 } = e,
        { groupedButtons: S } = (0, m.ZP)({ location: 'VoiceEffectsActionBar' }),
        T = (0, o.Ou)(t),
        j = l.useRef(null),
        A = (0, d.Z)(),
        { isSharedCanvasEnabled: y } = h.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: P } = u.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        M = (0, a.Z)(g.Z),
        R = (0, o.Zm)(t, 'VoiceEffectsActionBar') ? [r.z.CONSUMABLE_HD_POTION_UPSELL] : [],
        [L, k] = (0, c.US)(R, void 0, !0),
        O = L === r.z.CONSUMABLE_HD_POTION_UPSELL,
        D = (0, f.Z)(t);
    if (null == t || null != A) return null;
    let w = (0, p.Z)(t);
    return (0, i.jsxs)('div', {
        className: Z.voiceEffectsActionBar,
        children: [
            !S &&
                w &&
                (0, i.jsx)(E.Z, {
                    channel: t,
                    themeable: N
                }),
            !S && D && (0, i.jsx)(_.Z, { channel: t }),
            P && M && (0, i.jsx)(C.Z, { channel: t }),
            O &&
                (0, i.jsx)(s.t, {
                    potionRef: j,
                    channel: t,
                    markAsDismissed: k
                }),
            T &&
                (0, i.jsx)(I.Z, {
                    ref: j,
                    channel: t,
                    glow: O
                }),
            y && n && (0, i.jsx)(x.Z, {}),
            y && n && (0, i.jsx)(v.Z, { channel: t }),
            y && n && (0, i.jsx)(b.Z, {})
        ]
    });
}
