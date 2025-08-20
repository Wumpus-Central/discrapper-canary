var r = n(207549).getPunctuation(),
    i = "['\u2018\u2019]",
    a = "\\s|(?![_])" + r,
    o = RegExp("^(?:" + a + ")*(?:" + i + "|(?!" + a + ").)*(?:(?!" + a + ").)"),
    s = RegExp("(?:(?!" + a + ").)(?:" + i + "|(?!" + a + ").)*(?:" + a + ")*$");
function l(e, t) {
    var n = t ? s.exec(e) : o.exec(e);
    return n ? n[0] : e;
}
e.exports = {
    getBackward: function (e) {
        return l(e, !0);
    },
    getForward: function (e) {
        return l(e, !1);
    },
};
