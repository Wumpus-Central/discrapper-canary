n.d(t, { Ay: () => eu, Jz: () => ed, NE: () => eh }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n(989349),
    r = n.n(s),
    o = n(158954),
    c = n(311907),
    d = n(421380),
    u = n(397927),
    h = n(73153),
    m = n(387755),
    A = n(308528),
    p = n(711950),
    g = n(846293),
    f = n(888906),
    _ = n(49229),
    E = n(684136),
    C = n(964486),
    x = n(793574),
    S = n(58149),
    T = n(688810),
    I = n(571694),
    N = n(47167),
    v = n(915089),
    y = n(66442),
    b = n(279208),
    R = n(267102),
    j = n(976860),
    M = n(219271),
    D = n(21119),
    O = n(95701),
    L = n(734057),
    P = n(958590),
    w = n(584777),
    k = n(383501),
    U = n(222823),
    G = n(994500),
    F = n(351906),
    H = n(287809),
    B = n(954571),
    V = n(957565),
    W = n(203982),
    K = n(403362),
    z = n(695184),
    Y = n(661191),
    q = n(427262),
    J = n(625788),
    $ = n(662367),
    Z = n(58736),
    X = n(286498),
    Q = n(652215),
    ee = n(650583),
    et = n(985018),
    en = n(587360);
let ei = (0, v.Ld)(),
    el = (e) => {
        let { channel: t, onClose: n } = e,
            l = (0, N.Ay)(t) ?? "",
            a = (0, c.bG)([U.Ay], () => U.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(u.DUT, {
            onClick: () => {
                (0, j.uh)(Q.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: en.us,
                children: [
                    (0, i.jsx)(u.euF, { src: (0, I.Y)(t), size: u._3J.SIZE_24, "aria-label": l }),
                    (0, i.jsx)("span", { className: en.J2, children: l }),
                    (0, i.jsx)("span", { className: en.Pd, children: r()(Y.default.extractTimestamp(a)).fromNow() }),
                ],
            }),
        });
    },
    ea = (e) => {
        let { onConfirm: t, channelIds: n, ...l } = e,
            a = (0, c.yK)([L.A], () => Array.from(n).map(L.A.getChannel), [n]);
        return (0, i.jsx)(o.Modal, {
            title: et.intl.string(et.t.uFHxNd),
            subtitle: et.intl.string(et.t.rIsSqE),
            actions: [
                { variant: "secondary", text: et.intl.string(et.t["ETE/oC"]), onClick: l.onClose },
                {
                    variant: "primary",
                    text: et.intl.string(et.t.KCNNJu),
                    onClick: () => {
                        t(), l.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                className: en.Jv,
                children: et.intl.string(et.t.cjE7wH),
            }),
            ...l,
            children: a
                .filter(K.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return Y.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(el, { onClose: l.onClose, channel: e }, e.id)),
        });
    };
class es extends l.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0, sectionVisibility: {} };
    static contextType = R.Ay;
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
        B.default.track(Q.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            W._.subscribe(Q.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            W._.subscribe(Q.jej.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        W._.unsubscribe(Q.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            W._.unsubscribe(Q.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
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
        return !G.A.isFriend(n) && !t;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = $.A.getCurrentConfig({ location: "5326c5_1" }, { autoTrackExposure: !1 });
        g.Ay.createInvite(e.id, { max_age: t }, Q.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = H.default.getCurrentUser();
        return null != t && t.isStaff() ? Q.$aF : null != e && e.userLimit > 0 ? e.userLimit : Q.wLU;
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
            l = t.size > 1 || null != e ? et.intl.string(et.t.ZGMNA8) : et.intl.string(et.t["6Urw1t"]);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: l };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            l = 0 === t.size || n < 0;
        return (0, i.jsx)(u.Button, {
            variant: "primary",
            text: et.intl.string(et.t.OYkgVk),
            disabled: l,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        return this.isNotFriends()
            ? et.intl.string(et.t.Xjlbvs)
            : this.isPartyFull()
              ? et.intl.string(et.t.OtTQDz)
              : et.intl.string(et.t.CdNhGX);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t) return et.intl.string(et.t["7orY6K"]);
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = H.default.getUser(t),
                i = null != n ? n.username : "";
            return et.intl.format(et.t["eg+R9x"], { username: i });
        }
        let n = this.getRemaining();
        return n <= 0
            ? et.intl.formatToPlainString(et.t.xYr004, { number: this.getMaxParticipants() })
            : et.intl.formatToPlainString(et.t.HrSDPF, { number: n });
    }
    handleKeyDown(e) {
        let {
                sections: t,
                selectedRow: n,
                selectedSection: i,
                selectedUsers: l,
                results: a,
                query: s,
                inImprovedDMExperiment: r,
            } = this.props,
            { sectionVisibility: o } = this.state,
            { current: c } = this.searchBarRef;
        if (null == c) return;
        let d = n,
            u = i;
        switch (e.key) {
            case ee.dh.BACKSPACE:
                (null == s || 0 === s.length) &&
                    l.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(l.size - 1));
                break;
            case ee.dh.ARROW_DOWN:
                e.preventDefault(),
                    e.stopPropagation(),
                    r
                        ? (++d >= t[u].length &&
                              ((d = 0), u + 1 >= t.length ? (u = !1 !== o[0] ? 0 : u) : !1 !== o[u + 1] && (u += 1)),
                          this.handleSelectionChange(u, d))
                        : (++d >= a.length && (d = 0), this.handleSelectionChange(0, d));
                break;
            case ee.dh.ARROW_UP:
                e.preventDefault(),
                    e.stopPropagation(),
                    r
                        ? (--d < 0 &&
                              (u - 1 < 0
                                  ? (u = !1 !== o[t.length - 1] ? t.length - 1 : u)
                                  : !1 !== o[u - 1] && (u -= 1),
                              (d = t[u].length - 1)),
                          this.handleSelectionChange(u, d))
                        : (--d < 0 && (d = a.length - 1), this.handleSelectionChange(0, d));
                break;
            case ee.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), u === w.A.FRIENDS && a.length > d && this.handleSelect(0, d);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (!t || this.isNotFriends() || this.isPartyFull()) return null;
        let l = [];
        return (
            n.forEach((e) => {
                let t = H.default.getUser(e);
                null != t && l.push({ id: e, label: q.Ay.getName(t) });
            }),
            (0, i.jsxs)("div", {
                className: en.ON,
                children: [
                    (0, i.jsx)(u.ksK, {
                        inputRef: this.searchBarRef,
                        autoFocus: !0,
                        fullWidth: !0,
                        placeholder: 0 === n.size ? et.intl.string(et.t.Wxnb6q) : "",
                        disabled: this.isPartyFull(),
                        value: e,
                        leading: { type: "tags", items: l, onRemove: this.handleRemoveUser },
                        onChange: this.handleQueryChange,
                        onKeyDown: this.handleKeyDown.bind(this),
                    }),
                    this.renderAddUsersButton(),
                ],
            })
        );
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: en.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(u.xpW, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(E.A, { className: en.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: et.intl.format(et.t.xYr004, { number: this.getMaxParticipants() }) })
              : null;
    }
    getListProps() {
        let { query: e, hasFriends: t, results: n, inImprovedDMExperiment: l, sections: a } = this.props;
        if (this.isNotFriends() || !t || this.isPartyFull()) return;
        if (0 === n.length)
            return {
                sections: [1],
                sectionHeight: 0,
                rowHeight: 32,
                renderRow: () =>
                    (0, i.jsx)("div", {
                        className: en.wV,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: et.intl.string(et.t.SV4DJ1),
                        }),
                    }),
            };
        let s = {
            ref: this.scrollerRef,
            className: en.XG,
            innerClassName: en.bv,
            renderRow: this.renderRow,
            onScroll: this.handleScroll,
            paddingTop: 0,
            paddingBottom: 14,
            fade: !0,
            role: void 0,
            innerRole: "listbox",
            innerId: ei,
            innerAriaMultiselectable: !0,
            innerAriaOrientation: "vertical",
        };
        return l
            ? {
                  sections:
                      "" === e ? [a[w.A.FRIENDS]?.length] : [a[w.A.FRIENDS]?.length, a[w.A.GUILD_MEMBERS]?.length],
                  rowHeight: this.getImprovedDMRowHeight,
                  renderSection: this.renderImprovedDMSection,
                  sectionHeight: (e) => (0 === e ? 24 : 36),
                  ...s,
              }
            : {
                  sections: [n.length],
                  rowHeight: this.getRowHeight,
                  renderSection: this.renderSection,
                  sectionHeight: 0,
                  ...s,
              };
    }
    getRowHeight = (e, t) => {
        if (e > 0) return 0;
        let { results: n } = this.props;
        return 48 * (null != n[t]);
    };
    getImprovedDMRowHeight = (e, t) => {
        let { sections: n } = this.props,
            { sectionVisibility: i } = this.state;
        return !1 === i[e] ? 0 : 48 * (null != n[e][t]);
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            {
                inImprovedDMExperiment: l,
                showFriendButton: a,
                sections: s,
                results: r,
                selectedUsers: o,
                selectedRow: c,
                selectedSection: d,
                hideDiscriminator: u,
                isStaffOnlyDM: h,
                channel: m,
                currentUser: A,
            } = this.props,
            { sectionVisibility: p } = this.state;
        if (l) {
            if (!1 === p[t]) return null;
        } else if (t > 0) return null;
        let g = l ? s[t][n] : r[n];
        if (null == g) return null;
        let { user: f, comparator: _ } = g,
            E = o.has(f.id),
            C = t === w.A.FRIENDS && !E && 0 >= this.getRemaining();
        return (0, i.jsx)(
            X.A,
            {
                section: t,
                row: n,
                user: f,
                hideDiscriminator: u,
                comparator: _,
                checked: E,
                disabled: C,
                selected: t === d && n === c,
                onClick: this.handleClick,
                onMessageClick: this.handleMessageClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": n + 1,
                "aria-setsize": r.length,
                numSelected: o.size,
                showFriendButton: l && a,
                staffOverride: ((h || null == m) && f.isStaff() && A?.isStaff()) ?? !1,
                handleTrackAction: this.handleTrackUserRowInteraction,
            },
            f.id,
        );
    };
    renderSection() {
        return null;
    }
    renderImprovedDMSection = (e) => {
        let { section: t } = e,
            { sectionVisibility: n } = this.state;
        return (0, i.jsx)(
            ep,
            {
                section: t,
                heading: t === w.A.FRIENDS ? et.intl.string(et.t.TdEu5X) : et.intl.string(et.t.y29JXs),
                onToggleVisibility: this.handleToggleSectionVisibility,
                isOpen: n[t] ?? !0,
            },
            t === w.A.FRIENDS ? et.intl.string(et.t.TdEu5X) : et.intl.string(et.t.y29JXs),
        );
    };
    handleToggleSectionVisibility = (e) => {
        let { sectionVisibility: t } = this.state;
        this.setState({ sectionVisibility: { ...t, [e]: !(t[e] ?? !0) } });
    };
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: l } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let a = null != t ? (0, b.A)(t.code) : "",
            s = a.length > 0;
        return (0, i.jsx)(u.D0$, {
            label: et.intl.string(et.t.t3O2BR),
            helperText: a.length > 0 ? et.intl.format(et.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(u.e2O, {
                supportsCopy: V.p5,
                placeholder: (0, b.A)(et.intl.string(et.t.lPVBqP)),
                value: s ? (n ? et.intl.string(et.t["6HzNgZ"]) : a) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: s ? (l ? et.intl.string(et.t.q30c5i) : et.intl.string(et.t.OpuAlK)) : et.intl.string(et.t.qzxqUf),
                mode: l ? u.qCr.SUCCESS : u.qCr.DEFAULT,
                onCopy: () => {
                    s ? this.handleCopyInvite(a) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n } = this.props;
        if (this.isNotFriends()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = H.default.getUser(e),
                i = null != n && G.A.getRelationshipType(n.id) === Q.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? et.intl.string(et.t.xMH6vD) : et.intl.string(et.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e)
            return {
                actions: [
                    { variant: "primary", text: et.intl.string(et.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t)
            return {
                actionBarInput:
                    n.size > 1
                        ? (0, i.jsx)(er, {
                              previewIcon: this.state.previewIcon,
                              selectedUsers: n,
                              channelName: this.state.newChannelName,
                              onChange: this.handleChannelNameChange,
                              onIconChange: this.handleIconChange,
                              onIconRemove: this.handleIconRemove,
                          })
                        : void 0,
                actions: [
                    { variant: "secondary", text: et.intl.string(et.t["ETE/oC"]), onClick: this.props.onClose },
                    this.getCreateGroupButtonAction(),
                ],
            };
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let l = this.getInviteLinkFooter();
        return null != l ? { actionBarInput: l } : {};
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
                discordTag: q.Ay.getUserTag(e, { identifiable: "always" }),
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
        let { results: n, sections: i, channel: l, inImprovedDMExperiment: a } = this.props;
        if (null == t || null == e) f.A.clear(l?.id);
        else if (null != n) {
            let l = a ? i[e][t] : n[t];
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
        n && z.A.requestMembers(null, e),
            f.A.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                B.default.track(Q.HAw.SEARCH_USER_LIST_STARTED, {
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
        A.A.openPrivateChannel({ recipientIds: [e], location: x.A.NEW_GROUP_DM_INVITE_MODAL }), t();
    };
    handleAddFriendNavigation = () => {
        p.A.transitionToSection(Q.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
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
            B.default.track(Q.HAw.CREATE_DM_USER_LIST_CLICKED, {
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
                    (null != t.name || null != t.icon) && A.A.updateChannel(e, t, x.A.NEW_GROUP_DM_INVITE_MODAL),
                    B.default.track(Q.HAw.GDM_EDIT_INTERACTED, {
                        channel_id: e,
                        channel_type: Q.rbe.GROUP_DM,
                        location: x.A.NEW_GROUP_DM_INVITE_MODAL,
                        new_name_set: "" !== this.state.newChannelName,
                        new_icon_set: null != this.state.previewIcon,
                    });
            });
    };
    pushToExistingDM = (e, t) => {
        let n = this._searchCounter,
            i = (0, S.dI)(e),
            l = k.A.getChannelId() === e.id;
        A.A.addRecipients(e.id, t, Q.ThZ.ADD_FRIENDS_TO_DM).then((n) => {
            if ((this.props.onComplete?.(n), l)) {
                if (e.isDM() && n !== e.id) return void m.A.call(n, !1, !0);
                m.A.ring(n, t, "dm_invite");
            }
        }),
            B.default.track(Q.HAw.CREATE_DM_USER_LIST_CLICKED, {
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
            let t = em(Array.from(new Set([...e.recipients, ...l])));
            t.size > 0
                ? (0, u.qfG)(
                      (n) => (0, i.jsx)(ea, { ...n, onConfirm: () => this.pushToExistingDM(e, l), channelIds: t }),
                      {},
                      (0, u.TId)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, l);
        } else {
            let e = em(l);
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
        null != n && (0, V.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            B.default.track(Q.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: Q.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
    handleTrackUserRowInteraction = (e, t, n) => {
        let { inImprovedDMExperiment: i, sections: l, results: a } = this.props,
            s = i ? l[e][t] : a[t];
        null != s &&
            B.default.track(Q.HAw.CREATE_DM_USER_ROW_INTERACTED, {
                section: e,
                row: t,
                interaction_type: n,
                affinity_score: D.A.getUserAffinity(s.user.id)?.communicationProbability ?? -1,
            });
    };
}
function er(e) {
    let { selectedUsers: t, channelName: n, previewIcon: l, onIconChange: a, onIconRemove: s, onChange: r } = e,
        { analyticsLocations: o } = (0, T.Ay)(x.A.NEW_GROUP_DM_INVITE_MODAL),
        c = (0, N.Jo)(Array.from(t), H.default, G.A);
    return (0, i.jsxs)("div", {
        className: en.zj,
        children: [
            (0, i.jsx)(y.X, {
                className: en.r9,
                channel: null,
                previewIcon: l,
                onIconChange: a,
                onIconRemove: s,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(u.Text, {
                className: en.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: et.intl.string(et.t.YynaLK),
            }),
            (0, i.jsx)(u.ksK, {
                "aria-label": et.intl.string(et.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: c,
                value: n,
                onChange: r,
            }),
        ],
    });
}
function eo(e) {
    let { channel: t, onComplete: n, ...l } = e,
        a = (0, c.cf)([w.h, P.A, F.A], () => {
            let e;
            return (
                null != t && null != (e = P.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...w.h.getState(),
                    invite: e,
                    hideDiscriminator: F.A.hidePersonalInformation,
                    hideInstantInvites: F.A.hideInstantInvites,
                }
            );
        }),
        s = (0, c.yK)([w.h], () => w.h.getSections()),
        { enabled: r, showFriendButton: o } = J.A.useConfig({ location: "PrivateChannelRecipientsInvite" }),
        d = (0, c.bG)([H.default], () => H.default.getCurrentUser()),
        u = (0, c.bG)(
            [H.default],
            () =>
                !!H.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => H.default.getUser(e)?.isStaff()),
            [t],
        );
    return (0, i.jsx)(es, {
        channel: t,
        currentUser: d,
        isStaffOnlyDM: u,
        inImprovedDMExperiment: r,
        showFriendButton: o,
        sections: s,
        onComplete: n,
        ...l,
        ...a,
    });
}
function ec(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        a = `channel-invite-modal-${t?.id}`,
        s = (0, u.Ry6)(a),
        r = l.useCallback(
            () => (0, u.mMO)(() => Promise.resolve((e) => (0, i.jsx)(eo, { ...e, channel: t })), { modalKey: a }),
            [t, a],
        ),
        o = l.useCallback(() => (s ? (0, u.OoC)(a) : r()), [s, a, r]);
    return (
        l.useEffect(
            () => (
                n && W._.subscribe(Q.jej.TOGGLE_DM_CREATE, o),
                () => {
                    W._.unsubscribe(Q.jej.TOGGLE_DM_CREATE, o);
                }
            ),
            [n, o],
        ),
        (0, C.Ay)(() => {
            (0, M.u)();
        }),
        { showModal: r, toggleVisible: o }
    );
}
function ed(e) {
    let { channel: t, onComplete: n } = e,
        l = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, u.mMO)(() => Promise.resolve((e) => (0, i.jsx)(eo, { ...e, channel: t, onComplete: n })), { modalKey: l });
}
function eu(e) {
    let {
            channel: t,
            iconClassName: n,
            className: a,
            icon: s,
            tooltip: r,
            tooltipPosition: o = "bottom",
            subscribeToGlobalHotkey: d = !1,
        } = e,
        h = l.useRef(null),
        m = s ?? (null == t ? u.ggM : u.DpX),
        { showModal: A } = ec({ channel: t, subscribeToGlobalHotkey: d }),
        p = (0, c.bG)([H.default], () => H.default.getUser(t?.getRecipientId()));
    return p?.bot || p?.isProvisional
        ? null
        : (0, i.jsx)(Z.Ay.Icon, {
              ref: h,
              onClick: A,
              icon: m,
              className: a,
              iconClassName: n,
              tooltip: r,
              tooltipPosition: o,
          });
}
function eh(e) {
    let { channel: t, fullWidth: n = !1, text: a, icon: s, subscribeToGlobalHotkey: r = !1, ...o } = e,
        c = l.useRef(null),
        { showModal: d } = ec({ channel: t, subscribeToGlobalHotkey: r });
    return (0, i.jsx)(u.Button, {
        ...o,
        onClick: d,
        variant: "primary",
        buttonRef: c,
        text: a,
        "aria-label": a,
        icon: s,
        fullWidth: n,
    });
}
function em(e) {
    let t = eA(e);
    return new Set(
        (0, a.chain)(L.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, O.MK)(e.type))
            .filter((e) => eA(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function eA(e) {
    return JSON.stringify(e.sort());
}
function ep(e) {
    let { section: t, heading: n, isOpen: l, onToggleVisibility: a } = e;
    return (0, i.jsxs)(u.DUT, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg",
        },
        className: en.bV,
        onClick: () => a(t),
        children: [
            (0, i.jsx)(u.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, i.jsx)(o.abt, { size: "md", color: "currentColor", className: en.vP }),
        ],
    });
}
