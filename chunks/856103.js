n.d(e, { default: () => b });
var i = n(627968),
    a = n(64700),
    l = n(189213),
    r = n(311907),
    s = n(834730),
    o = n(696451),
    c = n(71393),
    d = n(287809),
    u = n(624458),
    g = n(202384),
    p = n(212455),
    m = n(739985),
    _ = n(985018),
    h = n(146983);
let b = function (t) {
    let { guildId: e, transitionState: n, onClose: b } = t,
        f = (0, r.bG)([p.A], () => p.A.getRequest(e), [e]),
        A = (0, r.bG)([c.A], () => c.A.getGuild(e), [e]),
        j = (0, r.bG)([d.default], () => d.default.getCurrentUser()?.id),
        k = (0, r.bG)([o.Ay], () => (null != j ? o.Ay.getMember(e, j) : null), [j, e]),
        x = a.useCallback(() => {
            b(), null == k && (0, m.A)();
        }, [k, b]),
        C = a.useCallback(async () => {
            if (k?.isPending) {
                try {
                    await u.A.removeGuildJoinRequest(e);
                } catch (t) {
                    throw t;
                }
                b(), (0, g.Ze)(e);
            } else u.A.resetGuildJoinRequest(e);
        }, [e, k?.isPending, b]),
        R = a.useMemo(
            () => [
                { text: _.intl.string(_.t.I1LYVk), variant: "secondary", onClick: C },
                { text: _.intl.string(_.t.BddRzS), variant: "critical-primary", onClick: x },
            ],
            [C, x],
        );
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        onClose: b,
        title:
            A?.name != null
                ? _.intl.formatToPlainString(_.t["P+/gzA"], { guildName: A.name })
                : _.intl.string(_.t.gBPcuP),
        actions: R,
        children:
            f?.rejectionReason != null && f?.rejectionReason !== ""
                ? (0, i.jsxs)(s.E, {
                      variant: "text-md/medium",
                      color: "text-default",
                      children: [
                          (0, i.jsx)("span", { className: h.Wj, children: _.intl.string(_.t.cf1psW) }),
                          (0, i.jsx)("span", { children: f?.rejectionReason }),
                      ],
                  })
                : null,
    });
};
