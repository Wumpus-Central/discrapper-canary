l.r(a), l.d(a, { default: () => C });
var e = l(477900),
    n = l(582128),
    d = l(17928),
    t = l(834730),
    c = l(47167),
    s = l(726249),
    r = l(742589),
    u = l(71393),
    o = l(683180),
    p = l(866665),
    h = l(408278),
    x = l(811893),
    g = l(795816),
    A = l(47294),
    m = l(16961),
    v = l(113854),
    j = l(91242),
    b = l(957907),
    y = l(818085),
    I = l(375708);
function f(i) {
    let { channel: a } = i,
        l = (0, b.A)(a),
        t = (0, o.B9)(a.topic),
        c = (0, d.bG)([j.A], () => null != t && j.A.getMainFrame()?.applicationId === t, [t]),
        s = (0, m.G)(),
        r = n.useCallback(() => {
            null != t &&
                (0, A.A)({
                    onConfirm: async () => {
                        let i = j.A.getMainFrame();
                        null != i && i.applicationId === t && (await v.A.refreshProxyTicket(i.id)) && (0, g.jp)();
                    },
                });
        }, [t]);
    return null != l && s && c
        ? (0, e.jsx)(p.m, {
              text: I.intl.string(y.default["6g22y7"]),
              ariaHidden: !0,
              children: (0, e.jsx)(h.K, {
                  "aria-label": I.intl.string(y.default["6g22y7"]),
                  icon: x.t,
                  variant: "icon-only",
                  size: "sm",
                  onClick: r,
              }),
          })
        : null;
}
var k = l(602323),
    N = l(165610),
    _ = l(448922);
function C(i) {
    let { channel: a } = i,
        l = (0, o.B9)(a.topic),
        n = (0, b.A)(a)?.id ?? null,
        p = (0, c.Ay)(a),
        h = (0, d.bG)([u.A], () => u.A.getGuild(a.guild_id), [a.guild_id]);
    return null == l
        ? null
        : (0, e.jsxs)("div", {
              className: _.kL,
              children: [
                  (0, e.jsx)(s.HI, { location: h?.name, subsection: p ?? void 0 }),
                  (0, e.jsx)("div", {
                      className: _.N1,
                      children: (0, e.jsx)(
                          r.A,
                          {
                              guildId: a.guild_id,
                              channelId: a.id,
                              channelType: a.type,
                              hideSearch: !0,
                              toolbar: (0, e.jsx)(f, { channel: a }),
                              className: _.wx,
                              "aria-label": p ?? void 0,
                              children: (0, e.jsx)(t.E, {
                                  variant: "text-md/semibold",
                                  color: "text-default",
                                  className: _.Bv,
                                  children: p,
                              }),
                          },
                          `header-${a.id}`,
                      ),
                  }),
                  (0, e.jsx)("div", {
                      className: _.Ix,
                      "data-vibegrations-channel": !0,
                      children: (0, e.jsx)(k.A, {
                          projectId: n,
                          applicationId: l,
                          surface: { type: N.U4.APP_CHANNEL, channelId: a.id, guildId: a.guild_id ?? void 0 },
                          chatOpen: !1,
                          previewReady: !0,
                      }),
                  }),
              ],
          });
}
