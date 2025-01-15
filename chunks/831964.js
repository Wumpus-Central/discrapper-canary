n.d(t, {
    __: function () {
        return Z;
    },
    dm: function () {
        return s;
    }
});
var i,
    s,
    r = n(230711),
    a = n(100527),
    l = n(906732),
    o = n(300284),
    c = n(526167),
    d = n(63063),
    u = n(981631),
    m = n(526761),
    g = n(388032),
    h = n(509614),
    p = n(880511),
    x = n(985443),
    f = n(612253),
    _ = n(832287),
    E = n(872532),
    C = n(91342),
    T = n(181708),
    S = n(821721),
    b = n(158897),
    I = n(290650),
    N = n(751125),
    v = n(904505),
    A = n(712626),
    j = n(386014),
    R = n(845571),
    O = n(220046),
    P = n(385874),
    y = n(371000),
    D = n(377679),
    B = n(825087);
((i = s || (s = {})).NEW_APP_STYLES = 'newAppStyles'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHOW_YOUR_STYLE = 'showYourStyle'), (i.YOUR_SPACE = 'yourSpace'), (i.EMOJIS = 'emojis'), (i.NO_LIMITS = 'noLimits');
let Z = () => {
    let e = (0, c.rO)();
    return {
        emojis: {
            name: 'emojis',
            title: g.intl.string(g.t.zY5PPT),
            description: g.intl.string(g.t.R5Xag4),
            previewImage: h,
            videoUrl: e ? C.Z : T.Z,
            isCompact: !0
        },
        noLimits: {
            name: 'noLimits',
            title: g.intl.string(g.t['6b3ydH']),
            description: g.intl.string(g.t['Y+IJys']),
            previewImage: p,
            videoUrl: e ? I.Z : N.Z,
            isCompact: !0
        }
    };
};
t.ZP = (e) => {
    let { analyticsLocations: t } = (0, l.ZP)(a.Z.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, o.Z)({
            scrollPosition: m.Y_.TRY_IT_OUT,
            analyticsLocations: t
        }),
        i = () => {
            r.Z.open(u.oAB.APPEARANCE, null, {
                openWithoutBackstack: !0,
                analyticsLocations: t
            });
        },
        s = (0, c.rO)(),
        h = d.Z.getArticleURL(u.BhN.REFERRAL_PROGRAM),
        p = {
            serverProfiles: {
                name: 'serverProfiles',
                title: g.intl.string(g.t.I9TYMj),
                description: g.intl.string(g.t.HMSHeH),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                onClick: n,
                previewImage: E,
                videoUrl: s ? R.Z : O.Z
            },
            referralProgram: {
                name: 'referralProgram',
                title: g.intl.string(g.t.tPY4o6),
                description: g.intl.format(g.t.jRPQUF, { learnMoreLink: h }),
                previewImage: A.Z,
                videoUrl: s ? v.Z : j.Z
            },
            newAppStyles: {
                name: 'newAppStyles',
                title: g.intl.string(g.t.XQCSrq),
                description: g.intl.string(g.t.HC5wVV),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                onClick: i,
                previewImage: _,
                videoUrl: s ? S.Z : b.Z
            }
        },
        C = {
            showYourStyle: {
                name: 'showYourStyle',
                title: g.intl.string(g.t.Ij3Zmp),
                description: g.intl.string(g.t.UsOUxc),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: f,
                onClick: n,
                videoUrl: s ? P.Z : y.Z
            },
            yourSpace: {
                name: 'yourSpace',
                title: g.intl.string(g.t.Wme3nZ),
                description: g.intl.string(g.t['/aAIqa']),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: x,
                onClick: i,
                videoUrl: s ? D.Z : B.Z
            }
        };
    return e ? C : p;
};
