n.d(t, { e: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l);
if (21552 == n.j) var r = n(885574);
if (21552 == n.j) var o = n(834730);
if (21552 == n.j) var d = n(349288);
if (21552 == n.j) var u = n(939249);
if (21552 == n.j) var c = n(789645);
var g = n(558001),
    m = n(835002),
    _ = n(985018),
    A = n(751530);
function h(e) {
    let { label: t, labelHook: n, count: l, dismissNotice: h, className: p, noticeType: x } = e,
        E = null != h;
    s.useEffect(() => {
        (0, g.N)(x, m.YX.VIEWED);
    }, [x]);
    let T = s.useCallback(() => {
            null != h && (h(), (0, g.N)(x, m.YX.DISMISS));
        }, [x, h]),
        S = s.useCallback(() => {
            n(), (0, g.N)(x, m.YX.LEARN_MORE);
        }, [x, n]);
    return (0, i.jsxs)("div", {
        className: a()(A.I, p),
        children: [
            (0, i.jsx)(r.m, { size: "md" }),
            (0, i.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children:
                    null != l
                        ? _.intl.format(t, {
                              hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: S, children: e }, t),
                              count: l,
                          })
                        : _.intl.format(t, { hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: S, children: e }, t) }),
            }),
            E && (0, i.jsx)(u.D, { className: A.b, onClick: T, children: (0, i.jsx)(c.P, {}) }),
        ],
    });
}
