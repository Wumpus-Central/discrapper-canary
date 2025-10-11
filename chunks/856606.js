n.d(t, {
    Z: () => ee,
    n: () => J,
}),
    n(539854),
    n(415506);
var i = n(951288),
    l = n(647438),
    r = n(392711),
    s = n.n(r),
    a = n(149765),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(668781),
    h = n(493683),
    g = n(741361),
    p = n(239091),
    m = n(668390),
    f = n(144991),
    b = n(852860),
    x = n(911969),
    j = n(410030),
    v = n(607070),
    y = n(940639),
    C = n(325476),
    S = n(627050),
    N = n(146085),
    O = n(601964),
    E = n(598077),
    Z = n(277053),
    w = n(388610),
    T = n(271383),
    _ = n(485386),
    R = n(430824),
    P = n(496675),
    I = n(594174),
    L = n(823379),
    M = n(892880),
    A = n(63063),
    D = n(5192),
    k = n(233608),
    B = n(700785),
    H = n(51144),
    V = n(257017),
    U = n(188857),
    G = n(981631),
    W = n(388032),
    F = n(198750);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function q(e, t) {
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
let J = o.ZP.connectStores([Z.Z, w.Z], () => {
    let e = w.Z.getChannel();
    return {
        submitting: Z.Z.formState === G.QZA.SUBMITTING,
        onReset() {
            (0, g.S1)();
        },
        onSave() {
            if (null == e) return;
            let t = Z.Z.editedPermissionIds.reduce((e, t) => {
                let n = Z.Z.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, g.hw)(e.id, t);
        },
    };
})(b.Z);
function Y(e) {
    let { overwrite: t } = e,
        n = (0, o.e7)([Z.Z], () => Z.Z.channel),
        l = (0, o.e7)([R.Z], () => (null != n ? R.Z.getGuild(n.getGuildId()) : null)),
        r = (0, o.e7)([_.Z], () => (null != l && null != t && t.type === x.BN.ROLE ? _.Z.getRole(l.id, t.id) : void 0)),
        s = S.N.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: "ChannelSettingsPermissions",
        }).enabled;
    if (null == n || null == l || null == t) return null;
    let { guild_id: c, id: p } = n,
        m = () => {
            var e;
            if (null == R.Z.getGuild(c)) return "";
            let n = t.type === x.BN.MEMBER ? I.default.getUser(t.id) : void 0,
                i = null != (e = null == n ? void 0 : n.username) ? e : "";
            return null != r ? r.name : i;
        },
        b = (e, i) => {
            if ("boolean" == typeof i) throw Error("Unexpected boolean action");
            let { allow: l, deny: r } = t;
            switch (((r = a.Od(r, e)), (l = a.Od(l, e)), i)) {
                case "ALLOW":
                    l = a.IH(l, e);
                    break;
                case "DENY":
                    r = a.IH(r, e);
            }
            if (
                P.Z.can(e, n, {
                    [t.id]: q(z({}, t), {
                        allow: l,
                        deny: r,
                    }),
                })
            )
                (0, g.kY)(n, t.id, l, r);
            else {
                let e;
                if (t.type === x.BN.MEMBER) {
                    let n = I.default.getUser(t.id);
                    null != n && (e = H.ZP.getName(n));
                } else if (t.type === x.BN.ROLE) {
                    let i = R.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = _.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                V.X(e);
            }
        },
        j = (e) => {
            let t = P.Z.can(G.Plq.ADMINISTRATOR, l) || P.Z.can(G.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && N.xS.has(e)
                ? W.intl.string(W.t.bTS5lZ)
                : !((!a.fS(e, G.Plq.MANAGE_ROLES) || t) && (null == e || P.Z.can(e, l) || t)) &&
                      W.intl.string(W.t.nOtPMD);
        },
        v = t.id === c,
        y = n.isForumLikeChannel() && a.e$(t.deny, G.Plq.SEND_MESSAGES),
        O = a.e$(t.deny, G.Plq.SEND_MESSAGES),
        E = a.e$(t.deny, G.Plq.READ_MESSAGE_HISTORY),
        w = k.Z.generateChannelPermissionSpec(c, n, v, {
            createPostsDisabled: y,
            sendMessagesDisabled: O,
            readMessageHistoryDisabled: E,
            inGameMentionsExperiment: s,
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
                        onChange: b,
                        permissionRender: j,
                        className: F.permissionsForm,
                    },
                    n,
                ),
            ),
            c === t.id
                ? null
                : (0, i.jsx)(d.Button, {
                      variant: "critical-secondary",
                      text: W.intl.format(W.t.txPV7u, { name: m() }),
                      onClick: () => {
                          let e = m();
                          u.Z.show({
                              title: W.intl.string(W.t.GuPYQE),
                              body: W.intl.format(W.t.xERCnZ, { name: e }),
                              cancelText: W.intl.string(W.t["ETE/oK"]),
                              onConfirm: () => h.Z.clearPermissionOverwrite(p, t.id),
                          });
                      },
                  }),
        ],
    });
}
function X(e) {
    let { guildId: t, channelId: n, user: l } = e,
        r = l.getAvatarURL(t, 32),
        s = D.ZP.getNickname(t, n, l),
        a = H.ZP.useUserTag(l),
        o = null,
        c = null;
    return (
        (o = null != s ? s : l.hasAvatarForGuild(t) ? l.username : a),
        (null != s || l.hasAvatarForGuild(t)) &&
            (c = (0, i.jsxs)("div", {
                className: F.userRowSubText,
                children: [
                    l.hasAvatarForGuild(t)
                        ? (0, i.jsx)(d.qEK, {
                              className: F.userRowSubAvatar,
                              size: d.EFr.SIZE_16,
                              src: l.getAvatarURL(void 0, 16),
                              "aria-label": l.username,
                          })
                        : null,
                    (0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: a,
                    }),
                ],
            })),
        (0, i.jsxs)("div", {
            className: F.inline,
            children: [
                (0, i.jsx)(d.qEK, {
                    size: d.EFr.SIZE_32,
                    src: r,
                    "aria-label": l.username,
                    className: F.userRowAvatar,
                }),
                (0, i.jsxs)("div", {
                    className: F.userRowText,
                    children: [
                        (0, i.jsx)(d.Text, {
                            className: F.userRowText,
                            variant: "text-md/normal",
                            children: o,
                        }),
                        c,
                    ],
                }),
            ],
        })
    );
}
function Q(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function K(e) {
    let { guild: t, channel: n, permissionOverwrites: l, onClose: r, onSelect: a, position: c } = e,
        d = (0, o.e7)([_.Z], () => _.Z.getSortedRoles(t.id)),
        u = (0, o.Wu)([T.ZP], () => T.ZP.getMemberIds(t.id));
    return (0, i.jsx)(y.Z, {
        label: W.intl.string(W.t.lT5Ztr),
        placeholder: W.intl.string(W.t.V2pZRk),
        "aria-label": W.intl.string(W.t["Uvt+p6"]),
        sections: [W.intl.string(W.t.LPJmLy), W.intl.string(W.t["9Oq93t"])],
        onRenderResult: (e) => {
            if (Q(e)) {
                let t;
                return (
                    null != e.colorString && (t = { color: e.colorString }),
                    (0, i.jsx)("span", {
                        style: t,
                        children: e.name,
                    })
                );
            }
            if (e instanceof E.default)
                return (0, i.jsx)(X, {
                    guildId: t.id,
                    channelId: n.id,
                    user: e,
                });
        },
        onFilterResults: (e, t) =>
            0 === t
                ? d.filter((t) => null == l[t.id] && e(t.name))
                : s()(u)
                      .map(I.default.getUser)
                      .filter(L.lm)
                      .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            M.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            null != e && (Q(e) ? a(e.id, x.BN.ROLE) : e instanceof E.default && a(e.id, x.BN.MEMBER));
        },
        onClose: r,
        position: c,
    });
}
function $() {
    let e = l.useRef(null),
        { channel: t, permissionOverwrites: r, selectedOverwriteId: a } = (0, o.cj)([Z.Z], () => Z.Z),
        f = null == t ? void 0 : t.getGuildId(),
        { guild: b, sortedGuildRoles: y } = (0, o.cj)([R.Z, _.Z], () => {
            let e = null != f ? R.Z.getGuild(f) : void 0,
                t = null != e ? _.Z.getSortedRoles(e.id) : void 0;
            return {
                guild: e,
                sortedGuildRoles: t,
            };
        }, [f]),
        S = (0, U.Z)(f, r),
        N = (0, j.ZP)(),
        E = (0, o.e7)([v.Z], () => v.Z.roleStyle),
        w = l.useCallback(
            (e, l) => {
                if (null == t) return null;
                (0, p.jW)(e, async () => {
                    let { id: e, role: r, name: s } = l,
                        a = null != b ? (0, O.lV)(b) : null,
                        o = null != r && a === r.id,
                        { default: c } = await n.e("83884").then(n.bind(n, 905687));
                    return (n) =>
                        (0, i.jsx)(
                            c,
                            q(z({}, n), {
                                id: e,
                                role: r,
                                handleDeletePermission: o
                                    ? void 0
                                    : () => {
                                          u.Z.show({
                                              title: W.intl.string(W.t.GuPYQE),
                                              body: W.intl.format(W.t.xERCnZ, { name: s }),
                                              cancelText: W.intl.string(W.t["ETE/oK"]),
                                              onConfirm: () => h.Z.clearPermissionOverwrite(t.id, e),
                                          });
                                      },
                            }),
                        );
                });
            },
            [t, b],
        );
    if (null == b || null == y || null == t || null == r) return null;
    let T = (e) => {
            let { position: n, closePopout: l } = e;
            return (0, i.jsx)(K, {
                guild: b,
                channel: t,
                permissionOverwrites: r,
                position: null != n ? n : "bottom",
                onSelect: P,
                onClose: l,
            });
        },
        P = (e, n) => {
            h.Z.updatePermissionOverwrite(t.id, {
                id: e,
                type: n,
                allow: B.Hn,
                deny: B.Hn,
            }).then(() => (0, g.Aj)(e));
        };
    null != r && null == r[b.id] && (r[b.id] = B.we(b.id));
    let I = y
            .filter((e) => {
                var t;
                return (null == (t = r[e.id]) ? void 0 : t.type) === x.BN.ROLE;
            })
            .map((e) =>
                (0, i.jsx)(
                    m.Z,
                    {
                        theme: N,
                        roleStyle: E,
                        id: e.id,
                        role: e,
                        guild: b,
                        color: e.colorString,
                        "aria-label": e.name,
                        onContextMenu: (t) =>
                            w(t, {
                                id: e.id,
                                name: e.name,
                                role: e,
                            }),
                        children: e.name,
                    },
                    "".concat(a, "-").concat(e.id),
                ),
            ),
        L = s()(S)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(b.id, 24);
                return (0, i.jsx)(
                    m.Z,
                    {
                        id: e.id,
                        guild: b,
                        theme: N,
                        roleStyle: E,
                        "aria-label": H.ZP.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) =>
                            w(t, {
                                id: e.id,
                                name: e.username,
                            }),
                        children: (0, i.jsxs)("div", {
                            className: F.inline,
                            children: [
                                (0, i.jsx)(d.qEK, {
                                    size: d.EFr.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: F.xsmallAvatar,
                                }),
                                (0, i.jsx)("span", {
                                    className: F.username,
                                    children: H.ZP.getUserTag(e),
                                }),
                            ],
                        }),
                    },
                    "".concat(a, "-").concat(e.id),
                );
            })
            .value();
    return (0, i.jsx)(C.ZP.Sidebar, {
        className: F.layoutStyle,
        scrollable: !0,
        children: (0, i.jsxs)(d.njP, {
            onItemSelect: g.Aj,
            selectedItem: a,
            orientation: "vertical",
            children: [
                (() => {
                    let t = (0, c.wj)(N) ? n(521715) : n(299603);
                    return (0, i.jsx)(d.yRy, {
                        targetElementRef: e,
                        renderPopout: T,
                        position: "bottom",
                        autoInvert: !1,
                        clickTrap: !0,
                        children: (n) =>
                            (0, i.jsx)(
                                d.njP.Header,
                                q(z({ ref: e }, n), {
                                    children: (0, i.jsxs)("div", {
                                        className: F.sidebarHeaderDefault,
                                        children: [
                                            (0, i.jsxs)("span", {
                                                children: [
                                                    W.intl.string(W.t.LPJmLy),
                                                    "/",
                                                    W.intl.string(W.t["9Oq93t"]),
                                                ],
                                            }),
                                            (0, i.jsx)("img", {
                                                alt: "",
                                                className: F.sidebarHeader,
                                                src: t,
                                            }),
                                        ],
                                    }),
                                }),
                            ),
                    });
                })(),
                I,
                L,
                (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(d.njP.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14,
                            },
                        }),
                        (0, i.jsx)(d.Anchor, {
                            href: A.Z.getArticleURL(G.BhN.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: W.intl.string(W.t["pfoA8/"]),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ee() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, o.cj)([Z.Z], () => Z.Z);
    if (
        null == (0, o.e7)([R.Z], () => (null != e ? R.Z.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let l = t[n];
    return (0, i.jsxs)(C.ZP, {
        className: F.container,
        children: [(0, i.jsx)($, {}), (0, i.jsx)(Y, { overwrite: l })],
    });
}
