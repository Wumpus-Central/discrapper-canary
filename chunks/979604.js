n.d(t, {
    A: () => k,
}),
    n(65821),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(158954),
    o = n(311907),
    l = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(59636),
    f = n(212245),
    p = n(626584),
    _ = n(976860),
    h = n(568004),
    m = n(227841),
    g = n(465797),
    E = n(194871),
    b = n(966846),
    y = n(674378),
    O = n(723702),
    A = n(541830),
    v = n(715671),
    S = n(598429),
    I = n(652215),
    T = n(985018),
    C = n(643966);

function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}

function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var D = (function (e) {
    return (
        (e.PLAY = "play"),
        (e.NOW_PLAYING = "now_playing"),
        (e.INSTALL = "install"),
        (e.UPDATE = "update"),
        (e.PAUSED = "paused"),
        (e.LOCATE = "locate"),
        (e.UNINSTALLING = "uninstalling"),
        (e.QUEUED = "queued"),
        (e.DOWNLOADING = "downloading"),
        (e.UNSUPPORTED_OS = "unsupported_os"),
        (e.ADD_TO_LIBRARY = "add_to_library"),
        (e.PREORDER_WAIT = "preorder_wait"),
        e
    );
})(D || {});
let x = Object.freeze({
        [I.Hf6.PLAY]: "play",
        [I.Hf6.INSTALL]: "install",
        [I.Hf6.UPDATE]: "update",
        [I.Hf6.PAUSE]: "downloading",
        [I.Hf6.MOVE_UP]: "queued",
        [I.Hf6.RESUME]: "paused",
    }),
    L = () => [
        T.intl.string(T.t.r9wmKn),
        T.intl.string(T.t["6CpimS"]),
        T.intl.string(T.t.ysbNDc),
        T.intl.string(T.t["TLnXx/"]),
        T.intl.string(T.t.Qi8mne),
        T.intl.string(T.t.yvMu3S),
        T.intl.string(T.t["PnNUZ/"]),
        T.intl.string(T.t.hU2TEJ),
        T.intl.string(T.t["YyY51/"]),
        T.intl.string(T.t.PbHJb3),
    ];

