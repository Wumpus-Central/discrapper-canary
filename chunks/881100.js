n.d(t, { N: () => U });
var i = n(399606),
    r = n(780384),
    a = n(230711),
    s = n(410030),
    l = n(594174),
    o = n(424218),
    c = n(74538),
    d = n(474936),
    u = n(981631),
    m = n(526761),
    g = n(388032),
    _ = n(323780),
    p = n(101732),
    f = n(450598),
    h = n(633030),
    x = n(97942),
    E = n(269987),
    C = n(548629),
    b = n(507084),
    v = n(680313),
    T = n(926433),
    N = n(302036),
    I = n(994554),
    R = n(1549),
    j = n(13327),
    S = n(59137),
    A = n(405991),
    P = n(24615),
    Z = n(193943),
    w = n(334347),
    M = n(943734),
    B = n(603076),
    y = n(472656),
    k = n(912429),
    O = n(772969),
    L = n(926262);
let D = (e, t, n) => ((0, r.wj)(e) ? t : n),
    U = (e) => {
        let { styles: t } = e,
            n = (0, s.ZP)(),
            r = (0, i.e7)([l.default], () => {
                let e = l.default.getCurrentUser();
                return c.ZP.canUsePremiumProfileCustomization(e);
            }),
            U = (0, o.BU)(d.Uq / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: g.intl.string(g.t.SS87ra),
                description: g.intl.string(g.t.oD6CRk),
                imageSource: f,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: g.intl.string(g.t['5cYMu7']),
                description: g.intl.string(g.t.vxk9vb),
                imageSource: D(n, _, p),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: g.intl.string(g.t['/xvEMz']),
                description: g.intl.string(g.t.HKWdjo),
                className: t.clientThemesCard,
                imageSource: P,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: g.intl.string(g.t.OuItFh),
                description: g.intl.string(g.t.mPyrEx),
                imageSource: Z,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: g.intl.string(g.t['R2IV/f']),
                description: g.intl.string(g.t.R5Xag4),
                imageSource: w,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: g.intl.string(g.t.lKDhhI),
                description: (e) => {
                    let t = () => {
                        a.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: m.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return r ? g.intl.format(g.t.aj1pfX, { onCheckItOutClick: t }) : g.intl.format(g.t.d2oYS0, { onTryItOutClick: t });
                },
                imageSource: x,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: g.intl.string(g.t.BUSciY),
                description: g.intl.string(g.t.vN6Xpa),
                imageSource: D(n, M, B),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: g.intl.string(g.t.Bv8Pfn),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: D(n, h, y),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: g.intl.string(g.t.Bv8Pfn),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: D(n, b, v),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: g.intl.string(g.t.ZvulDg),
                description: g.intl.string(g.t['8GwCPT']),
                imageSource: D(n, E, C),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: g.intl.string(g.t['lGcW+f']),
                description: g.intl.string(g.t['/fDyOz']),
                imageSource: D(n, T, N),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: g.intl.string(g.t['1c+xwc']),
                description: g.intl.string(g.t.hJG8ZG),
                imageSource: D(n, I, k),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: g.intl.string(g.t.tzdIwM),
                description: g.intl.string(g.t.hJG8ZG),
                imageSource: D(n, I, k),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: g.intl.string(g.t.tzdIwM),
                description: g.intl.string(g.t.FXlU29),
                imageSource: D(n, I, k),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: g.intl.string(g.t.RSXQYG),
                description: g.intl.string(g.t.ymCPxs),
                imageSource: O,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: g.intl.string(g.t.uZt5q6),
                description: g.intl.string(g.t.ZK3Zoa),
                imageSource: D(n, R, j),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: g.intl.formatToPlainString(g.t.jqhAdH, { premiumMaxSize: U }),
                description: g.intl.formatToPlainString(g.t['HI+cfn'], { premiumMaxSize: U }),
                imageSource: L,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: g.intl.string(g.t.NaGpTU),
                description: g.intl.string(g.t['A8O/Q0']),
                imageSource: D(n, S, A),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
