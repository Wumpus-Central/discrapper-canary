n.d(t, { A: () => b }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(502572),
    d = n(397927),
    c = n(983511),
    u = n(342744),
    m = n(987144),
    g = n(166403),
    _ = n(473145),
    x = n(927578),
    A = n(311092),
    h = n(652215),
    p = n(788868),
    T = n(985018),
    f = n(477570),
    S = n(410229);
function b(e) {
    let { guildBoostSlots: t, fractionalPremiumState: l } = e,
        c = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        { unappliedSlots: u, numActiveSlots: A } = s.useMemo(() => {
            let e = [],
                n = 0;
            for (let i of t) !(0, _.I5)(i) && n++, null == i.premiumGuildSubscription && e.push(i);
            return { unappliedSlots: e, numActiveSlots: n };
        }, [t]),
        b = A > (null != c ? x.Ay.getNumIncludedPremiumGuildSubscriptionSlots(c.planId) : 0),
        C = c?.isPausedOrPausePending === !0 && l === p.xc.NONE;
    return 0 === u.length
        ? null
        : (0, i.jsxs)("div", {
              className: f.Nr,
              children: [
                  (0, i.jsxs)("div", {
                      className: f.MY,
                      children: [
                          (0, i.jsxs)("div", {
                              className: f._L,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: f.MD,
                                      children: [
                                          (0, i.jsx)("img", { alt: "", className: f.F8, src: S.A }),
                                          (0, i.jsx)("div", {
                                              className: a()(f.qS, "theme-dark"),
                                              children: (0, i.jsx)("span", { className: f.Vv, children: u.length }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: f.Qp,
                                      children: [
                                          (0, i.jsx)(d.Text, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: T.intl.format(T.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: u.length,
                                              }),
                                          }),
                                          (0, i.jsx)(d.Text, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: T.intl.format(T.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: u.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsx)(o.A, {
                              shouldShow: C,
                              text: T.intl.string(T.t.mOWsF1),
                              "aria-label": T.intl.string(T.t.mOWsF1),
                              children: (e) =>
                                  (0, i.jsx)(d.Button, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: d._Jp,
                                      text: T.intl.string(T.t.BMx1iy),
                                      disabled: C,
                                      onClick: () => {
                                          (0, d.mMO)(async () => {
                                              let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, m.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: h.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: h.JJy.SETTINGS_PREMIUM,
                                                                      object: h.ZSU.BUTTON_CTA,
                                                                      objectType: h.AnalyticsObjectTypes.BUY,
                                                                  },
                                                                  guild: e,
                                                              });
                                                      },
                                                  });
                                          });
                                      },
                                  }),
                          }),
                      ],
                  }),
                  u.map((e, t) =>
                      (0, i.jsx)(
                          E,
                          {
                              slot: e,
                              isLast: t === u.length - 1,
                              isCancelable: b && !(0, _.I5)(e),
                              isCanceled: (0, _.I5)(e),
                              premiumSubscription: c,
                              modificationsDisabled: C,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function E(e) {
    let t,
        { slot: n, isLast: l, isCancelable: r, isCanceled: o, premiumSubscription: m, modificationsDisabled: g } = e,
        _ = s.useRef(null),
        x = s.useMemo(() => (null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null), [n.cooldownEndsAt]);
    t =
        o && null != m
            ? (0, i.jsx)(d.Text, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: T.intl.format(T.t.Z4ULRD, { date: m.currentPeriodEnd }),
              })
            : n.isOnCooldown() && null != x
              ? (0, i.jsx)(A.A, { cooldown: x.getTime() })
              : (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: T.intl.string(T.t["2mcafz"]),
                });
    let h = r || o;
    return (0, i.jsxs)("div", {
        className: a()(f.iq, { [f.Mt]: l }),
        children: [
            (0, i.jsxs)("div", {
                className: f.kd,
                children: [(0, i.jsx)("img", { alt: "", className: f.bB, src: S.A }), t],
            }),
            h &&
                (0, i.jsx)(d.YNO, {
                    targetElementRef: _,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, i.jsxs)(d.W1t, {
                            navId: "unapplied-boost-actions",
                            "aria-label": T.intl.string(T.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                r &&
                                    (0, i.jsx)(d.Drp, {
                                        id: "cancel-boost",
                                        label: T.intl.string(T.t.twFU3R),
                                        color: "danger",
                                        disabled: g,
                                        subtext: g ? T.intl.string(T.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, d.mMO)(
                                                    async () => (e) =>
                                                        (0, i.jsx)(c.default, { ...e, guildBoostSlot: n }),
                                                );
                                        },
                                    }),
                                o &&
                                    (0, i.jsx)(d.Drp, {
                                        id: "uncancel-boost",
                                        label: T.intl.string(T.t["2glQNp"]),
                                        disabled: g,
                                        subtext: g ? T.intl.string(T.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, d.mMO)(
                                                    async () => (e) =>
                                                        (0, i.jsx)(u.default, { ...e, guildBoostSlotId: n.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, i.jsx)(d.DUT, {
                            innerRef: _,
                            "aria-label": T.intl.string(T.t["UKOtz+"]),
                            className: f.Mj,
                            ...e,
                            children: (0, i.jsx)(d.jNK, { size: "xs", color: d.LU0.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
