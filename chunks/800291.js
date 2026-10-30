(n.r(e), n.d(e, { default: () => eJ }));
var i,
    l = n(477900),
    s = n(582128),
    r = n(806163),
    a = n(820284),
    o = n(549711),
    c = n(726249),
    d = n(210714),
    h = n(503698),
    u = n.n(h),
    p = n(689175),
    A = n(944791),
    m = n(712963),
    g = n(661439),
    x = n(970672),
    f = n(621466),
    y = n(17928),
    I = n(683438),
    N = n(192308),
    T = n(73153);
function C(t) {
    T.h.dispatch({ type: "LIBRARY_APPLICATION_FILTER_UPDATE", query: t });
}
function R(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    T.h.dispatch({ type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE", key: t, isKeyboardEvent: e });
}
var S = n(186111),
    P = n(742077),
    j = n(268387),
    _ = n(113673),
    v = n(652215),
    w = n(650583),
    L = n(105292),
    E = n(969465);
class b extends s.Component {
    searchBarRef = s.createRef();
    state = { focused: !1 };
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        (R(null), document.removeEventListener("keydown", this.handleKeyDown));
    }
    reset() {
        (R(null), C(""));
    }
    focusInput() {
        let { searchBarRef: t } = this;
        null != t && t.current?.focus();
    }
    updateActiveRow(t) {
        let { applicationViewItems: e, activeRowKey: n } = this.props,
            i = e.findIndex((t) => t.key === n),
            l = 0;
        i >= 0 && (l = (i + t) % e.length) < 0 && (l = e.length - 1);
        let s = e[l];
        R(null != s ? s.key : null, !0);
    }
    handleKeyDown = (t) => {
        let { activeRowKey: e, hasModalOpen: n, applicationViewItems: i } = this.props,
            { searchBarRef: l } = this;
        if (n || t.ctrlKey || t.altKey || t.metaKey || null == l) return;
        let s = (0, f.BF)(t)?.activeElement;
        if (!(s !== l.current && (0, f.Cw)(s)))
            switch (t.key) {
                case w.dh.ESCAPE:
                    t.target !== l.current ? this.reset() : null != l.current && l.current?.blur();
                    break;
                case w.dh.ENTER:
                    if (null != e) {
                        t.preventDefault();
                        let n = i.find((t) => t.key === e);
                        if (null == n) return;
                        let l = n.libraryApplication;
                        _.performDefaultLibraryApplicationAction(l, {
                            analyticsParams: {
                                source: v.ThZ.APPLICATION_LIBRARY,
                                location: {
                                    page: v.liQ.LIBRARY,
                                    section: v.JJy.LIBRARY_APPLICATION_LIST,
                                    object: v.ZSU.BUTTON_CTA,
                                },
                            },
                        });
                    }
                    break;
                case w.dh.ARROW_DOWN:
                case w.dh.ARROW_UP:
                    (t.preventDefault(), t.stopPropagation(), this.updateActiveRow(t.key === w.dh.ARROW_DOWN ? 1 : -1));
                    break;
                default:
                    null != l.current && t.target !== l.current && l.current?.focus();
            }
    };
    render() {
        let { filterQuery: t } = this.props,
            { focused: e } = this.state;
        return (0, l.jsx)("div", {
            className: u()({ [E.sw]: !0, [E.in]: e }),
            children: (0, l.jsx)(I.I, {
                ref: this.searchBarRef,
                onChange: C,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onClear: () => {
                    (this.reset(), this.focusInput());
                },
                query: t,
                placeholder: L.intl.string(L.t.aSxWSo),
            }),
        });
    }
}
function D() {
    let t = (0, y.bG)([S.A], () => S.A.hasLayers()),
        e = (0, N.useModalsStore)(N.hasAnyModalOpenSelector);
    return (0, l.jsx)(b, {
        activeRowKey: (0, y.bG)([j.A], () => j.A.activeRowKey),
        hasModalOpen: e || t,
        filterQuery: (0, y.bG)([P.A], () => P.A.applicationFilterQuery),
        applicationViewItems: (0, y.bG)([P.A], () => P.A.sortedFilteredLibraryApplicationViewItems),
    });
}
var M = n(657044),
    B = n(761508),
    O = n(742589),
    k = n(976860),
    U = n(174459),
    V = n(144914),
    G = n(58998);
let H = (0, V.S)() || !1,
    K = s.memo(function (t) {
        let { currentRoute: e, renderToolbar: n } = t,
            i = s.useContext(U.AnalyticsContext),
            r = H || e === v.BVt.APPLICATION_LIBRARY_SETTINGS;
        return (0, l.jsxs)(O.A, {
            className: G.$,
            toolbar: n?.(),
            children: [
                (0, l.jsx)(O.A.Icon, { icon: M._, "aria-hidden": !0 }),
                (0, l.jsx)(O.A.Title, { children: L.intl.string(L.t.cw57ar) }),
                (0, l.jsx)(O.A.Divider, {}),
                (0, l.jsxs)(B.V, {
                    type: "top-pill",
                    selectedItem: e,
                    onItemSelect: function (t) {
                        t !== e &&
                            (0, k.pX)(t, {
                                state: {
                                    analyticsSource: {
                                        ...i.location,
                                        section: v.JJy.TABS,
                                        object: v.ZSU.NAVIGATION_LINK,
                                    },
                                },
                            });
                    },
                    children: [
                        (0, l.jsx)(B.V.Item, { id: v.BVt.APPLICATION_LIBRARY, children: L.intl.string(L.t.p7ARTB) }),
                        r
                            ? (0, l.jsx)(B.V.Item, {
                                  id: v.BVt.APPLICATION_LIBRARY_SETTINGS,
                                  children: L.intl.string(L.t["3D5yo/"]),
                              })
                            : null,
                    ],
                }),
            ],
        });
    });
var F = n(451988),
    X = n(319060),
    z = n(866665),
    W = n(403581),
    Y = n(952270),
    J = n(1215),
    Q = n(442433),
    q = n(979604),
    $ = n(235986),
    Z = n(596719),
    tt = n(769015),
    te = n(529433),
    tn = n(674378),
    ti = n(240248),
    tl = n(565787),
    ts = n(95635),
    tr = n(32880),
    ta = n(465797),
    to = n(953727);
let tc = function (t) {
    let { id: e, startColor: n, stopColor: i, color: s, stop: r } = t;
    return (0, l.jsxs)("linearGradient", {
        id: e,
        children: [
            (0, l.jsx)("stop", { offset: "0", stopColor: n }),
            (0, l.jsx)("stop", { offset: r, stopColor: i }),
            (0, l.jsx)("stop", { offset: r, stopColor: s }),
            (0, l.jsx)("stop", { offset: "1", stopColor: s }),
        ],
    });
};
function td(t) {
    return `CloudDone-${t}`;
}
let th = (0, tl.k)(function (t) {
        let { width: e = 24, height: n = 24, color: i = "currentColor", foreground: s, ...r } = t;
        return (0, l.jsx)("svg", {
            ...(0, to.A)(r),
            width: e,
            height: n,
            viewBox: "0 0 24 24",
            children: (0, l.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    (0, l.jsx)("path", {
                        className: s,
                        fill: i,
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
                    }),
                    (0, l.jsx)("rect", { width: "24", height: "24" }),
                ],
            }),
        });
    }),
    tu = (0, tl.k)(function (t) {
        let { width: e = 24, height: n = 24, color: i = "currentColor", foreground: s, gradientConfig: r, ...a } = t,
            o = null;
        return (
            null != r && (o = (0, l.jsx)(tc, { ...r, color: i, id: td(r.id) })),
            (0, l.jsxs)("svg", {
                ...(0, to.A)(a),
                width: e,
                height: n,
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("defs", { children: o }),
                    (0, l.jsx)("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    (0, l.jsx)("path", {
                        fill: null != r ? `url(#${td(r.id)})` : i,
                        className: s,
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z",
                    }),
                ],
            })
        );
    }),
    tp = new Set([v.VX0.PUSHING, v.VX0.PULLING]),
    tA = Object.freeze({
        [v.VX0.DONE]: th,
        [v.VX0.PLANNING]: th,
        [v.VX0.PREPARING]: th,
        [v.VX0.PUSHING]: ts.UploadIcon,
        [v.VX0.PULLING]: tr.DownloadIcon,
        [v.VX0.CONFLICT]: th,
        [v.VX0.ERROR]: th,
    });
