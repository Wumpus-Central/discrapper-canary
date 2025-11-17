n.d(t, { Z: () => y }), n(388685), n(457542);
var a = n(54381),
    l = n(473749),
    r = n(296009),
    i = n(442837),
    s = n(704215),
    o = n(907862),
    c = n(535139),
    d = n(243778),
    u = n(785717),
    m = n(931847),
    p = n(86419),
    h = n(50130),
    x = n(687158),
    g = n(892001),
    f = n(872269),
    b = n(314897),
    v = n(921944),
    j = n(228168),
    _ = n(388032);
function y(e) {
    var t;
    let { targetElementRef: n, onClose: y } = e,
        [C, S] = l.useState(!1),
        { trackUserProfileEditAction: E } = (0, u.KZ)(),
        O = (0, i.e7)([b.default], () => b.default.getId()),
        { config: T, application: N } = (0, h.G)(),
        { fetched: P, hasAlreadyLinked: w, canStartAuthorization: I, startAuthorization: k } = (0, c.F)(N),
        R = (0, x.ZP)(O),
        A =
            null == R || null == (t = R.widgets)
                ? void 0
                : t.some((e) => e instanceof m.q && e.applicationId === (null == N ? void 0 : N.id));
    return null != T && null != T.edit_profile_upsell_image && null != N && P
        ? (0, a.jsx)(d.ZP, {
              bypassAutoDismiss: !0,
              contentTypes: w
                  ? A
                      ? []
                      : [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED]
                  : I
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
                          src: T.edit_profile_upsell_image,
                      },
                      title: _.intl.format(_.t.TXDztH, { applicationName: N.name }),
                      body: i ? _.intl.string(_.t["63Kso0"]) : _.intl.string(_.t.HwXoeC),
                      onRequestClose: () => {
                          l(v.L.USER_DISMISS);
                      },
                      actions: [
                          i
                              ? {
                                    text: _.intl.string(_.t.VSLDly),
                                    onClick: () => {
                                        S(!0),
                                            (0, g.openUserProfileModal)({
                                                userId: O,
                                                section: j.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    l(v.L.TAKE_ACTION),
                                                        y(),
                                                        (0, p.qH)(
                                                            r.l.APPLICATION,
                                                            new m.q({
                                                                applicationId: N.id,
                                                                type: r.l.APPLICATION,
                                                            }),
                                                        ),
                                                        E({
                                                            action: "WIDGET_ADDED",
                                                            widgetEdited: r.l.APPLICATION,
                                                        }),
                                                        (0, f.L$)(j.qb.WIDGET_ADDED);
                                                })
                                                .finally(() => S(!1));
                                    },
                                    loading: C,
                                }
                              : {
                                    text: _.intl.string(_.t["DSJi3+"]),
                                    onClick: () => {
                                        k(),
                                            S(!0),
                                            (0, g.openUserProfileModal)({
                                                userId: O,
                                                section: j.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    l(v.L.TAKE_ACTION), y();
                                                })
                                                .finally(() => S(!1));
                                    },
                                    loading: C,
                                },
                      ],
                  });
              },
          })
        : null;
}
