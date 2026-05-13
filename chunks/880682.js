"use strict";
n.d(t, { Jz: () => eM, Ay: () => eP, NE: () => ex }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(989349),
    o = n.n(a),
    l = n(189213),
    u = n(17928),
    c = n(862482),
    d = n(939249),
    _ = n(97808),
    f = n(778712),
    h = n(834730),
    p = n(821609),
    E = n(292666),
    m = n(187322),
    g = n(452027),
    A = n(109802),
    I = n(231723),
    T = n(192308),
    S = n(888366),
    N = n(241541),
    y = n(228366),
    C = n(387755),
    v = n(308528),
    O = n(711950),
    R = n(376728);
let b = {
    search(e, t) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: e, channelId: t });
    },
    clear(e) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: "", channelId: e });
    },
    select(e) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT", row: e });
    },
    addUser(e) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER", userId: e });
    },
    removeUser(e) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER", userId: e });
    },
    open(e) {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e });
    },
    close() {
        y.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
var D = n(717398),
    L = n(684136),
    w = n(964486),
    M = n(793574),
    P = n(95561),
    x = n(688810),
    U = n(571694),
    k = n(47167),
    G = n(915089),
    F = n(66442),
    V = n(279208),
    B = n(267102),
    H = n(976860),
    j = n(219271),
    Y = n(427358),
    W = n(95701),
    K = n(734057),
    z = n(958590),
    $ = n(637135),
    q = n(763827),
    Z = n(222823),
    X = n(994500),
    Q = n(351906),
    J = n(287809),
    ee = n(174459),
    et = n(957565),
    en = n(625494),
    ei = n(403362),
    er = n(935208),
    es = n(427262),
    ea = n(41e4);
let eo = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
});
var el = n(58736),
    eu = n(503698),
    ec = n.n(eu),
    ed = n(837381),
    e_ = n(692617),
    ef = n(658675),
    eh = n(297413),
    ep = n(966327),
    eE = n(235986),
    em = n(548118),
    eg = n(640708),
    eA = n(290863),
    eI = n(375708),
    eT = n(973081);
