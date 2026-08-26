n.d(t, { A: () => r });
var l = n(477900);
n(582128);
var a = n(192308);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, a.openModalLazy)(async () => {
        let { default: a } = await Promise.all([n.e("668351"), n.e("700579")]).then(n.bind(n, 451310));
        return (n) =>
            (0, l.jsx)(a, { ...n, projectId: e, scopeKeys: t.scopeKeys, note: t.note, notifyAgent: t.notifyAgent });
    });
}
