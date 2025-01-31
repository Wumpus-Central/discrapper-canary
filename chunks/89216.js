a.d(l, { default: () => g }), a(47120);
var t = a(200651),
    n = a(192379),
    s = a(392711),
    i = a.n(s),
    r = a(442837),
    o = a(481060),
    c = a(741361),
    d = a(596454),
    m = a(447003),
    x = a(471445),
    h = a(605436),
    u = a(313201),
    j = a(633302),
    v = a(984933),
    p = a(388032),
    C = a(901701);
function f(e) {
    var l, n, s;
    let { onClose: i, handleReviewPermissions: r } = e,
        c = (e) =>
            (0, t.jsx)(o.Text, {
                tag: 'span',
                variant: 'text-md/medium',
                color: 'header-primary',
                children: e
            });
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(o.hzk, {
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
                            (0, t.jsx)(o.X6q, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                children: p.intl.string(p.t.PJOCLy)
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
                                        children: (0, t.jsx)(d.Z, { emojiName: null === (l = j.ZP.getByName('eyes')) || void 0 === l ? void 0 : l.surrogates })
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: p.intl.format(p.t['8JzOBg'], { emphasisHook: c })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: C.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: C.iconWrapper,
                                        children: (0, t.jsx)(d.Z, { emojiName: null === (n = j.ZP.getByName('star_struck')) || void 0 === n ? void 0 : n.surrogates })
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: p.intl.format(p.t.UcGDkp, { emphasisHook: c })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: C.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: C.iconWrapper,
                                        children: (0, t.jsx)(d.Z, { emojiName: null === (s = j.ZP.getByName('books')) || void 0 === s ? void 0 : s.surrogates })
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: p.intl.format(p.t.kALJ5u, { emphasisHook: c })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, t.jsxs)(o.mzw, {
                children: [
                    (0, t.jsx)(o.zxk, {
                        onClick: r,
                        children: (0, t.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'always-white',
                            children: p.intl.string(p.t.bEnlen)
                        })
                    }),
                    (0, t.jsx)(o.zxk, {
                        className: C.__invalid_modalCancel,
                        look: o.zxk.Looks.LINK,
                        color: o.zxk.Colors.PRIMARY,
                        onClick: i,
                        children: (0, t.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            children: p.intl.string(p.t['ETE/oK'])
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
        r = null !== (l = (0, x.KS)(a)) && void 0 !== l ? l : o.VL1,
        c = n.useCallback(() => {
            i(a);
        }, [a, i]);
    return (0, t.jsxs)(o.P3F, {
        'aria-label': a.name,
        'aria-checked': s,
        className: C.selectableChannelRow,
        onClick: c,
        children: [
            (0, t.jsxs)('div', {
                className: C.selectableChannelCellFirst,
                children: [
                    (0, t.jsx)(r, {
                        className: C.channelIcon,
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    (0, t.jsx)(o.Text, {
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
                children: (0, t.jsx)(o.XZJ, {
                    type: o.XZJ.Types.INVERTED,
                    value: s,
                    displayOnly: !0
                })
            })
        ]
    });
}
function g(e) {
    let { transitionState: l, onClose: a, guildId: s, startingChannelId: d } = e,
        x = (0, r.Wu)([v.ZP], () => {
            var e, l;
            let a = v.ZP.getChannels(s);
            return (null !== (e = a[v.sH]) && void 0 !== e ? e : [])
                .concat(null !== (l = a[v.Zb]) && void 0 !== l ? l : [])
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
                (0, c.hw)(e.id, [l]), a();
            });
        }, [N, a]);
    return 0 === j
        ? (0, t.jsx)(o.Y0X, {
              transitionState: l,
              'aria-labelledby': T,
              size: o.CgR.SMALL,
              children: (0, t.jsx)(f, {
                  handleReviewPermissions: z,
                  onClose: a
              })
          })
        : (0, t.jsxs)(o.Y0X, {
              transitionState: l,
              'aria-labelledby': T,
              size: o.CgR.SMALL,
              children: [
                  (0, t.jsxs)(o.hzk, {
                      className: C.updateContent,
                      children: [
                          (0, t.jsxs)('div', {
                              className: C.modalHeader,
                              children: [
                                  (0, t.jsx)(o.X6q, {
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      children: p.intl.string(p.t.y77PiY)
                                  }),
                                  (0, t.jsx)(o.Text, {
                                      className: C.__invalid_modalSubheader,
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: p.intl.string(p.t.ZSzBe3)
                                  })
                              ]
                          }),
                          (0, t.jsxs)('div', {
                              className: C.selectAllContainer,
                              children: [
                                  (0, t.jsx)(o.Text, {
                                      className: C.selectAllTitle,
                                      variant: 'text-xs/semibold',
                                      color: 'text-muted',
                                      children: p.intl.format(p.t.rrYCq6, { count: x.length })
                                  }),
                                  (0, t.jsxs)(o.P3F, {
                                      'aria-label': p.intl.string(p.t.l4rqa2),
                                      className: C.selectAllButton,
                                      onClick: L,
                                      children: [
                                          (0, t.jsx)(o.Text, {
                                              variant: 'text-xs/normal',
                                              children: p.intl.string(p.t.l4rqa2)
                                          }),
                                          (0, t.jsx)(o.XZJ, {
                                              size: 16,
                                              type: o.XZJ.Types.INVERTED,
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
                              children: (0, t.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-muted',
                                  children: p.intl.format(p.t['OP/pKi'], {
                                      emphasisHook: (e) =>
                                          (0, t.jsx)(o.Text, {
                                              tag: 'span',
                                              variant: 'text-xs/medium',
                                              color: 'interactive-active',
                                              children: e
                                          }),
                                      brandHook: (e) =>
                                          (0, t.jsx)(o.Text, {
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
                  (0, t.jsxs)(o.mzw, {
                      className: C.modalFooter,
                      children: [
                          (0, t.jsx)(o.zxk, {
                              disabled: 0 === N.length,
                              onClick: A,
                              children: (0, t.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  color: 'always-white',
                                  children: p.intl.string(p.t.PggHmp)
                              })
                          }),
                          (0, t.jsx)(o.zxk, {
                              look: o.zxk.Looks.LINK,
                              color: o.zxk.Colors.PRIMARY,
                              onClick: a,
                              children: (0, t.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  children: p.intl.string(p.t['ETE/oK'])
                              })
                          })
                      ]
                  })
              ]
          });
}
