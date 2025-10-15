n.d(t, { Z: () => b }), n(388685), n(457542);
var a = n(951288),
    r = n(647438),
    i = n(442837),
    l = n(704215),
    o = n(907862),
    s = n(20471),
    c = n(243778),
    d = n(931847),
    u = n(50130),
    m = n(687158),
    p = n(892001),
    h = n(314897),
    x = n(921944),
    f = n(228168),
    g = n(388032);
function b(e) {
    var t;
    let { targetElementRef: n, onClose: b } = e,
        [v, j] = r.useState(!1),
        _ = (0, i.e7)([h.default], () => h.default.getId()),
        { config: y, application: C } = (0, u.G)(),
        { fetched: S, hasAlreadyLinked: E, canStartAuthorization: T, startAuthorization: O } = (0, s.FG)(C),
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
                      : [l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED]
                  : T
                    ? [l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_UNLINKED]
                    : [],
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: r } = e;
                  if (null == t) return null;
                  let i = t === l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED;
                  return (0, a.jsx)(o.J2, {
                      targetElementRef: n,
                      position: "right",
                      gradientColor: "blue",
                      graphic: {
                          type: "image",
                          src: y.edit_profile_upsell_image,
                      },
                      title: g.intl.format(g.t.TXDztL, { applicationName: C.name }),
                      body: i ? g.intl.string(g.t["63Kso6"]) : g.intl.string(g.t.HwXoeH),
                      actions: [
                          i
                              ? {
                                    text: g.intl.string(g.t.VSLDl5),
                                    onClick: () => {
                                        j(!0),
                                            (0, p.openUserProfileModal)({
                                                userId: _,
                                                section: f.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    r(x.L.TAKE_ACTION), b();
                                                })
                                                .finally(() => j(!1));
                                    },
                                    loading: v,
                                }
                              : {
                                    text: g.intl.string(g.t.DSJi39),
                                    onClick: () => {
                                        O(),
                                            j(!0),
                                            (0, p.openUserProfileModal)({
                                                userId: _,
                                                section: f.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    r(x.L.TAKE_ACTION), b();
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
