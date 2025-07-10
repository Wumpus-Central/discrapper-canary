(l.d(a, { default: () => g }), l(388685));
var t = l(255367),
    n = l(73800),
    s = l(392711),
    i = l.n(s),
    r = l(442837),
    c = l(481060),
    o = l(741361),
    d = l(596454),
    m = l(447003),
    x = l(471445),
    h = l(605436),
    u = l(313201),
    p = l(633302),
    j = l(984933),
    v = l(388032),
    C = l(319337);
function f(e) {
    var a, n, s;
    let { onClose: i, handleReviewPermissions: r } = e,
        o = (e) =>
            (0, t.jsx)(c.Text, {
                tag: 'span',
                variant: 'text-md/medium',
                color: 'header-primary',
                children: e
            });
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(c.hzk, {
                className: C.infoContent,
                children: [
                    (0, t.jsxs)('div', {
                        className: C.modalHeader,
                        children: [
                            (0, t.jsx)('img', {
                                className: C.modalImage,
                                'data-accessibility': 'desaturate',
                                alt: '',
                                src: l(592614)
                            }),
                            (0, t.jsx)(c.X6q, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                children: v.intl.string(v.t.PJOCLy)
                            })
                        ]
                    }),
                    (0, t.jsxs)('ul', {
                        children: [
                            (0, t.jsxs)('li', {
                                className: C.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: C.iconWrapper,
                                        children: (0, t.jsx)(d.Z, { emojiName: null == (a = p.ZP.getByName('eyes')) ? void 0 : a.surrogates })
                                    }),
                                    (0, t.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: v.intl.format(v.t['8JzOBg'], { emphasisHook: o })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: C.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: C.iconWrapper,
                                        children: (0, t.jsx)(d.Z, { emojiName: null == (n = p.ZP.getByName('star_struck')) ? void 0 : n.surrogates })
                                    }),
                                    (0, t.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: v.intl.format(v.t.UcGDkp, { emphasisHook: o })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: C.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: C.iconWrapper,
                                        children: (0, t.jsx)(d.Z, { emojiName: null == (s = p.ZP.getByName('books')) ? void 0 : s.surrogates })
                                    }),
                                    (0, t.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: v.intl.format(v.t.kALJ5u, { emphasisHook: o })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, t.jsx)(c.mzw, {
                children: (0, t.jsxs)(c.hE2, {
                    size: 'md',
                    justify: 'end',
                    children: [
                        (0, t.jsx)(c.zxk, {
                            variant: 'secondary',
                            text: v.intl.string(v.t['ETE/oK']),
                            onClick: i
                        }),
                        (0, t.jsx)(c.zxk, {
                            variant: 'primary',
                            text: v.intl.string(v.t.bEnlen),
                            onClick: r
                        })
                    ]
                })
            })
        ]
    });
}
function b(e) {
    var a;
    let { channel: l, selected: s, onChange: i } = e,
        r = null != (a = (0, x.KS)(l)) ? a : c.VL1,
        o = n.useCallback(() => {
            i(l);
        }, [l, i]);
    return (0, t.jsxs)(c.P3F, {
        'aria-label': l.name,
        'aria-checked': s,
        className: C.selectableChannelRow,
        onClick: o,
        children: [
            (0, t.jsxs)('div', {
                className: C.selectableChannelCellFirst,
                children: [
                    (0, t.jsx)(r, {
                        className: C.channelIcon,
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    (0, t.jsx)(c.Text, {
                        className: C.__invalid_channelName,
                        variant: 'text-md/medium',
                        color: 'text-default',
                        lineClamp: 1,
                        children: l.name
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: C.selectableChannelCellSecond,
                children: (0, t.jsx)(c.XZJ, {
                    type: c.XZJ.Types.INVERTED,
                    value: s,
                    displayOnly: !0
                })
            })
        ]
    });
}
function g(e) {
    let { transitionState: a, onClose: l, guildId: s, startingChannelId: d } = e,
        x = (0, r.Wu)([j.ZP], () => {
            var e, a;
            let l = j.ZP.getChannels(s);
            return (null != (e = l[j.sH]) ? e : [])
                .concat(null != (a = l[j.Zb]) ? a : [])
                .filter((e) => (0, m.Z)(e.channel))
                .map((e) => e.channel);
        }),
        [p, g] = n.useState(0),
        N = x.find((e) => e.id === d),
        [y, k] = n.useState(null != N ? [N] : []),
        _ = (0, u.Dt)(),
        T = y.length === x.length,
        z = n.useCallback(() => {
            g(1);
        }, [g]),
        E = n.useCallback(
            (e) => {
                k((a) => (a.includes(e) ? [...i().pull(a, e)] : [...a, e]));
            },
            [k]
        ),
        Z = n.useCallback(() => {
            T ? k([]) : k(x);
        }, [T, x, k]),
        A = n.useCallback(() => {
            y.forEach((e) => {
                let a = (0, h._A)(e, e.accessPermissions, !0);
                ((0, o.hw)(e.id, [a]), l());
            });
        }, [y, l]);
    return 0 === p
        ? (0, t.jsx)(c.Y0X, {
              transitionState: a,
              'aria-labelledby': _,
              size: c.CgR.SMALL,
              parentComponent: 'DeprivateModal',
              children: (0, t.jsx)(f, {
                  handleReviewPermissions: z,
                  onClose: l
              })
          })
        : (0, t.jsxs)(c.Y0X, {
              transitionState: a,
              'aria-labelledby': _,
              size: c.CgR.SMALL,
              parentComponent: 'DeprivateModal',
              children: [
                  (0, t.jsxs)(c.hzk, {
                      className: C.updateContent,
                      children: [
                          (0, t.jsxs)('div', {
                              className: C.modalHeader,
                              children: [
                                  (0, t.jsx)(c.X6q, {
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      children: v.intl.string(v.t.y77PiY)
                                  }),
                                  (0, t.jsx)(c.Text, {
                                      className: C.__invalid_modalSubheader,
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: v.intl.string(v.t.ZSzBe3)
                                  })
                              ]
                          }),
                          (0, t.jsxs)('div', {
                              className: C.selectAllContainer,
                              children: [
                                  (0, t.jsx)(c.Text, {
                                      className: C.selectAllTitle,
                                      variant: 'text-xs/semibold',
                                      color: 'text-muted',
                                      children: v.intl.format(v.t.rrYCq6, { count: x.length })
                                  }),
                                  (0, t.jsxs)(c.P3F, {
                                      'aria-label': v.intl.string(v.t.l4rqa2),
                                      className: C.selectAllButton,
                                      onClick: Z,
                                      children: [
                                          (0, t.jsx)(c.Text, {
                                              variant: 'text-xs/normal',
                                              children: v.intl.string(v.t.l4rqa2)
                                          }),
                                          (0, t.jsx)(c.XZJ, {
                                              size: 16,
                                              type: c.XZJ.Types.INVERTED,
                                              value: T,
                                              displayOnly: !0
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, t.jsx)('div', {
                              className: C.deprivateTableBody,
                              children: x.map((e) =>
                                  (0, t.jsx)(
                                      b,
                                      {
                                          channel: e,
                                          selected: y.includes(e),
                                          onChange: E
                                      },
                                      e.id
                                  )
                              )
                          }),
                          (0, t.jsx)('div', {
                              className: C.deprivateExplainer,
                              children: (0, t.jsx)(c.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-muted',
                                  children: v.intl.format(v.t['OP/pKi'], {
                                      emphasisHook: (e) =>
                                          (0, t.jsx)(c.Text, {
                                              tag: 'span',
                                              variant: 'text-xs/medium',
                                              color: 'interactive-active',
                                              children: e
                                          }),
                                      brandHook: (e) =>
                                          (0, t.jsx)(c.Text, {
                                              tag: 'span',
                                              variant: 'text-xs/normal',
                                              color: 'text-brand',
                                              children: e
                                          })
                                  })
                              })
                          })
                      ]
                  }),
                  (0, t.jsx)(c.mzw, {
                      className: C.modalFooter,
                      children: (0, t.jsxs)(c.hE2, {
                          size: 'md',
                          justify: 'end',
                          children: [
                              (0, t.jsx)(c.zxk, {
                                  variant: 'secondary',
                                  text: v.intl.string(v.t['ETE/oK']),
                                  onClick: l
                              }),
                              (0, t.jsx)(c.zxk, {
                                  variant: 'primary',
                                  text: v.intl.string(v.t.PggHmp),
                                  onClick: A,
                                  disabled: 0 === y.length
                              })
                          ]
                      })
                  })
              ]
          });
}
