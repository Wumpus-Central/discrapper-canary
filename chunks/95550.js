n.d(t, { Ay: () => eN, Jz: () => eE, NE: () => eb }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(735438),
    r = n(989349),
    a = n.n(r),
    o = n(189213),
    c = n(17928),
    d = n(862482),
    u = n(939249),
    h = n(97808),
    _ = n(778712),
    p = n(834730),
    g = n(821609),
    f = n(292666),
    m = n(187322),
    x = n(452027),
    C = n(109802),
    A = n(231723),
    E = n(192308);
if (21552 == n.j) var N = n(888366);
if (21552 == n.j) var b = n(241541);
var v = n(228366),
    T = n(387755),
    I = n(308528),
    S = n(711950),
    R = n(376728),
    y = n(888906),
    j = n(49229),
    D = n(684136),
    O = n(964486),
    P = n(793574),
    L = n(58149),
    w = n(688810),
    M = n(571694),
    U = n(47167),
    k = n(915089),
    F = n(66442),
    G = n(279208),
    B = n(267102),
    V = n(976860),
    H = n(219271),
    z = n(427358),
    K = n(95701),
    W = n(734057),
    Z = n(958590),
    X = n(584777),
    Y = n(763827),
    q = n(222823),
    J = n(994500),
    Q = n(351906),
    $ = n(287809),
    ee = n(954571),
    et = n(957565),
    en = n(625494),
    el = n(403362),
    ei = n(935208),
    es = n(427262),
    er = n(41e4),
    ea = n(662367),
    eo = n(58736),
    ec = n(286498),
    ed = n(652215),
    eu = n(650583),
    eh = n(985018),
    e_ = n(426057);
let ep = (0, k.Ld)(),
    eg = (e) => {
        let { channel: t, onClose: n } = e,
            i = (0, U.Ay)(t) ?? "",
            s = (0, c.bG)([q.Ay], () => q.Ay.lastMessageId(t.id) ?? t.id);
        return (0, l.jsx)(u.D, {
            onClick: () => {
                (0, V.uh)(ed.ME, t.id), n();
            },
            children: (0, l.jsxs)("div", {
                className: e_.us,
                children: [
                    (0, l.jsx)(h.eu, { src: (0, M.Y)(t), size: _._3.SIZE_24, "aria-label": i }),
                    (0, l.jsx)("span", { className: e_.J2, children: i }),
                    (0, l.jsx)("span", { className: e_.Pd, children: a()(ei.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    ef = (e) => {
        let { onConfirm: t, channelIds: n, ...i } = e,
            s = (0, c.yK)([W.A], () => Array.from(n).map(W.A.getChannel), [n]);
        return (0, l.jsx)(o.Modal, {
            title: eh.intl.string(eh.t.uFHxNd),
            subtitle: eh.intl.string(eh.t.rIsSqE),
            actions: [
                { variant: "secondary", text: eh.intl.string(eh.t["ETE/oC"]), onClick: i.onClose },
                {
                    variant: "primary",
                    text: eh.intl.string(eh.t.KCNNJu),
                    onClick: () => {
                        t(), i.onClose();
                    },
                },
            ],
            input: (0, l.jsx)(p.E, {
                variant: "text-md/normal",
                className: e_.Jv,
                children: eh.intl.string(eh.t.cjE7wH),
            }),
            ...i,
            children: s
                .filter(el.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        l = t.lastMessageId ?? t.id;
                    return ei.default.compare(l, n);
                })
                .map((e) => (0, l.jsx)(eg, { onClose: i.onClose, channel: e }, e.id)),
        });
    };
class em extends i.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0 };
    static contextType = B.Ay;
    copyTimeout;
    scrollerRef = i.createRef();
    searchBarRef = i.createRef();
    _mobileCloseRef = i.createRef();
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
        v.h.wait(() => y.A.open(e?.id));
        let t = (0, L.dI)(e);
        ee.default.track(ed.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            en._.subscribe(ed.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.subscribe(ed.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        en._.unsubscribe(ed.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.unsubscribe(ed.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            v.h.wait(() => y.A.close());
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
        return !J.A.isFriend(n) && !t;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let t = (0, ea.i)({ location: "5326c5_1" });
        R.Ay.createInvite(e.id, { max_age: t }, ed.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = $.default.getCurrentUser();
        return null != t && t.isStaff() ? ed.$aF : null != e && e.userLimit > 0 ? e.userLimit : ed.wLU;
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
            i = t.size > 1 || null != e ? eh.intl.string(eh.t["h1/FMu"]) : eh.intl.string(eh.t.bA875g);
        return { variant: "primary", disabled: l, onClick: this.handleInviteUsers, text: i };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            i = 0 === t.size || n < 0;
        return (0, l.jsx)(g.$, {
            variant: "primary",
            text: eh.intl.string(eh.t.OYkgVk),
            disabled: i,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        if (this.isNotFriends()) return eh.intl.string(eh.t.Xjlbvs);
        if (this.isPartyFull()) return eh.intl.string(eh.t.OtTQDz);
        let { channel: e } = this.props;
        return null == e ? eh.intl.string(eh.t.jD1qzM) : eh.intl.string(e.isMultiUserDM() ? eh.t.AQAPts : eh.t.Xjlbvs);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = $.default.getUser(t),
                        n = null != e ? e.username : "";
                    return eh.intl.format(eh.t["eg+R9x"], { username: n });
                }
            }
            return eh.intl.string(eh.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = $.default.getUser(t),
                l = null != n ? n.username : "";
            return eh.intl.format(eh.t["eg+R9x"], { username: l });
        }
        let n = this.getRemaining();
        return n <= 0
            ? eh.intl.formatToPlainString(eh.t.xYr004, { number: this.getMaxParticipants() })
            : eh.intl.formatToPlainString(eh.t.HrSDPF, { number: n });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, results: l, query: i } = this.props,
            { current: s } = this.searchBarRef;
        if (null == s) return;
        let r = t;
        switch (e.key) {
            case eu.dh.BACKSPACE:
                (null == i || 0 === i.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case eu.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++r >= l.length && (r = 0), this.handleSelectionChange(r);
                break;
            case eu.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --r < 0 && (r = l.length - 1), this.handleSelectionChange(r);
                break;
            case eu.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), l.length > r && this.handleSelect(r);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (!t || this.isNotFriends() || this.isPartyFull()) return null;
        let i = [];
        n.forEach((e) => {
            let t = $.default.getUser(e);
            null != t && i.push({ id: e, label: es.Ay.getName(t) });
        });
        let { results: s, selectedRow: r } = this.props,
            a = s.length > 0;
        return (0, l.jsxs)("div", {
            className: e_.ON,
            children: [
                (0, l.jsx)(f.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    placeholder: 0 === n.size ? eh.intl.string(eh.t.K5e6bn) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: i, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": ep,
                    "aria-expanded": a,
                    "aria-activedescendant": a ? `user-row-${r}` : void 0,
                }),
                this.renderAddUsersButton(),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, l.jsx)("div", {
            className: e_.Lh,
            ref: this._mobileCloseRef,
            children: (0, l.jsx)(m.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, l.jsx)("div", {
                    children: (0, l.jsx)(D.A, { className: e_.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, l.jsx)("div", { children: eh.intl.format(eh.t.xYr004, { number: this.getMaxParticipants() }) })
              : null;
    }
    getListProps() {
        let { hasFriends: e, results: t } = this.props;
        if (!(!e || this.isNotFriends() || this.isPartyFull()))
            return 0 === t.length
                ? {
                      sections: [1],
                      sectionHeight: 0,
                      rowHeight: 32,
                      renderRow: () =>
                          (0, l.jsx)("div", {
                              className: e_.wV,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eh.intl.string(eh.t.z3yXsY),
                              }),
                          }),
                  }
                : {
                      ref: this.scrollerRef,
                      sections: [t.length],
                      className: e_.XG,
                      innerClassName: e_.bv,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                      renderSection: this.renderSection,
                      sectionHeight: 0,
                      onScroll: this.handleScroll,
                      paddingTop: 0,
                      paddingBottom: 14,
                      fade: !0,
                      role: void 0,
                      innerRole: "group",
                      innerId: ep,
                  };
    }
    getRowHeight = (e, t) => {
        if (e > 0) return 0;
        let { results: n } = this.props;
        return 48 * (null != n[t]);
    };
    renderRow = (e) => {
        let { section: t, row: n } = e;
        if (t > 0) return null;
        let { results: i, selectedUsers: s, selectedRow: r, hideDiscriminator: a, channel: o } = this.props,
            c = i[n];
        if (null == c) return null;
        let { user: d, comparator: u } = c,
            h = s.has(d.id) || o?.recipients.includes(d.id),
            _ = (!h && 0 >= this.getRemaining()) || o?.recipients.includes(d.id);
        return (0, l.jsx)(
            ec.A,
            {
                row: n,
                user: d,
                hideDiscriminator: a,
                comparator: u,
                checked: h,
                disabled: _,
                selected: n === r,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": n + 1,
                "aria-setsize": i.length,
            },
            d.id,
        );
    };
    renderSection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: i } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let s = null != t ? (0, G.A)(t.code) : "",
            r = s.length > 0;
        return (0, l.jsx)(x.D, {
            label: eh.intl.string(eh.t.t3O2BR),
            helperText: s.length > 0 ? eh.intl.format(eh.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, l.jsx)(C.e, {
                supportsCopy: et.p5,
                placeholder: (0, G.A)(eh.intl.string(eh.t.lPVBqP)),
                value: r ? (n ? eh.intl.string(eh.t["6HzNgZ"]) : s) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: r ? (i ? eh.intl.string(eh.t.q30c5i) : eh.intl.string(eh.t.OpuAlK)) : eh.intl.string(eh.t.qzxqUf),
                mode: i ? C.q.SUCCESS : C.q.DEFAULT,
                onCopy: () => {
                    r ? this.handleCopyInvite(s) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n, addToDMUpdatesEnabled: i } = this.props;
        if (this.isNotFriends()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = $.default.getUser(e),
                l = null != n && J.A.getRelationshipType(n.id) === ed.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: l ? eh.intl.string(eh.t.xMH6vD) : eh.intl.string(eh.t["PMsq/b"]),
                        disabled: l,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e)
            return {
                actions: [
                    { variant: "primary", text: eh.intl.string(eh.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t || (t.isDM() && i))
            return {
                actionBarInput:
                    null != t || n.size > 1
                        ? (0, l.jsx)(ex, {
                              previewIcon: this.state.previewIcon,
                              selectedUsers: n,
                              channelName: this.state.newChannelName,
                              onChange: this.handleChannelNameChange,
                              onIconChange: this.handleIconChange,
                              onIconRemove: this.handleIconRemove,
                          })
                        : void 0,
                actions: [
                    { variant: "secondary", text: eh.intl.string(eh.t["ETE/oC"]), onClick: this.props.onClose },
                    this.getCreateGroupButtonAction(),
                ],
            };
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let s = this.getInviteLinkFooter();
        return null != s ? { actionBarInput: s } : {};
    }
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { actionBarInput: n, actions: i } = this.getFooterProps();
        return (0, l.jsx)(o.Modal, {
            transitionState: e ?? A.ip.ENTERED,
            onClose: async () => await t(),
            title: this.getTitle(),
            subtitle: this.getSubtitle(),
            input: this.renderSearchBar() ?? void 0,
            actionBarInput: n,
            listProps: this.getListProps(),
            actions: i ?? [],
            children: this.renderBody(),
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            j.A.sendRequest({
                discordTag: es.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        y.A.select(e);
    };
    handleSelect = (e) => {
        let { results: t, channel: n } = this.props;
        if (null == e) y.A.clear(n?.id);
        else if (null != t) {
            let n = t[e];
            this.handleClick(n.user.id);
        }
    };
    handleSelectionChange = (e) => {
        y.A.select(e);
        let t = this.scrollerRef.current;
        null != t && t.scrollToIndex({ section: 0, row: e, padding: 8 });
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, L.dI)(t);
        y.A.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                ee.default.track(ed.HAw.SEARCH_USER_LIST_STARTED, {
                    ...n,
                    entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                    entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                    search_query_length: e.length,
                }),
                    this._searchCounter++;
            }, 500));
    };
    handleRemoveTag = (e) => {
        let t = Array.from(this.props.selectedUsers);
        y.A.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            y.A.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: l } = this.props;
        l?.recipients.includes(e) ||
            (t.has(e)
                ? y.A.removeUser(e)
                : this.getRemaining() > 0 && (y.A.addUser(e), n.length > 0 && (y.A.clear(l?.id), this.forceFocus())));
    };
    handleAddFriendNavigation = () => {
        S.A.transitionToSection(ed.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
    };
    handleScroll = () => {
        let e = this.scrollerRef.current;
        null != e && this.setState({ separator: !e.isScrolledToTop() });
    };
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                let t = z.A.getUserAffinity(e);
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
    updateGDM = (e, t) => {
        let n = {};
        "" !== this.state.newChannelName && (n.name = this.state.newChannelName),
            null != this.state.previewIcon && (n.icon = this.state.previewIcon),
            (null != n.name || null != n.icon) && I.A.updateChannel(e, n, t),
            ee.default.track(ed.HAw.GDM_EDIT_INTERACTED, {
                channel_id: e,
                channel_type: ed.rbe.GROUP_DM,
                location: t,
                new_name_set: "" !== this.state.newChannelName,
                new_icon_set: null != this.state.previewIcon,
            });
    };
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            l = (0, L.dI)(n),
            i = !0;
        1 === e.length && (i = null == I.A._openCachedDMChannel(e[0])),
            ee.default.track(ed.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...l,
                is_new_dm: i,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: e,
                num_searches: t,
                affinity_score: this._getUserAffinities(e).affinities,
                name_is_set: "" !== this.state.newChannelName,
                icon_is_set: null != this.state.previewIcon,
            }),
            I.A.openPrivateChannel({ recipientIds: e, location: "New Group DM" }).then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, P.A.NEW_GROUP_DM_INVITE_MODAL);
            });
    };
    pushToExistingDM = (e, t) => {
        let { addToDMUpdatesEnabled: n } = this.props,
            l = this._searchCounter,
            i = (0, L.dI)(e),
            s = Y.A.getChannelId() === e.id;
        I.A.addRecipients(e.id, t, ed.ThZ.ADD_FRIENDS_TO_DM).then((l) => {
            if ((this.props.onComplete?.(l), n && this.updateGDM(l, ed.ThZ.ADD_FRIENDS_TO_DM), s)) {
                if (e.isDM() && l !== e.id) return void T.A.call(l, !1, !0);
                T.A.ring(l, t, "dm_invite");
            }
        }),
            ee.default.track(ed.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...i,
                is_new_dm: !0,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: t,
                num_searches: l,
                affinity_score: this._getUserAffinities(t).affinities,
            });
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            i = Array.from(t);
        if (null != e) {
            let t = ev(Array.from(new Set([...e.recipients, ...i])));
            t.size > 0
                ? (0, E.openModal)(
                      (n) => (0, l.jsx)(ef, { ...n, onConfirm: () => this.pushToExistingDM(e, i), channelIds: t }),
                      {},
                      (0, E.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, i);
        } else {
            let e = ev(i);
            i.length > 1 && e.size > 0
                ? (0, E.openModal)(
                      (t) => (0, l.jsx)(ef, { ...t, onConfirm: () => this.createNewDM(i), channelIds: e }),
                      {},
                      (0, E.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(i);
        }
        n();
    };
    handleCopyInvite = (e) => {
        let { channel: t, invite: n } = this.props;
        null != n && (0, et.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            ee.default.track(ed.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: ed.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function ex(e) {
    let { selectedUsers: t, channelName: n, previewIcon: i, onIconChange: s, onIconRemove: r, onChange: a } = e,
        { analyticsLocations: o } = (0, w.Ay)(P.A.NEW_GROUP_DM_INVITE_MODAL),
        c = (0, U.Jo)(Array.from(t), $.default, J.A);
    return (0, l.jsxs)("div", {
        className: e_.zj,
        children: [
            (0, l.jsx)(F.X, {
                className: e_.r9,
                channel: null,
                previewIcon: i,
                onIconChange: s,
                onIconRemove: r,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, l.jsx)(p.E, {
                className: e_.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: eh.intl.string(eh.t.YynaLK),
            }),
            (0, l.jsx)(f.k, {
                "aria-label": eh.intl.string(eh.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: c,
                value: n,
                onChange: a,
            }),
        ],
    });
}
function eC(e) {
    let { channel: t, onComplete: n, ...i } = e,
        s = (0, c.cf)([X.A, Z.A, Q.A], () => {
            let e;
            return (
                null != t && null != (e = Z.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...X.A.getState(),
                    invite: e,
                    hideDiscriminator: Q.A.hidePersonalInformation,
                    hideInstantInvites: Q.A.hideInstantInvites,
                }
            );
        }),
        r = (0, c.bG)(
            [$.default],
            () =>
                !!$.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => $.default.getUser(e)?.isStaff()),
            [t],
        ),
        { enabled: a } = er.A.useConfig({
            location: t?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
        });
    return (0, l.jsx)(em, {
        channel: t,
        isStaffOnlyDM: r,
        onComplete: n,
        addToDMUpdatesEnabled: !!(t?.isDM() && a),
        ...i,
        ...s,
    });
}
function eA(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        r = (0, E.useHasModalOpen)(s),
        a = i.useCallback(
            () =>
                (0, E.openModalLazy)(() => Promise.resolve((e) => (0, l.jsx)(eC, { ...e, channel: t })), {
                    modalKey: s,
                }),
            [t, s],
        ),
        o = i.useCallback(() => (r ? (0, E.closeModal)(s) : a()), [r, s, a]);
    return (
        i.useEffect(
            () => (
                n && en._.subscribe(ed.jej.TOGGLE_DM_CREATE, o),
                () => {
                    en._.unsubscribe(ed.jej.TOGGLE_DM_CREATE, o);
                }
            ),
            [n, o],
        ),
        (0, O.Ay)(() => {
            (0, H.u)();
        }),
        { showModal: a, toggleVisible: o }
    );
}
function eE(e) {
    let { channel: t, onComplete: n } = e,
        i = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, E.openModalLazy)(() => Promise.resolve((e) => (0, l.jsx)(eC, { ...e, channel: t, onComplete: n })), {
        modalKey: i,
    });
}
function eN(e) {
    let {
            channel: t,
            iconClassName: n,
            className: s,
            icon: r,
            tooltip: a,
            tooltipPosition: o = "bottom",
            subscribeToGlobalHotkey: d = !1,
        } = e,
        u = i.useRef(null),
        h = r ?? (null == t ? N.g : b.D),
        { showModal: _ } = eA({ channel: t, subscribeToGlobalHotkey: d }),
        p = (0, c.bG)([$.default], () => $.default.getUser(t?.getRecipientId()));
    return p?.bot || p?.isProvisional
        ? null
        : (0, l.jsx)(eo.Ay.Icon, {
              ref: u,
              onClick: _,
              icon: h,
              className: s,
              iconClassName: n,
              tooltip: a,
              tooltipPosition: o,
          });
}
function eb(e) {
    let { channel: t, fullWidth: n = !1, text: s, icon: r, subscribeToGlobalHotkey: a = !1, ...o } = e,
        c = i.useRef(null),
        { showModal: d } = eA({ channel: t, subscribeToGlobalHotkey: a });
    return (0, l.jsx)(g.$, {
        ...o,
        onClick: d,
        variant: "primary",
        buttonRef: c,
        text: s,
        "aria-label": s,
        icon: r,
        fullWidth: n,
    });
}
function ev(e) {
    let t = eT(e);
    return new Set(
        (0, s.chain)(W.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, K.MK)(e.type))
            .filter((e) => eT(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function eT(e) {
    return JSON.stringify(e.sort());
}
