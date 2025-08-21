n.d(t, { Z: () => E });
var l = n(951288),
    i = n(442837),
    r = n(481060),
    a = n(278323),
    o = n(728345),
    u = n(199902),
    s = n(314897),
    d = n(763624),
    c = n(607361),
    g = n(463421),
    f = n(981631),
    m = n(658805),
    Z = n(388032);
function E(e, t) {
    let { enableRequestToStream: n } = d.A.useExperiment({
            guildId: t.guild_id,
            location: "useRequestToStreamItem",
        }),
        E = (0, i.e7)([s.default], () => s.default.getId()),
        P = (0, g.Z)(e, t.guild_id)[0],
        v = (0, i.e7)([u.Z], () => null != u.Z.getStreamForUser(e, t.getGuildId())),
        b = (0, o.IX)(null == P ? void 0 : P.application_id).data,
        h = (0, c.Z)(e, t.id);
    return E !== e && null != P && null != b && n && h && !v
        ? (0, l.jsx)(
              r.sNh,
              {
                  id: "request-to-stream",
                  label: Z.intl.format(m.default["8qq+Hx"], { applicationName: b.name }),
                  action: function () {
                      a.Z.sendActivityInvite({
                          type: f.mFx.STREAM_REQUEST,
                          channelId: t.id,
                          activity: P,
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
