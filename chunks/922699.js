n.d(t, {
    $2: () => s,
    XV: () => c,
    ak: () => f,
    q3: () => l,
    rB: () => d,
    sZ: () => u,
}),
    n(413496),
    n(433524),
    n(35282);
var r = n(499533),
    i = n(492435),
    a = n(438159);
let o = RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
function s(e) {
    return o.test(e);
}
function l(e) {
    let t = e.match(o);
    return null == t || t.length < 2 ? null : t[1];
}
function c(e) {
    let t = e.match(o);
    return null == t || t.length < 3 ? null : parseInt(t[2], 10);
}
function u(e, t) {
    return null != t ? "dev://experiment/".concat(e, "/").concat(t) : "dev://experiment/".concat(e);
}
function d(e, t) {
    return null == t || null == e
        ? null
        : e.system === i.I.LEGACY
          ? r.Z.getExperimentBucketName(t.bucket)
          : e.system === i.I.APEX
            ? "Variant ".concat(t.variantId)
            : null;
}
function f(e) {
    return (0, a.v)(e).map((e) => ({
        id: e.id,
        label: e.label,
        value: e.id,
    }));
}
