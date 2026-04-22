"use strict";
n.d(t, { A: () => k, X: () => O });
var i,
    s = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    c = n(861672),
    d = n(477782),
    u = n(834730),
    _ = n(97808),
    h = n(778712),
    m = n(821609),
    p = n(408278),
    g = n(365199),
    A = n(289873),
    f = n(830215),
    x = n(442433),
    E = n(427157),
    I = n(961350),
    v = n(351906),
    N = n(287809),
    j = n(954571),
    C = n(427262),
    T = n(429707),
    b = n(274303),
    S = n(994125),
    y = n(652215),
    R = n(985018),
    w = n(461402),
    O =
        (((i = {})[(i.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (i[(i.SWITCHED = 1)] = "SWITCHED"),
        (i[(i.REMOVED = 2)] = "REMOVED"),
        i);
function L(e) {
    let { actionText: t, user: n, onAction: i } = e,
        {
            currentUser: r,
            hidePrivateData: l,
            isAuthenticated: A,
        } = (0, o.cf)([N.default, v.A, I.default], () => ({
            currentUser: N.default.getCurrentUser(),
            hidePrivateData: v.A.hidePersonalInformation,
            isAuthenticated: I.default.isAuthenticated(),
        })),
        S = new E.A(n),
        O = A && r?.id === S.id,
        L = n.tokenStatus === b.U.INVALID,
        k = l || S.hasUniqueUsername() ? null : `#${S.discriminator}`,
        G = null;
    return (
        O
            ? (G = (0, s.jsx)(u.E, {
                  variant: "text-sm/semibold",
                  className: w.dx,
                  color: "text-feedback-positive",
                  children: R.intl.string(R.t.seV8yt),
              }))
            : L &&
              (G = (0, s.jsx)(u.E, {
                  variant: "text-sm/semibold",
                  className: w.dx,
                  color: "text-feedback-critical",
                  children: R.intl.string(R.t.tYX2ps),
              })),
        (0, s.jsx)("div", {
            className: w.KJ,
            children: (0, s.jsxs)("div", {
                className: w.yS,
                children: [
                    (0, s.jsx)(_.eu, { src: S.getAvatarURL(void 0, 40), size: h._3.SIZE_40, "aria-label": n.username }),
                    (0, s.jsxs)("div", {
                        className: a()(w.K_, { [w.zU]: !O }),
                        children: [
                            (0, s.jsxs)("div", {
                                className: w.Xh,
                                children: [
                                    (0, s.jsx)(u.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: C.Ay.getUserTag(S, {
                                            mode: "username",
                                            identifiable: l ? "never" : "always",
                                        }),
                                    }),
                                    (0, s.jsx)(u.E, { color: "text-default", variant: "text-sm/normal", children: k }),
                                ],
                            }),
                            G,
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: w.Xp,
                        children: [
                            !O &&
                                (0, s.jsx)(m.$, {
                                    variant: "secondary",
                                    text: L ? R.intl.string(R.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        L
                                            ? i(0, n.id)
                                            : (j.default.track(y.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                                  location: { section: y.JJy.MANAGE_ACCOUNTS_MODAL },
                                              }),
                                              T.Mx(n.id),
                                              i(1, n.id));
                                    },
                                }),
                            (0, s.jsx)(p.K, {
                                icon: g.j,
                                onClick: function (e) {
                                    (0, x.jA)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, s.jsx)(c.W, {
                                            "data-menu-migrated-auto": !0,
                                            "aria-label": R.intl.string(R.t["41qiDU"]),
                                            navId: "manage-multi-account",
                                            onClose: x.Z_,
                                            onSelect: t,
                                            children: (0, s.jsx)(d.Dr, {
                                                id: "remove-account",
                                                label: R.intl.string(R.t.lSLMaU),
                                                action: () => {
                                                    let e;
                                                    f.A.logout("multi_accounts_list", null, n.id).finally(() => {
                                                        T.At(n.id);
                                                    }),
                                                        (e = {}),
                                                        null != r
                                                            ? (e.section = y.JJy.MANAGE_ACCOUNTS_MODAL)
                                                            : (e.page = y.S3d.LOGIN),
                                                        j.default.track(y.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                            location: e,
                                                        }),
                                                        i(2, n.id),
                                                        null != t && t();
                                                },
                                                color: "danger",
                                            }),
                                        });
                                    });
                                },
                                "aria-label": R.intl.string(R.t.PdRCRg),
                                variant: "icon-only",
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function k(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: i, multiAccountUsers: l } = (0, S.K)();
    return (0, s.jsx)("div", {
        className: w.p_,
        children: i
            ? (0, s.jsx)(A.y, { className: w.u1 })
            : l.map((e, i) =>
                  (0, s.jsxs)(
                      r.Fragment,
                      {
                          children: [
                              (0, s.jsx)(L, { user: e, actionText: t, onAction: n }, e.id),
                              l.length - 1 !== i && (0, s.jsx)("div", { role: "separator", className: w.me }),
                          ],
                      },
                      e.id,
                  ),
              ),
    });
}
