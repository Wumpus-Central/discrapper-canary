(n.d(t, {
    Z: () => Q,
    n: () => z
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
    S = n(598077),
    E = n(277053),
    O = n(388610),
    T = n(271383),
    w = n(485386),
    Z = n(430824),
    R = n(496675),
    I = n(594174),
    _ = n(823379),
    P = n(892880),
    A = n(63063),
    L = n(5192),
    k = n(233608),
    D = n(700785),
    M = n(51144),
    B = n(257017),
    U = n(188857),
    V = n(981631),
    W = n(388032),
    H = n(483112);
function G(e) {
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
function F(e, t) {
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
let z = o.ZP.connectStores([E.Z, O.Z], () => {
    let e = O.Z.getChannel();
    return {
        submitting: E.Z.formState === V.QZA.SUBMITTING,
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
function X(e) {
    let { overwrite: t } = e,
        n = (0, o.e7)([E.Z], () => E.Z.channel),
        l = (0, o.e7)([Z.Z], () => (null != n ? Z.Z.getGuild(n.getGuildId()) : null)),
        r = (0, o.e7)([w.Z], () => (null != l ? w.Z.getRoles(l.id) : void 0));
    if (null == n || null == l || null == t) return null;
    let { guild_id: s, id: c } = n,
        { id: g } = t,
        p = () => {
            var e;
            if (null == Z.Z.getGuild(s) || null == r) return '';
            let t = r[g],
                n = I.default.getUser(g),
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
                R.Z.can(e, n, {
                    [g]: F(G({}, t), {
                        allow: l,
                        deny: r
                    })
                })
            )
                (0, m.kY)(n, g, l, r);
            else {
                let e;
                if (t.type === j.BN.MEMBER) {
                    let n = I.default.getUser(t.id);
                    null != n && (e = M.ZP.getName(n));
                } else if (t.type === j.BN.ROLE) {
                    let i = Z.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = w.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                B.X(e);
            }
        },
        b = (e) => {
            let t = R.Z.can(V.Plq.ADMINISTRATOR, l) || R.Z.can(V.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && N.xS.has(e) ? W.intl.string(W.t.bTS5lZ) : !((!a.fS(e, V.Plq.MANAGE_ROLES) || t) && (null == e || R.Z.can(e, l) || t)) && W.intl.string(W.t.nOtPMD);
        },
        v = g === s,
        y = n.isForumLikeChannel() && a.e$(t.deny, V.Plq.SEND_MESSAGES),
        S = a.e$(t.deny, V.Plq.SEND_MESSAGES),
        O = a.e$(t.deny, V.Plq.READ_MESSAGE_HISTORY),
        T = k.Z.generateChannelPermissionSpec(s, n, v, {
            createPostsDisabled: y,
            sendMessagesDisabled: S,
            readMessageHistoryDisabled: O
        });
    return (0, i.jsxs)(C.ZP.Content, {
        className: H.layoutStyle,
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
                        className: H.permissionsForm
                    },
                    n
                )
            ),
            s === g
                ? null
                : (0, i.jsx)(d.zxk, {
                      look: d.zxk.Looks.OUTLINED,
                      color: d.zxk.Colors.RED,
                      onClick: () => {
                          let e = p();
                          u.Z.show({
                              title: W.intl.string(W.t.GuPYQE),
                              body: W.intl.format(W.t.xERCnZ, { name: e }),
                              cancelText: W.intl.string(W.t['ETE/oK']),
                              onConfirm: () => h.Z.clearPermissionOverwrite(c, g)
                          });
                      },
                      children: W.intl.format(W.t.txPV7u, { name: p() })
                  })
        ]
    });
}
function Y(e) {
    let { guildId: t, channelId: n, user: l } = e,
        r = l.getAvatarURL(t, 32),
        s = L.ZP.getNickname(t, n, l),
        a = M.ZP.useUserTag(l),
        o = null,
        c = null;
    return (
        (o = null != s ? s : l.hasAvatarForGuild(t) ? l.username : a),
        (null != s || l.hasAvatarForGuild(t)) &&
            (c = (0, i.jsxs)('div', {
                className: H.userRowSubText,
                children: [
                    l.hasAvatarForGuild(t)
                        ? (0, i.jsx)(d.qEK, {
                              className: H.userRowSubAvatar,
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
            className: H.inline,
            children: [
                (0, i.jsx)(d.qEK, {
                    size: d.EFr.SIZE_32,
                    src: r,
                    'aria-label': l.username,
                    className: H.userRowAvatar
                }),
                (0, i.jsxs)('div', {
                    className: H.userRowText,
                    children: [
                        (0, i.jsx)(d.Text, {
                            className: H.userRowText,
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
function J(e) {
    return 'object' == typeof e && null != e && 'colorString' in e && 'name' in e;
}
function q(e) {
    let { guild: t, channel: n, permissionOverwrites: l, onClose: r, onSelect: a, position: c } = e,
        d = (0, o.e7)([w.Z], () => w.Z.getRoles(t.id)),
        u = (0, o.Wu)([T.ZP], () => T.ZP.getMemberIds(t.id));
    return (0, i.jsx)(y.Z, {
        label: W.intl.string(W.t.lT5Ztr),
        placeholder: W.intl.string(W.t.V2pZRk),
        'aria-label': W.intl.string(W.t['Uvt+p6']),
        sections: [W.intl.string(W.t.LPJmLy), W.intl.string(W.t['9Oq93t'])],
        onRenderResult: (e) => {
            if (J(e)) {
                let t;
                return (
                    null != e.colorString && (t = { color: e.colorString }),
                    (0, i.jsx)('span', {
                        style: t,
                        children: e.name
                    })
                );
            }
            if (e instanceof S.Z)
                return (0, i.jsx)(Y, {
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
                      .map(I.default.getUser)
                      .filter(_.lm)
                      .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            P.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            null != e && (J(e) ? a(e.id, j.BN.ROLE) : e instanceof S.Z && a(e.id, j.BN.MEMBER));
        },
        onClose: r,
        position: c
    });
}
function $() {
    let e = l.useRef(null),
        { channel: t, permissionOverwrites: r, selectedOverwriteId: a } = (0, o.cj)([E.Z], () => E.Z),
        f = null == t ? void 0 : t.getGuildId(),
        { guild: x, guildRoles: y } = (0, o.cj)(
            [Z.Z, w.Z],
            () => {
                let e = null != f ? Z.Z.getGuild(f) : void 0,
                    t = null != e ? w.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [f]
        ),
        N = (0, U.Z)(f, r),
        S = (0, b.ZP)(),
        O = (0, o.e7)([v.Z], () => v.Z.roleStyle),
        T = l.useCallback(
            (e, l) => {
                if (null == t) return null;
                (0, g.jW)(e, async () => {
                    let { id: e, role: r, name: s } = l,
                        a = null != r && (null == x ? void 0 : x.getEveryoneRoleId()) === r.id,
                        { default: o } = await n.e('83884').then(n.bind(n, 905687));
                    return (n) =>
                        (0, i.jsx)(
                            o,
                            F(G({}, n), {
                                id: e,
                                role: r,
                                handleDeletePermission: a
                                    ? void 0
                                    : () => {
                                          u.Z.show({
                                              title: W.intl.string(W.t.GuPYQE),
                                              body: W.intl.format(W.t.xERCnZ, { name: s }),
                                              cancelText: W.intl.string(W.t['ETE/oK']),
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
    let R = (e) => {
            let { position: n, closePopout: l } = e;
            return (0, i.jsx)(q, {
                guild: x,
                channel: t,
                permissionOverwrites: r,
                position: null != n ? n : 'bottom',
                onSelect: I,
                onClose: l
            });
        },
        I = (e, n) => {
            h.Z.updatePermissionOverwrite(t.id, {
                id: e,
                type: n,
                allow: D.Hn,
                deny: D.Hn
            }).then(() => (0, m.Aj)(e));
        };
    null != r && null == r[x.id] && (r[x.id] = D.we(x.id));
    let P = s()(r)
            .filter((e) => e.type === j.BN.ROLE)
            .map((e) => y[e.id])
            .filter(_.lm)
            .sortBy((e) => -e.position)
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
                            T(t, {
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
        L = s()(N)
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
                        'aria-label': M.ZP.getUserTag(e, { decoration: 'never' }),
                        onContextMenu: (t) =>
                            T(t, {
                                id: e.id,
                                name: e.username
                            }),
                        children: (0, i.jsxs)('div', {
                            className: H.inline,
                            children: [
                                (0, i.jsx)(d.qEK, {
                                    size: d.EFr.SIZE_20,
                                    src: t,
                                    'aria-label': e.username,
                                    className: H.xsmallAvatar
                                }),
                                (0, i.jsx)('span', {
                                    className: H.username,
                                    children: M.ZP.getUserTag(e)
                                })
                            ]
                        })
                    },
                    ''.concat(a, '-').concat(e.id)
                );
            })
            .value();
    return (0, i.jsx)(C.ZP.Sidebar, {
        className: H.layoutStyle,
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
                        renderPopout: R,
                        position: 'bottom',
                        autoInvert: !1,
                        clickTrap: !0,
                        children: (n) =>
                            (0, i.jsx)(
                                d.njP.Header,
                                F(G({ ref: e }, n), {
                                    children: (0, i.jsxs)('div', {
                                        className: H.sidebarHeaderDefault,
                                        children: [
                                            (0, i.jsxs)('span', {
                                                children: [W.intl.string(W.t.LPJmLy), '/', W.intl.string(W.t['9Oq93t'])]
                                            }),
                                            (0, i.jsx)('img', {
                                                alt: '',
                                                className: H.sidebarHeader,
                                                src: t
                                            })
                                        ]
                                    })
                                })
                            )
                    });
                })(),
                P,
                L,
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
                                href: A.Z.getArticleURL(V.BhN.PERMISSIONS_TUTORIAL),
                                target: '_blank',
                                children: W.intl.string(W.t['pfoA8/'])
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function Q() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, o.cj)([E.Z], () => E.Z);
    if (null == (0, o.e7)([Z.Z], () => (null != e ? Z.Z.getGuild(e.getGuildId()) : null)) || null == e || null == t || null == n) return null;
    let l = t[n];
    return (0, i.jsxs)(C.ZP, {
        className: H.container,
        children: [(0, i.jsx)($, {}), (0, i.jsx)(X, { overwrite: l })]
    });
}
