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
    p = n(388032),
    _ = n(323780),
    m = n(101732),
    h = n(450598),
    g = n(633030),
    E = n(97942),
    b = n(507084),
    y = n(680313),
    O = n(926433),
    v = n(302036),
    S = n(994554),
    I = n(1549),
    T = n(13327),
    A = n(59137),
    C = n(405991),
    N = n(24615),
    P = n(193943),
    R = n(334347),
    w = n(943734),
    D = n(603076),
    x = n(472656),
    L = n(912429),
    j = n(772969),
    M = n(926262);
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
                    ? p.intl.format(p.t.aj1pfZ, { onCheckItOutClick: t })
                    : p.intl.format(p.t.d2oYS8, { onTryItOutClick: t });
            },
            Z = (0, l.BU)(u.Uq / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: p.intl.string(p.t.SS87rQ),
                description: p.intl.string(p.t.oD6CRr),
                imageSource: h,
                imageClassName: t.badgeImage,
            },
            badgeAlt: {
                title: p.intl.string(p.t["5cYMu0"]),
                description: p.intl.string(p.t.vxk9va),
                imageSource: k(i, _, m),
                imageClassName: t.badgeNewImage,
            },
            clientThemes: {
                title: p.intl.string(p.t["/xvEMy"]),
                description: p.intl.string(p.t.HKWdjj),
                className: t.clientThemesCard,
                imageSource: N,
                imageClassName: t.clientThemesImage,
            },
            customAppIcons: {
                title: p.intl.string(p.t.OuItFi),
                description: p.intl.string(p.t.mPyrE6),
                imageSource: P,
                imageClassName: t.customAppIconImage,
            },
            emoji: {
                title: p.intl.string(p.t["R2IV/Q"]),
                description: p.intl.string(p.t.R5Xag2),
                imageSource: R,
                imageClassName: t.emojiImage,
            },
            guildProfile: {
                title: p.intl.string(p.t.lKDhhJ),
                description: G,
                imageSource: E,
                imageClassName: t.perGuildProfilesImage,
            },
            longerMessages: {
                title: p.intl.string(p.t.BUScid),
                description: p.intl.string(p.t.vN6XpQ),
                imageSource: k(i, w, D),
                imageClassName: t.longerMessagesImage,
            },
            moreGuilds: {
                title: p.intl.string(p.t.Bv8Pfk),
                description: p.intl.string(p.t.JMfaTU),
                imageSource: k(i, g, x),
                imageClassName: t.moreGuildsImage,
            },
            moreGuildsAlt: {
                title: p.intl.string(p.t.Bv8Pfk),
                description: p.intl.string(p.t.JMfaTU),
                imageSource: k(i, b, y),
                imageClassName: t.moreGuildsAltImage,
            },
            soundboard: {
                title: p.intl.string(p.t["lGcW+c"]),
                description: p.intl.string(p.t["/fDyO+"]),
                imageSource: k(i, O, v),
                imageClassName: t.soundboardImage,
            },
            stickers: {
                title: p.intl.string(p.t["1c+xwT"]),
                description: p.intl.string(p.t.hJG8ZN),
                imageSource: k(i, S, L),
                imageClassName: t.stickersImage,
            },
            stickersBurst: {
                title: p.intl.string(p.t.tzdIwI),
                description: p.intl.string(p.t.hJG8ZN),
                imageSource: k(i, S, L),
                imageClassName: t.stickersImage,
            },
            stickersPremiumPerk: {
                title: p.intl.string(p.t.tzdIwI),
                description: p.intl.string(p.t.hJG8ZN),
                imageSource: k(i, S, L),
                imageClassName: t.stickersImage,
            },
            streaming: {
                title: p.intl.string(p.t.RSXQYO),
                description: p.intl.string(p.t.ymCPxp),
                imageSource: j,
                imageClassName: t.streamingImage,
            },
            superReactions: {
                title: p.intl.string(p.t["uZt5q/"]),
                description: p.intl.string(p.t.ZK3ZoX),
                imageSource: k(i, I, T),
                imageClassName: t.superReactionsImage,
            },
            upload: {
                title: p.intl.formatToPlainString(p.t.jqhAdL, { premiumMaxSize: Z }),
                description: p.intl.formatToPlainString(p.t["HI+cfm"], { premiumMaxSize: Z }),
                imageSource: M,
                imageClassName: t.uploadImage,
            },
            videoBackground: {
                title: p.intl.string(p.t.NaGpTf),
                description: p.intl.string(p.t["A8O/Qw"]),
                imageSource: k(i, A, C),
                imageClassName: t.videoBackgroundImage,
            },
        };
    };
