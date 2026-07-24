i.d(t, { A: () => x }), i(321073);
var n = i(627968),
    s = i(64700),
    r = i(562708),
    l = i(834730),
    o = i(812993),
    a = i(761508),
    c = i(139286),
    d = i(726249),
    h = i(379848),
    u = i(659758),
    p = i(625494),
    b = i(38405),
    S = i(820284),
    m = i(361739),
    f = i(652215);
i(46121);
var g = i(375708),
    v = i(881066);
let j = Object.freeze({ shouldPreventNavigation: !1, onPreventNavigation: null, sidebarOpen: !0 });
function _(e) {
    let { section: t, setPreventNavigation: i, scrollerRef: s } = e;
    (0, c.A)({ type: r.ImpressionTypes.PANE, name: t?.impressionName, properties: t?.impressionProperties });
    let l = t?.element ?? f.FXj,
        o = t?.elementProps ?? {};
    return (0, n.jsx)(S.A, {
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
        sidebarOpen: this.props.section !== f.nc_.SUBSCRIPTIONS && this.props.section !== f.nc_.PROFILE_CUSTOMIZATION,
    };
    componentDidMount() {
        this.getPredicateSections().forEach((e) => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: i } = t;
            null != i &&
                i.forEach((e) => {
                    e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e);
                });
        });
    }
    componentDidUpdate(e) {
        let { section: t } = e;
        t !== this.props.section && (this._intensity = 1.4);
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
            ? (p._.dispatch(f.jej.SHAKE_APP, { duration: 300, intensity: this._intensity }),
              (this._intensity = Math.min(this._intensity + 2, 15)),
              p._.dispatch(f.jej.EMPHASIZE_NOTICE),
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
                null != s &&
                    s.forEach((e) => {
                        this._subscribedStores.includes(e) ||
                            (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                    }),
                    this.setState({ ...j, sidebarOpen: !1 });
            };
        this.validNavigation() &&
            !n &&
            (r(), b.A.addBreadcrumb({ category: "settings", message: `Set section: ${e}` })),
            n && null != s && s(r);
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
                ariaLabel: c,
                onClick: d,
                variant: h,
                icon: p,
                className: b,
                newIndicator: S,
                newIndicatorDismissibleContentTypes: m,
                badgeCount: j,
            } = e,
            _ = null;
        null != e.decoration
            ? (_ = (0, n.jsx)(l.E, { variant: "text-md/normal", color: "text-muted", children: e.decoration }))
            : null != i && m?.includes(i) && !t
              ? (_ = S ?? (0, n.jsx)(o.Lp, { text: g.intl.string(g.t.y2b7CA) }))
              : null != p
                ? (_ = p)
                : null != j && j > 0 && (_ = (0, n.jsx)(o.hV, { count: j }));
        let N =
                s === f.nc_.PREMIUM
                    ? (0, n.jsx)(u.A, { label: r, isSelected: t, decoration: _ })
                    : null == _
                      ? r
                      : (0, n.jsxs)("div", { className: v.l, children: [r, _] }),
            x = null != d && null == e.element;
        return (0, n.jsx)(
            a.V.Item,
            {
                variant: h,
                id: s,
                onClick: d,
                className: b,
                role: x ? "button" : "tab",
                "aria-label": c ?? "",
                children: N,
            },
            s,
        );
    };
    renderSidebar(e) {
        let { section: t, title: i } = this.props,
            s = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            r = t ?? e[0].section;
        return (0, n.jsx)(h.Ay, {
            contentTypes: s,
            children: (t) => {
                let { visibleContent: s } = t;
                return (0, n.jsx)(a.V, {
                    selectedItem: r,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": i,
                    children: e.map((e, t) => {
                        if (null != e.tabPredicate && !e.tabPredicate()) return null;
                        switch (e.section) {
                            case m.Fq.HEADER:
                                return (0, n.jsx)(a.V.Header, { children: e.label }, t);
                            case m.Fq.DIVIDER:
                                return (0, n.jsx)(a.V.Separator, {}, t);
                            case m.Fq.CUSTOM:
                                let i = e.element ?? f.FXj;
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
                (0, n.jsx)(d.HI, { location: i, subsection: a }),
                (0, n.jsx)(m.Ay, {
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
let x = N;