function j(e) {
    let t = A.zJ(e.sku);
    return null != t
        ? T.intl.formatToPlainString(T.t.Aqe2ZC, {
              date: t,
          })
        : null;
}
class M extends (r = a.Component) {
    get analyticsLocation() {
        return P(R({}, this.props.analyticsContext.location), {
            object: I.ZSU.BUTTON_CTA,
        });
    }
    getText(e) {
        switch (("uninstalling" !== e && (this._uninstallStringIndex = null), e)) {
            case "install":
            case "unsupported_os":
                return T.intl.string(T.t.nL0WvC);
            case "update":
                return T.intl.string(T.t.tkhwp9);
            case "paused":
                return T.intl.string(T.t["6EKrh4"]);
            case "locate":
                return T.intl.string(T.t["nIj+a0"]);
            case "uninstalling":
                let t = L();
                return (
                    null == this._uninstallStringIndex &&
                        (this._uninstallStringIndex = Math.floor(Math.random() * t.length)),
                    t[this._uninstallStringIndex]
                );
            case "queued":
                return T.intl.string(T.t.TiJg5l);
            case "downloading":
                return T.intl.string(T.t.Tdhepf);
            case "preorder_wait":
                return T.intl.string(T.t.xiXyPc);
            case "add_to_library":
                return T.intl.string(T.t.r3fwuQ);
            default:
                throw Error("Unexpected button state");
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return "add_to_library";
        if (e.isPreorder()) return "preorder_wait";
        let r = null != n ? x[n] : null;
        return null != r
            ? r
            : null != t && t.type === I.WTw.UNINSTALLING
              ? "uninstalling"
              : (0, O.isWeb)()
                ? "play"
                : "unsupported_os";
    }
    renderPlayButton() {
        let {
            libraryApplication: e,
            fullWidth: t,
            size: n,
            playButtonVariant: r = "secondary",
            disabledVariant: a,
            onDropdownOpen: s,
            onDropdownClose: o,
            analyticsListSort: l,
            analyticsListIndex: c,
        } = this.props;
        return (0, i.jsx)(S.A, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            variant: r,
            disabledVariant: a,
            onDropdownOpen: s,
            onDropdownClose: o,
            analyticsListSort: l,
            analyticsListIndex: c,
        });
    }
    renderDisabledButton(e, t) {
        let { fullWidth: n, size: r, disabledVariant: a = "secondary", tooltipPosition: o } = this.props,
            l = this.renderProgressBar();
        return (0, i.jsxs)("div", {
            className: null != l ? C.c : void 0,
            children: [
                (0, i.jsxs)("div", {
                    className: C.Yr,
                    children: [
                        (0, i.jsx)(s.$nd, {
                            text: this.getText(e),
                            fullWidth: n,
                            size: r,
                            variant: a,
                            disabled: !0,
                        }),
                        (0, i.jsx)(c.m, {
                            text: t,
                            position: o,
                            children: (0, i.jsx)("div", {
                                className: C.p5,
                            }),
                        }),
                    ],
                }),
                l,
            ],
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = y.z0(t);
        if (null == n) return null;
        let r = n.type === I.WTw.UNINSTALLING ? u.kej.INDETERMINATE : y.uA(Number(n.progress), Number(n.total));
        return (0, i.jsx)(u.kej, {
            percent: r,
            size: u.kej.Sizes.XSMALL,
            foregroundColor: n.paused ? l.A.unsafe_rawColors.PRIMARY_500.css : l.A.unsafe_rawColors.GREEN_360.css,
            backgroundColor: l.A.unsafe_rawColors.TRANSPARENT.css,
            className: C.qB,
        });
    }
    renderActionButton(e, t) {
        let { fullWidth: n, size: r, actionButtonVariant: a = "primary", isCloudSyncing: o } = this.props,
            l = this.renderProgressBar();
        return (0, i.jsxs)("div", {
            className: null != l ? C.c : void 0,
            children: [
                (0, i.jsx)(s.$nd, {
                    text: this.getText(e),
                    fullWidth: n,
                    size: r,
                    variant: a,
                    loading: "uninstalling" === e || o,
                    onClick: (e) => this.handleClick(e, t),
                }),
                l,
            ],
        });
    }
    render() {
        let { hasNoBuild: e, libraryApplication: t } = this.props,
            n = this.getButtonState();
        if ("play" === n) return this.renderPlayButton();
        if ("preorder_wait" === n) return this.renderDisabledButton(n, j(t));
        if ("unsupported_os" === n)
            return this.renderDisabledButton(
                n,
                T.intl.formatToPlainString(T.t.LBm0A4, {
                    operatingSystem: T.intl.string(T.t["0/xHFO"]),
                }),
            );
        if ("install" === n && e) return this.renderDisabledButton(n, T.intl.string(T.t.QUSQIA));
        let r = this.onClickHandlers[n];
        return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r);
    }
    constructor(...e) {
        super(...e),
            N(this, "_uninstallStringIndex", null),
            N(this, "handleAddToLibrary", async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await d.V(e.id, e.branchId, e.getFlags() & ~I.hM6.HIDDEN), (0, _.pX)(I.BVt.APPLICATION_LIBRARY);
                } catch (e) {
                    new p.A("LibraryApplicationButton").error(e);
                }
            }),
            N(this, "handleInstall", () => {
                let { libraryApplication: e, source: t } = this.props;
                v.installApplication(e.id, e.branchId, t);
            }),
            N(this, "handleUpdate", () => {
                let { libraryApplication: e } = this.props;
                v.updateApplication(e.id, e.branchId);
            }),
            N(this, "onClickHandlers", {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate,
            }),
            N(this, "handleClick", (e, t) => {
                let { onClick: n } = this.props;
                null == n || n(e), t(e);
            });
    }
}

function k(e) {
    let { libraryApplication: t } = e,
        n = (0, f.p)(),
        [r, a] = (0, o.yK)([E.A, b.A], () => [(0, m.F)(t, E.A, b.A), E.A.getState(t.id, t.branchId)], [t]),
        s = (0, o.bG)([g.A], () => g.A.isSyncing(t.id, t.branchId), [t]),
        l = (0, o.bG)([h.A], () => h.A.hasNoBuild(t.id, t.branchId), [t]);
    return (0, i.jsx)(
        M,
        P(R({}, e), {
            analyticsContext: n,
            actionState: r,
            dispatchState: a,
            isCloudSyncing: s,
            hasNoBuild: l,
        }),
    );
}
N(M, "defaultProps", {
    fullWidth: !1,
    size: "md",
    hideProgress: !1,
    tooltipPosition: "top",
}),
    N(M, "ButtonStates", D);
