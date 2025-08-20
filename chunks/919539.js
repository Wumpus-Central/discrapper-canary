n.d(t, { Z: () => A });
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(168107),
    s = n(480916),
    l = n(430824),
    c = n(626135),
    u = n(63063),
    d = n(88658),
    f = n(750832),
    _ = n(976978),
    p = n(695346),
    h = n(639814),
    m = n(838436),
    g = n(51331),
    E = n(922628),
    b = n(703115),
    y = n(526761),
    O = n(726985),
    v = n(736530),
    I = n(981631),
    T = n(388032);
function S(e) {
    let { ingress: t, guildId: n } = e,
        S = (0, h.c_)(),
        A = (0, _.q)(),
        C = p.h2.useSetting().includes(n),
        N = p.mX.useSetting(),
        R = p.zA.useSetting().includes(n),
        P = i.useCallback(
            (e) => {
                let r = (0, d.gl)();
                e ? r.delete(n) : r.add(n),
                    p.zA.updateSetting(Array.from(r)),
                    c.default.track(I.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: b.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );
    function w(e, t) {
        c.default.track(I.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    function D(e, t) {
        if ((0, f.SI)()) return void o.Z.showAgeVerificationGetStartedModal(s.cU.MESSAGE_REQUESTS_SETTINGS);
        t ? P(e) : x(!e);
    }
    function x(e) {
        let t = () => {
                p.mX.updateSetting(e), p.zA.updateSetting(e ? l.Z.getGuildIds() : []), w(e, !0);
            },
            n = () => {
                p.mX.updateSetting(e), w(e, !1);
            };
        (0, E.V)({
            header: T.intl.string(T.t.yAfu1t),
            body: T.intl.string(T.t["Ry2z7+"]),
            confirmText: T.intl.string(T.t.gm1Ven),
            cancelText: T.intl.string(T.t.p89ACg),
            confirmButtonColor: a.zx.Colors.BRAND,
            onConfirm: n,
            onCancel: t,
        });
    }
    return (0, r.jsx)(m.U, {
        setting: O.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: y.FY.MESSAGE_REQUESTS_V2,
        children:
            n === v.T
                ? (0, r.jsx)(g.Z, {
                      title: T.intl.string(T.t["3o2ojo"]),
                      value: !A && !N,
                      onChange: (e) => D(e, !1),
                      disabled: A,
                      note: T.intl.format(T.t.wkm9a2, { helpdeskArticle: u.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS) }),
                  })
                : (0, r.jsx)(g.Z, {
                      title: T.intl.string(T.t["3o2ojo"]),
                      value: !R,
                      onChange: (e) => D(e, !0),
                      disabled: C,
                      note: S
                          ? T.intl.format(T.t.WpnWLS, { helpdeskArticle: u.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS) })
                          : T.intl.format(T.t.wkm9a2, { helpdeskArticle: u.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS) }),
                  }),
    });
}
function A(e) {
    let { ingress: t = y.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, h.is)();
    return (0, r.jsx)(S, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
