n.d(t, { e: () => C });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r);
if (221552 == n.j) var a = n(885574);
if (221552 == n.j) var o = n(834730);
if (221552 == n.j) var d = n(28863);
if (221552 == n.j) var c = n(939249);
if (221552 == n.j) var u = n(789645);
var h = n(558001),
    A = n(835002),
    E = n(375708),
    g = n(323747);
function C(e) {
    let { label: t, labelHook: n, count: r, dismissNotice: C, className: _, noticeType: I } = e,
        T = null != C;
    l.useEffect(() => {
        (0, h.N)(I, A.YX.VIEWED);
    }, [I]);
    let p = l.useCallback(() => {
            null != C && (C(), (0, h.N)(I, A.YX.DISMISS));
        }, [I, C]),
        S = l.useCallback(() => {
            n(), (0, h.N)(I, A.YX.LEARN_MORE);
        }, [I, n]);
    return (0, i.jsxs)("div", {
        className: s()(g.I, _),
        children: [
            (0, i.jsx)(a.CircleInformationIcon, { size: "md" }),
            (0, i.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children:
                    null != r
                        ? E.intl.format(t, {
                              hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: S, children: e }, t),
                              count: r,
                          })
                        : E.intl.format(t, { hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: S, children: e }, t) }),
            }),
            T && (0, i.jsx)(c.D, { className: g.b, onClick: p, children: (0, i.jsx)(u.P, {}) }),
        ],
    });
}
