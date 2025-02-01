var i = n(294377),
    r = n(96403),
    a = i('Symbol'),
    s = a.keyFor,
    o = r(a.prototype.valueOf);
e.exports =
    a.isRegisteredSymbol ||
    function (e) {
        try {
            return void 0 !== s(o(e));
        } catch (e) {
            return !1;
        }
    };
