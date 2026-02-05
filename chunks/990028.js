t.d(e, { A: () => u });
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(969043),
    d = t(226698),
    o = t(376708),
    s = t(985018),
    c = t(641131);
function u(n) {
    let e = n.isArchivedThread(),
        t = (0, o.uW)(n),
        { firstMessage: u } = (0, r.bG)([a.A], () => a.A.getMessage(n.id), [n.id]);
    return !t || e || null == u
        ? null
        : (0, i.jsx)(l.Drp, {
              id: "resolve-report",
              label: s.intl.string(c.default["8yIKem"]),
              action: () => d.A.resolveFlag(n.id),
          });
}
