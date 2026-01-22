n.d(t, {
    A: () => x,
}),
    n(938796);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(241524),
    s = n(163437),
    o = n(490744),
    c = n(594508),
    u = n(71393),
    d = n(156312),
    p = n(166532),
    m = n(19311),
    f = n(482132),
    b = n(376747),
    g = n(985018);

function x(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: x, selectedSku: j, selectedStoreListing: h, application: v } = (0, d.P5)(),
        y = (0, a.A)(b.Y),
        P = (0, l.bG)([u.A], () => u.A.getGuild(null == x ? void 0 : x.guild_id)),
        O = i.useCallback(() => t(p.pn.REVIEW), [t]);
    if (null == j) return null;
    let S = (0, s.bg)(j.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.dZ, {
                children: y
                    ? (0, r.jsx)(c.E, {
                          confirmCta: g.intl.string(g.t.PBHFSq),
                          onConfirm: O,
                          onCancel: n,
                          title: g.intl.format(g.t["6n6oXA"], {
                              tier: j.name,
                          }),
                          subtitle: S
                              ? g.intl.string(g.t.lzAoKB)
                              : g.intl.formatToPlainString(g.t["GqaY/j"], {
                                    guildName: null == P ? void 0 : P.name,
                                }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(o.Uf, {
                          icon: null == h ? void 0 : h.thumbnail,
                          storeListingBenefits: null == h ? void 0 : h.benefits,
                          application: null != v ? v : void 0,
                          title: g.intl.format(g.t.haiCxc, {
                              tier: j.name,
                          }),
                          subtitle: S ? g.intl.string(g.t.RvtbP5) : g.intl.string(g.t.zY39Zu),
                          description: S
                              ? g.intl.formatToPlainString(g.t.QCe4rY, {
                                    applicationName: null == v ? void 0 : v.name,
                                })
                              : g.intl.string(g.t.n1Pu8C),
                      }),
            }),
            !y &&
                (0, r.jsx)(f.UX, {
                    children: (0, r.jsx)(m.A, {
                        onBack: n,
                        backText: g.intl.string(g.t.TQBY1J),
                        onPrimary: O,
                        primaryCTA: m.t.CONTINUE,
                        primaryText: g.intl.string(g.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
