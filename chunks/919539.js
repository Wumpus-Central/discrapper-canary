n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(430824),
    l = n(626135),
    o = n(63063),
    c = n(709054),
    d = n(88658),
    u = n(695346),
    m = n(639814),
    g = n(838436),
    h = n(51331),
    p = n(922628),
    x = n(703115),
    f = n(526761),
    _ = n(726985),
    E = n(736530),
    C = n(981631),
    T = n(388032);
function S(e) {
    let { ingress: t, guildId: n } = e,
        S = (0, m.c_)(),
        b = u.iG.useSetting(),
        I = u.h2.useSetting().includes(n),
        N = u.mX.useSetting(),
        v = u.zA.useSetting().includes(n),
        A = r.useCallback(
            (e) => {
                let i = (0, d.gl)();
                e ? i.delete(n) : i.add(n),
                    u.zA.updateSetting(Array.from(i)),
                    l.default.track(C.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: x.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    function j(e, t) {
        l.default.track(C.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    return (0, i.jsx)(g.U, {
        setting: _.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: f.FY.MESSAGE_REQUESTS_V2,
        children:
            n === E.T
                ? (0, i.jsx)(h.Z, {
                      title: T.intl.string(T.t['3o2ojo']),
                      value: !b && !N,
                      onChange: () => {
                          var e;
                          return (
                              (e = !N),
                              void (0, p.V)({
                                  header: T.intl.string(T.t.yAfu1t),
                                  body: T.intl.string(T.t['Ry2z7+']),
                                  confirmText: T.intl.string(T.t.gm1Ven),
                                  cancelText: T.intl.string(T.t.p89ACg),
                                  confirmButtonColor: s.Button.Colors.BRAND,
                                  onConfirm: () => {
                                      u.mX.updateSetting(e), j(e, !1);
                                  },
                                  onCancel: () => {
                                      u.mX.updateSetting(e), u.zA.updateSetting(e ? c.default.keys(a.Z.getGuilds()) : []), j(e, !0);
                                  }
                              })
                          );
                      },
                      disabled: b,
                      note: T.intl.format(T.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, i.jsx)(h.Z, {
                      title: T.intl.string(T.t['3o2ojo']),
                      value: !v,
                      onChange: A,
                      disabled: I,
                      note: S ? T.intl.format(T.t.WpnWLS, { helpdeskArticle: o.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) }) : T.intl.format(T.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
function b(e) {
    let { ingress: t = f.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        r = (0, m.is)();
    return (0, i.jsx)(S, {
        ingress: t,
        guildId: null != n ? n : r
    });
}
