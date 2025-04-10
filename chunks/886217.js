n.d(t, { Z: () => A }), n(804061), n(704826), n(35282);
var r = n(200651),
    i = n(192379),
    o = n(317261),
    a = n(423875),
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
    v = n(981631),
    O = n(616922),
    I = n(388032);
function S(e) {
    if (e === o._.WEEK) return I.t.SjOZfn;
}
let T = (e, t, n, r) => {
        let i = S(r),
            o = f.ZP.getName(t.guild_id, t.id, n),
            a = e.extra.artist.name;
        return I.NW.formatToMarkdownString(i, {
            artist: a,
            userName: o
        }).replaceAll('*', '');
    },
    N = (e, t) =>
        I.NW.formatToPlainString(I.t.Osmpr6, {
            username: t.username,
            artist: e.extra.artist.name
        }),
    A = (e) => {
        let { channel: t, entry: n, onReaction: o, onVoiceChannelPreview: f } = e,
            { parent_title: S, provider: A, image_url: C } = n.extra.media,
            P = n.extra.artist.name,
            R = (0, s.e7)([c.default], () => c.default.getUser(n.author_id)),
            { primaryColor: w, secondaryColor: D } = (0, m.Z)(C),
            L = (0, _.Nq)(n),
            x = i.useCallback(() => {
                if (null == t || null == R || !(0, d.Hi)(L, g.y9)) return;
                let e = T(n, t, R, L);
                return (0, p.CR)({
                    user: R,
                    channel: t,
                    mediaImageSrc: C,
                    artist: P,
                    description: e,
                    colors: [w, D],
                    badges: (0, p.UU)(n)
                });
            }, [C, P, t, n, w, L, D, R]),
            M = (0, h.Z)(v.ABu.SPOTIFY);
        if (null == R || !(0, d.Hi)(L, g.y9)) return null;
        let k = () => {
                let e = O.Hw.ALBUM,
                    t = l.Z.isProtocolRegistered() ? O.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : O.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
                window.open(t);
            },
            j = () => {
                let e = O.Hw.ARTIST,
                    t = l.Z.isProtocolRegistered() ? O.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : O.C7.WEB_OPEN(e, n.extra.artist.external_id);
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
                        A === a.p.SPOTIFY
                            ? (0, r.jsx)(y.Z, {
                                  onClick: M,
                                  Icon: u.Z,
                                  'aria-label': I.NW.string(I.t['0ZB/XF'])
                              })
                            : null,
                    userDescription: I.t.CcVI1d,
                    title: S,
                    subtitle: P,
                    badges: (0, r.jsx)(E.Gk, {
                        location: E.Gt.POPOUT,
                        children: g.Ho.map((e, t) => (0, r.jsx)(e, { entry: n }, t))
                    })
                }),
                (0, r.jsx)(b.St, {
                    children: (0, r.jsx)(b.WT, {
                        onReaction: o,
                        onVoiceChannelPreview: f,
                        user: R,
                        channel: t,
                        generateReactionImage: x,
                        reactionImageAltText: N(n, R),
                        entry: n
                    })
                })
            ]
        });
    };
