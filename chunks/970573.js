n.d(t, {
    A: () => N,
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
    p = n(427157),
    g = n(961350),
    m = n(351906),
    f = n(287809),
    _ = n(954571),
    A = n(427262),
    x = n(429707),
    E = n(274303),
    v = n(994125),
    j = n(652215),
    y = n(985018),
    b = n(364877),
    S =
        (((r = {})[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED"),
        r);

function I(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: s,
            hidePrivateData: l,
            isAuthenticated: v,
        } = (0, o.cf)([f.default, m.A, g.default], () => ({
            currentUser: f.default.getCurrentUser(),
            hidePrivateData: m.A.hidePersonalInformation,
            isAuthenticated: g.default.isAuthenticated(),
        })),
        S = new p.A(n),
        I = v && (null == s ? void 0 : s.id) === S.id,
        N = n.tokenStatus === E.U.INVALID,
        O = l || S.hasUniqueUsername() ? null : "#".concat(S.discriminator),
        C = null;
    return (
        h.A.useConfig({
            location: "Account card load",
        }),
        I
            ? (C = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: b.dx,
                  color: "text-feedback-positive",
                  children: y.intl.string(y.t.seV8yt),
              }))
            : N &&
              (C = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: b.dx,
                  color: "text-feedback-critical",
                  children: y.intl.string(y.t.tYX2ps),
              })),
        (0, i.jsx)("div", {
            className: b.KJ,
            children: (0, i.jsxs)("div", {
                className: b.yS,
                children: [
                    (0, i.jsx)(c.euF, {
                        src: S.getAvatarURL(void 0, 40),
                        size: c._3J.SIZE_40,
                        "aria-label": n.username,
                    }),
                    (0, i.jsxs)("div", {
                        className: a()(b.K_, {
                            [b.zU]: !I,
                        }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: b.Xh,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: A.Ay.getUserTag(S, {
                                            mode: "username",
                                            identifiable: l ? "never" : "always",
                                        }),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        color: "text-default",
                                        variant: "text-sm/normal",
                                        children: O,
                                    }),
                                ],
                            }),
                            C,
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: b.Xp,
                        children: [
                            !I &&
                                (0, i.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: N ? y.intl.string(y.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        N
                                            ? r(0, n.id)
                                            : (_.default.track(j.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                                  location: {
                                                      section: j.JJy.MANAGE_ACCOUNTS_MODAL,
                                                  },
                                              }),
                                              x.Mx(n.id),
                                              r(1, n.id));
                                    },
                                }),
                            (0, i.jsx)(c.K0, {
                                icon: c.jNK,
                                onClick: function (e) {
                                    (0, d.jA)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, i.jsx)(c.W1t, {
                                            "data-menu-migration-ready": !0,
                                            "aria-label": y.intl.string(y.t["41qiDU"]),
                                            navId: "manage-multi-account",
                                            onClose: d.Z_,
                                            onSelect: t,
                                            children: (0, i.jsx)(c.Drp, {
                                                id: "remove-account",
                                                label: y.intl.string(y.t.lSLMaU),
                                                action: () => {
                                                    let e;
                                                    u.A.logout("multi_accounts_list", null, n.id).finally(() => {
                                                        x.At(n.id);
                                                    }),
                                                        (e = {}),
                                                        null != s
                                                            ? (e.section = j.JJy.MANAGE_ACCOUNTS_MODAL)
                                                            : (e.page = j.S3d.LOGIN),
                                                        _.default.track(j.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
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
                                "aria-label": y.intl.string(y.t.PdRCRg),
                                variant: "icon-only",
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}

function N(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: r, multiAccountUsers: l } = (0, v.K)();
    return (0, i.jsx)("div", {
        className: b.p_,
        children: r
            ? (0, i.jsx)(c.y$y, {
                  className: b.u1,
              })
            : l.map((e, r) =>
                  (0, i.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              (0, i.jsx)(
                                  I,
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
                                      className: b.me,
                                  }),
                          ],
                      },
                      e.id,
                  ),
              ),
    });
}
