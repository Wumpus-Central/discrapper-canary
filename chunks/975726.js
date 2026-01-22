n.d(t, {
    default: () => q,
}),
    n(747238),
    n(812715);
var r = n(627968),
    a = n(64700),
    i = n(158954),
    s = n(311907),
    c = n(862482),
    l = n(397927),
    o = n(416052),
    d = n(475743),
    u = n(765548),
    f = n(165508),
    m = n(46054),
    x = n(351906),
    h = n(957565),
    p = n(240248),
    C = n(216456),
    j = n(859703),
    b = n(341915),
    y = n(714510),
    g = n(890687),
    v = n(645627),
    O = n(92246),
    A = n(73473),
    _ = n(646764),
    w = n(109174),
    N = n(524728),
    E = n(654487),
    R = n(985018),
    k = n(491284);

function D(e) {
    let { rewardCode: t, questContent: n, questId: a, sourceQuestContent: i, className: l, inputClassName: d } = e,
        u = (0, s.bG)([x.A], () => x.A.hidePersonalInformation),
        f = (0, C.Ut)();
    return null == t
        ? null
        : (0, r.jsx)(o.A, {
              className: l,
              inputClassName: d,
              value: u ? R.intl.string(R.t["0n2u0k"]) : t.code,
              buttonColor: c.XD.PRIMARY,
              onCopy: () => {
                  u && (0, h.C)(t.code),
                      f({
                          questId: a,
                          questContent: n,
                          questContentCTA: C.Cy.COPY_REWARD_CODE,
                          sourceQuestContent: i,
                      });
              },
          });
}

function P(e) {
    var t;
    let {
            quest: n,
            questContent: s,
            sourceQuestContent: c,
            rewardCode: o,
            onClose: d,
            transitionState: u,
            impressionRef: f,
        } = e,
        x =
            null !=
            (t = (0, y.XR)({
                quest: n,
                rewardCode: o,
            }))
                ? t
                : "",
        h = a.useMemo(() => {
            var e;
            let t =
                null ==
                (e = (0, O.cg)({
                    quest: n,
                    idx: 0,
                }))
                    ? void 0
                    : e.redemptionLink;
            if ((0, p.uJ)(t)) return null;
            let r = null == o ? void 0 : o.code;
            return (0, p.uJ)(r) ? t : t.replace(E.mg, encodeURIComponent(r));
        }, [n, null == o ? void 0 : o.code]),
        C = (0, v.HJ)({
            quest: n,
            questContent: s,
            redemptionLink: h,
            sourceQuestContent: c,
        });
    return (0, r.jsx)("div", {
        ref: f,
        children: (0, r.jsx)(i.Modal, {
            size: "md",
            title: R.intl.string(R.t.NkZ7OU),
            actions: [
                null != h
                    ? {
                          variant: "primary",
                          text: R.intl.string(R.t["+zx47d"]),
                          onClick: C,
                      }
                    : {
                          variant: "primary",
                          text: R.intl.string(R.t["/g10LC"]),
                          onClick: d,
                      },
            ],
            preview: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        className: k.V6,
                        children: R.intl.string(R.t.srzsU2),
                    }),
                    (0, r.jsx)(D, {
                        rewardCode: o,
                        questContent: s,
                        questId: n.id,
                        sourceQuestContent: c,
                    }),
                ],
            }),
            onClose: d,
            transitionState: u,
            children: (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: k.tG,
                children: m.A.parse(x, !1, {
                    allowLinks: !0,
                }),
            }),
        }),
    });
}

