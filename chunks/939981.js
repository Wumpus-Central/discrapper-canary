a.d(t, { A: () => c });
var n = a(773669);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { month: "numeric", day: "numeric" };
    return new Date(e).toLocaleDateString(n.default.locale, t);
}
