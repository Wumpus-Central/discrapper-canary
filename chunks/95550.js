n.d(t, { Ay: () => ec, Jz: () => eo, NE: () => ed }), n(321073);
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
    p = n(711950),
    g = n(846293),
    f = n(888906),
    _ = n(49229),
    E = n(684136),
    x = n(964486),
    C = n(793574),
    S = n(58149),
    T = n(688810),
    N = n(571694),
    I = n(47167),
    v = n(915089),
    y = n(66442),
    b = n(279208),
    j = n(267102),
    R = n(976860),
    M = n(219271),
    D = n(21119),
    O = n(95701),
    L = n(734057),
    P = n(958590),
    k = n(584777),
    w = n(383501),
    U = n(222823),
    G = n(994500),
    F = n(351906),
    B = n(287809),
    H = n(954571),
    V = n(957565),
    K = n(203982),
    W = n(403362),
    z = n(661191),
    q = n(427262),
    Y = n(662367),
    J = n(58736),
    $ = n(286498),
    Z = n(652215),
    X = n(650583),
    Q = n(985018),
    ee = n(923710);
let et = (0, v.Ld)(),
    en = (e) => {
        let { channel: t, onClose: n } = e,
            l = (0, I.Ay)(t) ?? "",
            s = (0, c.bG)([U.Ay], () => U.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(u.DUT, {
            onClick: () => {
                (0, R.uh)(Z.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: ee.us,
                children: [
                    (0, i.jsx)(u.euF, { src: (0, N.Y)(t), size: u._3J.SIZE_24, "aria-label": l }),
                    (0, i.jsx)("span", { className: ee.J2, children: l }),
                    (0, i.jsx)("span", { className: ee.Pd, children: r()(z.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    ei = (e) => {
        let { onConfirm: t, channelIds: n, ...l } = e,
            s = (0, c.yK)([L.A], () => Array.from(n).map(L.A.getChannel), [n]);
        return (0, i.jsx)(o.Modal, {
            title: Q.intl.string(Q.t.uFHxNd),
            subtitle: Q.intl.string(Q.t.rIsSqE),
            actions: [
                { variant: "secondary", text: Q.intl.string(Q.t["ETE/oC"]), onClick: l.onClose },
                {
                    variant: "primary",
                    text: Q.intl.string(Q.t.KCNNJu),
                    onClick: () => {
                        t(), l.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                className: ee.Jv,
                children: Q.intl.string(Q.t.cjE7wH),
            }),
            ...l,
            children: s
                .filter(W.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return z.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(en, { onClose: l.onClose, channel: e }, e.id)),
        });
    };
class el extends l.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0 };
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
        H.default.track(Z.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            K._.subscribe(Z.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            K._.subscribe(Z.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        K._.unsubscribe(Z.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            K._.unsubscribe(Z.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
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
        let t = (0, Y.i)({ location: "5326c5_1" });
        g.Ay.createInvite(e.id, { max_age: t }, Z.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = B.default.getCurrentUser();
        return null != t && t.isStaff() ? Z.$aF : null != e && e.userLimit > 0 ? e.userLimit : Z.wLU;
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
            l = t.size > 1 || null != e ? Q.intl.string(Q.t["h1/FMu"]) : Q.intl.string(Q.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: l };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            l = 0 === t.size || n < 0;
        return (0, i.jsx)(u.Button, {
            variant: "primary",
            text: Q.intl.string(Q.t.OYkgVk),
            disabled: l,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        if (this.isNotFriends()) return Q.intl.string(Q.t.Xjlbvs);
        if (this.isPartyFull()) return Q.intl.string(Q.t.OtTQDz);
        let { channel: e } = this.props;
        return null == e ? Q.intl.string(Q.t.jD1qzM) : Q.intl.string(e.isMultiUserDM() ? Q.t.AQAPts : Q.t.Xjlbvs);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = B.default.getUser(t),
                        n = null != e ? e.username : "";
                    return Q.intl.format(Q.t["eg+R9x"], { username: n });
                }
            }
            return Q.intl.string(Q.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = B.default.getUser(t),
                i = null != n ? n.username : "";
            return Q.intl.format(Q.t["eg+R9x"], { username: i });
        }
        let n = this.getRemaining();
        return n <= 0
            ? Q.intl.formatToPlainString(Q.t.xYr004, { number: this.getMaxParticipants() })
            : Q.intl.formatToPlainString(Q.t.HrSDPF, { number: n });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, results: i, query: l } = this.props,
            { current: s } = this.searchBarRef;
        if (null == s) return;
        let a = t;
        switch (e.key) {
            case X.dh.BACKSPACE:
                (null == l || 0 === l.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case X.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++a >= i.length && (a = 0), this.handleSelectionChange(a);
                break;
            case X.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --a < 0 && (a = i.length - 1), this.handleSelectionChange(a);
                break;
            case X.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), i.length > a && this.handleSelect(a);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (!t || this.isNotFriends() || this.isPartyFull()) return null;
        let l = [];
        return (
            n.forEach((e) => {
                let t = B.default.getUser(e);
                null != t && l.push({ id: e, label: q.Ay.getName(t) });
            }),
            (0, i.jsxs)("div", {
                className: ee.ON,
                children: [
                    (0, i.jsx)(u.ksK, {
                        inputRef: this.searchBarRef,
                        autoFocus: !0,
                        fullWidth: !0,
                        placeholder: 0 === n.size ? Q.intl.string(Q.t.K5e6bn) : "",
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
            className: ee.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(u.xpW, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(E.A, { className: ee.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: Q.intl.format(Q.t.xYr004, { number: this.getMaxParticipants() }) })
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
                              className: ee.wV,
                              children: (0, i.jsx)(u.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: Q.intl.string(Q.t.z3yXsY),
                              }),
                          }),
                  }
                : {
                      ref: this.scrollerRef,
                      sections: [t.length],
                      className: ee.XG,
                      innerClassName: ee.bv,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                      renderSection: this.renderSection,
                      sectionHeight: 0,
                      onScroll: this.handleScroll,
                      paddingTop: 0,
                      paddingBottom: 14,
                      fade: !0,
                      role: void 0,
                      innerRole: "listbox",
                      innerId: et,
                      innerAriaMultiselectable: !0,
                      innerAriaOrientation: "vertical",
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
        let { results: l, selectedUsers: s, selectedRow: a, hideDiscriminator: r } = this.props,
            o = l[n];
        if (null == o) return null;
        let { user: c, comparator: d } = o,
            u = s.has(c.id),
            h = !u && 0 >= this.getRemaining();
        return (0, i.jsx)(
            $.A,
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
        let s = null != t ? (0, b.A)(t.code) : "",
            a = s.length > 0;
        return (0, i.jsx)(u.D0$, {
            label: Q.intl.string(Q.t.t3O2BR),
            helperText: s.length > 0 ? Q.intl.format(Q.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(u.e2O, {
                supportsCopy: V.p5,
                placeholder: (0, b.A)(Q.intl.string(Q.t.lPVBqP)),
                value: a ? (n ? Q.intl.string(Q.t["6HzNgZ"]) : s) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: a ? (l ? Q.intl.string(Q.t.q30c5i) : Q.intl.string(Q.t.OpuAlK)) : Q.intl.string(Q.t.qzxqUf),
                mode: l ? u.qCr.SUCCESS : u.qCr.DEFAULT,
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
            let n = B.default.getUser(e),
                i = null != n && G.A.getRelationshipType(n.id) === Z.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? Q.intl.string(Q.t.xMH6vD) : Q.intl.string(Q.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e)
            return {
                actions: [
                    { variant: "primary", text: Q.intl.string(Q.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t)
            return {
                actionBarInput:
                    n.size > 1
                        ? (0, i.jsx)(es, {
                              previewIcon: this.state.previewIcon,
                              selectedUsers: n,
                              channelName: this.state.newChannelName,
                              onChange: this.handleChannelNameChange,
                              onIconChange: this.handleIconChange,
                              onIconRemove: this.handleIconRemove,
                          })
                        : void 0,
                actions: [
                    { variant: "secondary", text: Q.intl.string(Q.t["ETE/oC"]), onClick: this.props.onClose },
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
    focusResult = (e) => {
        f.A.select(e);
    };
    handleSelect = (e) => {
        let { results: t, channel: n } = this.props;
        if (null == e) f.A.clear(n?.id);
        else if (null != t) {
            let n = t[e];
            this.handleClick(n.user.id);
        }
    };
    handleSelectionChange = (e) => {
        f.A.select(e);
        let t = this.scrollerRef.current;
        null != t && t.scrollToIndex({ section: 0, row: e, padding: 8 });
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, S.dI)(t);
        f.A.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                H.default.track(Z.HAw.SEARCH_USER_LIST_STARTED, {
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
    handleAddFriendNavigation = () => {
        p.A.transitionToSection(Z.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
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
            H.default.track(Z.HAw.CREATE_DM_USER_LIST_CLICKED, {
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
                    H.default.track(Z.HAw.GDM_EDIT_INTERACTED, {
                        channel_id: e,
                        channel_type: Z.rbe.GROUP_DM,
                        location: C.A.NEW_GROUP_DM_INVITE_MODAL,
                        new_name_set: "" !== this.state.newChannelName,
                        new_icon_set: null != this.state.previewIcon,
                    });
            });
    };
    pushToExistingDM = (e, t) => {
        let n = this._searchCounter,
            i = (0, S.dI)(e),
            l = w.A.getChannelId() === e.id;
        A.A.addRecipients(e.id, t, Z.ThZ.ADD_FRIENDS_TO_DM).then((n) => {
            if ((this.props.onComplete?.(n), l)) {
                if (e.isDM() && n !== e.id) return void m.A.call(n, !1, !0);
                m.A.ring(n, t, "dm_invite");
            }
        }),
            H.default.track(Z.HAw.CREATE_DM_USER_LIST_CLICKED, {
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
            let t = eu(Array.from(new Set([...e.recipients, ...l])));
            t.size > 0
                ? (0, u.qfG)(
                      (n) => (0, i.jsx)(ei, { ...n, onConfirm: () => this.pushToExistingDM(e, l), channelIds: t }),
                      {},
                      (0, u.TId)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, l);
        } else {
            let e = eu(l);
            l.length > 1 && e.size > 0
                ? (0, u.qfG)(
                      (t) => (0, i.jsx)(ei, { ...t, onConfirm: () => this.createNewDM(l), channelIds: e }),
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
            H.default.track(Z.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: Z.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function es(e) {
    let { selectedUsers: t, channelName: n, previewIcon: l, onIconChange: s, onIconRemove: a, onChange: r } = e,
        { analyticsLocations: o } = (0, T.Ay)(C.A.NEW_GROUP_DM_INVITE_MODAL),
        c = (0, I.Jo)(Array.from(t), B.default, G.A);
    return (0, i.jsxs)("div", {
        className: ee.zj,
        children: [
            (0, i.jsx)(y.X, {
                className: ee.r9,
                channel: null,
                previewIcon: l,
                onIconChange: s,
                onIconRemove: a,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(u.Text, {
                className: ee.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: Q.intl.string(Q.t.YynaLK),
            }),
            (0, i.jsx)(u.ksK, {
                "aria-label": Q.intl.string(Q.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: c,
                value: n,
                onChange: r,
            }),
        ],
    });
}
function ea(e) {
    let { channel: t, onComplete: n, ...l } = e,
        s = (0, c.cf)([k.A, P.A, F.A], () => {
            let e;
            return (
                null != t && null != (e = P.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...k.A.getState(),
                    invite: e,
                    hideDiscriminator: F.A.hidePersonalInformation,
                    hideInstantInvites: F.A.hideInstantInvites,
                }
            );
        }),
        a = (0, c.bG)(
            [B.default],
            () =>
                !!B.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => B.default.getUser(e)?.isStaff()),
            [t],
        );
    return (0, i.jsx)(el, { channel: t, isStaffOnlyDM: a, onComplete: n, ...l, ...s });
}
function er(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        a = (0, u.Ry6)(s),
        r = l.useCallback(
            () => (0, u.mMO)(() => Promise.resolve((e) => (0, i.jsx)(ea, { ...e, channel: t })), { modalKey: s }),
            [t, s],
        ),
        o = l.useCallback(() => (a ? (0, u.OoC)(s) : r()), [a, s, r]);
    return (
        l.useEffect(
            () => (
                n && K._.subscribe(Z.jej.TOGGLE_DM_CREATE, o),
                () => {
                    K._.unsubscribe(Z.jej.TOGGLE_DM_CREATE, o);
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
function eo(e) {
    let { channel: t, onComplete: n } = e,
        l = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, u.mMO)(() => Promise.resolve((e) => (0, i.jsx)(ea, { ...e, channel: t, onComplete: n })), { modalKey: l });
}
function ec(e) {
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
        { showModal: A } = er({ channel: t, subscribeToGlobalHotkey: d }),
        p = (0, c.bG)([B.default], () => B.default.getUser(t?.getRecipientId()));
    return p?.bot || p?.isProvisional
        ? null
        : (0, i.jsx)(J.Ay.Icon, {
              ref: h,
              onClick: A,
              icon: m,
              className: s,
              iconClassName: n,
              tooltip: r,
              tooltipPosition: o,
          });
}
function ed(e) {
    let { channel: t, fullWidth: n = !1, text: s, icon: a, subscribeToGlobalHotkey: r = !1, ...o } = e,
        c = l.useRef(null),
        { showModal: d } = er({ channel: t, subscribeToGlobalHotkey: r });
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
function eu(e) {
    let t = eh(e);
    return new Set(
        (0, s.chain)(L.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, O.MK)(e.type))
            .filter((e) => eh(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function eh(e) {
    return JSON.stringify(e.sort());
}
