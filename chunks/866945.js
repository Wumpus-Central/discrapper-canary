n.d(t, { e: () => g });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r);
if (21552 == n.j) var a = n(885574);
if (21552 == n.j) var o = n(834730);
if (21552 == n.j) var d = n(349288);
if (21552 == n.j) var c = n(939249);
if (21552 == n.j) var u = n(789645);
var A = n(558001),
    h = n(835002),
    E = n(375708),
    C = n(751530);
function g(e) {
    let { label: t, labelHook: n, count: r, dismissNotice: g, className: _, noticeType: I } = e,
        T = null != g;
    l.useEffect(() => {
        (0, A.N)(I, h.YX.VIEWED);
    }, [I]);
    let N = l.useCallback(() => {
            null != g && (g(), (0, A.N)(I, h.YX.DISMISS));
        }, [I, g]),
        p = l.useCallback(() => {
            n(), (0, A.N)(I, h.YX.LEARN_MORE);
        }, [I, n]);
    return (0, i.jsxs)("div", {
        className: s()(C.I, _),
        children: [
            (0, i.jsx)(a.m, { size: "md" }),
            (0, i.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children:
                    null != r
                        ? E.intl.format(t, {
                              hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: p, children: e }, t),
                              count: r,
                          })
                        : E.intl.format(t, { hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: p, children: e }, t) }),
            }),
            T && (0, i.jsx)(c.D, { className: C.b, onClick: N, children: (0, i.jsx)(u.P, {}) }),
        ],
    });
}
