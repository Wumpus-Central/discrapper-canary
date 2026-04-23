s.d(t, { A: () => h });
var l = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(475825),
    o = s(351633),
    d = s(663535),
    c = s(985018),
    u = s(351848);
function h(e) {
    let { channel: t, threadIds: s, startThread: a, goToThread: h } = e,
        g = n.useCallback(
            (e) => (0, l.jsx)(d.A, { threadId: s[e.row], goToThread: h }, `${e.section}-${e.row}`),
            [s, h],
        );
    return 0 === s.length
        ? (0, l.jsx)(o.A, { channel: t, header: c.intl.string(c.t.HgTQ8p), startThread: a })
        : (0, l.jsx)(i.OZ, {
              className: r()(u.p_, u.uW),
              fade: !0,
              sections: [s.length],
              sectionHeight: 0,
              rowHeight: 80,
              renderRow: g,
              renderSection: () => null,
              chunkSize: 20,
          });
}
