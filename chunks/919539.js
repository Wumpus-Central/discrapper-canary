n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
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
    x = n(526761),
    f = n(726985),
    _ = n(736530),
    E = n(981631),
    C = n(388032);
function T() {
    let e = (0, m.is)(),
        t = (0, m.c_)(),
        n = u.iG.useSetting(),
        T = u.h2.useSetting().includes(e),
        S = u.mX.useSetting(),
        b = u.zA.useSetting().includes(e),
        I = s.useCallback(
            (t) => {
                let n = (0, d.gl)();
                t ? n.delete(e) : n.add(e), u.zA.updateSetting(Array.from(n));
            },
            [e]
        );
    function N(e, t) {
        l.default.track(E.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    return (0, i.jsx)(g.U, {
        setting: f.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: x.to.MESSAGE_REQUESTS_V2,
        children:
            e === _.T
                ? (0, i.jsx)(h.Z, {
                      title: C.intl.string(C.t['3o2ojo']),
                      value: !n && !S,
                      onChange: () => {
                          var e;
                          return (
                              (e = !S),
                              void (0, p.V)({
                                  header: C.intl.string(C.t.yAfu1t),
                                  body: C.intl.string(C.t['Ry2z7+']),
                                  confirmText: C.intl.string(C.t.gm1Ven),
                                  cancelText: C.intl.string(C.t.p89ACg),
                                  confirmButtonColor: r.Button.Colors.BRAND,
                                  onConfirm: () => {
                                      u.mX.updateSetting(e), N(e, !1);
                                  },
                                  onCancel: () => {
                                      u.mX.updateSetting(e), u.zA.updateSetting(e ? c.default.keys(a.Z.getGuilds()) : []), N(e, !0);
                                  }
                              })
                          );
                      },
                      disabled: n,
                      note: C.intl.format(C.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(E.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, i.jsx)(h.Z, {
                      title: C.intl.string(C.t['3o2ojo']),
                      value: !b,
                      onChange: I,
                      disabled: T,
                      note: t ? C.intl.format(C.t.WpnWLS, { helpdeskArticle: o.Z.getArticleURL(E.BhN.MESSAGE_REQUESTS) }) : C.intl.format(C.t.wkm9a2, { helpdeskArticle: o.Z.getArticleURL(E.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
