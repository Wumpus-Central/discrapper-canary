n.d(t, {
    ZP: () => k,
    __: () => w,
    dm: () => Z
});
var r,
    i = n(230711),
    s = n(100527),
    a = n(906732),
    l = n(300284),
    o = n(526167),
    c = n(63063),
    d = n(981631),
    u = n(526761),
    m = n(388032),
    g = n(509614),
    p = n(880511),
    h = n(985443),
    f = n(612253),
    b = n(832287),
    N = n(872532),
    x = n(91342),
    _ = n(181708),
    E = n(821721),
    j = n(158897),
    O = n(290650),
    C = n(751125),
    S = n(904505),
    v = n(712626),
    T = n(386014),
    I = n(845571),
    y = n(220046),
    A = n(385874),
    P = n(371000),
    R = n(377679),
    D = n(825087),
    Z = (((r = {}).NEW_APP_STYLES = 'newAppStyles'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHOW_YOUR_STYLE = 'showYourStyle'), (r.YOUR_SPACE = 'yourSpace'), (r.EMOJIS = 'emojis'), (r.NO_LIMITS = 'noLimits'), r);
let w = () => {
        let e = (0, o.rO)();
        return {
            emojis: {
                name: 'emojis',
                title: m.NW.string(m.t.zY5PPT),
                description: m.NW.string(m.t.R5Xag4),
                previewImage: g,
                videoUrl: e ? x.ZP : _.ZP,
                isCompact: !0
            },
            noLimits: {
                name: 'noLimits',
                title: m.NW.string(m.t['6b3ydH']),
                description: m.NW.string(m.t['Y+IJys']),
                previewImage: p,
                videoUrl: e ? O.ZP : C.ZP,
                isCompact: !0
            }
        };
    },
    k = (e) => {
        let { analyticsLocations: t } = (0, a.ZP)(s.Z.PREMIUM_MARKETING_BENTO_BOX),
            n = (0, l.Z)({
                scrollPosition: u.Y_.TRY_IT_OUT,
                analyticsLocations: t
            }),
            r = () => {
                i.Z.open(d.oAB.APPEARANCE, null, {
                    openWithoutBackstack: !0,
                    analyticsLocations: t
                });
            },
            g = (0, o.rO)(),
            p = c.Z.getArticleURL(d.BhN.REFERRAL_PROGRAM),
            x = {
                serverProfiles: {
                    name: 'serverProfiles',
                    title: m.NW.string(m.t.I9TYMj),
                    description: m.NW.string(m.t.HMSHeH),
                    descriptionCta: m.NW.string(m.t.jVcuVV),
                    onClick: n,
                    previewImage: N,
                    videoUrl: g ? I.ZP : y.ZP
                },
                referralProgram: {
                    name: 'referralProgram',
                    title: m.NW.string(m.t.tPY4o6),
                    description: m.NW.format(m.t.jRPQUF, { learnMoreLink: p }),
                    previewImage: v.Z,
                    videoUrl: g ? S.ZP : T.ZP
                },
                newAppStyles: {
                    name: 'newAppStyles',
                    title: m.NW.string(m.t.XQCSrq),
                    description: m.NW.string(m.t.HC5wVV),
                    descriptionCta: m.NW.string(m.t.jVcuVV),
                    onClick: r,
                    previewImage: b,
                    videoUrl: g ? E.ZP : j.ZP
                }
            },
            _ = {
                showYourStyle: {
                    name: 'showYourStyle',
                    title: m.NW.string(m.t.Ij3Zmp),
                    description: m.NW.string(m.t.UsOUxc),
                    descriptionCta: m.NW.string(m.t.jVcuVV),
                    previewImage: f,
                    onClick: n,
                    videoUrl: g ? A.Z : P.Z
                },
                yourSpace: {
                    name: 'yourSpace',
                    title: m.NW.string(m.t.Wme3nZ),
                    description: m.NW.string(m.t['/aAIqa']),
                    descriptionCta: m.NW.string(m.t.jVcuVV),
                    previewImage: h,
                    onClick: r,
                    videoUrl: g ? R.Z : D.Z
                }
            };
        return e ? _ : x;
    };
