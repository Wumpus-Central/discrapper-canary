n.d(t, {
    ZP: () => B,
    __: () => L,
    dm: () => W
});
var r,
    i = n(230711),
    s = n(100527),
    a = n(906732),
    l = n(300284),
    o = n(526167),
    c = n(63063),
    d = n(781320),
    u = n(981631),
    m = n(526761),
    g = n(388032),
    p = n(509614),
    h = n(880511),
    f = n(985443),
    b = n(612253),
    N = n(832287),
    x = n(872532),
    _ = n(91342),
    E = n(181708),
    j = n(821721),
    O = n(158897),
    C = n(290650),
    S = n(751125),
    v = n(357003),
    T = n(904505),
    I = n(712626),
    y = n(386014),
    A = n(845571),
    P = n(220046),
    R = n(385874),
    D = n(371000),
    Z = n(377679),
    w = n(825087);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
var W = (((r = {}).NEW_APP_STYLES = 'newAppStyles'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHOW_YOUR_STYLE = 'showYourStyle'), (r.YOUR_SPACE = 'yourSpace'), (r.EMOJIS = 'emojis'), (r.NO_LIMITS = 'noLimits'), (r.PERMADECOS = 'permadecos'), r);
let L = () => {
        let e = (0, o.rO)();
        return {
            emojis: {
                name: 'emojis',
                title: g.NW.string(g.t.zY5PPT),
                description: g.NW.string(g.t.R5Xag4),
                previewImage: p,
                videoUrl: e ? _.ZP : E.ZP,
                isCompact: !0
            },
            noLimits: {
                name: 'noLimits',
                title: g.NW.string(g.t['6b3ydH']),
                description: g.NW.string(g.t['Y+IJys']),
                previewImage: h,
                videoUrl: e ? C.ZP : S.ZP,
                isCompact: !0
            }
        };
    },
    B = (e) => {
        var t, n;
        let { analyticsLocations: r } = (0, a.ZP)(s.Z.PREMIUM_MARKETING_BENTO_BOX),
            p = (0, l.Z)({
                scrollPosition: m.Y_.TRY_IT_OUT,
                analyticsLocations: r
            }),
            h = () => {
                i.Z.open(u.oAB.APPEARANCE, null, {
                    openWithoutBackstack: !0,
                    analyticsLocations: r
                });
            },
            _ = (0, d.r)({ location: 'WhatsNewBentoBoxes' }).enabled,
            E = (0, o.rO)(),
            C = c.Z.getArticleURL(u.BhN.REFERRAL_PROGRAM),
            S = k(
                ((t = k(
                    {},
                    _ && {
                        permadecos: {
                            name: 'permadecos',
                            title: g.NW.string(g.t['57ngoq']),
                            description: g.NW.string(g.t.piFFjY),
                            descriptionCta: g.NW.string(g.t.jVcuVV),
                            previewImage: v.Z,
                            onClick: p,
                            videoUrl: v.Z
                        }
                    }
                )),
                (n = n =
                    {
                        serverProfiles: {
                            name: 'serverProfiles',
                            title: g.NW.string(g.t.I9TYMj),
                            description: g.NW.string(g.t.HMSHeH),
                            descriptionCta: g.NW.string(g.t.jVcuVV),
                            onClick: p,
                            previewImage: x,
                            videoUrl: E ? A.ZP : P.ZP
                        },
                        referralProgram: {
                            name: 'referralProgram',
                            title: g.NW.string(g.t.tPY4o6),
                            description: g.NW.format(g.t.jRPQUF, { learnMoreLink: C }),
                            previewImage: I.Z,
                            videoUrl: E ? T.ZP : y.ZP
                        }
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
                !_ && {
                    newAppStyles: {
                        name: 'newAppStyles',
                        title: g.NW.string(g.t.XQCSrq),
                        description: g.NW.string(g.t.HC5wVV),
                        descriptionCta: g.NW.string(g.t.jVcuVV),
                        onClick: h,
                        previewImage: N,
                        videoUrl: E ? j.ZP : O.ZP
                    }
                }
            ),
            W = {
                showYourStyle: {
                    name: 'showYourStyle',
                    title: g.NW.string(g.t.Ij3Zmp),
                    description: g.NW.string(g.t.UsOUxc),
                    descriptionCta: g.NW.string(g.t.jVcuVV),
                    previewImage: b,
                    onClick: p,
                    videoUrl: E ? R.Z : D.Z
                },
                yourSpace: {
                    name: 'yourSpace',
                    title: g.NW.string(g.t.Wme3nZ),
                    description: g.NW.string(g.t['/aAIqa']),
                    descriptionCta: g.NW.string(g.t.jVcuVV),
                    previewImage: f,
                    onClick: h,
                    videoUrl: E ? Z.Z : w.Z
                }
            };
        return e ? W : S;
    };
