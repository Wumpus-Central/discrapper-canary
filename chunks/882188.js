n.d(t, { Z: () => E });
var l = n(951288),
    i = n(442837),
    r = n(481060),
    a = n(278323),
    o = n(728345),
    u = n(199902),
    s = n(314897),
    d = n(158776),
    c = n(763624),
    g = n(607361),
    f = n(877912),
    m = n(981631),
    Z = n(658805),
    P = n(388032);
function E(e, t) {
    let { enableRequestToStream: n } = c.A.useExperiment({
            guildId: t.guild_id,
            location: "useRequestToStreamItem",
        }),
        E = (0, i.e7)([s.default], () => s.default.getId()),
        v = (0, i.e7)([d.Z], () =>
            d.Z.getActivities(e, t.getGuildId()).find((e) => null != e.application_id && e.type === m.IIU.PLAYING),
        ),
        b = (0, i.e7)([u.Z], () => null != u.Z.getStreamForUser(e, t.getGuildId())),
        p = (0, f.Z)(e),
        h = (0, o.IX)(null == v ? void 0 : v.application_id).data,
        I = (0, g.Z)(e, t.id);
    return E !== e && null != v && null != h && n && I && !b
        ? (0, l.jsx)(
              r.sNh,
              {
                  id: "request-to-stream",
                  disabled: p,
                  label: P.intl.format(Z.default["8qq+Hx"], { applicationName: h.name }),
                  action: function () {
                      a.Z.sendActivityInvite({
                          type: m.mFx.STREAM_REQUEST,
                          channelId: t.id,
                          activity: v,
                          content: "<@".concat(e, ">"),
                          location: "request to stream item",
                          targetUserId: e,
                      });
                  },
                  icon: r.m3e,
              },
              "request-to-stream",
          )
        : null;
}
