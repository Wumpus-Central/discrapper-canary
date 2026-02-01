n.d(t, {
    Ay: () => eg,
    Jz: () => em,
    NE: () => eA,
}),
    n(638769),
    n(65821),
    n(321073),
    n(896048),
    n(747238),
    n(457529);
var l,
    r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(989349),
    o = n.n(s),
    c = n(158954),
    u = n(311907),
    d = n(421380),
    h = n(397927),
    p = n(73153),
    f = n(387755),
    m = n(308528),
    g = n(711950),
    A = n(846293),
    b = n(888906),
    _ = n(49229),
    y = n(684136),
    v = n(964486),
    E = n(793574),
    O = n(58149),
    C = n(688810),
    x = n(571694),
    S = n(47167),
    j = n(915089),
    I = n(66442),
    T = n(279208),
    N = n(267102),
    P = n(976860),
    w = n(219271),
    R = n(21119),
    D = n(95701),
    M = n(734057),
    L = n(958590),
    k = n(584777),
    U = n(383501),
    G = n(222823),
    F = n(994500),
    H = n(351906),
    B = n(287809),
    V = n(954571),
    K = n(957565),
    W = n(203982),
    z = n(403362),
    q = n(695184),
    Y = n(661191),
    J = n(427262),
    Z = n(625788),
    X = n(662367),
    Q = n(58736),
    $ = n(286498),
    ee = n(652215),
    et = n(650583),
    en = n(985018),
    el = n(587360);

function er(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                er(e, t, n[t]);
            });
    }
    return e;
}

