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
    h = n(388032),
    g = n(323780),
    _ = n(101732),
    x = n(450598),
    p = n(633030),
    E = n(97942),
    C = n(269987),
    f = n(548629),
    T = n(507084),
    N = n(680313),
    S = n(926433),
    I = n(302036),
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
                title: h.intl.string(h.t.SS87ra),
                description: h.intl.string(h.t.oD6CRk),
                imageSource: x,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: h.intl.string(h.t['5cYMu7']),
                description: h.intl.string(h.t.vxk9vb),
                imageSource: w(n, g, _),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: h.intl.string(h.t['/xvEMz']),
                description: h.intl.string(h.t.HKWdjo),
                className: t.clientThemesCard,
                imageSource: R,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: h.intl.string(h.t.OuItFh),
                description: h.intl.string(h.t.mPyrEx),
                imageSource: P,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: h.intl.string(h.t['R2IV/f']),
                description: h.intl.string(h.t.R5Xag4),
                imageSource: D,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: h.intl.string(h.t.lKDhhI),
                description: (e) => {
                    let t = () => {
                        r.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: m.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return s ? h.intl.format(h.t.aj1pfX, { onCheckItOutClick: t }) : h.intl.format(h.t.d2oYS0, { onTryItOutClick: t });
                },
                imageSource: E,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: h.intl.string(h.t.BUSciY),
                description: h.intl.string(h.t.vN6Xpa),
                imageSource: w(n, y, Z),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: h.intl.string(h.t.Bv8Pfn),
                description: h.intl.string(h.t.JMfaTU),
                imageSource: w(n, p, k),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: h.intl.string(h.t.Bv8Pfn),
                description: h.intl.string(h.t.JMfaTU),
                imageSource: w(n, T, N),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: h.intl.string(h.t.ZvulDg),
                description: h.intl.string(h.t['8GwCPT']),
                imageSource: w(n, C, f),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: h.intl.string(h.t['lGcW+f']),
                description: h.intl.string(h.t['/fDyOz']),
                imageSource: w(n, S, I),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: h.intl.string(h.t['1c+xwc']),
                description: h.intl.string(h.t.hJG8ZG),
                imageSource: w(n, b, L),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: h.intl.string(h.t.tzdIwM),
                description: h.intl.string(h.t.hJG8ZG),
                imageSource: w(n, b, L),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: h.intl.string(h.t.tzdIwM),
                description: h.intl.string(h.t.FXlU29),
                imageSource: w(n, b, L),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: h.intl.string(h.t.RSXQYG),
                description: h.intl.string(h.t.ymCPxs),
                imageSource: B,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: h.intl.string(h.t.uZt5q6),
                description: h.intl.string(h.t.ZK3Zoa),
                imageSource: w(n, v, j),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: h.intl.formatToPlainString(h.t.jqhAdH, { premiumMaxSize: V }),
                description: h.intl.formatToPlainString(h.t['HI+cfn'], { premiumMaxSize: V }),
                imageSource: M,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: h.intl.string(h.t.NaGpTU),
                description: h.intl.string(h.t['A8O/Q0']),
                imageSource: w(n, A, O),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
