r.d(n, {
    JL: function () {
        return s;
    },
    i9: function () {
        return o;
    }
});
var i = r(47120);
let a = (0, r(15729).U)(() => ({ hasFiredFromMessage: new Set() }));
function o(e) {
    let { hasFiredFromMessage: n } = a.getState();
    n.add(e), a.setState({ hasFiredFromMessage: n });
}
function s(e) {
    let { hasFiredFromMessage: n } = a.getState();
    return n.has(e);
}
