n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(100527),
    o = n(906732),
    a = n(779618),
    s = n(446226),
    l = n(441167),
    c = n(822183),
    u = n(131951),
    d = n(213652),
    f = n(320427),
    _ = n(145010),
    p = n(159909),
    h = n(474830);
function m(e) {
    let { channel: t, hasActiveStream: n, showRightDivider: m = !1 } = e,
        { analyticsLocations: g } = (0, o.ZP)(i.Z.VOICE_CONTROL_TRAY),
        E = null != (0, s.Z)(),
        { isSharedCanvasEnabled: b } = c.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: "b7309a_1",
        }),
        { enableViewerClipping: y } = l.Z.useExperiment(
            { location: "VoiceEffectsActionBar" },
            { autoTrackExposure: !1 },
        ),
        O = (0, a.Z)(u.Z);
    if (null == t || E) return null;
    let v = y && O,
        I = b && n;
    return (0, r.jsxs)(o.Gt, {
        value: g,
        children: [
            (0, r.jsxs)("div", {
                className: h.voiceEffectsActionBar,
                children: [
                    v && (0, r.jsx)(d.Z, { channel: t }),
                    I && (0, r.jsx)(f.Z, {}),
                    I && (0, r.jsx)(_.Z, { channel: t }),
                    I && (0, r.jsx)(p.Z, {}),
                ],
            }),
            m && (v || I) && (0, r.jsx)("div", { className: h.divider }),
        ],
    });
}