function L(e) {
    let { quest: t, questContent: n, rewardCode: a, sourceQuestContent: i, onClaimInstructions: s } = e;
    return (0, r.jsxs)("div", {
        className: k.hQ,
        children: [
            (0, r.jsx)("div", {
                className: k.tE,
                children: (0, r.jsx)(_.A, {
                    className: k.Ag,
                    quest: t,
                    questContent: n,
                    sourceQuestContent: i,
                }),
            }),
            (0, r.jsxs)("div", {
                className: k.dD,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: k.R_,
                        children: R.intl.string(R.t["5j/Zym"]),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: R.intl.format(R.t["ESmp2+"], {
                            onClaimInstructions: s,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(D, {
                className: k.DA,
                rewardCode: a,
                questContent: n,
                questId: t.id,
                sourceQuestContent: i,
                inputClassName: k.Uy,
            }),
        ],
    });
}

function q(e) {
    var t;
    let n,
        i,
        c,
        o,
        { initialQuest: m, onClose: x, transitionState: h, sourceQuestContent: p } = e,
        C = null != (t = (0, g.C5)(m.id)) ? t : m,
        y = b.uF.REWARD_MODAL,
        {
            rewardCode: _,
            isFetchingRewardCode: R,
            isClaimingReward: k,
        } = (0, s.cf)([j.A], () => ({
            rewardCode: j.A.getRewardCode(C.id),
            isFetchingRewardCode: j.A.isFetchingRewardCode(C.id),
            isClaimingReward: j.A.isClaimingReward(C.id),
        })),
        { hasError: D, setHasError: q } = (0, v.Ln)({
            isClaimingReward: k,
            isFetchingRewardCode: R,
            quest: C,
            questContent: y,
            rewardCode: _,
        });
    (n = (0, u.A)(() => {
        q(!0);
    })),
        (i = f.default.useIsCaptchaModalOpen()),
        (c = (0, d.A)(i)),
        (o = !!(!i && c)),
        a.useEffect(() => {
            o && n();
        }, [o, n]);
    let S = null == _ && (R || k),
        I = D && !k && !R;
    return (0, r.jsx)(N.A, {
        onClose: x,
        transitionState: h,
        quest: C,
        sourceQuestContent: p,
        location: E.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: S,
        rewardContentHasError: I,
        rewardContent: I
            ? null
            : (0, r.jsx)(w.A, {
                  rewardName: (0, O.mq)(C.config),
                  children: (0, r.jsx)(L, {
                      quest: C,
                      questContent: y,
                      rewardCode: _,
                      sourceQuestContent: p,
                      onClaimInstructions: () => {
                          (0, l.mMO)(
                              () =>
                                  Promise.resolve((e) =>
                                      (0, r.jsx)(A.R, {
                                          questOrQuests: C,
                                          questContent: y,
                                          sourceQuestContent: p,
                                          children: (t) => {
                                              var n, a;
                                              return (0, r.jsx)(
                                                  P,
                                                  ((n = (function (e) {
                                                      for (var t = 1; t < arguments.length; t++) {
                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                              r = Object.keys(n);
                                                          "function" == typeof Object.getOwnPropertySymbols &&
                                                              (r = r.concat(
                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                      return Object.getOwnPropertyDescriptor(n, e)
                                                                          .enumerable;
                                                                  }),
                                                              )),
                                                              r.forEach(function (t) {
                                                                  var r;
                                                                  (r = n[t]),
                                                                      t in e
                                                                          ? Object.defineProperty(e, t, {
                                                                                value: r,
                                                                                enumerable: !0,
                                                                                configurable: !0,
                                                                                writable: !0,
                                                                            })
                                                                          : (e[t] = r);
                                                              });
                                                      }
                                                      return e;
                                                  })({}, e)),
                                                  (a = a =
                                                      {
                                                          impressionRef: t,
                                                          quest: C,
                                                          questContent: y,
                                                          sourceQuestContent: p,
                                                          rewardCode: _,
                                                      }),
                                                  Object.getOwnPropertyDescriptors
                                                      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                                      : (function (e, t) {
                                                            var n = Object.keys(e);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var r = Object.getOwnPropertySymbols(e);
                                                                n.push.apply(n, r);
                                                            }
                                                            return n;
                                                        })(Object(a)).forEach(function (e) {
                                                            Object.defineProperty(
                                                                n,
                                                                e,
                                                                Object.getOwnPropertyDescriptor(a, e),
                                                            );
                                                        }),
                                                  n),
                                              );
                                          },
                                      }),
                                  ),
                              {
                                  stackingBehavior: "replace",
                              },
                          );
                      },
                  }),
              }),
    });
}
