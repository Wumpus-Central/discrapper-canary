n.d(t, {
    ZP: () => L,
    __: () => k,
    dm: () => Z
});
var i,
    s = n(230711),
    r = n(100527),
    l = n(906732),
    a = n(300284),
    o = n(526167),
    c = n(63063),
    d = n(981631),
    u = n(526761),
    m = n(388032),
    h = n(509614),
    g = n(880511),
    _ = n(985443),
    x = n(612253),
    p = n(832287),
    E = n(872532),
    C = n(91342),
    f = n(181708),
    T = n(821721),
    N = n(158897),
    S = n(290650),
    I = n(751125),
    b = n(904505),
    v = n(712626),
    j = n(386014),
    A = n(845571),
    O = n(220046),
    R = n(385874),
    P = n(371000),
    D = n(377679),
    y = n(825087),
    Z = (((i = {}).NEW_APP_STYLES = 'newAppStyles'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHOW_YOUR_STYLE = 'showYourStyle'), (i.YOUR_SPACE = 'yourSpace'), (i.EMOJIS = 'emojis'), (i.NO_LIMITS = 'noLimits'), i);
let k = () => {
        let e = (0, o.rO)();
        return {
            emojis: {
                name: 'emojis',
                title: m.intl.string(m.t.zY5PPT),
                description: m.intl.string(m.t.R5Xag4),
                previewImage: h,
                videoUrl: e ? C.Z : f.Z,
                isCompact: !0
            },
            noLimits: {
                name: 'noLimits',
                title: m.intl.string(m.t['6b3ydH']),
                description: m.intl.string(m.t['Y+IJys']),
                previewImage: g,
                videoUrl: e ? S.Z : I.Z,
                isCompact: !0
            }
        };
    },
    L = (e) => {
        let { analyticsLocations: t } = (0, l.ZP)(r.Z.PREMIUM_MARKETING_BENTO_BOX),
            n = (0, a.Z)({
                scrollPosition: u.Y_.TRY_IT_OUT,
                analyticsLocations: t
            }),
            i = () => {
                s.Z.open(d.oAB.APPEARANCE, null, {
                    openWithoutBackstack: !0,
                    analyticsLocations: t
                });
            },
            h = (0, o.rO)(),
            g = c.Z.getArticleURL(d.BhN.REFERRAL_PROGRAM),
            C = {
                serverProfiles: {
                    name: 'serverProfiles',
                    title: m.intl.string(m.t.I9TYMj),
                    description: m.intl.string(m.t.HMSHeH),
                    descriptionCta: m.intl.string(m.t.jVcuVV),
                    onClick: n,
                    previewImage: E,
                    videoUrl: h ? A.Z : O.Z
                },
                referralProgram: {
                    name: 'referralProgram',
                    title: m.intl.string(m.t.tPY4o6),
                    description: m.intl.format(m.t.jRPQUF, { learnMoreLink: g }),
                    previewImage: v.Z,
                    videoUrl: h ? b.Z : j.Z
                },
                newAppStyles: {
                    name: 'newAppStyles',
                    title: m.intl.string(m.t.XQCSrq),
                    description: m.intl.string(m.t.HC5wVV),
                    descriptionCta: m.intl.string(m.t.jVcuVV),
                    onClick: i,
                    previewImage: p,
                    videoUrl: h ? T.Z : N.Z
                }
            },
            f = {
                showYourStyle: {
                    name: 'showYourStyle',
                    title: m.intl.string(m.t.Ij3Zmp),
                    description: m.intl.string(m.t.UsOUxc),
                    descriptionCta: m.intl.string(m.t.jVcuVV),
                    previewImage: x,
                    onClick: n,
                    videoUrl: h ? R.Z : P.Z
                },
                yourSpace: {
                    name: 'yourSpace',
                    title: m.intl.string(m.t.Wme3nZ),
                    description: m.intl.string(m.t['/aAIqa']),
                    descriptionCta: m.intl.string(m.t.jVcuVV),
                    previewImage: _,
                    onClick: i,
                    videoUrl: h ? D.Z : y.Z
                }
            };
        return e ? f : C;
    };
