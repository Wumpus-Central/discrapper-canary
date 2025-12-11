n.d(t, {
    ImportBenefitsFromRoleModal: () => A,
    ImportBenefitsFromSubscriptionListingModal: () => D,
}),
    n(388685),
    n(953529),
    n(361932),
    n(187205);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    o = n.n(r),
    s = n(793030),
    c = n(442837),
    a = n(902704),
    d = n(477690),
    m = n(481060),
    u = n(596454),
    x = n(211266),
    h = n(471445),
    f = n(313201),
    g = n(339085),
    j = n(518738),
    b = n(48950),
    p = n(131704),
    v = n(345162),
    C = n(324067),
    w = n(485386),
    _ = n(430824),
    I = n(259580),
    N = n(624138),
    k = n(817460),
    S = n(166803),
    T = n(629262),
    y = n(686807),
    Z = n(981631),
    B = n(388032),
    M = n(903907);
let z = (0, f.hQ)(),
    E = (0, f.hQ)(),
    O = (0, N.Mg)(d.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);
function P(e) {
    var t;
    let { emojiId: n, emojiName: l, className: r } = e,
        o = (0, c.e7)([g.ZP], () => (null != n ? g.ZP.getCustomEmojiById(n) : void 0));
    return (0, i.jsx)(u.Z, {
        emojiId: n,
        emojiName: l,
        animated: null != (t = null == o ? void 0 : o.animated) && t,
        className: r,
    });
}
function R(e) {
    let { icon: t, children: n, checked: l, disabled: r = !1, onChange: s } = e,
        c = l || r;
    return (0, i.jsxs)("label", {
        className: o()(M.row, {
            [M.checked]: c,
            [M.disabled]: r,
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
                            checked: c,
                            disabled: r,
                            className: M.checkboxInput,
                            onChange: function (e) {
                                s(e.target.checked);
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
    let { title: t, selectAllText: n, benefits: l, dupeBenefits: r, selectedBenefits: o, onToggleBenefit: s } = e,
        c = l.every((e) => o.has(e));
    return l.length > 0
        ? (0, i.jsxs)("div", {
              className: M.section,
              children: [
                  (0, i.jsx)(m.Heading, {
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: t,
                  }),
                  l.length - r.size > 1 &&
                      (0, i.jsx)("div", {
                          className: M.list,
                          children: (0, i.jsx)(R, {
                              icon: (0, i.jsx)(m.avL, {
                                  size: "md",
                                  color: "currentColor",
                                  className: M.rowIcon,
                              }),
                              checked: c,
                              onChange: function (e) {
                                  for (let t of l) r.has(t) || s(t, e);
                              },
                              children: (0, i.jsx)(m.Text, {
                                  color: "text-strong",
                                  variant: "text-md/normal",
                                  children: n,
                              }),
                          }),
                      }),
                  (0, i.jsx)("div", {
                      className: M.list,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              R,
                              {
                                  icon: (0, i.jsx)(P, {
                                      emojiId: e.emoji_id,
                                      emojiName: e.emoji_name,
                                      className: M.rowIcon,
                                  }),
                                  checked: o.has(e),
                                  disabled: r.has(e),
                                  onChange: (t) => s(e, t),
                                  children: [
                                      (0, i.jsx)(m.Text, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          children: (0, y.Z)(e),
                                      }),
                                      (0, i.jsx)(m.Text, {
                                          color: "interactive-text-default",
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
            existingChannelBenefits: r,
            existingIntangibleBenefits: o,
            onSubmit: c,
            onClose: d,
        } = e,
        u = n.role_benefits.benefits,
        [x, h] = l.useState(() => new Set(u)),
        f = l.useMemo(() => u.filter(k.rC), [u]),
        g = (0, T.Z)(f),
        j = l.useMemo(() => u.filter(k.lL), [u]),
        b = l.useMemo(() => new Set(g.filter((e) => r.some((t) => t.ref_id === e.ref_id))), [g, r]),
        p = l.useMemo(() => new Set(j.filter((e) => o.some((t) => (0, a.Z)(e, t)))), [o, j]);
    function v(e, t) {
        h((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    function C(e) {
        e.preventDefault();
        let t = u.filter((e) => x.has(e));
        c(
            t.filter(k.rC).filter((e) => !b.has(e)),
            t.filter(k.lL).filter((e) => !p.has(e)),
        ),
            d();
    }
    return (0, i.jsx)("form", {
        onSubmit: C,
        children: (0, i.jsxs)(s.Modal, {
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
                    disabled: 0 === x.size,
                    onClick: C,
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
                    dupeBenefits: b,
                    selectedBenefits: x,
                    onToggleBenefit: v,
                }),
                (0, i.jsx)(L, {
                    title: B.intl.string(B.t.RdwKw7),
                    selectAllText: B.intl.string(B.t.aJPLVE),
                    benefits: j,
                    dupeBenefits: p,
                    selectedBenefits: x,
                    onToggleBenefit: v,
                }),
            ],
        }),
    });
}
function H(e) {
    var t;
    let { guildId: n, role: l, channelCount: r, onSelect: o } = e,
        s = (0, j.p9)({
            guildId: n,
            roleId: l.id,
            size: O,
        });
    return (0, i.jsxs)(m.P3F, {
        className: M.roleRow,
        onClick: o,
        children: [
            (0, i.jsx)("div", {
                className: M.rowIconWrapper,
                children:
                    null != s
                        ? (0, i.jsx)(
                              b.Z,
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
                              })({}, s),
                          )
                        : (0, i.jsx)(m.lZ8, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: null != (t = l.colorString) ? t : Z.Pbq,
                              className: M.roleRowIconDefault,
                          }),
            }),
            (0, i.jsxs)("div", {
                className: M.rowText,
                children: [
                    (0, i.jsx)(m.Text, {
                        color: "text-strong",
                        variant: "text-md/normal",
                        className: M.__invalid_benefitTitle,
                        children: l.name,
                    }),
                    (0, i.jsx)(m.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: B.intl.format(B.t["2KzH89"], { num: r }),
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
        r = (0, c.e7)([w.Z], () => w.Z.getSortedRoles(t.id)),
        o = (0, c.e7)([C.Z], () => C.Z.getCategories(t.id)),
        s = l.useMemo(
            () =>
                o._categories.flatMap((e) =>
                    o[e.channel.id]
                        .filter((e) => {
                            let { channel: t } = e;
                            return p.zS.has(t.type);
                        })
                        .map((e) => {
                            let { channel: t } = e;
                            return t;
                        }),
                ),
            [o],
        ),
        a = l.useMemo(
            () =>
                r.flatMap((e) => {
                    var t;
                    if (
                        (0, v.fI)(e) ||
                        (null == (t = e.tags) ? void 0 : t.subscription_listing_id) != null ||
                        (0, v._N)(e, Z.TC2)
                    )
                        return [];
                    let n = (0, S.Z)(s, e).length;
                    return n > 0
                        ? {
                              role: e,
                              channelCount: n,
                          }
                        : [];
                }),
            [r, s],
        );
    return a.length > 0
        ? (0, i.jsx)("div", {
              className: M.list,
              children: a.map((e) =>
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
    let { onClose: t, guildId: n, onSelect: l } = e,
        r = (0, c.e7)([_.Z], () => _.Z.getGuild(n));
    return null == r
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
                          guild: r,
                          onSelect: l,
                      }),
                  }),
              ],
          });
}
function W(e) {
    let { onClose: t, guildId: n, role: r, onCancel: o, onImport: s } = e,
        c = l.useRef(r);
    null != r && (c.current = r);
    let a = null != r ? r : c.current,
        d = (0, x.Z)(() => {
            let e = C.Z.getCategories(n);
            return e._categories.flatMap((t) =>
                e[t.channel.id]
                    .filter((e) => {
                        let { channel: t } = e;
                        return p.zS.has(t.type);
                    })
                    .map((e) => {
                        let { channel: t } = e;
                        return t;
                    }),
            );
        }),
        u = l.useMemo(() => (0, S.Z)(d, a), [d, a]),
        [f, g] = l.useState(() => new Set(u.map((e) => e.id)));
    function j(e, t) {
        g((n) => {
            let i = new Set(n);
            return t ? i.add(e) : i.delete(e), i;
        });
    }
    return (0, i.jsxs)("form", {
        onSubmit: function (e) {
            e.preventDefault(), s(u.map((e) => e.id).filter((e) => f.has(e))), t();
        },
        className: M.slideForm,
        children: [
            (0, i.jsxs)(m.xBx, {
                "data-migration-pending": !0,
                children: [
                    (0, i.jsx)(m.Heading, {
                        id: E,
                        variant: "heading-md/semibold",
                        children: B.intl.format(B.t.iuPodG, { roleName: a.name }),
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
                    u.length > 1 &&
                        (0, i.jsx)("div", {
                            className: M.list,
                            children: (0, i.jsx)(R, {
                                icon: (0, i.jsx)(m.avL, {
                                    size: "md",
                                    color: "currentColor",
                                }),
                                checked: f.size === u.length,
                                onChange: function (e) {
                                    for (let t of u) j(t.id, e);
                                },
                                children: (0, i.jsx)(m.Text, {
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: B.intl.string(B.t["5Q/fLO"]),
                                }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: M.list,
                        children: u.map((e) => {
                            var t;
                            let n = null != (t = (0, h.Th)(e.type)) ? t : m.VL1;
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
                                        color: "text-strong",
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
    let { transitionState: t, guildId: n, onClose: r, onImport: o } = e,
        [s, c] = l.useState();
    return (0, i.jsx)(m.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        "aria-labelledby": null == s ? z : E,
        parentComponent: "ImportBenefitsModal",
        children: (0, i.jsxs)(m.MyZ, {
            contentDisplay: "flex",
            activeSlide: +(null != s),
            width: 440,
            children: [
                (0, i.jsx)(m.Mi4, {
                    id: 0,
                    children: (0, i.jsx)(G, {
                        onClose: r,
                        guildId: n,
                        onSelect: c,
                    }),
                }),
                (0, i.jsx)(m.Mi4, {
                    id: 1,
                    children: (0, i.jsx)(W, {
                        onClose: r,
                        guildId: n,
                        role: s,
                        onCancel: () => c(void 0),
                        onImport: o,
                    }),
                }),
            ],
        }),
    });
}
