n.d(i, { default: () => v });
var e = n(627968),
    s = n(64700),
    r = n(110259),
    l = n(311907),
    a = n(97808),
    o = n(778712),
    c = n(428678),
    d = n(534514),
    u = n(834730),
    x = n(192308),
    m = n(640238),
    E = n(49229),
    I = n(389245),
    N = n(662502),
    g = n(632738),
    A = n(994500),
    _ = n(954571),
    f = n(975571),
    j = n(562153),
    h = n(143547),
    C = n(235627),
    R = n(652215),
    O = n(985018),
    T = n(261369);
function p(t) {
    let { user: i, onBlock: n, onIgnore: s, location: r, disallowIgnore: m, guildId: E, channelId: N } = t,
        p = (0, l.bG)([A.A], () => A.A.isIgnored(i.id));
    return (0, e.jsxs)("div", {
        className: T.kL,
        children: [
            (0, e.jsxs)("div", {
                className: T.RS,
                children: [
                    (0, e.jsxs)("div", {
                        className: T.zc,
                        children: [
                            (0, e.jsx)(a.eu, {
                                size: o._3.SIZE_56,
                                src: i.getAvatarURL(void 0, 64),
                                "aria-hidden": !0,
                            }),
                            (0, e.jsx)("div", { className: T.Kk, children: (0, e.jsx)(c.K, {}) }),
                        ],
                    }),
                    (0, e.jsxs)("div", {
                        children: [
                            (0, e.jsx)(d.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: O.intl.format(O.t.CIbzHR, { username: j.Ay.getName(E, N, i) }),
                            }),
                            (0, e.jsx)(u.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: O.intl.string(O.t.S70jou),
                            }),
                        ],
                    }),
                ],
            }),
            (0, e.jsx)(I.A, {}),
            m || p
                ? null
                : (0, e.jsxs)("div", {
                      className: T.l_,
                      children: [
                          (0, e.jsx)(g.Y0, {
                              title: O.intl.string(O.t["+BJTcB"]),
                              children: (0, e.jsx)(g.PQ, {
                                  title: O.intl.string(O.t.hC8tcc),
                                  description: O.intl.string(O.t.If89rE),
                                  titleVariant: "text-md/medium",
                                  descriptionVariant: "text-xs/medium",
                                  buttonText: O.intl.string(O.t.mxJOd9),
                                  onButtonPress: () => {
                                      _.default.track(R.HAw.USER_REMEDIATION_ACTION, {
                                          action: C.p.GOTO_IGNORE,
                                          location: r,
                                      }),
                                          (0, x.closeAllModals)(),
                                          (0, x.openModal)((t) =>
                                              (0, e.jsx)(h.default, {
                                                  ...t,
                                                  user: i,
                                                  guildId: E,
                                                  channelId: N,
                                                  onIgnore: s,
                                                  onBlock: n,
                                                  location: r,
                                              }),
                                          );
                                  },
                              }),
                          }),
                          (0, e.jsx)(u.E, {
                              variant: "text-sm/medium",
                              className: T.FV,
                              children: O.intl.format(O.t.DJN6eZ, {
                                  articleLink: f.A.getArticleURL(R.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function v(t) {
    let {
        user: i,
        onBlock: n,
        onCancel: l,
        onIgnore: a,
        location: o = "ContextMenu",
        disallowIgnore: c,
        guildId: d,
        channelId: u,
        ...x
    } = t;
    return (
        s.useLayoutEffect(
            () => () => {
                _.default.track(R.HAw.USER_REMEDIATION_ACTION, { action: C.p.DISMISS_BLOCK, location: o });
            },
            [o],
        ),
        (0, e.jsx)(m.a, {
            confirmText: O.intl.string(O.t.l4Emac),
            cancelText: O.intl.string(O.t["ETE/oC"]),
            onCancel: () => {
                _.default.track(R.HAw.USER_REMEDIATION_ACTION, { action: C.p.CANCEL_BLOCK, location: o }), l?.();
            },
            onConfirm: () => {
                n?.(),
                    E.A.blockUser(i.id, { location: o }).then(() => {
                        _.default.track(R.HAw.BLOCK_USER_CONFIRMED), N.A.showBlockSuccessToast(i.id, u ?? void 0);
                    });
            },
            impression: { impressionName: r.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...x,
            children: (0, e.jsx)(p, { user: i, guildId: d, channelId: u, onBlock: n, onIgnore: a, disallowIgnore: c }),
        })
    );
}
