n.d(t, { N: () => M });
var r = n(399606),
    i = n(780384),
    s = n(230711),
    a = n(410030),
    l = n(594174),
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
    N = n(97942),
    x = n(269987),
    _ = n(548629),
    E = n(507084),
    j = n(680313),
    O = n(926433),
    C = n(302036),
    S = n(994554),
    v = n(1549),
    T = n(13327),
    I = n(59137),
    y = n(405991),
    A = n(24615),
    P = n(193943),
    R = n(334347),
    D = n(943734),
    Z = n(603076),
    w = n(472656),
    k = n(912429),
    W = n(772969),
    L = n(926262);
let B = (e, t, n) => ((0, i.wj)(e) ? t : n),
    M = (e) => {
        let { styles: t } = e,
            n = (0, a.ZP)(),
            i = (0, r.e7)([l.default], () => {
                let e = l.default.getCurrentUser();
                return c.ZP.canUsePremiumProfileCustomization(e);
            }),
            M = (0, o.BU)(d.Uq / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: g.NW.string(g.t.SS87ra),
                description: g.NW.string(g.t.oD6CRk),
                imageSource: f,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: g.NW.string(g.t['5cYMu7']),
                description: g.NW.string(g.t.vxk9vb),
                imageSource: B(n, p, h),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: g.NW.string(g.t['/xvEMz']),
                description: g.NW.string(g.t.HKWdjo),
                className: t.clientThemesCard,
                imageSource: A,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: g.NW.string(g.t.OuItFh),
                description: g.NW.string(g.t.mPyrEx),
                imageSource: P,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: g.NW.string(g.t['R2IV/f']),
                description: g.NW.string(g.t.R5Xag4),
                imageSource: R,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: g.NW.string(g.t.lKDhhI),
                description: (e) => {
                    let t = () => {
                        s.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: m.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return i ? g.NW.format(g.t.aj1pfX, { onCheckItOutClick: t }) : g.NW.format(g.t.d2oYS0, { onTryItOutClick: t });
                },
                imageSource: N,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: g.NW.string(g.t.BUSciY),
                description: g.NW.string(g.t.vN6Xpa),
                imageSource: B(n, D, Z),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: g.NW.string(g.t.Bv8Pfn),
                description: g.NW.string(g.t.JMfaTU),
                imageSource: B(n, b, w),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: g.NW.string(g.t.Bv8Pfn),
                description: g.NW.string(g.t.JMfaTU),
                imageSource: B(n, E, j),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: g.NW.string(g.t.ZvulDg),
                description: g.NW.string(g.t['8GwCPT']),
                imageSource: B(n, x, _),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: g.NW.string(g.t['lGcW+f']),
                description: g.NW.string(g.t['/fDyOz']),
                imageSource: B(n, O, C),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: g.NW.string(g.t['1c+xwc']),
                description: g.NW.string(g.t.hJG8ZG),
                imageSource: B(n, S, k),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: g.NW.string(g.t.tzdIwM),
                description: g.NW.string(g.t.hJG8ZG),
                imageSource: B(n, S, k),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: g.NW.string(g.t.tzdIwM),
                description: g.NW.string(g.t.FXlU29),
                imageSource: B(n, S, k),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: g.NW.string(g.t.RSXQYG),
                description: g.NW.string(g.t.ymCPxs),
                imageSource: W,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: g.NW.string(g.t.uZt5q6),
                description: g.NW.string(g.t.ZK3Zoa),
                imageSource: B(n, v, T),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: g.NW.formatToPlainString(g.t.jqhAdH, { premiumMaxSize: M }),
                description: g.NW.formatToPlainString(g.t['HI+cfn'], { premiumMaxSize: M }),
                imageSource: L,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: g.NW.string(g.t.NaGpTU),
                description: g.NW.string(g.t['A8O/Q0']),
                imageSource: B(n, I, y),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
