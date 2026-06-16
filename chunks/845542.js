s.d(t, { default: () => A });
var n = s(627968),
    a = s(64700),
    i = s(562708),
    r = s(189213),
    l = s(17928),
    u = s(512950),
    c = s(139286),
    d = s(287809),
    o = s(274303),
    m = s(970573),
    p = s(347853);
s(573879);
var f = s(652215),
    g = s(375708),
    h = s(812001);
function A(e) {
    let { transitionState: t, onClose: s } = e,
        { currentUser: A, multiAccountUsers: I } = (0, l.cf)([d.default, o.A], () => ({
            currentUser: d.default.getCurrentUser(),
            multiAccountUsers: o.A.getUsers(),
        })),
        [T, C] = a.useState(!1),
        [E, U] = a.useState(f.dJq),
        [b, k] = a.useState(null);
    return (
        a.useEffect(() => {
            if (T)
                k(
                    (0, n.jsx)(u.p, {
                        messageType: u.Y.ERROR,
                        className: h.u,
                        children: g.intl.format(g.t.HAuRSM, { maxNumAccounts: 5 }),
                    }),
                ),
                    U(f.dJq);
            else if (null != E) {
                let e = d.default.getUser(E);
                null != e &&
                    k(
                        (0, n.jsx)(u.p, {
                            messageType: u.Y.POSITIVE,
                            className: h.u,
                            children: g.intl.format(g.t["09qide"], { username: e.username }),
                        }),
                    ),
                    C(!1);
            }
        }, [E, T]),
        a.useEffect(() => {
            I.length < 5 && C(!1);
        }, [I]),
        (0, c.A)({ type: i.ImpressionTypes.MODAL, name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, n.jsxs)(r.Modal, {
            onClose: s,
            transitionState: t,
            size: "md",
            "aria-label": g.intl.string(g.t.WbFpq4),
            title: g.intl.string(g.t.WbFpq4),
            subtitle: g.intl.string(g.t["+1Uk3c"]),
            actions: [
                {
                    text: g.intl.string(g.t["9g2mqT"]),
                    variant: "secondary",
                    onClick: () => {
                        I.length >= 5 ? C(!0) : (s(), (0, p.D)());
                    },
                },
            ],
            children: [
                b,
                (0, n.jsx)(m.A, {
                    actionText: g.intl.string(g.t.Wf421J),
                    onAction: (e, t) => {
                        switch (e) {
                            case m.X.LOGIN_REQUIRED:
                                s(), (0, p.D)();
                                break;
                            case m.X.SWITCHED:
                                s();
                                break;
                            case m.X.REMOVED:
                                t === A?.id && s(), U(t);
                        }
                    },
                }),
            ],
        })
    );
}
