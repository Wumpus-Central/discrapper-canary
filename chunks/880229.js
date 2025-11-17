n.d(t, {
    ImportBenefitsFromRoleModal: () => A,
    ImportBenefitsFromSubscriptionListingModal: () => D,
}),
    n(388685),
    n(953529),
    n(361932),
    n(187205);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(793030),
    s = n(442837),
    c = n(902704),
    d = n(477690),
    m = n(481060),
    h = n(596454),
    u = n(211266),
    x = n(471445),
    f = n(313201),
    g = n(339085),
    j = n(518738),
    p = n(48950),
    _ = n(131704),
    v = n(345162),
    b = n(324067),
    C = n(485386),
    w = n(430824),
    I = n(259580),
    N = n(624138),
    k = n(817460),
    y = n(166803),
    S = n(629262),
    T = n(686807),
    Z = n(981631),
    B = n(388032),
    M = n(161270);
let z = (0, f.hQ)(),
    E = (0, f.hQ)(),
    O = (0, N.Mg)(d.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function P(e) {
    var t;
    let { emojiId: n, emojiName: r, className: l } = e,
        o = (0, s.e7)([g.ZP], () => (null != n ? g.ZP.getCustomEmojiById(n) : void 0));
    return (0, i.jsx)(h.Z, {
        emojiId: n,
        emojiName: r,
        animated: null != (t = null == o ? void 0 : o.animated) && t,
        className: l,
    });
}
function R(e) {
    let { icon: t, children: n, checked: r, disabled: l = !1, onChange: a } = e,
        s = r || l;
    return (0, i.jsxs)("label", {
        className: o()(M.row, {
            [M.checked]: s,
            [M.disabled]: l,
        }),
        children: [
            (0, i.jsx)("div", {
                className: M.rowIconWrapper,
                children: t,
            }),
            (0, i.jsx)("div", {
                className: M.rowText,
                children: n,
            }),
            (0, i.jsxs)("div", {
                className: M.rowCheckbox,
                children: [
                    (0, i.jsx)(m.tEY, {
                        children: (0, i.jsx)("input", {
                            type: "checkbox",
                            checked: s,
                            disabled: l,
                            className: M.checkboxInput,
                            onChange: function (e) {
                                a(e.target.checked);
                            },
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: M.checkboxDisplay,
                        children: (0, i.jsx)(m.dz2, {
                            size: "md",
                            color: "currentColor",
                            className: M.checkboxIcon,
                            "aria-hidden": !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function L(e) {
    let { title: t, selectAllText: n, benefits: r, dupeBenefits: l, selectedBenefits: o, onToggleBenefit: a } = e,
        s = r.every((e) => o.has(e));
    return r.length > 0
        ? (0, i.jsxs)("div", {
              className: M.section,
              children: [
                  (0, i.jsx)(m.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: t,
                  }),
                  r.length - l.size > 1 &&
                      (0, i.jsx)("div", {
                          className: M.list,
                          children: (0, i.jsx)(R, {
                              icon: (0, i.jsx)(m.avL, {
                                  size: "md",
                                  color: "currentColor",
                                  className: M.rowIcon,
                              }),
                              checked: s,
                              onChange: function (e) {
                                  for (let t of r) l.has(t) || a(t, e);
                              },
                              children: (0, i.jsx)(m.Text, {
                                  color: "header-primary",
                                  variant: "text-md/normal",
                                  children: n,
                              }),
                          }),
                      }),
                  (0, i.jsx)("div", {
                      className: M.list,
                      children: r.map((e) =>
                          (0, i.jsxs)(
                              R,
                              {
                                  icon: (0, i.jsx)(P, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: M.rowIcon,
                                  }),
                                  checked: o.has(e),
                                  disabled: l.has(e),
                                  onChange: (t) => a(e, t),
                                  children: [
                                      (0, i.jsx)(m.Text, {
                                          color: "header-primary",
                                          variant: "text-md/semibold",
                                          children: (0, T.Z)(e),
                                      }),
                                      (0, i.jsx)(m.Text, {
                                          color: "interactive-normal",
                                          variant: "text-sm/normal",
                                          children: e.description,
                                      }),
                                  ],
                              },
                              (0, k.ab)(e),
                          ),
                      ),
                  }),
              ],
          })
        : null;
}
function D(e) {
    let {
            transitionState: t,
            fromSubscriptionListing: n,
            existingChannelBenefits: l,
            existingIntangibleBenefits: o,
            onSubmit: s,
            onClose: d,
        } = e,
        h = n.role_benefits.benefits,
        [u, x] = r.useState(() => new Set(h)),
        f = r.useMemo(() => h.filter(k.rC), [h]),
        g = (0, S.Z)(f),
        j = r.useMemo(() => h.filter(k.lL), [h]),
        p = r.useMemo(() => new Set(g.filter((e) => l.some((t) => t.ref_id === e.ref_id))), [g, l]),
        _ = r.useMemo(() => new Set(j.filter((e) => o.some((t) => (0, c.Z)(e, t)))), [o, j]);
    function v(e, t) {
        x((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    function b(e) {
        e.preventDefault();
        let t = h.filter((e) => u.has(e));
        s(
            t.filter(k.rC).filter((e) => !p.has(e)),
            t.filter(k.lL).filter((e) => !_.has(e)),
        ),
            d();
    }
    return (0, i.jsx)("form", {
        onSubmit: b,
        children: (0, i.jsxs)(a.Modal, {
            transitionState: t,
            onClose: d,
            title: B.intl.format(B.t["7zpiYL"], { tierName: n.name }).toString(),
            actions: [
                {
                    variant: "secondary",
                    text: B.intl.string(B.t["ETE/oC"]),
                    onClick: d,
                },
                {
                    variant: "primary",
                    text: B.intl.string(B.t["27a21y"]),
                    disabled: 0 === u.size,
                    onClick: b,
                },
            ],
            children: [
                0 === g.length &&
                    0 === j.length &&
                    (0, i.jsx)(m.Text, {
                        variant: "text-md/normal",
                        children: B.intl.string(B.t["I+16xv"]),
                    }),
                (0, i.jsx)(L, {
                    title: B.intl.string(B.t.S2kKzP),
                    selectAllText: B.intl.string(B.t["5Q/fLO"]),
                    benefits: g,
                    dupeBenefits: p,
                    selectedBenefits: u,
                    onToggleBenefit: v,
                }),
                (0, i.jsx)(L, {
                    title: B.intl.string(B.t.RdwKw7),
                    selectAllText: B.intl.string(B.t.aJPLVE),
                    benefits: j,
                    dupeBenefits: _,
                    selectedBenefits: u,
                    onToggleBenefit: v,
                }),
            ],
        }),
    });
}
function H(e) {
    var t;
    let { guildId: n, role: r, channelCount: l, onSelect: o } = e,
        a = (0, j.p9)({
            guildId: n,
            roleId: r.id,
            size: O,
        });
    return (0, i.jsxs)(m.P3F, {
        className: M.roleRow,
        onClick: o,
        children: [
            (0, i.jsx)("div", {
                className: M.rowIconWrapper,
                children:
                    null != a
                        ? (0, i.jsx)(
                              p.Z,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({}, a),
                          )
                        : (0, i.jsx)(m.lZ8, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: null != (t = r.colorString) ? t : Z.Pbq,
                              className: M.roleRowIconDefault,
                          }),
            }),
            (0, i.jsxs)("div", {
                className: M.rowText,
                children: [
                    (0, i.jsx)(m.Text, {
                        color: "header-primary",
                        variant: "text-md/normal",
                        className: M.__invalid_benefitTitle,
                        children: r.name,
                    }),
                    (0, i.jsx)(m.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: B.intl.format(B.t["2KzH89"], { num: l }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: M.rowCheckbox,
                children: (0, i.jsx)(I.Z, { direction: I.Z.Directions.RIGHT }),
            }),
        ],
    });
}
function F(e) {
    let { guild: t, onSelect: n } = e,
        l = (0, s.e7)([C.Z], () => C.Z.getSortedRoles(t.id)),
        o = (0, s.e7)([b.Z], () => b.Z.getCategories(t.id)),
        a = r.useMemo(
            () =>
                o._categories.flatMap((e) =>
                    o[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return _.zS.has(t.type);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t;
                        }),
                ),
            [o],
        ),
        c = r.useMemo(
            () =>
                l.flatMap((e) => {
                    var t;
                    if (
                        (0, v.fI)(e) ||
                        (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null ||
                        (0, v._N)(e, Z.TC2)
                    )
                        return [];
                    let n = (0, y.Z)(a, e).length;
                    return n > 0
                        ? {
                              role: e,
                              channelCount: n,
                          }
                        : [];
                }),
            [l, a],
        );
    return c.length > 0
        ? (0, i.jsx)("div", {
              className: M.list,
              children: c.map((e) =>
                  (0, i.jsx)(
                      H,
                      {
                          guildId: t.id,
                          role: e.role,
                          channelCount: e.channelCount,
                          onSelect: () => n(e.role),
                      },
                      e.role.id,
                  ),
              ),
          })
        : (0, i.jsx)(m.Text, {
              variant: "text-md/normal",
              children: B.intl.string(B.t.u09gKk),
          });
}
function G(e) {
    let { onClose: t, guildId: n, onSelect: r } = e,
        l = (0, s.e7)([w.Z], () => w.Z.getGuild(n));
    return null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)(m.xBx, {
                      "data-migration-pending": !0,
                      children: [
                          (0, i.jsx)(m.Heading, {
                              id: z,
                              variant: "heading-md/semibold",
                              children: B.intl.string(B.t["3JrZ/P"]),
                          }),
                          (0, i.jsx)(m.olH, {
                              "data-migration-pending": !0,
                              className: M.modalCloseButton,
                              onClick: t,
                          }),
                      ],
                  }),
                  (0, i.jsx)(m.hzk, {
                      "data-migration-pending": !0,
                      className: M.modalContent,
                      children: (0, i.jsx)(F, {
                          guild: l,
                          onSelect: r,
                      }),
                  }),
              ],
          });
}
function W(e) {
    let { onClose: t, guildId: n, role: l, onCancel: o, onImport: a } = e,
        s = r.useRef(l);
    null != l && (s.current = l);
    let c = null != l ? l : s.current,
        d = (0, u.Z)(() => {
            let e = b.Z.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return _.zS.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    }),
            );
        }),
        h = r.useMemo(() => (0, y.Z)(d, c), [d, c]),
        [f, g] = r.useState(() => new Set(h.map((e) => e.id)));
    function j(e, t) {
        g((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, i.jsxs)("form", {
        onSubmit: function (e) {
            e.preventDefault(), a(h.map((e) => e.id).filter((e) => f.has(e))), t();
        },
        className: M.slideForm,
        children: [
            (0, i.jsxs)(m.xBx, {
                "data-migration-pending": !0,
                children: [
                    (0, i.jsx)(m.Heading, {
                        id: E,
                        variant: "heading-md/semibold",
                        children: B.intl.format(B.t.iuPodG, { roleName: c.name }),
                    }),
                    (0, i.jsx)(m.olH, {
                        "data-migration-pending": !0,
                        className: M.modalCloseButton,
                        onClick: t,
                    }),
                ],
            }),
            (0, i.jsxs)(m.hzk, {
                "data-migration-pending": !0,
                className: M.modalContent,
                children: [
                    h.length > 1 &&
                        (0, i.jsx)("div", {
                            className: M.list,
                            children: (0, i.jsx)(R, {
                                icon: (0, i.jsx)(m.avL, {
                                    size: "md",
                                    color: "currentColor",
                                }),
                                checked: f.size === h.length,
                                onChange: function (e) {
                                    for (let t of h) j(t.id, e);
                                },
                                children: (0, i.jsx)(m.Text, {
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: B.intl.string(B.t["5Q/fLO"]),
                                }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: M.list,
                        children: h.map((e) => {
                            var t;
                            let n = null != (t = (0, x.Th)(e.type)) ? t : m.VL1;
                            return (0, i.jsx)(
                                R,
                                {
                                    icon: (0, i.jsx)("div", {
                                        className: M.rowIcon,
                                        children: (0, i.jsx)(n, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: "100%",
                                            height: "100%",
                                        }),
                                    }),
                                    checked: f.has(e.id),
                                    onChange: (t) => j(e.id, t),
                                    children: (0, i.jsx)(m.Text, {
                                        color: "header-primary",
                                        variant: "text-md/normal",
                                        className: M.__invalid_benefitTitle,
                                        children: e.name,
                                    }),
                                },
                                e.id,
                            );
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(m.mzw, {
                "data-migration-pending": !0,
                children: (0, i.jsxs)(m.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, i.jsx)(m.Button, {
                            variant: "primary",
                            text: B.intl.string(B.t["1j8Sow"]),
                            type: "submit",
                        }),
                        (0, i.jsx)(m.Button, {
                            variant: "secondary",
                            text: B.intl.string(B.t["ETE/oC"]),
                            onClick: o,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function A(e) {
    let { transitionState: t, guildId: n, onClose: l, onImport: o } = e,
        [a, s] = r.useState();
    return (0, i.jsx)(m.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        "aria-labelledby": null == a ? z : E,
        parentComponent: "ImportBenefitsModal",
        children: (0, i.jsxs)(m.MyZ, {
            contentDisplay: "flex",
            activeSlide: +(null != a),
            width: 440,
            children: [
                (0, i.jsx)(m.Mi4, {
                    id: 0,
                    children: (0, i.jsx)(G, {
                        onClose: l,
                        guildId: n,
                        onSelect: s,
                    }),
                }),
                (0, i.jsx)(m.Mi4, {
                    id: 1,
                    children: (0, i.jsx)(W, {
                        onClose: l,
                        guildId: n,
                        role: a,
                        onCancel: () => s(void 0),
                        onImport: o,
                    }),
                }),
            ],
        }),
    });
}
