n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(430824),
    a = n(626135),
    o = n(709054),
    c = n(88658),
    d = n(976978),
    u = n(695346),
    h = n(639814),
    m = n(838436),
    g = n(51331),
    x = n(922628),
    _ = n(703115),
    p = n(526761),
    E = n(726985),
    C = n(736530),
    N = n(981631),
    I = n(388032);
function f(e) {
    let { ingress: t, guildId: n } = e,
        p = (0, h.c_)(),
        f = u.h2.useSetting().includes(n),
        T = (0, d.q)(),
        S = s.useCallback(
            (e) => {
                let i = (0, c.YK)();
                e ? i.delete(n) : i.add(n),
                    u.h2.updateSetting(Array.from(i)),
                    a.default.track(N.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [n, t]
        );
    function j(e, t) {
        a.default.track(N.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let v = (e) => {
        (0, x.V)({
            header: I.intl.string(I.t['uUr+GR']),
            body: I.intl.string(I.t.hjGJBg),
            confirmText: I.intl.string(I.t.gm1Ven),
            cancelText: I.intl.string(I.t.p89ACg),
            confirmButtonColor: l.zxk.Colors.BRAND,
            onConfirm: () => {
                u.gR.updateSetting(e), j(e, !1);
            },
            onCancel: () => {
                u.gR.updateSetting(e), u.h2.updateSetting(e ? o.default.keys(r.Z.getGuilds()) : []), j(e, !0);
            }
        });
    };
    return (0, i.jsx)(m.U, {
        setting: E.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === C.T
                ? (0, i.jsx)(g.Z, {
                      title: I.intl.string(I.t.RAQUSE),
                      note: I.intl.string(I.t.wbYDfX),
                      value: !T,
                      onChange: (e) => {
                          v(!e);
                      }
                  })
                : (0, i.jsx)(g.Z, {
                      title: I.intl.string(I.t.RAQUSE),
                      note: p ? I.intl.string(I.t.V0ka0d) : I.intl.string(I.t.G7c3Xl),
                      value: !f,
                      onChange: S
                  })
    });
}
function T(e) {
    let { ingress: t = p.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, h.is)();
    return (0, i.jsx)(f, {
        ingress: t,
        guildId: null != n ? n : s
    });
}
