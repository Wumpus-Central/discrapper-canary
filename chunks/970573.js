a.d(t, { A: () => y, X: () => L });
var i,
    n = a(477900),
    s = a(582128),
    l = a(503698),
    r = a.n(l),
    c = a(17928),
    d = a(980707),
    o = a(477782),
    u = a(834730),
    m = a(97808),
    x = a(778712),
    A = a(821609),
    h = a(408278),
    C = a(365199),
    N = a(289873),
    _ = a(830215),
    v = a(442433),
    U = a(889227),
    j = a(280450),
    E = a(351906),
    g = a(287809),
    I = a(174459),
    T = a(427262),
    f = a(429707),
    p = a(274303),
    M = a(994125),
    O = a(573879),
    S = a(652215),
    D = a(375708),
    b = a(643090),
    L =
        (((i = {})[(i.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (i[(i.SWITCHED = 1)] = "SWITCHED"),
        (i[(i.REMOVED = 2)] = "REMOVED"),
        i);
function k(e) {
    let { actionText: t, user: a, onAction: i } = e,
        {
            currentUser: s,
            hidePrivateData: l,
            isAuthenticated: N,
        } = (0, c.cf)([g.default, E.A, j.default], () => ({
            currentUser: g.default.getCurrentUser(),
            hidePrivateData: E.A.hidePersonalInformation,
            isAuthenticated: j.default.isAuthenticated(),
        })),
        M = new U.A(a),
        L = N && s?.id === M.id,
        k = a.tokenStatus === p.U.INVALID,
        y = l || M.hasUniqueUsername() ? null : `#${M.discriminator}`,
        R = null;
    return (
        L
            ? (R = (0, n.jsx)(u.E, {
                  variant: "text-sm/semibold",
                  className: b.dx,
                  color: "text-feedback-positive",
                  children: D.intl.string(D.t.seV8yt),
              }))
            : k &&
              (R = (0, n.jsx)(u.E, {
                  variant: "text-sm/semibold",
                  className: b.dx,
                  color: "text-feedback-critical",
                  children: D.intl.string(D.t.tYX2ps),
              })),
        (0, n.jsx)("div", {
            className: b.KJ,
            children: (0, n.jsxs)("div", {
                className: b.yS,
                children: [
                    (0, n.jsx)(m.eu, { src: M.getAvatarURL(void 0, 40), size: x._3.SIZE_40, "aria-label": a.username }),
                    (0, n.jsxs)("div", {
                        className: r()(b.K_, { [b.zU]: !L }),
                        children: [
                            (0, n.jsxs)("div", {
                                className: b.Xh,
                                children: [
                                    (0, n.jsx)(u.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: T.Ay.getUserTag(M, {
                                            mode: "username",
                                            identifiable: l ? "never" : "always",
                                        }),
                                    }),
                                    (0, n.jsx)(u.E, { color: "text-default", variant: "text-sm/normal", children: y }),
                                ],
                            }),
                            R,
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: b.Xp,
                        children: [
                            !L &&
                                (0, n.jsx)(A.$, {
                                    variant: "secondary",
                                    text: k ? D.intl.string(D.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        k
                                            ? i(0, a.id)
                                            : (I.default.track(S.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                                  location: { section: S.JJy.MANAGE_ACCOUNTS_MODAL },
                                              }),
                                              f.Mx(a.id, void 0, O.WX.MULTI_ACCOUNTS_LIST),
                                              i(1, a.id));
                                    },
                                }),
                            (0, n.jsx)(h.K, {
                                icon: C.MoreHorizontalIcon,
                                onClick: function (e) {
                                    (0, v.jA)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, n.jsx)(d.W, {
                                            "data-menu-migrated-auto": !0,
                                            "aria-label": D.intl.string(D.t["41qiDU"]),
                                            navId: "manage-multi-account",
                                            onClose: v.Z_,
                                            onSelect: t,
                                            children: (0, n.jsx)(o.Dr, {
                                                id: "remove-account",
                                                label: D.intl.string(D.t.lSLMaU),
                                                action: () => {
                                                    let e;
                                                    _.A.logout("multi_accounts_list", null, a.id).finally(() => {
                                                        f.At(a.id);
                                                    }),
                                                        (e = {}),
                                                        null != s
                                                            ? (e.section = S.JJy.MANAGE_ACCOUNTS_MODAL)
                                                            : (e.page = S.S3d.LOGIN),
                                                        I.default.track(S.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                            location: e,
                                                        }),
                                                        i(2, a.id),
                                                        null != t && t();
                                                },
                                                color: "danger",
                                            }),
                                        });
                                    });
                                },
                                "aria-label": D.intl.string(D.t.PdRCRg),
                                variant: "icon-only",
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function y(e) {
    let { actionText: t, onAction: a } = e,
        { isLoading: i, multiAccountUsers: l } = (0, M.K)();
    return (0, n.jsx)("div", {
        className: b.p_,
        children: i
            ? (0, n.jsx)(N.y, { className: b.u1 })
            : l.map((e, i) =>
                  (0, n.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              (0, n.jsx)(k, { user: e, actionText: t, onAction: a }, e.id),
                              l.length - 1 !== i && (0, n.jsx)("div", { role: "separator", className: b.me }),
                          ],
                      },
                      e.id,
                  ),
              ),
    });
}
