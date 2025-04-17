n.d(t, {
    ZP: () => Z,
    __: () => D,
    dm: () => R
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
    b = n(872532),
    _ = n(91342),
    N = n(181708),
    x = n(290650),
    E = n(751125),
    j = n(357003),
    C = n(904505),
    O = n(712626),
    S = n(386014),
    v = n(845571),
    T = n(220046),
    I = n(385874),
    y = n(371000),
    A = n(377679),
    P = n(825087),
    R = (((r = {}).NEW_APP_STYLES = 'newAppStyles'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHOW_YOUR_STYLE = 'showYourStyle'), (r.YOUR_SPACE = 'yourSpace'), (r.EMOJIS = 'emojis'), (r.NO_LIMITS = 'noLimits'), (r.PERMADECOS = 'permadecos'), r);
let D = () => {
        let e = (0, o.rO)();
        return {
            emojis: {
                name: 'emojis',
                title: m.NW.string(m.t.zY5PPT),
                description: m.NW.string(m.t.R5Xag4),
                previewImage: g,
                videoUrl: e ? _.ZP : N.ZP,
                isCompact: !0
            },
            noLimits: {
                name: 'noLimits',
                title: m.NW.string(m.t['6b3ydH']),
                description: m.NW.string(m.t['Y+IJys']),
                previewImage: p,
                videoUrl: e ? x.ZP : E.ZP,
                isCompact: !0
            }
        };
    },
    Z = (e) => {
        let { analyticsLocations: t } = (0, a.ZP)(s.Z.PREMIUM_MARKETING_BENTO_BOX),
            n = (0, l.Z)({
                scrollPosition: u.Y_.TRY_IT_OUT,
                analyticsLocations: t
            }),
            r = (0, o.rO)(),
            g = c.Z.getArticleURL(d.BhN.REFERRAL_PROGRAM),
            p = {
                permadecos: {
                    name: 'permadecos',
                    title: m.NW.string(m.t['57ngoq']),
                    description: m.NW.string(m.t.piFFjY),
                    descriptionCta: m.NW.string(m.t.jVcuVV),
                    previewImage: j.Z,
                    onClick: n,
                    videoUrl: j.Z
                },
                serverProfiles: {
                    name: 'serverProfiles',
                    title: m.NW.string(m.t.I9TYMj),
                    description: m.NW.string(m.t.HMSHeH),
                    descriptionCta: m.NW.string(m.t.jVcuVV),
                    onClick: n,
                    previewImage: b,
                    videoUrl: r ? v.ZP : T.ZP
                },
                referralProgram: {
                    name: 'referralProgram',
                    title: m.NW.string(m.t.tPY4o6),
                    description: m.NW.format(m.t.jRPQUF, { learnMoreLink: g }),
                    previewImage: O.Z,
                    videoUrl: r ? C.ZP : S.ZP
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
                    videoUrl: r ? I.Z : y.Z
                },
                yourSpace: {
                    name: 'yourSpace',
                    title: m.NW.string(m.t.Wme3nZ),
                    description: m.NW.string(m.t['/aAIqa']),
                    descriptionCta: m.NW.string(m.t.jVcuVV),
                    previewImage: h,
                    onClick: () => {
                        i.Z.open(d.oAB.APPEARANCE, null, {
                            openWithoutBackstack: !0,
                            analyticsLocations: t
                        });
                    },
                    videoUrl: r ? A.Z : P.Z
                }
            };
        return e ? _ : p;
    };
