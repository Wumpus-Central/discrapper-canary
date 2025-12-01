n.d(t, { Z: () => C }), n(804061), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(317261),
    o = n(423875),
    s = n(442837),
    l = n(18323),
    c = n(594174),
    u = n(908841),
    d = n(823379),
    f = n(5192),
    p = n(561308),
    _ = n(319604),
    m = n(31074),
    h = n(206295),
    g = n(278399),
    E = n(297781),
    b = n(591853),
    y = n(410441),
    O = n(981631),
    v = n(616922),
    S = n(388032);
function I(e) {
    if (e === a._.WEEK) return S.t.SjOZfm;
}
let T = (e, t, n, r) => {
        let i = I(r),
            a = f.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.artist.name;
        return S.intl
            .formatToMarkdownString(i, {
                artist: o,
                userName: a,
            })
            .replaceAll("*", "");
    },
    A = (e, t) =>
        S.intl.formatToPlainString(S.t.Osmpr9, {
            username: t.username,
            artist: e.extra.artist.name,
        }),
    C = (e) => {
        let { channel: t, entry: n, onReaction: a, onVoiceChannelPreview: f } = e,
            { parent_title: I, provider: C, image_url: N } = n.extra.media,
            P = n.extra.artist.name,
            R = (0, s.e7)([c.default], () => c.default.getUser(n.author_id)),
            { primaryColor: w, secondaryColor: D } = (0, h.Z)(N),
            x = (0, p.Nq)(n),
            L = i.useCallback(() => {
                if (null == t || null == R || !(0, d.Hi)(x, g.y9)) return;
                let e = T(n, t, R, x);
                return (0, _.CR)({
                    user: R,
                    channel: t,
                    mediaImageSrc: N,
                    artist: P,
                    description: e,
                    colors: [w, D],
                    badges: (0, _.UU)(n),
                });
            }, [N, P, t, n, w, x, D, R]),
            j = (0, m.Z)(O.ABu.SPOTIFY);
        if (null == R || !(0, d.Hi)(x, g.y9)) return null;
        let M = () => {
                let e = v.Hw.ALBUM,
                    t = l.Z.isProtocolRegistered()
                        ? v.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id)
                        : v.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
                window.open(t);
            },
            k = () => {
                let e = v.Hw.ARTIST,
                    t = l.Z.isProtocolRegistered()
                        ? v.C7.PLAYER_OPEN(e, n.extra.artist.external_id)
                        : v.C7.WEB_OPEN(e, n.extra.artist.external_id);
                window.open(t);
            };
        return (0, r.jsxs)(b.yR, {
            children: [
                (0, r.jsx)(b.wG, {
                    onClickTitle: M,
                    onClickSubtitle: k,
                    onClickThumbnail: M,
                    channel: t,
                    entry: n,
                    headerIcons:
                        C === o.p.SPOTIFY
                            ? (0, r.jsx)(y.Z, {
                                  onClick: j,
                                  Icon: u.Z,
                                  "aria-label": S.intl.string(S.t["0ZB/XE"]),
                              })
                            : null,
                    userDescription: S.t.CcVI1T,
                    title: I,
                    subtitle: P,
                    badges: (0, r.jsx)(E.Gk, {
                        location: E.Gt.POPOUT,
                        children: g.Ho.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
                    }),
                }),
                (0, r.jsx)(b.St, {
                    children: (0, r.jsx)(b.WT, {
                        onReaction: a,
                        onVoiceChannelPreview: f,
                        user: R,
                        channel: t,
                        generateReactionImage: L,
                        reactionImageAltText: A(n, R),
                        entry: n,
                    }),
                }),
            ],
        });
    };
