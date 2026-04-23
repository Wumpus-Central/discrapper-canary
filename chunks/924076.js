n.d(e, { A: () => S }), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(241524),
    s = n(427675),
    o = n(163437),
    c = n(490744),
    u = n(594508),
    d = n(71393),
    p = n(156312),
    m = n(166532),
    f = n(19311),
    x = n(482132),
    g = n(376747),
    h = n(985018);
function S(t) {
    let { handleStepChange: e, handleClose: n } = t,
        { subscriptionMetadataRequest: S, selectedStoreListing: b, application: A } = (0, p.P5)(),
        j = (0, s.S3)(),
        E = (0, a.A)(g.Y),
        v = (0, r.bG)([d.A], () => d.A.getGuild(S?.guild_id)),
        C = l.useCallback(() => e(m.pn.REVIEW), [e]);
    if (null == j) return null;
    let y = (0, o.bg)(j.flags);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.dZ, {
                children: E
                    ? (0, i.jsx)(u.E, {
                          confirmCta: h.intl.string(h.t.PBHFSq),
                          onConfirm: C,
                          onCancel: n,
                          title: h.intl.format(h.t["6n6oXA"], { tier: j.name }),
                          subtitle: y
                              ? h.intl.string(h.t.lzAoKB)
                              : h.intl.formatToPlainString(h.t["GqaY/j"], { guildName: v?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, i.jsx)(c.Uf, {
                          icon: b?.thumbnail,
                          storeListingBenefits: b?.benefits,
                          application: A ?? void 0,
                          title: h.intl.format(h.t.haiCxc, { tier: j.name }),
                          subtitle: y ? h.intl.string(h.t.RvtbP5) : h.intl.string(h.t.zY39Zu),
                          description: y
                              ? h.intl.formatToPlainString(h.t.QCe4rY, { applicationName: A?.name })
                              : h.intl.string(h.t.n1Pu8C),
                      }),
            }),
            !E &&
                (0, i.jsx)(x.UX, {
                    children: (0, i.jsx)(f.Ay, {
                        onBack: n,
                        backText: h.intl.string(h.t.TQBY1J),
                        onPrimary: C,
                        primaryCTA: f.ti.CONTINUE,
                        primaryText: h.intl.string(h.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
