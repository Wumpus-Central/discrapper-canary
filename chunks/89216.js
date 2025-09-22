a.d(l, { default: () => T }), a(388685);
var t = a(951288),
    n = a(647438),
    s = a(392711),
    i = a.n(s),
    r = a(442837),
    c = a(257465),
    o = a(82659),
    d = a(369585),
    m = a(103866),
    x = a(755721),
    h = a(481060),
    u = a(741361),
    p = a(596454),
    j = a(447003),
    v = a(471445),
    C = a(605436),
    f = a(633302),
    g = a(984933),
    b = a(388032),
    N = a(809822);
function k(e) {
    var l, s, i;
    let { onClose: r, handleReviewPermissions: c } = e,
        o = (e) =>
            (0, t.jsx)(h.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "header-primary",
                children: e,
            }),
        x = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: b.intl.string(b.t["ETE/oK"]),
                    onClick: r,
                },
                {
                    variant: "primary",
                    text: b.intl.string(b.t.bEnlen),
                    onClick: c,
                },
            ],
            [c, r],
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(m.f, {
                children: [
                    (0, t.jsxs)("div", {
                        className: N.modalHeader,
                        children: [
                            (0, t.jsx)("img", {
                                className: N.modalImage,
                                "data-accessibility": "desaturate",
                                alt: "",
                                src: a(592614),
                            }),
                            (0, t.jsx)(h.X6q, {
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: b.intl.string(b.t.PJOCLy),
                            }),
                        ],
                    }),
                    (0, t.jsxs)("ul", {
                        children: [
                            (0, t.jsxs)("li", {
                                className: N.infoListItem,
                                children: [
                                    (0, t.jsx)("div", {
                                        className: N.iconWrapper,
                                        children: (0, t.jsx)(p.Z, {
                                            emojiName: null == (l = f.ZP.getByName("eyes")) ? void 0 : l.surrogates,
                                        }),
                                    }),
                                    (0, t.jsx)(h.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: b.intl.format(b.t["8JzOBg"], { emphasisHook: o }),
                                    }),
                                ],
                            }),
                            (0, t.jsxs)("li", {
                                className: N.infoListItem,
                                children: [
                                    (0, t.jsx)("div", {
                                        className: N.iconWrapper,
                                        children: (0, t.jsx)(p.Z, {
                                            emojiName:
                                                null == (s = f.ZP.getByName("star_struck")) ? void 0 : s.surrogates,
                                        }),
                                    }),
                                    (0, t.jsx)(h.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: b.intl.format(b.t.UcGDkp, { emphasisHook: o }),
                                    }),
                                ],
                            }),
                            (0, t.jsxs)("li", {
                                className: N.infoListItem,
                                children: [
                                    (0, t.jsx)("div", {
                                        className: N.iconWrapper,
                                        children: (0, t.jsx)(p.Z, {
                                            emojiName: null == (i = f.ZP.getByName("books")) ? void 0 : i.surrogates,
                                        }),
                                    }),
                                    (0, t.jsx)(h.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: b.intl.format(b.t.kALJ5u, { emphasisHook: o }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, t.jsx)(d.G, {
                actions: x,
                actionsFullWidth: !0,
            }),
        ],
    });
}
function y(e) {
    var l;
    let { channel: a, selected: s, onChange: i } = e,
        r = null != (l = (0, v.KS)(a)) ? l : h.VL1,
        c = n.useCallback(() => {
            i(a);
        }, [a, i]);
    return (0, t.jsxs)(h.P3F, {
        "aria-label": a.name,
        "aria-checked": s,
        className: N.selectableChannelRow,
        onClick: c,
        children: [
            (0, t.jsxs)("div", {
                className: N.selectableChannelCellFirst,
                children: [
                    (0, t.jsx)(r, {
                        className: N.channelIcon,
                        size: "xs",
                        color: "currentColor",
                    }),
                    (0, t.jsx)(h.Text, {
                        className: N.channelName,
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: a.name,
                    }),
                ],
            }),
            (0, t.jsx)("div", {
                className: N.selectableChannelCellSecond,
                children: (0, t.jsx)(x.$q, {
                    type: x.M0.INVERTED,
                    value: s,
                    displayOnly: !0,
                }),
            }),
        ],
    });
}
function T(e) {
    let { transitionState: l, onClose: a, guildId: s, startingChannelId: d } = e,
        m = (0, r.Wu)([g.ZP], () => {
            var e, l;
            let a = g.ZP.getChannels(s);
            return (null != (e = a[g.sH]) ? e : [])
                .concat(null != (l = a[g.Zb]) ? l : [])
                .filter((e) => (0, j.Z)(e.channel))
                .map((e) => e.channel);
        }),
        [p, v] = n.useState(0),
        f = m.find((e) => e.id === d),
        [T, _] = n.useState(null != f ? [f] : []),
        I = T.length === m.length,
        E = n.useCallback(() => {
            v(1);
        }, [v]),
        P = n.useCallback(
            (e) => {
                _((l) => (l.includes(e) ? [...i().pull(l, e)] : [...l, e]));
            },
            [_],
        ),
        A = n.useCallback(() => {
            I ? _([]) : _(m);
        }, [I, m, _]),
        B = n.useCallback(() => {
            T.forEach((e) => {
                let l = (0, C._A)(e, e.accessPermissions, !0);
                (0, u.hw)(e.id, [l]), a();
            });
        }, [T, a]),
        Z = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: b.intl.string(b.t["ETE/oK"]),
                    onClick: a,
                },
                {
                    variant: "primary",
                    text: b.intl.string(b.t.PggHmp),
                    onClick: B,
                    disabled: 0 === T.length,
                },
            ],
            [B, a, T.length],
        );
    return 0 === p
        ? (0, t.jsx)(c.IX, {
              onClose: a,
              transitionState: l,
              children: (0, t.jsx)(k, {
                  handleReviewPermissions: E,
                  onClose: a,
              }),
          })
        : (0, t.jsxs)(o.Modal, {
              title: b.intl.string(b.t.y77PiY),
              subtitle: b.intl.string(b.t.ZSzBe3),
              actions: Z,
              onClose: a,
              transitionState: l,
              input: (0, t.jsxs)("div", {
                  className: N.selectAllContainer,
                  children: [
                      (0, t.jsx)(h.Text, {
                          className: N.selectAllTitle,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: b.intl.format(b.t.rrYCq6, { count: m.length }),
                      }),
                      (0, t.jsxs)(h.P3F, {
                          "aria-label": b.intl.string(b.t.l4rqa2),
                          className: N.selectAllButton,
                          onClick: A,
                          children: [
                              (0, t.jsx)(h.Text, {
                                  variant: "text-xs/normal",
                                  children: b.intl.string(b.t.l4rqa2),
                              }),
                              (0, t.jsx)(x.$q, {
                                  size: 16,
                                  type: x.M0.INVERTED,
                                  value: I,
                                  displayOnly: !0,
                              }),
                          ],
                      }),
                  ],
              }),
              children: [
                  (0, t.jsx)("div", {
                      className: N.deprivateTableBody,
                      children: m.map((e) =>
                          (0, t.jsx)(
                              y,
                              {
                                  channel: e,
                                  selected: T.includes(e),
                                  onChange: P,
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, t.jsx)("div", {
                      className: N.deprivateExplainer,
                      children: (0, t.jsx)(h.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: b.intl.format(b.t["OP/pKi"], {
                              emphasisHook: (e) =>
                                  (0, t.jsx)(h.Text, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "interactive-active",
                                      children: e,
                                  }),
                              brandHook: (e) =>
                                  (0, t.jsx)(h.Text, {
                                      tag: "span",
                                      variant: "text-xs/normal",
                                      color: "text-brand",
                                      children: e,
                                  }),
                          }),
                      }),
                  }),
              ],
          });
}
