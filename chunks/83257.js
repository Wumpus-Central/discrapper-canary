n.d(t, { Ay: () => b, OZ: () => x, n3: () => g, pe: () => v }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(110259),
    l = n(397927),
    o = n(139286),
    a = n(726249),
    c = n(379848),
    d = n(631254),
    u = n(949302),
    h = n(203982),
    m = n(728458),
    p = n(820284),
    E = n(361739),
    S = n(652215),
    f = n(985018),
    A = n(776471);
let _ = Object.freeze({ shouldPreventNavigation: !1, onPreventNavigation: null, sidebarOpen: !0 }),
    g = 1.4,
    x = 15,
    v = 2;
function N(e) {
    let { section: t, setPreventNavigation: n, scrollerRef: s } = e;
    (0, o.A)({ type: r.ImpressionTypes.PANE, name: t?.impressionName, properties: t?.impressionProperties });
    let l = t?.element ?? S.FXj,
        a = t?.elementProps ?? {};
    return (0, i.jsx)(p.A, {
        section: t.section,
        children: (0, i.jsx)(l, { ...a, setPreventNavigation: n, refToScroller: s }),
    });
}
class C extends s.PureComponent {
    _unmounted = !1;
    _intensity = g;
    _subscribedStores = [];
    scrollerRef = s.createRef();
    state = {
        ..._,
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
            ? (h._.dispatch(S.jej.SHAKE_APP, { duration: 300, intensity: this._intensity }),
              (this._intensity = Math.min(this._intensity + v, x)),
              h._.dispatch(S.jej.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = g), !0);
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
                    this.setState({ ..._, sidebarOpen: !1 });
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
        this._unmounted || ((this._intensity = g), this.forceUpdate());
    };
    renderSettingsSectionTabBarItem = (e, t, n) => {
        let {
                section: s,
                label: r = null,
                ariaLabel: o,
                onClick: a,
                variant: c,
                icon: d,
                className: h,
                newIndicator: m,
                newIndicatorDismissibleContentTypes: p,
                badgeCount: E,
            } = e,
            _ = null;
        null != e.decoration
            ? (_ = (0, i.jsx)(l.Text, { variant: "text-md/normal", color: "text-muted", children: e.decoration }))
            : null != n && p?.includes(n) && !t
              ? (_ = m ?? (0, i.jsx)(l.LpS, { text: f.intl.string(f.t.y2b7CA) }))
              : null != d
                ? (_ = d)
                : null != E && E > 0 && (_ = (0, i.jsx)(l.hVq, { count: E }));
        let g =
            s === S.nc_.PREMIUM
                ? (0, i.jsx)(u.A, { label: r, isSelected: t, decoration: _ })
                : null == _
                  ? r
                  : (0, i.jsxs)("div", { className: A.l, children: [r, _] });
        return (0, i.jsx)(
            l.VQ0.Item,
            { variant: c, id: s, onClick: a, className: h, "aria-label": o ?? "", children: g },
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
                        s ? (0, i.jsx)("div", { className: A.O, children: (0, i.jsx)(d.A, {}) }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case E.Fq.HEADER:
                                    return (0, i.jsx)(l.VQ0.Header, { children: e.label }, t);
                                case E.Fq.DIVIDER:
                                    return (0, i.jsx)(l.VQ0.Separator, {}, t);
                                case E.Fq.CUSTOM:
                                    let n = e.element ?? S.FXj;
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
let b = C;