function ea(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function es(e, t) {
    if (null == e) return {};
    var n,
        l,
        r,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                i = Object.getOwnPropertyNames(e);
            for (l = 0; l < i.length; l++)
                (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            (l = n[r]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i;
}
let eo = (0, j.Ld)(),
    ec = (e) => {
        var t;
        let { channel: n, onClose: l } = e,
            i = null != (t = (0, S.Ay)(n)) ? t : "",
            a = (0, u.bG)([G.Ay], () => {
                var e;
                return null != (e = G.Ay.lastMessageId(n.id)) ? e : n.id;
            });
        return (0, r.jsx)(h.DUT, {
            onClick: () => {
                (0, P.uh)(ee.ME, n.id), l();
            },
            children: (0, r.jsxs)("div", {
                className: el.us,
                children: [
                    (0, r.jsx)(h.euF, {
                        src: (0, x.Y)(n),
                        size: h._3J.SIZE_24,
                        "aria-label": i,
                    }),
                    (0, r.jsx)("span", {
                        className: el.J2,
                        children: i,
                    }),
                    (0, r.jsx)("span", {
                        className: el.Pd,
                        children: o()(Y.default.extractTimestamp(a)).fromNow(),
                    }),
                ],
            }),
        });
    },
    eu = (e) => {
        let { onConfirm: t, channelIds: n } = e,
            l = es(e, ["onConfirm", "channelIds"]),
            i = (0, u.yK)([M.A], () => Array.from(n).map(M.A.getChannel), [n]);
        return (0, r.jsx)(
            c.Modal,
            ea(
                ei(
                    {
                        title: en.intl.string(en.t.uFHxNd),
                        subtitle: en.intl.string(en.t.rIsSqE),
                        actions: [
                            {
                                variant: "secondary",
                                text: en.intl.string(en.t["ETE/oC"]),
                                onClick: l.onClose,
                            },
                            {
                                variant: "primary",
                                text: en.intl.string(en.t.KCNNJu),
                                onClick: () => {
                                    t(), l.onClose();
                                },
                            },
                        ],
                        input: (0, r.jsx)(h.Text, {
                            variant: "text-md/normal",
                            className: el.Jv,
                            children: en.intl.string(en.t.cjE7wH),
                        }),
                    },
                    l,
                ),
                {
                    children: i
                        .filter(z.Vq)
                        .sort((e, t) => {
                            var n, l;
                            let r = null != (n = e.lastMessageId) ? n : e.id,
                                i = null != (l = t.lastMessageId) ? l : t.id;
                            return Y.default.compare(i, r);
                        })
                        .map((e) =>
                            (0, r.jsx)(
                                ec,
                                {
                                    onClose: l.onClose,
                                    channel: e,
                                },
                                e.id,
                            ),
                        ),
                },
            ),
        );
    };
class ed extends (l = i.PureComponent) {
    _getAnalyticsEntryPoint() {
        let { channel: e } = this.props,
            t = "",
            n = "";
        return (
            null != e
                ? e.isDM()
                    ? ((t = "Add Friends to DM"), (n = "DM"))
                    : ((t = "Add Friends to DM"), (n = "Group DM"))
                : ((t = "New Group DM"), (n = "Friends List")),
            {
                entryPointType: t,
                entryPointSource: n,
            }
        );
    }
    componentDidMount() {
        let { channel: e } = this.props;
        p.h.wait(() => b.A.open(null == e ? void 0 : e.id));
        let t = (0, O.dI)(e);
        V.default.track(
            ee.HAw.OPEN_POPOUT,
            ea(ei({}, t), {
                type: this._getAnalyticsEntryPoint().entryPointType,
                source: this._getAnalyticsEntryPoint().entryPointSource,
                is_friend: !this.isNotFriends(),
            }),
        ),
            W._.subscribe(ee.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            W._.subscribe(ee.jej.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        W._.unsubscribe(ee.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            W._.unsubscribe(ee.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            p.h.wait(() => b.A.close());
    }
    isNotFriends() {
        let { channel: e, isStaffOnlyDM: t } = this.props;
        if (null == e || !e.isDM()) return !1;
        let n = e.getRecipientId();
        if (null == n) throw Error("no recipient in DM");
        return !F.A.isFriend(n) && !t;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = X.A.getCurrentConfig(
            {
                location: "5326c5_1",
            },
            {
                autoTrackExposure: !1,
            },
        );
        A.Ay.createInvite(
            e.id,
            {
                max_age: t,
            },
            ee.PE1.GROUP_DM,
        );
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = B.default.getCurrentUser();
        return null != t && t.isStaff() ? ee.$aF : null != e && e.userLimit > 0 ? e.userLimit : ee.wLU;
    }
    getRemaining() {
        let { channel: e, selectedUsers: t } = this.props,
            n = (null == e ? 0 : e.recipients.length) + 1;
        return this.getMaxParticipants() - t.size - n;
    }
    getCreateGroupButtonAction() {
        let { channel: e, selectedUsers: t } = this.props,
            n = this.getRemaining(),
            l = (null != e && 0 === t.size) || n < 0,
            r = t.size > 1 || null != e ? en.intl.string(en.t.ZGMNA8) : en.intl.string(en.t["6Urw1t"]);
        return {
            variant: "primary",
            disabled: l,
            onClick: this.handleInviteUsers,
            text: r,
        };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            l = 0 === t.size || n < 0;
        return (0, r.jsx)(h.Button, {
            variant: "primary",
            text: en.intl.string(en.t.OYkgVk),
            disabled: l,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        return this.isNotFriends()
            ? en.intl.string(en.t.Xjlbvs)
            : this.isPartyFull()
              ? en.intl.string(en.t.OtTQDz)
              : en.intl.string(en.t.CdNhGX);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t) return en.intl.string(en.t["7orY6K"]);
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = B.default.getUser(t),
                l = null != n ? n.username : "";
            return en.intl.format(en.t["eg+R9x"], {
                username: l,
            });
        }
        let n = this.getRemaining();
        return n <= 0
            ? en.intl.formatToPlainString(en.t.xYr004, {
                  number: this.getMaxParticipants(),
              })
            : en.intl.formatToPlainString(en.t.HrSDPF, {
                  number: n,
              });
    }
    handleKeyDown(e) {
        let {
                sections: t,
                selectedRow: n,
                selectedSection: l,
                selectedUsers: r,
                results: i,
                query: a,
                inImprovedDMExperiment: s,
            } = this.props,
            { sectionVisibility: o } = this.state,
            { current: c } = this.searchBarRef;
        if (null == c) return;
        let u = n,
            d = l;
        switch (e.key) {
            case et.dh.BACKSPACE:
                (null == a || 0 === a.length) &&
                    r.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(r.size - 1));
                break;
            case et.dh.ARROW_DOWN:
                e.preventDefault(),
                    e.stopPropagation(),
                    s
                        ? (++u >= t[d].length &&
                              ((u = 0), d + 1 >= t.length ? (d = !1 !== o[0] ? 0 : d) : !1 !== o[d + 1] && (d += 1)),
                          this.handleSelectionChange(d, u))
                        : (++u >= i.length && (u = 0), this.handleSelectionChange(0, u));
                break;
            case et.dh.ARROW_UP:
                e.preventDefault(),
                    e.stopPropagation(),
                    s
                        ? (--u < 0 &&
                              (d - 1 < 0
                                  ? (d = !1 !== o[t.length - 1] ? t.length - 1 : d)
                                  : !1 !== o[d - 1] && (d -= 1),
                              (u = t[d].length - 1)),
                          this.handleSelectionChange(d, u))
                        : (--u < 0 && (u = i.length - 1), this.handleSelectionChange(0, u));
                break;
            case et.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), d === k.A.FRIENDS && i.length > u && this.handleSelect(0, u);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (!t || this.isNotFriends() || this.isPartyFull()) return null;
        let l = [];
        return (
            n.forEach((e) => {
                let t = B.default.getUser(e);
                null != t &&
                    l.push({
                        id: e,
                        label: J.Ay.getName(t),
                    });
            }),
            (0, r.jsxs)("div", {
                className: el.ON,
                children: [
                    (0, r.jsx)(h.ksK, {
                        inputRef: this.searchBarRef,
                        autoFocus: !0,
                        fullWidth: !0,
                        placeholder: 0 === n.size ? en.intl.string(en.t.Wxnb6q) : "",
                        disabled: this.isPartyFull(),
                        value: e,
                        leading: {
                            type: "tags",
                            items: l,
                            onRemove: this.handleRemoveUser,
                        },
                        onChange: this.handleQueryChange,
                        onKeyDown: this.handleKeyDown.bind(this),
                    }),
                    this.renderAddUsersButton(),
                ],
            })
        );
    }
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, r.jsx)("div", {
                    children: en.intl.format(en.t.xYr004, {
                        number: this.getMaxParticipants(),
                    }),
                })
              : null;
    }
    getListProps() {
        let { query: e, hasFriends: t, results: n, inImprovedDMExperiment: l, sections: i } = this.props;
        if (this.isNotFriends() || !t || this.isPartyFull()) return;
        if (0 === n.length)
            return {
                sections: [1],
                sectionHeight: 0,
                rowHeight: 32,
                renderRow: () =>
                    (0, r.jsx)("div", {
                        className: el.wV,
                        children: (0, r.jsx)(h.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: en.intl.string(en.t.SV4DJ1),
                        }),
                    }),
            };
        let a = {
            ref: this.scrollerRef,
            className: el.XG,
            innerClassName: el.bv,
            renderRow: this.renderRow,
            onScroll: this.handleScroll,
            paddingTop: 0,
            paddingBottom: 14,
            fade: !0,
            role: void 0,
            innerRole: "listbox",
            innerId: eo,
            innerAriaMultiselectable: !0,
            innerAriaOrientation: "vertical",
        };
        if (l) {
            var s, o, c;
            return ei(
                {
                    sections:
                        "" === e
                            ? [null == (s = i[k.A.FRIENDS]) ? void 0 : s.length]
                            : [
                                  null == (o = i[k.A.FRIENDS]) ? void 0 : o.length,
                                  null == (c = i[k.A.GUILD_MEMBERS]) ? void 0 : c.length,
                              ],
                    rowHeight: this.getImprovedDMRowHeight,
                    renderSection: this.renderImprovedDMSection,
                    sectionHeight: (e) => (0 === e ? 24 : 36),
                },
                a,
            );
        }
        return ei(
            {
                sections: [n.length],
                rowHeight: this.getRowHeight,
                renderSection: this.renderSection,
                sectionHeight: 0,
            },
            a,
        );
    }
    renderSection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: l } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let i = null != t ? (0, T.A)(t.code) : "",
            a = i.length > 0;
        return (0, r.jsx)(h.D0$, {
            label: en.intl.string(en.t.t3O2BR),
            helperText:
                i.length > 0
                    ? en.intl.format(en.t.ZVdJMy, {
                          numHours: "".concat(24),
                      })
                    : void 0,
            children: (0, r.jsx)(h.e2O, {
                supportsCopy: K.p5,
                placeholder: (0, T.A)(en.intl.string(en.t.lPVBqP)),
                value: a ? (n ? en.intl.string(en.t["6HzNgZ"]) : i) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: a ? (l ? en.intl.string(en.t.q30c5i) : en.intl.string(en.t.OpuAlK)) : en.intl.string(en.t.qzxqUf),
                mode: l ? h.qCr.SUCCESS : h.qCr.DEFAULT,
                onCopy: () => {
                    a ? this.handleCopyInvite(i) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n } = this.props;
        if (this.isNotFriends()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = B.default.getUser(e),
                l = null != n && F.A.getRelationshipType(n.id) === ee.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: l ? en.intl.string(en.t.xMH6vD) : en.intl.string(en.t["PMsq/b"]),
                        disabled: l,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e)
            return {
                actions: [
                    {
                        variant: "primary",
                        text: en.intl.string(en.t.w5uwoI),
                        onClick: this.handleAddFriendNavigation,
                    },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t)
            return {
                actionBarInput:
                    n.size > 1
                        ? (0, r.jsx)(eh, {
                              previewIcon: this.state.previewIcon,
                              selectedUsers: n,
                              channelName: this.state.newChannelName,
                              onChange: this.handleChannelNameChange,
                              onIconChange: this.handleIconChange,
                              onIconRemove: this.handleIconRemove,
                          })
                        : void 0,
                actions: [
                    {
                        variant: "secondary",
                        text: en.intl.string(en.t["ETE/oC"]),
                        onClick: this.props.onClose,
                    },
                    this.getCreateGroupButtonAction(),
                ],
            };
        if (t.isDM())
            return {
                actions: [this.getCreateGroupButtonAction()],
            };
        let l = this.getInviteLinkFooter();
        return null != l
            ? {
                  actionBarInput: l,
              }
            : {};
    }
    render() {
        var e;
        let { transitionState: t, onClose: n } = this.props,
            { actionBarInput: l, actions: i } = this.getFooterProps();
        return (0, r.jsx)(c.Modal, {
            transitionState: null != t ? t : h.ip4.ENTERED,
            onClose: async () => await n(),
            title: this.getTitle(),
            subtitle: this.getSubtitle(),
            input: null != (e = this.renderSearchBar()) ? e : void 0,
            actionBarInput: l,
            listProps: this.getListProps(),
            actions: null != i ? i : [],
            children: this.renderBody(),
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            _.A.sendRequest({
                discordTag: J.Ay.getUserTag(e, {
                    identifiable: "always",
                }),
                context: {
                    location: "Group DM",
                },
            });
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = R.A.getUserAffinity(e);
                return null != (t = null == n ? void 0 : n.communicationProbability) ? t : -1;
            }),
        };
    }
    constructor(...e) {
        super(...e),
            er(this, "state", {
                separator: !1,
                copied: !1,
                newChannelName: "",
                previewIcon: void 0,
                sectionVisibility: {},
            }),
            er(this, "copyTimeout", void 0),
            er(this, "scrollerRef", i.createRef()),
            er(this, "searchBarRef", i.createRef()),
            er(this, "_mobileCloseRef", i.createRef()),
            er(this, "_searchCounter", 0),
            er(this, "_existingTimeout", null),
            er(this, "scrollPageUp", () => {
                var e;
                null == (e = this.scrollerRef.current) ||
                    e.scrollPageUp({
                        animate: !0,
                    });
            }),
            er(this, "scrollPageDown", () => {
                var e;
                null == (e = this.scrollerRef.current) ||
                    e.scrollPageDown({
                        animate: !0,
                    });
            }),
            er(this, "renderMobileCloseButton", () =>
                (0, r.jsx)("div", {
                    className: el.Lh,
                    ref: this._mobileCloseRef,
                    children: (0, r.jsx)(h.xpW, {
                        containerRef: this._mobileCloseRef,
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(y.A, {
                                className: el.RR,
                                closeAction: this.props.onClose,
                                keybind: "ESC",
                            }),
                        }),
                    }),
                }),
            ),
            er(this, "getRowHeight", (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return 48 * (null != n[t]);
            }),
            er(this, "getImprovedDMRowHeight", (e, t) => {
                let { sections: n } = this.props,
                    { sectionVisibility: l } = this.state;
                return !1 === l[e] ? 0 : 48 * (null != n[e][t]);
            }),
            er(this, "renderRow", (e) => {
                var t;
                let { section: n, row: l } = e,
                    {
                        inImprovedDMExperiment: i,
                        showFriendButton: a,
                        sections: s,
                        results: o,
                        selectedUsers: c,
                        selectedRow: u,
                        selectedSection: d,
                        hideDiscriminator: h,
                        isStaffOnlyDM: p,
                        channel: f,
                        currentUser: m,
                    } = this.props,
                    { sectionVisibility: g } = this.state;
                if (i) {
                    if (!1 === g[n]) return null;
                } else if (n > 0) return null;
                let A = i ? s[n][l] : o[l];
                if (null == A) return null;
                let { user: b, comparator: _ } = A,
                    y = c.has(b.id),
                    v = n === k.A.FRIENDS && !y && 0 >= this.getRemaining();
                return (0, r.jsx)(
                    $.A,
                    {
                        section: n,
                        row: l,
                        user: b,
                        hideDiscriminator: h,
                        comparator: _,
                        checked: y,
                        disabled: v,
                        selected: n === d && l === u,
                        onClick: this.handleClick,
                        onMessageClick: this.handleMessageClick,
                        onMouseEnter: this.focusResult,
                        "aria-posinset": l + 1,
                        "aria-setsize": o.length,
                        numSelected: c.size,
                        showFriendButton: i && a,
                        staffOverride:
                            null != (t = (p || null == f) && b.isStaff() && (null == m ? void 0 : m.isStaff())) && t,
                    },
                    b.id,
                );
            }),
            er(this, "renderImprovedDMSection", (e) => {
                var t;
                let { section: n } = e,
                    { sectionVisibility: l } = this.state;
                return (0, r.jsx)(
                    ey,
                    {
                        section: n,
                        heading: n === k.A.FRIENDS ? en.intl.string(en.t.TdEu5X) : en.intl.string(en.t.y29JXs),
                        onToggleVisibility: this.handleToggleSectionVisibility,
                        isOpen: null == (t = l[n]) || t,
                    },
                    n === k.A.FRIENDS ? en.intl.string(en.t.TdEu5X) : en.intl.string(en.t.y29JXs),
                );
            }),
            er(this, "handleToggleSectionVisibility", (e) => {
                var t;
                let { sectionVisibility: n } = this.state;
                this.setState({
                    sectionVisibility: ea(ei({}, n), {
                        [e]: !(null == (t = n[e]) || t),
                    }),
                });
            }),
            er(this, "forceFocus", () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            er(this, "focusResult", (e, t) => {
                b.A.select(e, t);
            }),
            er(this, "handleSelect", (e, t) => {
                let { results: n, sections: l, channel: r, inImprovedDMExperiment: i } = this.props;
                if (null == t || null == e) b.A.clear(null == r ? void 0 : r.id);
                else if (null != n) {
                    let r = i ? l[e][t] : n[t];
                    this.handleClick(r.user.id);
                }
            }),
            er(this, "handleSelectionChange", (e, t) => {
                b.A.select(e, t);
                let n = this.scrollerRef.current;
                null != n &&
                    n.scrollToIndex({
                        section: e,
                        row: t,
                        padding: 8,
                    });
            }),
            er(this, "handleQueryChange", (e) => {
                let { channel: t, inImprovedDMExperiment: n } = this.props,
                    l = (0, O.dI)(t);
                n && q.A.requestMembers(null, e),
                    b.A.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        V.default.track(
                            ee.HAw.SEARCH_USER_LIST_STARTED,
                            ea(ei({}, l), {
                                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                                search_query_length: e.length,
                            }),
                        ),
                            this._searchCounter++;
                    }, 500));
            }),
            er(this, "handleRemoveTag", (e) => {
                let t = Array.from(this.props.selectedUsers);
                b.A.removeUser(t[e]);
            }),
            er(this, "handleRemoveUser", (e) => {
                e.forEach((e) => {
                    b.A.removeUser(e);
                }),
                    this.forceFocus();
            }),
            er(this, "handleClick", (e) => {
                let { selectedUsers: t, query: n, channel: l } = this.props;
                t.has(e)
                    ? b.A.removeUser(e)
                    : this.getRemaining() > 0 && (b.A.addUser(e), n.length > 0 && b.A.clear(null == l ? void 0 : l.id)),
                    this.forceFocus();
            }),
            er(this, "handleMessageClick", (e) => {
                let { onClose: t } = this.props;
                m.A.openPrivateChannel({
                    recipientIds: [e],
                    location: E.A.NEW_GROUP_DM_INVITE_MODAL,
                }),
                    t();
            }),
            er(this, "handleAddFriendNavigation", () => {
                g.A.transitionToSection(ee.m3P.ADD_FRIEND, {
                    explicit: !0,
                }),
                    this.props.onClose();
            }),
            er(this, "handleScroll", () => {
                let e = this.scrollerRef.current;
                null != e &&
                    this.setState({
                        separator: !e.isScrolledToTop(),
                    });
            }),
            er(this, "handleChannelNameChange", (e) => {
                this.setState({
                    newChannelName: e,
                });
            }),
            er(this, "handleIconChange", (e) => {
                let { imageUri: t } = e;
                this.setState({
                    previewIcon: t,
                });
            }),
            er(this, "handleIconRemove", () => {
                this.setState({
                    previewIcon: null,
                });
            }),
            er(this, "createNewDM", (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    l = (0, O.dI)(n),
                    r = !0;
                1 === e.length && (r = null == m.A._openCachedDMChannel(e[0])),
                    V.default.track(
                        ee.HAw.CREATE_DM_USER_LIST_CLICKED,
                        ea(ei({}, l), {
                            is_new_dm: r,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: e,
                            num_searches: t,
                            affinity_score: this._getUserAffinities(e).affinities,
                            name_is_set: "" !== this.state.newChannelName,
                            icon_is_set: null != this.state.previewIcon,
                        }),
                    ),
                    m.A.openPrivateChannel({
                        recipientIds: e,
                        location: "New Group DM",
                    }).then((e) => {
                        var t, n;
                        null == (t = (n = this.props).onComplete) || t.call(n, e);
                        let l = {};
                        "" !== this.state.newChannelName && (l.name = this.state.newChannelName),
                            null != this.state.previewIcon && (l.icon = this.state.previewIcon),
                            (null != l.name || null != l.icon) &&
                                m.A.updateChannel(e, l, E.A.NEW_GROUP_DM_INVITE_MODAL),
                            V.default.track(ee.HAw.GDM_EDIT_INTERACTED, {
                                channel_id: e,
                                channel_type: ee.rbe.GROUP_DM,
                                location: E.A.NEW_GROUP_DM_INVITE_MODAL,
                                new_name_set: "" !== this.state.newChannelName,
                                new_icon_set: null != this.state.previewIcon,
                            });
                    });
            }),
            er(this, "pushToExistingDM", (e, t) => {
                let n = this._searchCounter,
                    l = (0, O.dI)(e),
                    r = U.A.getChannelId() === e.id;
                m.A.addRecipients(e.id, t, ee.ThZ.ADD_FRIENDS_TO_DM).then((n) => {
                    var l, i;
                    if ((null == (l = (i = this.props).onComplete) || l.call(i, n), r)) {
                        if (e.isDM() && n !== e.id) return void f.A.call(n, !1, !0);
                        f.A.ring(n, t, "dm_invite");
                    }
                }),
                    V.default.track(
                        ee.HAw.CREATE_DM_USER_LIST_CLICKED,
                        ea(ei({}, l), {
                            is_new_dm: !0,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: t,
                            num_searches: n,
                            affinity_score: this._getUserAffinities(t).affinities,
                        }),
                    );
            }),
            er(this, "handleInviteUsers", () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    l = Array.from(t);
                if (null != e) {
                    let t = eb(Array.from(new Set([...e.recipients, ...l])));
                    t.size > 0
                        ? (0, h.qfG)(
                              (n) =>
                                  (0, r.jsx)(
                                      eu,
                                      ea(ei({}, n), {
                                          onConfirm: () => this.pushToExistingDM(e, l),
                                          channelIds: t,
                                      }),
                                  ),
                              {},
                              (0, h.TId)(this.context.appContext),
                          )
                        : this.pushToExistingDM(e, l);
                } else {
                    let e = eb(l);
                    l.length > 1 && e.size > 0
                        ? (0, h.qfG)(
                              (t) =>
                                  (0, r.jsx)(
                                      eu,
                                      ea(ei({}, t), {
                                          onConfirm: () => this.createNewDM(l),
                                          channelIds: e,
                                      }),
                                  ),
                              {},
                              (0, h.TId)(this.context.appContext),
                          )
                        : this.createNewDM(l);
                }
                n();
            }),
            er(this, "handleCopyInvite", (e) => {
                let { channel: t, invite: n } = this.props;
                null != n && (0, K.C)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({
                        copied: !0,
                    }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({
                            copied: !1,
                        });
                    }, 1e3)),
                    V.default.track(ee.HAw.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: ee.ThZ.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null,
                    });
            }),
            er(this, "scrollToCounterSearchBarHeightChange", (e) => {
                var t, n;
                let l = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? void 0 : t.call(n);
                null != l && (l.scrollTop = Math.max(0, l.scrollTop + e));
            });
    }
}

