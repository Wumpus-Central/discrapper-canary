n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(430824),
    l = n(626135),
    o = n(63063),
    c = n(709054),
    d = n(88658),
    u = n(750832),
    m = n(976978),
    g = n(695346),
    p = n(639814),
    h = n(838436),
    f = n(51331),
    b = n(922628),
    N = n(703115),
    x = n(526761),
    _ = n(726985),
    E = n(736530),
    j = n(981631),
    C = n(388032);
function O(e) {
    let { ingress: t, guildId: n } = e,
        O = (0, p.c_)(),
        v = (0, m.q)(),
        S = g.h2.useSetting().includes(n),
        T = g.mX.useSetting(),
        I = g.zA.useSetting().includes(n),
        y = i.useCallback(
            (e) => {
                let r = (0, d.gl)();
                e ? r.delete(n) : r.add(n),
                    g.zA.updateSetting(Array.from(r)),
                    l.default.track(j.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: N.Y.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [t, n]
        );
    function A(e, t) {
        l.default.track(j.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    function P(e, t) {
        if (!(0, u.Ep)('handleMessageRequestChange')) {
            var n;
            t
                ? y(e)
                : ((n = !e),
                  (0, b.V)({
                      header: C.NW.string(C.t.yAfu1t),
                      body: C.NW.string(C.t['Ry2z7+']),
                      confirmText: C.NW.string(C.t.gm1Ven),
                      cancelText: C.NW.string(C.t.p89ACg),
                      confirmButtonColor: s.zxk.Colors.BRAND,
                      onConfirm: () => {
                          g.mX.updateSetting(n), A(n, !1);
                      },
                      onCancel: () => {
                          g.mX.updateSetting(n), g.zA.updateSetting(n ? c.default.keys(a.Z.getGuilds()) : []), A(n, !0);
                      }
                  }));
        }
    }
    return (0, r.jsx)(h.U, {
        setting: _.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: x.FY.MESSAGE_REQUESTS_V2,
        children:
            n === E.T
                ? (0, r.jsx)(f.Z, {
                      title: C.NW.string(C.t['3o2ojo']),
                      value: !v && !T,
                      onChange: (e) => P(e, !1),
                      disabled: v,
                      note: C.NW.format(C.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(j.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, r.jsx)(f.Z, {
                      title: C.NW.string(C.t['3o2ojo']),
                      value: !I,
                      onChange: (e) => P(e, !0),
                      disabled: S,
                      note: O ? C.NW.format(C.t.WpnWLS, { helpdeskArticle: o.Z.getArticleURL(j.BhN.MESSAGE_REQUESTS) }) : C.NW.format(C.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(j.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
function v(e) {
    let { ingress: t = x.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, p.is)();
    return (0, r.jsx)(O, {
        ingress: t,
        guildId: null != n ? n : i
    });
}
