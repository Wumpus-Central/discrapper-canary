l.d(a, { default: () => b }), l(47120);
var t = l(200651),
    s = l(192379),
    n = l(392711),
    i = l.n(n),
    r = l(442837),
    c = l(481060),
    o = l(741361),
    d = l(596454),
    m = l(447003),
    x = l(471445),
    h = l(605436),
    u = l(313201),
    j = l(633302),
    p = l(984933),
    v = l(388032),
    C = l(319337);
function N(e) {
    var a, s, n;
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
                                children: v.NW.string(v.t.PJOCLy)
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
                                        children: (0, t.jsx)(d.Z, { emojiName: null == (a = j.ZP.getByName('eyes')) ? void 0 : a.surrogates })
                                    }),
                                    (0, t.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: v.NW.format(v.t['8JzOBg'], { emphasisHook: o })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: C.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: C.iconWrapper,
                                        children: (0, t.jsx)(d.Z, { emojiName: null == (s = j.ZP.getByName('star_struck')) ? void 0 : s.surrogates })
                                    }),
                                    (0, t.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: v.NW.format(v.t.UcGDkp, { emphasisHook: o })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('li', {
                                className: C.infoListItem,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: C.iconWrapper,
                                        children: (0, t.jsx)(d.Z, { emojiName: null == (n = j.ZP.getByName('books')) ? void 0 : n.surrogates })
                                    }),
                                    (0, t.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: v.NW.format(v.t.kALJ5u, { emphasisHook: o })
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
                            children: v.NW.string(v.t.bEnlen)
                        })
                    }),
                    (0, t.jsx)(c.zxk, {
                        className: C.__invalid_modalCancel,
                        look: c.zxk.Looks.LINK,
                        color: c.zxk.Colors.PRIMARY,
                        onClick: i,
                        children: (0, t.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            children: v.NW.string(v.t['ETE/oK'])
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
        r = null != (a = (0, x.KS)(l)) ? a : c.VL1,
        o = s.useCallback(() => {
            i(l);
        }, [l, i]);
    return (0, t.jsxs)(c.P3F, {
        'aria-label': l.name,
        'aria-checked': n,
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
                        children: l.name
                    })
                ]
            }),
            (0, t.jsx)('div', {
                className: C.selectableChannelCellSecond,
                children: (0, t.jsx)(c.XZJ, {
                    type: c.XZJ.Types.INVERTED,
                    value: n,
                    displayOnly: !0
                })
            })
        ]
    });
}
function b(e) {
    let { transitionState: a, onClose: l, guildId: n, startingChannelId: d } = e,
        x = (0, r.Wu)([p.ZP], () => {
            var e, a;
            let l = p.ZP.getChannels(n);
            return (null != (e = l[p.sH]) ? e : [])
                .concat(null != (a = l[p.Zb]) ? a : [])
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
                (0, o.hw)(e.id, [a]), l();
            });
        }, [k, l]);
    return 0 === j
        ? (0, t.jsx)(c.Y0X, {
              transitionState: a,
              'aria-labelledby': T,
              size: c.CgR.SMALL,
              children: (0, t.jsx)(N, {
                  handleReviewPermissions: W,
                  onClose: l
              })
          })
        : (0, t.jsxs)(c.Y0X, {
              transitionState: a,
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
                                      children: v.NW.string(v.t.y77PiY)
                                  }),
                                  (0, t.jsx)(c.Text, {
                                      className: C.__invalid_modalSubheader,
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: v.NW.string(v.t.ZSzBe3)
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
                                      children: v.NW.format(v.t.rrYCq6, { count: x.length })
                                  }),
                                  (0, t.jsxs)(c.P3F, {
                                      'aria-label': v.NW.string(v.t.l4rqa2),
                                      className: C.selectAllButton,
                                      onClick: I,
                                      children: [
                                          (0, t.jsx)(c.Text, {
                                              variant: 'text-xs/normal',
                                              children: v.NW.string(v.t.l4rqa2)
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
                              children: (0, t.jsx)(c.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-muted',
                                  children: v.NW.format(v.t['OP/pKi'], {
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
                              disabled: 0 === k.length,
                              onClick: L,
                              children: (0, t.jsx)(c.Text, {
                                  variant: 'text-md/medium',
                                  color: 'always-white',
                                  children: v.NW.string(v.t.PggHmp)
                              })
                          }),
                          (0, t.jsx)(c.zxk, {
                              look: c.zxk.Looks.LINK,
                              color: c.zxk.Colors.PRIMARY,
                              onClick: l,
                              children: (0, t.jsx)(c.Text, {
                                  variant: 'text-md/medium',
                                  children: v.NW.string(v.t['ETE/oK'])
                              })
                          })
                      ]
                  })
              ]
          });
}
