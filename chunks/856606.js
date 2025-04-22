n.d(t, {
    Z: () => $,
    n: () => H
}),
    n(539854),
    n(415506);
var i = n(200651),
    l = n(192379),
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
    x = n(911969),
    j = n(410030),
    b = n(607070),
    v = n(940639),
    y = n(325476),
    C = n(146085),
    N = n(598077),
    S = n(277053),
    w = n(388610),
    O = n(271383),
    Z = n(430824),
    T = n(496675),
    E = n(594174),
    R = n(823379),
    _ = n(892880),
    I = n(63063),
    P = n(5192),
    D = n(233608),
    L = n(700785),
    A = n(51144),
    M = n(257017),
    k = n(188857),
    B = n(981631),
    V = n(388032),
    G = n(483112);
function U(e) {
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
function W(e, t) {
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
let H = o.ZP.connectStores([S.Z, w.Z], () => {
    let e = w.Z.getChannel();
    return {
        submitting: S.Z.formState === B.QZA.SUBMITTING,
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
        l = (0, o.e7)([Z.Z], () => (null != n ? Z.Z.getGuild(n.getGuildId()) : null)),
        r = (0, o.e7)([Z.Z], () => (null != l ? Z.Z.getRoles(l.id) : void 0));
    if (null == n || null == l || null == t) return null;
    let { guild_id: s, id: c } = n,
        { id: m } = t,
        f = () => {
            var e;
            if (null == Z.Z.getGuild(s) || null == r) return '';
            let t = r[m],
                n = E.default.getUser(m),
                i = null != (e = null == n ? void 0 : n.username) ? e : '';
            return null != t ? t.name : i;
        },
        j = (e, i) => {
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
                    [m]: W(U({}, t), {
                        allow: l,
                        deny: r
                    })
                })
            )
                (0, g.kY)(n, m, l, r);
            else {
                let e;
                if (t.type === x.BN.MEMBER) {
                    let n = E.default.getUser(t.id);
                    null != n && (e = A.ZP.getName(n));
                } else if (t.type === x.BN.ROLE) {
                    let i = Z.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = Z.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                M.X(e);
            }
        },
        b = (e) => {
            let t = T.Z.can(B.Plq.ADMINISTRATOR, l) || T.Z.can(B.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && C.xS.has(e) ? V.intl.string(V.t.bTS5lZ) : !((!a.fS(e, B.Plq.MANAGE_ROLES) || t) && (null == e || T.Z.can(e, l) || t)) && V.intl.string(V.t.nOtPMD);
        },
        v = m === s,
        N = n.isForumLikeChannel() && a.e$(t.deny, B.Plq.SEND_MESSAGES),
        w = a.e$(t.deny, B.Plq.SEND_MESSAGES),
        O = a.e$(t.deny, B.Plq.READ_MESSAGE_HISTORY),
        R = D.Z.generateChannelPermissionSpec(s, n, v, {
            createPostsDisabled: N,
            sendMessagesDisabled: w,
            readMessageHistoryDisabled: O
        });
    return (0, i.jsxs)(y.ZP.Content, {
        className: G.layoutStyle,
        children: [
            R.map((e, n) =>
                (0, i.jsx)(
                    p.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: j,
                        permissionRender: b,
                        className: G.permissionsForm
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
                              title: V.intl.string(V.t.GuPYQE),
                              body: V.intl.format(V.t.xERCnZ, { name: e }),
                              cancelText: V.intl.string(V.t['ETE/oK']),
                              onConfirm: () => h.Z.clearPermissionOverwrite(c, m)
                          });
                      },
                      children: V.intl.format(V.t.txPV7u, { name: f() })
                  })
        ]
    });
}
function F(e) {
    let { guildId: t, channelId: n, user: l } = e,
        r = l.getAvatarURL(t, 32),
        s = P.ZP.getNickname(t, n, l),
        a = A.ZP.useUserTag(l),
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
function X(e) {
    return 'object' == typeof e && null != e && 'colorString' in e && 'name' in e;
}
function J(e) {
    let { guild: t, channel: n, permissionOverwrites: l, onClose: r, onSelect: a, position: c } = e,
        d = (0, o.e7)([Z.Z], () => Z.Z.getRoles(t.id)),
        u = (0, o.Wu)([O.ZP], () => O.ZP.getMemberIds(t.id));
    return (0, i.jsx)(v.Z, {
        label: V.intl.string(V.t.lT5Ztr),
        placeholder: V.intl.string(V.t.V2pZRk),
        'aria-label': V.intl.string(V.t['Uvt+p6']),
        sections: [V.intl.string(V.t.LPJmLy), V.intl.string(V.t['9Oq93t'])],
        onRenderResult: (e) => {
            if (X(e)) {
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
                return (0, i.jsx)(F, {
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
                      .map(E.default.getUser)
                      .filter(R.lm)
                      .filter((e) => !e.isClyde())
                      .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            _.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            null != e && (X(e) ? a(e.id, x.BN.ROLE) : e instanceof N.Z && a(e.id, x.BN.MEMBER));
        },
        onClose: r,
        position: c
    });
}
function q() {
    let e = l.useRef(null),
        { channel: t, permissionOverwrites: r, selectedOverwriteId: a } = (0, o.cj)([S.Z], () => S.Z),
        u = null == t ? void 0 : t.getGuildId(),
        { guild: p, guildRoles: f } = (0, o.cj)(
            [Z.Z],
            () => {
                let e = null != u ? Z.Z.getGuild(u) : void 0,
                    t = null != e ? Z.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [u]
        ),
        v = (0, k.Z)(u, r),
        C = (0, j.ZP)(),
        N = (0, o.e7)([b.Z], () => b.Z.roleStyle);
    if (null == p || null == f || null == t || null == r) return null;
    let w = (e) => {
            let { position: n, closePopout: l } = e;
            return (0, i.jsx)(J, {
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
                allow: L.Hn,
                deny: L.Hn
            }).then(() => (0, g.Aj)(e));
        };
    null != r && null == r[p.id] && (r[p.id] = L.we(p.id));
    let T = s()(r)
            .filter((e) => e.type === x.BN.ROLE)
            .map((e) => f[e.id])
            .filter(R.lm)
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
        E = s()(v)
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
                        'aria-label': A.ZP.getUserTag(e, { decoration: 'never' }),
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
                                    children: A.ZP.getUserTag(e)
                                })
                            ]
                        })
                    },
                    ''.concat(a, '-').concat(e.id)
                );
            })
            .value();
    return (0, i.jsx)(y.ZP.Sidebar, {
        className: G.layoutStyle,
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
                        renderPopout: w,
                        position: 'bottom',
                        autoInvert: !1,
                        children: (n) =>
                            (0, i.jsx)(
                                d.njP.Header,
                                W(U({ ref: e }, n), {
                                    children: (0, i.jsxs)('div', {
                                        className: G.sidebarHeaderDefault,
                                        children: [
                                            (0, i.jsxs)('span', {
                                                children: [V.intl.string(V.t.LPJmLy), '/', V.intl.string(V.t['9Oq93t'])]
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
                T,
                E,
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
                                href: I.Z.getArticleURL(B.BhN.PERMISSIONS_TUTORIAL),
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
function $() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, o.cj)([S.Z], () => S.Z);
    if (null == (0, o.e7)([Z.Z], () => (null != e ? Z.Z.getGuild(e.getGuildId()) : null)) || null == e || null == t || null == n) return null;
    let l = t[n];
    return (0, i.jsxs)(y.ZP, {
        className: G.container,
        children: [(0, i.jsx)(q, {}), (0, i.jsx)(z, { overwrite: l })]
    });
}
