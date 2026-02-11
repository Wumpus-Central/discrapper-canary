n.d(t, { Ay: () => T, OZ: () => I, n3: () => g, pe: () => b }), n(321073);
var s = n(627968),
    i = n(64700),
    r = n(110259),
    l = n(827734),
    o = n(397927),
    a = n(139286),
    c = n(726249),
    d = n(379848),
    u = n(965304),
    h = n(632678),
    _ = n(203982),
    p = n(728458),
    S = n(820284),
    m = n(361739),
    E = n(652215),
    A = n(985018),
    f = n(873319);
let N = Object.freeze({ shouldPreventNavigation: !1, onPreventNavigation: null, sidebarOpen: !0 }),
    g = 1.4,
    I = 15,
    b = 2;
function v(e) {
    let { section: t, setPreventNavigation: n, scrollerRef: i } = e;
    (0, a.A)({ type: r.ImpressionTypes.PANE, name: t?.impressionName, properties: t?.impressionProperties });
    let l = t?.element ?? E.FXj,
        o = t?.elementProps ?? {};
    return (0, s.jsx)(S.A, {
        section: t.section,
        children: (0, s.jsx)(l, { ...o, setPreventNavigation: n, refToScroller: i }),
    });
}
class x extends i.PureComponent {
    _unmounted = !1;
    _intensity = g;
    _subscribedStores = [];
    scrollerRef = i.createRef();
    state = {
        ...N,
        sidebarOpen: this.props.section !== E.nc_.SUBSCRIPTIONS && this.props.section !== E.nc_.PROFILE_CUSTOMIZATION,
    };
    componentDidMount() {
        this.getPredicateSections().forEach((e) => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: n } = t;
            null != n &&
                n.forEach((e) => {
                    e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e);
                });
        });
    }
    componentDidUpdate(e) {
        let { section: t } = e;
        t !== this.props.section && (this._intensity = g);
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            this._subscribedStores.forEach((e) => e.removeChangeListener(this.handleNoticeStoreUpdate)),
            this.props.sections.forEach((e) => e.onSettingsClose?.());
    }
    setPreventNavigation = (e, t) => {
        this.setState({ shouldPreventNavigation: e, onPreventNavigation: t });
    };
    getPredicateSections() {
        return this.props.sections.filter((e) => null == e.predicate || e.predicate());
    }
    validNavigation() {
        let { section: e } = this.props,
            { notice: t } = this.getPredicateSections().find((t) => e === t.section) ?? {};
        return null != t && t.stores.some((e) => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly()))
            ? (_._.dispatch(E.jej.SHAKE_APP, { duration: 300, intensity: this._intensity }),
              (this._intensity = Math.min(this._intensity + b, I)),
              _._.dispatch(E.jej.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = g), !0);
    }
    handleSetSection = (e) => {
        let { onSetSection: t, sections: n } = this.props,
            { shouldPreventNavigation: s, onPreventNavigation: i } = this.state,
            r = () => {
                t?.(e);
                let { notice: s } = n.find((t) => e === t.section) ?? {},
                    i = null != s ? s.stores : null;
                null != i &&
                    i.forEach((e) => {
                        this._subscribedStores.includes(e) ||
                            (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                    }),
                    this.setState({ ...N, sidebarOpen: !1 });
            };
        this.validNavigation() &&
            !s &&
            (r(), p.A.addBreadcrumb({ category: "settings", message: `Set section: ${e}` })),
            s && null != i && i(r);
    };
    handleClose = () => {
        if (this.validNavigation()) {
            let { onClose: e } = this.props;
            e?.();
        }
    };
    handleNoticeStoreUpdate = () => {
        this._unmounted || ((this._intensity = g), this.forceUpdate());
    };
    renderSettingsSectionTabBarItem = (e, t, n) => {
        let {
                section: i,
                label: r = null,
                ariaLabel: a,
                onClick: c,
                variant: d,
                icon: h,
                className: _,
                newIndicator: p,
                newIndicatorDismissibleContentTypes: S,
                badgeCount: m,
            } = e,
            N = null;
        i === E.nc_.ACCOUNT && this.props.isEligibleForPomelo
            ? (N = (0, s.jsx)(o.EpV, { size: "custom", width: 20, height: 20, color: l.A.colors.STATUS_WARNING.css }))
            : null != e.decoration
              ? (N = (0, s.jsx)(o.Text, { variant: "text-md/normal", color: "text-muted", children: e.decoration }))
              : null != n && S?.includes(n) && !t
                ? (N = p ?? (0, s.jsx)(o.LpS, { text: A.intl.string(A.t.y2b7CA) }))
                : null != h
                  ? (N = h)
                  : null != m && m > 0 && (N = (0, s.jsx)(o.hVq, { count: m }));
        let g =
            i === E.nc_.PREMIUM
                ? (0, s.jsx)(u.A, { label: r, isSelected: t, decoration: N })
                : null == N
                  ? r
                  : (0, s.jsxs)("div", { className: f.l, children: [r, N] });
        return (0, s.jsx)(
            o.VQ0.Item,
            { variant: d, id: i, onClick: c, className: _, "aria-label": a ?? "", children: g },
            i,
        );
    };
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: i } = this.props,
            r = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            l = t ?? e[0].section;
        return (0, s.jsx)(d.Ay, {
            contentTypes: r,
            children: (t) => {
                let { visibleContent: r } = t;
                return (0, s.jsxs)(o.VQ0, {
                    selectedItem: l,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": n,
                    children: [
                        i ? (0, s.jsx)("div", { className: f.O, children: (0, s.jsx)(h.A, {}) }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case m.Fq.HEADER:
                                    return (0, s.jsx)(o.VQ0.Header, { children: e.label }, t);
                                case m.Fq.DIVIDER:
                                    return (0, s.jsx)(o.VQ0.Separator, {}, t);
                                case m.Fq.CUSTOM:
                                    let n = e.element ?? E.FXj;
                                    return (0, s.jsx)(n, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, l === e.section, r);
                            }
                        }),
                    ],
                });
            },
        });
    }
    renderNotice(e) {
        let { theme: t } = this.props;
        if (null == e || null == e.notice) return null;
        let { stores: n, element: i } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, s.jsx)(i, { theme: t }) : null;
    }
    render() {
        let { sidebarTheme: e, section: t, title: n, onClose: i, hideSidebar: r } = this.props,
            l = this.getPredicateSections(),
            o = l.find((e) => e.section === t);
        if (null == o || null == t) return null;
        let a = ("string" == typeof o.label ? o.label : o.ariaLabel) ?? n;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(c.HI, { location: n, subsection: a }),
                (0, s.jsx)(m.Ay, {
                    sidebarTheme: e,
                    scrollerRef: this.scrollerRef,
                    section: t,
                    sidebar: this.renderSidebar(l),
                    content: (0, s.jsx)(v, {
                        section: o,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef,
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: r,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: o.type,
                    notice: this.renderNotice(o),
                    closeAction: null != i ? this.handleClose : void 0,
                }),
            ],
        });
    }
}
let T = x;
