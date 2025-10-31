n.d(t, {
    Z: () => ee,
    n: () => Y,
}),
    n(539854),
    n(415506);
var i = n(951288),
    l = n(647438),
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
    y = n(325476),
    C = n(627050),
    S = n(722252),
    N = n(146085),
    O = n(601964),
    Z = n(598077),
    E = n(277053),
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
    U = n(257017),
    G = n(188857),
    V = n(981631),
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
let Y = o.ZP.connectStores([E.Z, w.Z], () => {
    let e = w.Z.getChannel();
    return {
        submitting: E.Z.formState === V.QZA.SUBMITTING,
        onReset() {
            (0, p.S1)();
        },
        onSave() {
            if (null == e) return;
            let t = E.Z.editedPermissionIds.reduce((e, t) => {
                let n = E.Z.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, p.hw)(e.id, t);
        },
    };
})(c.Z);
function J(e) {
    let { overwrite: t } = e,
        n = (0, o.e7)([E.Z], () => E.Z.channel),
        l = (0, o.e7)([R.Z], () => (null != n ? R.Z.getGuild(n.getGuildId()) : null)),
        r = (0, o.e7)([_.Z], () => (null != l && null != t && t.type === b.BN.ROLE ? _.Z.getRole(l.id, t.id) : void 0)),
        s = C.N.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: "ChannelSettingsPermissions",
        }).enabled;
    if (null == n || null == l || null == t) return null;
    let { guild_id: c, id: d } = n,
        m = () => {
            var e;
            if (null == R.Z.getGuild(c)) return "";
            let n = t.type === b.BN.MEMBER ? I.default.getUser(t.id) : void 0,
                i = null != (e = null == n ? void 0 : n.username) ? e : "";
            return null != r ? r.name : i;
        },
        f = (e, i) => {
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
                (0, p.kY)(n, t.id, l, r);
            else {
                let e;
                if (t.type === b.BN.MEMBER) {
                    let n = I.default.getUser(t.id);
                    null != n && (e = H.ZP.getName(n));
                } else if (t.type === b.BN.ROLE) {
                    let i = R.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = _.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                U.X(e);
            }
        },
        x = (e) => {
            let t = P.Z.can(V.Plq.ADMINISTRATOR, l) || P.Z.can(V.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && N.xS.has(e)
                ? W.intl.string(W.t.bTS5lf)
                : !((!a.fS(e, V.Plq.MANAGE_ROLES) || t) && (null == e || P.Z.can(e, l) || t)) &&
                      W.intl.string(W.t.nOtPMM);
        },
        j = t.id === c,
        v = n.isForumLikeChannel() && a.e$(t.deny, V.Plq.SEND_MESSAGES),
        O = a.e$(t.deny, V.Plq.SEND_MESSAGES),
        Z = a.e$(t.deny, V.Plq.READ_MESSAGE_HISTORY),
        w = k.Z.generateChannelPermissionSpec(c, n, j, {
            createPostsDisabled: v,
            sendMessagesDisabled: O,
            readMessageHistoryDisabled: Z,
            inGameMentionsExperiment: s,
        });
    return (0, i.jsxs)(y.ZP.Content, {
        className: F.layoutStyle,
        children: [
            w.map((e, n) =>
                (0, i.jsx)(
                    S.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: f,
                        permissionRender: x,
                        className: F.permissionsForm,
                    },
                    n,
                ),
            ),
            c === t.id
                ? null
                : (0, i.jsx)(u.Button, {
                      variant: "critical-secondary",
                      text: W.intl.format(W.t.txPV7k, { name: m() }),
                      onClick: () => {
                          let e = m();
                          h.Z.show({
                              title: W.intl.string(W.t.GuPYQB),
                              body: W.intl.format(W.t.xERCnZ, { name: e }),
                              cancelText: W.intl.string(W.t["ETE/oC"]),
                              onConfirm: () => g.Z.clearPermissionOverwrite(d, t.id),
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
                        ? (0, i.jsx)(u.qEK, {
                              className: F.userRowSubAvatar,
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
            className: F.inline,
            children: [
                (0, i.jsx)(u.qEK, {
                    size: u.EFr.SIZE_32,
                    src: r,
                    "aria-label": l.username,
                    className: F.userRowAvatar,
                }),
                (0, i.jsxs)("div", {
                    className: F.userRowText,
                    children: [
                        (0, i.jsx)(u.Text, {
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
    return (0, i.jsx)(v.Z, {
        label: W.intl.string(W.t.lT5Zth),
        placeholder: W.intl.string(W.t.V2pZRh),
        "aria-label": W.intl.string(W.t["Uvt+p/"]),
        sections: [W.intl.string(W.t["LPJmL/"]), W.intl.string(W.t["9Oq93m"])],
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
            if (e instanceof Z.Z)
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
            null != e && (Q(e) ? a(e.id, b.BN.ROLE) : e instanceof Z.Z && a(e.id, b.BN.MEMBER));
        },
        onClose: r,
        position: c,
    });
}
function $() {
    let e = l.useRef(null),
        { channel: t, permissionOverwrites: r, selectedOverwriteId: a } = (0, o.cj)([E.Z], () => E.Z),
        c = null == t ? void 0 : t.getGuildId(),
        { guild: v, sortedGuildRoles: C } = (0, o.cj)([R.Z, _.Z], () => {
            let e = null != c ? R.Z.getGuild(c) : void 0,
                t = null != e ? _.Z.getSortedRoles(e.id) : void 0;
            return {
                guild: e,
                sortedGuildRoles: t,
            };
        }, [c]),
        S = (0, G.Z)(c, r),
        N = (0, x.ZP)(),
        Z = (0, o.e7)([j.Z], () => j.Z.roleStyle),
        w = l.useCallback(
            (e, l) => {
                if (null == t) return null;
                (0, m.jW)(e, async () => {
                    let { id: e, role: r, name: s } = l,
                        a = null != v ? (0, O.lV)(v) : null,
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
                                          h.Z.show({
                                              title: W.intl.string(W.t.GuPYQB),
                                              body: W.intl.format(W.t.xERCnZ, { name: s }),
                                              cancelText: W.intl.string(W.t["ETE/oC"]),
                                              onConfirm: () => g.Z.clearPermissionOverwrite(t.id, e),
                                          });
                                      },
                            }),
                        );
                });
            },
            [t, v],
        );
    if (null == v || null == C || null == t || null == r) return null;
    let T = (e) => {
            let { position: n, closePopout: l } = e;
            return (0, i.jsx)(K, {
                guild: v,
                channel: t,
                permissionOverwrites: r,
                position: null != n ? n : "bottom",
                onSelect: P,
                onClose: l,
            });
        },
        P = (e, n) => {
            g.Z.updatePermissionOverwrite(t.id, {
                id: e,
                type: n,
                allow: B.Hn,
                deny: B.Hn,
            }).then(() => (0, p.Aj)(e));
        };
    null != r && null == r[v.id] && (r[v.id] = B.we(v.id));
    let I = C.filter((e) => {
            var t;
            return (null == (t = r[e.id]) ? void 0 : t.type) === b.BN.ROLE;
        }).map((e) =>
            (0, i.jsx)(
                f.Z,
                {
                    theme: N,
                    roleStyle: Z,
                    id: e.id,
                    role: e,
                    guild: v,
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
                let t = e.getAvatarURL(v.id, 24);
                return (0, i.jsx)(
                    f.Z,
                    {
                        id: e.id,
                        guild: v,
                        theme: N,
                        roleStyle: Z,
                        "aria-label": H.ZP.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) =>
                            w(t, {
                                id: e.id,
                                name: e.username,
                            }),
                        children: (0, i.jsxs)("div", {
                            className: F.inline,
                            children: [
                                (0, i.jsx)(u.qEK, {
                                    size: u.EFr.SIZE_20,
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
    return (0, i.jsx)(y.ZP.Sidebar, {
        className: F.layoutStyle,
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
                                q(z({ ref: e }, n), {
                                    children: (0, i.jsxs)("div", {
                                        className: F.sidebarHeaderDefault,
                                        children: [
                                            (0, i.jsxs)("span", {
                                                children: [
                                                    W.intl.string(W.t["LPJmL/"]),
                                                    "/",
                                                    W.intl.string(W.t["9Oq93m"]),
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
                        (0, i.jsx)(u.njP.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14,
                            },
                        }),
                        (0, i.jsx)(u.Anchor, {
                            href: A.Z.getArticleURL(V.BhN.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: W.intl.string(W.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ee() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, o.cj)([E.Z], () => E.Z);
    if (
        null == (0, o.e7)([R.Z], () => (null != e ? R.Z.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let l = t[n];
    return (0, i.jsxs)(y.ZP, {
        className: F.container,
        children: [(0, i.jsx)($, {}), (0, i.jsx)(J, { overwrite: l })],
    });
}
