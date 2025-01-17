n(47120);
var i,
    r = n(200651),
    s = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    c = n(893776),
    d = n(129293),
    u = n(388905),
    h = n(17894),
    f = n(108427),
    g = n(314897),
    m = n(626135),
    p = n(981631),
    x = n(388032),
    _ = n(823793),
    E = n(232186);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
a.ZP.initialize();
class v extends (i = s.PureComponent) {
    componentDidMount() {
        this.handleVerify(), (0, f.e)('verify_email');
    }
    renderVerifyFailed() {
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: n(375673),
                    className: o()(_.image, E.marginBottom20)
                }),
                (0, r.jsx)(u.Dx, {
                    className: E.marginBottom8,
                    children: x.intl.string(x.t.PCgG39)
                }),
                (0, r.jsx)(u.DK, {
                    className: E.marginBottom40,
                    children: x.intl.string(x.t.tQpeAw)
                }),
                (0, r.jsx)(u.zx, {
                    onClick: this.handleLogin,
                    children: x.intl.string(x.t.dKhVQE)
                })
            ]
        });
    }
    renderVerifySucceeded() {
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: n(73962),
                    className: o()(_.image, E.marginBottom20)
                }),
                (0, r.jsx)(u.Dx, {
                    className: E.marginBottom40,
                    children: x.intl.string(x.t.dAfGb2)
                }),
                (0, r.jsx)(u.zx, {
                    onClick: this.handleOpenApp,
                    children: x.intl.string(x.t.uJWIj4)
                })
            ]
        });
    }
    renderVerifying() {
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: n(892235),
                    className: o()(_.image, E.marginBottom20)
                }),
                (0, r.jsx)(u.Dx, {
                    className: E.marginBottom8,
                    children: x.intl.string(x.t['0c8+5u'])
                }),
                (0, r.jsx)(u.DK, {
                    className: E.marginBottom40,
                    children: x.intl.string(x.t.ULTCBA)
                }),
                (0, r.jsx)(u.zx, {
                    submitting: !0,
                    color: u.zx.Colors.PRIMARY
                })
            ]
        });
    }
    render() {
        let { verifyFailed: e, verifySucceeded: t } = this.props;
        return e ? this.renderVerifyFailed() : t ? this.renderVerifySucceeded() : this.renderVerifying();
    }
    constructor(...e) {
        super(...e),
            I(this, 'handleVerify', () => {
                let e = (0, d.Z)(this.props.location);
                null != e && c.Z.verify(e);
            }),
            I(this, 'handleLogin', () => {
                let { transitionTo: e } = this.props;
                e(p.Z5c.LOGIN);
            }),
            I(this, 'handleOpenApp', () => {
                let { verifyingUserId: e } = this.props;
                m.default.track(p.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: e }), (0, h.Z)('verify_email');
            });
    }
}
I(v, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) }),
    (t.Z = a.ZP.connectStores([g.default], () => ({
        verifyFailed: g.default.didVerifyFail(),
        verifyErrors: g.default.getVerifyErrors(),
        verifySucceeded: g.default.didVerifySucceed(),
        fingerprint: g.default.getFingerprint(),
        verifyingUserId: g.default.getVerifyingUserId()
    }))(v));
