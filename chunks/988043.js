n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(430824),
    s = n(626135),
    l = n(88658),
    c = n(976978),
    u = n(695346),
    d = n(87820),
    f = n(639814),
    _ = n(838436),
    p = n(51331),
    h = n(922628),
    m = n(703115),
    g = n(526761),
    E = n(726985),
    b = n(736530),
    y = n(981631),
    O = n(388032);
function v(e) {
    let { ingress: t, guildId: n } = e,
        g = (0, f.c_)(),
        v = u.h2.useSetting().includes(n),
        I = (0, c.q)(),
        T = (0, d.r)(),
        S = i.useCallback(
            (e) => {
                let r = (0, l.YK)();
                e ? r.delete(n) : r.add(n),
                    u.h2.updateSetting(Array.from(r)),
                    s.default.track(y.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: m.Y.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [n, t],
        );
    function A(e, t) {
        s.default.track(y.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    let C = (e) => {
            N(!e);
        },
        N = (e) => {
            let t = () => {
                    u.gR.updateSetting(e), u.h2.updateSetting(e ? o.Z.getGuildIds() : []), A(e, !0);
                },
                n = () => {
                    u.gR.updateSetting(e), A(e, !1);
                };
            (0, h.V)({
                header: O.intl.string(O.t["uUr+GR"]),
                body: O.intl.string(O.t.hjGJBg),
                confirmText: O.intl.string(O.t.gm1Ven),
                cancelText: O.intl.string(O.t.p89ACg),
                confirmButtonColor: a.zx.Colors.BRAND,
                onConfirm: n,
                onCancel: t,
            });
        },
        R = T ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSE);
    return (0, r.jsx)(_.U, {
        setting: E.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === b.T
                ? (0, r.jsx)(p.Z, {
                      title: R,
                      note: T ? O.intl.string(O.t.XXGmuL) : O.intl.string(O.t.wbYDfX),
                      value: !I,
                      onChange: C,
                  })
                : (0, r.jsx)(p.Z, {
                      title: R,
                      note: g ? O.intl.string(O.t.V0ka0d) : T ? O.intl.string(O.t.F9WY3d) : O.intl.string(O.t.G7c3Xl),
                      value: !v,
                      onChange: S,
                  }),
    });
}
function I(e) {
    let { ingress: t = g.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, f.is)();
    return (0, r.jsx)(v, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
