i.d(e, { V: () => C });
var n = i(421380),
    l = i(171316),
    s = i(419954),
    r = i(71393),
    u = i(954571),
    a = i(115063),
    o = i(762183),
    T = i(253932),
    A = i(780964),
    S = i(612025),
    E = i(445176),
    d = i(112469),
    _ = i(997913),
    I = i(542457),
    g = i(355097),
    c = i(652215),
    N = i(985018);
let O = (t, e) => {
        u.default.track(c.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    },
    C = (0, s.zD)(A.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: () => ((0, E.e)() ? N.intl.string(N.t.PMsfcH) : N.intl.string(N.t.RAQUSN)),
        useSubtitle: () => {
            let t = (0, d.Tx)(),
                e = (0, d.q9)(),
                i = (0, E.e)();
            return t === S.YG
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
            let t = (0, d.Tx)(),
                e = T.$s.useSetting().includes(t),
                i = (0, o.K)();
            return t === S.YG ? !i : !e;
        },
        useDisabled: () => {
            let t = (0, l.uM)();
            return (0, d.Tx)() === S.YG && t;
        },
        setValue: (t) => {
            let e = S.xk.getState().selectedGuildId;
            if (e === S.YG) {
                var i;
                (i = !t),
                    (0, _.O)({
                        header: N.intl.string(N.t["uUr+GR"]),
                        body: N.intl.string(N.t.hjGJBp),
                        confirmText: N.intl.string(N.t.gm1Vej),
                        cancelText: N.intl.string(N.t.p89ACt),
                        confirmButtonColor: n.$n.Colors.BRAND,
                        onConfirm: () => {
                            T.n6.updateSetting(i), O(i, !1);
                        },
                        onCancel: () => {
                            T.n6.updateSetting(i), T.$s.updateSetting(i ? r.A.getGuildIds() : []), O(i, !0);
                        },
                    });
            } else {
                let i = (0, a.Tb)();
                t ? i.delete(e) : i.add(e),
                    T.$s.updateSetting(Array.from(i)),
                    u.default.track(c.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: I.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: g.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: e,
                    });
            }
        },
    });
