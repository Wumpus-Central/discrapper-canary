"use strict";
n.d(t, { Jz: () => eW, Ay: () => eK, NE: () => ez }), n(321073);
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
    T = n(452027),
    S = n(109802),
    N = n(231723),
    y = n(192308),
    C = n(888366),
    v = n(241541),
    O = n(228366),
    R = n(387755),
    b = n(308528),
    D = n(711950),
    L = n(376728);
let w = {
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
var M = n(717398),
    P = n(684136),
    x = n(964486),
    U = n(793574),
    k = n(95561),
    G = n(688810),
    F = n(571694),
    V = n(47167),
    B = n(915089),
    H = n(66442),
    j = n(774300);
let Y = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 604800 } },
});
function W(e) {
    let { location: t } = e,
        { inviteMaxAgeSeconds: n } = Y.getConfig({ location: t });
    return n;
}
var K = n(287809),
    z = n(427262),
    $ = n(652215),
    q = n(375708);
async function X(e, t) {
    if (0 !== t.length)
        try {
            let n = await L.Ay.createInvite(e, { max_age: W({ location: "5326c5_1" }) }, $.PE1.GROUP_DM),
                i = new Set();
            for (let e of t) {
                let t = K.default.getUser(e);
                null == t ||
                    t.bot ||
                    (j.A.enqueue(
                        {
                            inviteKey: n.code,
                            type: j.F.USER,
                            user: t,
                            location: $.PE1.GROUP_DM,
                            inviteAnalyticsMetadata: { source: $.PE1.GROUP_DM },
                        },
                        () => {},
                    ),
                    i.add(t));
            }
            i.size > 0 &&
                (function (e) {
                    let t = Array.from(e).map((e) => z.Ay.getName(e));
                    if (0 === t.length) return;
                    let n = q.intl.formatToPlainString(q.t.gztrTs, {
                        inviteCount: t.length,
                        username1: t[0],
                        username2: t[1] ?? "",
                        remaining: Math.max(0, t.length - 2),
                    });
                    (0, d.P0)((0, _.o)(n, f.Ck.SUCCESS));
                })(i);
        } catch {
            (0, d.P0)((0, _.o)(q.intl.string(q.t.fEptJP), f.Ck.FAILURE));
        }
}
var Z = n(279208),
    Q = n(267102),
    J = n(976860),
    ee = n(219271),
    et = n(427358),
    en = n(95701),
    ei = n(734057),
    er = n(71393),
    es = n(958590),
    ea = n(584777),
    eo = n(763827),
    el = n(222823),
    eu = n(994500),
    ec = n(351906),
    ed = n(174459),
    e_ = n(957565),
    ef = n(625494),
    eh = n(403362),
    ep = n(935208),
    eE = n(41e4),
    em = n(18707),
    eg = n(58736),
    eA = n(503698),
    eI = n.n(eA),
    eT = n(837381),
    eS = n(692617),
    eN = n(658675),
    ey = n(297413),
    eC = n(966327),
    ev = n(235986),
    eO = n(548118),
    eR = n(640708),
    eb = n(290863),
    eD = n(973081);
