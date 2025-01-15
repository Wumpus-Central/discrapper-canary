n.d(t, {
    Z: function () {
        return Q;
    },
    n: function () {
        return G;
    }
}),
    n(724458),
    n(653041),
    n(411104);
var i = n(200651),
    l = n(192379),
    s = n(392711),
    r = n.n(s),
    a = n(149765),
    o = n(442837),
    d = n(780384),
    c = n(481060),
    u = n(668781),
    h = n(493683),
    m = n(741361),
    g = n(668390),
    p = n(144991),
    x = n(852860),
    f = n(911969),
    v = n(410030),
    j = n(607070),
    C = n(940639),
    b = n(325476),
    T = n(146085),
    N = n(598077),
    S = n(277053),
    Z = n(388610),
    E = n(271383),
    y = n(430824),
    I = n(496675),
    R = n(594174),
    w = n(823379),
    _ = n(892880),
    L = n(63063),
    A = n(5192),
    M = n(233608),
    D = n(700785),
    B = n(51144),
    P = n(257017),
    O = n(188857),
    F = n(981631),
    k = n(388032),
    V = n(987791);
let G = o.ZP.connectStores([S.Z, Z.Z], () => {
    let e = Z.Z.getChannel();
    return {
        submitting: S.Z.formState === F.QZA.SUBMITTING,
        onReset() {
            (0, m.S1)();
        },
        onSave() {
            if (null == e) return;
            let t = S.Z.editedPermissionIds.reduce((e, t) => {
                let n = S.Z.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, m.hw)(e.id, t);
        }
    };
})(x.Z);
function U(e) {
    let { overwrite: t } = e,
        n = (0, o.e7)([S.Z], () => S.Z.channel),
        l = (0, o.e7)([y.Z], () => (null != n ? y.Z.getGuild(n.getGuildId()) : null)),
        s = (0, o.e7)([y.Z], () => (null != l ? y.Z.getRoles(l.id) : void 0));
    if (null == n || null == l || null == t) return null;
    let { guild_id: r, id: d } = n,
        { id: g } = t,
        x = () => {
            var e;
            if (null == y.Z.getGuild(r) || null == s) return '';
            let t = s[g],
                n = R.default.getUser(g),
                i = null !== (e = null == n ? void 0 : n.username) && void 0 !== e ? e : '';
            return null != t ? t.name : i;
        },
        v = (e, i) => {
            if ('boolean' == typeof i) throw Error('Unexpected boolean action');
            let { allow: l, deny: s } = t;
            switch (((s = a.Od(s, e)), (l = a.Od(l, e)), i)) {
                case 'ALLOW':
                    l = a.IH(l, e);
                    break;
                case 'DENY':
                    s = a.IH(s, e);
            }
            if (
                I.Z.can(e, n, {
                    [g]: {
                        ...t,
                        allow: l,
                        deny: s
                    }
                })
            )
                (0, m.kY)(n, g, l, s);
            else {
                let e;
                if (t.type === f.BN.MEMBER) {
                    let n = R.default.getUser(t.id);
                    null != n && (e = B.ZP.getName(n));
                } else if (t.type === f.BN.ROLE) {
                    let i = y.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = y.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                P.X(e);
            }
        },
        j = () => {
            let e = x();
            u.Z.show({
                title: k.intl.string(k.t.GuPYQE),
                body: k.intl.format(k.t.xERCnZ, { name: e }),
                cancelText: k.intl.string(k.t['ETE/oK']),
                onConfirm: () => h.Z.clearPermissionOverwrite(d, g)
            });
        },
        C = (e) => {
            let t = I.Z.can(F.Plq.ADMINISTRATOR, l) || I.Z.can(F.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && T.xS.has(e) ? k.intl.string(k.t.bTS5lZ) : !((!a.fS(e, F.Plq.MANAGE_ROLES) || t) && (null == e || I.Z.can(e, l) || t)) && k.intl.string(k.t.nOtPMD);
        },
        N = g === r,
        Z = n.isForumLikeChannel() && a.e$(t.deny, F.Plq.SEND_MESSAGES),
        E = a.e$(t.deny, F.Plq.SEND_MESSAGES),
        w = a.e$(t.deny, F.Plq.READ_MESSAGE_HISTORY),
        _ = M.Z.generateChannelPermissionSpec(r, n, N, {
            createPostsDisabled: Z,
            sendMessagesDisabled: E,
            readMessageHistoryDisabled: w
        });
    return (0, i.jsxs)(b.ZP.Content, {
        className: V.layoutStyle,
        children: [
            _.map((e, n) =>
                (0, i.jsx)(
                    p.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: v,
                        permissionRender: C,
                        className: V.permissionsForm
                    },
                    n
                )
            ),
            r === g
                ? null
                : (0, i.jsx)(c.Button, {
                      look: c.Button.Looks.OUTLINED,
                      color: c.Button.Colors.RED,
                      onClick: j,
                      children: k.intl.format(k.t.txPV7u, { name: x() })
                  })
        ]
    });
}
function H(e) {
    let { guildId: t, channelId: n, user: l } = e,
        s = l.getAvatarURL(t, 32),
        r = A.ZP.getNickname(t, n, l),
        a = B.ZP.useUserTag(l),
        o = null,
        d = null;
    return (
        (o = null != r ? r : l.hasAvatarForGuild(t) ? l.username : a),
        (null != r || l.hasAvatarForGuild(t)) &&
            (d = (0, i.jsxs)('div', {
                className: V.userRowSubText,
                children: [
                    l.hasAvatarForGuild(t)
                        ? (0, i.jsx)(c.Avatar, {
                              className: V.userRowSubAvatar,
                              size: c.AvatarSizes.SIZE_16,
                              src: l.getAvatarURL(void 0, 16),
                              'aria-label': l.username
                          })
                        : null,
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: a
                    })
                ]
            })),
        (0, i.jsxs)('div', {
            className: V.inline,
            children: [
                (0, i.jsx)(c.Avatar, {
                    size: c.AvatarSizes.SIZE_32,
                    src: s,
                    'aria-label': l.username,
                    className: V.userRowAvatar
                }),
                (0, i.jsxs)('div', {
                    className: V.userRowText,
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: V.userRowText,
                            variant: 'text-md/normal',
                            children: o
                        }),
                        d
                    ]
                })
            ]
        })
    );
}
function W(e) {
    return 'object' == typeof e && null != e && 'colorString' in e && 'name' in e;
}
function z(e) {
    let { guild: t, channel: n, permissionOverwrites: l, onClose: s, onSelect: a, position: d } = e,
        c = (0, o.e7)([y.Z], () => y.Z.getRoles(t.id)),
        u = (0, o.Wu)([E.ZP], () => E.ZP.getMemberIds(t.id));
    return (0, i.jsx)(C.Z, {
        label: k.intl.string(k.t.lT5Ztr),
        placeholder: k.intl.string(k.t.V2pZRk),
        'aria-label': k.intl.string(k.t['Uvt+p6']),
        sections: [k.intl.string(k.t.LPJmLy), k.intl.string(k.t['9Oq93t'])],
        onRenderResult: (e) => {
            if (W(e)) {
                let t;
                return (
                    null != e.colorString && (t = { color: e.colorString }),
                    (0, i.jsx)('span', {
                        style: t,
                        children: e.name
                    })
                );
            }
            if (e instanceof N.Z)
                return (0, i.jsx)(H, {
                    guildId: t.id,
                    channelId: n.id,
                    user: e
                });
        },
        onFilterResults: (e, t) =>
            0 === t
                ? r()(c)
                      .filter((t) => null == l[t.id] && e(t.name))
                      .sortBy((e) => -e.position)
                      .value()
                : r()(u)
                      .map(R.default.getUser)
                      .filter(w.lm)
                      .filter((e) => !e.isClyde())
                      .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            _.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            if (null != e) W(e) ? a(e.id, f.BN.ROLE) : e instanceof N.Z && a(e.id, f.BN.MEMBER);
        },
        onClose: s,
        position: d
    });
}
function X() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: s } = (0, o.cj)([S.Z], () => S.Z),
        a = null == e ? void 0 : e.getGuildId(),
        { guild: u, guildRoles: p } = (0, o.cj)(
            [y.Z],
            () => {
                let e = null != a ? y.Z.getGuild(a) : void 0,
                    t = null != e ? y.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [a]
        ),
        x = (0, O.Z)(a, t),
        C = (0, v.ZP)(),
        T = (0, o.e7)([j.Z], () => j.Z.roleStyle);
    if (null == u || null == p || null == e || null == t) return null;
    let N = (n) => {
            let { position: l, closePopout: s } = n;
            return (0, i.jsx)(z, {
                guild: u,
                channel: e,
                permissionOverwrites: t,
                position: null != l ? l : 'bottom',
                onSelect: Z,
                onClose: s
            });
        },
        Z = (t, n) => {
            h.Z.updatePermissionOverwrite(e.id, {
                id: t,
                type: n,
                allow: D.Hn,
                deny: D.Hn
            }).then(() => (0, m.Aj)(t));
        };
    null != t && null == t[u.id] && (t[u.id] = D.we(u.id));
    let E = r()(t)
            .filter((e) => e.type === f.BN.ROLE)
            .map((e) => p[e.id])
            .filter(w.lm)
            .sortBy((e) => -e.position)
            .map((e) =>
                (0, i.jsx)(
                    g.Z,
                    {
                        theme: C,
                        roleStyle: T,
                        id: e.id,
                        role: e,
                        guild: u,
                        color: e.colorString,
                        'aria-label': e.name,
                        children: e.name
                    },
                    ''.concat(s, '-').concat(e.id)
                )
            )
            .value(),
        I = r()(x)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(u.id, 24);
                return (0, i.jsx)(
                    g.Z,
                    {
                        id: e.id,
                        guild: u,
                        theme: C,
                        roleStyle: T,
                        'aria-label': B.ZP.getUserTag(e, { decoration: 'never' }),
                        children: (0, i.jsxs)('div', {
                            className: V.inline,
                            children: [
                                (0, i.jsx)(c.Avatar, {
                                    size: c.AvatarSizes.SIZE_20,
                                    src: t,
                                    'aria-label': e.username,
                                    className: V.xsmallAvatar
                                }),
                                (0, i.jsx)('span', {
                                    className: V.username,
                                    children: B.ZP.getUserTag(e)
                                })
                            ]
                        })
                    },
                    ''.concat(s, '-').concat(e.id)
                );
            })
            .value();
    return (0, i.jsx)(b.ZP.Sidebar, {
        className: V.layoutStyle,
        scrollable: !0,
        children: (0, i.jsxs)(c.TabBar, {
            onItemSelect: m.Aj,
            selectedItem: s,
            orientation: 'vertical',
            children: [
                (() => {
                    let e = (0, d.wj)(C) ? n(521715) : n(299603);
                    return (0, i.jsx)(c.Popout, {
                        renderPopout: N,
                        position: 'bottom',
                        autoInvert: !1,
                        children: (t) =>
                            (0, i.jsx)(c.TabBar.Header, {
                                ...t,
                                children: (0, i.jsxs)('div', {
                                    className: V.sidebarHeaderDefault,
                                    children: [
                                        (0, i.jsxs)('span', {
                                            children: [k.intl.string(k.t.LPJmLy), '/', k.intl.string(k.t['9Oq93t'])]
                                        }),
                                        (0, i.jsx)('img', {
                                            alt: '',
                                            className: V.sidebarHeader,
                                            src: e
                                        })
                                    ]
                                })
                            })
                    });
                })(),
                E,
                I,
                (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(c.TabBar.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14
                            }
                        }),
                        (0, i.jsx)(c.FormText, {
                            type: c.FormTextTypes.DESCRIPTION,
                            children: (0, i.jsx)(c.Anchor, {
                                href: L.Z.getArticleURL(F.BhN.PERMISSIONS_TUTORIAL),
                                target: '_blank',
                                children: k.intl.string(k.t['pfoA8/'])
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function Q() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, o.cj)([S.Z], () => S.Z);
    if (null == (0, o.e7)([y.Z], () => (null != e ? y.Z.getGuild(e.getGuildId()) : null)) || null == e || null == t || null == n) return null;
    let l = t[n];
    return (0, i.jsxs)(b.ZP, {
        className: V.container,
        children: [(0, i.jsx)(X, {}), (0, i.jsx)(U, { overwrite: l })]
    });
}
