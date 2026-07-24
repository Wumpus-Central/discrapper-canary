e.r(a), e.d(a, { default: () => N });
var l = e(627968),
    n = e(64700),
    d = e(17928),
    t = e(834730),
    c = e(47167),
    s = e(726249),
    r = e(742589),
    o = e(71393),
    u = e(491394),
    h = e(866665),
    p = e(408278),
    x = e(811893),
    j = e(795816),
    m = e(47294),
    b = e(16961),
    g = e(113854),
    v = e(91242),
    A = e(957907),
    I = e(818085),
    f = e(375708);
function k(i) {
    let { channel: a } = i,
        e = (0, A.A)(a),
        t = (0, u.B9)(a.topic),
        c = (0, d.bG)([v.A], () => null != t && v.A.getConnectedFrame()?.applicationId === t, [t]),
        s = (0, b.G)(),
        r = n.useCallback(() => {
            null != t &&
                (0, m.A)({
                    onConfirm: async () => {
                        (await g.A.refreshProxyTicket({ applicationId: t })) && (0, j.jp)();
                    },
                });
        }, [t]);
    return null != e && s && c
        ? (0, l.jsx)(h.m, {
              text: f.intl.string(I.default["6g22y7"]),
              ariaHidden: !0,
              children: (0, l.jsx)(p.K, {
                  "aria-label": f.intl.string(I.default["6g22y7"]),
                  icon: x.t,
                  variant: "icon-only",
                  size: "sm",
                  onClick: r,
              }),
          })
        : null;
}
var y = e(565124),
    C = e(448922);
function N(i) {
    let { channel: a } = i,
        e = (0, u.B9)(a.topic),
        n = (0, A.A)(a)?.id ?? null,
        h = (0, c.Ay)(a),
        p = (0, d.bG)([o.A], () => o.A.getGuild(a.guild_id), [a.guild_id]);
    return (0, l.jsxs)("div", {
        className: C.kL,
        children: [
            (0, l.jsx)(s.HI, { location: p?.name, subsection: h ?? void 0 }),
            (0, l.jsx)("div", {
                className: C.N1,
                children: (0, l.jsx)(
                    r.A,
                    {
                        guildId: a.guild_id,
                        channelId: a.id,
                        channelType: a.type,
                        hideSearch: !0,
                        toolbar: (0, l.jsx)(k, { channel: a }),
                        className: C.wx,
                        "aria-label": h ?? void 0,
                        children: (0, l.jsx)(t.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            className: C.Bv,
                            children: h,
                        }),
                    },
                    `header-${a.id}`,
                ),
            }),
            (0, l.jsx)("div", {
                className: C.Ix,
                "data-vibegrations-channel": !0,
                children: (0, l.jsx)(y.A, { projectId: n, appId: e, channelId: a.id, chatOpen: !1 }),
            }),
        ],
    });
}
