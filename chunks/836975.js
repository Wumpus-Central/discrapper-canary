n.d(t, { A: () => h });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    i = n(351633),
    c = n(663535),
    u = n(985018),
    d = n(340399);
function h(e) {
    let { channel: t, threadIds: n, startThread: a, goToThread: h } = e,
        g = l.useCallback(
            (e) =>
                (0, r.jsx)(
                    c.A,
                    {
                        threadId: n[e.row],
                        goToThread: h,
                    },
                    "".concat(e.section, "-").concat(e.row),
                ),
            [n, h],
        );
    return 0 === n.length
        ? (0, r.jsx)(i.A, {
              channel: t,
              header: u.intl.string(u.t.HgTQ8p),
              startThread: a,
          })
        : (0, r.jsx)(o.B8B, {
              className: s()(d.p_, d.uW),
              fade: !0,
              sections: [n.length],
              sectionHeight: 0,
              rowHeight: 80,
              renderRow: g,
              renderSection: () => null,
              chunkSize: 20,
          });
}
