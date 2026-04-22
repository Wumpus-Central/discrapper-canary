n.d(t, { A: () => x });
var l = n(627968),
    i = n(64700),
    a = n(939249),
    s = n(247928),
    r = n(534514),
    o = n(834730),
    c = n(442433),
    d = n(611010),
    u = n(735991),
    m = n(297486),
    p = n(346446),
    _ = n(717048),
    A = n(448137),
    h = n(967612),
    f = n(291071);
function x(e) {
    let { command: t, application: n, onClick: x, query: C, searchResultsPosition: N } = e,
        g = i.useCallback(
            (e) => {
                if ((0, u.$B)(n)) {
                    let t = n instanceof d.Ay ? n : d.Ay.createFromServer(n);
                    (0, c.jA)(e, (e) => (0, l.jsx)(p.A, { application: t, ...e }));
                }
            },
            [n],
        ),
        { iconURL: E, name: v, description: b } = i.useMemo(() => (0, u.X2)(n, { fakeAppIconURL: f }), [n]),
        I = i.useMemo(() => {
            let e = t?.displayDescription ?? b;
            return null == e ? null : (0, m.SD)(e, void 0);
        }, [b, t?.displayDescription]),
        { trackSearchResultsItemImpressionRef: y } = (0, A.A)({
            applicationId: n.id,
            commandId: t?.id,
            query: C,
            searchResultsPosition: N,
        });
    return (0, l.jsx)(a.D, {
        className: h.vk,
        innerRef: (e) => {
            y.current = e;
        },
        onClick: x,
        onContextMenu: g,
        children: (0, l.jsxs)(s.M, {
            className: h.ao,
            children: [
                (0, l.jsx)(_.A, { src: E, className: h.Kk, "aria-hidden": !0, rendersPlaceholder: !0 }),
                (0, l.jsxs)("div", {
                    className: h.Jn,
                    children: [
                        (0, l.jsx)(r.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: t?.displayName ?? v,
                        }),
                        (0, l.jsx)(o.E, { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: I }),
                    ],
                }),
                null != t
                    ? (0, l.jsx)(o.E, { className: h.Pn, variant: "text-sm/normal", color: "text-subtle", children: v })
                    : null,
                (0, l.jsx)("div", { className: h.V1 }),
            ],
        }),
    });
}
