n.d(t, { K: () => T, V: () => f });
var i = n(862482),
    s = n(171316),
    l = n(419954),
    a = n(71393),
    r = n(954571),
    o = n(115063),
    d = n(762183),
    u = n(253932),
    c = n(780964),
    g = n(612025),
    m = n(445176),
    _ = n(112469),
    A = n(137675),
    h = n(542457),
    p = n(355097),
    x = n(652215),
    E = n(985018);
let T = () => ((0, m.e)() ? E.intl.string(E.t.PMsfcH) : E.intl.string(E.t.RAQUSN)),
    S = (e, t) => {
        r.default.track(x.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    f = (0, l.zD)(c.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: T,
        useSubtitle: () => {
            let e = (0, _.Tx)(),
                t = (0, _.q9)(),
                n = (0, m.e)();
            return e === g.YG
                ? n
                    ? E.intl.string(E.t.XXGmuB)
                    : E.intl.string(E.t.wbYDfT)
                : t
                  ? E.intl.string(E.t.V0ka0Q)
                  : n
                    ? E.intl.string(E.t.F9WY3f)
                    : E.intl.string(E.t.G7c3Xo);
        },
        useValue: () => {
            let e = (0, _.Tx)(),
                t = u.$s.useSetting().includes(e),
                n = (0, d.K)();
            return e === g.YG ? !n : !t;
        },
        useDisabled: () => {
            let e = (0, s.uM)();
            return (0, _.Tx)() === g.YG && e;
        },
        setValue: (e) => {
            let t = g.xk.getState().selectedGuildId;
            if (t === g.YG) {
                var n;
                (n = !e),
                    (0, A.O)({
                        header: E.intl.string(E.t["uUr+GR"]),
                        body: E.intl.string(E.t.hjGJBp),
                        confirmText: E.intl.string(E.t.gm1Vej),
                        cancelText: E.intl.string(E.t.p89ACt),
                        confirmButtonColor: i.$n.Colors.BRAND,
                        onConfirm: () => {
                            u.n6.updateSetting(n), S(n, !1);
                        },
                        onCancel: () => {
                            u.n6.updateSetting(n), u.$s.updateSetting(n ? a.A.getGuildIds() : []), S(n, !0);
                        },
                    });
            } else {
                let n = (0, o.Tb)();
                e ? n.delete(t) : n.add(t),
                    u.$s.updateSetting(Array.from(n)),
                    r.default.track(x.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: h.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: p.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    });