function eS(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: r,
            comparator: s,
            mutualGuilds: a,
            selected: o,
            checked: l,
            disabled: c = !1,
            onClick: _,
            onMouseEnter: f,
            "aria-setsize": p,
            "aria-posinset": E,
        } = e,
        m = (0, u.bG)([eA.A], () => eA.A.getStatus(t.id)),
        g = (0, ed.rm)(String(t.id));
    return (0, i.jsx)(d.D, {
        id: `user-row-${n}`,
        className: ec()(eT.Se, { [eT.r9]: c }),
        onClick: () => {
            _?.(t.id);
        },
        onMouseEnter: () => {
            f?.(n);
        },
        ...g,
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": c,
        "aria-setsize": p,
        "aria-posinset": E,
        children: (0, i.jsxs)(eE.A, {
            align: eE.A.Align.CENTER,
            className: ec()(eT.Bc, { [eT.oz]: o }),
            children: [
                (0, i.jsx)(ep.A, { user: t, status: m, className: eT.my }),
                (0, i.jsxs)("div", {
                    className: eT.YW,
                    children: [
                        (0, i.jsx)(h.E, {
                            tag: "strong",
                            className: eT.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != s && s === t.tag
                                    ? es.Ay.getName(t)
                                    : null != s && "" !== s
                                      ? s
                                      : es.Ay.getName(t),
                        }),
                        (0, i.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: null != a && a.length > 0 ? eT.dj : void 0,
                            children: [
                                (0, i.jsx)(eh.A, {
                                    user: t,
                                    hideDiscriminator: r,
                                    className: eT.xK,
                                    forceUsername: !0,
                                }),
                                null != a && a.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(eg.A, {
                                                  height: 2,
                                                  width: 2,
                                                  "aria-hidden": "true",
                                                  className: eT.a6,
                                              }),
                                              (0, i.jsx)(e_.A, {
                                                  className: eT.gP,
                                                  guilds: a,
                                                  maxGuilds: 3,
                                                  size: em.Ay.Sizes.SMOL,
                                              }),
                                              (0, i.jsx)("span", {
                                                  className: eT.tz,
                                                  children:
                                                      1 === a.length
                                                          ? a[0].name
                                                          : eI.intl.format(eI.t.E215W7, { count: a.length }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(ef.P, { checked: l, disabled: c }),
            ],
        }),
    });
}
var eN = n(652215),
    ey = n(650583),
    eC = n(426057);
let ev = (0, G.Ld)(),
    eO = (e) => {
        let { channel: t, onClose: n } = e,
            r = (0, k.Ay)(t) ?? "",
            s = (0, u.bG)([Z.Ay], () => Z.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(d.D, {
            onClick: () => {
                (0, H.uh)(eN.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: eC.us,
                children: [
                    (0, i.jsx)(_.eu, { src: (0, U.Y)(t), size: f._3.SIZE_24, "aria-label": r }),
                    (0, i.jsx)("span", { className: eC.J2, children: r }),
                    (0, i.jsx)("span", { className: eC.Pd, children: o()(er.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    eR = (e) => {
        let { onConfirm: t, channelIds: n, ...r } = e,
            s = (0, u.yK)([K.A], () => Array.from(n).map(K.A.getChannel), [n]);
        return (0, i.jsx)(l.Modal, {
            title: eI.intl.string(eI.t.uFHxNd),
            subtitle: eI.intl.string(eI.t.rIsSqE),
            actions: [
                { variant: "secondary", text: eI.intl.string(eI.t["ETE/oC"]), onClick: r.onClose },
                {
                    variant: "primary",
                    text: eI.intl.string(eI.t.KCNNJu),
                    onClick: () => {
                        t(), r.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(h.E, {
                variant: "text-md/normal",
                className: eC.Jv,
                children: eI.intl.string(eI.t.cjE7wH),
            }),
            ...r,
            children: s
                .filter(ei.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return er.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(eO, { onClose: r.onClose, channel: e }, e.id)),
        });
    };
class eb extends r.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0 };
    static contextType = B.Ay;
    copyTimeout;
    scrollerRef = r.createRef();
    searchBarRef = r.createRef();
    _mobileCloseRef = r.createRef();
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
        y.h.wait(() => b.open(e?.id));
        let t = (0, P.dI)(e);
        ee.default.track(eN.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            en._.subscribe(eN.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.subscribe(eN.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        en._.unsubscribe(eN.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            en._.unsubscribe(eN.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            y.h.wait(() => b.close());
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
        return !X.A.isFriend(n) && !t;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let t = (function (e) {
            let { location: t } = e,
                { inviteMaxAgeSeconds: n } = eo.getConfig({ location: t });
            return n;
        })({ location: "5326c5_1" });
        R.Ay.createInvite(e.id, { max_age: t }, eN.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = J.default.getCurrentUser();
        return null != t && t.isStaff() ? eN.$aF : null != e && e.userLimit > 0 ? e.userLimit : eN.wLU;
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
            r = t.size > 1 || null != e ? eI.intl.string(eI.t["h1/FMu"]) : eI.intl.string(eI.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: r };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            r = 0 === t.size || n < 0;
        return (0, i.jsx)(p.$, {
            variant: "primary",
            text: eI.intl.string(eI.t.OYkgVk),
            disabled: r,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        let { addToDMUpdatesEnabled: e } = this.props;
        if (this.isNotFriends()) return eI.intl.string(eI.t.Xjlbvs);
        if (this.isPartyFull()) return eI.intl.string(eI.t.OtTQDz);
        let { channel: t } = this.props;
        return null == t
            ? eI.intl.string(eI.t.jD1qzM)
            : t.isDM() && e
              ? eI.intl.string(eI.t.IIOxgV)
              : eI.intl.string(t.isMultiUserDM() ? eI.t.AQAPts : eI.t.Xjlbvs);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = J.default.getUser(t),
                        n = null != e ? e.username : "";
                    return eI.intl.format(eI.t["eg+R9x"], { username: n });
                }
            }
            return eI.intl.string(eI.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = J.default.getUser(t),
                i = null != n ? n.username : "";
            return eI.intl.format(eI.t["eg+R9x"], { username: i });
        }
        let n = this.getRemaining();
        return n <= 0
            ? eI.intl.formatToPlainString(eI.t.xYr004, { number: this.getMaxParticipants() })
            : eI.intl.formatToPlainString(eI.t.HrSDPF, { number: n });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, results: i, query: r } = this.props,
            { current: s } = this.searchBarRef;
        if (null == s) return;
        let a = t;
        switch (e.key) {
            case ey.dh.BACKSPACE:
                (null == r || 0 === r.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case ey.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++a >= i.length && (a = 0), this.handleSelectionChange(a);
                break;
            case ey.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --a < 0 && (a = i.length - 1), this.handleSelectionChange(a);
                break;
            case ey.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), i.length > a && this.handleSelect(a);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (!t || this.isNotFriends() || this.isPartyFull()) return null;
        let r = [];
        n.forEach((e) => {
            let t = J.default.getUser(e);
            null != t && r.push({ id: e, label: es.Ay.getName(t) });
        });
        let { results: s, selectedRow: a } = this.props,
            o = s.length > 0;
        return (0, i.jsxs)("div", {
            className: eC.ON,
            children: [
                (0, i.jsx)(E.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    placeholder: 0 === n.size ? eI.intl.string(eI.t.K5e6bn) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: r, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": ev,
                    "aria-expanded": o,
                    "aria-activedescendant": o ? `user-row-${a}` : void 0,
                }),
                this.renderAddUsersButton(),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: eC.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(m.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(L.A, { className: eC.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return this.isNotFriends() || !e
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: eI.intl.format(eI.t.xYr004, { number: this.getMaxParticipants() }) })
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
                              className: eC.wV,
                              children: (0, i.jsx)(h.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eI.intl.string(eI.t.z3yXsY),
                              }),
                          }),
                  }
                : {
                      ref: this.scrollerRef,
                      sections: [t.length],
                      className: eC.XG,
                      innerClassName: eC.bv,
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
                      innerId: ev,
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
        let { results: r, selectedUsers: s, selectedRow: a, hideDiscriminator: o, channel: l } = this.props,
            u = r[n];
        if (null == u) return null;
        let { user: c, comparator: d, mutualGuilds: _ } = u,
            f = s.has(c.id) || l?.recipients.includes(c.id),
            h = (!f && 0 >= this.getRemaining()) || l?.recipients.includes(c.id);
        return (0, i.jsx)(
            eS,
            {
                row: n,
                user: c,
                hideDiscriminator: o,
                comparator: d,
                mutualGuilds: _,
                checked: f,
                disabled: h,
                selected: n === a,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": n + 1,
                "aria-setsize": r.length,
            },
            c.id,
        );
    };
    renderSection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: r } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let s = null != t ? (0, V.A)(t.code) : "",
            a = s.length > 0;
        return (0, i.jsx)(g.D, {
            label: eI.intl.string(eI.t.t3O2BR),
            helperText: s.length > 0 ? eI.intl.format(eI.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(A.e, {
                supportsCopy: et.p5,
                placeholder: (0, V.A)(eI.intl.string(eI.t.lPVBqP)),
                value: a ? (n ? eI.intl.string(eI.t["6HzNgZ"]) : s) : "",
                buttonColor: c.$n.Colors.BRAND,
                text: a ? (r ? eI.intl.string(eI.t.q30c5i) : eI.intl.string(eI.t.OpuAlK)) : eI.intl.string(eI.t.qzxqUf),
                mode: r ? A.q.SUCCESS : A.q.DEFAULT,
                onCopy: () => {
                    a ? this.handleCopyInvite(s) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n, addToDMUpdatesEnabled: r } = this.props;
        if (this.isNotFriends()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = J.default.getUser(e),
                i = null != n && X.A.getRelationshipType(n.id) === eN.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? eI.intl.string(eI.t.xMH6vD) : eI.intl.string(eI.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e)
            return {
                actions: [
                    { variant: "primary", text: eI.intl.string(eI.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t || (t.isDM() && r)) {
            let e = null != t || n.size > 1,
                s = new Set(t?.isDM() && r ? [t.getRecipientId(), ...n] : n);
            return {
                actionBarInput: e
                    ? (0, i.jsx)(eD, {
                          previewIcon: this.state.previewIcon,
                          selectedUsers: s,
                          channelName: this.state.newChannelName,
                          onChange: this.handleChannelNameChange,
                          onIconChange: this.handleIconChange,
                          onIconRemove: this.handleIconRemove,
                      })
                    : void 0,
                actions: [
                    { variant: "secondary", text: eI.intl.string(eI.t["ETE/oC"]), onClick: this.props.onClose },
                    this.getCreateGroupButtonAction(),
                ],
            };
        }
        if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
        let s = this.getInviteLinkFooter();
        return null != s ? { actionBarInput: s } : {};
    }
    render() {
        let { transitionState: e, onClose: t } = this.props,
            { actionBarInput: n, actions: r } = this.getFooterProps();
        return (0, i.jsx)(l.Modal, {
            transitionState: e ?? I.ip.ENTERED,
            onClose: async () => await t(),
            title: this.getTitle(),
            subtitle: this.getSubtitle(),
            input: this.renderSearchBar() ?? void 0,
            actionBarInput: n,
            listProps: this.getListProps(),
            actions: r ?? [],
            children: this.renderBody(),
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            D.A.sendRequest({
                discordTag: es.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        b.select(e);
    };
    handleSelect = (e) => {
        let { results: t, channel: n } = this.props;
        if (null == e) b.clear(n?.id);
        else if (null != t) {
            let n = t[e];
            this.handleClick(n.user.id);
        }
    };
    handleSelectionChange = (e) => {
        b.select(e);
        let t = this.scrollerRef.current;
        null != t && t.scrollToIndex({ section: 0, row: e, padding: 8 });
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, P.dI)(t);
        b.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                ee.default.track(eN.HAw.SEARCH_USER_LIST_STARTED, {
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
        b.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            b.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: i } = this.props;
        i?.recipients.includes(e) ||
            (t.has(e)
                ? b.removeUser(e)
                : this.getRemaining() > 0 && (b.addUser(e), n.length > 0 && (b.clear(i?.id), this.forceFocus())));
    };
    handleAddFriendNavigation = () => {
        O.A.transitionToSection(eN.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
    };
    handleScroll = () => {
        let e = this.scrollerRef.current;
        null != e && this.setState({ separator: !e.isScrolledToTop() });
    };
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                let t = Y.A.getUserAffinity(e);
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
            (null != n.name || null != n.icon) && v.A.updateChannel(e, n, t),
            ee.default.track(eN.HAw.GDM_EDIT_INTERACTED, {
                channel_id: e,
                channel_type: eN.rbe.GROUP_DM,
                location: t,
                new_name_set: "" !== this.state.newChannelName,
                new_icon_set: null != this.state.previewIcon,
            });
    };
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            i = (0, P.dI)(n),
            r = !0;
        1 === e.length && (r = null == v.A._openCachedDMChannel(e[0])),
            ee.default.track(eN.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...i,
                is_new_dm: r,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: e,
                num_searches: t,
                affinity_score: this._getUserAffinities(e).affinities,
                name_is_set: "" !== this.state.newChannelName,
                icon_is_set: null != this.state.previewIcon,
            }),
            v.A.openPrivateChannel({ recipientIds: e, location: "New Group DM" }).then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, M.A.NEW_GROUP_DM_INVITE_MODAL);
            });
    };
    pushToExistingDM = (e, t) => {
        let { addToDMUpdatesEnabled: n } = this.props,
            i = this._searchCounter,
            r = (0, P.dI)(e),
            s = q.A.getChannelId() === e.id;
        v.A.addRecipients(e.id, t, eN.ThZ.ADD_FRIENDS_TO_DM).then((i) => {
            if ((this.props.onComplete?.(i), n && this.updateGDM(i, eN.ThZ.ADD_FRIENDS_TO_DM), s)) {
                if (e.isDM() && i !== e.id) return void C.A.call(i, !1, !0);
                C.A.ring(i, t, "dm_invite");
            }
        }),
            ee.default.track(eN.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...r,
                is_new_dm: !0,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: t,
                num_searches: i,
                affinity_score: this._getUserAffinities(t).affinities,
            });
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            r = Array.from(t);
        if (null != e) {
            let t = eU(Array.from(new Set([...e.recipients, ...r])));
            t.size > 0
                ? (0, T.openModal)(
                      (n) => (0, i.jsx)(eR, { ...n, onConfirm: () => this.pushToExistingDM(e, r), channelIds: t }),
                      {},
                      (0, T.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, r);
        } else {
            let e = eU(r);
            r.length > 1 && e.size > 0
                ? (0, T.openModal)(
                      (t) => (0, i.jsx)(eR, { ...t, onConfirm: () => this.createNewDM(r), channelIds: e }),
                      {},
                      (0, T.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(r);
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
            ee.default.track(eN.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: eN.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function eD(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: s, onIconRemove: a, onChange: o } = e,
        { analyticsLocations: l } = (0, x.Ay)(M.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, k.Jo)(Array.from(t), J.default, X.A);
    return (0, i.jsxs)("div", {
        className: eC.zj,
        children: [
            (0, i.jsx)(F.X, {
                className: eC.r9,
                channel: null,
                previewIcon: r,
                onIconChange: s,
                onIconRemove: a,
                analyticsLocations: l,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(h.E, {
                className: eC.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: eI.intl.string(eI.t.YynaLK),
            }),
            (0, i.jsx)(E.k, {
                "aria-label": eI.intl.string(eI.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: o,
            }),
        ],
    });
}
function eL(e) {
    let { channel: t, onComplete: n, ...r } = e,
        s = (0, u.cf)([$.A, z.A, Q.A], () => {
            let e;
            return (
                null != t && null != (e = z.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...$.A.getState(),
                    invite: e,
                    hideDiscriminator: Q.A.hidePersonalInformation,
                    hideInstantInvites: Q.A.hideInstantInvites,
                }
            );
        }),
        a = (0, u.bG)(
            [J.default],
            () =>
                !!J.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => J.default.getUser(e)?.isStaff()),
            [t],
        ),
        { enabled: o } = ea.A.useConfig({
            location: t?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
        });
    return (0, i.jsx)(eb, {
        channel: t,
        isStaffOnlyDM: a,
        onComplete: n,
        addToDMUpdatesEnabled: !!(t?.isDM() && o),
        ...r,
        ...s,
    });
}
function ew(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        a = (0, T.useHasModalOpen)(s),
        o = r.useCallback(
            () =>
                (0, T.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(eL, { ...e, channel: t })), {
                    modalKey: s,
                }),
            [t, s],
        ),
        l = r.useCallback(() => (a ? (0, T.closeModal)(s) : o()), [a, s, o]);
    return (
        r.useEffect(
            () => (
                n && en._.subscribe(eN.jej.TOGGLE_DM_CREATE, l),
                () => {
                    en._.unsubscribe(eN.jej.TOGGLE_DM_CREATE, l);
                }
            ),
            [n, l],
        ),
        (0, w.Ay)(() => {
            (0, j.u)();
        }),
        { showModal: o, toggleVisible: l }
    );
}
function eM(e) {
    let { channel: t, onComplete: n } = e,
        r = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, T.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(eL, { ...e, channel: t, onComplete: n })), {
        modalKey: r,
    });
}
function eP(e) {
    let {
            channel: t,
            iconClassName: n,
            className: s,
            icon: a,
            tooltip: o,
            tooltipPosition: l = "bottom",
            subscribeToGlobalHotkey: c = !1,
        } = e,
        d = r.useRef(null),
        _ = a ?? (null == t ? S.g : N.D),
        { showModal: f } = ew({ channel: t, subscribeToGlobalHotkey: c }),
        h = (0, u.bG)([J.default], () => J.default.getUser(t?.getRecipientId()));
    return h?.bot || h?.isProvisional
        ? null
        : (0, i.jsx)(el.Ay.Icon, {
              ref: d,
              onClick: f,
              icon: _,
              className: s,
              iconClassName: n,
              tooltip: o,
              tooltipPosition: l,
          });
}
function ex(e) {
    let { channel: t, fullWidth: n = !1, text: s, icon: a, subscribeToGlobalHotkey: o = !1, ...l } = e,
        u = r.useRef(null),
        { showModal: c } = ew({ channel: t, subscribeToGlobalHotkey: o });
    return (0, i.jsx)(p.$, {
        ...l,
        onClick: c,
        variant: "primary",
        buttonRef: u,
        text: s,
        "aria-label": s,
        icon: a,
        fullWidth: n,
    });
}
function eU(e) {
    let t = ek(e);
    return new Set(
        (0, s.chain)(K.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, W.MK)(e.type))
            .filter((e) => ek(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function ek(e) {
    return JSON.stringify(e.sort());
}
