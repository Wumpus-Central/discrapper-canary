(n.d(t, { default: () => td, p: () => ta }), n(321073));
var i,
    l = n(477900),
    a = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(284009),
    d = n.n(o),
    u = n(435558),
    h = n.n(u),
    c = n(651188),
    g = n(17928),
    p = n(189213),
    E = n(770880),
    m = n(276293),
    A = n(146151),
    C = n(983851),
    I = n(597050),
    b = n(56059),
    S = n(434831),
    N = n(532590),
    _ = n(191023),
    f = n(778492),
    O = n(278416),
    L = n(451394),
    M = n(901117),
    G = n(323384),
    v = n(62010),
    U = n(834730),
    T = n(265872),
    x = n(231723),
    D = n(28863),
    y = n(192308),
    R = n(95477),
    j = n(144228),
    P = n(691885),
    w = n(193249),
    k = n(530557),
    H = n(890497),
    F = n(194261),
    B = n(683071),
    V = n(755584),
    X = n(66834),
    W = n(712963),
    Y = n(73153);
let Z = {};
class z extends g.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return Z[e] ?? [];
    }
}
let Q = new z(Y.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        Z[t] = n;
    },
    LOGOUT: function () {
        Z = {};
    },
});
var q = n(105292);
class K extends a.Component {
    static defaultProps = { includeMaster: !1 };
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        ((0, W.w)(e), n?.(t.length > 0));
    }
    componentDidUpdate(e) {
        let { onHasBranchesChange: t, branches: n } = this.props,
            i = n.length > 0;
        null != t && i !== e.branches.length > 0 && t(i);
    }
    handleChange = (e) => {
        this.props.onChange(e);
    };
    render() {
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: i, hide: a, label: s } = this.props;
        if (0 === e.length || a) return null;
        let r = i ? e : e.filter((e) => e.id !== n);
        return (0, l.jsx)(P.l, {
            label: s,
            options: r.map((e) => ({ id: e.id, label: e.getName(n), value: e.id })),
            placeholder: q.intl.string(q.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
}
let J = g.Ay.connectStores([Q], (e) => {
    let { applicationId: t } = e;
    return { branches: Q.getBranches(t) };
})(K);
var $ = n(830382),
    ee = n(67480);
class et extends a.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: i } = this.props;
        null == t || 0 === t.length ? (0, $.O1)(e, !1) : 1 === t.length && null == n && i(t[0].id);
    }
    componentDidUpdate() {
        let { skus: e, selectedSkuId: t, onChange: n } = this.props;
        null != e && 1 === e.length && null == t && n(e[0].id);
    }
    handleChange = (e) => {
        this.props.onChange(e);
    };
    render() {
        let { skus: e, selectedSkuId: t, label: n } = this.props,
            i = null != e && 0 === e.length;
        return (0, l.jsx)(P.l, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map((e) => ({ id: e.id, label: e.name, value: e.id })) : [],
            placeholder: i ? q.intl.string(q.t.hKcgP5) : q.intl.string(q.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: i,
        });
    }
}
let en = g.Ay.connectStores([ee.A], (e) => {
    let { applicationId: t } = e;
    return { skus: ee.A.getForApplication(t) };
})(et);
var ei = n(155718),
    el = n(666860),
    ea = n(945810);
