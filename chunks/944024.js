var t = Math.ceil,
    e = Math.floor;
r.exports =
    Math.trunc ||
    function (r) {
        var n = +r;
        return (n > 0 ? e : t)(n);
    };
