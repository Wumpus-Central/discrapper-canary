n.d(t, { e: () => h });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(558001),
    d = n(835002),
    c = n(985018),
    u = n(486529);
function h(e) {
    let { label: t, labelHook: n, count: s, dismissNotice: h, className: A, noticeType: g } = e,
        m = null != h;
    l.useEffect(() => {
        (0, o.N)(g, d.YX.VIEWED);
    }, [g]);
    let p = l.useCallback(() => {
            null != h && (h(), (0, o.N)(g, d.YX.DISMISS));
        }, [g, h]),
        _ = l.useCallback(() => {
            n(), (0, o.N)(g, d.YX.LEARN_MORE);
        }, [g, n]);
    return (0, i.jsxs)("div", {
        className: a()(u.I, A),
        children: [
            (0, i.jsx)(r.mir, { size: "md" }),
            (0, i.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children:
                    null != s
                        ? c.intl.format(t, {
                              hook: (e, t) => (0, i.jsx)(r.MzZ, { onClick: _, children: e }, t),
                              count: s,
                          })
                        : c.intl.format(t, { hook: (e, t) => (0, i.jsx)(r.MzZ, { onClick: _, children: e }, t) }),
            }),
            m && (0, i.jsx)(r.DUT, { className: u.b, onClick: p, children: (0, i.jsx)(r.PGe, {}) }),
        ],
    });
}
