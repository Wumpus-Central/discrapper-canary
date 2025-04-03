n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(430824),
    l = n(626135),
    o = n(709054),
    c = n(88658),
    d = n(976978),
    u = n(695346),
    m = n(87820),
    g = n(639814),
    p = n(838436),
    h = n(51331),
    f = n(922628),
    b = n(703115),
    N = n(526761),
    x = n(726985),
    _ = n(736530),
    E = n(981631),
    j = n(388032);
function O(e) {
    let { ingress: t, guildId: n } = e,
        N = (0, g.c_)(),
        O = u.h2.useSetting().includes(n),
        C = (0, d.q)(),
        S = (0, m.r)(),
        v = i.useCallback(
            (e) => {
                let r = (0, c.YK)();
                e ? r.delete(n) : r.add(n),
                    u.h2.updateSetting(Array.from(r)),
                    l.default.track(E.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: b.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [n, t]
        );
    function T(e, t) {
        l.default.track(E.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let I = (e) => {
            (0, f.V)({
                header: j.NW.string(j.t['uUr+GR']),
                body: j.NW.string(j.t.hjGJBg),
                confirmText: j.NW.string(j.t.gm1Ven),
                cancelText: j.NW.string(j.t.p89ACg),
                confirmButtonColor: s.zxk.Colors.BRAND,
                onConfirm: () => {
                    u.gR.updateSetting(e), T(e, !1);
                },
                onCancel: () => {
                    u.gR.updateSetting(e), u.h2.updateSetting(e ? o.default.keys(a.Z.getGuilds()) : []), T(e, !0);
                }
            });
        },
        y = S ? j.NW.string(j.t.PMsfcH) : j.NW.string(j.t.RAQUSE);
    return (0, r.jsx)(p.U, {
        setting: x.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === _.T
                ? (0, r.jsx)(h.Z, {
                      title: y,
                      note: S ? j.NW.string(j.t.XXGmuL) : j.NW.string(j.t.wbYDfX),
                      value: !C,
                      onChange: (e) => {
                          I(!e);
                      }
                  })
                : (0, r.jsx)(h.Z, {
                      title: y,
                      note: N ? j.NW.string(j.t.V0ka0d) : S ? j.NW.string(j.t.F9WY3d) : j.NW.string(j.t.G7c3Xl),
                      value: !O,
                      onChange: v
                  })
    });
}
function C(e) {
    let { ingress: t = N.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, g.is)();
    return (0, r.jsx)(O, {
        ingress: t,
        guildId: null != n ? n : i
    });
}
