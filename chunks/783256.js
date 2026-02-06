"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(946356),
    E = n(939496),
    A = n(996988),
    I = n(985018),
    T = n(856171);
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
    let { widgets: t = [], onClick: n, className: a } = e,
        { trackUserProfileAction: c } = (0, p.NJ)(),
        v = y(t.filter((e) => e instanceof h.R)),
        N = (0, i.useMemo)(
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
        b = (0, o.bG)([d.A], () => d.A.canFetchDetectableGames()),
        [R, O] = (0, i.useState)([]),
        { themeType: D } = (0, E.E)(),
        L = D === A.d.SIDEBAR,
        w = (0, i.useRef)(!1);
    return (
        (0, i.useEffect)(() => {
            b
                ? u.A.getDetectableGames()
                : O(
                      N.map((e) => d.A.getDetectableGame(e))
                          .filter((e) => null != e)
                          .map((e) => ({
                              image: _.Ay.getApplicationIconURL({ id: e.id, icon: e.icon }) ?? "",
                              name: e.name,
                          }))
                          .filter((e) => "" !== e.image)
                          .slice(0, S),
                  );
        }, [N, b]),
        (0, i.useEffect)(() => {
            0 === R.length || w.current || (c({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (w.current = !0));
        }, [c, R.length]),
        (0, r.jsx)(l.DUT, {
            "aria-label": I.intl.string(I.t.JjiwFx),
            onClick: () => {
                c({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), n();
            },
            className: T.QF,
            children: (0, r.jsxs)(g.A.Overlay, {
                className: s()(T.WH, a),
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: L ? "text-sm/medium" : "text-xs/medium",
                        children: I.intl.string(I.t.JjiwFx),
                    }),
                    (0, r.jsx)("div", {
                        className: T.Pt,
                        children: R.map((e, t) =>
                            (0, r.jsx)(
                                C,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: t === R.length - 1 && N.length > S,
                                    gameCount: N.length - R.length,
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
function C(e) {
    let { iconUrl: t, name: n, displayCount: i, gameCount: a } = e;
    return (0, r.jsxs)("div", {
        className: T.Kk,
        children: [
            (0, r.jsx)("img", { className: s()({ [T.um]: i }), src: t, alt: n }),
            i &&
                (0, r.jsx)("div", {
                    className: T.pp,
                    children: (0, r.jsxs)(l.Text, { variant: "text-xs/medium", className: T.gq, children: ["+", a] }),
                }),
        ],
    });
}
