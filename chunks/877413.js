t.exports = function (t) {
    return ((t = String(t || "")), p.test(t)) ? "rtl" : s.test(t) ? "ltr" : "neutral";
};
var r = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
    e = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF",
    p = RegExp("^[^" + e + "]*[" + r + "]"),
    s = RegExp("^[^" + r + "]*[" + e + "]");
