n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(956636);
function a(e) {
    let { games: t, renderGame: n } = e;
    return (0, r.jsx)("ul", {
        className: i.coverList,
        children: t.map((e, t) => (0, r.jsx)("li", { children: n(e, t) }, e.applicationId)),
    });
}
