n.d(t, { Ay: () => C, OZ: () => N, n3: () => v, pe: () => A }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(110259),
    l = n(834730),
    o = n(777666),
    a = n(761508),
    c = n(139286),
    d = n(726249),
    u = n(379848),
    h = n(949302),
    m = n(625494),
    p = n(38405),
    x = n(820284),
    b = n(361739),
    S = n(652215),
    f = n(985018),
    g = n(999026);
let j = Object.freeze({ shouldPreventNavigation: !1, onPreventNavigation: null, sidebarOpen: !0 }),
    v = 1.4,
    N = 15,
    A = 2;
function _(e) {
    let { section: t, setPreventNavigation: n, scrollerRef: s } = e;
    (0, c.A)({ type: r.ImpressionTypes.PANE, name: t?.impressionName, properties: t?.impressionProperties });
    let l = t?.element ?? S.FXj,
        o = t?.elementProps ?? {};
    return (0, i.jsx)(x.A, {
        section: t.section,
        children: (0, i.jsx)(l, { ...o, setPreventNavigation: n, refToScroller: s }),
    });
}
class T extends s.PureComponent {
    _unmounted = !1;
    _intensity = v;
    _subscribedStores = [];
    scrollerRef = s.createRef();
    state = {
        ...j,
        sidebarOpen: this.props.section !== S.nc_.SUBSCRIPTIONS && this.props.section !== S.nc_.PROFILE_CUSTOMIZATION,
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
        t !== this.props.section && (this._intensity = v);
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
            ? (m._.dispatch(S.jej.SHAKE_APP, { duration: 300, intensity: this._intensity }),
              (this._intensity = Math.min(this._intensity + A, N)),
              m._.dispatch(S.jej.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = v), !0);
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
                    this.setState({ ...j, sidebarOpen: !1 });
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
        this._unmounted || ((this._intensity = v), this.forceUpdate());
    };
    renderSettingsSectionTabBarItem = (e, t, n) => {
        let {
                section: s,
                label: r = null,
                ariaLabel: c,
                onClick: d,
                variant: u,
                icon: m,
                className: p,
                newIndicator: x,
                newIndicatorDismissibleContentTypes: b,
                badgeCount: j,
            } = e,
            v = null;
        null != e.decoration
            ? (v = (0, i.jsx)(l.E, { variant: "text-md/normal", color: "text-muted", children: e.decoration }))
            : null != n && b?.includes(n) && !t
              ? (v = x ?? (0, i.jsx)(o.Lp, { text: f.intl.string(f.t.y2b7CA) }))
              : null != m
                ? (v = m)
                : null != j && j > 0 && (v = (0, i.jsx)(o.hV, { count: j }));
        let N =
            s === S.nc_.PREMIUM
                ? (0, i.jsx)(h.A, { label: r, isSelected: t, decoration: v })
                : null == v
                  ? r
                  : (0, i.jsxs)("div", { className: g.l, children: [r, v] });
        return (0, i.jsx)(
            a.V.Item,
            { variant: u, id: s, onClick: d, className: p, "aria-label": c ?? "", children: N },
            s,
        );
    };
    renderSidebar(e) {
        let { section: t, title: n } = this.props,
            s = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            r = t ?? e[0].section;
        return (0, i.jsx)(u.Ay, {
            contentTypes: s,
            children: (t) => {
                let { visibleContent: s } = t;
                return (0, i.jsx)(a.V, {
                    selectedItem: r,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": n,
                    children: e.map((e, t) => {
                        if (null != e.tabPredicate && !e.tabPredicate()) return null;
                        switch (e.section) {
                            case b.Fq.HEADER:
                                return (0, i.jsx)(a.V.Header, { children: e.label }, t);
                            case b.Fq.DIVIDER:
                                return (0, i.jsx)(a.V.Separator, {}, t);
                            case b.Fq.CUSTOM:
                                let n = e.element ?? S.FXj;
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
        let a = ("string" == typeof o.label ? o.label : o.ariaLabel) ?? n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(d.HI, { location: n, subsection: a }),
                (0, i.jsx)(b.Ay, {
                    sidebarTheme: e,
                    scrollerRef: this.scrollerRef,
                    section: t,
                    sidebar: this.renderSidebar(l),
                    content: (0, i.jsx)(_, {
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
let C = T;
