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
    _ = n(710845),
    p = n(703656),
    h = n(173747),
    m = n(7956),
    g = n(293245),
    E = n(417363),
    b = n(941128),
    y = n(780570),
    O = n(358085),
    v = n(814225),
    I = n(346329),
    T = n(701560),
    S = n(981631),
    A = n(388032),
    C = n(806698);
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
function P(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var w = (function (e) {
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
})(w || {});
let L = Object.freeze({
        [S.apO.PLAY]: "play",
        [S.apO.INSTALL]: "install",
        [S.apO.UPDATE]: "update",
        [S.apO.PAUSE]: "downloading",
        [S.apO.MOVE_UP]: "queued",
        [S.apO.RESUME]: "paused",
    }),
    x = () => [
        A.intl.string(A.t.r9wmKn),
        A.intl.string(A.t["6CpimS"]),
        A.intl.string(A.t.ysbNDc),
        A.intl.string(A.t["TLnXx/"]),
        A.intl.string(A.t.Qi8mne),
        A.intl.string(A.t.yvMu3S),
        A.intl.string(A.t["PnNUZ/"]),
        A.intl.string(A.t.hU2TEJ),
        A.intl.string(A.t["YyY51/"]),
        A.intl.string(A.t.PbHJb3),
    ];
function M(e) {
    let t = v.en(e.sku);
    return null != t ? A.intl.formatToPlainString(A.t.Aqe2ZC, { date: t }) : null;
}
class j extends (r = a.Component) {
    get analyticsLocation() {
        return D(R({}, this.props.analyticsContext.location), { object: S.qAy.BUTTON_CTA });
    }
    getText(e) {
        switch (("uninstalling" !== e && (this._uninstallStringIndex = null), e)) {
            case "install":
            case "unsupported_os":
                return A.intl.string(A.t.nL0WvC);
            case "update":
                return A.intl.string(A.t.tkhwp9);
            case "paused":
                return A.intl.string(A.t["6EKrh4"]);
            case "locate":
                return A.intl.string(A.t["nIj+a0"]);
            case "uninstalling":
                let t = x();
                return (
                    null == this._uninstallStringIndex &&
                        (this._uninstallStringIndex = Math.floor(Math.random() * t.length)),
                    t[this._uninstallStringIndex]
                );
            case "queued":
                return A.intl.string(A.t.TiJg5l);
            case "downloading":
                return A.intl.string(A.t.Tdhepf);
            case "preorder_wait":
                return A.intl.string(A.t.xiXyPc);
            case "add_to_library":
                return A.intl.string(A.t.r3fwuQ);
            default:
                throw Error("Unexpected button state");
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return "add_to_library";
        if (e.isPreorder()) return "preorder_wait";
        let r = null != n ? L[n] : null;
        return null != r
            ? r
            : null != t && t.type === S.vxO.UNINSTALLING
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
        return (0, i.jsx)(T.Z, {
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
            className: C.disabledButtonWrapper,
            children: [
                (0, i.jsxs)(c.zx, {
                    className: n,
                    fullWidth: r,
                    size: a,
                    color: null != o ? o : C.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()],
                }),
                (0, i.jsx)(l.u, {
                    text: t,
                    position: s,
                    children: (0, i.jsx)("div", { className: C.disabledButtonOverlay }),
                }),
            ],
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = y.KJ(t);
        if (null == n) return null;
        let r = n.type === S.vxO.UNINSTALLING ? u.Exd.INDETERMINATE : y.xI(Number(n.progress), Number(n.total));
        return (0, i.jsx)(u.Exd, {
            percent: r,
            size: u.Exd.Sizes.XSMALL,
            foregroundColor: n.paused ? s.Z.unsafe_rawColors.PRIMARY_500.css : s.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: s.Z.unsafe_rawColors.TRANSPARENT.css,
            className: C.progress,
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
        if ("preorder_wait" === n) return this.renderDisabledButton(n, M(t));
        if ("unsupported_os" === n)
            return this.renderDisabledButton(
                n,
                A.intl.formatToPlainString(A.t.LBm0A4, { operatingSystem: A.intl.string(A.t["0/xHFO"]) }),
            );
        if ("install" === n && e) return this.renderDisabledButton(n, A.intl.string(A.t.QUSQIA));
        let r = this.onClickHandlers[n];
        return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r);
    }
    constructor(...e) {
        super(...e),
            N(this, "_uninstallStringIndex", null),
            N(this, "handleAddToLibrary", async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await d.h(e.id, e.branchId, e.getFlags() & ~S.eHb.HIDDEN), (0, p.uL)(S.Z5c.APPLICATION_LIBRARY);
                } catch (e) {
                    new _.Z("LibraryApplicationButton").error(e);
                }
            }),
            N(this, "handleInstall", () => {
                let { libraryApplication: e, source: t } = this.props;
                I.installApplication(e.id, e.branchId, t);
            }),
            N(this, "handleUpdate", () => {
                let { libraryApplication: e } = this.props;
                I.updateApplication(e.id, e.branchId);
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
        [r, a] = (0, o.Wu)([E.Z, b.Z], () => [(0, m.i)(t, E.Z, b.Z), E.Z.getState(t.id, t.branchId)], [t]),
        s = (0, o.e7)([g.Z], () => g.Z.isSyncing(t.id, t.branchId), [t]),
        l = (0, o.e7)([h.Z], () => h.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, i.jsx)(
        j,
        D(R({}, e), {
            analyticsContext: n,
            actionState: r,
            dispatchState: a,
            isCloudSyncing: s,
            hasNoBuild: l,
        }),
    );
}
N(j, "defaultProps", {
    fullWidth: !1,
    size: c.zx.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: "top",
}),
    N(j, "ButtonStates", w);
