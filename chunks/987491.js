t.d(n, {
    Z: function () {
        return w;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(913527),
    o = t.n(s),
    c = t(442837),
    d = t(481060),
    u = t(239091),
    m = t(700582),
    x = t(979264),
    h = t(693546),
    C = t(826581),
    j = t(246364),
    b = t(98493),
    g = t(328977),
    f = t(412222),
    N = t(223312),
    v = t(768762),
    _ = t(171368),
    E = t(598077),
    I = t(430824),
    T = t(51144),
    S = t(388032),
    p = t(174598),
    M = t(676391),
    R = t(338648),
    A = t(216412);
function Z(e) {
    let { status: n } = e;
    return (0, l.jsxs)('div', {
        className: p.emptyContainer,
        children: [
            (0, l.jsx)(d.CheckmarkLargeIcon, {
                size: 'md',
                color: 'currentColor',
                className: p.checkmark
            }),
            (0, l.jsx)(d.Heading, {
                variant: 'heading-md/medium',
                children: n === j.wB.REJECTED ? S.intl.string(S.t['7YSJ6e']) : S.intl.string(S.t['/wqiSk'])
            }),
            (0, l.jsx)(d.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: n === j.wB.REJECTED ? S.intl.string(S.t.i05OUV) : S.intl.string(S.t.o47YZm)
            })
        ]
    });
}
function k(e) {
    let { sortOrder: n, onSortChange: t } = e;
    return (0, l.jsx)('thead', {
        children: (0, l.jsxs)('tr', {
            className: R.tableHeaderRow,
            children: [
                (0, l.jsx)('th', {
                    className: p.headerCell,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: S.intl.string(S.t.Es7n9f)
                    })
                }),
                (0, l.jsx)('th', {
                    className: a()(p.headerCell, A.mediumCol),
                    children: (0, l.jsxs)(d.Clickable, {
                        className: p.sortItem,
                        onClick: t,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: 'eyebrow',
                                color: 'interactive-normal',
                                children: S.intl.string(S.t.EZ5QWF)
                            }),
                            n === j.Nw.TIMESTAMP_ASC
                                ? (0, l.jsx)(v.Z, {
                                      className: p.sortIcon,
                                      direction: v.Z.Directions.UP
                                  })
                                : (0, l.jsx)(v.Z, {
                                      className: p.sortIcon,
                                      direction: v.Z.Directions.DOWN
                                  })
                        ]
                    })
                }),
                (0, l.jsx)('th', {
                    className: a()(p.headerCell, p.moreOptionsCol),
                    children: (0, l.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: S.intl.string(S.t['5Q9xGh'])
                    })
                })
            ]
        })
    });
}
let L = i.memo(function (e) {
        let { joinRequest: n, user: t } = e,
            { joinRequestId: r, guildId: a } = n,
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, _.openUserProfileModal)({
                            userId: t.id,
                            joinRequestId: r
                        });
                },
                [t, r]
            );
        return (0, l.jsxs)('div', {
            className: A.memberNameContainer,
            children: [
                (0, l.jsx)(d.Clickable, {
                    className: A.memberAvatar,
                    onClick: s,
                    children: (0, l.jsx)(m.Z, { user: t })
                }),
                (0, l.jsx)('div', {
                    className: A.memberName,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        children: (0, l.jsxs)(d.Clickable, {
                            onClick: s,
                            className: A.nameContainer,
                            children: [
                                t.globalName,
                                (0, l.jsx)(x.ZP, {
                                    primaryGuild: null == t ? void 0 : t.primaryGuild,
                                    userId: null == t ? void 0 : t.id,
                                    contextGuildId: a,
                                    containerClassName: A.memberClanTag
                                })
                            ]
                        })
                    })
                }),
                (0, l.jsx)('div', {
                    className: A.memberGlobalName,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        tag: 'span',
                        children: (0, l.jsx)(d.Clickable, {
                            onClick: s,
                            tag: 'span',
                            children: T.ZP.getUserTag(t)
                        })
                    })
                })
            ]
        });
    }),
    B = i.memo(function (e) {
        let { joinRequest: n, onSelect: r } = e,
            { guildId: s, createdAt: m, applicationStatus: x } = n,
            h = i.useMemo(() => new E.Z(n.user), [n.user]),
            C = (0, g.L)({ guildId: s }),
            b = (0, c.e7)([I.Z], () => I.Z.getGuild(s)),
            f = x === j.wB.SUBMITTED,
            N = (e) => {
                (0, u.jW)(
                    e,
                    async () => {
                        let { default: e } = await t.e('11451').then(t.bind(t, 597409));
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                guild: b,
                                user: h
                            });
                    },
                    {
                        position: 'bottom',
                        align: 'right'
                    }
                );
            };
        return null == h
            ? null
            : (0, l.jsxs)('tr', {
                  onClick: r,
                  className: a()(A.roundedRow, A.memberRowContainer, { [A.selected]: (null == C ? void 0 : C.joinRequestId) === n.joinRequestId }),
                  children: [
                      (0, l.jsx)('td', {
                          children: (0, l.jsx)(L, {
                              joinRequest: n,
                              user: h
                          })
                      }),
                      (0, l.jsx)('td', {
                          className: A.mediumCol,
                          children: (0, l.jsx)(d.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: o()(m).format('lll')
                          })
                      }),
                      (0, l.jsx)('td', {
                          className: p.moreOptionsCol,
                          children:
                              f &&
                              (0, l.jsx)(d.Tooltip, {
                                  text: S.intl.string(S.t.x8Nn4O),
                                  children: (e) => {
                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                      return (0, l.jsx)(d.Clickable, {
                                          onMouseEnter: n,
                                          onMouseLeave: t,
                                          onClick: N,
                                          className: a()(A.button),
                                          children: (0, l.jsx)(d.MoreVerticalIcon, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 18,
                                              height: 18
                                          })
                                      });
                                  }
                              })
                      })
                  ]
              });
    }),
    P = () => {
        let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
            n = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
            t = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
        return (0, l.jsxs)('tr', {
            className: a()(A.roundedRow, A.memberRowContainer),
            children: [
                (0, l.jsx)('td', {
                    children: (0, l.jsxs)('div', {
                        className: A.memberNameContainer,
                        children: [
                            (0, l.jsx)('div', { className: a()(p.placeholderAvatar, A.memberAvatar) }),
                            (0, l.jsx)('div', {
                                className: A.memberName,
                                children: (0, l.jsx)('div', {
                                    className: p.placeholderText,
                                    style: { width: e }
                                })
                            }),
                            (0, l.jsx)('div', {
                                className: A.memberGlobalName,
                                children: (0, l.jsx)('div', {
                                    className: p.placeholderTextSmall,
                                    style: { width: n }
                                })
                            })
                        ]
                    })
                }),
                (0, l.jsx)('td', {
                    className: A.mediumCol,
                    children: (0, l.jsx)('div', {
                        className: p.placeholderText,
                        style: { width: t }
                    })
                }),
                (0, l.jsx)('td', { className: p.moreOptionsCol })
            ]
        });
    };
