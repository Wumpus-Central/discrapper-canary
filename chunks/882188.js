n.d(t, { Z: () => E });
var l = n(54381),
    i = n(442837),
    r = n(481060),
    a = n(278323),
    u = n(728345),
    o = n(199902),
    s = n(314897),
    d = n(763624),
    c = n(607361),
    g = n(463421),
    m = n(981631),
    f = n(621844),
    Z = n(388032);
function E(e, t) {
    let { enableRequestToStream: n } = d.A.useExperiment(
            {
                guildId: t.guild_id,
                location: "useRequestToStreamItem",
            },
            { autoTrackExposure: !1 },
        ),
        E = (0, i.e7)([s.default], () => s.default.getId()),
        P = (0, g.Z)(e, t.guild_id)[0],
        h = (0, i.e7)([o.Z], () => null != o.Z.getStreamForUser(e, t.getGuildId())),
        p = (0, u.IX)(null == P ? void 0 : P.application_id).data,
        b = (0, c.Z)(e, t.id);
    return E !== e && null != P && null != p && n && b && !h
        ? (0, l.jsx)(
              r.sNh,
              {
                  id: "request-to-stream",
                  label: Z.intl.format(f.default["8qq+H7"], { applicationName: p.name }),
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
