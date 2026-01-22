n.d(t, {
    A: () => ep,
    N: () => eh,
}),
    n(638769),
    n(65821),
    n(321073),
    n(896048),
    n(747238),
    n(457529);
var r,
    l = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(989349),
    o = n.n(s),
    c = n(158954),
    u = n(311907),
    d = n(421380),
    f = n(397927),
    p = n(73153),
    h = n(387755),
    b = n(308528),
    g = n(711950),
    m = n(846293),
    A = n(888906),
    y = n(49229),
    O = n(684136),
    j = n(964486),
    v = n(793574),
    x = n(58149),
    E = n(688810),
    _ = n(571694),
    C = n(47167),
    S = n(915089),
    I = n(66442),
    N = n(279208),
    T = n(267102),
    P = n(976860),
    w = n(219271),
    R = n(21119),
    D = n(95701),
    M = n(734057),
    L = n(958590),
    G = n(584777),
    k = n(383501),
    U = n(222823),
    V = n(994500),
    F = n(351906),
    H = n(287809),
    B = n(954571),
    K = n(957565),
    W = n(203982),
    z = n(403362),
    Y = n(661191),
    q = n(427262),
    X = n(662367),
    J = n(58736),
    Q = n(286498),
    Z = n(652215),
    $ = n(650583),
    ee = n(985018),
    et = n(587360);

function en(e, t, n) {
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

function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                en(e, t, n[t]);
            });
    }
    return e;
}

