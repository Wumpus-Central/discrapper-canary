(n.d(t, { Sj: () => u, TN: () => a, Tj: () => o, U5: () => s }), n(582128));
var l = n(17928);
(n(47167), n(808728), n(994500), n(351906), n(287809), n(562153), n(644968));
var i = n(260498),
    r = n(246338);
function a(e) {
    return Array.isArray(e) ? e : "string" == typeof e && "" !== e ? [e] : [];
}
function u(e, t, n) {
    let l = a(t);
    return 0 === l.length
        ? [...e]
        : [...l.map((t) => e.find((e) => e.id === t) ?? n(t)), ...e.filter((e) => !l.includes(e.id))];
}
function s(e, t) {
    return t.length < 25 ? [...e] : e.map((e) => (t.includes(e.id) ? e : { ...e, disabled: !0 }));
}
function o(e, t) {
    return (0, l.bG)([i.Ay], () => (0, r.Ux)(i.Ay.getProject(e), t), [t, e]);
}
