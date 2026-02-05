"use strict";
n.d(t, { Ay: () => N, OZ: () => v, n3: () => I, pe: () => y }), n(321073);
var s = n(627968),
    i = n(64700),
    r = n(110259),
    l = n(827734),
    a = n(397927),
    o = n(139286),
    d = n(726249),
    h = n(379848),
    c = n(965304),
    u = n(632678),
    g = n(203982),
    p = n(728458),
    C = n(820284),
    f = n(361739),
    S = n(652215),
    A = n(985018),
    m = n(39965);
let E = Object.freeze({ shouldPreventNavigation: !1, onPreventNavigation: null, sidebarOpen: !0 }),
    I = 1.4,
    v = 15,
    y = 2;
function _(e) {
    let { section: t, setPreventNavigation: n, scrollerRef: i } = e;
    (0, o.A)({ type: r.ImpressionTypes.PANE, name: t?.impressionName, properties: t?.impressionProperties });
    let l = t?.element ?? S.FXj,
        a = t?.elementProps ?? {};
    return (0, s.jsx)(C.A, {
        section: t.section,
        children: (0, s.jsx)(l, { ...a, setPreventNavigation: n, refToScroller: i }),
    });
}
class b extends i.PureComponent {
    _unmounted = !1;
    _intensity = I;
    _subscribedStores = [];
    scrollerRef = i.createRef();
    state = {
        ...E,
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
        t !== this.props.section && (this._intensity = I);
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
            ? (g._.dispatch(S.jej.SHAKE_APP, { duration: 300, intensity: this._intensity }),
              (this._intensity = Math.min(this._intensity + y, v)),
              g._.dispatch(S.jej.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = I), !0);
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
                    this.setState({ ...E, sidebarOpen: !1 });
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
        this._unmounted || ((this._intensity = I), this.forceUpdate());
    };
    renderSettingsSectionTabBarItem = (e, t, n) => {
        let {
                section: i,
                label: r = null,
                ariaLabel: o,
                onClick: d,
                variant: h,
                icon: u,
                className: g,
                newIndicator: p,
                newIndicatorDismissibleContentTypes: C,
                badgeCount: f,
            } = e,
            E = null;
        i === S.nc_.ACCOUNT && this.props.isEligibleForPomelo
            ? (E = (0, s.jsx)(a.EpV, { size: "custom", width: 20, height: 20, color: l.A.colors.STATUS_WARNING.css }))
            : null != e.decoration
              ? (E = (0, s.jsx)(a.Text, { variant: "text-md/normal", color: "text-muted", children: e.decoration }))
              : null != n && C?.includes(n) && !t
                ? (E = p ?? (0, s.jsx)(a.LpS, { text: A.intl.string(A.t.y2b7CA) }))
                : null != u
                  ? (E = u)
                  : null != f && f > 0 && (E = (0, s.jsx)(a.hVq, { count: f }));
        let I =
            i === S.nc_.PREMIUM
                ? (0, s.jsx)(c.A, { label: r, isSelected: t, decoration: E })
                : null == E
                  ? r
                  : (0, s.jsxs)("div", { className: m.l, children: [r, E] });
        return (0, s.jsx)(
            a.VQ0.Item,
            { variant: h, id: i, onClick: d, className: g, "aria-label": o ?? "", children: I },
            i,
        );
    };
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: i } = this.props,
            r = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            l = t ?? e[0].section;
        return (0, s.jsx)(h.Ay, {
            contentTypes: r,
            children: (t) => {
                let { visibleContent: r } = t;
                return (0, s.jsxs)(a.VQ0, {
                    selectedItem: l,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": n,
                    children: [
                        i ? (0, s.jsx)("div", { className: m.O, children: (0, s.jsx)(u.A, {}) }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case f.Fq.HEADER:
                                    return (0, s.jsx)(a.VQ0.Header, { children: e.label }, t);
                                case f.Fq.DIVIDER:
                                    return (0, s.jsx)(a.VQ0.Separator, {}, t);
                                case f.Fq.CUSTOM:
                                    let n = e.element ?? S.FXj;
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
            a = l.find((e) => e.section === t);
        if (null == a || null == t) return null;
        let o = ("string" == typeof a.label ? a.label : a.ariaLabel) ?? n;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(d.HI, { location: n, subsection: o }),
                (0, s.jsx)(f.Ay, {
                    sidebarTheme: e,
                    scrollerRef: this.scrollerRef,
                    section: t,
                    sidebar: this.renderSidebar(l),
                    content: (0, s.jsx)(_, {
                        section: a,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef,
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: r,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: a.type,
                    notice: this.renderNotice(a),
                    closeAction: null != i ? this.handleClose : void 0,
                }),
            ],
        });
    }
}
let N = b;
