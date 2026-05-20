i.d(t, { A: () => S });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    d = i(922016),
    u = i(939249),
    c = i(97808),
    o = i(778712),
    m = i(652215),
    h = i(406810),
    A = i(834730),
    g = i(442433),
    p = i(609425),
    I = i(252545),
    x = i(769022),
    v = i(287809),
    f = i(562153),
    E = i(850457);
i(281405);
var _ = i(375708),
    N = i(601884);
function S(e) {
    let { channel: t } = e,
        [s, S] = l.useState(!1),
        C = l.useRef(null),
        y = l.useRef(null);
    l.useEffect(
        () => () => {
            clearTimeout(y.current);
        },
        [],
    );
    let j = (0, r.bG)([x.A, v.default], () => {
            let e = x.A.getLastLeftUserId(t.id);
            return null != e ? v.default.getUser(e) : null;
        }, [t.id]),
        T = f.Ay.useName(t.guild_id, t.id, j),
        b = (0, p.A)({ userId: j?.id, guildId: t.guild_id }),
        O = (0, I.a)({ displayNameStyles: b }),
        G = (e) => {
            e.preventDefault(),
                null != j &&
                    (0, g.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            i.e("8516"),
                            i.e("23531"),
                            i.e("94881"),
                            i.e("26132"),
                            i.e("46652"),
                            i.e("93190"),
                            i.e("34552"),
                            i.e("93103"),
                            i.e("8757"),
                            i.e("89673"),
                            i.e("85968"),
                            i.e("60195"),
                            i.e("21921"),
                            i.e("68403"),
                            i.e("76418"),
                            i.e("29787"),
                            i.e("71210"),
                            i.e("97558"),
                            i.e("94000"),
                            i.e("66495"),
                            i.e("88342"),
                            i.e("91994"),
                            i.e("42451"),
                            i.e("76665"),
                            i.e("98965"),
                            i.e("35313"),
                            i.e("24198"),
                            i.e("39171"),
                            i.e("36564"),
                            i.e("45996"),
                            i.e("52229"),
                            i.e("792"),
                            i.e("92822"),
                            i.e("23427"),
                            i.e("49145"),
                            i.e("29422"),
                            i.e("9291"),
                            i.e("7059"),
                            i.e("43116"),
                            i.e("70314"),
                            i.e("70515"),
                            i.e("27435"),
                            i.e("66939"),
                            i.e("17334"),
                            i.e("84841"),
                        ]).then(i.bind(i, 107632));
                        return (i) => (0, n.jsx)(e, { ...i, user: j, guildId: t.guild_id, channel: t });
                    });
        },
        V = () => {
            clearTimeout(y.current), (y.current = setTimeout(() => S(!0), 100));
        },
        R = () => {
            clearTimeout(y.current), (y.current = setTimeout(() => S(!1), 100));
        };
    return null == j
        ? null
        : (0, n.jsx)(d.Y, {
              targetElementRef: C,
              position: "right",
              shouldShow: s,
              onRequestOpen: V,
              onRequestClose: R,
              useMouseEnter: !0,
              spacing: 17,
              renderPopout: () =>
                  (0, n.jsx)(E.A, { channel: t, source: "ghost_user", onMouseEnter: V, onMouseLeave: R }),
              children: (e) => {
                  let { onClick: i, ...l } = e;
                  return (0, n.jsxs)(u.D, {
                      innerRef: C,
                      className: N.nM,
                      "aria-haspopup": "dialog",
                      onClick: V,
                      onContextMenu: G,
                      ...l,
                      onMouseLeave: R,
                      children: [
                          (0, n.jsxs)("div", {
                              className: N.R3,
                              children: [
                                  (0, n.jsx)(c.eu, {
                                      src: j.getAvatarURL(t.guild_id, 24),
                                      size: o._3.SIZE_24,
                                      "aria-hidden": !0,
                                      status: m.clD.INVISIBLE,
                                      statusColor: "currentColor",
                                  }),
                                  (0, n.jsx)(h.O, { className: N.SM }),
                              ],
                          }),
                          (0, n.jsx)(A.E, {
                              variant: "text-sm/normal",
                              className: N.Pf,
                              children: _.intl.format(_.t.TlVwqn, {
                                  user: T,
                                  userHook: (e, t) =>
                                      (0, n.jsx)(
                                          A.E,
                                          {
                                              variant: "text-sm/semibold",
                                              className: a()(N.Xh, O),
                                              color: "text-muted",
                                              children: e,
                                          },
                                          t,
                                      ),
                              }),
                          }),
                      ],
                  });
              },
          });
}
