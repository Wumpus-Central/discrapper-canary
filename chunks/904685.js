n.d(e, { default: () => K });
var i = n(627968),
    a = n(64700),
    s = n(702841),
    r = n(224640),
    l = n(430993),
    o = n(189213),
    c = n(772707),
    u = n(815021),
    d = n(696208),
    f = n(821609),
    E = n(331322),
    C = n(289873),
    m = n(97808),
    R = n(778712),
    N = n(534514),
    x = n(834730),
    I = n(155718),
    g = n(475743),
    S = n(765548),
    j = n(379257),
    _ = n(847599),
    p = n(36149),
    A = n(287809),
    b = n(486020),
    v = n(899847),
    y = n(191627);
let T = Object.freeze({
        PREREQ_LOADING: "PREREQ_LOADING",
        CONFIRM_AGE: "CONFIRM_AGE",
        VERIFYING: "VERIFYING",
        REQUEST: "REQUEST",
        SENT: "SENT",
        ERROR: "ERROR",
        INVALID_CODE: "INVALID_CODE",
        MUST_BE_ADULT: "MUST_BE_ADULT",
        TEEN_SCAN: "TEEN_SCAN",
    }),
    h = { section: T.ERROR, params: { failureCode: y.vW.GENERIC_ERROR } };
async function k(t, e) {
    try {
        var n;
        return (
            (n = await v.Ay.getConnectionPrerequisites(t, e)),
            "ready" in n
                ? { section: T.REQUEST, params: { teenIdentity: n.teen_identity } }
                : "invalid_link_code" in n
                  ? { section: T.INVALID_CODE }
                  : "verified_teen_blocked" in n
                    ? { section: T.MUST_BE_ADULT }
                    : "requires_adult_verification" in n
                      ? { section: T.CONFIRM_AGE, params: { teenIdentity: n.teen_identity } }
                      : h
        );
    } catch {
        return h;
    }
}
var O = n(923531),
    U = n(10005),
    G = n(438732),
    D = n(299628),
    F = n(602339),
    L = n(375708),
    M = n(256768),
    P = n(31008);
