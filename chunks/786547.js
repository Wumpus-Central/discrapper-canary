n.d(t, { Z: () => s });
var i = n(924102),
    r = n(675717),
    a = 'Expected a function';
let s = function (e, t, n) {
    var s = !0,
        o = !0;
    if ('function' != typeof e) throw TypeError(a);
    return (
        (0, r.Z)(n) && ((s = 'leading' in n ? !!n.leading : s), (o = 'trailing' in n ? !!n.trailing : o)),
        (0, i.Z)(e, t, {
            leading: s,
            maxWait: t,
            trailing: o
        })
    );
};
