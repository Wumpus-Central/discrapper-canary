n.d(t, { e: () => g });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r);
if (221552 == n.j) var a = n(885574);
if (221552 == n.j) var o = n(834730);
if (221552 == n.j) var d = n(28863);
if (221552 == n.j) var c = n(939249);
if (221552 == n.j) var u = n(789645);
var A = n(558001),
    h = n(835002),
    E = n(375708),
    C = n(323747);
function g(e) {
    let { label: t, labelHook: n, count: r, dismissNotice: g, className: _, noticeType: T } = e,
        I = null != g;
    l.useEffect(() => {
        (0, A.N)(T, h.YX.VIEWED);
    }, [T]);
    let p = l.useCallback(() => {
            null != g && (g(), (0, A.N)(T, h.YX.DISMISS));
        }, [T, g]),
        N = l.useCallback(() => {
            (n(), (0, A.N)(T, h.YX.LEARN_MORE));
        }, [T, n]);
    return (0, i.jsxs)("div", {
        className: s()(C.I, _),
        children: [
            (0, i.jsx)(a.CircleInformationIcon, { size: "md" }),
            (0, i.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children:
                    null != r
                        ? E.intl.format(t, {
                              hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: N, children: e }, t),
                              count: r,
                          })
                        : E.intl.format(t, { hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: N, children: e }, t) }),
            }),
            I && (0, i.jsx)(c.D, { className: C.b, onClick: p, children: (0, i.jsx)(u.P, {}) }),
        ],
    });
}
