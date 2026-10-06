(n.d(t, { default: () => e0, p: () => eK }), n(321073));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(435558),
    h = n.n(d),
    u = n(17928),
    c = n(189213),
    g = n(770880),
    p = n(276293),
    m = n(146151),
    C = n(983851),
    I = n(597050),
    A = n(56059),
    E = n(434831),
    b = n(532590),
    N = n(191023),
    S = n(778492),
    f = n(278416),
    O = n(451394),
    _ = n(901117),
    v = n(323384),
    G = n(508770),
    L = n(834730),
    T = n(922016),
    U = n(231723),
    M = n(28863),
    x = n(192308),
    D = n(95477),
    y = n(144228),
    R = n(691885),
    P = n(193249),
    j = n(530557),
    w = n(890497),
    k = n(194261),
    H = n(512950),
    B = n(755584),
    V = n(66834),
    F = n(712963),
    Y = n(73153);
let X = {};
class W extends u.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return X[e] ?? [];
    }
}
let Z = new W(Y.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        X[t] = n;
    },
    LOGOUT: function () {
        X = {};
    },
});
var z = n(375708);
class Q extends l.Component {
    static defaultProps = { includeMaster: !1 };
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        ((0, F.w)(e), n?.(t.length > 0));
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
        return (0, i.jsx)(R.l, {
            label: a,
            options: r.map((e) => ({ id: e.id, label: e.getName(n), value: e.id })),
            placeholder: z.intl.string(z.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
}
let K = u.Ay.connectStores([Z], (e) => {
    let { applicationId: t } = e;
    return { branches: Z.getBranches(t) };
})(Q);
var q = n(830382),
    J = n(67480);
class $ extends l.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: i } = this.props;
        null == t || 0 === t.length ? (0, q.O1)(e, !1) : 1 === t.length && null == n && i(t[0].id);
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
        return (0, i.jsx)(R.l, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map((e) => ({ id: e.id, label: e.name, value: e.id })) : [],
            placeholder: l ? z.intl.string(z.t.hKcgP5) : z.intl.string(z.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: l,
        });
    }
}
let ee = u.Ay.connectStores([J.A], (e) => {
    let { applicationId: t } = e;
    return { skus: J.A.getForApplication(t) };
})($);
var et = n(155718),
    en = n(95561),
    ei = n(945810);
