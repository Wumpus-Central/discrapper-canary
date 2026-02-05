n.d(t, { default: () => k });
var s = n(627968),
    a = n(64700),
    i = n(158954),
    r = n(311907),
    o = n(862482),
    l = n(397927),
    d = n(416052),
    c = n(475743),
    u = n(765548),
    m = n(165508),
    C = n(46054),
    h = n(351906),
    x = n(957565),
    p = n(240248),
    _ = n(859703),
    f = n(341915),
    A = n(714510),
    g = n(890687),
    j = n(645627),
    y = n(18437),
    v = n(590202),
    E = n(92246),
    N = n(73473),
    R = n(646764),
    w = n(109174),
    L = n(524728),
    O = n(654487),
    M = n(985018),
    S = n(491284);
function D(e) {
    let { rewardCode: t, questContent: n, questId: a, sourceQuestContent: i, className: l, inputClassName: c } = e,
        u = (0, r.bG)([h.A], () => h.A.hidePersonalInformation),
        m = (0, y.Ut)();
    return null == t
        ? null
        : (0, s.jsx)(d.A, {
              className: l,
              inputClassName: c,
              value: u ? M.intl.string(M.t["0n2u0k"]) : t.code,
              buttonColor: o.XD.PRIMARY,
              onCopy: () => {
                  u && (0, x.C)(t.code),
                      m({ questId: a, questContent: n, questContentCTA: v.Cy.COPY_REWARD_CODE, sourceQuestContent: i });
              },
          });
}
function I(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: r,
            rewardCode: o,
            onClose: d,
            transitionState: c,
            impressionRef: u,
        } = e,
        m = (0, A.XR)({ quest: t, rewardCode: o }) ?? "",
        h = a.useMemo(() => {
            let e = (0, E.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, p.uJ)(e)) return null;
            let n = o?.code;
            return (0, p.uJ)(n) ? e : e.replace(O.mg, encodeURIComponent(n));
        }, [t, o?.code]),
        x = (0, j.HJ)({ quest: t, questContent: n, redemptionLink: h, sourceQuestContent: r });
    return (0, s.jsx)("div", {
        ref: u,
        children: (0, s.jsx)(i.Modal, {
            size: "md",
            title: M.intl.string(M.t.NkZ7OU),
            actions: [
                null != h
                    ? { variant: "primary", text: M.intl.string(M.t["+zx47d"]), onClick: x }
                    : { variant: "primary", text: M.intl.string(M.t["/g10LC"]), onClick: d },
            ],
            preview: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(l.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: S.V6,
                        children: M.intl.string(M.t.srzsU2),
                    }),
                    (0, s.jsx)(D, { rewardCode: o, questContent: n, questId: t.id, sourceQuestContent: r }),
                ],
            }),
            onClose: d,
            transitionState: c,
            children: (0, s.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: S.tG,
                children: C.A.parse(m, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function T(e) {
    let { quest: t, questContent: n, rewardCode: a, sourceQuestContent: i, onClaimInstructions: r } = e;
    return (0, s.jsxs)("div", {
        className: S.hQ,
        children: [
            (0, s.jsx)("div", {
                className: S.tE,
                children: (0, s.jsx)(R.A, { className: S.Ag, quest: t, questContent: n, sourceQuestContent: i }),
            }),
            (0, s.jsxs)("div", {
                className: S.dD,
                children: [
                    (0, s.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: S.R_,
                        children: M.intl.string(M.t["5j/Zym"]),
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: M.intl.format(M.t["ESmp2+"], { onClaimInstructions: r }),
                    }),
                ],
            }),
            (0, s.jsx)(D, {
                className: S.DA,
                rewardCode: a,
                questContent: n,
                questId: t.id,
                sourceQuestContent: i,
                inputClassName: S.Uy,
            }),
        ],
    });
}
function k(e) {
    let t,
        n,
        i,
        o,
        { initialQuest: d, onClose: C, transitionState: h, sourceQuestContent: x } = e,
        p = (0, g.C5)(d.id) ?? d,
        A = f.uF.REWARD_MODAL,
        {
            rewardCode: y,
            isFetchingRewardCode: v,
            isClaimingReward: R,
        } = (0, r.cf)([_.A], () => ({
            rewardCode: _.A.getRewardCode(p.id),
            isFetchingRewardCode: _.A.isFetchingRewardCode(p.id),
            isClaimingReward: _.A.isClaimingReward(p.id),
        })),
        { hasError: M, setHasError: S } = (0, j.Ln)({
            isClaimingReward: R,
            isFetchingRewardCode: v,
            quest: p,
            questContent: A,
            rewardCode: y,
        });
    (t = (0, u.A)(() => {
        S(!0);
    })),
        (n = m.default.useIsCaptchaModalOpen()),
        (i = (0, c.A)(n)),
        (o = !!(!n && i)),
        a.useEffect(() => {
            o && t();
        }, [o, t]);
    let D = null == y && (v || R),
        k = M && !R && !v;
    return (0, s.jsx)(L.A, {
        onClose: C,
        transitionState: h,
        quest: p,
        sourceQuestContent: x,
        location: O.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: D,
        rewardContentHasError: k,
        rewardContent: k
            ? null
            : (0, s.jsx)(w.A, {
                  rewardName: (0, E.mq)(p.config),
                  children: (0, s.jsx)(T, {
                      quest: p,
                      questContent: A,
                      rewardCode: y,
                      sourceQuestContent: x,
                      onClaimInstructions: () => {
                          (0, l.mMO)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, s.jsx)(N.R, {
                                          questOrQuests: p,
                                          questContent: A,
                                          sourceQuestContent: x,
                                          children: (t) =>
                                              (0, s.jsx)(I, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: p,
                                                  questContent: A,
                                                  sourceQuestContent: x,
                                                  rewardCode: y,
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
