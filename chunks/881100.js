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
    p = n(388032),
    g = n(323780),
    h = n(101732),
    f = n(450598),
    b = n(633030),
    _ = n(97942),
    x = n(269987),
    E = n(548629),
    C = n(507084),
    j = n(680313),
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
                title: p.intl.string(p.t.SS87ra),
                description: p.intl.string(p.t.oD6CRk),
                imageSource: f,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: p.intl.string(p.t['5cYMu7']),
                description: p.intl.string(p.t.vxk9vb),
                imageSource: M(n, g, h),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: p.intl.string(p.t['/xvEMz']),
                description: p.intl.string(p.t.HKWdjo),
                className: t.clientThemesCard,
                imageSource: A,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: p.intl.string(p.t.OuItFh),
                description: p.intl.string(p.t.mPyrEx),
                imageSource: P,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: p.intl.string(p.t['R2IV/f']),
                description: p.intl.string(p.t.R5Xag4),
                imageSource: R,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: p.intl.string(p.t.lKDhhI),
                description: (e) => {
                    let t = () => {
                        s.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: m.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return r ? p.intl.format(p.t.aj1pfX, { onCheckItOutClick: t }) : p.intl.format(p.t.d2oYS0, { onTryItOutClick: t });
                },
                imageSource: _,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: p.intl.string(p.t.BUSciY),
                description: p.intl.string(p.t.vN6Xpa),
                imageSource: M(n, D, Z),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: p.intl.string(p.t.Bv8Pfn),
                description: p.intl.string(p.t.JMfaTU),
                imageSource: M(n, b, w),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: p.intl.string(p.t.Bv8Pfn),
                description: p.intl.string(p.t.JMfaTU),
                imageSource: M(n, C, j),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: p.intl.string(p.t.ZvulDg),
                description: p.intl.string(p.t['8GwCPT']),
                imageSource: M(n, x, E),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: p.intl.string(p.t['lGcW+f']),
                description: p.intl.string(p.t['/fDyOz']),
                imageSource: M(n, O, S),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: p.intl.string(p.t['1c+xwc']),
                description: p.intl.string(p.t.hJG8ZG),
                imageSource: M(n, v, k),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: p.intl.string(p.t.tzdIwM),
                description: p.intl.string(p.t.hJG8ZG),
                imageSource: M(n, v, k),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: p.intl.string(p.t.tzdIwM),
                description: p.intl.string(p.t.FXlU29),
                imageSource: M(n, v, k),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: p.intl.string(p.t.RSXQYG),
                description: p.intl.string(p.t.ymCPxs),
                imageSource: L,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: p.intl.string(p.t.uZt5q6),
                description: p.intl.string(p.t.ZK3Zoa),
                imageSource: M(n, T, I),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: p.intl.formatToPlainString(p.t.jqhAdH, { premiumMaxSize: U }),
                description: p.intl.formatToPlainString(p.t['HI+cfn'], { premiumMaxSize: U }),
                imageSource: B,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: p.intl.string(p.t.NaGpTU),
                description: p.intl.string(p.t['A8O/Q0']),
                imageSource: M(n, N, y),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
