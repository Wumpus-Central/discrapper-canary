n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(969043),
    o = n(226698),
    s = n(376708),
    c = n(985018),
    u = n(641131),
    d = n(968747);
function f(e) {
    let t = e.isArchivedThread(),
        n = (0, s.uW)(e),
        { firstMessage: f } = (0, i.bG)([a.A], () => a.A.getMessage(e.id), [e.id]);
    return !n || t || null == f
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "resolve-report",
              label: c.intl.string(u.default["8yIKem"]),
              action: () => o.A.resolveFlag(e.id),
              className: d.j,
          });
}
