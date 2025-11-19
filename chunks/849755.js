n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(906732),
    u = n(362721),
    d = n(117358),
    f = n(12498),
    _ = n(454585),
    p = n(869768),
    h = n(626135),
    m = n(652853),
    g = n(373826),
    E = n(981631),
    b = n(671955),
    y = n(388032),
    O = n(432073);
function v(e) {
    let { voiceChannel: t, onAction: n, onClose: a } = e,
        { themeType: v } = (0, m.z)(),
        { analyticsLocations: I } = (0, c.ZP)(),
        T = (0, p.W)(t),
        S = (0, u.ZP)(t, !0),
        A = (0, s.e7)([f.Z], () => f.Z.getChannelStatus(t)),
        C = i.useMemo(
            () => (null == A || "" === A ? null : _.Z.parseVoiceChannelStatus(A, !0, { channelId: t.id })),
            [A, t.id],
        );
    i.useEffect(() => {
        null != C &&
            h.default.track(E.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: I,
            });
    }, [C, t.id, t.guild_id, I]);
    let N = (e) => {
        e.stopPropagation(),
            n({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
            v === b.l.POPOUT && (null == a || a()),
            (0, d.Z)({
                channel: t,
                sourceAnalyticsLocations: I,
            });
    };
    return S && T
        ? (0, r.jsxs)(l.P3F, {
              className: O.clickable,
              onClick: N,
              children: [
                  (0, r.jsx)(g.Z, {
                      text: null != C ? C : y.intl.string(y.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-secondary",
                      className: O.text,
                  }),
                  (0, r.jsx)(l.vdY, {
                      color: "currentColor",
                      size: "xxs",
                      className: o()(O.pencilIcon, null != C ? O.hidden : void 0),
                      "aria-label": y.intl.string(y.t.bt75uw),
                  }),
              ],
          })
        : null != C
          ? (0, r.jsx)(g.Z, {
                text: C,
                variant: "text-xs/normal",
                color: "text-secondary",
                className: O.text,
            })
          : null;
}
