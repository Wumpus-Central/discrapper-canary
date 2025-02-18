n.d(t, { Z: () => T }), n(627494), n(757143);
var a = n(200651),
    l = n(192379),
    i = n(317261),
    r = n(423875),
    o = n(442837),
    s = n(18323),
    c = n(594174),
    d = n(908841),
    u = n(823379),
    m = n(5192),
    x = n(561308),
    h = n(319604),
    p = n(31074),
    g = n(206295),
    v = n(278399),
    C = n(297781),
    N = n(591853),
    j = n(410441),
    I = n(981631),
    f = n(616922),
    P = n(388032);
let y = (e, t, n, a) => {
        let l = (function (e) {
                if (e === i._.WEEK) return P.t.SjOZfn;
            })(a),
            r = m.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.artist.name;
        return P.NW.formatToMarkdownString(l, {
            artist: o,
            userName: r
        }).replaceAll('*', '');
    },
    Z = (e, t) =>
        P.NW.formatToPlainString(P.t.Osmpr6, {
            username: t.username,
            artist: e.extra.artist.name
        }),
    T = (e) => {
        let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: m } = e,
            { parent_title: T, provider: A, image_url: E } = n.extra.media,
            _ = n.extra.artist.name,
            S = (0, o.e7)([c.default], () => c.default.getUser(n.author_id)),
            { primaryColor: R, secondaryColor: k } = (0, g.Z)(E),
            w = (0, x.Nq)(n),
            O = l.useCallback(() => {
                if (null == t || null == S || !(0, u.Hi)(w, v.y9)) return;
                let e = y(n, t, S, w);
                return (0, h.CR)({
                    user: S,
                    channel: t,
                    mediaImageSrc: E,
                    artist: _,
                    description: e,
                    colors: [R, k],
                    badges: (0, h.UU)(n)
                });
            }, [E, _, t, n, R, w, k, S]),
            b = (0, p.Z)(I.ABu.SPOTIFY);
        if (null == S || !(0, u.Hi)(w, v.y9)) return null;
        let M = () => {
            let e = f.Hw.ALBUM,
                t = s.Z.isProtocolRegistered() ? f.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : f.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
            window.open(t);
        };
        return (0, a.jsxs)(N.yR, {
            children: [
                (0, a.jsx)(N.wG, {
                    onClickTitle: M,
                    onClickSubtitle: () => {
                        let e = f.Hw.ARTIST,
                            t = s.Z.isProtocolRegistered() ? f.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : f.C7.WEB_OPEN(e, n.extra.artist.external_id);
                        window.open(t);
                    },
                    onClickThumbnail: M,
                    channel: t,
                    entry: n,
                    headerIcons:
                        A === r.p.SPOTIFY
                            ? (0, a.jsx)(j.Z, {
                                  onClick: b,
                                  Icon: d.Z,
                                  'aria-label': P.NW.string(P.t['0ZB/XF'])
                              })
                            : null,
                    userDescription: P.t.CcVI1d,
                    title: T,
                    subtitle: _,
                    badges: (0, a.jsx)(C.Gk, {
                        location: C.Gt.POPOUT,
                        children: v.Ho.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
                    })
                }),
                (0, a.jsx)(N.St, {
                    children: (0, a.jsx)(N.WT, {
                        onReaction: i,
                        onVoiceChannelPreview: m,
                        user: S,
                        channel: t,
                        generateReactionImage: O,
                        reactionImageAltText: Z(n, S),
                        entry: n
                    })
                })
            ]
        });
    };
