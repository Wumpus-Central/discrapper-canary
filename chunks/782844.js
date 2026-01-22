n.d(t, {
    A: () => V,
    D: () => U,
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(98207),
    u = n(631670),
    d = n(974544),
    f = n(772786),
    p = n(210742),
    _ = n(195043),
    h = n(130771),
    m = n(576622),
    g = n(670492),
    E = n(351906),
    b = n(628965),
    y = n(287809),
    O = n(954571),
    A = n(773669),
    v = n(544028),
    S = n(740625),
    I = n(524738),
    T = n(972982),
    C = n(36535),
    N = n(299116),
    R = n(433410),
    w = n(457684),
    P = n(998252),
    D = n(980172),
    x = n(531525),
    L = n(652215),
    j = n(985018),
    M = n(139674);

function k() {
    let e = (0, o.bG)([y.default], () => {
            let e = y.default.getCurrentUser();
            return s()(null != e, "SecuritySettingsTab: currentUser cannot be undefined"), e;
        }),
        t = (0, o.bG)([g.A], () => g.A.getBackupCodes()),
        n = (0, f.g)(),
        { teams: i, loading: a } = (0, h.A)({
            refreshOnDepChange: !0,
        });
    return (0, r.jsxs)(l.lVW, {
        children: [
            (0, r.jsxs)(_.x, {
                setting: x.H.ACCOUNT_PROFILE,
                children: [
                    n && (0, r.jsx)(R.A, {}),
                    (0, r.jsx)(P.A, {
                        currentUser: e,
                    }),
                    (0, r.jsx)(D.A, {}),
                ],
            }),
            (0, r.jsx)(_.x, {
                setting: x.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                children: (0, r.jsxs)(l.nVY, {
                    className: M.PN,
                    label: j.intl.string(j.t.pKSjEj),
                    children: [
                        e.mfaEnabled ? (0, r.jsx)(C.A, {}) : null,
                        (0, r.jsx)(_.x, {
                            setting: x.H.ACCOUNT_CHANGE_PASSWORD,
                            children: (0, r.jsx)(N.A, {}),
                        }),
                        (0, r.jsx)(_.x, {
                            setting: x.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                            children: (0, r.jsx)(T.A, {
                                backupCodes: t,
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)(_.x, {
                setting: x.H.ACCOUNT_REMOVAL,
                children: [
                    (0, r.jsx)(l.cGx, {}),
                    (0, r.jsx)(w.A, {
                        currentUser: e,
                        userTeamsLoading: a,
                        userTeams: i,
                    }),
                ],
            }),
        ],
    });
}
var U = (function (e) {
    return (e.SECURITY = "SECURITY"), (e.STANDING = "STANDING"), e;
})({});
class G extends i.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, m.A)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        c.A.clearBackupCodes(), (0, u.Uo)();
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, r.jsx)(S.R, {
            header: j.intl.string(j.t["JAIM/m"]),
            children: (0, r.jsx)(I.A, {
                parentSetting: x.H.ACCOUNT,
                settingsSection: L.nc_.ACCOUNT,
                panelClassName: M.SZ,
                onTabChange: (e) => {
                    O.default.track(L.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                        target_tab_name: e === x.H.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING",
                    });
                },
                defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : void 0,
                tabs: [
                    {
                        title: j.intl.string(j.t.Am9YHi),
                        component: k,
                        setting: x.H.ACCOUNT_SECURITY_TAB,
                    },
                    {
                        title: j.intl.string(j.t["Vov/9o"]),
                        component: p.A,
                        setting: x.H.PRIVACY_AND_SAFETY_STANDING,
                    },
                ],
            }),
        });
    }
    render() {
        return this.props.hide ? (0, r.jsx)(d.A, {}) : this.renderUnhidden();
    }
}
let V = () => {
    let e = (0, o.bG)([y.default], () => y.default.getCurrentUser()),
        t = (0, o.bG)([E.A], () => E.A.hidePersonalInformation),
        n = (0, o.bG)([v.A], () => v.A.theme),
        i = (0, o.bG)([A.default], () => A.default.locale),
        a = (0, o.bG)([b.A], () => b.A.getSubsection());
    return null == e
        ? null
        : (0, r.jsx)(G, {
              theme: n,
              currentUser: e,
              hide: t,
              locale: i,
              subsection: a,
          });
};
