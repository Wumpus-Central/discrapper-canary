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
    d = n(49436),
    p = n(968843),
    f = n(862657),
    h = n(759479),
    g = n(364833),
    m = n(81063),
    _ = n(761282),
    b = n(358924),
    E = n(868854),
    O = n(817915),
    v = n(981631);
function y(e) {
    let { party: t, onChannelContextMenu: n, quest: y } = e,
        I = (0, E.L)(),
        { voiceChannels: C, currentActivities: S, partiedMembers: T, applicationStreams: N, guildContext: j } = t,
        P = (0, p.z1)(y),
        x = [],
        A = (e) => {
            let { length: t } = x;
            if (0 === t) return void x.push(e);
            x.push(e);
        };
    for (let { activity: e } of (C.length > 0 &&
        C.forEach((e) => {
            let { members: t, channel: i, guild: l } = e;
            A(
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
            let t = _.ct(e);
            if (null != t) {
                A(t);
                break;
            }
        }
    return (
        N.length > 0 &&
            I &&
            N.forEach((e) => {
                let { stream: t, streamUser: n, activity: a } = e;
                A(
                    (0, r.jsx)(
                        b.Z.ApplicationStreamingSection,
                        {
                            guildId: null == j ? void 0 : j.id,
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
            var n, i, l, p, _, E, I, N, x;
            let { activity: Z, game: w, playingMembers: L, activityUser: R } = e;
            if (null == Z || null == Z.type) return null;
            if (Z.type === v.IIU.PLAYING)
                if (S.length > 1 && !(0, a.Z)(Z) && null != w)
                    A(
                        (0, r.jsx)(
                            b.Z.GameSection,
                            {
                                icon: w.getIconURL(O.Z),
                                name: w.name,
                                partySize: {
                                    knownSize: L.length,
                                    unknownSize: 0,
                                    totalSize: L.length,
                                },
                                members: L,
                                activity: Z,
                            },
                            "game-"
                                .concat(null != (n = Z.session_id) ? n : t, "-")
                                .concat(null != (i = Z.application_id) ? i : t),
                        ),
                    );
                else if ((0, s.Z)(Z)) {
                    let e = new Set(L.map((e) => e.id)),
                        t = null == (l = C.find((e) => null != e)) ? void 0 : l.channel;
                    null != t &&
                        A(
                            (0, r.jsx)(
                                b.Z.EmbeddedActivitySection,
                                {
                                    activity: Z,
                                    participants: e,
                                    channel: t,
                                    guildId: t.guild_id,
                                },
                                "embedded-activity-".concat(Z.application_id),
                            ),
                        );
                } else
                    (0, c.Z)(Z)
                        ? A(
                              (0, r.jsx)(
                                  b.Z.XboxSection,
                                  { title: w.name },
                                  "xbox-".concat(null != (p = Z.session_id) ? p : t),
                              ),
                          )
                        : A(
                              (0, r.jsx)(
                                  b.Z.RichPresenceSection,
                                  {
                                      activity: Z,
                                      getAssetImage: m.xF,
                                      user: R,
                                  },
                                  "rich-presence-".concat(null != (_ = Z.session_id) ? _ : t, "-").concat(R.id),
                              ),
                          );
            else if ((0, u.Z)(Z)) {
                let e = C.length > 0 && C[0].members.length > 1,
                    n = L.length > 1;
                A(
                    (0, r.jsx)(
                        b.Z.TwitchSection,
                        {
                            guildId: null == j ? void 0 : j.id,
                            activity: Z,
                            user: e || n ? R : null,
                            getAssetImage: m.xF,
                        },
                        "streaming-".concat(null != (E = Z.session_id) ? E : t),
                    ),
                );
            } else
                Z.type === v.IIU.LISTENING &&
                    ((0, o.Z)(Z)
                        ? A(
                              (0, r.jsx)(
                                  b.Z.SpotifySection,
                                  {
                                      activity: Z,
                                      isSolo: 1 === T.length,
                                      partySize: {
                                          knownSize: L.length,
                                          unknownSize: 0,
                                          totalSize: L.length,
                                      },
                                      getAssetImage: m.xF,
                                      members: L,
                                  },
                                  "spotify-".concat(null != (I = Z.session_id) ? I : t, "-").concat(R.id),
                              ),
                          )
                        : (null != Z.assets || (0, a.Z)(Z)) &&
                          A(
                              (0, r.jsx)(
                                  b.Z.RichPresenceSection,
                                  {
                                      activity: Z,
                                      getAssetImage: m.xF,
                                      user: R,
                                  },
                                  "rich-presence-".concat(null != (N = Z.session_id) ? N : t, "-").concat(R.id),
                              ),
                          ));
            P &&
                null != y &&
                null != w &&
                (0, h._D)(Z, y) &&
                (null == y.userStatus || !(0, f.zE)(y.userStatus, d.jn.ACTIVITY_PANEL)) &&
                A((0, r.jsx)(g.Z, { quest: y }, "quest-".concat(y.id, "-").concat(null != (x = Z.session_id) ? x : t)));
        }),
        x.length > 0 ? (0, r.jsx)(b.Z.Body, { children: x }) : null
    );
}
