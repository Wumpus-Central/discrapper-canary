n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(430824),
    a = n(626135),
    o = n(709054),
    c = n(88658),
    d = n(750832),
    u = n(976978),
    h = n(695346),
    m = n(639814),
    g = n(838436),
    x = n(51331),
    _ = n(922628),
    p = n(703115),
    E = n(526761),
    C = n(726985),
    N = n(736530),
    f = n(981631),
    I = n(388032);
function T(e) {
    let { ingress: t, guildId: n } = e,
        E = (0, m.c_)(),
        T = h.h2.useSetting().includes(n),
        S = (0, u.q)(),
        j = (0, d.nS)('ServerSpecificDMSetting'),
        v = s.useCallback(
            (e) => {
                if (j) return;
                let i = (0, c.YK)();
                e ? i.delete(n) : i.add(n),
                    h.h2.updateSetting(Array.from(i)),
                    a.default.track(f.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: p.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [n, t, j]
        );
    function b(e, t) {
        a.default.track(f.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let A = (e) => {
        (0, _.V)({
            header: I.intl.string(I.t['uUr+GR']),
            body: I.intl.string(I.t.hjGJBg),
            confirmText: I.intl.string(I.t.gm1Ven),
            cancelText: I.intl.string(I.t.p89ACg),
            confirmButtonColor: l.zxk.Colors.BRAND,
            onConfirm: () => {
                h.gR.updateSetting(e), b(e, !1);
            },
            onCancel: () => {
                h.gR.updateSetting(e), h.h2.updateSetting(e ? o.default.keys(r.Z.getGuilds()) : []), b(e, !0);
            }
        });
    };
    return (0, i.jsx)(g.U, {
        setting: C.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === N.T
                ? (0, i.jsx)(x.Z, {
                      title: I.intl.string(I.t.RAQUSE),
                      note: I.intl.string(I.t.wbYDfX),
                      value: !S,
                      onChange: (e) => {
                          !j && A(!e);
                      }
                  })
                : (0, i.jsx)(x.Z, {
                      title: I.intl.string(I.t.RAQUSE),
                      note: E ? I.intl.string(I.t.V0ka0d) : I.intl.string(I.t.G7c3Xl),
                      value: !T,
                      onChange: v
                  })
    });
}
function S(e) {
    let { ingress: t = E.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, m.is)();
    return (0, i.jsx)(T, {
        ingress: t,
        guildId: null != n ? n : s
    });
}
