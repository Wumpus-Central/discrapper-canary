r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(192379),
    a = r(719711),
    o = r(433517),
    s = r(579806),
    l = r(626135),
    u = r(998502),
    c = r(286035),
    d = r(981631);
function f(e) {
    var n;
    return null == e ? void 0 : null === (n = e._state) || void 0 === n ? void 0 : n.lastTestTimestamp;
}
function p() {
    return (
        i.useEffect(() => {
            window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN &&
                !0 !== o.K.get(a.SV) &&
                u.ZP.supportsFeature(d.eRX.USER_DATA_CACHE) &&
                (c.Te(),
                s.Z.userDataCache.getCached().then((e) => {
                    if (null == e) {
                        c.kb(),
                            l.default.track(
                                d.rMx.DOMAIN_MIGRATED,
                                {
                                    success: !1,
                                    has_data: !1
                                },
                                { flush: !0 }
                            );
                        return;
                    }
                    let n = Object.keys(e),
                        r = 0 !== n.length,
                        i = null != e.token,
                        u = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
                        p = null == u || null == f(u) || f(u) <= f(o.K.get('RTCRegionStore'));
                    r &&
                        i &&
                        !p &&
                        (o.K.clear(),
                        n.forEach((n) => {
                            let r = e[n];
                            try {
                                o.K.set(n, JSON.parse(r));
                            } catch (e) {}
                        })),
                        l.default.track(
                            d.rMx.DOMAIN_MIGRATED,
                            {
                                success: !0,
                                current_is_newer: p,
                                has_data: r
                            },
                            { flush: !0 }
                        ),
                        o.K.set(a.SV, !0),
                        s.Z.userDataCache.deleteCache(),
                        c.Pg();
                }));
        }, []),
        null
    );
}
