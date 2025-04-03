n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(168107),
    l = n(480916),
    o = n(430824),
    c = n(626135),
    d = n(63063),
    u = n(709054),
    m = n(88658),
    g = n(750832),
    p = n(976978),
    h = n(695346),
    f = n(639814),
    b = n(838436),
    N = n(51331),
    x = n(922628),
    _ = n(703115),
    E = n(526761),
    j = n(726985),
    O = n(736530),
    C = n(981631),
    S = n(388032);
function v(e) {
    let { ingress: t, guildId: n } = e,
        v = (0, f.c_)(),
        T = (0, p.q)(),
        I = h.h2.useSetting().includes(n),
        y = h.mX.useSetting(),
        A = h.zA.useSetting().includes(n),
        P = i.useCallback(
            (e) => {
                let r = (0, m.gl)();
                e ? r.delete(n) : r.add(n),
                    h.zA.updateSetting(Array.from(r)),
                    c.default.track(C.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    function R(e, t) {
        c.default.track(C.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    function D(e, t) {
        var n;
        if ((0, g.SI)()) return void a.Z.showAgeVerificationGetStartedModal(l.cU.MESSAGE_REQUESTS_SETTINGS);
        t
            ? P(e)
            : ((n = !e),
              (0, x.V)({
                  header: S.NW.string(S.t.yAfu1t),
                  body: S.NW.string(S.t['Ry2z7+']),
                  confirmText: S.NW.string(S.t.gm1Ven),
                  cancelText: S.NW.string(S.t.p89ACg),
                  confirmButtonColor: s.zxk.Colors.BRAND,
                  onConfirm: () => {
                      h.mX.updateSetting(n), R(n, !1);
                  },
                  onCancel: () => {
                      h.mX.updateSetting(n), h.zA.updateSetting(n ? u.default.keys(o.Z.getGuilds()) : []), R(n, !0);
                  }
              }));
    }
    return (0, r.jsx)(b.U, {
        setting: j.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: E.FY.MESSAGE_REQUESTS_V2,
        children:
            n === O.T
                ? (0, r.jsx)(N.Z, {
                      title: S.NW.string(S.t['3o2ojo']),
                      value: !T && !y,
                      onChange: (e) => D(e, !1),
                      disabled: T,
                      note: S.NW.format(S.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, r.jsx)(N.Z, {
                      title: S.NW.string(S.t['3o2ojo']),
                      value: !A,
                      onChange: (e) => D(e, !0),
                      disabled: I,
                      note: v ? S.NW.format(S.t.WpnWLS, { helpdeskArticle: d.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) }) : S.NW.format(S.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
function T(e) {
    let { ingress: t = E.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, f.is)();
    return (0, r.jsx)(v, {
        ingress: t,
        guildId: null != n ? n : i
    });
}
