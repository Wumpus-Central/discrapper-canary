n.d(t, { A: () => h }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(241524),
    s = n(163437),
    o = n(490744),
    c = n(594508),
    d = n(71393),
    u = n(156312),
    m = n(166532),
    p = n(19311),
    x = n(482132),
    f = n(376747),
    g = n(985018);
function h(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: h, selectedSku: b, selectedStoreListing: j, application: A } = (0, u.P5)(),
        S = (0, a.A)(f.Y),
        v = (0, r.bG)([d.A], () => d.A.getGuild(h?.guild_id)),
        C = l.useCallback(() => t(m.pn.REVIEW), [t]);
    if (null == b) return null;
    let N = (0, s.bg)(b.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.dZ, {
                children: S
                    ? (0, i.jsx)(c.E, {
                          confirmCta: g.intl.string(g.t.PBHFSq),
                          onConfirm: C,
                          onCancel: n,
                          title: g.intl.format(g.t["6n6oXA"], { tier: b.name }),
                          subtitle: N
                              ? g.intl.string(g.t.lzAoKB)
                              : g.intl.formatToPlainString(g.t["GqaY/j"], { guildName: v?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(o.Uf, {
                          icon: j?.thumbnail,
                          storeListingBenefits: j?.benefits,
                          application: A ?? void 0,
                          title: g.intl.format(g.t.haiCxc, { tier: b.name }),
                          subtitle: N ? g.intl.string(g.t.RvtbP5) : g.intl.string(g.t.zY39Zu),
                          description: N
                              ? g.intl.formatToPlainString(g.t.QCe4rY, { applicationName: A?.name })
                              : g.intl.string(g.t.n1Pu8C),
                      }),
            }),
            !S &&
                (0, i.jsx)(x.UX, {
                    children: (0, i.jsx)(p.Ay, {
                        onBack: n,
                        backText: g.intl.string(g.t.TQBY1J),
                        onPrimary: C,
                        primaryCTA: p.ti.CONTINUE,
                        primaryText: g.intl.string(g.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
