var i,
    n = a(477900),
    s = a(582128),
    l = a(503698),
    r = a.n(l),
    d = a(855986),
    c = a(165862),
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
    U = a(619019),
    j = a(46653),
    E = a(351906),
    g = a(287809),
    I = a(129230),
    T = a(427262),
    f = a(429707),
    b = a(274303),
    p = a(994125),
    y = a(573879),
    M = a(652215),
    O = a(792996),
    S = a(755767),
    D =
        (((i = {})[(i.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (i[(i.SWITCHED = 1)] = "SWITCHED"),
        (i[(i.REMOVED = 2)] = "REMOVED"),
        i);
function L(e) {
    let { actionText: t, user: a, onAction: i } = e,
        {
            currentUser: s,
            hidePrivateData: l,
            isAuthenticated: N,
        } = (0, d.cf)([g.default, E.A, j.default], () => ({
            currentUser: g.default.getCurrentUser(),
            hidePrivateData: E.A.hidePersonalInformation,
            isAuthenticated: j.default.isAuthenticated(),
        })),
        p = new U.A(a),
        D = N && s?.id === p.id,
        L = a.tokenStatus === b.U.INVALID,
        k = l || p.hasUniqueUsername() ? null : `#${p.discriminator}`,
        R = null;
    return (
        D
            ? (R = (0, n.jsx)(u.E, {
                  variant: "body-sm/semibold",
                  className: S.dx,
                  color: "text-feedback-positive",
                  children: O.intl.string(O.t.seV8yt),
              }))
            : L &&
              (R = (0, n.jsx)(u.E, {
                  variant: "body-sm/semibold",
                  className: S.dx,
                  color: "text-feedback-critical",
                  children: O.intl.string(O.t.tYX2ps),
              })),
        (0, n.jsx)("div", {
            className: S.KJ,
            children: (0, n.jsxs)("div", {
                className: S.yS,
                children: [
                    (0, n.jsx)(m.eu, { src: p.getAvatarURL(void 0, 40), size: x._3.SIZE_40, "aria-label": a.username }),
                    (0, n.jsxs)("div", {
                        className: r()(S.K_, { [S.zU]: !D }),
                        children: [
                            (0, n.jsxs)("div", {
                                className: S.Xh,
                                children: [
                                    (0, n.jsx)(u.E, {
                                        variant: "body-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: T.Ay.getUserTag(p, {
                                            mode: "username",
                                            identifiable: l ? "never" : "always",
                                        }),
                                    }),
                                    (0, n.jsx)(u.E, { color: "text-default", variant: "body-sm/normal", children: k }),
                                ],
                            }),
                            R,
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: S.Xp,
                        children: [
                            !D &&
                                (0, n.jsx)(A.$, {
                                    variant: "secondary",
                                    text: L ? O.intl.string(O.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        L
                                            ? i(0, a.id)
                                            : (I.default.track(M.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                                  location: { section: M.JJy.MANAGE_ACCOUNTS_MODAL },
                                              }),
                                              f.Mx(a.id, void 0, y.WX.MULTI_ACCOUNTS_LIST),
                                              i(1, a.id));
                                    },
                                }),
                            (0, n.jsx)(h.K, {
                                icon: C.MoreHorizontalIcon,
                                onClick: function (e) {
                                    (0, v.jA)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, n.jsx)(c.W, {
                                            "data-menu-migrated-auto": !0,
                                            "aria-label": O.intl.string(O.t["41qiDU"]),
                                            navId: "manage-multi-account",
                                            onClose: v.Z_,
                                            onSelect: t,
                                            children: (0, n.jsx)(o.Dr, {
                                                id: "remove-account",
                                                label: O.intl.string(O.t.lSLMaU),
                                                action: () => {
                                                    let e;
                                                    (_.A.logout("multi_accounts_list", null, a.id).finally(() => {
                                                        f.At(a.id);
                                                    }),
                                                        (e = {}),
                                                        null != s
                                                            ? (e.section = M.JJy.MANAGE_ACCOUNTS_MODAL)
                                                            : (e.page = M.S3d.LOGIN),
                                                        I.default.track(M.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                            location: e,
                                                        }),
                                                        i(2, a.id),
                                                        null != t && t());
                                                },
                                                color: "danger",
                                            }),
                                        });
                                    });
                                },
                                "aria-label": O.intl.string(O.t.PdRCRg),
                                variant: "icon-only",
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
a.d(
    t,
    {},
    {
        A: function (e) {
            let { actionText: t, onAction: a } = e,
                { isLoading: i, multiAccountUsers: l } = (0, p.K)();
            return (0, n.jsx)("div", {
                className: S.p_,
                children: i
                    ? (0, n.jsx)(N.y, { className: S.u1 })
                    : l.map((e, i) =>
                          (0, n.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      (0, n.jsx)(L, { user: e, actionText: t, onAction: a }, e.id),
                                      l.length - 1 !== i && (0, n.jsx)("div", { role: "separator", className: S.me }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
            });
        },
        X: D,
    },
);