function V(t) {
    let e = (0, s.bG)([A.default], () => A.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, g.A)(e);
    a.useEffect(() => {
        null == n || n === e || (null != e && e !== I.Tk.UNVERIFIED && t());
    }, [e, n, t]);
}
function w(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, i.jsx)(r.d, {
        transitionState: e,
        onClose: n,
        size: "sm",
        "aria-label": L.intl.string(F.default.GH11eI),
        children: (0, i.jsx)(l.c, {
            children: (0, i.jsx)(E.B, {
                justify: "center",
                align: "center",
                className: M.g4,
                children: (0, i.jsx)(C.y, {}),
            }),
        }),
    });
}
function Q(t) {
    let { transitionState: e, onClose: n, title: a, description: s, primaryText: r, onPrimary: l } = t;
    return (0, i.jsx)(o.Modal, {
        transitionState: e,
        onClose: n,
        size: "sm",
        title: a,
        subtitle: s,
        actions: [{ variant: "primary", text: r, onClick: l }],
    });
}
function W(t) {
    let { userId: e, linkCode: n, onResolved: s, transitionState: r, onClose: l } = t;
    return (
        a.useEffect(() => {
            let t = !1;
            return (
                (async function () {
                    let i = await k(e, n);
                    t || s(i);
                })(),
                () => {
                    t = !0;
                }
            );
        }, []),
        (0, i.jsx)(w, { transitionState: r, onClose: l })
    );
}
function z(t) {
    let { transitionState: e, onPending: n, onClose: s, teenIdentity: r } = t;
    V(n);
    let l = a.useCallback(() => {
        j.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.FAMILY_CENTER_CONNECTION });
    }, []);
    return (0, i.jsx)(c.k, {
        transitionState: e,
        onClose: s,
        size: "md",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/215a589ac30f4af7a3c1721324e9f8f9f844d97a0fb5ec09f7816e94acbfc534.svg",
            aspectRatio: "16/9",
        },
        title: L.intl.formatToPlainString(F.default.pQQMJ7, { username: r?.global_name ?? r?.username ?? "" }),
        subtitle: L.intl.format(F.default["0o3yg8"], {
            link: "https://support.discord.com/hc/articles/14155060633623",
        }),
        actions: [
            { variant: "secondary", text: L.intl.string(L.t.oEAioF), onClick: s },
            { variant: "primary", text: L.intl.string(F.default["3oUE4o"]), onClick: l },
        ],
    });
}
function Y(t) {
    let { transitionState: e, onPending: n, onClose: s } = t;
    V(n);
    let r = a.useCallback(() => {
        j.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.FAMILY_CENTER_CONNECTION });
    }, []);
    return (0, i.jsx)(Q, {
        transitionState: e,
        onClose: s,
        title: L.intl.string(F.default.BQFHXW),
        description: L.intl.format(F.default.WDjaKn, { link: { onClick: r } }),
        primaryText: L.intl.string(L.t["NX+WJN"]),
        onPrimary: s,
    });
}
function q(t) {
    let { transitionState: e, onClose: n } = t;
    return (0, i.jsx)(Q, {
        transitionState: e,
        onClose: n,
        title: L.intl.string(F.default.ewSb6o),
        description: L.intl.string(F.default.jcUN2F),
        primaryText: L.intl.string(L.t.WAI6xu),
        onPrimary: n,
    });
}
function B(t) {
    let { transitionState: e, failureCode: n, onClose: a } = t,
        r = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        l = (0, G.A)(),
        o = y.H1[n],
        c = { isAdult: l, email: r?.email ?? void 0 };
    return (0, i.jsx)(Q, {
        transitionState: e,
        onClose: a,
        title: o.header(c),
        description: o.description(c),
        primaryText: L.intl.string(L.t.cpT0Cq),
        onPrimary: a,
    });
}
function H(t) {
    let { teenIdentity: e } = t,
        n = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        a = e.global_name ?? e.username;
    return (0, i.jsxs)("div", {
        className: M.Il,
        children: [
            (0, i.jsxs)("div", {
                className: M.Y,
                children: [
                    (0, i.jsx)(m.eu, {
                        src: null != n ? b.Ay.getUserAvatarURL(n) : void 0,
                        size: R._3.SIZE_48,
                        "aria-label": L.intl.formatToPlainString(F.default.kFj4h1, {
                            name: n?.globalName ?? n?.username ?? "",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: M.I5,
                        children: [
                            (0, i.jsx)("span", { className: M.pw }),
                            (0, i.jsx)("span", { className: M.pw }),
                            (0, i.jsx)("span", { className: M.pw }),
                        ],
                    }),
                    (0, i.jsx)(m.eu, {
                        src: b.Ay.getUserAvatarURL({ id: e.id, avatar: e.avatar, discriminator: "0" }),
                        size: R._3.SIZE_48,
                        "aria-label": L.intl.formatToPlainString(F.default.kFj4h1, { name: a }),
                    }),
                ],
            }),
            (0, i.jsx)(N.D, {
                variant: "heading-xl/semibold",
                className: M.DD,
                children: L.intl.string(F.default.sMmIbm),
            }),
            (0, i.jsx)(N.D, { variant: "heading-xl/semibold", className: M._V, children: a }),
            (0, i.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: M.vJ,
                children: L.intl.format(F.default.yiUJNU, { username: a }),
            }),
        ],
    });
}
function J(t) {
    let { transitionState: e, onClose: n, userId: s, linkCode: o, teenIdentity: c, onSent: E, onError: C } = t,
        m = (0, S.A)(() => {
            v.Ay.clearPendingConnection(), E();
        }),
        R = (0, S.A)((t) => {
            C((0, O.Nv)(t));
        }),
        { requestLink: x, isRequestingLink: I } = (0, U.A)({ onSuccess: m, onError: R }),
        g = a.useCallback(() => {
            x(s, o);
        }, [x, s, o]),
        j = a.useCallback(async () => {
            I || (await n());
        }, [I, n]);
    return (0, i.jsxs)(r.d, {
        transitionState: e,
        onClose: j,
        "aria-label": L.intl.string(F.default.sMmIbm),
        size: "md",
        children: [
            (0, i.jsxs)("div", {
                className: M.wx,
                children: [
                    (0, i.jsx)("div", { className: M.b, children: (0, i.jsx)(u.J, { onClick: j, disabled: I }) }),
                    null != c
                        ? (0, i.jsx)(H, { teenIdentity: c })
                        : (0, i.jsx)(N.D, {
                              variant: "heading-xl/semibold",
                              className: M.XW,
                              children: L.intl.string(F.default.GH11eI),
                          }),
                ],
            }),
            (0, i.jsx)(l.c, { controls: (0, i.jsx)("div", {}), children: (0, i.jsx)(D.A, {}) }),
            (0, i.jsx)(d.H, {
                leading: (0, i.jsx)(f.$, {
                    variant: "secondary",
                    text: L.intl.string(L.t["ETE/oC"]),
                    onClick: j,
                    disabled: I,
                }),
                actions: [
                    { variant: "primary", text: L.intl.string(F.default.ISg34l), onClick: g, disabled: I, loading: I },
                ],
            }),
        ],
    });
}
function X(t) {
    let { transitionState: e, onClose: n } = t,
        a = (0, s.bG)([A.default], () => A.default.getCurrentUser());
    return (0, i.jsx)(c.k, {
        transitionState: e,
        onClose: n,
        size: "sm",
        graphic: { type: "image", src: P.A },
        title: L.intl.string(F.default.EpwfZl),
        subtitle: L.intl.format(F.default.dVtWId, { email: a?.email }),
        actions: [{ variant: "primary", text: L.intl.string(L.t.cpT0Cq), onClick: n }],
    });
}
function Z(t) {
    let { transitionState: e, onVerified: n, onFailed: r, onClose: l } = t,
        o = (0, p.b8)(),
        c = (0, s.bG)([A.default], () => A.default.getCurrentUser()?.ageVerificationStatus),
        u = a.useRef(!1),
        d = (0, S.A)(n),
        f = (0, S.A)(r);
    return (
        a.useEffect(() => {
            if (!u.current) {
                if (o) {
                    (u.current = !0), d();
                    return;
                }
                c === I.Tk.UNVERIFIED && ((u.current = !0), f());
            }
        }, [o, c, d, f]),
        a.useEffect(() => {
            let t = setTimeout(() => {
                u.current || ((u.current = !0), f());
            }, y.tN);
            return () => clearTimeout(t);
        }, [f]),
        (0, i.jsx)(w, { transitionState: e, onClose: l })
    );
}
function K(t) {
    let { userId: e, linkCode: n, transitionState: s, onClose: r } = t,
        [l, o] = a.useState(T.PREREQ_LOADING),
        [c, u] = a.useState(y.vW.GENERIC_ERROR),
        [d, f] = a.useState(void 0),
        E = a.useCallback(function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y.vW.GENERIC_ERROR;
            u(t), o(T.ERROR);
        }, []),
        C = a.useCallback(
            (t) => {
                t.section === T.ERROR
                    ? E(t.params.failureCode)
                    : ((t.section === T.REQUEST || t.section === T.CONFIRM_AGE) && f(t.params.teenIdentity),
                      o(t.section));
            },
            [E],
        ),
        m = a.useCallback(() => {
            o(T.VERIFYING);
        }, []),
        R = a.useCallback(() => {
            o(T.PREREQ_LOADING);
        }, []),
        N = a.useCallback(() => {
            E();
        }, [E]),
        x = a.useCallback(() => {
            o(T.SENT);
        }, []);
    switch (l) {
        case T.CONFIRM_AGE:
            return (0, i.jsx)(z, { transitionState: s, onPending: m, onClose: r, teenIdentity: d });
        case T.VERIFYING:
            return (0, i.jsx)(Z, { transitionState: s, onVerified: R, onFailed: N, onClose: r });
        case T.MUST_BE_ADULT:
            return (0, i.jsx)(Y, { transitionState: s, onPending: m, onClose: r });
        case T.INVALID_CODE:
            return (0, i.jsx)(q, { transitionState: s, onClose: r });
        case T.REQUEST:
            return (0, i.jsx)(J, {
                transitionState: s,
                userId: e,
                linkCode: n,
                teenIdentity: d,
                onSent: x,
                onError: E,
                onClose: r,
            });
        case T.SENT:
            return (0, i.jsx)(X, { transitionState: s, onClose: r });
        case T.ERROR:
            return (0, i.jsx)(B, { transitionState: s, failureCode: c, onClose: r });
        case T.PREREQ_LOADING:
        default:
            return (0, i.jsx)(W, { userId: e, linkCode: n, onResolved: C, transitionState: s, onClose: r });
    }
}
