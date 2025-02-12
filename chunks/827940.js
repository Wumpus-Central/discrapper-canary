i.d(t, { default: () => A }), i(47120), i(653041);
var n = i(200651),
    l = i(192379),
    a = i(990547),
    r = i(442837),
    s = i(481060),
    o = i(493683),
    I = i(247272),
    u = i(904245),
    d = i(100527),
    _ = i(906732),
    c = i(213609),
    T = i(43267),
    N = i(933557),
    m = i(430824),
    S = i(751771),
    E = i(699516),
    O = i(594174),
    f = i(626135),
    g = i(768581),
    p = i(572004),
    P = i(971130),
    h = i(624138),
    D = i(51144),
    x = i(778569),
    v = i(981631),
    C = i(245335),
    y = i(388032),
    M = i(814955);
function A(e) {
    let { activityItem: t, analyticsLocations: i, ...T } = e,
        N = (0, r.e7)([O.default], () => O.default.getCurrentUser()),
        { analyticsLocations: m } = (0, _.ZP)(i);
    (0, c.Z)({
        type: a.ImpressionTypes.MODAL,
        name: a.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
        properties: {
            application_id: t.application.id,
            location_stack: m
        }
    });
    let [E, g] = l.useState(''),
        [p, h] = l.useState([]),
        D = (0, x.Z)({
            applicationId: t.application.id,
            size: 256
        }),
        A = ''.concat(window.location.origin).concat(v.Z5c.ACTIVITY_DETAILS(t.application.id)),
        R = (0, r.Wu)([S.Z], () => S.Z.getInviteSuggestionRows());
    l.useEffect(() => {
        (0, I.x)({
            omitUserIds: new Set(),
            applicationId: t.application.id,
            inviteTargetType: C.Iq.EMBEDDED_APPLICATION
        });
    }, [t.application.id]),
        l.useEffect(() => (0, I.C)(E), [E]);
    let Z = l.useCallback(async () => {
        let e = 0,
            i = 0,
            n = 0,
            l = S.Z.getInviteSuggestionRows()
                .filter((e) => p.includes(e.item.id))
                .map((t) =>
                    (function (t, l) {
                        switch (t.type) {
                            case P.bm.DM:
                            case P.bm.FRIEND:
                                e++;
                                break;
                            case P.bm.GROUP_DM:
                                i++;
                                break;
                            case P.bm.CHANNEL:
                                n++;
                        }
                        return t.type === P.bm.GROUP_DM || t.type === P.bm.CHANNEL ? u.Z.sendActivityBookmark(t.item.id, l, d.Z.ACTIVITY_DETAIL_PAGE, null) : t.type === P.bm.DM || t.type === P.bm.FRIEND ? o.Z.ensurePrivateChannel(t.item.id).then((e) => u.Z.sendActivityBookmark(e, A, d.Z.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve();
                    })(t, A)
                );
        await l,
            f.default.track(v.rMx.ACTIVITY_BOOKMARK_SHARED, {
                user_id: null == N ? void 0 : N.id,
                application_id: t.application.id,
                n_users: e,
                n_gdms: i,
                n_channels: n
            }),
            T.onClose();
    }, [t, p, T, A, N]);
    return (0, n.jsxs)(s.Y0X, {
        ...T,
        className: M.modalRoot,
        children: [
            (0, n.jsxs)(s.xBx, {
                className: M.header,
                children: [
                    (0, n.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        children: y.intl.format(y.t.tOVbbG, { activityName: t.application.name })
                    }),
                    (0, n.jsx)(s.olH, { onClick: T.onClose })
                ]
            }),
            (0, n.jsxs)(s.hzk, {
                className: M.modalContent,
                children: [
                    (0, n.jsx)(s.Rj2, {
                        className: M.searchBar,
                        placeholder: y.intl.string(y.t['5h0QOD']),
                        label: y.intl.string(y.t['5h0QOD']),
                        searchTerm: E,
                        onChange: (e) => g(e),
                        onClear: () => g('')
                    }),
                    R.map((e, t) =>
                        (0, n.jsxs)(
                            l.Fragment,
                            {
                                children: [
                                    0 === t ? null : (0, n.jsx)('div', { className: M.rowDivider }),
                                    (0, n.jsx)(U, {
                                        row: e,
                                        onClick: () => {
                                            let t = [...p];
                                            t.includes(e.item.id) ? (t = t.filter((t) => t !== e.item.id)) : t.push(e.item.id), h(t);
                                        },
                                        checked: p.includes(e.item.id)
                                    })
                                ]
                            },
                            e.item.id
                        )
                    )
                ]
            }),
            (0, n.jsxs)(s.mzw, {
                className: M.footer,
                children: [
                    (0, n.jsx)('div', {
                        className: M.activityInfoOuterContainer,
                        children: (0, n.jsxs)('div', {
                            className: M.activityInfoInnerContainer,
                            children: [
                                (0, n.jsx)('img', {
                                    src: D.url,
                                    className: M.activityInfoImage,
                                    alt: t.application.name
                                }),
                                (0, n.jsxs)('div', {
                                    className: M.activityInfoText,
                                    children: [
                                        (0, n.jsx)(s.Text, {
                                            variant: 'text-md/semibold',
                                            className: M.ellipsis,
                                            children: t.application.name
                                        }),
                                        (0, n.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            className: M.ellipsis,
                                            children: t.application.description
                                        }),
                                        (0, n.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            className: M.ellipsis,
                                            children: (0, n.jsx)(s.eee, {
                                                href: A,
                                                children: A
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, n.jsx)('div', { className: M.footerDivider }),
                    (0, n.jsxs)('div', {
                        className: M.copySendBar,
                        children: [
                            (0, n.jsx)(V, {
                                link: A,
                                applicationId: t.application.id
                            }),
                            (0, n.jsx)(s.zxk, {
                                onClick: Z,
                                disabled: p.length <= 0,
                                children: y.intl.string(y.t.TXNS7e)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let { row: t, onClick: i, checked: l } = e,
        a = null,
        r = null,
        o = null;
    switch (t.type) {
        case P.bm.DM:
        case P.bm.FRIEND:
            (a = (0, n.jsx)(s.qEK, {
                size: s.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                'aria-label': t.item.username
            })),
                (r = D.ZP.getName(t.item)),
                (o = D.ZP.getUserTag(t.item));
            break;
        case P.bm.GROUP_DM: {
            let e = (0, T.x)(t.item),
                i = (0, N.F6)(t.item, O.default, E.Z);
            (a = (0, n.jsx)(s.qEK, {
                src: e,
                'aria-label': i,
                size: s.EFr.SIZE_40
            })),
                (r = (0, N.F6)(t.item, O.default, E.Z));
            break;
        }
        case P.bm.CHANNEL: {
            let e = t.item,
                i = m.Z.getGuild(e.guild_id);
            if (null == i) return null;
            if (((r = '#'.concat((0, N.F6)(e, O.default, E.Z))), (o = i.name), null != i.icon)) {
                let t = g.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: i.icon,
                    size: 40
                });
                a = (0, n.jsx)(s.qEK, {
                    src: t,
                    'aria-label': r,
                    size: s.EFr.SIZE_40
                });
            } else {
                let e = (0, h.Zg)(i.name);
                a = (0, n.jsx)('div', {
                    className: M.acronym,
                    'aria-hidden': !0,
                    children: e
                });
            }
        }
    }
    return (0, n.jsxs)(s.P3F, {
        onClick: i,
        className: M.rowContainer,
        children: [
            (0, n.jsxs)('div', {
                className: M.rowLeft,
                children: [
                    (0, n.jsx)('div', {
                        className: M.rowAvatar,
                        children: a
                    }),
                    (0, n.jsxs)('div', {
                        className: M.rowNameContainer,
                        children: [
                            (0, n.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                className: M.rowName,
                                children: r
                            }),
                            (0, n.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                className: M.rowSubName,
                                children: o
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(s.XZJ, {
                value: l,
                type: s.XZJ.Types.INVERTED,
                displayOnly: !0,
                className: M.rowRight
            })
        ]
    });
}
function V(e) {
    let { applicationId: t, link: i } = e,
        a = (0, r.e7)([O.default], () => O.default.getCurrentUser()),
        [o, I] = l.useState(!1);
    return (
        l.useEffect(() => {
            let e;
            return (
                o &&
                    (e = setTimeout(() => {
                        I(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [o]),
        (0, n.jsxs)(s.zxk, {
            look: s.zxk.Looks.LINK,
            color: s.zxk.Colors.LINK,
            onClick: function () {
                f.default.track(v.rMx.ACTIVITY_BOOKMARK_COPY_URL, {
                    user_id: null == a ? void 0 : a.id,
                    application_id: t
                }),
                    (0, p.JG)(i),
                    I(!0);
            },
            innerClassName: M.copyButton,
            children: [
                o
                    ? (0, n.jsx)(s.owK, {
                          size: 'md',
                          color: 'currentColor'
                      })
                    : (0, n.jsx)(s.xPt, {
                          size: 'md',
                          color: 'currentColor'
                      }),
                o ? y.intl.string(y.t['t5VZ8/']) : y.intl.string(y.t.WqhZsr)
            ]
        })
    );
}
