r.d(t, { Z: () => a });
var n = r(951288);
r(647438);
var i = r(956636);
function a(e) {
    let { games: t, renderGame: r } = e;
    return (0, n.jsx)("ul", {
        className: i.coverList,
        children: t.map((e, t) => (0, n.jsx)("li", { children: r(e) }, "".concat(e.applicationId, "-").concat(t))),
    });
}
