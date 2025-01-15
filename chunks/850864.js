n.d(t, {
    T: function () {
        return el;
    },
    Z: function () {
        return ei;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(399606),
    o = n(780384),
    c = n(481060),
    d = n(852860),
    u = n(367907),
    m = n(471445),
    h = n(603211),
    g = n(710344),
    x = n(807582),
    p = n(26323),
    f = n(307707),
    C = n(734893),
    v = n(216701),
    I = n(150512),
    N = n(516129),
    _ = n(813197),
    T = n(210887),
    j = n(314897),
    b = n(592125),
    E = n(984933),
    S = n(430824),
    R = n(709586),
    y = n(768581),
    A = n(700785),
    Z = n(434404),
    L = n(999382),
    D = n(8426),
    O = n(969632),
    M = n(535907),
    P = n(981631),
    k = n(30513),
    w = n(486324),
    B = n(200299),
    U = n(388032),
    G = n(593487),
    F = n(91716),
    H = n(470264),
    z = n(710043),
    V = n(847950);
function W(e) {
    let { guildId: t, welcomeMessage: l } = e,
        o = r.useCallback(() => {
            if (null != t)
                return (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('36371').then(n.bind(n, 893626));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            welcomeMessage: l,
                            onSave: (e) => (0, D._N)(e)
                        });
                });
        }, [t, l]),
        d = (0, a.e7)([j.default], () => j.default.getId());
    return (0, C.pw)(l)
        ? (0, i.jsx)(c.Button, {
              size: c.Button.Sizes.SMALL,
              onClick: o,
              children: (0, i.jsx)(c.Text, {
                  variant: 'text-sm/medium',
                  children: U.intl.string(U.t['9Z+aEB'])
              })
          })
        : (0, i.jsxs)(c.Clickable, {
              className: G.editWelcomeSection,
              onClick: o,
              children: [
                  (0, i.jsx)(I.Z, {
                      guildId: t,
                      welcomeMessage: {
                          authorIds: l.authorIds.length > 0 ? l.authorIds : [d],
                          message: l.message
                      }
                  }),
                  (0, i.jsx)(c.Tooltip, {
                      text: U.intl.string(U.t.bt75u7),
                      children: (e) =>
                          (0, i.jsxs)('div', {
                              ...e,
                              className: s()(G.actionItemEditButton, G.editWelcomeButton),
                              children: [
                                  (0, i.jsx)(c.PencilIcon, {
                                      size: 'md',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(c.HiddenVisually, { children: U.intl.string(U.t.bt75u7) })
                              ]
                          })
                  })
              ]
          });
}
function Y(e) {
    var t, l, o, d, u;
    let { guildId: g, action: x, actionIndex: p, onChange: I, onDelete: N, onDragStart: _, onDragComplete: T, onDragReset: j } = e,
        E = (0, a.e7)([b.Z], () => b.Z.getChannel(x.channelId)),
        R = (0, a.e7)([S.Z], () => S.Z.getGuild(g)),
        { customEmoji: A, unicodeEmoji: Z } = (0, f.Z)(null === (t = x.emoji) || void 0 === t ? void 0 : t.id, null === (l = x.emoji) || void 0 === l ? void 0 : l.name),
        L = null == x.emoji || null != A || null != Z,
        D = y.ZP.getNewMemberActionIconURL({
            channelId: x.channelId,
            icon: x.icon
        }),
        O = null;
    null != E && (0, C.kb)(E) ? !L && (O = U.intl.string(U.t.wAkIZW)) : (O = U.intl.string(U.t.CbTEKC));
    let {
            drag: M,
            dragSourcePosition: P,
            drop: k,
            setIsDraggable: w
        } = (0, h.Z)({
            type: 'NEW_MEMBER_ACTION',
            index: p,
            optionId: x.channelId,
            onDragStart: _,
            onDragComplete: T,
            onDragReset: j
        }),
        B = r.useCallback(() => {
            if (null != g)
                return (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('14653').then(n.bind(n, 380716));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guildId: g,
                            action: x,
                            onSave: (e, t, n) => I(p, e, t, n),
                            onDelete: () => N(p)
                        });
                });
        }, [g, x, p, I, N]);
    if (null == E || null == R) return null;
    let F = null !== (u = (0, m.KS)(E)) && void 0 !== u ? u : c.TextIcon;
    return (0, i.jsxs)('div', {
        className: s()(G.actionItemContainer),
        children: [
            (0, i.jsxs)('div', {
                className: s()(G.actionItem, {
                    [G.dropIndicatorBefore]: null != P && p < P,
                    [G.dropIndicatorAfter]: null != P && p > P,
                    [G.actionItemError]: null != O
                }),
                ref: (e) => M(k(e)),
                children: [
                    (0, i.jsx)('div', {
                        className: G.dragContainer,
                        onMouseEnter: () => w(!0),
                        onMouseLeave: () => w(!1),
                        children: (0, i.jsx)(c.DragIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: G.dragIcon
                        })
                    }),
                    null != D
                        ? (0, i.jsx)('div', {
                              className: G.iconWrapper,
                              children: (0, i.jsx)('img', {
                                  src: D,
                                  className: G.icon,
                                  width: 48,
                                  height: 48,
                                  alt: '',
                                  'aria-hidden': !0
                              })
                          })
                        : (0, i.jsx)('div', {
                              className: G.actionItemEmojiWrapper,
                              children: (0, i.jsx)(v.Z, {
                                  emojiId: null === (o = x.emoji) || void 0 === o ? void 0 : o.id,
                                  emojiName: null === (d = x.emoji) || void 0 === d ? void 0 : d.name,
                                  size: v.R.MEDIUM,
                                  defaultComponent: (0, i.jsx)(F, {})
                              })
                          }),
                    (0, i.jsxs)('div', {
                        className: G.actionItemText,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: x.title
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                children: U.intl.format(U.t.Ngk8Nj, { channelName: E.name })
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Tooltip, {
                        text: U.intl.string(U.t.bt75u7),
                        children: (e) =>
                            (0, i.jsxs)(c.Button, {
                                ...e,
                                className: G.actionItemEditButton,
                                innerClassName: G.actionItemEditButtonInner,
                                size: c.Button.Sizes.MIN,
                                onClick: B,
                                children: [
                                    (0, i.jsx)(c.PencilIcon, {
                                        size: 'md',
                                        color: 'currentColor'
                                    }),
                                    (0, i.jsx)(c.HiddenVisually, { children: U.intl.string(U.t.bt75u7) })
                                ]
                            })
                    })
                ]
            }),
            null != O &&
                (0, i.jsx)(c.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-danger',
                    children: O
                })
        ]
    });
}
function K(e) {
    let { guildId: t } = e,
        n = (0, a.Wu)([O.Z], () => {
            var e;
            return null !== (e = O.Z.getSettings().newMemberActions) && void 0 !== e ? e : [];
        }),
        l = r.useCallback(
            (e, n) => {
                if (null == t) return;
                (0, D.vR)(e);
                let i = O.Z.getSettings();
                if (null == i) return;
                let { channelId: r } = e;
                (0, D.oo)(t, i, !0).then(() => {
                    null != n && (0, D.ad)(t, r, n, !0);
                });
            },
            [t]
        ),
        s = r.useCallback(
            (e, i, r, l) => {
                var s;
                if (null == t) return;
                let a = null === (s = n[e]) || void 0 === s ? void 0 : s.channelId;
                if (null == a) return;
                let o = O.Z.getSettings();
                null != o &&
                    ((0, D.el)(a, i),
                    (0, D.oo)(t, o, !0).then(() => {
                        (0, D.ad)(t, a, r, l);
                    }));
            },
            [n, t]
        ),
        o = r.useCallback(
            (e) => {
                var t;
                let i = null === (t = n[e]) || void 0 === t ? void 0 : t.channelId;
                null != i && (0, D.Hr)(i);
            },
            [n]
        ),
        c = n.map((e) => ({
            ...e,
            id: e.channelId
        })),
        d = r.useCallback(
            (e) => {
                if (null == t) return;
                (0, D.hS)(e);
                let n = O.Z.getSettings();
                null != n && (0, D.oo)(t, n, !0);
            },
            [t]
        ),
        { handleDragStart: u, handleDragReset: m, handleDragComplete: h } = (0, g.Z)(c, d);
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: G.section,
              children: [
                  n.map((e, n) =>
                      (0, i.jsx)(
                          Y,
                          {
                              guildId: t,
                              action: e,
                              actionIndex: n,
                              onChange: s,
                              onDelete: o,
                              onDragStart: u,
                              onDragReset: m,
                              onDragComplete: h
                          },
                          e.channelId
                      )
                  ),
                  (0, i.jsx)(q, {}),
                  n.length < C.O9 &&
                      (0, i.jsx)(X, {
                          guildId: t,
                          onAddAction: l
                      })
              ]
          });
}
function q() {
    return (0, i.jsx)('div', {
        className: G.actionItemContainer,
        children: (0, i.jsxs)('div', {
            className: G.actionItem,
            children: [
                (0, i.jsx)('div', {
                    className: G.actionItemEmojiWrapper,
                    children: (0, i.jsx)(c.BookCheckIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 22
                    })
                }),
                (0, i.jsx)('div', {
                    className: G.actionItemText,
                    children: (0, i.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: U.intl.string(U.t['K/i3iY'])
                    })
                })
            ]
        })
    });
}
function X(e) {
    let { guildId: t, onAddAction: l } = e,
        s = r.useCallback(() => {
            if (null != t)
                return (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('14653').then(n.bind(n, 380716));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            onSave: l
                        });
                });
        }, [t, l]);
    return (0, i.jsxs)(c.Clickable, {
        className: G.addActionItem,
        onClick: s,
        children: [
            (0, i.jsx)(c.CirclePlusIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: U.intl.string(U.t.qce3EB)
            })
        ]
    });
}
function Q() {
    return (0, i.jsxs)('div', {
        className: G.badExample,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'eyebrow',
                color: 'header-secondary',
                children: U.intl.string(U.t.MjVwl5)
            }),
            (0, i.jsxs)('div', {
                className: G.example,
                children: [
                    (0, i.jsx)('div', {
                        className: G.badExampleIcon,
                        children: (0, i.jsx)(c.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: U.intl.string(U.t.wyARg4)
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: U.intl.string(U.t.lhsK1d)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function J(e) {
    var t;
    let { guildId: l } = e,
        s = (0, a.e7)([S.Z], () => S.Z.getGuild(l)),
        o = null !== (t = null == s ? void 0 : s.hasFeature(P.oNc.BANNER)) && void 0 !== t && t,
        d = r.useCallback(
            (e, t) => {
                if (null != l) {
                    if (null == e || void 0 === t) {
                        Z.Z.saveGuild(l, { homeHeader: null });
                        return;
                    }
                    (0, c.openModalLazy)(async () => {
                        let { default: r } = await Promise.all([n.e('70687'), n.e('48017'), n.e('36343')]).then(n.bind(n, 850085));
                        return (n) =>
                            (0, i.jsx)(r, {
                                imgURI: e,
                                file: t,
                                onCrop: (e) => Z.Z.saveGuild(l, { homeHeader: e }),
                                uploadType: w.pC.HOME_HEADER,
                                ...n
                            });
                    });
                }
            },
            [l]
        ),
        m = r.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    null != s &&
                        ((0, u.yw)(P.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                            location: {
                                section: P.jXE.GUILD_SETTINGS_ONBOARDING,
                                object: P.qAy.LEARN_MORE
                            },
                            guild_id: null == s ? void 0 : s.id,
                            location_stack: []
                        }),
                        (0, p.Z)({
                            analyticsLocations: [],
                            analyticsSourceLocation: {
                                section: P.jXE.GUILD_SETTINGS_ONBOARDING,
                                object: P.qAy.ONBOARDING_EDIT,
                                page: P.ZY5.GUILD_SETTINGS
                            },
                            guild: s,
                            perks: (0, k.XO)()
                        }));
            },
            [s]
        );
    if (null == s) return null;
    let h = (0, i.jsx)(N.Z, {
        image: s.homeHeader,
        makeURL: (e) =>
            null != e
                ? y.ZP.getGuildHomeHeaderURL({
                      id: s.id,
                      homeHeader: e
                  })
                : null,
        disabled: !o,
        onChange: d,
        hint: U.intl.string(U.t.NyXznp),
        enabled: o,
        maxFileSizeBytes: B.B
    });
    return o
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: G.sectionHeader,
                      children: [
                          (0, i.jsx)(c.Heading, {
                              className: G.header,
                              variant: 'heading-lg/extrabold',
                              children: U.intl.string(U.t.BBj1nZ)
                          }),
                          (0, i.jsx)(x.Z, {
                              className: G.boostIndicator,
                              guild: s,
                              guildFeature: P.oNc.BANNER,
                              onClick: m
                          })
                      ]
                  }),
                  (0, i.jsxs)('div', {
                      className: G.section,
                      children: [
                          (0, i.jsxs)('div', {
                              className: G.homeBannerExplainer,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: U.intl.string(U.t.Vwintr)
                                  }),
                                  (0, i.jsxs)(c.Button, {
                                      color: c.ButtonColors.BRAND,
                                      className: G.uploadButton,
                                      children: [
                                          U.intl.string(U.t.yG2pUl),
                                          (0, i.jsx)(_.ZP, {
                                              onChange: d,
                                              maxFileSizeBytes: B.B
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', { children: h })
                      ]
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: G.sectionHeader,
                      children: [
                          (0, i.jsx)(c.Heading, {
                              className: G.header,
                              variant: 'heading-lg/extrabold',
                              children: U.intl.string(U.t.BBj1nZ)
                          }),
                          (0, i.jsx)(x.Z, {
                              className: G.boostIndicator,
                              guild: s,
                              guildFeature: P.oNc.BANNER,
                              onClick: m
                          })
                      ]
                  }),
                  (0, i.jsxs)('div', {
                      className: G.section,
                      children: [
                          (0, i.jsxs)('div', {
                              className: G.homeBannerExplainer,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'header-secondary',
                                      children: U.intl.string(U.t.Vwintr)
                                  }),
                                  (0, i.jsxs)(c.ShinyButton, {
                                      className: G.upsellButton,
                                      innerClassName: G.upsellButtonInner,
                                      color: c.Button.Colors.GREEN,
                                      onClick: m,
                                      children: [
                                          (0, i.jsx)(R.Z, {
                                              height: 16,
                                              width: 16
                                          }),
                                          (0, i.jsx)(c.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'text-normal',
                                              children: U.intl.string(U.t['+7XY39'])
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              children: (0, i.jsx)(c.Clickable, {
                                  'aria-hidden': !0,
                                  tabIndex: -1,
                                  onClick: m,
                                  children: h
                              })
                          })
                      ]
                  })
              ]
          });
}
function $(e) {
    let { guildId: t, resourceChannel: l, index: o, onDragComplete: d, onDragStart: u, onDragReset: m } = e,
        g = (0, a.e7)([S.Z], () => S.Z.getGuild(t)),
        { title: x, channelId: p, description: f } = l,
        v = b.Z.getChannel(p),
        I = null;
    (null == v || !(0, C.k3)(v)) && (I = U.intl.string(U.t.kTdL8f));
    let N = null == f || 0 === f.length,
        _ = y.ZP.getResourceChannelIconURL({
            channelId: l.channelId,
            icon: l.icon
        }),
        {
            drag: T,
            dragSourcePosition: j,
            drop: E,
            setIsDraggable: R
        } = (0, h.Z)({
            type: 'RESOURCE_CHANNEL',
            optionId: l.channelId,
            index: o,
            onDragStart: u,
            onDragComplete: d,
            onDragReset: m
        }),
        A = r.useCallback(
            (e) => {
                (0, D.XG)(l.channelId, e);
            },
            [l.channelId]
        ),
        Z = r.useCallback(
            (e, n) => {
                if (null == t) return;
                let i = O.Z.getSettings();
                null != i &&
                    ((0, D.XG)(l.channelId, e),
                    (0, D.oo)(t, i).then(() => {
                        (0, D.mM)(t, e.channelId, n);
                    }));
            },
            [t, l]
        ),
        L = r.useCallback(() => {
            if (null != t)
                return (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('84725').then(n.bind(n, 462499));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            resourceChannel: l,
                            onSave: A,
                            onDelete: () => (0, D.Hz)(l.channelId),
                            onIconUpload: Z
                        });
                });
        }, [t, l, A, Z]);
    return null == g || null == v
        ? null
        : (0, i.jsxs)('div', {
              className: s()(G.resourceChannelContainer),
              children: [
                  (0, i.jsxs)('div', {
                      className: s()(G.resourceChannel, {
                          [G.dropIndicatorBefore]: null != j && o < j,
                          [G.dropIndicatorAfter]: null != j && o > j,
                          [G.resourceChannelError]: null != I
                      }),
                      ref: (e) => T(E(e)),
                      children: [
                          (0, i.jsx)('div', {
                              className: G.dragContainer,
                              onMouseEnter: () => R(!0),
                              onMouseLeave: () => R(!1),
                              children: (0, i.jsx)(c.DragIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: G.dragIcon
                              })
                          }),
                          null != _ &&
                              (0, i.jsx)('div', {
                                  className: G.iconWrapper,
                                  children: (0, i.jsx)('img', {
                                      src: _,
                                      className: G.icon,
                                      width: 32,
                                      height: 32,
                                      alt: '',
                                      'aria-hidden': !0
                                  })
                              }),
                          (0, i.jsxs)('div', {
                              className: G.resourceChannelContent,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      className: G.resourceChannelTitle,
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: x
                                  }),
                                  !N &&
                                      (0, i.jsx)(c.Text, {
                                          className: G.resourceChannelDescription,
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          lineClamp: 1,
                                          children: f
                                      })
                              ]
                          }),
                          (0, i.jsx)(c.Tooltip, {
                              text: U.intl.string(U.t.bt75u7),
                              children: (e) =>
                                  (0, i.jsxs)(c.Button, {
                                      ...e,
                                      className: G.resourceChannelEditButton,
                                      innerClassName: G.resourceChannelEditButtonInner,
                                      size: c.Button.Sizes.MIN,
                                      onClick: L,
                                      children: [
                                          (0, i.jsx)(c.PencilIcon, {
                                              size: 'md',
                                              color: 'currentColor'
                                          }),
                                          (0, i.jsx)(c.HiddenVisually, { children: U.intl.string(U.t.bt75u7) })
                                      ]
                                  })
                          })
                      ]
                  }),
                  null != I &&
                      (0, i.jsx)(c.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-danger',
                          children: I
                      })
              ]
          });
}
function ee(e) {
    var t;
    let { channel: n, isLast: l } = e,
        s = r.useCallback(() => {
            (0, D.r2)({
                channelId: n.id,
                title: n.name,
                description: '',
                emoji: null,
                icon: null
            });
        }, [n]),
        a = null !== (t = (0, m.KS)(n)) && void 0 !== t ? t : c.TextIcon;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: G.suggestedChannel,
                children: [
                    (0, i.jsx)(a, { className: G.suggestedChannelIcon }),
                    (0, i.jsx)(c.Text, {
                        className: G.suggestedChannelText,
                        variant: 'text-sm/normal',
                        children: n.name
                    }),
                    (0, i.jsx)(c.Button, {
                        className: G.suggestedChannelButton,
                        size: c.Button.Sizes.MIN,
                        onClick: s,
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/semibold',
                            color: 'always-white',
                            children: U.intl.string(U.t.OYkgVl)
                        })
                    })
                ]
            }),
            l && (0, i.jsx)('div', { className: G.suggestedSeparator })
        ]
    });
}
function et(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([S.Z], () => S.Z.getGuild(t)),
        l = (0, a.Wu)([O.Z], () => {
            var e, t;
            return null !== (t = null === (e = O.Z.getSettings().resourceChannels) || void 0 === e ? void 0 : e.map((e) => e.channelId)) && void 0 !== t ? t : [];
        }),
        s = (0, a.Wu)([O.Z], () => O.Z.getDismissedSuggestedChannelIds(t)),
        o = (0, a.e7)([E.ZP], () => (null == t ? [] : E.ZP.getSelectableChannels(t)))
            .filter((e) => !s.includes(e.channel.id) && !l.includes(e.channel.id) && e.channel.type === P.d4z.GUILD_TEXT && A.Uu(P.Plq.VIEW_CHANNEL, e.channel) && !A.Uu(P.Plq.SEND_MESSAGES, e.channel) && e.channel.id !== (null == n ? void 0 : n.rulesChannelId))
            .slice(0, 5),
        d = r.useCallback(() => {
            let e = o.map((e) => e.channel.id);
            (0, D.q6)(t, e);
        }, [t, o]);
    return o.length <= 0 || l.length >= C.x3
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: G.suggestedChannelsSection,
                      children: [
                          (0, i.jsx)(c.Text, {
                              variant: 'text-md/semibold',
                              children: U.intl.string(U.t.WThgAQ)
                          }),
                          (0, i.jsxs)('div', {
                              className: G.suggestedChannelsHeader,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-muted',
                                      children: U.intl.string(U.t.YtNI8P)
                                  }),
                                  (0, i.jsxs)(c.Clickable, {
                                      className: G.suggestedChannelsDismiss,
                                      onClick: d,
                                      children: [
                                          (0, i.jsx)(c.CheckmarkLargeIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: G.suggestedChannelsDismissCheck
                                          }),
                                          (0, i.jsx)(c.Text, {
                                              variant: 'text-xs/semibold',
                                              color: 'text-brand',
                                              children: U.intl.string(U.t.aLqZTk)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: G.suggestedChannels,
                              children: o.map((e, t) =>
                                  (0, i.jsx)(
                                      ee,
                                      {
                                          channel: e.channel,
                                          isLast: t < o.length - 1
                                      },
                                      e.channel.id
                                  )
                              )
                          })
                      ]
                  }),
                  (0, i.jsx)('div', { className: G.sectionSeparator })
              ]
          });
}
function en(e) {
    let { guildId: t } = e,
        l = (0, a.Wu)([O.Z], () => {
            var e;
            return null !== (e = O.Z.getSettings().resourceChannels) && void 0 !== e ? e : [];
        }),
        s = l.map((e) => ({
            ...e,
            id: e.channelId
        })),
        { handleDragStart: o, handleDragReset: d, handleDragComplete: u } = (0, g.Z)(s, D.lq),
        m = r.useCallback(
            (e, n) => {
                if (null == t) return;
                let i = O.Z.getSettings();
                null != i &&
                    ((0, D.r2)(e),
                    (0, D.oo)(t, i).then(() => {
                        (0, D.mM)(t, e.channelId, n);
                    }));
            },
            [t]
        ),
        h = r.useCallback(() => {
            if (null != t)
                return (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('84725').then(n.bind(n, 462499));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            onSave: D.r2,
                            onIconUpload: m
                        });
                });
        }, [t, m]);
    return (0, i.jsxs)('div', {
        className: G.editResources,
        children: [
            l.map((e, n) =>
                (0, i.jsx)(
                    $,
                    {
                        guildId: t,
                        resourceChannel: e,
                        index: n,
                        onDragStart: o,
                        onDragReset: d,
                        onDragComplete: u
                    },
                    e.channelId
                )
            ),
            l.length < C.x3 &&
                (0, i.jsxs)(c.Clickable, {
                    className: G.addActionItem,
                    onClick: h,
                    children: [
                        (0, i.jsx)(c.CirclePlusIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'none',
                            children: U.intl.string(U.t['w9/qGR'])
                        })
                    ]
                })
        ]
    });
}
function ei(e) {
    let { saveOnClose: t } = e,
        n = (0, a.e7)([L.Z], () => L.Z.getGuildId());
    return null == n
        ? null
        : (0, i.jsx)(er, {
              guildId: n,
              saveOnClose: t
          });
}
function er(e) {
    let { saveOnClose: t, guildId: n } = e,
        l = (0, a.cj)([O.Z], () => {
            var e;
            return null !== (e = O.Z.getSettings().welcomeMessage) && void 0 !== e ? e : M.z;
        }),
        [s, d] = r.useState('new'),
        u = [
            {
                value: 'new',
                name: U.intl.string(U.t['4e5u3t'])
            },
            {
                value: 'existing',
                name: U.intl.string(U.t.cmkOsb)
            }
        ],
        m = (0, a.e7)([T.Z], () => T.Z.theme);
    return (
        r.useEffect(
            () => () => {
                if (null == n) return;
                let e = O.Z.getSettings();
                (0, D.oo)(n, e);
            },
            [t, n]
        ),
        (0, i.jsxs)('div', {
            className: G.page,
            children: [
                (0, i.jsxs)('div', {
                    className: G.leftColumn,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            className: G.header,
                            variant: 'heading-lg/extrabold',
                            children: U.intl.string(U.t.tbUZVl)
                        }),
                        (0, i.jsx)('div', {
                            className: G.descriptionSection,
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: U.intl.string(U.t.DvHCq6)
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: G.section,
                            children: (0, i.jsx)(W, {
                                guildId: n,
                                welcomeMessage: l
                            })
                        }),
                        (0, i.jsx)('div', { className: G.sectionSeparator }),
                        (0, i.jsx)(c.Heading, {
                            className: G.header,
                            variant: 'heading-lg/extrabold',
                            children: U.intl.string(U.t['roY/ws'])
                        }),
                        (0, i.jsx)('div', {
                            className: G.descriptionSection,
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: U.intl.format(U.t['/lWYYW'], {})
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: G.section,
                            children: (0, i.jsx)(Q, {})
                        }),
                        (0, i.jsx)(K, { guildId: n }),
                        (0, i.jsx)('div', { className: G.sectionSeparator }),
                        (0, i.jsx)(c.Heading, {
                            className: G.header,
                            variant: 'heading-lg/extrabold',
                            children: U.intl.string(U.t.hEjHyM)
                        }),
                        (0, i.jsxs)('div', {
                            className: G.descriptionSection,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: U.intl.string(U.t.YnvKVF)
                                }),
                                (0, i.jsxs)('ul', {
                                    className: G.bulletList,
                                    children: [
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(c.Text, {
                                                tag: 'span',
                                                variant: 'text-sm/medium',
                                                color: 'header-secondary',
                                                children: U.intl.string(U.t['6jEvRU'])
                                            })
                                        }),
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(c.Text, {
                                                tag: 'span',
                                                variant: 'text-sm/medium',
                                                color: 'header-secondary',
                                                children: U.intl.string(U.t['Fq+UsL'])
                                            })
                                        }),
                                        (0, i.jsx)('li', {
                                            children: (0, i.jsx)(c.Text, {
                                                tag: 'span',
                                                variant: 'text-sm/medium',
                                                color: 'header-secondary',
                                                children: U.intl.string(U.t.LeEPoK)
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: G.section,
                            children: [(0, i.jsx)(et, { guildId: n }), (0, i.jsx)(en, { guildId: n })]
                        }),
                        (0, i.jsx)('div', { className: G.sectionSeparator }),
                        (0, i.jsx)(J, { guildId: n })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: G.rightColumn,
                    children: [
                        (0, i.jsx)('div', {
                            className: G.centeredSection,
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: U.intl.string(U.t.EVV6ub)
                            })
                        }),
                        (0, i.jsx)('img', {
                            className: G.previewImage,
                            src: (0, o.ap)(m) ? ('existing' === s ? H : V) : 'existing' === s ? F : z,
                            alt: U.intl.string(U.t.ST4UOz)
                        }),
                        (0, i.jsx)(c.SegmentedControl, {
                            options: u,
                            value: s,
                            onChange: (e) => {
                                let { value: t } = e;
                                return d(String(t));
                            },
                            look: 'pill'
                        })
                    ]
                })
            ]
        })
    );
}
function el() {
    let e = (0, a.e7)([L.Z], () => L.Z.getGuild()),
        t = (0, a.e7)([O.Z], () => O.Z.getSettings()),
        n = (0, a.e7)([O.Z], () => O.Z.getSubmitting());
    return null == e
        ? null
        : (0, i.jsx)(d.Z, {
              onSave: () => {
                  try {
                      (0, D.oo)(e.id, t);
                  } catch {}
              },
              onReset: D.bj,
              submitting: n,
              onSaveText: U.intl.string(U.t.R3BPHx)
          });
}
