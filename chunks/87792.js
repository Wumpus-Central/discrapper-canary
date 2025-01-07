n(47120);
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    l = n(399606),
    o = n(481060),
    c = n(626135),
    d = n(709054),
    u = n(914788),
    g = n(546791),
    m = n(259756),
    f = n(785681),
    p = n(985002),
    _ = n(858719),
    h = n(780985),
    x = n(880257),
    E = n(631885),
    b = n(240351),
    C = n(792258),
    v = n(657825),
    T = n(198952),
    N = n(329242),
    I = n(895328),
    S = n(292352),
    R = n(981631),
    j = n(388032),
    A = n(95857);
function P() {
    let e = r.useCallback(() => {
        (0, o.openModalLazy)(async () => {
            let { default: e } = await n.e('66462').then(n.bind(n, 756226));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    }, []);
    return (0, i.jsx)(o.Clickable, {
        className: A.tooltip,
        onClick: e,
        children: (0, i.jsx)(o.CircleInformationIcon, {
            size: 'custom',
            color: 'currentColor',
            className: A.icon,
            width: 15,
            height: 15
        })
    });
}
function O(e) {
    let { displayType: t } = e,
        n = r.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(j.intl.string(j.t.Wu8BKy), o.ToastType.FAILURE));
        }, []),
        a = (0, x.Z)(),
        l = (0, _.ws)(t),
        c = (0, _.C7)(t),
        { loadMore: u, isMoreLoading: f } = (0, p.G)({ onError: n }),
        h = S.tx.get(t),
        [E, b] = r.useState(S.iB),
        T = (0, m.Xi)({ location: 'family_center_activity_section_web' }),
        N = r.useCallback(() => {
            b((e) => e + S.iB), u(t);
        }, [t, u]);
    s()(h, 'No text for action type');
    let I = h.sectionHeader(c),
        R = r.useCallback(
            (e) => {
                let { row: t } = e,
                    n = l[t];
                return (0, g.iB)(n)
                    ? (0, i.jsx)(
                          v.Z,
                          {
                              userId: n.entity_id,
                              timestamp: d.default.extractTimestamp(n.event_id),
                              timestampFormatter: h.timestampFormatter
                          },
                          n.event_id
                      )
                    : (0, g.f0)(n)
                      ? (0, i.jsx)(C.Z, { guildId: n.entity_id }, n.event_id)
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
    let O = l.slice(0, E);
    return (0, i.jsxs)('div', {
        className: A.actionSection,
        children: [
            P(),
            (0, i.jsx)('div', {
                className: A.actions,
                style: { maxHeight: 65 * O.length },
                children: O.map((e, t) => R({ row: t }))
            }),
            O.length !== c
                ? (0, i.jsx)(o.Clickable, {
                      className: A.loadMoreBar,
                      onClick: N,
                      role: 'button',
                      children: f
                          ? (0, i.jsx)(o.Spinner, {
                                type: o.Spinner.Type.PULSING_ELLIPSIS,
                                className: A.spinner
                            })
                          : (0, i.jsx)(o.Text, {
                                className: A.loadMore,
                                variant: 'text-sm/bold',
                                children: j.intl.format(j.t['7dMmJS'], { pageSize: Math.min(c - O.length, S.iB) })
                            })
                  })
                : null
        ]
    });
}
let Z = () => {
        let e = (0, x.Z)(),
            t = (0, E.mq)(S.ne.ACTIVE),
            n = (0, f.o)(j.intl.formatToPlainString(j.t['7hqFl5'], { activeLinks: t.length }), j.intl.string(j.t['Q/D/0d'])),
            r = (0, g.Qr)(!!e),
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
                          : (0, i.jsx)(o.EyeIcon, {
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
    M = (e) => {
        let { userId: t, subText: n, avatarSize: r = o.AvatarSizes.SIZE_40 } = e,
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
    B = () => {
        let e = (0, E.mq)(S.ne.ACTIVE),
            t = (0, l.e7)([u.Z], () => u.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, p.G)({}),
            a = e.map((e) => ({
                label: e.id,
                value: e.id
            })),
            s = r.useCallback(
                (e) =>
                    (0, i.jsx)(M, {
                        userId: e.value,
                        avatarSize: o.AvatarSizes.SIZE_24
                    }),
                []
            );
        return (0, i.jsx)(o.Select, {
            className: A.select,
            renderOptionLabel: s,
            renderOptionValue: (e) => {
                let [t] = e;
                return s(t);
            },
            serialize: (e) => e,
            select: (e) => {
                n(e), c.default.track(R.rMx.FAMILY_CENTER_ACTION, { action: S.YC.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: a
        });
    },
    y = (e) => {
        let { userId: t } = e,
            n = (0, x.Z)(),
            r = (0, E.mq)(S.ne.ACTIVE),
            a = (0, g.Qr)(!!n),
            s = (0, E.Rd)(a);
        return n && 1 !== r.length
            ? (0, i.jsx)(B, {})
            : (0, i.jsx)(M, {
                  userId: t,
                  subText: s
              });
    };
t.Z = (e) => {
    let { user: t } = e,
        n = Array.from(S.tx.entries()),
        r = (0, _.kE)(),
        a = (0, g.t3)(),
        s = (0, E.Rd)(a);
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsxs)('div', {
                className: A.connectedCounter,
                children: [(0, i.jsx)(Z, {}), (0, i.jsx)(P, {})]
            }),
            (0, i.jsxs)('div', {
                className: A.card,
                children: [
                    (0, i.jsx)('div', {
                        className: A.header,
                        children: (0, i.jsx)(y, { userId: t.id })
                    }),
                    (0, i.jsxs)('div', {
                        className: A.content,
                        children: [
                            (0, i.jsx)('div', {
                                className: A.activityCounterRow,
                                children: n.map((e) => {
                                    let [t, n] = e;
                                    return (0, i.jsx)(
                                        b.Z,
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
                                          return (0, i.jsx)(O, { displayType: t }, ''.concat(t, '-list'));
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
