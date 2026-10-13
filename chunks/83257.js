(i.d(t, { A: () => y }), i(321073));
var n = i(477900),
    s = i(582128),
    r = i(562708),
    l = i(834730),
    o = i(62010),
    a = i(812993),
    c = i(761508),
    d = i(139286),
    h = i(726249),
    u = i(379848),
    p = i(659758),
    b = i(625494),
    S = i(38405),
    m = i(820284),
    f = i(361739),
    v = i(652215);
i(46121);
var g = i(689659);
let j = Object.freeze({ shouldPreventNavigation: !1, onPreventNavigation: null, sidebarOpen: !0 });
function _(e) {
    let { section: t, setPreventNavigation: i, scrollerRef: s } = e;
    (0, d.A)({ type: r.ImpressionTypes.PANE, name: t?.impressionName, properties: t?.impressionProperties });
    let l = t?.element ?? v.FXj,
        o = t?.elementProps ?? {};
    return (0, n.jsx)(m.A, {
        section: t.section,
        children: (0, n.jsx)(l, { ...o, setPreventNavigation: i, refToScroller: s }),
    });
}
class N extends s.PureComponent {
    _unmounted = !1;
    _intensity = 1.4;
    _subscribedStores = [];
    scrollerRef = s.createRef();
    state = {
        ...j,
        sidebarOpen: this.props.section !== v.nc_.SUBSCRIPTIONS && this.props.section !== v.nc_.PROFILE_CUSTOMIZATION,
    };
    componentDidMount() {
        this.getPredicateSections().forEach((e) => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: i } = t;
            null != i &&
                i.forEach((e) => {
                    (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                });
        });
    }
    componentDidUpdate(e) {
        let { section: t } = e;
        t !== this.props.section && (this._intensity = 1.4);
    }
    componentWillUnmount() {
        ((this._unmounted = !0),
            this._subscribedStores.forEach((e) => e.removeChangeListener(this.handleNoticeStoreUpdate)),
            this.props.sections.forEach((e) => e.onSettingsClose?.()));
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
            ? (b._.dispatch(v.jej.SHAKE_APP, { duration: 300, intensity: this._intensity }),
              (this._intensity = Math.min(this._intensity + 2, 15)),
              b._.dispatch(v.jej.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = 1.4), !0);
    }
    handleSetSection = (e) => {
        let { onSetSection: t, sections: i } = this.props,
            { shouldPreventNavigation: n, onPreventNavigation: s } = this.state,
            r = () => {
                t?.(e);
                let { notice: n } = i.find((t) => e === t.section) ?? {},
                    s = null != n ? n.stores : null;
                (null != s &&
                    s.forEach((e) => {
                        this._subscribedStores.includes(e) ||
                            (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                    }),
                    this.setState({ ...j, sidebarOpen: !1 }));
            };
        (this.validNavigation() &&
            !n &&
            (r(), S.A.addBreadcrumb({ category: "settings", message: `Set section: ${e}` })),
            n && null != s && s(r));
    };
    handleClose = () => {
        if (this.validNavigation()) {
            let { onClose: e } = this.props;
            e?.();
        }
    };
    handleNoticeStoreUpdate = () => {
        this._unmounted || ((this._intensity = 1.4), this.forceUpdate());
    };
    renderSettingsSectionTabBarItem = (e, t, i) => {
        let {
                section: s,
                label: r = null,
                ariaLabel: d,
                onClick: h,
                variant: u,
                icon: b,
                className: S,
                newIndicator: m,
                newIndicatorDismissibleContentTypes: f,
                badgeCount: j,
            } = e,
            _ = null;
        null != e.decoration
            ? (_ = (0, n.jsx)(l.E, { variant: "text-md/normal", color: "text-muted", children: e.decoration }))
            : null != i && f?.includes(i) && !t
              ? (_ = m ?? (0, n.jsx)(o.E, { type: "new", variant: "primary" }))
              : null != b
                ? (_ = b)
                : null != j && j > 0 && (_ = (0, n.jsx)(a.hV, { count: j }));
        let N =
                s === v.nc_.PREMIUM
                    ? (0, n.jsx)(p.A, { label: r, isSelected: t, decoration: _ })
                    : null == _
                      ? r
                      : (0, n.jsxs)("div", { className: g.l, children: [r, _] }),
            y = null != h && null == e.element;
        return (0, n.jsx)(
            c.V.Item,
            {
                variant: u,
                id: s,
                onClick: h,
                className: S,
                role: y ? "button" : "tab",
                "aria-label": d ?? "",
                children: N,
            },
            s,
        );
    };
    renderSidebar(e) {
        let { section: t, title: i } = this.props,
            s = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            r = t ?? e[0].section;
        return (0, n.jsx)(u.Ay, {
            contentTypes: s,
            children: (t) => {
                let { visibleContent: s } = t;
                return (0, n.jsx)(c.V, {
                    selectedItem: r,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": i,
                    children: e.map((e, t) => {
                        if (null != e.tabPredicate && !e.tabPredicate()) return null;
                        switch (e.section) {
                            case f.Fq.HEADER:
                                return (0, n.jsx)(c.V.Header, { children: e.label }, t);
                            case f.Fq.DIVIDER:
                                return (0, n.jsx)(c.V.Separator, {}, t);
                            case f.Fq.CUSTOM:
                                let i = e.element ?? v.FXj;
                                return (0, n.jsx)(i, {}, t);
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
        let { stores: i, element: s } = e.notice;
        return null == i || i.some((e) => e.showNotice()) ? (0, n.jsx)(s, { theme: t }) : null;
    }
    render() {
        let { sidebarTheme: e, section: t, title: i, onClose: s, hideSidebar: r } = this.props,
            l = this.getPredicateSections(),
            o = l.find((e) => e.section === t);
        if (null == o || null == t) return null;
        let a = ("string" == typeof o.label ? o.label : o.ariaLabel) ?? i;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(h.HI, { location: i, subsection: a }),
                (0, n.jsx)(f.Ay, {
                    sidebarTheme: e,
                    scrollerRef: this.scrollerRef,
                    section: t,
                    sidebar: this.renderSidebar(l),
                    content: (0, n.jsx)(_, {
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
let y = N;
