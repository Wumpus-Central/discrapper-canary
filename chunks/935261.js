"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(484030),
    s = n(574381),
    o = n(311907),
    l = n(689194),
    u = n(954571),
    c = n(728458),
    d = n(858013),
    _ = n(156186),
    f = n(602450),
    p = n(587093),
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
            { status: A } = (0, o.bG)([l.A], () => l.A.state, []),
            [I, T] = (0, i.useState)(0),
            { installedDiscordPrivateBrowsingPerk: y } = (0, o.bG)([h.A], () => h.A.getState(), []),
            [S, v] = (0, i.useState)(!1),
            [C, b] = (0, i.useState)(null);
        return (
            (0, i.useEffect)(() => {
                S ||
                    (v(!0),
                    e !== f.Lk.INSTALLING &&
                        (0, d.t)().then((e) => {
                            e === f.Lk.NOT_INSTALLED
                                ? t(f.Lk.NOT_INSTALLED)
                                : e === f.Lk.EXISTING_INSTALLATION && y
                                  ? t(f.Lk.INSTALLING)
                                  : t(e);
                        }));
            }, [t, y, S, e]),
            (0, i.useEffect)(() => {
                y && e === f.Lk.NOT_INSTALLED && (0, p.K)(!1),
                    y && e === f.Lk.EXISTING_INSTALLATION && t(f.Lk.INSTALLED);
            }, [y, e, t]),
            (0, i.useEffect)(() => {
                if (![f.Lk.INSTALLED, f.Lk.WAITING_FOR_TERMS].includes(e)) return;
                let n = setInterval(async () => {
                    (await a()) === f.Lk.NOT_INSTALLED && t(f.Lk.NOT_INSTALLED);
                }, 1e3);
                return () => clearInterval(n);
            }, [e, t, a]),
            (0, i.useEffect)(() => {
                if (![f.Lk.INSTALLED, f.Lk.EXISTING_INSTALLATION].includes(e)) return void n(f.l7.DISCONNECTED);
                switch (A) {
                    case f.N2.CONNECTED:
                        n(f.l7.CONNECTED);
                        break;
                    case f.N2.CONNECTING:
                        n(f.l7.INITIALIZING);
                        break;
                    case f.N2.DISCONNECTED:
                        n(f.l7.DISCONNECTED);
                        break;
                    case f.N2.UNABLE:
                        v(!1);
                }
            }, [A, e, n]),
            (0, i.useEffect)(() => {
                I > 10 && (t(f.Lk.ERROR), T(0));
            }, [I, t]),
            (0, i.useEffect)(() => {
                e === f.Lk.READY_FOR_LICENSE &&
                    r()
                        .then((e) => {
                            e && t(f.Lk.INSTALLED), s();
                        })
                        .catch((e) => {
                            c.A.captureException(e, {
                                tags: { source: _.q.PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP },
                            }),
                                u.default.track(g.HAw.PREMIUM_FEATURE_ERROR, {
                                    error_message: e instanceof Error ? e.message : JSON.stringify(e),
                                    error_source: _.q.PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP,
                                }),
                                t(f.Lk.ERROR);
                        });
            }, [e, t, r, s]),
            (0, i.useEffect)(() => {
                if (![f.Lk.INSTALLING, f.Lk.WAITING_FOR_TERMS].includes(e)) return void b(null);
                if ((null == C && b(Date.now()), null != C)) {
                    let e = C + E - Date.now();
                    if (e <= 0) return void t(f.Lk.INSTALLING_TIMEOUT);
                    let n = setTimeout(() => {
                        t(f.Lk.INSTALLING_TIMEOUT);
                    }, e);
                    return () => clearTimeout(n);
                }
            }, [e, C, b, t, E]),
            (0, i.useEffect)(() => {
                if (![f.Lk.INSTALLING, f.Lk.WAITING_FOR_TERMS, f.Lk.INSTALLING_TIMEOUT].includes(e)) return;
                let n = setInterval(async () => {
                    let n = await a();
                    switch (n) {
                        case f.Lk.ERROR:
                            T((e) => e + 1);
                            return;
                        case f.Lk.NOT_INSTALLED:
                            [f.Lk.NOT_INSTALLED, f.Lk.INSTALLING].includes(e) || t(f.Lk.NOT_INSTALLED);
                            return;
                        case f.Lk.EXISTING_INSTALLATION:
                            t(f.Lk.READY_FOR_LICENSE);
                            return;
                        case f.Lk.WAITING_FOR_TERMS:
                        case f.Lk.INSTALLING:
                            if (e === f.Lk.INSTALLING_TIMEOUT) return;
                            t(n);
                            break;
                        default:
                            t(n);
                    }
                }, 1e3);
                return () => {
                    clearInterval(n);
                };
            }, [e, t, a]),
            null
        );
    },
    A = () => ((0, s.xl)() ? (0, r.jsx)(a.tH, { fallback: null, children: (0, r.jsx)(E, {}) }) : null);
