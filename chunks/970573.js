"use strict";
n.d(t, { A: () => k, X: () => L });
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
    g = n(408278),
    p = n(365199),
    A = n(289873),
    f = n(830215),
    E = n(442433),
    x = n(427157),
    I = n(961350),
    v = n(351906),
    N = n(287809),
    j = n(954571),
    C = n(427262),
    T = n(429707),
    y = n(274303),
    b = n(994125),
    S = n(652215),
    R = n(985018),
    O = n(461402),
    L =
        (((i = {})[(i.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (i[(i.SWITCHED = 1)] = "SWITCHED"),
        (i[(i.REMOVED = 2)] = "REMOVED"),
        i);
function w(e) {
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
        b = new x.A(n),
        L = A && r?.id === b.id,
        w = n.tokenStatus === y.U.INVALID,
        k = l || b.hasUniqueUsername() ? null : `#${b.discriminator}`,
        G = null;
    return (
        L
            ? (G = (0, s.jsx)(u.E, {
                  variant: "text-sm/semibold",
                  className: O.dx,
                  color: "text-feedback-positive",
                  children: R.intl.string(R.t.seV8yt),
              }))
            : w &&
              (G = (0, s.jsx)(u.E, {
                  variant: "text-sm/semibold",
                  className: O.dx,
                  color: "text-feedback-critical",
                  children: R.intl.string(R.t.tYX2ps),
              })),
        (0, s.jsx)("div", {
            className: O.KJ,
            children: (0, s.jsxs)("div", {
                className: O.yS,
                children: [
                    (0, s.jsx)(_.eu, { src: b.getAvatarURL(void 0, 40), size: h._3.SIZE_40, "aria-label": n.username }),
                    (0, s.jsxs)("div", {
                        className: a()(O.K_, { [O.zU]: !L }),
                        children: [
                            (0, s.jsxs)("div", {
                                className: O.Xh,
                                children: [
                                    (0, s.jsx)(u.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: C.Ay.getUserTag(b, {
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
                        className: O.Xp,
                        children: [
                            !L &&
                                (0, s.jsx)(m.$, {
                                    variant: "secondary",
                                    text: w ? R.intl.string(R.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        w
                                            ? i(0, n.id)
                                            : (j.default.track(S.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                                  location: { section: S.JJy.MANAGE_ACCOUNTS_MODAL },
                                              }),
                                              T.Mx(n.id),
                                              i(1, n.id));
                                    },
                                }),
                            (0, s.jsx)(g.K, {
                                icon: p.j,
                                onClick: function (e) {
                                    (0, E.jA)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, s.jsx)(c.W, {
                                            "data-menu-migrated-auto": !0,
                                            "aria-label": R.intl.string(R.t["41qiDU"]),
                                            navId: "manage-multi-account",
                                            onClose: E.Z_,
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
                                                            ? (e.section = S.JJy.MANAGE_ACCOUNTS_MODAL)
                                                            : (e.page = S.S3d.LOGIN),
                                                        j.default.track(S.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
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
        { isLoading: i, multiAccountUsers: l } = (0, b.K)();
    return (0, s.jsx)("div", {
        className: O.p_,
        children: i
            ? (0, s.jsx)(A.y, { className: O.u1 })
            : l.map((e, i) =>
                  (0, s.jsxs)(
                      r.Fragment,
                      {
                          children: [
                              (0, s.jsx)(w, { user: e, actionText: t, onAction: n }, e.id),
                              l.length - 1 !== i && (0, s.jsx)("div", { role: "separator", className: O.me }),
                          ],
                      },
                      e.id,
                  ),
              ),
    });
}
