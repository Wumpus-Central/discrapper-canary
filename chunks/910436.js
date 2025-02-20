n.d(t, { Z: () => E }), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(287734),
    l = n(872810),
    o = n(122810),
    a = n(841784),
    s = n(503438),
    c = n(802856),
    u = n(420660),
    d = n(918701),
    p = n(23404),
    h = n(81063),
    g = n(761282),
    f = n(358924),
    m = n(868854),
    b = n(817915),
    _ = n(981631);
function E(e) {
    let { party: t, onChannelContextMenu: n, quest: E } = e,
        O = (0, m.L)(),
        { voiceChannels: N, currentActivities: v, partiedMembers: y, applicationStreams: I, guildContext: C } = t,
        S = [],
        T = (e) => {
            var t, n;
            let { length: i } = S;
            if (0 === i) {
                S.push(e);
                return;
            }
            let l = S[i - 1],
                o = ''.concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ''),
                a = ''.concat(null !== (n = null == l ? void 0 : l.key) && void 0 !== n ? n : '').startsWith('game') && o.startsWith('rich-presence');
            S.push((0, r.jsx)(f.Z.Separator, { inset: a }, 'sep-'.concat(o))), S.push(e);
        };
    for (let { activity: e } of (N.length > 0 &&
        N.forEach((e) => {
            let { members: t, channel: i, guild: l } = e;
            T(
                (0, r.jsx)(
                    f.Z.VoiceSection,
                    {
                        guild: l,
                        channel: i,
                        members: t,
                        partySize: (function (e, t) {
                            let n;
                            let r = e.length;
                            return (
                                (n = r + 0),
                                {
                                    knownSize: r,
                                    unknownSize: 0,
                                    totalSize: n
                                }
                            );
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
                T(t);
                break;
            }
        }
    return (
        I.length > 0 &&
            O &&
            I.forEach((e) => {
                let { stream: t, streamUser: n, activity: o } = e;
                T(
                    (0, r.jsx)(
                        f.Z.ApplicationStreamingSection,
                        {
                            guildId: null == C ? void 0 : C.id,
                            user: n,
                            activity: o,
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
            var n, i, l, g, m, O, I, S, P;
            let { activity: j, game: A, playingMembers: Z, activityUser: x } = e;
            if (null == j || null == j.type) return null;
            if (v.length > 1 && j.type === _.IIU.PLAYING && !(0, o.Z)(j) && null != A)
                T(
                    (0, r.jsx)(
                        f.Z.GameSection,
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
                        'game-'.concat(null !== (n = j.session_id) && void 0 !== n ? n : t, '-').concat(null !== (i = j.application_id) && void 0 !== i ? i : t)
                    )
                );
            else if ((0, a.Z)(j)) {
                let e = new Set(Z.map((e) => e.id)),
                    t = null === (l = N.find((e) => null != e)) || void 0 === l ? void 0 : l.channel;
                null != t &&
                    T(
                        (0, r.jsx)(
                            f.Z.EmbeddedActivitySection,
                            {
                                activity: j,
                                participants: e,
                                channel: t,
                                guildId: t.guild_id
                            },
                            'embedded-activity-'.concat(j.application_id)
                        )
                    );
            } else if ((null != j.assets || (0, o.Z)(j)) && j.type === _.IIU.PLAYING)
                T(
                    (0, r.jsx)(
                        f.Z.RichPresenceSection,
                        {
                            activity: j,
                            getAssetImage: h.getAssetImage
                        },
                        'rich-presence-'.concat(null !== (g = j.session_id) && void 0 !== g ? g : t, '-').concat(x.id)
                    )
                );
            else if ((0, u.Z)(j)) {
                let e = N.length > 0 && N[0].members.length > 1,
                    n = Z.length > 1;
                T(
                    (0, r.jsx)(
                        f.Z.TwitchSection,
                        {
                            guildId: null == C ? void 0 : C.id,
                            activity: j,
                            user: e || n ? x : null,
                            getAssetImage: h.getAssetImage
                        },
                        'streaming-'.concat(null !== (m = j.session_id) && void 0 !== m ? m : t)
                    )
                );
            } else
                (0, s.Z)(j)
                    ? T(
                          (0, r.jsx)(
                              f.Z.SpotifySection,
                              {
                                  activity: j,
                                  isSolo: 1 === y.length,
                                  partySize: {
                                      knownSize: Z.length,
                                      unknownSize: 0,
                                      totalSize: Z.length
                                  },
                                  getAssetImage: h.getAssetImage,
                                  members: Z
                              },
                              'spotify-'.concat(null !== (O = j.session_id) && void 0 !== O ? O : t, '-').concat(x.id)
                          )
                      )
                    : (null != j.assets || (0, o.Z)(j)) && j.type === _.IIU.LISTENING
                      ? T(
                            (0, r.jsx)(
                                f.Z.RichPresenceSection,
                                {
                                    activity: j,
                                    getAssetImage: h.getAssetImage
                                },
                                'rich-presence-'.concat(null !== (I = j.session_id) && void 0 !== I ? I : t, '-').concat(x.id)
                            )
                        )
                      : (0, c.Z)(j) && T((0, r.jsx)(f.Z.XboxSection, { title: A.name }, 'xbox-'.concat(null !== (S = j.session_id) && void 0 !== S ? S : t)));
            null != E && null != A && (0, d._D)(j, E) && T((0, r.jsx)(p.Z, { quest: E }, 'quest-'.concat(E.id, '-').concat(null !== (P = j.session_id) && void 0 !== P ? P : t)));
        }),
        S.length > 0 ? (0, r.jsx)(f.Z.Body, { children: S }) : null
    );
}
