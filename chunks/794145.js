i.d(e, { V: () => O });
var n = i(421380),
    l = i(171316),
    s = i(419954),
    r = i(71393),
    a = i(954571),
    u = i(115063),
    o = i(762183),
    d = i(253932),
    T = i(780964),
    A = i(612025),
    S = i(445176),
    E = i(112469),
    g = i(997913),
    _ = i(542457),
    c = i(355097),
    I = i(652215),
    N = i(985018);
let C = (t, e) => {
        a.default.track(I.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    },
    O = (0, s.zD)(T.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: () => ((0, S.e)() ? N.intl.string(N.t.PMsfcH) : N.intl.string(N.t.RAQUSN)),
        useSubtitle: () => {
            let t = (0, E.Tx)(),
                e = (0, E.q9)(),
                i = (0, S.e)();
            return t === A.YG
                ? i
                    ? N.intl.string(N.t.XXGmuB)
                    : N.intl.string(N.t.wbYDfT)
                : e
                  ? N.intl.string(N.t.V0ka0Q)
                  : i
                    ? N.intl.string(N.t.F9WY3f)
                    : N.intl.string(N.t.G7c3Xo);
        },
        useValue: () => {
            let t = (0, E.Tx)(),
                e = d.$s.useSetting().includes(t),
                i = (0, o.K)();
            return t === A.YG ? !i : !e;
        },
        useDisabled: () => {
            let t = (0, l.uM)();
            return (0, E.Tx)() === A.YG && t;
        },
        setValue: (t) => {
            let e = A.xk.getState().selectedGuildId;
            if (e === A.YG) {
                var i;
                (i = !t),
                    (0, g.O)({
                        header: N.intl.string(N.t["uUr+GR"]),
                        body: N.intl.string(N.t.hjGJBp),
                        confirmText: N.intl.string(N.t.gm1Vej),
                        cancelText: N.intl.string(N.t.p89ACt),
                        confirmButtonColor: n.$n.Colors.BRAND,
                        onConfirm: () => {
                            d.n6.updateSetting(i), C(i, !1);
                        },
                        onCancel: () => {
                            d.n6.updateSetting(i), d.$s.updateSetting(i ? r.A.getGuildIds() : []), C(i, !0);
                        },
                    });
            } else {
                let i = (0, u.Tb)();
                t ? i.delete(e) : i.add(e),
                    d.$s.updateSetting(Array.from(i)),
                    a.default.track(I.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: _.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: c.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: e,
                    });
            }
        },
    });
