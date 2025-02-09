n.d(t, {
    ZP: () => k,
    __: () => y,
    dm: () => B
});
var i,
    r = n(230711),
    a = n(100527),
    s = n(906732),
    l = n(300284),
    o = n(526167),
    c = n(63063),
    d = n(981631),
    u = n(526761),
    m = n(388032),
    g = n(509614),
    _ = n(880511),
    p = n(985443),
    f = n(612253),
    h = n(832287),
    x = n(872532),
    E = n(91342),
    C = n(181708),
    b = n(821721),
    v = n(158897),
    T = n(290650),
    N = n(751125),
    I = n(904505),
    R = n(712626),
    j = n(386014),
    S = n(845571),
    A = n(220046),
    P = n(385874),
    Z = n(371000),
    w = n(377679),
    M = n(825087),
    B = (((i = {}).NEW_APP_STYLES = 'newAppStyles'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHOW_YOUR_STYLE = 'showYourStyle'), (i.YOUR_SPACE = 'yourSpace'), (i.EMOJIS = 'emojis'), (i.NO_LIMITS = 'noLimits'), i);
let y = () => {
        let e = (0, o.rO)();
        return {
            emojis: {
                name: 'emojis',
                title: m.intl.string(m.t.zY5PPT),
                description: m.intl.string(m.t.R5Xag4),
                previewImage: g,
                videoUrl: e ? E.Z : C.Z,
                isCompact: !0
            },
            noLimits: {
                name: 'noLimits',
                title: m.intl.string(m.t['6b3ydH']),
                description: m.intl.string(m.t['Y+IJys']),
                previewImage: _,
                videoUrl: e ? T.Z : N.Z,
                isCompact: !0
            }
        };
    },
    k = (e) => {
        let { analyticsLocations: t } = (0, s.ZP)(a.Z.PREMIUM_MARKETING_BENTO_BOX),
            n = (0, l.Z)({
                scrollPosition: u.Y_.TRY_IT_OUT,
                analyticsLocations: t
            }),
            i = () => {
                r.Z.open(d.oAB.APPEARANCE, null, {
                    openWithoutBackstack: !0,
                    analyticsLocations: t
                });
            },
            g = (0, o.rO)(),
            _ = c.Z.getArticleURL(d.BhN.REFERRAL_PROGRAM),
            E = {
                serverProfiles: {
                    name: 'serverProfiles',
                    title: m.intl.string(m.t.I9TYMj),
                    description: m.intl.string(m.t.HMSHeH),
                    descriptionCta: m.intl.string(m.t.jVcuVV),
                    onClick: n,
                    previewImage: x,
                    videoUrl: g ? S.Z : A.Z
                },
                referralProgram: {
                    name: 'referralProgram',
                    title: m.intl.string(m.t.tPY4o6),
                    description: m.intl.format(m.t.jRPQUF, { learnMoreLink: _ }),
                    previewImage: R.Z,
                    videoUrl: g ? I.Z : j.Z
                },
                newAppStyles: {
                    name: 'newAppStyles',
                    title: m.intl.string(m.t.XQCSrq),
                    description: m.intl.string(m.t.HC5wVV),
                    descriptionCta: m.intl.string(m.t.jVcuVV),
                    onClick: i,
                    previewImage: h,
                    videoUrl: g ? b.Z : v.Z
                }
            },
            C = {
                showYourStyle: {
                    name: 'showYourStyle',
                    title: m.intl.string(m.t.Ij3Zmp),
                    description: m.intl.string(m.t.UsOUxc),
                    descriptionCta: m.intl.string(m.t.jVcuVV),
                    previewImage: f,
                    onClick: n,
                    videoUrl: g ? P.Z : Z.Z
                },
                yourSpace: {
                    name: 'yourSpace',
                    title: m.intl.string(m.t.Wme3nZ),
                    description: m.intl.string(m.t['/aAIqa']),
                    descriptionCta: m.intl.string(m.t.jVcuVV),
                    previewImage: p,
                    onClick: i,
                    videoUrl: g ? w.Z : M.Z
                }
            };
        return e ? C : E;
    };
