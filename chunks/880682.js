n.d(t, { Jz: () => eP, Ay: () => eG, NE: () => eb }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n(989349),
    a = n.n(r),
    o = n(189213),
    u = n(17928),
    d = n(862482),
    c = n(939249),
    h = n(97808),
    g = n(778712),
    f = n(834730),
    A = n(821609),
    E = n(292666),
    I = n(187322),
    m = n(452027),
    S = n(109802),
    p = n(231723),
    C = n(192308);
if (21552 == n.j) var _ = n(888366);
if (21552 == n.j) var N = n(241541);
var T = n(228366),
    v = n(387755),
    M = n(308528),
    y = n(711950),
    D = n(376728);
let x = {
    search(e, t) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: e, channelId: t });
    },
    clear(e) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: "", channelId: e });
    },
    select(e) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT", row: e });
    },
    addUser(e) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER", userId: e });
    },
    removeUser(e) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER", userId: e });
    },
    open(e) {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e });
    },
    close() {
        T.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
var R = n(717398),
    O = n(684136),
    U = n(964486),
    L = n(793574),
    w = n(95561),
    P = n(688810),
    G = n(571694),
    b = n(47167),
    j = n(915089),
    F = n(66442),
    V = n(279208),
    k = n(267102),
    H = n(976860),
    B = n(219271),
    Y = n(427358),
    W = n(95701),
    z = n(734057),
    Z = n(71393),
    J = n(958590),
    $ = n(584777),
    K = n(763827),
    X = n(222823),
    Q = n(994500),
    q = n(351906),
    ee = n(287809),
    et = n(174459),
    en = n(957565),
    ei = n(625494),
    el = n(403362),
    es = n(935208),
    er = n(427262),
    ea = n(41e4),
    eo = n(18707);
let eu = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
});
var ed = n(58736),
    ec = n(503698),
    eh = n.n(ec),
    eg = n(837381),
    ef = n(692617),
    eA = n(658675),
    eE = n(297413),
    eI = n(966327),
    em = n(235986),
    eS = n(548118),
    ep = n(640708),
    eC = n(290863),
    e_ = n(375708),
    eN = n(973081);