class tm extends s.PureComponent {
    _doneTimer = new F.Ep();
    componentDidMount() {
        this.getIsRecentlySynced() && this.setRecentlySyncedTimeout();
    }
    componentDidUpdate(t) {
        null != this.props.cloudSyncState &&
            this.props.cloudSyncState.type === v.VX0.DONE &&
            null != this.props.cloudSyncState.timestamp &&
            (t.cloudSyncState?.type !== v.VX0.DONE || null == t.cloudSyncState.timestamp) &&
            this.setRecentlySyncedTimeout();
    }
    componentWillUnmount() {
        this._doneTimer.stop();
    }
    setRecentlySyncedTimeout() {
        this._doneTimer.start(2e3, () => this.forceUpdate());
    }
    getIsRecentlySynced() {
        let { cloudSyncState: t } = this.props;
        if (null != t && t.type === v.VX0.DONE) {
            let e = t.timestamp;
            return null != e && Date.now() - e <= 2e3;
        }
        return !1;
    }
    getStop(t, e) {
        if (e) return 1;
        if (t.type === v.VX0.PUSHING || t.type === v.VX0.PULLING) {
            let { progress: e, total: n } = t;
            return e / n;
        }
        return 0;
    }
    getTooltip(t, e) {
        switch (t.type) {
            case v.VX0.DONE:
                if (e) return L.intl.string(L.t.atpo0W);
                return L.intl.string(L.t.ZCw6zh);
            case v.VX0.CONFLICT:
            case v.VX0.ERROR:
                return L.intl.string(L.t.ZCw6zh);
            case v.VX0.PLANNING:
                return L.intl.string(L.t.ERQ0VA);
            case v.VX0.PREPARING:
                return L.intl.string(L.t.n5feu3);
            case v.VX0.PUSHING:
                return L.intl.string(L.t.oCBh0J);
            case v.VX0.PULLING:
                return L.intl.string(L.t.RTLNqC);
            default:
                return null;
        }
    }
    render() {
        let { cloudSyncState: t, libraryApplication: e, className: n } = this.props,
            i = null == t ? { type: v.VX0.DONE } : t,
            s = this.getIsRecentlySynced();
        (tp.has(i.type) || s) && (e.id, this.getStop(i, s));
        let r = s ? tu : tA[i.type];
        return (0, l.jsx)(z.m, { text: this.getTooltip(i, s), children: (0, l.jsx)(r, { className: n }) });
    }
}
let tg = y.Ay.connectStores([ta.A], (t) => {
    let { libraryApplication: e } = t;
    return { cloudSyncState: ta.A.getState(e.id, e.branchId) };
})(tm);
var tx = n(498340);
let tf = (0, ti.xI)(X.A.GAME_LIST_ROW_MIN_HEIGHT),
    ty = (0, ti.xI)(X.A.GAME_LIST_LINKED_TO_GLOW_DURATION),
    tI = Object.freeze({ [v.DpB.PLATFORM]: "Platform", [v.DpB.LAST_PLAYED]: "Last Played", [v.DpB.NAME]: "Name" });
