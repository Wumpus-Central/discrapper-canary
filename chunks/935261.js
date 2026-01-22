n.d(t, { A: () => b }), n(896048), n(65821), n(457529);
var r = n(627968),
    i = n(64700),
    a = n(484030),
    s = n(574381),
    o = n(311907),
    l = n(689194),
    c = n(954571),
    u = n(728458),
    d = n(858013),
    f = n(156186),
    p = n(602450),
    _ = n(587093),
    h = n(69369),
    m = n(557571),
    g = n(652215);
let E = () => {
        let {
                installationStatus: e,
                setInstallationStatus: t,
                setConnectionStatus: n,
                finishSetup: r,
                getWarpInstallationStatus: a,
                connect: s,
                installTimeout: E,
            } = (0, m.lV)(),
            { status: b } = (0, o.bG)([l.A], () => l.A.state, []),
            [y, O] = (0, i.useState)(0),
            { installedDiscordPrivateBrowsingPerk: A } = (0, o.bG)([h.A], () => h.A.getState(), []),
            [v, S] = (0, i.useState)(!1),
            [I, T] = (0, i.useState)(null);
        return (
            (0, i.useEffect)(() => {
                v ||
                    (S(!0),
                    e !== p.Lk.INSTALLING &&
                        (0, d.t)().then((e) => {
                            e === p.Lk.NOT_INSTALLED
                                ? t(p.Lk.NOT_INSTALLED)
                                : e === p.Lk.EXISTING_INSTALLATION && A
                                  ? t(p.Lk.INSTALLING)
                                  : t(e);
                        }));
            }, [t, A, v, e]),
            (0, i.useEffect)(() => {
                A && e === p.Lk.NOT_INSTALLED && (0, _.K)(!1),
                    A && e === p.Lk.EXISTING_INSTALLATION && t(p.Lk.INSTALLED);
            }, [A, e, t]),
            (0, i.useEffect)(() => {
                if (![p.Lk.INSTALLED, p.Lk.WAITING_FOR_TERMS].includes(e)) return;
                let n = setInterval(async () => {
                    (await a()) === p.Lk.NOT_INSTALLED && t(p.Lk.NOT_INSTALLED);
                }, 1000);
                return () => clearInterval(n);
            }, [e, t, a]),
            (0, i.useEffect)(() => {
                if (![p.Lk.INSTALLED, p.Lk.EXISTING_INSTALLATION].includes(e)) return void n(p.l7.DISCONNECTED);
                switch (b) {
                    case p.N2.CONNECTED:
                        n(p.l7.CONNECTED);
                        break;
                    case p.N2.CONNECTING:
                        n(p.l7.INITIALIZING);
                        break;
                    case p.N2.DISCONNECTED:
                        n(p.l7.DISCONNECTED);
                        break;
                    case p.N2.UNABLE:
                        S(!1);
                }
            }, [b, e, n]),
            (0, i.useEffect)(() => {
                y > 10 && (t(p.Lk.ERROR), O(0));
            }, [y, t]),
            (0, i.useEffect)(() => {
                e === p.Lk.READY_FOR_LICENSE &&
                    r()
                        .then((e) => {
                            e && t(p.Lk.INSTALLED), s();
                        })
                        .catch((e) => {
                            u.A.captureException(e, {
                                tags: { source: f.q.PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP },
                            }),
                                c.default.track(g.HAw.PREMIUM_FEATURE_ERROR, {
                                    error_message: e instanceof Error ? e.message : JSON.stringify(e),
                                    error_source: f.q.PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP,
                                }),
                                t(p.Lk.ERROR);
                        });
            }, [e, t, r, s]),
            (0, i.useEffect)(() => {
                if (![p.Lk.INSTALLING, p.Lk.WAITING_FOR_TERMS].includes(e)) return void T(null);
                if ((null == I && T(Date.now()), null != I)) {
                    let e = I + E - Date.now();
                    if (e <= 0) return void t(p.Lk.INSTALLING_TIMEOUT);
                    let n = setTimeout(() => {
                        t(p.Lk.INSTALLING_TIMEOUT);
                    }, e);
                    return () => clearTimeout(n);
                }
            }, [e, I, T, t, E]),
            (0, i.useEffect)(() => {
                if (![p.Lk.INSTALLING, p.Lk.WAITING_FOR_TERMS, p.Lk.INSTALLING_TIMEOUT].includes(e)) return;
                let n = setInterval(async () => {
                    let n = await a();
                    switch (n) {
                        case p.Lk.ERROR:
                            O((e) => e + 1);
                            return;
                        case p.Lk.NOT_INSTALLED:
                            [p.Lk.NOT_INSTALLED, p.Lk.INSTALLING].includes(e) || t(p.Lk.NOT_INSTALLED);
                            return;
                        case p.Lk.EXISTING_INSTALLATION:
                            t(p.Lk.READY_FOR_LICENSE);
                            return;
                        case p.Lk.WAITING_FOR_TERMS:
                        case p.Lk.INSTALLING:
                            if (e === p.Lk.INSTALLING_TIMEOUT) return;
                            t(n);
                            break;
                        default:
                            t(n);
                    }
                }, 1000);
                return () => {
                    clearInterval(n);
                };
            }, [e, t, a]),
            null
        );
    },
    b = () =>
        (0, s.xl)()
            ? (0, r.jsx)(a.tH, {
                  fallback: null,
                  children: (0, r.jsx)(E, {}),
              })
            : null;
