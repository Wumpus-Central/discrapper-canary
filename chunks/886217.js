n.d(t, { Z: () => I }), n(627494), n(757143), n(301563);
var r = n(200651),
    a = n(192379),
    l = n(317261),
    i = n(423875),
    o = n(442837),
    s = n(18323),
    c = n(594174),
    u = n(908841),
    d = n(823379),
    m = n(5192),
    p = n(561308),
    h = n(319604),
    x = n(31074),
    g = n(206295),
    v = n(278399),
    f = n(297781),
    y = n(591853),
    j = n(410441),
    P = n(981631),
    O = n(616922),
    b = n(388032);
let C = (e, t, n, r) => {
        let a = (function (e) {
                if (e === l._.WEEK) return b.t.SjOZfn;
            })(r),
            i = m.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.artist.name;
        return b.NW.formatToMarkdownString(a, {
            artist: o,
            userName: i
        }).replaceAll('*', '');
    },
    N = (e, t) =>
        b.NW.formatToPlainString(b.t.Osmpr6, {
            username: t.username,
            artist: e.extra.artist.name
        }),
    I = (e) => {
        let { channel: t, entry: n, onReaction: l, onVoiceChannelPreview: m } = e,
            { parent_title: I, provider: w, image_url: T } = n.extra.media,
            Z = n.extra.artist.name,
            S = (0, o.e7)([c.default], () => c.default.getUser(n.author_id)),
            { primaryColor: E, secondaryColor: A } = (0, g.Z)(T),
            _ = (0, p.Nq)(n),
            k = a.useCallback(() => {
                if (null == t || null == S || !(0, d.Hi)(_, v.y9)) return;
                let e = C(n, t, S, _);
                return (0, h.CR)({
                    user: S,
                    channel: t,
                    mediaImageSrc: T,
                    artist: Z,
                    description: e,
                    colors: [E, A],
                    badges: (0, h.UU)(n)
                });
            }, [T, Z, t, n, E, _, A, S]),
            R = (0, x.Z)(P.ABu.SPOTIFY);
        if (null == S || !(0, d.Hi)(_, v.y9)) return null;
        let M = () => {
            let e = O.Hw.ALBUM,
                t = s.Z.isProtocolRegistered() ? O.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : O.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
            window.open(t);
        };
        return (0, r.jsxs)(y.yR, {
            children: [
                (0, r.jsx)(y.wG, {
                    onClickTitle: M,
                    onClickSubtitle: () => {
                        let e = O.Hw.ARTIST,
                            t = s.Z.isProtocolRegistered() ? O.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : O.C7.WEB_OPEN(e, n.extra.artist.external_id);
                        window.open(t);
                    },
                    onClickThumbnail: M,
                    channel: t,
                    entry: n,
                    headerIcons:
                        w === i.p.SPOTIFY
                            ? (0, r.jsx)(j.Z, {
                                  onClick: R,
                                  Icon: u.Z,
                                  'aria-label': b.NW.string(b.t['0ZB/XF'])
                              })
                            : null,
                    userDescription: b.t.CcVI1d,
                    title: I,
                    subtitle: Z,
                    badges: (0, r.jsx)(f.Gk, {
                        location: f.Gt.POPOUT,
                        children: v.Ho.map((e, t) => (0, r.jsx)(e, { entry: n }, t))
                    })
                }),
                (0, r.jsx)(y.St, {
                    children: (0, r.jsx)(y.WT, {
                        onReaction: l,
                        onVoiceChannelPreview: m,
                        user: S,
                        channel: t,
                        generateReactionImage: k,
                        reactionImageAltText: N(n, S),
                        entry: n
                    })
                })
            ]
        });
    };
