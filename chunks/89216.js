l.r(t), l.d(t, { default: () => g }), l(388685);
var a = l(54381),
    n = l(473749),
    s = l(392711),
    i = l.n(s),
    c = l(793030),
    r = l(442837),
    o = l(481060),
    d = l(741361),
    x = l(596454),
    m = l(447003),
    h = l(471445),
    b = l(605436),
    u = l(633302),
    f = l(984933),
    C = l(388032),
    p = l(178757);
function v(e) {
    var t, l, s;
    let { onClose: i, handleReviewPermissions: r, transitionState: d } = e,
        m = (e) =>
            (0, a.jsx)(o.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "text-strong",
                children: e,
            }),
        h = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t["ETE/oC"]),
                    onClick: i,
                },
                {
                    variant: "primary",
                    text: C.intl.string(C.t.bEnleq),
                    onClick: r,
                },
            ],
            [r, i],
        );
    return (0, a.jsx)(c.Modal, {
        title: C.intl.string(C.t.PJOCL6),
        actions: h,
        onClose: i,
        transitionState: d,
        children: (0, a.jsxs)("ul", {
            className: p.infoList,
            children: [
                (0, a.jsxs)("li", {
                    className: p.infoListItem,
                    children: [
                        (0, a.jsx)("div", {
                            className: p.iconWrapper,
                            children: (0, a.jsx)(x.Z, {
                                emojiName: null == (t = u.ZP.getByName("eyes")) ? void 0 : t.surrogates,
                            }),
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.format(C.t["8JzOBn"], { emphasisHook: m }),
                        }),
                    ],
                }),
                (0, a.jsxs)("li", {
                    className: p.infoListItem,
                    children: [
                        (0, a.jsx)("div", {
                            className: p.iconWrapper,
                            children: (0, a.jsx)(x.Z, {
                                emojiName: null == (l = u.ZP.getByName("star_struck")) ? void 0 : l.surrogates,
                            }),
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.format(C.t.UcGDkt, { emphasisHook: m }),
                        }),
                    ],
                }),
                (0, a.jsxs)("li", {
                    className: p.infoListItem,
                    children: [
                        (0, a.jsx)("div", {
                            className: p.iconWrapper,
                            children: (0, a.jsx)(x.Z, {
                                emojiName: null == (s = u.ZP.getByName("books")) ? void 0 : s.surrogates,
                            }),
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.format(C.t.kALJ5q, { emphasisHook: m }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function j(e) {
    var t;
    let { channel: l, selected: s, onChange: i } = e,
        c = null != (t = (0, h.KS)(l)) ? t : o.VL1,
        r = n.useCallback(() => {
            i(l);
        }, [l, i]);
    return (0, a.jsxs)(o.P3F, {
        "aria-label": l.name,
        "aria-checked": s,
        className: p.selectableChannelRow,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: p.selectableChannelCellFirst,
                children: [
                    (0, a.jsx)(c, {
                        className: p.channelIcon,
                        size: "xs",
                        color: "currentColor",
                    }),
                    (0, a.jsx)(o.Text, {
                        className: p.channelName,
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: l.name,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: p.selectableChannelCellSecond,
                children: (0, a.jsx)(o.FZ5, { checked: s }),
            }),
        ],
    });
}
function g(e) {
    let { transitionState: t, onClose: l, guildId: s, startingChannelId: x } = e,
        h = (0, r.Wu)([f.ZP], () => {
            var e, t;
            let l = f.ZP.getChannels(s);
            return (null != (e = l[f.sH]) ? e : [])
                .concat(null != (t = l[f.Zb]) ? t : [])
                .filter((e) => (0, m.Z)(e.channel))
                .map((e) => e.channel);
        }),
        [u, g] = n.useState(0),
        k = h.find((e) => e.id === x),
        [N, T] = n.useState(null != k ? [k] : []),
        y = N.length === h.length,
        P = n.useCallback(() => {
            g(1);
        }, [g]),
        Z = n.useCallback(
            (e) => {
                T((t) => (t.includes(e) ? [...i().pull(t, e)] : [...t, e]));
            },
            [T],
        ),
        A = n.useCallback(() => {
            y ? T([]) : T(h);
        }, [y, h, T]),
        L = n.useCallback(() => {
            N.forEach((e) => {
                let t = (0, b._A)(e, e.accessPermissions, !0);
                (0, d.hw)(e.id, [t]), l();
            });
        }, [N, l]),
        S = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t["ETE/oC"]),
                    onClick: l,
                },
                {
                    variant: "primary",
                    text: C.intl.string(C.t.PggHmu),
                    onClick: L,
                    disabled: 0 === N.length,
                },
            ],
            [L, l, N.length],
        );
    return 0 === u
        ? (0, a.jsx)(v, {
              handleReviewPermissions: P,
              onClose: l,
              transitionState: t,
          })
        : (0, a.jsxs)(c.Modal, {
              title: C.intl.string(C.t.y77PiT),
              subtitle: C.intl.string(C.t.ZSzBe5),
              actions: S,
              onClose: l,
              transitionState: t,
              input: (0, a.jsxs)("div", {
                  className: p.selectAllContainer,
                  children: [
                      (0, a.jsx)(o.Text, {
                          className: p.selectAllTitle,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: C.intl.format(C.t.rrYCq2, { count: h.length }),
                      }),
                      (0, a.jsx)("div", {
                          className: p.selectAllCheckbox,
                          children: (0, a.jsx)(o.Checkbox, {
                              onChange: A,
                              checked: y,
                              label: C.intl.string(C.t.l4rqaz),
                              labelType: "secondary",
                          }),
                      }),
                  ],
              }),
              children: [
                  (0, a.jsx)("div", {
                      className: p.deprivateTableBody,
                      children: h.map((e) =>
                          (0, a.jsx)(
                              j,
                              {
                                  channel: e,
                                  selected: N.includes(e),
                                  onChange: Z,
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, a.jsx)("div", {
                      className: p.deprivateExplainer,
                      children: (0, a.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: C.intl.format(C.t["OP/pKr"], {
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
