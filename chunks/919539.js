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
    p = n(750832),
    _ = n(976978),
    m = n(695346),
    h = n(639814),
    g = n(838436),
    E = n(51331),
    b = n(922628),
    y = n(703115),
    O = n(526761),
    v = n(726985),
    S = n(736530),
    I = n(981631),
    T = n(388032),
    A = n(744038);
function C(e) {
    let { ingress: t, guildId: n } = e,
        C = (0, h.c_)(),
        N = (0, _.q)(),
        P = m.h2.useSetting().includes(n),
        R = (0, l.LN)(),
        w = m.mX.useSetting(),
        D = m.zA.useSetting().includes(n),
        x = i.useCallback(
            (e) => {
                let r = (0, f.gl)();
                e ? r.delete(n) : r.add(n),
                    m.zA.updateSetting(Array.from(r)),
                    u.default.track(I.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: y.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [t, n],
        );
    function L(e, t) {
        u.default.track(I.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    function j(e, t) {
        if (!e && (0, p.S)())
            return void o.Z.showAgeVerificationGetStartedModal({ entryPoint: s.cU.MESSAGE_REQUESTS_SETTINGS });
        t ? x(e) : M(!e);
    }
    function M(e) {
        let t = () => {
                m.mX.updateSetting(e), m.zA.updateSetting(e ? c.Z.getGuildIds() : []), L(e, !0);
            },
            n = () => {
                m.mX.updateSetting(e), L(e, !1);
            };
        (0, b.V)({
            header: T.intl.string(T.t.yAfu1p),
            body: T.intl.string(T.t.Ry2z74),
            confirmText: T.intl.string(T.t.gm1Vej),
            cancelText: T.intl.string(T.t.p89ACt),
            confirmButtonColor: a.zx.Colors.BRAND,
            onConfirm: n,
            onCancel: t,
        });
    }
    return (0, r.jsx)(g.U, {
        setting: v.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: O.FY.MESSAGE_REQUESTS_V2,
        children:
            n === S.T
                ? (0, r.jsx)(E.ZP, {
                      title: T.intl.string(T.t["3o2ojh"]),
                      value: !N && !w,
                      onChange: (e) => j(e, !1),
                      disabled: N || R,
                      tooltipText: R ? T.intl.string(A.default["6Af/cw"]) : void 0,
                      note: T.intl.format(T.t.wkm9a3, { helpdeskArticle: d.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS) }),
                  })
                : (0, r.jsx)(E.ZP, {
                      title: T.intl.string(T.t["3o2ojh"]),
                      value: !P && !D,
                      onChange: (e) => j(e, !0),
                      disabled: P,
                      note: C
                          ? T.intl.format(T.t.WpnWLc, { helpdeskArticle: d.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS) })
                          : T.intl.format(T.t.wkm9a3, { helpdeskArticle: d.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS) }),
                  }),
    });
}
function N(e) {
    let { ingress: t = O.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, h.is)();
    return (0, r.jsx)(C, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
