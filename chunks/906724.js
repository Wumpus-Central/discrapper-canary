(n.d(t, { default: () => e1, p: () => eq }), n(321073));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(435558),
    h = n.n(d),
    u = n(651188),
    c = n(17928),
    g = n(189213),
    p = n(770880),
    m = n(276293),
    C = n(146151),
    I = n(983851),
    A = n(597050),
    E = n(56059),
    b = n(434831),
    N = n(532590),
    S = n(191023),
    f = n(778492),
    O = n(278416),
    _ = n(451394),
    G = n(901117),
    v = n(323384),
    L = n(62010),
    T = n(834730),
    U = n(265872),
    M = n(231723),
    x = n(28863),
    y = n(192308),
    D = n(95477),
    j = n(144228),
    P = n(691885),
    R = n(193249),
    w = n(530557),
    k = n(890497),
    H = n(194261),
    B = n(683071),
    V = n(755584),
    F = n(66834),
    X = n(712963),
    Y = n(73153);
let W = {};
class Z extends c.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return W[e] ?? [];
    }
}
let z = new Z(Y.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        W[t] = n;
    },
    LOGOUT: function () {
        W = {};
    },
});
var Q = n(105292);
class K extends l.Component {
    static defaultProps = { includeMaster: !1 };
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        ((0, X.w)(e), n?.(t.length > 0));
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
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: l, hide: s, label: a } = this.props;
        if (0 === e.length || s) return null;
        let r = l ? e : e.filter((e) => e.id !== n);
        return (0, i.jsx)(P.l, {
            label: a,
            options: r.map((e) => ({ id: e.id, label: e.getName(n), value: e.id })),
            placeholder: Q.intl.string(Q.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
}
let q = c.Ay.connectStores([z], (e) => {
    let { applicationId: t } = e;
    return { branches: z.getBranches(t) };
})(K);
var J = n(830382),
    $ = n(67480);
class ee extends l.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: i } = this.props;
        null == t || 0 === t.length ? (0, J.O1)(e, !1) : 1 === t.length && null == n && i(t[0].id);
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
            l = null != e && 0 === e.length;
        return (0, i.jsx)(P.l, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map((e) => ({ id: e.id, label: e.name, value: e.id })) : [],
            placeholder: l ? Q.intl.string(Q.t.hKcgP5) : Q.intl.string(Q.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: l,
        });
    }
}
let et = c.Ay.connectStores([$.A], (e) => {
    let { applicationId: t } = e;
    return { skus: $.A.getForApplication(t) };
})(ee);
var en = n(155718),
    ei = n(666860),
    el = n(945810);
