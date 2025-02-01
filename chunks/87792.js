n.d(t, { Z: () => B }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(399606),
    o = n(481060),
    c = n(626135),
    d = n(709054),
    u = n(914788),
    m = n(546791),
    h = n(259756),
    g = n(785681),
    _ = n(985002),
    x = n(858719),
    p = n(780985),
    E = n(880257),
    C = n(631885),
    f = n(240351),
    T = n(792258),
    N = n(657825),
    I = n(198952),
    S = n(329242),
    b = n(895328),
    v = n(292352),
    j = n(981631),
    A = n(388032),
    O = n(95857),
    R = n(441685);
function P() {
    let e = s.useCallback(() => {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('66462').then(n.bind(n, 756226));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    }, []);
    return (0, i.jsx)(o.P3F, {
        className: O.tooltip,
        onClick: e,
        children: (0, i.jsx)(o.d3s, {
            size: 'custom',
            color: 'currentColor',
            className: O.icon,
            width: 15,
            height: 15
        })
    });
}
function D(e) {
    let { displayType: t } = e,
        n = s.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(A.intl.string(A.t.Wu8BKy), o.ToastType.FAILURE));
        }, []),
        r = (0, E.Z)(),
        a = (0, x.ws)(t),
        c = (0, x.C7)(t),
        { loadMore: u, isMoreLoading: g } = (0, _.G)({ onError: n }),
        p = v.tx.get(t),
        [C, f] = s.useState(v.iB),
        I = (0, h.Xi)({ location: 'family_center_activity_section_web' }),
        S = s.useCallback(() => {
            f((e) => e + v.iB), u(t);
        }, [t, u]);
    l()(p, 'No text for action type');
    let b = p.sectionHeader(c),
        j = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = a[t];
                return (0, m.iB)(n)
                    ? (0, i.jsx)(
                          N.Z,
                          {
                              userId: n.entity_id,
                              timestamp: d.default.extractTimestamp(n.event_id),
                              timestampFormatter: p.timestampFormatter
                          },
                          n.event_id
                      )
                    : (0, m.f0)(n)
                      ? (0, i.jsx)(T.Z, { guildId: n.entity_id }, n.event_id)
                      : void 0;
            },
            [a, p.timestampFormatter]
        ),
        R = s.useCallback(
            () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Text, {
                            className: O.sectionHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: b
                        }),
                        void 0 !== p.sectionDescription
                            ? (0, i.jsx)(o.Text, {
                                  className: O.sectionDescription,
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: p.sectionDescription(null != r && r, I)
                              })
                            : null
                    ]
                }),
            [b, p, r, I]
        );
    if (0 === a.length) return null;
    let P = a.slice(0, C);
    return (0, i.jsxs)('div', {
        className: O.actionSection,
        children: [
            R(),
            (0, i.jsx)('div', {
                className: O.actions,
                style: { maxHeight: 65 * P.length },
                children: P.map((e, t) => j({ row: t }))
            }),
            P.length !== c
                ? (0, i.jsx)(o.P3F, {
                      className: O.loadMoreBar,
                      onClick: S,
                      role: 'button',
                      children: g
                          ? (0, i.jsx)(o.$jN, {
                                type: o.$jN.Type.PULSING_ELLIPSIS,
                                className: O.spinner
                            })
                          : (0, i.jsx)(o.Text, {
                                className: O.loadMore,
                                variant: 'text-sm/bold',
                                children: A.intl.format(A.t['7dMmJS'], { pageSize: Math.min(c - P.length, v.iB) })
                            })
                  })
                : null
        ]
    });
}
let y = () => {
        let e = (0, E.Z)(),
            t = (0, C.mq)(v.ne.ACTIVE),
            n = (0, g.o)(A.intl.formatToPlainString(A.t['7hqFl5'], { activeLinks: t.length }), A.intl.string(A.t['Q/D/0d'])),
            s = (0, m.Qr)(!!e),
            r = (0, C.Rd)(s);
        return e && t.length > 1
            ? (0, i.jsx)(o.Text, {
                  variant: 'eyebrow',
                  children: r
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, i.jsx)(o.tEF, {
                                size: 'xs',
                                color: 'currentColor',
                                className: O.icon
                            }),
                      (0, i.jsx)(o.Text, {
                          variant: 'eyebrow',
                          children: n
                      })
                  ]
              });
    },
    Z = (e) => {
        let { userId: t, subText: n, avatarSize: s = o.EFr.SIZE_40 } = e,
            r = (0, p.I)(t);
        return void 0 === r
            ? null
            : (0, i.jsxs)('div', {
                  className: O.accountRow,
                  children: [
                      (0, i.jsx)(I.r, {
                          user: r,
                          avatarSize: s
                      }),
                      (0, i.jsxs)('div', {
                          className: O.headerText,
                          children: [
                              (0, i.jsx)(S.Z, { user: r }),
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
    L = () => {
        let e = (0, C.mq)(v.ne.ACTIVE),
            t = (0, a.e7)([u.Z], () => u.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, _.G)({}),
            r = e.map((e) => ({
                label: e.id,
                value: e.id
            })),
            l = s.useCallback(
                (e) =>
                    (0, i.jsx)(Z, {
                        userId: e.value,
                        avatarSize: o.EFr.SIZE_24
                    }),
                []
            );
        return (0, i.jsx)(o.PhF, {
            className: O.select,
            renderOptionLabel: l,
            renderOptionValue: (e) => {
                let [t] = e;
                return l(t);
            },
            serialize: (e) => e,
            select: (e) => {
                n(e), c.default.track(j.rMx.FAMILY_CENTER_ACTION, { action: v.YC.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: r
        });
    },
    k = (e) => {
        let { userId: t } = e,
            n = (0, E.Z)(),
            s = (0, C.mq)(v.ne.ACTIVE),
            r = (0, m.Qr)(!!n),
            l = (0, C.Rd)(r);
        return n && 1 !== s.length
            ? (0, i.jsx)(L, {})
            : (0, i.jsx)(Z, {
                  userId: t,
                  subText: l
              });
    },
    B = (e) => {
        let { user: t } = e,
            n = Array.from(v.tx.entries()),
            s = (0, x.kE)(),
            r = (0, m.t3)(),
            l = (0, C.Rd)(r);
        return (0, i.jsxs)('div', {
            className: O.container,
            children: [
                (0, i.jsxs)('div', {
                    className: O.connectedCounter,
                    children: [(0, i.jsx)(y, {}), (0, i.jsx)(P, {})]
                }),
                (0, i.jsxs)('div', {
                    className: R.box,
                    children: [
                        (0, i.jsx)('div', {
                            className: O.header,
                            children: (0, i.jsx)(k, { userId: t.id })
                        }),
                        (0, i.jsxs)('div', {
                            className: O.content,
                            children: [
                                (0, i.jsx)('div', {
                                    className: O.activityCounterRow,
                                    children: n.map((e) => {
                                        let [t, n] = e;
                                        return (0, i.jsx)(
                                            f.Z,
                                            {
                                                displayType: t,
                                                header: n.tooltipHeader()
                                            },
                                            'counter-'.concat(t)
                                        );
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: O.activityOverview,
                                    children: s
                                        ? n.map((e) => {
                                              let [t] = e;
                                              return (0, i.jsx)(D, { displayType: t }, ''.concat(t, '-list'));
                                          })
                                        : (0, i.jsx)(b.Z, {
                                              className: O.emptyActivity,
                                              text: null != l ? l : ''
                                          })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
