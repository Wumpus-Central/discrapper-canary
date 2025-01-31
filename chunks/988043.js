n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(430824),
    a = n(626135),
    o = n(709054),
    c = n(88658),
    d = n(695346),
    u = n(639814),
    m = n(838436),
    h = n(51331),
    g = n(922628),
    _ = n(703115),
    x = n(526761),
    p = n(726985),
    E = n(736530),
    C = n(981631),
    f = n(388032);
function T(e) {
    let { ingress: t, guildId: n } = e,
        x = (0, u.c_)(),
        T = d.h2.useSetting().includes(n),
        N = d.iG.useSetting(),
        I = s.useCallback(
            (e) => {
                let i = (0, c.YK)();
                e ? i.delete(n) : i.add(n),
                    d.h2.updateSetting(Array.from(i)),
                    a.default.track(C.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [n, t]
        );
    function S(e, t) {
        a.default.track(C.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let b = (e) => {
        (0, g.V)({
            header: f.intl.string(f.t['uUr+GR']),
            body: f.intl.string(f.t.hjGJBg),
            confirmText: f.intl.string(f.t.gm1Ven),
            cancelText: f.intl.string(f.t.p89ACg),
            confirmButtonColor: r.zxk.Colors.BRAND,
            onConfirm: () => {
                d.iG.updateSetting(e), S(e, !1);
            },
            onCancel: () => {
                d.iG.updateSetting(e), d.h2.updateSetting(e ? o.default.keys(l.Z.getGuilds()) : []), S(e, !0);
            }
        });
    };
    return (0, i.jsx)(m.U, {
        setting: p.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === E.T
                ? (0, i.jsx)(h.Z, {
                      title: f.intl.string(f.t.RAQUSE),
                      note: f.intl.string(f.t.wbYDfX),
                      value: !N,
                      onChange: (e) => {
                          b(!e);
                      }
                  })
                : (0, i.jsx)(h.Z, {
                      title: f.intl.string(f.t.RAQUSE),
                      note: x ? f.intl.string(f.t.V0ka0d) : f.intl.string(f.t.G7c3Xl),
                      value: !T,
                      onChange: I
                  })
    });
}
function N(e) {
    let { ingress: t = x.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, u.is)();
    return (0, i.jsx)(T, {
        ingress: t,
        guildId: null != n ? n : s
    });
}