let es = (0, ea.mj)({
    kind: "guild",
    name: "2026-07-app-channels",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var er = n(627807),
    eo = n(587895),
    ed = n(495273),
    eu = n(517622),
    eh = n(86944),
    ec = n(915089),
    eg = n(375499),
    ep = n(969602),
    eE = n(770335),
    em = n(611371),
    eA = n(769015);
let eC = (0, ea.mj)({
    kind: "guild",
    name: "2026-06-game-invites-channel",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eI = n(807632),
    eb = n(778747),
    eS = n(471677),
    eN = n(219444);
n(938796);
var e_ = n(452027),
    ef = n(998445),
    eO = n(975571),
    eL = n(279116),
    eM = n(502209),
    eG =
        (((i = {}).ALL_CONTENT = "all_content"),
        (i.SUMMARIES = "summaries"),
        (i.MESSAGES = "messages"),
        (i.NONE = "none"),
        i);
let ev = eL.D.SWP_CHANNEL_SUMMARIES_EXCLUDED,
    eU = eL.D.SWP_CHANNEL_MESSAGES_EXCLUDED,
    eT = { all_content: 0, summaries: eU, messages: ev, none: ev | eU },
    ex = { all_content: eM.default.QsbbMS, summaries: q.t.q21fUr, messages: q.t.OIgYlQ, none: q.t.PoWNfe };
var eD = n(278296),
    ey = n(71393),
    eR = n(576705),
    ej = n(677166),
    eP = n(652215);
let ew = {
    [eG.ALL_CONTENT]: [eG.ALL_CONTENT, eG.SUMMARIES, eG.MESSAGES, eG.NONE],
    [eG.SUMMARIES]: [eG.SUMMARIES, eG.NONE],
    [eG.MESSAGES]: [eG.MESSAGES, eG.NONE],
    [eG.NONE]: [],
};
function ek(e) {
    let t = (e & eL.D.SWP_CHANNEL_SUMMARIES_EXCLUDED) == 0,
        n = (e & eL.D.SWP_CHANNEL_MESSAGES_EXCLUDED) == 0;
    return t && n ? eG.ALL_CONTENT : t ? eG.SUMMARIES : n ? eG.MESSAGES : eG.NONE;
}
function eH() {
    return (0, l.jsx)(e_.D, {
        label: q.intl.string(eM.default.uneDIi),
        icon: ef.GlobeEarthIcon,
        description: q.intl.string(eM.default["MrI+fw"]),
        layout: "horizontal",
        role: "group",
        children: (0, l.jsx)(U.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: q.intl.string(q.t.PoWNfe),
        }),
    });
}
function eF(e) {
    let { value: t, options: n, readOnly: i, onChange: s } = e,
        r = a.useMemo(() => n.map((e) => ({ id: e, value: e, label: q.intl.string(ex[e]) })), [n]);
    return (0, l.jsx)(P.l, {
        label: q.intl.string(eM.default.uneDIi),
        icon: ef.GlobeEarthIcon,
        description: q.intl.format(eM.default["o3+MNm"], {
            learnMoreURL: eO.A.getArticleURL(eP.MVz.SERVER_WEB_PAGES_ADMIN),
        }),
        layout: "horizontal",
        fullWidth: !0,
        readOnly: i,
        selectionMode: "single",
        value: t,
        options: r,
        onSelectionChange: s,
    });
}
function eB(e) {
    let t,
        n,
        i,
        a,
        { guildId: s, isPrivate: r, flags: o, onChange: d } = e,
        u =
            ((t = (0, ej.C)(s, "create_guild_channel")),
            (n = (0, ej.Zu)(t ? s : null, "create_guild_channel")),
            (i = (0, g.bG)([ey.A], () => ey.A.getGuild(s), [s])),
            (a = (0, g.bG)([eR.A], () => eR.A.can(eP.xBc.MANAGE_GUILD, i), [i])),
            t && n && null != i
                ? (function (e) {
                      let { guild: t, flags: n, isPrivate: i, canManageGuild: l } = e,
                          a = Object.values(eD.tR).reduce((e, n) => ((0, eD.Ml)(t, n) ? e : e | n.channelFlag), 0),
                          s = ew[ek(a)];
                      return 0 === s.length
                          ? { kind: "hidden" }
                          : i
                            ? { kind: "private" }
                            : { kind: "select", value: ek(n | a), options: s, serverFlags: a, readOnly: !l };
                  })({ guild: i, flags: o, isPrivate: r, canManageGuild: a })
                : { kind: "hidden" });
    switch (u.kind) {
        case "hidden":
            return null;
        case "private":
            return (0, l.jsx)(eH, {});
        case "select":
            return (0, l.jsx)(eF, {
                value: u.value,
                options: u.options,
                readOnly: u.readOnly,
                onChange: (e) => {
                    var t;
                    return d(((t = u.serverFlags), "none" === e ? eT[e] : eT[e] & ~t));
                },
            });
    }
}
function eV(e) {
    let { channelType: t, ...n } = e;
    return eD.lo.has(t) ? (0, l.jsx)(eB, { ...n }) : null;
}
var eX = n(976860),
    eW = n(233993),
    eY = n(284738),
    eZ = n(841811),
    ez = n(95701),
    eQ = n(734057),
    eq = n(696451),
    eK = n(994500),
    eJ = n(287809),
    e$ = n(147036),
    e0 = n(403362),
    e1 = n(965805),
    e7 = n(47167),
    e5 = n(280513),
    e8 = n(837011),
    e2 = n(90084);
function e6(e) {
    let { guildId: t, channelType: n, className: i } = e,
        { guildProfile: s, fetchGuildProfile: r, fetchStatus: o } = (0, e2.u)(t),
        d = o !== e8.X.FETCHED,
        u = null != s && e5.i.VISIBLE.has(s.visibility);
    a.useEffect(() => {
        r();
    }, [t, r]);
    let h = [];
    if (
        n === eP.rbe.GUILD_ANNOUNCEMENT &&
        (h.push(q.intl.format(q.t.tI7KNX, { documentationLink: eO.A.getArticleURL(eP.MVz.ANNOUNCEMENT_CHANNELS) })),
        !d && !u)
    ) {
        let e = q.intl.string(q.t["2Ab4Id"]);
        h.push(e);
    }
    return 0 === h.length
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: h.map((e, t) =>
                  (0, l.jsx)(U.E, { className: i, variant: "text-sm/normal", children: e }, `description-${t}`),
              ),
          });
}
var e3 = n(746080),
    e9 = n(719366),
    e4 = n(307731),
    te = n(818348),
    tt = n(689125),
    tn = n(236048);
let ti = "GAME_INVITES_CHANNEL_OPTION";
function tl(e) {
    return e === ti ? eP.rbe.GUILD_FORUM : e;
}
function ta(e) {
    let { isNew: t, isBeta: n } = e,
        i = null;
    return (
        !0 === t
            ? (i = (0, l.jsx)("div", {
                  className: tn.Ad,
                  children: (0, l.jsx)(v.E, { type: { text: q.intl.string(q.t.psHMa6) }, variant: "primary" }),
              }))
            : !0 === n && (i = (0, l.jsx)(em.A, { className: tn.Ad })),
        i
    );
}
function ts(e) {
    let t,
        {
            transitionState: n,
            onClose: i,
            channelType: s,
            iconComponent: r,
            error: o,
            name: d,
            guildId: u,
            onBack: h,
            canSubmit: c,
            onMembersChange: p,
            pendingPermissionOverwrites: E,
        } = e,
        [m, A] = a.useState(""),
        [C, I] = a.useState({}),
        b = a.useRef(null),
        S = (0, g.bG)([ey.A], () => ey.A.getGuild(u)),
        N = s === eP.rbe.GUILD_STAGE_VOICE,
        { roles: _, members: f, getRichTag: O } = (0, eh.K)(S, null, N ? eW.QY : (0, ez.TA)(s), m, N),
        L = eu.A.useSections({ roles: _, members: f });
    return (a.useEffect(() => {
        p(C);
    }, [C, p]),
    null == S)
        ? null
        : ((t =
              0 === Object.keys(E).length
                  ? q.intl.string(q.t["5Wxrcd"])
                  : s === eP.rbe.GUILD_CATEGORY
                    ? q.intl.string(q.t["ISN+NM"])
                    : q.intl.string(q.t["fUYU+j"])),
          (0, l.jsx)(eu.A.Provider, {
              listRef: b,
              query: m,
              setQuery: A,
              pendingAdditions: C,
              setPendingAdditions: I,
              roles: _,
              members: f,
              getRichTag: O,
              children: (0, l.jsx)(eu.A.Modal, {
                  transitionState: n,
                  onClose: i,
                  title: N ? q.intl.string(q.t["S/6zHM"]) : q.intl.string(q.t.dMJ3Y6),
                  subtitle: { text: d, leadingIcon: r },
                  input: (0, l.jsxs)(l.Fragment, {
                      children: [
                          N
                              ? (0, l.jsx)(U.E, {
                                    color: "text-default",
                                    className: tn.h_,
                                    variant: "text-sm/normal",
                                    children: q.intl.string(q.t.f7VbhF),
                                })
                              : void 0,
                          (0, l.jsx)(eu.A.SearchBox, { placeholderText: q.intl.string(q.t.iezLLn) }),
                          (0, l.jsx)(U.E, {
                              className: tn.pK,
                              variant: "text-xs/normal",
                              children: q.intl.string(q.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: eu.A.SECTION_HEIGHT,
                      renderSection: eu.A.renderSection,
                      rowHeight: eu.A.ROW_HEIGHT,
                      renderRow: eu.A.renderRow,
                      sections: L,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: q.intl.string(q.t["13/7kX"]), onClick: h },
                      { variant: "primary", text: t, type: "submit", disabled: !c },
                  ],
              }),
          }));
}
function tr(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        i = a.useRef(null),
        s = a.useMemo(
            () => ({
                popoutLocation: {
                    page: eP.liQ.CREATE_CHANNEL_MODAL,
                    section: eP.JJy.CHANNEL_NAME,
                    object: eP.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        r = a.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(ep.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: e4.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        (null != n && n.type === eE.i.UNICODE && t(n.surrogates), l && i());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: s,
                });
            },
            [s, n, t],
        );
    return (0, l.jsx)(T.Y, {
        targetElementRef: i,
        renderPopout: r,
        animation: T.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(eg.A, {
                ...e,
                ref: i,
                active: n,
                className: tn.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class to extends a.PureComponent {
    headerId = (0, ec.Ld)();
    _input;
    constructor(e) {
        super(e);
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        ((this.state = {
            channelTypeOption: t ?? eP.rbe.GUILD_TEXT,
            name: null != n ? (0, e7.m1)(n, eJ.default, eK.A) : (i ?? ""),
            pendingPermissionOverwrites: {},
            isPrivate: !1,
            contentFlags: 0,
            prevGuildId: e.guildId,
            applicationId: n?.application_id ?? null,
            skuId: null,
            branchId: null,
            showBranches: !1,
            hasBranches: !1,
            slide: "CHANNEL_INFO",
            errors: {},
            submitting: !1,
        }),
            (this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this)));
    }
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: i } = this.props;
        (i && null == n && X.A.fetchApplications(t),
            el.Ay.trackWithMetadata(eP.HAw.OPEN_MODAL, { type: "Create Channel" }));
    }
    componentDidUpdate(e, t) {
        (!t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelTypeOption === eP.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelTypeOption: eP.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                el.Ay.trackWithMetadata(eP.HAw.OPEN_MODAL, { type: "Create Private Channel" }));
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    setInputRef = (e) => {
        this._input = e;
    };
    handleNameChange = (e) => {
        let t = tl(this.state.channelTypeOption);
        e = (0, e1.A)(e, t);
        let n = this._input?.selectionStart ?? 0;
        this.setState({ name: e }, () => {
            this._input?.setSelectionRange(n, n);
        });
    };
    insertEmojiAtPosition = (e) => {
        let t = this._input?.selectionStart ?? 0,
            n = this._input?.selectionEnd ?? 0,
            i = this.state.name,
            l = i.substring(0, t) + e + i.substring(n);
        this.setState({ name: l }, () => {
            let n = t + e.length;
            (this._input?.focus(), this._input?.setSelectionRange(n, n));
        });
    };
    handleTypeChange = (e) => {
        let t = tl(e),
            n = (0, e1.A)(this.state.name, t);
        (t === eP.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
            this.setState({
                channelTypeOption: e,
                name: n,
                applicationId: null,
                skuId: null,
                branchId: null,
                contentFlags: 0,
            }));
    };
    handlePrivacyChange = (e) => {
        this.setState({ isPrivate: e, contentFlags: 0 });
    };
    handleContentFlagsChange = (e) => {
        this.setState({ contentFlags: e });
    };
    handleApplicationChange = (e) => {
        this.setState({ applicationId: e });
    };
    handleSKUChange = (e) => {
        this.setState({ skuId: e });
    };
    handleShowBranchesToggle = (e) => {
        this.setState({ showBranches: e, branchId: null });
    };
    handleBranchChange = (e) => {
        this.setState({ branchId: e });
    };
    handleHasBranchesChange = (e) => {
        this.setState({ hasBranches: e });
    };
    canSubmit() {
        let { canViewChannels: e, canConnect: t, transitionState: n, selectedGame: i } = this.props,
            { isPrivate: l, channelTypeOption: a, skuId: s, applicationId: r, name: o, submitting: d } = this.state,
            u = tl(a);
        return (
            !d &&
            n !== x.ip.EXITING &&
            "" !== o &&
            "" !== o.trim() &&
            (!l || !!(0, ed.n0)(u, e, t)) &&
            (u !== eP.rbe.GUILD_STORE || null != s) &&
            (a !== ti || null != i) &&
            (u !== eP.rbe.GUILD_APP || null != r) &&
            !0
        );
    }
    handleSubmit = async (e) => {
        let t, n, i;
        e.preventDefault();
        let {
                cloneChannel: l,
                categoryId: a,
                user: s,
                memberRoleIds: r,
                isAdmin: o,
                onClose: d,
                owner: u,
                selectedGame: c,
            } = this.props,
            {
                name: g,
                pendingPermissionOverwrites: p,
                channelTypeOption: E,
                skuId: m,
                branchId: A,
                applicationId: C,
                isPrivate: I,
                contentFlags: b,
            } = this.state,
            S = tl(E),
            N = ((E === ti ? e3.lx.IS_GAME_INVITES_CHANNEL : null) ?? 0) | b,
            _ = (function (e) {
                if (e === ti) return [{ name: eI.Dg }];
            })(E),
            f = this.getGuildId();
        if (null != f) {
            if (null != l) ((t = h().values(l.permissionOverwrites)), (n = l.bitrate), (i = l.userLimit));
            else if (S === eP.rbe.GUILD_ANNOUNCEMENT) t = (0, e$.IP)(f);
            else {
                if (I) {
                    t = (0, e$.CG)(f, S, [], !0);
                    let e = (0, ed.D4)(p, S);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && s.id === u.id;
                    t.some((e) => r.has(e.id)) || o || n || t.push((0, e$.n3)(s.id, S));
                }
                S === eP.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(p).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === e9.T6.ROLE
                                ? t.push((0, eZ.j)(n.id, ei.r2.ROLE))
                                : n.rowType === e9.T6.MEMBER && t.push((0, eZ.j)(n.id, ei.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await V.A.createChannel({
                    guildId: f,
                    type: S,
                    name: g,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: S !== eP.rbe.GUILD_CATEGORY ? a : null,
                    skuId: m,
                    branchId: A,
                    applicationId: C,
                    flags: 0 !== N ? N : null,
                    availableTags: _,
                    gameId: c?.id,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let l = e.body;
                ((0, ez.ig)(S) && (0, eX.uh)(l.guild_id, l.id), this.setState({ submitting: !1 }), d());
            } catch (e) {
                null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body, submitting: !1 })
                    : this.setState({ errors: { message: q.intl.string(q.t.fEptJP) }, submitting: !1 });
            }
        }
    };
    getIconComponent() {
        let { isPrivate: e, channelTypeOption: t } = this.state;
        switch (t) {
            case eP.rbe.GUILD_TEXT:
                return e ? E.I : m.N;
            case eP.rbe.GUILD_FORUM:
                return b.b;
            case eP.rbe.GUILD_MEDIA:
                return _.ImageIcon;
            case eP.rbe.GUILD_VOICE:
                return e ? A.t : C.H;
            case eP.rbe.GUILD_STORE:
                return O.TagIcon;
            case eP.rbe.GUILD_ANNOUNCEMENT:
                return f.k;
            case eP.rbe.GUILD_STAGE_VOICE:
                return L.q;
            case ti:
                return S.t;
            case eP.rbe.GUILD_APP:
                return e ? M.Z : G.k;
            default:
                let n = tl(t);
                return (0, ez.ke)(n) ? m.N : te.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: i } = this.props;
        return null != e
            ? q.intl.format(q.t.s2ZzZZ, { name: (0, e7.m1)(e, eJ.default, eK.A, !0) })
            : t === eP.rbe.GUILD_FORUM
              ? q.intl.format(q.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, l.jsx)(
                            D.Anchor,
                            {
                                onClick: () =>
                                    (0, y.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("571331"), n.e("390052")]).then(
                                            n.bind(n, 653682),
                                        );
                                        return (t) => (0, l.jsx)(e, { ...t, guildId: i });
                                    }),
                                children: e,
                            },
                            t,
                        ),
                })
              : void 0;
    }
    renderName() {
        let e,
            { guildId: t } = this.props,
            { errors: n, channelTypeOption: i } = this.state,
            a = tl(i);
        n?.name != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let s = a === eP.rbe.GUILD_CATEGORY,
            r = s ? q.intl.string(q.t.OCAkGP) : q.intl.string(q.t.PVbHDl),
            o = this.getIconComponent();
        return (0, l.jsx)(R.k, {
            label: r,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case eP.rbe.GUILD_CATEGORY:
                        return q.intl.string(q.t.eTVbtx);
                    case eP.rbe.GUILD_FORUM:
                        return q.intl.string(q.t["5z1Xat"]);
                    default:
                        return q.intl.string(q.t["bw/b8E"]);
                }
            })(i),
            leading: s ? void 0 : o,
            trailing: {
                type: "emoji",
                button: (0, l.jsx)(tr, {
                    onEmojiPicked: this.insertEmojiAtPosition,
                    isPrivateChannel: this.state.isPrivate,
                    guildId: t,
                }),
            },
            autoFocus: !0,
            focusProps: { offset: { right: -30 } },
        });
    }
    renderType() {
        let {
                cloneChannel: e,
                applications: t,
                canCreateStoreChannel: n,
                canCreateAnnouncementChannel: i,
                canCreateStageChannel: a,
                canCreateMediaChannel: s,
                canCreateGameInvitesChannel: r,
                canCreateAppChannel: o,
            } = this.props,
            { channelTypeOption: d, isPrivate: u } = this.state;
        if (null != e || d === eP.rbe.GUILD_CATEGORY) return;
        let h = null != t && t.length > 0;
        return (0, l.jsx)(j.z, {
            label: q.intl.string(q.t["7ZcXG2"]),
            options: (function (e) {
                let {
                        isPrivate: t,
                        showStoreChannelOption: n,
                        showAnnouncementChannelOption: i,
                        canCreateStageChannel: l,
                        canCreateMediaChannel: a,
                        canCreateGameInvitesChannel: s,
                        canCreateAppChannel: r,
                    } = e,
                    o = [
                        {
                            leadingIcon: t ? E.I : m.N,
                            name: q.intl.string(q.t.pnuRXC),
                            value: eP.rbe.GUILD_TEXT,
                            desc: q.intl.string(q.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? A.t : C.H,
                            name: q.intl.string(q.t.Sx55Oh),
                            value: eP.rbe.GUILD_VOICE,
                            desc: q.intl.string(q.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? I.Q : b.b,
                            name: q.intl.string(q.t.eAVID5),
                            value: eP.rbe.GUILD_FORUM,
                            desc: q.intl.string(q.t.iZ5pgg),
                        },
                    ];
                return (
                    s &&
                        o.push({
                            leadingIcon: S.t,
                            name: q.intl.string(tt.default["h/GwWL"]),
                            value: ti,
                            desc: q.intl.string(tt.default.DxwBMf),
                        }),
                    a &&
                        o.push({
                            leadingIcon: t ? N.c : _.ImageIcon,
                            name: q.intl.string(q.t["6x6fVg"]),
                            value: eP.rbe.GUILD_MEDIA,
                            desc: q.intl.string(q.t.JyCrwS),
                        }),
                    i &&
                        o.push({
                            leadingIcon: f.k,
                            name: q.intl.string(q.t.qr9dEP),
                            value: eP.rbe.GUILD_ANNOUNCEMENT,
                            desc: q.intl.string(q.t.gBkfzu),
                        }),
                    n &&
                        o.push({
                            leadingIcon: O.TagIcon,
                            name: q.intl.string(q.t.SxjkXf),
                            value: eP.rbe.GUILD_STORE,
                            desc: q.intl.string(q.t.nmCPMC),
                        }),
                    l &&
                        o.push({
                            leadingIcon: L.q,
                            name: q.intl.string(q.t.pNWst0),
                            value: eP.rbe.GUILD_STAGE_VOICE,
                            desc: q.intl.string(q.t.VPAwgo),
                        }),
                    r &&
                        o.push({
                            leadingIcon: t ? M.Z : G.k,
                            name: q.intl.string(q.t["A+8d6M"]),
                            value: eP.rbe.GUILD_APP,
                            desc: q.intl.string(q.t.LVQQ3Z),
                        }),
                    o
                );
            })({
                isPrivate: u,
                showStoreChannelOption: n && h,
                showAnnouncementChannelOption: i,
                canCreateStageChannel: a,
                canCreateMediaChannel: s,
                canCreateGameInvitesChannel: r,
                canCreateAppChannel: o,
            }),
            value: d,
            onChange: this.handleTypeChange,
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: i, showBranches: a, hasBranches: s } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(P.l, {
                    label: q.intl.string(q.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: q.intl.string(q.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, l.jsx)(
                          en,
                          {
                              label: q.intl.string(q.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: tn.dE,
                          },
                          t,
                      )
                    : null,
                null != t && s
                    ? (0, l.jsx)(w.d, {
                          label: q.intl.string(q.t["3e9mH5"]),
                          description: q.intl.format(q.t.UVXL1R, {
                              devPortalUrl: eP.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: k.R,
                          onChange: this.handleShowBranchesToggle,
                          checked: a,
                      })
                    : null,
                null != t
                    ? (0, l.jsx)("div", {
                          className: tn.dE,
                          children: (0, l.jsx)(
                              J,
                              {
                                  label: a ? q.intl.string(q.t.o7DqF3) : void 0,
                                  applicationId: t,
                                  onChange: this.handleBranchChange,
                                  selectedBranchId: i,
                                  hide: !a,
                                  includeMaster: a,
                                  onHasBranchesChange: this.handleHasBranchesChange,
                              },
                              t,
                          ),
                      })
                    : null,
            ],
        });
    }
    renderGameInvitesChannelOptions() {
        let {
                games: e,
                onGameQueryChange: t,
                isGamesQueryLoading: n,
                selectedGame: i,
                onSelectedGameChange: a,
            } = this.props,
            s =
                e?.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, l.jsx)(eA.A, { game: e, size: eA.M.XSMALL }),
                })) ?? [];
        return (
            (null != i && s.some((e) => e.id === i.id)) ||
                null == i ||
                s.push({
                    id: i.id,
                    label: i.name,
                    value: i.id,
                    leading: (0, l.jsx)(eA.A, { game: i, size: eA.M.XSMALL }),
                }),
            (0, l.jsx)(H.Z, {
                label: q.intl.string(tt.default["2wS18o"]),
                options: s,
                placeholder: q.intl.string(tt.default.Mbd4OZ),
                value: i?.id ?? null,
                onSelectionChange: function (t) {
                    a(e?.find((e) => e.id === t) ?? null);
                },
                selectionMode: "single",
                fullWidth: !0,
                onQueryChange: (e) => t(e.target.value),
                loading: n,
            })
        );
    }
    renderAppChannelOptions() {
        let { guildId: e, categoryId: t } = this.props,
            { applicationId: n } = this.state;
        return (0, l.jsx)(er.A, {
            guildId: e,
            channelId: t,
            selectedApplicationId: n,
            onChange: this.handleApplicationChange,
        });
    }
    renderPrivacyOptions() {
        let { cloneChannel: e } = this.props,
            { channelTypeOption: t, isPrivate: n } = this.state;
        if (null != e || t === eP.rbe.GUILD_ANNOUNCEMENT) return null;
        let i = t === eP.rbe.GUILD_CATEGORY ? q.intl.string(q.t.lEPAZ5) : q.intl.string(q.t.aUI70g),
            a = t === eP.rbe.GUILD_CATEGORY ? q.intl.string(q.t.RQUk61) : q.intl.string(q.t.YguuKq);
        return (0, l.jsx)(w.d, {
            label: i,
            description: a,
            icon: F.LockIcon,
            onChange: this.handlePrivacyChange,
            checked: n,
        });
    }
    renderError(e) {
        let t,
            { channelTypeOption: n, isPrivate: i, errors: a } = this.state,
            s = tl(n),
            { canConnect: o, canViewChannels: d } = this.props;
        if (Object.values(a).length > 0) {
            if (null != a.message && "" !== a.message) t = Array.isArray(a.message) ? a.message.join(" ") : a.message;
            else if (e || null == a.name) {
                let e = Object.values(a)[0];
                e.length > 0 && (t = Array.isArray(e) ? e.join(" ") : e);
            }
        } else i && !(0, ed.n0)(s, d, o) && (t = (0, ed.ld)(s));
        if (null != t)
            return (0, l.jsx)("div", {
                className: r()(tn.$5, { [tn.SE]: e }),
                children: (0, l.jsx)(B.w, { type: "critical", message: t, role: "alert" }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        let e,
            t,
            { channelTypeOption: n, isPrivate: i, contentFlags: a } = this.state,
            s = tl(n),
            { guildId: r, transitionState: o, cloneChannel: d, categoryId: u, onClose: h } = this.props,
            c =
                null != d
                    ? q.intl.string(q.t.dEaPc4)
                    : s === eP.rbe.GUILD_CATEGORY
                      ? q.intl.string(q.t["ISN+NM"])
                      : q.intl.string(q.t["fUYU+j"]);
        if (null != u) {
            let t = eQ.A.getChannel(u);
            e = q.intl.format(q.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = s === eP.rbe.GUILD_CATEGORY ? q.intl.string(q.t["ISN+NM"]) : q.intl.string(q.t["fUYU+j"]);
        let g = i || s === eP.rbe.GUILD_STAGE_VOICE;
        return (0, l.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, l.jsx)(p.a, {
                transitionState: o,
                onClose: h,
                title: c,
                subtitle: e,
                preview: this.renderError(),
                actions: [
                    { variant: "secondary", text: q.intl.string(q.t["ETE/oC"]), onClick: h },
                    g
                        ? {
                              variant: "primary",
                              text: q.intl.string(q.t.PDTjLN),
                              type: "button",
                              disabled: !this.canSubmit(),
                              onClick: () => {
                                  this.setState({ slide: "ADD_MEMBERS", errors: {} });
                              },
                          }
                        : { variant: "primary", type: "submit", disabled: !this.canSubmit(), text: t },
                ],
                children: (0, l.jsxs)("div", {
                    className: tn.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        s === eP.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        n === ti ? this.renderGameInvitesChannelOptions() : null,
                        s === eP.rbe.GUILD_APP && null == d ? this.renderAppChannelOptions() : null,
                        (0, l.jsx)(e6, { guildId: r, channelType: s, className: tn.wI }),
                        s === eP.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                        null == d
                            ? (0, l.jsx)(eV, {
                                  guildId: r,
                                  channelType: s,
                                  isPrivate: i && s !== eP.rbe.GUILD_ANNOUNCEMENT,
                                  flags: a,
                                  onChange: this.handleContentFlagsChange,
                              })
                            : null,
                    ],
                }),
            }),
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelTypeOption: t, pendingPermissionOverwrites: n } = this.state,
            { guildId: i, onClose: a, transitionState: s } = this.props,
            r = () => {
                this.setState({ slide: "CHANNEL_INFO" });
            },
            o = this.canSubmit();
        return (0, l.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, l.jsx)(ts, {
                onClose: a,
                transitionState: s,
                channelType: tl(t),
                iconComponent: this.getIconComponent(),
                error: this.renderError(!0),
                name: e,
                guildId: i,
                onBack: r,
                canSubmit: o,
                onMembersChange: this.handlePermissionOverwriteChange,
                pendingPermissionOverwrites: n,
            }),
        });
    }
    render() {
        let { slide: e } = this.state;
        return "CHANNEL_INFO" === e ? this.renderCreateChannelModal() : this.renderAddMemberSlideContent();
    }
}
function td(e) {
    let { ref: t, ...n } = e,
        { channelType: i, guildId: s, cloneChannelId: r } = n,
        o = (0, g.cf)([ey.A, eJ.default, eR.A, eQ.A, eq.Ay], () => {
            let e = ey.A.getGuild(s),
                t = eJ.default.getCurrentUser();
            d()(null != t, "CreateChannel: user cannot be undefined");
            let n = null != e && null != e.ownerId ? eJ.default.getUser(e.ownerId) : null,
                l = eR.A.can(eP.xBc.ADMINISTRATOR, e),
                a = eQ.A.getChannel(r);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(eP.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(eP.GuildFeatures.NEWS),
                user: t,
                owner: n,
                memberRoles: eq.Ay.getMember(s, t.id)?.roles ?? [],
                canViewChannels: eR.A.can(eP.xBc.VIEW_CHANNEL, e),
                canConnect: eR.A.can(eP.xBc.CONNECT, e),
                isAdmin: l,
                cloneChannel: a,
                channelType: a?.type ?? i,
                canManageRoles: eR.A.can(eP.xBc.MANAGE_ROLES, e),
                canManageChannels: eR.A.can(eP.xBc.MANAGE_CHANNELS, e),
            };
        }),
        u = (0, g.yK)([eo.A], () =>
            eo.A.getGuildApplicationIds(s)
                .map((e) => eo.A.getApplication(e))
                .filter(e0.Vq),
        ),
        h = new Set(o.memberRoles),
        { canManageRoles: p, canManageChannels: E } = o,
        m = (0, eY.R)(s) && p && E,
        A = (0, eN.V)(o?.guild),
        C = eC.useConfig({ guildId: s, location: "CreateChannel" }).enabled,
        I = es.useConfig({ guildId: s, location: "CreateChannel web" }).enabled,
        [b, S] = a.useState(""),
        [N, _] = a.useState(null),
        {
            results: f,
            isLoading: O,
            onSelect: L,
        } = (0, eS.J$)(b, { surface: eb.K.CREATE_CHANNEL, filterGroup: c.m.DEFAULT }),
        M = a.useCallback(
            (e) => {
                (null != e && L(e.id), _(e));
            },
            [L],
        );
    return (0, l.jsx)(to, {
        ...n,
        ...o,
        memberRoleIds: h,
        applications: u,
        canCreateStageChannel: m,
        canCreateMediaChannel: A,
        canCreateGameInvitesChannel: C,
        canCreateAppChannel: I,
        ref: t,
        width: 496,
        games: f,
        isGamesQueryLoading: O,
        onGameQueryChange: S,
        selectedGame: N,
        onSelectedGameChange: M,
    });
}
