n.d(t, { default: () => eF, p: () => eH }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    h = n(735438),
    d = n.n(h),
    u = n(189213),
    c = n(773812),
    p = n(17928),
    g = n(661531),
    m = n(770880),
    C = n(276293),
    E = n(146151),
    I = n(983851),
    A = n(597050),
    b = n(56059),
    N = n(24825),
    O = n(532590),
    _ = n(191023),
    S = n(778492),
    f = n(278416),
    T = n(451394),
    G = n(777666),
    v = n(834730),
    U = n(922016),
    L = n(231723),
    x = n(349288),
    M = n(192308),
    R = n(292666),
    D = n(691885),
    y = n(243721),
    j = n(530557),
    P = n(194261),
    w = n(512950),
    H = n(755584),
    k = n(66834),
    B = n(712963),
    V = n(228366);
let F = {};
class Y extends p.Ay.Store {
    static displayName = "ApplicationBranchStore";
    getBranches(e) {
        return F[e] ?? [];
    }
}
let X = new Y(V.h, {
    OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
        let { applicationId: t, branches: n } = e;
        F[t] = n;
    },
    LOGOUT: function () {
        F = {};
    },
});
var W = n(375708);
class Z extends l.Component {
    static defaultProps = { includeMaster: !1 };
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        (0, B.w)(e), n?.(t.length > 0);
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
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: l, hide: s, label: r } = this.props;
        if (0 === e.length || s) return null;
        let a = l ? e : e.filter((e) => e.id !== n);
        return (0, i.jsx)(D.l, {
            label: r,
            options: a.map((e) => ({ id: e.id, label: e.getName(n), value: e.id })),
            placeholder: W.intl.string(W.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
}
let K = p.Ay.connectStores([X], (e) => {
    let { applicationId: t } = e;
    return { branches: X.getBranches(t) };
})(Z);
var q = n(830382),
    z = n(67480);
class J extends l.Component {
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
        return (0, i.jsx)(D.l, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map((e) => ({ id: e.id, label: e.name, value: e.id })) : [],
            placeholder: l ? W.intl.string(W.t.hKcgP5) : W.intl.string(W.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: l,
        });
    }
}
let Q = p.Ay.connectStores([z.A], (e) => {
    let { applicationId: t } = e;
    return { skus: z.A.getForApplication(t) };
})(J);
var $ = n(155718),
    ee = n(95561),
    et = n(587895),
    en = n(495273),
    ei = n(517622),
    el = n(86944),
    es = n(915089),
    er = n(375499),
    ea = n(267889),
    eo = n(770335),
    eh = n(611371);
let ed = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_game_invites_channel",
    label: "Game Invites Channel",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable game invites channel", config: { enabled: !0 } }],
});
var eu = n(219444),
    ec = n(976860),
    ep = n(233993),
    eg = n(284738),
    em = n(841811),
    eC = n(95701),
    eE = n(734057),
    eI = n(696451),
    eA = n(71393),
    eb = n(576705),
    eN = n(994500),
    eO = n(287809),
    e_ = n(871237),
    eS = n(403362),
    ef = n(47167),
    eT = n(280513),
    eG = n(837011),
    ev = n(90084),
    eU = n(975571),
    eL = n(652215);
