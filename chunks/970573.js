n.d(t, {
    A: () => O,
    X: () => S,
}),
    n(492834);
var r,
    i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    c = n(397927),
    u = n(830215),
    d = n(442433),
    h = n(30058),
    f = n(427157),
    p = n(961350),
    g = n(351906),
    m = n(287809),
    A = n(954571),
    x = n(427262),
    _ = n(429707),
    E = n(274303),
    b = n(994125),
    v = n(652215),
    j = n(985018),
    y = n(364877),
    S =
        (((r = {})[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED"),
        r);

function N(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: s,
            hidePrivateData: l,
            isAuthenticated: b,
        } = (0, o.cf)([m.default, g.A, p.default], () => ({
            currentUser: m.default.getCurrentUser(),
            hidePrivateData: g.A.hidePersonalInformation,
            isAuthenticated: p.default.isAuthenticated(),
        })),
        S = new f.A(n),
        N = b && (null == s ? void 0 : s.id) === S.id,
        O = n.tokenStatus === E.U.INVALID,
        I = l || S.hasUniqueUsername() ? null : "#".concat(S.discriminator),
        T = null;
    return (
        h.A.useConfig({
            location: "Account card load",
        }),
        N
            ? (T = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: y.dx,
                  color: "text-feedback-positive",
                  children: j.intl.string(j.t.seV8yt),
              }))
            : O &&
              (T = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: y.dx,
                  color: "text-feedback-critical",
                  children: j.intl.string(j.t.tYX2ps),
              })),
        (0, i.jsx)("div", {
            className: y.KJ,
            children: (0, i.jsxs)("div", {
                className: y.yS,
                children: [
                    (0, i.jsx)(c.euF, {
                        src: S.getAvatarURL(void 0, 40),
                        size: c._3J.SIZE_40,
                        "aria-label": n.username,
                    }),
                    (0, i.jsxs)("div", {
                        className: a()(y.K_, {
                            [y.zU]: !N,
                        }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: y.Xh,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: x.Ay.getUserTag(S, {
                                            mode: "username",
                                            identifiable: l ? "never" : "always",
                                        }),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        color: "text-default",
                                        variant: "text-sm/normal",
                                        children: I,
                                    }),
                                ],
                            }),
                            T,
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: y.Xp,
                        children: [
                            !N &&
                                (0, i.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: O ? j.intl.string(j.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        O
                                            ? r(0, n.id)
                                            : (A.default.track(v.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                                  location: {
                                                      section: v.JJy.MANAGE_ACCOUNTS_MODAL,
                                                  },
                                              }),
                                              _.Mx(n.id),
                                              r(1, n.id));
                                    },
                                }),
                            (0, i.jsx)(c.K0, {
                                icon: c.jNK,
                                onClick: function (e) {
                                    (0, d.jA)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, i.jsx)(c.W1t, {
                                            "aria-label": j.intl.string(j.t["41qiDU"]),
                                            navId: "manage-multi-account",
                                            onClose: d.Z_,
                                            onSelect: t,
                                            children: (0, i.jsx)(c.Drp, {
                                                id: "remove-account",
                                                label: j.intl.string(j.t.lSLMaU),
                                                action: () => {
                                                    let e;
                                                    u.A.logout("multi_accounts_list", null, n.id).finally(() => {
                                                        _.At(n.id);
                                                    }),
                                                        (e = {}),
                                                        null != s
                                                            ? (e.section = v.JJy.MANAGE_ACCOUNTS_MODAL)
                                                            : (e.page = v.S3d.LOGIN),
                                                        A.default.track(v.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                            location: e,
                                                        }),
                                                        r(2, n.id),
                                                        null != t && t();
                                                },
                                                color: "danger",
                                            }),
                                        });
                                    });
                                },
                                "aria-label": j.intl.string(j.t.PdRCRg),
                                variant: "icon-only",
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}

function O(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: r, multiAccountUsers: l } = (0, b.K)();
    return (0, i.jsx)("div", {
        className: y.p_,
        children: r
            ? (0, i.jsx)(c.y$y, {
                  className: y.u1,
              })
            : l.map((e, r) =>
                  (0, i.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              (0, i.jsx)(
                                  N,
                                  {
                                      user: e,
                                      actionText: t,
                                      onAction: n,
                                  },
                                  e.id,
                              ),
                              l.length - 1 !== r &&
                                  (0, i.jsx)("div", {
                                      role: "separator",
                                      className: y.me,
                                  }),
                          ],
                      },
                      e.id,
                  ),
              ),
    });
}
