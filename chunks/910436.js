n.d(t, { Z: () => E }), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(287734),
    l = n(872810),
    a = n(122810),
    o = n(841784),
    s = n(503438),
    c = n(802856),
    u = n(420660),
    d = n(918701),
    p = n(23404),
    h = n(81063),
    f = n(761282),
    g = n(358924),
    m = n(868854),
    b = n(817915),
    _ = n(981631);
function E(e) {
    let { party: t, onChannelContextMenu: n, quest: E } = e,
        O = (0, m.L)(),
        { voiceChannels: N, currentActivities: y, partiedMembers: I, applicationStreams: v, guildContext: C } = t,
        S = [],
        T = (e) => {
            var t, n;
            let { length: i } = S;
            if (0 === i) return void S.push(e);
            let l = S[i - 1],
                a = ''.concat(null != (t = null == e ? void 0 : e.key) ? t : ''),
                o = ''.concat(null != (n = null == l ? void 0 : l.key) ? n : '').startsWith('game') && a.startsWith('rich-presence');
            S.push((0, r.jsx)(g.Z.Separator, { inset: o }, 'sep-'.concat(a))), S.push(e);
        };
    for (let { activity: e } of (N.length > 0 &&
        N.forEach((e) => {
            let { members: t, channel: i, guild: l } = e;
            T(
                (0, r.jsx)(
                    g.Z.VoiceSection,
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
            let t = f.ct(e);
            if (null != t) {
                T(t);
                break;
            }
        }
    return (
        v.length > 0 &&
            O &&
            v.forEach((e) => {
                let { stream: t, streamUser: n, activity: a } = e;
                T(
                    (0, r.jsx)(
                        g.Z.ApplicationStreamingSection,
                        {
                            guildId: null == C ? void 0 : C.id,
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
        y.forEach((e, t) => {
            var n, i, l, f, m, O, v, S, P;
            let { activity: j, game: A, playingMembers: Z, activityUser: x } = e;
            if (null == j || null == j.type) return null;
            if (y.length > 1 && j.type === _.IIU.PLAYING && !(0, a.Z)(j) && null != A)
                T(
                    (0, r.jsx)(
                        g.Z.GameSection,
                        {
                            icon: A.getIconURL(b.Z),
                            name: A.name,
                            partySize: {
                                knownSize: Z.length,
                                unknownSize: 0,
                                totalSize: Z.length
                            },
                            members: Z
                        },
                        'game-'.concat(null != (n = j.session_id) ? n : t, '-').concat(null != (i = j.application_id) ? i : t)
                    )
                );
            else if ((0, o.Z)(j)) {
                let e = new Set(Z.map((e) => e.id)),
                    t = null == (l = N.find((e) => null != e)) ? void 0 : l.channel;
                null != t &&
                    T(
                        (0, r.jsx)(
                            g.Z.EmbeddedActivitySection,
                            {
                                activity: j,
                                participants: e,
                                channel: t,
                                guildId: t.guild_id
                            },
                            'embedded-activity-'.concat(j.application_id)
                        )
                    );
            } else if ((null != j.assets || (0, a.Z)(j)) && j.type === _.IIU.PLAYING)
                T(
                    (0, r.jsx)(
                        g.Z.RichPresenceSection,
                        {
                            activity: j,
                            getAssetImage: h.xF
                        },
                        'rich-presence-'.concat(null != (f = j.session_id) ? f : t, '-').concat(x.id)
                    )
                );
            else if ((0, u.Z)(j)) {
                let e = N.length > 0 && N[0].members.length > 1,
                    n = Z.length > 1;
                T(
                    (0, r.jsx)(
                        g.Z.TwitchSection,
                        {
                            guildId: null == C ? void 0 : C.id,
                            activity: j,
                            user: e || n ? x : null,
                            getAssetImage: h.xF
                        },
                        'streaming-'.concat(null != (m = j.session_id) ? m : t)
                    )
                );
            } else
                (0, s.Z)(j)
                    ? T(
                          (0, r.jsx)(
                              g.Z.SpotifySection,
                              {
                                  activity: j,
                                  isSolo: 1 === I.length,
                                  partySize: {
                                      knownSize: Z.length,
                                      unknownSize: 0,
                                      totalSize: Z.length
                                  },
                                  getAssetImage: h.xF,
                                  members: Z
                              },
                              'spotify-'.concat(null != (O = j.session_id) ? O : t, '-').concat(x.id)
                          )
                      )
                    : (null != j.assets || (0, a.Z)(j)) && j.type === _.IIU.LISTENING
                      ? T(
                            (0, r.jsx)(
                                g.Z.RichPresenceSection,
                                {
                                    activity: j,
                                    getAssetImage: h.xF
                                },
                                'rich-presence-'.concat(null != (v = j.session_id) ? v : t, '-').concat(x.id)
                            )
                        )
                      : (0, c.Z)(j) && T((0, r.jsx)(g.Z.XboxSection, { title: A.name }, 'xbox-'.concat(null != (S = j.session_id) ? S : t)));
            null != E && null != A && (0, d._D)(j, E) && T((0, r.jsx)(p.Z, { quest: E }, 'quest-'.concat(E.id, '-').concat(null != (P = j.session_id) ? P : t)));
        }),
        S.length > 0 ? (0, r.jsx)(g.Z.Body, { children: S }) : null
    );
}
