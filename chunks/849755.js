n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(906732),
    l = n(362721),
    c = n(117358),
    u = n(12498),
    d = n(446226),
    f = n(454585),
    _ = n(19780),
    p = n(626135),
    h = n(652853),
    m = n(373826),
    g = n(228168),
    E = n(981631),
    b = n(388032),
    v = n(355054);
function y(e) {
    let { voiceChannel: t, onAction: n, onClose: y } = e,
        { profileType: O } = (0, h.z)(),
        { analyticsLocations: I } = (0, s.ZP)(),
        S = (0, l.ZP)(t, !0),
        T = (0, o.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        N = null != T && '' !== T,
        A = (0, o.e7)([_.Z], () => _.Z.getChannelId()),
        C = (0, d.Z)(),
        R = A === t.id || (null == C ? void 0 : C.channelId) === t.id;
    i.useEffect(() => {
        N &&
            p.default.track(E.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: I
            });
    }, [N, t.id, t.guild_id, I]);
    let P = (e) => {
        e.stopPropagation(),
            n({ action: 'PRESS_VOICE_CHANNEL_STATUS' }),
            O === g.y0.BITE_SIZE && (null == y || y()),
            (0, c.Z)({
                channel: t,
                sourceAnalyticsLocations: I
            });
    };
    return N
        ? (0, r.jsxs)('div', {
              className: v.container,
              children: [
                  (0, r.jsx)(m.Z, {
                      text: f.Z.parseVoiceChannelStatus(T, !0, { channelId: t.id }),
                      variant: 'text-xs/normal',
                      color: 'currentColor',
                      clickableClassName: v.statusText,
                      onClick: S ? P : void 0
                  }),
                  (0, r.jsx)(a.vdY, {
                      color: 'currentColor',
                      size: 'xxs',
                      className: v.pencilIcon
                  })
              ]
          })
        : S && R
          ? (0, r.jsxs)('div', {
                className: v.container,
                children: [
                    (0, r.jsx)(m.Z, {
                        text: b.NW.string(b.t.Mgpxi4),
                        variant: 'text-xs/normal',
                        color: 'currentColor',
                        onClick: P
                    }),
                    (0, r.jsx)(a.vdY, {
                        color: 'currentColor',
                        size: 'xxs',
                        className: v.pencilIcon
                    })
                ]
            })
          : null;
}
