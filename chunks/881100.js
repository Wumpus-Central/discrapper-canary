n.d(t, {
    N: function () {
        return U;
    }
});
var i = n(399606),
    r = n(780384),
    s = n(230711),
    a = n(410030),
    l = n(594174),
    o = n(424218),
    c = n(74538),
    d = n(474936),
    u = n(981631),
    m = n(526761),
    g = n(388032),
    h = n(323780),
    p = n(101732),
    x = n(450598),
    f = n(633030),
    _ = n(97942),
    E = n(269987),
    C = n(548629),
    T = n(507084),
    S = n(680313),
    b = n(926433),
    I = n(302036),
    N = n(994554),
    v = n(1549),
    A = n(13327),
    j = n(59137),
    O = n(405991),
    R = n(24615),
    P = n(193943),
    y = n(334347),
    B = n(943734),
    D = n(603076),
    Z = n(472656),
    L = n(912429),
    M = n(772969),
    k = n(926262);
let w = (e, t, n) => ((0, r.wj)(e) ? t : n),
    U = (e) => {
        let { styles: t } = e,
            n = (0, a.ZP)(),
            r = (0, i.e7)([l.default], () => {
                let e = l.default.getCurrentUser();
                return c.ZP.canUsePremiumProfileCustomization(e);
            }),
            U = (0, o.BU)(d.Uq / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: g.intl.string(g.t.SS87ra),
                description: g.intl.string(g.t.oD6CRk),
                imageSource: x,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: g.intl.string(g.t['5cYMu7']),
                description: g.intl.string(g.t.vxk9vb),
                imageSource: w(n, h, p),
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
                imageSource: y,
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
                imageSource: w(n, B, D),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: g.intl.string(g.t.Bv8Pfn),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: w(n, f, Z),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: g.intl.string(g.t.Bv8Pfn),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: w(n, T, S),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: g.intl.string(g.t.ZvulDg),
                description: g.intl.string(g.t['8GwCPT']),
                imageSource: w(n, E, C),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: g.intl.string(g.t['lGcW+f']),
                description: g.intl.string(g.t['/fDyOz']),
                imageSource: w(n, b, I),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: g.intl.string(g.t['1c+xwc']),
                description: g.intl.string(g.t.hJG8ZG),
                imageSource: w(n, N, L),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: g.intl.string(g.t.tzdIwM),
                description: g.intl.string(g.t.hJG8ZG),
                imageSource: w(n, N, L),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: g.intl.string(g.t.tzdIwM),
                description: g.intl.string(g.t.FXlU29),
                imageSource: w(n, N, L),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: g.intl.string(g.t.RSXQYG),
                description: g.intl.string(g.t.ymCPxs),
                imageSource: M,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: g.intl.string(g.t.uZt5q6),
                description: g.intl.string(g.t.ZK3Zoa),
                imageSource: w(n, v, A),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: g.intl.formatToPlainString(g.t.jqhAdH, { premiumMaxSize: U }),
                description: g.intl.formatToPlainString(g.t['HI+cfn'], { premiumMaxSize: U }),
                imageSource: k,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: g.intl.string(g.t.NaGpTU),
                description: g.intl.string(g.t['A8O/Q0']),
                imageSource: w(n, j, O),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
