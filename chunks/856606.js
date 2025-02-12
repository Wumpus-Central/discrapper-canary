n.d(t, {
    Z: () => J,
    n: () => G
}),
    n(724458),
    n(653041),
    n(411104);
var i = n(200651),
    l = n(192379),
    s = n(392711),
    a = n.n(s),
    r = n(149765),
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
    N = n(325476),
    b = n(146085),
    Z = n(598077),
    S = n(277053),
    E = n(388610),
    T = n(271383),
    R = n(430824),
    y = n(496675),
    _ = n(594174),
    w = n(823379),
    I = n(892880),
    L = n(63063),
    A = n(5192),
    M = n(233608),
    k = n(700785),
    D = n(51144),
    P = n(257017),
    O = n(188857),
    B = n(981631),
    V = n(388032),
    U = n(205389);
let G = o.ZP.connectStores([S.Z, E.Z], () => {
    let e = E.Z.getChannel();
    return {
        submitting: S.Z.formState === B.QZA.SUBMITTING,
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
function z(e) {
    let { overwrite: t } = e,
        n = (0, o.e7)([S.Z], () => S.Z.channel),
        l = (0, o.e7)([R.Z], () => (null != n ? R.Z.getGuild(n.getGuildId()) : null)),
        s = (0, o.e7)([R.Z], () => (null != l ? R.Z.getRoles(l.id) : void 0));
    if (null == n || null == l || null == t) return null;
    let { guild_id: a, id: d } = n,
        { id: g } = t,
        x = () => {
            var e;
            if (null == R.Z.getGuild(a) || null == s) return '';
            let t = s[g],
                n = _.default.getUser(g),
                i = null !== (e = null == n ? void 0 : n.username) && void 0 !== e ? e : '';
            return null != t ? t.name : i;
        },
        v = (e, i) => {
            if ('boolean' == typeof i) throw Error('Unexpected boolean action');
            let { allow: l, deny: s } = t;
            switch (((s = r.Od(s, e)), (l = r.Od(l, e)), i)) {
                case 'ALLOW':
                    l = r.IH(l, e);
                    break;
                case 'DENY':
                    s = r.IH(s, e);
            }
            if (
                y.Z.can(e, n, {
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
                    let n = _.default.getUser(t.id);
                    null != n && (e = D.ZP.getName(n));
                } else if (t.type === f.BN.ROLE) {
                    let i = R.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = R.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                P.X(e);
            }
        },
        j = (e) => {
            let t = y.Z.can(B.Plq.ADMINISTRATOR, l) || y.Z.can(B.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && b.xS.has(e) ? V.intl.string(V.t.bTS5lZ) : !((!r.fS(e, B.Plq.MANAGE_ROLES) || t) && (null == e || y.Z.can(e, l) || t)) && V.intl.string(V.t.nOtPMD);
        },
        C = g === a,
        Z = n.isForumLikeChannel() && r.e$(t.deny, B.Plq.SEND_MESSAGES),
        E = r.e$(t.deny, B.Plq.SEND_MESSAGES),
        T = r.e$(t.deny, B.Plq.READ_MESSAGE_HISTORY),
        w = M.Z.generateChannelPermissionSpec(a, n, C, {
            createPostsDisabled: Z,
            sendMessagesDisabled: E,
            readMessageHistoryDisabled: T
        });
    return (0, i.jsxs)(N.ZP.Content, {
        className: U.layoutStyle,
        children: [
            w.map((e, n) =>
                (0, i.jsx)(
                    p.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: v,
                        permissionRender: j,
                        className: U.permissionsForm
                    },
                    n
                )
            ),
            a === g
                ? null
                : (0, i.jsx)(c.zxk, {
                      look: c.zxk.Looks.OUTLINED,
                      color: c.zxk.Colors.RED,
                      onClick: () => {
                          let e = x();
                          u.Z.show({
                              title: V.intl.string(V.t.GuPYQE),
                              body: V.intl.format(V.t.xERCnZ, { name: e }),
                              cancelText: V.intl.string(V.t['ETE/oK']),
                              onConfirm: () => h.Z.clearPermissionOverwrite(d, g)
                          });
                      },
                      children: V.intl.format(V.t.txPV7u, { name: x() })
                  })
        ]
    });
}
function W(e) {
    let { guildId: t, channelId: n, user: l } = e,
        s = l.getAvatarURL(t, 32),
        a = A.ZP.getNickname(t, n, l),
        r = D.ZP.useUserTag(l),
        o = null,
        d = null;
    return (
        (o = null != a ? a : l.hasAvatarForGuild(t) ? l.username : r),
        (null != a || l.hasAvatarForGuild(t)) &&
            (d = (0, i.jsxs)('div', {
                className: U.userRowSubText,
                children: [
                    l.hasAvatarForGuild(t)
                        ? (0, i.jsx)(c.qEK, {
                              className: U.userRowSubAvatar,
                              size: c.EFr.SIZE_16,
                              src: l.getAvatarURL(void 0, 16),
                              'aria-label': l.username
                          })
                        : null,
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: r
                    })
                ]
            })),
        (0, i.jsxs)('div', {
            className: U.inline,
            children: [
                (0, i.jsx)(c.qEK, {
                    size: c.EFr.SIZE_32,
                    src: s,
                    'aria-label': l.username,
                    className: U.userRowAvatar
                }),
                (0, i.jsxs)('div', {
                    className: U.userRowText,
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: U.userRowText,
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
function H(e) {
    return 'object' == typeof e && null != e && 'colorString' in e && 'name' in e;
}
function F(e) {
    let { guild: t, channel: n, permissionOverwrites: l, onClose: s, onSelect: r, position: d } = e,
        c = (0, o.e7)([R.Z], () => R.Z.getRoles(t.id)),
        u = (0, o.Wu)([T.ZP], () => T.ZP.getMemberIds(t.id));
    return (0, i.jsx)(C.Z, {
        label: V.intl.string(V.t.lT5Ztr),
        placeholder: V.intl.string(V.t.V2pZRk),
        'aria-label': V.intl.string(V.t['Uvt+p6']),
        sections: [V.intl.string(V.t.LPJmLy), V.intl.string(V.t['9Oq93t'])],
        onRenderResult: (e) => {
            if (H(e)) {
                let t;
                return (
                    null != e.colorString && (t = { color: e.colorString }),
                    (0, i.jsx)('span', {
                        style: t,
                        children: e.name
                    })
                );
            }
            if (e instanceof Z.Z)
                return (0, i.jsx)(W, {
                    guildId: t.id,
                    channelId: n.id,
                    user: e
                });
        },
        onFilterResults: (e, t) =>
            0 === t
                ? a()(c)
                      .filter((t) => null == l[t.id] && e(t.name))
                      .sortBy((e) => -e.position)
                      .value()
                : a()(u)
                      .map(_.default.getUser)
                      .filter(w.lm)
                      .filter((e) => !e.isClyde())
                      .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            I.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            null != e && (H(e) ? r(e.id, f.BN.ROLE) : e instanceof Z.Z && r(e.id, f.BN.MEMBER));
        },
        onClose: s,
        position: d
    });
}
function X() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: s } = (0, o.cj)([S.Z], () => S.Z),
        r = null == e ? void 0 : e.getGuildId(),
        { guild: u, guildRoles: p } = (0, o.cj)(
            [R.Z],
            () => {
                let e = null != r ? R.Z.getGuild(r) : void 0,
                    t = null != e ? R.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [r]
        ),
        x = (0, O.Z)(r, t),
        C = (0, v.ZP)(),
        b = (0, o.e7)([j.Z], () => j.Z.roleStyle);
    if (null == u || null == p || null == e || null == t) return null;
    let Z = (n) => {
            let { position: l, closePopout: s } = n;
            return (0, i.jsx)(F, {
                guild: u,
                channel: e,
                permissionOverwrites: t,
                position: null != l ? l : 'bottom',
                onSelect: E,
                onClose: s
            });
        },
        E = (t, n) => {
            h.Z.updatePermissionOverwrite(e.id, {
                id: t,
                type: n,
                allow: k.Hn,
                deny: k.Hn
            }).then(() => (0, m.Aj)(t));
        };
    null != t && null == t[u.id] && (t[u.id] = k.we(u.id));
    let T = a()(t)
            .filter((e) => e.type === f.BN.ROLE)
            .map((e) => p[e.id])
            .filter(w.lm)
            .sortBy((e) => -e.position)
            .map((e) =>
                (0, i.jsx)(
                    g.Z,
                    {
                        theme: C,
                        roleStyle: b,
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
        y = a()(x)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(u.id, 24);
                return (0, i.jsx)(
                    g.Z,
                    {
                        id: e.id,
                        guild: u,
                        theme: C,
                        roleStyle: b,
                        'aria-label': D.ZP.getUserTag(e, { decoration: 'never' }),
                        children: (0, i.jsxs)('div', {
                            className: U.inline,
                            children: [
                                (0, i.jsx)(c.qEK, {
                                    size: c.EFr.SIZE_20,
                                    src: t,
                                    'aria-label': e.username,
                                    className: U.xsmallAvatar
                                }),
                                (0, i.jsx)('span', {
                                    className: U.username,
                                    children: D.ZP.getUserTag(e)
                                })
                            ]
                        })
                    },
                    ''.concat(s, '-').concat(e.id)
                );
            })
            .value();
    return (0, i.jsx)(N.ZP.Sidebar, {
        className: U.layoutStyle,
        scrollable: !0,
        children: (0, i.jsxs)(c.njP, {
            onItemSelect: m.Aj,
            selectedItem: s,
            orientation: 'vertical',
            children: [
                (() => {
                    let e = (0, d.wj)(C) ? n(521715) : n(299603);
                    return (0, i.jsx)(c.yRy, {
                        renderPopout: Z,
                        position: 'bottom',
                        autoInvert: !1,
                        children: (t) =>
                            (0, i.jsx)(c.njP.Header, {
                                ...t,
                                children: (0, i.jsxs)('div', {
                                    className: U.sidebarHeaderDefault,
                                    children: [
                                        (0, i.jsxs)('span', {
                                            children: [V.intl.string(V.t.LPJmLy), '/', V.intl.string(V.t['9Oq93t'])]
                                        }),
                                        (0, i.jsx)('img', {
                                            alt: '',
                                            className: U.sidebarHeader,
                                            src: e
                                        })
                                    ]
                                })
                            })
                    });
                })(),
                T,
                y,
                (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(c.njP.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14
                            }
                        }),
                        (0, i.jsx)(c.R94, {
                            type: c.geA.DESCRIPTION,
                            children: (0, i.jsx)(c.eee, {
                                href: L.Z.getArticleURL(B.BhN.PERMISSIONS_TUTORIAL),
                                target: '_blank',
                                children: V.intl.string(V.t['pfoA8/'])
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function J() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, o.cj)([S.Z], () => S.Z);
    if (null == (0, o.e7)([R.Z], () => (null != e ? R.Z.getGuild(e.getGuildId()) : null)) || null == e || null == t || null == n) return null;
    let l = t[n];
    return (0, i.jsxs)(N.ZP, {
        className: U.container,
        children: [(0, i.jsx)(X, {}), (0, i.jsx)(z, { overwrite: l })]
    });
}
