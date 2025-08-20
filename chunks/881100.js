n.d(t, { N: () => B });
var r = n(399606),
    i = n(780384),
    a = n(230711),
    o = n(410030),
    s = n(594174),
    l = n(424218),
    c = n(74538),
    u = n(474936),
    d = n(981631),
    f = n(526761),
    _ = n(388032),
    p = n(323780),
    h = n(101732),
    m = n(450598),
    g = n(633030),
    E = n(97942),
    b = n(269987),
    y = n(548629),
    O = n(507084),
    v = n(680313),
    I = n(926433),
    T = n(302036),
    S = n(994554),
    A = n(1549),
    C = n(13327),
    N = n(59137),
    R = n(405991),
    P = n(24615),
    w = n(193943),
    D = n(334347),
    x = n(943734),
    L = n(603076),
    j = n(472656),
    M = n(912429),
    k = n(772969),
    U = n(926262);
let G = (e, t, n) => ((0, i.wj)(e) ? t : n),
    B = (e) => {
        let { styles: t } = e,
            n = (0, o.ZP)(),
            i = (0, r.e7)([s.default], () => {
                let e = s.default.getCurrentUser();
                return c.ZP.canUsePremiumProfileCustomization(e);
            }),
            B = (e) => {
                let t = () => {
                    a.Z.open(d.oAB.PROFILE_CUSTOMIZATION, null, {
                        scrollPosition: f.Y_.TRY_IT_OUT,
                        analyticsLocations: e,
                    });
                };
                return i
                    ? _.intl.format(_.t.aj1pfX, { onCheckItOutClick: t })
                    : _.intl.format(_.t.d2oYS0, { onTryItOutClick: t });
            },
            Z = (0, l.BU)(u.Uq / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: _.intl.string(_.t.SS87ra),
                description: _.intl.string(_.t.oD6CRk),
                imageSource: m,
                imageClassName: t.badgeImage,
            },
            badgeAlt: {
                title: _.intl.string(_.t["5cYMu7"]),
                description: _.intl.string(_.t.vxk9vb),
                imageSource: G(n, p, h),
                imageClassName: t.badgeNewImage,
            },
            clientThemes: {
                title: _.intl.string(_.t["/xvEMz"]),
                description: _.intl.string(_.t.HKWdjo),
                className: t.clientThemesCard,
                imageSource: P,
                imageClassName: t.clientThemesImage,
            },
            customAppIcons: {
                title: _.intl.string(_.t.OuItFh),
                description: _.intl.string(_.t.mPyrEx),
                imageSource: w,
                imageClassName: t.customAppIconImage,
            },
            emoji: {
                title: _.intl.string(_.t["R2IV/f"]),
                description: _.intl.string(_.t.R5Xag4),
                imageSource: D,
                imageClassName: t.emojiImage,
            },
            guildProfile: {
                title: _.intl.string(_.t.lKDhhI),
                description: B,
                imageSource: E,
                imageClassName: t.perGuildProfilesImage,
            },
            longerMessages: {
                title: _.intl.string(_.t.BUSciY),
                description: _.intl.string(_.t.vN6Xpa),
                imageSource: G(n, x, L),
                imageClassName: t.longerMessagesImage,
            },
            moreGuilds: {
                title: _.intl.string(_.t.Bv8Pfn),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: G(n, g, j),
                imageClassName: t.moreGuildsImage,
            },
            moreGuildsAlt: {
                title: _.intl.string(_.t.Bv8Pfn),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: G(n, O, v),
                imageClassName: t.moreGuildsAltImage,
            },
            remix: {
                title: _.intl.string(_.t.ZvulDg),
                description: _.intl.string(_.t["8GwCPT"]),
                imageSource: G(n, b, y),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0,
            },
            soundboard: {
                title: _.intl.string(_.t["lGcW+f"]),
                description: _.intl.string(_.t["/fDyOz"]),
                imageSource: G(n, I, T),
                imageClassName: t.soundboardImage,
            },
            stickers: {
                title: _.intl.string(_.t["1c+xwc"]),
                description: _.intl.string(_.t.hJG8ZG),
                imageSource: G(n, S, M),
                imageClassName: t.stickersImage,
            },
            stickersBurst: {
                title: _.intl.string(_.t.tzdIwM),
                description: _.intl.string(_.t.hJG8ZG),
                imageSource: G(n, S, M),
                imageClassName: t.stickersImage,
            },
            stickersPremiumPerk: {
                title: _.intl.string(_.t.tzdIwM),
                description: _.intl.string(_.t.FXlU29),
                imageSource: G(n, S, M),
                imageClassName: t.stickersImage,
            },
            streaming: {
                title: _.intl.string(_.t.RSXQYG),
                description: _.intl.string(_.t.ymCPxs),
                imageSource: k,
                imageClassName: t.streamingImage,
            },
            superReactions: {
                title: _.intl.string(_.t.uZt5q6),
                description: _.intl.string(_.t.ZK3Zoa),
                imageSource: G(n, A, C),
                imageClassName: t.superReactionsImage,
            },
            upload: {
                title: _.intl.formatToPlainString(_.t.jqhAdH, { premiumMaxSize: Z }),
                description: _.intl.formatToPlainString(_.t["HI+cfn"], { premiumMaxSize: Z }),
                imageSource: U,
                imageClassName: t.uploadImage,
            },
            videoBackground: {
                title: _.intl.string(_.t.NaGpTU),
                description: _.intl.string(_.t["A8O/Q0"]),
                imageSource: G(n, N, R),
                imageClassName: t.videoBackgroundImage,
            },
        };
    };
