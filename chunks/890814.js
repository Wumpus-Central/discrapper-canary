n.d(t, { Z: () => i });
var r = n(255367);
n(73800);
var l = n(443933);
function i(e) {
    let { games: t, renderGame: n } = e;
    return (0, r.jsx)("ul", {
        className: l.coverList,
        children: t.map((e, t) => (0, r.jsx)("li", { children: n(e) }, "".concat(e.applicationId, "-").concat(t))),
    });
}