function eT(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: l,
            comparator: s,
            mutualGuilds: r,
            selected: a,
            checked: o,
            disabled: d = !1,
            onClick: h,
            onMouseEnter: g,
            "aria-setsize": A,
            "aria-posinset": E,
        } = e,
        I = (0, u.bG)([eC.A], () => eC.A.getStatus(t.id)),
        m = (0, eg.rm)(String(t.id));
    return (0, i.jsx)(c.D, {
        id: `user-row-${n}`,
        className: eh()(eN.Se, { [eN.r9]: d }),
        onClick: () => {
            h?.(t.id);
        },
        onMouseEnter: () => {
            g?.(n);
        },
        ...m,
        role: "checkbox",
        "aria-checked": o,
        "aria-disabled": d,
        "aria-setsize": A,
        "aria-posinset": E,
        children: (0, i.jsxs)(em.A, {
            align: em.A.Align.CENTER,
            className: eh()(eN.Bc, { [eN.oz]: a }),
            children: [
                (0, i.jsx)(eI.A, { user: t, status: I, className: eN.my }),
                (0, i.jsxs)("div", {
                    className: eN.YW,
                    children: [
                        (0, i.jsx)(f.E, {
                            tag: "strong",
                            className: eN.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != s && s === t.tag
                                    ? er.Ay.getName(t)
                                    : null != s && "" !== s
                                      ? s
                                      : er.Ay.getName(t),
                        }),
                        (0, i.jsxs)(f.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: null != r && r.length > 0 ? eN.dj : void 0,
                            children: [
                                (0, i.jsx)(eE.A, {
                                    user: t,
                                    hideDiscriminator: l,
                                    className: eN.xK,
                                    forceUsername: !0,
                                }),
                                null != r && r.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(ep.A, {
                                                  height: 2,
                                                  width: 2,
                                                  "aria-hidden": "true",
                                                  className: eN.a6,
                                              }),
                                              (0, i.jsx)(ef.A, {
                                                  className: eN.gP,
                                                  guilds: r,
                                                  maxGuilds: 3,
                                                  size: eS.Ay.Sizes.SMOL,
                                              }),
                                              (0, i.jsx)("span", {
                                                  className: eN.tz,
                                                  children:
                                                      1 === r.length
                                                          ? r[0].name
                                                          : e_.intl.format(e_.t.E215W7, { count: r.length }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(eA.P, { checked: o, disabled: d }),
            ],
        }),
    });
}
var ev = n(652215),
    eM = n(650583),
    ey = n(426057);
let eD = (0, j.Ld)(),
    ex = (e) => {
        let { channel: t, onClose: n } = e,
            l = (0, b.Ay)(t) ?? "",
            s = (0, u.bG)([X.Ay], () => X.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(c.D, {
            onClick: () => {
                (0, H.uh)(ev.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: ey.us,
                children: [
                    (0, i.jsx)(h.eu, { src: (0, G.Y)(t), size: g._3.SIZE_24, "aria-label": l }),
                    (0, i.jsx)("span", { className: ey.J2, children: l }),
                    (0, i.jsx)("span", { className: ey.Pd, children: a()(es.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    eR = (e) => {
        let { onConfirm: t, channelIds: n, ...l } = e,
            s = (0, u.yK)([z.A], () => Array.from(n).map(z.A.getChannel), [n]);
        return (0, i.jsx)(o.Modal, {
            title: e_.intl.string(e_.t.uFHxNd),
            subtitle: e_.intl.string(e_.t.rIsSqE),
            actions: [
                { variant: "secondary", text: e_.intl.string(e_.t["ETE/oC"]), onClick: l.onClose },
                {
                    variant: "primary",
                    text: e_.intl.string(e_.t.KCNNJu),
                    onClick: () => {
                        t(), l.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(f.E, {
                variant: "text-md/normal",
                className: ey.Jv,
                children: e_.intl.string(e_.t.cjE7wH),
            }),
            ...l,
            children: s
                .filter(el.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return es.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(ex, { onClose: l.onClose, channel: e }, e.id)),
        });
    };
class eO extends l.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0 };
    static contextType = k.Ay;
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
        T.h.wait(() => x.open(e?.id));
        let t = (0, w.dI)(e);
        et.default.track(ev.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            ei._.subscribe(ev.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            ei._.subscribe(ev.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        ei._.unsubscribe(ev.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            ei._.unsubscribe(ev.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            T.h.wait(() => x.close());
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
        return !Q.A.isFriend(n) && !t;
    }
    allowNonFriendRecipientPicker() {
        return this.props.hasGuilds && eo.A.getConfig({ location: "PrivateChannelRecipientsInviteModal" }).enabled;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let t = (function (e) {
            let { location: t } = e,
                { inviteMaxAgeSeconds: n } = eu.getConfig({ location: t });
            return n;
        })({ location: "5326c5_1" });
        D.Ay.createInvite(e.id, { max_age: t }, ev.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = ee.default.getCurrentUser();
        return null != t && t.isStaff() ? ev.$aF : null != e && e.userLimit > 0 ? e.userLimit : ev.wLU;
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
            l = t.size > 1 || null != e ? e_.intl.string(e_.t["h1/FMu"]) : e_.intl.string(e_.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: l };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            l = 0 === t.size || n < 0;
        return (0, i.jsx)(A.$, {
            variant: "primary",
            text: e_.intl.string(e_.t.OYkgVk),
            disabled: l,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        let { addToDMUpdatesEnabled: e } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) return e_.intl.string(e_.t.Xjlbvs);
        if (this.isPartyFull()) return e_.intl.string(e_.t.OtTQDz);
        let { channel: t } = this.props;
        return null == t
            ? e_.intl.string(e_.t.jD1qzM)
            : t.isDM() && e
              ? e_.intl.string(e_.t.IIOxgV)
              : eo.A.getConfig({ location: "PrivateChannelRecipientsInviteModal" }).enabled
                ? e_.intl.string(t.isMultiUserDM() ? e_.t.FFxUQ0 : e_.t["PWkO7+"])
                : e_.intl.string(t.isMultiUserDM() ? e_.t.AQAPts : e_.t.Xjlbvs);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t && !this.allowNonFriendRecipientPicker()) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = ee.default.getUser(t),
                        n = null != e ? e.username : "";
                    return e_.intl.format(e_.t["eg+R9x"], { username: n });
                }
            }
            return e_.intl.string(e_.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = ee.default.getUser(t),
                i = null != n ? n.username : "";
            return e_.intl.format(e_.t["eg+R9x"], { username: i });
        }
        let n = eo.A.getConfig({ location: "PrivateChannelRecipientsInviteModal" }).enabled;
        if (null == e && n) return e_.intl.format(e_.t.t9mhPt, { number: this.getMaxParticipants() });
        let i = this.getRemaining();
        return i <= 0
            ? e_.intl.formatToPlainString(e_.t.xYr004, { number: this.getMaxParticipants() })
            : n
              ? e_.intl.formatToPlainString(e_.t.barkEr, { number: i })
              : e_.intl.formatToPlainString(e_.t.HrSDPF, { number: i });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, results: i, query: l } = this.props,
            { current: s } = this.searchBarRef;
        if (null == s) return;
        let r = t;
        switch (e.key) {
            case eM.dh.BACKSPACE:
                (null == l || 0 === l.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case eM.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++r >= i.length && (r = 0), this.handleSelectionChange(r);
                break;
            case eM.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --r < 0 && (r = i.length - 1), this.handleSelectionChange(r);
                break;
            case eM.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), i.length > r && this.handleSelect(r);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (((!t || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return null;
        let l = (0, eo.G)(),
            s = [];
        n.forEach((e) => {
            let t = ee.default.getUser(e);
            null != t &&
                s.push({
                    id: e,
                    label: er.Ay.getName(t),
                    icon: l ? { type: "avatar", src: t.getAvatarURL(void 0, 32) } : void 0,
                });
        });
        let { results: r, selectedRow: a } = this.props,
            o = r.length > 0,
            u = !1;
        if (l)
            for (let e of n) {
                if (Q.A.isFriend(e)) continue;
                let t = ee.default.getUser(e);
                if (null != t && !t.bot) {
                    u = !0;
                    break;
                }
            }
        return (0, i.jsxs)("div", {
            className: ey.ON,
            children: [
                (0, i.jsx)(E.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    helperText: l ? e_.intl.string(u ? e_.t.xHuK72 : e_.t.FIHggl) : void 0,
                    placeholder: 0 === n.size ? (l ? e_.intl.string(e_.t["5h0QOP"]) : e_.intl.string(e_.t.K5e6bn)) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: s, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": eD,
                    "aria-expanded": o,
                    "aria-activedescendant": o ? `user-row-${a}` : void 0,
                }),
                this.renderAddUsersButton(),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: ey.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(I.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(O.A, { className: ey.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return (!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: e_.intl.format(e_.t.xYr004, { number: this.getMaxParticipants() }) })
              : null;
    }
    getListProps() {
        let { hasFriends: e, results: t, channel: n } = this.props;
        if (!(((!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()))
            return 0 === t.length
                ? {
                      sections: [1],
                      sectionHeight: 0,
                      rowHeight: 32,
                      renderRow: () => {
                          if (eo.A.getConfig({ location: "PrivateChannelRecipientsInviteModal" }).enabled) {
                              let e = null != n && n.isMultiUserDM();
                              return (0, i.jsxs)("div", {
                                  className: ey.wV,
                                  children: [
                                      (0, i.jsx)(f.E, {
                                          variant: "text-md/normal",
                                          color: "text-default",
                                          children: e_.intl.string(e_.t.z3yXsY),
                                      }),
                                      (0, i.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: e_.intl.string(e ? e_.t["l6Rj+t"] : e_.t["7w2iq7"]),
                                      }),
                                  ],
                              });
                          }
                          return (0, i.jsx)("div", {
                              className: ey.wV,
                              children: (0, i.jsx)(f.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: e_.intl.string(e_.t.z3yXsY),
                              }),
                          });
                      },
                  }
                : {
                      ref: this.scrollerRef,
                      sections: [t.length],
                      className: ey.XG,
                      innerClassName: ey.bv,
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
                      innerId: eD,
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
        let { results: l, selectedUsers: s, selectedRow: r, hideDiscriminator: a, channel: o } = this.props,
            u = l[n];
        if (null == u) return null;
        let { user: d, comparator: c, mutualGuilds: h } = u,
            g = s.has(d.id) || o?.recipients.includes(d.id),
            f = (!g && 0 >= this.getRemaining()) || o?.recipients.includes(d.id);
        return (0, i.jsx)(
            eT,
            {
                row: n,
                user: d,
                hideDiscriminator: a,
                comparator: c,
                mutualGuilds: h,
                checked: g,
                disabled: f,
                selected: n === r,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": n + 1,
                "aria-setsize": l.length,
            },
            d.id,
        );
    };
    renderSection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: l } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let s = eo.A.getConfig({ location: "PrivateChannelRecipientsInviteModal" }).enabled,
            r = null != t ? (0, V.A)(t.code) : "",
            a = r.length > 0;
        return (0, i.jsx)(m.D, {
            label: s ? e_.intl.string(e_.t.dTqtcN) : e_.intl.string(e_.t.t3O2BR),
            helperText: r.length > 0 ? e_.intl.format(e_.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(S.e, {
                supportsCopy: en.p5,
                placeholder: (0, V.A)(e_.intl.string(e_.t.lPVBqP)),
                value: a ? (n ? e_.intl.string(e_.t["6HzNgZ"]) : r) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: a ? (l ? e_.intl.string(e_.t.q30c5i) : e_.intl.string(e_.t.OpuAlK)) : e_.intl.string(e_.t.qzxqUf),
                mode: l ? S.q.SUCCESS : S.q.DEFAULT,
                onCopy: () => {
                    a ? this.handleCopyInvite(r) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n, addToDMUpdatesEnabled: l } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = ee.default.getUser(e),
                i = null != n && Q.A.getRelationshipType(n.id) === ev.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? e_.intl.string(e_.t.xMH6vD) : e_.intl.string(e_.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e && !this.allowNonFriendRecipientPicker())
            return {
                actions: [
                    { variant: "primary", text: e_.intl.string(e_.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t || (t.isDM() && l)) {
            let e = null != t || n.size > 1,
                s = new Set(t?.isDM() && l ? [t.getRecipientId(), ...n] : n);
            return {
                actionBarInput: e
                    ? (0, i.jsx)(eU, {
                          previewIcon: this.state.previewIcon,
                          selectedUsers: s,
                          channelName: this.state.newChannelName,
                          onChange: this.handleChannelNameChange,
                          onIconChange: this.handleIconChange,
                          onIconRemove: this.handleIconRemove,
                      })
                    : void 0,
                actions: [
                    { variant: "secondary", text: e_.intl.string(e_.t["ETE/oC"]), onClick: this.props.onClose },
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
            { actionBarInput: n, actions: l } = this.getFooterProps();
        return (0, i.jsx)(o.Modal, {
            transitionState: e ?? p.ip.ENTERED,
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
                discordTag: er.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        x.select(e);
    };
    handleSelect = (e) => {
        let { results: t, channel: n } = this.props;
        if (null == e) x.clear(n?.id);
        else if (null != t) {
            let n = t[e];
            this.handleClick(n.user.id);
        }
    };
    handleSelectionChange = (e) => {
        x.select(e);
        let t = this.scrollerRef.current;
        null != t && t.scrollToIndex({ section: 0, row: e, padding: 8 });
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, w.dI)(t);
        x.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                et.default.track(ev.HAw.SEARCH_USER_LIST_STARTED, {
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
        x.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            x.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: i } = this.props;
        i?.recipients.includes(e) ||
            (t.has(e)
                ? x.removeUser(e)
                : this.getRemaining() > 0 && (x.addUser(e), n.length > 0 && (x.clear(i?.id), this.forceFocus())));
    };
    handleAddFriendNavigation = () => {
        y.A.transitionToSection(ev.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
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
            (null != n.name || null != n.icon) && M.A.updateChannel(e, n, t),
            et.default.track(ev.HAw.GDM_EDIT_INTERACTED, {
                channel_id: e,
                channel_type: ev.rbe.GROUP_DM,
                location: t,
                new_name_set: "" !== this.state.newChannelName,
                new_icon_set: null != this.state.previewIcon,
            });
    };
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            i = (0, w.dI)(n),
            l = !0;
        1 === e.length && (l = null == M.A._openCachedDMChannel(e[0])),
            et.default.track(ev.HAw.CREATE_DM_USER_LIST_CLICKED, {
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
            M.A.openPrivateChannel({ recipientIds: e, location: "New Group DM" }).then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, L.A.NEW_GROUP_DM_INVITE_MODAL);
            });
    };
    pushToExistingDM = (e, t) => {
        let { addToDMUpdatesEnabled: n } = this.props,
            i = this._searchCounter,
            l = (0, w.dI)(e),
            s = K.A.getChannelId() === e.id;
        M.A.addRecipients(e.id, t, ev.ThZ.ADD_FRIENDS_TO_DM).then((i) => {
            if ((this.props.onComplete?.(i), n && this.updateGDM(i, ev.ThZ.ADD_FRIENDS_TO_DM), s)) {
                if (e.isDM() && i !== e.id) return void v.A.call(i, !1, !0);
                v.A.ring(i, t, "dm_invite");
            }
        }),
            et.default.track(ev.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...l,
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
            l = Array.from(t);
        if (null != e) {
            let t = ej(Array.from(new Set([...e.recipients, ...l])));
            t.size > 0
                ? (0, C.openModal)(
                      (n) => (0, i.jsx)(eR, { ...n, onConfirm: () => this.pushToExistingDM(e, l), channelIds: t }),
                      {},
                      (0, C.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, l);
        } else {
            let e = ej(l);
            l.length > 1 && e.size > 0
                ? (0, C.openModal)(
                      (t) => (0, i.jsx)(eR, { ...t, onConfirm: () => this.createNewDM(l), channelIds: e }),
                      {},
                      (0, C.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(l);
        }
        n();
    };
    handleCopyInvite = (e) => {
        let { channel: t, invite: n } = this.props;
        null != n && (0, en.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            et.default.track(ev.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: ev.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function eU(e) {
    let { selectedUsers: t, channelName: n, previewIcon: l, onIconChange: s, onIconRemove: r, onChange: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(L.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, b.Jo)(Array.from(t), ee.default, Q.A);
    return (0, i.jsxs)("div", {
        className: ey.zj,
        children: [
            (0, i.jsx)(F.X, {
                className: ey.r9,
                channel: null,
                previewIcon: l,
                onIconChange: s,
                onIconRemove: r,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(f.E, {
                className: ey.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: e_.intl.string(e_.t.YynaLK),
            }),
            (0, i.jsx)(E.k, {
                "aria-label": e_.intl.string(e_.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: a,
            }),
        ],
    });
}
function eL(e) {
    let { channel: t, onComplete: n, ...l } = e,
        s = (0, u.cf)([$.A, J.A, q.A, Z.A], () => {
            let e;
            return (
                null != t && null != (e = J.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...$.A.getState(),
                    invite: e,
                    hideDiscriminator: q.A.hidePersonalInformation,
                    hideInstantInvites: q.A.hideInstantInvites,
                    hasGuilds: Z.A.getGuildCount() > 0,
                }
            );
        }),
        r = (0, u.bG)(
            [ee.default],
            () =>
                !!ee.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => ee.default.getUser(e)?.isStaff()),
            [t],
        ),
        { enabled: a } = ea.A.useConfig({
            location: t?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
        });
    return (0, i.jsx)(eO, {
        channel: t,
        isStaffOnlyDM: r,
        onComplete: n,
        addToDMUpdatesEnabled: !!(t?.isDM() && a),
        ...l,
        ...s,
    });
}
function ew(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        r = (0, C.useHasModalOpen)(s),
        a = l.useCallback(
            () =>
                (0, C.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(eL, { ...e, channel: t })), {
                    modalKey: s,
                }),
            [t, s],
        ),
        o = l.useCallback(() => (r ? (0, C.closeModal)(s) : a()), [r, s, a]);
    return (
        l.useEffect(
            () => (
                n && ei._.subscribe(ev.jej.TOGGLE_DM_CREATE, o),
                () => {
                    ei._.unsubscribe(ev.jej.TOGGLE_DM_CREATE, o);
                }
            ),
            [n, o],
        ),
        (0, U.Ay)(() => {
            (0, B.u)();
        }),
        { showModal: a, toggleVisible: o }
    );
}
function eP(e) {
    let { channel: t, onComplete: n } = e,
        l = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, C.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(eL, { ...e, channel: t, onComplete: n })), {
        modalKey: l,
    });
}
function eG(e) {
    let {
            channel: t,
            iconClassName: n,
            className: s,
            icon: r,
            tooltip: a,
            tooltipPosition: o = "bottom",
            subscribeToGlobalHotkey: d = !1,
        } = e,
        c = l.useRef(null),
        h = r ?? (null == t ? _.g : N.D),
        { showModal: g } = ew({ channel: t, subscribeToGlobalHotkey: d }),
        f = (0, u.bG)([ee.default], () => ee.default.getUser(t?.getRecipientId()));
    return f?.bot || f?.isProvisional
        ? null
        : (0, i.jsx)(ed.Ay.Icon, {
              ref: c,
              onClick: g,
              icon: h,
              className: s,
              iconClassName: n,
              tooltip: a,
              tooltipPosition: o,
          });
}
function eb(e) {
    let { channel: t, fullWidth: n = !1, text: s, icon: r, subscribeToGlobalHotkey: a = !1, ...o } = e,
        u = l.useRef(null),
        { showModal: d } = ew({ channel: t, subscribeToGlobalHotkey: a });
    return (0, i.jsx)(A.$, {
        ...o,
        onClick: d,
        variant: "primary",
        buttonRef: u,
        text: s,
        "aria-label": s,
        icon: r,
        fullWidth: n,
    });
}
function ej(e) {
    let t = eF(e);
    return new Set(
        (0, s.chain)(z.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, W.MK)(e.type))
            .filter((e) => eF(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function eF(e) {
    return JSON.stringify(e.sort());
}
