n.d(t, {
    A: () => L,
}),
    n(65821),
    n(896048);
var r,
    i,
    l = n(627968),
    a = n(64700),
    s = n(158954),
    o = n(311907),
    c = n(827734),
    u = n(990078),
    d = n(397927),
    p = n(59636),
    m = n(212245),
    f = n(626584),
    g = n(976860),
    h = n(568004),
    _ = n(227841),
    b = n(465797),
    A = n(194871),
    y = n(966846),
    v = n(674378),
    x = n(723702),
    O = n(541830),
    E = n(715671),
    j = n(598429),
    C = n(652215),
    I = n(985018),
    S = n(643966);

function T(e, t, n) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}

function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var w =
    (((i = w || {}).PLAY = "play"),
    (i.NOW_PLAYING = "now_playing"),
    (i.INSTALL = "install"),
    (i.UPDATE = "update"),
    (i.PAUSED = "paused"),
    (i.LOCATE = "locate"),
    (i.UNINSTALLING = "uninstalling"),
    (i.QUEUED = "queued"),
    (i.DOWNLOADING = "downloading"),
    (i.UNSUPPORTED_OS = "unsupported_os"),
    (i.ADD_TO_LIBRARY = "add_to_library"),
    (i.PREORDER_WAIT = "preorder_wait"),
    i);
