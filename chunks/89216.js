t.r(l), t.d(l, { default: () => g }), t(388685);
var a = t(54381),
    n = t(473749),
    s = t(392711),
    i = t.n(s),
    r = t(793030),
    c = t(442837),
    o = t(481060),
    d = t(741361),
    x = t(596454),
    m = t(447003),
    h = t(471445),
    u = t(605436),
    C = t(633302),
    p = t(984933),
    v = t(388032),
    f = t(809822);
function j(e) {
    var l, t, s;
    let { onClose: i, handleReviewPermissions: c, transitionState: d } = e,
        m = (e) =>
            (0, a.jsx)(o.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "header-primary",
                children: e,
            }),
        h = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: v.intl.string(v.t["ETE/oC"]),
                    onClick: i,
                },
                {
                    variant: "primary",
                    text: v.intl.string(v.t.bEnleq),
                    onClick: c,
                },
            ],
            [c, i],
        );
    return (0, a.jsx)(r.Modal, {
        title: v.intl.string(v.t.PJOCL6),
        actions: h,
        onClose: i,
        transitionState: d,
        children: (0, a.jsxs)("ul", {
            className: f.infoList,
            children: [
                (0, a.jsxs)("li", {
                    className: f.infoListItem,
                    children: [
                        (0, a.jsx)("div", {
                            className: f.iconWrapper,
                            children: (0, a.jsx)(x.Z, {
                                emojiName: null == (l = C.ZP.getByName("eyes")) ? void 0 : l.surrogates,
                            }),
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: v.intl.format(v.t["8JzOBn"], { emphasisHook: m }),
                        }),
                    ],
                }),
                (0, a.jsxs)("li", {
                    className: f.infoListItem,
                    children: [
                        (0, a.jsx)("div", {
                            className: f.iconWrapper,
                            children: (0, a.jsx)(x.Z, {
                                emojiName: null == (t = C.ZP.getByName("star_struck")) ? void 0 : t.surrogates,
                            }),
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: v.intl.format(v.t.UcGDkt, { emphasisHook: m }),
                        }),
                    ],
                }),
                (0, a.jsxs)("li", {
                    className: f.infoListItem,
                    children: [
                        (0, a.jsx)("div", {
                            className: f.iconWrapper,
                            children: (0, a.jsx)(x.Z, {
                                emojiName: null == (s = C.ZP.getByName("books")) ? void 0 : s.surrogates,
                            }),
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: v.intl.format(v.t.kALJ5q, { emphasisHook: m }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function b(e) {
    var l;
    let { channel: t, selected: s, onChange: i } = e,
        r = null != (l = (0, h.KS)(t)) ? l : o.VL1,
        c = n.useCallback(() => {
            i(t);
        }, [t, i]);
    return (0, a.jsxs)(o.P3F, {
        "aria-label": t.name,
        "aria-checked": s,
        className: f.selectableChannelRow,
        onClick: c,
        children: [
            (0, a.jsxs)("div", {
                className: f.selectableChannelCellFirst,
                children: [
                    (0, a.jsx)(r, {
                        className: f.channelIcon,
                        size: "xs",
                        color: "currentColor",
                    }),
                    (0, a.jsx)(o.Text, {
                        className: f.channelName,
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: t.name,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: f.selectableChannelCellSecond,
                children: (0, a.jsx)(o.FZ5, { checked: s }),
            }),
        ],
    });
}
function g(e) {
    let { transitionState: l, onClose: t, guildId: s, startingChannelId: x } = e,
        h = (0, c.Wu)([p.ZP], () => {
            var e, l;
            let t = p.ZP.getChannels(s);
            return (null != (e = t[p.sH]) ? e : [])
                .concat(null != (l = t[p.Zb]) ? l : [])
                .filter((e) => (0, m.Z)(e.channel))
                .map((e) => e.channel);
        }),
        [C, g] = n.useState(0),
        k = h.find((e) => e.id === x),
        [N, T] = n.useState(null != k ? [k] : []),
        _ = N.length === h.length,
        y = n.useCallback(() => {
            g(1);
        }, [g]),
        P = n.useCallback(
            (e) => {
                T((l) => (l.includes(e) ? [...i().pull(l, e)] : [...l, e]));
            },
            [T],
        ),
        Z = n.useCallback(() => {
            _ ? T([]) : T(h);
        }, [_, h, T]),
        A = n.useCallback(() => {
            N.forEach((e) => {
                let l = (0, u._A)(e, e.accessPermissions, !0);
                (0, d.hw)(e.id, [l]), t();
            });
        }, [N, t]),
        L = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: v.intl.string(v.t["ETE/oC"]),
                    onClick: t,
                },
                {
                    variant: "primary",
                    text: v.intl.string(v.t.PggHmu),
                    onClick: A,
                    disabled: 0 === N.length,
                },
            ],
            [A, t, N.length],
        );
    return 0 === C
        ? (0, a.jsx)(j, {
              handleReviewPermissions: y,
              onClose: t,
              transitionState: l,
          })
        : (0, a.jsxs)(r.Modal, {
              title: v.intl.string(v.t.y77PiT),
              subtitle: v.intl.string(v.t.ZSzBe5),
              actions: L,
              onClose: t,
              transitionState: l,
              input: (0, a.jsxs)("div", {
                  className: f.selectAllContainer,
                  children: [
                      (0, a.jsx)(o.Text, {
                          className: f.selectAllTitle,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: v.intl.format(v.t.rrYCq2, { count: h.length }),
                      }),
                      (0, a.jsx)("div", {
                          className: f.selectAllCheckbox,
                          children: (0, a.jsx)(o.Checkbox, {
                              onChange: Z,
                              checked: _,
                              label: v.intl.string(v.t.l4rqaz),
                              labelType: "secondary",
                          }),
                      }),
                  ],
              }),
              children: [
                  (0, a.jsx)("div", {
                      className: f.deprivateTableBody,
                      children: h.map((e) =>
                          (0, a.jsx)(
                              b,
                              {
                                  channel: e,
                                  selected: N.includes(e),
                                  onChange: P,
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, a.jsx)("div", {
                      className: f.deprivateExplainer,
                      children: (0, a.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: v.intl.format(v.t["OP/pKr"], {
                              emphasisHook: (e) =>
                                  (0, a.jsx)(o.Text, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "interactive-text-active",
                                      children: e,
                                  }),
                              brandHook: (e) =>
                                  (0, a.jsx)(o.Text, {
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
