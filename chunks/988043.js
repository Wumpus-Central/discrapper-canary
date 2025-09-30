n.d(t, { Z: () => T });
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(915009),
    s = n(430824),
    l = n(626135),
    c = n(88658),
    u = n(976978),
    d = n(695346),
    f = n(87820),
    _ = n(639814),
    p = n(838436),
    h = n(51331),
    m = n(922628),
    g = n(703115),
    E = n(526761),
    b = n(726985),
    y = n(736530),
    O = n(981631),
    v = n(388032);
function I(e) {
    let { ingress: t, guildId: n } = e,
        E = (0, _.c_)(),
        I = d.h2.useSetting().includes(n),
        T = (0, u.q)(),
        S = (0, f.r)(),
        A = (0, o.LN)(),
        C = i.useCallback(
            (e) => {
                let r = (0, c.YK)();
                e ? r.delete(n) : r.add(n),
                    d.h2.updateSetting(Array.from(r)),
                    l.default.track(O.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: g.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [n, t],
        );
    function N(e, t) {
        l.default.track(O.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    let R = (e) => {
            P(!e);
        },
        P = (e) => {
            let t = () => {
                    d.gR.updateSetting(e), d.h2.updateSetting(e ? s.Z.getGuildIds() : []), N(e, !0);
                },
                n = () => {
                    d.gR.updateSetting(e), N(e, !1);
                };
            (0, m.V)({
                header: v.intl.string(v.t["uUr+GR"]),
                body: v.intl.string(v.t.hjGJBg),
                confirmText: v.intl.string(v.t.gm1Ven),
                cancelText: v.intl.string(v.t.p89ACg),
                confirmButtonColor: a.zx.Colors.BRAND,
                onConfirm: n,
                onCancel: t,
            });
        },
        w = S ? v.intl.string(v.t.PMsfcH) : v.intl.string(v.t.RAQUSE);
    return (0, r.jsx)(p.U, {
        setting: b.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === y.T
                ? (0, r.jsx)(h.Z, {
                      title: w,
                      note: S ? v.intl.string(v.t.XXGmuL) : v.intl.string(v.t.wbYDfX),
                      value: !T,
                      onChange: R,
                      disabled: A,
                  })
                : (0, r.jsx)(h.Z, {
                      title: w,
                      note: E ? v.intl.string(v.t.V0ka0d) : S ? v.intl.string(v.t.F9WY3d) : v.intl.string(v.t.G7c3Xl),
                      value: !I,
                      onChange: C,
                  }),
    });
}
function T(e) {
    let { ingress: t = E.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, _.is)();
    return (0, r.jsx)(I, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
