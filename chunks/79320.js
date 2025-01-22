r.d(n, {
    Vb: function () {
        return u;
    },
    Yk: function () {
        return s;
    },
    oU: function () {
        return o;
    },
    zP: function () {
        return l;
    }
});
var i = r(15729),
    a = r(731965);
let o = (0, i.U)((e) => ({ inDndMode: !1 }));
function s(e) {
    (0, a.j)(() => o.setState({ inDndMode: e }));
}
function l() {
    return o((e) => e.inDndMode);
}
function u() {
    return o.getState().inDndMode;
}
