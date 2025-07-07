n.d(t, { Z: () => C });
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(430824),
    a = n(626135),
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
    E = n(981631),
    j = n(388032);
function O(e) {
    let { ingress: t, guildId: n } = e,
        b = (0, m.c_)(),
        O = d.h2.useSetting().includes(n),
        C = (0, c.q)(),
        S = (0, u.r)(),
        v = r.useCallback(
            (e) => {
                let i = (0, o.YK)();
                (e ? i.delete(n) : i.add(n),
                    d.h2.updateSetting(Array.from(i)),
                    a.default.track(E.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: f.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    }));
            },
            [n, t]
        );
    function T(e, t) {
        a.default.track(E.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let N = (e) => {
            (0, h.V)({
                header: j.intl.string(j.t['uUr+GR']),
                body: j.intl.string(j.t.hjGJBg),
                confirmText: j.intl.string(j.t.gm1Ven),
                cancelText: j.intl.string(j.t.p89ACg),
                confirmButtonColor: s.zxk.Colors.BRAND,
                onConfirm: () => {
                    (d.gR.updateSetting(e), T(e, !1));
                },
                onCancel: () => {
                    (d.gR.updateSetting(e), d.h2.updateSetting(e ? l.Z.getGuildIds() : []), T(e, !0));
                }
            });
        },
        I = S ? j.intl.string(j.t.PMsfcH) : j.intl.string(j.t.RAQUSE);
    return (0, i.jsx)(p.U, {
        setting: x.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === _.T
                ? (0, i.jsx)(g.Z, {
                      title: I,
                      note: S ? j.intl.string(j.t.XXGmuL) : j.intl.string(j.t.wbYDfX),
                      value: !C,
                      onChange: (e) => {
                          N(!e);
                      }
                  })
                : (0, i.jsx)(g.Z, {
                      title: I,
                      note: b ? j.intl.string(j.t.V0ka0d) : S ? j.intl.string(j.t.F9WY3d) : j.intl.string(j.t.G7c3Xl),
                      value: !O,
                      onChange: v
                  })
    });
}
function C(e) {
    let { ingress: t = b.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        r = (0, m.is)();
    return (0, i.jsx)(O, {
        ingress: t,
        guildId: null != n ? n : r
    });
}
