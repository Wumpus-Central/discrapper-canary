"use strict";
n.d(t, { Hf: () => d, Hu: () => _, RR: () => c, S3: () => u, gU: () => l });
var r = n(64700),
    i = n(417597),
    s = n(79387),
    a = n(67480),
    o = n(156312);
function l() {
    let { defaultFetchableSkuIds: e } = (0, o.P5)();
    return (0, i.cf)([a.A], () => {
        let t = {};
        for (let n of e) t[n] = a.A.get(n) ?? void 0;
        return t;
    }, [e]);
}
function u() {
    let { selectedSkuId: e } = (0, o.P5)(),
        t = l();
    return null != e ? t[e] : void 0;
}
function c() {
    let { defaultFetchableSkuIds: e } = (0, o.P5)();
    return (0, i.cf)([s.A], () => {
        let t = {};
        for (let n of e) t[n] = s.A.getPricesForSku(n) ?? void 0;
        return t;
    }, [e]);
}
function d() {
    let { selectedSkuId: e, paymentSourceId: t } = (0, o.P5)(),
        n = c();
    return r.useMemo(() => {
        if (null == e) return null;
        let r = n[e];
        return null == r ? null : (r[t ?? s.B] ?? r[s.B]);
    }, [e, t, n]);
}
function _() {
    let { defaultFetchableSkuIds: e } = (0, o.P5)();
    return (0, i.bG)([a.A], () => e.every((e) => !a.A.isFetching(e) && null != a.A.get(e)), [e]);
}
