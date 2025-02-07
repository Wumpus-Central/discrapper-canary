n.d(t, { Z: () => T }), n(627494), n(757143);
var l = n(200651),
    a = n(192379),
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
    j = n(591853),
    I = n(410441),
    f = n(981631),
    P = n(616922),
    y = n(388032);
let N = (e, t, n, l) => {
        let a = (function (e) {
                if (e === i._.WEEK) return y.t.SjOZfn;
            })(l),
            r = m.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.artist.name;
        return y.intl
            .formatToMarkdownString(a, {
                artist: o,
                userName: r
            })
            .replaceAll('*', '');
    },
    Z = (e, t) =>
        y.intl.formatToPlainString(y.t.Osmpr6, {
            username: t.username,
            artist: e.extra.artist.name
        }),
    T = (e) => {
        let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: m } = e,
            { parent_title: T, provider: E, image_url: A } = n.extra.media,
            _ = n.extra.artist.name,
            S = (0, o.e7)([c.default], () => c.default.getUser(n.author_id)),
            { primaryColor: R, secondaryColor: k } = (0, g.Z)(A),
            w = (0, x.Nq)(n),
            O = a.useCallback(() => {
                if (null == t || null == S || !(0, u.Hi)(w, v.y9)) return;
                let e = N(n, t, S, w);
                return (0, h.CR)({
                    user: S,
                    channel: t,
                    mediaImageSrc: A,
                    artist: _,
                    description: e,
                    colors: [R, k],
                    badges: (0, h.UU)(n)
                });
            }, [A, _, t, n, R, w, k, S]),
            b = (0, p.Z)(f.ABu.SPOTIFY);
        if (null == S || !(0, u.Hi)(w, v.y9)) return null;
        let M = () => {
            let e = P.Hw.ALBUM,
                t = s.Z.isProtocolRegistered() ? P.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : P.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
            window.open(t);
        };
        return (0, l.jsxs)(j.yR, {
            children: [
                (0, l.jsx)(j.wG, {
                    onClickTitle: M,
                    onClickSubtitle: () => {
                        let e = P.Hw.ARTIST,
                            t = s.Z.isProtocolRegistered() ? P.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : P.C7.WEB_OPEN(e, n.extra.artist.external_id);
                        window.open(t);
                    },
                    onClickThumbnail: M,
                    channel: t,
                    entry: n,
                    headerIcons:
                        E === r.p.SPOTIFY
                            ? (0, l.jsx)(I.Z, {
                                  onClick: b,
                                  Icon: d.Z,
                                  'aria-label': y.intl.string(y.t['0ZB/XF'])
                              })
                            : null,
                    userDescription: y.t.CcVI1d,
                    title: T,
                    subtitle: _,
                    badges: (0, l.jsx)(C.Gk, {
                        location: C.Gt.POPOUT,
                        children: v.Ho.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                    })
                }),
                (0, l.jsx)(j.St, {
                    children: (0, l.jsx)(j.WT, {
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
