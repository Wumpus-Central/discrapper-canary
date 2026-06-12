var i = n(805353),
    r = n(509185);
e.exports = function (e, t, n) {
    var s = !0,
        a = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    return (
        r(n) && ((s = "leading" in n ? !!n.leading : s), (a = "trailing" in n ? !!n.trailing : a)),
        i(e, t, { leading: s, maxWait: t, trailing: a })
    );
};