function eL(e) {
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
        E = (0, u.bG)([eb.A], () => eb.A.getStatus(t.id)),
        g = (0, eT.rm)(String(t.id));
    return (0, i.jsx)(h.D, {
        id: `user-row-${n}`,
        className: eI()(eD.Se, { [eD.r9]: c }),
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
        children: (0, i.jsxs)(ev.A, {
            align: ev.A.Align.CENTER,
            className: eI()(eD.Bc, { [eD.oz]: o }),
            children: [
                (0, i.jsx)(eC.A, { user: t, status: E, className: eD.my }),
                (0, i.jsxs)("div", {
                    className: eD.YW,
                    children: [
                        (0, i.jsx)(m.E, {
                            tag: "strong",
                            className: eD.$R,
                            "aria-hidden": !0,
                            variant: "text-md/medium",
                            children:
                                null != s && s === t.tag
                                    ? z.Ay.getName(t)
                                    : null != s && "" !== s
                                      ? s
                                      : z.Ay.getName(t),
                        }),
                        (0, i.jsxs)(m.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: null != a && a.length > 0 ? eD.dj : void 0,
                            children: [
                                (0, i.jsx)(ey.A, {
                                    user: t,
                                    hideDiscriminator: r,
                                    className: eD.xK,
                                    forceUsername: !0,
                                }),
                                null != a && a.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(eR.A, {
                                                  height: 2,
                                                  width: 2,
                                                  "aria-hidden": "true",
                                                  className: eD.a6,
                                              }),
                                              (0, i.jsx)(eS.A, {
                                                  className: eD.gP,
                                                  guilds: a,
                                                  maxGuilds: 3,
                                                  size: eO.Ay.Sizes.SMOL,
                                              }),
                                              (0, i.jsx)("span", {
                                                  className: eD.tz,
                                                  children:
                                                      1 === a.length
                                                          ? a[0].name
                                                          : q.intl.format(q.t.E215W7, { count: a.length }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(eN.P, { checked: l, disabled: c }),
            ],
        }),
    });
}
var ew = n(650583),
    eM = n(426057);
let eP = (0, B.Ld)();
function ex(e) {
    if (eu.A.isFriend(e)) return !0;
    let t = K.default.getCurrentUser(),
        n = K.default.getUser(e);
    return !!(t?.isStaff() && n?.isStaff());
}
function eU(e) {
    let t = [],
        n = [];
    for (let i of e) ex(i) ? t.push(i) : n.push(i);
    return { channelRecipientIds: t, inviteLinkOnlyUserIds: n };
}
function ek(e) {
    let { recipientIds: t, location: n, useGroupDmShell: i = !1 } = e;
    return i && 1 === t.length
        ? b.A.createGroupDmShell({ recipientId: t[0], location: n })
        : b.A.openPrivateChannel({ recipientIds: t, location: n });
}
function eG() {
    (0, d.P0)((0, _.o)(q.intl.string(q.t.fEptJP), f.Ck.FAILURE));
}
let eF = (e) => {
        let { channel: t, onClose: n } = e,
            r = (0, V.Ay)(t) ?? "",
            s = (0, u.bG)([el.Ay], () => el.Ay.lastMessageId(t.id) ?? t.id);
        return (0, i.jsx)(h.D, {
            onClick: () => {
                (0, J.uh)($.ME, t.id), n();
            },
            children: (0, i.jsxs)("div", {
                className: eM.us,
                children: [
                    (0, i.jsx)(p.eu, { src: (0, F.Y)(t), size: E._3.SIZE_24, "aria-label": r }),
                    (0, i.jsx)("span", { className: eM.J2, children: r }),
                    (0, i.jsx)("span", { className: eM.Pd, children: o()(ep.default.extractTimestamp(s)).fromNow() }),
                ],
            }),
        });
    },
    eV = (e) => {
        let { onConfirm: t, channelIds: n, ...r } = e,
            s = (0, u.yK)([ei.A], () => Array.from(n).map(ei.A.getChannel), [n]);
        return (0, i.jsx)(l.Modal, {
            title: q.intl.string(q.t.uFHxNd),
            subtitle: q.intl.string(q.t.rIsSqE),
            actions: [
                { variant: "secondary", text: q.intl.string(q.t["ETE/oC"]), onClick: r.onClose },
                {
                    variant: "primary",
                    text: q.intl.string(q.t.KCNNJu),
                    onClick: () => {
                        t(), r.onClose();
                    },
                },
            ],
            input: (0, i.jsx)(m.E, {
                variant: "text-md/normal",
                className: eM.Jv,
                children: q.intl.string(q.t.cjE7wH),
            }),
            ...r,
            children: s
                .filter(eh.Vq)
                .sort((e, t) => {
                    let n = e.lastMessageId ?? e.id,
                        i = t.lastMessageId ?? t.id;
                    return ep.default.compare(i, n);
                })
                .map((e) => (0, i.jsx)(eF, { onClose: r.onClose, channel: e }, e.id)),
        });
    };
class eB extends r.PureComponent {
    state = { separator: !1, copied: !1, newChannelName: "", previewIcon: void 0 };
    static contextType = Q.Ay;
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
        O.h.wait(() => w.open(e?.id));
        let t = (0, k.dI)(e);
        ed.default.track($.HAw.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends(),
        }),
            ef._.subscribe($.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            ef._.subscribe($.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            setTimeout(() => {
                this.forceFocus();
            }, 0);
    }
    componentWillUnmount() {
        ef._.unsubscribe($.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            ef._.unsubscribe($.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            O.h.wait(() => w.close());
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
        return !eu.A.isFriend(n) && !t;
    }
    allowNonFriendRecipientPicker() {
        return this.props.hasGuilds && (0, em.G)("PrivateChannelRecipientsInvite");
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let t = W({ location: "5326c5_1" });
        L.Ay.createInvite(e.id, { max_age: t }, $.PE1.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = K.default.getCurrentUser();
        return null != t && t.isStaff() ? $.$aF : null != e && e.userLimit > 0 ? e.userLimit : $.wLU;
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
            r = t.size > 1 || null != e ? q.intl.string(q.t["h1/FMu"]) : q.intl.string(q.t.bA875g);
        return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: r };
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            r = 0 === t.size || n < 0;
        return (0, i.jsx)(g.$, {
            variant: "primary",
            text: q.intl.string(q.t.OYkgVk),
            disabled: r,
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
              : (0, em.G)("PrivateChannelRecipientsInvite")
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
        let n = (0, em.G)("PrivateChannelRecipientsInvite");
        if (null == e && n) return q.intl.format(q.t.t9mhPt, { number: this.getMaxParticipants() });
        let i = this.getRemaining();
        return i <= 0
            ? q.intl.formatToPlainString(q.t.xYr004, { number: this.getMaxParticipants() })
            : n
              ? q.intl.formatToPlainString(q.t.barkEr, { number: i })
              : q.intl.formatToPlainString(q.t.HrSDPF, { number: i });
    }
    handleKeyDown(e) {
        let { selectedRow: t, selectedUsers: n, results: i, query: r } = this.props,
            { current: s } = this.searchBarRef;
        if (null == s) return;
        let a = t;
        switch (e.key) {
            case ew.dh.BACKSPACE:
                (null == r || 0 === r.length) &&
                    n.size > 0 &&
                    (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
                break;
            case ew.dh.ARROW_DOWN:
                e.preventDefault(), e.stopPropagation(), ++a >= i.length && (a = 0), this.handleSelectionChange(a);
                break;
            case ew.dh.ARROW_UP:
                e.preventDefault(), e.stopPropagation(), --a < 0 && (a = i.length - 1), this.handleSelectionChange(a);
                break;
            case ew.dh.ENTER:
                e.preventDefault(), e.stopPropagation(), i.length > a && this.handleSelect(a);
        }
    }
    renderSearchBar() {
        let { query: e, hasFriends: t, selectedUsers: n } = this.props;
        if (((!t || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()) return null;
        let r = (0, em.G)("PrivateChannelRecipientsInvite"),
            s = [];
        n.forEach((e) => {
            let t = K.default.getUser(e);
            null != t &&
                s.push({
                    id: e,
                    label: z.Ay.getName(t),
                    icon: r ? { type: "avatar", src: t.getAvatarURL(void 0, 32) } : void 0,
                });
        });
        let { results: a, selectedRow: o } = this.props,
            l = a.length > 0,
            u = !1;
        if (r)
            for (let e of n) {
                if (eu.A.isFriend(e)) continue;
                let t = K.default.getUser(e);
                if (null != t && !t.bot) {
                    u = !0;
                    break;
                }
            }
        return (0, i.jsxs)("div", {
            className: eM.ON,
            children: [
                (0, i.jsx)(A.k, {
                    inputRef: this.searchBarRef,
                    autoFocus: !0,
                    fullWidth: !0,
                    helperText: r ? q.intl.string(u ? q.t.xHuK72 : q.t.FIHggl) : void 0,
                    placeholder: 0 === n.size ? (r ? q.intl.string(q.t["5h0QOP"]) : q.intl.string(q.t.K5e6bn)) : "",
                    disabled: this.isPartyFull(),
                    value: e,
                    leading: { type: "tags", items: s, onRemove: this.handleRemoveUser },
                    onChange: this.handleQueryChange,
                    onKeyDown: this.handleKeyDown.bind(this),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": eP,
                    "aria-expanded": l,
                    "aria-activedescendant": l ? `user-row-${o}` : void 0,
                }),
                this.renderAddUsersButton(),
            ],
        });
    }
    renderMobileCloseButton = () =>
        (0, i.jsx)("div", {
            className: eM.Lh,
            ref: this._mobileCloseRef,
            children: (0, i.jsx)(I.xp, {
                containerRef: this._mobileCloseRef,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(P.A, { className: eM.RR, closeAction: this.props.onClose, keybind: "ESC" }),
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
        let { hasFriends: e, results: t, channel: n } = this.props;
        if (!(((!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) || this.isPartyFull()))
            return 0 === t.length
                ? {
                      sections: [1],
                      sectionHeight: 0,
                      rowHeight: 32,
                      renderRow: () => {
                          if ((0, em.G)("PrivateChannelRecipientsInvite")) {
                              let e = null != n && n.isMultiUserDM();
                              return (0, i.jsxs)("div", {
                                  className: eM.wV,
                                  children: [
                                      (0, i.jsx)(m.E, {
                                          variant: "text-md/normal",
                                          color: "text-default",
                                          children: q.intl.string(q.t.z3yXsY),
                                      }),
                                      (0, i.jsx)(m.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: q.intl.string(e ? q.t["l6Rj+t"] : q.t["7w2iq7"]),
                                      }),
                                  ],
                              });
                          }
                          return (0, i.jsx)("div", {
                              className: eM.wV,
                              children: (0, i.jsx)(m.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: q.intl.string(q.t.z3yXsY),
                              }),
                          });
                      },
                  }
                : {
                      ref: this.scrollerRef,
                      sections: [t.length],
                      className: eM.XG,
                      innerClassName: eM.bv,
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
                      innerId: eP,
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
            eL,
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
        let s = (0, em.G)("PrivateChannelRecipientsInvite"),
            a = null != t ? (0, Z.A)(t.code) : "",
            o = a.length > 0;
        return (0, i.jsx)(T.D, {
            label: s ? q.intl.string(q.t.dTqtcN) : q.intl.string(q.t.t3O2BR),
            helperText: a.length > 0 ? q.intl.format(q.t.ZVdJMy, { numHours: "24" }) : void 0,
            children: (0, i.jsx)(S.e, {
                supportsCopy: e_.p5,
                placeholder: (0, Z.A)(q.intl.string(q.t.lPVBqP)),
                value: o ? (n ? q.intl.string(q.t["6HzNgZ"]) : a) : "",
                buttonColor: c.$n.Colors.BRAND,
                text: o ? (r ? q.intl.string(q.t.q30c5i) : q.intl.string(q.t.OpuAlK)) : q.intl.string(q.t.qzxqUf),
                mode: r ? S.q.SUCCESS : S.q.DEFAULT,
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
            let n = K.default.getUser(e),
                i = null != n && eu.A.getRelationshipType(n.id) === $.eA$.PENDING_OUTGOING;
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
        if (null == t || (t.isDM() && r)) {
            let e = null != t || n.size > 1,
                s = new Set(t?.isDM() && r ? [t.getRecipientId(), ...n] : n);
            return {
                actionBarInput: e
                    ? (0, i.jsx)(eH, {
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
            { actionBarInput: n, actions: r } = this.getFooterProps();
        return (0, i.jsx)(l.Modal, {
            transitionState: e ?? N.ip.ENTERED,
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
            M.A.sendRequest({
                discordTag: z.Ay.getUserTag(e, { identifiable: "always" }),
                context: { location: "Group DM" },
            });
    }
    forceFocus = () => {
        let e = this.searchBarRef.current;
        e?.focus();
    };
    focusResult = (e) => {
        w.select(e);
    };
    handleSelect = (e) => {
        let { results: t, channel: n } = this.props;
        if (null == e) w.clear(n?.id);
        else if (null != t) {
            let n = t[e];
            this.handleClick(n.user.id);
        }
    };
    handleSelectionChange = (e) => {
        w.select(e);
        let t = this.scrollerRef.current;
        null != t && t.scrollToIndex({ section: 0, row: e, padding: 8 });
    };
    handleQueryChange = (e) => {
        let { channel: t } = this.props,
            n = (0, k.dI)(t);
        w.search(e, t?.id),
            null != this._existingTimeout && clearTimeout(this._existingTimeout),
            (this._existingTimeout = setTimeout(() => {
                ed.default.track($.HAw.SEARCH_USER_LIST_STARTED, {
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
        w.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
        e.forEach((e) => {
            w.removeUser(e);
        }),
            this.forceFocus();
    };
    handleClick = (e) => {
        let { selectedUsers: t, query: n, channel: i } = this.props;
        i?.recipients.includes(e) ||
            (t.has(e)
                ? w.removeUser(e)
                : this.getRemaining() > 0 && (w.addUser(e), n.length > 0 && (w.clear(i?.id), this.forceFocus())));
    };
    handleAddFriendNavigation = () => {
        D.A.transitionToSection($.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose();
    };
    handleScroll = () => {
        let e = this.scrollerRef.current;
        null != e && this.setState({ separator: !e.isScrolledToTop() });
    };
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                let t = et.A.getUserAffinity(e);
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
            (null != n.name || null != n.icon) && b.A.updateChannel(e, n, t),
            ed.default.track($.HAw.GDM_EDIT_INTERACTED, {
                channel_id: e,
                channel_type: $.rbe.GROUP_DM,
                location: t,
                new_name_set: "" !== this.state.newChannelName,
                new_icon_set: null != this.state.previewIcon,
            });
    };
    createNewDM = (e) => {
        let t = this._searchCounter,
            { channel: n } = this.props,
            i = (0, k.dI)(n),
            r = !0;
        1 === e.length && (r = null == b.A._openCachedDMChannel(e[0])),
            ed.default.track($.HAw.CREATE_DM_USER_LIST_CLICKED, {
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
        let s = (0, em.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: a, inviteLinkOnlyUserIds: o } =
                s && e.length > 1 ? eU(e) : { channelRecipientIds: e, inviteLinkOnlyUserIds: [] };
        ek({ recipientIds: a, location: "New Group DM", useGroupDmShell: s && o.length > 0 })
            .then((e) => {
                this.props.onComplete?.(e), this.updateGDM(e, U.A.NEW_GROUP_DM_INVITE_MODAL), X(e, o);
            })
            .catch(eG);
    };
    pushToExistingDM = (e, t) => {
        let n = (0, em.G)("PrivateChannelRecipientsInvite"),
            { channelRecipientIds: i, inviteLinkOnlyUserIds: r } = n
                ? eU(t)
                : { channelRecipientIds: t, inviteLinkOnlyUserIds: [] },
            s = e.id;
        e.isGroupDM()
            ? this._addRecipientsToExistingGroupDM(s, i, r)
            : e.isDM() && this._promoteDMToGroupDM(s, e.getRecipientId(), i, r, n),
            ed.default.track($.HAw.CREATE_DM_USER_LIST_CLICKED, {
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
            r = eo.A.getChannelId() === e;
        (t.length > 0 ? b.A.addRecipients(e, t, $.ThZ.ADD_FRIENDS_TO_DM) : Promise.resolve(e))
            .then((e) => {
                this.props.onComplete?.(e),
                    i && this.updateGDM(e, $.ThZ.ADD_FRIENDS_TO_DM),
                    X(e, n),
                    r && t.length > 0 && R.A.ring(e, t, "dm_invite");
            })
            .catch(eG);
    };
    _promoteDMToGroupDM = (e, t, n, i, r) => {
        let { addToDMUpdatesEnabled: s } = this.props,
            a = eo.A.getChannelId() === e,
            o = ex(t),
            l = r && o ? [...n, t] : n,
            u = r && !o ? [...i, t] : i;
        (o && n.length > 0
            ? b.A.addRecipients(e, n, $.ThZ.ADD_FRIENDS_TO_DM)
            : l.length > 0 || u.length > 0
              ? ek({ recipientIds: l, location: "New Group DM", useGroupDmShell: r && u.length > 0 })
              : Promise.resolve(e)
        )
            .then((t) => {
                if ((this.props.onComplete?.(t), s && this.updateGDM(t, $.ThZ.ADD_FRIENDS_TO_DM), X(t, u), a)) {
                    if (t !== e) return void R.A.call(t, !1, !0);
                    n.length > 0 && R.A.ring(t, n, "dm_invite");
                }
            })
            .catch(eG);
    };
    handleInviteUsers = () => {
        let { channel: e, selectedUsers: t, onClose: n } = this.props,
            r = Array.from(t);
        if (null != e) {
            let t = e$(Array.from(new Set([...e.recipients, ...r])));
            t.size > 0
                ? (0, y.openModal)(
                      (n) => (0, i.jsx)(eV, { ...n, onConfirm: () => this.pushToExistingDM(e, r), channelIds: t }),
                      {},
                      (0, y.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.pushToExistingDM(e, r);
        } else {
            let e = e$(r);
            r.length > 1 && e.size > 0
                ? (0, y.openModal)(
                      (t) => (0, i.jsx)(eV, { ...t, onConfirm: () => this.createNewDM(r), channelIds: e }),
                      {},
                      (0, y.modalContextFromAppContext)(this.context.appContext),
                  )
                : this.createNewDM(r);
        }
        n();
    };
    handleCopyInvite = (e) => {
        let { channel: t, invite: n } = this.props;
        null != n && (0, e_.C)(e),
            null != this.copyTimeout && clearTimeout(this.copyTimeout),
            this.setState({ copied: !0 }),
            (this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1e3)),
            ed.default.track($.HAw.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: $.ThZ.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null,
            });
    };
    scrollToCounterSearchBarHeightChange = (e) => {
        let t = this.scrollerRef.current?.getScrollerNode?.();
        null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
}
function eH(e) {
    let { selectedUsers: t, channelName: n, previewIcon: r, onIconChange: s, onIconRemove: a, onChange: o } = e,
        { analyticsLocations: l } = (0, G.Ay)(U.A.NEW_GROUP_DM_INVITE_MODAL),
        u = (0, V.Jo)(Array.from(t), K.default, eu.A);
    return (0, i.jsxs)("div", {
        className: eM.zj,
        children: [
            (0, i.jsx)(H.X, {
                className: eM.r9,
                channel: null,
                previewIcon: r,
                onIconChange: s,
                onIconRemove: a,
                analyticsLocations: l,
                petite: !0,
                allowRemovingIcon: !1,
            }),
            (0, i.jsx)(m.E, {
                className: eM.hL,
                variant: "text-sm/medium",
                color: "text-muted",
                children: q.intl.string(q.t.YynaLK),
            }),
            (0, i.jsx)(A.k, {
                "aria-label": q.intl.string(q.t.YynaLK),
                name: "create-gdm-channel-name",
                placeholder: u,
                value: n,
                onChange: o,
            }),
        ],
    });
}
function ej(e) {
    let { channel: t, onComplete: n, ...r } = e,
        s = (0, u.cf)([ea.A, es.A, ec.A, er.A], () => {
            let e;
            return (
                null != t && null != (e = es.A.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...ea.A.getState(),
                    invite: e,
                    hideDiscriminator: ec.A.hidePersonalInformation,
                    hideInstantInvites: ec.A.hideInstantInvites,
                    hasGuilds: er.A.getGuildCount() > 0,
                }
            );
        }),
        a = (0, u.bG)(
            [K.default],
            () =>
                !!K.default.getCurrentUser()?.isStaff() &&
                null != t &&
                !!t.isDM() &&
                t.recipients.every((e) => K.default.getUser(e)?.isStaff()),
            [t],
        ),
        { enabled: o } = eE.A.useConfig({
            location: t?.isDM() ? "DM Channel Invite Modal" : "Invalid Channel for Experiment",
        });
    return (0, i.jsx)(eB, {
        channel: t,
        isStaffOnlyDM: a,
        onComplete: n,
        addToDMUpdatesEnabled: !!(t?.isDM() && o),
        ...r,
        ...s,
    });
}
function eY(e) {
    let { channel: t, subscribeToGlobalHotkey: n } = e,
        s = `channel-invite-modal-${t?.id}`,
        a = (0, y.useHasModalOpen)(s),
        o = r.useCallback(
            () =>
                (0, y.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(ej, { ...e, channel: t })), {
                    modalKey: s,
                }),
            [t, s],
        ),
        l = r.useCallback(() => (a ? (0, y.closeModal)(s) : o()), [a, s, o]);
    return (
        r.useEffect(
            () => (
                n && ef._.subscribe($.jej.TOGGLE_DM_CREATE, l),
                () => {
                    ef._.unsubscribe($.jej.TOGGLE_DM_CREATE, l);
                }
            ),
            [n, l],
        ),
        (0, x.Ay)(() => {
            (0, ee.u)();
        }),
        { showModal: o, toggleVisible: l }
    );
}
function eW(e) {
    let { channel: t, onComplete: n } = e,
        r = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, y.openModalLazy)(() => Promise.resolve((e) => (0, i.jsx)(ej, { ...e, channel: t, onComplete: n })), {
        modalKey: r,
    });
}
function eK(e) {
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
        _ = a ?? (null == t ? C.g : v.D),
        { showModal: f } = eY({ channel: t, subscribeToGlobalHotkey: c }),
        h = (0, u.bG)([K.default], () => K.default.getUser(t?.getRecipientId()));
    return h?.bot || h?.isProvisional
        ? null
        : (0, i.jsx)(eg.Ay.Icon, {
              ref: d,
              onClick: f,
              icon: _,
              className: s,
              iconClassName: n,
              tooltip: o,
              tooltipPosition: l,
          });
}
function ez(e) {
    let { channel: t, fullWidth: n = !1, text: s, icon: a, subscribeToGlobalHotkey: o = !1, ...l } = e,
        u = r.useRef(null),
        { showModal: c } = eY({ channel: t, subscribeToGlobalHotkey: o });
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
function e$(e) {
    let t = eq(e);
    return new Set(
        (0, s.chain)(ei.A.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, en.MK)(e.type))
            .filter((e) => eq(e.recipients) === t)
            .map((e) => e.id)
            .value(),
    );
}
function eq(e) {
    return JSON.stringify(e.sort());
}
