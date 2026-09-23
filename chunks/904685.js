n.d(e, { default: () => K });
var i = n(477900),
    a = n(582128),
    s = n(702841),
    r = n(224640),
    l = n(430993),
    o = n(189213),
    c = n(772707),
    u = n(815021),
    d = n(696208),
    E = n(821609),
    f = n(331322),
    m = n(289873),
    C = n(97808),
    R = n(778712),
    x = n(297264),
    I = n(834730),
    N = n(155718),
    g = n(475743),
    j = n(765548),
    S = n(379257),
    _ = n(306537),
    p = n(36149),
    b = n(287809),
    A = n(486020),
    y = n(899847),
    v = n(191627);
let h = Object.freeze({
        PREREQ_LOADING: "PREREQ_LOADING",
        CONFIRM_AGE: "CONFIRM_AGE",
        VERIFYING: "VERIFYING",
        REQUEST: "REQUEST",
        SENT: "SENT",
        ERROR: "ERROR",
        INVALID_CODE: "INVALID_CODE",
        MUST_BE_ADULT: "MUST_BE_ADULT",
    }),
    k = { section: h.ERROR, params: { failureCode: v.vW.GENERIC_ERROR } };
async function T(t, e) {
    try {
        var n;
        return (
            (n = await y.Ay.getConnectionPrerequisites(t, e)),
            "ready" in n
                ? { section: h.REQUEST, params: { teenIdentity: n.teen_identity } }
                : "invalid_link_code" in n
                  ? { section: h.INVALID_CODE }
                  : "verified_teen_blocked" in n
                    ? { section: h.MUST_BE_ADULT }
                    : "requires_adult_verification" in n
                      ? { section: h.CONFIRM_AGE, params: { teenIdentity: n.teen_identity } }
                      : k
        );
    } catch {
        return k;
    }
}
var O = n(923531),
    U = n(10005),
    G = n(438732),
    D = n(299628),
    F = n(513687),
    L = n(375708),
    M = n(936223),
    P = n(31008);
