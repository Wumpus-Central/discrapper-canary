n.d(t, { e: () => _ });
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
    E = n(835002),
    h = n(375708),
    C = n(323747);
function _(e) {
    let { label: t, labelHook: n, count: r, dismissNotice: _, className: g, noticeType: I } = e,
        T = null != _;
    l.useEffect(() => {
        (0, A.N)(I, E.YX.VIEWED);
    }, [I]);
    let p = l.useCallback(() => {
            null != _ && (_(), (0, A.N)(I, E.YX.DISMISS));
        }, [I, _]),
        N = l.useCallback(() => {
            (n(), (0, A.N)(I, E.YX.LEARN_MORE));
        }, [I, n]);
    return (0, i.jsxs)("div", {
        className: s()(C.I, g),
        children: [
            (0, i.jsx)(a.CircleInformationIcon, { size: "md" }),
            (0, i.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children:
                    null != r
                        ? h.intl.format(t, {
                              hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: N, children: e }, t),
                              count: r,
                          })
                        : h.intl.format(t, { hook: (e, t) => (0, i.jsx)(d.Anchor, { onClick: N, children: e }, t) }),
            }),
            T && (0, i.jsx)(c.D, { className: C.b, onClick: p, children: (0, i.jsx)(u.P, {}) }),
        ],
    });
}
