n.d(t, { Z: () => N });
var r = n(54381),
    i = n(473749),
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
    S = n(388032),
    A = n(313570);
function C(e) {
    let { ingress: t, guildId: n } = e,
        C = (0, m.c_)(),
        N = (0, p.q)(),
        R = h.h2.useSetting().includes(n),
        P = (0, l.LN)(),
        D = h.mX.useSetting(),
        w = h.zA.useSetting().includes(n),
        L = i.useCallback(
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
    function x(e, t) {
        u.default.track(T.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    function M(e, t) {
        if (!e && (0, _.S)())
            return void o.Z.showAgeVerificationGetStartedModal({ entryPoint: s.cU.MESSAGE_REQUESTS_SETTINGS });
        t ? L(e) : k(!e);
    }
    function k(e) {
        let t = () => {
                h.mX.updateSetting(e), h.zA.updateSetting(e ? c.Z.getGuildIds() : []), x(e, !0);
            },
            n = () => {
                h.mX.updateSetting(e), x(e, !1);
            };
        (0, b.V)({
            header: S.intl.string(S.t.yAfu1p),
            body: S.intl.string(S.t.Ry2z74),
            confirmText: S.intl.string(S.t.gm1Vej),
            cancelText: S.intl.string(S.t.p89ACt),
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
                ? (0, r.jsx)(E.ZP, {
                      title: S.intl.string(S.t["3o2ojh"]),
                      value: !N && !D,
                      onChange: (e) => M(e, !1),
                      disabled: N || P,
                      tooltipText: P ? S.intl.string(A.default["6Af/cw"]) : void 0,
                      note: S.intl.format(S.t.wkm9a3, { helpdeskArticle: d.Z.getArticleURL(T.BhN.MESSAGE_REQUESTS) }),
                  })
                : (0, r.jsx)(E.ZP, {
                      title: S.intl.string(S.t["3o2ojh"]),
                      value: !R && !w,
                      onChange: (e) => M(e, !0),
                      disabled: R,
                      note: C
                          ? S.intl.format(S.t.WpnWLc, { helpdeskArticle: d.Z.getArticleURL(T.BhN.MESSAGE_REQUESTS) })
                          : S.intl.format(S.t.wkm9a3, { helpdeskArticle: d.Z.getArticleURL(T.BhN.MESSAGE_REQUESTS) }),
                  }),
    });
}
function N(e) {
    let { ingress: t = O.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, m.is)();
    return (0, r.jsx)(C, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
