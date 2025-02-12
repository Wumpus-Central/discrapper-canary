n.d(t, { Z: () => j }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(430824),
    a = n(626135),
    o = n(63063),
    c = n(709054),
    d = n(88658),
    u = n(750832),
    h = n(976978),
    m = n(695346),
    g = n(639814),
    x = n(838436),
    _ = n(51331),
    p = n(922628),
    E = n(703115),
    C = n(526761),
    f = n(726985),
    N = n(736530),
    I = n(981631),
    T = n(388032);
function S(e) {
    let { ingress: t, guildId: n } = e,
        S = (0, g.c_)(),
        j = (0, h.q)(),
        v = m.h2.useSetting().includes(n),
        b = m.mX.useSetting(),
        A = m.zA.useSetting().includes(n),
        O = s.useCallback(
            (e) => {
                let i = (0, d.gl)();
                e ? i.delete(n) : i.add(n),
                    m.zA.updateSetting(Array.from(i)),
                    a.default.track(I.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: E.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    function R(e, t) {
        a.default.track(I.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    function D(e, t) {
        if (!(0, u.Ep)('handleMessageRequestChange')) {
            var n;
            t
                ? O(e)
                : ((n = !e),
                  (0, p.V)({
                      header: T.intl.string(T.t.yAfu1t),
                      body: T.intl.string(T.t['Ry2z7+']),
                      confirmText: T.intl.string(T.t.gm1Ven),
                      cancelText: T.intl.string(T.t.p89ACg),
                      confirmButtonColor: l.zxk.Colors.BRAND,
                      onConfirm: () => {
                          m.mX.updateSetting(n), R(n, !1);
                      },
                      onCancel: () => {
                          m.mX.updateSetting(n), m.zA.updateSetting(n ? c.default.keys(r.Z.getGuilds()) : []), R(n, !0);
                      }
                  }));
        }
    }
    return (0, i.jsx)(x.U, {
        setting: f.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: C.FY.MESSAGE_REQUESTS_V2,
        children:
            n === N.T
                ? (0, i.jsx)(_.Z, {
                      title: T.intl.string(T.t['3o2ojo']),
                      value: !j && !b,
                      onChange: (e) => D(e, !1),
                      disabled: j,
                      note: T.intl.format(T.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, i.jsx)(_.Z, {
                      title: T.intl.string(T.t['3o2ojo']),
                      value: !A,
                      onChange: (e) => D(e, !0),
                      disabled: v,
                      note: S ? T.intl.format(T.t.WpnWLS, { helpdeskArticle: o.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS) }) : T.intl.format(T.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(I.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
function j(e) {
    let { ingress: t = C.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, g.is)();
    return (0, i.jsx)(S, {
        ingress: t,
        guildId: null != n ? n : s
    });
}
