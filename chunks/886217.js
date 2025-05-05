n.d(t, { Z: () => N }), n(804061), n(704826), n(35282);
var r = n(255367),
    i = n(73800),
    a = n(317261),
    o = n(423875),
    s = n(442837),
    l = n(18323),
    c = n(594174),
    u = n(908841),
    d = n(823379),
    f = n(5192),
    _ = n(561308),
    p = n(319604),
    h = n(31074),
    m = n(206295),
    g = n(278399),
    E = n(297781),
    b = n(591853),
    y = n(410441),
    O = n(981631),
    v = n(616922),
    I = n(388032);
function S(e) {
    if (e === a._.WEEK) return I.t.SjOZfn;
}
let T = (e, t, n, r) => {
        let i = S(r),
            a = f.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.artist.name;
        return I.intl
            .formatToMarkdownString(i, {
                artist: o,
                userName: a
            })
            .replaceAll('*', '');
    },
    A = (e, t) =>
        I.intl.formatToPlainString(I.t.Osmpr6, {
            username: t.username,
            artist: e.extra.artist.name
        }),
    N = (e) => {
        let { channel: t, entry: n, onReaction: a, onVoiceChannelPreview: f } = e,
            { parent_title: S, provider: N, image_url: C } = n.extra.media,
            R = n.extra.artist.name,
            P = (0, s.e7)([c.default], () => c.default.getUser(n.author_id)),
            { primaryColor: w, secondaryColor: D } = (0, m.Z)(C),
            L = (0, _.Nq)(n),
            x = i.useCallback(() => {
                if (null == t || null == P || !(0, d.Hi)(L, g.y9)) return;
                let e = T(n, t, P, L);
                return (0, p.CR)({
                    user: P,
                    channel: t,
                    mediaImageSrc: C,
                    artist: R,
                    description: e,
                    colors: [w, D],
                    badges: (0, p.UU)(n)
                });
            }, [C, R, t, n, w, L, D, P]),
            M = (0, h.Z)(O.ABu.SPOTIFY);
        if (null == P || !(0, d.Hi)(L, g.y9)) return null;
        let k = () => {
                let e = v.Hw.ALBUM,
                    t = l.Z.isProtocolRegistered() ? v.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : v.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
                window.open(t);
            },
            j = () => {
                let e = v.Hw.ARTIST,
                    t = l.Z.isProtocolRegistered() ? v.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : v.C7.WEB_OPEN(e, n.extra.artist.external_id);
                window.open(t);
            };
        return (0, r.jsxs)(b.yR, {
            children: [
                (0, r.jsx)(b.wG, {
                    onClickTitle: k,
                    onClickSubtitle: j,
                    onClickThumbnail: k,
                    channel: t,
                    entry: n,
                    headerIcons:
                        N === o.p.SPOTIFY
                            ? (0, r.jsx)(y.Z, {
                                  onClick: M,
                                  Icon: u.Z,
                                  'aria-label': I.intl.string(I.t['0ZB/XF'])
                              })
                            : null,
                    userDescription: I.t.CcVI1d,
                    title: S,
                    subtitle: R,
                    badges: (0, r.jsx)(E.Gk, {
                        location: E.Gt.POPOUT,
                        children: g.Ho.map((e, t) => (0, r.jsx)(e, { entry: n }, t))
                    })
                }),
                (0, r.jsx)(b.St, {
                    children: (0, r.jsx)(b.WT, {
                        onReaction: a,
                        onVoiceChannelPreview: f,
                        user: P,
                        channel: t,
                        generateReactionImage: x,
                        reactionImageAltText: A(n, P),
                        entry: n
                    })
                })
            ]
        });
    };
