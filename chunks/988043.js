n.d(t, { Z: () => S }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(430824),
    a = n(626135),
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
    _ = n(526761),
    x = n(726985),
    E = n(736530),
    j = n(981631),
    C = n(388032);
function O(e) {
    let { ingress: t, guildId: n } = e,
        _ = (0, g.c_)(),
        O = u.h2.useSetting().includes(n),
        S = (0, d.q)(),
        v = (0, m.r)(),
        T = r.useCallback(
            (e) => {
                let i = (0, c.YK)();
                e ? i.delete(n) : i.add(n),
                    u.h2.updateSetting(Array.from(i)),
                    a.default.track(j.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: b.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [n, t]
        );
    function I(e, t) {
        a.default.track(j.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let N = (e) => {
            (0, f.V)({
                header: C.intl.string(C.t['uUr+GR']),
                body: C.intl.string(C.t.hjGJBg),
                confirmText: C.intl.string(C.t.gm1Ven),
                cancelText: C.intl.string(C.t.p89ACg),
                confirmButtonColor: s.zxk.Colors.BRAND,
                onConfirm: () => {
                    u.gR.updateSetting(e), I(e, !1);
                },
                onCancel: () => {
                    u.gR.updateSetting(e), u.h2.updateSetting(e ? o.default.keys(l.Z.getGuilds()) : []), I(e, !0);
                }
            });
        },
        y = v ? C.intl.string(C.t.PMsfcH) : C.intl.string(C.t.RAQUSE);
    return (0, i.jsx)(p.U, {
        setting: x.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === E.T
                ? (0, i.jsx)(h.Z, {
                      title: y,
                      note: v ? C.intl.string(C.t.XXGmuL) : C.intl.string(C.t.wbYDfX),
                      value: !S,
                      onChange: (e) => {
                          N(!e);
                      }
                  })
                : (0, i.jsx)(h.Z, {
                      title: y,
                      note: _ ? C.intl.string(C.t.V0ka0d) : v ? C.intl.string(C.t.F9WY3d) : C.intl.string(C.t.G7c3Xl),
                      value: !O,
                      onChange: T
                  })
    });
}
function S(e) {
    let { ingress: t = _.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        r = (0, g.is)();
    return (0, i.jsx)(O, {
        ingress: t,
        guildId: null != n ? n : r
    });
}
