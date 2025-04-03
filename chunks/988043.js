n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(430824),
    l = n(626135),
    o = n(709054),
    c = n(88658),
    d = n(976978),
    u = n(695346),
    m = n(639814),
    g = n(838436),
    p = n(51331),
    h = n(922628),
    f = n(703115),
    b = n(526761),
    N = n(726985),
    x = n(736530),
    _ = n(981631),
    E = n(388032);
function j(e) {
    let { ingress: t, guildId: n } = e,
        b = (0, m.c_)(),
        j = u.h2.useSetting().includes(n),
        O = (0, d.q)(),
        C = i.useCallback(
            (e) => {
                let r = (0, c.YK)();
                e ? r.delete(n) : r.add(n),
                    u.h2.updateSetting(Array.from(r)),
                    l.default.track(_.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: f.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n
                    });
            },
            [n, t]
        );
    function S(e, t) {
        l.default.track(_.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let v = (e) => {
        (0, h.V)({
            header: E.NW.string(E.t['uUr+GR']),
            body: E.NW.string(E.t.hjGJBg),
            confirmText: E.NW.string(E.t.gm1Ven),
            cancelText: E.NW.string(E.t.p89ACg),
            confirmButtonColor: s.zxk.Colors.BRAND,
            onConfirm: () => {
                u.gR.updateSetting(e), S(e, !1);
            },
            onCancel: () => {
                u.gR.updateSetting(e), u.h2.updateSetting(e ? o.default.keys(a.Z.getGuilds()) : []), S(e, !0);
            }
        });
    };
    return (0, r.jsx)(g.U, {
        setting: N.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === x.T
                ? (0, r.jsx)(p.Z, {
                      title: E.NW.string(E.t.RAQUSE),
                      note: E.NW.string(E.t.wbYDfX),
                      value: !O,
                      onChange: (e) => {
                          v(!e);
                      }
                  })
                : (0, r.jsx)(p.Z, {
                      title: E.NW.string(E.t.RAQUSE),
                      note: b ? E.NW.string(E.t.V0ka0d) : E.NW.string(E.t.G7c3Xl),
                      value: !j,
                      onChange: C
                  })
    });
}
function O(e) {
    let { ingress: t = b.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, m.is)();
    return (0, r.jsx)(j, {
        ingress: t,
        guildId: null != n ? n : i
    });
}
