(l.d(t, { Sj: () => u, TN: () => r, Tj: () => o, U5: () => s }), l(582128));
var n = l(17928);
(l(47167), l(808728), l(994500), l(351906), l(287809), l(562153), l(644968));
var a = l(260498),
    i = l(246338);
function r(e) {
    return Array.isArray(e) ? e : "string" == typeof e && "" !== e ? [e] : [];
}
function u(e, t, l) {
    let n = r(t);
    return 0 === n.length
        ? [...e]
        : [...n.map((t) => e.find((e) => e.id === t) ?? l(t)), ...e.filter((e) => !n.includes(e.id))];
}
function s(e, t) {
    return t.length < 25 ? [...e] : e.map((e) => (t.includes(e.id) ? e : { ...e, disabled: !0 }));
}
function o(e, t) {
    return (0, n.bG)([a.Ay], () => (0, i.Ux)(a.Ay.getProject(e), t), [t, e]);
}
