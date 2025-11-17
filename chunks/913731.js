r.d(t, { Z: () => b });
var a = r(44837),
    n = r(381537),
    o = r(473749),
    s = r(639519),
    i = r.n(s),
    c = r(987714),
    u = ["data"];
function l(e) {
    var t = Object.getOwnPropertyNames(e).length;
    return "".concat(t, " ").concat(1 !== t ? "keys" : "key");
}
var f = function (e) {
    var t = e.data,
        r = (0, n.Z)(e, u);
    return o.createElement(
        c.Z,
        (0, a.Z)({}, r, {
            data: t,
            nodeType: "Object",
            nodeTypeIndicator: "Error" === r.nodeType ? "Error()" : "{}",
            createItemString: l,
            expandable: Object.getOwnPropertyNames(t).length > 0,
        }),
    );
};
f.propTypes = {
    data: i().object,
    nodeType: i().string.isRequired,
};
let b = f;
