n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(82977);
function a(e) {
    let { games: t, renderGame: n } = e;
    return (0, r.jsx)("ul", {
        className: i.coverList,
        children: t.map((e, t) => (0, r.jsx)("li", { children: n(e, t) }, e.applicationId)),
    });
}
