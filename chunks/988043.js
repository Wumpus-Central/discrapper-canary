n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(430824),
    a = n(626135),
    o = n(709054),
    c = n(88658),
    d = n(750832),
    u = n(976978),
    m = n(695346),
    h = n(639814),
    g = n(838436),
    _ = n(51331),
    x = n(922628),
    p = n(703115),
    E = n(526761),
    C = n(726985),
    f = n(736530),
    T = n(981631),
    N = n(388032);
function I(e) {
    let { ingress: t, guildId: n } = e,
        E = (0, h.c_)(),
        I = m.h2.useSetting().includes(n),
        S = (0, u.q)(),
        b = (0, d.nS)('ServerSpecificDMSetting'),
        v = s.useCallback(
            (e) => {
                if (b) return;
                let i = (0, c.YK)();
                e ? i.delete(n) : i.add(n),
                    m.h2.updateSetting(Array.from(i)),
                    a.default.track(T.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: p.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [n, t, b]
        );
    function j(e, t) {
        a.default.track(T.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let A = (e) => {
        (0, x.V)({
            header: N.intl.string(N.t['uUr+GR']),
            body: N.intl.string(N.t.hjGJBg),
            confirmText: N.intl.string(N.t.gm1Ven),
            cancelText: N.intl.string(N.t.p89ACg),
            confirmButtonColor: r.zxk.Colors.BRAND,
            onConfirm: () => {
                m.gR.updateSetting(e), j(e, !1);
            },
            onCancel: () => {
                m.gR.updateSetting(e), m.h2.updateSetting(e ? o.default.keys(l.Z.getGuilds()) : []), j(e, !0);
            }
        });
    };
    return (0, i.jsx)(g.U, {
        setting: C.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === f.T
                ? (0, i.jsx)(_.Z, {
                      title: N.intl.string(N.t.RAQUSE),
                      note: N.intl.string(N.t.wbYDfX),
                      value: !S,
                      onChange: (e) => {
                          !b && A(!e);
                      }
                  })
                : (0, i.jsx)(_.Z, {
                      title: N.intl.string(N.t.RAQUSE),
                      note: E ? N.intl.string(N.t.V0ka0d) : N.intl.string(N.t.G7c3Xl),
                      value: !I,
                      onChange: v
                  })
    });
}
function S(e) {
    let { ingress: t = E.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, h.is)();
    return (0, i.jsx)(I, {
        ingress: t,
        guildId: null != n ? n : s
    });
}
