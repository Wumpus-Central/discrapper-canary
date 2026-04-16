n.d(t, { Ay: () => C, OZ: () => f, n3: () => x, pe: () => N }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(110259),
    l = n(397927),
    o = n(139286),
    a = n(726249),
    c = n(379848),
    d = n(949302),
    u = n(203982),
    h = n(728458),
    m = n(820284),
    p = n(361739),
    E = n(652215),
    S = n(985018),
    _ = n(999026);
let g = Object.freeze({ shouldPreventNavigation: !1, onPreventNavigation: null, sidebarOpen: !0 }),
    x = 1.4,
    f = 15,
    N = 2;
function v(e) {
    let { section: t, setPreventNavigation: n, scrollerRef: s } = e;
    (0, o.A)({ type: r.ImpressionTypes.PANE, name: t?.impressionName, properties: t?.impressionProperties });
    let l = t?.element ?? E.FXj,
        a = t?.elementProps ?? {};
    return (0, i.jsx)(m.A, {
        section: t.section,
        children: (0, i.jsx)(l, { ...a, setPreventNavigation: n, refToScroller: s }),
    });
}
class A extends s.PureComponent {
    _unmounted = !1;
    _intensity = x;
    _subscribedStores = [];
    scrollerRef = s.createRef();
    state = {
        ...g,
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
            ? (u._.dispatch(E.jej.SHAKE_APP, { duration: 300, intensity: this._intensity }),
              (this._intensity = Math.min(this._intensity + N, f)),
              u._.dispatch(E.jej.EMPHASIZE_NOTICE),
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
                    this.setState({ ...g, sidebarOpen: !1 });
            };
        this.validNavigation() &&
            !i &&
            (r(), h.A.addBreadcrumb({ category: "settings", message: `Set section: ${e}` })),
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
                badgeCount: g,
            } = e,
            x = null;
        null != e.decoration
            ? (x = (0, i.jsx)(l.Text, { variant: "text-md/normal", color: "text-muted", children: e.decoration }))
            : null != n && p?.includes(n) && !t
              ? (x = m ?? (0, i.jsx)(l.LpS, { text: S.intl.string(S.t.y2b7CA) }))
              : null != u
                ? (x = u)
                : null != g && g > 0 && (x = (0, i.jsx)(l.hVq, { count: g }));
        let f =
            s === E.nc_.PREMIUM
                ? (0, i.jsx)(d.A, { label: r, isSelected: t, decoration: x })
                : null == x
                  ? r
                  : (0, i.jsxs)("div", { className: _.l, children: [r, x] });
        return (0, i.jsx)(
            l.VQ0.Item,
            { variant: c, id: s, onClick: a, className: h, "aria-label": o ?? "", children: f },
            s,
        );
    };
    renderSidebar(e) {
        let { section: t, title: n } = this.props,
            s = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            r = t ?? e[0].section;
        return (0, i.jsx)(c.Ay, {
            contentTypes: s,
            children: (t) => {
                let { visibleContent: s } = t;
                return (0, i.jsx)(l.VQ0, {
                    selectedItem: r,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": n,
                    children: e.map((e, t) => {
                        if (null != e.tabPredicate && !e.tabPredicate()) return null;
                        switch (e.section) {
                            case p.Fq.HEADER:
                                return (0, i.jsx)(l.VQ0.Header, { children: e.label }, t);
                            case p.Fq.DIVIDER:
                                return (0, i.jsx)(l.VQ0.Separator, {}, t);
                            case p.Fq.CUSTOM:
                                let n = e.element ?? E.FXj;
                                return (0, i.jsx)(n, {}, t);
                            default:
                                return this.renderSettingsSectionTabBarItem(e, r === e.section, s);
                        }
                    }),
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
                (0, i.jsx)(p.Ay, {
                    sidebarTheme: e,
                    scrollerRef: this.scrollerRef,
                    section: t,
                    sidebar: this.renderSidebar(l),
                    content: (0, i.jsx)(v, {
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
let C = A;
