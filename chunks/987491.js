n.d(t, { Z: () => D });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    m = n(700582),
    x = n(906732),
    h = n(693546),
    j = n(826581),
    b = n(246364),
    f = n(98493),
    p = n(328977),
    g = n(412222),
    v = n(223312),
    _ = n(172751),
    C = n(768762),
    T = n(892001),
    N = n(598077),
    E = n(430824),
    S = n(51144),
    I = n(388032),
    P = n(555405),
    O = n(710931),
    R = n(771429),
    y = n(350381);
function w(e) {
    let t,
        n,
        { status: l } = e;
    switch (l) {
        case b.wB.REJECTED:
            (t = I.t['7YSJ6e']), (n = I.t.i05OUV);
            break;
        case b.wB.APPROVED:
            (t = I.t.bv82GR), (n = I.t.D4OUHR);
            break;
        default:
            (t = I.t['/wqiSk']), (n = I.t.o47YZm);
    }
    return (0, r.jsxs)('div', {
        className: P.emptyContainer,
        children: [
            (0, r.jsx)(d.dz2, {
                size: 'md',
                color: 'currentColor',
                className: P.checkmark
            }),
            (0, r.jsx)(d.X6q, {
                variant: 'heading-md/medium',
                children: I.intl.string(t)
            }),
            (0, r.jsx)(d.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: I.intl.string(n)
            })
        ]
    });
}
function A(e) {
    let { sortOrder: t, onSortChange: n } = e;
    return (0, r.jsx)('thead', {
        children: (0, r.jsxs)('tr', {
            className: R.tableHeaderRow,
            children: [
                (0, r.jsx)('th', {
                    className: P.headerCell,
                    children: (0, r.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: I.intl.string(I.t.Es7n9f)
                    })
                }),
                (0, r.jsx)('th', {
                    className: a()(P.headerCell, y.mediumCol),
                    children: (0, r.jsxs)(d.P3F, {
                        className: P.sortItem,
                        onClick: n,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'eyebrow',
                                color: 'interactive-normal',
                                children: I.intl.string(I.t.EZ5QWF)
                            }),
                            t === b.Nw.TIMESTAMP_ASC
                                ? (0, r.jsx)(C.Z, {
                                      className: P.sortIcon,
                                      direction: C.Z.Directions.UP
                                  })
                                : (0, r.jsx)(C.Z, {
                                      className: P.sortIcon,
                                      direction: C.Z.Directions.DOWN
                                  })
                        ]
                    })
                }),
                (0, r.jsx)('th', {
                    className: a()(P.headerCell, P.moreOptionsCol),
                    children: (0, r.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: I.intl.string(I.t['5Q9xGh'])
                    })
                })
            ]
        })
    });
}
let M = l.memo(function (e) {
        let { joinRequest: t, user: n } = e,
            { joinRequestId: i, guildId: a } = t,
            { analyticsLocations: s } = (0, x.ZP)(),
            o = l.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, T.openUserProfileModal)({
                            userId: n.id,
                            joinRequestId: i,
                            sourceAnalyticsLocations: s
                        });
                },
                [n, i, s]
            );
        return (0, r.jsxs)('div', {
            className: y.memberNameContainer,
            children: [
                (0, r.jsx)(d.P3F, {
                    className: y.memberAvatar,
                    onClick: o,
                    children: (0, r.jsx)(m.Z, { user: n })
                }),
                (0, r.jsx)('div', {
                    className: y.memberName,
                    children: (0, r.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        children: (0, r.jsxs)(d.P3F, {
                            onClick: o,
                            className: y.nameContainer,
                            children: [
                                n.globalName,
                                (0, r.jsx)(_.ZP, {
                                    primaryGuild: null == n ? void 0 : n.primaryGuild,
                                    userId: null == n ? void 0 : n.id,
                                    contextGuildId: a,
                                    containerClassName: y.memberClanTag
                                })
                            ]
                        })
                    })
                }),
                (0, r.jsx)('div', {
                    className: y.memberGlobalName,
                    children: (0, r.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        tag: 'span',
                        children: (0, r.jsx)(d.P3F, {
                            onClick: o,
                            tag: 'span',
                            children: S.ZP.getUserTag(n)
                        })
                    })
                })
            ]
        });
    }),
    Z = l.memo(function (e) {
        let { joinRequest: t, onSelect: i } = e,
            { guildId: s, createdAt: m, applicationStatus: x } = t,
            h = l.useMemo(() => new N.Z(t.user), [t.user]),
            j = (0, p.L)({ guildId: s }),
            f = (0, c.e7)([E.Z], () => E.Z.getGuild(s)),
            g = x === b.wB.SUBMITTED,
            v = (e) => {
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
                  onClick: i,
                  className: a()(y.roundedRow, y.memberRowContainer, { [y.selected]: (null == j ? void 0 : j.joinRequestId) === t.joinRequestId }),
                  children: [
                      (0, r.jsx)('td', {
                          children: (0, r.jsx)(M, {
                              joinRequest: t,
                              user: h
                          })
                      }),
                      (0, r.jsx)('td', {
                          className: y.mediumCol,
                          children: (0, r.jsx)(d.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: o()(m).format('lll')
                          })
                      }),
                      (0, r.jsx)('td', {
                          className: P.moreOptionsCol,
                          children:
                              g &&
                              (0, r.jsx)(d.ua7, {
                                  text: I.intl.string(I.t.x8Nn4O),
                                  children: (e) => {
                                      let { onMouseEnter: t, onMouseLeave: n } = e;
                                      return (0, r.jsx)(d.P3F, {
                                          onMouseEnter: t,
                                          onMouseLeave: n,
                                          onClick: v,
                                          className: y.button,
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
            className: a()(y.roundedRow, y.memberRowContainer),
            children: [
                (0, r.jsx)('td', {
                    children: (0, r.jsxs)('div', {
                        className: y.memberNameContainer,
                        children: [
                            (0, r.jsx)('div', { className: a()(P.placeholderAvatar, y.memberAvatar) }),
                            (0, r.jsx)('div', {
                                className: y.memberName,
                                children: (0, r.jsx)('div', {
                                    className: P.placeholderText,
                                    style: { width: e }
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: y.memberGlobalName,
                                children: (0, r.jsx)('div', {
                                    className: P.placeholderTextSmall,
                                    style: { width: t }
                                })
                            })
                        ]
                    })
                }),
                (0, r.jsx)('td', {
                    className: y.mediumCol,
                    children: (0, r.jsx)('div', {
                        className: P.placeholderText,
                        style: { width: n }
                    })
                }),
                (0, r.jsx)('td', { className: P.moreOptionsCol })
            ]
        });
    };
function D(e) {
    let { guildId: t, currentTab: n } = e,
        i = l.useRef(null),
        a = (0, c.e7)([E.Z], () => E.Z.getGuild(t)),
        s = (0, g.C)({ guildId: t }),
        o = (0, c.e7)([j.Z], () => j.Z.isFetching()),
        { guildJoinRequests: u } = (0, v.j)({
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
    return null == a
        ? null
        : (0, r.jsx)('div', {
              className: O.mainTableContainer,
              children: (0, r.jsx)(d.Den, {
                  className: O.horizatonalScroller,
                  ref: i,
                  orientation: 'horizontal',
                  children: (0, r.jsxs)('table', {
                      className: P.table,
                      children: [
                          (0, r.jsx)(A, {
                              sortOrder: s,
                              onSortChange: x
                          }),
                          (0, r.jsx)('tbody', {
                              children: o
                                  ? [, , , , ,].fill(0).map((e, t) => (0, r.jsx)(k, {}, 'placeholder-'.concat(t)))
                                  : 0 === u.length
                                    ? (0, r.jsx)('td', {
                                          colSpan: 3,
                                          children: (0, r.jsx)(w, { status: n })
                                      })
                                    : u.map((e) =>
                                          (0, r.jsx)(
                                              Z,
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
