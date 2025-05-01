n.d(t, { Z: () => I }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(168107),
    a = n(480916),
    o = n(430824),
    c = n(626135),
    d = n(63063),
    u = n(709054),
    m = n(88658),
    p = n(750832),
    g = n(976978),
    h = n(695346),
    f = n(639814),
    b = n(838436),
    _ = n(51331),
    x = n(922628),
    E = n(703115),
    j = n(526761),
    C = n(726985),
    O = n(736530),
    S = n(981631),
    v = n(388032);
function T(e) {
    let { ingress: t, guildId: n } = e,
        T = (0, f.c_)(),
        I = (0, g.q)(),
        N = h.h2.useSetting().includes(n),
        y = h.mX.useSetting(),
        A = h.zA.useSetting().includes(n),
        P = r.useCallback(
            (e) => {
                let i = (0, m.gl)();
                e ? i.delete(n) : i.add(n),
                    h.zA.updateSetting(Array.from(i)),
                    c.default.track(S.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: E.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    function R(e, t) {
        c.default.track(S.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    function D(e, t) {
        var n;
        if ((0, p.SI)()) return void l.Z.showAgeVerificationGetStartedModal(a.cU.MESSAGE_REQUESTS_SETTINGS);
        t
            ? P(e)
            : ((n = !e),
              (0, x.V)({
                  header: v.intl.string(v.t.yAfu1t),
                  body: v.intl.string(v.t['Ry2z7+']),
                  confirmText: v.intl.string(v.t.gm1Ven),
                  cancelText: v.intl.string(v.t.p89ACg),
                  confirmButtonColor: s.zxk.Colors.BRAND,
                  onConfirm: () => {
                      h.mX.updateSetting(n), R(n, !1);
                  },
                  onCancel: () => {
                      h.mX.updateSetting(n), h.zA.updateSetting(n ? u.default.keys(o.Z.getGuilds()) : []), R(n, !0);
                  }
              }));
    }
    return (0, i.jsx)(b.U, {
        setting: C.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: j.FY.MESSAGE_REQUESTS_V2,
        children:
            n === O.T
                ? (0, i.jsx)(_.Z, {
                      title: v.intl.string(v.t['3o2ojo']),
                      value: !I && !y,
                      onChange: (e) => D(e, !1),
                      disabled: I,
                      note: v.intl.format(v.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(S.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, i.jsx)(_.Z, {
                      title: v.intl.string(v.t['3o2ojo']),
                      value: !A,
                      onChange: (e) => D(e, !0),
                      disabled: N,
                      note: T ? v.intl.format(v.t.WpnWLS, { helpdeskArticle: d.Z.getArticleURL(S.BhN.MESSAGE_REQUESTS) }) : v.intl.format(v.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(S.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
function I(e) {
    let { ingress: t = j.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        r = (0, f.is)();
    return (0, i.jsx)(T, {
        ingress: t,
        guildId: null != n ? n : r
    });
}
