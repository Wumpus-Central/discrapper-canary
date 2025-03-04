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
    C = n(736530),
    O = n(981631),
    v = n(388032);
function S(e) {
    let { ingress: t, guildId: n } = e,
        S = (0, f.c_)(),
        T = (0, p.q)(),
        I = h.h2.useSetting().includes(n),
        y = h.mX.useSetting(),
        A = h.zA.useSetting().includes(n),
        P = i.useCallback(
            (e) => {
                let r = (0, m.gl)();
                e ? r.delete(n) : r.add(n),
                    h.zA.updateSetting(Array.from(r)),
                    c.default.track(O.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    function R(e, t) {
        c.default.track(O.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    function D(e, t) {
        var n;
        if ((0, g.SI)()) {
            a.Z.showAgeVerificationGetStartedModal(l.cU.MESSAGE_REQUESTS_SETTINGS);
            return;
        }
        t
            ? P(e)
            : ((n = !e),
              (0, x.V)({
                  header: v.NW.string(v.t.yAfu1t),
                  body: v.NW.string(v.t['Ry2z7+']),
                  confirmText: v.NW.string(v.t.gm1Ven),
                  cancelText: v.NW.string(v.t.p89ACg),
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
            n === C.T
                ? (0, r.jsx)(N.Z, {
                      title: v.NW.string(v.t['3o2ojo']),
                      value: !T && !y,
                      onChange: (e) => D(e, !1),
                      disabled: T,
                      note: v.NW.format(v.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(O.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, r.jsx)(N.Z, {
                      title: v.NW.string(v.t['3o2ojo']),
                      value: !A,
                      onChange: (e) => D(e, !0),
                      disabled: I,
                      note: S ? v.NW.format(v.t.WpnWLS, { helpdeskArticle: d.Z.getArticleURL(O.BhN.MESSAGE_REQUESTS) }) : v.NW.format(v.t.wkm9a2, { helpdeskArticle: d.Z.getArticleURL(O.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
function T(e) {
    let { ingress: t = E.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, f.is)();
    return (0, r.jsx)(S, {
        ingress: t,
        guildId: null != n ? n : i
    });
}
