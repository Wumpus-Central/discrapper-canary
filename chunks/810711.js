n.d(t, { Jz: () => e$, Ay: () => eK, NE: () => eX }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n(989349),
    a = n.n(r),
    o = n(189213),
    u = n(17928),
    d = n(862482),
    c = n(691540),
    h = n(857250),
    g = n(97483),
    f = n(939249),
    A = n(97808),
    E = n(778712),
    I = n(834730),
    p = n(821609),
    S = n(292666),
    m = n(187322),
    C = n(289873),
    _ = n(320448),
    N = n(847374),
    T = n(534514),
    v = n(452027),
    M = n(109802),
    y = n(231723),
    D = n(192308);
if (21552 == n.j) var R = n(888366);
if (21552 == n.j) var x = n(241541);
var O = n(228366),
    U = n(387755),
    L = n(308528),
    w = n(711950),
    P = n(376728);
let G = {
    search(e, t) {
        O.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: e, channelId: t });
    },
    clear(e) {
        O.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: "", channelId: e });
    },
    select(e) {
        O.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT", row: e });
    },
    addUser(e) {
        O.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER", userId: e });
    },
    removeUser(e) {
        O.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER", userId: e });
    },
    open(e) {
        O.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e });
    },
    close() {
        O.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
var F = n(717398),
    b = n(684136),
    j = n(964486),
    V = n(793574),
    k = n(95561),
    H = n(688810),
    B = n(571694),
    Y = n(47167),
    W = n(915089),
    z = n(66442),
    Z = n(774300);
let J = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
});
function $(e) {
    let { location: t } = e,
        { inviteMaxAgeSeconds: n } = J.getConfig({ location: t });
    return n;
}
var K = n(287809),
    X = n(427262),
    Q = n(652215),
    q = n(375708);
async function ee(e, t) {
    if (0 !== t.length)
        try {
            let n = await P.Ay.createInvite(e, { max_age: $({ location: "5326c5_1" }) }, Q.PE1.GROUP_DM),
                i = new Set();
            for (let e of t) {
                let t = K.default.getUser(e);
                null == t ||
                    t.bot ||
                    (Z.A.enqueue(
                        {
                            inviteKey: n.code,
                            type: Z.F.USER,
                            user: t,
                            location: Q.PE1.GROUP_DM,
                            inviteAnalyticsMetadata: { source: Q.PE1.GROUP_DM },
                        },
                        () => {},
                    ),
                    i.add(t));
            }
            i.size > 0 &&
                (function (e) {
                    let t = Array.from(e).map((e) => X.Ay.getName(e));
                    if (0 === t.length) return;
                    let n = q.intl.formatToPlainString(q.t.gztrTs, {
                        inviteCount: t.length,
                        username1: t[0],
                        username2: t[1] ?? "",
                        remaining: Math.max(0, t.length - 2),
                    });
                    (0, c.P0)((0, h.o)(n, g.Ck.SUCCESS));
                })(i);
        } catch {
            (0, c.P0)((0, h.o)(q.intl.string(q.t.iRntUl), g.Ck.FAILURE));
        }
}
var et = n(279208),
    en = n(267102),
    ei = n(976860),
    el = n(219271),
    es = n(427358),
    er = n(95701),
    ea = n(734057),
    eo = n(71393),
    eu = n(958590),
    ed = n(584777),
    ec = n(763827),
    eh = n(222823),
    eg = n(994500),
    ef = n(351906),
    eA = n(174459),
    eE = n(957565),
    eI = n(625494),
    ep = n(403362),
    eS = n(935208),
    em = n(41e4),
    eC = n(18707),
    e_ = n(58736),
    eN = n(503698),
    eT = n.n(eN),
    ev = n(837381),
    eM = n(692617),
    ey = n(658675),
    eD = n(297413),
    eR = n(966327),
    ex = n(235986),
    eO = n(548118),
    eU = n(640708),
    eL = n(290863),
    ew = n(973081);
