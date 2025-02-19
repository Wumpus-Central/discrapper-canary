i.d(t, { default: () => A }), i(47120), i(653041), i(266796);
var n = i(200651),
    a = i(192379),
    r = i(990547),
    o = i(442837),
    l = i(481060),
    s = i(493683),
    c = i(247272),
    d = i(904245),
    u = i(100527),
    m = i(906732),
    p = i(213609),
    f = i(43267),
    _ = i(933557),
    I = i(430824),
    y = i(751771),
    g = i(699516),
    h = i(594174),
    v = i(626135),
    x = i(768581),
    N = i(572004),
    b = i(971130),
    w = i(624138),
    O = i(51144),
    S = i(778569),
    j = i(981631),
    C = i(245335),
    E = i(388032),
    T = i(514246);
function A(e) {
    var t,
        i,
        { activityItem: f, analyticsLocations: _ } = e,
        I = (function (e, t) {
            if (null == e) return {};
            var i,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var i,
                        n,
                        a = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) (i = r[n]), t.indexOf(i) >= 0 || (a[i] = e[i]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++) (i = r[n]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i]);
            }
            return a;
        })(e, ['activityItem', 'analyticsLocations']);
    let g = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        { analyticsLocations: x } = (0, m.ZP)(_);
    (0, p.Z)({
        type: r.ImpressionTypes.MODAL,
        name: r.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
        properties: {
            application_id: f.application.id,
            location_stack: x
        }
    });
    let [N, w] = a.useState(''),
        [O, A] = a.useState([]),
        P = (0, S.Z)({
            applicationId: f.application.id,
            size: 256
        }),
        k = ''.concat(window.location.origin).concat(j.Z5c.ACTIVITY_DETAILS(f.application.id)),
        R = (0, o.Wu)([y.Z], () => y.Z.getInviteSuggestionRows());
    a.useEffect(() => {
        (0, c.x)({
            omitUserIds: new Set(),
            applicationId: f.application.id,
            inviteTargetType: C.Iq.EMBEDDED_APPLICATION
        });
    }, [f.application.id]),
        a.useEffect(() => (0, c.C)(N), [N]);
    let L = a.useCallback(async () => {
        let e = 0,
            t = 0,
            i = 0,
            n = y.Z.getInviteSuggestionRows()
                .filter((e) => O.includes(e.item.id))
                .map((n) =>
                    (function (n, a) {
                        switch (n.type) {
                            case b.bm.DM:
                            case b.bm.FRIEND:
                                e++;
                                break;
                            case b.bm.GROUP_DM:
                                t++;
                                break;
                            case b.bm.CHANNEL:
                                i++;
                        }
                        return n.type === b.bm.GROUP_DM || n.type === b.bm.CHANNEL ? d.Z.sendActivityBookmark(n.item.id, a, u.Z.ACTIVITY_DETAIL_PAGE, null) : n.type === b.bm.DM || n.type === b.bm.FRIEND ? s.Z.ensurePrivateChannel(n.item.id).then((e) => d.Z.sendActivityBookmark(e, k, u.Z.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve();
                    })(n, k)
                );
        await n,
            v.default.track(j.rMx.ACTIVITY_BOOKMARK_SHARED, {
                user_id: null == g ? void 0 : g.id,
                application_id: f.application.id,
                n_users: e,
                n_gdms: t,
                n_channels: i
            }),
            I.onClose();
    }, [f, O, I, k, g]);
    return (0, n.jsxs)(
        l.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(i);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(i).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = i[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, I)),
        (i = i =
            {
                className: T.modalRoot,
                children: [
                    (0, n.jsxs)(l.xBx, {
                        className: T.header,
                        children: [
                            (0, n.jsx)(l.X6q, {
                                variant: 'heading-md/semibold',
                                children: E.NW.format(E.t.tOVbbG, { activityName: f.application.name })
                            }),
                            (0, n.jsx)(l.olH, { onClick: I.onClose })
                        ]
                    }),
                    (0, n.jsxs)(l.hzk, {
                        className: T.modalContent,
                        children: [
                            (0, n.jsx)(l.Rj2, {
                                className: T.searchBar,
                                placeholder: E.NW.string(E.t['5h0QOD']),
                                label: E.NW.string(E.t['5h0QOD']),
                                searchTerm: N,
                                onChange: (e) => w(e),
                                onClear: () => w('')
                            }),
                            R.map((e, t) =>
                                (0, n.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            0 === t ? null : (0, n.jsx)('div', { className: T.rowDivider }),
                                            (0, n.jsx)(D, {
                                                row: e,
                                                onClick: () => {
                                                    let t = [...O];
                                                    t.includes(e.item.id) ? (t = t.filter((t) => t !== e.item.id)) : t.push(e.item.id), A(t);
                                                },
                                                checked: O.includes(e.item.id)
                                            })
                                        ]
                                    },
                                    e.item.id
                                )
                            )
                        ]
                    }),
                    (0, n.jsxs)(l.mzw, {
                        className: T.footer,
                        children: [
                            (0, n.jsx)('div', {
                                className: T.activityInfoOuterContainer,
                                children: (0, n.jsxs)('div', {
                                    className: T.activityInfoInnerContainer,
                                    children: [
                                        (0, n.jsx)('img', {
                                            src: P.url,
                                            className: T.activityInfoImage,
                                            alt: f.application.name
                                        }),
                                        (0, n.jsxs)('div', {
                                            className: T.activityInfoText,
                                            children: [
                                                (0, n.jsx)(l.Text, {
                                                    variant: 'text-md/semibold',
                                                    className: T.ellipsis,
                                                    children: f.application.name
                                                }),
                                                (0, n.jsx)(l.Text, {
                                                    variant: 'text-sm/medium',
                                                    className: T.ellipsis,
                                                    children: f.application.description
                                                }),
                                                (0, n.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    className: T.ellipsis,
                                                    children: (0, n.jsx)(l.eee, {
                                                        href: k,
                                                        children: k
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (0, n.jsx)('div', { className: T.footerDivider }),
                            (0, n.jsxs)('div', {
                                className: T.copySendBar,
                                children: [
                                    (0, n.jsx)(Z, {
                                        link: k,
                                        applicationId: f.application.id
                                    }),
                                    (0, n.jsx)(l.zxk, {
                                        onClick: L,
                                        disabled: O.length <= 0,
                                        children: E.NW.string(E.t.TXNS7e)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : (function (e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, n);
                  }
                  return i;
              })(Object(i)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
              }),
        t)
    );
}
function D(e) {
    let { row: t, onClick: i, checked: a } = e,
        r = null,
        o = null,
        s = null;
    switch (t.type) {
        case b.bm.DM:
        case b.bm.FRIEND:
            (r = (0, n.jsx)(l.qEK, {
                size: l.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                'aria-label': t.item.username
            })),
                (o = O.ZP.getName(t.item)),
                (s = O.ZP.getUserTag(t.item));
            break;
        case b.bm.GROUP_DM: {
            let e = (0, f.x)(t.item),
                i = (0, _.F6)(t.item, h.default, g.Z);
            (r = (0, n.jsx)(l.qEK, {
                src: e,
                'aria-label': i,
                size: l.EFr.SIZE_40
            })),
                (o = (0, _.F6)(t.item, h.default, g.Z));
            break;
        }
        case b.bm.CHANNEL: {
            let e = t.item,
                i = I.Z.getGuild(e.guild_id);
            if (null == i) return null;
            if (((o = '#'.concat((0, _.F6)(e, h.default, g.Z))), (s = i.name), null != i.icon)) {
                let t = x.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: i.icon,
                    size: 40
                });
                r = (0, n.jsx)(l.qEK, {
                    src: t,
                    'aria-label': o,
                    size: l.EFr.SIZE_40
                });
            } else {
                let e = (0, w.Zg)(i.name);
                r = (0, n.jsx)('div', {
                    className: T.acronym,
                    'aria-hidden': !0,
                    children: e
                });
            }
        }
    }
    return (0, n.jsxs)(l.P3F, {
        onClick: i,
        className: T.rowContainer,
        children: [
            (0, n.jsxs)('div', {
                className: T.rowLeft,
                children: [
                    (0, n.jsx)('div', {
                        className: T.rowAvatar,
                        children: r
                    }),
                    (0, n.jsxs)('div', {
                        className: T.rowNameContainer,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                className: T.rowName,
                                children: o
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: 'text-xs/medium',
                                className: T.rowSubName,
                                children: s
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(l.XZJ, {
                value: a,
                type: l.XZJ.Types.INVERTED,
                displayOnly: !0,
                className: T.rowRight
            })
        ]
    });
}
function Z(e) {
    let { applicationId: t, link: i } = e,
        r = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        [s, c] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e;
            return (
                s &&
                    (e = setTimeout(() => {
                        c(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [s]),
        (0, n.jsxs)(l.zxk, {
            look: l.zxk.Looks.LINK,
            color: l.zxk.Colors.LINK,
            onClick: function () {
                v.default.track(j.rMx.ACTIVITY_BOOKMARK_COPY_URL, {
                    user_id: null == r ? void 0 : r.id,
                    application_id: t
                }),
                    (0, N.JG)(i),
                    c(!0);
            },
            innerClassName: T.copyButton,
            children: [
                s
                    ? (0, n.jsx)(l.owK, {
                          size: 'md',
                          color: 'currentColor'
                      })
                    : (0, n.jsx)(l.xPt, {
                          size: 'md',
                          color: 'currentColor'
                      }),
                s ? E.NW.string(E.t['t5VZ8/']) : E.NW.string(E.t.WqhZsr)
            ]
        })
    );
}
