n.d(t, {
    N: function () {
        return D;
    }
});
var i = n(399606),
    r = n(780384),
    a = n(230711),
    s = n(410030),
    l = n(594174),
    o = n(424218),
    c = n(74538),
    d = n(474936),
    u = n(981631),
    g = n(526761),
    m = n(388032),
    f = n(323780),
    p = n(101732),
    _ = n(450598),
    h = n(633030),
    x = n(97942),
    E = n(269987),
    b = n(548629),
    C = n(507084),
    v = n(680313),
    T = n(926433),
    N = n(302036),
    I = n(994554),
    S = n(1549),
    R = n(13327),
    j = n(59137),
    A = n(405991),
    P = n(24615),
    O = n(193943),
    Z = n(334347),
    M = n(943734),
    B = n(603076),
    y = n(472656),
    w = n(912429),
    k = n(772969),
    L = n(926262);
let U = (e, t, n) => ((0, r.wj)(e) ? t : n),
    D = (e) => {
        let { styles: t } = e,
            n = (0, s.ZP)(),
            r = (0, i.e7)([l.default], () => {
                let e = l.default.getCurrentUser();
                return c.ZP.canUsePremiumProfileCustomization(e);
            }),
            D = (0, o.BU)(d.Uq / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: m.intl.string(m.t.SS87ra),
                description: m.intl.string(m.t.oD6CRk),
                imageSource: _,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: m.intl.string(m.t['5cYMu7']),
                description: m.intl.string(m.t.vxk9vb),
                imageSource: U(n, f, p),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: m.intl.string(m.t['/xvEMz']),
                description: m.intl.string(m.t.HKWdjo),
                className: t.clientThemesCard,
                imageSource: P,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: m.intl.string(m.t.OuItFh),
                description: m.intl.string(m.t.mPyrEx),
                imageSource: O,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: m.intl.string(m.t['R2IV/f']),
                description: m.intl.string(m.t.R5Xag4),
                imageSource: Z,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: m.intl.string(m.t.lKDhhI),
                description: (e) => {
                    let t = () => {
                        a.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: g.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return r ? m.intl.format(m.t.aj1pfX, { onCheckItOutClick: t }) : m.intl.format(m.t.d2oYS0, { onTryItOutClick: t });
                },
                imageSource: x,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: m.intl.string(m.t.BUSciY),
                description: m.intl.string(m.t.vN6Xpa),
                imageSource: U(n, M, B),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: m.intl.string(m.t.Bv8Pfn),
                description: m.intl.string(m.t.JMfaTU),
                imageSource: U(n, h, y),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: m.intl.string(m.t.Bv8Pfn),
                description: m.intl.string(m.t.JMfaTU),
                imageSource: U(n, C, v),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: m.intl.string(m.t.ZvulDg),
                description: m.intl.string(m.t['8GwCPT']),
                imageSource: U(n, E, b),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: m.intl.string(m.t['lGcW+f']),
                description: m.intl.string(m.t['/fDyOz']),
                imageSource: U(n, T, N),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: m.intl.string(m.t['1c+xwc']),
                description: m.intl.string(m.t.hJG8ZG),
                imageSource: U(n, I, w),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: m.intl.string(m.t.tzdIwM),
                description: m.intl.string(m.t.hJG8ZG),
                imageSource: U(n, I, w),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: m.intl.string(m.t.tzdIwM),
                description: m.intl.string(m.t.FXlU29),
                imageSource: U(n, I, w),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: m.intl.string(m.t.RSXQYG),
                description: m.intl.string(m.t.ymCPxs),
                imageSource: k,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: m.intl.string(m.t.uZt5q6),
                description: m.intl.string(m.t.ZK3Zoa),
                imageSource: U(n, S, R),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: m.intl.formatToPlainString(m.t.jqhAdH, { premiumMaxSize: D }),
                description: m.intl.formatToPlainString(m.t['HI+cfn'], { premiumMaxSize: D }),
                imageSource: L,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: m.intl.string(m.t.NaGpTU),
                description: m.intl.string(m.t['A8O/Q0']),
                imageSource: U(n, j, A),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
