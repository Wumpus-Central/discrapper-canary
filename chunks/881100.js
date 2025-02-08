n.d(t, { N: () => V });
var i = n(399606),
    s = n(780384),
    r = n(230711),
    l = n(410030),
    a = n(594174),
    o = n(424218),
    c = n(74538),
    d = n(474936),
    u = n(981631),
    m = n(526761),
    g = n(388032),
    h = n(323780),
    x = n(101732),
    _ = n(450598),
    p = n(633030),
    E = n(97942),
    C = n(269987),
    f = n(548629),
    T = n(507084),
    N = n(680313),
    I = n(926433),
    S = n(302036),
    b = n(994554),
    v = n(1549),
    j = n(13327),
    A = n(59137),
    O = n(405991),
    R = n(24615),
    P = n(193943),
    D = n(334347),
    y = n(943734),
    Z = n(603076),
    k = n(472656),
    L = n(912429),
    B = n(772969),
    M = n(926262);
let w = (e, t, n) => ((0, s.wj)(e) ? t : n),
    V = (e) => {
        let { styles: t } = e,
            n = (0, l.ZP)(),
            s = (0, i.e7)([a.default], () => {
                let e = a.default.getCurrentUser();
                return c.ZP.canUsePremiumProfileCustomization(e);
            }),
            V = (0, o.BU)(d.Uq / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: g.intl.string(g.t.SS87ra),
                description: g.intl.string(g.t.oD6CRk),
                imageSource: _,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: g.intl.string(g.t['5cYMu7']),
                description: g.intl.string(g.t.vxk9vb),
                imageSource: w(n, h, x),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: g.intl.string(g.t['/xvEMz']),
                description: g.intl.string(g.t.HKWdjo),
                className: t.clientThemesCard,
                imageSource: R,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: g.intl.string(g.t.OuItFh),
                description: g.intl.string(g.t.mPyrEx),
                imageSource: P,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: g.intl.string(g.t['R2IV/f']),
                description: g.intl.string(g.t.R5Xag4),
                imageSource: D,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: g.intl.string(g.t.lKDhhI),
                description: (e) => {
                    let t = () => {
                        r.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: m.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return s ? g.intl.format(g.t.aj1pfX, { onCheckItOutClick: t }) : g.intl.format(g.t.d2oYS0, { onTryItOutClick: t });
                },
                imageSource: E,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: g.intl.string(g.t.BUSciY),
                description: g.intl.string(g.t.vN6Xpa),
                imageSource: w(n, y, Z),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: g.intl.string(g.t.Bv8Pfn),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: w(n, p, k),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: g.intl.string(g.t.Bv8Pfn),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: w(n, T, N),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: g.intl.string(g.t.ZvulDg),
                description: g.intl.string(g.t['8GwCPT']),
                imageSource: w(n, C, f),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: g.intl.string(g.t['lGcW+f']),
                description: g.intl.string(g.t['/fDyOz']),
                imageSource: w(n, I, S),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: g.intl.string(g.t['1c+xwc']),
                description: g.intl.string(g.t.hJG8ZG),
                imageSource: w(n, b, L),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: g.intl.string(g.t.tzdIwM),
                description: g.intl.string(g.t.hJG8ZG),
                imageSource: w(n, b, L),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: g.intl.string(g.t.tzdIwM),
                description: g.intl.string(g.t.FXlU29),
                imageSource: w(n, b, L),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: g.intl.string(g.t.RSXQYG),
                description: g.intl.string(g.t.ymCPxs),
                imageSource: B,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: g.intl.string(g.t.uZt5q6),
                description: g.intl.string(g.t.ZK3Zoa),
                imageSource: w(n, v, j),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: g.intl.formatToPlainString(g.t.jqhAdH, { premiumMaxSize: V }),
                description: g.intl.formatToPlainString(g.t['HI+cfn'], { premiumMaxSize: V }),
                imageSource: M,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: g.intl.string(g.t.NaGpTU),
                description: g.intl.string(g.t['A8O/Q0']),
                imageSource: w(n, A, O),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