let es = (0, el.mj)({
    kind: "guild",
    name: "2026-07-app-channels",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ea = n(627807),
    er = n(587895),
    eo = n(495273),
    ed = n(517622),
    eh = n(86944),
    eu = n(915089),
    ec = n(375499),
    eg = n(90295),
    ep = n(770335),
    em = n(611371),
    eC = n(769015);
let eI = (0, el.mj)({
    kind: "guild",
    name: "2026-06-game-invites-channel",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eA = n(807632),
    eE = n(778747),
    eb = n(471677),
    eN = n(219444),
    eS = n(976860),
    ef = n(233993),
    eO = n(284738),
    e_ = n(841811),
    eG = n(95701),
    ev = n(734057),
    eL = n(696451),
    eT = n(71393),
    eU = n(576705),
    eM = n(994500),
    ex = n(287809),
    ey = n(147036),
    eD = n(403362),
    ej = n(965805),
    eP = n(47167),
    eR = n(280513),
    ew = n(837011),
    ek = n(90084),
    eH = n(975571),
    eB = n(652215);
function eV(e) {
    let { guildId: t, channelType: n, className: s } = e,
        { guildProfile: a, fetchGuildProfile: r, fetchStatus: o } = (0, ek.u)(t),
        d = o !== ew.X.FETCHED,
        h = null != a && eR.i.VISIBLE.has(a.visibility);
    l.useEffect(() => {
        r();
    }, [t, r]);
    let u = [];
    if (
        n === eB.rbe.GUILD_ANNOUNCEMENT &&
        (u.push(Q.intl.format(Q.t.tI7KNX, { documentationLink: eH.A.getArticleURL(eB.MVz.ANNOUNCEMENT_CHANNELS) })),
        !d && !h)
    ) {
        let e = Q.intl.string(Q.t["2Ab4Id"]);
        u.push(e);
    }
    return 0 === u.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: u.map((e, t) =>
                  (0, i.jsx)(T.E, { className: s, variant: "text-sm/normal", children: e }, `description-${t}`),
              ),
          });
}
var eF = n(746080),
    eX = n(719366),
    eY = n(307731),
    eW = n(818348),
    eZ = n(670064),
    ez = n(236048);
let eQ = "GAME_INVITES_CHANNEL_OPTION";
function eK(e) {
    return e === eQ ? eB.rbe.GUILD_FORUM : e;
}
function eq(e) {
    let { isNew: t, isBeta: n } = e,
        l = null;
    return (
        !0 === t
            ? (l = (0, i.jsx)("div", {
                  className: ez.Ad,
                  children: (0, i.jsx)(L.E, { type: { text: Q.intl.string(Q.t.psHMa6) }, variant: "primary" }),
              }))
            : !0 === n && (l = (0, i.jsx)(em.A, { className: ez.Ad })),
        l
    );
}
function eJ(e) {
    let t,
        {
            transitionState: n,
            onClose: s,
            channelType: a,
            iconComponent: r,
            error: o,
            name: d,
            guildId: h,
            onBack: u,
            canSubmit: p,
            onMembersChange: m,
            pendingPermissionOverwrites: C,
        } = e,
        [I, A] = l.useState(""),
        [E, b] = l.useState({}),
        N = l.useRef(null),
        S = (0, c.bG)([eT.A], () => eT.A.getGuild(h)),
        f = a === eB.rbe.GUILD_STAGE_VOICE,
        { roles: O, members: _, getRichTag: G } = (0, eh.K)(S, null, f ? ef.QY : (0, eG.TA)(a), I, f),
        v = ed.A.useSections({ roles: O, members: _ });
    return (l.useEffect(() => {
        m(E);
    }, [E, m]),
    null == S)
        ? null
        : ((t =
              0 === Object.keys(C).length
                  ? Q.intl.string(Q.t["5Wxrcd"])
                  : a === eB.rbe.GUILD_CATEGORY
                    ? Q.intl.string(Q.t["ISN+NM"])
                    : Q.intl.string(Q.t["fUYU+j"])),
          (0, i.jsx)(ed.A.Provider, {
              listRef: N,
              query: I,
              setQuery: A,
              pendingAdditions: E,
              setPendingAdditions: b,
              roles: O,
              members: _,
              getRichTag: G,
              children: (0, i.jsx)(g.a, {
                  transitionState: n,
                  onClose: s,
                  title: f ? Q.intl.string(Q.t["S/6zHM"]) : Q.intl.string(Q.t.dMJ3Y6),
                  subtitle: { text: d, leadingIcon: r },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          f
                              ? (0, i.jsx)(T.E, {
                                    color: "text-default",
                                    className: ez.h_,
                                    variant: "text-sm/normal",
                                    children: Q.intl.string(Q.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(ed.A.SearchBox, { placeholderText: Q.intl.string(Q.t.iezLLn) }),
                          (0, i.jsx)(T.E, {
                              className: ez.pK,
                              variant: "text-xs/normal",
                              children: Q.intl.string(Q.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: ed.A.SECTION_HEIGHT,
                      renderSection: ed.A.renderSection,
                      rowHeight: ed.A.ROW_HEIGHT,
                      renderRow: ed.A.renderRow,
                      sections: v,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: Q.intl.string(Q.t["13/7kX"]), onClick: u },
                      { variant: "primary", text: t, type: "submit", disabled: !p },
                  ],
              }),
          }));
}
function e$(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        s = l.useRef(null),
        a = l.useMemo(
            () => ({
                popoutLocation: {
                    page: eB.liQ.CREATE_CHANNEL_MODAL,
                    section: eB.JJy.CHANNEL_NAME,
                    object: eB.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        r = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(eg.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: eY.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (null != n && n.type === ep.i.UNICODE && t(n.surrogates), i && l());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: a,
                });
            },
            [a, n, t],
        );
    return (0, i.jsx)(U.Y, {
        targetElementRef: s,
        renderPopout: r,
        animation: U.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(ec.A, {
                ...e,
                ref: s,
                active: n,
                className: ez.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class e0 extends l.PureComponent {
    headerId = (0, eu.Ld)();
    _input;
    constructor(e) {
        super(e);
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        ((this.state = {
            channelTypeOption: t ?? eB.rbe.GUILD_TEXT,
            name: null != n ? (0, eP.m1)(n, ex.default, eM.A) : (i ?? ""),
            pendingPermissionOverwrites: {},
            isPrivate: !1,
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
        (i && null == n && F.A.fetchApplications(t),
            ei.Ay.trackWithMetadata(eB.HAw.OPEN_MODAL, { type: "Create Channel" }));
    }
    componentDidUpdate(e, t) {
        (!t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelTypeOption === eB.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelTypeOption: eB.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                ei.Ay.trackWithMetadata(eB.HAw.OPEN_MODAL, { type: "Create Private Channel" }));
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    setInputRef = (e) => {
        this._input = e;
    };
    handleNameChange = (e) => {
        let t = eK(this.state.channelTypeOption);
        e = (0, ej.A)(e, t);
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
        let t = eK(e),
            n = (0, ej.A)(this.state.name, t);
        (t === eB.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
            this.setState({ channelTypeOption: e, name: n, applicationId: null, skuId: null, branchId: null }));
    };
    handlePrivacyChange = (e) => {
        this.setState({ isPrivate: e });
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
            { isPrivate: l, channelTypeOption: s, skuId: a, applicationId: r, name: o, submitting: d } = this.state,
            h = eK(s);
        return (
            !d &&
            n !== M.ip.EXITING &&
            "" !== o &&
            "" !== o.trim() &&
            (!l || !!(0, eo.n0)(h, e, t)) &&
            (h !== eB.rbe.GUILD_STORE || null != a) &&
            (s !== eQ || null != i) &&
            (h !== eB.rbe.GUILD_APP || null != r) &&
            !0
        );
    }
    handleSubmit = async (e) => {
        let t, n, i;
        e.preventDefault();
        let {
                cloneChannel: l,
                categoryId: s,
                user: a,
                memberRoleIds: r,
                isAdmin: o,
                onClose: d,
                owner: u,
                selectedGame: c,
            } = this.props,
            {
                name: g,
                pendingPermissionOverwrites: p,
                channelTypeOption: m,
                skuId: C,
                branchId: I,
                applicationId: A,
                isPrivate: E,
            } = this.state,
            b = eK(m),
            N = m === eQ ? eF.lx.IS_GAME_INVITES_CHANNEL : null,
            S = (function (e) {
                if (e === eQ) return [{ name: eA.Dg }];
            })(m),
            f = this.getGuildId();
        if (null != f) {
            if (null != l) ((t = h().values(l.permissionOverwrites)), (n = l.bitrate), (i = l.userLimit));
            else if (b === eB.rbe.GUILD_ANNOUNCEMENT) t = (0, ey.IP)(f);
            else {
                if (E) {
                    t = (0, ey.CG)(f, b, [], !0);
                    let e = (0, eo.D4)(p, b);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && a.id === u.id;
                    t.some((e) => r.has(e.id)) || o || n || t.push((0, ey.n3)(a.id, b));
                }
                b === eB.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(p).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === eX.T6.ROLE
                                ? t.push((0, e_.j)(n.id, en.r2.ROLE))
                                : n.rowType === eX.T6.MEMBER && t.push((0, e_.j)(n.id, en.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await V.A.createChannel({
                    guildId: f,
                    type: b,
                    name: g,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: b !== eB.rbe.GUILD_CATEGORY ? s : null,
                    skuId: C,
                    branchId: I,
                    applicationId: A,
                    flags: N,
                    availableTags: S,
                    gameId: c?.id,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let l = e.body;
                ((0, eG.ig)(b) && (0, eS.uh)(l.guild_id, l.id), this.setState({ submitting: !1 }), d());
            } catch (e) {
                null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body, submitting: !1 })
                    : this.setState({ errors: { message: Q.intl.string(Q.t.fEptJP) }, submitting: !1 });
            }
        }
    };
    getIconComponent() {
        let { isPrivate: e, channelTypeOption: t } = this.state;
        switch (t) {
            case eB.rbe.GUILD_TEXT:
                return e ? p.I : m.N;
            case eB.rbe.GUILD_FORUM:
                return E.b;
            case eB.rbe.GUILD_MEDIA:
                return S.ImageIcon;
            case eB.rbe.GUILD_VOICE:
                return e ? C.t : I.H;
            case eB.rbe.GUILD_STORE:
                return O.TagIcon;
            case eB.rbe.GUILD_ANNOUNCEMENT:
                return f.k;
            case eB.rbe.GUILD_STAGE_VOICE:
                return _.q;
            case eQ:
                return b.t;
            case eB.rbe.GUILD_APP:
                return e ? G.Z : v.k;
            default:
                let n = eK(t);
                return (0, eG.ke)(n) ? m.N : eW.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: l } = this.props;
        return null != e
            ? Q.intl.format(Q.t.s2ZzZZ, { name: (0, eP.m1)(e, ex.default, eM.A, !0) })
            : t === eB.rbe.GUILD_FORUM
              ? Q.intl.format(Q.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            x.Anchor,
                            {
                                onClick: () =>
                                    (0, y.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("571331"), n.e("390052")]).then(
                                            n.bind(n, 653682),
                                        );
                                        return (t) => (0, i.jsx)(e, { ...t, guildId: l });
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
            { errors: n, channelTypeOption: l } = this.state,
            s = eK(l);
        n?.name != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let a = s === eB.rbe.GUILD_CATEGORY,
            r = a ? Q.intl.string(Q.t.OCAkGP) : Q.intl.string(Q.t.PVbHDl),
            o = this.getIconComponent();
        return (0, i.jsx)(D.k, {
            label: r,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case eB.rbe.GUILD_CATEGORY:
                        return Q.intl.string(Q.t.eTVbtx);
                    case eB.rbe.GUILD_FORUM:
                        return Q.intl.string(Q.t["5z1Xat"]);
                    default:
                        return Q.intl.string(Q.t["bw/b8E"]);
                }
            })(l),
            leading: a ? void 0 : o,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(e$, {
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
                canCreateAnnouncementChannel: l,
                canCreateStageChannel: s,
                canCreateMediaChannel: a,
                canCreateGameInvitesChannel: r,
                canCreateAppChannel: o,
            } = this.props,
            { channelTypeOption: d, isPrivate: h } = this.state;
        if (null != e || d === eB.rbe.GUILD_CATEGORY) return;
        let u = null != t && t.length > 0;
        return (0, i.jsx)(j.z, {
            label: Q.intl.string(Q.t["7ZcXG2"]),
            options: (function (e) {
                let {
                        isPrivate: t,
                        showStoreChannelOption: n,
                        showAnnouncementChannelOption: i,
                        canCreateStageChannel: l,
                        canCreateMediaChannel: s,
                        canCreateGameInvitesChannel: a,
                        canCreateAppChannel: r,
                    } = e,
                    o = [
                        {
                            leadingIcon: t ? p.I : m.N,
                            name: Q.intl.string(Q.t.pnuRXC),
                            value: eB.rbe.GUILD_TEXT,
                            desc: Q.intl.string(Q.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? C.t : I.H,
                            name: Q.intl.string(Q.t.Sx55Oh),
                            value: eB.rbe.GUILD_VOICE,
                            desc: Q.intl.string(Q.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? A.Q : E.b,
                            name: Q.intl.string(Q.t.eAVID5),
                            value: eB.rbe.GUILD_FORUM,
                            desc: Q.intl.string(Q.t.iZ5pgg),
                        },
                    ];
                return (
                    a &&
                        o.push({
                            leadingIcon: b.t,
                            name: Q.intl.string(eZ.default["h/GwWL"]),
                            value: eQ,
                            desc: Q.intl.string(eZ.default.DxwBMf),
                        }),
                    s &&
                        o.push({
                            leadingIcon: t ? N.c : S.ImageIcon,
                            name: Q.intl.string(Q.t["6x6fVg"]),
                            value: eB.rbe.GUILD_MEDIA,
                            desc: Q.intl.string(Q.t.JyCrwS),
                        }),
                    i &&
                        o.push({
                            leadingIcon: f.k,
                            name: Q.intl.string(Q.t.qr9dEP),
                            value: eB.rbe.GUILD_ANNOUNCEMENT,
                            desc: Q.intl.string(Q.t.gBkfzu),
                        }),
                    n &&
                        o.push({
                            leadingIcon: O.TagIcon,
                            name: Q.intl.string(Q.t.SxjkXf),
                            value: eB.rbe.GUILD_STORE,
                            desc: Q.intl.string(Q.t.nmCPMC),
                        }),
                    l &&
                        o.push({
                            leadingIcon: _.q,
                            name: Q.intl.string(Q.t.pNWst0),
                            value: eB.rbe.GUILD_STAGE_VOICE,
                            desc: Q.intl.string(Q.t.VPAwgo),
                        }),
                    r &&
                        o.push({
                            leadingIcon: t ? G.Z : v.k,
                            name: Q.intl.string(Q.t["A+8d6M"]),
                            value: eB.rbe.GUILD_APP,
                            desc: Q.intl.string(Q.t.LVQQ3Z),
                        }),
                    o
                );
            })({
                isPrivate: h,
                showStoreChannelOption: n && u,
                showAnnouncementChannelOption: l,
                canCreateStageChannel: s,
                canCreateMediaChannel: a,
                canCreateGameInvitesChannel: r,
                canCreateAppChannel: o,
            }),
            value: d,
            onChange: this.handleTypeChange,
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: l, showBranches: s, hasBranches: a } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(P.l, {
                    label: Q.intl.string(Q.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: Q.intl.string(Q.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, i.jsx)(
                          et,
                          {
                              label: Q.intl.string(Q.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: ez.dE,
                          },
                          t,
                      )
                    : null,
                null != t && a
                    ? (0, i.jsx)(R.d, {
                          label: Q.intl.string(Q.t["3e9mH5"]),
                          description: Q.intl.format(Q.t.UVXL1R, {
                              devPortalUrl: eB.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: w.R,
                          onChange: this.handleShowBranchesToggle,
                          checked: s,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: ez.dE,
                          children: (0, i.jsx)(
                              q,
                              {
                                  label: s ? Q.intl.string(Q.t.o7DqF3) : void 0,
                                  applicationId: t,
                                  onChange: this.handleBranchChange,
                                  selectedBranchId: l,
                                  hide: !s,
                                  includeMaster: s,
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
                selectedGame: l,
                onSelectedGameChange: s,
            } = this.props,
            a =
                e?.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                    leading: (0, i.jsx)(eC.A, { game: e, size: eC.M.XSMALL }),
                })) ?? [];
        return (
            (null != l && a.some((e) => e.id === l.id)) ||
                null == l ||
                a.push({
                    id: l.id,
                    label: l.name,
                    value: l.id,
                    leading: (0, i.jsx)(eC.A, { game: l, size: eC.M.XSMALL }),
                }),
            (0, i.jsx)(k.Z, {
                label: Q.intl.string(eZ.default["2wS18o"]),
                options: a,
                placeholder: Q.intl.string(eZ.default.Mbd4OZ),
                value: l?.id ?? null,
                onSelectionChange: function (t) {
                    s(e?.find((e) => e.id === t) ?? null);
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
        return (0, i.jsx)(ea.A, {
            guildId: e,
            channelId: t,
            selectedApplicationId: n,
            onChange: this.handleApplicationChange,
        });
    }
    renderPrivacyOptions() {
        let { cloneChannel: e } = this.props,
            { channelTypeOption: t, isPrivate: n } = this.state;
        if (null != e || t === eB.rbe.GUILD_ANNOUNCEMENT) return null;
        let l = t === eB.rbe.GUILD_CATEGORY ? Q.intl.string(Q.t.lEPAZ5) : Q.intl.string(Q.t.aUI70g),
            s = t === eB.rbe.GUILD_CATEGORY ? Q.intl.string(Q.t.RQUk61) : Q.intl.string(Q.t.YguuKq);
        return (0, i.jsx)(R.d, {
            label: l,
            description: s,
            icon: H.LockIcon,
            onChange: this.handlePrivacyChange,
            checked: n,
        });
    }
    renderError(e) {
        let t,
            { channelTypeOption: n, isPrivate: l, errors: s } = this.state,
            r = eK(n),
            { canConnect: o, canViewChannels: d } = this.props;
        if (Object.values(s).length > 0) {
            if (null != s.message && "" !== s.message) t = Array.isArray(s.message) ? s.message.join(" ") : s.message;
            else if (e || null == s.name) {
                let e = Object.values(s)[0];
                e.length > 0 && (t = Array.isArray(e) ? e.join(" ") : e);
            }
        } else l && !(0, eo.n0)(r, d, o) && (t = (0, eo.ld)(r));
        if (null != t)
            return (0, i.jsx)("div", {
                className: a()(ez.$5, { [ez.SE]: e }),
                children: (0, i.jsx)(B.w, { type: "critical", message: t, role: "alert" }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        let e,
            t,
            { channelTypeOption: n, isPrivate: l } = this.state,
            s = eK(n),
            { guildId: a, transitionState: r, cloneChannel: o, categoryId: d, onClose: h } = this.props,
            u =
                null != o
                    ? Q.intl.string(Q.t.dEaPc4)
                    : s === eB.rbe.GUILD_CATEGORY
                      ? Q.intl.string(Q.t["ISN+NM"])
                      : Q.intl.string(Q.t["fUYU+j"]);
        if (null != d) {
            let t = ev.A.getChannel(d);
            e = Q.intl.format(Q.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = s === eB.rbe.GUILD_CATEGORY ? Q.intl.string(Q.t["ISN+NM"]) : Q.intl.string(Q.t["fUYU+j"]);
        let c = l || s === eB.rbe.GUILD_STAGE_VOICE;
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(g.a, {
                transitionState: r,
                onClose: h,
                title: u,
                subtitle: e,
                preview: this.renderError(),
                actions: [
                    { variant: "secondary", text: Q.intl.string(Q.t["ETE/oC"]), onClick: h },
                    c
                        ? {
                              variant: "primary",
                              text: Q.intl.string(Q.t.PDTjLN),
                              type: "button",
                              disabled: !this.canSubmit(),
                              onClick: () => {
                                  this.setState({ slide: "ADD_MEMBERS", errors: {} });
                              },
                          }
                        : { variant: "primary", type: "submit", disabled: !this.canSubmit(), text: t },
                ],
                children: (0, i.jsxs)("div", {
                    className: ez.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        s === eB.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        n === eQ ? this.renderGameInvitesChannelOptions() : null,
                        s === eB.rbe.GUILD_APP && null == o ? this.renderAppChannelOptions() : null,
                        (0, i.jsx)(eV, { guildId: a, channelType: s, className: ez.wI }),
                        s === eB.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                    ],
                }),
            }),
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelTypeOption: t, pendingPermissionOverwrites: n } = this.state,
            { guildId: l, onClose: s, transitionState: a } = this.props,
            r = () => {
                this.setState({ slide: "CHANNEL_INFO" });
            },
            o = this.canSubmit();
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(eJ, {
                onClose: s,
                transitionState: a,
                channelType: eK(t),
                iconComponent: this.getIconComponent(),
                error: this.renderError(!0),
                name: e,
                guildId: l,
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
function e1(e) {
    let { ref: t, ...n } = e,
        { channelType: s, guildId: a, cloneChannelId: r } = n,
        d = (0, c.cf)([eT.A, ex.default, eU.A, ev.A, eL.Ay], () => {
            let e = eT.A.getGuild(a),
                t = ex.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let n = null != e && null != e.ownerId ? ex.default.getUser(e.ownerId) : null,
                i = eU.A.can(eB.xBc.ADMINISTRATOR, e),
                l = ev.A.getChannel(r);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(eB.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(eB.GuildFeatures.NEWS),
                user: t,
                owner: n,
                memberRoles: eL.Ay.getMember(a, t.id)?.roles ?? [],
                canViewChannels: eU.A.can(eB.xBc.VIEW_CHANNEL, e),
                canConnect: eU.A.can(eB.xBc.CONNECT, e),
                isAdmin: i,
                cloneChannel: l,
                channelType: l?.type ?? s,
                canManageRoles: eU.A.can(eB.xBc.MANAGE_ROLES, e),
                canManageChannels: eU.A.can(eB.xBc.MANAGE_CHANNELS, e),
            };
        }),
        h = (0, c.yK)([er.A], () =>
            er.A.getGuildApplicationIds(a)
                .map((e) => er.A.getApplication(e))
                .filter(eD.Vq),
        ),
        g = new Set(d.memberRoles),
        { canManageRoles: p, canManageChannels: m } = d,
        C = (0, eO.R)(a) && p && m,
        I = (0, eN.V)(d?.guild),
        A = eI.useConfig({ guildId: a, location: "CreateChannel" }).enabled,
        E = es.useConfig({ guildId: a, location: "CreateChannel web" }).enabled,
        [b, N] = l.useState(""),
        [S, f] = l.useState(null),
        {
            results: O,
            isLoading: _,
            onSelect: G,
        } = (0, eb.J$)(b, { surface: eE.K.CREATE_CHANNEL, filterGroup: u.m.DEFAULT }),
        v = l.useCallback(
            (e) => {
                (null != e && G(e.id), f(e));
            },
            [G],
        );
    return (0, i.jsx)(e0, {
        ...n,
        ...d,
        memberRoleIds: g,
        applications: h,
        canCreateStageChannel: C,
        canCreateMediaChannel: I,
        canCreateGameInvitesChannel: A,
        canCreateAppChannel: E,
        ref: t,
        width: 496,
        games: O,
        isGamesQueryLoading: _,
        onGameQueryChange: N,
        selectedGame: S,
        onSelectedGameChange: v,
    });
}
