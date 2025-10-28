n.d(t, { Z: () => g }), n(388685), n(457542);
var a = n(951288),
    r = n(647438),
    l = n(442837),
    i = n(704215),
    o = n(907862),
    s = n(535139),
    c = n(243778),
    d = n(931847),
    u = n(50130),
    m = n(687158),
    p = n(892001),
    h = n(314897),
    x = n(921944),
    f = n(228168),
    b = n(388032);
function g(e) {
    var t;
    let { targetElementRef: n, onClose: g } = e,
        [v, j] = r.useState(!1),
        _ = (0, l.e7)([h.default], () => h.default.getId()),
        { config: y, application: C } = (0, u.G)(),
        { fetched: S, hasAlreadyLinked: E, canStartAuthorization: O, startAuthorization: T } = (0, s.F)(C),
        N = (0, m.ZP)(_),
        P =
            null == N || null == (t = N.widgets)
                ? void 0
                : t.some((e) => e instanceof d.q && e.applicationId === (null == C ? void 0 : C.id));
    return null != y && null != y.edit_profile_upsell_image && null != C && S
        ? (0, a.jsx)(c.ZP, {
              contentTypes: E
                  ? P
                      ? []
                      : [i.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED]
                  : O
                    ? [i.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_UNLINKED]
                    : [],
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: r } = e;
                  if (null == t) return null;
                  let l = t === i.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED;
                  return (0, a.jsx)(o.J2, {
                      targetElementRef: n,
                      position: "right",
                      gradientColor: "blue",
                      graphic: {
                          type: "image",
                          src: y.edit_profile_upsell_image,
                      },
                      title: b.intl.format(b.t.TXDztH, { applicationName: C.name }),
                      body: l ? b.intl.string(b.t["63Kso0"]) : b.intl.string(b.t.HwXoeC),
                      actions: [
                          l
                              ? {
                                    text: b.intl.string(b.t.VSLDly),
                                    onClick: () => {
                                        j(!0),
                                            (0, p.openUserProfileModal)({
                                                userId: _,
                                                section: f.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    r(x.L.TAKE_ACTION), g();
                                                })
                                                .finally(() => j(!1));
                                    },
                                    loading: v,
                                }
                              : {
                                    text: b.intl.string(b.t["DSJi3+"]),
                                    onClick: () => {
                                        T(),
                                            j(!0),
                                            (0, p.openUserProfileModal)({
                                                userId: _,
                                                section: f.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    r(x.L.TAKE_ACTION), g();
                                                })
                                                .finally(() => j(!1));
                                    },
                                    loading: v,
                                },
                      ],
                  });
              },
          })
        : null;
}
