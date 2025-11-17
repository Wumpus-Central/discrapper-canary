n.d(t, {
    Z: () => et,
    n: () => J,
}),
    n(539854),
    n(415506);
var i = n(54381),
    l = n(473749),
    r = n(392711),
    s = n.n(r),
    a = n(149765),
    o = n(442837),
    c = n(796027),
    d = n(780384),
    u = n(481060),
    h = n(668781),
    g = n(493683),
    p = n(741361),
    m = n(239091),
    f = n(668390),
    b = n(911969),
    x = n(410030),
    j = n(607070),
    v = n(940639),
    y = n(409513),
    C = n(325476),
    S = n(627050),
    N = n(722252),
    O = n(146085),
    Z = n(601964),
    E = n(598077),
    w = n(277053),
    T = n(388610),
    _ = n(271383),
    R = n(485386),
    P = n(430824),
    I = n(496675),
    L = n(594174),
    M = n(823379),
    A = n(892880),
    D = n(63063),
    k = n(5192),
    B = n(233608),
    H = n(700785),
    U = n(51144),
    G = n(257017),
    V = n(188857),
    W = n(981631),
    F = n(388032),
    z = n(198750);
function q(e) {
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
function Y(e, t) {
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
let J = o.ZP.connectStores([w.Z, T.Z], () => {
    let e = T.Z.getChannel();
    return {
        submitting: w.Z.formState === W.QZA.SUBMITTING,
        onReset() {
            (0, p.S1)();
        },
        onSave() {
            if (null == e) return;
            let t = w.Z.editedPermissionIds.reduce((e, t) => {
                let n = w.Z.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, p.hw)(e.id, t);
        },
    };
})(c.Z);
function X(e) {
    let { overwrite: t } = e,
        n = (0, o.e7)([w.Z], () => w.Z.channel),
        l = (0, o.e7)([P.Z], () => (null != n ? P.Z.getGuild(n.getGuildId()) : null)),
        r = (0, o.e7)([R.Z], () => (null != l && null != t && t.type === b.BN.ROLE ? R.Z.getRole(l.id, t.id) : void 0)),
        s = S.N.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: "ChannelSettingsPermissions",
        }).enabled,
        { enabled: c } = y.Z.useExperiment({
            location: "ChannelSettingsPermissionsContent",
            guildId: null == n ? void 0 : n.guild_id,
        });
    if (null == n || null == l || null == t) return null;
    let { guild_id: d, id: m } = n,
        f = () => {
            var e;
            if (null == P.Z.getGuild(d)) return "";
            let n = t.type === b.BN.MEMBER ? L.default.getUser(t.id) : void 0,
                i = null != (e = null == n ? void 0 : n.username) ? e : "";
            return null != r ? r.name : i;
        },
        x = (e, i) => {
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
                I.Z.can(e, n, {
                    [t.id]: Y(q({}, t), {
                        allow: l,
                        deny: r,
                    }),
                })
            )
                (0, p.kY)(n, t.id, l, r);
            else {
                let e;
                if (t.type === b.BN.MEMBER) {
                    let n = L.default.getUser(t.id);
                    null != n && (e = U.ZP.getName(n));
                } else if (t.type === b.BN.ROLE) {
                    let i = P.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = R.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                G.X(e);
            }
        },
        j = (e) => {
            let t = I.Z.can(W.Plq.ADMINISTRATOR, l) || I.Z.can(W.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && O.xS.has(e)
                ? F.intl.string(F.t.bTS5lf)
                : !((!a.fS(e, W.Plq.MANAGE_ROLES) || t) && (null == e || I.Z.can(e, l) || t)) &&
                      F.intl.string(F.t.nOtPMM);
        },
        v = t.id === d,
        Z = n.isForumLikeChannel() && a.e$(t.deny, W.Plq.SEND_MESSAGES),
        E = a.e$(t.deny, W.Plq.SEND_MESSAGES),
        T = a.e$(t.deny, W.Plq.READ_MESSAGE_HISTORY),
        _ = B.Z.generateChannelPermissionSpec(d, n, v, {
            createPostsDisabled: Z,
            sendMessagesDisabled: E,
            readMessageHistoryDisabled: T,
            inGameMentionsExperiment: s,
        });
    return (0, i.jsxs)(C.ZP.Content, {
        className: z.layoutStyle,
        children: [
            _.map((e, n) =>
                (0, i.jsx)(
                    N.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: x,
                        permissionRender: j,
                        className: z.permissionsForm,
                        hasBypassSlowmodePermission: c,
                    },
                    n,
                ),
            ),
            d === t.id
                ? null
                : (0, i.jsx)(u.Button, {
                      variant: "critical-secondary",
                      text: F.intl.format(F.t.txPV7k, { name: f() }),
                      onClick: () => {
                          let e = f();
                          h.Z.show({
                              title: F.intl.string(F.t.GuPYQB),
                              body: F.intl.format(F.t.xERCnZ, { name: e }),
                              cancelText: F.intl.string(F.t["ETE/oC"]),
                              onConfirm: () => g.Z.clearPermissionOverwrite(m, t.id),
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
        a = U.ZP.useUserTag(l),
        o = null,
        c = null;
    return (
        (o = null != s ? s : l.hasAvatarForGuild(t) ? l.username : a),
        (null != s || l.hasAvatarForGuild(t)) &&
            (c = (0, i.jsxs)("div", {
                className: z.userRowSubText,
                children: [
                    l.hasAvatarForGuild(t)
                        ? (0, i.jsx)(u.qEK, {
                              className: z.userRowSubAvatar,
                              size: u.EFr.SIZE_16,
                              src: l.getAvatarURL(void 0, 16),
                              "aria-label": l.username,
                          })
                        : null,
                    (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: a,
                    }),
                ],
            })),
        (0, i.jsxs)("div", {
            className: z.inline,
            children: [
                (0, i.jsx)(u.qEK, {
                    size: u.EFr.SIZE_32,
                    src: r,
                    "aria-label": l.username,
                    className: z.userRowAvatar,
                }),
                (0, i.jsxs)("div", {
                    className: z.userRowText,
                    children: [
                        (0, i.jsx)(u.Text, {
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
function K(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function $(e) {
    let { guild: t, channel: n, permissionOverwrites: l, onClose: r, onSelect: a, position: c } = e,
        d = (0, o.e7)([R.Z], () => R.Z.getSortedRoles(t.id)),
        u = (0, o.Wu)([_.ZP], () => _.ZP.getMemberIds(t.id));
    return (0, i.jsx)(v.Z, {
        label: F.intl.string(F.t.lT5Zth),
        placeholder: F.intl.string(F.t.V2pZRh),
        "aria-label": F.intl.string(F.t["Uvt+p/"]),
        sections: [F.intl.string(F.t["LPJmL/"]), F.intl.string(F.t["9Oq93m"])],
        onRenderResult: (e) => {
            if (K(e)) {
                let t;
                return (
                    null != e.colorString && (t = { color: e.colorString }),
                    (0, i.jsx)("span", {
                        style: t,
                        children: e.name,
                    })
                );
            }
            if (e instanceof E.Z)
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
                      .map(L.default.getUser)
                      .filter(M.lm)
                      .filter((t) => null == l[t.id] && e(t.username.toLowerCase()))
                      .sortBy((e) => e.username.toLowerCase())
                      .value(),
        onQueryChange: (e) => {
            A.Z.requestMembers(t.id, e, 20);
        },
        onSelect: (e) => {
            null != e && (K(e) ? a(e.id, b.BN.ROLE) : e instanceof E.Z && a(e.id, b.BN.MEMBER));
        },
        onClose: r,
        position: c,
    });
}
function ee() {
    let e = l.useRef(null),
        { channel: t, permissionOverwrites: r, selectedOverwriteId: a } = (0, o.cj)([w.Z], () => w.Z),
        c = null == t ? void 0 : t.getGuildId(),
        { guild: v, sortedGuildRoles: y } = (0, o.cj)([P.Z, R.Z], () => {
            let e = null != c ? P.Z.getGuild(c) : void 0,
                t = null != e ? R.Z.getSortedRoles(e.id) : void 0;
            return {
                guild: e,
                sortedGuildRoles: t,
            };
        }, [c]),
        S = (0, V.Z)(c, r),
        N = (0, x.ZP)(),
        O = (0, o.e7)([j.Z], () => j.Z.roleStyle),
        E = l.useCallback(
            (e, l) => {
                if (null == t) return null;
                (0, m.jW)(e, async () => {
                    let { id: e, role: r, name: s } = l,
                        a = null != v ? (0, Z.lV)(v) : null,
                        o = null != r && a === r.id,
                        { default: c } = await n.e("83884").then(n.bind(n, 905687));
                    return (n) =>
                        (0, i.jsx)(
                            c,
                            Y(q({}, n), {
                                id: e,
                                role: r,
                                handleDeletePermission: o
                                    ? void 0
                                    : () => {
                                          h.Z.show({
                                              title: F.intl.string(F.t.GuPYQB),
                                              body: F.intl.format(F.t.xERCnZ, { name: s }),
                                              cancelText: F.intl.string(F.t["ETE/oC"]),
                                              onConfirm: () => g.Z.clearPermissionOverwrite(t.id, e),
                                          });
                                      },
                            }),
                        );
                });
            },
            [t, v],
        );
    if (null == v || null == y || null == t || null == r) return null;
    let T = (e) => {
            let { position: n, closePopout: l } = e;
            return (0, i.jsx)($, {
                guild: v,
                channel: t,
                permissionOverwrites: r,
                position: null != n ? n : "bottom",
                onSelect: _,
                onClose: l,
            });
        },
        _ = (e, n) => {
            g.Z.updatePermissionOverwrite(t.id, {
                id: e,
                type: n,
                allow: H.Hn,
                deny: H.Hn,
            }).then(() => (0, p.Aj)(e));
        };
    null != r && null == r[v.id] && (r[v.id] = H.we(v.id));
    let I = y
            .filter((e) => {
                var t;
                return (null == (t = r[e.id]) ? void 0 : t.type) === b.BN.ROLE;
            })
            .map((e) =>
                (0, i.jsx)(
                    f.Z,
                    {
                        theme: N,
                        roleStyle: O,
                        id: e.id,
                        role: e,
                        guild: v,
                        color: e.colorString,
                        "aria-label": e.name,
                        onContextMenu: (t) =>
                            E(t, {
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
                let t = e.getAvatarURL(v.id, 24);
                return (0, i.jsx)(
                    f.Z,
                    {
                        id: e.id,
                        guild: v,
                        theme: N,
                        roleStyle: O,
                        "aria-label": U.ZP.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) =>
                            E(t, {
                                id: e.id,
                                name: e.username,
                            }),
                        children: (0, i.jsxs)("div", {
                            className: z.inline,
                            children: [
                                (0, i.jsx)(u.qEK, {
                                    size: u.EFr.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: z.xsmallAvatar,
                                }),
                                (0, i.jsx)("span", {
                                    className: z.username,
                                    children: U.ZP.getUserTag(e),
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
        children: (0, i.jsxs)(u.njP, {
            onItemSelect: p.Aj,
            selectedItem: a,
            orientation: "vertical",
            children: [
                (() => {
                    let t = (0, d.wj)(N) ? n(521715) : n(299603);
                    return (0, i.jsx)(u.yRy, {
                        targetElementRef: e,
                        renderPopout: T,
                        position: "bottom",
                        autoInvert: !1,
                        clickTrap: !0,
                        children: (n) =>
                            (0, i.jsx)(
                                u.njP.Header,
                                Y(q({ ref: e }, n), {
                                    children: (0, i.jsxs)("div", {
                                        className: z.sidebarHeaderDefault,
                                        children: [
                                            (0, i.jsxs)("span", {
                                                children: [
                                                    F.intl.string(F.t["LPJmL/"]),
                                                    "/",
                                                    F.intl.string(F.t["9Oq93m"]),
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
                I,
                L,
                (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(u.njP.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14,
                            },
                        }),
                        (0, i.jsx)(u.Anchor, {
                            href: D.Z.getArticleURL(W.BhN.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: F.intl.string(F.t.pfoA83),
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
        null == (0, o.e7)([P.Z], () => (null != e ? P.Z.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let l = t[n];
    return (0, i.jsxs)(C.ZP, {
        className: z.container,
        children: [(0, i.jsx)(ee, {}), (0, i.jsx)(X, { overwrite: l })],
    });
}
