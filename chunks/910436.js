n.d(t, { Z: () => y }), n(539854), n(388685);
var r = n(54381);
n(473749);
var i = n(287734),
    l = n(872810),
    a = n(122810),
    s = n(841784),
    o = n(503438),
    c = n(802856),
    u = n(420660),
    d = n(509212),
    p = n(113434),
    f = n(497505),
    h = n(23404),
    g = n(81063),
    m = n(761282),
    _ = n(358924),
    b = n(868854),
    E = n(817915),
    O = n(981631);
function y(e) {
    let { party: t, onChannelContextMenu: n, quest: y } = e,
        v = (0, b.L)(),
        { voiceChannels: I, currentActivities: C, partiedMembers: S, applicationStreams: T, guildContext: N } = t,
        j = (0, p.z1)(y),
        P = [],
        x = (e) => {
            let { length: t } = P;
            if (0 === t) return void P.push(e);
            P.push(e);
        };
    for (let { activity: e } of (I.length > 0 &&
        I.forEach((e) => {
            let { members: t, channel: i, guild: l } = e;
            x(
                (0, r.jsx)(
                    _.Z.VoiceSection,
                    {
                        guild: l,
                        channel: i,
                        members: t,
                        partySize: (function (e, t) {
                            let n = e.length;
                            return {
                                knownSize: n,
                                unknownSize: 0,
                                totalSize: n + 0,
                            };
                        })(t),
                        onChannelContextMenu: n,
                    },
                    "voice-".concat(i.id),
                ),
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = m.ct(e);
            if (null != t) {
                x(t);
                break;
            }
        }
    return (
        T.length > 0 &&
            v &&
            T.forEach((e) => {
                let { stream: t, streamUser: n, activity: a } = e;
                x(
                    (0, r.jsx)(
                        _.Z.ApplicationStreamingSection,
                        {
                            guildId: null == N ? void 0 : N.id,
                            user: n,
                            activity: a,
                            applicationStream: t,
                            onPreviewClick: () => {
                                i.default.selectVoiceChannel(t.channelId), (0, l.iV)(t);
                            },
                        },
                        "application-stream-".concat(t.ownerId),
                    ),
                );
            }),
        C.forEach((e, t) => {
            var n, i, l, p, m, b, v, T, P;
            let { activity: A, game: Z, playingMembers: w, activityUser: L } = e;
            if (null == A || null == A.type) return null;
            if (A.type === O.IIU.PLAYING)
                if (C.length > 1 && !(0, a.Z)(A) && null != Z)
                    x(
                        (0, r.jsx)(
                            _.Z.GameSection,
                            {
                                icon: Z.getIconURL(E.Z),
                                name: Z.name,
                                partySize: {
                                    knownSize: w.length,
                                    unknownSize: 0,
                                    totalSize: w.length,
                                },
                                members: w,
                                activity: A,
                            },
                            "game-"
                                .concat(null != (n = A.session_id) ? n : t, "-")
                                .concat(null != (i = A.application_id) ? i : t),
                        ),
                    );
                else if ((0, s.Z)(A)) {
                    let e = new Set(w.map((e) => e.id)),
                        t = null == (l = I.find((e) => null != e)) ? void 0 : l.channel;
                    null != t &&
                        x(
                            (0, r.jsx)(
                                _.Z.EmbeddedActivitySection,
                                {
                                    activity: A,
                                    participants: e,
                                    channel: t,
                                    guildId: t.guild_id,
                                },
                                "embedded-activity-".concat(A.application_id),
                            ),
                        );
                } else
                    (0, c.Z)(A)
                        ? x(
                              (0, r.jsx)(
                                  _.Z.XboxSection,
                                  { title: Z.name },
                                  "xbox-".concat(null != (p = A.session_id) ? p : t),
                              ),
                          )
                        : x(
                              (0, r.jsx)(
                                  _.Z.RichPresenceSection,
                                  {
                                      activity: A,
                                      getAssetImage: g.xF,
                                      user: L,
                                  },
                                  "rich-presence-".concat(null != (m = A.session_id) ? m : t, "-").concat(L.id),
                              ),
                          );
            else if ((0, u.Z)(A)) {
                let e = I.length > 0 && I[0].members.length > 1,
                    n = w.length > 1;
                x(
                    (0, r.jsx)(
                        _.Z.TwitchSection,
                        {
                            guildId: null == N ? void 0 : N.id,
                            activity: A,
                            user: e || n ? L : null,
                            getAssetImage: g.xF,
                        },
                        "streaming-".concat(null != (b = A.session_id) ? b : t),
                    ),
                );
            } else
                A.type === O.IIU.LISTENING &&
                    ((0, o.Z)(A)
                        ? x(
                              (0, r.jsx)(
                                  _.Z.SpotifySection,
                                  {
                                      activity: A,
                                      isSolo: 1 === S.length,
                                      partySize: {
                                          knownSize: w.length,
                                          unknownSize: 0,
                                          totalSize: w.length,
                                      },
                                      getAssetImage: g.xF,
                                      members: w,
                                  },
                                  "spotify-".concat(null != (v = A.session_id) ? v : t, "-").concat(L.id),
                              ),
                          )
                        : (null != A.assets || (0, a.Z)(A)) &&
                          x(
                              (0, r.jsx)(
                                  _.Z.RichPresenceSection,
                                  {
                                      activity: A,
                                      getAssetImage: g.xF,
                                      user: L,
                                  },
                                  "rich-presence-".concat(null != (T = A.session_id) ? T : t, "-").concat(L.id),
                              ),
                          ));
            j &&
                null != y &&
                null != Z &&
                (0, d._D)(A, y) &&
                (null == y.userStatus || !(0, d.zE)(y.userStatus, f.jn.ACTIVITY_PANEL)) &&
                x((0, r.jsx)(h.Z, { quest: y }, "quest-".concat(y.id, "-").concat(null != (P = A.session_id) ? P : t)));
        }),
        P.length > 0 ? (0, r.jsx)(_.Z.Body, { children: P }) : null
    );
}
