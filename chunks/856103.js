n.d(t, {
    default: () => h,
});
var l = n(627968),
    i = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(397927),
    d = n(696451),
    u = n(71393),
    o = n(287809),
    c = n(624458),
    b = n(202384),
    g = n(212455),
    f = n(739985),
    v = n(985018),
    p = n(400783);
let h = function (e) {
    let { guildId: t, transitionState: n, onClose: h } = e,
        m = (0, r.bG)([g.A], () => g.A.getRequest(t), [t]),
        A = (0, r.bG)([u.A], () => u.A.getGuild(t), [t]),
        k = (0, r.bG)([o.default], () => {
            var e;
            return null == (e = o.default.getCurrentUser()) ? void 0 : e.id;
        }),
        x = (0, r.bG)([d.Ay], () => (null != k ? d.Ay.getMember(t, k) : null), [k, t]),
        j = i.useCallback(() => {
            h(), null == x && (0, f.A)();
        }, [x, h]),
        C = i.useCallback(async () => {
            if (null == x ? void 0 : x.isPending) {
                try {
                    await c.A.removeGuildJoinRequest(t);
                } catch (e) {
                    throw e;
                }
                h(), (0, b.Ze)(t);
            } else c.A.resetGuildJoinRequest(t);
        }, [t, null == x ? void 0 : x.isPending, h]),
        G = i.useMemo(
            () => [
                {
                    text: v.intl.string(v.t.I1LYVk),
                    variant: "secondary",
                    onClick: C,
                },
                {
                    text: v.intl.string(v.t.BddRzS),
                    variant: "critical-primary",
                    onClick: j,
                },
            ],
            [C, j],
        );
    return (0, l.jsx)(a.Modal, {
        transitionState: n,
        onClose: h,
        title:
            (null == A ? void 0 : A.name) != null
                ? v.intl.formatToPlainString(v.t["P+/gzA"], {
                      guildName: A.name,
                  })
                : v.intl.string(v.t.gBPcuP),
        actions: G,
        children:
            (null == m ? void 0 : m.rejectionReason) != null && (null == m ? void 0 : m.rejectionReason) !== ""
                ? (0, l.jsxs)(s.Text, {
                      variant: "text-md/medium",
                      color: "text-default",
                      children: [
                          (0, l.jsx)("span", {
                              className: p.Wj,
                              children: v.intl.string(v.t.cf1psW),
                          }),
                          (0, l.jsx)("span", {
                              children: null == m ? void 0 : m.rejectionReason,
                          }),
                      ],
                  })
                : null,
    });
};
