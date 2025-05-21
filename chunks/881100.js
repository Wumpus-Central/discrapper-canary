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
    g = n(526761),
    m = n(388032),
    p = n(323780),
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
    N = n(13327),
    I = n(59137),
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
                title: m.intl.string(m.t.SS87ra),
                description: m.intl.string(m.t.oD6CRk),
                imageSource: f,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: m.intl.string(m.t['5cYMu7']),
                description: m.intl.string(m.t.vxk9vb),
                imageSource: M(n, p, h),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: m.intl.string(m.t['/xvEMz']),
                description: m.intl.string(m.t.HKWdjo),
                className: t.clientThemesCard,
                imageSource: A,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: m.intl.string(m.t.OuItFh),
                description: m.intl.string(m.t.mPyrEx),
                imageSource: P,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: m.intl.string(m.t['R2IV/f']),
                description: m.intl.string(m.t.R5Xag4),
                imageSource: R,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: m.intl.string(m.t.lKDhhI),
                description: (e) => {
                    let t = () => {
                        s.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: g.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return r ? m.intl.format(m.t.aj1pfX, { onCheckItOutClick: t }) : m.intl.format(m.t.d2oYS0, { onTryItOutClick: t });
                },
                imageSource: _,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: m.intl.string(m.t.BUSciY),
                description: m.intl.string(m.t.vN6Xpa),
                imageSource: M(n, D, Z),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: m.intl.string(m.t.Bv8Pfn),
                description: m.intl.string(m.t.JMfaTU),
                imageSource: M(n, b, w),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: m.intl.string(m.t.Bv8Pfn),
                description: m.intl.string(m.t.JMfaTU),
                imageSource: M(n, C, j),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: m.intl.string(m.t.ZvulDg),
                description: m.intl.string(m.t['8GwCPT']),
                imageSource: M(n, x, E),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: m.intl.string(m.t['lGcW+f']),
                description: m.intl.string(m.t['/fDyOz']),
                imageSource: M(n, O, S),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: m.intl.string(m.t['1c+xwc']),
                description: m.intl.string(m.t.hJG8ZG),
                imageSource: M(n, v, k),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: m.intl.string(m.t.tzdIwM),
                description: m.intl.string(m.t.hJG8ZG),
                imageSource: M(n, v, k),
                imageClassName: t.stickersImage
            },
            stickersPremiumPerk: {
                title: m.intl.string(m.t.tzdIwM),
                description: m.intl.string(m.t.FXlU29),
                imageSource: M(n, v, k),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: m.intl.string(m.t.RSXQYG),
                description: m.intl.string(m.t.ymCPxs),
                imageSource: L,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: m.intl.string(m.t.uZt5q6),
                description: m.intl.string(m.t.ZK3Zoa),
                imageSource: M(n, T, N),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: m.intl.formatToPlainString(m.t.jqhAdH, { premiumMaxSize: U }),
                description: m.intl.formatToPlainString(m.t['HI+cfn'], { premiumMaxSize: U }),
                imageSource: B,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: m.intl.string(m.t.NaGpTU),
                description: m.intl.string(m.t['A8O/Q0']),
                imageSource: M(n, I, y),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
