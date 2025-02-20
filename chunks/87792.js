n.d(t, { Z: () => W }), n(47120);
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
    C = n(198952),
    O = n(329242),
    v = n(895328),
    S = n(292352),
    T = n(981631),
    I = n(388032),
    y = n(368014),
    A = n(236837);
function P() {
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
        className: y.tooltip,
        onClick: e,
        children: (0, r.jsx)(o.d3s, {
            size: 'custom',
            color: 'currentColor',
            className: y.icon,
            width: 15,
            height: 15
        })
    });
}
function R(e) {
    let { displayType: t } = e,
        n = i.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(I.NW.string(I.t.Wu8BKy), o.ToastType.FAILURE));
        }, []),
        s = (0, N.Z)(),
        l = (0, f.ws)(t),
        c = (0, f.C7)(t),
        { loadMore: u, isMoreLoading: p } = (0, h.G)({ onError: n }),
        b = S.tx.get(t),
        [x, _] = i.useState(S.iB),
        C = (0, g.Xi)({ location: 'family_center_activity_section_web' }),
        O = i.useCallback(() => {
            _((e) => e + S.iB), u(t);
        }, [t, u]);
    a()(b, 'No text for action type');
    let v = b.sectionHeader(c),
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
        A = i.useCallback(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: y.sectionHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: v
                        }),
                        void 0 !== b.sectionDescription
                            ? (0, r.jsx)(o.Text, {
                                  className: y.sectionDescription,
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: b.sectionDescription(null != s && s, C)
                              })
                            : null
                    ]
                }),
            [v, b, s, C]
        );
    if (0 === l.length) return null;
    let P = l.slice(0, x);
    return (0, r.jsxs)('div', {
        className: y.actionSection,
        children: [
            A(),
            (0, r.jsx)('div', {
                className: y.actions,
                style: { maxHeight: 65 * P.length },
                children: P.map((e, t) => T({ row: t }))
            }),
            P.length !== c
                ? (0, r.jsx)(o.P3F, {
                      className: y.loadMoreBar,
                      onClick: O,
                      role: 'button',
                      children: p
                          ? (0, r.jsx)(o.$jN, {
                                type: o.$jN.Type.PULSING_ELLIPSIS,
                                className: y.spinner
                            })
                          : (0, r.jsx)(o.Text, {
                                className: y.loadMore,
                                variant: 'text-sm/bold',
                                children: I.NW.format(I.t['7dMmJS'], { pageSize: Math.min(c - P.length, S.iB) })
                            })
                  })
                : null
        ]
    });
}
let D = () => {
        let e = (0, N.Z)(),
            t = (0, x.mq)(S.ne.ACTIVE),
            n = (0, p.o)(I.NW.formatToPlainString(I.t['7hqFl5'], { activeLinks: t.length }), I.NW.string(I.t['Q/D/0d'])),
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
                                className: y.icon
                            }),
                      (0, r.jsx)(o.Text, {
                          variant: 'eyebrow',
                          children: n
                      })
                  ]
              });
    },
    Z = (e) => {
        let { userId: t, subText: n, avatarSize: i = o.EFr.SIZE_40 } = e,
            s = (0, b.I)(t);
        return void 0 === s
            ? null
            : (0, r.jsxs)('div', {
                  className: y.accountRow,
                  children: [
                      (0, r.jsx)(C.r, {
                          user: s,
                          avatarSize: i
                      }),
                      (0, r.jsxs)('div', {
                          className: y.headerText,
                          children: [
                              (0, r.jsx)(O.Z, { user: s }),
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
    w = () => {
        let e = (0, x.mq)(S.ne.ACTIVE),
            t = (0, l.e7)([u.Z], () => u.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, h.G)({}),
            s = e.map((e) => ({
                label: e.id,
                value: e.id
            })),
            a = i.useCallback(
                (e) =>
                    (0, r.jsx)(Z, {
                        userId: e.value,
                        avatarSize: o.EFr.SIZE_24
                    }),
                []
            );
        return (0, r.jsx)(o.PhF, {
            className: y.select,
            renderOptionLabel: a,
            renderOptionValue: (e) => {
                let [t] = e;
                return a(t);
            },
            serialize: (e) => e,
            select: (e) => {
                n(e), c.default.track(T.rMx.FAMILY_CENTER_ACTION, { action: S.YC.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: s
        });
    },
    k = (e) => {
        let { userId: t } = e,
            n = (0, N.Z)(),
            i = (0, x.mq)(S.ne.ACTIVE),
            s = (0, m.Qr)(!!n),
            a = (0, x.Rd)(s);
        return n && 1 !== i.length
            ? (0, r.jsx)(w, {})
            : (0, r.jsx)(Z, {
                  userId: t,
                  subText: a
              });
    },
    W = (e) => {
        let { user: t } = e,
            n = Array.from(S.tx.entries()),
            i = (0, f.kE)(),
            s = (0, m.t3)(),
            a = (0, x.Rd)(s);
        return (0, r.jsxs)('div', {
            className: y.container,
            children: [
                (0, r.jsxs)('div', {
                    className: y.connectedCounter,
                    children: [(0, r.jsx)(D, {}), (0, r.jsx)(P, {})]
                }),
                (0, r.jsxs)('div', {
                    className: A.box,
                    children: [
                        (0, r.jsx)('div', {
                            className: y.header,
                            children: (0, r.jsx)(k, { userId: t.id })
                        }),
                        (0, r.jsxs)('div', {
                            className: y.content,
                            children: [
                                (0, r.jsx)('div', {
                                    className: y.activityCounterRow,
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
                                    className: y.activityOverview,
                                    children: i
                                        ? n.map((e) => {
                                              let [t] = e;
                                              return (0, r.jsx)(R, { displayType: t }, ''.concat(t, '-list'));
                                          })
                                        : (0, r.jsx)(v.Z, {
                                              className: y.emptyActivity,
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