let el = (0, ei.mj)({
    kind: "guild",
    name: "2026-07-app-channels",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var es = n(627807),
    ea = n(587895),
    er = n(495273),
    eo = n(517622),
    ed = n(86944),
    eh = n(915089),
    eu = n(375499),
    ec = n(267889),
    eg = n(770335),
    ep = n(611371),
    em = n(769015);
let eC = (0, ei.mj)({
    kind: "guild",
    name: "2026-06-game-invites-channel",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eI = n(807632),
    eA = n(778747),
    eE = n(471677),
    eb = n(219444),
    eN = n(976860),
    eS = n(233993),
    ef = n(284738),
    eO = n(841811),
    e_ = n(95701),
    ev = n(734057),
    eG = n(696451),
    eL = n(71393),
    eT = n(576705),
    eU = n(994500),
    eM = n(287809),
    ex = n(147036),
    eD = n(403362),
    ey = n(965805),
    eR = n(47167),
    eP = n(280513),
    ej = n(837011),
    ew = n(90084),
    ek = n(975571),
    eH = n(652215);
function eB(e) {
    let { guildId: t, channelType: n, className: s } = e,
        { guildProfile: a, fetchGuildProfile: r, fetchStatus: o } = (0, ew.u)(t),
        d = o !== ej.X.FETCHED,
        h = null != a && eP.i.VISIBLE.has(a.visibility);
    l.useEffect(() => {
        r();
    }, [t, r]);
    let u = [];
    if (
        n === eH.rbe.GUILD_ANNOUNCEMENT &&
        (u.push(z.intl.format(z.t.tI7KNX, { documentationLink: ek.A.getArticleURL(eH.MVz.ANNOUNCEMENT_CHANNELS) })),
        !d && !h)
    ) {
        let e = z.intl.string(z.t["2Ab4Id"]);
        u.push(e);
    }
    return 0 === u.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: u.map((e, t) =>
                  (0, i.jsx)(L.E, { className: s, variant: "text-sm/normal", children: e }, `description-${t}`),
              ),
          });
}
var eV = n(746080),
    eF = n(719366),
    eY = n(307731),
    eX = n(818348),
    eW = n(490094),
    eZ = n(236048);
let ez = "GAME_INVITES_CHANNEL_OPTION";
function eQ(e) {
    return e === ez ? eH.rbe.GUILD_FORUM : e;
}
function eK(e) {
    let { isNew: t, isBeta: n } = e,
        l = null;
    return (
        !0 === t
            ? (l = (0, i.jsx)("div", {
                  className: eZ.Ad,
                  children: (0, i.jsx)(G.E, { type: { text: z.intl.string(z.t.psHMa6) }, variant: "brand" }),
              }))
            : !0 === n && (l = (0, i.jsx)(ep.A, { className: eZ.Ad })),
        l
    );
}
function eq(e) {
    let t,
        {
            transitionState: n,
            onClose: s,
            channelType: a,
            iconComponent: r,
            error: o,
            name: d,
            guildId: h,
            onBack: g,
            canSubmit: p,
            onMembersChange: m,
            pendingPermissionOverwrites: C,
        } = e,
        [I, A] = l.useState(""),
        [E, b] = l.useState({}),
        N = l.useRef(null),
        S = (0, u.bG)([eL.A], () => eL.A.getGuild(h)),
        f = a === eH.rbe.GUILD_STAGE_VOICE,
        { roles: O, members: _, getRichTag: v } = (0, ed.K)(S, null, f ? eS.QY : (0, e_.TA)(a), I, f),
        G = eo.A.useSections({ roles: O, members: _ });
    return (l.useEffect(() => {
        m(E);
    }, [E, m]),
    null == S)
        ? null
        : ((t =
              0 === Object.keys(C).length
                  ? z.intl.string(z.t["5Wxrcd"])
                  : a === eH.rbe.GUILD_CATEGORY
                    ? z.intl.string(z.t["ISN+NM"])
                    : z.intl.string(z.t["fUYU+j"])),
          (0, i.jsx)(eo.A.Provider, {
              listRef: N,
              query: I,
              setQuery: A,
              pendingAdditions: E,
              setPendingAdditions: b,
              roles: O,
              members: _,
              getRichTag: v,
              children: (0, i.jsx)(c.a, {
                  transitionState: n,
                  onClose: s,
                  title: f ? z.intl.string(z.t["S/6zHM"]) : z.intl.string(z.t.dMJ3Y6),
                  subtitle: { text: d, leadingIcon: r },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          f
                              ? (0, i.jsx)(L.E, {
                                    color: "text-default",
                                    className: eZ.h_,
                                    variant: "text-sm/normal",
                                    children: z.intl.string(z.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(eo.A.SearchBox, { placeholderText: z.intl.string(z.t.iezLLn) }),
                          (0, i.jsx)(L.E, {
                              className: eZ.pK,
                              variant: "text-xs/normal",
                              children: z.intl.string(z.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: eo.A.SECTION_HEIGHT,
                      renderSection: eo.A.renderSection,
                      rowHeight: eo.A.ROW_HEIGHT,
                      renderRow: eo.A.renderRow,
                      sections: G,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: z.intl.string(z.t["13/7kX"]), onClick: g },
                      { variant: "primary", text: t, type: "submit", disabled: !p },
                  ],
              }),
          }));
}
function eJ(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        s = l.useRef(null),
        a = l.useMemo(
            () => ({
                popoutLocation: {
                    page: eH.liQ.CREATE_CHANNEL_MODAL,
                    section: eH.JJy.CHANNEL_NAME,
                    object: eH.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        r = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(ec.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: eY.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        (null != n && n.type === eg.i.UNICODE && t(n.surrogates), i && l());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: a,
                });
            },
            [a, n, t],
        );
    return (0, i.jsx)(T.Y, {
        targetElementRef: s,
        renderPopout: r,
        animation: T.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(eu.A, {
                ...e,
                ref: s,
                active: n,
                className: eZ.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class e$ extends l.PureComponent {
    headerId = (0, eh.Ld)();
    _input;
    constructor(e) {
        super(e);
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        ((this.state = {
            channelTypeOption: t ?? eH.rbe.GUILD_TEXT,
            name: null != n ? (0, eR.m1)(n, eM.default, eU.A) : (i ?? ""),
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
        (i && null == n && V.A.fetchApplications(t),
            en.Ay.trackWithMetadata(eH.HAw.OPEN_MODAL, { type: "Create Channel" }));
    }
    componentDidUpdate(e, t) {
        (!t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelTypeOption === eH.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelTypeOption: eH.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                en.Ay.trackWithMetadata(eH.HAw.OPEN_MODAL, { type: "Create Private Channel" }));
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    setInputRef = (e) => {
        this._input = e;
    };
    handleNameChange = (e) => {
        let t = eQ(this.state.channelTypeOption);
        e = (0, ey.A)(e, t);
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
        let t = eQ(e),
            n = (0, ey.A)(this.state.name, t);
        (t === eH.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
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
            h = eQ(s);
        return (
            !d &&
            n !== U.ip.EXITING &&
            "" !== o &&
            "" !== o.trim() &&
            (!l || !!(0, er.n0)(h, e, t)) &&
            (h !== eH.rbe.GUILD_STORE || null != a) &&
            (s !== ez || null != i) &&
            (h !== eH.rbe.GUILD_APP || null != r) &&
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
            b = eQ(m),
            N = m === ez ? eV.lx.IS_GAME_INVITES_CHANNEL : null,
            S = (function (e) {
                if (e === ez) return [{ name: eI.Dg }];
            })(m),
            f = this.getGuildId();
        if (null != f) {
            if (null != l) ((t = h().values(l.permissionOverwrites)), (n = l.bitrate), (i = l.userLimit));
            else if (b === eH.rbe.GUILD_ANNOUNCEMENT) t = (0, ex.IP)(f);
            else {
                if (E) {
                    t = (0, ex.CG)(f, b, [], !0);
                    let e = (0, er.D4)(p, b);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && a.id === u.id;
                    t.some((e) => r.has(e.id)) || o || n || t.push((0, ex.n3)(a.id, b));
                }
                b === eH.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(p).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === eF.T6.ROLE
                                ? t.push((0, eO.j)(n.id, et.r2.ROLE))
                                : n.rowType === eF.T6.MEMBER && t.push((0, eO.j)(n.id, et.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await B.A.createChannel({
                    guildId: f,
                    type: b,
                    name: g,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: b !== eH.rbe.GUILD_CATEGORY ? s : null,
                    skuId: C,
                    branchId: I,
                    applicationId: A,
                    flags: N,
                    availableTags: S,
                    gameId: c?.id,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let l = e.body;
                ((0, e_.ig)(b) && (0, eN.uh)(l.guild_id, l.id), this.setState({ submitting: !1 }), d());
            } catch (e) {
                null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body, submitting: !1 })
                    : this.setState({ errors: { message: z.intl.string(z.t.fEptJP) }, submitting: !1 });
            }
        }
    };
    getIconComponent() {
        let { isPrivate: e, channelTypeOption: t } = this.state;
        switch (t) {
            case eH.rbe.GUILD_TEXT:
                return e ? g.I : p.N;
            case eH.rbe.GUILD_FORUM:
                return A.b;
            case eH.rbe.GUILD_MEDIA:
                return N.ImageIcon;
            case eH.rbe.GUILD_VOICE:
                return e ? m.t : C.H;
            case eH.rbe.GUILD_STORE:
                return f.TagIcon;
            case eH.rbe.GUILD_ANNOUNCEMENT:
                return S.k;
            case eH.rbe.GUILD_STAGE_VOICE:
                return O.q;
            case ez:
                return E.t;
            case eH.rbe.GUILD_APP:
                return e ? _.Z : v.k;
            default:
                let n = eQ(t);
                return (0, e_.ke)(n) ? p.N : eX.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: l } = this.props;
        return null != e
            ? z.intl.format(z.t.s2ZzZZ, { name: (0, eR.m1)(e, eM.default, eU.A, !0) })
            : t === eH.rbe.GUILD_FORUM
              ? z.intl.format(z.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            M.Anchor,
                            {
                                onClick: () =>
                                    (0, x.openModalLazy)(async () => {
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
            s = eQ(l);
        n?.name != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let a = s === eH.rbe.GUILD_CATEGORY,
            r = a ? z.intl.string(z.t.OCAkGP) : z.intl.string(z.t.PVbHDl),
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
                    case eH.rbe.GUILD_CATEGORY:
                        return z.intl.string(z.t.eTVbtx);
                    case eH.rbe.GUILD_FORUM:
                        return z.intl.string(z.t["5z1Xat"]);
                    default:
                        return z.intl.string(z.t["bw/b8E"]);
                }
            })(l),
            leading: a ? void 0 : o,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(eJ, {
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
        if (null != e || d === eH.rbe.GUILD_CATEGORY) return;
        let u = null != t && t.length > 0;
        return (0, i.jsx)(y.z, {
            label: z.intl.string(z.t["7ZcXG2"]),
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
                            leadingIcon: t ? g.I : p.N,
                            name: z.intl.string(z.t.pnuRXC),
                            value: eH.rbe.GUILD_TEXT,
                            desc: z.intl.string(z.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? m.t : C.H,
                            name: z.intl.string(z.t.Sx55Oh),
                            value: eH.rbe.GUILD_VOICE,
                            desc: z.intl.string(z.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? I.Q : A.b,
                            name: z.intl.string(z.t.eAVID5),
                            value: eH.rbe.GUILD_FORUM,
                            desc: z.intl.string(z.t.iZ5pgg),
                        },
                    ];
                return (
                    a &&
                        o.push({
                            leadingIcon: E.t,
                            name: z.intl.string(eW.default["h/GwWL"]),
                            value: ez,
                            desc: z.intl.string(eW.default.DxwBMf),
                        }),
                    s &&
                        o.push({
                            leadingIcon: t ? b.c : N.ImageIcon,
                            name: z.intl.string(z.t["6x6fVg"]),
                            value: eH.rbe.GUILD_MEDIA,
                            desc: z.intl.string(z.t.JyCrwS),
                        }),
                    i &&
                        o.push({
                            leadingIcon: S.k,
                            name: z.intl.string(z.t.qr9dEP),
                            value: eH.rbe.GUILD_ANNOUNCEMENT,
                            desc: z.intl.string(z.t.gBkfzu),
                        }),
                    n &&
                        o.push({
                            leadingIcon: f.TagIcon,
                            name: z.intl.string(z.t.SxjkXf),
                            value: eH.rbe.GUILD_STORE,
                            desc: z.intl.string(z.t.nmCPMC),
                        }),
                    l &&
                        o.push({
                            leadingIcon: O.q,
                            name: z.intl.string(z.t.pNWst0),
                            value: eH.rbe.GUILD_STAGE_VOICE,
                            desc: z.intl.string(z.t.VPAwgo),
                        }),
                    r &&
                        o.push({
                            leadingIcon: t ? _.Z : v.k,
                            name: z.intl.string(z.t["A+8d6M"]),
                            value: eH.rbe.GUILD_APP,
                            desc: z.intl.string(z.t.LVQQ3Z),
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
                (0, i.jsx)(R.l, {
                    label: z.intl.string(z.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: z.intl.string(z.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, i.jsx)(
                          ee,
                          {
                              label: z.intl.string(z.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: eZ.dE,
                          },
                          t,
                      )
                    : null,
                null != t && a
                    ? (0, i.jsx)(P.d, {
                          label: z.intl.string(z.t["3e9mH5"]),
                          description: z.intl.format(z.t.UVXL1R, {
                              devPortalUrl: eH.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: j.R,
                          onChange: this.handleShowBranchesToggle,
                          checked: s,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: eZ.dE,
                          children: (0, i.jsx)(
                              K,
                              {
                                  label: s ? z.intl.string(z.t.o7DqF3) : void 0,
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
                    leading: (0, i.jsx)(em.A, { game: e, size: em.M.XSMALL }),
                })) ?? [];
        return (
            (null != l && a.some((e) => e.id === l.id)) ||
                null == l ||
                a.push({
                    id: l.id,
                    label: l.name,
                    value: l.id,
                    leading: (0, i.jsx)(em.A, { game: l, size: em.M.XSMALL }),
                }),
            (0, i.jsx)(w.Z, {
                label: z.intl.string(eW.default["2wS18o"]),
                options: a,
                placeholder: z.intl.string(eW.default.Mbd4OZ),
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
        return (0, i.jsx)(es.A, {
            guildId: e,
            channelId: t,
            selectedApplicationId: n,
            onChange: this.handleApplicationChange,
        });
    }
    renderPrivacyOptions() {
        let { cloneChannel: e } = this.props,
            { channelTypeOption: t, isPrivate: n } = this.state;
        if (null != e || t === eH.rbe.GUILD_ANNOUNCEMENT) return null;
        let l = t === eH.rbe.GUILD_CATEGORY ? z.intl.string(z.t.lEPAZ5) : z.intl.string(z.t.aUI70g),
            s = t === eH.rbe.GUILD_CATEGORY ? z.intl.string(z.t.RQUk61) : z.intl.string(z.t.YguuKq);
        return (0, i.jsx)(P.d, {
            label: l,
            description: s,
            icon: k.LockIcon,
            onChange: this.handlePrivacyChange,
            checked: n,
        });
    }
    renderError(e) {
        let t,
            { channelTypeOption: n, isPrivate: l, errors: s } = this.state,
            r = eQ(n),
            { canConnect: o, canViewChannels: d } = this.props;
        if (Object.values(s).length > 0) {
            if (null != s.message && "" !== s.message) t = s.message;
            else if (e || null == s.name) {
                let e = Object.values(s)[0];
                e.length > 0 && (t = e);
            }
        } else l && !(0, er.n0)(r, d, o) && (t = (0, er.ld)(r));
        if (null != t)
            return (0, i.jsx)("div", {
                className: a()(eZ.$5, { [eZ.SE]: e }),
                children: (0, i.jsx)(H.p, { messageType: H.Y.ERROR, children: t }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        let e,
            t,
            { channelTypeOption: n, isPrivate: l } = this.state,
            s = eQ(n),
            { guildId: a, transitionState: r, cloneChannel: o, categoryId: d, onClose: h } = this.props,
            u =
                null != o
                    ? z.intl.string(z.t.dEaPc4)
                    : s === eH.rbe.GUILD_CATEGORY
                      ? z.intl.string(z.t["ISN+NM"])
                      : z.intl.string(z.t["fUYU+j"]);
        if (null != d) {
            let t = ev.A.getChannel(d);
            e = z.intl.format(z.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = s === eH.rbe.GUILD_CATEGORY ? z.intl.string(z.t["ISN+NM"]) : z.intl.string(z.t["fUYU+j"]);
        let g = l || s === eH.rbe.GUILD_STAGE_VOICE;
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(c.a, {
                transitionState: r,
                onClose: h,
                title: u,
                subtitle: e,
                preview: this.renderError(),
                actions: [
                    { variant: "secondary", text: z.intl.string(z.t["ETE/oC"]), onClick: h },
                    g
                        ? {
                              variant: "primary",
                              text: z.intl.string(z.t.PDTjLN),
                              type: "button",
                              disabled: !this.canSubmit(),
                              onClick: () => {
                                  this.setState({ slide: "ADD_MEMBERS", errors: {} });
                              },
                          }
                        : { variant: "primary", type: "submit", disabled: !this.canSubmit(), text: t },
                ],
                children: (0, i.jsxs)("div", {
                    className: eZ.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        s === eH.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        n === ez ? this.renderGameInvitesChannelOptions() : null,
                        s === eH.rbe.GUILD_APP && null == o ? this.renderAppChannelOptions() : null,
                        (0, i.jsx)(eB, { guildId: a, channelType: s, className: eZ.wI }),
                        s === eH.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
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
            children: (0, i.jsx)(eq, {
                onClose: s,
                transitionState: a,
                channelType: eQ(t),
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
let e0 = l.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: a } = e,
        r = (0, u.cf)([eL.A, eM.default, eT.A, ev.A, eG.Ay], () => {
            let e = eL.A.getGuild(s),
                t = eM.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let i = null != e && null != e.ownerId ? eM.default.getUser(e.ownerId) : null,
                l = eT.A.can(eH.xBc.ADMINISTRATOR, e),
                r = ev.A.getChannel(a);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(eH.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(eH.GuildFeatures.NEWS),
                user: t,
                owner: i,
                memberRoles: eG.Ay.getMember(s, t.id)?.roles ?? [],
                canViewChannels: eT.A.can(eH.xBc.VIEW_CHANNEL, e),
                canConnect: eT.A.can(eH.xBc.CONNECT, e),
                isAdmin: l,
                cloneChannel: r,
                channelType: r?.type ?? n,
                canManageRoles: eT.A.can(eH.xBc.MANAGE_ROLES, e),
                canManageChannels: eT.A.can(eH.xBc.MANAGE_CHANNELS, e),
            };
        }),
        d = (0, u.yK)([ea.A], () =>
            ea.A.getGuildApplicationIds(s)
                .map((e) => ea.A.getApplication(e))
                .filter(eD.Vq),
        ),
        h = new Set(r.memberRoles),
        { canManageRoles: c, canManageChannels: g } = r,
        p = (0, ef.R)(s) && c && g,
        m = (0, eb.V)(r?.guild),
        C = eC.useConfig({ guildId: s, location: "CreateChannel" }).enabled,
        I = el.useConfig({ guildId: s, location: "CreateChannel web" }).enabled,
        [A, E] = l.useState(""),
        [b, N] = l.useState(null),
        { results: S, isLoading: f, onSelect: O } = (0, eE.J$)(A, { surface: eA.K.CREATE_CHANNEL }),
        _ = l.useCallback(
            (e) => {
                (null != e && O(e.id), N(e));
            },
            [O],
        );
    return (0, i.jsx)(e$, {
        ...e,
        ...r,
        memberRoleIds: h,
        applications: d,
        canCreateStageChannel: p,
        canCreateMediaChannel: m,
        canCreateGameInvitesChannel: C,
        canCreateAppChannel: I,
        ref: t,
        width: 496,
        games: S,
        isGamesQueryLoading: f,
        onGameQueryChange: E,
        selectedGame: b,
        onSelectedGameChange: _,
    });
});
