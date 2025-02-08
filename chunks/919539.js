n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(430824),
    a = n(626135),
    o = n(63063),
    c = n(709054),
    d = n(88658),
    u = n(750832),
    m = n(976978),
    g = n(695346),
    h = n(639814),
    x = n(838436),
    _ = n(51331),
    p = n(922628),
    E = n(703115),
    C = n(526761),
    f = n(726985),
    T = n(736530),
    N = n(981631),
    I = n(388032);
function S(e) {
    let { ingress: t, guildId: n } = e,
        S = (0, h.c_)(),
        b = (0, m.q)(),
        v = g.h2.useSetting().includes(n),
        j = g.mX.useSetting(),
        A = g.zA.useSetting().includes(n),
        O = s.useCallback(
            (e) => {
                let i = (0, d.gl)();
                e ? i.delete(n) : i.add(n),
                    g.zA.updateSetting(Array.from(i)),
                    a.default.track(N.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: E.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    function R(e, t) {
        a.default.track(N.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    function P(e, t) {
        if (!(0, u.Ep)('handleMessageRequestChange')) {
            var n;
            t
                ? O(e)
                : ((n = !e),
                  (0, p.V)({
                      header: I.intl.string(I.t.yAfu1t),
                      body: I.intl.string(I.t['Ry2z7+']),
                      confirmText: I.intl.string(I.t.gm1Ven),
                      cancelText: I.intl.string(I.t.p89ACg),
                      confirmButtonColor: r.zxk.Colors.BRAND,
                      onConfirm: () => {
                          g.mX.updateSetting(n), R(n, !1);
                      },
                      onCancel: () => {
                          g.mX.updateSetting(n), g.zA.updateSetting(n ? c.default.keys(l.Z.getGuilds()) : []), R(n, !0);
                      }
                  }));
        }
    }
    return (0, i.jsx)(x.U, {
        setting: f.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: C.FY.MESSAGE_REQUESTS_V2,
        children:
            n === T.T
                ? (0, i.jsx)(_.Z, {
                      title: I.intl.string(I.t['3o2ojo']),
                      value: !b && !j,
                      onChange: (e) => P(e, !1),
                      disabled: b,
                      note: I.intl.format(I.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(N.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, i.jsx)(_.Z, {
                      title: I.intl.string(I.t['3o2ojo']),
                      value: !A,
                      onChange: (e) => P(e, !0),
                      disabled: v,
                      note: S ? I.intl.format(I.t.WpnWLS, { helpdeskArticle: o.Z.getArticleURL(N.BhN.MESSAGE_REQUESTS) }) : I.intl.format(I.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(N.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
function b(e) {
    let { ingress: t = C.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, h.is)();
    return (0, i.jsx)(S, {
        ingress: t,
        guildId: null != n ? n : s
    });
}