function eh(e) {
    let { selectedUsers: t, channelName: n, previewIcon: l, onIconChange: i, onIconRemove: a, onChange: s } = e,
        { analyticsLocations: o } = (0, C.Ay)(E.A.NEW_GROUP_DM_INVITE_MODAL),
        c = (0, S.Jo)(Array.from(t), B.default, F.A);
    return (0, r.jsxs)("div", {
        className: el.zj,
        children: [
            (0, r.jsx)(I.X, {
                className: el.r9,
                channel: null,
                previewIcon: l,
                onIconChange: i,
                onIconRemove: a,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, r.jsx)(h.Text, {
                className: el.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: en.intl.string(en.t.YynaLK),
            }),
            (0, r.jsx)(h.ksK, {
                "aria-label": en.intl.string(en.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: c,
                value: n,
                onChange: s,
            }),
        ],
    });
}

function ep(e) {
    let { channel: t, onComplete: n } = e,
        l = es(e, ["channel", "onComplete"]),
        i = (0, u.cf)([k.h, L.A, H.A], () => {
            let e;
            return (
                null != t && null != (e = L.A.getInvite(t.id)) && e.isExpired() && (e = null),
                ea(ei({}, k.h.getState()), {
                    invite: e,
                    hideDiscriminator: H.A.hidePersonalInformation,
                    hideInstantInvites: H.A.hideInstantInvites,
                })
            );
        }),
        a = (0, u.yK)([k.h], () => k.h.getSections()),
        { enabled: s, showFriendButton: o } = Z.A.useConfig({
            location: "PrivateChannelRecipientsInvite",
        }),
        c = (0, u.bG)([B.default], () => B.default.getCurrentUser()),
        d = (0, u.bG)([B.default], () => {
            var e;
            return (
                !!(null == (e = B.default.getCurrentUser()) ? void 0 : e.isStaff()) &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => {
                    var t;
                    return null == (t = B.default.getUser(e)) ? void 0 : t.isStaff();
                })
            );
        }, [t]);
    return (0, r.jsx)(
        ed,
        ei(
            {
                channel: t,
                currentUser: c,
                isStaffOnlyDM: d,
                inImprovedDMExperiment: s,
                showFriendButton: o,
                sections: a,
                onComplete: n,
            },
            l,
            i,
        ),
    );
}

function ef(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        l = "channel-invite-modal-".concat(null == t ? void 0 : t.id),
        a = (0, h.Ry6)(l),
        s = i.useCallback(
            () =>
                (0, h.mMO)(
                    () =>
                        Promise.resolve((e) =>
                            (0, r.jsx)(
                                ep,
                                ea(ei({}, e), {
                                    channel: t,
                                }),
                            ),
                        ),
                    {
                        modalKey: l,
                    },
                ),
            [t, l],
        ),
        o = i.useCallback(() => (a ? (0, h.OoC)(l) : s()), [a, l, s]);
    return (
        i.useEffect(
            () => (
                n && W._.subscribe(ee.jej.TOGGLE_DM_CREATE, o),
                () => {
                    W._.unsubscribe(ee.jej.TOGGLE_DM_CREATE, o);
                }
            ),
            [n, o],
        ),
        (0, v.Ay)(() => {
            (0, w.u)();
        }),
        {
            showModal: s,
            toggleVisible: o,
        }
    );
}

function em(e) {
    let { channel: t, onComplete: n } = e,
        l = (null == t ? void 0 : t.id) != null ? "channel-invite-modal-".concat(t.id) : "channel-invite-modal-new";
    (0, h.mMO)(
        () =>
            Promise.resolve((e) =>
                (0, r.jsx)(
                    ep,
                    ea(ei({}, e), {
                        channel: t,
                        onComplete: n,
                    }),
                ),
            ),
        {
            modalKey: l,
        },
    );
}

function eg(e) {
    var t, n;
    let {
            channel: l,
            iconClassName: a,
            className: s,
            icon: o,
            tooltip: c,
            tooltipPosition: d = "bottom",
            subscribeToGlobalHotkey: p = !1,
        } = e,
        f = i.useRef(null),
        m = null != o ? o : null == l ? h.ggM : h.DpX,
        { showModal: g } = ef({
            channel: l,
            subscribeToGlobalHotkey: p,
        }),
        A = (0, u.bG)([B.default], () => B.default.getUser(null == l ? void 0 : l.getRecipientId()));
    return (null != (t = null == A ? void 0 : A.bot) && t) || (null != (n = null == A ? void 0 : A.isProvisional) && n)
        ? null
        : (0, r.jsx)(Q.Ay.Icon, {
              ref: f,
              onClick: g,
              icon: m,
              className: s,
              iconClassName: a,
              tooltip: c,
              tooltipPosition: d,
          });
}

function eA(e) {
    let { channel: t, fullWidth: n = !1, text: l, icon: a, subscribeToGlobalHotkey: s = !1 } = e,
        o = es(e, ["channel", "fullWidth", "text", "icon", "subscribeToGlobalHotkey"]),
        c = i.useRef(null),
        { showModal: u } = ef({
            channel: t,
            subscribeToGlobalHotkey: s,
        });
    return (0, r.jsx)(
        h.Button,
        ea(ei({}, o), {
            onClick: u,
            variant: "primary",
            buttonRef: c,
            text: l,
            "aria-label": l,
            icon: a,
            fullWidth: n,
        }),
    );
}

function eb(e) {
    let t = e_(e);
    return new Set(
        (0, a.chain)(M.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, D.MK)(e.type))
            .filter((e) => e_(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}

function e_(e) {
    return JSON.stringify(e.sort());
}

function ey(e) {
    let { section: t, heading: n, isOpen: l, onToggleVisibility: i } = e;
    return (0, r.jsxs)(h.DUT, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg",
        },
        className: el.bV,
        onClick: () => i(t),
        children: [
            (0, r.jsx)(h.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: n,
            }),
            (0, r.jsx)(c.abt, {
                size: "md",
                color: "currentColor",
                className: el.vP,
            }),
        ],
    });
}
er(ed, "contextType", N.Ay);
