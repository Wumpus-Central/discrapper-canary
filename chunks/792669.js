e.r(a), e.d(a, { default: () => N });
var l = e(477900),
    n = e(582128),
    d = e(17928),
    t = e(834730),
    c = e(47167),
    s = e(726249),
    r = e(742589),
    o = e(71393),
    u = e(683180),
    h = e(866665),
    p = e(408278),
    x = e(811893),
    j = e(795816),
    m = e(47294),
    v = e(16961),
    b = e(113854),
    g = e(91242),
    A = e(957907),
    y = e(818085),
    I = e(375708);
function f(i) {
    let { channel: a } = i,
        e = (0, A.A)(a),
        t = (0, u.B9)(a.topic),
        c = (0, d.bG)([g.A], () => null != t && g.A.getConnectedFrame()?.applicationId === t, [t]),
        s = (0, v.G)(),
        r = n.useCallback(() => {
            null != t &&
                (0, m.A)({
                    onConfirm: async () => {
                        (await b.A.refreshProxyTicket({ applicationId: t })) && (0, j.jp)();
                    },
                });
        }, [t]);
    return null != e && s && c
        ? (0, l.jsx)(h.m, {
              text: I.intl.string(y.default["6g22y7"]),
              ariaHidden: !0,
              children: (0, l.jsx)(p.K, {
                  "aria-label": I.intl.string(y.default["6g22y7"]),
                  icon: x.t,
                  variant: "icon-only",
                  size: "sm",
                  onClick: r,
              }),
          })
        : null;
}
var k = e(321210),
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
                        toolbar: (0, l.jsx)(f, { channel: a }),
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
                children: (0, l.jsx)(k.A, { projectId: n, appId: e, channelId: a.id, chatOpen: !1, previewReady: !0 }),
            }),
        ],
    });
}
