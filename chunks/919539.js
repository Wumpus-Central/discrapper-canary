n.d(t, { Z: () => T });
var i = n(255367),
    r = n(73800),
    s = n(755721),
    a = n(168107),
    l = n(480916),
    o = n(430824),
    c = n(626135),
    d = n(63063),
    u = n(88658),
    m = n(750832),
    p = n(976978),
    g = n(695346),
    h = n(639814),
    f = n(838436),
    b = n(51331),
    x = n(922628),
    _ = n(703115),
    j = n(526761),
    C = n(726985),
    O = n(736530),
    E = n(981631),
    v = n(388032);
function S(e) {
    let { ingress: t, guildId: n } = e,
        S = (0, h.c_)(),
        T = (0, p.q)(),
        N = g.h2.useSetting().includes(n),
        I = g.mX.useSetting(),
        y = g.zA.useSetting().includes(n),
        A = r.useCallback(
            (e) => {
                let i = (0, u.gl)();
                (e ? i.delete(n) : i.add(n),
                    g.zA.updateSetting(Array.from(i)),
                    c.default.track(E.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n
                    }));
            },
            [t, n]
        );
    function P(e, t) {
        c.default.track(E.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    function R(e, t) {
        var n;
        if ((0, m.SI)()) return void a.Z.showAgeVerificationGetStartedModal(l.cU.MESSAGE_REQUESTS_SETTINGS);
        t
            ? A(e)
            : ((n = !e),
              (0, x.V)({
                  header: v.intl.string(v.t.yAfu1t),
                  body: v.intl.string(v.t['Ry2z7+']),
                  confirmText: v.intl.string(v.t.gm1Ven),
                  cancelText: v.intl.string(v.t.p89ACg),
                  confirmButtonColor: s.zx.Colors.BRAND,
                  onConfirm: () => {
                      (g.mX.updateSetting(n), P(n, !1));
                  },
                  onCancel: () => {
                      (g.mX.updateSetting(n), g.zA.updateSetting(n ? o.Z.getGuildIds() : []), P(n, !0));
                  }
              }));
    }
    return (0, i.jsx)(f.U, {
        setting: C.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: j.FY.MESSAGE_REQUESTS_V2,
        children:
            n === O.T
                ? (0, i.jsx)(b.Z, {
                      title: v.intl.string(v.t['3o2ojo']),
                      value: !T && !I,
                      onChange: (e) => R(e, !1),
                      disabled: T,
                      note: v.intl.format(v.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(E.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, i.jsx)(b.Z, {
                      title: v.intl.string(v.t['3o2ojo']),
                      value: !y,
                      onChange: (e) => R(e, !0),
                      disabled: N,
                      note: S ? v.intl.format(v.t.WpnWLS, { helpdeskArticle: d.Z.getArticleURL(E.BhN.MESSAGE_REQUESTS) }) : v.intl.format(v.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(E.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
function T(e) {
    let { ingress: t = j.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        r = (0, h.is)();
    return (0, i.jsx)(S, {
        ingress: t,
        guildId: null != n ? n : r
    });
}
