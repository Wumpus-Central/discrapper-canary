"use strict";
n.d(t, { A: () => y, X: () => j });
var i,
    s = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    c = n(397927),
    d = n(830215),
    u = n(442433),
    h = n(30058),
    _ = n(427157),
    p = n(961350),
    g = n(351906),
    m = n(287809),
    f = n(954571),
    A = n(427262),
    E = n(429707),
    x = n(274303),
    v = n(994125),
    I = n(652215),
    N = n(985018),
    S = n(364877),
    j =
        (((i = {})[(i.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (i[(i.SWITCHED = 1)] = "SWITCHED"),
        (i[(i.REMOVED = 2)] = "REMOVED"),
        i);
function C(e) {
    let { actionText: t, user: n, onAction: i } = e,
        {
            currentUser: r,
            hidePrivateData: l,
            isAuthenticated: v,
        } = (0, o.cf)([m.default, g.A, p.default], () => ({
            currentUser: m.default.getCurrentUser(),
            hidePrivateData: g.A.hidePersonalInformation,
            isAuthenticated: p.default.isAuthenticated(),
        })),
        j = new _.A(n),
        C = v && r?.id === j.id,
        y = n.tokenStatus === x.U.INVALID,
        T = l || j.hasUniqueUsername() ? null : `#${j.discriminator}`,
        b = null;
    return (
        h.A.useConfig({ location: "Account card load" }),
        C
            ? (b = (0, s.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: S.dx,
                  color: "text-feedback-positive",
                  children: N.intl.string(N.t.seV8yt),
              }))
            : y &&
              (b = (0, s.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: S.dx,
                  color: "text-feedback-critical",
                  children: N.intl.string(N.t.tYX2ps),
              })),
        (0, s.jsx)("div", {
            className: S.KJ,
            children: (0, s.jsxs)("div", {
                className: S.yS,
                children: [
                    (0, s.jsx)(c.euF, {
                        src: j.getAvatarURL(void 0, 40),
                        size: c._3J.SIZE_40,
                        "aria-label": n.username,
                    }),
                    (0, s.jsxs)("div", {
                        className: a()(S.K_, { [S.zU]: !C }),
                        children: [
                            (0, s.jsxs)("div", {
                                className: S.Xh,
                                children: [
                                    (0, s.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: A.Ay.getUserTag(j, {
                                            mode: "username",
                                            identifiable: l ? "never" : "always",
                                        }),
                                    }),
                                    (0, s.jsx)(c.Text, {
                                        color: "text-default",
                                        variant: "text-sm/normal",
                                        children: T,
                                    }),
                                ],
                            }),
                            b,
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: S.Xp,
                        children: [
                            !C &&
                                (0, s.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: y ? N.intl.string(N.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        y
                                            ? i(0, n.id)
                                            : (f.default.track(I.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                                  location: { section: I.JJy.MANAGE_ACCOUNTS_MODAL },
                                              }),
                                              E.Mx(n.id),
                                              i(1, n.id));
                                    },
                                }),
                            (0, s.jsx)(c.K0, {
                                icon: c.jNK,
                                onClick: function (e) {
                                    (0, u.jA)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, s.jsx)(c.W1t, {
                                            "data-menu-migrated-auto": !0,
                                            "aria-label": N.intl.string(N.t["41qiDU"]),
                                            navId: "manage-multi-account",
                                            onClose: u.Z_,
                                            onSelect: t,
                                            children: (0, s.jsx)(c.Drp, {
                                                id: "remove-account",
                                                label: N.intl.string(N.t.lSLMaU),
                                                action: () => {
                                                    let e;
                                                    d.A.logout("multi_accounts_list", null, n.id).finally(() => {
                                                        E.At(n.id);
                                                    }),
                                                        (e = {}),
                                                        null != r
                                                            ? (e.section = I.JJy.MANAGE_ACCOUNTS_MODAL)
                                                            : (e.page = I.S3d.LOGIN),
                                                        f.default.track(I.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
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
                                "aria-label": N.intl.string(N.t.PdRCRg),
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
    let { actionText: t, onAction: n } = e,
        { isLoading: i, multiAccountUsers: l } = (0, v.K)();
    return (0, s.jsx)("div", {
        className: S.p_,
        children: i
            ? (0, s.jsx)(c.y$y, { className: S.u1 })
            : l.map((e, i) =>
                  (0, s.jsxs)(
                      r.Fragment,
                      {
                          children: [
                              (0, s.jsx)(C, { user: e, actionText: t, onAction: n }, e.id),
                              l.length - 1 !== i && (0, s.jsx)("div", { role: "separator", className: S.me }),
                          ],
                      },
                      e.id,
                  ),
              ),
    });
}
