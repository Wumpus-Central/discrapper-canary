n.d(t, {
    Z: () => $,
    n: () => H
}),
    n(539854),
    n(415506);
var i = n(200651),
    r = n(192379),
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
    O = n(271383),
    Z = n(430824),
    T = n(496675),
    E = n(594174),
    R = n(823379),
    _ = n(892880),
    I = n(63063),
    P = n(5192),
    W = n(233608),
    D = n(700785),
    L = n(51144),
    A = n(257017),
    M = n(188857),
    k = n(981631),
    B = n(388032),
    V = n(273249);
function G(e) {
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
function U(e, t) {
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
        r = (0, o.e7)([Z.Z], () => (null != n ? Z.Z.getGuild(n.getGuildId()) : null)),
        l = (0, o.e7)([Z.Z], () => (null != r ? Z.Z.getRoles(r.id) : void 0));
    if (null == n || null == r || null == t) return null;
    let { guild_id: s, id: c } = n,
        { id: m } = t,
        f = () => {
            var e;
            if (null == Z.Z.getGuild(s) || null == l) return '';
            let t = l[m],
                n = E.default.getUser(m),
                i = null != (e = null == n ? void 0 : n.username) ? e : '';
            return null != t ? t.name : i;
        },
        j = (e, i) => {
            if ('boolean' == typeof i) throw Error('Unexpected boolean action');
            let { allow: r, deny: l } = t;
            switch (((l = a.Od(l, e)), (r = a.Od(r, e)), i)) {
                case 'ALLOW':
                    r = a.IH(r, e);
                    break;
                case 'DENY':
                    l = a.IH(l, e);
            }
            if (
                T.Z.can(e, n, {
                    [m]: U(G({}, t), {
                        allow: r,
                        deny: l
                    })
                })
            )
                (0, g.kY)(n, m, r, l);
            else {
                let e;
                if (t.type === x.BN.MEMBER) {
                    let n = E.default.getUser(t.id);
                    null != n && (e = L.ZP.getName(n));
                } else if (t.type === x.BN.ROLE) {
                    let i = Z.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = Z.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                A.X(e);
            }
        },
        b = (e) => {
            let t = T.Z.can(k.Plq.ADMINISTRATOR, r) || T.Z.can(k.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && y.xS.has(e) ? B.NW.string(B.t.bTS5lZ) : !((!a.fS(e, k.Plq.MANAGE_ROLES) || t) && (null == e || T.Z.can(e, r) || t)) && B.NW.string(B.t.nOtPMD);
        },
        N = m === s,
        C = n.isForumLikeChannel() && a.e$(t.deny, k.Plq.SEND_MESSAGES),
        w = a.e$(t.deny, k.Plq.SEND_MESSAGES),
        O = a.e$(t.deny, k.Plq.READ_MESSAGE_HISTORY),
        R = W.Z.generateChannelPermissionSpec(s, n, N, {
            createPostsDisabled: C,
            sendMessagesDisabled: w,
            readMessageHistoryDisabled: O
        });
    return (0, i.jsxs)(v.ZP.Content, {
        className: V.layoutStyle,
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
                        className: V.permissionsForm
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
    let { guildId: t, channelId: n, user: r } = e,
        l = r.getAvatarURL(t, 32),
        s = P.ZP.getNickname(t, n, r),
        a = L.ZP.useUserTag(r),
        o = null,
        c = null;
    return (
        (o = null != s ? s : r.hasAvatarForGuild(t) ? r.username : a),
        (null != s || r.hasAvatarForGuild(t)) &&
            (c = (0, i.jsxs)('div', {
                className: V.userRowSubText,
                children: [
                    r.hasAvatarForGuild(t)
                        ? (0, i.jsx)(d.qEK, {
                              className: V.userRowSubAvatar,
                              size: d.EFr.SIZE_16,
                              src: r.getAvatarURL(void 0, 16),
                              'aria-label': r.username
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
            className: V.inline,
            children: [
                (0, i.jsx)(d.qEK, {
                    size: d.EFr.SIZE_32,
                    src: l,
                    'aria-label': r.username,
                    className: V.userRowAvatar
                }),
                (0, i.jsxs)('div', {
                    className: V.userRowText,
                    children: [
                        (0, i.jsx)(d.Text, {
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
    let { guild: t, channel: n, permissionOverwrites: r, onClose: l, onSelect: a, position: c } = e,
        d = (0, o.e7)([Z.Z], () => Z.Z.getRoles(t.id)),
        u = (0, o.Wu)([O.ZP], () => O.ZP.getMemberIds(t.id));
    return (0, i.jsx)(N.Z, {
        label: B.NW.string(B.t.lT5Ztr),
        placeholder: B.NW.string(B.t.V2pZRk),
        'aria-label': B.NW.string(B.t['Uvt+p6']),
        sections: [B.NW.string(B.t.LPJmLy), B.NW.string(B.t['9Oq93t'])],
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
            if (e instanceof C.Z)
                return (0, i.jsx)(F, {
                    guildId: t.id,
                    channelId: n.id,
                    user: e
                });
        },
        onFilterResults: (e, t) =>
            0 === t
                ? s()(d)
                      .filter((t) => null == r[t.id] && e(t.name))
                      .sortBy((e) => -e.position)
                      .value()
                : s()(u)
                      .map(E.default.getUser)
                      .filter(R.lm)
                      .filter((e) => !e.isClyde())
                      .filter((t) => null == r[t.id] && e(t.username.toLowerCase()))
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
    let e = r.useRef(null),
        { channel: t, permissionOverwrites: l, selectedOverwriteId: a } = (0, o.cj)([S.Z], () => S.Z),
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
        N = (0, M.Z)(u, l),
        y = (0, j.ZP)(),
        C = (0, o.e7)([b.Z], () => b.Z.roleStyle);
    if (null == p || null == f || null == t || null == l) return null;
    let w = (e) => {
            let { position: n, closePopout: r } = e;
            return (0, i.jsx)(J, {
                guild: p,
                channel: t,
                permissionOverwrites: l,
                position: null != n ? n : 'bottom',
                onSelect: O,
                onClose: r
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
    null != l && null == l[p.id] && (l[p.id] = D.we(p.id));
    let T = s()(l)
            .filter((e) => e.type === x.BN.ROLE)
            .map((e) => f[e.id])
            .filter(R.lm)
            .sortBy((e) => -e.position)
            .map((e) =>
                (0, i.jsx)(
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
        E = s()(N)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(p.id, 24);
                return (0, i.jsx)(
                    m.Z,
                    {
                        id: e.id,
                        guild: p,
                        theme: y,
                        roleStyle: C,
                        'aria-label': L.ZP.getUserTag(e, { decoration: 'never' }),
                        children: (0, i.jsxs)('div', {
                            className: V.inline,
                            children: [
                                (0, i.jsx)(d.qEK, {
                                    size: d.EFr.SIZE_20,
                                    src: t,
                                    'aria-label': e.username,
                                    className: V.xsmallAvatar
                                }),
                                (0, i.jsx)('span', {
                                    className: V.username,
                                    children: L.ZP.getUserTag(e)
                                })
                            ]
                        })
                    },
                    ''.concat(a, '-').concat(e.id)
                );
            })
            .value();
    return (0, i.jsx)(v.ZP.Sidebar, {
        className: V.layoutStyle,
        scrollable: !0,
        children: (0, i.jsxs)(d.njP, {
            onItemSelect: g.Aj,
            selectedItem: a,
            orientation: 'vertical',
            children: [
                (() => {
                    let t = (0, c.wj)(y) ? n(521715) : n(299603);
                    return (0, i.jsx)(d.yRy, {
                        targetElementRef: e,
                        renderPopout: w,
                        position: 'bottom',
                        autoInvert: !1,
                        children: (n) =>
                            (0, i.jsx)(
                                d.njP.Header,
                                U(G({ ref: e }, n), {
                                    children: (0, i.jsxs)('div', {
                                        className: V.sidebarHeaderDefault,
                                        children: [
                                            (0, i.jsxs)('span', {
                                                children: [B.NW.string(B.t.LPJmLy), '/', B.NW.string(B.t['9Oq93t'])]
                                            }),
                                            (0, i.jsx)('img', {
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
                T,
                E,
                (0, i.jsxs)(r.Fragment, {
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
function $() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, o.cj)([S.Z], () => S.Z);
    if (null == (0, o.e7)([Z.Z], () => (null != e ? Z.Z.getGuild(e.getGuildId()) : null)) || null == e || null == t || null == n) return null;
    let r = t[n];
    return (0, i.jsxs)(v.ZP, {
        className: V.container,
        children: [(0, i.jsx)(q, {}), (0, i.jsx)(z, { overwrite: r })]
    });
}
