var r = n(580897),
    i = n(703284),
    o = Object.prototype.hasOwnProperty;
function a(e, t, n) {
    var a = e[t];
    (o.call(e, t) && i(a, n) && (void 0 !== n || t in e)) || r(e, t, n);
}
e.exports = a;
