"use strict";
n.d(t, { Jz: () => eq, Ay: () => eX, NE: () => eZ }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n(989349),
    o = n.n(a),
    l = n(189213),
    u = n(17928),
    c = n(862482),
    d = n(691540),
    _ = n(857250),
    f = n(97483),
    h = n(939249),
    p = n(97808),
    E = n(778712),
    m = n(834730),
    g = n(821609),
    A = n(292666),
    I = n(187322),
    T = n(289873),
    S = n(320448),
    N = n(847374),
    y = n(534514),
    C = n(452027),
    v = n(109802),
    O = n(231723),
    R = n(192308),
    b = n(888366),
    D = n(241541),
    L = n(228366),
    w = n(387755),
    M = n(308528),
    P = n(711950),
    x = n(376728);
let U = {
    search(e, t) {
        L.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: e, channelId: t });
    },
    clear(e) {
        L.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: "", channelId: e });
    },
    select(e) {
        L.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT", row: e });
    },
    addUser(e) {
        L.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER", userId: e });
    },
    removeUser(e) {
        L.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER", userId: e });
    },
    open(e) {
        L.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e });
    },
    close() {
        L.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
};
var k = n(717398),
    G = n(684136),
    F = n(964486),
    V = n(793574),
    B = n(95561),
    H = n(688810),
    j = n(571694),
    Y = n(47167),
    W = n(915089),
    K = n(66442),
    z = n(774300);
let $ = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
});
function q(e) {
    let { location: t } = e,
        { inviteMaxAgeSeconds: n } = $.getConfig({ location: t });
    return n;
}
var X = n(287809),
    Z = n(427262),
    Q = n(652215),
    J = n(375708);
