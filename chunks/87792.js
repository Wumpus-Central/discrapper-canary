n.d(t, { Z: () => L }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(626135),
    d = n(709054),
    u = n(914788),
    m = n(546791),
    g = n(259756),
    p = n(785681),
    h = n(985002),
    f = n(858719),
    b = n(780985),
    N = n(880257),
    x = n(631885),
    _ = n(240351),
    E = n(792258),
    j = n(657825),
    O = n(198952),
    C = n(329242),
    S = n(895328),
    v = n(292352),
    T = n(981631),
    I = n(332495),
    y = n(388032),
    A = n(608308),
    P = n(589608);
function R() {
    let e = i.useCallback(() => {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('66462').then(n.bind(n, 756226));
            return (t) =>
                (0, r.jsx)(
                    e,
                    (function (e) {
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
                    })({}, t)
                );
        });
    }, []);
    return (0, r.jsx)(o.P3F, {
        className: A.tooltip,
        onClick: e,
        children: (0, r.jsx)(o.d3s, {
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
        n = i.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(y.NW.string(I.Z.Wu8BKy), o.ToastType.FAILURE));
        }, []),
        s = (0, N.Z)(),
        l = (0, f.ws)(t),
        c = (0, f.C7)(t),
        { loadMore: u, isMoreLoading: p } = (0, h.G)({ onError: n }),
        b = v.tx.get(t),
        [x, _] = i.useState(v.iB),
        O = (0, g.Xi)({ location: 'family_center_activity_section_web' }),
        C = i.useCallback(() => {
            _((e) => e + v.iB), u(t);
        }, [t, u]);
    a()(b, 'No text for action type');
    let S = b.sectionHeader(c),
        T = i.useCallback(
            (e) => {
                let { row: t } = e,
                    n = l[t];
                return (0, m.iB)(n)
                    ? (0, r.jsx)(
                          j.Z,
                          {
                              userId: n.entity_id,
                              timestamp: d.default.extractTimestamp(n.event_id),
                              timestampFormatter: b.timestampFormatter
                          },
                          n.event_id
                      )
                    : (0, m.f0)(n)
                      ? (0, r.jsx)(E.Z, { guildId: n.entity_id }, n.event_id)
                      : void 0;
            },
            [l, b.timestampFormatter]
        ),
        P = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: A.sectionHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: S
                        }),
                        void 0 !== b.sectionDescription
                            ? (0, r.jsx)(o.Text, {
                                  className: A.sectionDescription,
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: b.sectionDescription(null != s && s, O)
                              })
                            : null
                    ]
                }),
            [S, b, s, O]
        );
    if (0 === l.length) return null;
    let R = l.slice(0, x);
    return (0, r.jsxs)('div', {
        className: A.actionSection,
        children: [
            P(),
            (0, r.jsx)('div', {
                className: A.actions,
                style: { maxHeight: 65 * R.length },
                children: R.map((e, t) => T({ row: t }))
            }),
            R.length !== c
                ? (0, r.jsx)(o.P3F, {
                      className: A.loadMoreBar,
                      onClick: C,
                      role: 'button',
                      children: p
                          ? (0, r.jsx)(o.$jN, {
                                type: o.$jN.Type.PULSING_ELLIPSIS,
                                className: A.spinner
                            })
                          : (0, r.jsx)(o.Text, {
                                className: A.loadMore,
                                variant: 'text-sm/bold',
                                children: y.NW.format(I.Z['7dMmJS'], { pageSize: Math.min(c - R.length, v.iB) })
                            })
                  })
                : null
        ]
    });
}
let Z = () => {
        let e = (0, N.Z)(),
            t = (0, x.mq)(v.ne.ACTIVE),
            n = (0, p.o)(y.NW.formatToPlainString(I.Z['7hqFl5'], { activeLinks: t.length }), y.NW.string(I.Z['Q/D/0d'])),
            i = (0, m.Qr)(!!e),
            s = (0, x.Rd)(i);
        return e && t.length > 1
            ? (0, r.jsx)(o.Text, {
                  variant: 'eyebrow',
                  children: s
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, r.jsx)(o.tEF, {
                                size: 'xs',
                                color: 'currentColor',
                                className: A.icon
                            }),
                      (0, r.jsx)(o.Text, {
                          variant: 'eyebrow',
                          children: n
                      })
                  ]
              });
    },
    w = (e) => {
        let { userId: t, subText: n, avatarSize: i = o.EFr.SIZE_40 } = e,
            s = (0, b.I)(t);
        return void 0 === s
            ? null
            : (0, r.jsxs)('div', {
                  className: A.accountRow,
                  children: [
                      (0, r.jsx)(O.r, {
                          user: s,
                          avatarSize: i
                      }),
                      (0, r.jsxs)('div', {
                          className: A.headerText,
                          children: [
                              (0, r.jsx)(C.Z, { user: s }),
                              void 0 !== n
                                  ? (0, r.jsx)(o.Text, {
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
        let e = (0, x.mq)(v.ne.ACTIVE),
            t = (0, l.e7)([u.Z], () => u.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, h.G)({}),
            s = e.map((e) => ({
                label: e.id,
                value: e.id
            })),
            a = i.useCallback(
                (e) =>
                    (0, r.jsx)(w, {
                        userId: e.value,
                        avatarSize: o.EFr.SIZE_24
                    }),
                []
            );
        return (0, r.jsx)(o.PhF, {
            className: A.select,
            renderOptionLabel: a,
            renderOptionValue: (e) => {
                let [t] = e;
                return a(t);
            },
            serialize: (e) => e,
            select: (e) => {
                n(e), c.default.track(T.rMx.FAMILY_CENTER_ACTION, { action: v.YC.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: s
        });
    },
    W = (e) => {
        let { userId: t } = e,
            n = (0, N.Z)(),
            i = (0, x.mq)(v.ne.ACTIVE),
            s = (0, m.Qr)(!!n),
            a = (0, x.Rd)(s);
        return n && 1 !== i.length
            ? (0, r.jsx)(k, {})
            : (0, r.jsx)(w, {
                  userId: t,
                  subText: a
              });
    },
    L = (e) => {
        let { user: t } = e,
            n = Array.from(v.tx.entries()),
            i = (0, f.kE)(),
            s = (0, m.t3)(),
            a = (0, x.Rd)(s);
        return (0, r.jsxs)('div', {
            className: A.container,
            children: [
                (0, r.jsxs)('div', {
                    className: A.connectedCounter,
                    children: [(0, r.jsx)(Z, {}), (0, r.jsx)(R, {})]
                }),
                (0, r.jsxs)('div', {
                    className: P.box,
                    children: [
                        (0, r.jsx)('div', {
                            className: A.header,
                            children: (0, r.jsx)(W, { userId: t.id })
                        }),
                        (0, r.jsxs)('div', {
                            className: A.content,
                            children: [
                                (0, r.jsx)('div', {
                                    className: A.activityCounterRow,
                                    children: n.map((e) => {
                                        let [t, n] = e;
                                        return (0, r.jsx)(
                                            _.Z,
                                            {
                                                displayType: t,
                                                header: n.tooltipHeader()
                                            },
                                            'counter-'.concat(t)
                                        );
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: A.activityOverview,
                                    children: i
                                        ? n.map((e) => {
                                              let [t] = e;
                                              return (0, r.jsx)(D, { displayType: t }, ''.concat(t, '-list'));
                                          })
                                        : (0, r.jsx)(S.Z, {
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
