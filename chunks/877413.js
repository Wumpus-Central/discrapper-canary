e.exports = a;
var t = "֑-߿יִ-﷽ﹰ-ﻼ",
    n = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
    r = RegExp("^[^" + n + "]*[" + t + "]"),
    i = RegExp("^[^" + t + "]*[" + n + "]");

function a(e) {
    return ((e = String(e || "")), r.test(e)) ? "rtl" : i.test(e) ? "ltr" : "neutral";
}
