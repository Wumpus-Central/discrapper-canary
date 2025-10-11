n.d(t, { Z: () => E });
var l = n(951288),
    i = n(442837),
    r = n(481060),
    a = n(278323),
    o = n(728345),
    u = n(199902),
    s = n(314897),
    c = n(763624),
    d = n(607361),
    g = n(463421),
    m = n(981631),
    f = n(658805),
    Z = n(388032);
function E(e, t) {
    let { enableRequestToStream: n } = c.A.useExperiment(
            {
                guildId: t.guild_id,
                location: "useRequestToStreamItem",
            },
            { autoTrackExposure: !1 },
        ),
        E = (0, i.e7)([s.default], () => s.default.getId()),
        P = (0, g.Z)(e, t.guild_id)[0],
        b = (0, i.e7)([u.Z], () => null != u.Z.getStreamForUser(e, t.getGuildId())),
        v = (0, o.IX)(null == P ? void 0 : P.application_id).data,
        h = (0, d.Z)(e, t.id);
    return E !== e && null != P && null != v && n && h && !b
        ? (0, l.jsx)(
              r.sNh,
              {
                  id: "request-to-stream",
                  label: Z.intl.format(f.default["8qq+Hx"], { applicationName: v.name }),
                  action: function () {
                      a.Z.sendActivityInvite({
                          type: m.mFx.STREAM_REQUEST,
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
