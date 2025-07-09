(n.d(t, {
    Z: () => K,
    n: () => X
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
    N = n(146085),
    S = n(601964),
    O = n(598077),
    E = n(277053),
    T = n(388610),
    w = n(271383),
    Z = n(485386),
    R = n(430824),
    I = n(496675),
    _ = n(594174),
    P = n(823379),
    A = n(892880),
    L = n(63063),
    D = n(5192),
    M = n(233608),
    k = n(700785),
    B = n(51144),
    V = n(257017),
    U = n(188857),
    W = n(981631),
    H = n(388032),
    G = n(483112);
function F(e) {
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
function z(e, t) {
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
let X = o.ZP.connectStores([E.Z, T.Z], () => {
    let e = T.Z.getChannel();
    return {
        submitting: E.Z.formState === W.QZA.SUBMITTING,
        onReset() {
            (0, m.S1)();
        },
        onSave() {
            if (null == e) return;
            let t = E.Z.editedPermissionIds.reduce((e, t) => {
                let n = E.Z.getPermissionOverwrite(t);
                return (null != n && e.push(n), e);
            }, []);
            (0, m.hw)(e.id, t);
        }
    };
})(x.Z);
function Y(e) {
    let { overwrite: t } = e,
        n = (0, o.e7)([E.Z], () => E.Z.channel),
        l = (0, o.e7)([R.Z], () => (null != n ? R.Z.getGuild(n.getGuildId()) : null)),
        r = (0, o.e7)([Z.Z], () => (null != l ? Z.Z.getRoles(l.id) : void 0));
    if (null == n || null == l || null == t) return null;
    let { guild_id: s, id: c } = n,
        { id: g } = t,
        p = () => {
            var e;
            if (null == R.Z.getGuild(s) || null == r) return '';
            let t = r[g],
                n = _.default.getUser(g),
                i = null != (e = null == n ? void 0 : n.username) ? e : '';
            return null != t ? t.name : i;
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
                I.Z.can(e, n, {
                    [g]: z(F({}, t), {
                        allow: l,
                        deny: r
                    })
                })
            )
                (0, m.kY)(n, g, l, r);
            else {
                let e;
                if (t.type === j.BN.MEMBER) {
                    let n = _.default.getUser(t.id);
                    null != n && (e = B.ZP.getName(n));
                } else if (t.type === j.BN.ROLE) {
                    let i = R.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = Z.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                V.X(e);
            }
        },
        b = (e) => {
            let t = I.Z.can(W.Plq.ADMINISTRATOR, l) || I.Z.can(W.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && N.xS.has(e) ? H.intl.string(H.t.bTS5lZ) : !((!a.fS(e, W.Plq.MANAGE_ROLES) || t) && (null == e || I.Z.can(e, l) || t)) && H.intl.string(H.t.nOtPMD);
        },
        v = g === s,
        y = n.isForumLikeChannel() && a.e$(t.deny, W.Plq.SEND_MESSAGES),
        S = a.e$(t.deny, W.Plq.SEND_MESSAGES),
        O = a.e$(t.deny, W.Plq.READ_MESSAGE_HISTORY),
        T = M.Z.generateChannelPermissionSpec(s, n, v, {
            createPostsDisabled: y,
            sendMessagesDisabled: S,
            readMessageHistoryDisabled: O
        });
    return (0, i.jsxs)(C.ZP.Content, {
        className: G.layoutStyle,
        children: [
            T.map((e, n) =>
                (0, i.jsx)(
                    f.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: x,
                        permissionRender: b,
                        className: G.permissionsForm
                    },
                    n
                )
            ),
            s === g
                ? null
                : (0, i.jsx)(d.zxk, {
                      variant: 'critical-secondary',
                      text: H.intl.format(H.t.txPV7u, { name: p() }),
                      onClick: () => {
                          let e = p();
                          u.Z.show({
                              title: H.intl.string(H.t.GuPYQE),
                              body: H.intl.format(H.t.xERCnZ, { name: e }),
                              cancelText: H.intl.string(H.t['ETE/oK']),
                              onConfirm: () => h.Z.clearPermissionOverwrite(c, g)
                          });
                      }
                  })
        ]
    });
}
function J(e) {
    let { guildId: t, channelId: n, user: l } = e,
        r = l.getAvatarURL(t, 32),
        s = D.ZP.getNickname(t, n, l),
        a = B.ZP.useUserTag(l),
        o = null,
        c = null;
    return (
        (o = null != s ? s : l.hasAvatarForGuild(t) ? l.username : a),
        (null != s || l.hasAvatarForGuild(t)) &&
            (c = (0, i.jsxs)('div', {
                className: G.userRowSubText,
                children: [
                    l.hasAvatarForGuild(t)
                        ? (0, i.jsx)(d.qEK, {
                              className: G.userRowSubAvatar,
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
            className: G.inline,
            children: [
                (0, i.jsx)(d.qEK, {
                    size: d.EFr.SIZE_32,
                    src: r,
                    'aria-label': l.username,
                    className: G.userRowAvatar
                }),
                (0, i.jsxs)('div', {
                    className: G.userRowText,
                    children: [
                        (0, i.jsx)(d.Text, {
                            className: G.userRowText,
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
function q(e) {
    return 'object' == typeof e && null != e && 'colorString' in e && 'name' in e;
}
function $(e) {
    let { guild: t, channel: n, permissionOverwrites: l, onClose: r, onSelect: a, position: c } = e,
        d = (0, o.e7)([Z.Z], () => Z.Z.getRoles(t.id)),
        u = (0, o.Wu)([w.ZP], () => w.ZP.getMemberIds(t.id));
    return (0, i.jsx)(y.Z, {
        label: H.intl.string(H.t.lT5Ztr),
        placeholder: H.intl.string(H.t.V2pZRk),
        'aria-label': H.intl.string(H.t['Uvt+p6']),
        sections: [H.intl.string(H.t.LPJmLy), H.intl.string(H.t['9Oq93t'])],
        onRenderResult: (e) => {
            if (q(e)) {
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
                return (0, i.jsx)(J, {
                    guildId: t.id,
                    channelId: n.id,
                    user: e
                });
        },
        onFilterResults: (e, t) =>
            0 === t
                ? s()(d)
                      .filter((t) => null == l[t.id] && e(t.name))
                      .sortBy((e) => -e.position)
                      .value()
                : s()(u)
                      .map(_.default.getUser)
                      .filter(P.lm)
                      .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            A.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            null != e && (q(e) ? a(e.id, j.BN.ROLE) : e instanceof O.Z && a(e.id, j.BN.MEMBER));
        },
        onClose: r,
        position: c
    });
}
function Q() {
    let e = l.useRef(null),
        { channel: t, permissionOverwrites: r, selectedOverwriteId: a } = (0, o.cj)([E.Z], () => E.Z),
        f = null == t ? void 0 : t.getGuildId(),
        { guild: x, guildRoles: y } = (0, o.cj)(
            [R.Z, Z.Z],
            () => {
                let e = null != f ? R.Z.getGuild(f) : void 0,
                    t = null != e ? Z.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [f]
        ),
        N = (0, U.Z)(f, r),
        O = (0, b.ZP)(),
        T = (0, o.e7)([v.Z], () => v.Z.roleStyle),
        w = l.useCallback(
            (e, l) => {
                if (null == t) return null;
                (0, g.jW)(e, async () => {
                    let { id: e, role: r, name: s } = l,
                        a = null != x ? (0, S.lV)(x) : null,
                        o = null != r && a === r.id,
                        { default: c } = await n.e('83884').then(n.bind(n, 905687));
                    return (n) =>
                        (0, i.jsx)(
                            c,
                            z(F({}, n), {
                                id: e,
                                role: r,
                                handleDeletePermission: o
                                    ? void 0
                                    : () => {
                                          u.Z.show({
                                              title: H.intl.string(H.t.GuPYQE),
                                              body: H.intl.format(H.t.xERCnZ, { name: s }),
                                              cancelText: H.intl.string(H.t['ETE/oK']),
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
    let I = (e) => {
            let { position: n, closePopout: l } = e;
            return (0, i.jsx)($, {
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
                allow: k.Hn,
                deny: k.Hn
            }).then(() => (0, m.Aj)(e));
        };
    null != r && null == r[x.id] && (r[x.id] = k.we(x.id));
    let A = s()(r)
            .filter((e) => e.type === j.BN.ROLE)
            .map((e) => y[e.id])
            .filter(P.lm)
            .sortBy((e) => -e.position)
            .map((e) =>
                (0, i.jsx)(
                    p.Z,
                    {
                        theme: O,
                        roleStyle: T,
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
            )
            .value(),
        D = s()(N)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(x.id, 24);
                return (0, i.jsx)(
                    p.Z,
                    {
                        id: e.id,
                        guild: x,
                        theme: O,
                        roleStyle: T,
                        'aria-label': B.ZP.getUserTag(e, { decoration: 'never' }),
                        onContextMenu: (t) =>
                            w(t, {
                                id: e.id,
                                name: e.username
                            }),
                        children: (0, i.jsxs)('div', {
                            className: G.inline,
                            children: [
                                (0, i.jsx)(d.qEK, {
                                    size: d.EFr.SIZE_20,
                                    src: t,
                                    'aria-label': e.username,
                                    className: G.xsmallAvatar
                                }),
                                (0, i.jsx)('span', {
                                    className: G.username,
                                    children: B.ZP.getUserTag(e)
                                })
                            ]
                        })
                    },
                    ''.concat(a, '-').concat(e.id)
                );
            })
            .value();
    return (0, i.jsx)(C.ZP.Sidebar, {
        className: G.layoutStyle,
        scrollable: !0,
        children: (0, i.jsxs)(d.njP, {
            onItemSelect: m.Aj,
            selectedItem: a,
            orientation: 'vertical',
            children: [
                (() => {
                    let t = (0, c.wj)(O) ? n(521715) : n(299603);
                    return (0, i.jsx)(d.yRy, {
                        targetElementRef: e,
                        renderPopout: I,
                        position: 'bottom',
                        autoInvert: !1,
                        clickTrap: !0,
                        children: (n) =>
                            (0, i.jsx)(
                                d.njP.Header,
                                z(F({ ref: e }, n), {
                                    children: (0, i.jsxs)('div', {
                                        className: G.sidebarHeaderDefault,
                                        children: [
                                            (0, i.jsxs)('span', {
                                                children: [H.intl.string(H.t.LPJmLy), '/', H.intl.string(H.t['9Oq93t'])]
                                            }),
                                            (0, i.jsx)('img', {
                                                alt: '',
                                                className: G.sidebarHeader,
                                                src: t
                                            })
                                        ]
                                    })
                                })
                            )
                    });
                })(),
                A,
                D,
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
                                href: L.Z.getArticleURL(W.BhN.PERMISSIONS_TUTORIAL),
                                target: '_blank',
                                children: H.intl.string(H.t['pfoA8/'])
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function K() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, o.cj)([E.Z], () => E.Z);
    if (null == (0, o.e7)([R.Z], () => (null != e ? R.Z.getGuild(e.getGuildId()) : null)) || null == e || null == t || null == n) return null;
    let l = t[n];
    return (0, i.jsxs)(C.ZP, {
        className: G.container,
        children: [(0, i.jsx)(Q, {}), (0, i.jsx)(Y, { overwrite: l })]
    });
}
