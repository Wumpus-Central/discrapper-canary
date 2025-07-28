(n.d(t, {
    Z: () => ee,
    n: () => Y
}),
    n(539854),
    n(415506));
var i = n(255367),
    l = n(73800),
    r = n(392711),
    s = n.n(r),
    a = n(149765),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(668781),
    h = n(493683),
    m = n(741361),
    g = n(239091),
    p = n(668390),
    f = n(144991),
    x = n(852860),
    j = n(911969),
    b = n(410030),
    v = n(607070),
    y = n(940639),
    C = n(325476),
    N = n(190263),
    S = n(146085),
    E = n(601964),
    O = n(598077),
    T = n(277053),
    w = n(388610),
    Z = n(271383),
    R = n(485386),
    I = n(430824),
    _ = n(496675),
    P = n(594174),
    A = n(823379),
    L = n(892880),
    D = n(63063),
    M = n(5192),
    k = n(233608),
    B = n(700785),
    V = n(51144),
    U = n(257017),
    W = n(188857),
    H = n(981631),
    G = n(388032),
    F = n(483112);
function z(e) {
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
}
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = o.ZP.connectStores([T.Z, w.Z], () => {
    let e = w.Z.getChannel();
    return {
        submitting: T.Z.formState === H.QZA.SUBMITTING,
        onReset() {
            (0, m.S1)();
        },
        onSave() {
            if (null == e) return;
            let t = T.Z.editedPermissionIds.reduce((e, t) => {
                let n = T.Z.getPermissionOverwrite(t);
                return (null != n && e.push(n), e);
            }, []);
            (0, m.hw)(e.id, t);
        }
    };
})(x.Z);
function J(e) {
    let { overwrite: t } = e,
        n = (0, o.e7)([T.Z], () => T.Z.channel),
        l = (0, o.e7)([I.Z], () => (null != n ? I.Z.getGuild(n.getGuildId()) : null)),
        r = (0, o.e7)([R.Z], () => (null != l && null != t && t.type === j.BN.ROLE ? R.Z.getRole(l.id, t.id) : void 0)),
        s = N.D.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: 'ChannelSettingsPermissions'
        }).enabled;
    if (null == n || null == l || null == t) return null;
    let { guild_id: c, id: g } = n,
        p = () => {
            var e;
            if (null == I.Z.getGuild(c)) return '';
            let n = t.type === j.BN.MEMBER ? P.default.getUser(t.id) : void 0,
                i = null != (e = null == n ? void 0 : n.username) ? e : '';
            return null != r ? r.name : i;
        },
        x = (e, i) => {
            if ('boolean' == typeof i) throw Error('Unexpected boolean action');
            let { allow: l, deny: r } = t;
            switch (((r = a.Od(r, e)), (l = a.Od(l, e)), i)) {
                case 'ALLOW':
                    l = a.IH(l, e);
                    break;
                case 'DENY':
                    r = a.IH(r, e);
            }
            if (
                _.Z.can(e, n, {
                    [t.id]: X(z({}, t), {
                        allow: l,
                        deny: r
                    })
                })
            )
                (0, m.kY)(n, t.id, l, r);
            else {
                let e;
                if (t.type === j.BN.MEMBER) {
                    let n = P.default.getUser(t.id);
                    null != n && (e = V.ZP.getName(n));
                } else if (t.type === j.BN.ROLE) {
                    let i = I.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = R.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                U.X(e);
            }
        },
        b = (e) => {
            let t = _.Z.can(H.Plq.ADMINISTRATOR, l) || _.Z.can(H.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && S.xS.has(e) ? G.intl.string(G.t.bTS5lZ) : !((!a.fS(e, H.Plq.MANAGE_ROLES) || t) && (null == e || _.Z.can(e, l) || t)) && G.intl.string(G.t.nOtPMD);
        },
        v = t.id === c,
        y = n.isForumLikeChannel() && a.e$(t.deny, H.Plq.SEND_MESSAGES),
        E = a.e$(t.deny, H.Plq.SEND_MESSAGES),
        O = a.e$(t.deny, H.Plq.READ_MESSAGE_HISTORY),
        w = k.Z.generateChannelPermissionSpec(c, n, v, {
            createPostsDisabled: y,
            sendMessagesDisabled: E,
            readMessageHistoryDisabled: O
        });
    return (0, i.jsxs)(C.ZP.Content, {
        className: F.layoutStyle,
        children: [
            w.map((e, n) =>
                (0, i.jsx)(
                    f.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: x,
                        permissionRender: b,
                        className: F.permissionsForm,
                        inPinPermissionExperiment: s
                    },
                    n
                )
            ),
            c === t.id
                ? null
                : (0, i.jsx)(d.zxk, {
                      variant: 'critical-secondary',
                      text: G.intl.format(G.t.txPV7u, { name: p() }),
                      onClick: () => {
                          let e = p();
                          u.Z.show({
                              title: G.intl.string(G.t.GuPYQE),
                              body: G.intl.format(G.t.xERCnZ, { name: e }),
                              cancelText: G.intl.string(G.t['ETE/oK']),
                              onConfirm: () => h.Z.clearPermissionOverwrite(g, t.id)
                          });
                      }
                  })
        ]
    });
}
function q(e) {
    let { guildId: t, channelId: n, user: l } = e,
        r = l.getAvatarURL(t, 32),
        s = M.ZP.getNickname(t, n, l),
        a = V.ZP.useUserTag(l),
        o = null,
        c = null;
    return (
        (o = null != s ? s : l.hasAvatarForGuild(t) ? l.username : a),
        (null != s || l.hasAvatarForGuild(t)) &&
            (c = (0, i.jsxs)('div', {
                className: F.userRowSubText,
                children: [
                    l.hasAvatarForGuild(t)
                        ? (0, i.jsx)(d.qEK, {
                              className: F.userRowSubAvatar,
                              size: d.EFr.SIZE_16,
                              src: l.getAvatarURL(void 0, 16),
                              'aria-label': l.username
                          })
                        : null,
                    (0, i.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: a
                    })
                ]
            })),
        (0, i.jsxs)('div', {
            className: F.inline,
            children: [
                (0, i.jsx)(d.qEK, {
                    size: d.EFr.SIZE_32,
                    src: r,
                    'aria-label': l.username,
                    className: F.userRowAvatar
                }),
                (0, i.jsxs)('div', {
                    className: F.userRowText,
                    children: [
                        (0, i.jsx)(d.Text, {
                            className: F.userRowText,
                            variant: 'text-md/normal',
                            children: o
                        }),
                        c
                    ]
                })
            ]
        })
    );
}
function $(e) {
    return 'object' == typeof e && null != e && 'colorString' in e && 'name' in e;
}
function Q(e) {
    let { guild: t, channel: n, permissionOverwrites: l, onClose: r, onSelect: a, position: c } = e,
        d = (0, o.e7)([R.Z], () => R.Z.getSortedRoles(t.id)),
        u = (0, o.Wu)([Z.ZP], () => Z.ZP.getMemberIds(t.id));
    return (0, i.jsx)(y.Z, {
        label: G.intl.string(G.t.lT5Ztr),
        placeholder: G.intl.string(G.t.V2pZRk),
        'aria-label': G.intl.string(G.t['Uvt+p6']),
        sections: [G.intl.string(G.t.LPJmLy), G.intl.string(G.t['9Oq93t'])],
        onRenderResult: (e) => {
            if ($(e)) {
                let t;
                return (
                    null != e.colorString && (t = { color: e.colorString }),
                    (0, i.jsx)('span', {
                        style: t,
                        children: e.name
                    })
                );
            }
            if (e instanceof O.Z)
                return (0, i.jsx)(q, {
                    guildId: t.id,
                    channelId: n.id,
                    user: e
                });
        },
        onFilterResults: (e, t) =>
            0 === t
                ? d.filter((t) => null == l[t.id] && e(t.name))
                : s()(u)
                      .map(P.default.getUser)
                      .filter(A.lm)
                      .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            L.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            null != e && ($(e) ? a(e.id, j.BN.ROLE) : e instanceof O.Z && a(e.id, j.BN.MEMBER));
        },
        onClose: r,
        position: c
    });
}
function K() {
    let e = l.useRef(null),
        { channel: t, permissionOverwrites: r, selectedOverwriteId: a } = (0, o.cj)([T.Z], () => T.Z),
        f = null == t ? void 0 : t.getGuildId(),
        { guild: x, sortedGuildRoles: y } = (0, o.cj)(
            [I.Z, R.Z],
            () => {
                let e = null != f ? I.Z.getGuild(f) : void 0,
                    t = null != e ? R.Z.getSortedRoles(e.id) : void 0;
                return {
                    guild: e,
                    sortedGuildRoles: t
                };
            },
            [f]
        ),
        N = (0, W.Z)(f, r),
        S = (0, b.ZP)(),
        O = (0, o.e7)([v.Z], () => v.Z.roleStyle),
        w = l.useCallback(
            (e, l) => {
                if (null == t) return null;
                (0, g.jW)(e, async () => {
                    let { id: e, role: r, name: s } = l,
                        a = null != x ? (0, E.lV)(x) : null,
                        o = null != r && a === r.id,
                        { default: c } = await n.e('83884').then(n.bind(n, 905687));
                    return (n) =>
                        (0, i.jsx)(
                            c,
                            X(z({}, n), {
                                id: e,
                                role: r,
                                handleDeletePermission: o
                                    ? void 0
                                    : () => {
                                          u.Z.show({
                                              title: G.intl.string(G.t.GuPYQE),
                                              body: G.intl.format(G.t.xERCnZ, { name: s }),
                                              cancelText: G.intl.string(G.t['ETE/oK']),
                                              onConfirm: () => h.Z.clearPermissionOverwrite(t.id, e)
                                          });
                                      }
                            })
                        );
                });
            },
            [t, x]
        );
    if (null == x || null == y || null == t || null == r) return null;
    let Z = (e) => {
            let { position: n, closePopout: l } = e;
            return (0, i.jsx)(Q, {
                guild: x,
                channel: t,
                permissionOverwrites: r,
                position: null != n ? n : 'bottom',
                onSelect: _,
                onClose: l
            });
        },
        _ = (e, n) => {
            h.Z.updatePermissionOverwrite(t.id, {
                id: e,
                type: n,
                allow: B.Hn,
                deny: B.Hn
            }).then(() => (0, m.Aj)(e));
        };
    null != r && null == r[x.id] && (r[x.id] = B.we(x.id));
    let P = y
            .filter((e) => {
                var t;
                return (null == (t = r[e.id]) ? void 0 : t.type) === j.BN.ROLE;
            })
            .map((e) =>
                (0, i.jsx)(
                    p.Z,
                    {
                        theme: S,
                        roleStyle: O,
                        id: e.id,
                        role: e,
                        guild: x,
                        color: e.colorString,
                        'aria-label': e.name,
                        onContextMenu: (t) =>
                            w(t, {
                                id: e.id,
                                name: e.name,
                                role: e
                            }),
                        children: e.name
                    },
                    ''.concat(a, '-').concat(e.id)
                )
            ),
        A = s()(N)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(x.id, 24);
                return (0, i.jsx)(
                    p.Z,
                    {
                        id: e.id,
                        guild: x,
                        theme: S,
                        roleStyle: O,
                        'aria-label': V.ZP.getUserTag(e, { decoration: 'never' }),
                        onContextMenu: (t) =>
                            w(t, {
                                id: e.id,
                                name: e.username
                            }),
                        children: (0, i.jsxs)('div', {
                            className: F.inline,
                            children: [
                                (0, i.jsx)(d.qEK, {
                                    size: d.EFr.SIZE_20,
                                    src: t,
                                    'aria-label': e.username,
                                    className: F.xsmallAvatar
                                }),
                                (0, i.jsx)('span', {
                                    className: F.username,
                                    children: V.ZP.getUserTag(e)
                                })
                            ]
                        })
                    },
                    ''.concat(a, '-').concat(e.id)
                );
            })
            .value();
    return (0, i.jsx)(C.ZP.Sidebar, {
        className: F.layoutStyle,
        scrollable: !0,
        children: (0, i.jsxs)(d.njP, {
            onItemSelect: m.Aj,
            selectedItem: a,
            orientation: 'vertical',
            children: [
                (() => {
                    let t = (0, c.wj)(S) ? n(521715) : n(299603);
                    return (0, i.jsx)(d.yRy, {
                        targetElementRef: e,
                        renderPopout: Z,
                        position: 'bottom',
                        autoInvert: !1,
                        clickTrap: !0,
                        children: (n) =>
                            (0, i.jsx)(
                                d.njP.Header,
                                X(z({ ref: e }, n), {
                                    children: (0, i.jsxs)('div', {
                                        className: F.sidebarHeaderDefault,
                                        children: [
                                            (0, i.jsxs)('span', {
                                                children: [G.intl.string(G.t.LPJmLy), '/', G.intl.string(G.t['9Oq93t'])]
                                            }),
                                            (0, i.jsx)('img', {
                                                alt: '',
                                                className: F.sidebarHeader,
                                                src: t
                                            })
                                        ]
                                    })
                                })
                            )
                    });
                })(),
                P,
                A,
                (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(d.njP.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14
                            }
                        }),
                        (0, i.jsx)(d.R94, {
                            type: d.geA.DESCRIPTION,
                            children: (0, i.jsx)(d.eee, {
                                href: D.Z.getArticleURL(H.BhN.PERMISSIONS_TUTORIAL),
                                target: '_blank',
                                children: G.intl.string(G.t['pfoA8/'])
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function ee() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, o.cj)([T.Z], () => T.Z);
    if (null == (0, o.e7)([I.Z], () => (null != e ? I.Z.getGuild(e.getGuildId()) : null)) || null == e || null == t || null == n) return null;
    let l = t[n];
    return (0, i.jsxs)(C.ZP, {
        className: F.container,
        children: [(0, i.jsx)(K, {}), (0, i.jsx)(J, { overwrite: l })]
    });
}
