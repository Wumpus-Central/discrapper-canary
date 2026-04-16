n.d(t, { default: () => b });
var a = n(627968),
    r = n(64700),
    s = n(158954),
    o = n(311907),
    i = n(862482),
    l = n(397927),
    d = n(416052),
    c = n(475743),
    u = n(765548),
    C = n(165508),
    p = n(46054),
    _ = n(351906),
    h = n(957565),
    m = n(240248),
    f = n(859703),
    x = n(341915),
    y = n(714510),
    A = n(890687),
    R = n(645627),
    E = n(18437),
    w = n(590202),
    g = n(92246),
    O = n(73473),
    j = n(646764),
    v = n(109174),
    S = n(524728),
    q = n(654487),
    k = n(985018),
    L = n(75193);
function D(e) {
    let { rewardCode: t, questContent: n, questId: r, sourceQuestContent: s, className: l, inputClassName: c } = e,
        u = (0, o.bG)([_.A], () => _.A.hidePersonalInformation),
        C = (0, E.Ut)();
    return null == t
        ? null
        : (0, a.jsx)(d.A, {
              className: l,
              inputClassName: c,
              value: u ? k.intl.string(k.t["0n2u0k"]) : t.code,
              buttonColor: i.XD.PRIMARY,
              onCopy: () => {
                  u && (0, h.C)(t.code),
                      C({ questId: r, questContent: n, questContentCTA: w.Cy.COPY_REWARD_CODE, sourceQuestContent: s });
              },
          });
}
function I(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: o,
            rewardCode: i,
            onClose: d,
            transitionState: c,
            impressionRef: u,
        } = e,
        C = (0, y.XR)({ quest: t, rewardCode: i }) ?? "",
        _ = r.useMemo(() => {
            let e = (0, g.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, m.uJ)(e)) return null;
            let n = i?.code;
            return (0, m.uJ)(n) ? e : e.replace(q.mg, encodeURIComponent(n));
        }, [t, i?.code]),
        h = (0, R.HJ)({ quest: t, questContent: n, redemptionLink: _, sourceQuestContent: o });
    return (0, a.jsx)("div", {
        ref: u,
        children: (0, a.jsx)(s.Modal, {
            size: "md",
            title: k.intl.string(k.t.NkZ7OU),
            actions: [
                null != _
                    ? { variant: "primary", text: k.intl.string(k.t["+zx47d"]), onClick: h }
                    : { variant: "primary", text: k.intl.string(k.t["/g10LC"]), onClick: d },
            ],
            preview: (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(l.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: L.V6,
                        children: k.intl.string(k.t.srzsU2),
                    }),
                    (0, a.jsx)(D, { rewardCode: i, questContent: n, questId: t.id, sourceQuestContent: o }),
                ],
            }),
            onClose: d,
            transitionState: c,
            children: (0, a.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: L.tG,
                children: p.A.parse(C, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function M(e) {
    let { quest: t, questContent: n, rewardCode: r, sourceQuestContent: s, onClaimInstructions: o } = e;
    return (0, a.jsxs)("div", {
        className: L.hQ,
        children: [
            (0, a.jsx)("div", {
                className: L.tE,
                children: (0, a.jsx)(j.A, { className: L.Ag, quest: t, questContent: n, sourceQuestContent: s }),
            }),
            (0, a.jsxs)("div", {
                className: L.dD,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: L.R_,
                        children: k.intl.string(k.t["5j/Zym"]),
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: k.intl.format(k.t["ESmp2+"], { onClaimInstructions: o }),
                    }),
                ],
            }),
            (0, a.jsx)(D, {
                className: L.DA,
                rewardCode: r,
                questContent: n,
                questId: t.id,
                sourceQuestContent: s,
                inputClassName: L.Uy,
            }),
        ],
    });
}
function b(e) {
    let t,
        n,
        s,
        i,
        { initialQuest: d, onClose: p, transitionState: _, sourceQuestContent: h } = e,
        m = (0, A.C5)(d.id) ?? d,
        y = x.uF.REWARD_MODAL,
        {
            rewardCode: E,
            isFetchingRewardCode: w,
            isClaimingReward: j,
        } = (0, o.cf)([f.A], () => ({
            rewardCode: f.A.getRewardCode(m.id),
            isFetchingRewardCode: f.A.isFetchingRewardCode(m.id),
            isClaimingReward: f.A.isClaimingReward(m.id),
        })),
        { hasError: k, setHasError: L } = (0, R.Ln)({
            isClaimingReward: j,
            isFetchingRewardCode: w,
            quest: m,
            questContent: y,
            rewardCode: E,
        });
    (t = (0, u.A)(() => {
        L(!0);
    })),
        (n = C.default.useIsCaptchaModalOpen()),
        (s = (0, c.A)(n)),
        (i = !!(!n && s)),
        r.useEffect(() => {
            i && t();
        }, [i, t]);
    let D = null == E && (w || j),
        b = k && !j && !w;
    return (0, a.jsx)(S.A, {
        onClose: p,
        transitionState: _,
        quest: m,
        sourceQuestContent: h,
        location: q.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: D,
        rewardContentHasError: b,
        rewardContent: b
            ? null
            : (0, a.jsx)(v.A, {
                  rewardName: (0, g.mq)(m.config),
                  children: (0, a.jsx)(M, {
                      quest: m,
                      questContent: y,
                      rewardCode: E,
                      sourceQuestContent: h,
                      onClaimInstructions: () => {
                          (0, l.mMO)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, a.jsx)(O.R, {
                                          questOrQuests: m,
                                          questContent: y,
                                          sourceQuestContent: h,
                                          children: (t) =>
                                              (0, a.jsx)(I, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: m,
                                                  questContent: y,
                                                  sourceQuestContent: h,
                                                  rewardCode: E,
                                              }),
                                      }),
                                  ),
                              { stackingBehavior: "replace" },
                          );
                      },
                  }),
              }),
    });
}
