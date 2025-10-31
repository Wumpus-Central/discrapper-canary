n.d(t, { Z: () => C }), n(804061), n(704826), n(35282);
var r = n(951288),
    i = n(647438),
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
function T(e) {
    if (e === a._.WEEK) return I.t.SjOZfm;
}
let S = (e, t, n, r) => {
        let i = T(r),
            a = f.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.artist.name;
        return I.intl
            .formatToMarkdownString(i, {
                artist: o,
                userName: a,
            })
            .replaceAll("*", "");
    },
    A = (e, t) =>
        I.intl.formatToPlainString(I.t.Osmpr9, {
            username: t.username,
            artist: e.extra.artist.name,
        }),
    C = (e) => {
        let { channel: t, entry: n, onReaction: a, onVoiceChannelPreview: f } = e,
            { parent_title: T, provider: C, image_url: N } = n.extra.media,
            R = n.extra.artist.name,
            P = (0, s.e7)([c.default], () => c.default.getUser(n.author_id)),
            { primaryColor: w, secondaryColor: D } = (0, m.Z)(N),
            x = (0, _.Nq)(n),
            L = i.useCallback(() => {
                if (null == t || null == P || !(0, d.Hi)(x, g.y9)) return;
                let e = S(n, t, P, x);
                return (0, p.CR)({
                    user: P,
                    channel: t,
                    mediaImageSrc: N,
                    artist: R,
                    description: e,
                    colors: [w, D],
                    badges: (0, p.UU)(n),
                });
            }, [N, R, t, n, w, x, D, P]),
            M = (0, h.Z)(O.ABu.SPOTIFY);
        if (null == P || !(0, d.Hi)(x, g.y9)) return null;
        let j = () => {
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
                    onClickTitle: j,
                    onClickSubtitle: k,
                    onClickThumbnail: j,
                    channel: t,
                    entry: n,
                    headerIcons:
                        C === o.p.SPOTIFY
                            ? (0, r.jsx)(y.Z, {
                                  onClick: M,
                                  Icon: u.Z,
                                  "aria-label": I.intl.string(I.t["0ZB/XE"]),
                              })
                            : null,
                    userDescription: I.t.CcVI1T,
                    title: T,
                    subtitle: R,
                    badges: (0, r.jsx)(E.Gk, {
                        location: E.Gt.POPOUT,
                        children: g.Ho.map((e, t) => (0, r.jsx)(e, { entry: n }, t)),
                    }),
                }),
                (0, r.jsx)(b.St, {
                    children: (0, r.jsx)(b.WT, {
                        onReaction: a,
                        onVoiceChannelPreview: f,
                        user: P,
                        channel: t,
                        generateReactionImage: L,
                        reactionImageAltText: A(n, P),
                        entry: n,
                    }),
                }),
            ],
        });
    };
