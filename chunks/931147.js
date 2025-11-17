r.d(t, { Z: () => b });
var a = r(44837),
    n = r(381537),
    o = r(473749),
    s = r(639519),
    i = r.n(s),
    c = r(987714),
    u = ["data"];
function l(e) {
    return "".concat(e.length, " ").concat(1 !== e.length ? "items" : "item");
}
var f = function (e) {
    var t = e.data,
        r = (0, n.Z)(e, u);
    return o.createElement(
        c.Z,
        (0, a.Z)({}, r, {
            data: t,
            nodeType: "Array",
            nodeTypeIndicator: "[]",
            createItemString: l,
            expandable: t.length > 0,
        }),
    );
};
f.propTypes = { data: i().array };
let b = f;
