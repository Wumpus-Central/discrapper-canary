s.d(e, { default: () => N });
var l = s(627968),
    a = s(64700),
    n = s(311907),
    i = s(397927),
    r = s(73153),
    h = s(356645),
    o = s(465842),
    d = s(628264),
    u = s(92077),
    c = s(953689),
    p = s(587895),
    A = s(235986),
    I = s(769015),
    g = s(976860),
    m = s(568004),
    _ = s(293066),
    C = s(775228),
    P = s(255438),
    T = s(980888),
    f = s(652215),
    S = s(985018),
    E = s(32337);
class y extends a.Component {
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
            r.h.wait(() => {
                (0, o.K)(t, e, s, l);
            });
    }
    componentDidMount() {
        let { applicationId: t, branchId: e, buildId: s, manifestIds: l } = this.props;
        null == s || null == l ? (0, h.n)(t, e) : this.fetchInstallSize();
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
        (0, u.oc)({
            application: s,
            branchId: l,
            buildId: t,
            manifestIds: e,
            installationPath: this.state.selectedInstallationPath,
            analyticsLocation: a,
        }),
            (0, g.pX)(f.BVt.APPLICATION_LIBRARY),
            this.close();
    };
    handleInstall = () => {
        let { application: t, buildId: e, manifestIds: s, hasPreviouslyAcceptedStoreTerms: l } = this.props;
        if (null != e && null != s)
            l || (0, d.v)(), null != t && null != t.eulaId && (0, d.C)(t.eulaId), this.install(e, s);
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
        return (0, l.jsx)(i.Button, {
            variant: "active",
            text: S.intl.string(S.t.nL0WvC),
            disabled: e || null == t || !s,
            onClick: this.handleInstall,
        });
    }
    render() {
        let { application: t, buildSizeKB: e, transitionState: s } = this.props,
            { selectedInstallationPath: a, isInstalling: n } = this.state,
            r = null != t && t.getSplashURL(440);
        return (0, l.jsxs)(i.EOs, {
            transitionState: s,
            size: i.rIJ.SMALL,
            "aria-label": S.intl.string(S.t.PphjtJ),
            parentComponent: "ApplicationInstallationModal",
            children: [
                null != r ? (0, l.jsx)("div", { className: E.Yi, style: { backgroundImage: `url(${r})` } }) : null,
                (0, l.jsxs)(i.rQ0, {
                    justify: A.A.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(A.A.Child, {
                            grow: 1,
                            children: (0, l.jsx)(i.Heading, {
                                variant: "heading-lg/semibold",
                                children: S.intl.string(S.t.PphjtJ),
                            }),
                        }),
                        (0, l.jsx)(A.A.Child, { grow: 0, children: (0, l.jsx)(i.s_y, { onClick: this.close }) }),
                    ],
                }),
                (0, l.jsxs)(i.$mQ, {
                    children: [
                        (0, l.jsxs)(A.A, {
                            align: A.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(I.A, { game: t, size: I.M.MEDIUM, className: E.Gt }),
                                (0, l.jsx)("div", { className: E.mO, children: null != t && t.name }),
                                null != e
                                    ? (0, l.jsx)("div", {
                                          className: E.hc,
                                          children: (0, P.Xq)(e, { useKibibytes: !0 }),
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsx)("div", { className: E.yF }),
                        (0, l.jsx)(T.A, {
                            autoFocus: !0,
                            className: E.gD,
                            value: a,
                            requiredDiskKB: e,
                            onChange: this.handleChangePath,
                        }),
                        (0, l.jsx)(c.A, {
                            eulaId: t.eulaId,
                            applicationName: t.name,
                            disabled: n,
                            onChange: this.handlePurchaseTermsChange,
                            className: E.a_,
                        }),
                    ],
                }),
                (0, l.jsx)(i.jlY, { children: this.renderButton() }),
            ],
        });
    }
}
let N = n.Ay.connectStores([m.A, C.A, _.A, p.A], (t) => {
    let { applicationId: e, branchId: s } = t,
        l = m.A.getTargetBuildId(e, s);
    return {
        application: p.A.getApplication(e),
        defaultInstallationPath: C.A.defaultInstallationPath,
        buildId: l,
        manifestIds: m.A.getTargetManifests(e, s),
        buildSizeKB: null != l ? m.A.getBuildSize(l) : null,
        hasPreviouslyAcceptedStoreTerms: _.A.hasAcceptedStoreTerms,
    };
})(y);
