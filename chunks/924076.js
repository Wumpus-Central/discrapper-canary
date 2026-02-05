n.d(t, { A: () => g }), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(311907),
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
    h = n(985018);
function g(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { subscriptionMetadataRequest: g, selectedSku: b, selectedStoreListing: j, application: A } = (0, u.P5)(),
        S = (0, a.A)(f.Y),
        v = (0, l.bG)([d.A], () => d.A.getGuild(g?.guild_id)),
        C = r.useCallback(() => t(m.pn.REVIEW), [t]);
    if (null == b) return null;
    let T = (0, s.bg)(b.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.dZ, {
                children: S
                    ? (0, i.jsx)(c.E, {
                          confirmCta: h.intl.string(h.t.PBHFSq),
                          onConfirm: C,
                          onCancel: n,
                          title: h.intl.format(h.t["6n6oXA"], { tier: b.name }),
                          subtitle: T
                              ? h.intl.string(h.t.lzAoKB)
                              : h.intl.formatToPlainString(h.t["GqaY/j"], { guildName: v?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(o.Uf, {
                          icon: j?.thumbnail,
                          storeListingBenefits: j?.benefits,
                          application: A ?? void 0,
                          title: h.intl.format(h.t.haiCxc, { tier: b.name }),
                          subtitle: T ? h.intl.string(h.t.RvtbP5) : h.intl.string(h.t.zY39Zu),
                          description: T
                              ? h.intl.formatToPlainString(h.t.QCe4rY, { applicationName: A?.name })
                              : h.intl.string(h.t.n1Pu8C),
                      }),
            }),
            !S &&
                (0, i.jsx)(x.UX, {
                    children: (0, i.jsx)(p.A, {
                        onBack: n,
                        backText: h.intl.string(h.t.TQBY1J),
                        onPrimary: C,
                        primaryCTA: p.t.CONTINUE,
                        primaryText: h.intl.string(h.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
