n.d(t, { Z: () => y }), n(388685), n(457542);
var a = n(951288),
    r = n(647438),
    i = n(296009),
    l = n(442837),
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
        [C, S] = r.useState(!1),
        { trackUserProfileEditAction: E } = (0, u.KZ)(),
        T = (0, l.e7)([b.default], () => b.default.getId()),
        { config: O, application: N } = (0, h.G)(),
        { fetched: P, hasAlreadyLinked: I, canStartAuthorization: w, startAuthorization: k } = (0, c.F)(N),
        R = (0, x.ZP)(T),
        A =
            null == R || null == (t = R.widgets)
                ? void 0
                : t.some((e) => e instanceof m.q && e.applicationId === (null == N ? void 0 : N.id));
    return null != O && null != O.edit_profile_upsell_image && null != N && P
        ? (0, a.jsx)(d.ZP, {
              bypassAutoDismiss: !0,
              contentTypes: I
                  ? A
                      ? []
                      : [s.z.APPLICATION_WIDGET_EDIT_PROFILE_POPOVER_LINKED]
                  : w
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
                          src: O.edit_profile_upsell_image,
                      },
                      title: _.intl.format(_.t.TXDztH, { applicationName: N.name }),
                      body: l ? _.intl.string(_.t["63Kso0"]) : _.intl.string(_.t.HwXoeC),
                      onRequestClose: () => {
                          r(v.L.USER_DISMISS);
                      },
                      actions: [
                          l
                              ? {
                                    text: _.intl.string(_.t.VSLDly),
                                    onClick: () => {
                                        S(!0),
                                            (0, g.openUserProfileModal)({
                                                userId: T,
                                                section: j.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    r(v.L.TAKE_ACTION),
                                                        y(),
                                                        (0, p.qH)(
                                                            i.l.APPLICATION,
                                                            new m.q({
                                                                applicationId: N.id,
                                                                type: i.l.APPLICATION,
                                                            }),
                                                        ),
                                                        E({
                                                            action: "WIDGET_ADDED",
                                                            widgetEdited: i.l.APPLICATION,
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
                                                userId: T,
                                                section: j.oh.WIDGETS,
                                            })
                                                .then(() => {
                                                    r(v.L.TAKE_ACTION), y();
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
