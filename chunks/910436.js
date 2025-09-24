n.d(t, { Z: () => y }), n(539854), n(388685);
var r = n(951288);
n(647438);
var i = n(287734),
    l = n(872810),
    a = n(122810),
    o = n(841784),
    s = n(503438),
    c = n(802856),
    u = n(420660),
    d = n(509212),
    p = n(113434),
    f = n(497505),
    h = n(23404),
    g = n(81063),
    m = n(761282),
    b = n(358924),
    _ = n(868854),
    O = n(817915),
    E = n(981631);
function y(e) {
    let { party: t, onChannelContextMenu: n, quest: y } = e,
        v = (0, _.L)(),
        { voiceChannels: I, currentActivities: S, partiedMembers: C, applicationStreams: T, guildContext: N } = t,
        P = (0, p.z1)(y),
        j = [],
        x = (e) => {
            let { length: t } = j;
            if (0 === t) return void j.push(e);
            j.push(e);
        };
    for (let { activity: e } of (I.length > 0 &&
        I.forEach((e) => {
            let { members: t, channel: i, guild: l } = e;
            x(
                (0, r.jsx)(
                    b.Z.VoiceSection,
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
                        b.Z.ApplicationStreamingSection,
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
        S.forEach((e, t) => {
            var n, i, l, p, m, _, v, T, j;
            let { activity: A, game: Z, playingMembers: w, activityUser: L } = e;
            if (null == A || null == A.type) return null;
            if (S.length > 1 && A.type === E.IIU.PLAYING && !(0, a.Z)(A) && null != Z)
                x(
                    (0, r.jsx)(
                        b.Z.GameSection,
                        {
                            icon: Z.getIconURL(O.Z),
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
            else if ((0, o.Z)(A)) {
                let e = new Set(w.map((e) => e.id)),
                    t = null == (l = I.find((e) => null != e)) ? void 0 : l.channel;
                null != t &&
                    x(
                        (0, r.jsx)(
                            b.Z.EmbeddedActivitySection,
                            {
                                activity: A,
                                participants: e,
                                channel: t,
                                guildId: t.guild_id,
                            },
                            "embedded-activity-".concat(A.application_id),
                        ),
                    );
            } else if ((null != A.assets || (0, a.Z)(A)) && A.type === E.IIU.PLAYING)
                x(
                    (0, r.jsx)(
                        b.Z.RichPresenceSection,
                        {
                            activity: A,
                            getAssetImage: g.xF,
                            user: L,
                        },
                        "rich-presence-".concat(null != (p = A.session_id) ? p : t, "-").concat(L.id),
                    ),
                );
            else if ((0, u.Z)(A)) {
                let e = I.length > 0 && I[0].members.length > 1,
                    n = w.length > 1;
                x(
                    (0, r.jsx)(
                        b.Z.TwitchSection,
                        {
                            guildId: null == N ? void 0 : N.id,
                            activity: A,
                            user: e || n ? L : null,
                            getAssetImage: g.xF,
                        },
                        "streaming-".concat(null != (m = A.session_id) ? m : t),
                    ),
                );
            } else
                (0, s.Z)(A)
                    ? x(
                          (0, r.jsx)(
                              b.Z.SpotifySection,
                              {
                                  activity: A,
                                  isSolo: 1 === C.length,
                                  partySize: {
                                      knownSize: w.length,
                                      unknownSize: 0,
                                      totalSize: w.length,
                                  },
                                  getAssetImage: g.xF,
                                  members: w,
                              },
                              "spotify-".concat(null != (_ = A.session_id) ? _ : t, "-").concat(L.id),
                          ),
                      )
                    : (null != A.assets || (0, a.Z)(A)) && A.type === E.IIU.LISTENING
                      ? x(
                            (0, r.jsx)(
                                b.Z.RichPresenceSection,
                                {
                                    activity: A,
                                    getAssetImage: g.xF,
                                    user: L,
                                },
                                "rich-presence-".concat(null != (v = A.session_id) ? v : t, "-").concat(L.id),
                            ),
                        )
                      : (0, c.Z)(A) &&
                        x(
                            (0, r.jsx)(
                                b.Z.XboxSection,
                                { title: Z.name },
                                "xbox-".concat(null != (T = A.session_id) ? T : t),
                            ),
                        );
            P &&
                null != y &&
                null != Z &&
                (0, d._D)(A, y) &&
                (null == y.userStatus || !(0, d.zE)(y.userStatus, f.jn.ACTIVITY_PANEL)) &&
                x((0, r.jsx)(h.Z, { quest: y }, "quest-".concat(y.id, "-").concat(null != (j = A.session_id) ? j : t)));
        }),
        j.length > 0 ? (0, r.jsx)(b.Z.Body, { children: j }) : null
    );
}
