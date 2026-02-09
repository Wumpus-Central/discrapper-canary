"use strict";
n.d(t, { A: () => C, X: () => S });
var i,
    s = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    c = n(397927),
    d = n(830215),
    u = n(442433),
    h = n(427157),
    _ = n(961350),
    p = n(351906),
    g = n(287809),
    m = n(954571),
    f = n(427262),
    A = n(429707),
    E = n(274303),
    x = n(994125),
    v = n(652215),
    I = n(985018),
    N = n(364877),
    S =
        (((i = {})[(i.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (i[(i.SWITCHED = 1)] = "SWITCHED"),
        (i[(i.REMOVED = 2)] = "REMOVED"),
        i);
function j(e) {
    let { actionText: t, user: n, onAction: i } = e,
        {
            currentUser: r,
            hidePrivateData: l,
            isAuthenticated: x,
        } = (0, o.cf)([g.default, p.A, _.default], () => ({
            currentUser: g.default.getCurrentUser(),
            hidePrivateData: p.A.hidePersonalInformation,
            isAuthenticated: _.default.isAuthenticated(),
        })),
        S = new h.A(n),
        j = x && r?.id === S.id,
        C = n.tokenStatus === E.U.INVALID,
        T = l || S.hasUniqueUsername() ? null : `#${S.discriminator}`,
        y = null;
    return (
        j
            ? (y = (0, s.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: N.dx,
                  color: "text-feedback-positive",
                  children: I.intl.string(I.t.seV8yt),
              }))
            : C &&
              (y = (0, s.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: N.dx,
                  color: "text-feedback-critical",
                  children: I.intl.string(I.t.tYX2ps),
              })),
        (0, s.jsx)("div", {
            className: N.KJ,
            children: (0, s.jsxs)("div", {
                className: N.yS,
                children: [
                    (0, s.jsx)(c.euF, {
                        src: S.getAvatarURL(void 0, 40),
                        size: c._3J.SIZE_40,
                        "aria-label": n.username,
                    }),
                    (0, s.jsxs)("div", {
                        className: a()(N.K_, { [N.zU]: !j }),
                        children: [
                            (0, s.jsxs)("div", {
                                className: N.Xh,
                                children: [
                                    (0, s.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: f.Ay.getUserTag(S, {
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
                            y,
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: N.Xp,
                        children: [
                            !j &&
                                (0, s.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: C ? I.intl.string(I.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        C
                                            ? i(0, n.id)
                                            : (m.default.track(v.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                                  location: { section: v.JJy.MANAGE_ACCOUNTS_MODAL },
                                              }),
                                              A.Mx(n.id),
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
                                            "aria-label": I.intl.string(I.t["41qiDU"]),
                                            navId: "manage-multi-account",
                                            onClose: u.Z_,
                                            onSelect: t,
                                            children: (0, s.jsx)(c.Drp, {
                                                id: "remove-account",
                                                label: I.intl.string(I.t.lSLMaU),
                                                action: () => {
                                                    let e;
                                                    d.A.logout("multi_accounts_list", null, n.id).finally(() => {
                                                        A.At(n.id);
                                                    }),
                                                        (e = {}),
                                                        null != r
                                                            ? (e.section = v.JJy.MANAGE_ACCOUNTS_MODAL)
                                                            : (e.page = v.S3d.LOGIN),
                                                        m.default.track(v.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
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
                                "aria-label": I.intl.string(I.t.PdRCRg),
                                variant: "icon-only",
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function C(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: i, multiAccountUsers: l } = (0, x.K)();
    return (0, s.jsx)("div", {
        className: N.p_,
        children: i
            ? (0, s.jsx)(c.y$y, { className: N.u1 })
            : l.map((e, i) =>
                  (0, s.jsxs)(
                      r.Fragment,
                      {
                          children: [
                              (0, s.jsx)(j, { user: e, actionText: t, onAction: n }, e.id),
                              l.length - 1 !== i && (0, s.jsx)("div", { role: "separator", className: N.me }),
                          ],
                      },
                      e.id,
                  ),
              ),
    });
}
