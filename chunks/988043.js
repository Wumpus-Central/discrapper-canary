n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(430824),
    a = n(626135),
    o = n(709054),
    c = n(88658),
    d = n(976978),
    u = n(695346),
    m = n(639814),
    h = n(838436),
    g = n(51331),
    x = n(922628),
    _ = n(703115),
    p = n(526761),
    E = n(726985),
    C = n(736530),
    f = n(981631),
    T = n(388032);
function N(e) {
    let { ingress: t, guildId: n } = e,
        p = (0, m.c_)(),
        N = u.h2.useSetting().includes(n),
        S = (0, d.q)(),
        I = s.useCallback(
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
    function b(e, t) {
        a.default.track(f.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let v = (e) => {
        (0, x.V)({
            header: T.intl.string(T.t['uUr+GR']),
            body: T.intl.string(T.t.hjGJBg),
            confirmText: T.intl.string(T.t.gm1Ven),
            cancelText: T.intl.string(T.t.p89ACg),
            confirmButtonColor: r.zxk.Colors.BRAND,
            onConfirm: () => {
                u.gR.updateSetting(e), b(e, !1);
            },
            onCancel: () => {
                u.gR.updateSetting(e), u.h2.updateSetting(e ? o.default.keys(l.Z.getGuilds()) : []), b(e, !0);
            }
        });
    };
    return (0, i.jsx)(h.U, {
        setting: E.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === C.T
                ? (0, i.jsx)(g.Z, {
                      title: T.intl.string(T.t.RAQUSE),
                      note: T.intl.string(T.t.wbYDfX),
                      value: !S,
                      onChange: (e) => {
                          v(!e);
                      }
                  })
                : (0, i.jsx)(g.Z, {
                      title: T.intl.string(T.t.RAQUSE),
                      note: p ? T.intl.string(T.t.V0ka0d) : T.intl.string(T.t.G7c3Xl),
                      value: !N,
                      onChange: I
                  })
    });
}
function S(e) {
    let { ingress: t = p.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, m.is)();
    return (0, i.jsx)(N, {
        ingress: t,
        guildId: null != n ? n : s
    });
}
