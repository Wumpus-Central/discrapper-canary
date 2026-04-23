n.d(t, { default: () => T });
var a = n(627968),
    s = n(64700),
    r = n(189213),
    o = n(311907),
    i = n(862482),
    l = n(834730),
    d = n(534514),
    c = n(192308),
    u = n(416052),
    C = n(475743),
    p = n(765548),
    _ = n(165508),
    h = n(46054),
    m = n(351906),
    f = n(957565),
    y = n(240248),
    x = n(859703),
    A = n(341915),
    E = n(714510),
    R = n(890687),
    w = n(645627),
    g = n(18437),
    S = n(590202),
    j = n(92246),
    v = n(73473),
    L = n(646764),
    q = n(109174),
    k = n(524728),
    M = n(654487),
    D = n(985018),
    I = n(75193);
function b(e) {
    let { rewardCode: t, questContent: n, questId: s, sourceQuestContent: r, className: l, inputClassName: d } = e,
        c = (0, o.bG)([m.A], () => m.A.hidePersonalInformation),
        C = (0, g.Ut)();
    return null == t
        ? null
        : (0, a.jsx)(u.A, {
              className: l,
              inputClassName: d,
              value: c ? D.intl.string(D.t["0n2u0k"]) : t.code,
              buttonColor: i.XD.PRIMARY,
              onCopy: () => {
                  c && (0, f.C)(t.code),
                      C({ questId: s, questContent: n, questContentCTA: S.Cy.COPY_REWARD_CODE, sourceQuestContent: r });
              },
          });
}
function N(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: o,
            rewardCode: i,
            onClose: d,
            transitionState: c,
            impressionRef: u,
        } = e,
        C = (0, E.XR)({ quest: t, rewardCode: i }) ?? "",
        p = s.useMemo(() => {
            let e = (0, j.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, y.uJ)(e)) return null;
            let n = i?.code;
            return (0, y.uJ)(n) ? e : e.replace(M.mg, encodeURIComponent(n));
        }, [t, i?.code]),
        _ = (0, w.HJ)({ quest: t, questContent: n, redemptionLink: p, sourceQuestContent: o });
    return (0, a.jsx)("div", {
        ref: u,
        children: (0, a.jsx)(r.Modal, {
            size: "md",
            title: D.intl.string(D.t.NkZ7OU),
            actions: [
                null != p
                    ? { variant: "primary", text: D.intl.string(D.t["+zx47d"]), onClick: _ }
                    : { variant: "primary", text: D.intl.string(D.t["/g10LC"]), onClick: d },
            ],
            preview: (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(l.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: I.V6,
                        children: D.intl.string(D.t.srzsU2),
                    }),
                    (0, a.jsx)(b, { rewardCode: i, questContent: n, questId: t.id, sourceQuestContent: o }),
                ],
            }),
            onClose: d,
            transitionState: c,
            children: (0, a.jsx)(l.E, {
                variant: "text-sm/medium",
                color: "text-default",
                className: I.tG,
                children: h.A.parse(C, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function O(e) {
    let { quest: t, questContent: n, rewardCode: s, sourceQuestContent: r, onClaimInstructions: o } = e;
    return (0, a.jsxs)("div", {
        className: I.hQ,
        children: [
            (0, a.jsx)("div", {
                className: I.tE,
                children: (0, a.jsx)(L.A, { className: I.Ag, quest: t, questContent: n, sourceQuestContent: r }),
            }),
            (0, a.jsxs)("div", {
                className: I.dD,
                children: [
                    (0, a.jsx)(d.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: I.R_,
                        children: D.intl.string(D.t["5j/Zym"]),
                    }),
                    (0, a.jsx)(l.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: D.intl.format(D.t["ESmp2+"], { onClaimInstructions: o }),
                    }),
                ],
            }),
            (0, a.jsx)(b, {
                className: I.DA,
                rewardCode: s,
                questContent: n,
                questId: t.id,
                sourceQuestContent: r,
                inputClassName: I.Uy,
            }),
        ],
    });
}
function T(e) {
    let t,
        n,
        r,
        i,
        { initialQuest: l, onClose: d, transitionState: u, sourceQuestContent: h } = e,
        m = (0, R.C5)(l.id) ?? l,
        f = A.uF.REWARD_MODAL,
        {
            rewardCode: y,
            isFetchingRewardCode: E,
            isClaimingReward: g,
        } = (0, o.cf)([x.A], () => ({
            rewardCode: x.A.getRewardCode(m.id),
            isFetchingRewardCode: x.A.isFetchingRewardCode(m.id),
            isClaimingReward: x.A.isClaimingReward(m.id),
        })),
        { hasError: S, setHasError: L } = (0, w.Ln)({
            isClaimingReward: g,
            isFetchingRewardCode: E,
            quest: m,
            questContent: f,
            rewardCode: y,
        });
    (t = (0, p.A)(() => {
        L(!0);
    })),
        (n = _.default.useIsCaptchaModalOpen()),
        (r = (0, C.A)(n)),
        (i = !!(!n && r)),
        s.useEffect(() => {
            i && t();
        }, [i, t]);
    let D = null == y && (E || g),
        I = S && !g && !E;
    return (0, a.jsx)(k.A, {
        onClose: d,
        transitionState: u,
        quest: m,
        sourceQuestContent: h,
        location: M.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: D,
        rewardContentHasError: I,
        rewardContent: I
            ? null
            : (0, a.jsx)(q.A, {
                  rewardName: (0, j.mq)(m.config),
                  children: (0, a.jsx)(O, {
                      quest: m,
                      questContent: f,
                      rewardCode: y,
                      sourceQuestContent: h,
                      onClaimInstructions: () => {
                          (0, c.openModalLazy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, a.jsx)(v.R, {
                                          questOrQuests: m,
                                          questContent: f,
                                          sourceQuestContent: h,
                                          children: (t) =>
                                              (0, a.jsx)(N, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: m,
                                                  questContent: f,
                                                  sourceQuestContent: h,
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