function ex(e) {
    let { guildId: t, channelType: n, className: s } = e,
        { guildProfile: r, fetchGuildProfile: a, fetchStatus: o } = (0, ev.u)(t),
        h = o !== eG.X.FETCHED,
        d = null != r && eT.i.VISIBLE.has(r.visibility);
    l.useEffect(() => {
        a();
    }, [t, a]);
    let u = [];
    if (
        n === eL.rbe.GUILD_ANNOUNCEMENT &&
        (u.push(W.intl.format(W.t.tI7KNX, { documentationLink: eU.A.getArticleURL(eL.MVz.ANNOUNCEMENT_CHANNELS) })),
        !h && !d)
    ) {
        let e = W.intl.string(W.t["2Ab4Id"]);
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
var eM = n(746080),
    eR = n(719366),
    eD = n(307731),
    ey = n(818348),
    ej = n(587679);
let eP = "GAME_INVITES_CHANNEL_OPTION";
function ew(e) {
    return e === eP ? eL.rbe.GUILD_FORUM : e;
}
function eH(e) {
    let { isNew: t, isBeta: n } = e,
        l = null;
    return (
        !0 === t
            ? (l = (0, i.jsx)(G.Lp, {
                  text: W.intl.string(W.t.psHMa6),
                  className: ej.Ad,
                  color: g.A.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css,
              }))
            : !0 === n && (l = (0, i.jsx)(eh.A, { className: ej.Ad })),
        l
    );
}
function ek(e) {
    let t,
        {
            transitionState: n,
            onClose: s,
            channelType: r,
            iconComponent: a,
            error: o,
            name: h,
            guildId: d,
            onBack: c,
            canSubmit: g,
            onMembersChange: m,
            pendingPermissionOverwrites: C,
        } = e,
        [E, I] = l.useState(""),
        [A, b] = l.useState({}),
        N = l.useRef(null),
        O = (0, p.bG)([eA.A], () => eA.A.getGuild(d)),
        _ = r === eL.rbe.GUILD_STAGE_VOICE,
        { roles: S, members: f, getRichTag: T } = (0, el.K)(O, null, _ ? ep.QY : (0, eC.TA)(r), E, _),
        G = ei.A.useSections({ roles: S, members: f });
    return (l.useEffect(() => {
        m(A);
    }, [A, m]),
    null == O)
        ? null
        : ((t =
              0 === Object.keys(C).length
                  ? W.intl.string(W.t["5Wxrcd"])
                  : r === eL.rbe.GUILD_CATEGORY
                    ? W.intl.string(W.t["ISN+NM"])
                    : W.intl.string(W.t["fUYU+j"])),
          (0, i.jsx)(ei.A.Provider, {
              listRef: N,
              query: E,
              setQuery: I,
              pendingAdditions: A,
              setPendingAdditions: b,
              roles: S,
              members: f,
              getRichTag: T,
              children: (0, i.jsx)(u.Modal, {
                  transitionState: n,
                  onClose: s,
                  title: _ ? W.intl.string(W.t["S/6zHM"]) : W.intl.string(W.t.dMJ3Y6),
                  subtitle: { text: h, leadingIcon: a },
                  input: (0, i.jsxs)(i.Fragment, {
                      children: [
                          _
                              ? (0, i.jsx)(v.E, {
                                    color: "text-default",
                                    className: ej.h_,
                                    variant: "text-sm/normal",
                                    children: W.intl.string(W.t.f7VbhF),
                                })
                              : void 0,
                          (0, i.jsx)(ei.A.SearchBox, { placeholderText: W.intl.string(W.t.iezLLn) }),
                          (0, i.jsx)(v.E, {
                              className: ej.pK,
                              variant: "text-xs/normal",
                              children: W.intl.string(W.t.rwFx85),
                          }),
                      ],
                  }),
                  preview: o,
                  listProps: {
                      sectionHeight: ei.A.SECTION_HEIGHT,
                      renderSection: ei.A.renderSection,
                      rowHeight: ei.A.ROW_HEIGHT,
                      renderRow: ei.A.renderRow,
                      sections: G,
                      innerAriaOrientation: "vertical",
                      innerRole: "listbox",
                  },
                  actions: [
                      { variant: "secondary", text: W.intl.string(W.t["13/7kX"]), onClick: c },
                      { variant: "primary", text: t, type: "submit", disabled: !g },
                  ],
              }),
          }));
}
function eB(e) {
    let { onEmojiPicked: t, guildId: n } = e,
        s = l.useRef(null),
        r = l.useMemo(
            () => ({
                popoutLocation: {
                    page: eL.liQ.CREATE_CHANNEL_MODAL,
                    section: eL.JJy.CHANNEL_NAME,
                    object: eL.ZSU.EMOJI_PICKER_BUTTON,
                },
            }),
            [],
        ),
        a = l.useCallback(
            (e) => {
                let { closePopout: l } = e;
                return (0, i.jsx)(ea.A, {
                    channel: null,
                    guildId: n,
                    pickerIntention: eD.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: l,
                    onNavigateAway: l,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n && n.type === eo.i.UNICODE && t(n.surrogates), i && l();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: r,
                });
            },
            [r, n, t],
        );
    return (0, i.jsx)(U.Y, {
        targetElementRef: s,
        renderPopout: a,
        animation: U.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(er.A, {
                ...e,
                ref: s,
                active: n,
                className: ej.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class eV extends l.PureComponent {
    headerId = (0, es.Ld)();
    _input;
    constructor(e) {
        super(e);
        const { channelType: t, cloneChannel: n, prefillChannelName: i } = e;
        (this.state = {
            channelTypeOption: t ?? eL.rbe.GUILD_TEXT,
            name: null != n ? (0, ef.m1)(n, eO.default, eN.A) : (i ?? ""),
            pendingPermissionOverwrites: {},
            isPrivate: !1,
            prevGuildId: e.guildId,
            applicationId: null,
            skuId: null,
            branchId: null,
            showBranches: !1,
            hasBranches: !1,
            slide: "CHANNEL_INFO",
            errors: {},
            submitting: !1,
        }),
            (this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this));
    }
    componentDidMount() {
        let { _input: e } = this;
        null != e && e.select();
        let { guildId: t, applications: n, canCreateStoreChannel: i } = this.props;
        i && null == n && k.A.fetchApplications(t),
            ee.Ay.trackWithMetadata(eL.HAw.OPEN_MODAL, { type: "Create Channel" });
    }
    componentDidUpdate(e, t) {
        !t.isPrivate &&
            this.state.isPrivate &&
            this.state.channelTypeOption === eL.rbe.GUILD_ANNOUNCEMENT &&
            this.setState({ channelTypeOption: eL.rbe.GUILD_TEXT }),
            !t.isPrivate &&
                this.state.isPrivate &&
                ee.Ay.trackWithMetadata(eL.HAw.OPEN_MODAL, { type: "Create Private Channel" });
    }
    getGuildId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.guildId;
    }
    setInputRef = (e) => {
        this._input = e;
    };
    handleNameChange = (e) => {
        let t = ew(this.state.channelTypeOption);
        eC.ZE.has(t) && (e = (0, e_.an)(e));
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
            this._input?.focus(), this._input?.setSelectionRange(n, n);
        });
    };
    handleTypeChange = (e) => {
        let t = ew(e),
            { name: n } = this.state;
        eC.ZE.has(t) && (n = (0, e_.an)(n)),
            t === eL.rbe.GUILD_STAGE_VOICE && this.setState({ isPrivate: !1 }),
            this.setState({ channelTypeOption: e, name: n });
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
        let { canViewChannels: e, canConnect: t, transitionState: n } = this.props,
            { isPrivate: i, channelTypeOption: l, skuId: s, name: r, submitting: a } = this.state,
            o = ew(l);
        return (
            !a &&
            n !== L.ip.EXITING &&
            "" !== r &&
            "" !== r.trim() &&
            (!i || !!(0, en.n0)(o, e, t)) &&
            (o !== eL.rbe.GUILD_STORE || null != s)
        );
    }
    handleSubmit = async (e) => {
        let t, n, i;
        e.preventDefault();
        let {
                cloneChannel: l,
                categoryId: s,
                user: r,
                memberRoleIds: a,
                isAdmin: o,
                onClose: h,
                owner: u,
            } = this.props,
            {
                name: c,
                pendingPermissionOverwrites: p,
                channelTypeOption: g,
                skuId: m,
                branchId: C,
                isPrivate: E,
            } = this.state,
            I = ew(g),
            A = g === eP ? eM.lx.IS_GAME_INVITES_CHANNEL : null,
            b = this.getGuildId();
        if (null != b) {
            if (null != l) (t = d().values(l.permissionOverwrites)), (n = l.bitrate), (i = l.userLimit);
            else if (I === eL.rbe.GUILD_ANNOUNCEMENT) t = (0, e_.IP)(b);
            else {
                if (E) {
                    t = (0, e_.CG)(b, I, [], !0);
                    let e = (0, en.D4)(p, I);
                    e.length > 0 && (t = t.concat(e));
                    let n = null != u && r.id === u.id;
                    t.some((e) => a.has(e.id)) || o || n || t.push((0, e_.n3)(r.id, I));
                }
                I === eL.rbe.GUILD_STAGE_VOICE &&
                    ((t = []),
                    Object.values(p).forEach((e) => {
                        let { row: n } = e;
                        null != n.id &&
                            "" !== n.id &&
                            (n.rowType === eR.T6.ROLE
                                ? t.push((0, em.j)(n.id, $.r2.ROLE))
                                : n.rowType === eR.T6.MEMBER && t.push((0, em.j)(n.id, $.r2.MEMBER)));
                    }));
            }
            this.setState({ errors: {}, submitting: !0 });
            try {
                let e = await H.A.createChannel({
                    guildId: b,
                    type: I,
                    name: c,
                    permissionOverwrites: t,
                    bitrate: n,
                    userLimit: i,
                    parentId: I !== eL.rbe.GUILD_CATEGORY ? s : null,
                    skuId: m,
                    branchId: C,
                    flags: A,
                });
                if (null == e || 201 !== e.status) return void this.setState({ submitting: !1 });
                let l = e.body;
                eC.ZE.has(I) && (0, ec.uh)(l.guild_id, l.id), this.setState({ submitting: !1 }), h();
            } catch (e) {
                null != e.body && "object" == typeof e.body
                    ? this.setState({ errors: e.body, submitting: !1 })
                    : this.setState({ errors: { message: W.intl.string(W.t.fEptJP) }, submitting: !1 });
            }
        }
    };
    getIconComponent() {
        let { isPrivate: e, channelTypeOption: t } = this.state;
        switch (t) {
            case eL.rbe.GUILD_TEXT:
                return e ? m.I : C.N;
            case eL.rbe.GUILD_FORUM:
                return b.b;
            case eL.rbe.GUILD_MEDIA:
                return _.x;
            case eL.rbe.GUILD_VOICE:
                return e ? E.t : I.H;
            case eL.rbe.GUILD_STORE:
                return f.g;
            case eL.rbe.GUILD_ANNOUNCEMENT:
                return S.k;
            case eL.rbe.GUILD_STAGE_VOICE:
                return T.q;
            case eP:
                return N.x;
            default:
                let n = ew(t);
                return (0, eC.ke)(n) ? C.N : ey.FX;
        }
    }
    getHelperText() {
        let { cloneChannel: e, channelType: t, guildId: l } = this.props;
        return null != e
            ? W.intl.format(W.t.s2ZzZZ, { name: (0, ef.m1)(e, eO.default, eN.A, !0) })
            : t === eL.rbe.GUILD_FORUM
              ? W.intl.format(W.t.tbVWyR, {
                    forumUpsellHook: (e, t) =>
                        (0, i.jsx)(
                            x.Anchor,
                            {
                                onClick: () =>
                                    (0, M.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("43051"),
                                            n.e("61268"),
                                            n.e("90052"),
                                        ]).then(n.bind(n, 653682));
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
            s = ew(l);
        n?.name != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
        let r = s === eL.rbe.GUILD_CATEGORY,
            a = r ? W.intl.string(W.t.OCAkGP) : W.intl.string(W.t.PVbHDl),
            o = this.getIconComponent();
        return (0, i.jsx)(R.k, {
            label: a,
            helperText: this.getHelperText(),
            error: e,
            value: this.state.name,
            onChange: this.handleNameChange,
            inputRef: this.setInputRef,
            maxLength: 100,
            placeholder: (function (e) {
                switch (e) {
                    case eL.rbe.GUILD_CATEGORY:
                        return W.intl.string(W.t.eTVbtx);
                    case eL.rbe.GUILD_FORUM:
                        return W.intl.string(W.t["5z1Xat"]);
                    default:
                        return W.intl.string(W.t["bw/b8E"]);
                }
            })(l),
            leading: r ? void 0 : o,
            trailing: {
                type: "emoji",
                button: (0, i.jsx)(eB, {
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
                canCreateMediaChannel: r,
                canCreateGameInvitesChannel: a,
            } = this.props,
            { channelTypeOption: o, isPrivate: h } = this.state;
        if (null != e || o === eL.rbe.GUILD_CATEGORY) return;
        let d = null != t && t.length > 0;
        return (0, i.jsx)(c.z, {
            label: W.intl.string(W.t["7ZcXG2"]),
            options: (function (e) {
                let {
                        isPrivate: t,
                        showStoreChannelOption: n,
                        showAnnouncementChannelOption: i,
                        canCreateStageChannel: l,
                        canCreateMediaChannel: s,
                        canCreateGameInvitesChannel: r,
                    } = e,
                    a = [
                        {
                            leadingIcon: t ? m.I : C.N,
                            name: W.intl.string(W.t.pnuRXC),
                            value: eL.rbe.GUILD_TEXT,
                            desc: W.intl.string(W.t["Hf5Lb+"]),
                        },
                        {
                            leadingIcon: t ? E.t : I.H,
                            name: W.intl.string(W.t.Sx55Oh),
                            value: eL.rbe.GUILD_VOICE,
                            desc: W.intl.string(W.t.pqfkoF),
                        },
                        {
                            leadingIcon: t ? A.Q : b.b,
                            name: W.intl.string(W.t.eAVID5),
                            value: eL.rbe.GUILD_FORUM,
                            desc: W.intl.string(W.t.iZ5pgg),
                        },
                    ];
                return (
                    r &&
                        a.push({
                            leadingIcon: N.x,
                            name: W.intl.string(W.t["h/GwWL"]),
                            value: eP,
                            desc: W.intl.string(W.t.DxwBMf),
                        }),
                    s &&
                        a.push({
                            leadingIcon: t ? O.c : _.x,
                            name: W.intl.string(W.t["6x6fVg"]),
                            value: eL.rbe.GUILD_MEDIA,
                            desc: W.intl.string(W.t.JyCrwS),
                        }),
                    i &&
                        a.push({
                            leadingIcon: S.k,
                            name: W.intl.string(W.t.qr9dEP),
                            value: eL.rbe.GUILD_ANNOUNCEMENT,
                            desc: W.intl.string(W.t.gBkfzu),
                        }),
                    n &&
                        a.push({
                            leadingIcon: f.g,
                            name: W.intl.string(W.t.SxjkXf),
                            value: eL.rbe.GUILD_STORE,
                            desc: W.intl.string(W.t.nmCPMC),
                        }),
                    l &&
                        a.push({
                            leadingIcon: T.q,
                            name: W.intl.string(W.t.pNWst0),
                            value: eL.rbe.GUILD_STAGE_VOICE,
                            desc: W.intl.string(W.t.VPAwgo),
                        }),
                    a
                );
            })({
                isPrivate: h,
                showStoreChannelOption: n && d,
                showAnnouncementChannelOption: l,
                canCreateStageChannel: s,
                canCreateMediaChannel: r,
                canCreateGameInvitesChannel: a,
            }),
            value: o,
            onChange: this.handleTypeChange,
        });
    }
    renderStoreOptions() {
        let { applications: e } = this.props,
            { applicationId: t, skuId: n, branchId: l, showBranches: s, hasBranches: r } = this.state;
        if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(D.l, {
                    label: W.intl.string(W.t.vPIW2L),
                    options: e.map((e) => ({ id: e.id, label: e.name, value: e.id })),
                    placeholder: W.intl.string(W.t["3XfCPX"]),
                    value: t,
                    onSelectionChange: this.handleApplicationChange,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                null != t
                    ? (0, i.jsx)(
                          Q,
                          {
                              label: W.intl.string(W.t.XNIWFj),
                              applicationId: t,
                              onChange: this.handleSKUChange,
                              selectedSkuId: n,
                              className: ej.dE,
                          },
                          t,
                      )
                    : null,
                null != t && r
                    ? (0, i.jsx)(y.d, {
                          label: W.intl.string(W.t["3e9mH5"]),
                          description: W.intl.format(W.t.UVXL1R, {
                              devPortalUrl: eL.X7G.API_DOCS_GAME_AND_SERVER_MANAGEMENT,
                          }),
                          icon: j.R,
                          onChange: this.handleShowBranchesToggle,
                          checked: s,
                      })
                    : null,
                null != t
                    ? (0, i.jsx)("div", {
                          className: ej.dE,
                          children: (0, i.jsx)(
                              K,
                              {
                                  label: s ? W.intl.string(W.t.o7DqF3) : void 0,
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
    renderPrivacyOptions() {
        let { cloneChannel: e } = this.props,
            { channelTypeOption: t, isPrivate: n } = this.state;
        if (null != e || t === eL.rbe.GUILD_ANNOUNCEMENT) return null;
        let l = t === eL.rbe.GUILD_CATEGORY ? W.intl.string(W.t.lEPAZ5) : W.intl.string(W.t.aUI70g),
            s = t === eL.rbe.GUILD_CATEGORY ? W.intl.string(W.t.RQUk61) : W.intl.string(W.t.YguuKq);
        return (0, i.jsx)(y.d, { label: l, description: s, icon: P.X, onChange: this.handlePrivacyChange, checked: n });
    }
    renderError(e) {
        let t,
            { channelTypeOption: n, isPrivate: l, errors: s } = this.state,
            a = ew(n),
            { canConnect: o, canViewChannels: h } = this.props;
        if (Object.values(s).length > 0) {
            if (null != s.message && "" !== s.message) t = s.message;
            else if (e || null == s.name) {
                let e = Object.values(s)[0];
                e.length > 0 && (t = e);
            }
        } else l && !(0, en.n0)(a, h, o) && (t = (0, en.ld)(a));
        if (null != t)
            return (0, i.jsx)("div", {
                className: r()(ej.$5, { [ej.SE]: e }),
                children: (0, i.jsx)(w.p, { messageType: w.Y.ERROR, children: t }),
            });
    }
    handlePermissionOverwriteChange(e) {
        this.setState({ pendingPermissionOverwrites: e });
    }
    renderCreateChannelModal() {
        let e,
            t,
            { channelTypeOption: n, isPrivate: l } = this.state,
            s = ew(n),
            { guildId: r, transitionState: a, cloneChannel: o, categoryId: h, onClose: d, channelType: c } = this.props,
            p =
                null != o
                    ? W.intl.string(W.t.dEaPc4)
                    : s === eL.rbe.GUILD_CATEGORY
                      ? W.intl.string(W.t["ISN+NM"])
                      : W.intl.string(W.t["fUYU+j"]);
        if (null != h) {
            let t = eE.A.getChannel(h);
            e = W.intl.format(W.t.L1zJgb, { categoryName: t?.name ?? "" });
        }
        t = c === eL.rbe.GUILD_CATEGORY ? W.intl.string(W.t["ISN+NM"]) : W.intl.string(W.t["fUYU+j"]);
        let g = l || s === eL.rbe.GUILD_STAGE_VOICE;
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(u.Modal, {
                transitionState: a,
                onClose: d,
                title: p,
                subtitle: e,
                preview: this.renderError(),
                actions: [
                    { variant: "secondary", text: W.intl.string(W.t["ETE/oC"]), onClick: d },
                    g
                        ? {
                              variant: "primary",
                              text: W.intl.string(W.t.PDTjLN),
                              type: "button",
                              disabled: !this.canSubmit(),
                              onClick: () => {
                                  this.setState({ slide: "ADD_MEMBERS", errors: {} });
                              },
                          }
                        : { variant: "primary", type: "submit", disabled: !this.canSubmit(), text: t },
                ],
                children: (0, i.jsxs)("div", {
                    className: ej.hM,
                    children: [
                        this.renderType(),
                        this.renderName(),
                        c === eL.rbe.GUILD_STORE ? this.renderStoreOptions() : null,
                        (0, i.jsx)(ex, { guildId: r, channelType: s, className: ej.wI }),
                        s === eL.rbe.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions(),
                    ],
                }),
            }),
        });
    }
    renderAddMemberSlideContent() {
        let { name: e, channelTypeOption: t, pendingPermissionOverwrites: n } = this.state,
            { guildId: l, onClose: s, transitionState: r } = this.props,
            a = () => {
                this.setState({ slide: "CHANNEL_INFO" });
            },
            o = this.canSubmit();
        return (0, i.jsx)("form", {
            onSubmit: this.handleSubmit,
            children: (0, i.jsx)(ek, {
                onClose: s,
                transitionState: r,
                channelType: ew(t),
                iconComponent: this.getIconComponent(),
                error: this.renderError(!0),
                name: e,
                guildId: l,
                onBack: a,
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
let eF = l.forwardRef(function (e, t) {
    let { channelType: n, guildId: l, cloneChannelId: s } = e,
        r = (0, p.cf)([eA.A, eO.default, eb.A, eE.A, eI.Ay], () => {
            let e = eA.A.getGuild(l),
                t = eO.default.getCurrentUser();
            o()(null != t, "CreateChannel: user cannot be undefined");
            let i = null != e && null != e.ownerId ? eO.default.getUser(e.ownerId) : null,
                r = eb.A.can(eL.xBc.ADMINISTRATOR, e),
                a = eE.A.getChannel(s);
            return {
                guild: e,
                canCreateStoreChannel: null != e && e.features.has(eL.GuildFeatures.COMMERCE),
                canCreateAnnouncementChannel: null != e && e.features.has(eL.GuildFeatures.NEWS),
                user: t,
                owner: i,
                memberRoles: eI.Ay.getMember(l, t.id)?.roles ?? [],
                canViewChannels: eb.A.can(eL.xBc.VIEW_CHANNEL, e),
                canConnect: eb.A.can(eL.xBc.CONNECT, e),
                isAdmin: r,
                cloneChannel: a,
                channelType: a?.type ?? n,
                canManageRoles: eb.A.can(eL.xBc.MANAGE_ROLES, e),
                canManageChannels: eb.A.can(eL.xBc.MANAGE_CHANNELS, e),
            };
        }),
        a = (0, p.yK)([et.A], () =>
            et.A.getGuildApplicationIds(l)
                .map((e) => et.A.getApplication(e))
                .filter(eS.Vq),
        ),
        h = new Set(r.memberRoles),
        { canManageRoles: d, canManageChannels: u } = r,
        c = (0, eg.R)(l) && d && u,
        g = (0, eu.V)(r?.guild),
        m = ed.useExperiment({ guildId: l, location: "CreateChannel" }, { autoTrackExposure: !0 }).enabled;
    return (0, i.jsx)(eV, {
        ...e,
        ...r,
        memberRoleIds: h,
        applications: a,
        canCreateStageChannel: c,
        canCreateMediaChannel: g,
        canCreateGameInvitesChannel: m,
        ref: t,
        width: 496,
    });
});
