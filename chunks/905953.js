n.d(t, { Z: () => b }), n(388685), n(457542);
var a = n(951288),
    i = n(647438),
    r = n(442837),
    l = n(704215),
    s = n(907862),
    o = n(535139),
    c = n(243778),
    d = n(931847),
    u = n(50130),
    m = n(687158),
    p = n(892001),
    h = n(314897),
    x = n(921944),
    g = n(228168),
    f = n(388032);
function b(e) {
    var t;
    let { targetElementRef: n, onClose: b } = e,
        [v, j] = i.useState(!1),
        _ = (0, r.e7)([h.default], () => h.default.getId()),
        { config: y, application: C } = (0, u.G)(),
        { fetched: S, hasAlreadyLinked: E, canStartAuthorization: T, startAuthorization: O } = (0, o.F)(C),
        N = (0, m.ZP)(_),
        P =
            null == N || null == (t = N.widgets)
                ? void 0
                : t.some((e) => e instanceof d.q && e.applicationId === (null == C ? void 0 : C.id));
    return null != y && null != y.edit_profile_upsell_image && null != C && S
        ? (0, a.jsx)(c.ZP, {
              bypassAutoDismiss: !0,
              contentTypes: E
                  ? P
                      ? []
                      : [l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED]
                  : T
                    ? [l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_UNLINKED]
                    : [],
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: i } = e;
                  if (null == t) return null;
                  let r = t === l.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED;
                  return (0, a.jsx)(s.J2, {
                      targetElementRef: n,
                      position: "right",
                      gradientColor: "blue",
                      graphic: {
                          type: "image",
                          src: y.edit_profile_upsell_image,
                      },
                      title: f.intl.format(f.t.TXDztH, { applicationName: C.name }),
                      body: r ? f.intl.string(f.t["63Kso0"]) : f.intl.string(f.t.HwXoeC),
                      onRequestClose: () => {
                          i(x.L.USER_DISMISS);
                      },
                      actions: [
                          r
                              ? {
                                    text: f.intl.string(f.t.VSLDly),
                                    onClick: () => {
                                        j(!0),
                                            (0, p.openUserProfileModal)({
                                                userId: _,
                                                section: g.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    i(x.L.TAKE_ACTION), b();
                                                })
                                                .finally(() => j(!1));
                                    },
                                    loading: v,
                                }
                              : {
                                    text: f.intl.string(f.t["DSJi3+"]),
                                    onClick: () => {
                                        O(),
                                            j(!0),
                                            (0, p.openUserProfileModal)({
                                                userId: _,
                                                section: g.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    i(x.L.TAKE_ACTION), b();
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
