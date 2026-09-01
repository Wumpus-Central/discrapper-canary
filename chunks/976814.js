l.d(t, { A: () => r });
var n = l(477900);
l(582128);
var a = l(192308);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, a.openModalLazy)(async () => {
        let { default: a } = await Promise.all([l.e("668351"), l.e("700579")]).then(l.bind(l, 451310));
        return (l) =>
            (0, n.jsx)(a, { ...l, projectId: e, scopeKeys: t.scopeKeys, note: t.note, notifyAgent: t.notifyAgent });
    });
}
