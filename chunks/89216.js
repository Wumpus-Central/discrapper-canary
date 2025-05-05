a.d(l, { default: () => g }), a(388685);
var t = a(255367),
    n = a(73800),
    s = a(392711),
    i = a.n(s),
    r = a(442837),
    c = a(481060),
    o = a(741361),
    d = a(596454),
    m = a(447003),
    x = a(471445),
    h = a(605436),
    u = a(313201),
    j = a(633302),
    p = a(984933),
    v = a(388032),
    C = a(319337);
function f(e) {
    var l, n, s;
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
                                src: a(592614)
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
                                        children: (0, t.jsx)(d.Z, { emojiName: null == (l = j.ZP.getByName('eyes')) ? void 0 : l.surrogates })
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
                                        children: (0, t.jsx)(d.Z, { emojiName: null == (n = j.ZP.getByName('star_struck')) ? void 0 : n.surrogates })
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
                                        children: (0, t.jsx)(d.Z, { emojiName: null == (s = j.ZP.getByName('books')) ? void 0 : s.surrogates })
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
            (0, t.jsxs)(c.mzw, {
                children: [
                    (0, t.jsx)(c.zxk, {
                        onClick: r,
                        children: (0, t.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'always-white',
                            children: v.intl.string(v.t.bEnlen)
                        })
                    }),
                    (0, t.jsx)(c.zxk, {
                        className: C.__invalid_modalCancel,
                        look: c.zxk.Looks.LINK,
                        color: c.zxk.Colors.PRIMARY,
                        onClick: i,
                        children: (0, t.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            children: v.intl.string(v.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
}
function b(e) {
    var l;
    let { channel: a, selected: s, onChange: i } = e,
        r = null != (l = (0, x.KS)(a)) ? l : c.VL1,
        o = n.useCallback(() => {
            i(a);
        }, [a, i]);
    return (0, t.jsxs)(c.P3F, {
        'aria-label': a.name,
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
                        color: 'text-normal',
                        lineClamp: 1,
                        children: a.name
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
    let { transitionState: l, onClose: a, guildId: s, startingChannelId: d } = e,
        x = (0, r.Wu)([p.ZP], () => {
            var e, l;
            let a = p.ZP.getChannels(s);
            return (null != (e = a[p.sH]) ? e : [])
                .concat(null != (l = a[p.Zb]) ? l : [])
                .filter((e) => (0, m.Z)(e.channel))
                .map((e) => e.channel);
        }),
        [j, g] = n.useState(0),
        k = x.find((e) => e.id === d),
        [N, _] = n.useState(null != k ? [k] : []),
        T = (0, u.Dt)(),
        y = N.length === x.length,
        z = n.useCallback(() => {
            g(1);
        }, [g]),
        I = n.useCallback(
            (e) => {
                _((l) => (l.includes(e) ? [...i().pull(l, e)] : [...l, e]));
            },
            [_]
        ),
        L = n.useCallback(() => {
            y ? _([]) : _(x);
        }, [y, x, _]),
        A = n.useCallback(() => {
            N.forEach((e) => {
                let l = (0, h._A)(e, e.accessPermissions, !0);
                (0, o.hw)(e.id, [l]), a();
            });
        }, [N, a]);
    return 0 === j
        ? (0, t.jsx)(c.Y0X, {
              transitionState: l,
              'aria-labelledby': T,
              size: c.CgR.SMALL,
              children: (0, t.jsx)(f, {
                  handleReviewPermissions: z,
                  onClose: a
              })
          })
        : (0, t.jsxs)(c.Y0X, {
              transitionState: l,
              'aria-labelledby': T,
              size: c.CgR.SMALL,
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
                                      onClick: L,
                                      children: [
                                          (0, t.jsx)(c.Text, {
                                              variant: 'text-xs/normal',
                                              children: v.intl.string(v.t.l4rqa2)
                                          }),
                                          (0, t.jsx)(c.XZJ, {
                                              size: 16,
                                              type: c.XZJ.Types.INVERTED,
                                              value: y,
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
                                          selected: N.includes(e),
                                          onChange: I
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
                  (0, t.jsxs)(c.mzw, {
                      className: C.modalFooter,
                      children: [
                          (0, t.jsx)(c.zxk, {
                              disabled: 0 === N.length,
                              onClick: A,
                              children: (0, t.jsx)(c.Text, {
                                  variant: 'text-md/medium',
                                  color: 'always-white',
                                  children: v.intl.string(v.t.PggHmp)
                              })
                          }),
                          (0, t.jsx)(c.zxk, {
                              look: c.zxk.Looks.LINK,
                              color: c.zxk.Colors.PRIMARY,
                              onClick: a,
                              children: (0, t.jsx)(c.Text, {
                                  variant: 'text-md/medium',
                                  children: v.intl.string(v.t['ETE/oK'])
                              })
                          })
                      ]
                  })
              ]
          });
}
