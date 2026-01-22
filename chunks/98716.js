var r = n(646344),
    i = n(412998),
    a = n(537190),
    s = Object.prototype.hasOwnProperty;
e.exports = function (e) {
    if (!r(e)) return a(e);
    var t = i(e),
        n = [];
    for (var o in e) ("constructor" == o && (t || !s.call(e, o))) || n.push(o);
    return n;
};
