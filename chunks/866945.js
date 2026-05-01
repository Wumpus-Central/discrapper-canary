n.d(t, { e: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s);
if (21552 == n.j) var a = n(885574);
if (21552 == n.j) var o = n(834730);
if (21552 == n.j) var d = n(349288);
if (21552 == n.j) var c = n(939249);
if (21552 == n.j) var u = n(789645);
var h = n(558001),
    g = n(835002),
    A = n(985018),
    E = n(751530);
function p(e) {
    let { label: t, labelHook: n, count: s, dismissNotice: p, className: I, noticeType: C } = e,
        m = null != p;
    l.useEffect(() => {
        (0, h.N)(C, g.YX.VIEWED);
    }, [C]);
    let _ = l.useCallback(() => {
            null != p && (p(), (0, h.N)(C, g.YX.DISMISS));
        }, [C, p]),
        b = l.useCallback(() => {
            n(), (0, h.N)(C, g.YX.LEARN_MORE);
        }, [C, n]);
    return (0, i.jsxs)("div", {
        className: r()(E.I, I),
        children: [
            (0, i.jsx)(a.m, { size: "md" }),
            (0, i.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children:
                    null != s
                        ? A.intl.format(t, {
                              hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: b, children: e }, t),
                              count: s,
                          })
                        : A.intl.format(t, { hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: b, children: e }, t) }),
            }),
            m && (0, i.jsx)(c.D, { className: E.b, onClick: _, children: (0, i.jsx)(u.P, {}) }),
        ],
    });
}
