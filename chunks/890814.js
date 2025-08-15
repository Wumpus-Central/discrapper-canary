n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(443933);
function l(e) {
    let { games: t, renderGame: n } = e;
    return (0, r.jsx)("ul", {
        className: i.coverList,
        children: t.map((e, t) => (0, r.jsx)("li", { children: n(e) }, "".concat(e.applicationId, "-").concat(t))),
    });
}
