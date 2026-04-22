var r = n(111956),
    i = n(646344);
e.exports = function (e, t, n) {
    var s = !0,
        a = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    return (
        i(n) && ((s = "leading" in n ? !!n.leading : s), (a = "trailing" in n ? !!n.trailing : a)),
        r(e, t, { leading: s, maxWait: t, trailing: a })
    );
};
