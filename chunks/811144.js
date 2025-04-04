n.d(t, { Z: () => o });
var r = n(742230);
function o(e, t) {
    if (null == e) return {};
    var n = {};
    for (var o in e)
        if ({}.hasOwnProperty.call(e, o)) {
            if (-1 !== r(t).call(t, o)) continue;
            n[o] = e[o];
        }
    return n;
}
