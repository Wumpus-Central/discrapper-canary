n.d(t, { Ay: () => j, OZ: () => _, n3: () => A, pe: () => C }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(110259),
    l = n(827734),
    o = n(397927),
    a = n(139286),
    c = n(726249),
    d = n(379848),
    u = n(965304),
    h = n(632678),
    m = n(203982),
    p = n(728458),
    S = n(820284),
    E = n(361739),
    f = n(652215),
    g = n(985018),
    x = n(39965);
let v = Object.freeze({ shouldPreventNavigation: !1, onPreventNavigation: null, sidebarOpen: !0 }),
    A = 1.4,
    _ = 15,
    C = 2;
function N(e) {
    let { section: t, setPreventNavigation: n, scrollerRef: s } = e;
    (0, a.A)({ type: r.ImpressionTypes.PANE, name: t?.impressionName, properties: t?.impressionProperties });
    let l = t?.element ?? f.FXj,
        o = t?.elementProps ?? {};
    return (0, i.jsx)(S.A, {
        section: t.section,
        children: (0, i.jsx)(l, { ...o, setPreventNavigation: n, refToScroller: s }),
    });
}
class b extends s.PureComponent {
    _unmounted = !1;
    _intensity = A;
    _subscribedStores = [];
    scrollerRef = s.createRef();
    state = {
        ...v,
        sidebarOpen: this.props.section !== f.nc_.SUBSCRIPTIONS && this.props.section !== f.nc_.PROFILE_CUSTOMIZATION,
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
        t !== this.props.section && (this._intensity = A);
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
            ? (m._.dispatch(f.jej.SHAKE_APP, { duration: 300, intensity: this._intensity }),
              (this._intensity = Math.min(this._intensity + C, _)),
              m._.dispatch(f.jej.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = A), !0);
    }
    handleSetSection = (e) => {
        let { onSetSection: t, sections: n } = this.props,
            { shouldPreventNavigation: i, onPreventNavigation: s } = this.state,
            r = () => {
                t?.(e);
                let { notice: i } = n.find((t) => e === t.section) ?? {},
                    s = null != i ? i.stores : null;
                null != s &&
                    s.forEach((e) => {
                        this._subscribedStores.includes(e) ||
                            (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                    }),
                    this.setState({ ...v, sidebarOpen: !1 });
            };
        this.validNavigation() &&
            !i &&
            (r(), p.A.addBreadcrumb({ category: "settings", message: `Set section: ${e}` })),
            i && null != s && s(r);
    };
    handleClose = () => {
        if (this.validNavigation()) {
            let { onClose: e } = this.props;
            e?.();
        }
    };
    handleNoticeStoreUpdate = () => {
        this._unmounted || ((this._intensity = A), this.forceUpdate());
    };
    renderSettingsSectionTabBarItem = (e, t, n) => {
        let {
                section: s,
                label: r = null,
                ariaLabel: a,
                onClick: c,
                variant: d,
                icon: h,
                className: m,
                newIndicator: p,
                newIndicatorDismissibleContentTypes: S,
                badgeCount: E,
            } = e,
            v = null;
        s === f.nc_.ACCOUNT && this.props.isEligibleForPomelo
            ? (v = (0, i.jsx)(o.EpV, { size: "custom", width: 20, height: 20, color: l.A.colors.STATUS_WARNING.css }))
            : null != e.decoration
              ? (v = (0, i.jsx)(o.Text, { variant: "text-md/normal", color: "text-muted", children: e.decoration }))
              : null != n && S?.includes(n) && !t
                ? (v = p ?? (0, i.jsx)(o.LpS, { text: g.intl.string(g.t.y2b7CA) }))
                : null != h
                  ? (v = h)
                  : null != E && E > 0 && (v = (0, i.jsx)(o.hVq, { count: E }));
        let A =
            s === f.nc_.PREMIUM
                ? (0, i.jsx)(u.A, { label: r, isSelected: t, decoration: v })
                : null == v
                  ? r
                  : (0, i.jsxs)("div", { className: x.l, children: [r, v] });
        return (0, i.jsx)(
            o.VQ0.Item,
            { variant: d, id: s, onClick: c, className: m, "aria-label": a ?? "", children: A },
            s,
        );
    };
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: s } = this.props,
            r = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            l = t ?? e[0].section;
        return (0, i.jsx)(d.Ay, {
            contentTypes: r,
            children: (t) => {
                let { visibleContent: r } = t;
                return (0, i.jsxs)(o.VQ0, {
                    selectedItem: l,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": n,
                    children: [
                        s ? (0, i.jsx)("div", { className: x.O, children: (0, i.jsx)(h.A, {}) }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case E.Fq.HEADER:
                                    return (0, i.jsx)(o.VQ0.Header, { children: e.label }, t);
                                case E.Fq.DIVIDER:
                                    return (0, i.jsx)(o.VQ0.Separator, {}, t);
                                case E.Fq.CUSTOM:
                                    let n = e.element ?? f.FXj;
                                    return (0, i.jsx)(n, {}, t);
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
        let { stores: n, element: s } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, i.jsx)(s, { theme: t }) : null;
    }
    render() {
        let { sidebarTheme: e, section: t, title: n, onClose: s, hideSidebar: r } = this.props,
            l = this.getPredicateSections(),
            o = l.find((e) => e.section === t);
        if (null == o || null == t) return null;
        let a = ("string" == typeof o.label ? o.label : o.ariaLabel) ?? n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.HI, { location: n, subsection: a }),
                (0, i.jsx)(E.Ay, {
                    sidebarTheme: e,
                    scrollerRef: this.scrollerRef,
                    section: t,
                    sidebar: this.renderSidebar(l),
                    content: (0, i.jsx)(N, {
                        section: o,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef,
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: r,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: o.type,
                    notice: this.renderNotice(o),
                    closeAction: null != s ? this.handleClose : void 0,
                }),
            ],
        });
    }
}
let j = b;
