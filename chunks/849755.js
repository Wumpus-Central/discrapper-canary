n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
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
    v = n(588015);
function O(e) {
    let { voiceChannel: t, onAction: n, onClose: o } = e,
        { profileType: O } = (0, m.z)(),
        { analyticsLocations: I } = (0, c.ZP)(),
        S = (0, p.W)(t),
        T = (0, u.ZP)(t, !0),
        N = (0, s.e7)([f.Z], () => f.Z.getChannelStatus(t)),
        A = i.useMemo(() => (null == N || '' === N ? null : _.Z.parseVoiceChannelStatus(N, !0, { channelId: t.id })), [N, t.id]);
    i.useEffect(() => {
        null != A &&
            h.default.track(b.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: I
            });
    }, [A, t.id, t.guild_id, I]);
    let C = (e) => {
        e.stopPropagation(),
            n({ action: 'PRESS_VOICE_CHANNEL_STATUS' }),
            O === E.y0.BITE_SIZE && (null == o || o()),
            (0, d.Z)({
                channel: t,
                sourceAnalyticsLocations: I
            });
    };
    return T && S
        ? (0, r.jsxs)(l.P3F, {
              className: v.clickable,
              onClick: C,
              children: [
                  (0, r.jsx)(g.Z, {
                      text: null != A ? A : y.NW.string(y.t.Mgpxi4),
                      variant: 'text-xs/normal',
                      color: 'text-secondary',
                      className: v.text
                  }),
                  (0, r.jsx)(l.vdY, {
                      color: 'currentColor',
                      size: 'xxs',
                      className: a()(v.pencilIcon, null != A ? v.hidden : void 0),
                      'aria-label': y.NW.string(y.t.bt75u7)
                  })
              ]
          })
        : null != A
          ? (0, r.jsx)(g.Z, {
                text: A,
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: v.text
            })
          : null;
}
