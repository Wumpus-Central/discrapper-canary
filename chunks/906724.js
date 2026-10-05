(n.d(t, { default: () => e1, p: () => eq }), n(321073));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(435558),
    h = n.n(d),
    u = n(17928),
    c = n(661531),
    g = n(189213),
    p = n(770880),
    m = n(276293),
    C = n(146151),
    I = n(983851),
    A = n(597050),
    E = n(56059),
    b = n(434831),
    N = n(532590),
    O = n(191023),
    S = n(778492),
    f = n(278416),
    _ = n(451394),
    G = n(901117),
    L = n(323384),
    T = n(812993),
    v = n(834730),
    U = n(922016),
    M = n(231723),
    x = n(28863),
    D = n(192308),
    R = n(95477),
    y = n(144228),
    P = n(691885),
    j = n(193249),
    w = n(530557),
    k = n(890497),
    H = n(194261),
    B = n(512950),
    V = n(755584),
    F = n(66834),
    Y = n(712963),
    X = n(73153);
let W = {};
class Z extends u.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return W[e] ?? [];
    }
}
let z = new Z(X.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        W[t] = n;
    },
    LOGOUT: function () {
        W = {};
    },
});
var K = n(375708);
class Q extends l.Component {
    static defaultProps = { includeMaster: !1 };
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        ((0, Y.w)(e), n?.(t.length > 0));
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
            placeholder: K.intl.string(K.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
}
let q = u.Ay.connectStores([z], (e) => {
    let { applicationId: t } = e;
    return { branches: z.getBranches(t) };
})(Q);
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
            placeholder: l ? K.intl.string(K.t.hKcgP5) : K.intl.string(K.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: l,
        });
    }
}
let et = u.Ay.connectStores([$.A], (e) => {
    let { applicationId: t } = e;
    return { skus: $.A.getForApplication(t) };
})(ee);
var en = n(155718),
    ei = n(95561),
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
    eg = n(267889),
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
    eO = n(976860),
    eS = n(233993),
    ef = n(284738),
    e_ = n(841811),
    eG = n(95701),
    eL = n(734057),
    eT = n(696451),
    ev = n(71393),
    eU = n(576705),
    eM = n(994500),
    ex = n(287809),
    eD = n(147036),
    eR = n(403362),
    ey = n(965805),
    eP = n(47167),
    ej = n(280513),
    ew = n(837011),
    ek = n(90084),
    eH = n(975571),
    eB = n(652215);
function eV(e) {
    let { guildId: t, channelType: n, className: s } = e,
        { guildProfile: a, fetchGuildProfile: r, fetchStatus: o } = (0, ek.u)(t),
        d = o !== ew.X.FETCHED,
        h = null != a && ej.i.VISIBLE.has(a.visibility);
    l.useEffect(() => {
        r();
    }, [t, r]);
    let u = [];
    if (
        n === eB.rbe.GUILD_ANNOUNCEMENT &&
        (u.push(K.intl.format(K.t.tI7KNX, { documentationLink: eH.A.getArticleURL(eB.MVz.ANNOUNCEMENT_CHANNELS) })),
        !d && !h)
    ) {
        let e = K.intl.string(K.t["2Ab4Id"]);
        u.push(e);
    }
    return 0 === u.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: u.map((e, t) =>
                  (0, i.jsx)(v.E, { className: s, variant: "text-sm/normal", children: e }, `description-${t}`),
              ),
          });
}
var eF = n(746080),
    eY = n(719366),
    eX = n(307731),
    eW = n(818348),
    eZ = n(490094),
    ez = n(236048);
