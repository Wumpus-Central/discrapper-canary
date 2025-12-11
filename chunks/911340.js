n.d(t, { n: () => s });
var r = n(343573),
    i = n(98076),
    a = n(454207);
let o = 100;
function s(e, t) {
    let n = (0, a.s3)(),
        s = (0, a.aF)();
    if (!n) return;
    let { beforeBreadcrumb: l = null, maxBreadcrumbs: c = o } = n.getOptions();
    if (c <= 0) return;
    let u = {
            timestamp: (0, r.yW)(),
            ...e,
        },
        d = l ? (0, i.Cf)(() => l(u, t)) : u;
    null !== d && (n.emit && n.emit("beforeAddBreadcrumb", d, t), s.addBreadcrumb(d, c));
}
