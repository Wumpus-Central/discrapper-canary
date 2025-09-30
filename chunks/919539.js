n.d(t, { Z: () => C });
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(168107),
    s = n(480916),
    l = n(915009),
    c = n(430824),
    u = n(626135),
    d = n(63063),
    f = n(88658),
    _ = n(750832),
    p = n(976978),
    h = n(695346),
    m = n(639814),
    g = n(838436),
    E = n(51331),
    b = n(922628),
    y = n(703115),
    O = n(526761),
    v = n(726985),
    I = n(736530),
    T = n(981631),
    S = n(388032);
function A(e) {
    let { ingress: t, guildId: n } = e,
        A = (0, m.c_)(),
        C = (0, p.q)(),
        N = h.h2.useSetting().includes(n),
        R = (0, l.LN)(),
        P = h.mX.useSetting(),
        w = h.zA.useSetting().includes(n),
        D = i.useCallback(
            (e) => {
                let r = (0, f.gl)();
                e ? r.delete(n) : r.add(n),
                    h.zA.updateSetting(Array.from(r)),
                    u.default.track(T.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: y.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );
    function L(e, t) {
        u.default.track(T.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    function x(e, t) {
        if ((0, _.S)())
            return void o.Z.showAgeVerificationGetStartedModal({ entryPoint: s.cU.MESSAGE_REQUESTS_SETTINGS });
        t ? D(e) : j(!e);
    }
    function j(e) {
        let t = () => {
                h.mX.updateSetting(e), h.zA.updateSetting(e ? c.Z.getGuildIds() : []), L(e, !0);
            },
            n = () => {
                h.mX.updateSetting(e), L(e, !1);
            };
        (0, b.V)({
            header: S.intl.string(S.t.yAfu1t),
            body: S.intl.string(S.t["Ry2z7+"]),
            confirmText: S.intl.string(S.t.gm1Ven),
            cancelText: S.intl.string(S.t.p89ACg),
            confirmButtonColor: a.zx.Colors.BRAND,
            onConfirm: n,
            onCancel: t,
        });
    }
    return (0, r.jsx)(g.U, {
        setting: v.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: O.FY.MESSAGE_REQUESTS_V2,
        children:
            n === I.T
                ? (0, r.jsx)(E.Z, {
                      title: S.intl.string(S.t["3o2ojo"]),
                      value: !C && !P,
                      onChange: (e) => x(e, !1),
                      disabled: C || R,
                      note: S.intl.format(S.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(T.BhN.MESSAGE_REQUESTS) }),
                  })
                : (0, r.jsx)(E.Z, {
                      title: S.intl.string(S.t["3o2ojo"]),
                      value: !w,
                      onChange: (e) => x(e, !0),
                      disabled: N,
                      note: A
                          ? S.intl.format(S.t.WpnWLS, { helpdeskArticle: d.Z.getArticleURL(T.BhN.MESSAGE_REQUESTS) })
                          : S.intl.format(S.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(T.BhN.MESSAGE_REQUESTS) }),
                  }),
    });
}
function C(e) {
    let { ingress: t = O.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, m.is)();
    return (0, r.jsx)(A, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
