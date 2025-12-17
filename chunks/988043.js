n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(755721),
    o = n(915009),
    s = n(430824),
    l = n(626135),
    c = n(88658),
    u = n(976978),
    d = n(695346),
    f = n(87820),
    p = n(639814),
    _ = n(838436),
    m = n(51331),
    h = n(922628),
    g = n(703115),
    E = n(526761),
    b = n(726985),
    y = n(736530),
    O = n(981631),
    v = n(388032),
    S = n(517319);
function I(e) {
    let { ingress: t, guildId: n } = e,
        E = (0, p.c_)(),
        I = d.h2.useSetting().includes(n),
        T = (0, u.q)(),
        C = (0, f.r)(),
        A = (0, o.LN)(),
        N = i.useCallback(
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
    function P(e, t) {
        l.default.track(O.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    let R = (e) => {
            w(!e);
        },
        w = (e) => {
            let t = () => {
                    d.gR.updateSetting(e), d.h2.updateSetting(e ? s.Z.getGuildIds() : []), P(e, !0);
                },
                n = () => {
                    d.gR.updateSetting(e), P(e, !1);
                };
            (0, h.V)({
                header: v.intl.string(v.t["uUr+GR"]),
                body: v.intl.string(v.t.hjGJBp),
                confirmText: v.intl.string(v.t.gm1Vej),
                cancelText: v.intl.string(v.t.p89ACt),
                confirmButtonColor: a.zx.Colors.BRAND,
                onConfirm: n,
                onCancel: t,
            });
        },
        D = C ? v.intl.string(v.t.PMsfcH) : v.intl.string(v.t.RAQUSN);
    return (0, r.jsx)(_.U, {
        setting: b.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            n === y.T
                ? (0, r.jsx)(m.ZP, {
                      title: D,
                      note: C ? v.intl.string(v.t.XXGmuB) : v.intl.string(v.t.wbYDfT),
                      value: !T,
                      onChange: R,
                      disabled: A,
                      tooltipText: A ? v.intl.string(S.default["6Af/cw"]) : void 0,
                  })
                : (0, r.jsx)(m.ZP, {
                      title: D,
                      note: E ? v.intl.string(v.t.V0ka0Q) : C ? v.intl.string(v.t.F9WY3f) : v.intl.string(v.t.G7c3Xo),
                      value: !I,
                      onChange: N,
                  }),
    });
}
function T(e) {
    let { ingress: t = E.f4.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, p.is)();
    return (0, r.jsx)(I, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
