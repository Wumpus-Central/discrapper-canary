n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(191237),
    l = n(430824),
    o = n(626135),
    c = n(63063),
    d = n(709054),
    u = n(88658),
    m = n(750832),
    g = n(976978),
    p = n(695346),
    h = n(639814),
    f = n(838436),
    b = n(51331),
    N = n(922628),
    x = n(703115),
    _ = n(526761),
    E = n(726985),
    j = n(736530),
    C = n(981631),
    O = n(388032);
function v(e) {
    let { ingress: t, guildId: n } = e,
        v = (0, h.c_)(),
        S = (0, g.q)(),
        T = p.h2.useSetting().includes(n),
        I = p.mX.useSetting(),
        y = p.zA.useSetting().includes(n),
        A = i.useCallback(
            (e) => {
                let r = (0, u.gl)();
                e ? r.delete(n) : r.add(n),
                    p.zA.updateSetting(Array.from(r)),
                    o.default.track(C.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: x.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    function P(e, t) {
        o.default.track(C.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    function R(e, t) {
        var n;
        if ((0, m.SI)()) {
            a.Z.showAgeVerificationGetStartedModal();
            return;
        }
        t
            ? A(e)
            : ((n = !e),
              (0, N.V)({
                  header: O.NW.string(O.t.yAfu1t),
                  body: O.NW.string(O.t['Ry2z7+']),
                  confirmText: O.NW.string(O.t.gm1Ven),
                  cancelText: O.NW.string(O.t.p89ACg),
                  confirmButtonColor: s.zxk.Colors.BRAND,
                  onConfirm: () => {
                      p.mX.updateSetting(n), P(n, !1);
                  },
                  onCancel: () => {
                      p.mX.updateSetting(n), p.zA.updateSetting(n ? d.default.keys(l.Z.getGuilds()) : []), P(n, !0);
                  }
              }));
    }
    return (0, r.jsx)(f.U, {
        setting: E.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: _.FY.MESSAGE_REQUESTS_V2,
        children:
            n === j.T
                ? (0, r.jsx)(b.Z, {
                      title: O.NW.string(O.t['3o2ojo']),
                      value: !S && !I,
                      onChange: (e) => R(e, !1),
                      disabled: S,
                      note: O.NW.format(O.t.wkm9a2, { helpdeskArticle: c.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, r.jsx)(b.Z, {
                      title: O.NW.string(O.t['3o2ojo']),
                      value: !y,
                      onChange: (e) => R(e, !0),
                      disabled: T,
                      note: v ? O.NW.format(O.t.WpnWLS, { helpdeskArticle: c.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) }) : O.NW.format(O.t.wkm9a2, { helpdeskArticle: c.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
function S(e) {
    let { ingress: t = _.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, h.is)();
    return (0, r.jsx)(v, {
        ingress: t,
        guildId: null != n ? n : i
    });
}
