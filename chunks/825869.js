n.d(t, { v: () => S });
var s = n(627968),
    l = n(64700),
    a = n(691540),
    i = n(857250),
    r = n(97483),
    c = n(821609),
    d = n(378570),
    o = n(138298),
    u = n(761640),
    A = n(336590),
    h = n(471271),
    m = n(629199),
    g = n(985018),
    x = n(610602);
function S(e) {
    let { active: t, user: n, channel: S } = e,
        E = (0, A.k)(),
        f = l.useCallback(() => {
            (0, a.P0)((0, i.o)(g.intl.string(g.t["EDYbS+"]), r.Ck.FAILURE));
        }, []),
        _ = l.useCallback(() => {
            o.A.closeChannelSidebar(u.fe);
        }, []),
        b = l.useCallback(() => {
            o.A.closeChannelSidebar(u.fe), E && (0, d.iN)(S.id);
        }, [S.id, E]),
        {
            acceptMessageRequest: j,
            rejectMessageRequest: p,
            isAcceptLoading: v,
            isRejectLoading: C,
            isUserProfileLoading: I,
            isOptimisticAccepted: N,
            isOptimisticRejected: R,
        } = (0, h.t)({ user: n, onAcceptSuccess: b, onRejectSuccess: _, onError: f }),
        M = v || C || I || N || R;
    return (0, s.jsxs)("div", {
        className: x.kL,
        children: [
            (0, s.jsx)(m.A, { channel: S, otherUser: n, active: t }),
            (0, s.jsxs)("div", {
                className: x.o1,
                children: [
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: x.x6,
                        children: (0, s.jsx)(c.$, {
                            variant: "secondary",
                            size: "sm",
                            text: g.intl.string(g.t.B2nygW),
                            onClick: (e) => {
                                e.stopPropagation(), p(S.id);
                            },
                            disabled: M,
                            loading: C || R,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: x.x6,
                        children: (0, s.jsx)(c.$, {
                            variant: "primary",
                            size: "sm",
                            text: g.intl.string(g.t.Kz8Pwr),
                            onClick: (e) => {
                                e.stopPropagation(), j(S.id);
                            },
                            disabled: M,
                            loading: v || I || N,
                        }),
                    }),
                ],
            }),
        ],
    });
}
