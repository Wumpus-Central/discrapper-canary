n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    a = n(430824),
    l = n(626135),
    o = n(709054),
    c = n(88658),
    d = n(695346),
    u = n(639814),
    m = n(838436),
    g = n(51331),
    h = n(922628),
    p = n(726985),
    x = n(736530),
    f = n(981631),
    _ = n(388032);
function E() {
    let e = (0, u.is)(),
        t = (0, u.c_)(),
        n = d.h2.useSetting().includes(e),
        E = d.iG.useSetting(),
        C = s.useCallback(
            (t) => {
                let n = (0, c.YK)();
                t ? n.delete(e) : n.add(e), d.h2.updateSetting(Array.from(n));
            },
            [e]
        );
    function T(e, t) {
        l.default.track(f.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t
        });
    }
    let S = (e) => {
        (0, h.V)({
            header: _.intl.string(_.t['uUr+GR']),
            body: _.intl.string(_.t.hjGJBg),
            confirmText: _.intl.string(_.t.gm1Ven),
            cancelText: _.intl.string(_.t.p89ACg),
            confirmButtonColor: r.Button.Colors.BRAND,
            onConfirm: () => {
                d.iG.updateSetting(e), T(e, !1);
            },
            onCancel: () => {
                d.iG.updateSetting(e), d.h2.updateSetting(e ? o.default.keys(a.Z.getGuilds()) : []), T(e, !0);
            }
        });
    };
    return (0, i.jsx)(m.U, {
        setting: p.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            e === x.T
                ? (0, i.jsx)(g.Z, {
                      title: _.intl.string(_.t.RAQUSE),
                      note: _.intl.string(_.t.wbYDfX),
                      value: !E,
                      onChange: (e) => {
                          S(!e);
                      }
                  })
                : (0, i.jsx)(g.Z, {
                      title: _.intl.string(_.t.RAQUSE),
                      note: t ? _.intl.string(_.t.V0ka0d) : _.intl.string(_.t.G7c3Xl),
                      value: !n,
                      onChange: C
                  })
    });
}
