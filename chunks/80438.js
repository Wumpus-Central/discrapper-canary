var e = n(294377),
    o = n(96403),
    i = e('Symbol'),
    u = i.keyFor,
    s = o(i.prototype.valueOf);
t.exports =
    i.isRegisteredSymbol ||
    function (t) {
        try {
            return void 0 !== u(s(t));
        } catch (t) {
            return !1;
        }
    };
