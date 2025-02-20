var r = n(622281),
    i = Math.floor;
e.exports =
    Number.isInteger ||
    function (e) {
        return !r(e) && isFinite(e) && i(e) === e;
    };
