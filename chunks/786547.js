n.d(t, { Z: () => a });
var r = n(924102),
    i = n(675717),
    o = 'Expected a function';
let a = function (e, t, n) {
    var a = !0,
        s = !0;
    if ('function' != typeof e) throw TypeError(o);
    return (
        (0, i.Z)(n) && ((a = 'leading' in n ? !!n.leading : a), (s = 'trailing' in n ? !!n.trailing : s)),
        (0, r.Z)(e, t, {
            leading: a,
            maxWait: t,
            trailing: s
        })
    );
};
