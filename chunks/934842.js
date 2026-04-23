"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(73153),
    a = n(830215),
    o = n(720353),
    c = n(961350),
    d = n(203982),
    u = n(854378),
    _ = n(652215);
function h(e) {
    let { loginSource: t, giftCodeSKUId: n } = e,
        h = (0, r.cf)(
            [c.default],
            () => ({ ticket: c.default.getMFATicket(), methods: c.default.getMFAMethods() }),
            [],
        ),
        m = s.useCallback(
            (e) => {
                let { mfaType: i, data: s, ticket: r } = e;
                return (
                    d._.dispatch(_.jej.WAVE_EMPHASIZE),
                    a.A.loginMFAv2({ code: s, ticket: r, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, i.jsx)(u.Ay, {
        style: { padding: 0 },
        children: (0, i.jsx)(o.t, {
            mfaFinish: m,
            mfaChallenge: h,
            onEarlyClose: () => {
                l.h.dispatch({ type: "LOGIN_RESET" });
            },
            width: 480,
        }),
    });
}
