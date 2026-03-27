n.d(t, { Ay: () => eh, Jz: () => eu, NE: () => em }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(989349),
    r = n.n(a),
    o = n(158954),
    c = n(311907),
    d = n(421380),
    u = n(397927),
    h = n(73153),
    m = n(387755),
    A = n(308528),
    g = n(711950),
    p = n(846293),
    f = n(888906),
    _ = n(49229),
    E = n(684136),
    x = n(964486),
    C = n(793574),
    S = n(58149),
    I = n(688810),
    T = n(571694),
    N = n(47167),
    v = n(915089),
    b = n(66442),
    y = n(279208),
    j = n(267102),
    R = n(976860),
    M = n(219271),
    D = n(21119),
    O = n(95701),
    L = n(734057),
    P = n(71393),
    w = n(958590),
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
    Y = n(695184),
    q = n(661191),
    J = n(427262),
    $ = n(625788),
    Z = n(662367),
    X = n(58736),
    Q = n(286498),
    ee = n(652215),
    et = n(650583),
    en = n(985018),
    ei = n(94521);
let el = (0, v.Ld)(),
    es = (e) => {
        let { channel: t, onClose: n } = e,
            l = (0, N.Ay)(t) ?? "",
            s = (0, c.bG)([G.Ay], () => G.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(u.DUT, {
            onClick: () => {
                (0, R.uh)(ee.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: ei.us,
                children: [
                    (0, i.jsx)(u.euF, { src: (0, T.Y)(t), size: u._3J.SIZE_24, "aria-label": l }),
                    (0, i.jsx)("span", { className: ei.J2, children: l }),
                    (0, i.jsx)("span", { className: ei.Pd, children: r()(q.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    ea = (e) => {
        let { onConfirm: t, channelIds: n, ...l } = e,
            s = (0, c.yK)([L.A], () => Array.from(n).map(L.A.getChannel), [n]);
        return (0, i.jsx)(o.Modal, {
            title: en.intl.string(en.t.uFHxNd),
            subtitle: en.intl.string(en.t.rIsSqE),
            actions: [
                { variant: "secondary", text: en.intl.string(en.t["ETE/oC"]), onClick: l.onClose },
                {
                    variant: "primary",
                    text: en.intl.string(en.t.KCNNJu),
                    onClick: () => {
                        t(), l.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                className: ei.Jv,
                children: en.intl.string(en.t.cjE7wH),
            }),
            ...l,
            children: s
                .filter(z.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return q.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(es, { onClose: l.onClose, channel: e }, e.id)),
        });
    };
class er extends l.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0, sectionVisibility: {} };
    static contextType = j.Ay;
    copyTimeout;
    scrollerRef = l.createRef();
    searchBarRef = l.createRef();
    _mobileCloseRef = l.createRef();
    _searchCounter = 0;
    _existingTimeout = null;
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
            { entryPointType: t, entryPointSource: n }
        );
    }
    componentDidMount() {
        let { channel: e } = this.props;
        h.h.wait(() => f.A.open(e?.id));
        let t = (0, S.dI)(e);
        V.default.track(ee.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            W._.subscribe(ee.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            W._.subscribe(ee.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        W._.unsubscribe(ee.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            W._.unsubscribe(ee.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            h.h.wait(() => f.A.close());
    }
    scrollPageUp = () => {
        this.scrollerRef.current?.scrollPageUp({ animate: !0 });
    };
    scrollPageDown = () => {
        this.scrollerRef.current?.scrollPageDown({ animate: !0 });
    };
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
        let t = (0, Z.i)({ location: "5326c5_1" });
        p.Ay.createInvite(e.id, { max_age: t }, ee.PE1.GROUP_DM);
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
            i = (null != e && 0 === t.size) || n < 0,
            l = t.size > 1 || null != e ? en.intl.string(en.t["h1/FMu"]) : en.intl.string(en.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: l };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            l = 0 === t.size || n < 0;
        return (0, i.jsx)(u.Button, {
            variant: "primary",
            text: en.intl.string(en.t.OYkgVk),
            disabled: l,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        if (this.isNotFriends()) return en.intl.string(en.t.Xjlbvs);
        if (this.isPartyFull()) return en.intl.string(en.t.OtTQDz);
        let { channel: e } = this.props;
        return null == e ? en.intl.string(en.t.jD1qzM) : en.intl.string(e.isMultiUserDM() ? en.t.AQAPts : en.t.Xjlbvs);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t, inImprovedDMExperiment: n, hasGuilds: i } = this.props;
        if (!t) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = B.default.getUser(t),
                        n = null != e ? e.username : "";
                    return en.intl.format(en.t["eg+R9x"], { username: n });
                }
            }
            return n ? (i ? void 0 : en.intl.string(en.t["7orY6K"])) : en.intl.string(en.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = B.default.getUser(t),
                i = null != n ? n.username : "";
            return en.intl.format(en.t["eg+R9x"], { username: i });
        }
        let l = this.getRemaining();
        return l <= 0
            ? en.intl.formatToPlainString(en.t.xYr004, { number: this.getMaxParticipants() })
            : en.intl.formatToPlainString(en.t.HrSDPF, { number: l });
    }
    hasNavigableItems = (e) => {
        let { sectionVisibility: t } = this.state,
            { sections: n } = this.props;
        return !1 !== t[e] && null != n[e] && n[e].length > 0;
    };
    handleKeyDown(e) {
        let {
                sections: t,
                selectedRow: n,
                selectedSection: i,
                selectedUsers: l,
                results: s,
                query: a,
                inImprovedDMExperiment: r,
            } = this.props,
            { current: o } = this.searchBarRef;
        if (null == o) return;
        let c = n,
            d = i;
        switch (e.key) {
            case et.dh.BACKSPACE:
                (null == a || 0 === a.length) &&
                    l.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(l.size - 1));
                break;
            case et.dh.ARROW_DOWN:
                e.preventDefault(),
                    e.stopPropagation(),
                    r
                        ? ((!this.hasNavigableItems(d) || ++c >= t[d].length) &&
                              ((c = 0),
                              d + 1 >= t.length
                                  ? (d = this.hasNavigableItems(0) ? 0 : d)
                                  : this.hasNavigableItems(d + 1) && (d += 1)),
                          this.handleSelectionChange(d, c))
                        : (++c >= s.length && (c = 0), this.handleSelectionChange(0, c));
                break;
            case et.dh.ARROW_UP:
                e.preventDefault(),
                    e.stopPropagation(),
                    r
                        ? ((!this.hasNavigableItems(d) || --c < 0) &&
                              (d - 1 < 0
                                  ? (d = this.hasNavigableItems(t.length - 1) ? t.length - 1 : d)
                                  : this.hasNavigableItems(t.length - 1) && (d -= 1),
                              (c = t[d].length - 1)),
                          this.handleSelectionChange(d, c))
                        : (--c < 0 && (c = s.length - 1), this.handleSelectionChange(0, c));
                break;
            case et.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), d === k.A.FRIENDS && s.length > c && this.handleSelect(0, c);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n, inImprovedDMExperiment: l, hasGuilds: s } = this.props;
        if (this.isNotFriends() || this.isPartyFull() || (!l && !t) || (l && !t && !s)) return null;
        let a = [];
        n.forEach((e) => {
            let t = B.default.getUser(e);
            null != t && a.push({ id: e, label: J.Ay.getName(t) });
        });
        let r = l ? en.intl.string(en.t.JaOYyf) : en.intl.string(en.t.K5e6bn);
        return (0, i.jsxs)("div", {
            className: ei.ON,
            children: [
                (0, i.jsx)(u.ksK, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    placeholder: 0 === n.size ? r : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: a, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                }),
                this.renderAddUsersButton(),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: ei.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(u.xpW, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(E.A, { className: ei.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: en.intl.format(en.t.xYr004, { number: this.getMaxParticipants() }) })
              : null;
    }
    getListProps() {
        let {
            query: e,
            hasFriends: t,
            results: n,
            inImprovedDMExperiment: l,
            sections: s,
            hasGuilds: a,
            channel: r,
        } = this.props;
        if (this.isNotFriends() || this.isPartyFull() || (!l && !t) || (l && !t && !a)) return;
        let o = l ? (s[k.A.FRIENDS]?.length ?? 0) + (s[k.A.GUILD_MEMBERS]?.length ?? 0) : n.length;
        if (l && null == r && a && 0 === o && "" === e)
            return {
                sections: [1],
                sectionHeight: 0,
                rowHeight: 32,
                renderRow: () =>
                    (0, i.jsxs)("div", {
                        className: ei.wV,
                        children: [
                            (0, i.jsx)(u.Text, {
                                className: ei.A1,
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: en.intl.string(en.t.ibxdrl),
                            }),
                            (0, i.jsx)(u.Button, {
                                variant: "secondary",
                                text: en.intl.string(en.t.w5uwoI),
                                onClick: this.handleAddFriendNavigation,
                            }),
                        ],
                    }),
            };
        if (0 === o)
            return {
                sections: [1],
                sectionHeight: 0,
                rowHeight: 32,
                renderRow: () =>
                    (0, i.jsx)("div", {
                        className: ei.wV,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: l ? en.intl.string(en.t.nlunn9) : en.intl.string(en.t.z3yXsY),
                        }),
                    }),
            };
        let c = {
            ref: this.scrollerRef,
            className: ei.XG,
            innerClassName: ei.bv,
            renderRow: this.renderRow,
            onScroll: this.handleScroll,
            paddingTop: 0,
            paddingBottom: 14,
            fade: !0,
            role: void 0,
            innerRole: "listbox",
            innerId: el,
            innerAriaMultiselectable: !0,
            innerAriaOrientation: "vertical",
        };
        return l
            ? {
                  sections:
                      "" === e ? [s[k.A.FRIENDS]?.length, 1] : [s[k.A.FRIENDS]?.length, s[k.A.GUILD_MEMBERS]?.length],
                  rowHeight: this.getImprovedDMRowHeight,
                  renderSection: this.renderImprovedDMSection,
                  sectionHeight: this.getImprovedDMSectionHeight,
                  ...c,
              }
            : {
                  sections: [n.length],
                  rowHeight: this.getRowHeight,
                  renderSection: this.renderSection,
                  sectionHeight: 0,
                  ...c,
              };
    }
    getRowHeight = (e, t) => {
        if (e > 0) return 0;
        let { results: n } = this.props;
        return 48 * (null != n[t]);
    };
    getImprovedDMRowHeight = (e, t) => {
        let { sections: n, query: i } = this.props,
            { sectionVisibility: l } = this.state;
        return !1 === l[e]
            ? 0
            : e === k.A.GUILD_MEMBERS && "" === i
              ? 32
              : null == n[e] || 0 === n[e].length
                ? 0
                : 48 * (null != n[e][t]);
    };
    renderRow = (e) => {
        let t,
            { section: n, row: l } = e,
            {
                inImprovedDMExperiment: s,
                sections: a,
                results: r,
                selectedUsers: o,
                selectedRow: c,
                selectedSection: d,
                hideDiscriminator: h,
                isStaffOnlyDM: m,
                channel: A,
                currentUser: g,
                query: p,
            } = this.props,
            { sectionVisibility: f } = this.state;
        if (s) {
            if (!1 === f[n]) return null;
            if (n === k.A.GUILD_MEMBERS && "" === p)
                return (0, i.jsx)(
                    "div",
                    {
                        className: ei.Rg,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: en.intl.string(en.t["7JH6Ug"]),
                        }),
                    },
                    "empty-guild-members",
                );
            if (null == a[n] || 0 === a[n].length) return null;
        } else if (n > 0) return null;
        let _ = s ? a[n][l] : r[l];
        if (null == _) return null;
        let { user: E, comparator: x } = _,
            C = o.has(E.id),
            S = ((m || null == A) && E.isStaff() && g?.isStaff()) ?? !1,
            I = !1;
        return (
            !C && 0 >= this.getRemaining()
                ? (I = !0)
                : s && !C && o.size > 0 && n === k.A.GUILD_MEMBERS && ((I = !0), (t = en.intl.string(en.t.z9qAt9))),
            (0, i.jsx)(
                Q.A,
                {
                    section: n,
                    row: l,
                    user: E,
                    hideDiscriminator: h,
                    comparator: x,
                    checked: C,
                    disabled: I,
                    selected: n === d && l === c,
                    onClick: this.handleClick,
                    onMessageClick: this.handleMessageClick,
                    onMouseEnter: this.focusResult,
                    "aria-posinset": l + 1,
                    "aria-setsize": s ? a[n].length : r.length,
                    disabledTooltipText: t,
                    inImprovedDMExperiment: s,
                    handleTrackAction: this.handleTrackUserRowInteraction,
                    staffOverride: S,
                },
                E.id,
            )
        );
    };
    renderSection() {
        return null;
    }
    renderImprovedDMSection = (e) => {
        let { section: t } = e,
            { sections: n, query: l } = this.props,
            { sectionVisibility: s } = this.state,
            a = n[t];
        return "" !== l && (null == a || 0 === a.length)
            ? null
            : (0, i.jsx)(
                  ep,
                  {
                      section: t,
                      heading: t === k.A.FRIENDS ? en.intl.string(en.t.TdEu5X) : en.intl.string(en.t.y29JXs),
                      onToggleVisibility: this.handleToggleSectionVisibility,
                      isOpen: s[t] ?? !0,
                  },
                  t === k.A.FRIENDS ? en.intl.string(en.t.TdEu5X) : en.intl.string(en.t.y29JXs),
              );
    };
    getImprovedDMSectionHeight = (e) => {
        let { sections: t, query: n } = this.props,
            i = t[e];
        return "" !== n && (null == i || 0 === i.length) ? 0 : 0 === e ? 24 : 32;
    };
    handleToggleSectionVisibility = (e) => {
        let { sectionVisibility: t } = this.state;
        this.setState({ sectionVisibility: { ...t, [e]: !(t[e] ?? !0) } });
    };
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: l } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let s = null != t ? (0, y.A)(t.code) : "",
            a = s.length > 0;
        return (0, i.jsx)(u.D0$, {
            label: en.intl.string(en.t.t3O2BR),
            helperText: s.length > 0 ? en.intl.format(en.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(u.e2O, {
                supportsCopy: K.p5,
                placeholder: (0, y.A)(en.intl.string(en.t.lPVBqP)),
                value: a ? (n ? en.intl.string(en.t["6HzNgZ"]) : s) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: a ? (l ? en.intl.string(en.t.q30c5i) : en.intl.string(en.t.OpuAlK)) : en.intl.string(en.t.qzxqUf),
                mode: l ? u.qCr.SUCCESS : u.qCr.DEFAULT,
                onCopy: () => {
                    a ? this.handleCopyInvite(s) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n, inImprovedDMExperiment: l, hasGuilds: s } = this.props;
        if (this.isNotFriends()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = B.default.getUser(e),
                i = null != n && F.A.getRelationshipType(n.id) === ee.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? en.intl.string(en.t.xMH6vD) : en.intl.string(en.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e && (!l || !s))
            return {
                actions: [
                    { variant: "primary", text: en.intl.string(en.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t)
            return {
                actionBarInput:
                    n.size > 1
                        ? (0, i.jsx)(eo, {
                              previewIcon: this.state.previewIcon,
                              selectedUsers: n,
                              channelName: this.state.newChannelName,
                              onChange: this.handleChannelNameChange,
                              onIconChange: this.handleIconChange,
                              onIconRemove: this.handleIconRemove,
                          })
                        : void 0,
                actions: [
                    { variant: "secondary", text: en.intl.string(en.t["ETE/oC"]), onClick: this.props.onClose },
                    this.getCreateGroupButtonAction(),
                ],
            };
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let a = this.getInviteLinkFooter();
        return null != a ? { actionBarInput: a } : {};
    }
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { actionBarInput: n, actions: l } = this.getFooterProps();
        return (0, i.jsx)(o.Modal, {
            transitionState: e ?? u.ip4.ENTERED,
            onClose: async () => await t(),
            title: this.getTitle(),
            subtitle: this.getSubtitle(),
            input: this.renderSearchBar() ?? void 0,
            actionBarInput: n,
            listProps: this.getListProps(),
            actions: l ?? [],
            children: this.renderBody(),
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            _.A.sendRequest({
                discordTag: J.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e, t) => {
        f.A.select(e, t);
    };
    handleSelect = (e, t) => {
        let { results: n, sections: i, channel: l, inImprovedDMExperiment: s } = this.props;
        if (null == t || null == e) f.A.clear(l?.id);
        else if (null != n) {
            let l = s ? i[e][t] : n[t];
            this.handleClick(l.user.id);
        }
    };
    handleSelectionChange = (e, t) => {
        f.A.select(e, t);
        let n = this.scrollerRef.current;
        null != n && n.scrollToIndex({ section: e, row: t, padding: 8 });
    };
    handleQueryChange = (e) => {
        let { channel: t, inImprovedDMExperiment: n } = this.props,
            i = (0, S.dI)(t);
        n && Y.A.requestMembers(null, e),
            f.A.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                V.default.track(ee.HAw.SEARCH_USER_LIST_STARTED, {
                    ...i,
                    entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                    entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                    search_query_length: e.length,
                }),
                    this._searchCounter++;
            }, 500));
    };
    handleRemoveTag = (e) => {
        let t = Array.from(this.props.selectedUsers);
        f.A.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            f.A.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: i } = this.props;
        t.has(e) ? f.A.removeUser(e) : this.getRemaining() > 0 && (f.A.addUser(e), n.length > 0 && f.A.clear(i?.id)),
            this.forceFocus();
    };
    handleMessageClick = (e) => {
        let { onClose: t } = this.props;
        A.A.openPrivateChannel({ recipientIds: [e], location: C.A.NEW_GROUP_DM_INVITE_MODAL }), t();
    };
    handleAddFriendNavigation = () => {
        g.A.transitionToSection(ee.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
    };
    handleScroll = () => {
        let e = this.scrollerRef.current;
        null != e && this.setState({ separator: !e.isScrolledToTop() });
    };
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                let t = D.A.getUserAffinity(e);
                return t?.communicationProbability ?? -1;
            }),
        };
    }
    handleChannelNameChange = (e) => {
        this.setState({ newChannelName: e });
    };
    handleIconChange = (e) => {
        let { imageUri: t } = e;
        this.setState({ previewIcon: t });
    };
    handleIconRemove = () => {
        this.setState({ previewIcon: null });
    };
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            i = (0, S.dI)(n),
            l = !0;
        1 === e.length && (l = null == A.A._openCachedDMChannel(e[0])),
            V.default.track(ee.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...i,
                is_new_dm: l,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: e,
                num_searches: t,
                affinity_score: this._getUserAffinities(e).affinities,
                name_is_set: "" !== this.state.newChannelName,
                icon_is_set: null != this.state.previewIcon,
            }),
            A.A.openPrivateChannel({ recipientIds: e, location: "New Group DM" }).then((e) => {
                this.props.onComplete?.(e);
                let t = {};
                "" !== this.state.newChannelName && (t.name = this.state.newChannelName),
                    null != this.state.previewIcon && (t.icon = this.state.previewIcon),
                    (null != t.name || null != t.icon) && A.A.updateChannel(e, t, C.A.NEW_GROUP_DM_INVITE_MODAL),
                    V.default.track(ee.HAw.GDM_EDIT_INTERACTED, {
                        channel_id: e,
                        channel_type: ee.rbe.GROUP_DM,
                        location: C.A.NEW_GROUP_DM_INVITE_MODAL,
                        new_name_set: "" !== this.state.newChannelName,
                        new_icon_set: null != this.state.previewIcon,
                    });
            });
    };
    pushToExistingDM = (e, t) => {
        let n = this._searchCounter,
            i = (0, S.dI)(e),
            l = U.A.getChannelId() === e.id;
        A.A.addRecipients(e.id, t, ee.ThZ.ADD_FRIENDS_TO_DM).then((n) => {
            if ((this.props.onComplete?.(n), l)) {
                if (e.isDM() && n !== e.id) return void m.A.call(n, !1, !0);
                m.A.ring(n, t, "dm_invite");
            }
        }),
            V.default.track(ee.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...i,
                is_new_dm: !0,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: t,
                num_searches: n,
                affinity_score: this._getUserAffinities(t).affinities,
            });
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            l = Array.from(t);
        if (null != e) {
            let t = eA(Array.from(new Set([...e.recipients, ...l])));
            t.size > 0
                ? (0, u.qfG)(
                      (n) => (0, i.jsx)(ea, { ...n, onConfirm: () => this.pushToExistingDM(e, l), channelIds: t }),
                      {},
                      (0, u.TId)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, l);
        } else {
            let e = eA(l);
            l.length > 1 && e.size > 0
                ? (0, u.qfG)(
                      (t) => (0, i.jsx)(ea, { ...t, onConfirm: () => this.createNewDM(l), channelIds: e }),
                      {},
                      (0, u.TId)(this.context.appContext),
                  )
                : this.createNewDM(l);
        }
        n();
    };
    handleCopyInvite = (e) => {
        let { channel: t, invite: n } = this.props;
        null != n && (0, K.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            V.default.track(ee.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: ee.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
    handleTrackUserRowInteraction = (e, t, n) => {
        let { inImprovedDMExperiment: i, sections: l, results: s } = this.props,
            a = i ? l[e][t] : s[t];
        null != a &&
            V.default.track(ee.HAw.CREATE_DM_USER_ROW_INTERACTED, {
                section: e,
                row: t,
                interaction_type: n,
                affinity_score: D.A.getUserAffinity(a.user.id)?.communicationProbability ?? -1,
            });
    };
}
function eo(e) {
    let { selectedUsers: t, channelName: n, previewIcon: l, onIconChange: s, onIconRemove: a, onChange: r } = e,
        { analyticsLocations: o } = (0, I.Ay)(C.A.NEW_GROUP_DM_INVITE_MODAL),
        c = (0, N.Jo)(Array.from(t), B.default, F.A);
    return (0, i.jsxs)("div", {
        className: ei.zj,
        children: [
            (0, i.jsx)(b.X, {
                className: ei.r9,
                channel: null,
                previewIcon: l,
                onIconChange: s,
                onIconRemove: a,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(u.Text, {
                className: ei.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: en.intl.string(en.t.YynaLK),
            }),
            (0, i.jsx)(u.ksK, {
                "aria-label": en.intl.string(en.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: c,
                value: n,
                onChange: r,
            }),
        ],
    });
}
function ec(e) {
    let { channel: t, onComplete: n, ...l } = e,
        s = (0, c.cf)([k.h, w.A, H.A], () => {
            let e;
            return (
                null != t && null != (e = w.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...k.h.getState(),
                    invite: e,
                    hideDiscriminator: H.A.hidePersonalInformation,
                    hideInstantInvites: H.A.hideInstantInvites,
                }
            );
        }),
        a = (0, c.yK)([k.h], () => k.h.getSections()),
        { enabled: r } = $.A.useConfig({ location: null == t ? "New DM" : "Existing DM" }),
        o = (0, c.bG)([B.default], () => B.default.getCurrentUser()),
        d = (0, c.bG)(
            [B.default],
            () =>
                !!B.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => B.default.getUser(e)?.isStaff()),
            [t],
        ),
        u = (0, c.bG)([P.A], () => P.A.getGuildCount() > 0);
    return (0, i.jsx)(er, {
        channel: t,
        currentUser: o,
        isStaffOnlyDM: d,
        inImprovedDMExperiment: null == t && r,
        sections: a,
        onComplete: n,
        hasGuilds: u,
        ...l,
        ...s,
    });
}
function ed(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        a = (0, u.Ry6)(s),
        r = l.useCallback(
            () => (0, u.mMO)(() => Promise.resolve((e) => (0, i.jsx)(ec, { ...e, channel: t })), { modalKey: s }),
            [t, s],
        ),
        o = l.useCallback(() => (a ? (0, u.OoC)(s) : r()), [a, s, r]);
    return (
        l.useEffect(
            () => (
                n && W._.subscribe(ee.jej.TOGGLE_DM_CREATE, o),
                () => {
                    W._.unsubscribe(ee.jej.TOGGLE_DM_CREATE, o);
                }
            ),
            [n, o],
        ),
        (0, x.Ay)(() => {
            (0, M.u)();
        }),
        { showModal: r, toggleVisible: o }
    );
}
function eu(e) {
    let { channel: t, onComplete: n } = e,
        l = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, u.mMO)(() => Promise.resolve((e) => (0, i.jsx)(ec, { ...e, channel: t, onComplete: n })), { modalKey: l });
}
function eh(e) {
    let {
            channel: t,
            iconClassName: n,
            className: s,
            icon: a,
            tooltip: r,
            tooltipPosition: o = "bottom",
            subscribeToGlobalHotkey: d = !1,
        } = e,
        h = l.useRef(null),
        m = a ?? (null == t ? u.ggM : u.DpX),
        { showModal: A } = ed({ channel: t, subscribeToGlobalHotkey: d }),
        g = (0, c.bG)([B.default], () => B.default.getUser(t?.getRecipientId()));
    return g?.bot || g?.isProvisional
        ? null
        : (0, i.jsx)(X.Ay.Icon, {
              ref: h,
              onClick: A,
              icon: m,
              className: s,
              iconClassName: n,
              tooltip: r,
              tooltipPosition: o,
          });
}
function em(e) {
    let { channel: t, fullWidth: n = !1, text: s, icon: a, subscribeToGlobalHotkey: r = !1, ...o } = e,
        c = l.useRef(null),
        { showModal: d } = ed({ channel: t, subscribeToGlobalHotkey: r });
    return (0, i.jsx)(u.Button, {
        ...o,
        onClick: d,
        variant: "primary",
        buttonRef: c,
        text: s,
        "aria-label": s,
        icon: a,
        fullWidth: n,
    });
}
function eA(e) {
    let t = eg(e);
    return new Set(
        (0, s.chain)(L.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, O.MK)(e.type))
            .filter((e) => eg(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function eg(e) {
    return JSON.stringify(e.sort());
}
function ep(e) {
    let { section: t, heading: n, isOpen: l, onToggleVisibility: s } = e;
    return (0, i.jsxs)(u.DUT, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 8 * (0 !== t),
            "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg",
        },
        className: ei.bV,
        onClick: () => s(t),
        children: [
            (0, i.jsx)(u.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, i.jsx)(o.abt, { size: "md", color: "currentColor", className: ei.vP }),
        ],
    });
}
