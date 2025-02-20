l.d(a, { default: () => b }), l(47120);
var t = l(200651),
    s = l(192379),
    n = l(392711),
    i = l.n(n),
    r = l(442837),
    o = l(481060),
    c = l(741361),
    d = l(596454),
    m = l(447003),
    x = l(471445),
    h = l(605436),
    u = l(313201),
    j = l(633302),
    v = l(984933),
    p = l(388032),
    C = l(539008);
function N(e) {
    var a, s, n;
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
                                src: l(592614)
                            }),
                            (0, t.jsx)(o.X6q, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                children: p.NW.string(p.t.PJOCLy)
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
                                        children: (0, t.jsx)(d.Z, { emojiName: null === (a = j.ZP.getByName('eyes')) || void 0 === a ? void 0 : a.surrogates })
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: p.NW.format(p.t['8JzOBg'], { emphasisHook: c })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: C.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: C.iconWrapper,
                                        children: (0, t.jsx)(d.Z, { emojiName: null === (s = j.ZP.getByName('star_struck')) || void 0 === s ? void 0 : s.surrogates })
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: p.NW.format(p.t.UcGDkp, { emphasisHook: c })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: C.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: C.iconWrapper,
                                        children: (0, t.jsx)(d.Z, { emojiName: null === (n = j.ZP.getByName('books')) || void 0 === n ? void 0 : n.surrogates })
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: p.NW.format(p.t.kALJ5u, { emphasisHook: c })
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
                            children: p.NW.string(p.t.bEnlen)
                        })
                    }),
                    (0, t.jsx)(o.zxk, {
                        className: C.__invalid_modalCancel,
                        look: o.zxk.Looks.LINK,
                        color: o.zxk.Colors.PRIMARY,
                        onClick: i,
                        children: (0, t.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            children: p.NW.string(p.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
}
function f(e) {
    var a;
    let { channel: l, selected: n, onChange: i } = e,
        r = null !== (a = (0, x.KS)(l)) && void 0 !== a ? a : o.VL1,
        c = s.useCallback(() => {
            i(l);
        }, [l, i]);
    return (0, t.jsxs)(o.P3F, {
        'aria-label': l.name,
        'aria-checked': n,
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
                        children: l.name
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: C.selectableChannelCellSecond,
                children: (0, t.jsx)(o.XZJ, {
                    type: o.XZJ.Types.INVERTED,
                    value: n,
                    displayOnly: !0
                })
            })
        ]
    });
}
function b(e) {
    let { transitionState: a, onClose: l, guildId: n, startingChannelId: d } = e,
        x = (0, r.Wu)([v.ZP], () => {
            var e, a;
            let l = v.ZP.getChannels(n);
            return (null !== (e = l[v.sH]) && void 0 !== e ? e : [])
                .concat(null !== (a = l[v.Zb]) && void 0 !== a ? a : [])
                .filter((e) => (0, m.Z)(e.channel))
                .map((e) => e.channel);
        }),
        [j, b] = s.useState(0),
        g = x.find((e) => e.id === d),
        [k, _] = s.useState(null != g ? [g] : []),
        T = (0, u.Dt)(),
        y = k.length === x.length,
        W = s.useCallback(() => {
            b(1);
        }, [b]),
        z = s.useCallback(
            (e) => {
                _((a) => (a.includes(e) ? [...i().pull(a, e)] : [...a, e]));
            },
            [_]
        ),
        I = s.useCallback(() => {
            y ? _([]) : _(x);
        }, [y, x, _]),
        L = s.useCallback(() => {
            k.forEach((e) => {
                let a = (0, h._A)(e, e.accessPermissions, !0);
                (0, c.hw)(e.id, [a]), l();
            });
        }, [k, l]);
    return 0 === j
        ? (0, t.jsx)(o.Y0X, {
              transitionState: a,
              'aria-labelledby': T,
              size: o.CgR.SMALL,
              children: (0, t.jsx)(N, {
                  handleReviewPermissions: W,
                  onClose: l
              })
          })
        : (0, t.jsxs)(o.Y0X, {
              transitionState: a,
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
                                      children: p.NW.string(p.t.y77PiY)
                                  }),
                                  (0, t.jsx)(o.Text, {
                                      className: C.__invalid_modalSubheader,
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: p.NW.string(p.t.ZSzBe3)
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
                                      children: p.NW.format(p.t.rrYCq6, { count: x.length })
                                  }),
                                  (0, t.jsxs)(o.P3F, {
                                      'aria-label': p.NW.string(p.t.l4rqa2),
                                      className: C.selectAllButton,
                                      onClick: I,
                                      children: [
                                          (0, t.jsx)(o.Text, {
                                              variant: 'text-xs/normal',
                                              children: p.NW.string(p.t.l4rqa2)
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
                                      f,
                                      {
                                          channel: e,
                                          selected: k.includes(e),
                                          onChange: z
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
                                  children: p.NW.format(p.t['OP/pKi'], {
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
                              disabled: 0 === k.length,
                              onClick: L,
                              children: (0, t.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  color: 'always-white',
                                  children: p.NW.string(p.t.PggHmp)
                              })
                          }),
                          (0, t.jsx)(o.zxk, {
                              look: o.zxk.Looks.LINK,
                              color: o.zxk.Colors.PRIMARY,
                              onClick: l,
                              children: (0, t.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  children: p.NW.string(p.t['ETE/oK'])
                              })
                          })
                      ]
                  })
              ]
          });
}