let eK = "GAME_INVITES_CHANNEL_OPTION";
function eQ(e) {
    return e === eK ? eB.rbe.GUILD_FORUM : e;
}
function eq(e) {
    let { isNew: t, isBeta: n } = e,
        l = null;
    return (
        !0 === t
            ? (l = (0, i.jsx)(T.Lp, {
                  text: K.intl.string(K.t.psHMa6),
                  className: ez.Ad,
                  color: c.A.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
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
            onBack: c,
            canSubmit: p,
            onMembersChange: m,
            pendingPermissionOverwrites: C,
        } = e,
        [I, A] = l.useState(""),
        [E, b] = l.useState({}),
        N = l.useRef(null),
        O = (0, u.bG)([ev.A], () => ev.A.getGuild(h)),
        S = a === eB.rbe.GUILD_STAGE_VOICE,
        { roles: f, members: _, getRichTag: G } = (0, eh.K)(O, null, S ? eS.QY : (0, eG.TA)(a), I, S),
        L = ed.A.useSections({ roles: f, members: _ });
    return (l.useEffect(() => {
        m(E);
    }, [E, m]),
    null == O)
        ? null
        : ((t =
              0 === Object.keys(C).length
                  ? K.intl.string(K.t["5Wxrcd"])
                  : a === eB.rbe.GUILD_CATEGORY
                    ? K.intl.string(K.t["ISN+NM"])
                    : K.intl.string(K.t["fUYU+j"])),
          (0, i.jsx)(ed.A.Provider, {
              listRef: N,
              query: I,
              setQuery: A,
              pendingAdditions: E,
              setPendingAdditions: b,
              roles: f,
              members: _,
              getRichTag: G,
              children: (0, i.jsx)(g.a, {
                  transitionState: n,
                  onClose: s,
                  title: S ? K.intl.string(K.t["S/6zHM"]) : K.intl.string(K.t.dMJ3Y6),
                  subtitle: { text: d, leadingIcon: r },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          S
                              ? (0, i.jsx)(v.E, {
                                    color: "text-default",
                                    className: ez.h_,
                                    variant: "text-sm/normal",
                                    children: K.intl.string(K.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(ed.A.SearchBox, { placeholderText: K.intl.string(K.t.iezLLn) }),
                          (0, i.jsx)(v.E, {
                              className: ez.pK,
                              variant: "text-xs/normal",
                              children: K.intl.string(K.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: ed.A.SECTION_HEIGHT,
                      renderSection: ed.A.renderSection,
                      rowHeight: ed.A.ROW_HEIGHT,
                      renderRow: ed.A.renderRow,
                      sections: L,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: K.intl.string(K.t["13/7kX"]), onClick: c },
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
                    pickerIntention: eX.EmojiIntention.NO_CUSTOM_EMOJI,
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
            h = eQ(s);
        return (
            !d &&
            n !== M.ip.EXITING &&
            "" !== o &&
            "" !== o.trim() &&
            (!l || !!(0, eo.n0)(h, e, t)) &&
            (h !== eB.rbe.GUILD_STORE || null != a) &&
            (s !== eK || null != i) &&
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
            b = eQ(m),
            N = m === eK ? eF.lx.IS_GAME_INVITES_CHANNEL : null,
            O = (function (e) {
                if (e === eK) return [{ name: eA.Dg }];
            })(m),
            S = this.getGuildId();
        if (null != S) {
            if (null != l) ((t = h().values(l.permissionOverwrites)), (n = l.bitrate), (i = l.userLimit));
            else if (b === eB.rbe.GUILD_ANNOUNCEMENT) t = (0, eD.IP)(S);
            else {
                if (E) {
                    t = (0, eD.CG)(S, b, [], !0);
                    let e = (0, eo.D4)(p, b);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && a.id === u.id;
                    t.some((e) => r.has(e.id)) || o || n || t.push((0, eD.n3)(a.id, b));
                }
                b === eB.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(p).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === eY.T6.ROLE
                                ? t.push((0, e_.j)(n.id, en.r2.ROLE))
                                : n.rowType === eY.T6.MEMBER && t.push((0, e_.j)(n.id, en.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await V.A.createChannel({
                    guildId: S,
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
                    availableTags: O,
                    gameId: c?.id,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let l = e.body;
                ((0, eG.ig)(b) && (0, eO.uh)(l.guild_id, l.id), this.setState({ submitting: !1 }), d());
            } catch (e) {
                null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body, submitting: !1 })
                    : this.setState({ errors: { message: K.intl.string(K.t.fEptJP) }, submitting: !1 });
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
                return O.ImageIcon;
            case eB.rbe.GUILD_VOICE:
                return e ? C.t : I.H;
            case eB.rbe.GUILD_STORE:
                return f.TagIcon;
            case eB.rbe.GUILD_ANNOUNCEMENT:
                return S.k;
            case eB.rbe.GUILD_STAGE_VOICE:
                return _.q;
            case eK:
                return b.t;
            case eB.rbe.GUILD_APP:
                return e ? G.Z : L.k;
            default:
                let n = eQ(t);
                return (0, eG.ke)(n) ? m.N : eW.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: l } = this.props;
        return null != e
            ? K.intl.format(K.t.s2ZzZZ, { name: (0, eP.m1)(e, ex.default, eM.A, !0) })
            : t === eB.rbe.GUILD_FORUM
              ? K.intl.format(K.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            x.Anchor,
                            {
                                onClick: () =>
                                    (0, D.openModalLazy)(async () => {
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
        let a = s === eB.rbe.GUILD_CATEGORY,
            r = a ? K.intl.string(K.t.OCAkGP) : K.intl.string(K.t.PVbHDl),
            o = this.getIconComponent();
        return (0, i.jsx)(R.k, {
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
                        return K.intl.string(K.t.eTVbtx);
                    case eB.rbe.GUILD_FORUM:
                        return K.intl.string(K.t["5z1Xat"]);
                    default:
                        return K.intl.string(K.t["bw/b8E"]);
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
        return (0, i.jsx)(y.z, {
            label: K.intl.string(K.t["7ZcXG2"]),
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
                            name: K.intl.string(K.t.pnuRXC),
                            value: eB.rbe.GUILD_TEXT,
                            desc: K.intl.string(K.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? C.t : I.H,
                            name: K.intl.string(K.t.Sx55Oh),
                            value: eB.rbe.GUILD_VOICE,
                            desc: K.intl.string(K.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? A.Q : E.b,
                            name: K.intl.string(K.t.eAVID5),
                            value: eB.rbe.GUILD_FORUM,
                            desc: K.intl.string(K.t.iZ5pgg),
                        },
                    ];
                return (
                    a &&
                        o.push({
                            leadingIcon: b.t,
                            name: K.intl.string(eZ.default["h/GwWL"]),
                            value: eK,
                            desc: K.intl.string(eZ.default.DxwBMf),
                        }),
                    s &&
                        o.push({
                            leadingIcon: t ? N.c : O.ImageIcon,
                            name: K.intl.string(K.t["6x6fVg"]),
                            value: eB.rbe.GUILD_MEDIA,
                            desc: K.intl.string(K.t.JyCrwS),
                        }),
                    i &&
                        o.push({
                            leadingIcon: S.k,
                            name: K.intl.string(K.t.qr9dEP),
                            value: eB.rbe.GUILD_ANNOUNCEMENT,
                            desc: K.intl.string(K.t.gBkfzu),
                        }),
                    n &&
                        o.push({
                            leadingIcon: f.TagIcon,
                            name: K.intl.string(K.t.SxjkXf),
                            value: eB.rbe.GUILD_STORE,
                            desc: K.intl.string(K.t.nmCPMC),
                        }),
                    l &&
                        o.push({
                            leadingIcon: _.q,
                            name: K.intl.string(K.t.pNWst0),
                            value: eB.rbe.GUILD_STAGE_VOICE,
                            desc: K.intl.string(K.t.VPAwgo),
                        }),
                    r &&
                        o.push({
                            leadingIcon: t ? G.Z : L.k,
                            name: K.intl.string(K.t["A+8d6M"]),
                            value: eB.rbe.GUILD_APP,
                            desc: K.intl.string(K.t.LVQQ3Z),
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
                    label: K.intl.string(K.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: K.intl.string(K.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, i.jsx)(
                          et,
                          {
                              label: K.intl.string(K.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: ez.dE,
                          },
                          t,
                      )
                    : null,
                null != t && a
                    ? (0, i.jsx)(j.d, {
                          label: K.intl.string(K.t["3e9mH5"]),
                          description: K.intl.format(K.t.UVXL1R, {
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
                                  label: s ? K.intl.string(K.t.o7DqF3) : void 0,
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
                label: K.intl.string(eZ.default["2wS18o"]),
                options: a,
                placeholder: K.intl.string(eZ.default.Mbd4OZ),
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
        let l = t === eB.rbe.GUILD_CATEGORY ? K.intl.string(K.t.lEPAZ5) : K.intl.string(K.t.aUI70g),
            s = t === eB.rbe.GUILD_CATEGORY ? K.intl.string(K.t.RQUk61) : K.intl.string(K.t.YguuKq);
        return (0, i.jsx)(j.d, {
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
            r = eQ(n),
            { canConnect: o, canViewChannels: d } = this.props;
        if (Object.values(s).length > 0) {
            if (null != s.message && "" !== s.message) t = s.message;
            else if (e || null == s.name) {
                let e = Object.values(s)[0];
                e.length > 0 && (t = e);
            }
        } else l && !(0, eo.n0)(r, d, o) && (t = (0, eo.ld)(r));
        if (null != t)
            return (0, i.jsx)("div", {
                className: a()(ez.$5, { [ez.SE]: e }),
                children: (0, i.jsx)(B.p, { messageType: B.Y.ERROR, children: t }),
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
                    ? K.intl.string(K.t.dEaPc4)
                    : s === eB.rbe.GUILD_CATEGORY
                      ? K.intl.string(K.t["ISN+NM"])
                      : K.intl.string(K.t["fUYU+j"]);
        if (null != d) {
            let t = eL.A.getChannel(d);
            e = K.intl.format(K.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = s === eB.rbe.GUILD_CATEGORY ? K.intl.string(K.t["ISN+NM"]) : K.intl.string(K.t["fUYU+j"]);
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
                    { variant: "secondary", text: K.intl.string(K.t["ETE/oC"]), onClick: h },
                    c
                        ? {
                              variant: "primary",
                              text: K.intl.string(K.t.PDTjLN),
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
                        n === eK ? this.renderGameInvitesChannelOptions() : null,
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
let e1 = l.forwardRef(function (e, t) {
    let { channelType: n, guildId: s, cloneChannelId: a } = e,
        r = (0, u.cf)([ev.A, ex.default, eU.A, eL.A, eT.Ay], () => {
            let e = ev.A.getGuild(s),
                t = ex.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let i = null != e && null != e.ownerId ? ex.default.getUser(e.ownerId) : null,
                l = eU.A.can(eB.xBc.ADMINISTRATOR, e),
                r = eL.A.getChannel(a);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(eB.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(eB.GuildFeatures.NEWS),
                user: t,
                owner: i,
                memberRoles: eT.Ay.getMember(s, t.id)?.roles ?? [],
                canViewChannels: eU.A.can(eB.xBc.VIEW_CHANNEL, e),
                canConnect: eU.A.can(eB.xBc.CONNECT, e),
                isAdmin: l,
                cloneChannel: r,
                channelType: r?.type ?? n,
                canManageRoles: eU.A.can(eB.xBc.MANAGE_ROLES, e),
                canManageChannels: eU.A.can(eB.xBc.MANAGE_CHANNELS, e),
            };
        }),
        d = (0, u.yK)([er.A], () =>
            er.A.getGuildApplicationIds(s)
                .map((e) => er.A.getApplication(e))
                .filter(eR.Vq),
        ),
        h = new Set(r.memberRoles),
        { canManageRoles: c, canManageChannels: g } = r,
        p = (0, ef.R)(s) && c && g,
        m = (0, eN.V)(r?.guild),
        C = eI.useConfig({ guildId: s, location: "CreateChannel" }).enabled,
        I = es.useConfig({ guildId: s, location: "CreateChannel web" }).enabled,
        [A, E] = l.useState(""),
        [b, N] = l.useState(null),
        { results: O, isLoading: S, onSelect: f } = (0, eb.J$)(A, { surface: eE.K.CREATE_CHANNEL }),
        _ = l.useCallback(
            (e) => {
                (null != e && f(e.id), N(e));
            },
            [f],
        );
    return (0, i.jsx)(e0, {
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
        games: O,
        isGamesQueryLoading: S,
        onGameQueryChange: E,
        selectedGame: b,
        onSelectedGameChange: _,
    });
});
