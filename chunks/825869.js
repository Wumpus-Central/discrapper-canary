n.d(t, {
    v: () => h,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(378570),
    s = n(138298),
    o = n(761640),
    c = n(336590),
    u = n(471271),
    d = n(629199),
    p = n(985018),
    f = n(173801);

function h(e) {
    let { active: t, user: n, channel: h } = e,
        A = (0, c.k)(),
        g = i.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(p.intl.string(p.t["EDYbS+"]), l.ToastType.FAILURE));
        }, []),
        m = i.useCallback(() => {
            s.A.closeChannelSidebar(o.fe);
        }, []),
        b = i.useCallback(() => {
            s.A.closeChannelSidebar(o.fe), A && (0, a.iN)(h.id);
        }, [h.id, A]),
        {
            acceptMessageRequest: _,
            rejectMessageRequest: E,
            isAcceptLoading: O,
            isRejectLoading: y,
            isUserProfileLoading: I,
            isOptimisticAccepted: v,
            isOptimisticRejected: S,
        } = (0, u.t)({
            user: n,
            onAcceptSuccess: b,
            onRejectSuccess: m,
            onError: g,
        }),
        C = O || y || I || v || S;
    return (0, r.jsxs)("div", {
        className: f.kL,
        children: [
            (0, r.jsx)(d.A, {
                channel: h,
                otherUser: n,
                active: t,
            }),
            (0, r.jsxs)("div", {
                className: f.o1,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: f.x6,
                        children: (0, r.jsx)(l.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: p.intl.string(p.t.B2nygW),
                            onClick: (e) => {
                                e.stopPropagation(), E(h.id);
                            },
                            disabled: C,
                            loading: y || S,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: f.x6,
                        children: (0, r.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: p.intl.string(p.t.Kz8Pwr),
                            onClick: (e) => {
                                e.stopPropagation(), _(h.id);
                            },
                            disabled: C,
                            loading: O || I || v,
                        }),
                    }),
                ],
            }),
        ],
    });
}
