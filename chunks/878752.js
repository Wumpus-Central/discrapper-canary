n.d(t, { Z: () => I }), n(47120);
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
    C = n(213652),
    y = n(320427),
    x = n(145010),
    v = n(933686),
    j = n(361057),
    O = n(997614),
    E = n(159909),
    N = n(531675);
function I(e) {
    let { channel: t, hasActiveStream: n, showRightDivider: I, themeable: P = !1 } = e,
        { analyticsLocations: S } = (0, a.ZP)(o.Z.VOICE_CONTROL_TRAY),
        Z = (0, b.Z)({ location: 'VoiceEffectsActionBar' }),
        T = (0, h.Ou)(t),
        A = i.useRef(null),
        w = (0, u.Z)(),
        { isSharedCanvasEnabled: R } = f.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: M } = d.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        k = (0, s.Z)(_.Z),
        L = (0, h.Zm)(t, 'VoiceEffectsActionBar') ? [l.z.CONSUMABLE_HD_POTION_UPSELL] : [],
        [D, W] = (0, c.US)(L, void 0, !0),
        U = D === l.z.CONSUMABLE_HD_POTION_UPSELL,
        B = (0, g.Z)(t);
    if (null == t || null != w) return null;
    let H = (0, m.Z)(t),
        F = !Z && H,
        G = !Z && B,
        V = M && k,
        z = R && n;
    return (0, r.jsxs)(a.Gt, {
        value: S,
        children: [
            (0, r.jsxs)('div', {
                className: N.voiceEffectsActionBar,
                children: [
                    F &&
                        (0, r.jsx)(O.Z, {
                            channel: t,
                            themeable: P
                        }),
                    G && (0, r.jsx)(v.Z, { channel: t }),
                    V && (0, r.jsx)(C.Z, { channel: t }),
                    U &&
                        (0, r.jsx)(p.t, {
                            potionRef: A,
                            channel: t,
                            markAsDismissed: W
                        }),
                    T &&
                        (0, r.jsx)(j.Z, {
                            ref: A,
                            channel: t,
                            glow: U
                        }),
                    z && (0, r.jsx)(y.Z, {}),
                    z && (0, r.jsx)(x.Z, { channel: t }),
                    z && (0, r.jsx)(E.Z, {})
                ]
            }),
            I && (F || G || V || U || T || z) && (0, r.jsx)('div', { className: N.divider })
        ]
    });
}
