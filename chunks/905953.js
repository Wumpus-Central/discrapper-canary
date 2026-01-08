n.d(t, { Z: () => S }), n(539854), n(388685), n(457542);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(907862),
    s = n(906732),
    o = n(491662),
    c = n(524995),
    d = n(251296),
    u = n(835473),
    m = n(243778),
    p = n(785717),
    h = n(931847),
    f = n(86419),
    x = n(517157),
    b = n(892001),
    g = n(872269),
    v = n(314897),
    j = n(823379),
    y = n(921944),
    C = n(228168),
    _ = n(388032);
function S(e) {
    let { targetElementRef: t, onClose: n } = e,
        [S, E] = r.useState(!1),
        { trackUserProfileEditAction: T } = (0, p.KZ)(),
        O = (0, i.e7)([v.default], () => v.default.getId()),
        N = (function () {
            let e = (0, i.e7)([v.default], () => v.default.getId()),
                t = (0, x.Z)(e),
                n = r.useMemo(() => t.filter((e) => e instanceof h.q), [t]),
                a = (function () {
                    let e = (0, d.no)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" });
                    return r.useMemo(
                        () => (null == e ? void 0 : e.filter((e) => e.isEligibleForEditProfileUpsell())),
                        [e],
                    );
                })(),
                l = r.useMemo(() => {
                    var e;
                    return null != (e = null == a ? void 0 : a.map((e) => e.applicationId)) ? e : [];
                }, [a]),
                s = (function (e) {
                    let t = (0, u.Z)(e);
                    return r.useMemo(() => t.filter(j.lm), [t]);
                })(l),
                { tokens: m, fetched: p } = (0, o.O)(l),
                f = (0, c.lI)(s);
            return r.useMemo(() => {
                if (null == a || null == m || !p) return null;
                let e = [],
                    t = [];
                for (let r of a) {
                    let a = m.find((e) => e.application.id === r.applicationId),
                        i = n.find((e) => e.applicationId === r.applicationId),
                        l = s.find((e) => e.id === r.applicationId),
                        o = f.find((e) => e.context.application.id === r.applicationId);
                    if (null == l) return null;
                    null != a && null == i
                        ? e.push({
                              type: "linked",
                              config: r,
                              application: l,
                              dismissibleContent: r.editProfileLinkedDc,
                          })
                        : null == a &&
                          (null == o ? void 0 : o.preferredFlow) != null &&
                          t.push({
                              type: "unlinked",
                              config: r,
                              application: l,
                              dismissibleContent: r.editProfileUnlinkedDc,
                              authFlow: o.preferredFlow,
                          });
                }
                return [...e, ...t];
            }, [a, m, p, n, s, f]);
        })(),
        { analyticsLocations: P } = (0, s.ZP)();
    return null == N || 0 === N.length
        ? null
        : (0, a.jsx)(m.ZP, {
              contentTypes: N.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: r, markAsDismissed: i } = e,
                      s = N.find((e) => e.dismissibleContent === r);
                  if (null == s) return null;
                  let o = "linked" === s.type,
                      c = () =>
                          (0, b.openUserProfileModal)({
                              userId: O,
                              tabSection: C.oh.WIDGETS,
                          }).then(() => {
                              i(y.L.TAKE_ACTION), n();
                          });
                  return (0, a.jsx)(l.J2, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != s.config.editProfileUpsellImage
                              ? {
                                    type: "image",
                                    src: s.config.editProfileUpsellImage,
                                }
                              : void 0,
                      title: _.intl.format(_.t.TXDztH, { applicationName: s.application.name }),
                      body: o ? _.intl.string(_.t["63Kso0"]) : _.intl.string(_.t.HwXoeC),
                      onRequestClose: () => i(y.L.USER_DISMISS),
                      actions: [
                          o
                              ? {
                                    text: _.intl.string(_.t.VSLDly),
                                    onClick: () => {
                                        E(!0),
                                            c()
                                                .then(() =>
                                                    (() => {
                                                        let e = new h.q({ applicationId: s.application.id });
                                                        (0, f.qH)(e),
                                                            T(
                                                                (function (e) {
                                                                    for (var t = 1; t < arguments.length; t++) {
                                                                        var n =
                                                                                null != arguments[t]
                                                                                    ? arguments[t]
                                                                                    : {},
                                                                            a = Object.keys(n);
                                                                        "function" ==
                                                                            typeof Object.getOwnPropertySymbols &&
                                                                            (a = a.concat(
                                                                                Object.getOwnPropertySymbols(n).filter(
                                                                                    function (e) {
                                                                                        return Object.getOwnPropertyDescriptor(
                                                                                            n,
                                                                                            e,
                                                                                        ).enumerable;
                                                                                    },
                                                                                ),
                                                                            )),
                                                                            a.forEach(function (t) {
                                                                                var a;
                                                                                (a = n[t]),
                                                                                    t in e
                                                                                        ? Object.defineProperty(e, t, {
                                                                                              value: a,
                                                                                              enumerable: !0,
                                                                                              configurable: !0,
                                                                                              writable: !0,
                                                                                          })
                                                                                        : (e[t] = a);
                                                                            });
                                                                    }
                                                                    return e;
                                                                })(
                                                                    { action: "WIDGET_ADDED" },
                                                                    e.getProfileEditAnalyticsOptions(),
                                                                ),
                                                            ),
                                                            (0, g.L$)(C.qb.WIDGET_ADDED);
                                                    })(),
                                                )
                                                .finally(() => E(!1));
                                    },
                                    loading: S,
                                }
                              : {
                                    text: _.intl.string(_.t["DSJi3+"]),
                                    onClick: () => {
                                        s.authFlow.initiate({
                                            onConfirm: () => {
                                                E(!0), c().finally(() => E(!1));
                                            },
                                            analyticsLocations: P,
                                        });
                                    },
                                    loading: S,
                                },
                      ],
                  });
              },
          });
}
