n.d(t, { Ay: () => N, OZ: () => A, n3: () => x, pe: () => _ }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(110259),
    l = n(397927),
    o = n(139286),
    a = n(726249),
    c = n(379848),
    d = n(965304),
    u = n(632678),
    h = n(203982),
    m = n(728458),
    p = n(820284),
    S = n(361739),
    E = n(652215),
    f = n(985018),
    g = n(52130);
let v = Object.freeze({ shouldPreventNavigation: !1, onPreventNavigation: null, sidebarOpen: !0 }),
    x = 1.4,
    A = 15,
    _ = 2;
function C(e) {
    let { section: t, setPreventNavigation: n, scrollerRef: s } = e;
    (0, o.A)({ type: r.ImpressionTypes.PANE, name: t?.impressionName, properties: t?.impressionProperties });
    let l = t?.element ?? E.FXj,
        a = t?.elementProps ?? {};
    return (0, i.jsx)(p.A, {
        section: t.section,
        children: (0, i.jsx)(l, { ...a, setPreventNavigation: n, refToScroller: s }),
    });
}
class b extends s.PureComponent {
    _unmounted = !1;
    _intensity = x;
    _subscribedStores = [];
    scrollerRef = s.createRef();
    state = {
        ...v,
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
        t !== this.props.section && (this._intensity = x);
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
            ? (h._.dispatch(E.jej.SHAKE_APP, { duration: 300, intensity: this._intensity }),
              (this._intensity = Math.min(this._intensity + _, A)),
              h._.dispatch(E.jej.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = x), !0);
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
            (r(), m.A.addBreadcrumb({ category: "settings", message: `Set section: ${e}` })),
            i && null != s && s(r);
    };
    handleClose = () => {
        if (this.validNavigation()) {
            let { onClose: e } = this.props;
            e?.();
        }
    };
    handleNoticeStoreUpdate = () => {
        this._unmounted || ((this._intensity = x), this.forceUpdate());
    };
    renderSettingsSectionTabBarItem = (e, t, n) => {
        let {
                section: s,
                label: r = null,
                ariaLabel: o,
                onClick: a,
                variant: c,
                icon: u,
                className: h,
                newIndicator: m,
                newIndicatorDismissibleContentTypes: p,
                badgeCount: S,
            } = e,
            v = null;
        null != e.decoration
            ? (v = (0, i.jsx)(l.Text, { variant: "text-md/normal", color: "text-muted", children: e.decoration }))
            : null != n && p?.includes(n) && !t
              ? (v = m ?? (0, i.jsx)(l.LpS, { text: f.intl.string(f.t.y2b7CA) }))
              : null != u
                ? (v = u)
                : null != S && S > 0 && (v = (0, i.jsx)(l.hVq, { count: S }));
        let x =
            s === E.nc_.PREMIUM
                ? (0, i.jsx)(d.A, { label: r, isSelected: t, decoration: v })
                : null == v
                  ? r
                  : (0, i.jsxs)("div", { className: g.l, children: [r, v] });
        return (0, i.jsx)(
            l.VQ0.Item,
            { variant: c, id: s, onClick: a, className: h, "aria-label": o ?? "", children: x },
            s,
        );
    };
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: s } = this.props,
            r = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            o = t ?? e[0].section;
        return (0, i.jsx)(c.Ay, {
            contentTypes: r,
            children: (t) => {
                let { visibleContent: r } = t;
                return (0, i.jsxs)(l.VQ0, {
                    selectedItem: o,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": n,
                    children: [
                        s ? (0, i.jsx)("div", { className: g.O, children: (0, i.jsx)(u.A, {}) }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case S.Fq.HEADER:
                                    return (0, i.jsx)(l.VQ0.Header, { children: e.label }, t);
                                case S.Fq.DIVIDER:
                                    return (0, i.jsx)(l.VQ0.Separator, {}, t);
                                case S.Fq.CUSTOM:
                                    let n = e.element ?? E.FXj;
                                    return (0, i.jsx)(n, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, o === e.section, r);
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
        let c = ("string" == typeof o.label ? o.label : o.ariaLabel) ?? n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.HI, { location: n, subsection: c }),
                (0, i.jsx)(S.Ay, {
                    sidebarTheme: e,
                    scrollerRef: this.scrollerRef,
                    section: t,
                    sidebar: this.renderSidebar(l),
                    content: (0, i.jsx)(C, {
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
let N = b;
