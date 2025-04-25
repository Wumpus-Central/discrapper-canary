n.d(t, { Z: () => P }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(704215),
    o = n(100527),
    a = n(906732),
    s = n(779618),
    c = n(243778),
    u = n(446226),
    d = n(441167),
    p = n(301164),
    h = n(576645),
    f = n(822183),
    m = n(641015),
    g = n(983131),
    b = n(82965),
    _ = n(131951),
    y = n(213652),
    x = n(320427),
    C = n(145010),
    v = n(933686),
    j = n(361057),
    O = n(997614),
    E = n(159909),
    I = n(531675);
function P(e) {
    let { channel: t, hasActiveStream: n, showRightDivider: P, themeable: S = !1 } = e,
        { analyticsLocations: Z } = (0, a.ZP)(o.Z.VOICE_CONTROL_TRAY),
        N = (0, b.Z)({ location: 'VoiceEffectsActionBar' }),
        T = (0, h.Ou)(t),
        A = i.useRef(null),
        w = (0, u.Z)(),
        { isSharedCanvasEnabled: R } = f.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: k } = d.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        M = (0, s.Z)(_.Z),
        L = (0, h.Zm)(t, 'VoiceEffectsActionBar') ? [l.z.CONSUMABLE_HD_POTION_UPSELL] : [],
        [D, U] = (0, c.US)(L, void 0, !0),
        B = D === l.z.CONSUMABLE_HD_POTION_UPSELL,
        G = (0, g.Z)(t);
    if (null == t || null != w) return null;
    let F = (0, m.Z)(t),
        H = !N && F,
        V = !N && G,
        z = k && M,
        W = R && n;
    return (0, r.jsxs)(a.Gt, {
        value: Z,
        children: [
            (0, r.jsxs)('div', {
                className: I.voiceEffectsActionBar,
                children: [
                    H &&
                        (0, r.jsx)(O.Z, {
                            channel: t,
                            themeable: S
                        }),
                    V && (0, r.jsx)(v.Z, { channel: t }),
                    z && (0, r.jsx)(y.Z, { channel: t }),
                    B &&
                        (0, r.jsx)(p.t, {
                            potionRef: A,
                            channel: t,
                            markAsDismissed: U
                        }),
                    T &&
                        (0, r.jsx)(j.Z, {
                            ref: A,
                            channel: t,
                            glow: B
                        }),
                    W && (0, r.jsx)(x.Z, {}),
                    W && (0, r.jsx)(C.Z, { channel: t }),
                    W && (0, r.jsx)(E.Z, {})
                ]
            }),
            P && (H || V || z || B || T || W) && (0, r.jsx)('div', { className: I.divider })
        ]
    });
}
