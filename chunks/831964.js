n.d(t, {
    __: function () {
        return y;
    },
    dm: function () {
        return r;
    }
});
var i,
    r,
    a = n(230711),
    s = n(100527),
    l = n(906732),
    o = n(300284),
    c = n(526167),
    d = n(63063),
    u = n(981631),
    g = n(526761),
    m = n(388032),
    f = n(509614),
    p = n(880511),
    _ = n(985443),
    h = n(612253),
    x = n(832287),
    E = n(872532),
    b = n(91342),
    C = n(181708),
    v = n(821721),
    T = n(158897),
    N = n(290650),
    I = n(751125),
    S = n(904505),
    R = n(712626),
    j = n(386014),
    A = n(845571),
    P = n(220046),
    O = n(385874),
    Z = n(371000),
    M = n(377679),
    B = n(825087);
((i = r || (r = {})).NEW_APP_STYLES = 'newAppStyles'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHOW_YOUR_STYLE = 'showYourStyle'), (i.YOUR_SPACE = 'yourSpace'), (i.EMOJIS = 'emojis'), (i.NO_LIMITS = 'noLimits');
let y = () => {
    let e = (0, c.rO)();
    return {
        emojis: {
            name: 'emojis',
            title: m.intl.string(m.t.zY5PPT),
            description: m.intl.string(m.t.R5Xag4),
            previewImage: f,
            videoUrl: e ? b.Z : C.Z,
            isCompact: !0
        },
        noLimits: {
            name: 'noLimits',
            title: m.intl.string(m.t['6b3ydH']),
            description: m.intl.string(m.t['Y+IJys']),
            previewImage: p,
            videoUrl: e ? N.Z : I.Z,
            isCompact: !0
        }
    };
};
t.ZP = (e) => {
    let { analyticsLocations: t } = (0, l.ZP)(s.Z.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, o.Z)({
            scrollPosition: g.Y_.TRY_IT_OUT,
            analyticsLocations: t
        }),
        i = () => {
            a.Z.open(u.oAB.APPEARANCE, null, {
                openWithoutBackstack: !0,
                analyticsLocations: t
            });
        },
        r = (0, c.rO)(),
        f = d.Z.getArticleURL(u.BhN.REFERRAL_PROGRAM),
        p = {
            serverProfiles: {
                name: 'serverProfiles',
                title: m.intl.string(m.t.I9TYMj),
                description: m.intl.string(m.t.HMSHeH),
                descriptionCta: m.intl.string(m.t.jVcuVV),
                onClick: n,
                previewImage: E,
                videoUrl: r ? A.Z : P.Z
            },
            referralProgram: {
                name: 'referralProgram',
                title: m.intl.string(m.t.tPY4o6),
                description: m.intl.format(m.t.jRPQUF, { learnMoreLink: f }),
                previewImage: R.Z,
                videoUrl: r ? S.Z : j.Z
            },
            newAppStyles: {
                name: 'newAppStyles',
                title: m.intl.string(m.t.XQCSrq),
                description: m.intl.string(m.t.HC5wVV),
                descriptionCta: m.intl.string(m.t.jVcuVV),
                onClick: i,
                previewImage: x,
                videoUrl: r ? v.Z : T.Z
            }
        },
        b = {
            showYourStyle: {
                name: 'showYourStyle',
                title: m.intl.string(m.t.Ij3Zmp),
                description: m.intl.string(m.t.UsOUxc),
                descriptionCta: m.intl.string(m.t.jVcuVV),
                previewImage: h,
                onClick: n,
                videoUrl: r ? O.Z : Z.Z
            },
            yourSpace: {
                name: 'yourSpace',
                title: m.intl.string(m.t.Wme3nZ),
                description: m.intl.string(m.t['/aAIqa']),
                descriptionCta: m.intl.string(m.t.jVcuVV),
                previewImage: _,
                onClick: i,
                videoUrl: r ? M.Z : B.Z
            }
        };
    return e ? b : p;
};
