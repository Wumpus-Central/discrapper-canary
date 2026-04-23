n.d(t, { Ay: () => ef, Jz: () => eN, NE: () => e_ }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(989349),
    r = n.n(a),
    o = n(189213),
    c = n(17928),
    d = n(862482),
    u = n(939249),
    h = n(97808),
    g = n(778712),
    m = n(834730),
    A = n(821609),
    p = n(292666),
    C = n(187322),
    E = n(452027),
    x = n(109802),
    N = n(231723),
    f = n(192308);
if (21552 == n.j) var _ = n(888366);
if (21552 == n.j) var T = n(241541);
var v = n(228366),
    I = n(387755),
    S = n(308528),
    j = n(711950),
    y = n(376728),
    R = n(888906),
    P = n(49229),
    O = n(684136),
    D = n(964486),
    b = n(793574),
    M = n(58149),
    L = n(688810),
    w = n(571694),
    U = n(47167),
    G = n(915089),
    k = n(66442),
    F = n(279208),
    V = n(267102),
    H = n(976860),
    B = n(219271),
    z = n(427358),
    W = n(95701),
    K = n(734057),
    J = n(958590),
    Z = n(584777),
    X = n(763827),
    Y = n(222823),
    q = n(994500),
    $ = n(351906),
    Q = n(287809),
    ee = n(954571),
    et = n(957565),
    en = n(625494),
    el = n(403362),
    ei = n(935208),
    es = n(427262),
    ea = n(662367),
    er = n(58736),
    eo = n(286498),
    ec = n(652215),
    ed = n(650583),
    eu = n(985018),
    eh = n(426057);
let eg = (0, G.Ld)(),
    em = (e) => {
        let { channel: t, onClose: n } = e,
            i = (0, U.Ay)(t) ?? "",
            s = (0, c.bG)([Y.Ay], () => Y.Ay.lastMessageId(t.id) ?? t.id);
        return (0, l.jsx)(u.D, {
            onClick: () => {
                (0, H.uh)(ec.ME, t.id), n();
            },
            children: (0, l.jsxs)("div", {
                className: eh.us,
                children: [
                    (0, l.jsx)(h.eu, { src: (0, w.Y)(t), size: g._3.SIZE_24, "aria-label": i }),
                    (0, l.jsx)("span", { className: eh.J2, children: i }),
                    (0, l.jsx)("span", { className: eh.Pd, children: r()(ei.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    eA = (e) => {
        let { onConfirm: t, channelIds: n, ...i } = e,
            s = (0, c.yK)([K.A], () => Array.from(n).map(K.A.getChannel), [n]);
        return (0, l.jsx)(o.Modal, {
            title: eu.intl.string(eu.t.uFHxNd),
            subtitle: eu.intl.string(eu.t.rIsSqE),
            actions: [
                { variant: "secondary", text: eu.intl.string(eu.t["ETE/oC"]), onClick: i.onClose },
                {
                    variant: "primary",
                    text: eu.intl.string(eu.t.KCNNJu),
                    onClick: () => {
                        t(), i.onClose();
                    },
                },
            ],
            input: (0, l.jsx)(m.E, {
                variant: "text-md/normal",
                className: eh.Jv,
                children: eu.intl.string(eu.t.cjE7wH),
            }),
            ...i,
            children: s
                .filter(el.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        l = t.lastMessageId ?? t.id;
                    return ei.default.compare(l, n);
                })
                .map((e) => (0, l.jsx)(em, { onClose: i.onClose, channel: e }, e.id)),
        });
    };
class ep extends i.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0 };
    static contextType = V.Ay;
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
        v.h.wait(() => R.A.open(e?.id));
        let t = (0, M.dI)(e);
        ee.default.track(ec.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            en._.subscribe(ec.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.subscribe(ec.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        en._.unsubscribe(ec.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.unsubscribe(ec.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            v.h.wait(() => R.A.close());
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
        return !q.A.isFriend(n) && !t;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let t = (0, ea.i)({ location: "5326c5_1" });
        y.Ay.createInvite(e.id, { max_age: t }, ec.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = Q.default.getCurrentUser();
        return null != t && t.isStaff() ? ec.$aF : null != e && e.userLimit > 0 ? e.userLimit : ec.wLU;
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
            i = t.size > 1 || null != e ? eu.intl.string(eu.t["h1/FMu"]) : eu.intl.string(eu.t.bA875g);
        return { variant: "primary", disabled: l, onClick: this.handleInviteUsers, text: i };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            i = 0 === t.size || n < 0;
        return (0, l.jsx)(A.$, {
            variant: "primary",
            text: eu.intl.string(eu.t.OYkgVk),
            disabled: i,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        if (this.isNotFriends()) return eu.intl.string(eu.t.Xjlbvs);
        if (this.isPartyFull()) return eu.intl.string(eu.t.OtTQDz);
        let { channel: e } = this.props;
        return null == e ? eu.intl.string(eu.t.jD1qzM) : eu.intl.string(e.isMultiUserDM() ? eu.t.AQAPts : eu.t.Xjlbvs);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = Q.default.getUser(t),
                        n = null != e ? e.username : "";
                    return eu.intl.format(eu.t["eg+R9x"], { username: n });
                }
            }
            return eu.intl.string(eu.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = Q.default.getUser(t),
                l = null != n ? n.username : "";
            return eu.intl.format(eu.t["eg+R9x"], { username: l });
        }
        let n = this.getRemaining();
        return n <= 0
            ? eu.intl.formatToPlainString(eu.t.xYr004, { number: this.getMaxParticipants() })
            : eu.intl.formatToPlainString(eu.t.HrSDPF, { number: n });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, results: l, query: i } = this.props,
            { current: s } = this.searchBarRef;
        if (null == s) return;
        let a = t;
        switch (e.key) {
            case ed.dh.BACKSPACE:
                (null == i || 0 === i.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case ed.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++a >= l.length && (a = 0), this.handleSelectionChange(a);
                break;
            case ed.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --a < 0 && (a = l.length - 1), this.handleSelectionChange(a);
                break;
            case ed.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), l.length > a && this.handleSelect(a);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (!t || this.isNotFriends() || this.isPartyFull()) return null;
        let i = [];
        n.forEach((e) => {
            let t = Q.default.getUser(e);
            null != t && i.push({ id: e, label: es.Ay.getName(t) });
        });
        let { results: s, selectedRow: a } = this.props,
            r = s.length > 0;
        return (0, l.jsxs)("div", {
            className: eh.ON,
            children: [
                (0, l.jsx)(p.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    placeholder: 0 === n.size ? eu.intl.string(eu.t.K5e6bn) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: i, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": eg,
                    "aria-expanded": r,
                    "aria-activedescendant": r ? `user-row-${a}` : void 0,
                }),
                this.renderAddUsersButton(),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, l.jsx)("div", {
            className: eh.Lh,
            ref: this._mobileCloseRef,
            children: (0, l.jsx)(C.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, l.jsx)("div", {
                    children: (0, l.jsx)(O.A, { className: eh.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, l.jsx)("div", { children: eu.intl.format(eu.t.xYr004, { number: this.getMaxParticipants() }) })
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
                              className: eh.wV,
                              children: (0, l.jsx)(m.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eu.intl.string(eu.t.z3yXsY),
                              }),
                          }),
                  }
                : {
                      ref: this.scrollerRef,
                      sections: [t.length],
                      className: eh.XG,
                      innerClassName: eh.bv,
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
                      innerId: eg,
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
        let { results: i, selectedUsers: s, selectedRow: a, hideDiscriminator: r } = this.props,
            o = i[n];
        if (null == o) return null;
        let { user: c, comparator: d } = o,
            u = s.has(c.id),
            h = !u && 0 >= this.getRemaining();
        return (0, l.jsx)(
            eo.A,
            {
                row: n,
                user: c,
                hideDiscriminator: r,
                comparator: d,
                checked: u,
                disabled: h,
                selected: n === a,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": n + 1,
                "aria-setsize": i.length,
            },
            c.id,
        );
    };
    renderSection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: i } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let s = null != t ? (0, F.A)(t.code) : "",
            a = s.length > 0;
        return (0, l.jsx)(E.D, {
            label: eu.intl.string(eu.t.t3O2BR),
            helperText: s.length > 0 ? eu.intl.format(eu.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, l.jsx)(x.e, {
                supportsCopy: et.p5,
                placeholder: (0, F.A)(eu.intl.string(eu.t.lPVBqP)),
                value: a ? (n ? eu.intl.string(eu.t["6HzNgZ"]) : s) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: a ? (i ? eu.intl.string(eu.t.q30c5i) : eu.intl.string(eu.t.OpuAlK)) : eu.intl.string(eu.t.qzxqUf),
                mode: i ? x.q.SUCCESS : x.q.DEFAULT,
                onCopy: () => {
                    a ? this.handleCopyInvite(s) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n } = this.props;
        if (this.isNotFriends()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = Q.default.getUser(e),
                l = null != n && q.A.getRelationshipType(n.id) === ec.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: l ? eu.intl.string(eu.t.xMH6vD) : eu.intl.string(eu.t["PMsq/b"]),
                        disabled: l,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e)
            return {
                actions: [
                    { variant: "primary", text: eu.intl.string(eu.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t)
            return {
                actionBarInput:
                    n.size > 1
                        ? (0, l.jsx)(eC, {
                              previewIcon: this.state.previewIcon,
                              selectedUsers: n,
                              channelName: this.state.newChannelName,
                              onChange: this.handleChannelNameChange,
                              onIconChange: this.handleIconChange,
                              onIconRemove: this.handleIconRemove,
                          })
                        : void 0,
                actions: [
                    { variant: "secondary", text: eu.intl.string(eu.t["ETE/oC"]), onClick: this.props.onClose },
                    this.getCreateGroupButtonAction(),
                ],
            };
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let i = this.getInviteLinkFooter();
        return null != i ? { actionBarInput: i } : {};
    }
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { actionBarInput: n, actions: i } = this.getFooterProps();
        return (0, l.jsx)(o.Modal, {
            transitionState: e ?? N.ip.ENTERED,
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
            P.A.sendRequest({
                discordTag: es.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        R.A.select(e);
    };
    handleSelect = (e) => {
        let { results: t, channel: n } = this.props;
        if (null == e) R.A.clear(n?.id);
        else if (null != t) {
            let n = t[e];
            this.handleClick(n.user.id);
        }
    };
    handleSelectionChange = (e) => {
        R.A.select(e);
        let t = this.scrollerRef.current;
        null != t && t.scrollToIndex({ section: 0, row: e, padding: 8 });
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, M.dI)(t);
        R.A.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                ee.default.track(ec.HAw.SEARCH_USER_LIST_STARTED, {
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
        R.A.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            R.A.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: l } = this.props;
        t.has(e)
            ? R.A.removeUser(e)
            : this.getRemaining() > 0 && (R.A.addUser(e), n.length > 0 && (R.A.clear(l?.id), this.forceFocus()));
    };
    handleAddFriendNavigation = () => {
        j.A.transitionToSection(ec.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
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
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            l = (0, M.dI)(n),
            i = !0;
        1 === e.length && (i = null == S.A._openCachedDMChannel(e[0])),
            ee.default.track(ec.HAw.CREATE_DM_USER_LIST_CLICKED, {
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
            S.A.openPrivateChannel({ recipientIds: e, location: "New Group DM" }).then((e) => {
                this.props.onComplete?.(e);
                let t = {};
                "" !== this.state.newChannelName && (t.name = this.state.newChannelName),
                    null != this.state.previewIcon && (t.icon = this.state.previewIcon),
                    (null != t.name || null != t.icon) && S.A.updateChannel(e, t, b.A.NEW_GROUP_DM_INVITE_MODAL),
                    ee.default.track(ec.HAw.GDM_EDIT_INTERACTED, {
                        channel_id: e,
                        channel_type: ec.rbe.GROUP_DM,
                        location: b.A.NEW_GROUP_DM_INVITE_MODAL,
                        new_name_set: "" !== this.state.newChannelName,
                        new_icon_set: null != this.state.previewIcon,
                    });
            });
    };
    pushToExistingDM = (e, t) => {
        let n = this._searchCounter,
            l = (0, M.dI)(e),
            i = X.A.getChannelId() === e.id;
        S.A.addRecipients(e.id, t, ec.ThZ.ADD_FRIENDS_TO_DM).then((n) => {
            if ((this.props.onComplete?.(n), i)) {
                if (e.isDM() && n !== e.id) return void I.A.call(n, !1, !0);
                I.A.ring(n, t, "dm_invite");
            }
        }),
            ee.default.track(ec.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...l,
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
            i = Array.from(t);
        if (null != e) {
            let t = eT(Array.from(new Set([...e.recipients, ...i])));
            t.size > 0
                ? (0, f.openModal)(
                      (n) => (0, l.jsx)(eA, { ...n, onConfirm: () => this.pushToExistingDM(e, i), channelIds: t }),
                      {},
                      (0, f.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, i);
        } else {
            let e = eT(i);
            i.length > 1 && e.size > 0
                ? (0, f.openModal)(
                      (t) => (0, l.jsx)(eA, { ...t, onConfirm: () => this.createNewDM(i), channelIds: e }),
                      {},
                      (0, f.modalContextFromAppContext)(this.context.appContext),
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
            ee.default.track(ec.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: ec.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function eC(e) {
    let { selectedUsers: t, channelName: n, previewIcon: i, onIconChange: s, onIconRemove: a, onChange: r } = e,
        { analyticsLocations: o } = (0, L.Ay)(b.A.NEW_GROUP_DM_INVITE_MODAL),
        c = (0, U.Jo)(Array.from(t), Q.default, q.A);
    return (0, l.jsxs)("div", {
        className: eh.zj,
        children: [
            (0, l.jsx)(k.X, {
                className: eh.r9,
                channel: null,
                previewIcon: i,
                onIconChange: s,
                onIconRemove: a,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, l.jsx)(m.E, {
                className: eh.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: eu.intl.string(eu.t.YynaLK),
            }),
            (0, l.jsx)(p.k, {
                "aria-label": eu.intl.string(eu.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: c,
                value: n,
                onChange: r,
            }),
        ],
    });
}
function eE(e) {
    let { channel: t, onComplete: n, ...i } = e,
        s = (0, c.cf)([Z.A, J.A, $.A], () => {
            let e;
            return (
                null != t && null != (e = J.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...Z.A.getState(),
                    invite: e,
                    hideDiscriminator: $.A.hidePersonalInformation,
                    hideInstantInvites: $.A.hideInstantInvites,
                }
            );
        }),
        a = (0, c.bG)(
            [Q.default],
            () =>
                !!Q.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => Q.default.getUser(e)?.isStaff()),
            [t],
        );
    return (0, l.jsx)(ep, { channel: t, isStaffOnlyDM: a, onComplete: n, ...i, ...s });
}
function ex(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        a = (0, f.useHasModalOpen)(s),
        r = i.useCallback(
            () =>
                (0, f.openModalLazy)(() => Promise.resolve((e) => (0, l.jsx)(eE, { ...e, channel: t })), {
                    modalKey: s,
                }),
            [t, s],
        ),
        o = i.useCallback(() => (a ? (0, f.closeModal)(s) : r()), [a, s, r]);
    return (
        i.useEffect(
            () => (
                n && en._.subscribe(ec.jej.TOGGLE_DM_CREATE, o),
                () => {
                    en._.unsubscribe(ec.jej.TOGGLE_DM_CREATE, o);
                }
            ),
            [n, o],
        ),
        (0, D.Ay)(() => {
            (0, B.u)();
        }),
        { showModal: r, toggleVisible: o }
    );
}
function eN(e) {
    let { channel: t, onComplete: n } = e,
        i = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, f.openModalLazy)(() => Promise.resolve((e) => (0, l.jsx)(eE, { ...e, channel: t, onComplete: n })), {
        modalKey: i,
    });
}
function ef(e) {
    let {
            channel: t,
            iconClassName: n,
            className: s,
            icon: a,
            tooltip: r,
            tooltipPosition: o = "bottom",
            subscribeToGlobalHotkey: d = !1,
        } = e,
        u = i.useRef(null),
        h = a ?? (null == t ? _.g : T.D),
        { showModal: g } = ex({ channel: t, subscribeToGlobalHotkey: d }),
        m = (0, c.bG)([Q.default], () => Q.default.getUser(t?.getRecipientId()));
    return m?.bot || m?.isProvisional
        ? null
        : (0, l.jsx)(er.Ay.Icon, {
              ref: u,
              onClick: g,
              icon: h,
              className: s,
              iconClassName: n,
              tooltip: r,
              tooltipPosition: o,
          });
}
function e_(e) {
    let { channel: t, fullWidth: n = !1, text: s, icon: a, subscribeToGlobalHotkey: r = !1, ...o } = e,
        c = i.useRef(null),
        { showModal: d } = ex({ channel: t, subscribeToGlobalHotkey: r });
    return (0, l.jsx)(A.$, {
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
function eT(e) {
    let t = ev(e);
    return new Set(
        (0, s.chain)(K.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, W.MK)(e.type))
            .filter((e) => ev(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function ev(e) {
    return JSON.stringify(e.sort());
}
