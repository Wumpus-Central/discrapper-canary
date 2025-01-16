n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    }),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    a = n(990547),
    l = n(442837),
    s = n(481060),
    o = n(493683),
    u = n(247272),
    I = n(904245),
    c = n(100527),
    d = n(906732),
    _ = n(213609),
    T = n(43267),
    N = n(933557),
    m = n(430824),
    S = n(751771),
    f = n(699516),
    O = n(594174),
    E = n(626135),
    g = n(768581),
    p = n(572004),
    P = n(971130),
    h = n(624138),
    D = n(51144),
    C = n(778569),
    v = n(981631),
    A = n(245335),
    M = n(388032),
    y = n(411362);
function x(e) {
    let { activityItem: t, analyticsLocations: n, ...T } = e,
        N = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
        { analyticsLocations: m } = (0, d.ZP)(n);
    (0, _.Z)({
        type: a.ImpressionTypes.MODAL,
        name: a.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
        properties: {
            application_id: t.application.id,
            location_stack: m
        }
    });
    let [f, g] = r.useState(''),
        [p, h] = r.useState([]),
        D = (0, C.Z)({
            applicationId: t.application.id,
            size: 256
        }),
        x = ''.concat(window.location.origin).concat(v.Z5c.ACTIVITY_DETAILS(t.application.id)),
        V = (0, l.Wu)([S.Z], () => S.Z.getInviteSuggestionRows());
    r.useEffect(() => {
        (0, u.x)({
            omitUserIds: new Set(),
            applicationId: t.application.id,
            inviteTargetType: A.Iq.EMBEDDED_APPLICATION
        });
    }, [t.application.id]),
        r.useEffect(() => (0, u.C)(f), [f]);
    let R = r.useCallback(async () => {
        let e = 0,
            n = 0,
            i = 0,
            r = S.Z.getInviteSuggestionRows()
                .filter((e) => p.includes(e.item.id))
                .map((t) =>
                    (function (t, r) {
                        switch (t.type) {
                            case P.bm.DM:
                            case P.bm.FRIEND:
                                e++;
                                break;
                            case P.bm.GROUP_DM:
                                n++;
                                break;
                            case P.bm.CHANNEL:
                                i++;
                        }
                        return t.type === P.bm.GROUP_DM || t.type === P.bm.CHANNEL ? I.Z.sendActivityBookmark(t.item.id, r, c.Z.ACTIVITY_DETAIL_PAGE, null) : t.type === P.bm.DM || t.type === P.bm.FRIEND ? o.Z.ensurePrivateChannel(t.item.id).then((e) => I.Z.sendActivityBookmark(e, x, c.Z.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve();
                    })(t, x)
                );
        await r,
            E.default.track(v.rMx.ACTIVITY_BOOKMARK_SHARED, {
                user_id: null == N ? void 0 : N.id,
                application_id: t.application.id,
                n_users: e,
                n_gdms: n,
                n_channels: i
            }),
            T.onClose();
    }, [t, p, T, x, N]);
    return (0, i.jsxs)(s.ModalRoot, {
        ...T,
        className: y.modalRoot,
        children: [
            (0, i.jsxs)(s.ModalHeader, {
                className: y.header,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-md/semibold',
                        children: M.intl.format(M.t.tOVbbG, { activityName: t.application.name })
                    }),
                    (0, i.jsx)(s.ModalCloseButton, { onClick: T.onClose })
                ]
            }),
            (0, i.jsxs)(s.ModalContent, {
                className: y.modalContent,
                children: [
                    (0, i.jsx)(s.SearchBox, {
                        className: y.searchBar,
                        placeholder: M.intl.string(M.t['5h0QOD']),
                        label: M.intl.string(M.t['5h0QOD']),
                        searchTerm: f,
                        onChange: (e) => g(e),
                        onClear: () => g('')
                    }),
                    V.map((e, t) =>
                        (0, i.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    0 === t ? null : (0, i.jsx)('div', { className: y.rowDivider }),
                                    (0, i.jsx)(b, {
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
            (0, i.jsxs)(s.ModalFooter, {
                className: y.footer,
                children: [
                    (0, i.jsx)('div', {
                        className: y.activityInfoOuterContainer,
                        children: (0, i.jsxs)('div', {
                            className: y.activityInfoInnerContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    src: D.url,
                                    className: y.activityInfoImage,
                                    alt: t.application.name
                                }),
                                (0, i.jsxs)('div', {
                                    className: y.activityInfoText,
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-md/semibold',
                                            className: y.ellipsis,
                                            children: t.application.name
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            className: y.ellipsis,
                                            children: t.application.description
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            className: y.ellipsis,
                                            children: (0, i.jsx)(s.Anchor, {
                                                href: x,
                                                children: x
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)('div', { className: y.footerDivider }),
                    (0, i.jsxs)('div', {
                        className: y.copySendBar,
                        children: [
                            (0, i.jsx)(U, {
                                link: x,
                                applicationId: t.application.id
                            }),
                            (0, i.jsx)(s.Button, {
                                onClick: R,
                                disabled: p.length <= 0,
                                children: M.intl.string(M.t.TXNS7e)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function b(e) {
    let { row: t, onClick: n, checked: r } = e,
        a = null,
        l = null,
        o = null;
    switch (t.type) {
        case P.bm.DM:
        case P.bm.FRIEND:
            (a = (0, i.jsx)(s.Avatar, {
                size: s.AvatarSizes.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                'aria-label': t.item.username
            })),
                (l = D.ZP.getName(t.item)),
                (o = D.ZP.getUserTag(t.item));
            break;
        case P.bm.GROUP_DM: {
            let e = (0, T.x)(t.item),
                n = (0, N.F6)(t.item, O.default, f.Z);
            (a = (0, i.jsx)(s.Avatar, {
                src: e,
                'aria-label': n,
                size: s.AvatarSizes.SIZE_40
            })),
                (l = (0, N.F6)(t.item, O.default, f.Z));
            break;
        }
        case P.bm.CHANNEL: {
            let e = t.item,
                n = m.Z.getGuild(e.guild_id);
            if (null == n) return null;
            if (((l = '#'.concat((0, N.F6)(e, O.default, f.Z))), (o = n.name), null != n.icon)) {
                let t = g.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: n.icon,
                    size: 40
                });
                a = (0, i.jsx)(s.Avatar, {
                    src: t,
                    'aria-label': l,
                    size: s.AvatarSizes.SIZE_40
                });
            } else {
                let e = (0, h.Zg)(n.name);
                a = (0, i.jsx)('div', {
                    className: y.acronym,
                    'aria-hidden': !0,
                    children: e
                });
            }
        }
    }
    return (0, i.jsxs)(s.Clickable, {
        onClick: n,
        className: y.rowContainer,
        children: [
            (0, i.jsxs)('div', {
                className: y.rowLeft,
                children: [
                    (0, i.jsx)('div', {
                        className: y.rowAvatar,
                        children: a
                    }),
                    (0, i.jsxs)('div', {
                        className: y.rowNameContainer,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                className: y.rowName,
                                children: l
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                className: y.rowSubName,
                                children: o
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(s.Checkbox, {
                value: r,
                type: s.Checkbox.Types.INVERTED,
                displayOnly: !0,
                className: y.rowRight
            })
        ]
    });
}
function U(e) {
    let { applicationId: t, link: n } = e,
        a = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
        [o, u] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e;
            return (
                o &&
                    (e = setTimeout(() => {
                        u(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [o]),
        (0, i.jsxs)(s.Button, {
            look: s.Button.Looks.LINK,
            color: s.Button.Colors.LINK,
            onClick: function () {
                E.default.track(v.rMx.ACTIVITY_BOOKMARK_COPY_URL, {
                    user_id: null == a ? void 0 : a.id,
                    application_id: t
                }),
                    (0, p.JG)(n),
                    u(!0);
            },
            innerClassName: y.copyButton,
            children: [
                o
                    ? (0, i.jsx)(s.CircleCheckIcon, {
                          size: 'md',
                          color: 'currentColor'
                      })
                    : (0, i.jsx)(s.LinkIcon, {
                          size: 'md',
                          color: 'currentColor'
                      }),
                o ? M.intl.string(M.t['t5VZ8/']) : M.intl.string(M.t.WqhZsr)
            ]
        })
    );
}
