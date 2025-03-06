n.d(t, { e3: () => s }), n(566702), n(301563), n(5254);
var i = n(271383),
    r = n(699516),
    l = n(624138),
    o = n(51144);
function a(e) {
    return (0, l._I)(e.toLocaleLowerCase()).trim();
}
function s(e) {
    let t = {},
        n = r.Z.getNickname(e.id);
    null != n && (t[n] = a(n).split(' '));
    let l = o.ZP.getGlobalName(e);
    return (
        null != l && null == t[l] && (t[l] = a(l).split(' ')),
        (t[e.username] = a(e.username).split(' ')),
        i.ZP.getNicknames(e.id).forEach((e) => {
            null == t[e] && (t[e] = a(e).split(' '));
        }),
        {
            names: t,
            nick: n
        }
    );
}
n(981631);
