n(627494), n(757143);
var l = n(200651),
    a = n(192379),
    i = n(317261),
    r = n(423875),
    o = n(442837),
    s = n(18323),
    u = n(594174),
    c = n(908841),
    d = n(823379),
    m = n(5192),
    x = n(561308),
    h = n(319604),
    p = n(31074),
    C = n(206295),
    v = n(278399),
    g = n(297781),
    f = n(591853),
    I = n(410441),
    j = n(981631),
    Z = n(616922),
    P = n(388032);
let L = (e, t, n, l) => {
        let a = (function (e) {
                if (e === i._.WEEK) return P.t.SjOZfn;
            })(l),
            r = m.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.artist.name;
        return P.intl
            .formatToMarkdownString(a, {
                artist: o,
                userName: r
            })
            .replaceAll('*', '');
    },
    N = (e, t) =>
        P.intl.formatToPlainString(P.t.Osmpr6, {
            username: t.username,
            artist: e.extra.artist.name
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: m } = e,
        { parent_title: T, provider: y, image_url: _ } = n.extra.media,
        A = n.extra.artist.name,
        E = (0, o.e7)([u.default], () => u.default.getUser(n.author_id)),
        { primaryColor: S, secondaryColor: R } = (0, C.Z)(_),
        M = (0, x.Nq)(n),
        k = a.useCallback(() => {
            if (null == t || null == E || !(0, d.Hi)(M, v.y9)) return;
            let e = L(n, t, E, M);
            return (0, h.CR)({
                user: E,
                channel: t,
                mediaImageSrc: _,
                artist: A,
                description: e,
                colors: [S, R],
                badges: (0, h.UU)(n)
            });
        }, [_, A, t, n, S, M, R, E]),
        w = (0, p.Z)(j.ABu.SPOTIFY);
    if (null == E || !(0, d.Hi)(M, v.y9)) return null;
    let O = () => {
        let e = Z.Hw.ALBUM,
            t = s.Z.isProtocolRegistered() ? Z.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : Z.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    };
    return (0, l.jsxs)(f.yR, {
        children: [
            (0, l.jsx)(f.wG, {
                onClickTitle: O,
                onClickSubtitle: () => {
                    let e = Z.Hw.ARTIST,
                        t = s.Z.isProtocolRegistered() ? Z.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : Z.C7.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: O,
                channel: t,
                entry: n,
                headerIcons:
                    y === r.p.SPOTIFY
                        ? (0, l.jsx)(I.Z, {
                              onClick: w,
                              Icon: c.Z,
                              'aria-label': P.intl.string(P.t['0ZB/XF'])
                          })
                        : null,
                userDescription: P.t.CcVI1d,
                title: T,
                subtitle: A,
                badges: (0, l.jsx)(g.Gk, {
                    location: g.Gt.POPOUT,
                    children: v.Ho.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                })
            }),
            (0, l.jsx)(f.St, {
                children: (0, l.jsx)(f.WT, {
                    onReaction: i,
                    onVoiceChannelPreview: m,
                    user: E,
                    channel: t,
                    generateReactionImage: k,
                    reactionImageAltText: N(n, E),
                    entry: n
                })
            })
        ]
    });
};
