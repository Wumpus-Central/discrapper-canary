n.d(t, {
    Z: () => $,
    n: () => F
}),
    n(539854),
    n(415506);
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
    g = n(741361),
    m = n(668390),
    p = n(144991),
    f = n(852860),
    j = n(911969),
    x = n(410030),
    b = n(607070),
    v = n(940639),
    y = n(325476),
    C = n(146085),
    N = n(598077),
    S = n(277053),
    E = n(388610),
    O = n(271383),
    Z = n(485386),
    w = n(430824),
    T = n(496675),
    R = n(594174),
    _ = n(823379),
    I = n(892880),
    P = n(63063),
    A = n(5192),
    L = n(233608),
    D = n(700785),
    M = n(51144),
    k = n(257017),
    B = n(188857),
    V = n(981631),
    W = n(388032),
    U = n(483112);
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function G(e, t) {
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
let F = o.ZP.connectStores([S.Z, E.Z], () => {
    let e = E.Z.getChannel();
    return {
        submitting: S.Z.formState === V.QZA.SUBMITTING,
        onReset() {
            (0, g.S1)();
        },
        onSave() {
            if (null == e) return;
            let t = S.Z.editedPermissionIds.reduce((e, t) => {
                let n = S.Z.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, g.hw)(e.id, t);
        }
    };
})(f.Z);
function z(e) {
    let { overwrite: t } = e,
        n = (0, o.e7)([S.Z], () => S.Z.channel),
        l = (0, o.e7)([w.Z], () => (null != n ? w.Z.getGuild(n.getGuildId()) : null)),
        r = (0, o.e7)([Z.Z], () => (null != l ? Z.Z.getRoles(l.id) : void 0));
    if (null == n || null == l || null == t) return null;
    let { guild_id: s, id: c } = n,
        { id: m } = t,
        f = () => {
            var e;
            if (null == w.Z.getGuild(s) || null == r) return '';
            let t = r[m],
                n = R.default.getUser(m),
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
                T.Z.can(e, n, {
                    [m]: G(H({}, t), {
                        allow: l,
                        deny: r
                    })
                })
            )
                (0, g.kY)(n, m, l, r);
            else {
                let e;
                if (t.type === j.BN.MEMBER) {
                    let n = R.default.getUser(t.id);
                    null != n && (e = M.ZP.getName(n));
                } else if (t.type === j.BN.ROLE) {
                    let i = w.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = Z.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                k.X(e);
            }
        },
        b = (e) => {
            let t = T.Z.can(V.Plq.ADMINISTRATOR, l) || T.Z.can(V.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && C.xS.has(e) ? W.intl.string(W.t.bTS5lZ) : !((!a.fS(e, V.Plq.MANAGE_ROLES) || t) && (null == e || T.Z.can(e, l) || t)) && W.intl.string(W.t.nOtPMD);
        },
        v = m === s,
        N = n.isForumLikeChannel() && a.e$(t.deny, V.Plq.SEND_MESSAGES),
        E = a.e$(t.deny, V.Plq.SEND_MESSAGES),
        O = a.e$(t.deny, V.Plq.READ_MESSAGE_HISTORY),
        _ = L.Z.generateChannelPermissionSpec(s, n, v, {
            createPostsDisabled: N,
            sendMessagesDisabled: E,
            readMessageHistoryDisabled: O
        });
    return (0, i.jsxs)(y.ZP.Content, {
        className: U.layoutStyle,
        children: [
            _.map((e, n) =>
                (0, i.jsx)(
                    p.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: x,
                        permissionRender: b,
                        className: U.permissionsForm
                    },
                    n
                )
            ),
            s === m
                ? null
                : (0, i.jsx)(d.zxk, {
                      look: d.zxk.Looks.OUTLINED,
                      color: d.zxk.Colors.RED,
                      onClick: () => {
                          let e = f();
                          u.Z.show({
                              title: W.intl.string(W.t.GuPYQE),
                              body: W.intl.format(W.t.xERCnZ, { name: e }),
                              cancelText: W.intl.string(W.t['ETE/oK']),
                              onConfirm: () => h.Z.clearPermissionOverwrite(c, m)
                          });
                      },
                      children: W.intl.format(W.t.txPV7u, { name: f() })
                  })
        ]
    });
}
function X(e) {
    let { guildId: t, channelId: n, user: l } = e,
        r = l.getAvatarURL(t, 32),
        s = A.ZP.getNickname(t, n, l),
        a = M.ZP.useUserTag(l),
        o = null,
        c = null;
    return (
        (o = null != s ? s : l.hasAvatarForGuild(t) ? l.username : a),
        (null != s || l.hasAvatarForGuild(t)) &&
            (c = (0, i.jsxs)('div', {
                className: U.userRowSubText,
                children: [
                    l.hasAvatarForGuild(t)
                        ? (0, i.jsx)(d.qEK, {
                              className: U.userRowSubAvatar,
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
            className: U.inline,
            children: [
                (0, i.jsx)(d.qEK, {
                    size: d.EFr.SIZE_32,
                    src: r,
                    'aria-label': l.username,
                    className: U.userRowAvatar
                }),
                (0, i.jsxs)('div', {
                    className: U.userRowText,
                    children: [
                        (0, i.jsx)(d.Text, {
                            className: U.userRowText,
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
        d = (0, o.e7)([Z.Z], () => Z.Z.getRoles(t.id)),
        u = (0, o.Wu)([O.ZP], () => O.ZP.getMemberIds(t.id));
    return (0, i.jsx)(v.Z, {
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
            if (e instanceof N.Z)
                return (0, i.jsx)(X, {
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
                      .map(R.default.getUser)
                      .filter(_.lm)
                      .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            I.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            null != e && (J(e) ? a(e.id, j.BN.ROLE) : e instanceof N.Z && a(e.id, j.BN.MEMBER));
        },
        onClose: r,
        position: c
    });
}
function Y() {
    let e = l.useRef(null),
        { channel: t, permissionOverwrites: r, selectedOverwriteId: a } = (0, o.cj)([S.Z], () => S.Z),
        u = null == t ? void 0 : t.getGuildId(),
        { guild: p, guildRoles: f } = (0, o.cj)(
            [w.Z, Z.Z],
            () => {
                let e = null != u ? w.Z.getGuild(u) : void 0,
                    t = null != e ? Z.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [u]
        ),
        v = (0, B.Z)(u, r),
        C = (0, x.ZP)(),
        N = (0, o.e7)([b.Z], () => b.Z.roleStyle);
    if (null == p || null == f || null == t || null == r) return null;
    let E = (e) => {
            let { position: n, closePopout: l } = e;
            return (0, i.jsx)(q, {
                guild: p,
                channel: t,
                permissionOverwrites: r,
                position: null != n ? n : 'bottom',
                onSelect: O,
                onClose: l
            });
        },
        O = (e, n) => {
            h.Z.updatePermissionOverwrite(t.id, {
                id: e,
                type: n,
                allow: D.Hn,
                deny: D.Hn
            }).then(() => (0, g.Aj)(e));
        };
    null != r && null == r[p.id] && (r[p.id] = D.we(p.id));
    let T = s()(r)
            .filter((e) => e.type === j.BN.ROLE)
            .map((e) => f[e.id])
            .filter(_.lm)
            .sortBy((e) => -e.position)
            .map((e) =>
                (0, i.jsx)(
                    m.Z,
                    {
                        theme: C,
                        roleStyle: N,
                        id: e.id,
                        role: e,
                        guild: p,
                        color: e.colorString,
                        'aria-label': e.name,
                        children: e.name
                    },
                    ''.concat(a, '-').concat(e.id)
                )
            )
            .value(),
        R = s()(v)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(p.id, 24);
                return (0, i.jsx)(
                    m.Z,
                    {
                        id: e.id,
                        guild: p,
                        theme: C,
                        roleStyle: N,
                        'aria-label': M.ZP.getUserTag(e, { decoration: 'never' }),
                        children: (0, i.jsxs)('div', {
                            className: U.inline,
                            children: [
                                (0, i.jsx)(d.qEK, {
                                    size: d.EFr.SIZE_20,
                                    src: t,
                                    'aria-label': e.username,
                                    className: U.xsmallAvatar
                                }),
                                (0, i.jsx)('span', {
                                    className: U.username,
                                    children: M.ZP.getUserTag(e)
                                })
                            ]
                        })
                    },
                    ''.concat(a, '-').concat(e.id)
                );
            })
            .value();
    return (0, i.jsx)(y.ZP.Sidebar, {
        className: U.layoutStyle,
        scrollable: !0,
        children: (0, i.jsxs)(d.njP, {
            onItemSelect: g.Aj,
            selectedItem: a,
            orientation: 'vertical',
            children: [
                (() => {
                    let t = (0, c.wj)(C) ? n(521715) : n(299603);
                    return (0, i.jsx)(d.yRy, {
                        targetElementRef: e,
                        renderPopout: E,
                        position: 'bottom',
                        autoInvert: !1,
                        clickTrap: !0,
                        children: (n) =>
                            (0, i.jsx)(
                                d.njP.Header,
                                G(H({ ref: e }, n), {
                                    children: (0, i.jsxs)('div', {
                                        className: U.sidebarHeaderDefault,
                                        children: [
                                            (0, i.jsxs)('span', {
                                                children: [W.intl.string(W.t.LPJmLy), '/', W.intl.string(W.t['9Oq93t'])]
                                            }),
                                            (0, i.jsx)('img', {
                                                alt: '',
                                                className: U.sidebarHeader,
                                                src: t
                                            })
                                        ]
                                    })
                                })
                            )
                    });
                })(),
                T,
                R,
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
                                href: P.Z.getArticleURL(V.BhN.PERMISSIONS_TUTORIAL),
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
function $() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, o.cj)([S.Z], () => S.Z);
    if (null == (0, o.e7)([w.Z], () => (null != e ? w.Z.getGuild(e.getGuildId()) : null)) || null == e || null == t || null == n) return null;
    let l = t[n];
    return (0, i.jsxs)(y.ZP, {
        className: U.container,
        children: [(0, i.jsx)(Y, {}), (0, i.jsx)(z, { overwrite: l })]
    });
}
