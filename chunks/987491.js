t.d(n, { Z: () => B });
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
    j = t(826581),
    C = t(246364),
    _ = t(98493),
    f = t(328977),
    b = t(412222),
    v = t(223312),
    N = t(768762),
    g = t(171368),
    T = t(598077),
    p = t(430824),
    I = t(51144),
    E = t(388032),
    S = t(174598),
    R = t(676391),
    M = t(338648),
    A = t(216412);
function Z(e) {
    let { status: n } = e;
    return (0, l.jsxs)('div', {
        className: S.emptyContainer,
        children: [
            (0, l.jsx)(d.dz2, {
                size: 'md',
                color: 'currentColor',
                className: S.checkmark
            }),
            (0, l.jsx)(d.X6q, {
                variant: 'heading-md/medium',
                children: n === C.wB.REJECTED ? E.intl.string(E.t['7YSJ6e']) : E.intl.string(E.t['/wqiSk'])
            }),
            (0, l.jsx)(d.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: n === C.wB.REJECTED ? E.intl.string(E.t.i05OUV) : E.intl.string(E.t.o47YZm)
            })
        ]
    });
}
function k(e) {
    let { sortOrder: n, onSortChange: t } = e;
    return (0, l.jsx)('thead', {
        children: (0, l.jsxs)('tr', {
            className: M.tableHeaderRow,
            children: [
                (0, l.jsx)('th', {
                    className: S.headerCell,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: E.intl.string(E.t.Es7n9f)
                    })
                }),
                (0, l.jsx)('th', {
                    className: a()(S.headerCell, A.mediumCol),
                    children: (0, l.jsxs)(d.P3F, {
                        className: S.sortItem,
                        onClick: t,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: 'eyebrow',
                                color: 'interactive-normal',
                                children: E.intl.string(E.t.EZ5QWF)
                            }),
                            n === C.Nw.TIMESTAMP_ASC
                                ? (0, l.jsx)(N.Z, {
                                      className: S.sortIcon,
                                      direction: N.Z.Directions.UP
                                  })
                                : (0, l.jsx)(N.Z, {
                                      className: S.sortIcon,
                                      direction: N.Z.Directions.DOWN
                                  })
                        ]
                    })
                }),
                (0, l.jsx)('th', {
                    className: a()(S.headerCell, S.moreOptionsCol),
                    children: (0, l.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: E.intl.string(E.t['5Q9xGh'])
                    })
                })
            ]
        })
    });
}
let P = i.memo(function (e) {
        let { joinRequest: n, user: t } = e,
            { joinRequestId: r, guildId: a } = n,
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, g.openUserProfileModal)({
                            userId: t.id,
                            joinRequestId: r
                        });
                },
                [t, r]
            );
        return (0, l.jsxs)('div', {
            className: A.memberNameContainer,
            children: [
                (0, l.jsx)(d.P3F, {
                    className: A.memberAvatar,
                    onClick: s,
                    children: (0, l.jsx)(m.Z, { user: t })
                }),
                (0, l.jsx)('div', {
                    className: A.memberName,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        children: (0, l.jsxs)(d.P3F, {
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
                        children: (0, l.jsx)(d.P3F, {
                            onClick: s,
                            tag: 'span',
                            children: I.ZP.getUserTag(t)
                        })
                    })
                })
            ]
        });
    }),
    w = i.memo(function (e) {
        let { joinRequest: n, onSelect: r } = e,
            { guildId: s, createdAt: m, applicationStatus: x } = n,
            h = i.useMemo(() => new T.Z(n.user), [n.user]),
            j = (0, f.L)({ guildId: s }),
            _ = (0, c.e7)([p.Z], () => p.Z.getGuild(s)),
            b = x === C.wB.SUBMITTED,
            v = (e) => {
                (0, u.jW)(
                    e,
                    async () => {
                        let { default: e } = await t.e('11451').then(t.bind(t, 597409));
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                guild: _,
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
                          children: (0, l.jsx)(P, {
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
                          className: S.moreOptionsCol,
                          children:
                              b &&
                              (0, l.jsx)(d.ua7, {
                                  text: E.intl.string(E.t.x8Nn4O),
                                  children: (e) => {
                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                      return (0, l.jsx)(d.P3F, {
                                          onMouseEnter: n,
                                          onMouseLeave: t,
                                          onClick: v,
                                          className: a()(A.button),
                                          children: (0, l.jsx)(d.Huf, {
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
    L = () => {
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
                            (0, l.jsx)('div', { className: a()(S.placeholderAvatar, A.memberAvatar) }),
                            (0, l.jsx)('div', {
                                className: A.memberName,
                                children: (0, l.jsx)('div', {
                                    className: S.placeholderText,
                                    style: { width: e }
                                })
                            }),
                            (0, l.jsx)('div', {
                                className: A.memberGlobalName,
                                children: (0, l.jsx)('div', {
                                    className: S.placeholderTextSmall,
                                    style: { width: n }
                                })
                            })
                        ]
                    })
                }),
                (0, l.jsx)('td', {
                    className: A.mediumCol,
                    children: (0, l.jsx)('div', {
                        className: S.placeholderText,
                        style: { width: t }
                    })
                }),
                (0, l.jsx)('td', { className: S.moreOptionsCol })
            ]
        });
    };
function B(e) {
    let { guildId: n, currentTab: t } = e,
        r = i.useRef(null),
        s = (0, c.e7)([p.Z], () => p.Z.getGuild(n)),
        o = (0, b.C)({ guildId: n }),
        u = (0, c.e7)([j.Z], () => j.Z.isFetching()),
        { guildJoinRequests: m } = (0, v.j)({
            guildId: n,
            applicationStatus: t,
            sortOrder: o
        }),
        { fetchNextPage: x } = (0, _.m)({
            guildId: n,
            guildJoinRequests: m
        }),
        f = i.useCallback(async () => {
            let e = o === C.Nw.TIMESTAMP_ASC ? C.Nw.TIMESTAMP_DESC : C.Nw.TIMESTAMP_ASC;
            h.Z.setSelectedSortOrder(n, e), await x(e, t);
        }, [o, n, x, t]);
    return null == s
        ? null
        : (0, l.jsx)('div', {
              className: R.mainTableContainer,
              children: (0, l.jsx)(d.Den, {
                  className: R.horizatonalScroller,
                  ref: r,
                  orientation: 'horizontal',
                  children: (0, l.jsxs)('table', {
                      className: a()(S.table),
                      children: [
                          (0, l.jsx)(k, {
                              sortOrder: o,
                              onSortChange: f
                          }),
                          (0, l.jsx)('tbody', {
                              children: u
                                  ? [, , , , ,].fill(0).map((e, n) => (0, l.jsx)(L, {}, 'placeholder-'.concat(n)))
                                  : 0 === m.length
                                    ? (0, l.jsx)('td', {
                                          colSpan: 3,
                                          children: (0, l.jsx)(Z, { status: t })
                                      })
                                    : m.map((e) =>
                                          (0, l.jsx)(
                                              w,
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
