"use strict";
n.d(t, { e: () => I });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(885574),
    o = n(834730),
    d = n(349288),
    c = n(939249),
    u = n(789645),
    _ = n(558001),
    E = n(835002),
    A = n(375708),
    h = n(983402);
function I(e) {
    let { label: t, labelHook: n, count: a, dismissNotice: I, className: f, noticeType: p } = e,
        T = null != I;
    r.useEffect(() => {
        (0, _.N)(p, E.YX.VIEWED);
    }, [p]);
    let m = r.useCallback(() => {
            null != I && (I(), (0, _.N)(p, E.YX.DISMISS));
        }, [p, I]),
        g = r.useCallback(() => {
            n(), (0, _.N)(p, E.YX.LEARN_MORE);
        }, [p, n]);
    return (0, i.jsxs)("div", {
        className: s()(h.I, f),
        children: [
            (0, i.jsx)(l.m, { size: "md" }),
            (0, i.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children:
                    null != a
                        ? A.intl.format(t, {
                              hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: g, children: e }, t),
                              count: a,
                          })
                        : A.intl.format(t, { hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: g, children: e }, t) }),
            }),
            T && (0, i.jsx)(c.D, { className: h.b, onClick: m, children: (0, i.jsx)(u.P, {}) }),
        ],
    });
}
