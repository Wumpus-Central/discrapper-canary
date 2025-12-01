n.d(t, { e3: () => s }), n(781311), n(35282), n(5254);
var i = n(271383),
    r = n(699516),
    l = n(624138),
    a = n(51144);
function o(e) {
    return (0, l._I)(e.toLocaleLowerCase()).trim();
}
function s(e) {
    let t = {},
        n = r.Z.getNickname(e.id);
    null != n && (t[n] = o(n).split(" "));
    let l = a.ZP.getGlobalName(e);
    return (
        null != l && null == t[l] && (t[l] = o(l).split(" ")),
        (t[e.username] = o(e.username).split(" ")),
        i.ZP.getNicknames(e.id).forEach((e) => {
            null == t[e] && (t[e] = o(e).split(" "));
        }),
        {
            names: t,
            nick: n,
        }
    );
}
n(981631);
