n.d(t, { Z: () => C }), n(388685), n(457542);
var a = n(54381),
    l = n(473749),
    r = n(296009),
    i = n(442837),
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
        [S, E] = l.useState(!1),
        { trackUserProfileEditAction: N } = (0, m.KZ)(),
        T = (0, i.e7)([v.default], () => v.default.getId()),
        { config: O, application: P } = (0, x.G)(),
        { fetched: I, hasAlreadyLinked: w, canStartAuthorization: k, startAuthorization: R } = (0, d.F)(P),
        A = (0, f.ZP)(T),
        { analyticsLocations: Z } = (0, c.ZP)(),
        D =
            null == A || null == (t = A.widgets)
                ? void 0
                : t.some((e) => e instanceof p.q && e.applicationId === (null == P ? void 0 : P.id));
    return null != O && null != O.edit_profile_upsell_image && null != P && I
        ? (0, a.jsx)(u.ZP, {
              contentTypes: w
                  ? D
                      ? []
                      : [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED]
                  : k
                    ? [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_UNLINKED]
                    : [],
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: l } = e;
                  if (null == t) return null;
                  let i = t === s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED;
                  return (0, a.jsx)(o.J2, {
                      targetElementRef: n,
                      position: "right",
                      gradientColor: "blue",
                      graphic: {
                          type: "image",
                          src: O.edit_profile_upsell_image,
                      },
                      title: y.intl.format(y.t.TXDztH, { applicationName: P.name }),
                      body: i ? y.intl.string(y.t["63Kso0"]) : y.intl.string(y.t.HwXoeC),
                      onRequestClose: () => {
                          l(j.L.USER_DISMISS);
                      },
                      actions: [
                          i
                              ? {
                                    text: y.intl.string(y.t.VSLDly),
                                    onClick: () => {
                                        E(!0),
                                            (0, g.openUserProfileModal)({
                                                userId: T,
                                                section: _.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    l(j.L.TAKE_ACTION), C();
                                                    let e = new p.q({
                                                        applicationId: P.id,
                                                        type: r.l.APPLICATION,
                                                    });
                                                    (0, h.qH)(e.type, e),
                                                        N(
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
                                                            l(j.L.TAKE_ACTION), C();
                                                        })
                                                        .finally(() => E(!1));
                                            },
                                            analyticsLocations: Z,
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
