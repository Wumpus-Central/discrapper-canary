"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(544420),
    c = n(429913),
    d = n(760751),
    _ = n(486020),
    f = n(403362),
    p = n(183555),
    h = n(633075),
    m = n(289173),
    E = n(946356),
    g = n(939496),
    A = n(996988),
    I = n(985018),
    T = n(539106);
let S = 4;
function y(e) {
    let t = (0, c.A)(e.map((e) => e.applicationId));
    return (0, o.cf)([d.A], () =>
        Object.fromEntries(
            t
                .filter(f.Vq)
                .map((e) => [e.id, d.A.getGameByApplication(e)])
                .filter((e) => {
                    let [t, n] = e;
                    return null != n;
                }),
        ),
    );
}
function v(e) {
    let { widgets: t = [], onClick: n, className: s } = e,
        { trackUserProfileAction: c } = (0, p.NJ)(),
        v = y(t.filter((e) => e instanceof h.R)),
        C = (0, i.useMemo)(
            () => [
                ...new Set(
                    t
                        .map((e) =>
                            e instanceof m.Yy
                                ? e.games.map((e) => e.applicationId)
                                : e instanceof h.R
                                  ? v[e.applicationId]?.id
                                  : void 0,
                        )
                        .filter(f.Vq)
                        .flat(),
                ),
            ],
            [t, v],
        ),
        R = (0, o.bG)([d.A], () => d.A.canFetchDetectableGames()),
        [O, b] = (0, i.useState)([]),
        { themeType: D } = (0, g.E)(),
        L = D === A.d.SIDEBAR,
        w = (0, i.useRef)(!1);
    return (
        (0, i.useEffect)(() => {
            R
                ? u.Ay.getDetectableGames()
                : b(
                      C.map((e) => d.A.getDetectableGame(e))
                          .filter((e) => null != e)
                          .map((e) => ({
                              image: _.Ay.getApplicationIconURL({ id: e.id, icon: e.icon }) ?? "",
                              name: e.name,
                          }))
                          .filter((e) => "" !== e.image)
                          .slice(0, S),
                  );
        }, [C, R]),
        (0, i.useEffect)(() => {
            0 === O.length || w.current || (c({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (w.current = !0));
        }, [c, O.length]),
        (0, r.jsx)(l.DUT, {
            "aria-label": I.intl.string(I.t.JjiwFx),
            onClick: () => {
                c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), n();
            },
            className: T.QF,
            children: (0, r.jsxs)(E.A.Overlay, {
                className: a()(T.WH, s),
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: L ? "text-sm/medium" : "text-xs/medium",
                        children: I.intl.string(I.t.JjiwFx),
                    }),
                    (0, r.jsx)("div", {
                        className: T.Pt,
                        children: O.map((e, t) =>
                            (0, r.jsx)(
                                N,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === O.length - 1 && C.length > S,
                                    gameCount: C.length - O.length,
                                },
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        })
    );
}
function N(e) {
    let { iconUrl: t, name: n, displayCount: i, gameCount: s } = e;
    return (0, r.jsxs)("div", {
        className: T.Kk,
        children: [
            (0, r.jsx)("img", { className: a()({ [T.um]: i }), src: t, alt: n }),
            i &&
                (0, r.jsx)("div", {
                    className: T.pp,
                    children: (0, r.jsxs)(l.Text, { variant: "text-xs/medium", className: T.gq, children: ["+", s] }),
                }),
        ],
    });
}
