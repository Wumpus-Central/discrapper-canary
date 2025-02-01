var i = n(622281),
    r = Math.floor;
e.exports =
    Number.isInteger ||
    function (e) {
        return !i(e) && isFinite(e) && r(e) === e;
    };
