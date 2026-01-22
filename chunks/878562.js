var r = n(428427),
    i = "​",
    a = "᠎";
e.exports = function () {
    return String.prototype.trim &&
        i.trim() === i &&
        a.trim() === a &&
        ("_" + a).trim() === "_" + a &&
        (a + "_").trim() === a + "_"
        ? String.prototype.trim
        : r;
};
