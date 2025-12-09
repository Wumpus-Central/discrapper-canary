n.d(t, { Z: () => C }), n(388685), n(457542);
var a = n(54381),
    r = n(473749),
    i = n(296009),
    l = n(442837),
    s = n(704215),
    o = n(907862),
    c = n(906732),
    d = n(524995),
    u = n(243778),
    m = n(785717),
    p = n(931847),
    h = n(86419),
    x = n(50130),
    f = n(687158),
    g = n(892001),
    b = n(872269),
    v = n(314897),
    j = n(921944),
    _ = n(228168),
    y = n(388032);
function C(e) {
    var t;
    let { targetElementRef: n, onClose: C } = e,
        [S, E] = r.useState(!1),
        { trackUserProfileEditAction: O } = (0, m.KZ)(),
        T = (0, l.e7)([v.default], () => v.default.getId()),
        { config: N, application: P } = (0, x.G)(),
        { fetched: w, hasAlreadyLinked: I, canStartAuthorization: k, startAuthorization: R } = (0, d.F)(P),
        A = (0, f.ZP)(T),
        { analyticsLocations: D } = (0, c.ZP)(),
        Z =
            null == A || null == (t = A.widgets)
                ? void 0
                : t.some((e) => e instanceof p.q && e.applicationId === (null == P ? void 0 : P.id));
    return null != N && null != N.edit_profile_upsell_image && null != P && w
        ? (0, a.jsx)(u.ZP, {
              contentTypes: I
                  ? Z
                      ? []
                      : [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED]
                  : k
                    ? [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_UNLINKED]
                    : [],
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: r } = e;
                  if (null == t) return null;
                  let l = t === s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED;
                  return (0, a.jsx)(o.J2, {
                      targetElementRef: n,
                      position: "right",
                      gradientColor: "blue",
                      graphic: {
                          type: "image",
                          src: N.edit_profile_upsell_image,
                      },
                      title: y.intl.format(y.t.TXDztH, { applicationName: P.name }),
                      body: l ? y.intl.string(y.t["63Kso0"]) : y.intl.string(y.t.HwXoeC),
                      onRequestClose: () => {
                          r(j.L.USER_DISMISS);
                      },
                      actions: [
                          l
                              ? {
                                    text: y.intl.string(y.t.VSLDly),
                                    onClick: () => {
                                        E(!0),
                                            (0, g.openUserProfileModal)({
                                                userId: T,
                                                section: _.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    r(j.L.TAKE_ACTION), C();
                                                    let e = new p.q({
                                                        applicationId: P.id,
                                                        type: i.l.APPLICATION,
                                                    });
                                                    (0, h.qH)(e.type, e),
                                                        O(
                                                            (function (e) {
                                                                for (var t = 1; t < arguments.length; t++) {
                                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                                        a = Object.keys(n);
                                                                    "function" == typeof Object.getOwnPropertySymbols &&
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
                                                        (0, b.L$)(_.qb.WIDGET_ADDED);
                                                })
                                                .finally(() => E(!1));
                                    },
                                    loading: S,
                                }
                              : {
                                    text: y.intl.string(y.t["DSJi3+"]),
                                    onClick: () => {
                                        R({
                                            onConfirm: () => {
                                                E(!0),
                                                    (0, g.openUserProfileModal)({
                                                        userId: T,
                                                        section: _.oh.WIDGETS,
                                                    })
                                                        .then(() => {
                                                            r(j.L.TAKE_ACTION), C();
                                                        })
                                                        .finally(() => E(!1));
                                            },
                                            analyticsLocations: D,
                                        });
                                    },
                                    loading: S,
                                },
                      ],
                  });
              },
          })
        : null;
}
