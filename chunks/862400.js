var n = r(591082);
e.exports = function (e) {
    return ("number" == typeof e || "bigint" == typeof e) && !n(e) && e !== 1 / 0 && e !== -1 / 0;
};
