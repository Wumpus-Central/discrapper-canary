n.d(t, { Ay: () => ex, Jz: () => eC, NE: () => eS }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n(989349),
    r = n.n(s),
    o = n(189213),
    c = n(311907),
    d = n(862482),
    u = n(939249),
    h = n(97808),
    m = n(778712),
    A = n(834730),
    g = n(821609),
    p = n(292666),
    _ = n(187322),
    f = n(452027),
    E = n(109802),
    C = n(231723),
    x = n(192308);
if (21552 == n.j) var S = n(888366);
if (21552 == n.j) var I = n(241541);
var N = n(73153),
    v = n(387755),
    T = n(308528),
    y = n(711950),
    b = n(846293),
    j = n(888906),
    R = n(49229),
    M = n(684136),
    L = n(964486),
    D = n(793574),
    P = n(58149),
    O = n(688810),
    w = n(571694),
    U = n(47167),
    k = n(915089),
    G = n(66442),
    F = n(279208),
    H = n(267102),
    B = n(976860),
    V = n(219271),
    z = n(21119),
    K = n(95701),
    W = n(734057),
    Y = n(958590),
    J = n(584777),
    q = n(383501),
    $ = n(222823),
    Z = n(994500),
    X = n(351906),
    Q = n(287809),
    ee = n(954571),
    et = n(957565),
    en = n(203982),
    ei = n(403362),
    el = n(661191),
    ea = n(427262),
    es = n(662367),
    er = n(58736),
    eo = n(286498),
    ec = n(652215),
    ed = n(650583),
    eu = n(985018),
    eh = n(203785);
let em = (0, k.Ld)(),
    eA = (e) => {
        let { channel: t, onClose: n } = e,
            l = (0, U.Ay)(t) ?? "",
            a = (0, c.bG)([$.Ay], () => $.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(u.D, {
            onClick: () => {
                (0, B.uh)(ec.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: eh.us,
                children: [
                    (0, i.jsx)(h.eu, { src: (0, w.Y)(t), size: m._3.SIZE_24, "aria-label": l }),
                    (0, i.jsx)("span", { className: eh.J2, children: l }),
                    (0, i.jsx)("span", { className: eh.Pd, children: r()(el.default.extractTimestamp(a)).fromNow() }),
                ],
            }),
        });
    },
    eg = (e) => {
        let { onConfirm: t, channelIds: n, ...l } = e,
            a = (0, c.yK)([W.A], () => Array.from(n).map(W.A.getChannel), [n]);
        return (0, i.jsx)(o.Modal, {
            title: eu.intl.string(eu.t.uFHxNd),
            subtitle: eu.intl.string(eu.t.rIsSqE),
            actions: [
                { variant: "secondary", text: eu.intl.string(eu.t["ETE/oC"]), onClick: l.onClose },
                {
                    variant: "primary",
                    text: eu.intl.string(eu.t.KCNNJu),
                    onClick: () => {
                        t(), l.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(A.E, {
                variant: "text-md/normal",
                className: eh.Jv,
                children: eu.intl.string(eu.t.cjE7wH),
            }),
            ...l,
            children: a
                .filter(ei.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return el.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(eA, { onClose: l.onClose, channel: e }, e.id)),
        });
    };
class ep extends l.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0 };
    static contextType = H.Ay;
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
        N.h.wait(() => j.A.open(e?.id));
        let t = (0, P.dI)(e);
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
            N.h.wait(() => j.A.close());
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
        return !Z.A.isFriend(n) && !t;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let t = (0, es.i)({ location: "5326c5_1" });
        b.Ay.createInvite(e.id, { max_age: t }, ec.PE1.GROUP_DM);
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
            i = (null != e && 0 === t.size) || n < 0,
            l = t.size > 1 || null != e ? eu.intl.string(eu.t["h1/FMu"]) : eu.intl.string(eu.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: l };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            l = 0 === t.size || n < 0;
        return (0, i.jsx)(g.$, {
            variant: "primary",
            text: eu.intl.string(eu.t.OYkgVk),
            disabled: l,
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
                i = null != n ? n.username : "";
            return eu.intl.format(eu.t["eg+R9x"], { username: i });
        }
        let n = this.getRemaining();
        return n <= 0
            ? eu.intl.formatToPlainString(eu.t.xYr004, { number: this.getMaxParticipants() })
            : eu.intl.formatToPlainString(eu.t.HrSDPF, { number: n });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, results: i, query: l } = this.props,
            { current: a } = this.searchBarRef;
        if (null == a) return;
        let s = t;
        switch (e.key) {
            case ed.dh.BACKSPACE:
                (null == l || 0 === l.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case ed.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++s >= i.length && (s = 0), this.handleSelectionChange(s);
                break;
            case ed.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --s < 0 && (s = i.length - 1), this.handleSelectionChange(s);
                break;
            case ed.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), i.length > s && this.handleSelect(s);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (!t || this.isNotFriends() || this.isPartyFull()) return null;
        let l = [];
        n.forEach((e) => {
            let t = Q.default.getUser(e);
            null != t && l.push({ id: e, label: ea.Ay.getName(t) });
        });
        let { results: a, selectedRow: s } = this.props,
            r = a.length > 0;
        return (0, i.jsxs)("div", {
            className: eh.ON,
            children: [
                (0, i.jsx)(p.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    placeholder: 0 === n.size ? eu.intl.string(eu.t.K5e6bn) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: l, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": em,
                    "aria-expanded": r,
                    "aria-activedescendant": r ? `user-row-${s}` : void 0,
                }),
                this.renderAddUsersButton(),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: eh.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(_.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(M.A, { className: eh.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: eu.intl.format(eu.t.xYr004, { number: this.getMaxParticipants() }) })
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
                          (0, i.jsx)("div", {
                              className: eh.wV,
                              children: (0, i.jsx)(A.E, {
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
                      innerId: em,
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
        let { results: l, selectedUsers: a, selectedRow: s, hideDiscriminator: r } = this.props,
            o = l[n];
        if (null == o) return null;
        let { user: c, comparator: d } = o,
            u = a.has(c.id),
            h = !u && 0 >= this.getRemaining();
        return (0, i.jsx)(
            eo.A,
            {
                row: n,
                user: c,
                hideDiscriminator: r,
                comparator: d,
                checked: u,
                disabled: h,
                selected: n === s,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": n + 1,
                "aria-setsize": l.length,
            },
            c.id,
        );
    };
    renderSection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: l } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let a = null != t ? (0, F.A)(t.code) : "",
            s = a.length > 0;
        return (0, i.jsx)(f.D, {
            label: eu.intl.string(eu.t.t3O2BR),
            helperText: a.length > 0 ? eu.intl.format(eu.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(E.e, {
                supportsCopy: et.p5,
                placeholder: (0, F.A)(eu.intl.string(eu.t.lPVBqP)),
                value: s ? (n ? eu.intl.string(eu.t["6HzNgZ"]) : a) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: s ? (l ? eu.intl.string(eu.t.q30c5i) : eu.intl.string(eu.t.OpuAlK)) : eu.intl.string(eu.t.qzxqUf),
                mode: l ? E.q.SUCCESS : E.q.DEFAULT,
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
            let n = Q.default.getUser(e),
                i = null != n && Z.A.getRelationshipType(n.id) === ec.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? eu.intl.string(eu.t.xMH6vD) : eu.intl.string(eu.t["PMsq/b"]),
                        disabled: i,
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
                        ? (0, i.jsx)(e_, {
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
        let l = this.getInviteLinkFooter();
        return null != l ? { actionBarInput: l } : {};
    }
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { actionBarInput: n, actions: l } = this.getFooterProps();
        return (0, i.jsx)(o.Modal, {
            transitionState: e ?? C.ip.ENTERED,
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
            R.A.sendRequest({
                discordTag: ea.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        j.A.select(e);
    };
    handleSelect = (e) => {
        let { results: t, channel: n } = this.props;
        if (null == e) j.A.clear(n?.id);
        else if (null != t) {
            let n = t[e];
            this.handleClick(n.user.id);
        }
    };
    handleSelectionChange = (e) => {
        j.A.select(e);
        let t = this.scrollerRef.current;
        null != t && t.scrollToIndex({ section: 0, row: e, padding: 8 });
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, P.dI)(t);
        j.A.search(e, t?.id),
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
        j.A.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            j.A.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: i } = this.props;
        t.has(e)
            ? j.A.removeUser(e)
            : this.getRemaining() > 0 && (j.A.addUser(e), n.length > 0 && (j.A.clear(i?.id), this.forceFocus()));
    };
    handleAddFriendNavigation = () => {
        y.A.transitionToSection(ec.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
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
            i = (0, P.dI)(n),
            l = !0;
        1 === e.length && (l = null == T.A._openCachedDMChannel(e[0])),
            ee.default.track(ec.HAw.CREATE_DM_USER_LIST_CLICKED, {
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
            T.A.openPrivateChannel({ recipientIds: e, location: "New Group DM" }).then((e) => {
                this.props.onComplete?.(e);
                let t = {};
                "" !== this.state.newChannelName && (t.name = this.state.newChannelName),
                    null != this.state.previewIcon && (t.icon = this.state.previewIcon),
                    (null != t.name || null != t.icon) && T.A.updateChannel(e, t, D.A.NEW_GROUP_DM_INVITE_MODAL),
                    ee.default.track(ec.HAw.GDM_EDIT_INTERACTED, {
                        channel_id: e,
                        channel_type: ec.rbe.GROUP_DM,
                        location: D.A.NEW_GROUP_DM_INVITE_MODAL,
                        new_name_set: "" !== this.state.newChannelName,
                        new_icon_set: null != this.state.previewIcon,
                    });
            });
    };
    pushToExistingDM = (e, t) => {
        let n = this._searchCounter,
            i = (0, P.dI)(e),
            l = q.A.getChannelId() === e.id;
        T.A.addRecipients(e.id, t, ec.ThZ.ADD_FRIENDS_TO_DM).then((n) => {
            if ((this.props.onComplete?.(n), l)) {
                if (e.isDM() && n !== e.id) return void v.A.call(n, !1, !0);
                v.A.ring(n, t, "dm_invite");
            }
        }),
            ee.default.track(ec.HAw.CREATE_DM_USER_LIST_CLICKED, {
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
            let t = eI(Array.from(new Set([...e.recipients, ...l])));
            t.size > 0
                ? (0, x.openModal)(
                      (n) => (0, i.jsx)(eg, { ...n, onConfirm: () => this.pushToExistingDM(e, l), channelIds: t }),
                      {},
                      (0, x.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, l);
        } else {
            let e = eI(l);
            l.length > 1 && e.size > 0
                ? (0, x.openModal)(
                      (t) => (0, i.jsx)(eg, { ...t, onConfirm: () => this.createNewDM(l), channelIds: e }),
                      {},
                      (0, x.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(l);
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
function e_(e) {
    let { selectedUsers: t, channelName: n, previewIcon: l, onIconChange: a, onIconRemove: s, onChange: r } = e,
        { analyticsLocations: o } = (0, O.Ay)(D.A.NEW_GROUP_DM_INVITE_MODAL),
        c = (0, U.Jo)(Array.from(t), Q.default, Z.A);
    return (0, i.jsxs)("div", {
        className: eh.zj,
        children: [
            (0, i.jsx)(G.X, {
                className: eh.r9,
                channel: null,
                previewIcon: l,
                onIconChange: a,
                onIconRemove: s,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(A.E, {
                className: eh.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: eu.intl.string(eu.t.YynaLK),
            }),
            (0, i.jsx)(p.k, {
                "aria-label": eu.intl.string(eu.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: c,
                value: n,
                onChange: r,
            }),
        ],
    });
}
function ef(e) {
    let { channel: t, onComplete: n, ...l } = e,
        a = (0, c.cf)([J.A, Y.A, X.A], () => {
            let e;
            return (
                null != t && null != (e = Y.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...J.A.getState(),
                    invite: e,
                    hideDiscriminator: X.A.hidePersonalInformation,
                    hideInstantInvites: X.A.hideInstantInvites,
                }
            );
        }),
        s = (0, c.bG)(
            [Q.default],
            () =>
                !!Q.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => Q.default.getUser(e)?.isStaff()),
            [t],
        );
    return (0, i.jsx)(ep, { channel: t, isStaffOnlyDM: s, onComplete: n, ...l, ...a });
}
function eE(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        a = `channel-invite-modal-${t?.id}`,
        s = (0, x.useHasModalOpen)(a),
        r = l.useCallback(
            () =>
                (0, x.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(ef, { ...e, channel: t })), {
                    modalKey: a,
                }),
            [t, a],
        ),
        o = l.useCallback(() => (s ? (0, x.closeModal)(a) : r()), [s, a, r]);
    return (
        l.useEffect(
            () => (
                n && en._.subscribe(ec.jej.TOGGLE_DM_CREATE, o),
                () => {
                    en._.unsubscribe(ec.jej.TOGGLE_DM_CREATE, o);
                }
            ),
            [n, o],
        ),
        (0, L.Ay)(() => {
            (0, V.u)();
        }),
        { showModal: r, toggleVisible: o }
    );
}
function eC(e) {
    let { channel: t, onComplete: n } = e,
        l = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, x.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(ef, { ...e, channel: t, onComplete: n })), {
        modalKey: l,
    });
}
function ex(e) {
    let {
            channel: t,
            iconClassName: n,
            className: a,
            icon: s,
            tooltip: r,
            tooltipPosition: o = "bottom",
            subscribeToGlobalHotkey: d = !1,
        } = e,
        u = l.useRef(null),
        h = s ?? (null == t ? S.g : I.D),
        { showModal: m } = eE({ channel: t, subscribeToGlobalHotkey: d }),
        A = (0, c.bG)([Q.default], () => Q.default.getUser(t?.getRecipientId()));
    return A?.bot || A?.isProvisional
        ? null
        : (0, i.jsx)(er.Ay.Icon, {
              ref: u,
              onClick: m,
              icon: h,
              className: a,
              iconClassName: n,
              tooltip: r,
              tooltipPosition: o,
          });
}
function eS(e) {
    let { channel: t, fullWidth: n = !1, text: a, icon: s, subscribeToGlobalHotkey: r = !1, ...o } = e,
        c = l.useRef(null),
        { showModal: d } = eE({ channel: t, subscribeToGlobalHotkey: r });
    return (0, i.jsx)(g.$, {
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
function eI(e) {
    let t = eN(e);
    return new Set(
        (0, a.chain)(W.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, K.MK)(e.type))
            .filter((e) => eN(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function eN(e) {
    return JSON.stringify(e.sort());
}
