n.d(t, {
    Z: () => et,
    n: () => q,
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
    m = n(239091),
    p = n(668390),
    f = n(144991),
    x = n(852860),
    j = n(911969),
    b = n(410030),
    v = n(607070),
    y = n(940639),
    C = n(325476),
    N = n(627050),
    S = n(190263),
    E = n(146085),
    O = n(601964),
    Z = n(598077),
    w = n(277053),
    T = n(388610),
    R = n(271383),
    _ = n(485386),
    I = n(430824),
    P = n(496675),
    A = n(594174),
    L = n(823379),
    D = n(892880),
    M = n(63063),
    k = n(5192),
    B = n(233608),
    V = n(700785),
    H = n(51144),
    W = n(257017),
    U = n(188857),
    G = n(981631),
    F = n(388032),
    z = n(198750);
function X(e) {
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
function J(e, t) {
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
let q = o.ZP.connectStores([w.Z, T.Z], () => {
    let e = T.Z.getChannel();
    return {
        submitting: w.Z.formState === G.QZA.SUBMITTING,
        onReset() {
            (0, g.S1)();
        },
        onSave() {
            if (null == e) return;
            let t = w.Z.editedPermissionIds.reduce((e, t) => {
                let n = w.Z.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, g.hw)(e.id, t);
        },
    };
})(x.Z);
function Y(e) {
    let { overwrite: t } = e,
        n = (0, o.e7)([w.Z], () => w.Z.channel),
        l = (0, o.e7)([I.Z], () => (null != n ? I.Z.getGuild(n.getGuildId()) : null)),
        r = (0, o.e7)([_.Z], () => (null != l && null != t && t.type === j.BN.ROLE ? _.Z.getRole(l.id, t.id) : void 0)),
        s = S.D.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: "ChannelSettingsPermissions",
        }).enabled,
        c = N.N.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: "ChannelSettingsPermissions",
        }).enabled;
    if (null == n || null == l || null == t) return null;
    let { guild_id: m, id: p } = n,
        x = () => {
            var e;
            if (null == I.Z.getGuild(m)) return "";
            let n = t.type === j.BN.MEMBER ? A.default.getUser(t.id) : void 0,
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
                    [t.id]: J(X({}, t), {
                        allow: l,
                        deny: r,
                    }),
                })
            )
                (0, g.kY)(n, t.id, l, r);
            else {
                let e;
                if (t.type === j.BN.MEMBER) {
                    let n = A.default.getUser(t.id);
                    null != n && (e = H.ZP.getName(n));
                } else if (t.type === j.BN.ROLE) {
                    let i = I.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = _.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                W.X(e);
            }
        },
        v = (e) => {
            let t = P.Z.can(G.Plq.ADMINISTRATOR, l) || P.Z.can(G.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && E.xS.has(e)
                ? F.intl.string(F.t.bTS5lZ)
                : !((!a.fS(e, G.Plq.MANAGE_ROLES) || t) && (null == e || P.Z.can(e, l) || t)) &&
                      F.intl.string(F.t.nOtPMD);
        },
        y = t.id === m,
        O = n.isForumLikeChannel() && a.e$(t.deny, G.Plq.SEND_MESSAGES),
        Z = a.e$(t.deny, G.Plq.SEND_MESSAGES),
        T = a.e$(t.deny, G.Plq.READ_MESSAGE_HISTORY),
        R = B.Z.generateChannelPermissionSpec(m, n, y, {
            createPostsDisabled: O,
            sendMessagesDisabled: Z,
            readMessageHistoryDisabled: T,
            inGameMentionsExperiment: c,
        });
    return (0, i.jsxs)(C.ZP.Content, {
        className: z.layoutStyle,
        children: [
            R.map((e, n) =>
                (0, i.jsx)(
                    f.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: b,
                        permissionRender: v,
                        className: z.permissionsForm,
                        inPinPermissionExperiment: s,
                    },
                    n,
                ),
            ),
            m === t.id
                ? null
                : (0, i.jsx)(d.zxk, {
                      variant: "critical-secondary",
                      text: F.intl.format(F.t.txPV7u, { name: x() }),
                      onClick: () => {
                          let e = x();
                          u.Z.show({
                              title: F.intl.string(F.t.GuPYQE),
                              body: F.intl.format(F.t.xERCnZ, { name: e }),
                              cancelText: F.intl.string(F.t["ETE/oK"]),
                              onConfirm: () => h.Z.clearPermissionOverwrite(p, t.id),
                          });
                      },
                  }),
        ],
    });
}
function Q(e) {
    let { guildId: t, channelId: n, user: l } = e,
        r = l.getAvatarURL(t, 32),
        s = k.ZP.getNickname(t, n, l),
        a = H.ZP.useUserTag(l),
        o = null,
        c = null;
    return (
        (o = null != s ? s : l.hasAvatarForGuild(t) ? l.username : a),
        (null != s || l.hasAvatarForGuild(t)) &&
            (c = (0, i.jsxs)("div", {
                className: z.userRowSubText,
                children: [
                    l.hasAvatarForGuild(t)
                        ? (0, i.jsx)(d.qEK, {
                              className: z.userRowSubAvatar,
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
            className: z.inline,
            children: [
                (0, i.jsx)(d.qEK, {
                    size: d.EFr.SIZE_32,
                    src: r,
                    "aria-label": l.username,
                    className: z.userRowAvatar,
                }),
                (0, i.jsxs)("div", {
                    className: z.userRowText,
                    children: [
                        (0, i.jsx)(d.Text, {
                            className: z.userRowText,
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
function $(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function K(e) {
    let { guild: t, channel: n, permissionOverwrites: l, onClose: r, onSelect: a, position: c } = e,
        d = (0, o.e7)([_.Z], () => _.Z.getSortedRoles(t.id)),
        u = (0, o.Wu)([R.ZP], () => R.ZP.getMemberIds(t.id));
    return (0, i.jsx)(y.Z, {
        label: F.intl.string(F.t.lT5Ztr),
        placeholder: F.intl.string(F.t.V2pZRk),
        "aria-label": F.intl.string(F.t["Uvt+p6"]),
        sections: [F.intl.string(F.t.LPJmLy), F.intl.string(F.t["9Oq93t"])],
        onRenderResult: (e) => {
            if ($(e)) {
                let t;
                return (
                    null != e.colorString && (t = { color: e.colorString }),
                    (0, i.jsx)("span", {
                        style: t,
                        children: e.name,
                    })
                );
            }
            if (e instanceof Z.Z)
                return (0, i.jsx)(Q, {
                    guildId: t.id,
                    channelId: n.id,
                    user: e,
                });
        },
        onFilterResults: (e, t) =>
            0 === t
                ? d.filter((t) => null == l[t.id] && e(t.name))
                : s()(u)
                      .map(A.default.getUser)
                      .filter(L.lm)
                      .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            D.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            null != e && ($(e) ? a(e.id, j.BN.ROLE) : e instanceof Z.Z && a(e.id, j.BN.MEMBER));
        },
        onClose: r,
        position: c,
    });
}
function ee() {
    let e = l.useRef(null),
        { channel: t, permissionOverwrites: r, selectedOverwriteId: a } = (0, o.cj)([w.Z], () => w.Z),
        f = null == t ? void 0 : t.getGuildId(),
        { guild: x, sortedGuildRoles: y } = (0, o.cj)([I.Z, _.Z], () => {
            let e = null != f ? I.Z.getGuild(f) : void 0,
                t = null != e ? _.Z.getSortedRoles(e.id) : void 0;
            return {
                guild: e,
                sortedGuildRoles: t,
            };
        }, [f]),
        N = (0, U.Z)(f, r),
        S = (0, b.ZP)(),
        E = (0, o.e7)([v.Z], () => v.Z.roleStyle),
        Z = l.useCallback(
            (e, l) => {
                if (null == t) return null;
                (0, m.jW)(e, async () => {
                    let { id: e, role: r, name: s } = l,
                        a = null != x ? (0, O.lV)(x) : null,
                        o = null != r && a === r.id,
                        { default: c } = await n.e("83884").then(n.bind(n, 905687));
                    return (n) =>
                        (0, i.jsx)(
                            c,
                            J(X({}, n), {
                                id: e,
                                role: r,
                                handleDeletePermission: o
                                    ? void 0
                                    : () => {
                                          u.Z.show({
                                              title: F.intl.string(F.t.GuPYQE),
                                              body: F.intl.format(F.t.xERCnZ, { name: s }),
                                              cancelText: F.intl.string(F.t["ETE/oK"]),
                                              onConfirm: () => h.Z.clearPermissionOverwrite(t.id, e),
                                          });
                                      },
                            }),
                        );
                });
            },
            [t, x],
        );
    if (null == x || null == y || null == t || null == r) return null;
    let T = (e) => {
            let { position: n, closePopout: l } = e;
            return (0, i.jsx)(K, {
                guild: x,
                channel: t,
                permissionOverwrites: r,
                position: null != n ? n : "bottom",
                onSelect: R,
                onClose: l,
            });
        },
        R = (e, n) => {
            h.Z.updatePermissionOverwrite(t.id, {
                id: e,
                type: n,
                allow: V.Hn,
                deny: V.Hn,
            }).then(() => (0, g.Aj)(e));
        };
    null != r && null == r[x.id] && (r[x.id] = V.we(x.id));
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
                        roleStyle: E,
                        id: e.id,
                        role: e,
                        guild: x,
                        color: e.colorString,
                        "aria-label": e.name,
                        onContextMenu: (t) =>
                            Z(t, {
                                id: e.id,
                                name: e.name,
                                role: e,
                            }),
                        children: e.name,
                    },
                    "".concat(a, "-").concat(e.id),
                ),
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
                        roleStyle: E,
                        "aria-label": H.ZP.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) =>
                            Z(t, {
                                id: e.id,
                                name: e.username,
                            }),
                        children: (0, i.jsxs)("div", {
                            className: z.inline,
                            children: [
                                (0, i.jsx)(d.qEK, {
                                    size: d.EFr.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: z.xsmallAvatar,
                                }),
                                (0, i.jsx)("span", {
                                    className: z.username,
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
        className: z.layoutStyle,
        scrollable: !0,
        children: (0, i.jsxs)(d.njP, {
            onItemSelect: g.Aj,
            selectedItem: a,
            orientation: "vertical",
            children: [
                (() => {
                    let t = (0, c.wj)(S) ? n(521715) : n(299603);
                    return (0, i.jsx)(d.yRy, {
                        targetElementRef: e,
                        renderPopout: T,
                        position: "bottom",
                        autoInvert: !1,
                        clickTrap: !0,
                        children: (n) =>
                            (0, i.jsx)(
                                d.njP.Header,
                                J(X({ ref: e }, n), {
                                    children: (0, i.jsxs)("div", {
                                        className: z.sidebarHeaderDefault,
                                        children: [
                                            (0, i.jsxs)("span", {
                                                children: [
                                                    F.intl.string(F.t.LPJmLy),
                                                    "/",
                                                    F.intl.string(F.t["9Oq93t"]),
                                                ],
                                            }),
                                            (0, i.jsx)("img", {
                                                alt: "",
                                                className: z.sidebarHeader,
                                                src: t,
                                            }),
                                        ],
                                    }),
                                }),
                            ),
                    });
                })(),
                P,
                A,
                (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(d.njP.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14,
                            },
                        }),
                        (0, i.jsx)(d.R94, {
                            type: d.geA.DESCRIPTION,
                            children: (0, i.jsx)(d.eee, {
                                href: M.Z.getArticleURL(G.BhN.PERMISSIONS_TUTORIAL),
                                target: "_blank",
                                children: F.intl.string(F.t["pfoA8/"]),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function et() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, o.cj)([w.Z], () => w.Z);
    if (
        null == (0, o.e7)([I.Z], () => (null != e ? I.Z.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let l = t[n];
    return (0, i.jsxs)(C.ZP, {
        className: z.container,
        children: [(0, i.jsx)(ee, {}), (0, i.jsx)(Y, { overwrite: l })],
    });
}
