l.d(s, { A: () => a });
var i = l(773669);
function a(e) {
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { month: "numeric", day: "numeric" };
    return new Date(e).toLocaleDateString(i.default.locale, s);
}
