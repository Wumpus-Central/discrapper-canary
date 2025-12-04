n.d(t, {
    Z: () => er,
    n: () => $,
}),
    n(539854),
    n(415506),
    n(388685);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(149765),
    d = n(793030),
    u = n(442837),
    h = n(796027),
    g = n(496600),
    m = n(780384),
    f = n(481060),
    p = n(668781),
    b = n(493683),
    x = n(741361),
    j = n(239091),
    v = n(668390),
    y = n(911969),
    C = n(410030),
    O = n(607070),
    Z = n(409513),
    S = n(325476),
    N = n(627050),
    E = n(722252),
    w = n(146085),
    T = n(601964),
    _ = n(598077),
    P = n(277053),
    I = n(388610),
    R = n(271383),
    L = n(485386),
    M = n(430824),
    A = n(496675),
    D = n(594174),
    k = n(823379),
    B = n(892880),
    U = n(63063),
    G = n(5192),
    V = n(233608),
    H = n(700785),
    F = n(51144),
    W = n(257017),
    z = n(188857),
    Y = n(981631),
    q = n(388032),
    J = n(198750),
    X = n(95632);
function Q(e) {
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
function K(e, t) {
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
let $ = u.ZP.connectStores([P.Z, I.Z], () => {
    let e = I.Z.getChannel();
    return {
        submitting: P.Z.formState === Y.QZA.SUBMITTING,
        onReset() {
            (0, x.S1)();
        },
        onSave() {
            if (null == e) return;
            let t = P.Z.editedPermissionIds.reduce((e, t) => {
                let n = P.Z.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, x.hw)(e.id, t);
        },
    };
})(h.Z);
function ee(e) {
    let { overwrite: t } = e,
        n = (0, u.e7)([P.Z], () => P.Z.channel),
        l = (0, u.e7)([M.Z], () => (null != n ? M.Z.getGuild(n.getGuildId()) : null)),
        r = (0, u.e7)([L.Z], () => (null != l && null != t && t.type === y.BN.ROLE ? L.Z.getRole(l.id, t.id) : void 0)),
        a = N.N.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: "ChannelSettingsPermissions",
        }).enabled,
        { enabled: s } = Z.Z.useExperiment({
            location: "ChannelSettingsPermissionsContent",
            guildId: null == n ? void 0 : n.guild_id,
        });
    if (null == n || null == l || null == t) return null;
    let { guild_id: o, id: d } = n,
        h = () => {
            var e;
            if (null == M.Z.getGuild(o)) return "";
            let n = t.type === y.BN.MEMBER ? D.default.getUser(t.id) : void 0,
                i = null != (e = null == n ? void 0 : n.username) ? e : "";
            return null != r ? r.name : i;
        },
        g = (e, i) => {
            if ("boolean" == typeof i) throw Error("Unexpected boolean action");
            let { allow: l, deny: r } = t;
            switch (((r = c.Od(r, e)), (l = c.Od(l, e)), i)) {
                case "ALLOW":
                    l = c.IH(l, e);
                    break;
                case "DENY":
                    r = c.IH(r, e);
            }
            if (
                A.Z.can(e, n, {
                    [t.id]: K(Q({}, t), {
                        allow: l,
                        deny: r,
                    }),
                })
            )
                (0, x.kY)(n, t.id, l, r);
            else {
                let e;
                if (t.type === y.BN.MEMBER) {
                    let n = D.default.getUser(t.id);
                    null != n && (e = F.ZP.getName(n));
                } else if (t.type === y.BN.ROLE) {
                    let i = M.Z.getGuild(n.getGuildId());
                    if (null != i) {
                        let n = L.Z.getRole(i.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                W.X(e);
            }
        },
        m = (e) => {
            let t = A.Z.can(Y.Plq.ADMINISTRATOR, l) || A.Z.can(Y.Plq.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && w.xS.has(e)
                ? q.intl.string(q.t.bTS5lf)
                : !((!c.fS(e, Y.Plq.MANAGE_ROLES) || t) && (null == e || A.Z.can(e, l) || t)) &&
                      q.intl.string(q.t.nOtPMM);
        },
        j = t.id === o,
        v = n.isForumLikeChannel() && c.e$(t.deny, Y.Plq.SEND_MESSAGES),
        C = c.e$(t.deny, Y.Plq.SEND_MESSAGES),
        O = c.e$(t.deny, Y.Plq.READ_MESSAGE_HISTORY),
        T = V.Z.generateChannelPermissionSpec(o, n, j, {
            createPostsDisabled: v,
            sendMessagesDisabled: C,
            readMessageHistoryDisabled: O,
            inGameMentionsExperiment: a,
        });
    return (0, i.jsxs)(S.ZP.Content, {
        className: J.layoutStyle,
        children: [
            T.map((e, n) =>
                (0, i.jsx)(
                    E.Z,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: g,
                        permissionRender: m,
                        className: J.permissionsForm,
                        hasBypassSlowmodePermission: s,
                    },
                    n,
                ),
            ),
            o === t.id
                ? null
                : (0, i.jsx)(f.Button, {
                      variant: "critical-secondary",
                      text: q.intl.format(q.t.txPV7k, { name: h() }),
                      onClick: () => {
                          let e = h();
                          p.Z.show({
                              title: q.intl.string(q.t.GuPYQB),
                              body: q.intl.format(q.t.xERCnZ, { name: e }),
                              cancelText: q.intl.string(q.t["ETE/oC"]),
                              onConfirm: () => b.Z.clearPermissionOverwrite(d, t.id),
                          });
                      },
                  }),
        ],
    });
}
function et(e) {
    let { guildId: t, channelId: n, user: l } = e,
        r = l.getAvatarURL(t, 32),
        s = G.ZP.getNickname(t, n, l),
        o = F.ZP.useUserTag(l),
        c = null,
        d = null;
    return (
        (c = null != s ? s : l.hasAvatarForGuild(t) ? l.username : o),
        (null != s || l.hasAvatarForGuild(t)) &&
            (d = (0, i.jsxs)("div", {
                className: J.userRowSubText,
                children: [
                    l.hasAvatarForGuild(t)
                        ? (0, i.jsx)(f.qEK, {
                              className: J.userRowSubAvatar,
                              size: f.EFr.SIZE_16,
                              src: l.getAvatarURL(void 0, 16),
                              "aria-label": l.username,
                          })
                        : null,
                    (0, i.jsx)(f.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: o,
                    }),
                ],
            })),
        (0, i.jsxs)("div", {
            className: a()(X.listBoxItemContent, J.inline),
            children: [
                (0, i.jsx)(f.qEK, {
                    size: f.EFr.SIZE_32,
                    src: r,
                    "aria-label": l.username,
                    className: J.userRowAvatar,
                }),
                (0, i.jsxs)("div", {
                    className: J.userRowText,
                    children: [
                        (0, i.jsx)(f.Text, {
                            className: J.userRowText,
                            variant: "text-md/normal",
                            children: c,
                        }),
                        d,
                    ],
                }),
            ],
        })
    );
}
function en(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function ei(e) {
    let { guild: t, channel: n, permissionOverwrites: r, onClose: s, onSelect: c } = e,
        h = (0, u.e7)([L.Z], () => L.Z.getSortedRoles(t.id)),
        m = (0, u.Wu)([R.ZP], () => R.ZP.getMemberIds(t.id)),
        p = l.useMemo(
            () => [
                ...h.filter((e) => null == r[e.id]),
                ...o()(m)
                    .map(D.default.getUser)
                    .filter(k.lm)
                    .filter((e) => null == r[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value(),
            ],
            [m, r, h],
        );
    return (0, i.jsx)(d.VqE, {
        className: J.createOverwritePopout,
        children: (0, i.jsxs)(g.uz, {
            selectionMode: "single",
            onSelectionChange: (e) => {
                null != e && (en(e) ? c(e.id, y.BN.ROLE) : e instanceof _.Z && c(e.id, y.BN.MEMBER), s());
            },
            options: p,
            formatOption: (e) => ({
                id: e.id,
                value: e,
                label: en(e) ? e.name : F.ZP.getUserTag(e),
            }),
            children: [
                (0, i.jsx)("div", {
                    className: J.searchBar,
                    children: (0, i.jsx)(g.Ct, {
                        label: q.intl.string(q.t.lT5Zth),
                        placeholder: q.intl.string(q.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: (e) => {
                            let n = e.target.value;
                            B.Z.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, i.jsx)(g.px, {
                    renderListItem: (e) => {
                        let { value: l } = e;
                        if (en(l)) {
                            let e;
                            return (
                                null != l.colorString && (e = { color: l.colorString }),
                                (0, i.jsxs)("div", {
                                    className: a()(X.listBoxItemContent, J.roleRow),
                                    children: [
                                        (0, i.jsx)(f.Text, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: J.roleName,
                                            style: e,
                                            children: l.name,
                                        }),
                                        (0, i.jsx)(f.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: q.intl.string(q.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (l instanceof _.Z)
                            return (0, i.jsx)(et, {
                                guildId: t.id,
                                channelId: n.id,
                                user: l,
                            });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function el() {
    let e = l.useRef(null),
        { channel: t, permissionOverwrites: r, selectedOverwriteId: a } = (0, u.cj)([P.Z], () => P.Z),
        s = null == t ? void 0 : t.getGuildId(),
        { guild: c, sortedGuildRoles: d } = (0, u.cj)([M.Z, L.Z], () => {
            let e = null != s ? M.Z.getGuild(s) : void 0,
                t = null != e ? L.Z.getSortedRoles(e.id) : void 0;
            return {
                guild: e,
                sortedGuildRoles: t,
            };
        }, [s]),
        h = (0, z.Z)(s, r),
        g = (0, C.ZP)(),
        Z = (0, u.e7)([O.Z], () => O.Z.roleStyle),
        N = l.useCallback(
            (e, l) => {
                if (null == t) return null;
                (0, j.jW)(e, async () => {
                    let { id: e, role: r, name: a } = l,
                        s = null != c ? (0, T.lV)(c) : null,
                        o = null != r && s === r.id,
                        { default: d } = await n.e("83884").then(n.bind(n, 905687));
                    return (n) =>
                        (0, i.jsx)(
                            d,
                            K(Q({}, n), {
                                id: e,
                                role: r,
                                handleDeletePermission: o
                                    ? void 0
                                    : () => {
                                          p.Z.show({
                                              title: q.intl.string(q.t.GuPYQB),
                                              body: q.intl.format(q.t.xERCnZ, { name: a }),
                                              cancelText: q.intl.string(q.t["ETE/oC"]),
                                              onConfirm: () => b.Z.clearPermissionOverwrite(t.id, e),
                                          });
                                      },
                            }),
                        );
                });
            },
            [t, c],
        );
    if (null == c || null == d || null == t || null == r) return null;
    let E = (e) => {
            let { position: n, closePopout: l } = e;
            return (0, i.jsx)(ei, {
                guild: c,
                channel: t,
                permissionOverwrites: r,
                position: null != n ? n : "bottom",
                onSelect: w,
                onClose: l,
            });
        },
        w = (e, n) => {
            b.Z.updatePermissionOverwrite(t.id, {
                id: e,
                type: n,
                allow: H.Hn,
                deny: H.Hn,
            }).then(() => (0, x.Aj)(e));
        };
    null != r && null == r[c.id] && (r[c.id] = H.we(c.id));
    let _ = d
            .filter((e) => {
                var t;
                return (null == (t = r[e.id]) ? void 0 : t.type) === y.BN.ROLE;
            })
            .map((e) =>
                (0, i.jsx)(
                    v.Z,
                    {
                        theme: g,
                        roleStyle: Z,
                        id: e.id,
                        role: e,
                        guild: c,
                        color: e.colorString,
                        "aria-label": e.name,
                        onContextMenu: (t) =>
                            N(t, {
                                id: e.id,
                                name: e.name,
                                role: e,
                            }),
                        children: e.name,
                    },
                    "".concat(a, "-").concat(e.id),
                ),
            ),
        I = o()(h)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(c.id, 24);
                return (0, i.jsx)(
                    v.Z,
                    {
                        id: e.id,
                        guild: c,
                        theme: g,
                        roleStyle: Z,
                        "aria-label": F.ZP.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) =>
                            N(t, {
                                id: e.id,
                                name: e.username,
                            }),
                        children: (0, i.jsxs)("div", {
                            className: J.inline,
                            children: [
                                (0, i.jsx)(f.qEK, {
                                    size: f.EFr.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: J.xsmallAvatar,
                                }),
                                (0, i.jsx)("span", {
                                    className: J.username,
                                    children: F.ZP.getUserTag(e),
                                }),
                            ],
                        }),
                    },
                    "".concat(a, "-").concat(e.id),
                );
            })
            .value();
    return (0, i.jsx)(S.ZP.Sidebar, {
        className: J.layoutStyle,
        scrollable: !0,
        children: (0, i.jsxs)(f.njP, {
            onItemSelect: x.Aj,
            selectedItem: a,
            orientation: "vertical",
            children: [
                (() => {
                    let t = (0, m.wj)(g) ? n(521715) : n(299603);
                    return (0, i.jsx)(f.yRy, {
                        targetElementRef: e,
                        renderPopout: E,
                        position: "bottom",
                        autoInvert: !1,
                        clickTrap: !0,
                        children: (n) =>
                            (0, i.jsx)(
                                f.njP.Header,
                                K(Q({ ref: e }, n), {
                                    children: (0, i.jsxs)("div", {
                                        className: J.sidebarHeaderDefault,
                                        children: [
                                            (0, i.jsxs)("span", {
                                                children: [
                                                    q.intl.string(q.t["LPJmL/"]),
                                                    "/",
                                                    q.intl.string(q.t["9Oq93m"]),
                                                ],
                                            }),
                                            (0, i.jsx)("img", {
                                                alt: "",
                                                className: J.sidebarHeader,
                                                src: t,
                                            }),
                                        ],
                                    }),
                                }),
                            ),
                    });
                })(),
                _,
                I,
                (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(f.njP.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14,
                            },
                        }),
                        (0, i.jsx)(f.Anchor, {
                            href: U.Z.getArticleURL(Y.BhN.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, i.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: q.intl.string(q.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function er() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, u.cj)([P.Z], () => P.Z);
    if (
        null == (0, u.e7)([M.Z], () => (null != e ? M.Z.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let l = t[n];
    return (0, i.jsxs)(S.ZP, {
        className: J.container,
        children: [(0, i.jsx)(el, {}), (0, i.jsx)(ee, { overwrite: l })],
    });
}
