a.d(i, { A: () => N });
var n = a(627968),
    t = a(64700),
    l = a(503698),
    s = a.n(l),
    c = a(311907),
    r = a(939249),
    o = a(834730),
    d = a(544420),
    p = a(429913),
    u = a(760751),
    m = a(486020),
    h = a(403362),
    f = a(183555),
    x = a(633075),
    g = a(289173),
    I = a(946356),
    A = a(939496),
    j = a(996988),
    v = a(985018),
    E = a(216914);
function N(e) {
    var i;
    let a,
        { widgets: l = [], onClick: N, className: b } = e,
        { trackUserProfileAction: R } = (0, f.NJ)(),
        w =
            ((i = l.filter((e) => e instanceof x.R)),
            (a = (0, p.A)(i.map((e) => e.applicationId))),
            (0, c.cf)([u.A], () =>
                Object.fromEntries(
                    a
                        .filter(h.Vq)
                        .map((e) => [e.id, u.A.getGameByApplication(e)])
                        .filter((e) => {
                            let [i, a] = e;
                            return null != a;
                        }),
                ),
            )),
        P = (0, t.useMemo)(
            () => [
                ...new Set(
                    l
                        .map((e) =>
                            e instanceof g.Yy
                                ? e.games.map((e) => e.applicationId)
                                : e instanceof x.R
                                  ? w[e.applicationId]?.id
                                  : void 0,
                        )
                        .filter(h.Vq)
                        .flat(),
                ),
            ],
            [l, w],
        ),
        _ = (0, c.bG)([u.A], () => u.A.canFetchDetectableGames()),
        [y, S] = (0, t.useState)([]),
        { themeType: M } = (0, A.E)(),
        k = M === j.d.SIDEBAR,
        O = (0, t.useRef)(!1);
    return (
        (0, t.useEffect)(() => {
            _
                ? d.Ay.getDetectableGames()
                : S(
                      P.map((e) => u.A.getDetectableGame(e))
                          .filter((e) => null != e)
                          .map((e) => ({
                              image: m.Ay.getApplicationIconURL({ id: e.id, icon: e.icon }) ?? "",
                              name: e.name,
                          }))
                          .filter((e) => "" !== e.image)
                          .slice(0, 4),
                  );
        }, [P, _]),
        (0, t.useEffect)(() => {
            0 === y.length || O.current || (R({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (O.current = !0));
        }, [R, y.length]),
        (0, n.jsx)(r.D, {
            "aria-label": v.intl.string(v.t.JjiwFx),
            onClick: () => {
                R({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), N();
            },
            className: E.QF,
            children: (0, n.jsxs)(I.A.Overlay, {
                className: s()(E.WH, b),
                children: [
                    (0, n.jsx)(o.E, {
                        variant: k ? "text-sm/medium" : "text-xs/medium",
                        children: v.intl.string(v.t.JjiwFx),
                    }),
                    (0, n.jsx)("div", {
                        className: E.Pt,
                        children: y.map((e, i) =>
                            (0, n.jsx)(
                                C,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: i === y.length - 1 && P.length > 4,
                                    gameCount: P.length - y.length,
                                },
                                i,
                            ),
                        ),
                    }),
                ],
            }),
        })
    );
}
function C(e) {
    let { iconUrl: i, name: a, displayCount: t, gameCount: l } = e;
    return (0, n.jsxs)("div", {
        className: E.Kk,
        children: [
            (0, n.jsx)("img", { className: s()({ [E.um]: t }), src: i, alt: a }),
            t &&
                (0, n.jsx)("div", {
                    className: E.pp,
                    children: (0, n.jsxs)(o.E, { variant: "text-xs/medium", className: E.gq, children: ["+", l] }),
                }),
        ],
    });
}
