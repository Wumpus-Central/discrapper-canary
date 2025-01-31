t.d(n, { Z: () => D });
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(913527),
    o = t.n(s),
    d = t(442837),
    c = t(481060),
    u = t(239091),
    m = t(700582),
    x = t(979264),
    h = t(693546),
    j = t(826581),
    _ = t(246364),
    C = t(98493),
    f = t(328977),
    v = t(412222),
    N = t(223312),
    b = t(768762),
    E = t(171368),
    g = t(598077),
    T = t(430824),
    I = t(51144),
    S = t(388032),
    p = t(174598),
    R = t(676391),
    M = t(338648),
    A = t(216412);
function Z(e) {
    let { status: n } = e;
    return (0, l.jsxs)('div', {
        className: p.emptyContainer,
        children: [
            (0, l.jsx)(c.dz2, {
                size: 'md',
                color: 'currentColor',
                className: p.checkmark
            }),
            (0, l.jsx)(c.X6q, {
                variant: 'heading-md/medium',
                children: n === _.wB.REJECTED ? S.intl.string(S.t['7YSJ6e']) : S.intl.string(S.t['/wqiSk'])
            }),
            (0, l.jsx)(c.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: n === _.wB.REJECTED ? S.intl.string(S.t.i05OUV) : S.intl.string(S.t.o47YZm)
            })
        ]
    });
}
function P(e) {
    let { sortOrder: n, onSortChange: t } = e;
    return (0, l.jsx)('thead', {
        children: (0, l.jsxs)('tr', {
            className: M.tableHeaderRow,
            children: [
                (0, l.jsx)('th', {
                    className: p.headerCell,
                    children: (0, l.jsx)(c.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: S.intl.string(S.t.Es7n9f)
                    })
                }),
                (0, l.jsx)('th', {
                    className: a()(p.headerCell, A.mediumCol),
                    children: (0, l.jsxs)(c.P3F, {
                        className: p.sortItem,
                        onClick: t,
                        children: [
                            (0, l.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'interactive-normal',
                                children: S.intl.string(S.t.EZ5QWF)
                            }),
                            n === _.Nw.TIMESTAMP_ASC
                                ? (0, l.jsx)(b.Z, {
                                      className: p.sortIcon,
                                      direction: b.Z.Directions.UP
                                  })
                                : (0, l.jsx)(b.Z, {
                                      className: p.sortIcon,
                                      direction: b.Z.Directions.DOWN
                                  })
                        ]
                    })
                }),
                (0, l.jsx)('th', {
                    className: a()(p.headerCell, p.moreOptionsCol),
                    children: (0, l.jsx)(c.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: S.intl.string(S.t['5Q9xGh'])
                    })
                })
            ]
        })
    });
}
let k = i.memo(function (e) {
        let { joinRequest: n, user: t } = e,
            { joinRequestId: r, guildId: a } = n,
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, E.openUserProfileModal)({
                            userId: t.id,
                            joinRequestId: r
                        });
                },
                [t, r]
            );
        return (0, l.jsxs)('div', {
            className: A.memberNameContainer,
            children: [
                (0, l.jsx)(c.P3F, {
                    className: A.memberAvatar,
                    onClick: s,
                    children: (0, l.jsx)(m.Z, { user: t })
                }),
                (0, l.jsx)('div', {
                    className: A.memberName,
                    children: (0, l.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        children: (0, l.jsxs)(c.P3F, {
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
                    children: (0, l.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        tag: 'span',
                        children: (0, l.jsx)(c.P3F, {
                            onClick: s,
                            tag: 'span',
                            children: I.ZP.getUserTag(t)
                        })
                    })
                })
            ]
        });
    }),
    L = i.memo(function (e) {
        let { joinRequest: n, onSelect: r } = e,
            { guildId: s, createdAt: m, applicationStatus: x } = n,
            h = i.useMemo(() => new g.Z(n.user), [n.user]),
            j = (0, f.L)({ guildId: s }),
            C = (0, d.e7)([T.Z], () => T.Z.getGuild(s)),
            v = x === _.wB.SUBMITTED,
            N = (e) => {
                (0, u.jW)(
                    e,
                    async () => {
                        let { default: e } = await t.e('11451').then(t.bind(t, 597409));
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                guild: C,
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
                  className: a()(A.roundedRow, A.memberRowContainer, { [A.selected]: (null == j ? void 0 : j.joinRequestId) === n.joinRequestId }),
                  children: [
                      (0, l.jsx)('td', {
                          children: (0, l.jsx)(k, {
                              joinRequest: n,
                              user: h
                          })
                      }),
                      (0, l.jsx)('td', {
                          className: A.mediumCol,
                          children: (0, l.jsx)(c.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: o()(m).format('lll')
                          })
                      }),
                      (0, l.jsx)('td', {
                          className: p.moreOptionsCol,
                          children:
                              v &&
                              (0, l.jsx)(c.ua7, {
                                  text: S.intl.string(S.t.x8Nn4O),
                                  children: (e) => {
                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                      return (0, l.jsx)(c.P3F, {
                                          onMouseEnter: n,
                                          onMouseLeave: t,
                                          onClick: N,
                                          className: a()(A.button),
                                          children: (0, l.jsx)(c.Huf, {
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
    w = () => {
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
function D(e) {
    let { guildId: n, currentTab: t } = e,
        r = i.useRef(null),
        s = (0, d.e7)([T.Z], () => T.Z.getGuild(n)),
        o = (0, v.C)({ guildId: n }),
        u = (0, d.e7)([j.Z], () => j.Z.isFetching()),
        { guildJoinRequests: m } = (0, N.j)({
            guildId: n,
            applicationStatus: t,
            sortOrder: o
        }),
        { fetchNextPage: x } = (0, C.m)({
            guildId: n,
            guildJoinRequests: m
        }),
        f = i.useCallback(async () => {
            let e = o === _.Nw.TIMESTAMP_ASC ? _.Nw.TIMESTAMP_DESC : _.Nw.TIMESTAMP_ASC;
            h.Z.setSelectedSortOrder(n, e), await x(e, t);
        }, [o, n, x, t]);
    return null == s
        ? null
        : (0, l.jsx)('div', {
              className: R.mainTableContainer,
              children: (0, l.jsx)(c.Den, {
                  className: R.horizatonalScroller,
                  ref: r,
                  orientation: 'horizontal',
                  children: (0, l.jsxs)('table', {
                      className: a()(p.table),
                      children: [
                          (0, l.jsx)(P, {
                              sortOrder: o,
                              onSortChange: f
                          }),
                          (0, l.jsx)('tbody', {
                              children: u
                                  ? [, , , , ,].fill(0).map((e, n) => (0, l.jsx)(w, {}, 'placeholder-'.concat(n)))
                                  : 0 === m.length
                                    ? (0, l.jsx)('td', {
                                          colSpan: 3,
                                          children: (0, l.jsx)(Z, { status: t })
                                      })
                                    : m.map((e) =>
                                          (0, l.jsx)(
                                              L,
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