function eP(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: l,
            comparator: s,
            mutualGuilds: r,
            selected: a,
            checked: o,
            disabled: d = !1,
            onClick: c,
            onMouseEnter: h,
            "aria-setsize": g,
            "aria-posinset": A,
        } = e,
        E = (0, u.bG)([eL.A], () => eL.A.getStatus(t.id)),
        p = (0, ev.rm)(String(t.id));
    return (0, i.jsx)(f.D, {
        id: `user-row-${n}`,
        className: eT()(ew.Se, { [ew.r9]: d }),
        onClick: () => {
            c?.(t.id);
        },
        onMouseEnter: () => {
            h?.(n);
        },
        ...p,
        role: "checkbox",
        "aria-checked": o,
        "aria-disabled": d,
        "aria-setsize": g,
        "aria-posinset": A,
        children: (0, i.jsxs)(ex.A, {
            align: ex.A.Align.CENTER,
            className: eT()(ew.Bc, { [ew.oz]: a }),
            children: [
                (0, i.jsx)(eR.A, { user: t, status: E, className: ew.my }),
                (0, i.jsxs)("div", {
                    className: ew.YW,
                    children: [
                        (0, i.jsx)(I.E, {
                            tag: "strong",
                            className: ew.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != s && s === t.tag
                                    ? X.Ay.getName(t)
                                    : null != s && "" !== s
                                      ? s
                                      : X.Ay.getName(t),
                        }),
                        (0, i.jsxs)(I.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: null != r && r.length > 0 ? ew.dj : void 0,
                            children: [
                                (0, i.jsx)(eD.A, {
                                    user: t,
                                    hideDiscriminator: l,
                                    className: ew.xK,
                                    forceUsername: !0,
                                }),
                                null != r && r.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(eU.A, {
                                                  height: 2,
                                                  width: 2,
                                                  "aria-hidden": "true",
                                                  className: ew.a6,
                                              }),
                                              (0, i.jsx)(eM.A, {
                                                  className: ew.gP,
                                                  guilds: r,
                                                  maxGuilds: 3,
                                                  size: eO.Ay.Sizes.SMOL,
                                              }),
                                              (0, i.jsx)("span", {
                                                  className: ew.tz,
                                                  children:
                                                      1 === r.length
                                                          ? r[0].name
                                                          : q.intl.format(q.t.E215W7, { count: r.length }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(ey.P, { checked: o, disabled: d }),
            ],
        }),
    });
}
var eG = n(650583),
    eF = n(426057);
let eb = (0, W.Ld)();
function ej(e) {
    if (eg.A.isFriend(e)) return !0;
    let t = K.default.getCurrentUser(),
        n = K.default.getUser(e);
    return !!(t?.isStaff() && n?.isStaff());
}
function eV(e) {
    let t = [],
        n = [];
    for (let i of e) ej(i) ? t.push(i) : n.push(i);
    return { channelRecipientIds: t, inviteLinkOnlyUserIds: n };
}
function ek(e) {
    let { recipientIds: t, location: n, useGroupDmShell: i = !1 } = e;
    return i && 1 === t.length
        ? L.A.createGroupDmShell({ recipientId: t[0], location: n })
        : L.A.openPrivateChannel({ recipientIds: t, location: n });
}
function eH() {
    (0, c.P0)((0, h.o)(q.intl.string(q.t.fEptJP), g.Ck.FAILURE));
}
let eB = (e) => {
        let { channel: t, onClose: n } = e,
            l = (0, Y.Ay)(t) ?? "",
            s = (0, u.bG)([eh.Ay], () => eh.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(f.D, {
            onClick: () => {
                (0, ei.uh)(Q.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: eF.us,
                children: [
                    (0, i.jsx)(A.eu, { src: (0, B.Y)(t), size: E._3.SIZE_24, "aria-label": l }),
                    (0, i.jsx)("span", { className: eF.J2, children: l }),
                    (0, i.jsx)("span", { className: eF.Pd, children: a()(eS.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    eY = (e) => {
        let { onConfirm: t, channelIds: n, ...l } = e,
            s = (0, u.yK)([ea.A], () => Array.from(n).map(ea.A.getChannel), [n]);
        return (0, i.jsx)(o.Modal, {
            title: q.intl.string(q.t.uFHxNd),
            subtitle: q.intl.string(q.t.rIsSqE),
            actions: [
                { variant: "secondary", text: q.intl.string(q.t["ETE/oC"]), onClick: l.onClose },
                {
                    variant: "primary",
                    text: q.intl.string(q.t.KCNNJu),
                    onClick: () => {
                        t(), l.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(I.E, {
                variant: "text-md/normal",
                className: eF.Jv,
                children: q.intl.string(q.t.cjE7wH),
            }),
            ...l,
            children: s
                .filter(ep.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return eS.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(eB, { onClose: l.onClose, channel: e }, e.id)),
        });
    };
class eW extends l.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0, collapsedSections: new Set() };
    static contextType = en.Ay;
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
        O.h.wait(() => G.open(e?.id));
        let t = (0, k.dI)(e);
        eA.default.track(Q.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            eI._.subscribe(Q.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            eI._.subscribe(Q.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        eI._.unsubscribe(Q.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            eI._.unsubscribe(Q.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            O.h.wait(() => G.close());
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
        return !eg.A.isFriend(n) && !t;
    }
    allowNonFriendRecipientPicker() {
        return this.props.hasGuilds && (0, eC.G)("PrivateChannelRecipientsInvite");
    }
    getResultsSections() {
        let { results: e, query: t, isLoading: n } = this.props;
        if (!this.allowNonFriendRecipientPicker() || "" === t) return null;
        let i = [],
            l = [];
        for (let t of e) eg.A.isFriend(t.user.id) ? i.push(t) : l.push(t);
        let s = [];
        return (
            i.length > 0 && s.push({ type: "friends", results: i, showSpinner: !1 }),
            (l.length > 0 || n) && s.push({ type: "serverMembers", results: l, showSpinner: n }),
            s
        );
    }
    getDisplayedResults() {
        let e = this.getResultsSections();
        if (null == e) return this.props.results;
        let { collapsedSections: t } = this.state,
            n = [];
        for (let i of e) t.has(i.type) || n.push(...i.results);
        return n;
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let t = $({ location: "5326c5_1" });
        P.Ay.createInvite(e.id, { max_age: t }, Q.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = K.default.getCurrentUser();
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
            l = t.size > 1 || null != e ? q.intl.string(q.t["h1/FMu"]) : q.intl.string(q.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: l };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            l = 0 === t.size || n < 0;
        return (0, i.jsx)(p.$, {
            variant: "primary",
            text: q.intl.string(q.t.OYkgVk),
            disabled: l,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        let { addToDMUpdatesEnabled: e } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) return q.intl.string(q.t.Xjlbvs);
        if (this.isPartyFull()) return q.intl.string(q.t.OtTQDz);
        let { channel: t } = this.props;
        return null == t
            ? q.intl.string(q.t.jD1qzM)
            : t.isDM() && e
              ? q.intl.string(q.t.IIOxgV)
              : (0, eC.G)("PrivateChannelRecipientsInvite")
                ? q.intl.string(t.isMultiUserDM() ? q.t.FFxUQ0 : q.t["PWkO7+"])
                : q.intl.string(t.isMultiUserDM() ? q.t.AQAPts : q.t.Xjlbvs);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t && !this.allowNonFriendRecipientPicker()) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = K.default.getUser(t),
                        n = null != e ? e.username : "";
                    return q.intl.format(q.t["eg+R9x"], { username: n });
                }
            }
            return q.intl.string(q.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = K.default.getUser(t),
                i = null != n ? n.username : "";
            return q.intl.format(q.t["eg+R9x"], { username: i });
        }
        let n = (0, eC.G)("PrivateChannelRecipientsInvite");
        if (null == e && n) return q.intl.format(q.t.t9mhPt, { number: this.getMaxParticipants() });
        let i = this.getRemaining();
        return i <= 0
            ? q.intl.formatToPlainString(q.t.xYr004, { number: this.getMaxParticipants() })
            : n
              ? q.intl.formatToPlainString(q.t.barkEr, { number: i })
              : q.intl.formatToPlainString(q.t.HrSDPF, { number: i });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, query: i } = this.props,
            { current: l } = this.searchBarRef;
        if (null == l) return;
        let s = this.getDisplayedResults(),
            r = t;
        switch (e.key) {
            case eG.dh.BACKSPACE:
                (null == i || 0 === i.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case eG.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++r >= s.length && (r = 0), this.handleSelectionChange(r);
                break;
            case eG.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --r < 0 && (r = s.length - 1), this.handleSelectionChange(r);
                break;
            case eG.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), s.length > r && this.handleSelect(r);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (((!t || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return null;
        let l = (0, eC.G)("PrivateChannelRecipientsInvite"),
            s = [];
        n.forEach((e) => {
            let t = K.default.getUser(e);
            null != t &&
                s.push({
                    id: e,
                    label: X.Ay.getName(t),
                    icon: l ? { type: "avatar", src: t.getAvatarURL(void 0, 32) } : void 0,
                });
        });
        let { results: r, selectedRow: a, isLoading: o } = this.props,
            u = r.length > 0 || o,
            d = !1;
        if (l)
            for (let e of n) {
                if (eg.A.isFriend(e)) continue;
                let t = K.default.getUser(e);
                if (null != t && !t.bot) {
                    d = !0;
                    break;
                }
            }
        return (0, i.jsxs)("div", {
            className: eF.ON,
            children: [
                (0, i.jsx)(S.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    helperText: l ? q.intl.string(d ? q.t.xHuK72 : q.t.FIHggl) : void 0,
                    placeholder: 0 === n.size ? (l ? q.intl.string(q.t["5h0QOP"]) : q.intl.string(q.t.K5e6bn)) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: s, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": eb,
                    "aria-expanded": u,
                    "aria-activedescendant": u ? `user-row-${a}` : void 0,
                }),
                this.renderAddUsersButton(),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: eF.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(m.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(b.A, { className: eF.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return (!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: q.intl.format(q.t.xYr004, { number: this.getMaxParticipants() }) })
              : null;
    }
    getListProps() {
        let { hasFriends: e, results: t } = this.props;
        if (((!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return;
        let n = this.getResultsSections();
        return null != n
            ? 0 === n.length
                ? this.getEmptyStateListProps()
                : this.getSectionedListProps(n)
            : 0 === t.length
              ? this.getEmptyStateListProps()
              : {
                    ref: this.scrollerRef,
                    sections: [t.length],
                    className: eF.XG,
                    innerClassName: eF.bv,
                    renderRow: this.renderFlatRow,
                    rowHeight: this.getFlatRowHeight,
                    renderSection: this.renderEmptySection,
                    sectionHeight: 0,
                    onScroll: this.handleScroll,
                    paddingTop: 0,
                    paddingBottom: 14,
                    fade: !0,
                    role: void 0,
                    innerRole: "group",
                    innerId: eb,
                };
    }
    getEmptyStateListProps() {
        let { channel: e } = this.props;
        return {
            sections: [1],
            sectionHeight: 0,
            rowHeight: 32,
            renderRow: () => {
                if ((0, eC.G)("PrivateChannelRecipientsInvite")) {
                    let t = null != e && e.isMultiUserDM();
                    return (0, i.jsxs)("div", {
                        className: eF.wV,
                        children: [
                            (0, i.jsx)(I.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: q.intl.string(q.t.z3yXsY),
                            }),
                            (0, i.jsx)(I.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: q.intl.string(t ? q.t["l6Rj+t"] : q.t["7w2iq7"]),
                            }),
                        ],
                    });
                }
                return (0, i.jsx)("div", {
                    className: eF.wV,
                    children: (0, i.jsx)(I.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: q.intl.string(q.t.z3yXsY),
                    }),
                });
            },
        };
    }
    getSectionedListProps(e) {
        let { collapsedSections: t } = this.state,
            n = Array(e.length).fill(-1),
            l = 0;
        for (let i = 0; i < e.length; i++) t.has(e[i].type) || ((n[i] = l), (l += e[i].results.length));
        let s = l;
        return {
            ref: this.scrollerRef,
            sections: e.map((e) => e.results.length + +!!e.showSpinner),
            className: eF.XG,
            innerClassName: eF.bv,
            renderRow: (l) => {
                let { section: r, row: a } = l,
                    o = e[r];
                if (null == o || t.has(o.type)) return null;
                if (a >= o.results.length)
                    return (0, i.jsx)("div", {
                        className: eF.Q_,
                        children: (0, i.jsx)(C.y, { type: C.t.SPINNING_CIRCLE, className: eF.u1 }),
                    });
                let u = o.results[a];
                if (null == u) return null;
                let d = n[r] + a;
                return this.renderUserRow(u, d, s);
            },
            rowHeight: (n, i) => {
                let l = e[n];
                return null == l || t.has(l.type) ? 0 : i >= l.results.length ? 40 : 48 * (null != l.results[i]);
            },
            renderSection: (n) => {
                let { section: l } = n,
                    s = e[l];
                if (null == s) return null;
                let r = t.has(s.type),
                    a = "friends" === s.type ? q.intl.string(q.t.TdEu5X) : q.intl.string(q.t.y29JXs),
                    o = r ? _._ : N.a;
                return (0, i.jsxs)(f.D, {
                    className: eF.bV,
                    onClick: () => this.handleSectionToggle(s.type),
                    "aria-expanded": !r,
                    "aria-label": a,
                    children: [
                        (0, i.jsx)(T.D, { variant: "heading-sm/semibold", color: "text-muted", children: a }),
                        (0, i.jsx)(o, { size: "xxs" }),
                    ],
                });
            },
            sectionHeight: 32,
            onScroll: this.handleScroll,
            paddingTop: 0,
            paddingBottom: 14,
            fade: !0,
            role: void 0,
            innerRole: "group",
            innerId: eb,
        };
    }
    handleSectionToggle = (e) => {
        this.setState(
            (t) => {
                let { collapsedSections: n } = t,
                    i = new Set(n);
                return i.has(e) ? i.delete(e) : i.add(e), { collapsedSections: i };
            },
            () => {
                let e = this.getDisplayedResults();
                this.props.selectedRow >= e.length && G.select(Math.max(0, e.length - 1));
            },
        );
    };
    renderUserRow(e, t, n) {
        let { selectedUsers: l, selectedRow: s, hideDiscriminator: r, channel: a } = this.props,
            { user: o, comparator: u, mutualGuilds: d } = e,
            c = l.has(o.id) || a?.recipients.includes(o.id),
            h = (!c && 0 >= this.getRemaining()) || a?.recipients.includes(o.id);
        return (0, i.jsx)(
            eP,
            {
                row: t,
                user: o,
                hideDiscriminator: r,
                comparator: u,
                mutualGuilds: d,
                checked: c,
                disabled: h,
                selected: t === s,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": t + 1,
                "aria-setsize": n,
            },
            o.id,
        );
    }
    getFlatRowHeight = (e, t) => {
        if (e > 0) return 0;
        let { results: n } = this.props;
        return 48 * (null != n[t]);
    };
    renderFlatRow = (e) => {
        let { section: t, row: n } = e;
        if (t > 0) return null;
        let { results: i } = this.props,
            l = i[n];
        return null == l ? null : this.renderUserRow(l, n, i.length);
    };
    renderEmptySection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: l } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let s = (0, eC.G)("PrivateChannelRecipientsInvite"),
            r = null != t ? (0, et.A)(t.code) : "",
            a = r.length > 0;
        return (0, i.jsx)(v.D, {
            label: s ? q.intl.string(q.t.dTqtcN) : q.intl.string(q.t.t3O2BR),
            helperText: r.length > 0 ? q.intl.format(q.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(M.e, {
                supportsCopy: eE.p5,
                placeholder: (0, et.A)(q.intl.string(q.t.lPVBqP)),
                value: a ? (n ? q.intl.string(q.t["6HzNgZ"]) : r) : "",
                buttonColor: d.$n.Colors.BRAND,
                text: a ? (l ? q.intl.string(q.t.q30c5i) : q.intl.string(q.t.OpuAlK)) : q.intl.string(q.t.qzxqUf),
                mode: l ? M.q.SUCCESS : M.q.DEFAULT,
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
            let n = K.default.getUser(e),
                i = null != n && eg.A.getRelationshipType(n.id) === Q.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? q.intl.string(q.t.xMH6vD) : q.intl.string(q.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e && !this.allowNonFriendRecipientPicker())
            return {
                actions: [
                    { variant: "primary", text: q.intl.string(q.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t || (t.isDM() && l)) {
            let e = null != t || n.size > 1,
                s = new Set(t?.isDM() && l ? [t.getRecipientId(), ...n] : n);
            return {
                actionBarInput: e
                    ? (0, i.jsx)(ez, {
                          previewIcon: this.state.previewIcon,
                          selectedUsers: s,
                          channelName: this.state.newChannelName,
                          onChange: this.handleChannelNameChange,
                          onIconChange: this.handleIconChange,
                          onIconRemove: this.handleIconRemove,
                      })
                    : void 0,
                actions: [
                    { variant: "secondary", text: q.intl.string(q.t["ETE/oC"]), onClick: this.props.onClose },
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
            transitionState: e ?? y.ip.ENTERED,
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
            F.A.sendRequest({
                discordTag: X.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        G.select(e);
    };
    handleSelect = (e) => {
        let { channel: t } = this.props;
        if (null == e) return void G.clear(t?.id);
        let n = this.getDisplayedResults()[e];
        null != n && this.handleClick(n.user.id);
    };
    handleSelectionChange = (e) => {
        G.select(e);
        let t = this.scrollerRef.current;
        if (null == t) return;
        let n = this.getResultsSections();
        if (null == n) return void t.scrollToIndex({ section: 0, row: e, padding: 8 });
        let { collapsedSections: i } = this.state,
            l = e;
        for (let e = 0; e < n.length; e++)
            if (!i.has(n[e].type)) {
                if (l < n[e].results.length) return void t.scrollToIndex({ section: e, row: l, padding: 8 });
                l -= n[e].results.length;
            }
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, k.dI)(t);
        G.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                eA.default.track(Q.HAw.SEARCH_USER_LIST_STARTED, {
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
        G.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            G.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: i } = this.props;
        i?.recipients.includes(e) ||
            (t.has(e)
                ? G.removeUser(e)
                : this.getRemaining() > 0 && (G.addUser(e), n.length > 0 && (G.clear(i?.id), this.forceFocus())));
    };
    handleAddFriendNavigation = () => {
        w.A.transitionToSection(Q.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
    };
    handleScroll = () => {
        let e = this.scrollerRef.current;
        null != e && this.setState({ separator: !e.isScrolledToTop() });
    };
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                let t = es.A.getUserAffinity(e);
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
            (null != n.name || null != n.icon) && L.A.updateChannel(e, n, t),
            eA.default.track(Q.HAw.GDM_EDIT_INTERACTED, {
                channel_id: e,
                channel_type: Q.rbe.GROUP_DM,
                location: t,
                new_name_set: "" !== this.state.newChannelName,
                new_icon_set: null != this.state.previewIcon,
            });
    };
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            i = (0, k.dI)(n),
            l = !0;
        1 === e.length && (l = null == L.A._openCachedDMChannel(e[0])),
            eA.default.track(Q.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...i,
                is_new_dm: l,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: e,
                num_searches: t,
                affinity_score: this._getUserAffinities(e).affinities,
                name_is_set: "" !== this.state.newChannelName,
                icon_is_set: null != this.state.previewIcon,
            });
        let s = (0, eC.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: r, inviteLinkOnlyUserIds: a } =
                s && e.length > 1 ? eV(e) : { channelRecipientIds: e, inviteLinkOnlyUserIds: [] };
        ek({ recipientIds: r, location: "New Group DM", useGroupDmShell: s && a.length > 0 })
            .then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, V.A.NEW_GROUP_DM_INVITE_MODAL), ee(e, a);
            })
            .catch(eH);
    };
    pushToExistingDM = (e, t) => {
        let n = (0, eC.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: i, inviteLinkOnlyUserIds: l } = n
                ? eV(t)
                : { channelRecipientIds: t, inviteLinkOnlyUserIds: [] },
            s = e.id;
        e.isGroupDM()
            ? this._addRecipientsToExistingGroupDM(s, i, l)
            : e.isDM() && this._promoteDMToGroupDM(s, e.getRecipientId(), i, l, n),
            eA.default.track(Q.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...(0, k.dI)(e),
                is_new_dm: !0,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: t,
                num_searches: this._searchCounter,
                affinity_score: this._getUserAffinities(t).affinities,
            });
    };
    _addRecipientsToExistingGroupDM = (e, t, n) => {
        let { addToDMUpdatesEnabled: i } = this.props,
            l = ec.A.getChannelId() === e;
        (t.length > 0 ? L.A.addRecipients(e, t, Q.ThZ.ADD_FRIENDS_TO_DM) : Promise.resolve(e))
            .then((e) => {
                this.props.onComplete?.(e),
                    i && this.updateGDM(e, Q.ThZ.ADD_FRIENDS_TO_DM),
                    ee(e, n),
                    l && t.length > 0 && U.A.ring(e, t, "dm_invite");
            })
            .catch(eH);
    };
    _promoteDMToGroupDM = (e, t, n, i, l) => {
        let { addToDMUpdatesEnabled: s } = this.props,
            r = ec.A.getChannelId() === e,
            a = ej(t),
            o = l && a ? [...n, t] : n,
            u = l && !a ? [...i, t] : i;
        (a && n.length > 0
            ? L.A.addRecipients(e, n, Q.ThZ.ADD_FRIENDS_TO_DM)
            : o.length > 0 || u.length > 0
              ? ek({ recipientIds: o, location: "New Group DM", useGroupDmShell: l && u.length > 0 })
              : Promise.resolve(e)
        )
            .then((t) => {
                if ((this.props.onComplete?.(t), s && this.updateGDM(t, Q.ThZ.ADD_FRIENDS_TO_DM), ee(t, u), r)) {
                    if (t !== e) return void U.A.call(t, !1, !0);
                    n.length > 0 && U.A.ring(t, n, "dm_invite");
                }
            })
            .catch(eH);
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            l = Array.from(t);
        if (null != e) {
            let t = eQ(Array.from(new Set([...e.recipients, ...l])));
            t.size > 0
                ? (0, D.openModal)(
                      (n) => (0, i.jsx)(eY, { ...n, onConfirm: () => this.pushToExistingDM(e, l), channelIds: t }),
                      {},
                      (0, D.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, l);
        } else {
            let e = eQ(l);
            l.length > 1 && e.size > 0
                ? (0, D.openModal)(
                      (t) => (0, i.jsx)(eY, { ...t, onConfirm: () => this.createNewDM(l), channelIds: e }),
                      {},
                      (0, D.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(l);
        }
        n();
    };
    handleCopyInvite = (e) => {
        let { channel: t, invite: n } = this.props;
        null != n && (0, eE.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            eA.default.track(Q.HAw.COPY_INSTANT_INVITE, {
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
}
function ez(e) {
    let { selectedUsers: t, channelName: n, previewIcon: l, onIconChange: s, onIconRemove: r, onChange: a } = e,
        { analyticsLocations: o } = (0, H.Ay)(V.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, Y.Jo)(Array.from(t), K.default, eg.A);
    return (0, i.jsxs)("div", {
        className: eF.zj,
        children: [
            (0, i.jsx)(z.X, {
                className: eF.r9,
                channel: null,
                previewIcon: l,
                onIconChange: s,
                onIconRemove: r,
                analyticsLocations: o,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(I.E, {
                className: eF.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: q.intl.string(q.t.YynaLK),
            }),
            (0, i.jsx)(S.k, {
                "aria-label": q.intl.string(q.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: a,
            }),
        ],
    });
}
function eZ(e) {
    let { channel: t, onComplete: n, ...l } = e,
        s = (0, u.cf)([ef.A, ed.A, eu.A, eo.A, eg.A], () => {
            let e;
            return (
                null != t && null != (e = eu.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...ed.A.getState(),
                    hasFriends: eg.A.getFriendCount() > 0,
                    invite: e,
                    hideDiscriminator: ef.A.hidePersonalInformation,
                    hideInstantInvites: ef.A.hideInstantInvites,
                    hasGuilds: eo.A.getGuildCount() > 0,
                }
            );
        }),
        r = (0, u.bG)(
            [K.default],
            () =>
                !!K.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => K.default.getUser(e)?.isStaff()),
            [t],
        ),
        { enabled: a } = em.A.useConfig({
            location: t?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
        });
    return (0, i.jsx)(eW, {
        channel: t,
        isStaffOnlyDM: r,
        onComplete: n,
        addToDMUpdatesEnabled: !!(t?.isDM() && a),
        ...l,
        ...s,
    });
}
function eJ(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        r = (0, D.useHasModalOpen)(s),
        a = l.useCallback(
            () =>
                (0, D.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(eZ, { ...e, channel: t })), {
                    modalKey: s,
                }),
            [t, s],
        ),
        o = l.useCallback(() => (r ? (0, D.closeModal)(s) : a()), [r, s, a]);
    return (
        l.useEffect(
            () => (
                n && eI._.subscribe(Q.jej.TOGGLE_DM_CREATE, o),
                () => {
                    eI._.unsubscribe(Q.jej.TOGGLE_DM_CREATE, o);
                }
            ),
            [n, o],
        ),
        (0, j.Ay)(() => {
            (0, el.u)();
        }),
        { showModal: a, toggleVisible: o }
    );
}
function e$(e) {
    let { channel: t, onComplete: n } = e,
        l = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, D.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(eZ, { ...e, channel: t, onComplete: n })), {
        modalKey: l,
    });
}
function eK(e) {
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
        h = r ?? (null == t ? R.g : x.D),
        { showModal: g } = eJ({ channel: t, subscribeToGlobalHotkey: d }),
        f = (0, u.bG)([K.default], () => K.default.getUser(t?.getRecipientId()));
    return f?.bot || f?.isProvisional
        ? null
        : (0, i.jsx)(e_.Ay.Icon, {
              ref: c,
              onClick: g,
              icon: h,
              className: s,
              iconClassName: n,
              tooltip: a,
              tooltipPosition: o,
          });
}
function eX(e) {
    let { channel: t, fullWidth: n = !1, text: s, icon: r, subscribeToGlobalHotkey: a = !1, ...o } = e,
        u = l.useRef(null),
        { showModal: d } = eJ({ channel: t, subscribeToGlobalHotkey: a });
    return (0, i.jsx)(p.$, {
        variant: "primary",
        ...o,
        onClick: d,
        buttonRef: u,
        text: s,
        "aria-label": s,
        icon: r,
        fullWidth: n,
    });
}
function eQ(e) {
    let t = eq(e);
    return new Set(
        (0, s.chain)(ea.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, er.MK)(e.type))
            .filter((e) => eq(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function eq(e) {
    return JSON.stringify(e.sort());
}
