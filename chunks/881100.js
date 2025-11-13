n.d(t, { N: () => B });
var r = n(399606),
    i = n(780384),
    a = n(410030),
    o = n(313789),
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
    D = n(193943),
    w = n(334347),
    x = n(943734),
    L = n(603076),
    M = n(472656),
    j = n(912429),
    k = n(772969),
    U = n(926262);
let G = (e, t, n) => ((0, i.wj)(e) ? t : n),
    B = (e) => {
        let { styles: t } = e,
            i = (0, a.ZP)(),
            B = (0, r.e7)([s.default], () => {
                let e = s.default.getCurrentUser();
                return c.ZP.canUsePremiumProfileCustomization(e);
            }),
            Z = (e) => {
                let t = () => {
                    {
                        let { openUserSettings: t } = n(518596);
                        t(o.n.PROFILE_PANEL, {
                            section: d.oAB.PROFILE_CUSTOMIZATION,
                            scrollPosition: f.Y_.TRY_IT_OUT,
                            analyticsLocations: e,
                        });
                    }
                };
                return B
                    ? _.intl.format(_.t.aj1pfZ, { onCheckItOutClick: t })
                    : _.intl.format(_.t.d2oYS8, { onTryItOutClick: t });
            },
            F = (0, l.BU)(u.Uq / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: _.intl.string(_.t.SS87rQ),
                description: _.intl.string(_.t.oD6CRr),
                imageSource: m,
                imageClassName: t.badgeImage,
            },
            badgeAlt: {
                title: _.intl.string(_.t["5cYMu0"]),
                description: _.intl.string(_.t.vxk9va),
                imageSource: G(i, p, h),
                imageClassName: t.badgeNewImage,
            },
            clientThemes: {
                title: _.intl.string(_.t["/xvEMy"]),
                description: _.intl.string(_.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: P,
                imageClassName: t.clientThemesImage,
            },
            customAppIcons: {
                title: _.intl.string(_.t.OuItFi),
                description: _.intl.string(_.t.mPyrE6),
                imageSource: D,
                imageClassName: t.customAppIconImage,
            },
            emoji: {
                title: _.intl.string(_.t["R2IV/Q"]),
                description: _.intl.string(_.t.R5Xag2),
                imageSource: w,
                imageClassName: t.emojiImage,
            },
            guildProfile: {
                title: _.intl.string(_.t.lKDhhJ),
                description: Z,
                imageSource: E,
                imageClassName: t.perGuildProfilesImage,
            },
            longerMessages: {
                title: _.intl.string(_.t.BUScid),
                description: _.intl.string(_.t.vN6XpQ),
                imageSource: G(i, x, L),
                imageClassName: t.longerMessagesImage,
            },
            moreGuilds: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: G(i, g, M),
                imageClassName: t.moreGuildsImage,
            },
            moreGuildsAlt: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: G(i, O, v),
                imageClassName: t.moreGuildsAltImage,
            },
            remix: {
                title: _.intl.string(_.t.ZvulDs),
                description: _.intl.string(_.t["8GwCPR"]),
                imageSource: G(i, b, y),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0,
            },
            soundboard: {
                title: _.intl.string(_.t["lGcW+c"]),
                description: _.intl.string(_.t["/fDyO+"]),
                imageSource: G(i, I, T),
                imageClassName: t.soundboardImage,
            },
            stickers: {
                title: _.intl.string(_.t["1c+xwT"]),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: G(i, S, j),
                imageClassName: t.stickersImage,
            },
            stickersBurst: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: G(i, S, j),
                imageClassName: t.stickersImage,
            },
            stickersPremiumPerk: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.FXlU24),
                imageSource: G(i, S, j),
                imageClassName: t.stickersImage,
            },
            streaming: {
                title: _.intl.string(_.t.RSXQYO),
                description: _.intl.string(_.t.ymCPxp),
                imageSource: k,
                imageClassName: t.streamingImage,
            },
            superReactions: {
                title: _.intl.string(_.t["uZt5q/"]),
                description: _.intl.string(_.t.ZK3ZoX),
                imageSource: G(i, A, C),
                imageClassName: t.superReactionsImage,
            },
            upload: {
                title: _.intl.formatToPlainString(_.t.jqhAdL, { premiumMaxSize: F }),
                description: _.intl.formatToPlainString(_.t["HI+cfm"], { premiumMaxSize: F }),
                imageSource: U,
                imageClassName: t.uploadImage,
            },
            videoBackground: {
                title: _.intl.string(_.t.NaGpTf),
                description: _.intl.string(_.t["A8O/Qw"]),
                imageSource: G(i, N, R),
                imageClassName: t.videoBackgroundImage,
            },
        };
    };
