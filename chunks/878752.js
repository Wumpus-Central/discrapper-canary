n.d(t, { Z: () => g });
var i = n(54381);
n(473749);
var r = n(100527),
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
    m = n(834818);
function g(e) {
    let { channel: t, hasActiveStream: n, showRightDivider: g = !1 } = e,
        { analyticsLocations: b } = (0, l.ZP)(r.Z.VOICE_CONTROL_TRAY),
        y = (0, o.Z)(),
        { isSharedCanvasEnabled: C } = c.Z.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: "b7309a_1",
        }),
        { enableViewerClipping: v } = s.Z.useExperiment(
            { location: "VoiceEffectsActionBar" },
            { autoTrackExposure: !1 },
        ),
        _ = (0, a.Z)(u.Z);
    if (null == t || null != y) return null;
    let x = v && _,
        j = C && n;
    return x || j
        ? (0, i.jsxs)(l.Gt, {
              value: b,
              children: [
                  (0, i.jsxs)("div", {
                      className: m.voiceEffectsActionBar,
                      children: [
                          x && (0, i.jsx)(d.Z, { channel: t }),
                          j && (0, i.jsx)(p.Z, {}),
                          j && (0, i.jsx)(h.Z, { channel: t }),
                          j && (0, i.jsx)(f.Z, {}),
                      ],
                  }),
                  g && (0, i.jsx)("div", { className: m.divider }),
              ],
          })
        : null;
}
