(n.d(t, { Z: () => B }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(512722),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(626135),
    d = n(709054),
    u = n(914788),
    m = n(546791),
    p = n(259756),
    g = n(785681),
    h = n(985002),
    f = n(858719),
    b = n(780985),
    x = n(880257),
    _ = n(631885),
    j = n(240351),
    O = n(792258),
    C = n(657825),
    E = n(198952),
    v = n(329242),
    S = n(895328),
    T = n(292352),
    N = n(981631),
    I = n(916723),
    y = n(388032),
    A = n(608308),
    P = n(589608);
function R() {
    let e = r.useCallback(() => {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('66462').then(n.bind(n, 756226));
            return (t) =>
                (0, i.jsx)(
                    e,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })({}, t)
                );
        });
    }, []);
    return (0, i.jsx)(o.P3F, {
        className: A.tooltip,
        onClick: e,
        children: (0, i.jsx)(o.d3s, {
            size: 'custom',
            color: 'currentColor',
            className: A.icon,
            width: 15,
            height: 15
        })
    });
}
function D(e) {
    let { displayType: t } = e,
        n = r.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(y.intl.string(I.default.Wu8BKy), o.ToastType.FAILURE));
        }, []),
        s = (0, x.Z)(),
        l = (0, f.ws)(t),
        c = (0, f.C7)(t),
        { loadMore: u, isMoreLoading: g } = (0, h.G)({ onError: n }),
        b = T.tx.get(t),
        [_, j] = r.useState(T.iB),
        E = (0, p.Xi)({ location: 'family_center_activity_section_web' }),
        v = r.useCallback(() => {
            (j((e) => e + T.iB), u(t));
        }, [t, u]);
    a()(b, 'No text for action type');
    let S = b.sectionHeader(c),
        N = r.useCallback(
            (e) => {
                let { row: t } = e,
                    n = l[t];
                return (0, m.iB)(n)
                    ? (0, i.jsx)(
                          C.Z,
                          {
                              userId: n.entity_id,
                              timestamp: d.default.extractTimestamp(n.event_id),
                              timestampFormatter: b.timestampFormatter
                          },
                          n.event_id
                      )
                    : (0, m.f0)(n)
                      ? (0, i.jsx)(O.Z, { guildId: n.entity_id }, n.event_id)
                      : void 0;
            },
            [l, b.timestampFormatter]
        ),
        P = r.useCallback(
            () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Text, {
                            className: A.sectionHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: S
                        }),
                        void 0 !== b.sectionDescription
                            ? (0, i.jsx)(o.Text, {
                                  className: A.sectionDescription,
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: b.sectionDescription(null != s && s, E)
                              })
                            : null
                    ]
                }),
            [S, b, s, E]
        );
    if (0 === l.length) return null;
    let R = l.slice(0, _);
    return (0, i.jsxs)('div', {
        className: A.actionSection,
        children: [
            P(),
            (0, i.jsx)('div', {
                className: A.actions,
                style: { maxHeight: 65 * R.length },
                children: R.map((e, t) => N({ row: t }))
            }),
            R.length !== c
                ? (0, i.jsx)(o.P3F, {
                      className: A.loadMoreBar,
                      onClick: v,
                      role: 'button',
                      children: g
                          ? (0, i.jsx)(o.$jN, {
                                type: o.$jN.Type.PULSING_ELLIPSIS,
                                className: A.spinner
                            })
                          : (0, i.jsx)(o.Text, {
                                className: A.loadMore,
                                variant: 'text-sm/bold',
                                children: y.intl.format(I.default['7dMmJS'], { pageSize: Math.min(c - R.length, T.iB) })
                            })
                  })
                : null
        ]
    });
}
let Z = () => {
        let e = (0, x.Z)(),
            t = (0, _.mq)(T.ne.ACTIVE),
            n = (0, g.o)(y.intl.formatToPlainString(I.default['7hqFl5'], { activeLinks: t.length }), y.intl.string(I.default['Q/D/0d'])),
            r = (0, m.Qr)(!!e),
            s = (0, _.Rd)(r);
        return e && t.length > 1
            ? (0, i.jsx)(o.Text, {
                  variant: 'eyebrow',
                  children: s
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, i.jsx)(o.tEF, {
                                size: 'xs',
                                color: 'currentColor',
                                className: A.icon
                            }),
                      (0, i.jsx)(o.Text, {
                          variant: 'eyebrow',
                          children: n
                      })
                  ]
              });
    },
    w = (e) => {
        let { userId: t, subText: n, avatarSize: r = o.EFr.SIZE_40 } = e,
            s = (0, b.I)(t);
        return void 0 === s
            ? null
            : (0, i.jsxs)('div', {
                  className: A.accountRow,
                  children: [
                      (0, i.jsx)(E.r, {
                          user: s,
                          avatarSize: r
                      }),
                      (0, i.jsxs)('div', {
                          className: A.headerText,
                          children: [
                              (0, i.jsx)(v.Z, { user: s }),
                              void 0 !== n
                                  ? (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'text-muted',
                                        children: n
                                    })
                                  : null
                          ]
                      })
                  ]
              });
    },
    k = () => {
        let e = (0, _.mq)(T.ne.ACTIVE),
            t = (0, l.e7)([u.Z], () => u.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, h.G)({}),
            s = e.map((e) => ({
                label: e.id,
                value: e.id
            })),
            a = r.useCallback(
                (e) =>
                    (0, i.jsx)(w, {
                        userId: e.value,
                        avatarSize: o.EFr.SIZE_24
                    }),
                []
            );
        return (0, i.jsx)(o.PhF, {
            className: A.select,
            renderOptionLabel: a,
            renderOptionValue: (e) => {
                let [t] = e;
                return a(t);
            },
            serialize: (e) => e,
            select: (e) => {
                (n(e), c.default.track(N.rMx.FAMILY_CENTER_ACTION, { action: T.YC.SelectTeen }));
            },
            isSelected: (e) => e === t,
            options: s
        });
    },
    L = (e) => {
        let { userId: t } = e,
            n = (0, x.Z)(),
            r = (0, _.mq)(T.ne.ACTIVE),
            s = (0, m.Qr)(!!n),
            a = (0, _.Rd)(s);
        return n && 1 !== r.length
            ? (0, i.jsx)(k, {})
            : (0, i.jsx)(w, {
                  userId: t,
                  subText: a
              });
    },
    B = (e) => {
        let { user: t } = e,
            n = Array.from(T.tx.entries()),
            r = (0, f.kE)(),
            s = (0, m.t3)(),
            a = (0, _.Rd)(s);
        return (0, i.jsxs)('div', {
            className: A.container,
            children: [
                (0, i.jsxs)('div', {
                    className: A.connectedCounter,
                    children: [(0, i.jsx)(Z, {}), (0, i.jsx)(R, {})]
                }),
                (0, i.jsxs)('div', {
                    className: P.box,
                    children: [
                        (0, i.jsx)('div', {
                            className: A.header,
                            children: (0, i.jsx)(L, { userId: t.id })
                        }),
                        (0, i.jsxs)('div', {
                            className: A.content,
                            children: [
                                (0, i.jsx)('div', {
                                    className: A.activityCounterRow,
                                    children: n.map((e) => {
                                        let [t, n] = e;
                                        return (0, i.jsx)(
                                            j.Z,
                                            {
                                                displayType: t,
                                                header: n.tooltipHeader()
                                            },
                                            'counter-'.concat(t)
                                        );
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: A.activityOverview,
                                    children: r
                                        ? n.map((e) => {
                                              let [t] = e;
                                              return (0, i.jsx)(D, { displayType: t }, ''.concat(t, '-list'));
                                          })
                                        : (0, i.jsx)(S.Z, {
                                              className: A.emptyActivity,
                                              text: null != a ? a : ''
                                          })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
