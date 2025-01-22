var i = r(580897),
    a = r(703284),
    o = Object.prototype.hasOwnProperty;
function s(e, n, r) {
    var s = e[n];
    (!(o.call(e, n) && a(s, r)) || (void 0 === r && !(n in e))) && i(e, n, r);
}
e.exports = s;
