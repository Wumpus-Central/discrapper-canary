n.d(t, { Z: () => Z });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    m = n(700582),
    x = n(979264),
    h = n(693546),
    j = n(826581),
    b = n(246364),
    f = n(98493),
    N = n(328977),
    C = n(412222),
    p = n(223312),
    v = n(768762),
    g = n(171368),
    _ = n(598077),
    T = n(430824),
    I = n(51144),
    E = n(388032),
    S = n(555405),
    y = n(710931),
    R = n(771429),
    P = n(350381);
function O(e) {
    let { status: t } = e;
    return (0, r.jsxs)('div', {
        className: S.emptyContainer,
        children: [
            (0, r.jsx)(d.dz2, {
                size: 'md',
                color: 'currentColor',
                className: S.checkmark
            }),
            (0, r.jsx)(d.X6q, {
                variant: 'heading-md/medium',
                children: t === b.wB.REJECTED ? E.NW.string(E.t['7YSJ6e']) : E.NW.string(E.t['/wqiSk'])
            }),
            (0, r.jsx)(d.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: t === b.wB.REJECTED ? E.NW.string(E.t.i05OUV) : E.NW.string(E.t.o47YZm)
            })
        ]
    });
}
function w(e) {
    let { sortOrder: t, onSortChange: n } = e;
    return (0, r.jsx)('thead', {
        children: (0, r.jsxs)('tr', {
            className: R.tableHeaderRow,
            children: [
                (0, r.jsx)('th', {
                    className: S.headerCell,
                    children: (0, r.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: E.NW.string(E.t.Es7n9f)
                    })
                }),
                (0, r.jsx)('th', {
                    className: i()(S.headerCell, P.mediumCol),
                    children: (0, r.jsxs)(d.P3F, {
                        className: S.sortItem,
                        onClick: n,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'eyebrow',
                                color: 'interactive-normal',
                                children: E.NW.string(E.t.EZ5QWF)
                            }),
                            t === b.Nw.TIMESTAMP_ASC
                                ? (0, r.jsx)(v.Z, {
                                      className: S.sortIcon,
                                      direction: v.Z.Directions.UP
                                  })
                                : (0, r.jsx)(v.Z, {
                                      className: S.sortIcon,
                                      direction: v.Z.Directions.DOWN
                                  })
                        ]
                    })
                }),
                (0, r.jsx)('th', {
                    className: i()(S.headerCell, S.moreOptionsCol),
                    children: (0, r.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: E.NW.string(E.t['5Q9xGh'])
                    })
                })
            ]
        })
    });
}
let A = l.memo(function (e) {
        let { joinRequest: t, user: n } = e,
            { joinRequestId: a, guildId: i } = t,
            s = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, g.openUserProfileModal)({
                            userId: n.id,
                            joinRequestId: a
                        });
                },
                [n, a]
            );
        return (0, r.jsxs)('div', {
            className: P.memberNameContainer,
            children: [
                (0, r.jsx)(d.P3F, {
                    className: P.memberAvatar,
                    onClick: s,
                    children: (0, r.jsx)(m.Z, { user: n })
                }),
                (0, r.jsx)('div', {
                    className: P.memberName,
                    children: (0, r.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        children: (0, r.jsxs)(d.P3F, {
                            onClick: s,
                            className: P.nameContainer,
                            children: [
                                n.globalName,
                                (0, r.jsx)(x.ZP, {
                                    primaryGuild: null == n ? void 0 : n.primaryGuild,
                                    userId: null == n ? void 0 : n.id,
                                    contextGuildId: i,
                                    containerClassName: P.memberClanTag
                                })
                            ]
                        })
                    })
                }),
                (0, r.jsx)('div', {
                    className: P.memberGlobalName,
                    children: (0, r.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        tag: 'span',
                        children: (0, r.jsx)(d.P3F, {
                            onClick: s,
                            tag: 'span',
                            children: I.ZP.getUserTag(n)
                        })
                    })
                })
            ]
        });
    }),
    M = l.memo(function (e) {
        let { joinRequest: t, onSelect: a } = e,
            { guildId: s, createdAt: m, applicationStatus: x } = t,
            h = l.useMemo(() => new _.Z(t.user), [t.user]),
            j = (0, N.L)({ guildId: s }),
            f = (0, c.e7)([T.Z], () => T.Z.getGuild(s)),
            C = x === b.wB.SUBMITTED,
            p = (e) => {
                (0, u.jW)(
                    e,
                    async () => {
                        let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, t)),
                                (l = l =
                                    {
                                        guild: f,
                                        user: h
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                n)
                            );
                        };
                    },
                    {
                        position: 'bottom',
                        align: 'right'
                    }
                );
            };
        return null == h
            ? null
            : (0, r.jsxs)('tr', {
                  onClick: a,
                  className: i()(P.roundedRow, P.memberRowContainer, { [P.selected]: (null == j ? void 0 : j.joinRequestId) === t.joinRequestId }),
                  children: [
                      (0, r.jsx)('td', {
                          children: (0, r.jsx)(A, {
                              joinRequest: t,
                              user: h
                          })
                      }),
                      (0, r.jsx)('td', {
                          className: P.mediumCol,
                          children: (0, r.jsx)(d.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: o()(m).format('lll')
                          })
                      }),
                      (0, r.jsx)('td', {
                          className: S.moreOptionsCol,
                          children:
                              C &&
                              (0, r.jsx)(d.ua7, {
                                  text: E.NW.string(E.t.x8Nn4O),
                                  children: (e) => {
                                      let { onMouseEnter: t, onMouseLeave: n } = e;
                                      return (0, r.jsx)(d.P3F, {
                                          onMouseEnter: t,
                                          onMouseLeave: n,
                                          onClick: p,
                                          className: P.button,
                                          children: (0, r.jsx)(d.Huf, {
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
    k = () => {
        let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
            t = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
            n = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
        return (0, r.jsxs)('tr', {
            className: i()(P.roundedRow, P.memberRowContainer),
            children: [
                (0, r.jsx)('td', {
                    children: (0, r.jsxs)('div', {
                        className: P.memberNameContainer,
                        children: [
                            (0, r.jsx)('div', { className: i()(S.placeholderAvatar, P.memberAvatar) }),
                            (0, r.jsx)('div', {
                                className: P.memberName,
                                children: (0, r.jsx)('div', {
                                    className: S.placeholderText,
                                    style: { width: e }
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: P.memberGlobalName,
                                children: (0, r.jsx)('div', {
                                    className: S.placeholderTextSmall,
                                    style: { width: t }
                                })
                            })
                        ]
                    })
                }),
                (0, r.jsx)('td', {
                    className: P.mediumCol,
                    children: (0, r.jsx)('div', {
                        className: S.placeholderText,
                        style: { width: n }
                    })
                }),
                (0, r.jsx)('td', { className: S.moreOptionsCol })
            ]
        });
    };
function Z(e) {
    let { guildId: t, currentTab: n } = e,
        a = l.useRef(null),
        i = (0, c.e7)([T.Z], () => T.Z.getGuild(t)),
        s = (0, C.C)({ guildId: t }),
        o = (0, c.e7)([j.Z], () => j.Z.isFetching()),
        { guildJoinRequests: u } = (0, p.j)({
            guildId: t,
            applicationStatus: n,
            sortOrder: s
        }),
        { fetchNextPage: m } = (0, f.m)({
            guildId: t,
            guildJoinRequests: u
        }),
        x = l.useCallback(async () => {
            let e = s === b.Nw.TIMESTAMP_ASC ? b.Nw.TIMESTAMP_DESC : b.Nw.TIMESTAMP_ASC;
            h.Z.setSelectedSortOrder(t, e), await m(e, n);
        }, [s, t, m, n]);
    return null == i
        ? null
        : (0, r.jsx)('div', {
              className: y.mainTableContainer,
              children: (0, r.jsx)(d.Den, {
                  className: y.horizatonalScroller,
                  ref: a,
                  orientation: 'horizontal',
                  children: (0, r.jsxs)('table', {
                      className: S.table,
                      children: [
                          (0, r.jsx)(w, {
                              sortOrder: s,
                              onSortChange: x
                          }),
                          (0, r.jsx)('tbody', {
                              children: o
                                  ? [, , , , ,].fill(0).map((e, t) => (0, r.jsx)(k, {}, 'placeholder-'.concat(t)))
                                  : 0 === u.length
                                    ? (0, r.jsx)('td', {
                                          colSpan: 3,
                                          children: (0, r.jsx)(O, { status: n })
                                      })
                                    : u.map((e) =>
                                          (0, r.jsx)(
                                              M,
                                              {
                                                  joinRequest: e,
                                                  onSelect: () => h.Z.setSelectedGuildJoinRequest(t, e)
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
