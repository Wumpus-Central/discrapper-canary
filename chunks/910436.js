n.d(t, { Z: () => O }), n(539854), n(388685);
var r = n(255367);
n(73800);
var i = n(287734),
    l = n(872810),
    a = n(122810),
    o = n(841784),
    s = n(503438),
    c = n(802856),
    u = n(420660),
    d = n(497505),
    p = n(918701),
    h = n(23404),
    f = n(81063),
    g = n(761282),
    m = n(358924),
    b = n(868854),
    _ = n(817915),
    E = n(981631);
function O(e) {
    let { party: t, onChannelContextMenu: n, quest: O } = e,
        I = (0, b.L)(),
        { voiceChannels: y, currentActivities: v, partiedMembers: C, applicationStreams: S, guildContext: N } = t,
        T = [],
        P = (e) => {
            var t, n;
            let { length: i } = T;
            if (0 === i) return void T.push(e);
            let l = T[i - 1],
                a = ''.concat(null != (t = null == e ? void 0 : e.key) ? t : ''),
                o = ''.concat(null != (n = null == l ? void 0 : l.key) ? n : '').startsWith('game') && a.startsWith('rich-presence');
            T.push((0, r.jsx)(m.Z.Separator, { inset: o }, 'sep-'.concat(a))), T.push(e);
        };
    for (let { activity: e } of (y.length > 0 &&
        y.forEach((e) => {
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
            I &&
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
                                i.default.selectVoiceChannel(t.channelId), (0, l.iV)(t);
                            }
                        },
                        'application-stream-'.concat(t.ownerId)
                    )
                );
            }),
        v.forEach((e, t) => {
            var n, i, l, g, b, I, S, T, j;
            let { activity: A, game: x, playingMembers: Z, activityUser: w } = e;
            if (null == A || null == A.type) return null;
            if (v.length > 1 && A.type === E.IIU.PLAYING && !(0, a.Z)(A) && null != x)
                P(
                    (0, r.jsx)(
                        m.Z.GameSection,
                        {
                            icon: x.getIconURL(_.Z),
                            name: x.name,
                            partySize: {
                                knownSize: Z.length,
                                unknownSize: 0,
                                totalSize: Z.length
                            },
                            members: Z
                        },
                        'game-'.concat(null != (n = A.session_id) ? n : t, '-').concat(null != (i = A.application_id) ? i : t)
                    )
                );
            else if ((0, o.Z)(A)) {
                let e = new Set(Z.map((e) => e.id)),
                    t = null == (l = y.find((e) => null != e)) ? void 0 : l.channel;
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
            } else if ((null != A.assets || (0, a.Z)(A)) && A.type === E.IIU.PLAYING)
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
                let e = y.length > 0 && y[0].members.length > 1,
                    n = Z.length > 1;
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
                                      knownSize: Z.length,
                                      unknownSize: 0,
                                      totalSize: Z.length
                                  },
                                  getAssetImage: f.xF,
                                  members: Z
                              },
                              'spotify-'.concat(null != (I = A.session_id) ? I : t, '-').concat(w.id)
                          )
                      )
                    : (null != A.assets || (0, a.Z)(A)) && A.type === E.IIU.LISTENING
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
                      : (0, c.Z)(A) && P((0, r.jsx)(m.Z.XboxSection, { title: x.name }, 'xbox-'.concat(null != (T = A.session_id) ? T : t)));
            null != O && null != x && (0, p._D)(A, O) && (null == O.userStatus || !(0, p.zE)(O.userStatus, d.jn.ACTIVITY_PANEL)) && P((0, r.jsx)(h.Z, { quest: O }, 'quest-'.concat(O.id, '-').concat(null != (j = A.session_id) ? j : t)));
        }),
        T.length > 0 ? (0, r.jsx)(m.Z.Body, { children: T }) : null
    );
}
