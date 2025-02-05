n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(704215),
    r = n(779618),
    s = n(243778),
    o = n(446226),
    c = n(441167),
    d = n(301164),
    u = n(576645),
    h = n(822183),
    p = n(641015),
    m = n(861254),
    f = n(983131),
    g = n(131951),
    _ = n(213652),
    C = n(320427),
    x = n(145010),
    v = n(933686),
    E = n(361057),
    I = n(997614),
    b = n(159909),
    Z = n(637335);
function N(e) {
    let { channel: t, hasActiveStream: n, showRightDivider: N, themeable: T = !1 } = e,
        { groupedButtons: S } = (0, m.ZP)({ location: 'VoiceEffectsActionBar' }),
        j = (0, u.Ou)(t),
        y = l.useRef(null),
        A = (0, o.Z)(),
        { isSharedCanvasEnabled: P } = h.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: R } = c.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        M = (0, r.Z)(g.Z),
        L = (0, u.Zm)(t, 'VoiceEffectsActionBar') ? [a.z.CONSUMABLE_HD_POTION_UPSELL] : [],
        [k, O] = (0, s.US)(L, void 0, !0),
        D = k === a.z.CONSUMABLE_HD_POTION_UPSELL,
        w = (0, f.Z)(t);
    if (null == t || null != A) return null;
    let U = (0, p.Z)(t),
        B = !S && U,
        F = !S && w,
        H = R && M,
        G = P && n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: Z.voiceEffectsActionBar,
                children: [
                    B &&
                        (0, i.jsx)(I.Z, {
                            channel: t,
                            themeable: T
                        }),
                    F && (0, i.jsx)(v.Z, { channel: t }),
                    H && (0, i.jsx)(_.Z, { channel: t }),
                    D &&
                        (0, i.jsx)(d.t, {
                            potionRef: y,
                            channel: t,
                            markAsDismissed: O
                        }),
                    j &&
                        (0, i.jsx)(E.Z, {
                            ref: y,
                            channel: t,
                            glow: D
                        }),
                    G && (0, i.jsx)(C.Z, {}),
                    G && (0, i.jsx)(x.Z, { channel: t }),
                    G && (0, i.jsx)(b.Z, {})
                ]
            }),
            N && (B || F || H || D || j || G) && (0, i.jsx)('div', { className: Z.divider })
        ]
    });
}
