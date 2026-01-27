n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(969043),
    o = n(226698),
    c = n(376708),
    s = n(985018),
    u = n(641131);

function d(e) {
    let t = e.isArchivedThread(),
        n = (0, c.uW)(e),
        { firstMessage: d } = (0, i.bG)([a.A], () => a.A.getMessage(e.id), [e.id]);
    return !n || t || null == d
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "resolve-report",
              label: s.intl.string(u.default["8yIKem"]),
              action: () => o.A.resolveFlag(e.id),
          });
}
