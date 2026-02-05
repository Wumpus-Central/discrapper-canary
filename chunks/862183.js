"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(442433),
    o = n(611010),
    l = n(735991),
    u = n(297486),
    c = n(346446),
    d = n(717048),
    _ = n(448137),
    f = n(262547),
    p = n(291071);
function h(e) {
    let { command: t, application: n, onClick: h, query: m, searchResultsPosition: g } = e,
        E = i.useCallback(
            (e) => {
                if ((0, l.$B)(n)) {
                    let t = n instanceof o.Ay ? n : o.Ay.createFromServer(n);
                    (0, s.jA)(e, (e) => (0, r.jsx)(c.A, { application: t, ...e }));
                }
            },
            [n],
        ),
        { iconURL: A, name: I, description: T } = i.useMemo(() => (0, l.X2)(n, { fakeAppIconURL: p }), [n]),
        y = i.useMemo(() => {
            let e = t?.displayDescription ?? T;
            return null == e ? null : (0, u.SD)(e, void 0);
        }, [T, t?.displayDescription]),
        { trackSearchResultsItemImpressionRef: S } = (0, _.A)({
            applicationId: n.id,
            commandId: t?.id,
            query: m,
            searchResultsPosition: g,
        });
    return (0, r.jsx)(a.DUT, {
        className: f.vk,
        innerRef: (e) => {
            S.current = e;
        },
        onClick: h,
        onContextMenu: E,
        children: (0, r.jsxs)(a.M1G, {
            className: f.ao,
            children: [
                (0, r.jsx)(d.A, { src: A, className: f.Kk, "aria-hidden": !0, rendersPlaceholder: !0 }),
                (0, r.jsxs)("div", {
                    className: f.Jn,
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: t?.displayName ?? I,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: y,
                        }),
                    ],
                }),
                null != t
                    ? (0, r.jsx)(a.Text, {
                          className: f.Pn,
                          variant: "text-sm/normal",
                          color: "text-subtle",
                          children: I,
                      })
                    : null,
                (0, r.jsx)("div", { className: f.V1 }),
            ],
        }),
    });
}
