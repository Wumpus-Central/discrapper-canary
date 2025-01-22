n(47120);
var i = n(200651),
    r = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(626135),
    d = n(709054),
    u = n(914788),
    m = n(546791),
    g = n(259756),
    h = n(785681),
    p = n(985002),
    x = n(858719),
    f = n(780985),
    _ = n(880257),
    E = n(631885),
    C = n(240351),
    T = n(792258),
    S = n(657825),
    b = n(198952),
    I = n(329242),
    N = n(895328),
    v = n(292352),
    A = n(981631),
    j = n(388032),
    O = n(95857);
function R() {
    let e = r.useCallback(() => {
        (0, o.openModalLazy)(async () => {
            let { default: e } = await n.e('66462').then(n.bind(n, 756226));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    }, []);
    return (0, i.jsx)(o.Clickable, {
        className: O.tooltip,
        onClick: e,
        children: (0, i.jsx)(o.CircleInformationIcon, {
            size: 'custom',
            color: 'currentColor',
            className: O.icon,
            width: 15,
            height: 15
        })
    });
}
function P(e) {
    let { displayType: t } = e,
        n = r.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(j.intl.string(j.t.Wu8BKy), o.ToastType.FAILURE));
        }, []),
        s = (0, _.Z)(),
        l = (0, x.ws)(t),
        c = (0, x.C7)(t),
        { loadMore: u, isMoreLoading: h } = (0, p.G)({ onError: n }),
        f = v.tx.get(t),
        [E, C] = r.useState(v.iB),
        b = (0, g.Xi)({ location: 'family_center_activity_section_web' }),
        I = r.useCallback(() => {
            C((e) => e + v.iB), u(t);
        }, [t, u]);
    a()(f, 'No text for action type');
    let N = f.sectionHeader(c),
        A = r.useCallback(
            (e) => {
                let { row: t } = e,
                    n = l[t];
                return (0, m.iB)(n)
                    ? (0, i.jsx)(
                          S.Z,
                          {
                              userId: n.entity_id,
                              timestamp: d.default.extractTimestamp(n.event_id),
                              timestampFormatter: f.timestampFormatter
                          },
                          n.event_id
                      )
                    : (0, m.f0)(n)
                      ? (0, i.jsx)(T.Z, { guildId: n.entity_id }, n.event_id)
                      : void 0;
            },
            [l, f.timestampFormatter]
        ),
        R = r.useCallback(
            () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.Text, {
                            className: O.sectionHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: N
                        }),
                        void 0 !== f.sectionDescription
                            ? (0, i.jsx)(o.Text, {
                                  className: O.sectionDescription,
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: f.sectionDescription(null != s && s, b)
                              })
                            : null
                    ]
                }),
            [N, f, s, b]
        );
    if (0 === l.length) return null;
    let P = l.slice(0, E);
    return (0, i.jsxs)('div', {
        className: O.actionSection,
        children: [
            R(),
            (0, i.jsx)('div', {
                className: O.actions,
                style: { maxHeight: 65 * P.length },
                children: P.map((e, t) => A({ row: t }))
            }),
            P.length !== c
                ? (0, i.jsx)(o.Clickable, {
                      className: O.loadMoreBar,
                      onClick: I,
                      role: 'button',
                      children: h
                          ? (0, i.jsx)(o.Spinner, {
                                type: o.Spinner.Type.PULSING_ELLIPSIS,
                                className: O.spinner
                            })
                          : (0, i.jsx)(o.Text, {
                                className: O.loadMore,
                                variant: 'text-sm/bold',
                                children: j.intl.format(j.t['7dMmJS'], { pageSize: Math.min(c - P.length, v.iB) })
                            })
                  })
                : null
        ]
    });
}
let D = () => {
        let e = (0, _.Z)(),
            t = (0, E.mq)(v.ne.ACTIVE),
            n = (0, h.o)(j.intl.formatToPlainString(j.t['7hqFl5'], { activeLinks: t.length }), j.intl.string(j.t['Q/D/0d'])),
            r = (0, m.Qr)(!!e),
            s = (0, E.Rd)(r);
        return e && t.length > 1
            ? (0, i.jsx)(o.Text, {
                  variant: 'eyebrow',
                  children: s
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, i.jsx)(o.EyeIcon, {
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
    y = (e) => {
        let { userId: t, subText: n, avatarSize: r = o.AvatarSizes.SIZE_40 } = e,
            s = (0, f.I)(t);
        return void 0 === s
            ? null
            : (0, i.jsxs)('div', {
                  className: O.accountRow,
                  children: [
                      (0, i.jsx)(b.r, {
                          user: s,
                          avatarSize: r
                      }),
                      (0, i.jsxs)('div', {
                          className: O.headerText,
                          children: [
                              (0, i.jsx)(I.Z, { user: s }),
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
        let e = (0, E.mq)(v.ne.ACTIVE),
            t = (0, l.e7)([u.Z], () => u.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, p.G)({}),
            s = e.map((e) => ({
                label: e.id,
                value: e.id
            })),
            a = r.useCallback(
                (e) =>
                    (0, i.jsx)(y, {
                        userId: e.value,
                        avatarSize: o.AvatarSizes.SIZE_24
                    }),
                []
            );
        return (0, i.jsx)(o.Select, {
            className: O.select,
            renderOptionLabel: a,
            renderOptionValue: (e) => {
                let [t] = e;
                return a(t);
            },
            serialize: (e) => e,
            select: (e) => {
                n(e), c.default.track(A.rMx.FAMILY_CENTER_ACTION, { action: v.YC.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: s
        });
    },
    Z = (e) => {
        let { userId: t } = e,
            n = (0, _.Z)(),
            r = (0, E.mq)(v.ne.ACTIVE),
            s = (0, m.Qr)(!!n),
            a = (0, E.Rd)(s);
        return n && 1 !== r.length
            ? (0, i.jsx)(B, {})
            : (0, i.jsx)(y, {
                  userId: t,
                  subText: a
              });
    };
t.Z = (e) => {
    let { user: t } = e,
        n = Array.from(v.tx.entries()),
        r = (0, x.kE)(),
        s = (0, m.t3)(),
        a = (0, E.Rd)(s);
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsxs)('div', {
                className: O.connectedCounter,
                children: [(0, i.jsx)(D, {}), (0, i.jsx)(R, {})]
            }),
            (0, i.jsxs)('div', {
                className: O.card,
                children: [
                    (0, i.jsx)('div', {
                        className: O.header,
                        children: (0, i.jsx)(Z, { userId: t.id })
                    }),
                    (0, i.jsxs)('div', {
                        className: O.content,
                        children: [
                            (0, i.jsx)('div', {
                                className: O.activityCounterRow,
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
                                className: O.activityOverview,
                                children: r
                                    ? n.map((e) => {
                                          let [t] = e;
                                          return (0, i.jsx)(P, { displayType: t }, ''.concat(t, '-list'));
                                      })
                                    : (0, i.jsx)(N.Z, {
                                          className: O.emptyActivity,
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
