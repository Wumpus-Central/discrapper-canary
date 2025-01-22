var i = r(294377),
    a = r(96403),
    o = i('Symbol'),
    s = o.keyFor,
    l = a(o.prototype.valueOf);
e.exports =
    o.isRegisteredSymbol ||
    function (e) {
        try {
            return void 0 !== s(l(e));
        } catch (e) {
            return !1;
        }
    };
