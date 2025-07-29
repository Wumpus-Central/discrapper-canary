n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var o = n(750312),
    i = n(30344),
    a = n(388032);
function l(e) {
    let { user: t, widget: n, loading: l } = e;
    return (0, r.jsx)(o.Z, {
        title: a.intl.string(a.t.SqNnur),
        subtitle: a.intl.format(a.t['zR1+09'], { numGames: 3 }),
        children: (0, r.jsx)(i.Z, {
            games: n.games,
            userId: t.id,
            loading: l
        })
    });
}