function w(e) {
    let { guildId: n, currentTab: t } = e,
        r = i.useRef(null),
        s = (0, c.e7)([I.Z], () => I.Z.getGuild(n)),
        o = (0, f.C)({ guildId: n }),
        u = (0, c.e7)([C.Z], () => C.Z.isFetching()),
        { guildJoinRequests: m } = (0, N.j)({
            guildId: n,
            applicationStatus: t,
            sortOrder: o
        }),
        { fetchNextPage: x } = (0, b.m)({
            guildId: n,
            guildJoinRequests: m
        }),
        g = i.useCallback(async () => {
            let e = o === j.Nw.TIMESTAMP_ASC ? j.Nw.TIMESTAMP_DESC : j.Nw.TIMESTAMP_ASC;
            h.Z.setSelectedSortOrder(n, e), await x(e, t);
        }, [o, n, x, t]);
    return null == s
        ? null
        : (0, l.jsx)('div', {
              className: M.mainTableContainer,
              children: (0, l.jsx)(d.AdvancedScroller, {
                  className: M.horizatonalScroller,
                  ref: r,
                  orientation: 'horizontal',
                  children: (0, l.jsxs)('table', {
                      className: a()(p.table),
                      children: [
                          (0, l.jsx)(k, {
                              sortOrder: o,
                              onSortChange: g
                          }),
                          (0, l.jsx)('tbody', {
                              children: u
                                  ? [, , , , ,].fill(0).map((e, n) => (0, l.jsx)(P, {}, 'placeholder-'.concat(n)))
                                  : 0 === m.length
                                    ? (0, l.jsx)('td', {
                                          colSpan: 3,
                                          children: (0, l.jsx)(Z, { status: t })
                                      })
                                    : m.map((e) =>
                                          (0, l.jsx)(
                                              B,
                                              {
                                                  joinRequest: e,
                                                  onSelect: () => h.Z.setSelectedGuildJoinRequest(n, e)
                                              },
                                              e.joinRequestId
                                          )
                                      )
                          })
                      ]
                  })
              })
          });
}
