n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(100527),
    l = n(906732),
    a = n(779618),
    o = n(446226),
    s = n(441167),
    c = n(822183),
    u = n(131951),
    d = n(213652),
    p = n(320427),
    h = n(145010),
    f = n(159909),
    m = n(531675);
function g(e) {
    let { channel: t, hasActiveStream: n, showRightDivider: g = !1 } = e,
        { analyticsLocations: b } = (0, l.ZP)(i.Z.VOICE_CONTROL_TRAY),
        _ = (0, o.Z)(),
        { isSharedCanvasEnabled: y } = c.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: 'b7309a_1'
        }),
        { enableViewerClipping: C } = s.Z.useExperiment({ location: 'VoiceEffectsActionBar' }, { autoTrackExposure: !1 }),
        x = (0, a.Z)(u.Z);
    if (null == t || null != _) return null;
    let v = C && x,
        j = y && n;
    return (0, r.jsxs)(l.Gt, {
        value: b,
        children: [
            (0, r.jsxs)('div', {
                className: m.voiceEffectsActionBar,
                children: [v && (0, r.jsx)(d.Z, { channel: t }), j && (0, r.jsx)(p.Z, {}), j && (0, r.jsx)(h.Z, { channel: t }), j && (0, r.jsx)(f.Z, {})]
            }),
            g && (v || j) && (0, r.jsx)('div', { className: m.divider })
        ]
    });
}
