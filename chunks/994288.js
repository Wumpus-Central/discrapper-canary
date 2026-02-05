e.d(i, { default: () => A });
var n = e(627968),
    s = e(64700),
    r = e(110259),
    l = e(311907),
    a = e(397927),
    c = e(49229),
    o = e(389245),
    d = e(662502),
    x = e(632738),
    m = e(994500),
    u = e(954571),
    N = e(975571),
    I = e(562153),
    f = e(143547),
    j = e(235627),
    g = e(652215),
    E = e(985018),
    _ = e(107724);
function h(t) {
    let { user: i, onBlock: e, onIgnore: s, location: r, disallowIgnore: c, guildId: d, channelId: h } = t,
        A = (0, l.bG)([m.A], () => m.A.isIgnored(i.id));
    return (0, n.jsxs)("div", {
        className: _.kL,
        children: [
            (0, n.jsxs)("div", {
                className: _.RS,
                children: [
                    (0, n.jsxs)("div", {
                        className: _.zc,
                        children: [
                            (0, n.jsx)(a.euF, {
                                size: a._3J.SIZE_56,
                                src: i.getAvatarURL(void 0, 64),
                                "aria-hidden": !0,
                            }),
                            (0, n.jsx)("div", { className: _.Kk, children: (0, n.jsx)(a.KTN, {}) }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(a.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: E.intl.format(E.t.CIbzHR, { username: I.Ay.getName(d, h, i) }),
                            }),
                            (0, n.jsx)(a.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: E.intl.string(E.t.S70jou),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(o.A, {}),
            c || A
                ? null
                : (0, n.jsxs)("div", {
                      className: _.l_,
                      children: [
                          (0, n.jsx)(x.Y0, {
                              title: E.intl.string(E.t["+BJTcB"]),
                              children: (0, n.jsx)(x.PQ, {
                                  title: E.intl.string(E.t.hC8tcc),
                                  description: E.intl.string(E.t.If89rE),
                                  titleVariant: "text-md/medium",
                                  descriptionVariant: "text-xs/medium",
                                  buttonText: E.intl.string(E.t.mxJOd9),
                                  onButtonPress: () => {
                                      u.default.track(g.HAw.USER_REMEDIATION_ACTION, {
                                          action: j.p.GOTO_IGNORE,
                                          location: r,
                                      }),
                                          (0, a.s7G)(),
                                          (0, a.qfG)((t) =>
                                              (0, n.jsx)(f.default, {
                                                  ...t,
                                                  user: i,
                                                  guildId: d,
                                                  channelId: h,
                                                  onIgnore: s,
                                                  onBlock: e,
                                                  location: r,
                                              }),
                                          );
                                  },
                              }),
                          }),
                          (0, n.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              className: _.FV,
                              children: E.intl.format(E.t.DJN6eZ, {
                                  articleLink: N.A.getArticleURL(g.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function A(t) {
    let {
        user: i,
        onBlock: e,
        onCancel: l,
        onIgnore: o,
        location: x = "ContextMenu",
        disallowIgnore: m,
        guildId: N,
        channelId: I,
        ...f
    } = t;
    return (
        s.useLayoutEffect(
            () => () => {
                u.default.track(g.HAw.USER_REMEDIATION_ACTION, { action: j.p.DISMISS_BLOCK, location: x });
            },
            [x],
        ),
        (0, n.jsx)(a.VoidConfirmModal, {
            confirmText: E.intl.string(E.t.l4Emac),
            cancelText: E.intl.string(E.t["ETE/oC"]),
            onCancel: () => {
                u.default.track(g.HAw.USER_REMEDIATION_ACTION, { action: j.p.CANCEL_BLOCK, location: x }), l?.();
            },
            onConfirm: () => {
                e?.(),
                    c.A.blockUser(i.id, { location: x }).then(() => {
                        u.default.track(g.HAw.BLOCK_USER_CONFIRMED), d.A.showBlockSuccessToast(i.id, I ?? void 0);
                    });
            },
            impression: { impressionName: r.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...f,
            children: (0, n.jsx)(h, { user: i, guildId: N, channelId: I, onBlock: e, onIgnore: o, disallowIgnore: m }),
        })
    );
}
