n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(704215),
    a = n(779618),
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
    C = n(213652),
    x = n(320427),
    v = n(145010),
    _ = n(933686),
    I = n(361057),
    E = n(997614),
    b = n(159909),
    Z = n(637335);
function S(e) {
    let { channel: t, hasActiveStream: n, showRightDivider: S, themeable: N = !1 } = e,
        { groupedButtons: T } = (0, m.ZP)({ location: 'VoiceEffectsActionBar' }),
        j = (0, u.Ou)(t),
        A = l.useRef(null),
        y = (0, o.Z)(),
        { isSharedCanvasEnabled: P } = h.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: M } = c.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        R = (0, a.Z)(g.Z),
        L = (0, u.Zm)(t, 'VoiceEffectsActionBar') ? [r.z.CONSUMABLE_HD_POTION_UPSELL] : [],
        [k, O] = (0, s.US)(L, void 0, !0),
        D = k === r.z.CONSUMABLE_HD_POTION_UPSELL,
        w = (0, f.Z)(t);
    if (null == t || null != y) return null;
    let B = (0, p.Z)(t),
        U = !T && B,
        H = !T && w,
        G = M && R,
        F = P && n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: Z.voiceEffectsActionBar,
                children: [
                    U &&
                        (0, i.jsx)(E.Z, {
                            channel: t,
                            themeable: N
                        }),
                    H && (0, i.jsx)(_.Z, { channel: t }),
                    G && (0, i.jsx)(C.Z, { channel: t }),
                    D &&
                        (0, i.jsx)(d.t, {
                            potionRef: A,
                            channel: t,
                            markAsDismissed: O
                        }),
                    j &&
                        (0, i.jsx)(I.Z, {
                            ref: A,
                            channel: t,
                            glow: D
                        }),
                    F && (0, i.jsx)(x.Z, {}),
                    F && (0, i.jsx)(v.Z, { channel: t }),
                    F && (0, i.jsx)(b.Z, {})
                ]
            }),
            S && (U || H || G || D || j || F) && (0, i.jsx)('div', { className: Z.divider })
        ]
    });
}
