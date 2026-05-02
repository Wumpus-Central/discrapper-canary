"use strict";
n.d(t, { e: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(885574),
    l = n(834730),
    u = n(349288),
    c = n(939249),
    d = n(789645),
    _ = n(558001),
    f = n(835002),
    h = n(375708),
    p = n(751530);
function E(e) {
    let { label: t, labelHook: n, count: s, dismissNotice: E, className: m, noticeType: g } = e,
        A = null != E;
    r.useEffect(() => {
        (0, _.N)(g, f.YX.VIEWED);
    }, [g]);
    let I = r.useCallback(() => {
            null != E && (E(), (0, _.N)(g, f.YX.DISMISS));
        }, [g, E]),
        T = r.useCallback(() => {
            n(), (0, _.N)(g, f.YX.LEARN_MORE);
        }, [g, n]);
    return (0, i.jsxs)("div", {
        className: a()(p.I, m),
        children: [
            (0, i.jsx)(o.m, { size: "md" }),
            (0, i.jsx)(l.E, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children:
                    null != s
                        ? h.intl.format(t, {
                              hook: (e, t) => (0, i.jsx)(u.Anchor, { onClick: T, children: e }, t),
                              count: s,
                          })
                        : h.intl.format(t, { hook: (e, t) => (0, i.jsx)(u.Anchor, { onClick: T, children: e }, t) }),
            }),
            A && (0, i.jsx)(c.D, { className: p.b, onClick: I, children: (0, i.jsx)(d.P, {}) }),
        ],
    });
}
