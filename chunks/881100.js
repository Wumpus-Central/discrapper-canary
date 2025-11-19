n.d(t, { N: () => U });
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
    b = n(507084),
    y = n(680313),
    O = n(926433),
    v = n(302036),
    I = n(994554),
    T = n(1549),
    S = n(13327),
    A = n(59137),
    C = n(405991),
    N = n(24615),
    R = n(193943),
    P = n(334347),
    D = n(943734),
    w = n(603076),
    L = n(472656),
    x = n(912429),
    M = n(772969),
    j = n(926262);
let k = (e, t, n) => ((0, i.wj)(e) ? t : n),
    U = (e) => {
        let { styles: t } = e,
            i = (0, a.ZP)(),
            U = (0, r.e7)([s.default], () => {
                let e = s.default.getCurrentUser();
                return c.ZP.canUsePremiumProfileCustomization(e);
            }),
            G = (e) => {
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
                return U
                    ? _.intl.format(_.t.aj1pfZ, { onCheckItOutClick: t })
                    : _.intl.format(_.t.d2oYS8, { onTryItOutClick: t });
            },
            B = (0, l.BU)(u.Uq / 1024, { useKibibytes: !0 });
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
                imageSource: k(i, p, h),
                imageClassName: t.badgeNewImage,
            },
            clientThemes: {
                title: _.intl.string(_.t["/xvEMy"]),
                description: _.intl.string(_.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: N,
                imageClassName: t.clientThemesImage,
            },
            customAppIcons: {
                title: _.intl.string(_.t.OuItFi),
                description: _.intl.string(_.t.mPyrE6),
                imageSource: R,
                imageClassName: t.customAppIconImage,
            },
            emoji: {
                title: _.intl.string(_.t["R2IV/Q"]),
                description: _.intl.string(_.t.R5Xag2),
                imageSource: P,
                imageClassName: t.emojiImage,
            },
            guildProfile: {
                title: _.intl.string(_.t.lKDhhJ),
                description: G,
                imageSource: E,
                imageClassName: t.perGuildProfilesImage,
            },
            longerMessages: {
                title: _.intl.string(_.t.BUScid),
                description: _.intl.string(_.t.vN6XpQ),
                imageSource: k(i, D, w),
                imageClassName: t.longerMessagesImage,
            },
            moreGuilds: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: k(i, g, L),
                imageClassName: t.moreGuildsImage,
            },
            moreGuildsAlt: {
                title: _.intl.string(_.t.Bv8Pfk),
                description: _.intl.string(_.t.JMfaTU),
                imageSource: k(i, b, y),
                imageClassName: t.moreGuildsAltImage,
            },
            soundboard: {
                title: _.intl.string(_.t["lGcW+c"]),
                description: _.intl.string(_.t["/fDyO+"]),
                imageSource: k(i, O, v),
                imageClassName: t.soundboardImage,
            },
            stickers: {
                title: _.intl.string(_.t["1c+xwT"]),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: k(i, I, x),
                imageClassName: t.stickersImage,
            },
            stickersBurst: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.hJG8ZN),
                imageSource: k(i, I, x),
                imageClassName: t.stickersImage,
            },
            stickersPremiumPerk: {
                title: _.intl.string(_.t.tzdIwI),
                description: _.intl.string(_.t.FXlU24),
                imageSource: k(i, I, x),
                imageClassName: t.stickersImage,
            },
            streaming: {
                title: _.intl.string(_.t.RSXQYO),
                description: _.intl.string(_.t.ymCPxp),
                imageSource: M,
                imageClassName: t.streamingImage,
            },
            superReactions: {
                title: _.intl.string(_.t["uZt5q/"]),
                description: _.intl.string(_.t.ZK3ZoX),
                imageSource: k(i, T, S),
                imageClassName: t.superReactionsImage,
            },
            upload: {
                title: _.intl.formatToPlainString(_.t.jqhAdL, { premiumMaxSize: B }),
                description: _.intl.formatToPlainString(_.t["HI+cfm"], { premiumMaxSize: B }),
                imageSource: j,
                imageClassName: t.uploadImage,
            },
            videoBackground: {
                title: _.intl.string(_.t.NaGpTf),
                description: _.intl.string(_.t["A8O/Qw"]),
                imageSource: k(i, A, C),
                imageClassName: t.videoBackgroundImage,
            },
        };
    };
