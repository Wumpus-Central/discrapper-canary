n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(430824),
    l = n(626135),
    o = n(709054),
    c = n(88658),
    d = n(695346),
    u = n(639814),
    m = n(838436),
    g = n(51331),
    h = n(922628),
    p = n(703115),
    x = n(526761),
    f = n(726985),
    E = n(736530),
    _ = n(981631),
    C = n(388032);
function T(e) {
    let { ingress: t, guildId: n } = e,
        x = (0, u.c_)(),
        T = d.h2.useSetting().includes(n),
        S = d.iG.useSetting(),
        b = r.useCallback(
            (e) => {
                let i = (0, c.YK)();
                e ? i.delete(n) : i.add(n),
                    d.h2.updateSetting(Array.from(i)),
                    l.default.track(_.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: p.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [n, t]
        );
    function I(e, t) {
        l.default.track(_.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let N = (e) => {
        (0, h.V)({
            header: C.intl.string(C.t['uUr+GR']),
            body: C.intl.string(C.t.hjGJBg),
            confirmText: C.intl.string(C.t.gm1Ven),
            cancelText: C.intl.string(C.t.p89ACg),
            confirmButtonColor: s.Button.Colors.BRAND,
            onConfirm: () => {
                d.iG.updateSetting(e), I(e, !1);
            },
            onCancel: () => {
                d.iG.updateSetting(e), d.h2.updateSetting(e ? o.default.keys(a.Z.getGuilds()) : []), I(e, !0);
            }
        });
    };
    return (0, i.jsx)(m.U, {
        setting: f.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === E.T
                ? (0, i.jsx)(g.Z, {
                      title: C.intl.string(C.t.RAQUSE),
                      note: C.intl.string(C.t.wbYDfX),
                      value: !S,
                      onChange: (e) => {
                          N(!e);
                      }
                  })
                : (0, i.jsx)(g.Z, {
                      title: C.intl.string(C.t.RAQUSE),
                      note: x ? C.intl.string(C.t.V0ka0d) : C.intl.string(C.t.G7c3Xl),
                      value: !T,
                      onChange: b
                  })
    });
}
function S(e) {
    let { ingress: t = x.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        r = (0, u.is)();
    return (0, i.jsx)(T, {
        ingress: t,
        guildId: null != n ? n : r
    });
}