function tN(t) {
    let { flag: e, icon: n, item: i, tooltip: s } = t,
        r = i.libraryApplication.hasFlag(e);
    return (0, l.jsx)(z.m, { text: s, children: (0, l.jsx)(n, { className: u()(tx.up, { [tx.R]: !r }) }) });
}
let tT = [
    {
        key: v.DpB.NAME,
        renderHeader: () => L.intl.string(L.t.dBfWfc),
        sort: !0,
        cellClassName: tx.UQ,
        bodyCellClassName: tx.SJ,
        render: (t) =>
            (0, l.jsxs)($.A, {
                align: $.A.Align.CENTER,
                children: [
                    (0, l.jsx)(tt.A, { game: t.application, size: tt.M.SMALL, className: tx.Gt }),
                    (0, l.jsxs)("div", {
                        className: tx.Ot,
                        children: [
                            (0, l.jsx)("div", {
                                className: tx.TF,
                                children: t.libraryApplication.getBranchedName(t.application),
                            }),
                            t.libraryApplication.hasFlag(v.hM6.PREMIUM)
                                ? (0, l.jsx)(z.m, {
                                      text: L.intl.string(L.t.tG2SzG),
                                      children: (0, l.jsx)(W.t, {
                                          size: "md",
                                          color: "currentColor",
                                          className: tx.oU,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
    },
    {
        key: v.DpB.PLATFORM,
        renderHeader: () => L.intl.string(L.t.YR4cHH),
        sort: !0,
        cellClassName: tx.AA,
        bodyCellClassName: tx.iV,
        render(t) {
            let e = t.libraryApplication.getDistributor();
            return (0, l.jsx)($.A, {
                align: $.A.Align.CENTER,
                children: null != e ? v.gG4[e] : L.intl.string(L.t["F+l3Jt"]),
            });
        },
    },
    {
        key: v.DpB.LAST_PLAYED,
        renderHeader: () => L.intl.string(L.t.FDDyjS),
        sort: !0,
        cellClassName: tx.SX,
        bodyCellClassName: tx.iV,
        render(t) {
            let e;
            return (
                (e = t.isRunning
                    ? L.intl.string(L.t.Md326p)
                    : t.isNew
                      ? L.intl.string(L.t["+F0Tho"])
                      : 0 !== t.lastPlayed
                        ? (0, l.jsx)(te.Ay, { end: t.lastPlayed, location: te.Ay.Locations.GAME_LIBRARY_LAST_PLAYED })
                        : L.intl.string(L.t.EoWLru)),
                (0, l.jsx)($.A, { align: $.A.Align.CENTER, className: u()({ [tx.g3]: t.isNew }), children: e })
            );
        },
    },
    {
        key: v.DpB.ACTIONS,
        renderHeader: () => null,
        cellClassName: tx.AT,
        render(t, e, n) {
            var i, r;
            if (null == e) throw Error("No cell props defined.");
            let a = t.key === e.activeRowKey;
            return (0, l.jsxs)(s.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: tx.nU,
                        children: [
                            (0, l.jsx)(tN, {
                                flag: v.hM6.PRIVATE,
                                item: t,
                                icon: Y.EyeSlashIcon,
                                tooltip: L.intl.string(L.t.NozAop),
                            }),
                            (0, l.jsx)(tN, {
                                flag: v.hM6.OVERLAY_DISABLED,
                                item: t,
                                icon: J.n,
                                tooltip: L.intl.string(L.t.Az9eqn),
                            }),
                            (0, l.jsx)(tg, {
                                className: u()(tx.up, { [tx.R]: !t.supportsCloudSync }),
                                libraryApplication: t.libraryApplication,
                            }),
                        ],
                    }),
                    (0, tn.XZ)(t.libraryApplication)
                        ? (0, l.jsx)(q.A, {
                              analyticsListSort:
                                  ((i = e.sortKey),
                                  (r = e.sortDirection),
                                  `${tI[i]} ${r === v.tSW.ASCENDING ? "ASC" : "DESC"}`),
                              analyticsListIndex: n,
                              source: v.ThZ.APPLICATION_LIBRARY,
                              libraryApplication: t.libraryApplication,
                              playButtonVariant: a ? "primary" : "secondary",
                              size: "sm",
                              hideProgress: null != t.defaultAction,
                              onDropdownOpen: () => null != e && e.setActiveRowKey(t),
                              onDropdownClose: () => null != e && e.clearActiveRowKey(),
                          })
                        : (0, l.jsx)("div", { children: "deprecated!" }),
                ],
            });
        },
    },
];
function tC(t) {
    let {
            item: e,
            activeRowKey: n,
            highlightedApplicationKey: i,
            onMouseEnter: s,
            onMouseLeave: r,
            onContextMenu: a,
            setRef: o,
            ...c
        } = t,
        d = e.key === n,
        h = e.key === i;
    return (0, l.jsx)("div", {
        className: u()({ [tx.eO]: d && !h, [tx.HM]: h, [tx.Ob]: !d && !h, [tx.ic]: !d && !e.isLaunchable }),
        ref: (t) => {
            o(t, e.key);
        },
        onMouseEnter: () => s(e),
        onMouseLeave: r,
        onContextMenu: (t) => a(t, e),
        children: (0, l.jsx)("div", { ...c }),
    });
}
class tR extends s.PureComponent {
    static defaultProps = { stickyHeader: !1 };
    _didUnmount = !1;
    _rowRefs = {};
    state = {
        overflowMenuRowKey: null,
        highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null,
    };
    componentDidMount() {
        let { fetched: t } = this.props;
        t && (this.handleHighlightedApplicationKey(), this.trackViewed());
    }
    componentWillUnmount() {
        this._didUnmount = !0;
    }
    componentDidUpdate(t) {
        !t.fetched && this.props.fetched && (this.handleHighlightedApplicationKey(), this.trackViewed());
        let e = this.props.activeRowKey;
        if (null != e && t.activeRowKey !== e && this.props.isNavigatingByKeyboard) {
            let t = this._rowRefs[e];
            null != t && ((0, Q.Z_)(), this.props.scrollToRow(t, tf));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: t } = this.state;
        null != t &&
            null != this._rowRefs[t] &&
            (this.props.scrollToRow(this._rowRefs[t], tf),
            new F.Ep().start(ty, () => {
                this._didUnmount || this.setState({ highlightedApplicationKey: null });
            }));
    }
    trackViewed() {
        let t = {
                num_applications_total: 0,
                num_applications_discord: 0,
                num_applications_steam: 0,
                num_applications_battlenet: 0,
                num_applications_twitch: 0,
                num_applications_uplay: 0,
                num_applications_origin: 0,
                num_applications_gog: 0,
                num_applications_epic: 0,
            },
            { analyticsContext: e, applicationViewItems: n } = this.props;
        for (let e of n) {
            switch (e.libraryApplication.getDistributor()) {
                case v.d3x.DISCORD:
                    t.num_applications_discord++;
                    break;
                case v.d3x.STEAM:
                    t.num_applications_steam++;
                    break;
                case v.d3x.BATTLENET:
                    t.num_applications_battlenet++;
                    break;
                case v.d3x.TWITCH:
                    t.num_applications_twitch++;
                    break;
                case v.d3x.UPLAY:
                    t.num_applications_uplay++;
                    break;
                case v.d3x.ORIGIN:
                    t.num_applications_origin++;
                    break;
                case v.d3x.GOG:
                    t.num_applications_gog++;
                    break;
                case v.d3x.EPIC:
                    t.num_applications_epic++;
            }
            t.num_applications_total++;
        }
        U.default.track(v.HAw.LIBRARY_VIEWED, { ...t, load_id: e.loadId });
    }
    setActiveRowKey = (t) => {
        this.setState({ overflowMenuRowKey: t.key });
    };
    clearActiveRowKey = () => {
        this._didUnmount || this.setState({ overflowMenuRowKey: null });
    };
    handleRowMouseEnter = (t) => {
        this.props.isNavigatingByKeyboard || R(t.key);
    };
    handleRowMouseLeave = () => {
        this.props.isNavigatingByKeyboard || R(null);
    };
    setRowRef = (t, e) => {
        this._rowRefs[e] = t;
    };
    handleApplicationContextMenu = (t, e) => {
        this.setActiveRowKey(e);
        let { analyticsContext: i } = this.props;
        (0, Q.L3)(
            t,
            async () => {
                let { default: t } = await Promise.all([n.e("715687"), n.e("645794")]).then(n.bind(n, 451897));
                return (n) =>
                    (0, l.jsx)(t, {
                        ...n,
                        applicationId: e.libraryApplication.id,
                        branchId: e.libraryApplication.branchId,
                        analyticsContext: i,
                    });
            },
            { onClose: this.clearActiveRowKey },
        );
    };
    handleSort(t, e) {
        T.h.dispatch({ type: "LIBRARY_TABLE_SORT_UPDATE", key: t, direction: e });
    }
    renderImportHelp() {
        let t,
            { applicationViewItems: e, filterQuery: n } = this.props;
        return e.length > 0
            ? null
            : ((t = "" !== n ? L.intl.format(L.t["4Q1TAr"], { query: n }) : L.intl.string(L.t["0Y+0PY"])),
              (0, l.jsxs)("div", {
                  className: tx.mv,
                  children: [
                      (0, l.jsx)("div", { className: tx.Zd }),
                      (0, l.jsx)($.A, {
                          grow: 0,
                          shrink: 0,
                          direction: $.A.Direction.VERTICAL,
                          children: (0, l.jsxs)("div", {
                              className: tx.q6,
                              children: [
                                  (0, l.jsx)("div", { className: tx.ks, children: L.intl.string(L.t.Lw8X2j) }),
                                  (0, l.jsx)("div", { className: tx.Li, children: t }),
                              ],
                          }),
                      }),
                  ],
              }));
    }
    render() {
        let { sortKey: t, sortDirection: e, applicationViewItems: n, activeRowKey: i, stickyHeader: r } = this.props,
            { overflowMenuRowKey: a, highlightedApplicationKey: o } = this.state;
        return (0, l.jsxs)(s.Fragment, {
            children: [
                n.length > 0
                    ? (0, l.jsx)(Z.A, {
                          columns: tT,
                          data: n,
                          sortData: !1,
                          rowComponent: tC,
                          className: tx.tp,
                          headerClassName: r ? tx.ln : tx.wx,
                          headerCellClassName: tx.e4,
                          sortedHeaderCellClassName: tx.dm,
                          bodyCellClassName: tx.hC,
                          rowClassName: tx.G9,
                          sortKey: t,
                          sortDirection: e,
                          stickyHeader: r,
                          rowProps: {
                              activeRowKey: a ?? i,
                              highlightedApplicationKey: o,
                              onMouseEnter: this.handleRowMouseEnter,
                              onMouseLeave: this.handleRowMouseLeave,
                              onContextMenu: this.handleApplicationContextMenu,
                              setRef: this.setRowRef,
                          },
                          cellProps: {
                              activeRowKey: a ?? i,
                              onContextMenu: this.handleApplicationContextMenu,
                              setActiveRowKey: this.setActiveRowKey,
                              clearActiveRowKey: this.clearActiveRowKey,
                              sortKey: t,
                              sortDirection: e,
                          },
                          onSort: this.handleSort,
                      })
                    : null,
                this.renderImportHelp(),
            ],
        });
    }
}
function tS(t) {
    let e = s.useContext(U.AnalyticsContext),
        n = (0, r.zy)(),
        {
            applicationViewItems: i,
            filterQuery: a,
            fetched: o,
        } = (0, y.cf)([P.A], () => ({
            applicationViewItems: P.A.sortedFilteredLibraryApplicationViewItems,
            filterQuery: P.A.applicationFilterQuery,
            fetched: P.A.hasFetchedApplications,
        })),
        {
            sortKey: c,
            sortDirection: d,
            activeRowKey: h,
            isNavigatingByKeyboard: u,
        } = (0, y.cf)([j.A], () => ({
            sortKey: j.A.sortKey,
            sortDirection: j.A.sortDirection,
            activeRowKey: j.A.activeRowKey,
            isNavigatingByKeyboard: j.A.isNavigatingByKeyboard,
        }));
    return (0, l.jsx)(tR, {
        ...t,
        analyticsContext: e,
        location: n,
        applicationViewItems: i,
        filterQuery: a,
        fetched: o,
        sortKey: c,
        sortDirection: d,
        activeRowKey: h,
        isNavigatingByKeyboard: u,
    });
}
n(321073);
var tP = n(435558),
    tj = n.n(tP),
    t_ = n(661531),
    tv = n(462887),
    tw = n(408278),
    tL = n(5373),
    tE = n(834730),
    tb = n(797424),
    tD = n.n(tb),
    tM = n(228118),
    tB = (((i = tB || {}).XSMALL = "xsmall"), (i.SMALL = "small"), (i.LARGE = "large"), i);
function tO(t) {
    let {
            className: e,
            percents: n,
            size: i = "small",
            foregroundColors: s = [t_.A.unsafe_rawColors.BRAND_500.css],
            backgroundColor: r = "var(--interactive-background-active)",
            animate: a = !0,
        } = t,
        o = tD()(n ?? [], s)
            .map((t, e) => {
                let n,
                    [s, r] = t;
                return (
                    (n = Array.isArray(r)
                        ? { background: `linear-gradient(to right, ${r[0]}, ${r[1]})` }
                        : { backgroundColor: r }),
                    (0, l.jsx)(
                        "div",
                        {
                            className: u()(tM.progressBar, tM[i], { [tM.animating]: a }),
                            style: {
                                transform: `translate3d(${Math.min(Math.max(0, s ?? 0), 100) - 100}%, 0, 0)`,
                                ...n,
                            },
                        },
                        e,
                    )
                );
            })
            .reverse();
    return (0, l.jsx)("div", { className: u()(e, tM.progress, tM[i]), style: { backgroundColor: r }, children: o });
}
tO.Sizes = tB;
var tk = n(782134),
    tU = n(113494),
    tV = n(872351),
    tG = n(789645),
    tH = n(92077),
    tK = n(707606),
    tF = n(456412),
    tX = n(587895),
    tz = n(363195),
    tW = n(189081),
    tY = n(340829),
    tJ = n(966846),
    tQ = n(531685),
    tq = n(255438),
    t$ = n(505806),
    tZ = n(998304),
    t0 = n(281370);
class t1 extends s.PureComponent {
    dataChangedAt = 0;
    fillColor = "";
    maxValue = 0;
    canvas = s.createRef();
    animationFrameRequestId = 0;
    static defaultProps = { animate: !0 };
    onDataUpdate(t, e) {
        let { maxValue: n, data: i, animate: l } = this.props,
            s = null == t || (t.data !== e.data && !tj().isEqual(t.data, e.data));
        if (
            (s && ((this.dataChangedAt = performance.now()), (this.maxValue = null != n ? n : Math.max(...i))),
            s || null == t || (!t.animate && l) || t.color !== this.props.color)
        ) {
            let t = tZ.E2(this.props.color);
            ((this.fillColor = `rgba(${t.r}, ${t.g}, ${t.b}, 0.5)`),
                window.cancelAnimationFrame(this.animationFrameRequestId),
                (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation)));
        }
    }
    componentDidMount() {
        ((this.animationFrameRequestId = 0), this.onDataUpdate(null, this.props));
    }
    componentDidUpdate(t) {
        this.onDataUpdate(t, this.props);
    }
    componentWillUnmount() {
        (window.cancelAnimationFrame(this.animationFrameRequestId), (this.animationFrameRequestId = 0));
    }
    updateAnimation = (t) => {
        let e,
            n = this.canvas.current;
        if (null == n) return;
        let {
            data: i,
            updateInterval: l,
            color: s,
            numUpdatesToShow: r,
            lineWidth: a,
            animate: o,
            gradientStopColor: c,
        } = this.props;
        if (i.length < 2) return;
        let d = Math.max(Math.min((t - this.dataChangedAt) / l, 1), 0),
            h = n.getContext("2d"),
            u = this.maxValue;
        ((h.strokeStyle = s), (h.lineWidth = a));
        let p = n.height - h.lineWidth,
            A = h.createLinearGradient(0, 0, 0, p);
        if (null != c) A.addColorStop(0, c);
        else {
            let { r: t, g: e, b: n } = tZ.E2(s);
            A.addColorStop(0, `rgba(${t}, ${e}, ${n}, 0)`);
        }
        (A.addColorStop(1, this.fillColor), (h.fillStyle = A));
        let m = i.length >= r ? r : i.length;
        (h.setTransform(1, 0, 0, -1, 0, n.height),
            h.clearRect(0, 0, n.width, n.height),
            h.translate(0, 0.5 * h.lineWidth));
        let g = Math.floor(n.width / (m - 3)),
            x = 0.5 * g;
        (h.translate(g - g * d, 0), h.beginPath());
        let f = -g;
        (i.forEach((t) => {
            let n = { x: f, y: (p * t) / u };
            (null == e ? h.moveTo(n.x, n.y) : h.bezierCurveTo(e.x + x, e.y, n.x - x, n.y, n.x, n.y), (e = n), (f += g));
        }),
            h.stroke(),
            h.lineTo(f - g, 0),
            h.lineTo(0, 0),
            h.fill(),
            o && d < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation)));
    };
    render() {
        let { className: t, pixelWidth: e, pixelHeight: n } = this.props;
        return (0, l.jsx)("div", {
            className: t,
            children: (0, l.jsx)("canvas", { ref: this.canvas, className: t0.J, width: e, height: n }),
        });
    }
}
var t4 = n(205616);
let t5 = function (t) {
    let { title: e, className: n, color: i, animate: s, getHistoricalTotalBytes: r } = t;
    return (0, l.jsx)(t$.A, {
        getHistoricalTotalBytes: r,
        children: function (t, r, a) {
            var o;
            return (0, l.jsx)("div", {
                className: u()(t4.dm, n),
                children: (0, l.jsxs)($.A, {
                    align: $.A.Align.CENTER,
                    children: [
                        (0, l.jsxs)($.A, {
                            className: t4.Qq,
                            direction: $.A.Direction.VERTICAL,
                            children: [
                                (0, l.jsx)("div", { className: t4.DD, children: e }),
                                (0, l.jsx)("div", {
                                    className: t4.TS,
                                    children:
                                        (o = (t[t.length - 1] / r) * 1e3) > 1e3
                                            ? L.intl.formatToPlainString(L.t["WU+gTX"], { size: Math.round(o / 1e3) })
                                            : L.intl.formatToPlainString(L.t.wnF6TH, { size: Math.round(o) }),
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: t4.MQ,
                            children: (0, l.jsx)(t1, {
                                data: t,
                                maxValue: Math.max(Math.max.apply(null, t), 1e3),
                                className: t4.CD,
                                updateInterval: r,
                                color: i,
                                numUpdatesToShow: a,
                                animate: s,
                                pixelWidth: 600,
                                pixelHeight: 48,
                                lineWidth: 4,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
};
var t2 = n(307304);
function t6(t) {
    let { className: e, children: n, onContextMenu: i, item: s } = t;
    return (0, l.jsx)("div", { className: e, onContextMenu: (t) => i(t, s), children: n });
}
let t3 = [t_.A.unsafe_rawColors.BLUE_345.css, t_.A.colors.INTERACTIVE_TEXT_DEFAULT.css];
function t7(t) {
    let { tooltip: e, onClick: n, icon: i } = t;
    return (0, l.jsx)(z.m, {
        text: e,
        children: (0, l.jsx)(tw.K, { "aria-label": e, variant: "secondary", icon: i, onClick: n, size: "sm" }),
    });
}
function t9(t, e) {
    switch (e) {
        case v.OQC.POST_INSTALL_SCRIPTS:
        case v.OQC.PLANNING:
        case v.OQC.FINALIZING:
        case v.OQC.ALLOCATING_DISK:
            return `${t}`;
        default:
            return (0, tq.Xq)(t, { useKibibytes: !0 });
    }
}
let t8 = {
    [v.WTw.INSTALLING]: {
        [te.pJ.NONE]: (t, e, n, i) => L.intl.formatToPlainString(L.t.JfJt9d, { percent: t, progress: e, total: n }),
        [te.pJ.SECONDS]: (t, e, n, i) =>
            L.intl.formatToPlainString(L.t["1z3c6e"], { percent: t, progress: e, total: n, timeRemaining: i }),
        [te.pJ.MINUTES]: (t, e, n, i) =>
            L.intl.formatToPlainString(L.t.PCX506, { percent: t, progress: e, total: n, timeRemaining: i }),
        [te.pJ.HOURS]: (t, e, n, i) =>
            L.intl.formatToPlainString(L.t["3VG9s1"], { percent: t, progress: e, total: n, timeRemaining: i }),
    },
    [v.WTw.UPDATING]: {
        [te.pJ.NONE]: (t, e, n, i) => L.intl.formatToPlainString(L.t.JsqXXL, { percent: t, progress: e, total: n }),
        [te.pJ.SECONDS]: (t, e, n, i) =>
            L.intl.formatToPlainString(L.t["3BvVec"], { percent: t, progress: e, total: n, timeRemaining: i }),
        [te.pJ.MINUTES]: (t, e, n, i) =>
            L.intl.formatToPlainString(L.t["rwULn+"], { percent: t, progress: e, total: n, timeRemaining: i }),
        [te.pJ.HOURS]: (t, e, n, i) =>
            L.intl.formatToPlainString(L.t.adcitP, { percent: t, progress: e, total: n, timeRemaining: i }),
    },
    [v.WTw.REPAIRING]: {
        [te.pJ.NONE]: (t, e, n, i) => L.intl.formatToPlainString(L.t.JfJt9d, { percent: t, progress: e, total: n }),
        [te.pJ.SECONDS]: (t, e, n, i) =>
            L.intl.formatToPlainString(L.t["1z3c6e"], { percent: t, progress: e, total: n, timeRemaining: i }),
        [te.pJ.MINUTES]: (t, e, n, i) =>
            L.intl.formatToPlainString(L.t.PCX506, { percent: t, progress: e, total: n, timeRemaining: i }),
        [te.pJ.HOURS]: (t, e, n, i) =>
            L.intl.formatToPlainString(L.t["3VG9s1"], { percent: t, progress: e, total: n, timeRemaining: i }),
    },
};
function et(t, e, n, i, l) {
    let s = t8[e],
        r = null != s ? Object.keys(s) : [],
        { unit: a, time: o } = (0, te.$l)(null != t ? t / 60 : null, r);
    if (null != s && null != a) {
        let t = s[a];
        return null != t ? t(n, i, l, o ?? 0) : null;
    }
    return null;
}
function ee(t) {
    let { type: e, stage: n, percent: i, progress: l, total: s, secondsRemaining: r } = t,
        a = t9(s, n),
        o = t9(l, n);
    switch (n) {
        case v.OQC.QUEUED:
            if (0 === l) return L.intl.string(L.t.RpfBqd);
            return L.intl.formatToPlainString(L.t.uNjCXZ, { percent: i, progress: o, total: a });
        case v.OQC.PLANNING:
            return L.intl.formatToPlainString(L.t.sfuCUb, { percent: i });
        case v.OQC.ALLOCATING_DISK:
            return L.intl.formatToPlainString(L.t.XigoJ9, { percent: i });
        case v.OQC.PATCHING:
            return et(r, e, i, o, a);
        case v.OQC.FINALIZING:
            return L.intl.formatToPlainString(L.t["6PHDUN"], { percent: i });
        case v.OQC.PAUSING:
            return L.intl.formatToPlainString(L.t.vjxhWo, { percent: i, progress: o, total: a });
        case v.OQC.VERIFYING:
            return L.intl.formatToPlainString(L.t.bbilvq, { percent: i, progress: o, total: a });
        case v.OQC.POST_INSTALL_SCRIPTS:
            return L.intl.formatToPlainString(L.t.c5vRUo, { percent: i, progress: o, total: a });
        case v.OQC.REPAIRING:
            if (e === v.WTw.REPAIRING) return et(r, e, i, o, a);
            return L.intl.formatToPlainString(L.t.OCzETT, { percent: i, progress: o, total: a });
    }
    throw Error("Invalid Dispatch stage");
}
class en extends s.PureComponent {
    get isFocused() {
        let { cellProps: t } = this.props;
        return null != t && t.isFocused;
    }
    renderBody(t) {
        let { percent: e, foregroundColor: n, foregroundGradientColor: i, message: s } = t;
        return (0, l.jsxs)($.A, {
            direction: $.A.Direction.VERTICAL,
            children: [
                (0, l.jsx)(tL.i, {
                    percent: e,
                    size: tL.i.Sizes.SMALL,
                    foregroundColor: n,
                    foregroundGradientColor: null != i ? [i[0], i[1]] : void 0,
                    animate: this.isFocused,
                }),
                (0, l.jsx)(tE.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: t2.NO,
                    children: null != s ? s : "",
                }),
            ],
        });
    }
    renderStackedProgress(t) {
        let { percents: e, message: n } = t;
        return (0, l.jsxs)($.A, {
            direction: $.A.Direction.VERTICAL,
            children: [
                (0, l.jsx)(tO, { percents: e, size: tO.Sizes.SMALL, foregroundColors: t3, animate: this.isFocused }),
                (0, l.jsx)(tE.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: t2.NO,
                    children: null != n ? n : "",
                }),
            ],
        });
    }
    renderFinished() {
        let { item: t } = this.props;
        return this.renderBody({
            message: L.intl.format(L.t.z1oxGO, { remove: () => tH.Vt(t.applicationId, t.branchId) }),
            foregroundColor: (0, tv.q)(t.theme)
                ? t_.A.unsafe_rawColors.PRIMARY_300.css
                : t_.A.unsafe_rawColors.PRIMARY_500.css,
            percent: 100,
        });
    }
    renderQueued() {
        let t,
            e,
            {
                item: { state: n, theme: i },
            } = this.props;
        if (null != n) {
            let { progress: i, total: l, stage: s } = n;
            if (null != i && null != l) {
                let n = t9(l, s),
                    r = t9(i, s),
                    a = Math.floor((e = tn.uA(i, l)));
                t =
                    s === v.OQC.PAUSING
                        ? L.intl.formatToPlainString(L.t.vjxhWo, { percent: a, progress: r, total: n })
                        : L.intl.formatToPlainString(L.t.voT3Bi, { percent: a, progress: r, total: n });
            }
        }
        return (
            (null == e || null == t) && ((e = 0), (t = L.intl.string(L.t["qS+iKY"]))),
            this.renderBody({
                percent: e,
                foregroundColor: (0, tv.q)(i)
                    ? t_.A.unsafe_rawColors.PRIMARY_300.css
                    : t_.A.unsafe_rawColors.PRIMARY_500.css,
                message: t,
            })
        );
    }
    renderPaused() {
        let {
            item: { state: t, theme: e },
        } = this.props;
        if (null == t) return null;
        let { progress: n, total: i } = t;
        if (null == n || null == i) return null;
        let l = tn.uA(n, i),
            s = Math.floor(l),
            r =
                0 === n && 1 === i
                    ? L.intl.string(L.t["+pfsFX"])
                    : L.intl.formatToPlainString(L.t["+feX8S"], {
                          percent: s,
                          progress: (0, tq.Xq)(n),
                          total: (0, tq.Xq)(i),
                      });
        return this.renderBody({
            message: r,
            foregroundColor: (0, tv.q)(e)
                ? t_.A.unsafe_rawColors.PRIMARY_300.css
                : t_.A.unsafe_rawColors.PRIMARY_500.css,
            percent: l,
        });
    }
    renderProgressPatchingBody = (t, e) => {
        let {
            item: { state: n },
        } = this.props;
        if (null == n) return null;
        let { stage: i, progress: l, total: s, type: r, readerProgress: a } = n;
        if (null == l || null == s || null == i) return null;
        let o = tn.uA(l, s),
            c = tn.uA(a ?? 0, s),
            d = (t[t.length - 1] / e) * 1e3,
            h = s - l,
            u = ee({
                type: r,
                stage: i,
                percent: Math.floor(o),
                progress: l,
                total: s,
                secondsRemaining: 0 !== d ? Math.max(1, h / d) : null,
            });
        return this.renderStackedProgress({ percents: [o, c], message: u });
    };
    renderProgressPatching() {
        return (0, l.jsx)(t$.A, {
            getHistoricalTotalBytes: tY.A.getHistoricalTotalBytesWritten,
            updateInterval: 5e3,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: t } = this.props.item;
        if (null == t) return null;
        let { total: e, progress: n, stage: i, type: l } = t;
        if (null == e || null == n || null == i) return null;
        let s = tn.uA(n, e),
            r = Math.floor(s);
        return this.renderBody({
            percent: s,
            message: ee({ type: l, stage: i, percent: r, progress: n, total: e }),
            foregroundColor: t_.A.unsafe_rawColors.BLUE_345.css,
        });
    }
    renderProgress() {
        let { state: t } = this.props.item;
        switch (null != t ? t.stage : null) {
            case v.OQC.PATCHING:
            case v.OQC.REPAIRING:
                return this.renderProgressPatching();
            default:
                return this.renderProgressDefault();
        }
    }
    render() {
        let { item: t, cellProps: e } = this.props;
        if (t.finished) return this.renderFinished();
        if (t.index > 0) return this.renderQueued();
        if (
            null != t.state &&
            (t.state.type === v.WTw.UPDATING || t.state.type === v.WTw.REPAIRING || t.state.type === v.WTw.INSTALLING)
        )
            if (null != e && e.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
}
function ei() {
    return (0, l.jsx)(t7, { icon: tk.PlayIcon, tooltip: L.intl.string(L.t.YGm6SZ), onClick: () => tH.U() });
}
function el() {
    return (0, l.jsx)(t7, { icon: tU.PauseIcon, tooltip: L.intl.string(L.t.TVAd5J), onClick: () => tH.v7() });
}
function es(t) {
    let { item: e } = t;
    return (0, l.jsx)(t7, {
        icon: tV.z,
        tooltip: L.intl.string(L.t["Eqb+LN"]),
        onClick: () => tH.BO(e.applicationId, e.branchId),
    });
}
function er(t) {
    let { item: e } = t;
    return (0, l.jsx)(t7, {
        icon: tG.P,
        tooltip: L.intl.string(L.t["0lFmC9"]),
        onClick: () => tH.ZT(e.applicationId, e.branchId),
    });
}
let ea = [
    {
        key: "name",
        cellClassName: t2.UQ,
        render: (t) =>
            (0, l.jsxs)($.A, {
                align: $.A.Align.CENTER,
                children: [
                    (0, l.jsx)(tt.A, { game: t.application, className: t2.__invalid_gameIcon, size: tt.M.SMALL }),
                    (0, l.jsx)("div", { className: t2.TF, children: t.application.name }),
                ],
            }),
    },
    {
        key: "progress",
        cellClassName: t2.Ay,
        headerCellClassName: t2.VD,
        bodyCellClassName: t2.so,
        render: (t, e) => (0, l.jsx)(en, { item: t, cellProps: e }),
    },
    {
        key: "actions",
        cellClassName: t2.AT,
        render(t, e) {
            let n, i;
            return (
                t.finished
                    ? (n =
                          null != t.libraryApplication
                              ? (0, l.jsx)(q.A, {
                                    libraryApplication: t.libraryApplication,
                                    size: "sm",
                                    source: v.ThZ.APPLICATION_LIBRARY_UPDATES,
                                })
                              : null)
                    : null != t.state
                      ? t.state.type !== v.WTw.UP_TO_DATE &&
                        ((n =
                            t.index > 0
                                ? (0, l.jsx)(es, { item: t })
                                : null != e && e.paused
                                  ? (0, l.jsx)(ei, {})
                                  : (0, l.jsx)(el, {})),
                        (i = (0, l.jsx)(er, { item: t })))
                      : (i = (0, l.jsx)(er, { item: t })),
                (0, l.jsxs)("div", { className: t2.sG, children: [n, i] })
            );
        },
    },
];
class eo extends s.PureComponent {
    isUnmounted = !1;
    isTallerThanHalfViewport = !1;
    componentDidMount() {
        window.addEventListener("resize", this.throttledUpdateHeight);
    }
    componentDidUpdate(t) {
        this.props.height !== t.height && this.throttledUpdateHeight();
    }
    componentWillUnmount() {
        let { applications: t } = this.props;
        (t.forEach((t) => {
            t.finished && tH.Vt(t.applicationId, t.branchId);
        }),
            window.removeEventListener("resize", this.throttledUpdateHeight),
            (this.isUnmounted = !0));
    }
    throttledUpdateHeight = tj().throttle(() => {
        if (this.isUnmounted) return;
        let { height: t, onHeightTallerThanHalfViewportChange: e } = this.props,
            n = t > window.innerHeight / 2;
        this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), e(n));
    }, 1e3);
    render() {
        let { applications: t, paused: e, isFocused: i, theme: s, analyticsContext: r } = this.props;
        return 0 === t.length
            ? null
            : (0, l.jsxs)("div", {
                  className: t2.xP,
                  children: [
                      (0, l.jsxs)("div", {
                          className: t2.U1,
                          children: [
                              (0, l.jsx)(t5, {
                                  className: u()(t2.e4, t2.Eg),
                                  title: L.intl.string(L.t.ytoXKr),
                                  getHistoricalTotalBytes: tY.A.getHistoricalTotalBytesDownloaded,
                                  color: t_.A.unsafe_rawColors.GREEN_360.resolve({ saturation: 1 }).hex(),
                                  animate: i,
                              }),
                              (0, l.jsx)(t5, {
                                  className: u()(t2.e4, t2.pn),
                                  title: L.intl.string(L.t.SjohhI),
                                  getHistoricalTotalBytes: tY.A.getHistoricalTotalBytesWritten,
                                  color: t_.A.unsafe_rawColors.BLUE_345.resolve({ saturation: 1 }).hex(),
                                  animate: i,
                              }),
                          ],
                      }),
                      (0, l.jsx)(Z.A, {
                          hasHeader: !1,
                          columns: ea,
                          data: t,
                          className: t2.tp,
                          rowClassName: t2.nM,
                          rowComponent: t6,
                          cellProps: { paused: e, isFocused: i, theme: s },
                          rowProps: {
                              onContextMenu: (t, e) => {
                                  Q.L3(t, async () => {
                                      let { default: t } = await Promise.all([n.e("715687"), n.e("645794")]).then(
                                          n.bind(n, 451897),
                                      );
                                      return (n) =>
                                          (0, l.jsx)(t, {
                                              ...n,
                                              applicationId: e.applicationId,
                                              branchId: e.branchId,
                                              analyticsContext: r,
                                          });
                                  });
                              },
                          },
                          bodyCellClassName: t2.Hn,
                      }),
                  ],
              });
    }
}
function ec(t, e, n, i) {
    return t.reduce((t, l, s) => {
        let { applicationId: r, branchId: a } = l,
            o = n.getApplication(r),
            c = i.getState(r, a);
        return (
            null != o &&
                t.push({
                    key: `${r}:${a}`,
                    applicationId: r,
                    branchId: a,
                    state: c,
                    application: o,
                    libraryApplication: tW.A.getLibraryApplication(r, a),
                    finished: e,
                    index: s,
                }),
            t
        );
    }, []);
}
let ed = (0, tF.A)(
    y.Ay.connectStores([tX.A, tY.A, tJ.A, tz.A, tQ.A], () => ({
        applications: [...ec(tJ.A.activeItems, !1, tX.A, tY.A), ...ec(tJ.A.finishedItems, !0, tX.A, tY.A)],
        paused: tJ.A.paused,
        isFocused: tQ.A.isFocused(),
        theme: tz.A.theme,
    }))((0, tK.A)(eo)),
);
var eh = n(613057),
    eu = n(723525);
class ep extends s.PureComponent {
    _scrollerRef = s.createRef();
    _scrollToOnMount;
    _scrollToPadding = 0;
    state = { includeUpdatesInScroller: !1 };
    componentDidMount() {
        (A.I(v.BVt.APPLICATION_LIBRARY),
            (0, x.h)(eh.XK.LIBRARY),
            (0, m.r)(),
            (0, g.X)(),
            null != this._scrollToOnMount &&
                null != this._scrollerRef.current &&
                this.scrollToRow(this._scrollToOnMount, this._scrollToPadding));
    }
    handleHeightTallerThanHalfViewportChange = (t) => {
        this.setState({ includeUpdatesInScroller: t });
    };
    renderToolbar() {
        return (0, l.jsx)(D, {});
    }
    scrollToRow = (t, e) => {
        let n = this._scrollerRef.current;
        null != n
            ? (t.focus(), n.scrollIntoViewRect({ start: e, end: e }), (this._scrollToOnMount = null))
            : ((this._scrollToOnMount = t), (this._scrollToPadding = e));
    };
    render() {
        let { includeUpdatesInScroller: t } = this.state,
            e = (0, l.jsx)("div", {
                children: (0, l.jsx)(a.A, {
                    section: v.JJy.LIBRARY_INSTALL_MODULE,
                    children: (0, l.jsx)(ed, {
                        onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange,
                    }),
                }),
            });
        return (0, l.jsxs)(s.Fragment, {
            children: [
                (0, l.jsx)(K, { currentRoute: v.BVt.APPLICATION_LIBRARY, renderToolbar: this.renderToolbar }),
                t ? null : e,
                (0, l.jsxs)(p.Gt, {
                    className: u()(eu.k, eu.X),
                    ref: this._scrollerRef,
                    children: [
                        t ? e : null,
                        (0, l.jsx)(a.A, {
                            section: v.JJy.LIBRARY_APPLICATION_LIST,
                            children: (0, l.jsx)(tS, { stickyHeader: !t, scrollToRow: this.scrollToRow }),
                        }),
                    ],
                }),
            ],
        });
    }
}
var eA = n(665260),
    em = n(939249),
    eg = n(297264),
    ex = n(331322),
    ef = n(193249),
    ey = n(404778),
    eI = n(364522),
    eN = n(59636),
    eT = n(253932),
    eC = n(314116),
    eR = n(821609),
    eS = n(993077),
    eP = n(95477),
    ej = n(150934),
    e_ = n(825484),
    ev = n(452027),
    ew = n(466472),
    eL = n(29160),
    eE = n(970176);
let eb = Math.ceil(2 * Math.PI * 20),
    eD = function (t) {
        let e,
            n,
            i,
            s,
            { total: r, used: a } = t,
            o = Math.max(0, Math.min(1, a / r)),
            c = `${Math.floor(100 * o)}%`;
        return (0, l.jsx)(z.m, {
            text: L.intl.formatToPlainString(L.t["2eoRMh"], { used: c }),
            children: (0, l.jsxs)("div", {
                className: eE.iE,
                role: "progressbar",
                "aria-label": L.intl.formatToPlainString(L.t["2eoRMh"], { used: c }),
                children: [
                    (0, l.jsxs)("svg", {
                        viewBox: "25 25 50 50",
                        className: eE.JW,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("circle", { className: eE.Tp, cx: "50", cy: "50", r: 20 }),
                            (0, l.jsx)("circle", {
                                className: eE.CU,
                                cx: "50",
                                cy: "50",
                                r: 20,
                                stroke:
                                    ((e = Math.round(-85 * o + 199)),
                                    (n = Math.round(-71 * o + 208)),
                                    (i = Math.round(-22 * o + 240)),
                                    `rgb(${e}, ${n}, ${i})`),
                                strokeDasharray: ((s = Math.floor(eb * o)), `${s}, ${eb}`),
                            }),
                        ],
                    }),
                    (0, l.jsx)("aside", { className: eE.Y3, "aria-hidden": !0, children: c }),
                ],
            }),
        });
    };
var eM = n(775228),
    eB = n(723702),
    eO = n(19575),
    ek = n(352001),
    eU = n(221851);
class eV extends s.PureComponent {
    state = { label: void 0, isDefault: null };
    handleStartEditing = () => {
        let { path: t, label: e, isDefault: n, onToggleEditing: i } = this.props;
        (i(t), this.setState({ label: e, isDefault: n }));
    };
    handleStopEditing = () => {
        let { onToggleEditing: t } = this.props;
        (t(null), this.setState({ label: void 0, isDefault: null }));
    };
    handleRemoveLocation = () => {
        (0, eC.A)({
            title: L.intl.string(L.t.iBUzS5),
            subtitle: L.intl.string(L.t["1XqeW2"]),
            confirmText: L.intl.string(L.t.iBUzS5),
            onConfirm: () => {
                (this.handleStopEditing(), (0, ew.JN)(this.props.path));
            },
        });
    };
    handleSaveChanges = () => {
        ((0, ew.a8)(this.props.path, {
            label: null != this.state.label ? this.state.label : this.props.label,
            isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault,
        }),
            this.handleStopEditing());
    };
    handleLabelChange = (t) => {
        this.setState({ label: t });
    };
    handleToggleDefault = () => {
        this.setState({ isDefault: !this.state.isDefault });
    };
    renderDiskUsageCircle() {
        let { metadata: t } = this.props;
        return null != t && null != t.availableKB && null != t.totalKB
            ? (0, l.jsx)(eD, { total: t.totalKB, used: t.totalKB - t.availableKB })
            : null;
    }
    renderViewing() {
        let t,
            e,
            { path: n, label: i, editingPath: s, isDefault: r, metadata: a } = this.props;
        return (
            null != a &&
                ((t = null != a.availableKB ? (0, tq.Xq)(a.availableKB, { useKibibytes: !0 }) : null),
                (e = null != a.totalKB ? (0, tq.Xq)(a.totalKB, { useKibibytes: !0 }) : null)),
            (0, l.jsxs)($.A, {
                className: ek.ce,
                align: $.A.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, l.jsxs)($.A, {
                        direction: $.A.Direction.VERTICAL,
                        className: ek.__invalid_descriptionWrapper,
                        children: [
                            (0, l.jsxs)($.A, {
                                align: $.A.Align.CENTER,
                                children: [
                                    (0, l.jsx)(eg.D, {
                                        className: ek.nM,
                                        variant: "heading-md/semibold",
                                        children: null != i ? i : eM.A.getLabelFromPath(n),
                                    }),
                                    r
                                        ? (0, l.jsx)("span", { className: ek.Zn, children: L.intl.string(L.t.bBvAEH) })
                                        : null,
                                ],
                            }),
                            null != a && null != t && null != e
                                ? (0, l.jsx)(eL.A, {
                                      className: ek.fw,
                                      hoverText: L.intl.formatToPlainString(L.t["Fxo9e+"], { available: t, total: e }),
                                      children: n,
                                  })
                                : (0, l.jsx)(tE.E, { className: ek.fw, variant: "text-xs/normal", children: n }),
                        ],
                    }),
                    (0, l.jsx)(eR.$, {
                        variant: "secondary",
                        size: "sm",
                        text: L.intl.string(L.t.bt75uw),
                        disabled: null != s,
                        onClick: this.handleStartEditing,
                    }),
                ],
            })
        );
    }
    renderEditing() {
        let { path: t, hasGamesInstalledInPath: e } = this.props,
            { label: n, isDefault: i } = this.state;
        return (0, l.jsx)(eS.Z, {
            editable: !0,
            className: ek.uP,
            children: (0, l.jsxs)($.A, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, l.jsxs)($.A.Child, {
                        children: [
                            (0, l.jsx)(eP.k, {
                                label: L.intl.string(L.t.AJkKCB),
                                value: n,
                                placeholder: eM.A.getLabelFromPath(t),
                                onChange: this.handleLabelChange,
                            }),
                            (0, l.jsx)("div", {
                                className: eU.QX,
                                children: (0, l.jsx)(eP.k, {
                                    label: L.intl.string(L.t.lnUCwX),
                                    disabled: !0,
                                    value: t,
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: ek.gZ,
                                children: (0, l.jsx)(ej.S, {
                                    checked: null != i ? i : this.props.isDefault,
                                    disabled: this.props.isDefault,
                                    onChange: this.handleToggleDefault,
                                    label: L.intl.string(L.t.Z2MWuH),
                                }),
                            }),
                            (0, l.jsx)(ey.c, { className: ek.me }),
                            (0, l.jsxs)($.A, {
                                children: [
                                    (0, l.jsx)(eR.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: L.intl.string(L.t.iBUzS5),
                                        disabled: e || this.props.isDefault,
                                        onClick: this.handleRemoveLocation,
                                    }),
                                    (0, l.jsx)($.A, {
                                        justify: $.A.Justify.END,
                                        children: (0, l.jsxs)(e_.e, {
                                            children: [
                                                (0, l.jsx)(eR.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: L.intl.string(L.t["ETE/oC"]),
                                                    onClick: this.handleStopEditing,
                                                }),
                                                (0, l.jsx)(eR.$, {
                                                    variant: "active",
                                                    size: "sm",
                                                    text: L.intl.string(L.t["R3BPH+"]),
                                                    disabled:
                                                        t === this.props.path &&
                                                        n === this.props.label &&
                                                        i === this.props.isDefault,
                                                    onClick: this.handleSaveChanges,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        return this.props.editingPath === this.props.path ? this.renderEditing() : this.renderViewing();
    }
}
class eG extends s.PureComponent {
    state = { editingPath: null };
    componentDidMount() {
        (0, ew.UQ)(
            this.props.installationPaths.map((t) => {
                let { path: e } = t;
                return e;
            }),
        );
    }
    handleAddInstallationLocation = () => {
        eO.Ay.showOpenDialog(["openDirectory"]).then((t) => {
            null != t && 0 !== t.length && null != t[0] && "undefined" !== t[0] && (0, ew.SA)(t[0]);
        });
    };
    handleToggleEditing = (t) => {
        this.setState({ editingPath: t });
    };
    render() {
        let { installationPaths: t, installationPathsMetadata: e, defaultInstallationPath: n } = this.props,
            { editingPath: i } = this.state;
        return (0, l.jsx)("div", {
            className: ek.iE,
            children: (0, l.jsxs)(ev.D, {
                label: L.intl.string(L.t.aLszkC),
                children: [
                    t.map((t) => {
                        let { path: s, label: r } = t;
                        return (0, l.jsx)(
                            eV,
                            {
                                path: s,
                                label: r,
                                metadata: e[s],
                                isDefault: n === s,
                                editingPath: i,
                                hasGamesInstalledInPath: eM.A.hasGamesInstalledInPath(s),
                                onToggleEditing: this.handleToggleEditing,
                            },
                            s,
                        );
                    }),
                    (0, l.jsx)("div", {
                        className: ek.sW,
                        children: (0, l.jsx)(eR.$, {
                            variant: "primary",
                            size: "sm",
                            text: L.intl.string(L.t.pnZ2uk),
                            disabled: !eB.isPlatformEmbedded,
                            onClick: this.handleAddInstallationLocation,
                        }),
                    }),
                ],
            }),
        });
    }
}
let eH = y.Ay.connectStores([eM.A], () => ({
    installationPaths: eM.A.installationPaths,
    installationPathsMetadata: eM.A.installationPathsMetadata,
    defaultInstallationPath: eM.A.defaultInstallationPath,
}))(eG);
var eK = n(238848);
function eF(t) {
    let { applicationViewItems: e, restoreApplication: n } = t;
    if (0 === e.length) return null;
    let i = e.map((t) => {
        let e = t.libraryApplication.getDistributor();
        return (0, l.jsxs)(
            "div",
            {
                className: eK.Kp,
                children: [
                    (0, l.jsxs)($.A, {
                        direction: $.A.Direction.VERTICAL,
                        className: eK.Hm,
                        children: [
                            (0, l.jsx)("div", {
                                className: eK.SX,
                                children: t.libraryApplication.getBranchedName(t.application),
                            }),
                            null != e ? (0, l.jsx)("div", { className: eK.ME, children: v.gG4[e] }) : null,
                        ],
                    }),
                    (0, l.jsx)(em.D, {
                        className: eK.P5,
                        onClick: () => n(t.libraryApplication),
                        children: (0, l.jsx)(tG.P, { size: "md", color: "currentColor", className: eK.q_ }),
                    }),
                ],
            },
            t.key,
        );
    });
    return (0, l.jsxs)("div", {
        className: eK.z0,
        children: [
            (0, l.jsx)(eg.D, {
                variant: "heading-md/semibold",
                className: eK.Z9,
                children: L.intl.string(L.t["5PJtrH"]),
            }),
            i,
        ],
    });
}
class eX extends s.PureComponent {
    handleToggleShortcutDesktop(t) {
        eT.uB.updateSetting(t);
    }
    handleToggleShortcutStartMenu(t) {
        eT.Pf.updateSetting(t);
    }
    trackRestoreApplication(t, e) {
        U.default.track(v.HAw.APPLICATION_SETTINGS_UPDATED, { hidden_enabled: e, ...t.getAnalyticsData() });
    }
    handleRestoreHiddenLibraryApplication = (t) => {
        let e = eA.PQ(t.getFlags(), v.hM6.HIDDEN);
        (eN.V(t.id, t.branchId, e), this.trackRestoreApplication(t, eA.Lt(e, v.hM6.HIDDEN)));
    };
    renderBody() {
        let {
            hiddenLibraryApplicationViewItems: t,
            installShortcutDesktop: e,
            installShortcutStartMenu: n,
        } = this.props;
        return (0, l.jsxs)("div", {
            className: eK.rf,
            children: [
                (0, V.S)()
                    ? (0, l.jsxs)(ex.B, {
                          gap: 16,
                          children: [
                              (0, l.jsx)(ef.d, {
                                  label: L.intl.string(L.t["9ID+Kh"]),
                                  description: L.intl.string(L.t.vT61N0),
                                  checked: e,
                                  onChange: this.handleToggleShortcutDesktop,
                              }),
                              (0, l.jsx)(ey.c, {}),
                              (0, l.jsx)(ef.d, {
                                  label: L.intl.string(L.t.vNpUMz),
                                  description: L.intl.string(L.t.cpYp0H),
                                  checked: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                              }),
                              (0, l.jsx)(ey.c, {}),
                              (0, l.jsx)(eH, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(eF, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: t,
                }),
            ],
        });
    }
    render() {
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(K, { currentRoute: v.BVt.APPLICATION_LIBRARY_SETTINGS }),
                (0, l.jsx)(eI.Ar, { className: eK.XG, children: this.renderBody() }),
            ],
        });
    }
}
function ez() {
    let t = {
        installShortcutDesktop: eT.uB.useSetting(),
        installShortcutStartMenu: eT.Pf.useSetting(),
        hiddenLibraryApplicationViewItems: (0, y.bG)([P.A], () => P.A.hiddenLibraryApplicationViewItems),
    };
    return (0, l.jsx)(eX, { ...t });
}
var eW = n(481604);
function eY() {
    return (0, l.jsxs)(r.dO, {
        children: [
            (0, l.jsx)(o.A, {
                path: v.BVt.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, l.jsxs)(a.A, {
                    page: v.liQ.LIBRARY_SETTINGS,
                    root: !0,
                    children: [(0, l.jsx)(c.HI, { subsection: L.intl.string(L.t["3D5yo/"]) }), (0, l.jsx)(ez, {})],
                }),
            }),
            (0, l.jsx)(o.A, {
                path: v.BVt.APPLICATION_LIBRARY,
                children: (0, l.jsxs)(a.A, {
                    page: v.liQ.LIBRARY,
                    root: !0,
                    children: [(0, l.jsx)(c.HI, { subsection: L.intl.string(L.t.p7ARTB) }), (0, l.jsx)(ep, {})],
                }),
            }),
        ],
    });
}
let eJ = s.memo(function () {
    return (
        s.useEffect(() => {
            (0, d.d0)("application_library");
        }, []),
        (0, l.jsxs)("div", {
            className: eW.k,
            children: [(0, l.jsx)(c.HI, { location: L.intl.string(L.t.cw57ar) }), (0, l.jsx)(eY, {})],
        })
    );
});
