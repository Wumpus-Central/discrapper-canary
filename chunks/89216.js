(a.d(l, { default: () => k }), a(388685));
var t = a(255367),
    n = a(73800),
    s = a(392711),
    i = a.n(s),
    r = a(442837),
    c = a(257465),
    o = a(82659),
    d = a(369585),
    m = a(103866),
    x = a(481060),
    h = a(741361),
    u = a(596454),
    p = a(447003),
    j = a(471445),
    v = a(605436),
    C = a(633302),
    f = a(984933),
    g = a(388032),
    b = a(319337);
function N(e) {
    var l, s, i;
    let { onClose: r, handleReviewPermissions: c } = e,
        o = (e) =>
            (0, t.jsx)(x.Text, {
                tag: 'span',
                variant: 'text-md/medium',
                color: 'header-primary',
                children: e
            }),
        h = n.useMemo(
            () => [
                {
                    variant: 'secondary',
                    text: g.intl.string(g.t['ETE/oK']),
                    onClick: r
                },
                {
                    variant: 'primary',
                    text: g.intl.string(g.t.bEnlen),
                    onClick: c
                }
            ],
            [c, r]
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(m.f, {
                children: [
                    (0, t.jsxs)('div', {
                        className: b.modalHeader,
                        children: [
                            (0, t.jsx)('img', {
                                className: b.modalImage,
                                'data-accessibility': 'desaturate',
                                alt: '',
                                src: a(592614)
                            }),
                            (0, t.jsx)(x.X6q, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                children: g.intl.string(g.t.PJOCLy)
                            })
                        ]
                    }),
                    (0, t.jsxs)('ul', {
                        children: [
                            (0, t.jsxs)('li', {
                                className: b.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: b.iconWrapper,
                                        children: (0, t.jsx)(u.Z, { emojiName: null == (l = C.ZP.getByName('eyes')) ? void 0 : l.surrogates })
                                    }),
                                    (0, t.jsx)(x.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: g.intl.format(g.t['8JzOBg'], { emphasisHook: o })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: b.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: b.iconWrapper,
                                        children: (0, t.jsx)(u.Z, { emojiName: null == (s = C.ZP.getByName('star_struck')) ? void 0 : s.surrogates })
                                    }),
                                    (0, t.jsx)(x.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: g.intl.format(g.t.UcGDkp, { emphasisHook: o })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: b.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: b.iconWrapper,
                                        children: (0, t.jsx)(u.Z, { emojiName: null == (i = C.ZP.getByName('books')) ? void 0 : i.surrogates })
                                    }),
                                    (0, t.jsx)(x.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: g.intl.format(g.t.kALJ5u, { emphasisHook: o })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, t.jsx)(d.G, {
                actions: h,
                actionsFullWidth: !0
            })
        ]
    });
}
function y(e) {
    var l;
    let { channel: a, selected: s, onChange: i } = e,
        r = null != (l = (0, j.KS)(a)) ? l : x.VL1,
        c = n.useCallback(() => {
            i(a);
        }, [a, i]);
    return (0, t.jsxs)(x.P3F, {
        'aria-label': a.name,
        'aria-checked': s,
        className: b.selectableChannelRow,
        onClick: c,
        children: [
            (0, t.jsxs)('div', {
                className: b.selectableChannelCellFirst,
                children: [
                    (0, t.jsx)(r, {
                        className: b.channelIcon,
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    (0, t.jsx)(x.Text, {
                        className: b.channelName,
                        variant: 'text-md/medium',
                        color: 'text-default',
                        lineClamp: 1,
                        children: a.name
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: b.selectableChannelCellSecond,
                children: (0, t.jsx)(x.XZJ, {
                    type: x.XZJ.Types.INVERTED,
                    value: s,
                    displayOnly: !0
                })
            })
        ]
    });
}
function k(e) {
    let { transitionState: l, onClose: a, guildId: s, startingChannelId: d } = e,
        m = (0, r.Wu)([f.ZP], () => {
            var e, l;
            let a = f.ZP.getChannels(s);
            return (null != (e = a[f.sH]) ? e : [])
                .concat(null != (l = a[f.Zb]) ? l : [])
                .filter((e) => (0, p.Z)(e.channel))
                .map((e) => e.channel);
        }),
        [u, j] = n.useState(0),
        C = m.find((e) => e.id === d),
        [k, T] = n.useState(null != C ? [C] : []),
        _ = k.length === m.length,
        Z = n.useCallback(() => {
            j(1);
        }, [j]),
        I = n.useCallback(
            (e) => {
                T((l) => (l.includes(e) ? [...i().pull(l, e)] : [...l, e]));
            },
            [T]
        ),
        E = n.useCallback(() => {
            _ ? T([]) : T(m);
        }, [_, m, T]),
        P = n.useCallback(() => {
            k.forEach((e) => {
                let l = (0, v._A)(e, e.accessPermissions, !0);
                ((0, h.hw)(e.id, [l]), a());
            });
        }, [k, a]),
        A = n.useMemo(
            () => [
                {
                    variant: 'secondary',
                    text: g.intl.string(g.t['ETE/oK']),
                    onClick: a
                },
                {
                    variant: 'primary',
                    text: g.intl.string(g.t.PggHmp),
                    onClick: P,
                    disabled: 0 === k.length
                }
            ],
            [P, a, k.length]
        );
    return 0 === u
        ? (0, t.jsx)(c.I, {
              onClose: a,
              transitionState: l,
              children: (0, t.jsx)(N, {
                  handleReviewPermissions: Z,
                  onClose: a
              })
          })
        : (0, t.jsxs)(o.u, {
              title: g.intl.string(g.t.y77PiY),
              subtitle: g.intl.string(g.t.ZSzBe3),
              actions: A,
              onClose: a,
              transitionState: l,
              input: (0, t.jsxs)('div', {
                  className: b.selectAllContainer,
                  children: [
                      (0, t.jsx)(x.Text, {
                          className: b.selectAllTitle,
                          variant: 'text-xs/semibold',
                          color: 'text-muted',
                          children: g.intl.format(g.t.rrYCq6, { count: m.length })
                      }),
                      (0, t.jsxs)(x.P3F, {
                          'aria-label': g.intl.string(g.t.l4rqa2),
                          className: b.selectAllButton,
                          onClick: E,
                          children: [
                              (0, t.jsx)(x.Text, {
                                  variant: 'text-xs/normal',
                                  children: g.intl.string(g.t.l4rqa2)
                              }),
                              (0, t.jsx)(x.XZJ, {
                                  size: 16,
                                  type: x.XZJ.Types.INVERTED,
                                  value: _,
                                  displayOnly: !0
                              })
                          ]
                      })
                  ]
              }),
              children: [
                  (0, t.jsx)('div', {
                      className: b.deprivateTableBody,
                      children: m.map((e) =>
                          (0, t.jsx)(
                              y,
                              {
                                  channel: e,
                                  selected: k.includes(e),
                                  onChange: I
                              },
                              e.id
                          )
                      )
                  }),
                  (0, t.jsx)('div', {
                      className: b.deprivateExplainer,
                      children: (0, t.jsx)(x.Text, {
                          variant: 'text-xs/normal',
                          color: 'text-muted',
                          children: g.intl.format(g.t['OP/pKi'], {
                              emphasisHook: (e) =>
                                  (0, t.jsx)(x.Text, {
                                      tag: 'span',
                                      variant: 'text-xs/medium',
                                      color: 'interactive-active',
                                      children: e
                                  }),
                              brandHook: (e) =>
                                  (0, t.jsx)(x.Text, {
                                      tag: 'span',
                                      variant: 'text-xs/normal',
                                      color: 'text-brand',
                                      children: e
                                  })
                          })
                      })
                  })
              ]
          });
}
