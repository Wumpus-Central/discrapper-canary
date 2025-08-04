n.d(t, { Z: () => O });
var i = n(255367),
    r = n(73800),
    s = n(755721),
    a = n(430824),
    l = n(626135),
    o = n(88658),
    c = n(976978),
    d = n(695346),
    u = n(87820),
    m = n(639814),
    p = n(838436),
    g = n(51331),
    h = n(922628),
    f = n(703115),
    b = n(526761),
    x = n(726985),
    _ = n(736530),
    j = n(981631),
    C = n(388032);
function E(e) {
    let { ingress: t, guildId: n } = e,
        b = (0, m.c_)(),
        E = d.h2.useSetting().includes(n),
        O = (0, c.q)(),
        v = (0, u.r)(),
        S = r.useCallback(
            (e) => {
                let i = (0, o.YK)();
                (e ? i.delete(n) : i.add(n),
                    d.h2.updateSetting(Array.from(i)),
                    l.default.track(j.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: f.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    }));
            },
            [n, t]
        );
    function T(e, t) {
        l.default.track(j.rMx.GUILD_DEFAULT_DMS_UPDATED, {
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
                confirmButtonColor: s.zx.Colors.BRAND,
                onConfirm: () => {
                    (d.gR.updateSetting(e), T(e, !1));
                },
                onCancel: () => {
                    (d.gR.updateSetting(e), d.h2.updateSetting(e ? a.Z.getGuildIds() : []), T(e, !0));
                }
            });
        },
        I = v ? C.intl.string(C.t.PMsfcH) : C.intl.string(C.t.RAQUSE);
    return (0, i.jsx)(p.U, {
        setting: x.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === _.T
                ? (0, i.jsx)(g.Z, {
                      title: I,
                      note: v ? C.intl.string(C.t.XXGmuL) : C.intl.string(C.t.wbYDfX),
                      value: !O,
                      onChange: (e) => {
                          N(!e);
                      }
                  })
                : (0, i.jsx)(g.Z, {
                      title: I,
                      note: b ? C.intl.string(C.t.V0ka0d) : v ? C.intl.string(C.t.F9WY3d) : C.intl.string(C.t.G7c3Xl),
                      value: !E,
                      onChange: S
                  })
    });
}
function O(e) {
    let { ingress: t = b.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        r = (0, m.is)();
    return (0, i.jsx)(E, {
        ingress: t,
        guildId: null != n ? n : r
    });
}
