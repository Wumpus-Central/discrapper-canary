n.d(t, { Z: () => f });
var r = n(73800),
    i = n(719711),
    a = n(433517),
    o = n(579806),
    s = n(626135),
    l = n(998502),
    c = n(286035),
    u = n(981631);
function d(e) {
    var t;
    return null == e || null == (t = e._state) ? void 0 : t.lastTestTimestamp;
}
function f() {
    return (
        r.useEffect(() => {
            window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN &&
                !0 !== a.K.get(i.SV) &&
                l.ZP.supportsFeature(u.eRX.USER_DATA_CACHE) &&
                (c.Te(),
                o.Z.userDataCache.getCached().then((e) => {
                    if (null == e) {
                        c.kb(),
                            s.default.track(
                                u.rMx.DOMAIN_MIGRATED,
                                {
                                    success: !1,
                                    has_data: !1
                                },
                                { flush: !0 }
                            );
                        return;
                    }
                    let t = Object.keys(e),
                        n = 0 !== t.length,
                        r = null != e.token,
                        l = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                        f = null == l || null == d(l) || d(l) <= d(a.K.get('RTCRegionStore'));
                    n &&
                        r &&
                        !f &&
                        (a.K.clear(),
                        t.forEach((t) => {
                            let n = e[t];
                            try {
                                a.K.set(t, JSON.parse(n));
                            } catch (e) {}
                        })),
                        s.default.track(
                            u.rMx.DOMAIN_MIGRATED,
                            {
                                success: !0,
                                current_is_newer: f,
                                has_data: n
                            },
                            { flush: !0 }
                        ),
                        a.K.set(i.SV, !0),
                        o.Z.userDataCache.deleteCache(),
                        c.Pg();
                }));
        }, []),
        null
    );
}
