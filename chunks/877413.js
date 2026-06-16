"use strict";
e.exports = function (e) {
    return ((e = String(e || "")), i.test(e)) ? "rtl" : r.test(e) ? "ltr" : "neutral";
};
var t = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
    n = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF",
    i = RegExp("^[^" + n + "]*[" + t + "]"),
    r = RegExp("^[^" + t + "]*[" + n + "]");
