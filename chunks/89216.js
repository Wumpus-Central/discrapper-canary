(a.d(l, { default: () => N }), a(388685));
var t = a(255367),
    n = a(73800),
    s = a(392711),
    i = a.n(s),
    r = a(442837),
    o = a(755721),
    c = a(481060),
    d = a(741361),
    m = a(596454),
    x = a(447003),
    h = a(471445),
    u = a(605436),
    p = a(313201),
    j = a(633302),
    v = a(984933),
    C = a(388032),
    f = a(319337);
function b(e) {
    var l, n, s;
    let { onClose: i, handleReviewPermissions: r } = e,
        d = (e) =>
            (0, t.jsx)(c.Text, {
                tag: 'span',
                variant: 'text-md/medium',
                color: 'header-primary',
                children: e
            });
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(c.hzk, {
                className: f.infoContent,
                children: [
                    (0, t.jsxs)('div', {
                        className: f.modalHeader,
                        children: [
                            (0, t.jsx)('img', {
                                className: f.modalImage,
                                'data-accessibility': 'desaturate',
                                alt: '',
                                src: a(592614)
                            }),
                            (0, t.jsx)(c.X6q, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                children: C.intl.string(C.t.PJOCLy)
                            })
                        ]
                    }),
                    (0, t.jsxs)('ul', {
                        children: [
                            (0, t.jsxs)('li', {
                                className: f.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: f.iconWrapper,
                                        children: (0, t.jsx)(m.Z, { emojiName: null == (l = j.ZP.getByName('eyes')) ? void 0 : l.surrogates })
                                    }),
                                    (0, t.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: C.intl.format(C.t['8JzOBg'], { emphasisHook: d })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: f.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: f.iconWrapper,
                                        children: (0, t.jsx)(m.Z, { emojiName: null == (n = j.ZP.getByName('star_struck')) ? void 0 : n.surrogates })
                                    }),
                                    (0, t.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: C.intl.format(C.t.UcGDkp, { emphasisHook: d })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: f.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: f.iconWrapper,
                                        children: (0, t.jsx)(m.Z, { emojiName: null == (s = j.ZP.getByName('books')) ? void 0 : s.surrogates })
                                    }),
                                    (0, t.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: C.intl.format(C.t.kALJ5u, { emphasisHook: d })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, t.jsxs)(c.mzw, {
                children: [
                    (0, t.jsx)(o.zx, {
                        onClick: r,
                        children: (0, t.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'always-white',
                            children: C.intl.string(C.t.bEnlen)
                        })
                    }),
                    (0, t.jsx)(o.zx, {
                        className: f.__invalid_modalCancel,
                        look: o.zx.Looks.LINK,
                        color: o.zx.Colors.PRIMARY,
                        onClick: i,
                        children: (0, t.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            children: C.intl.string(C.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
}
function g(e) {
    var l;
    let { channel: a, selected: s, onChange: i } = e,
        r = null != (l = (0, h.KS)(a)) ? l : c.VL1,
        o = n.useCallback(() => {
            i(a);
        }, [a, i]);
    return (0, t.jsxs)(c.P3F, {
        'aria-label': a.name,
        'aria-checked': s,
        className: f.selectableChannelRow,
        onClick: o,
        children: [
            (0, t.jsxs)('div', {
                className: f.selectableChannelCellFirst,
                children: [
                    (0, t.jsx)(r, {
                        className: f.channelIcon,
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    (0, t.jsx)(c.Text, {
                        className: f.__invalid_channelName,
                        variant: 'text-md/medium',
                        color: 'text-default',
                        lineClamp: 1,
                        children: a.name
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: f.selectableChannelCellSecond,
                children: (0, t.jsx)(c.XZJ, {
                    type: c.XZJ.Types.INVERTED,
                    value: s,
                    displayOnly: !0
                })
            })
        ]
    });
}
function N(e) {
    let { transitionState: l, onClose: a, guildId: s, startingChannelId: m } = e,
        h = (0, r.Wu)([v.ZP], () => {
            var e, l;
            let a = v.ZP.getChannels(s);
            return (null != (e = a[v.sH]) ? e : [])
                .concat(null != (l = a[v.Zb]) ? l : [])
                .filter((e) => (0, x.Z)(e.channel))
                .map((e) => e.channel);
        }),
        [j, N] = n.useState(0),
        _ = h.find((e) => e.id === m),
        [k, T] = n.useState(null != _ ? [_] : []),
        y = (0, p.Dt)(),
        z = k.length === h.length,
        I = n.useCallback(() => {
            N(1);
        }, [N]),
        L = n.useCallback(
            (e) => {
                T((l) => (l.includes(e) ? [...i().pull(l, e)] : [...l, e]));
            },
            [T]
        ),
        A = n.useCallback(() => {
            z ? T([]) : T(h);
        }, [z, h, T]),
        P = n.useCallback(() => {
            k.forEach((e) => {
                let l = (0, u._A)(e, e.accessPermissions, !0);
                ((0, d.hw)(e.id, [l]), a());
            });
        }, [k, a]);
    return 0 === j
        ? (0, t.jsx)(c.Y0X, {
              transitionState: l,
              'aria-labelledby': y,
              size: c.CgR.SMALL,
              parentComponent: 'DeprivateModal',
              children: (0, t.jsx)(b, {
                  handleReviewPermissions: I,
                  onClose: a
              })
          })
        : (0, t.jsxs)(c.Y0X, {
              transitionState: l,
              'aria-labelledby': y,
              size: c.CgR.SMALL,
              parentComponent: 'DeprivateModal',
              children: [
                  (0, t.jsxs)(c.hzk, {
                      className: f.updateContent,
                      children: [
                          (0, t.jsxs)('div', {
                              className: f.modalHeader,
                              children: [
                                  (0, t.jsx)(c.X6q, {
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      children: C.intl.string(C.t.y77PiY)
                                  }),
                                  (0, t.jsx)(c.Text, {
                                      className: f.__invalid_modalSubheader,
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: C.intl.string(C.t.ZSzBe3)
                                  })
                              ]
                          }),
                          (0, t.jsxs)('div', {
                              className: f.selectAllContainer,
                              children: [
                                  (0, t.jsx)(c.Text, {
                                      className: f.selectAllTitle,
                                      variant: 'text-xs/semibold',
                                      color: 'text-muted',
                                      children: C.intl.format(C.t.rrYCq6, { count: h.length })
                                  }),
                                  (0, t.jsxs)(c.P3F, {
                                      'aria-label': C.intl.string(C.t.l4rqa2),
                                      className: f.selectAllButton,
                                      onClick: A,
                                      children: [
                                          (0, t.jsx)(c.Text, {
                                              variant: 'text-xs/normal',
                                              children: C.intl.string(C.t.l4rqa2)
                                          }),
                                          (0, t.jsx)(c.XZJ, {
                                              size: 16,
                                              type: c.XZJ.Types.INVERTED,
                                              value: z,
                                              displayOnly: !0
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, t.jsx)('div', {
                              className: f.deprivateTableBody,
                              children: h.map((e) =>
                                  (0, t.jsx)(
                                      g,
                                      {
                                          channel: e,
                                          selected: k.includes(e),
                                          onChange: L
                                      },
                                      e.id
                                  )
                              )
                          }),
                          (0, t.jsx)('div', {
                              className: f.deprivateExplainer,
                              children: (0, t.jsx)(c.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-muted',
                                  children: C.intl.format(C.t['OP/pKi'], {
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
                  (0, t.jsxs)(c.mzw, {
                      className: f.modalFooter,
                      children: [
                          (0, t.jsx)(o.zx, {
                              disabled: 0 === k.length,
                              onClick: P,
                              children: (0, t.jsx)(c.Text, {
                                  variant: 'text-md/medium',
                                  color: 'always-white',
                                  children: C.intl.string(C.t.PggHmp)
                              })
                          }),
                          (0, t.jsx)(o.zx, {
                              look: o.zx.Looks.LINK,
                              color: o.zx.Colors.PRIMARY,
                              onClick: a,
                              children: (0, t.jsx)(c.Text, {
                                  variant: 'text-md/medium',
                                  children: C.intl.string(C.t['ETE/oK'])
                              })
                          })
                      ]
                  })
              ]
          });
}
