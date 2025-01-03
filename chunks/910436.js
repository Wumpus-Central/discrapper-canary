n.d(t, {
    Z: function () {
        return C;
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
    m = n(769654),
    p = n(81063),
    g = n(761282),
    f = n(358924),
    _ = n(868854),
    E = n(817915),
    I = n(981631);
function C(e) {
    let { party: t, onChannelContextMenu: n, quest: C } = e,
        N = (0, _.L)(),
        { voiceChannels: v, currentActivities: S, partiedMembers: T, applicationStreams: b, guildContext: A } = t,
        Z = [],
        x = (e) => {
            var t, n;
            let { length: r } = Z;
            if (0 === r) {
                Z.push(e);
                return;
            }
            let l = Z[r - 1],
                a = ''.concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ''),
                s = ''.concat(null !== (n = null == l ? void 0 : l.key) && void 0 !== n ? n : '').startsWith('game') && a.startsWith('rich-presence');
            Z.push((0, i.jsx)(f.Z.Separator, { inset: s }, 'sep-'.concat(a))), Z.push(e);
        };
    for (let { activity: e } of (v.length > 0 &&
        v.forEach((e) => {
            let { members: t, channel: r, guild: l } = e;
            x(
                (0, i.jsx)(
                    f.Z.VoiceSection,
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
                        onChannelContextMenu: n,
                        onGuildClick: () => {
                            (0, m.X)(l.id);
                        }
                    },
                    'voice-'.concat(r.id)
                )
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = g.ct(e);
            if (null != t) {
                x(t);
                break;
            }
        }
    return (
        b.length > 0 &&
            N &&
            b.forEach((e) => {
                let { stream: t, streamUser: n, activity: a } = e;
                x(
                    (0, i.jsx)(
                        f.Z.ApplicationStreamingSection,
                        {
                            guildId: null == A ? void 0 : A.id,
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
        S.forEach((e, t) => {
            var n, r, l, m, g, _, N, b, Z;
            let { activity: L, game: P, playingMembers: O, activityUser: y } = e;
            if (null == L || null == L.type) return null;
            if (S.length > 1 && L.type === I.IIU.PLAYING && !(0, a.Z)(L) && null != P)
                x(
                    (0, i.jsx)(
                        f.Z.GameSection,
                        {
                            icon: P.getIconURL(E.Z),
                            name: P.name,
                            partySize: {
                                knownSize: O.length,
                                unknownSize: 0,
                                totalSize: O.length
                            },
                            members: O
                        },
                        'game-'.concat(null !== (n = L.session_id) && void 0 !== n ? n : t, '-').concat(null !== (r = L.application_id) && void 0 !== r ? r : t)
                    )
                );
            else if ((0, s.Z)(L)) {
                let e = new Set(O.map((e) => e.id)),
                    t = null === (l = v.find((e) => null != e)) || void 0 === l ? void 0 : l.channel;
                null != t &&
                    x(
                        (0, i.jsx)(
                            f.Z.EmbeddedActivitySection,
                            {
                                activity: L,
                                participants: e,
                                channel: t,
                                guildId: t.guild_id
                            },
                            'embedded-activity-'.concat(L.application_id)
                        )
                    );
            } else if ((null != L.assets || (0, a.Z)(L)) && L.type === I.IIU.PLAYING)
                x(
                    (0, i.jsx)(
                        f.Z.RichPresenceSection,
                        {
                            activity: L,
                            getAssetImage: p.getAssetImage
                        },
                        'rich-presence-'.concat(null !== (m = L.session_id) && void 0 !== m ? m : t, '-').concat(y.id)
                    )
                );
            else if ((0, d.Z)(L)) {
                let e = v.length > 0 && v[0].members.length > 1,
                    n = O.length > 1;
                x(
                    (0, i.jsx)(
                        f.Z.TwitchSection,
                        {
                            guildId: null == A ? void 0 : A.id,
                            activity: L,
                            user: e || n ? y : null,
                            getAssetImage: p.getAssetImage
                        },
                        'streaming-'.concat(null !== (g = L.session_id) && void 0 !== g ? g : t)
                    )
                );
            } else
                (0, o.Z)(L)
                    ? x(
                          (0, i.jsx)(
                              f.Z.SpotifySection,
                              {
                                  activity: L,
                                  isSolo: 1 === T.length,
                                  partySize: {
                                      knownSize: O.length,
                                      unknownSize: 0,
                                      totalSize: O.length
                                  },
                                  getAssetImage: p.getAssetImage,
                                  members: O
                              },
                              'spotify-'.concat(null !== (_ = L.session_id) && void 0 !== _ ? _ : t, '-').concat(y.id)
                          )
                      )
                    : (null != L.assets || (0, a.Z)(L)) && L.type === I.IIU.LISTENING
                      ? x(
                            (0, i.jsx)(
                                f.Z.RichPresenceSection,
                                {
                                    activity: L,
                                    getAssetImage: p.getAssetImage
                                },
                                'rich-presence-'.concat(null !== (N = L.session_id) && void 0 !== N ? N : t, '-').concat(y.id)
                            )
                        )
                      : (0, c.Z)(L) && x((0, i.jsx)(f.Z.XboxSection, { title: P.name }, 'xbox-'.concat(null !== (b = L.session_id) && void 0 !== b ? b : t)));
            null != C && null != P && (0, u._D)(L, C) && x((0, i.jsx)(h.Z, { quest: C }, 'quest-'.concat(C.id, '-').concat(null !== (Z = L.session_id) && void 0 !== Z ? Z : t)));
        }),
        Z.length > 0 ? (0, i.jsx)(f.Z.Body, { children: Z }) : null
    );
}
