n.d(t, { Z: () => k }), n(415506), n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(442837),
    s = n(692547),
    l = n(28664),
    c = n(755721),
    u = n(481060),
    d = n(58642),
    f = n(2052),
    p = n(710845),
    _ = n(703656),
    m = n(173747),
    h = n(7956),
    g = n(293245),
    E = n(417363),
    b = n(941128),
    y = n(780570),
    O = n(358085),
    v = n(814225),
    S = n(346329),
    I = n(701560),
    T = n(981631),
    C = n(388032),
    A = n(48208);
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
function P(e) {
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
function R(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
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
        [T.apO.PLAY]: "play",
        [T.apO.INSTALL]: "install",
        [T.apO.UPDATE]: "update",
        [T.apO.PAUSE]: "downloading",
        [T.apO.MOVE_UP]: "queued",
        [T.apO.RESUME]: "paused",
    }),
    L = () => [
        C.intl.string(C.t.r9wmKn),
        C.intl.string(C.t["6CpimS"]),
        C.intl.string(C.t.ysbNDc),
        C.intl.string(C.t["TLnXx/"]),
        C.intl.string(C.t.Qi8mne),
        C.intl.string(C.t.yvMu3S),
        C.intl.string(C.t["PnNUZ/"]),
        C.intl.string(C.t.hU2TEJ),
        C.intl.string(C.t["YyY51/"]),
        C.intl.string(C.t.PbHJb3),
    ];
function j(e) {
    let t = v.en(e.sku);
    return null != t ? C.intl.formatToPlainString(C.t.Aqe2ZC, { date: t }) : null;
}
class M extends (r = a.Component) {
    get analyticsLocation() {
        return w(P({}, this.props.analyticsContext.location), { object: T.qAy.BUTTON_CTA });
    }
    getText(e) {
        switch (("uninstalling" !== e && (this._uninstallStringIndex = null), e)) {
            case "install":
            case "unsupported_os":
                return C.intl.string(C.t.nL0WvC);
            case "update":
                return C.intl.string(C.t.tkhwp9);
            case "paused":
                return C.intl.string(C.t["6EKrh4"]);
            case "locate":
                return C.intl.string(C.t["nIj+a0"]);
            case "uninstalling":
                let t = L();
                return (
                    null == this._uninstallStringIndex &&
                        (this._uninstallStringIndex = Math.floor(Math.random() * t.length)),
                    t[this._uninstallStringIndex]
                );
            case "queued":
                return C.intl.string(C.t.TiJg5l);
            case "downloading":
                return C.intl.string(C.t.Tdhepf);
            case "preorder_wait":
                return C.intl.string(C.t.xiXyPc);
            case "add_to_library":
                return C.intl.string(C.t.r3fwuQ);
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
            : null != t && t.type === T.vxO.UNINSTALLING
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
            color: r,
            customDisabledColor: a,
            isPlayShiny: o,
            onDropdownOpen: s,
            onDropdownClose: l,
            analyticsListSort: c,
            analyticsListIndex: u,
        } = this.props;
        return (0, i.jsx)(I.Z, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            color: r,
            customDisabledColor: a,
            isShiny: o,
            onDropdownOpen: s,
            onDropdownClose: l,
            analyticsListSort: c,
            analyticsListIndex: u,
        });
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: r, size: a, customDisabledColor: o, tooltipPosition: s } = this.props;
        return (0, i.jsxs)("div", {
            className: A.disabledButtonWrapper,
            children: [
                (0, i.jsxs)(c.zx, {
                    className: n,
                    fullWidth: r,
                    size: a,
                    color: null != o ? o : A.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()],
                }),
                (0, i.jsx)(l.u, {
                    text: t,
                    position: s,
                    children: (0, i.jsx)("div", { className: A.disabledButtonOverlay }),
                }),
            ],
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = y.KJ(t);
        if (null == n) return null;
        let r = n.type === T.vxO.UNINSTALLING ? u.Exd.INDETERMINATE : y.xI(Number(n.progress), Number(n.total));
        return (0, i.jsx)(u.Exd, {
            percent: r,
            size: u.Exd.Sizes.XSMALL,
            foregroundColor: n.paused ? s.Z.unsafe_rawColors.PRIMARY_500.css : s.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: s.Z.unsafe_rawColors.TRANSPARENT.css,
            className: A.progress,
        });
    }
    renderActionButton(e, t) {
        let { className: n, fullWidth: r, size: a, color: o, isCloudSyncing: s } = this.props;
        return (0, i.jsxs)(c.zx, {
            className: n,
            fullWidth: r,
            size: a,
            color: null != o ? o : c.zx.Colors.GREEN,
            submitting: "uninstalling" === e || s,
            onClick: (e) => this.handleClick(e, t),
            children: [this.getText(e), this.renderProgressBar()],
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
                C.intl.formatToPlainString(C.t.LBm0A4, { operatingSystem: C.intl.string(C.t["0/xHFO"]) }),
            );
        if ("install" === n && e) return this.renderDisabledButton(n, C.intl.string(C.t.QUSQIA));
        let r = this.onClickHandlers[n];
        return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r);
    }
    constructor(...e) {
        super(...e),
            N(this, "_uninstallStringIndex", null),
            N(this, "handleAddToLibrary", async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await d.h(e.id, e.branchId, e.getFlags() & ~T.eHb.HIDDEN), (0, _.uL)(T.Z5c.APPLICATION_LIBRARY);
                } catch (e) {
                    new p.Z("LibraryApplicationButton").error(e);
                }
            }),
            N(this, "handleInstall", () => {
                let { libraryApplication: e, source: t } = this.props;
                S.installApplication(e.id, e.branchId, t);
            }),
            N(this, "handleUpdate", () => {
                let { libraryApplication: e } = this.props;
                S.updateApplication(e.id, e.branchId);
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
        n = (0, f.O)(),
        [r, a] = (0, o.Wu)([E.Z, b.Z], () => [(0, h.i)(t, E.Z, b.Z), E.Z.getState(t.id, t.branchId)], [t]),
        s = (0, o.e7)([g.Z], () => g.Z.isSyncing(t.id, t.branchId), [t]),
        l = (0, o.e7)([m.Z], () => m.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, i.jsx)(
        M,
        w(P({}, e), {
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
    size: c.zx.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: "top",
}),
    N(M, "ButtonStates", D);
