var r = n(111956),
    i = n(646344),
    a = "Expected a function";
e.exports = function (e, t, n) {
    var s = !0,
        o = !0;
    if ("function" != typeof e) throw TypeError(a);
    return (
        i(n) && ((s = "leading" in n ? !!n.leading : s), (o = "trailing" in n ? !!n.trailing : o)),
        r(e, t, {
            leading: s,
            maxWait: t,
            trailing: o,
        })
    );
};
