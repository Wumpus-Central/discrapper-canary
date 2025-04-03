r.d(t, { Z: () => a });
var n = r(924102),
    o = r(675717);
let a = function (e, t, r) {
    var a = !0,
        i = !0;
    if ('function' != typeof e) throw TypeError('Expected a function');
    return (
        (0, o.Z)(r) && ((a = 'leading' in r ? !!r.leading : a), (i = 'trailing' in r ? !!r.trailing : i)),
        (0, n.Z)(e, t, {
            leading: a,
            maxWait: t,
            trailing: i
        })
    );
};
