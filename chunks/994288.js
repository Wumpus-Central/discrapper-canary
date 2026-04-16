n.d(i, { default: () => C });
var e = n(627968),
    s = n(64700),
    r = n(110259),
    l = n(311907),
    a = n(397927),
    o = n(49229),
    c = n(389245),
    d = n(662502),
    u = n(632738),
    x = n(994500),
    m = n(954571),
    I = n(975571),
    E = n(562153),
    N = n(143547),
    g = n(235627),
    f = n(652215),
    _ = n(985018),
    A = n(261369);
function j(t) {
    let { user: i, onBlock: n, onIgnore: s, location: r, disallowIgnore: o, guildId: d, channelId: j } = t,
        C = (0, l.bG)([x.A], () => x.A.isIgnored(i.id));
    return (0, e.jsxs)("div", {
        className: A.kL,
        children: [
            (0, e.jsxs)("div", {
                className: A.RS,
                children: [
                    (0, e.jsxs)("div", {
                        className: A.zc,
                        children: [
                            (0, e.jsx)(a.euF, {
                                size: a._3J.SIZE_56,
                                src: i.getAvatarURL(void 0, 64),
                                "aria-hidden": !0,
                            }),
                            (0, e.jsx)("div", { className: A.Kk, children: (0, e.jsx)(a.KTN, {}) }),
                        ],
                    }),
                    (0, e.jsxs)("div", {
                        children: [
                            (0, e.jsx)(a.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: _.intl.format(_.t.CIbzHR, { username: E.Ay.getName(d, j, i) }),
                            }),
                            (0, e.jsx)(a.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: _.intl.string(_.t.S70jou),
                            }),
                        ],
                    }),
                ],
            }),
            (0, e.jsx)(c.A, {}),
            o || C
                ? null
                : (0, e.jsxs)("div", {
                      className: A.l_,
                      children: [
                          (0, e.jsx)(u.Y0, {
                              title: _.intl.string(_.t["+BJTcB"]),
                              children: (0, e.jsx)(u.PQ, {
                                  title: _.intl.string(_.t.hC8tcc),
                                  description: _.intl.string(_.t.If89rE),
                                  titleVariant: "text-md/medium",
                                  descriptionVariant: "text-xs/medium",
                                  buttonText: _.intl.string(_.t.mxJOd9),
                                  onButtonPress: () => {
                                      m.default.track(f.HAw.USER_REMEDIATION_ACTION, {
                                          action: g.p.GOTO_IGNORE,
                                          location: r,
                                      }),
                                          (0, a.s7G)(),
                                          (0, a.qfG)((t) =>
                                              (0, e.jsx)(N.default, {
                                                  ...t,
                                                  user: i,
                                                  guildId: d,
                                                  channelId: j,
                                                  onIgnore: s,
                                                  onBlock: n,
                                                  location: r,
                                              }),
                                          );
                                  },
                              }),
                          }),
                          (0, e.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              className: A.FV,
                              children: _.intl.format(_.t.DJN6eZ, {
                                  articleLink: I.A.getArticleURL(f.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function C(t) {
    let {
        user: i,
        onBlock: n,
        onCancel: l,
        onIgnore: c,
        location: u = "ContextMenu",
        disallowIgnore: x,
        guildId: I,
        channelId: E,
        ...N
    } = t;
    return (
        s.useLayoutEffect(
            () => () => {
                m.default.track(f.HAw.USER_REMEDIATION_ACTION, { action: g.p.DISMISS_BLOCK, location: u });
            },
            [u],
        ),
        (0, e.jsx)(a.VoidConfirmModal, {
            confirmText: _.intl.string(_.t.l4Emac),
            cancelText: _.intl.string(_.t["ETE/oC"]),
            onCancel: () => {
                m.default.track(f.HAw.USER_REMEDIATION_ACTION, { action: g.p.CANCEL_BLOCK, location: u }), l?.();
            },
            onConfirm: () => {
                n?.(),
                    o.A.blockUser(i.id, { location: u }).then(() => {
                        m.default.track(f.HAw.BLOCK_USER_CONFIRMED), d.A.showBlockSuccessToast(i.id, E ?? void 0);
                    });
            },
            impression: { impressionName: r.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...N,
            children: (0, e.jsx)(j, { user: i, guildId: I, channelId: E, onBlock: n, onIgnore: c, disallowIgnore: x }),
        })
    );
}
