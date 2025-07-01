n.d(t, { Z: () => T });
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(168107),
    a = n(480916),
    o = n(430824),
    c = n(626135),
    d = n(63063),
    u = n(88658),
    m = n(750832),
    g = n(976978),
    p = n(695346),
    h = n(639814),
    f = n(838436),
    b = n(51331),
    _ = n(922628),
    x = n(703115),
    E = n(526761),
    j = n(726985),
    C = n(736530),
    O = n(981631),
    S = n(388032);
function v(e) {
    let { ingress: t, guildId: n } = e,
        v = (0, h.c_)(),
        T = (0, g.q)(),
        N = p.h2.useSetting().includes(n),
        I = p.mX.useSetting(),
        y = p.zA.useSetting().includes(n),
        A = r.useCallback(
            (e) => {
                let i = (0, u.gl)();
                (e ? i.delete(n) : i.add(n),
                    p.zA.updateSetting(Array.from(i)),
                    c.default.track(O.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: x.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n
                    }));
            },
            [t, n]
        );
    function P(e, t) {
        c.default.track(O.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    function R(e, t) {
        var n;
        if ((0, m.SI)()) return void l.Z.showAgeVerificationGetStartedModal(a.cU.MESSAGE_REQUESTS_SETTINGS);
        t
            ? A(e)
            : ((n = !e),
              (0, _.V)({
                  header: S.intl.string(S.t.yAfu1t),
                  body: S.intl.string(S.t['Ry2z7+']),
                  confirmText: S.intl.string(S.t.gm1Ven),
                  cancelText: S.intl.string(S.t.p89ACg),
                  confirmButtonColor: s.zxk.Colors.BRAND,
                  onConfirm: () => {
                      (p.mX.updateSetting(n), P(n, !1));
                  },
                  onCancel: () => {
                      (p.mX.updateSetting(n), p.zA.updateSetting(n ? o.Z.getGuildIds() : []), P(n, !0));
                  }
              }));
    }
    return (0, i.jsx)(f.U, {
        setting: j.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: E.FY.MESSAGE_REQUESTS_V2,
        children:
            n === C.T
                ? (0, i.jsx)(b.Z, {
                      title: S.intl.string(S.t['3o2ojo']),
                      value: !T && !I,
                      onChange: (e) => R(e, !1),
                      disabled: T,
                      note: S.intl.format(S.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(O.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, i.jsx)(b.Z, {
                      title: S.intl.string(S.t['3o2ojo']),
                      value: !y,
                      onChange: (e) => R(e, !0),
                      disabled: N,
                      note: v ? S.intl.format(S.t.WpnWLS, { helpdeskArticle: d.Z.getArticleURL(O.BhN.MESSAGE_REQUESTS) }) : S.intl.format(S.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(O.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
function T(e) {
    let { ingress: t = E.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        r = (0, h.is)();
    return (0, i.jsx)(v, {
        ingress: t,
        guildId: null != n ? n : r
    });
}
