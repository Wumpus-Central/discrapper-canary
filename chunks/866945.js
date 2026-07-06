"use strict";
n.d(t, { e: () => p });
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
    h = n(835002),
    f = n(375708),
    E = n(751530);
function p(e) {
    let { label: t, labelHook: n, count: s, dismissNotice: p, className: m, noticeType: g } = e,
        A = null != p;
    r.useEffect(() => {
        (0, _.N)(g, h.YX.VIEWED);
    }, [g]);
    let I = r.useCallback(() => {
            null != p && (p(), (0, _.N)(g, h.YX.DISMISS));
        }, [g, p]),
        T = r.useCallback(() => {
            n(), (0, _.N)(g, h.YX.LEARN_MORE);
        }, [g, n]);
    return (0, i.jsxs)("div", {
        className: a()(E.I, m),
        children: [
            (0, i.jsx)(o.m, { size: "md" }),
            (0, i.jsx)(l.E, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children:
                    null != s
                        ? f.intl.format(t, {
                              hook: (e, t) => (0, i.jsx)(u.Anchor, { onClick: T, children: e }, t),
                              count: s,
                          })
                        : f.intl.format(t, { hook: (e, t) => (0, i.jsx)(u.Anchor, { onClick: T, children: e }, t) }),
            }),
            A && (0, i.jsx)(c.D, { className: E.b, onClick: I, children: (0, i.jsx)(d.P, {}) }),
        ],
    });
}
