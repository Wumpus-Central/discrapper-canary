n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    l = n(399606),
    o = n(481060),
    c = n(626135),
    d = n(709054),
    u = n(914788),
    m = n(546791),
    g = n(259756),
    _ = n(785681),
    p = n(985002),
    f = n(858719),
    h = n(780985),
    x = n(880257),
    E = n(631885),
    C = n(240351),
    b = n(792258),
    v = n(657825),
    T = n(198952),
    N = n(329242),
    I = n(895328),
    R = n(292352),
    j = n(981631),
    S = n(388032),
    A = n(255638),
    P = n(401549);
function Z() {
    let e = r.useCallback(() => {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('66462').then(n.bind(n, 756226));
            return (t) => (0, i.jsx)(e, { ...t });
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
function w(e) {
    let { displayType: t } = e,
        n = r.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.Wu8BKy), o.ToastType.FAILURE));
        }, []),
        a = (0, x.Z)(),
        l = (0, f.ws)(t),
        c = (0, f.C7)(t),
        { loadMore: u, isMoreLoading: _ } = (0, p.G)({ onError: n }),
        h = R.tx.get(t),
        [E, C] = r.useState(R.iB),
        T = (0, g.Xi)({ location: 'family_center_activity_section_web' }),
        N = r.useCallback(() => {
            C((e) => e + R.iB), u(t);
        }, [t, u]);
    s()(h, 'No text for action type');
    let I = h.sectionHeader(c),
        j = r.useCallback(
            (e) => {
                let { row: t } = e,
                    n = l[t];
                return (0, m.iB)(n)
                    ? (0, i.jsx)(
                          v.Z,
                          {
                              userId: n.entity_id,
                              timestamp: d.default.extractTimestamp(n.event_id),
                              timestampFormatter: h.timestampFormatter
                          },
                          n.event_id
                      )
                    : (0, m.f0)(n)
                      ? (0, i.jsx)(b.Z, { guildId: n.entity_id }, n.event_id)
                      : void 0;
            },
            [l, h.timestampFormatter]
        ),
        P = r.useCallback(
            () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Text, {
                            className: A.sectionHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: I
                        }),
                        void 0 !== h.sectionDescription
                            ? (0, i.jsx)(o.Text, {
                                  className: A.sectionDescription,
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: h.sectionDescription(null != a && a, T)
                              })
                            : null
                    ]
                }),
            [I, h, a, T]
        );
    if (0 === l.length) return null;
    let Z = l.slice(0, E);
    return (0, i.jsxs)('div', {
        className: A.actionSection,
        children: [
            P(),
            (0, i.jsx)('div', {
                className: A.actions,
                style: { maxHeight: 65 * Z.length },
                children: Z.map((e, t) => j({ row: t }))
            }),
            Z.length !== c
                ? (0, i.jsx)(o.P3F, {
                      className: A.loadMoreBar,
                      onClick: N,
                      role: 'button',
                      children: _
                          ? (0, i.jsx)(o.$jN, {
                                type: o.$jN.Type.PULSING_ELLIPSIS,
                                className: A.spinner
                            })
                          : (0, i.jsx)(o.Text, {
                                className: A.loadMore,
                                variant: 'text-sm/bold',
                                children: S.intl.format(S.t['7dMmJS'], { pageSize: Math.min(c - Z.length, R.iB) })
                            })
                  })
                : null
        ]
    });
}
let M = () => {
        let e = (0, x.Z)(),
            t = (0, E.mq)(R.ne.ACTIVE),
            n = (0, _.o)(S.intl.formatToPlainString(S.t['7hqFl5'], { activeLinks: t.length }), S.intl.string(S.t['Q/D/0d'])),
            r = (0, m.Qr)(!!e),
            a = (0, E.Rd)(r);
        return e && t.length > 1
            ? (0, i.jsx)(o.Text, {
                  variant: 'eyebrow',
                  children: a
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
    B = (e) => {
        let { userId: t, subText: n, avatarSize: r = o.EFr.SIZE_40 } = e,
            a = (0, h.I)(t);
        return void 0 === a
            ? null
            : (0, i.jsxs)('div', {
                  className: A.accountRow,
                  children: [
                      (0, i.jsx)(T.r, {
                          user: a,
                          avatarSize: r
                      }),
                      (0, i.jsxs)('div', {
                          className: A.headerText,
                          children: [
                              (0, i.jsx)(N.Z, { user: a }),
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
    y = () => {
        let e = (0, E.mq)(R.ne.ACTIVE),
            t = (0, l.e7)([u.Z], () => u.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, p.G)({}),
            a = e.map((e) => ({
                label: e.id,
                value: e.id
            })),
            s = r.useCallback(
                (e) =>
                    (0, i.jsx)(B, {
                        userId: e.value,
                        avatarSize: o.EFr.SIZE_24
                    }),
                []
            );
        return (0, i.jsx)(o.PhF, {
            className: A.select,
            renderOptionLabel: s,
            renderOptionValue: (e) => {
                let [t] = e;
                return s(t);
            },
            serialize: (e) => e,
            select: (e) => {
                n(e), c.default.track(j.rMx.FAMILY_CENTER_ACTION, { action: R.YC.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: a
        });
    },
    k = (e) => {
        let { userId: t } = e,
            n = (0, x.Z)(),
            r = (0, E.mq)(R.ne.ACTIVE),
            a = (0, m.Qr)(!!n),
            s = (0, E.Rd)(a);
        return n && 1 !== r.length
            ? (0, i.jsx)(y, {})
            : (0, i.jsx)(B, {
                  userId: t,
                  subText: s
              });
    },
    O = (e) => {
        let { user: t } = e,
            n = Array.from(R.tx.entries()),
            r = (0, f.kE)(),
            a = (0, m.t3)(),
            s = (0, E.Rd)(a);
        return (0, i.jsxs)('div', {
            className: A.container,
            children: [
                (0, i.jsxs)('div', {
                    className: A.connectedCounter,
                    children: [(0, i.jsx)(M, {}), (0, i.jsx)(Z, {})]
                }),
                (0, i.jsxs)('div', {
                    className: P.box,
                    children: [
                        (0, i.jsx)('div', {
                            className: A.header,
                            children: (0, i.jsx)(k, { userId: t.id })
                        }),
                        (0, i.jsxs)('div', {
                            className: A.content,
                            children: [
                                (0, i.jsx)('div', {
                                    className: A.activityCounterRow,
                                    children: n.map((e) => {
                                        let [t, n] = e;
                                        return (0, i.jsx)(
                                            C.Z,
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
                                              return (0, i.jsx)(w, { displayType: t }, ''.concat(t, '-list'));
                                          })
                                        : (0, i.jsx)(I.Z, {
                                              className: A.emptyActivity,
                                              text: null != s ? s : ''
                                          })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
