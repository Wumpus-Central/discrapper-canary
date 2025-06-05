n.d(t, { Z: () => v }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(704215),
    a = n(100527),
    o = n(906732),
    s = n(779618),
    c = n(243778),
    u = n(446226),
    d = n(441167),
    p = n(301164),
    h = n(576645),
    f = n(822183),
    m = n(131951),
    g = n(213652),
    b = n(320427),
    _ = n(145010),
    y = n(361057),
    x = n(159909),
    C = n(531675);
function v(e) {
    let { channel: t, hasActiveStream: n, showRightDivider: v } = e,
        { analyticsLocations: j } = (0, o.ZP)(a.Z.VOICE_CONTROL_TRAY),
        O = (0, h.Ou)(t),
        E = i.useRef(null),
        I = (0, u.Z)(),
        { isSharedCanvasEnabled: P } = f.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: S } = d.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        Z = (0, s.Z)(m.Z),
        N = (0, h.Zm)(t, 'VoiceEffectsActionBar') ? [l.z.CONSUMABLE_HD_POTION_UPSELL] : [],
        [T, A] = (0, c.US)(N, void 0, !0),
        w = T === l.z.CONSUMABLE_HD_POTION_UPSELL;
    if (null == t || null != I) return null;
    let R = S && Z,
        k = P && n;
    return (0, r.jsxs)(o.Gt, {
        value: j,
        children: [
            (0, r.jsxs)('div', {
                className: C.voiceEffectsActionBar,
                children: [
                    R && (0, r.jsx)(g.Z, { channel: t }),
                    w &&
                        (0, r.jsx)(p.t, {
                            potionRef: E,
                            channel: t,
                            markAsDismissed: A
                        }),
                    O &&
                        (0, r.jsx)(y.Z, {
                            ref: E,
                            channel: t,
                            glow: w
                        }),
                    k && (0, r.jsx)(b.Z, {}),
                    k && (0, r.jsx)(_.Z, { channel: t }),
                    k && (0, r.jsx)(x.Z, {})
                ]
            }),
            v && (R || w || O || k) && (0, r.jsx)('div', { className: C.divider })
        ]
    });
}
