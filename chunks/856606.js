n.d(t, {
    Z: () => Q,
    n: () => H
}),
    n(653041),
    n(411104);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    s = n.n(l),
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
    N = n(940639),
    v = n(325476),
    y = n(146085),
    C = n(598077),
    S = n(277053),
    w = n(388610),
    Z = n(271383),
    O = n(430824),
    E = n(496675),
    T = n(594174),
    R = n(823379),
    _ = n(892880),
    I = n(63063),
    P = n(5192),
    W = n(233608),
    L = n(700785),
    D = n(51144),
    A = n(257017),
    M = n(188857),
    k = n(981631),
    B = n(388032),
    V = n(483112);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
        submitting: S.Z.formState === k.QZA.SUBMITTING,
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
        i = (0, o.e7)([O.Z], () => (null != n ? O.Z.getGuild(n.getGuildId()) : null)),
        l = (0, o.e7)([O.Z], () => (null != i ? O.Z.getRoles(i.id) : void 0));
    if (null == n || null == i || null == t) return null;
    let { guild_id: s, id: c } = n,
        { id: m } = t,
        f = () => {
            var e;
            if (null == O.Z.getGuild(s) || null == l) return '';
            let t = l[m],
                n = T.default.getUser(m),
                r = null != (e = null == n ? void 0 : n.username) ? e : '';
            return null != t ? t.name : r;
        },
        j = (e, r) => {
            if ('boolean' == typeof r) throw Error('Unexpected boolean action');
            let { allow: i, deny: l } = t;
            switch (((l = a.Od(l, e)), (i = a.Od(i, e)), r)) {
                case 'ALLOW':
                    i = a.IH(i, e);
                    break;
                case 'DENY':
                    l = a.IH(l, e);
            }
            if (
                E.Z.can(e, n, {
                    [m]: U(G({}, t), {
                        allow: i,
                        deny: l
                    })
                })
            )
                (0, g.kY)(n, m, i, l);
            else {
                let e;
                if (t.type === x.BN.MEMBER) {
                    let n = T.default.getUser(t.id);
                    null != n && (e = D.ZP.getName(n));
                } else if (t.type === x.BN.ROLE) {
                    let r = O.Z.getGuild(n.getGuildId());
                    if (null != r) {
                        let n = O.Z.getRole(r.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                A.X(e);
            }
        },
        b = (e) => {
            let t = E.Z.can(k.Plq.ADMINISTRATOR, i) || E.Z.can(k.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && y.xS.has(e) ? B.NW.string(B.t.bTS5lZ) : !((!a.fS(e, k.Plq.MANAGE_ROLES) || t) && (null == e || E.Z.can(e, i) || t)) && B.NW.string(B.t.nOtPMD);
        },
        N = m === s,
        C = n.isForumLikeChannel() && a.e$(t.deny, k.Plq.SEND_MESSAGES),
        w = a.e$(t.deny, k.Plq.SEND_MESSAGES),
        Z = a.e$(t.deny, k.Plq.READ_MESSAGE_HISTORY),
        R = W.Z.generateChannelPermissionSpec(s, n, N, {
            createPostsDisabled: C,
            sendMessagesDisabled: w,
            readMessageHistoryDisabled: Z
        });
    return (0, r.jsxs)(v.ZP.Content, {
        className: V.layoutStyle,
        children: [
            R.map((e, n) =>
                (0, r.jsx)(
                    p.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: j,
                        permissionRender: b,
                        className: V.permissionsForm
                    },
                    n
                )
            ),
            s === m
                ? null
                : (0, r.jsx)(d.zxk, {
                      look: d.zxk.Looks.OUTLINED,
                      color: d.zxk.Colors.RED,
                      onClick: () => {
                          let e = f();
                          u.Z.show({
                              title: B.NW.string(B.t.GuPYQE),
                              body: B.NW.format(B.t.xERCnZ, { name: e }),
                              cancelText: B.NW.string(B.t['ETE/oK']),
                              onConfirm: () => h.Z.clearPermissionOverwrite(c, m)
                          });
                      },
                      children: B.NW.format(B.t.txPV7u, { name: f() })
                  })
        ]
    });
}
function F(e) {
    let { guildId: t, channelId: n, user: i } = e,
        l = i.getAvatarURL(t, 32),
        s = P.ZP.getNickname(t, n, i),
        a = D.ZP.useUserTag(i),
        o = null,
        c = null;
    return (
        (o = null != s ? s : i.hasAvatarForGuild(t) ? i.username : a),
        (null != s || i.hasAvatarForGuild(t)) &&
            (c = (0, r.jsxs)('div', {
                className: V.userRowSubText,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, r.jsx)(d.qEK, {
                              className: V.userRowSubAvatar,
                              size: d.EFr.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              'aria-label': i.username
                          })
                        : null,
                    (0, r.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: a
                    })
                ]
            })),
        (0, r.jsxs)('div', {
            className: V.inline,
            children: [
                (0, r.jsx)(d.qEK, {
                    size: d.EFr.SIZE_32,
                    src: l,
                    'aria-label': i.username,
                    className: V.userRowAvatar
                }),
                (0, r.jsxs)('div', {
                    className: V.userRowText,
                    children: [
                        (0, r.jsx)(d.Text, {
                            className: V.userRowText,
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
    let { guild: t, channel: n, permissionOverwrites: i, onClose: l, onSelect: a, position: c } = e,
        d = (0, o.e7)([O.Z], () => O.Z.getRoles(t.id)),
        u = (0, o.Wu)([Z.ZP], () => Z.ZP.getMemberIds(t.id));
    return (0, r.jsx)(N.Z, {
        label: B.NW.string(B.t.lT5Ztr),
        placeholder: B.NW.string(B.t.V2pZRk),
        'aria-label': B.NW.string(B.t['Uvt+p6']),
        sections: [B.NW.string(B.t.LPJmLy), B.NW.string(B.t['9Oq93t'])],
        onRenderResult: (e) => {
            if (X(e)) {
                let t;
                return (
                    null != e.colorString && (t = { color: e.colorString }),
                    (0, r.jsx)('span', {
                        style: t,
                        children: e.name
                    })
                );
            }
            if (e instanceof C.Z)
                return (0, r.jsx)(F, {
                    guildId: t.id,
                    channelId: n.id,
                    user: e
                });
        },
        onFilterResults: (e, t) =>
            0 === t
                ? s()(d)
                      .filter((t) => null == i[t.id] && e(t.name))
                      .sortBy((e) => -e.position)
                      .value()
                : s()(u)
                      .map(T.default.getUser)
                      .filter(R.lm)
                      .filter((e) => !e.isClyde())
                      .filter((t) => null == i[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            _.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            null != e && (X(e) ? a(e.id, x.BN.ROLE) : e instanceof C.Z && a(e.id, x.BN.MEMBER));
        },
        onClose: l,
        position: c
    });
}
function q() {
    let e = i.useRef(null),
        { channel: t, permissionOverwrites: l, selectedOverwriteId: a } = (0, o.cj)([S.Z], () => S.Z),
        u = null == t ? void 0 : t.getGuildId(),
        { guild: p, guildRoles: f } = (0, o.cj)(
            [O.Z],
            () => {
                let e = null != u ? O.Z.getGuild(u) : void 0,
                    t = null != e ? O.Z.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                };
            },
            [u]
        ),
        N = (0, M.Z)(u, l),
        y = (0, j.ZP)(),
        C = (0, o.e7)([b.Z], () => b.Z.roleStyle);
    if (null == p || null == f || null == t || null == l) return null;
    let w = (e) => {
            let { position: n, closePopout: i } = e;
            return (0, r.jsx)(J, {
                guild: p,
                channel: t,
                permissionOverwrites: l,
                position: null != n ? n : 'bottom',
                onSelect: Z,
                onClose: i
            });
        },
        Z = (e, n) => {
            h.Z.updatePermissionOverwrite(t.id, {
                id: e,
                type: n,
                allow: L.Hn,
                deny: L.Hn
            }).then(() => (0, g.Aj)(e));
        };
    null != l && null == l[p.id] && (l[p.id] = L.we(p.id));
    let E = s()(l)
            .filter((e) => e.type === x.BN.ROLE)
            .map((e) => f[e.id])
            .filter(R.lm)
            .sortBy((e) => -e.position)
            .map((e) =>
                (0, r.jsx)(
                    m.Z,
                    {
                        theme: y,
                        roleStyle: C,
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
        T = s()(N)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(p.id, 24);
                return (0, r.jsx)(
                    m.Z,
                    {
                        id: e.id,
                        guild: p,
                        theme: y,
                        roleStyle: C,
                        'aria-label': D.ZP.getUserTag(e, { decoration: 'never' }),
                        children: (0, r.jsxs)('div', {
                            className: V.inline,
                            children: [
                                (0, r.jsx)(d.qEK, {
                                    size: d.EFr.SIZE_20,
                                    src: t,
                                    'aria-label': e.username,
                                    className: V.xsmallAvatar
                                }),
                                (0, r.jsx)('span', {
                                    className: V.username,
                                    children: D.ZP.getUserTag(e)
                                })
                            ]
                        })
                    },
                    ''.concat(a, '-').concat(e.id)
                );
            })
            .value();
    return (0, r.jsx)(v.ZP.Sidebar, {
        className: V.layoutStyle,
        scrollable: !0,
        children: (0, r.jsxs)(d.njP, {
            onItemSelect: g.Aj,
            selectedItem: a,
            orientation: 'vertical',
            children: [
                (() => {
                    let t = (0, c.wj)(y) ? n(521715) : n(299603);
                    return (0, r.jsx)(d.yRy, {
                        targetElementRef: e,
                        renderPopout: w,
                        position: 'bottom',
                        autoInvert: !1,
                        children: (n) =>
                            (0, r.jsx)(
                                d.njP.Header,
                                U(G({ ref: e }, n), {
                                    children: (0, r.jsxs)('div', {
                                        className: V.sidebarHeaderDefault,
                                        children: [
                                            (0, r.jsxs)('span', {
                                                children: [B.NW.string(B.t.LPJmLy), '/', B.NW.string(B.t['9Oq93t'])]
                                            }),
                                            (0, r.jsx)('img', {
                                                alt: '',
                                                className: V.sidebarHeader,
                                                src: t
                                            })
                                        ]
                                    })
                                })
                            )
                    });
                })(),
                E,
                T,
                (0, r.jsxs)(i.Fragment, {
                    children: [
                        (0, r.jsx)(d.njP.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14
                            }
                        }),
                        (0, r.jsx)(d.R94, {
                            type: d.geA.DESCRIPTION,
                            children: (0, r.jsx)(d.eee, {
                                href: I.Z.getArticleURL(k.BhN.PERMISSIONS_TUTORIAL),
                                target: '_blank',
                                children: B.NW.string(B.t['pfoA8/'])
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
    if (null == (0, o.e7)([O.Z], () => (null != e ? O.Z.getGuild(e.getGuildId()) : null)) || null == e || null == t || null == n) return null;
    let i = t[n];
    return (0, r.jsxs)(v.ZP, {
        className: V.container,
        children: [(0, r.jsx)(q, {}), (0, r.jsx)(z, { overwrite: i })]
    });
}
