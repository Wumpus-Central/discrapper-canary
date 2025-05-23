n.d(t, { Z: () => S }), n(388685);
var i = n(255367),
    r = n(73800),
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
    C = n(981631),
    O = n(388032);
function j(e) {
    let { ingress: t, guildId: n } = e,
        _ = (0, g.c_)(),
        j = u.h2.useSetting().includes(n),
        S = (0, d.q)(),
        v = (0, m.r)(),
        T = r.useCallback(
            (e) => {
                let i = (0, c.YK)();
                e ? i.delete(n) : i.add(n),
                    u.h2.updateSetting(Array.from(i)),
                    a.default.track(C.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: b.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [n, t]
        );
    function N(e, t) {
        a.default.track(C.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let I = (e) => {
            (0, f.V)({
                header: O.intl.string(O.t['uUr+GR']),
                body: O.intl.string(O.t.hjGJBg),
                confirmText: O.intl.string(O.t.gm1Ven),
                cancelText: O.intl.string(O.t.p89ACg),
                confirmButtonColor: s.zxk.Colors.BRAND,
                onConfirm: () => {
                    u.gR.updateSetting(e), N(e, !1);
                },
                onCancel: () => {
                    u.gR.updateSetting(e), u.h2.updateSetting(e ? o.default.keys(l.Z.getGuilds()) : []), N(e, !0);
                }
            });
        },
        y = v ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSE);
    return (0, i.jsx)(p.U, {
        setting: x.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === E.T
                ? (0, i.jsx)(h.Z, {
                      title: y,
                      note: v ? O.intl.string(O.t.XXGmuL) : O.intl.string(O.t.wbYDfX),
                      value: !S,
                      onChange: (e) => {
                          I(!e);
                      }
                  })
                : (0, i.jsx)(h.Z, {
                      title: y,
                      note: _ ? O.intl.string(O.t.V0ka0d) : v ? O.intl.string(O.t.F9WY3d) : O.intl.string(O.t.G7c3Xl),
                      value: !j,
                      onChange: T
                  })
    });
}
function S(e) {
    let { ingress: t = _.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        r = (0, g.is)();
    return (0, i.jsx)(j, {
        ingress: t,
        guildId: null != n ? n : r
    });
}
