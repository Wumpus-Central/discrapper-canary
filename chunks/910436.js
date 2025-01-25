n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(653041),
    n(47120);
var i = n(200651);
n(192379);
var r = n(287734),
    l = n(872810),
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
    f = n(868854),
    _ = n(817915),
    E = n(981631);
function I(e) {
    let { party: t, onChannelContextMenu: n, quest: I } = e,
        C = (0, f.L)(),
        { voiceChannels: N, currentActivities: v, partiedMembers: S, applicationStreams: T, guildContext: b } = t,
        A = [],
        Z = (e) => {
            var t, n;
            let { length: r } = A;
            if (0 === r) {
                A.push(e);
                return;
            }
            let l = A[r - 1],
                a = ''.concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ''),
                s = ''.concat(null !== (n = null == l ? void 0 : l.key) && void 0 !== n ? n : '').startsWith('game') && a.startsWith('rich-presence');
            A.push((0, i.jsx)(g.Z.Separator, { inset: s }, 'sep-'.concat(a))), A.push(e);
        };
    for (let { activity: e } of (N.length > 0 &&
        N.forEach((e) => {
            let { members: t, channel: r, guild: l } = e;
            Z(
                (0, i.jsx)(
                    g.Z.VoiceSection,
                    {
                        guild: l,
                        channel: r,
                        members: t,
                        partySize: (function (e, t) {
                            let n;
                            let i = e.length,
                                r = 0;
                            !1;
                            n = i + r;
                            return {
                                knownSize: i,
                                unknownSize: r,
                                totalSize: n
                            };
                        })(t),
                        onChannelContextMenu: n
                    },
                    'voice-'.concat(r.id)
                )
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = p.ct(e);
            if (null != t) {
                Z(t);
                break;
            }
        }
    return (
        T.length > 0 &&
            C &&
            T.forEach((e) => {
                let { stream: t, streamUser: n, activity: a } = e;
                Z(
                    (0, i.jsx)(
                        g.Z.ApplicationStreamingSection,
                        {
                            guildId: null == b ? void 0 : b.id,
                            user: n,
                            activity: a,
                            applicationStream: t,
                            onPreviewClick: () => {
                                r.default.selectVoiceChannel(t.channelId), (0, l.iV)(t);
                            }
                        },
                        'application-stream-'.concat(t.ownerId)
                    )
                );
            }),
        v.forEach((e, t) => {
            var n, r, l, p, f, C, T, A, x;
            let { activity: L, game: y, playingMembers: P, activityUser: O } = e;
            if (null == L || null == L.type) return null;
            if (v.length > 1 && L.type === E.IIU.PLAYING && !(0, a.Z)(L) && null != y)
                Z(
                    (0, i.jsx)(
                        g.Z.GameSection,
                        {
                            icon: y.getIconURL(_.Z),
                            name: y.name,
                            partySize: {
                                knownSize: P.length,
                                unknownSize: 0,
                                totalSize: P.length
                            },
                            members: P
                        },
                        'game-'.concat(null !== (n = L.session_id) && void 0 !== n ? n : t, '-').concat(null !== (r = L.application_id) && void 0 !== r ? r : t)
                    )
                );
            else if ((0, s.Z)(L)) {
                let e = new Set(P.map((e) => e.id)),
                    t = null === (l = N.find((e) => null != e)) || void 0 === l ? void 0 : l.channel;
                null != t &&
                    Z(
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
                Z(
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
                let e = N.length > 0 && N[0].members.length > 1,
                    n = P.length > 1;
                Z(
                    (0, i.jsx)(
                        g.Z.TwitchSection,
                        {
                            guildId: null == b ? void 0 : b.id,
                            activity: L,
                            user: e || n ? O : null,
                            getAssetImage: m.getAssetImage
                        },
                        'streaming-'.concat(null !== (f = L.session_id) && void 0 !== f ? f : t)
                    )
                );
            } else
                (0, o.Z)(L)
                    ? Z(
                          (0, i.jsx)(
                              g.Z.SpotifySection,
                              {
                                  activity: L,
                                  isSolo: 1 === S.length,
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
                      ? Z(
                            (0, i.jsx)(
                                g.Z.RichPresenceSection,
                                {
                                    activity: L,
                                    getAssetImage: m.getAssetImage
                                },
                                'rich-presence-'.concat(null !== (T = L.session_id) && void 0 !== T ? T : t, '-').concat(O.id)
                            )
                        )
                      : (0, c.Z)(L) && Z((0, i.jsx)(g.Z.XboxSection, { title: y.name }, 'xbox-'.concat(null !== (A = L.session_id) && void 0 !== A ? A : t)));
            null != I && null != y && (0, u._D)(L, I) && Z((0, i.jsx)(h.Z, { quest: I }, 'quest-'.concat(I.id, '-').concat(null !== (x = L.session_id) && void 0 !== x ? x : t)));
        }),
        A.length > 0 ? (0, i.jsx)(g.Z.Body, { children: A }) : null
    );
}
