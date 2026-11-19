s(321073);
var i = s(477900),
    n = s(582128),
    r = s(613412),
    l = s(834730),
    a = s(805251),
    o = s(812993),
    c = s(761508),
    d = s(139286),
    h = s(726249),
    u = s(379848),
    p = s(659758),
    m = s(188567),
    b = s(856383),
    S = s(820284),
    f = s(361739),
    j = s(652215);
s(46121);
var v = s(689659);
let g = Object.freeze({ shouldPreventNavigation: !1, onPreventNavigation: null, sidebarOpen: !0 });
function N(e) {
    let { section: t, setPreventNavigation: s, scrollerRef: n } = e;
    (0, d.A)({ type: r.ImpressionTypes.PANE, name: t?.impressionName, properties: t?.impressionProperties });
    let l = t?.element ?? j.FXj,
        a = t?.elementProps ?? {};
    return (0, i.jsx)(S.A, {
        section: t.section,
        children: (0, i.jsx)(l, { ...a, setPreventNavigation: s, refToScroller: n }),
    });
}
class _ extends n.PureComponent {
    _unmounted = !1;
    _intensity = 1.4;
    _subscribedStores = [];
    scrollerRef = n.createRef();
    state = {
        ...g,
        sidebarOpen: this.props.section !== j.nc_.SUBSCRIPTIONS && this.props.section !== j.nc_.PROFILE_CUSTOMIZATION,
    };
    componentDidMount() {
        this.getPredicateSections().forEach((e) => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: s } = t;
            null != s &&
                s.forEach((e) => {
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
            ? (m._.dispatch(j.jej.SHAKE_APP, { duration: 300, intensity: this._intensity }),
              (this._intensity = Math.min(this._intensity + 2, 15)),
              m._.dispatch(j.jej.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = 1.4), !0);
    }
    handleSetSection = (e) => {
        let { onSetSection: t, sections: s } = this.props,
            { shouldPreventNavigation: i, onPreventNavigation: n } = this.state,
            r = () => {
                t?.(e);
                let { notice: i } = s.find((t) => e === t.section) ?? {},
                    n = null != i ? i.stores : null;
                (null != n &&
                    n.forEach((e) => {
                        this._subscribedStores.includes(e) ||
                            (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                    }),
                    this.setState({ ...g, sidebarOpen: !1 }));
            };
        (this.validNavigation() &&
            !i &&
            (r(), b.A.addBreadcrumb({ category: "settings", message: `Set section: ${e}` })),
            i && null != n && n(r));
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
    renderSettingsSectionTabBarItem = (e, t, s) => {
        let {
                section: n,
                label: r = null,
                ariaLabel: d,
                onClick: h,
                variant: u,
                icon: m,
                leadingIcon: b,
                className: S,
                newIndicator: f,
                newIndicatorDismissibleContentTypes: g,
                badgeCount: N,
            } = e,
            _ = null;
        null != e.decoration
            ? (_ = (0, i.jsx)(l.E, { variant: "body-md/normal", color: "text-muted", children: e.decoration }))
            : null != s && g?.includes(s) && !t
              ? (_ = f ?? (0, i.jsx)(a.E, { type: "new", variant: "primary" }))
              : null != m
                ? (_ = m)
                : null != N && N > 0 && (_ = (0, i.jsx)(o.hV, { count: N }));
        let y = null != b ? (0, i.jsx)("span", { className: v.qP, children: r }) : r,
            x =
                n === j.nc_.PREMIUM
                    ? (0, i.jsx)(p.A, { label: r, isSelected: t, decoration: _ })
                    : null == _
                      ? y
                      : (0, i.jsxs)("div", { className: v.l8, children: [y, _] }),
            P =
                null != b
                    ? (0, i.jsxs)("div", {
                          className: v.y0,
                          children: [
                              (0, i.jsx)(b, {
                                  size: "refresh_sm",
                                  color: "currentColor",
                                  className: v.iE,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: v.I1, children: x }),
                          ],
                      })
                    : x,
            E = null != h && null == e.element;
        return (0, i.jsx)(
            c.V.Item,
            {
                variant: u,
                id: n,
                onClick: h,
                className: S,
                role: E ? "button" : "tab",
                "aria-label": d ?? ("string" == typeof r ? r : ""),
                children: P,
            },
            n,
        );
    };
    renderSidebar(e) {
        let { section: t, title: s } = this.props,
            n = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            r = t ?? e[0].section;
        return (0, i.jsx)(u.Ay, {
            contentTypes: n,
            children: (t) => {
                let { visibleContent: n } = t;
                return (0, i.jsx)(c.V, {
                    selectedItem: r,
                    onItemSelect: this.handleSetSection,
                    orientation: "vertical",
                    "aria-label": s,
                    children: e.map((e, t) => {
                        if (null != e.tabPredicate && !e.tabPredicate()) return null;
                        switch (e.section) {
                            case f.Fq.HEADER:
                                return (0, i.jsx)(c.V.Header, { children: e.label }, t);
                            case f.Fq.DIVIDER:
                                return (0, i.jsx)(c.V.Separator, {}, t);
                            case f.Fq.CUSTOM:
                                let s = e.element ?? j.FXj;
                                return (0, i.jsx)(s, {}, t);
                            default:
                                return this.renderSettingsSectionTabBarItem(e, r === e.section, n);
                        }
                    }),
                });
            },
        });
    }
    renderNotice(e) {
        let { theme: t } = this.props;
        if (null == e || null == e.notice) return null;
        let { stores: s, element: n } = e.notice;
        return null == s || s.some((e) => e.showNotice()) ? (0, i.jsx)(n, { theme: t }) : null;
    }
    render() {
        let { sidebarTheme: e, section: t, title: s, onClose: n, hideSidebar: r } = this.props,
            l = this.getPredicateSections(),
            a = l.find((e) => e.section === t);
        if (null == a || null == t) return null;
        let o = ("string" == typeof a.label ? a.label : a.ariaLabel) ?? s;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h.HI, { location: s, subsection: o }),
                (0, i.jsx)(f.Ay, {
                    sidebarTheme: e,
                    scrollerRef: this.scrollerRef,
                    section: t,
                    sidebar: this.renderSidebar(l),
                    content: (0, i.jsx)(N, {
                        section: a,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef,
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: r,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: a.type,
                    notice: this.renderNotice(a),
                    closeAction: null != n ? this.handleClose : void 0,
                }),
            ],
        });
    }
}
s.d(t, {}, { A: _ });
