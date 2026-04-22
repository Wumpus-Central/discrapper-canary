n.d(e, { default: () => b });
var i = n(627968),
    l = n(64700),
    s = n(110259),
    r = n(311907),
    a = n(97808),
    c = n(778712),
    o = n(428678),
    d = n(534514),
    x = n(834730),
    m = n(192308),
    u = n(640238),
    h = n(49229),
    j = n(389245),
    N = n(662502),
    f = n(632738),
    _ = n(994500),
    g = n(954571),
    v = n(975571),
    E = n(562153),
    I = n(143547),
    A = n(235627),
    p = n(652215),
    C = n(985018),
    T = n(261369);
function R(t) {
    let { user: e, onBlock: n, onIgnore: l, location: s, disallowIgnore: u, guildId: h, channelId: N } = t,
        R = (0, r.bG)([_.A], () => _.A.isIgnored(e.id));
    return (0, i.jsxs)("div", {
        className: T.kL,
        children: [
            (0, i.jsxs)("div", {
                className: T.RS,
                children: [
                    (0, i.jsxs)("div", {
                        className: T.zc,
                        children: [
                            (0, i.jsx)(a.eu, {
                                size: c._3.SIZE_56,
                                src: e.getAvatarURL(void 0, 64),
                                "aria-hidden": !0,
                            }),
                            (0, i.jsx)("div", { className: T.Kk, children: (0, i.jsx)(o.K, {}) }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: C.intl.format(C.t.CIbzHR, { username: E.Ay.getName(h, N, e) }),
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: C.intl.string(C.t.S70jou),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(j.A, {}),
            u || R
                ? null
                : (0, i.jsxs)("div", {
                      className: T.l_,
                      children: [
                          (0, i.jsx)(f.Y0, {
                              title: C.intl.string(C.t["+BJTcB"]),
                              children: (0, i.jsx)(f.PQ, {
                                  title: C.intl.string(C.t.hC8tcc),
                                  description: C.intl.string(C.t.If89rE),
                                  titleVariant: "text-md/medium",
                                  descriptionVariant: "text-xs/medium",
                                  buttonText: C.intl.string(C.t.mxJOd9),
                                  onButtonPress: () => {
                                      g.default.track(p.HAw.USER_REMEDIATION_ACTION, {
                                          action: A.p.GOTO_IGNORE,
                                          location: s,
                                      }),
                                          (0, m.closeAllModals)(),
                                          (0, m.openModal)((t) =>
                                              (0, i.jsx)(I.default, {
                                                  ...t,
                                                  user: e,
                                                  guildId: h,
                                                  channelId: N,
                                                  onIgnore: l,
                                                  onBlock: n,
                                                  location: s,
                                              }),
                                          );
                                  },
                              }),
                          }),
                          (0, i.jsx)(x.E, {
                              variant: "text-sm/medium",
                              className: T.FV,
                              children: C.intl.format(C.t.DJN6eZ, {
                                  articleLink: v.A.getArticleURL(p.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function b(t) {
    let {
        user: e,
        onBlock: n,
        onCancel: r,
        onIgnore: a,
        location: c = "ContextMenu",
        disallowIgnore: o,
        guildId: d,
        channelId: x,
        ...m
    } = t;
    return (
        l.useLayoutEffect(
            () => () => {
                g.default.track(p.HAw.USER_REMEDIATION_ACTION, { action: A.p.DISMISS_BLOCK, location: c });
            },
            [c],
        ),
        (0, i.jsx)(u.a, {
            confirmText: C.intl.string(C.t.l4Emac),
            cancelText: C.intl.string(C.t["ETE/oC"]),
            onCancel: () => {
                g.default.track(p.HAw.USER_REMEDIATION_ACTION, { action: A.p.CANCEL_BLOCK, location: c }), r?.();
            },
            onConfirm: () => {
                n?.(),
                    h.A.blockUser(e.id, { location: c }).then(() => {
                        g.default.track(p.HAw.BLOCK_USER_CONFIRMED), N.A.showBlockSuccessToast(e.id, x ?? void 0);
                    });
            },
            impression: { impressionName: s.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...m,
            children: (0, i.jsx)(R, { user: e, guildId: d, channelId: x, onBlock: n, onIgnore: a, disallowIgnore: o }),
        })
    );
}
