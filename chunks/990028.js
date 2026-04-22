n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(477782),
    a = n(969043),
    u = n(226698),
    o = n(376708),
    d = n(985018),
    s = n(221314);
function c(e) {
    let t = e.isArchivedThread(),
        n = (0, o.uW)(e),
        { firstMessage: c } = (0, l.bG)([a.A], () => a.A.getMessage(e.id), [e.id]);
    return !n || t || null == c
        ? null
        : (0, r.jsx)(i.Dr, {
              id: "resolve-report",
              label: d.intl.string(s.default["8yIKem"]),
              action: () => u.A.resolveFlag(e.id),
          });
}
