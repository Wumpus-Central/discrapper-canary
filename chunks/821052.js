a.d(t, { A: () => o });
var n = a(627968),
    l = a(554146),
    i = a(270003),
    s = a(771781),
    r = a(963763);
function o(e) {
    let { searchQuery: t = "" } = e,
        a = (0, s.Ay)((e) => e.recentlyShown)
            .map((e) => l.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length
        ? null
        : (0, n.jsx)(i.n, { label: "Recently Shown", children: (0, n.jsx)(r.A, { items: a }) });
}
