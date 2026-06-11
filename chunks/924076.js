n.d(t, { A: () => h }), n(938796);
var l = n(627968),
    r = n(64700),
    i = n(17928),
    a = n(241524),
    s = n(31823),
    o = n(266060),
    u = n(427675),
    c = n(163437),
    d = n(897904),
    C = n(594508),
    p = n(71393),
    m = n(166532),
    _ = n(19311),
    E = n(482132),
    T = n(975965),
    I = n(376747),
    S = n(375708);
function h(e) {
    let { handleStepChange: t, handleClose: n } = e,
        h = (0, o.K)(),
        { subscriptionMetadataRequest: A } = (0, T.l)(),
        { application: O } = (0, s.V)(),
        x = (0, u.S3)(),
        f = (0, a.A)(I.Y),
        P = (0, i.bG)([p.A], () => p.A.getGuild(A?.guild_id)),
        g = r.useCallback(() => t(m.pn.REVIEW), [t]);
    if (null == x) return null;
    let N = (0, c.bg)(x.flags);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.dZ, {
                children: f
                    ? (0, l.jsx)(C.E, {
                          confirmCta: S.intl.string(S.t.PBHFSq),
                          onConfirm: g,
                          onCancel: n,
                          title: S.intl.format(S.t["6n6oXA"], { tier: x.name }),
                          subtitle: N
                              ? S.intl.string(S.t.lzAoKB)
                              : S.intl.formatToPlainString(S.t["GqaY/j"], { guildName: P?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, l.jsx)(d.Uf, {
                          icon: h?.thumbnail,
                          storeListingBenefits: h?.benefits,
                          application: O ?? void 0,
                          title: S.intl.format(S.t.haiCxc, { tier: x.name }),
                          subtitle: N ? S.intl.string(S.t.RvtbP5) : S.intl.string(S.t.zY39Zu),
                          description: N
                              ? S.intl.formatToPlainString(S.t.QCe4rY, { applicationName: O?.name })
                              : S.intl.string(S.t.n1Pu8C),
                      }),
            }),
            !f &&
                (0, l.jsx)(E.UX, {
                    children: (0, l.jsx)(_.Ay, {
                        onBack: n,
                        backText: S.intl.string(S.t.TQBY1J),
                        onPrimary: g,
                        primaryCTA: _.ti.CONTINUE,
                        primaryText: S.intl.string(S.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
