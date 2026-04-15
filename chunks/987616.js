"use strict";
n.d(t, { Hf: () => _, Hu: () => f, RR: () => d, S3: () => c, gU: () => u });
var r = n(64700),
    i = n(417597),
    s = n(79387),
    a = n(67480),
    o = n(413748),
    l = n(156312);
function u() {
    let { defaultFetchableSkuIds: e } = (0, l.P5)();
    return (0, i.cf)([a.A], () => {
        let t = {};
        for (let n of e) t[n] = a.A.get(n) ?? void 0;
        return t;
    }, [e]);
}
function c() {
    let e = (0, o.t4)((e) => e.selectedSkuId),
        t = u();
    return null != e ? t[e] : void 0;
}
function d() {
    let { defaultFetchableSkuIds: e } = (0, l.P5)();
    return (0, i.cf)([s.A], () => {
        let t = {};
        for (let n of e) t[n] = s.A.getPricesForSku(n) ?? void 0;
        return t;
    }, [e]);
}
function _() {
    let e = (0, o.t4)((e) => e.selectedSkuId),
        { paymentSourceId: t } = (0, l.P5)(),
        n = d();
    return r.useMemo(() => {
        if (null == e) return null;
        let r = n[e];
        return null == r ? null : (r[t ?? s.B] ?? r[s.B]);
    }, [e, t, n]);
}
function f() {
    let { defaultFetchableSkuIds: e } = (0, l.P5)();
    return (0, i.bG)([a.A], () => e.every((e) => !a.A.isFetching(e) && null != a.A.get(e)), [e]);
}
