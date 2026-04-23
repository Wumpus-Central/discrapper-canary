s.d(e, { default: () => b });
var l = s(627968),
    a = s(64700),
    n = s(311907),
    i = s(821609),
    r = s(935462),
    h = s(534514),
    o = s(73153),
    d = s(356645),
    u = s(465842),
    c = s(628264),
    p = s(92077),
    A = s(953689),
    I = s(587895),
    m = s(235986),
    _ = s(769015),
    g = s(976860),
    C = s(568004),
    T = s(293066),
    P = s(775228),
    f = s(255438),
    S = s(980888),
    E = s(652215),
    N = s(985018),
    y = s(442348);
class L extends a.Component {
    state = {
        selectedInstallationPath: this.props.defaultInstallationPath,
        hasError: !1,
        isInstalling: !1,
        hasAcceptedNeccessaryTerms: !1,
    };
    isUnmounted = !1;
    fetchInstallSize() {
        let { applicationId: t, branchId: e, buildId: s, manifestIds: l, buildSizeKB: a } = this.props;
        null != s &&
            null != l &&
            null == a &&
            o.h.wait(() => {
                (0, u.K)(t, e, s, l);
            });
    }
    componentDidMount() {
        let { applicationId: t, branchId: e, buildId: s, manifestIds: l } = this.props;
        null == s || null == l ? (0, d.n)(t, e) : this.fetchInstallSize();
    }
    componentDidUpdate(t) {
        (this.props.buildId !== t.buildId || this.props.manifestIds !== t.manifestIds) && this.fetchInstallSize();
    }
    componentWillUnmount() {
        this.isUnmounted = !0;
    }
    handleChangePath = (t, e) => {
        this.setState({ selectedInstallationPath: t, hasError: e });
    };
    install = (t, e) => {
        let { application: s, branchId: l, analyticsLocation: a } = this.props;
        if (null == s) return null;
        (0, p.oc)({
            application: s,
            branchId: l,
            buildId: t,
            manifestIds: e,
            installationPath: this.state.selectedInstallationPath,
            analyticsLocation: a,
        }),
            (0, g.pX)(E.BVt.APPLICATION_LIBRARY),
            this.close();
    };
    handleInstall = () => {
        let { application: t, buildId: e, manifestIds: s, hasPreviouslyAcceptedStoreTerms: l } = this.props;
        if (null != e && null != s)
            l || (0, c.v)(), null != t && null != t.eulaId && (0, c.C)(t.eulaId), this.install(e, s);
        else throw Error("Unexpected missing build info for non-premium product");
    };
    handlePurchaseTermsChange = (t) => {
        this.setState({ hasAcceptedNeccessaryTerms: t });
    };
    close = () => {
        this.props.onClose();
    };
    renderButton() {
        let { buildId: t } = this.props,
            { hasError: e, hasAcceptedNeccessaryTerms: s } = this.state;
        return (0, l.jsx)(i.$, {
            variant: "active",
            text: N.intl.string(N.t.nL0WvC),
            disabled: e || null == t || !s,
            onClick: this.handleInstall,
        });
    }
    render() {
        let { application: t, buildSizeKB: e, transitionState: s } = this.props,
            { selectedInstallationPath: a, isInstalling: n } = this.state,
            i = null != t && t.getSplashURL(440);
        return (0, l.jsxs)(r.EO, {
            transitionState: s,
            size: r.rI.SMALL,
            "aria-label": N.intl.string(N.t.PphjtJ),
            parentComponent: "ApplicationInstallationModal",
            children: [
                null != i ? (0, l.jsx)("div", { className: y.Yi, style: { backgroundImage: `url(${i})` } }) : null,
                (0, l.jsxs)(r.rQ, {
                    justify: m.A.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(m.A.Child, {
                            grow: 1,
                            children: (0, l.jsx)(h.D, {
                                variant: "heading-lg/semibold",
                                children: N.intl.string(N.t.PphjtJ),
                            }),
                        }),
                        (0, l.jsx)(m.A.Child, { grow: 0, children: (0, l.jsx)(r.s_, { onClick: this.close }) }),
                    ],
                }),
                (0, l.jsxs)(r.$m, {
                    children: [
                        (0, l.jsxs)(m.A, {
                            align: m.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(_.A, { game: t, size: _.M.MEDIUM, className: y.Gt }),
                                (0, l.jsx)("div", { className: y.mO, children: null != t && t.name }),
                                null != e
                                    ? (0, l.jsx)("div", {
                                          className: y.hc,
                                          children: (0, f.Xq)(e, { useKibibytes: !0 }),
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsx)("div", { className: y.yF }),
                        (0, l.jsx)(S.A, {
                            autoFocus: !0,
                            className: y.gD,
                            value: a,
                            requiredDiskKB: e,
                            onChange: this.handleChangePath,
                        }),
                        (0, l.jsx)(A.A, {
                            eulaId: t.eulaId,
                            applicationName: t.name,
                            disabled: n,
                            onChange: this.handlePurchaseTermsChange,
                            className: y.a_,
                        }),
                    ],
                }),
                (0, l.jsx)(r.jl, { children: this.renderButton() }),
            ],
        });
    }
}
let b = n.Ay.connectStores([C.A, P.A, T.A, I.A], (t) => {
    let { applicationId: e, branchId: s } = t,
        l = C.A.getTargetBuildId(e, s);
    return {
        application: I.A.getApplication(e),
        defaultInstallationPath: P.A.defaultInstallationPath,
        buildId: l,
        manifestIds: C.A.getTargetManifests(e, s),
        buildSizeKB: null != l ? C.A.getBuildSize(l) : null,
        hasPreviouslyAcceptedStoreTerms: T.A.hasAcceptedStoreTerms,
    };
})(L);
