s.d(t, { A: () => y, X: () => O });
var a,
    i = s(627968),
    n = s(64700),
    l = s(503698),
    r = s.n(l),
    c = s(17928),
    d = s(550079),
    o = s(477782),
    u = s(834730),
    m = s(97808),
    _ = s(778712),
    x = s(821609),
    A = s(408278),
    h = s(365199),
    f = s(289873),
    g = s(830215),
    p = s(442433),
    N = s(889227),
    C = s(495544),
    E = s(351906),
    U = s(287809),
    b = s(954571),
    T = s(427262),
    j = s(429707),
    I = s(274303),
    v = s(994125),
    S = s(652215),
    D = s(985018),
    M = s(461402),
    O =
        (((a = {})[(a.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (a[(a.SWITCHED = 1)] = "SWITCHED"),
        (a[(a.REMOVED = 2)] = "REMOVED"),
        a);
function R(e) {
    let { actionText: t, user: s, onAction: a } = e,
        {
            currentUser: n,
            hidePrivateData: l,
            isAuthenticated: f,
        } = (0, c.cf)([U.default, E.A, C.default], () => ({
            currentUser: U.default.getCurrentUser(),
            hidePrivateData: E.A.hidePersonalInformation,
            isAuthenticated: C.default.isAuthenticated(),
        })),
        v = new N.A(s),
        O = f && n?.id === v.id,
        R = s.tokenStatus === I.U.INVALID,
        y = l || v.hasUniqueUsername() ? null : `#${v.discriminator}`,
        k = null;
    return (
        O
            ? (k = (0, i.jsx)(u.E, {
                  variant: "text-sm/semibold",
                  className: M.dx,
                  color: "text-feedback-positive",
                  children: D.intl.string(D.t.seV8yt),
              }))
            : R &&
              (k = (0, i.jsx)(u.E, {
                  variant: "text-sm/semibold",
                  className: M.dx,
                  color: "text-feedback-critical",
                  children: D.intl.string(D.t.tYX2ps),
              })),
        (0, i.jsx)("div", {
            className: M.KJ,
            children: (0, i.jsxs)("div", {
                className: M.yS,
                children: [
                    (0, i.jsx)(m.eu, { src: v.getAvatarURL(void 0, 40), size: _._3.SIZE_40, "aria-label": s.username }),
                    (0, i.jsxs)("div", {
                        className: r()(M.K_, { [M.zU]: !O }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: M.Xh,
                                children: [
                                    (0, i.jsx)(u.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: T.Ay.getUserTag(v, {
                                            mode: "username",
                                            identifiable: l ? "never" : "always",
                                        }),
                                    }),
                                    (0, i.jsx)(u.E, { color: "text-default", variant: "text-sm/normal", children: y }),
                                ],
                            }),
                            k,
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: M.Xp,
                        children: [
                            !O &&
                                (0, i.jsx)(x.$, {
                                    variant: "secondary",
                                    text: R ? D.intl.string(D.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        R
                                            ? a(0, s.id)
                                            : (b.default.track(S.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                                  location: { section: S.JJy.MANAGE_ACCOUNTS_MODAL },
                                              }),
                                              j.Mx(s.id),
                                              a(1, s.id));
                                    },
                                }),
                            (0, i.jsx)(A.K, {
                                icon: h.j,
                                onClick: function (e) {
                                    (0, p.jA)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, i.jsx)(d.W, {
                                            "data-menu-migrated-auto": !0,
                                            "aria-label": D.intl.string(D.t["41qiDU"]),
                                            navId: "manage-multi-account",
                                            onClose: p.Z_,
                                            onSelect: t,
                                            children: (0, i.jsx)(o.Dr, {
                                                id: "remove-account",
                                                label: D.intl.string(D.t.lSLMaU),
                                                action: () => {
                                                    let e;
                                                    g.A.logout("multi_accounts_list", null, s.id).finally(() => {
                                                        j.At(s.id);
                                                    }),
                                                        (e = {}),
                                                        null != n
                                                            ? (e.section = S.JJy.MANAGE_ACCOUNTS_MODAL)
                                                            : (e.page = S.S3d.LOGIN),
                                                        b.default.track(S.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                            location: e,
                                                        }),
                                                        a(2, s.id),
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
    let { actionText: t, onAction: s } = e,
        { isLoading: a, multiAccountUsers: l } = (0, v.K)();
    return (0, i.jsx)("div", {
        className: M.p_,
        children: a
            ? (0, i.jsx)(f.y, { className: M.u1 })
            : l.map((e, a) =>
                  (0, i.jsxs)(
                      n.Fragment,
                      {
                          children: [
                              (0, i.jsx)(R, { user: e, actionText: t, onAction: s }, e.id),
                              l.length - 1 !== a && (0, i.jsx)("div", { role: "separator", className: M.me }),
                          ],
                      },
                      e.id,
                  ),
              ),
    });
}
