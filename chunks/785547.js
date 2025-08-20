n.d(t, { Z: () => M }), n(415506), n(388685);
var r,
    i = n(951288),
    a = n(647438),
    o = n(442837),
    s = n(692547),
    l = n(755721),
    c = n(481060),
    u = n(58642),
    d = n(2052),
    f = n(710845),
    _ = n(703656),
    p = n(173747),
    h = n(7956),
    m = n(293245),
    g = n(417363),
    E = n(941128),
    b = n(780570),
    y = n(358085),
    O = n(814225),
    v = n(346329),
    I = n(701560),
    T = n(981631),
    S = n(388032),
    A = n(767248);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
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
function P(e, t) {
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
let D = Object.freeze({
        [T.apO.PLAY]: "play",
        [T.apO.INSTALL]: "install",
        [T.apO.UPDATE]: "update",
        [T.apO.PAUSE]: "downloading",
        [T.apO.MOVE_UP]: "queued",
        [T.apO.RESUME]: "paused",
    }),
    x = () => [
        S.intl.string(S.t.r9wmKi),
        S.intl.string(S.t["6CpimZ"]),
        S.intl.string(S.t.ysbNDQ),
        S.intl.string(S.t.TLnXx8),
        S.intl.string(S.t.Qi8mnZ),
        S.intl.string(S.t.yvMu3d),
        S.intl.string(S.t.PnNUZ2),
        S.intl.string(S.t.hU2TEB),
        S.intl.string(S.t.YyY519),
        S.intl.string(S.t.PbHJb2),
    ];
function L(e) {
    let t = O.en(e.sku);
    return null != t ? S.intl.formatToPlainString(S.t.Aqe2ZG, { date: t }) : null;
}
class j extends (r = a.Component) {
    get analyticsLocation() {
        return P(N({}, this.props.analyticsContext.location), { object: T.qAy.BUTTON_CTA });
    }
    getText(e) {
        switch (("uninstalling" !== e && (this._uninstallStringIndex = null), e)) {
            case "install":
            case "unsupported_os":
                return S.intl.string(S.t.nL0WvL);
            case "update":
                return S.intl.string(S.t.tkhwp6);
            case "paused":
                return S.intl.string(S.t["6EKrh4"]);
            case "locate":
                return S.intl.string(S.t["nIj+a2"]);
            case "uninstalling":
                let t = x();
                return (
                    null == this._uninstallStringIndex &&
                        (this._uninstallStringIndex = Math.floor(Math.random() * t.length)),
                    t[this._uninstallStringIndex]
                );
            case "queued":
                return S.intl.string(S.t.TiJg5u);
            case "downloading":
                return S.intl.string(S.t.Tdhepa);
            case "preorder_wait":
                return S.intl.string(S.t.xiXyPT);
            case "add_to_library":
                return S.intl.string(S.t.r3fwub);
            default:
                throw Error("Unexpected button state");
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return "add_to_library";
        if (e.isPreorder()) return "preorder_wait";
        let r = null != n ? D[n] : null;
        return null != r
            ? r
            : null != t && t.type === T.vxO.UNINSTALLING
              ? "uninstalling"
              : (0, y.isWeb)()
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
                (0, i.jsxs)(l.zx, {
                    className: n,
                    fullWidth: r,
                    size: a,
                    color: null != o ? o : A.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()],
                }),
                (0, i.jsx)(c.ua7, {
                    text: t,
                    position: s,
                    children: (e) => (0, i.jsx)("div", N({ className: A.disabledButtonOverlay }, e)),
                }),
            ],
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = b.KJ(t);
        if (null == n) return null;
        let r = n.type === T.vxO.UNINSTALLING ? c.Exd.INDETERMINATE : b.xI(Number(n.progress), Number(n.total));
        return (0, i.jsx)(c.Exd, {
            percent: r,
            size: c.Exd.Sizes.XSMALL,
            foregroundColor: n.paused ? s.Z.unsafe_rawColors.PRIMARY_500.css : s.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: s.Z.unsafe_rawColors.TRANSPARENT.css,
            className: A.progress,
        });
    }
    renderActionButton(e, t) {
        let { className: n, fullWidth: r, size: a, color: o, isCloudSyncing: s } = this.props;
        return (0, i.jsxs)(l.zx, {
            className: n,
            fullWidth: r,
            size: a,
            color: null != o ? o : l.zx.Colors.GREEN,
            submitting: "uninstalling" === e || s,
            onClick: (e) => this.handleClick(e, t),
            children: [this.getText(e), this.renderProgressBar()],
        });
    }
    render() {
        let { hasNoBuild: e, libraryApplication: t } = this.props,
            n = this.getButtonState();
        if ("play" === n) return this.renderPlayButton();
        if ("preorder_wait" === n) return this.renderDisabledButton(n, L(t));
        if ("unsupported_os" === n)
            return this.renderDisabledButton(
                n,
                S.intl.formatToPlainString(S.t.LBm0Aw, { operatingSystem: S.intl.string(S.t["0/xHFB"]) }),
            );
        if ("install" === n && e) return this.renderDisabledButton(n, S.intl.string(S.t.QUSQIC));
        let r = this.onClickHandlers[n];
        return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r);
    }
    constructor(...e) {
        super(...e),
            C(this, "_uninstallStringIndex", null),
            C(this, "handleAddToLibrary", async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await u.h(e.id, e.branchId, e.getFlags() & ~T.eHb.HIDDEN), (0, _.uL)(T.Z5c.APPLICATION_LIBRARY);
                } catch (e) {
                    new f.Z("LibraryApplicationButton").error(e);
                }
            }),
            C(this, "handleInstall", () => {
                let { libraryApplication: e, source: t } = this.props;
                v.installApplication(e.id, e.branchId, t);
            }),
            C(this, "handleUpdate", () => {
                let { libraryApplication: e } = this.props;
                v.updateApplication(e.id, e.branchId);
            }),
            C(this, "onClickHandlers", {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate,
            }),
            C(this, "handleClick", (e, t) => {
                let { onClick: n } = this.props;
                null == n || n(e), t(e);
            });
    }
}
function M(e) {
    let { libraryApplication: t } = e,
        n = (0, d.O)(),
        [r, a] = (0, o.Wu)([g.Z, E.Z], () => [(0, h.i)(t, g.Z, E.Z), g.Z.getState(t.id, t.branchId)], [t]),
        s = (0, o.e7)([m.Z], () => m.Z.isSyncing(t.id, t.branchId), [t]),
        l = (0, o.e7)([p.Z], () => p.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, i.jsx)(
        j,
        P(N({}, e), {
            analyticsContext: n,
            actionState: r,
            dispatchState: a,
            isCloudSyncing: s,
            hasNoBuild: l,
        }),
    );
}
C(j, "defaultProps", {
    fullWidth: !1,
    size: l.zx.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: "top",
}),
    C(j, "ButtonStates", w);
