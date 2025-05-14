n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    E = n(228168),
    b = n(981631),
    y = n(388032),
    O = n(588015);
function v(e) {
    let { voiceChannel: t, onAction: n, onClose: o } = e,
        { themeType: v } = (0, m.z)(),
        { analyticsLocations: I } = (0, c.ZP)(),
        S = (0, p.W)(t),
        T = (0, u.ZP)(t, !0),
        A = (0, s.e7)([f.Z], () => f.Z.getChannelStatus(t)),
        N = i.useMemo(() => (null == A || '' === A ? null : _.Z.parseVoiceChannelStatus(A, !0, { channelId: t.id })), [A, t.id]);
    i.useEffect(() => {
        null != N &&
            h.default.track(b.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: I
            });
    }, [N, t.id, t.guild_id, I]);
    let C = (e) => {
        e.stopPropagation(),
            n({ action: 'PRESS_VOICE_CHANNEL_STATUS' }),
            v === E.lY.POPOUT && (null == o || o()),
            (0, d.Z)({
                channel: t,
                sourceAnalyticsLocations: I
            });
    };
    return T && S
        ? (0, r.jsxs)(l.P3F, {
              className: O.clickable,
              onClick: C,
              children: [
                  (0, r.jsx)(g.Z, {
                      text: null != N ? N : y.intl.string(y.t.Mgpxi4),
                      variant: 'text-xs/normal',
                      color: 'text-secondary',
                      className: O.text
                  }),
                  (0, r.jsx)(l.vdY, {
                      color: 'currentColor',
                      size: 'xxs',
                      className: a()(O.pencilIcon, null != N ? O.hidden : void 0),
                      'aria-label': y.intl.string(y.t.bt75u7)
                  })
              ]
          })
        : null != N
          ? (0, r.jsx)(g.Z, {
                text: N,
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: O.text
            })
          : null;
}