async function ee(e, t) {
    if (0 !== t.length)
        try {
            let n = await x.Ay.createInvite(e, { max_age: q({ location: "5326c5_1" }) }, Q.PE1.GROUP_DM),
                i = new Set();
            for (let e of t) {
                let t = X.default.getUser(e);
                null == t ||
                    t.bot ||
                    (z.A.enqueue(
                        {
                            inviteKey: n.code,
                            type: z.F.USER,
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
                    let t = Array.from(e).map((e) => Z.Ay.getName(e));
                    if (0 === t.length) return;
                    let n = J.intl.formatToPlainString(J.t.gztrTs, {
                        inviteCount: t.length,
                        username1: t[0],
                        username2: t[1] ?? "",
                        remaining: Math.max(0, t.length - 2),
                    });
                    (0, d.P0)((0, _.o)(n, f.Ck.SUCCESS));
                })(i);
        } catch {
            (0, d.P0)((0, _.o)(J.intl.string(J.t.iRntUl), f.Ck.FAILURE));
        }
}
var et = n(279208),
    en = n(267102),
    ei = n(976860),
    er = n(219271),
    es = n(427358),
    ea = n(95701),
    eo = n(734057),
    el = n(71393),
    eu = n(958590),
    ec = n(584777),
    ed = n(763827),
    e_ = n(222823),
    ef = n(994500),
    eh = n(351906),
    ep = n(174459),
    eE = n(957565),
    em = n(625494),
    eg = n(403362),
    eA = n(935208),
    eI = n(41e4),
    eT = n(18707),
    eS = n(58736),
    eN = n(503698),
    ey = n.n(eN),
    eC = n(837381),
    ev = n(692617),
    eO = n(658675),
    eR = n(297413),
    eb = n(966327),
    eD = n(235986),
    eL = n(548118),
    ew = n(640708),
    eM = n(290863),
    eP = n(973081);
function ex(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: r,
            comparator: s,
            mutualGuilds: a,
            selected: o,
            checked: l,
            disabled: c = !1,
            onClick: d,
            onMouseEnter: _,
            "aria-setsize": f,
            "aria-posinset": p,
        } = e,
        E = (0, u.bG)([eM.A], () => eM.A.getStatus(t.id)),
        g = (0, eC.rm)(String(t.id));
    return (0, i.jsx)(h.D, {
        id: `user-row-${n}`,
        className: ey()(eP.Se, { [eP.r9]: c }),
        onClick: () => {
            d?.(t.id);
        },
        onMouseEnter: () => {
            _?.(n);
        },
        ...g,
        role: "checkbox",
        "aria-checked": l,
        "aria-disabled": c,
        "aria-setsize": f,
        "aria-posinset": p,
        children: (0, i.jsxs)(eD.A, {
            align: eD.A.Align.CENTER,
            className: ey()(eP.Bc, { [eP.oz]: o }),
            children: [
                (0, i.jsx)(eb.A, { user: t, status: E, className: eP.my }),
                (0, i.jsxs)("div", {
                    className: eP.YW,
                    children: [
                        (0, i.jsx)(m.E, {
                            tag: "strong",
                            className: eP.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != s && s === t.tag
                                    ? Z.Ay.getName(t)
                                    : null != s && "" !== s
                                      ? s
                                      : Z.Ay.getName(t),
                        }),
                        (0, i.jsxs)(m.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: null != a && a.length > 0 ? eP.dj : void 0,
                            children: [
                                (0, i.jsx)(eR.A, {
                                    user: t,
                                    hideDiscriminator: r,
                                    className: eP.xK,
                                    forceUsername: !0,
                                }),
                                null != a && a.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(ew.A, {
                                                  height: 2,
                                                  width: 2,
                                                  "aria-hidden": "true",
                                                  className: eP.a6,
                                              }),
                                              (0, i.jsx)(ev.A, {
                                                  className: eP.gP,
                                                  guilds: a,
                                                  maxGuilds: 3,
                                                  size: eL.Ay.Sizes.SMOL,
                                              }),
                                              (0, i.jsx)("span", {
                                                  className: eP.tz,
                                                  children:
                                                      1 === a.length
                                                          ? a[0].name
                                                          : J.intl.format(J.t.E215W7, { count: a.length }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(eO.P, { checked: l, disabled: c }),
            ],
        }),
    });
}
var eU = n(650583),
    ek = n(426057);
let eG = (0, W.Ld)();
function eF(e) {
    if (ef.A.isFriend(e)) return !0;
    let t = X.default.getCurrentUser(),
        n = X.default.getUser(e);
    return !!(t?.isStaff() && n?.isStaff());
}
function eV(e) {
    let t = [],
        n = [];
    for (let i of e) eF(i) ? t.push(i) : n.push(i);
    return { channelRecipientIds: t, inviteLinkOnlyUserIds: n };
}
function eB(e) {
    let { recipientIds: t, location: n, useGroupDmShell: i = !1 } = e;
    return i && 1 === t.length
        ? M.A.createGroupDmShell({ recipientId: t[0], location: n })
        : M.A.openPrivateChannel({ recipientIds: t, location: n });
}
function eH() {
    (0, d.P0)((0, _.o)(J.intl.string(J.t.fEptJP), f.Ck.FAILURE));
}
let ej = (e) => {
        let { channel: t, onClose: n } = e,
            r = (0, Y.Ay)(t) ?? "",
            s = (0, u.bG)([e_.Ay], () => e_.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(h.D, {
            onClick: () => {
                (0, ei.uh)(Q.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: ek.us,
                children: [
                    (0, i.jsx)(p.eu, { src: (0, j.Y)(t), size: E._3.SIZE_24, "aria-label": r }),
                    (0, i.jsx)("span", { className: ek.J2, children: r }),
                    (0, i.jsx)("span", { className: ek.Pd, children: o()(eA.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    eY = (e) => {
        let { onConfirm: t, channelIds: n, ...r } = e,
            s = (0, u.yK)([eo.A], () => Array.from(n).map(eo.A.getChannel), [n]);
        return (0, i.jsx)(l.Modal, {
            title: J.intl.string(J.t.uFHxNd),
            subtitle: J.intl.string(J.t.rIsSqE),
            actions: [
                { variant: "secondary", text: J.intl.string(J.t["ETE/oC"]), onClick: r.onClose },
                {
                    variant: "primary",
                    text: J.intl.string(J.t.KCNNJu),
                    onClick: () => {
                        t(), r.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(m.E, {
                variant: "text-md/normal",
                className: ek.Jv,
                children: J.intl.string(J.t.cjE7wH),
            }),
            ...r,
            children: s
                .filter(eg.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return eA.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(ej, { onClose: r.onClose, channel: e }, e.id)),
        });
    };
class eW extends r.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0, collapsedSections: new Set() };
    static contextType = en.Ay;
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
        L.h.wait(() => U.open(e?.id));
        let t = (0, B.dI)(e);
        ep.default.track(Q.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            em._.subscribe(Q.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            em._.subscribe(Q.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        em._.unsubscribe(Q.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            em._.unsubscribe(Q.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            L.h.wait(() => U.close());
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
        return !ef.A.isFriend(n) && !t;
    }
    allowNonFriendRecipientPicker() {
        return this.props.hasGuilds && (0, eT.G)("PrivateChannelRecipientsInvite");
    }
    getResultsSections() {
        let { results: e, query: t, isLoading: n } = this.props;
        if (!this.allowNonFriendRecipientPicker() || "" === t) return null;
        let i = [],
            r = [];
        for (let t of e) ef.A.isFriend(t.user.id) ? i.push(t) : r.push(t);
        let s = [];
        return (
            i.length > 0 && s.push({ type: "friends", results: i, showSpinner: !1 }),
            (r.length > 0 || n) && s.push({ type: "serverMembers", results: r, showSpinner: n }),
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
        let t = q({ location: "5326c5_1" });
        x.Ay.createInvite(e.id, { max_age: t }, Q.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = X.default.getCurrentUser();
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
            r = t.size > 1 || null != e ? J.intl.string(J.t["h1/FMu"]) : J.intl.string(J.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: r };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            r = 0 === t.size || n < 0;
        return (0, i.jsx)(g.$, {
            variant: "primary",
            text: J.intl.string(J.t.OYkgVk),
            disabled: r,
            onClick: this.handleInviteUsers,
        });
    }
    getTitle() {
        let { addToDMUpdatesEnabled: e } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) return J.intl.string(J.t.Xjlbvs);
        if (this.isPartyFull()) return J.intl.string(J.t.OtTQDz);
        let { channel: t } = this.props;
        return null == t
            ? J.intl.string(J.t.jD1qzM)
            : t.isDM() && e
              ? J.intl.string(J.t.IIOxgV)
              : (0, eT.G)("PrivateChannelRecipientsInvite")
                ? J.intl.string(t.isMultiUserDM() ? J.t.FFxUQ0 : J.t["PWkO7+"])
                : J.intl.string(t.isMultiUserDM() ? J.t.AQAPts : J.t.Xjlbvs);
    }
    getSubtitle() {
        let { channel: e, hasFriends: t } = this.props;
        if (!t && !this.allowNonFriendRecipientPicker()) {
            if (null != e && e.isDM()) {
                let t = e.getRecipientId();
                if (null != t) {
                    let e = X.default.getUser(t),
                        n = null != e ? e.username : "";
                    return J.intl.format(J.t["eg+R9x"], { username: n });
                }
            }
            return J.intl.string(J.t["1x/UBX"]);
        }
        if (this.isPartyFull()) return;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error("no recipient in DM");
            let n = X.default.getUser(t),
                i = null != n ? n.username : "";
            return J.intl.format(J.t["eg+R9x"], { username: i });
        }
        let n = (0, eT.G)("PrivateChannelRecipientsInvite");
        if (null == e && n) return J.intl.format(J.t.t9mhPt, { number: this.getMaxParticipants() });
        let i = this.getRemaining();
        return i <= 0
            ? J.intl.formatToPlainString(J.t.xYr004, { number: this.getMaxParticipants() })
            : n
              ? J.intl.formatToPlainString(J.t.barkEr, { number: i })
              : J.intl.formatToPlainString(J.t.HrSDPF, { number: i });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, query: i } = this.props,
            { current: r } = this.searchBarRef;
        if (null == r) return;
        let s = this.getDisplayedResults(),
            a = t;
        switch (e.key) {
            case eU.dh.BACKSPACE:
                (null == i || 0 === i.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case eU.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++a >= s.length && (a = 0), this.handleSelectionChange(a);
                break;
            case eU.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --a < 0 && (a = s.length - 1), this.handleSelectionChange(a);
                break;
            case eU.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), s.length > a && this.handleSelect(a);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (((!t || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return null;
        let r = (0, eT.G)("PrivateChannelRecipientsInvite"),
            s = [];
        n.forEach((e) => {
            let t = X.default.getUser(e);
            null != t &&
                s.push({
                    id: e,
                    label: Z.Ay.getName(t),
                    icon: r ? { type: "avatar", src: t.getAvatarURL(void 0, 32) } : void 0,
                });
        });
        let { results: a, selectedRow: o, isLoading: l } = this.props,
            u = a.length > 0 || l,
            c = !1;
        if (r)
            for (let e of n) {
                if (ef.A.isFriend(e)) continue;
                let t = X.default.getUser(e);
                if (null != t && !t.bot) {
                    c = !0;
                    break;
                }
            }
        return (0, i.jsxs)("div", {
            className: ek.ON,
            children: [
                (0, i.jsx)(A.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    helperText: r ? J.intl.string(c ? J.t.xHuK72 : J.t.FIHggl) : void 0,
                    placeholder: 0 === n.size ? (r ? J.intl.string(J.t["5h0QOP"]) : J.intl.string(J.t.K5e6bn)) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: s, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": eG,
                    "aria-expanded": u,
                    "aria-activedescendant": u ? `user-row-${o}` : void 0,
                }),
                this.renderAddUsersButton(),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: ek.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(I.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(G.A, { className: ek.RR, closeAction: this.props.onClose, keybind: "ESC" }),
                }),
            }),
        });
    renderBody() {
        let { hasFriends: e } = this.props;
        return (!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()
            ? null
            : this.isPartyFull()
              ? (0, i.jsx)("div", { children: J.intl.format(J.t.xYr004, { number: this.getMaxParticipants() }) })
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
                    className: ek.XG,
                    innerClassName: ek.bv,
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
                    innerId: eG,
                };
    }
    getEmptyStateListProps() {
        let { channel: e } = this.props;
        return {
            sections: [1],
            sectionHeight: 0,
            rowHeight: 32,
            renderRow: () => {
                if ((0, eT.G)("PrivateChannelRecipientsInvite")) {
                    let t = null != e && e.isMultiUserDM();
                    return (0, i.jsxs)("div", {
                        className: ek.wV,
                        children: [
                            (0, i.jsx)(m.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: J.intl.string(J.t.z3yXsY),
                            }),
                            (0, i.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: J.intl.string(t ? J.t["l6Rj+t"] : J.t["7w2iq7"]),
                            }),
                        ],
                    });
                }
                return (0, i.jsx)("div", {
                    className: ek.wV,
                    children: (0, i.jsx)(m.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: J.intl.string(J.t.z3yXsY),
                    }),
                });
            },
        };
    }
    getSectionedListProps(e) {
        let { collapsedSections: t } = this.state,
            n = Array(e.length).fill(-1),
            r = 0;
        for (let i = 0; i < e.length; i++) t.has(e[i].type) || ((n[i] = r), (r += e[i].results.length));
        let s = r;
        return {
            ref: this.scrollerRef,
            sections: e.map((e) => e.results.length + +!!e.showSpinner),
            className: ek.XG,
            innerClassName: ek.bv,
            renderRow: (r) => {
                let { section: a, row: o } = r,
                    l = e[a];
                if (null == l || t.has(l.type)) return null;
                if (o >= l.results.length)
                    return (0, i.jsx)("div", {
                        className: ek.Q_,
                        children: (0, i.jsx)(T.y, { type: T.t.SPINNING_CIRCLE, className: ek.u1 }),
                    });
                let u = l.results[o];
                if (null == u) return null;
                let c = n[a] + o;
                return this.renderUserRow(u, c, s);
            },
            rowHeight: (n, i) => {
                let r = e[n];
                return null == r || t.has(r.type) ? 0 : i >= r.results.length ? 40 : 48 * (null != r.results[i]);
            },
            renderSection: (n) => {
                let { section: r } = n,
                    s = e[r];
                if (null == s) return null;
                let a = t.has(s.type),
                    o = "friends" === s.type ? J.intl.string(J.t.TdEu5X) : J.intl.string(J.t.y29JXs),
                    l = a ? S._ : N.a;
                return (0, i.jsxs)(h.D, {
                    className: ek.bV,
                    onClick: () => this.handleSectionToggle(s.type),
                    "aria-expanded": !a,
                    "aria-label": o,
                    children: [
                        (0, i.jsx)(y.D, { variant: "heading-sm/semibold", color: "text-muted", children: o }),
                        (0, i.jsx)(l, { size: "xxs" }),
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
            innerId: eG,
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
                this.props.selectedRow >= e.length && U.select(Math.max(0, e.length - 1));
            },
        );
    };
    renderUserRow(e, t, n) {
        let { selectedUsers: r, selectedRow: s, hideDiscriminator: a, channel: o } = this.props,
            { user: l, comparator: u, mutualGuilds: c } = e,
            d = r.has(l.id) || o?.recipients.includes(l.id),
            _ = (!d && 0 >= this.getRemaining()) || o?.recipients.includes(l.id);
        return (0, i.jsx)(
            ex,
            {
                row: t,
                user: l,
                hideDiscriminator: a,
                comparator: u,
                mutualGuilds: c,
                checked: d,
                disabled: _,
                selected: t === s,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                "aria-posinset": t + 1,
                "aria-setsize": n,
            },
            l.id,
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
            r = i[n];
        return null == r ? null : this.renderUserRow(r, n, i.length);
    };
    renderEmptySection() {
        return null;
    }
    getInviteLinkFooter() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: r } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let s = (0, eT.G)("PrivateChannelRecipientsInvite"),
            a = null != t ? (0, et.A)(t.code) : "",
            o = a.length > 0;
        return (0, i.jsx)(C.D, {
            label: s ? J.intl.string(J.t.dTqtcN) : J.intl.string(J.t.t3O2BR),
            helperText: a.length > 0 ? J.intl.format(J.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(v.e, {
                supportsCopy: eE.p5,
                placeholder: (0, et.A)(J.intl.string(J.t.lPVBqP)),
                value: o ? (n ? J.intl.string(J.t["6HzNgZ"]) : a) : "",
                buttonColor: c.$n.Colors.BRAND,
                text: o ? (r ? J.intl.string(J.t.q30c5i) : J.intl.string(J.t.OpuAlK)) : J.intl.string(J.t.qzxqUf),
                mode: r ? v.q.SUCCESS : v.q.DEFAULT,
                onCopy: () => {
                    o ? this.handleCopyInvite(a) : this.createInvite();
                },
            }),
        });
    }
    getFooterProps() {
        let { hasFriends: e, channel: t, selectedUsers: n, addToDMUpdatesEnabled: r } = this.props;
        if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
            let e = null != t ? t.getRecipientId() : null;
            if (null == e) throw Error("no recipient in DM");
            let n = X.default.getUser(e),
                i = null != n && ef.A.getRelationshipType(n.id) === Q.eA$.PENDING_OUTGOING;
            return {
                actions: [
                    {
                        variant: "primary",
                        text: i ? J.intl.string(J.t.xMH6vD) : J.intl.string(J.t["PMsq/b"]),
                        disabled: i,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                    },
                ],
            };
        }
        if (!e && !this.allowNonFriendRecipientPicker())
            return {
                actions: [
                    { variant: "primary", text: J.intl.string(J.t.w5uwoI), onClick: this.handleAddFriendNavigation },
                ],
            };
        if (this.isPartyFull()) return {};
        if (null == t || (t.isDM() && r)) {
            let e = null != t || n.size > 1,
                s = new Set(t?.isDM() && r ? [t.getRecipientId(), ...n] : n);
            return {
                actionBarInput: e
                    ? (0, i.jsx)(eK, {
                          previewIcon: this.state.previewIcon,
                          selectedUsers: s,
                          channelName: this.state.newChannelName,
                          onChange: this.handleChannelNameChange,
                          onIconChange: this.handleIconChange,
                          onIconRemove: this.handleIconRemove,
                      })
                    : void 0,
                actions: [
                    { variant: "secondary", text: J.intl.string(J.t["ETE/oC"]), onClick: this.props.onClose },
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
            transitionState: e ?? O.ip.ENTERED,
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
            k.A.sendRequest({
                discordTag: Z.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        U.select(e);
    };
    handleSelect = (e) => {
        let { channel: t } = this.props;
        if (null == e) return void U.clear(t?.id);
        let n = this.getDisplayedResults()[e];
        null != n && this.handleClick(n.user.id);
    };
    handleSelectionChange = (e) => {
        U.select(e);
        let t = this.scrollerRef.current;
        if (null == t) return;
        let n = this.getResultsSections();
        if (null == n) return void t.scrollToIndex({ section: 0, row: e, padding: 8 });
        let { collapsedSections: i } = this.state,
            r = e;
        for (let e = 0; e < n.length; e++)
            if (!i.has(n[e].type)) {
                if (r < n[e].results.length) return void t.scrollToIndex({ section: e, row: r, padding: 8 });
                r -= n[e].results.length;
            }
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, B.dI)(t);
        U.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                ep.default.track(Q.HAw.SEARCH_USER_LIST_STARTED, {
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
        U.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            U.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: i } = this.props;
        i?.recipients.includes(e) ||
            (t.has(e)
                ? U.removeUser(e)
                : this.getRemaining() > 0 && (U.addUser(e), n.length > 0 && (U.clear(i?.id), this.forceFocus())));
    };
    handleAddFriendNavigation = () => {
        P.A.transitionToSection(Q.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
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
            (null != n.name || null != n.icon) && M.A.updateChannel(e, n, t),
            ep.default.track(Q.HAw.GDM_EDIT_INTERACTED, {
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
            i = (0, B.dI)(n),
            r = !0;
        1 === e.length && (r = null == M.A._openCachedDMChannel(e[0])),
            ep.default.track(Q.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...i,
                is_new_dm: r,
                entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                recipient_ids: e,
                num_searches: t,
                affinity_score: this._getUserAffinities(e).affinities,
                name_is_set: "" !== this.state.newChannelName,
                icon_is_set: null != this.state.previewIcon,
            });
        let s = (0, eT.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: a, inviteLinkOnlyUserIds: o } =
                s && e.length > 1 ? eV(e) : { channelRecipientIds: e, inviteLinkOnlyUserIds: [] };
        eB({ recipientIds: a, location: "New Group DM", useGroupDmShell: s && o.length > 0 })
            .then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, V.A.NEW_GROUP_DM_INVITE_MODAL), ee(e, o);
            })
            .catch(eH);
    };
    pushToExistingDM = (e, t) => {
        let n = (0, eT.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: i, inviteLinkOnlyUserIds: r } = n
                ? eV(t)
                : { channelRecipientIds: t, inviteLinkOnlyUserIds: [] },
            s = e.id;
        e.isGroupDM()
            ? this._addRecipientsToExistingGroupDM(s, i, r)
            : e.isDM() && this._promoteDMToGroupDM(s, e.getRecipientId(), i, r, n),
            ep.default.track(Q.HAw.CREATE_DM_USER_LIST_CLICKED, {
                ...(0, B.dI)(e),
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
            r = ed.A.getChannelId() === e;
        (t.length > 0 ? M.A.addRecipients(e, t, Q.ThZ.ADD_FRIENDS_TO_DM) : Promise.resolve(e))
            .then((e) => {
                this.props.onComplete?.(e),
                    i && this.updateGDM(e, Q.ThZ.ADD_FRIENDS_TO_DM),
                    ee(e, n),
                    r && t.length > 0 && w.A.ring(e, t, "dm_invite");
            })
            .catch(eH);
    };
    _promoteDMToGroupDM = (e, t, n, i, r) => {
        let { addToDMUpdatesEnabled: s } = this.props,
            a = ed.A.getChannelId() === e,
            o = eF(t),
            l = r && o ? [...n, t] : n,
            u = r && !o ? [...i, t] : i;
        (o && n.length > 0
            ? M.A.addRecipients(e, n, Q.ThZ.ADD_FRIENDS_TO_DM)
            : l.length > 0 || u.length > 0
              ? eB({ recipientIds: l, location: "New Group DM", useGroupDmShell: r && u.length > 0 })
              : Promise.resolve(e)
        )
            .then((t) => {
                if ((this.props.onComplete?.(t), s && this.updateGDM(t, Q.ThZ.ADD_FRIENDS_TO_DM), ee(t, u), a)) {
                    if (t !== e) return void w.A.call(t, !1, !0);
                    n.length > 0 && w.A.ring(t, n, "dm_invite");
                }
            })
            .catch(eH);
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            r = Array.from(t);
        if (null != e) {
            let t = eQ(Array.from(new Set([...e.recipients, ...r])));
            t.size > 0
                ? (0, R.openModal)(
                      (n) => (0, i.jsx)(eY, { ...n, onConfirm: () => this.pushToExistingDM(e, r), channelIds: t }),
                      {},
                      (0, R.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, r);
        } else {
            let e = eQ(r);
            r.length > 1 && e.size > 0
                ? (0, R.openModal)(
                      (t) => (0, i.jsx)(eY, { ...t, onConfirm: () => this.createNewDM(r), channelIds: e }),
                      {},
                      (0, R.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(r);
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
            ep.default.track(Q.HAw.COPY_INSTANT_INVITE, {
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
function eK(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: s, onIconRemove: a, onChange: o } = e,
        { analyticsLocations: l } = (0, H.Ay)(V.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, Y.Jo)(Array.from(t), X.default, ef.A);
    return (0, i.jsxs)("div", {
        className: ek.zj,
        children: [
            (0, i.jsx)(K.X, {
                className: ek.r9,
                channel: null,
                previewIcon: r,
                onIconChange: s,
                onIconRemove: a,
                analyticsLocations: l,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(m.E, {
                className: ek.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: J.intl.string(J.t.YynaLK),
            }),
            (0, i.jsx)(A.k, {
                "aria-label": J.intl.string(J.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: o,
            }),
        ],
    });
}
function ez(e) {
    let { channel: t, onComplete: n, ...r } = e,
        s = (0, u.cf)([eh.A, ec.A, eu.A, el.A, ef.A], () => {
            let e;
            return (
                null != t && null != (e = eu.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...ec.A.getState(),
                    hasFriends: ef.A.getFriendCount() > 0,
                    invite: e,
                    hideDiscriminator: eh.A.hidePersonalInformation,
                    hideInstantInvites: eh.A.hideInstantInvites,
                    hasGuilds: el.A.getGuildCount() > 0,
                }
            );
        }),
        a = (0, u.bG)(
            [X.default],
            () =>
                !!X.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => X.default.getUser(e)?.isStaff()),
            [t],
        ),
        { enabled: o } = eI.A.useConfig({
            location: t?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
        });
    return (0, i.jsx)(eW, {
        channel: t,
        isStaffOnlyDM: a,
        onComplete: n,
        addToDMUpdatesEnabled: !!(t?.isDM() && o),
        ...r,
        ...s,
    });
}
function e$(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        a = (0, R.useHasModalOpen)(s),
        o = r.useCallback(
            () =>
                (0, R.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(ez, { ...e, channel: t })), {
                    modalKey: s,
                }),
            [t, s],
        ),
        l = r.useCallback(() => (a ? (0, R.closeModal)(s) : o()), [a, s, o]);
    return (
        r.useEffect(
            () => (
                n && em._.subscribe(Q.jej.TOGGLE_DM_CREATE, l),
                () => {
                    em._.unsubscribe(Q.jej.TOGGLE_DM_CREATE, l);
                }
            ),
            [n, l],
        ),
        (0, F.Ay)(() => {
            (0, er.u)();
        }),
        { showModal: o, toggleVisible: l }
    );
}
function eq(e) {
    let { channel: t, onComplete: n } = e,
        r = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, R.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(ez, { ...e, channel: t, onComplete: n })), {
        modalKey: r,
    });
}
function eX(e) {
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
        _ = a ?? (null == t ? b.g : D.D),
        { showModal: f } = e$({ channel: t, subscribeToGlobalHotkey: c }),
        h = (0, u.bG)([X.default], () => X.default.getUser(t?.getRecipientId()));
    return h?.bot || h?.isProvisional
        ? null
        : (0, i.jsx)(eS.Ay.Icon, {
              ref: d,
              onClick: f,
              icon: _,
              className: s,
              iconClassName: n,
              tooltip: o,
              tooltipPosition: l,
          });
}
function eZ(e) {
    let { channel: t, fullWidth: n = !1, text: s, icon: a, subscribeToGlobalHotkey: o = !1, ...l } = e,
        u = r.useRef(null),
        { showModal: c } = e$({ channel: t, subscribeToGlobalHotkey: o });
    return (0, i.jsx)(g.$, {
        variant: "primary",
        ...l,
        onClick: c,
        buttonRef: u,
        text: s,
        "aria-label": s,
        icon: a,
        fullWidth: n,
    });
}
function eQ(e) {
    let t = eJ(e);
    return new Set(
        (0, s.chain)(eo.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, ea.MK)(e.type))
            .filter((e) => eJ(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function eJ(e) {
    return JSON.stringify(e.sort());
}