function V(t) {
    let e = (0, s.bG)([b.default], () => b.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, g.Ay)(e);
    a.useEffect(() => {
        null == n || n === e || (null != e && e !== N.Tk.UNVERIFIED && t());
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
            children: (0, i.jsx)(f.B, {
                justify: "center",
                align: "center",
                className: M.g4,
                children: (0, i.jsx)(m.y, {}),
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
                    let i = await T(e, n);
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
        S.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.FAMILY_CENTER_CONNECTION });
    }, []);
    return (0, i.jsx)(c.k, {
        transitionState: e,
        onClose: s,
        size: "md",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/975deecc3d5e4b611014ce1ed2e2918334c523c2cf13708678052a58bc4c04c2.svg",
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
        S.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.FAMILY_CENTER_CONNECTION });
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
        r = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
        l = (0, G.A)(),
        o = v.H1[n],
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
        n = (0, s.bG)([b.default], () => b.default.getCurrentUser()),
        a = e.global_name ?? e.username;
    return (0, i.jsxs)("div", {
        className: M.Il,
        children: [
            (0, i.jsxs)("div", {
                className: M.Y,
                children: [
                    (0, i.jsx)(C.eu, {
                        src: null != n ? A.Ay.getUserAvatarURL(n) : void 0,
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
                    (0, i.jsx)(C.eu, {
                        src: A.Ay.getUserAvatarURL({ id: e.id, avatar: e.avatar, discriminator: "0" }),
                        size: R._3.SIZE_48,
                        "aria-label": L.intl.formatToPlainString(F.default.kFj4h1, { name: a }),
                    }),
                ],
            }),
            (0, i.jsx)(x.D, {
                variant: "heading-xl/semibold",
                className: M.DD,
                children: L.intl.string(F.default.sMmIbm),
            }),
            (0, i.jsx)(x.D, { variant: "heading-xl/semibold", className: M._V, children: a }),
            (0, i.jsx)(I.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: M.vJ,
                children: L.intl.format(F.default.yiUJNU, { username: a }),
            }),
        ],
    });
}
function J(t) {
    let { transitionState: e, onClose: n, userId: s, linkCode: o, teenIdentity: c, onSent: f, onError: m } = t,
        C = (0, j.A)(() => {
            (y.Ay.clearPendingConnection(), f());
        }),
        R = (0, j.A)((t) => {
            m((0, O.Nv)(t));
        }),
        { requestLink: I, isRequestingLink: N } = (0, U.A)({ onSuccess: C, onError: R }),
        g = a.useCallback(() => {
            I(s, o);
        }, [I, s, o]),
        S = a.useCallback(async () => {
            N || (await n());
        }, [N, n]);
    return (0, i.jsxs)(r.d, {
        transitionState: e,
        onClose: S,
        "aria-label": L.intl.string(F.default.sMmIbm),
        size: "md",
        children: [
            (0, i.jsxs)("div", {
                className: M.wx,
                children: [
                    (0, i.jsx)("div", { className: M.b, children: (0, i.jsx)(u.J, { onClick: S, disabled: N }) }),
                    null != c
                        ? (0, i.jsx)(H, { teenIdentity: c })
                        : (0, i.jsx)(x.D, {
                              variant: "heading-xl/semibold",
                              className: M.XW,
                              children: L.intl.string(F.default.GH11eI),
                          }),
                ],
            }),
            (0, i.jsx)(l.c, { controls: (0, i.jsx)("div", {}), children: (0, i.jsx)(D.A, {}) }),
            (0, i.jsx)(d.H, {
                leading: (0, i.jsx)(E.$, {
                    variant: "secondary",
                    text: L.intl.string(L.t["ETE/oC"]),
                    onClick: S,
                    disabled: N,
                }),
                actions: [
                    { variant: "primary", text: L.intl.string(F.default.ISg34l), onClick: g, disabled: N, loading: N },
                ],
            }),
        ],
    });
}
function X(t) {
    let { transitionState: e, onClose: n } = t,
        a = (0, s.bG)([b.default], () => b.default.getCurrentUser());
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
        c = (0, s.bG)([b.default], () => b.default.getCurrentUser()?.ageVerificationStatus),
        u = a.useRef(!1),
        d = (0, j.A)(n),
        E = (0, j.A)(r);
    return (
        a.useEffect(() => {
            if (!u.current) {
                if (o) {
                    ((u.current = !0), d());
                    return;
                }
                c === N.Tk.UNVERIFIED && ((u.current = !0), E());
            }
        }, [o, c, d, E]),
        a.useEffect(() => {
            let t = setTimeout(() => {
                u.current || ((u.current = !0), E());
            }, v.tN);
            return () => clearTimeout(t);
        }, [E]),
        (0, i.jsx)(w, { transitionState: e, onClose: l })
    );
}
function K(t) {
    let { userId: e, linkCode: n, transitionState: s, onClose: r } = t,
        [l, o] = a.useState(h.PREREQ_LOADING),
        [c, u] = a.useState(v.vW.GENERIC_ERROR),
        [d, E] = a.useState(void 0),
        f = a.useCallback(function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.vW.GENERIC_ERROR;
            (u(t), o(h.ERROR));
        }, []),
        m = a.useCallback(
            (t) => {
                t.section === h.ERROR
                    ? f(t.params.failureCode)
                    : ((t.section === h.REQUEST || t.section === h.CONFIRM_AGE) && E(t.params.teenIdentity),
                      o(t.section));
            },
            [f],
        ),
        C = a.useCallback(() => {
            o(h.VERIFYING);
        }, []),
        R = a.useCallback(() => {
            o(h.PREREQ_LOADING);
        }, []),
        x = a.useCallback(() => {
            f();
        }, [f]),
        I = a.useCallback(() => {
            o(h.SENT);
        }, []);
    switch (l) {
        case h.CONFIRM_AGE:
            return (0, i.jsx)(z, { transitionState: s, onPending: C, onClose: r, teenIdentity: d });
        case h.VERIFYING:
            return (0, i.jsx)(Z, { transitionState: s, onVerified: R, onFailed: x, onClose: r });
        case h.MUST_BE_ADULT:
            return (0, i.jsx)(Y, { transitionState: s, onPending: C, onClose: r });
        case h.INVALID_CODE:
            return (0, i.jsx)(q, { transitionState: s, onClose: r });
        case h.REQUEST:
            return (0, i.jsx)(J, {
                transitionState: s,
                userId: e,
                linkCode: n,
                teenIdentity: d,
                onSent: I,
                onError: f,
                onClose: r,
            });
        case h.SENT:
            return (0, i.jsx)(X, { transitionState: s, onClose: r });
        case h.ERROR:
            return (0, i.jsx)(B, { transitionState: s, failureCode: c, onClose: r });
        case h.PREREQ_LOADING:
        default:
            return (0, i.jsx)(W, { userId: e, linkCode: n, onResolved: m, transitionState: s, onClose: r });
    }
}
