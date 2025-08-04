n.d(t, { Z: () => B });
var l = n(255367),
    r = n(73800),
    a = n(120356),
    i = n.n(a),
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
    v = n(412222),
    g = n(223312),
    C = n(172751),
    _ = n(768762),
    T = n(892001),
    E = n(598077),
    N = n(430824),
    S = n(51144),
    P = n(388032),
    R = n(555405),
    I = n(710931),
    Z = n(771429),
    w = n(350381);
function y(e) {
    let t,
        n,
        { status: r } = e;
    switch (r) {
        case b.wB.REJECTED:
            ((t = P.t['7YSJ6e']), (n = P.t.i05OUV));
            break;
        case b.wB.APPROVED:
            ((t = P.t.bv82GR), (n = P.t.D4OUHR));
            break;
        default:
            ((t = P.t['/wqiSk']), (n = P.t.o47YZm));
    }
    return (0, l.jsxs)('div', {
        className: R.emptyContainer,
        children: [
            (0, l.jsx)(d.dz2, {
                size: 'md',
                color: 'currentColor',
                className: R.checkmark
            }),
            (0, l.jsx)(d.X6q, {
                variant: 'heading-md/medium',
                children: P.intl.string(t)
            }),
            (0, l.jsx)(d.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: P.intl.string(n)
            })
        ]
    });
}
function M(e) {
    let { sortOrder: t, onSortChange: n } = e;
    return (0, l.jsx)('thead', {
        children: (0, l.jsxs)('tr', {
            className: Z.tableHeaderRow,
            children: [
                (0, l.jsx)('th', {
                    className: R.headerCell,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: P.intl.string(P.t.Es7n9f)
                    })
                }),
                (0, l.jsx)('th', {
                    className: i()(R.headerCell, w.mediumCol),
                    children: (0, l.jsxs)(d.P3F, {
                        className: R.sortItem,
                        onClick: n,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: 'eyebrow',
                                color: 'interactive-normal',
                                children: P.intl.string(P.t.EZ5QWF)
                            }),
                            t === b.Nw.TIMESTAMP_ASC
                                ? (0, l.jsx)(_.Z, {
                                      className: R.sortIcon,
                                      direction: _.Z.Directions.UP
                                  })
                                : (0, l.jsx)(_.Z, {
                                      className: R.sortIcon,
                                      direction: _.Z.Directions.DOWN
                                  })
                        ]
                    })
                }),
                (0, l.jsx)('th', {
                    className: i()(R.headerCell, R.moreOptionsCol),
                    children: (0, l.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: P.intl.string(P.t['5Q9xGh'])
                    })
                })
            ]
        })
    });
}
let O = r.memo(function (e) {
        let { joinRequest: t, user: n } = e,
            { joinRequestId: a, guildId: i } = t,
            { analyticsLocations: s } = (0, x.ZP)(),
            o = r.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        e.preventDefault(),
                        (0, T.openUserProfileModal)({
                            userId: n.id,
                            joinRequestId: a,
                            sourceAnalyticsLocations: s
                        }));
                },
                [n, a, s]
            );
        return (0, l.jsxs)('div', {
            className: w.memberNameContainer,
            children: [
                (0, l.jsx)(d.P3F, {
                    className: w.memberAvatar,
                    onClick: o,
                    children: (0, l.jsx)(m.Z, { user: n })
                }),
                (0, l.jsx)('div', {
                    className: w.memberName,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        children: (0, l.jsxs)(d.P3F, {
                            onClick: o,
                            className: w.nameContainer,
                            children: [
                                n.globalName,
                                (0, l.jsx)(C.ZP, {
                                    primaryGuild: null == n ? void 0 : n.primaryGuild,
                                    userId: null == n ? void 0 : n.id,
                                    contextGuildId: i,
                                    containerClassName: w.memberClanTag
                                })
                            ]
                        })
                    })
                }),
                (0, l.jsx)('div', {
                    className: w.memberGlobalName,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        tag: 'span',
                        children: (0, l.jsx)(d.P3F, {
                            onClick: o,
                            tag: 'span',
                            children: S.ZP.getUserTag(n)
                        })
                    })
                })
            ]
        });
    }),
    A = r.memo(function (e) {
        let { joinRequest: t, onSelect: a } = e,
            { guildId: s, createdAt: m, applicationStatus: x } = t,
            h = r.useMemo(() => new E.Z(t.user), [t.user]),
            j = (0, p.L)({ guildId: s }),
            f = (0, c.e7)([N.Z], () => N.Z.getGuild(s)),
            v = x === b.wB.SUBMITTED,
            g = (e) => {
                (0, u.jW)(
                    e,
                    async () => {
                        let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                        return (t) => {
                            var n, r;
                            return (0, l.jsx)(
                                e,
                                ((n = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                ((l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = l));
                                            }));
                                    }
                                    return e;
                                })({}, t)),
                                (r = r =
                                    {
                                        guild: f,
                                        user: h
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, l);
                                          }
                                          return n;
                                      })(Object(r)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
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
            : (0, l.jsxs)('tr', {
                  onClick: a,
                  className: i()(w.roundedRow, w.memberRowContainer, { [w.selected]: (null == j ? void 0 : j.joinRequestId) === t.joinRequestId }),
                  children: [
                      (0, l.jsx)('td', {
                          children: (0, l.jsx)(O, {
                              joinRequest: t,
                              user: h
                          })
                      }),
                      (0, l.jsx)('td', {
                          className: w.mediumCol,
                          children: (0, l.jsx)(d.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: o()(m).format('lll')
                          })
                      }),
                      (0, l.jsx)('td', {
                          className: R.moreOptionsCol,
                          children:
                              v &&
                              (0, l.jsx)(d.ua7, {
                                  text: P.intl.string(P.t.x8Nn4O),
                                  children: (e) => {
                                      let { onMouseEnter: t, onMouseLeave: n } = e;
                                      return (0, l.jsx)(d.P3F, {
                                          onMouseEnter: t,
                                          onMouseLeave: n,
                                          onClick: g,
                                          className: w.button,
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
    k = () => {
        let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
            t = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
            n = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
        return (0, l.jsxs)('tr', {
            className: i()(w.roundedRow, w.memberRowContainer),
            children: [
                (0, l.jsx)('td', {
                    children: (0, l.jsxs)('div', {
                        className: w.memberNameContainer,
                        children: [
                            (0, l.jsx)('div', { className: i()(R.placeholderAvatar, w.memberAvatar) }),
                            (0, l.jsx)('div', {
                                className: w.memberName,
                                children: (0, l.jsx)('div', {
                                    className: R.placeholderText,
                                    style: { width: e }
                                })
                            }),
                            (0, l.jsx)('div', {
                                className: w.memberGlobalName,
                                children: (0, l.jsx)('div', {
                                    className: R.placeholderTextSmall,
                                    style: { width: t }
                                })
                            })
                        ]
                    })
                }),
                (0, l.jsx)('td', {
                    className: w.mediumCol,
                    children: (0, l.jsx)('div', {
                        className: R.placeholderText,
                        style: { width: n }
                    })
                }),
                (0, l.jsx)('td', { className: R.moreOptionsCol })
            ]
        });
    };
function B(e) {
    let { guildId: t, currentTab: n } = e,
        a = r.useRef(null),
        i = (0, c.e7)([N.Z], () => N.Z.getGuild(t)),
        s = (0, v.C)({ guildId: t }),
        o = (0, c.e7)([j.Z], () => j.Z.isFetching()),
        { guildJoinRequests: u } = (0, g.j)({
            guildId: t,
            applicationStatus: n,
            sortOrder: s
        }),
        { fetchNextPage: m } = (0, f.m)({
            guildId: t,
            guildJoinRequests: u
        }),
        x = r.useCallback(async () => {
            let e = s === b.Nw.TIMESTAMP_ASC ? b.Nw.TIMESTAMP_DESC : b.Nw.TIMESTAMP_ASC;
            (h.Z.setSelectedSortOrder(t, e), await m(e, n));
        }, [s, t, m, n]);
    return null == i
        ? null
        : (0, l.jsx)('div', {
              className: I.mainTableContainer,
              children: (0, l.jsx)(d.Den, {
                  className: I.horizatonalScroller,
                  ref: a,
                  orientation: 'horizontal',
                  children: (0, l.jsxs)('table', {
                      className: R.table,
                      children: [
                          (0, l.jsx)(M, {
                              sortOrder: s,
                              onSortChange: x
                          }),
                          (0, l.jsx)('tbody', {
                              children: o
                                  ? [, , , , ,].fill(0).map((e, t) => (0, l.jsx)(k, {}, 'placeholder-'.concat(t)))
                                  : 0 === u.length
                                    ? (0, l.jsx)('td', {
                                          colSpan: 3,
                                          children: (0, l.jsx)(y, { status: n })
                                      })
                                    : u.map((e) =>
                                          (0, l.jsx)(
                                              A,
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
