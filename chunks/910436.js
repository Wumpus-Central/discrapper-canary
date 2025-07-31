(n.d(t, { Z: () => E }), n(539854), n(388685));
var r = n(255367);
n(73800);
var i = n(287734),
    l = n(872810),
    a = n(122810),
    o = n(841784),
    s = n(503438),
    c = n(802856),
    u = n(420660),
    d = n(509212),
    p = n(497505),
    h = n(23404),
    f = n(81063),
    g = n(761282),
    m = n(358924),
    b = n(868854),
    _ = n(817915),
    O = n(981631);
function E(e) {
    let { party: t, onChannelContextMenu: n, quest: E } = e,
        y = (0, b.L)(),
        { voiceChannels: v, currentActivities: I, partiedMembers: C, applicationStreams: S, guildContext: N } = t,
        T = [],
        P = (e) => {
            let { length: t } = T;
            if (0 === t) return void T.push(e);
            T.push(e);
        };
    for (let { activity: e } of (v.length > 0 &&
        v.forEach((e) => {
            let { members: t, channel: i, guild: l } = e;
            P(
                (0, r.jsx)(
                    m.Z.VoiceSection,
                    {
                        guild: l,
                        channel: i,
                        members: t,
                        partySize: (function (e, t) {
                            let n = e.length;
                            return {
                                knownSize: n,
                                unknownSize: 0,
                                totalSize: n + 0
                            };
                        })(t),
                        onChannelContextMenu: n
                    },
                    'voice-'.concat(i.id)
                )
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = g.ct(e);
            if (null != t) {
                P(t);
                break;
            }
        }
    return (
        S.length > 0 &&
            y &&
            S.forEach((e) => {
                let { stream: t, streamUser: n, activity: a } = e;
                P(
                    (0, r.jsx)(
                        m.Z.ApplicationStreamingSection,
                        {
                            guildId: null == N ? void 0 : N.id,
                            user: n,
                            activity: a,
                            applicationStream: t,
                            onPreviewClick: () => {
                                (i.default.selectVoiceChannel(t.channelId), (0, l.iV)(t));
                            }
                        },
                        'application-stream-'.concat(t.ownerId)
                    )
                );
            }),
        I.forEach((e, t) => {
            var n, i, l, g, b, y, S, T, j;
            let { activity: A, game: Z, playingMembers: x, activityUser: w } = e;
            if (null == A || null == A.type) return null;
            if (I.length > 1 && A.type === O.IIU.PLAYING && !(0, a.Z)(A) && null != Z)
                P(
                    (0, r.jsx)(
                        m.Z.GameSection,
                        {
                            icon: Z.getIconURL(_.Z),
                            name: Z.name,
                            partySize: {
                                knownSize: x.length,
                                unknownSize: 0,
                                totalSize: x.length
                            },
                            members: x
                        },
                        'game-'.concat(null != (n = A.session_id) ? n : t, '-').concat(null != (i = A.application_id) ? i : t)
                    )
                );
            else if ((0, o.Z)(A)) {
                let e = new Set(x.map((e) => e.id)),
                    t = null == (l = v.find((e) => null != e)) ? void 0 : l.channel;
                null != t &&
                    P(
                        (0, r.jsx)(
                            m.Z.EmbeddedActivitySection,
                            {
                                activity: A,
                                participants: e,
                                channel: t,
                                guildId: t.guild_id
                            },
                            'embedded-activity-'.concat(A.application_id)
                        )
                    );
            } else if ((null != A.assets || (0, a.Z)(A)) && A.type === O.IIU.PLAYING)
                P(
                    (0, r.jsx)(
                        m.Z.RichPresenceSection,
                        {
                            activity: A,
                            getAssetImage: f.xF
                        },
                        'rich-presence-'.concat(null != (g = A.session_id) ? g : t, '-').concat(w.id)
                    )
                );
            else if ((0, u.Z)(A)) {
                let e = v.length > 0 && v[0].members.length > 1,
                    n = x.length > 1;
                P(
                    (0, r.jsx)(
                        m.Z.TwitchSection,
                        {
                            guildId: null == N ? void 0 : N.id,
                            activity: A,
                            user: e || n ? w : null,
                            getAssetImage: f.xF
                        },
                        'streaming-'.concat(null != (b = A.session_id) ? b : t)
                    )
                );
            } else
                (0, s.Z)(A)
                    ? P(
                          (0, r.jsx)(
                              m.Z.SpotifySection,
                              {
                                  activity: A,
                                  isSolo: 1 === C.length,
                                  partySize: {
                                      knownSize: x.length,
                                      unknownSize: 0,
                                      totalSize: x.length
                                  },
                                  getAssetImage: f.xF,
                                  members: x
                              },
                              'spotify-'.concat(null != (y = A.session_id) ? y : t, '-').concat(w.id)
                          )
                      )
                    : (null != A.assets || (0, a.Z)(A)) && A.type === O.IIU.LISTENING
                      ? P(
                            (0, r.jsx)(
                                m.Z.RichPresenceSection,
                                {
                                    activity: A,
                                    getAssetImage: f.xF
                                },
                                'rich-presence-'.concat(null != (S = A.session_id) ? S : t, '-').concat(w.id)
                            )
                        )
                      : (0, c.Z)(A) && P((0, r.jsx)(m.Z.XboxSection, { title: Z.name }, 'xbox-'.concat(null != (T = A.session_id) ? T : t)));
            null != E && null != Z && (0, d._D)(A, E) && (null == E.userStatus || !(0, d.zE)(E.userStatus, p.jn.ACTIVITY_PANEL)) && P((0, r.jsx)(h.Z, { quest: E }, 'quest-'.concat(E.id, '-').concat(null != (j = A.session_id) ? j : t)));
        }),
        T.length > 0 ? (0, r.jsx)(m.Z.Body, { children: T }) : null
    );
}
