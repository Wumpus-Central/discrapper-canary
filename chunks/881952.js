r.d(n, {
    Nd: function () {
        return o;
    },
    bk: function () {
        return a;
    },
    d3: function () {
        return s;
    },
    oP: function () {
        return l;
    }
});
var i = r(246364);
function a(e) {
    return e === i.wB.APPROVED || e === i.wB.REJECTED;
}
function o(e) {
    return e === i.wB.SUBMITTED;
}
function s(e) {
    return e.applicationStatus === i.wB.APPROVED && null != e.lastSeen;
}
function l(e) {
    return a(e.applicationStatus) && null == e.lastSeen;
}
