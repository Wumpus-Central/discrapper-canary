n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(704215),
    o = n(779618),
    a = n(243778),
    s = n(446226),
    c = n(441167),
    u = n(301164),
    d = n(576645),
    p = n(822183),
    h = n(641015),
    f = n(983131),
    m = n(82965),
    g = n(131951),
    b = n(213652),
    _ = n(320427),
    C = n(145010),
    v = n(933686),
    y = n(361057),
    x = n(997614),
    j = n(159909),
    O = n(898159);
function N(e) {
    let { channel: t, hasActiveStream: n, showRightDivider: N, themeable: E = !1 } = e,
        P = (0, m.Z)({ location: 'VoiceEffectsActionBar' }),
        I = (0, d.Ou)(t),
        S = i.useRef(null),
        Z = (0, s.Z)(),
        { isSharedCanvasEnabled: T } = p.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: A } = c.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        w = (0, o.Z)(g.Z),
        R = (0, d.Zm)(t, 'VoiceEffectsActionBar') ? [l.z.CONSUMABLE_HD_POTION_UPSELL] : [],
        [k, M] = (0, a.US)(R, void 0, !0),
        L = k === l.z.CONSUMABLE_HD_POTION_UPSELL,
        D = (0, f.Z)(t);
    if (null == t || null != Z) return null;
    let W = (0, h.Z)(t),
        U = !P && W,
        B = !P && D,
        F = A && w,
        H = T && n;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: O.voiceEffectsActionBar,
                children: [
                    U &&
                        (0, r.jsx)(x.Z, {
                            channel: t,
                            themeable: E
                        }),
                    B && (0, r.jsx)(v.Z, { channel: t }),
                    F && (0, r.jsx)(b.Z, { channel: t }),
                    L &&
                        (0, r.jsx)(u.t, {
                            potionRef: S,
                            channel: t,
                            markAsDismissed: M
                        }),
                    I &&
                        (0, r.jsx)(y.Z, {
                            ref: S,
                            channel: t,
                            glow: L
                        }),
                    H && (0, r.jsx)(_.Z, {}),
                    H && (0, r.jsx)(C.Z, { channel: t }),
                    H && (0, r.jsx)(j.Z, {})
                ]
            }),
            N && (U || B || F || L || I || H) && (0, r.jsx)('div', { className: O.divider })
        ]
    });
}
