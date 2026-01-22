n.d(t, { A: () => o });
var a = n(627968),
    l = n(554146),
    i = n(397927),
    r = n(771781),
    s = n(963763);
function o(e) {
    let { searchQuery: t = "" } = e,
        n = (0, r.Ay)((e) => e.recentlyShown)
            .map((e) => l.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === n.length
        ? null
        : (0, a.jsx)(i.nVY, {
              label: "Recently Shown",
              children: (0, a.jsx)(s.A, { items: n }),
          });
}
