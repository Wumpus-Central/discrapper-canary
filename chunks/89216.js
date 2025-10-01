a.d(l, { default: () => N }), a(388685);
var t = a(951288),
    n = a(647438),
    s = a(392711),
    i = a.n(s),
    r = a(793030),
    c = a(442837),
    o = a(755721),
    d = a(481060),
    m = a(741361),
    x = a(596454),
    h = a(447003),
    u = a(471445),
    p = a(605436),
    j = a(633302),
    v = a(984933),
    C = a(388032),
    f = a(809822);
function g(e) {
    var l, s, i;
    let { onClose: c, handleReviewPermissions: o } = e,
        m = (e) =>
            (0, t.jsx)(d.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "header-primary",
                children: e,
            }),
        h = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t["ETE/oK"]),
                    onClick: c,
                },
                {
                    variant: "primary",
                    text: C.intl.string(C.t.bEnlen),
                    onClick: o,
                },
            ],
            [o, c],
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(r.fef, {
                children: [
                    (0, t.jsxs)("div", {
                        className: f.modalHeader,
                        children: [
                            (0, t.jsx)("img", {
                                className: f.modalImage,
                                "data-accessibility": "desaturate",
                                alt: "",
                                src: a(592614),
                            }),
                            (0, t.jsx)(d.X6q, {
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: C.intl.string(C.t.PJOCLy),
                            }),
                        ],
                    }),
                    (0, t.jsxs)("ul", {
                        children: [
                            (0, t.jsxs)("li", {
                                className: f.infoListItem,
                                children: [
                                    (0, t.jsx)("div", {
                                        className: f.iconWrapper,
                                        children: (0, t.jsx)(x.Z, {
                                            emojiName: null == (l = j.ZP.getByName("eyes")) ? void 0 : l.surrogates,
                                        }),
                                    }),
                                    (0, t.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: C.intl.format(C.t["8JzOBg"], { emphasisHook: m }),
                                    }),
                                ],
                            }),
                            (0, t.jsxs)("li", {
                                className: f.infoListItem,
                                children: [
                                    (0, t.jsx)("div", {
                                        className: f.iconWrapper,
                                        children: (0, t.jsx)(x.Z, {
                                            emojiName:
                                                null == (s = j.ZP.getByName("star_struck")) ? void 0 : s.surrogates,
                                        }),
                                    }),
                                    (0, t.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: C.intl.format(C.t.UcGDkp, { emphasisHook: m }),
                                    }),
                                ],
                            }),
                            (0, t.jsxs)("li", {
                                className: f.infoListItem,
                                children: [
                                    (0, t.jsx)("div", {
                                        className: f.iconWrapper,
                                        children: (0, t.jsx)(x.Z, {
                                            emojiName: null == (i = j.ZP.getByName("books")) ? void 0 : i.surrogates,
                                        }),
                                    }),
                                    (0, t.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: C.intl.format(C.t.kALJ5u, { emphasisHook: m }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, t.jsx)(r.Go$, {
                actions: h,
                actionsFullWidth: !0,
            }),
        ],
    });
}
function b(e) {
    var l;
    let { channel: a, selected: s, onChange: i } = e,
        r = null != (l = (0, u.KS)(a)) ? l : d.VL1,
        c = n.useCallback(() => {
            i(a);
        }, [a, i]);
    return (0, t.jsxs)(d.P3F, {
        "aria-label": a.name,
        "aria-checked": s,
        className: f.selectableChannelRow,
        onClick: c,
        children: [
            (0, t.jsxs)("div", {
                className: f.selectableChannelCellFirst,
                children: [
                    (0, t.jsx)(r, {
                        className: f.channelIcon,
                        size: "xs",
                        color: "currentColor",
                    }),
                    (0, t.jsx)(d.Text, {
                        className: f.channelName,
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: a.name,
                    }),
                ],
            }),
            (0, t.jsx)("div", {
                className: f.selectableChannelCellSecond,
                children: (0, t.jsx)(o.$q, {
                    type: o.M0.INVERTED,
                    value: s,
                    displayOnly: !0,
                }),
            }),
        ],
    });
}
function N(e) {
    let { transitionState: l, onClose: a, guildId: s, startingChannelId: x } = e,
        u = (0, c.Wu)([v.ZP], () => {
            var e, l;
            let a = v.ZP.getChannels(s);
            return (null != (e = a[v.sH]) ? e : [])
                .concat(null != (l = a[v.Zb]) ? l : [])
                .filter((e) => (0, h.Z)(e.channel))
                .map((e) => e.channel);
        }),
        [j, N] = n.useState(0),
        k = u.find((e) => e.id === x),
        [y, T] = n.useState(null != k ? [k] : []),
        _ = y.length === u.length,
        I = n.useCallback(() => {
            N(1);
        }, [N]),
        E = n.useCallback(
            (e) => {
                T((l) => (l.includes(e) ? [...i().pull(l, e)] : [...l, e]));
            },
            [T],
        ),
        P = n.useCallback(() => {
            _ ? T([]) : T(u);
        }, [_, u, T]),
        A = n.useCallback(() => {
            y.forEach((e) => {
                let l = (0, p._A)(e, e.accessPermissions, !0);
                (0, m.hw)(e.id, [l]), a();
            });
        }, [y, a]),
        B = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t["ETE/oK"]),
                    onClick: a,
                },
                {
                    variant: "primary",
                    text: C.intl.string(C.t.PggHmp),
                    onClick: A,
                    disabled: 0 === y.length,
                },
            ],
            [A, a, y.length],
        );
    return 0 === j
        ? (0, t.jsx)(r.IX, {
              onClose: a,
              transitionState: l,
              children: (0, t.jsx)(g, {
                  handleReviewPermissions: I,
                  onClose: a,
              }),
          })
        : (0, t.jsxs)(r.Modal, {
              title: C.intl.string(C.t.y77PiY),
              subtitle: C.intl.string(C.t.ZSzBe3),
              actions: B,
              onClose: a,
              transitionState: l,
              input: (0, t.jsxs)("div", {
                  className: f.selectAllContainer,
                  children: [
                      (0, t.jsx)(d.Text, {
                          className: f.selectAllTitle,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: C.intl.format(C.t.rrYCq6, { count: u.length }),
                      }),
                      (0, t.jsxs)(d.P3F, {
                          "aria-label": C.intl.string(C.t.l4rqa2),
                          className: f.selectAllButton,
                          onClick: P,
                          children: [
                              (0, t.jsx)(d.Text, {
                                  variant: "text-xs/normal",
                                  children: C.intl.string(C.t.l4rqa2),
                              }),
                              (0, t.jsx)(o.$q, {
                                  size: 16,
                                  type: o.M0.INVERTED,
                                  value: _,
                                  displayOnly: !0,
                              }),
                          ],
                      }),
                  ],
              }),
              children: [
                  (0, t.jsx)("div", {
                      className: f.deprivateTableBody,
                      children: u.map((e) =>
                          (0, t.jsx)(
                              b,
                              {
                                  channel: e,
                                  selected: y.includes(e),
                                  onChange: E,
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, t.jsx)("div", {
                      className: f.deprivateExplainer,
                      children: (0, t.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: C.intl.format(C.t["OP/pKi"], {
                              emphasisHook: (e) =>
                                  (0, t.jsx)(d.Text, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "interactive-active",
                                      children: e,
                                  }),
                              brandHook: (e) =>
                                  (0, t.jsx)(d.Text, {
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
