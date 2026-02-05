n.d(t, { A: () => B, D: () => w });
var i,
    l = n(627968),
    s = n(64700),
    a = n(284009),
    r = n.n(a),
    o = n(311907),
    d = n(397927),
    c = n(98207),
    u = n(631670),
    h = n(974544),
    A = n(772786),
    g = n(210742),
    m = n(195043),
    p = n(130771),
    _ = n(576622),
    x = n(670492),
    f = n(351906),
    E = n(628965),
    C = n(287809),
    I = n(954571),
    S = n(773669),
    b = n(544028),
    N = n(740625),
    T = n(524738),
    j = n(972982),
    v = n(36535),
    y = n(299116),
    R = n(433410),
    O = n(457684),
    L = n(998252),
    D = n(980172),
    M = n(531525),
    G = n(652215),
    U = n(985018),
    P = n(139674);
function k() {
    let e = (0, o.bG)([C.default], () => {
            let e = C.default.getCurrentUser();
            return r()(null != e, "SecuritySettingsTab: currentUser cannot be undefined"), e;
        }),
        t = (0, o.bG)([x.A], () => x.A.getBackupCodes()),
        n = (0, A.g)(),
        { teams: i, loading: s } = (0, p.A)({ refreshOnDepChange: !0 });
    return (0, l.jsxs)(d.lVW, {
        children: [
            (0, l.jsxs)(m.x, {
                setting: M.H.ACCOUNT_PROFILE,
                children: [n && (0, l.jsx)(R.A, {}), (0, l.jsx)(L.A, { currentUser: e }), (0, l.jsx)(D.A, {})],
            }),
            (0, l.jsx)(m.x, {
                setting: M.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                children: (0, l.jsxs)(d.nVY, {
                    className: P.PN,
                    label: U.intl.string(U.t.pKSjEj),
                    children: [
                        e.mfaEnabled ? (0, l.jsx)(v.A, {}) : null,
                        (0, l.jsx)(m.x, { setting: M.H.ACCOUNT_CHANGE_PASSWORD, children: (0, l.jsx)(y.A, {}) }),
                        (0, l.jsx)(m.x, {
                            setting: M.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                            children: (0, l.jsx)(j.A, { backupCodes: t }),
                        }),
                    ],
                }),
            }),
            (0, l.jsxs)(m.x, {
                setting: M.H.ACCOUNT_REMOVAL,
                children: [
                    (0, l.jsx)(d.cGx, {}),
                    (0, l.jsx)(O.A, { currentUser: e, userTeamsLoading: s, userTeams: i }),
                ],
            }),
        ],
    });
}
var w = (((i = {}).SECURITY = "SECURITY"), (i.STANDING = "STANDING"), i);
class V extends s.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, _.A)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        c.A.clearBackupCodes(), (0, u.Uo)();
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, l.jsx)(N.R, {
            header: U.intl.string(U.t["JAIM/m"]),
            children: (0, l.jsx)(T.A, {
                parentSetting: M.H.ACCOUNT,
                settingsSection: G.nc_.ACCOUNT,
                panelClassName: P.SZ,
                onTabChange: (e) => {
                    I.default.track(G.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                        target_tab_name: e === M.H.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING",
                    });
                },
                defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : void 0,
                tabs: [
                    { title: U.intl.string(U.t.Am9YHi), component: k, setting: M.H.ACCOUNT_SECURITY_TAB },
                    { title: U.intl.string(U.t["Vov/9o"]), component: g.A, setting: M.H.PRIVACY_AND_SAFETY_STANDING },
                ],
            }),
        });
    }
    render() {
        return this.props.hide ? (0, l.jsx)(h.A, {}) : this.renderUnhidden();
    }
}
let B = () => {
    let e = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        t = (0, o.bG)([f.A], () => f.A.hidePersonalInformation),
        n = (0, o.bG)([b.A], () => b.A.theme),
        i = (0, o.bG)([S.default], () => S.default.locale),
        s = (0, o.bG)([E.A], () => E.A.getSubsection());
    return null == e ? null : (0, l.jsx)(V, { theme: n, currentUser: e, hide: t, locale: i, subsection: s });
};
