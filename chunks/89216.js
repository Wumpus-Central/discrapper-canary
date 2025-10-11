a.r(l), a.d(l, { default: () => g }), a(388685);
var t = a(951288),
    n = a(647438),
    s = a(392711),
    i = a.n(s),
    r = a(793030),
    c = a(442837),
    o = a(481060),
    d = a(741361),
    m = a(596454),
    x = a(447003),
    h = a(471445),
    u = a(605436),
    p = a(633302),
    C = a(984933),
    j = a(388032),
    v = a(809822);
function b(e) {
    var l, s, i;
    let { onClose: c, handleReviewPermissions: d } = e,
        x = (e) =>
            (0, t.jsx)(o.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "header-primary",
                children: e,
            }),
        h = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: j.intl.string(j.t["ETE/oK"]),
                    onClick: c,
                },
                {
                    variant: "primary",
                    text: j.intl.string(j.t.bEnlen),
                    onClick: d,
                },
            ],
            [d, c],
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(r.fef, {
                children: [
                    (0, t.jsxs)("div", {
                        className: v.modalHeader,
                        children: [
                            (0, t.jsx)("img", {
                                className: v.modalImage,
                                "data-accessibility": "desaturate",
                                alt: "",
                                src: a(592614),
                            }),
                            (0, t.jsx)(o.Heading, {
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: j.intl.string(j.t.PJOCLy),
                            }),
                        ],
                    }),
                    (0, t.jsxs)("ul", {
                        children: [
                            (0, t.jsxs)("li", {
                                className: v.infoListItem,
                                children: [
                                    (0, t.jsx)("div", {
                                        className: v.iconWrapper,
                                        children: (0, t.jsx)(m.Z, {
                                            emojiName: null == (l = p.ZP.getByName("eyes")) ? void 0 : l.surrogates,
                                        }),
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: j.intl.format(j.t["8JzOBg"], { emphasisHook: x }),
                                    }),
                                ],
                            }),
                            (0, t.jsxs)("li", {
                                className: v.infoListItem,
                                children: [
                                    (0, t.jsx)("div", {
                                        className: v.iconWrapper,
                                        children: (0, t.jsx)(m.Z, {
                                            emojiName:
                                                null == (s = p.ZP.getByName("star_struck")) ? void 0 : s.surrogates,
                                        }),
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: j.intl.format(j.t.UcGDkp, { emphasisHook: x }),
                                    }),
                                ],
                            }),
                            (0, t.jsxs)("li", {
                                className: v.infoListItem,
                                children: [
                                    (0, t.jsx)("div", {
                                        className: v.iconWrapper,
                                        children: (0, t.jsx)(m.Z, {
                                            emojiName: null == (i = p.ZP.getByName("books")) ? void 0 : i.surrogates,
                                        }),
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: j.intl.format(j.t.kALJ5u, { emphasisHook: x }),
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
function f(e) {
    var l;
    let { channel: a, selected: s, onChange: i } = e,
        r = null != (l = (0, h.KS)(a)) ? l : o.VL1,
        c = n.useCallback(() => {
            i(a);
        }, [a, i]);
    return (0, t.jsxs)(o.P3F, {
        "aria-label": a.name,
        "aria-checked": s,
        className: v.selectableChannelRow,
        onClick: c,
        children: [
            (0, t.jsxs)("div", {
                className: v.selectableChannelCellFirst,
                children: [
                    (0, t.jsx)(r, {
                        className: v.channelIcon,
                        size: "xs",
                        color: "currentColor",
                    }),
                    (0, t.jsx)(o.Text, {
                        className: v.channelName,
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: a.name,
                    }),
                ],
            }),
            (0, t.jsx)("div", {
                className: v.selectableChannelCellSecond,
                children: (0, t.jsx)(o.FZ5, { checked: s }),
            }),
        ],
    });
}
function g(e) {
    let { transitionState: l, onClose: a, guildId: s, startingChannelId: m } = e,
        h = (0, c.Wu)([C.ZP], () => {
            var e, l;
            let a = C.ZP.getChannels(s);
            return (null != (e = a[C.sH]) ? e : [])
                .concat(null != (l = a[C.Zb]) ? l : [])
                .filter((e) => (0, x.Z)(e.channel))
                .map((e) => e.channel);
        }),
        [p, g] = n.useState(0),
        k = h.find((e) => e.id === m),
        [N, y] = n.useState(null != k ? [k] : []),
        T = N.length === h.length,
        _ = n.useCallback(() => {
            g(1);
        }, [g]),
        I = n.useCallback(
            (e) => {
                y((l) => (l.includes(e) ? [...i().pull(l, e)] : [...l, e]));
            },
            [y],
        ),
        P = n.useCallback(() => {
            T ? y([]) : y(h);
        }, [T, h, y]),
        Z = n.useCallback(() => {
            N.forEach((e) => {
                let l = (0, u._A)(e, e.accessPermissions, !0);
                (0, d.hw)(e.id, [l]), a();
            });
        }, [N, a]),
        A = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: j.intl.string(j.t["ETE/oK"]),
                    onClick: a,
                },
                {
                    variant: "primary",
                    text: j.intl.string(j.t.PggHmp),
                    onClick: Z,
                    disabled: 0 === N.length,
                },
            ],
            [Z, a, N.length],
        );
    return 0 === p
        ? (0, t.jsx)(r.IX, {
              onClose: a,
              transitionState: l,
              children: (0, t.jsx)(b, {
                  handleReviewPermissions: _,
                  onClose: a,
              }),
          })
        : (0, t.jsxs)(r.Modal, {
              title: j.intl.string(j.t.y77PiY),
              subtitle: j.intl.string(j.t.ZSzBe3),
              actions: A,
              onClose: a,
              transitionState: l,
              input: (0, t.jsxs)("div", {
                  className: v.selectAllContainer,
                  children: [
                      (0, t.jsx)(o.Text, {
                          className: v.selectAllTitle,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: j.intl.format(j.t.rrYCq6, { count: h.length }),
                      }),
                      (0, t.jsx)("div", {
                          className: v.selectAllCheckbox,
                          children: (0, t.jsx)(o.Checkbox, {
                              onChange: P,
                              checked: T,
                              label: j.intl.string(j.t.l4rqa2),
                              labelType: "secondary",
                          }),
                      }),
                  ],
              }),
              children: [
                  (0, t.jsx)("div", {
                      className: v.deprivateTableBody,
                      children: h.map((e) =>
                          (0, t.jsx)(
                              f,
                              {
                                  channel: e,
                                  selected: N.includes(e),
                                  onChange: I,
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, t.jsx)("div", {
                      className: v.deprivateExplainer,
                      children: (0, t.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: j.intl.format(j.t["OP/pKi"], {
                              emphasisHook: (e) =>
                                  (0, t.jsx)(o.Text, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "interactive-active",
                                      children: e,
                                  }),
                              brandHook: (e) =>
                                  (0, t.jsx)(o.Text, {
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
