(n.d(t, { Sj: () => u, TN: () => r, Tj: () => s }), n(582128));
var l = n(17928);
(n(47167), n(808728), n(994500), n(287809), n(562153), n(644968));
var i = n(260498),
    a = n(246338);
function r(e) {
    return Array.isArray(e) ? e : "string" == typeof e && "" !== e ? [e] : [];
}
function u(e, t, n) {
    let l = r(t);
    return 0 === l.length
        ? [...e]
        : [...l.map((t) => e.find((e) => e.id === t) ?? n(t)), ...e.filter((e) => !l.includes(e.id))];
}
function s(e, t) {
    return (0, l.bG)([i.Ay], () => (0, a.Ux)(i.Ay.getProject(e), t), [t, e]);
}
