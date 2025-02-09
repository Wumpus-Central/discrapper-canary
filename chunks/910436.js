n.d(t, { Z: () => I }), n(653041), n(47120);
var i = n(200651);
n(192379);
var l = n(287734),
    r = n(872810),
    a = n(122810),
    s = n(841784),
    o = n(503438),
    c = n(802856),
    d = n(420660),
    u = n(918701),
    h = n(23404),
    m = n(81063),
    p = n(761282),
    g = n(358924),
    _ = n(868854),
    f = n(817915),
    E = n(981631);
function I(e) {
    let { party: t, onChannelContextMenu: n, quest: I } = e,
        C = (0, _.L)(),
        { voiceChannels: v, currentActivities: N, partiedMembers: T, applicationStreams: S, guildContext: A } = t,
        Z = [],
        x = (e) => {
            var t, n;
            let { length: l } = Z;
            if (0 === l) {
                Z.push(e);
                return;
            }
            let r = Z[l - 1],
                a = ''.concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ''),
                s = ''.concat(null !== (n = null == r ? void 0 : r.key) && void 0 !== n ? n : '').startsWith('game') && a.startsWith('rich-presence');
            Z.push((0, i.jsx)(g.Z.Separator, { inset: s }, 'sep-'.concat(a))), Z.push(e);
        };
    for (let { activity: e } of (v.length > 0 &&
        v.forEach((e) => {
            let { members: t, channel: l, guild: r } = e;
            x(
                (0, i.jsx)(
                    g.Z.VoiceSection,
                    {
                        guild: r,
                        channel: l,
                        members: t,
                        partySize: (function (e, t) {
                            let n;
                            let i = e.length;
                            return (
                                (n = i + 0),
                                {
                                    knownSize: i,
                                    unknownSize: 0,
                                    totalSize: n
                                }
                            );
                        })(t),
                        onChannelContextMenu: n
                    },
                    'voice-'.concat(l.id)
                )
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = p.ct(e);
            if (null != t) {
                x(t);
                break;
            }
        }
    return (
        S.length > 0 &&
            C &&
            S.forEach((e) => {
                let { stream: t, streamUser: n, activity: a } = e;
                x(
                    (0, i.jsx)(
                        g.Z.ApplicationStreamingSection,
                        {
                            guildId: null == A ? void 0 : A.id,
                            user: n,
                            activity: a,
                            applicationStream: t,
                            onPreviewClick: () => {
                                l.default.selectVoiceChannel(t.channelId), (0, r.iV)(t);
                            }
                        },
                        'application-stream-'.concat(t.ownerId)
                    )
                );
            }),
        N.forEach((e, t) => {
            var n, l, r, p, _, C, S, Z, b;
            let { activity: L, game: y, playingMembers: P, activityUser: O } = e;
            if (null == L || null == L.type) return null;
            if (N.length > 1 && L.type === E.IIU.PLAYING && !(0, a.Z)(L) && null != y)
                x(
                    (0, i.jsx)(
                        g.Z.GameSection,
                        {
                            icon: y.getIconURL(f.Z),
                            name: y.name,
                            partySize: {
                                knownSize: P.length,
                                unknownSize: 0,
                                totalSize: P.length
                            },
                            members: P
                        },
                        'game-'.concat(null !== (n = L.session_id) && void 0 !== n ? n : t, '-').concat(null !== (l = L.application_id) && void 0 !== l ? l : t)
                    )
                );
            else if ((0, s.Z)(L)) {
                let e = new Set(P.map((e) => e.id)),
                    t = null === (r = v.find((e) => null != e)) || void 0 === r ? void 0 : r.channel;
                null != t &&
                    x(
                        (0, i.jsx)(
                            g.Z.EmbeddedActivitySection,
                            {
                                activity: L,
                                participants: e,
                                channel: t,
                                guildId: t.guild_id
                            },
                            'embedded-activity-'.concat(L.application_id)
                        )
                    );
            } else if ((null != L.assets || (0, a.Z)(L)) && L.type === E.IIU.PLAYING)
                x(
                    (0, i.jsx)(
                        g.Z.RichPresenceSection,
                        {
                            activity: L,
                            getAssetImage: m.getAssetImage
                        },
                        'rich-presence-'.concat(null !== (p = L.session_id) && void 0 !== p ? p : t, '-').concat(O.id)
                    )
                );
            else if ((0, d.Z)(L)) {
                let e = v.length > 0 && v[0].members.length > 1,
                    n = P.length > 1;
                x(
                    (0, i.jsx)(
                        g.Z.TwitchSection,
                        {
                            guildId: null == A ? void 0 : A.id,
                            activity: L,
                            user: e || n ? O : null,
                            getAssetImage: m.getAssetImage
                        },
                        'streaming-'.concat(null !== (_ = L.session_id) && void 0 !== _ ? _ : t)
                    )
                );
            } else
                (0, o.Z)(L)
                    ? x(
                          (0, i.jsx)(
                              g.Z.SpotifySection,
                              {
                                  activity: L,
                                  isSolo: 1 === T.length,
                                  partySize: {
                                      knownSize: P.length,
                                      unknownSize: 0,
                                      totalSize: P.length
                                  },
                                  getAssetImage: m.getAssetImage,
                                  members: P
                              },
                              'spotify-'.concat(null !== (C = L.session_id) && void 0 !== C ? C : t, '-').concat(O.id)
                          )
                      )
                    : (null != L.assets || (0, a.Z)(L)) && L.type === E.IIU.LISTENING
                      ? x(
                            (0, i.jsx)(
                                g.Z.RichPresenceSection,
                                {
                                    activity: L,
                                    getAssetImage: m.getAssetImage
                                },
                                'rich-presence-'.concat(null !== (S = L.session_id) && void 0 !== S ? S : t, '-').concat(O.id)
                            )
                        )
                      : (0, c.Z)(L) && x((0, i.jsx)(g.Z.XboxSection, { title: y.name }, 'xbox-'.concat(null !== (Z = L.session_id) && void 0 !== Z ? Z : t)));
            null != I && null != y && (0, u._D)(L, I) && x((0, i.jsx)(h.Z, { quest: I }, 'quest-'.concat(I.id, '-').concat(null !== (b = L.session_id) && void 0 !== b ? b : t)));
        }),
        Z.length > 0 ? (0, i.jsx)(g.Z.Body, { children: Z }) : null
    );
}
