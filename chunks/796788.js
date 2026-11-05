n.d(i, { default: () => B });
var e = n(477900),
    s = n(582128),
    r = n(613412),
    c = n(855986),
    l = n(97808),
    o = n(778712),
    a = n(428678),
    d = n(534514),
    u = n(834730),
    I = n(192308),
    m = n(640238),
    x = n(49229),
    E = n(628284),
    h = n(738188),
    g = n(754302),
    C = n(792996);
function j() {
    return (0, e.jsxs)(g.q, {
        children: [
            (0, e.jsx)(g.B, {
                title: C.intl.string(C.t.fjFJFV),
                description: C.intl.string(C.t["8SIMPz"]),
                icon: E.CircleCheckIcon,
            }),
            (0, e.jsx)(g.B, {
                title: C.intl.string(C.t.QCrmqS),
                description: C.intl.string(C.t.TKDMoN),
                icon: E.CircleCheckIcon,
            }),
            (0, e.jsx)(g.B, {
                title: C.intl.string(C.t["lkm/a8"]),
                description: C.intl.string(C.t["8j3qaC"]),
                icon: h.WarningIcon,
            }),
        ],
    });
}
var A = n(662502),
    N = n(632738),
    _ = n(994500),
    f = n(129230),
    T = n(975571),
    k = n(562153),
    p = n(143547),
    O = n(235627),
    R = n(652215),
    v = n(490930);
function S(t) {
    let { user: i, onBlock: n, onIgnore: s, location: r, disallowIgnore: m, guildId: x, channelId: E } = t,
        h = (0, c.bG)([_.A], () => _.A.isIgnored(i.id));
    return (0, e.jsxs)("div", {
        className: v.kL,
        children: [
            (0, e.jsxs)("div", {
                className: v.RS,
                children: [
                    (0, e.jsxs)("div", {
                        className: v.zc,
                        children: [
                            (0, e.jsx)(l.eu, {
                                size: o._3.SIZE_56,
                                src: i.getAvatarURL(void 0, 64),
                                "aria-hidden": !0,
                            }),
                            (0, e.jsx)("div", { className: v.Kk, children: (0, e.jsx)(a.DenyIcon, {}) }),
                        ],
                    }),
                    (0, e.jsxs)("div", {
                        children: [
                            (0, e.jsx)(d.D, {
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                children: C.intl.format(C.t.CIbzHR, { username: k.Ay.getName(x, E, i) }),
                            }),
                            (0, e.jsx)(u.E, {
                                variant: "body-md/medium",
                                color: "text-default",
                                children: C.intl.string(C.t.S70jou),
                            }),
                        ],
                    }),
                ],
            }),
            (0, e.jsx)(j, {}),
            m || h
                ? null
                : (0, e.jsxs)("div", {
                      className: v.l_,
                      children: [
                          (0, e.jsx)(N.Y0, {
                              title: C.intl.string(C.t["+BJTcB"]),
                              children: (0, e.jsx)(N.PQ, {
                                  title: C.intl.string(C.t.hC8tcc),
                                  description: C.intl.string(C.t.If89rE),
                                  titleVariant: "body-md/medium",
                                  descriptionVariant: "body-xs/medium",
                                  buttonText: C.intl.string(C.t.mxJOd9),
                                  onButtonPress: () => {
                                      (f.default.track(R.HAw.USER_REMEDIATION_ACTION, {
                                          action: O.p.GOTO_IGNORE,
                                          location: r,
                                      }),
                                          (0, I.s7)(),
                                          (0, I.qf)((t) =>
                                              (0, e.jsx)(p.default, {
                                                  ...t,
                                                  user: i,
                                                  guildId: x,
                                                  channelId: E,
                                                  onIgnore: s,
                                                  onBlock: n,
                                                  location: r,
                                              }),
                                          ));
                                  },
                              }),
                          }),
                          (0, e.jsx)(u.E, {
                              variant: "body-sm/medium",
                              className: v.FV,
                              children: C.intl.format(C.t.DJN6eZ, {
                                  articleLink: T.A.getArticleURL(R.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function B(t) {
    let {
        user: i,
        onBlock: n,
        onCancel: c,
        onIgnore: l,
        location: o = "ContextMenu",
        disallowIgnore: a,
        guildId: d,
        channelId: u,
        ...I
    } = t;
    return (
        s.useLayoutEffect(
            () => () => {
                f.default.track(R.HAw.USER_REMEDIATION_ACTION, { action: O.p.DISMISS_BLOCK, location: o });
            },
            [o],
        ),
        (0, e.jsx)(m.a, {
            confirmText: C.intl.string(C.t.l4Emac),
            cancelText: C.intl.string(C.t["ETE/oC"]),
            onCancel: function () {
                (f.default.track(R.HAw.USER_REMEDIATION_ACTION, { action: O.p.CANCEL_BLOCK, location: o }), c?.());
            },
            onConfirm: () => {
                (n?.(),
                    x.A.blockUser(i.id, { location: o }, u ?? void 0).then(() => {
                        (f.default.track(R.HAw.BLOCK_USER_CONFIRMED), A.A.showBlockSuccessToast(i.id, u ?? void 0));
                    }));
            },
            impression: { impressionName: r.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...I,
            children: (0, e.jsx)(S, { user: i, guildId: d, channelId: u, onBlock: n, onIgnore: l, disallowIgnore: a }),
        })
    );
}
