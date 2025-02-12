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
    f = n(981631),
    N = n(388032);
function I(e) {
    let { ingress: t, guildId: n } = e,
        p = (0, h.c_)(),
        I = u.h2.useSetting().includes(n),
        T = (0, d.q)(),
        S = s.useCallback(
            (e) => {
                let i = (0, c.YK)();
                e ? i.delete(n) : i.add(n),
                    u.h2.updateSetting(Array.from(i)),
                    a.default.track(f.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [n, t]
        );
    function j(e, t) {
        a.default.track(f.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let v = (e) => {
        (0, x.V)({
            header: N.intl.string(N.t['uUr+GR']),
            body: N.intl.string(N.t.hjGJBg),
            confirmText: N.intl.string(N.t.gm1Ven),
            cancelText: N.intl.string(N.t.p89ACg),
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
                      title: N.intl.string(N.t.RAQUSE),
                      note: N.intl.string(N.t.wbYDfX),
                      value: !T,
                      onChange: (e) => {
                          v(!e);
                      }
                  })
                : (0, i.jsx)(g.Z, {
                      title: N.intl.string(N.t.RAQUSE),
                      note: p ? N.intl.string(N.t.V0ka0d) : N.intl.string(N.t.G7c3Xl),
                      value: !I,
                      onChange: S
                  })
    });
}
function T(e) {
    let { ingress: t = p.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, h.is)();
    return (0, i.jsx)(I, {
        ingress: t,
        guildId: null != n ? n : s
    });
}
