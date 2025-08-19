r.d(t, { Z: () => i });
var n = r(951288);
r(647438);
var l = r(443933);
function i(e) {
    let { games: t, renderGame: r } = e;
    return (0, n.jsx)("ul", {
        className: l.coverList,
        children: t.map((e, t) => (0, n.jsx)("li", { children: r(e) }, "".concat(e.applicationId, "-").concat(t))),
    });
}
