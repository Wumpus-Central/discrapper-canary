var i = r(924102),
    a = r(675717),
    o = 'Expected a function';
function s(e, n, r) {
    var s = !0,
        l = !0;
    if ('function' != typeof e) throw TypeError(o);
    return (
        (0, a.Z)(r) && ((s = 'leading' in r ? !!r.leading : s), (l = 'trailing' in r ? !!r.trailing : l)),
        (0, i.Z)(e, n, {
            leading: s,
            maxWait: n,
            trailing: l
        })
    );
}
n.Z = s;