function el(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function ei(e, t) {
    if (null == e) return {};
    var n,
        r,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++)
                (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
            (r = n[l]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i;
}
let ea = (0, S.Ld)(),
    es = (e) => {
        var t;
        let { channel: n, onClose: r } = e,
            i = null != (t = (0, C.Ay)(n)) ? t : "",
            a = (0, u.bG)([U.Ay], () => {
                var e;
                return null != (e = U.Ay.lastMessageId(n.id)) ? e : n.id;
            });
        return (0, l.jsx)(f.DUT, {
            onClick: () => {
                (0, P.uh)(Z.ME, n.id), r();
            },
            children: (0, l.jsxs)("div", {
                className: et.us,
                children: [
                    (0, l.jsx)(f.euF, {
                        src: (0, _.Y)(n),
                        size: f._3J.SIZE_24,
                        "aria-label": i,
                    }),
                    (0, l.jsx)("span", {
                        className: et.J2,
                        children: i,
                    }),
                    (0, l.jsx)("span", {
                        className: et.Pd,
                        children: o()(Y.default.extractTimestamp(a)).fromNow(),
                    }),
                ],
            }),
        });
    },
    eo = (e) => {
        let { onConfirm: t, channelIds: n } = e,
            r = ei(e, ["onConfirm", "channelIds"]),
            i = (0, u.yK)([M.A], () => Array.from(n).map(M.A.getChannel), [n]);
        return (0, l.jsx)(
            c.Modal,
            el(
                er(
                    {
                        title: ee.intl.string(ee.t.uFHxNd),
                        subtitle: ee.intl.string(ee.t.rIsSqE),
                        actions: [
                            {
                                variant: "secondary",
                                text: ee.intl.string(ee.t["ETE/oC"]),
                                onClick: r.onClose,
                            },
                            {
                                variant: "primary",
                                text: ee.intl.string(ee.t.KCNNJu),
                                onClick: () => {
                                    t(), r.onClose();
                                },
                            },
                        ],
                        input: (0, l.jsx)(f.Text, {
                            variant: "text-md/normal",
                            className: et.Jv,
                            children: ee.intl.string(ee.t.cjE7wH),
                        }),
                    },
                    r,
                ),
                {
                    children: i
                        .filter(z.Vq)
                        .sort((e, t) => {
                            var n, r;
                            let l = null != (n = e.lastMessageId) ? n : e.id,
                                i = null != (r = t.lastMessageId) ? r : t.id;
                            return Y.default.compare(i, l);
                        })
                        .map((e) =>
                            (0, l.jsx)(
                                es,
                                {
                                    onClose: r.onClose,
                                    channel: e,
                                },
                                e.id,
                            ),
                        ),
                },
            ),
        );
    };
class ec extends (r = i.PureComponent) {
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
        p.h.wait(() => A.A.open(null == e ? void 0 : e.id));
        let t = (0, x.dI)(e);
        B.default.track(
            Z.HAw.OPEN_POPOUT,
            el(er({}, t), {
                type: this._getAnalyticsEntryPoint().entryPointType,
                source: this._getAnalyticsEntryPoint().entryPointSource,
                is_friend: !this.isNotFriends(),
            }),
        ),
            W._.subscribe(Z.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            W._.subscribe(Z.jej.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        W._.unsubscribe(Z.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            W._.unsubscribe(Z.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            p.h.wait(() => A.A.close());
    }
    isNotFriends() {
        let { channel: e, isStaffOnlyDM: t } = this.props;
        if (null == e || !e.isDM()) return !1;
        let n = e.getRecipientId();
        if (null == n) throw Error("no recipient in DM");
        return !V.A.isFriend(n) && !t;
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
        m.Ay.createInvite(
            e.id,
            {
                max_age: t,
            },
            Z.PE1.GROUP_DM,
        );
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = H.default.getCurrentUser();
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
            r = (null != e && 0 === t.size) || n < 0,
            l = t.size > 1 || null != e ? ee.intl.string(ee.t.ZGMNA8) : ee.intl.string(ee.t["6Urw1t"]);
        return {
            variant: "primary",
            disabled: r,
            onClick: this.handleInviteUsers,
            text: l,
        };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            r = 0 === t.size || n < 0;
        return (0, l.jsx)(f.Button, {
            variant: "primary",
            text: ee.intl.string(ee.t.OYkgVk),
            disabled: r,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        return this.isNotFriends()
            ? ee.intl.string(ee.t.Xjlbvs)
            : this.isPartyFull()
              ? ee.intl.string(ee.t.OtTQDz)
              : ee.intl.string(ee.t.CdNhGX);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t) return ee.intl.string(ee.t["7orY6K"]);
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = H.default.getUser(t),
                r = null != n ? n.username : "";
            return ee.intl.format(ee.t["eg+R9x"], {
                username: r,
            });
        }
        let n = this.getRemaining();
        return n <= 0
            ? ee.intl.formatToPlainString(ee.t.xYr004, {
                  number: this.getMaxParticipants(),
              })
            : ee.intl.formatToPlainString(ee.t.HrSDPF, {
                  number: n,
              });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, results: r, query: l } = this.props,
            { current: i } = this.searchBarRef;
        if (null == i) return;
        let a = t;
        switch (e.key) {
            case $.dh.BACKSPACE:
                (null == l || 0 === l.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case $.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++a >= r.length && (a = 0), this.handleSelectionChange(a);
                break;
            case $.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --a < 0 && (a = r.length - 1), this.handleSelectionChange(a);
                break;
            case $.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), r.length > a && this.handleSelect(a);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (!t || this.isNotFriends() || this.isPartyFull()) return null;
        let r = [];
        return (
            n.forEach((e) => {
                let t = H.default.getUser(e);
                null != t &&
                    r.push({
                        id: e,
                        label: q.Ay.getName(t),
                    });
            }),
            (0, l.jsxs)("div", {
                className: et.ON,
                children: [
                    (0, l.jsx)(f.ksK, {
                        inputRef: this.searchBarRef,
                        autoFocus: !0,
                        fullWidth: !0,
                        placeholder: 0 === n.size ? ee.intl.string(ee.t.Wxnb6q) : "",
                        disabled: this.isPartyFull(),
                        value: e,
                        leading: {
                            type: "tags",
                            items: r,
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
              ? (0, l.jsx)("div", {
                    children: ee.intl.format(ee.t.xYr004, {
                        number: this.getMaxParticipants(),
                    }),
                })
              : null;
    }
    getListProps() {
        let { hasFriends: e, results: t } = this.props;
        if (!(this.isNotFriends() || !e || this.isPartyFull()))
            return 0 === t.length
                ? {
                      sections: [1],
                      sectionHeight: 0,
                      rowHeight: 32,
                      renderRow: () =>
                          (0, l.jsx)("div", {
                              className: et.wV,
                              children: (0, l.jsx)(f.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ee.intl.string(ee.t.SV4DJ1),
                              }),
                          }),
                  }
                : {
                      ref: this.scrollerRef,
                      sections: [t.length],
                      className: et.XG,
                      innerClassName: et.bv,
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
                      innerId: ea,
                      innerAriaMultiselectable: !0,
                      innerAriaOrientation: "vertical",
                  };
    }
    renderSection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: r } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let i = null != t ? (0, N.A)(t.code) : "",
            a = i.length > 0;
        return (0, l.jsx)(f.D0$, {
            label: ee.intl.string(ee.t.t3O2BR),
            helperText:
                i.length > 0
                    ? ee.intl.format(ee.t.ZVdJMy, {
                          numHours: "".concat(24),
                      })
                    : void 0,
            children: (0, l.jsx)(f.e2O, {
                supportsCopy: K.p5,
                placeholder: (0, N.A)(ee.intl.string(ee.t.lPVBqP)),
                value: a ? (n ? ee.intl.string(ee.t["6HzNgZ"]) : i) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: a ? (r ? ee.intl.string(ee.t.q30c5i) : ee.intl.string(ee.t.OpuAlK)) : ee.intl.string(ee.t.qzxqUf),
                mode: r ? f.qCr.SUCCESS : f.qCr.DEFAULT,
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
            let n = H.default.getUser(e),
                r = null != n && V.A.getRelationshipType(n.id) === Z.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: r ? ee.intl.string(ee.t.xMH6vD) : ee.intl.string(ee.t["PMsq/b"]),
                        disabled: r,
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
                        text: ee.intl.string(ee.t.w5uwoI),
                        onClick: this.handleAddFriendNavigation,
                    },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t)
            return {
                actionBarInput:
                    n.size > 1
                        ? (0, l.jsx)(eu, {
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
                        text: ee.intl.string(ee.t["ETE/oC"]),
                        onClick: this.props.onClose,
                    },
                    this.getCreateGroupButtonAction(),
                ],
            };
        if (t.isDM())
            return {
                actions: [this.getCreateGroupButtonAction()],
            };
        let r = this.getInviteLinkFooter();
        return null != r
            ? {
                  actionBarInput: r,
              }
            : {};
    }
    render() {
        var e;
        let { transitionState: t, onClose: n } = this.props,
            { actionBarInput: r, actions: i } = this.getFooterProps();
        return (0, l.jsx)(c.Modal, {
            transitionState: null != t ? t : f.ip4.ENTERED,
            onClose: async () => await n(),
            title: this.getTitle(),
            subtitle: this.getSubtitle(),
            input: null != (e = this.renderSearchBar()) ? e : void 0,
            actionBarInput: r,
            listProps: this.getListProps(),
            actions: null != i ? i : [],
            children: this.renderBody(),
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            y.A.sendRequest({
                discordTag: q.Ay.getUserTag(e, {
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
            en(this, "state", {
                separator: !1,
                copied: !1,
                newChannelName: "",
                previewIcon: void 0,
            }),
            en(this, "copyTimeout", void 0),
            en(this, "scrollerRef", i.createRef()),
            en(this, "searchBarRef", i.createRef()),
            en(this, "_mobileCloseRef", i.createRef()),
            en(this, "_searchCounter", 0),
            en(this, "_existingTimeout", null),
            en(this, "scrollPageUp", () => {
                var e;
                null == (e = this.scrollerRef.current) ||
                    e.scrollPageUp({
                        animate: !0,
                    });
            }),
            en(this, "scrollPageDown", () => {
                var e;
                null == (e = this.scrollerRef.current) ||
                    e.scrollPageDown({
                        animate: !0,
                    });
            }),
            en(this, "renderMobileCloseButton", () =>
                (0, l.jsx)("div", {
                    className: et.Lh,
                    ref: this._mobileCloseRef,
                    children: (0, l.jsx)(f.xpW, {
                        containerRef: this._mobileCloseRef,
                        children: (0, l.jsx)("div", {
                            children: (0, l.jsx)(O.A, {
                                className: et.RR,
                                closeAction: this.props.onClose,
                                keybind: "ESC",
                            }),
                        }),
                    }),
                }),
            ),
            en(this, "getRowHeight", (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return 48 * (null != n[t]);
            }),
            en(this, "renderRow", (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: r, selectedUsers: i, selectedRow: a, hideDiscriminator: s } = this.props,
                    o = r[n];
                if (null == o) return null;
                let { user: c, comparator: u } = o,
                    d = i.has(c.id),
                    f = !d && 0 >= this.getRemaining();
                return (0, l.jsx)(
                    Q.A,
                    {
                        row: n,
                        user: c,
                        hideDiscriminator: s,
                        comparator: u,
                        checked: d,
                        disabled: f,
                        selected: n === a,
                        onClick: this.handleClick,
                        onMouseEnter: this.focusResult,
                        "aria-posinset": n + 1,
                        "aria-setsize": r.length,
                    },
                    c.id,
                );
            }),
            en(this, "forceFocus", () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            en(this, "focusResult", (e) => {
                A.A.select(e);
            }),
            en(this, "handleSelect", (e) => {
                let { results: t, channel: n } = this.props;
                null == e ? A.A.clear(null == n ? void 0 : n.id) : null != t && this.handleClick(t[e].user.id);
            }),
            en(this, "handleSelectionChange", (e) => {
                A.A.select(e);
                let t = this.scrollerRef.current;
                null != t &&
                    t.scrollToIndex({
                        section: 0,
                        row: e,
                        padding: 8,
                    });
            }),
            en(this, "handleQueryChange", (e) => {
                let { channel: t } = this.props,
                    n = (0, x.dI)(t);
                A.A.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        B.default.track(
                            Z.HAw.SEARCH_USER_LIST_STARTED,
                            el(er({}, n), {
                                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                                search_query_length: e.length,
                            }),
                        ),
                            this._searchCounter++;
                    }, 500));
            }),
            en(this, "handleRemoveTag", (e) => {
                let t = Array.from(this.props.selectedUsers);
                A.A.removeUser(t[e]);
            }),
            en(this, "handleRemoveUser", (e) => {
                e.forEach((e) => {
                    A.A.removeUser(e);
                }),
                    this.forceFocus();
            }),
            en(this, "handleClick", (e) => {
                let { selectedUsers: t, query: n, channel: r } = this.props;
                t.has(e)
                    ? A.A.removeUser(e)
                    : this.getRemaining() > 0 && (A.A.addUser(e), n.length > 0 && A.A.clear(null == r ? void 0 : r.id)),
                    this.forceFocus();
            }),
            en(this, "handleAddFriendNavigation", () => {
                g.A.transitionToSection(Z.m3P.ADD_FRIEND, {
                    explicit: !0,
                }),
                    this.props.onClose();
            }),
            en(this, "handleScroll", () => {
                let e = this.scrollerRef.current;
                null != e &&
                    this.setState({
                        separator: !e.isScrolledToTop(),
                    });
            }),
            en(this, "handleChannelNameChange", (e) => {
                this.setState({
                    newChannelName: e,
                });
            }),
            en(this, "handleIconChange", (e) => {
                let { imageUri: t } = e;
                this.setState({
                    previewIcon: t,
                });
            }),
            en(this, "handleIconRemove", () => {
                this.setState({
                    previewIcon: null,
                });
            }),
            en(this, "createNewDM", (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    r = (0, x.dI)(n),
                    l = !0;
                1 === e.length && (l = null == b.A._openCachedDMChannel(e[0])),
                    B.default.track(
                        Z.HAw.CREATE_DM_USER_LIST_CLICKED,
                        el(er({}, r), {
                            is_new_dm: l,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: e,
                            num_searches: t,
                            affinity_score: this._getUserAffinities(e).affinities,
                            name_is_set: "" !== this.state.newChannelName,
                            icon_is_set: null != this.state.previewIcon,
                        }),
                    ),
                    b.A.openPrivateChannel({
                        recipientIds: e,
                        location: "New Group DM",
                    }).then((e) => {
                        let t = {};
                        "" !== this.state.newChannelName && (t.name = this.state.newChannelName),
                            null != this.state.previewIcon && (t.icon = this.state.previewIcon),
                            (null != t.name || null != t.icon) &&
                                b.A.updateChannel(e, t, v.A.NEW_GROUP_DM_INVITE_MODAL),
                            B.default.track(Z.HAw.GDM_EDIT_INTERACTED, {
                                channel_id: e,
                                channel_type: Z.rbe.GROUP_DM,
                                location: v.A.NEW_GROUP_DM_INVITE_MODAL,
                                new_name_set: "" !== this.state.newChannelName,
                                new_icon_set: null != this.state.previewIcon,
                            });
                    });
            }),
            en(this, "pushToExistingDM", (e, t) => {
                let n = this._searchCounter,
                    r = (0, x.dI)(e),
                    l = k.A.getChannelId() === e.id;
                b.A.addRecipients(e.id, t, Z.ThZ.ADD_FRIENDS_TO_DM).then((n) => {
                    if (l) {
                        if (e.isDM() && n !== e.id) return void h.A.call(n, !1, !0);
                        h.A.ring(n, t, "dm_invite");
                    }
                }),
                    B.default.track(
                        Z.HAw.CREATE_DM_USER_LIST_CLICKED,
                        el(er({}, r), {
                            is_new_dm: !0,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            recipient_ids: t,
                            num_searches: n,
                            affinity_score: this._getUserAffinities(t).affinities,
                        }),
                    );
            }),
            en(this, "handleInviteUsers", () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    r = Array.from(t);
                if (null != e) {
                    let t = eb(Array.from(new Set([...e.recipients, ...r])));
                    t.size > 0
                        ? (0, f.qfG)(
                              (n) =>
                                  (0, l.jsx)(
                                      eo,
                                      el(er({}, n), {
                                          onConfirm: () => this.pushToExistingDM(e, r),
                                          channelIds: t,
                                      }),
                                  ),
                              {},
                              (0, f.TId)(this.context.appContext),
                          )
                        : this.pushToExistingDM(e, r);
                } else {
                    let e = eb(r);
                    r.length > 1 && e.size > 0
                        ? (0, f.qfG)(
                              (t) =>
                                  (0, l.jsx)(
                                      eo,
                                      el(er({}, t), {
                                          onConfirm: () => this.createNewDM(r),
                                          channelIds: e,
                                      }),
                                  ),
                              {},
                              (0, f.TId)(this.context.appContext),
                          )
                        : this.createNewDM(r);
                }
                n();
            }),
            en(this, "handleCopyInvite", (e) => {
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
                    B.default.track(Z.HAw.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: Z.ThZ.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null,
                    });
            }),
            en(this, "scrollToCounterSearchBarHeightChange", (e) => {
                var t, n;
                let r = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? void 0 : t.call(n);
                null != r && (r.scrollTop = Math.max(0, r.scrollTop + e));
            });
    }
}

function eu(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: i, onIconRemove: a, onChange: s } = e,
        { analyticsLocations: o } = (0, E.Ay)(v.A.NEW_GROUP_DM_INVITE_MODAL),
        c = (0, C.Jo)(Array.from(t), H.default, V.A);
    return (0, l.jsxs)("div", {
        className: et.zj,
        children: [
            (0, l.jsx)(I.X, {
                className: et.r9,
                channel: null,
                previewIcon: r,
                onIconChange: i,
                onIconRemove: a,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, l.jsx)(f.Text, {
                className: et.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: ee.intl.string(ee.t.YynaLK),
            }),
            (0, l.jsx)(f.ksK, {
                "aria-label": ee.intl.string(ee.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: c,
                value: n,
                onChange: s,
            }),
        ],
    });
}

function ed(e) {
    let { channel: t } = e,
        n = ei(e, ["channel"]),
        r = (0, u.cf)([G.A, L.A, F.A], () => {
            let e;
            return (
                null != t && null != (e = L.A.getInvite(t.id)) && e.isExpired() && (e = null),
                el(er({}, G.A.getState()), {
                    invite: e,
                    hideDiscriminator: F.A.hidePersonalInformation,
                    hideInstantInvites: F.A.hideInstantInvites,
                })
            );
        }),
        i = (0, u.bG)([H.default], () => {
            var e;
            return (
                !!(null == (e = H.default.getCurrentUser()) ? void 0 : e.isStaff()) &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => {
                    var t;
                    return null == (t = H.default.getUser(e)) ? void 0 : t.isStaff();
                })
            );
        }, [t]);
    return (0, l.jsx)(
        ec,
        er(
            {
                channel: t,
                isStaffOnlyDM: i,
            },
            n,
            r,
        ),
    );
}

function ef(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        r = "channel-invite-modal-".concat(null == t ? void 0 : t.id),
        a = (0, f.Ry6)(r),
        s = i.useCallback(
            () =>
                (0, f.mMO)(
                    () =>
                        Promise.resolve((e) =>
                            (0, l.jsx)(
                                ed,
                                el(er({}, e), {
                                    channel: t,
                                }),
                            ),
                        ),
                    {
                        modalKey: r,
                    },
                ),
            [t, r],
        ),
        o = i.useCallback(() => (a ? (0, f.OoC)(r) : s()), [a, r, s]);
    return (
        i.useEffect(
            () => (
                n && W._.subscribe(Z.jej.TOGGLE_DM_CREATE, o),
                () => {
                    W._.unsubscribe(Z.jej.TOGGLE_DM_CREATE, o);
                }
            ),
            [n, o],
        ),
        (0, j.Ay)(() => {
            (0, w.u)();
        }),
        {
            showModal: s,
            toggleVisible: o,
        }
    );
}

function ep(e) {
    var t, n;
    let {
            channel: r,
            iconClassName: a,
            className: s,
            icon: o,
            tooltip: c,
            tooltipPosition: d = "bottom",
            subscribeToGlobalHotkey: p = !1,
        } = e,
        h = i.useRef(null),
        b = null != o ? o : null == r ? f.ggM : f.DpX,
        { showModal: g } = ef({
            channel: r,
            subscribeToGlobalHotkey: p,
        }),
        m = (0, u.bG)([H.default], () => H.default.getUser(null == r ? void 0 : r.getRecipientId()));
    return (null != (t = null == m ? void 0 : m.bot) && t) || (null != (n = null == m ? void 0 : m.isProvisional) && n)
        ? null
        : (0, l.jsx)(J.Ay.Icon, {
              ref: h,
              onClick: g,
              icon: b,
              className: s,
              iconClassName: a,
              tooltip: c,
              tooltipPosition: d,
          });
}

function eh(e) {
    let { channel: t, fullWidth: n = !1, text: r, icon: a, subscribeToGlobalHotkey: s = !1 } = e,
        o = ei(e, ["channel", "fullWidth", "text", "icon", "subscribeToGlobalHotkey"]),
        c = i.useRef(null),
        { showModal: u } = ef({
            channel: t,
            subscribeToGlobalHotkey: s,
        });
    return (0, l.jsx)(
        f.Button,
        el(er({}, o), {
            onClick: u,
            variant: "primary",
            buttonRef: c,
            text: r,
            "aria-label": r,
            icon: a,
            fullWidth: n,
        }),
    );
}

function eb(e) {
    let t = eg(e);
    return new Set(
        (0, a.chain)(M.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, D.MK)(e.type))
            .filter((e) => eg(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}

function eg(e) {
    return JSON.stringify(e.sort());
}
en(ec, "contextType", T.Ay);
