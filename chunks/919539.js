n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(430824),
    a = n(626135),
    o = n(63063),
    c = n(709054),
    d = n(88658),
    u = n(695346),
    m = n(639814),
    h = n(838436),
    g = n(51331),
    _ = n(922628),
    x = n(703115),
    p = n(526761),
    E = n(726985),
    C = n(736530),
    f = n(981631),
    T = n(388032);
function N(e) {
    let { ingress: t, guildId: n } = e,
        N = (0, m.c_)(),
        I = u.iG.useSetting(),
        S = u.h2.useSetting().includes(n),
        b = u.mX.useSetting(),
        v = u.zA.useSetting().includes(n),
        j = s.useCallback(
            (e) => {
                let i = (0, d.gl)();
                e ? i.delete(n) : i.add(n),
                    u.zA.updateSetting(Array.from(i)),
                    a.default.track(f.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: x.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    function A(e, t) {
        a.default.track(f.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    return (0, i.jsx)(h.U, {
        setting: E.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: p.FY.MESSAGE_REQUESTS_V2,
        children:
            n === C.T
                ? (0, i.jsx)(g.Z, {
                      title: T.intl.string(T.t['3o2ojo']),
                      value: !I && !b,
                      onChange: () => {
                          var e;
                          return (
                              (e = !b),
                              void (0, _.V)({
                                  header: T.intl.string(T.t.yAfu1t),
                                  body: T.intl.string(T.t['Ry2z7+']),
                                  confirmText: T.intl.string(T.t.gm1Ven),
                                  cancelText: T.intl.string(T.t.p89ACg),
                                  confirmButtonColor: r.zxk.Colors.BRAND,
                                  onConfirm: () => {
                                      u.mX.updateSetting(e), A(e, !1);
                                  },
                                  onCancel: () => {
                                      u.mX.updateSetting(e), u.zA.updateSetting(e ? c.default.keys(l.Z.getGuilds()) : []), A(e, !0);
                                  }
                              })
                          );
                      },
                      disabled: I,
                      note: T.intl.format(T.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(f.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, i.jsx)(g.Z, {
                      title: T.intl.string(T.t['3o2ojo']),
                      value: !v,
                      onChange: j,
                      disabled: S,
                      note: N ? T.intl.format(T.t.WpnWLS, { helpdeskArticle: o.Z.getArticleURL(f.BhN.MESSAGE_REQUESTS) }) : T.intl.format(T.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(f.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
function I(e) {
    let { ingress: t = p.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, m.is)();
    return (0, i.jsx)(N, {
        ingress: t,
        guildId: null != n ? n : s
    });
}
