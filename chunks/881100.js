n.d(t, { N: () => U });
var i = n(399606),
    r = n(780384),
    s = n(230711),
    l = n(410030),
    a = n(594174),
    o = n(424218),
    c = n(74538),
    d = n(474936),
    u = n(981631),
    m = n(526761),
    g = n(388032),
    p = n(323780),
    h = n(101732),
    f = n(450598),
    b = n(633030),
    _ = n(97942),
    x = n(269987),
    E = n(548629),
    j = n(507084),
    C = n(680313),
    O = n(926433),
    S = n(302036),
    v = n(994554),
    T = n(1549),
    I = n(13327),
    N = n(59137),
    y = n(405991),
    A = n(24615),
    P = n(193943),
    R = n(334347),
    D = n(943734),
    Z = n(603076),
    w = n(472656),
    k = n(912429),
    L = n(772969),
    B = n(926262);
let M = (e, t, n) => ((0, r.wj)(e) ? t : n),
    U = (e) => {
        let { styles: t } = e,
            n = (0, l.ZP)(),
            r = (0, i.e7)([a.default], () => {
                let e = a.default.getCurrentUser();
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
                imageSource: M(n, p, h),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: g.intl.string(g.t['/xvEMz']),
                description: g.intl.string(g.t.HKWdjo),
                className: t.clientThemesCard,
                imageSource: A,
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
                imageSource: R,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: g.intl.string(g.t.lKDhhI),
                description: (e) => {
                    let t = () => {
                        s.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: m.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return r ? g.intl.format(g.t.aj1pfX, { onCheckItOutClick: t }) : g.intl.format(g.t.d2oYS0, { onTryItOutClick: t });
                },
                imageSource: _,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: g.intl.string(g.t.BUSciY),
                description: g.intl.string(g.t.vN6Xpa),
                imageSource: M(n, D, Z),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: g.intl.string(g.t.Bv8Pfn),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: M(n, b, w),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: g.intl.string(g.t.Bv8Pfn),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: M(n, j, C),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: g.intl.string(g.t.ZvulDg),
                description: g.intl.string(g.t['8GwCPT']),
                imageSource: M(n, x, E),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: g.intl.string(g.t['lGcW+f']),
                description: g.intl.string(g.t['/fDyOz']),
                imageSource: M(n, O, S),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: g.intl.string(g.t['1c+xwc']),
                description: g.intl.string(g.t.hJG8ZG),
                imageSource: M(n, v, k),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: g.intl.string(g.t.tzdIwM),
                description: g.intl.string(g.t.hJG8ZG),
                imageSource: M(n, v, k),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: g.intl.string(g.t.tzdIwM),
                description: g.intl.string(g.t.FXlU29),
                imageSource: M(n, v, k),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: g.intl.string(g.t.RSXQYG),
                description: g.intl.string(g.t.ymCPxs),
                imageSource: L,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: g.intl.string(g.t.uZt5q6),
                description: g.intl.string(g.t.ZK3Zoa),
                imageSource: M(n, T, I),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: g.intl.formatToPlainString(g.t.jqhAdH, { premiumMaxSize: U }),
                description: g.intl.formatToPlainString(g.t['HI+cfn'], { premiumMaxSize: U }),
                imageSource: B,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: g.intl.string(g.t.NaGpTU),
                description: g.intl.string(g.t['A8O/Q0']),
                imageSource: M(n, N, y),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
