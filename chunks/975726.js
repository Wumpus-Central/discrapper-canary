"use strict";
i.d(t, { default: () => F });
var n = i(627968),
    r = i(64700),
    a = i(189213),
    l = i(311907),
    s = i(862482),
    o = i(834730),
    c = i(534514),
    d = i(192308),
    u = i(416052),
    _ = i(475743),
    p = i(765548),
    h = i(165508),
    f = i(46054),
    A = i(351906),
    m = i(957565),
    g = i(240248),
    C = i(859703),
    E = i(341915),
    I = i(714510),
    v = i(890687),
    b = i(645627),
    x = i(18437),
    y = i(590202),
    T = i(92246),
    S = i(73473),
    R = i(646764),
    w = i(109174),
    N = i(524728),
    L = i(654487),
    O = i(985018),
    j = i(75193);
function P(e) {
    let { rewardCode: t, questContent: i, questId: r, sourceQuestContent: a, className: o, inputClassName: c } = e,
        d = (0, l.bG)([A.A], () => A.A.hidePersonalInformation),
        _ = (0, x.Ut)();
    return null == t
        ? null
        : (0, n.jsx)(u.A, {
              className: o,
              inputClassName: c,
              value: d ? O.intl.string(O.t["0n2u0k"]) : t.code,
              buttonColor: s.XD.PRIMARY,
              onCopy: () => {
                  d && (0, m.C)(t.code),
                      _({ questId: r, questContent: i, questContentCTA: y.Cy.COPY_REWARD_CODE, sourceQuestContent: a });
              },
          });
}
function D(e) {
    let {
            quest: t,
            questContent: i,
            sourceQuestContent: l,
            rewardCode: s,
            onClose: c,
            transitionState: d,
            impressionRef: u,
        } = e,
        _ = (0, I.XR)({ quest: t, rewardCode: s }) ?? "",
        p = r.useMemo(() => {
            let e = (0, T.cg)({ quest: t, idx: 0 })?.redemptionLink;
            if ((0, g.uJ)(e)) return null;
            let i = s?.code;
            return (0, g.uJ)(i) ? e : e.replace(L.mg, encodeURIComponent(i));
        }, [t, s?.code]),
        h = (0, b.HJ)({ quest: t, questContent: i, redemptionLink: p, sourceQuestContent: l });
    return (0, n.jsx)("div", {
        ref: u,
        children: (0, n.jsx)(a.Modal, {
            size: "md",
            title: O.intl.string(O.t.NkZ7OU),
            actions: [
                null != p
                    ? { variant: "primary", text: O.intl.string(O.t["+zx47d"]), onClick: h }
                    : { variant: "primary", text: O.intl.string(O.t["/g10LC"]), onClick: c },
            ],
            preview: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(o.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: j.V6,
                        children: O.intl.string(O.t.srzsU2),
                    }),
                    (0, n.jsx)(P, { rewardCode: s, questContent: i, questId: t.id, sourceQuestContent: l }),
                ],
            }),
            onClose: c,
            transitionState: d,
            children: (0, n.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "text-default",
                className: j.tG,
                children: f.A.parse(_, !1, { allowLinks: !0 }),
            }),
        }),
    });
}
function M(e) {
    let { quest: t, questContent: i, rewardCode: r, sourceQuestContent: a, onClaimInstructions: l } = e;
    return (0, n.jsxs)("div", {
        className: j.hQ,
        children: [
            (0, n.jsx)("div", {
                className: j.tE,
                children: (0, n.jsx)(R.A, { className: j.Ag, quest: t, questContent: i, sourceQuestContent: a }),
            }),
            (0, n.jsxs)("div", {
                className: j.dD,
                children: [
                    (0, n.jsx)(c.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: j.R_,
                        children: O.intl.string(O.t["5j/Zym"]),
                    }),
                    (0, n.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: O.intl.format(O.t["ESmp2+"], { onClaimInstructions: l }),
                    }),
                ],
            }),
            (0, n.jsx)(P, {
                className: j.DA,
                rewardCode: r,
                questContent: i,
                questId: t.id,
                sourceQuestContent: a,
                inputClassName: j.Uy,
            }),
        ],
    });
}
function F(e) {
    let t,
        i,
        a,
        s,
        { initialQuest: o, onClose: c, transitionState: u, sourceQuestContent: f } = e,
        A = (0, v.C5)(o.id) ?? o,
        m = E.uF.REWARD_MODAL,
        {
            rewardCode: g,
            isFetchingRewardCode: I,
            isClaimingReward: x,
        } = (0, l.cf)([C.A], () => ({
            rewardCode: C.A.getRewardCode(A.id),
            isFetchingRewardCode: C.A.isFetchingRewardCode(A.id),
            isClaimingReward: C.A.isClaimingReward(A.id),
        })),
        { hasError: y, setHasError: R } = (0, b.Ln)({
            isClaimingReward: x,
            isFetchingRewardCode: I,
            quest: A,
            questContent: m,
            rewardCode: g,
        });
    (t = (0, p.A)(() => {
        R(!0);
    })),
        (i = h.default.useIsCaptchaModalOpen()),
        (a = (0, _.A)(i)),
        (s = !!(!i && a)),
        r.useEffect(() => {
            s && t();
        }, [s, t]);
    let O = null == g && (I || x),
        j = y && !x && !I;
    return (0, n.jsx)(N.A, {
        onClose: c,
        transitionState: u,
        quest: A,
        sourceQuestContent: f,
        location: L.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: O,
        rewardContentHasError: j,
        rewardContent: j
            ? null
            : (0, n.jsx)(w.A, {
                  rewardName: (0, T.mq)(A.config),
                  children: (0, n.jsx)(M, {
                      quest: A,
                      questContent: m,
                      rewardCode: g,
                      sourceQuestContent: f,
                      onClaimInstructions: () => {
                          (0, d.openModalLazy)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, n.jsx)(S.R, {
                                          questOrQuests: A,
                                          questContent: m,
                                          sourceQuestContent: f,
                                          children: (t) =>
                                              (0, n.jsx)(D, {
                                                  ...e,
                                                  impressionRef: t,
                                                  quest: A,
                                                  questContent: m,
                                                  sourceQuestContent: f,
                                                  rewardCode: g,
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