let R = Object.freeze({
    [C.Hf6.PLAY]: "play",
    [C.Hf6.INSTALL]: "install",
    [C.Hf6.UPDATE]: "update",
    [C.Hf6.PAUSE]: "downloading",
    [C.Hf6.MOVE_UP]: "queued",
    [C.Hf6.RESUME]: "paused",
});
class D extends (r = a.Component) {
    get analyticsLocation() {
        return P(N({}, this.props.analyticsContext.location), {
            object: C.ZSU.BUTTON_CTA,
        });
    }
    getText(e) {
        switch (("uninstalling" !== e && (this._uninstallStringIndex = null), e)) {
            case "install":
            case "unsupported_os":
                return I.intl.string(I.t.nL0WvC);
            case "update":
                return I.intl.string(I.t.tkhwp9);
            case "paused":
                return I.intl.string(I.t["6EKrh4"]);
            case "locate":
                return I.intl.string(I.t["nIj+a0"]);
            case "uninstalling":
                let t = [
                    I.intl.string(I.t.r9wmKn),
                    I.intl.string(I.t["6CpimS"]),
                    I.intl.string(I.t.ysbNDc),
                    I.intl.string(I.t["TLnXx/"]),
                    I.intl.string(I.t.Qi8mne),
                    I.intl.string(I.t.yvMu3S),
                    I.intl.string(I.t["PnNUZ/"]),
                    I.intl.string(I.t.hU2TEJ),
                    I.intl.string(I.t["YyY51/"]),
                    I.intl.string(I.t.PbHJb3),
                ];
                return (
                    null == this._uninstallStringIndex &&
                        (this._uninstallStringIndex = Math.floor(Math.random() * t.length)),
                    t[this._uninstallStringIndex]
                );
            case "queued":
                return I.intl.string(I.t.TiJg5l);
            case "downloading":
                return I.intl.string(I.t.Tdhepf);
            case "preorder_wait":
                return I.intl.string(I.t.xiXyPc);
            case "add_to_library":
                return I.intl.string(I.t.r3fwuQ);
            default:
                throw Error("Unexpected button state");
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return "add_to_library";
        if (e.isPreorder()) return "preorder_wait";
        let r = null != n ? R[n] : null;
        return null != r
            ? r
            : null != t && t.type === C.WTw.UNINSTALLING
              ? "uninstalling"
              : (0, x.isWeb)()
                ? "play"
                : "unsupported_os";
    }
    renderPlayButton() {
        let {
            libraryApplication: e,
            fullWidth: t,
            size: n,
            playButtonVariant: r = "secondary",
            disabledVariant: i,
            onDropdownOpen: a,
            onDropdownClose: s,
            analyticsListSort: o,
            analyticsListIndex: c,
        } = this.props;
        return (0, l.jsx)(j.A, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            variant: r,
            disabledVariant: i,
            onDropdownOpen: a,
            onDropdownClose: s,
            analyticsListSort: o,
            analyticsListIndex: c,
        });
    }
    renderDisabledButton(e, t) {
        let { fullWidth: n, size: r, disabledVariant: i = "secondary", tooltipPosition: a } = this.props,
            o = this.renderProgressBar();
        return (0, l.jsxs)("div", {
            className: null != o ? S.c : void 0,
            children: [
                (0, l.jsxs)("div", {
                    className: S.Yr,
                    children: [
                        (0, l.jsx)(s.$nd, {
                            text: this.getText(e),
                            fullWidth: n,
                            size: r,
                            variant: i,
                            disabled: !0,
                        }),
                        (0, l.jsx)(u.m, {
                            text: t,
                            position: a,
                            children: (0, l.jsx)("div", {
                                className: S.p5,
                            }),
                        }),
                    ],
                }),
                o,
            ],
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = v.z0(t);
        if (null == n) return null;
        let r = n.type === C.WTw.UNINSTALLING ? d.kej.INDETERMINATE : v.uA(Number(n.progress), Number(n.total));
        return (0, l.jsx)(d.kej, {
            percent: r,
            size: d.kej.Sizes.XSMALL,
            foregroundColor: n.paused ? c.A.unsafe_rawColors.PRIMARY_500.css : c.A.unsafe_rawColors.GREEN_360.css,
            backgroundColor: c.A.unsafe_rawColors.TRANSPARENT.css,
            className: S.qB,
        });
    }
    renderActionButton(e, t) {
        let { fullWidth: n, size: r, actionButtonVariant: i = "primary", isCloudSyncing: a } = this.props,
            o = this.renderProgressBar();
        return (0, l.jsxs)("div", {
            className: null != o ? S.c : void 0,
            children: [
                (0, l.jsx)(s.$nd, {
                    text: this.getText(e),
                    fullWidth: n,
                    size: r,
                    variant: i,
                    loading: "uninstalling" === e || a,
                    onClick: (e) => this.handleClick(e, t),
                }),
                o,
            ],
        });
    }
    render() {
        let { hasNoBuild: e, libraryApplication: t } = this.props,
            n = this.getButtonState();
        if ("play" === n) return this.renderPlayButton();
        if ("preorder_wait" === n) {
            let e;
            return this.renderDisabledButton(
                n,
                null != (e = O.zJ(t.sku))
                    ? I.intl.formatToPlainString(I.t.Aqe2ZC, {
                          date: e,
                      })
                    : null,
            );
        }
        if ("unsupported_os" === n)
            return this.renderDisabledButton(
                n,
                I.intl.formatToPlainString(I.t.LBm0A4, {
                    operatingSystem: I.intl.string(I.t["0/xHFO"]),
                }),
            );
        if ("install" === n && e) return this.renderDisabledButton(n, I.intl.string(I.t.QUSQIA));
        let r = this.onClickHandlers[n];
        return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r);
    }
    constructor(...e) {
        super(...e),
            T(this, "_uninstallStringIndex", null),
            T(this, "handleAddToLibrary", async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await p.V(e.id, e.branchId, e.getFlags() & ~C.hM6.HIDDEN), (0, g.pX)(C.BVt.APPLICATION_LIBRARY);
                } catch (e) {
                    new f.A("LibraryApplicationButton").error(e);
                }
            }),
            T(this, "handleInstall", () => {
                let { libraryApplication: e, source: t } = this.props;
                E.installApplication(e.id, e.branchId, t);
            }),
            T(this, "handleUpdate", () => {
                let { libraryApplication: e } = this.props;
                E.updateApplication(e.id, e.branchId);
            }),
            T(this, "onClickHandlers", {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate,
            }),
            T(this, "handleClick", (e, t) => {
                let { onClick: n } = this.props;
                null == n || n(e), t(e);
            });
    }
}

function L(e) {
    let { libraryApplication: t } = e,
        n = (0, m.p)(),
        [r, i] = (0, o.yK)([A.A, y.A], () => [(0, _.F)(t, A.A, y.A), A.A.getState(t.id, t.branchId)], [t]),
        a = (0, o.bG)([b.A], () => b.A.isSyncing(t.id, t.branchId), [t]),
        s = (0, o.bG)([h.A], () => h.A.hasNoBuild(t.id, t.branchId), [t]);
    return (0, l.jsx)(
        D,
        P(N({}, e), {
            analyticsContext: n,
            actionState: r,
            dispatchState: i,
            isCloudSyncing: a,
            hasNoBuild: s,
        }),
    );
}
T(D, "defaultProps", {
    fullWidth: !1,
    size: "md",
    hideProgress: !1,
    tooltipPosition: "top",
}),
    T(D, "ButtonStates", w);
