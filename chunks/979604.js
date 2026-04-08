n.d(t, { A: () => R });
var i,
    l = n(627968),
    s = n(64700),
    a = n(158954),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(59636),
    _ = n(212245),
    m = n(626584),
    h = n(976860),
    p = n(568004),
    g = n(227841),
    A = n(465797),
    x = n(194871),
    f = n(966846),
    C = n(674378),
    E = n(723702),
    I = n(541830),
    v = n(715671),
    b = n(598429),
    T = n(652215),
    y = n(985018),
    N = n(54720),
    S =
        (((i = S || {}).PLAY = "play"),
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
let j = Object.freeze({
    [T.Hf6.PLAY]: "play",
    [T.Hf6.INSTALL]: "install",
    [T.Hf6.UPDATE]: "update",
    [T.Hf6.PAUSE]: "downloading",
    [T.Hf6.MOVE_UP]: "queued",
    [T.Hf6.RESUME]: "paused",
});
class L extends s.Component {
    static defaultProps = { fullWidth: !1, size: "md", hideProgress: !1, tooltipPosition: "top" };
    static ButtonStates = S;
    get analyticsLocation() {
        return { ...this.props.analyticsContext.location, object: T.ZSU.BUTTON_CTA };
    }
    _uninstallStringIndex = null;
    getText(e) {
        switch (("uninstalling" !== e && (this._uninstallStringIndex = null), e)) {
            case "install":
            case "unsupported_os":
                return y.intl.string(y.t.nL0WvC);
            case "update":
                return y.intl.string(y.t.tkhwp9);
            case "paused":
                return y.intl.string(y.t["6EKrh4"]);
            case "locate":
                return y.intl.string(y.t["nIj+a0"]);
            case "uninstalling":
                let t = [
                    y.intl.string(y.t.r9wmKn),
                    y.intl.string(y.t["6CpimS"]),
                    y.intl.string(y.t.ysbNDc),
                    y.intl.string(y.t["TLnXx/"]),
                    y.intl.string(y.t.Qi8mne),
                    y.intl.string(y.t.yvMu3S),
                    y.intl.string(y.t["PnNUZ/"]),
                    y.intl.string(y.t.hU2TEJ),
                    y.intl.string(y.t["YyY51/"]),
                    y.intl.string(y.t.PbHJb3),
                ];
                return (
                    null == this._uninstallStringIndex &&
                        (this._uninstallStringIndex = Math.floor(Math.random() * t.length)),
                    t[this._uninstallStringIndex]
                );
            case "queued":
                return y.intl.string(y.t.TiJg5l);
            case "downloading":
                return y.intl.string(y.t.Tdhepf);
            case "preorder_wait":
                return y.intl.string(y.t.xiXyPc);
            case "add_to_library":
                return y.intl.string(y.t.r3fwuQ);
            default:
                throw Error("Unexpected button state");
        }
    }
    handleAddToLibrary = async () => {
        try {
            let { libraryApplication: e } = this.props;
            await u.V(e.id, e.branchId, e.getFlags() & ~T.hM6.HIDDEN), (0, h.pX)(T.BVt.APPLICATION_LIBRARY);
        } catch (e) {
            new m.A("LibraryApplicationButton").error(e);
        }
    };
    handleInstall = () => {
        let { libraryApplication: e, source: t } = this.props;
        v.installApplication(e.id, e.branchId, t);
    };
    handleUpdate = () => {
        let { libraryApplication: e } = this.props;
        v.updateApplication(e.id, e.branchId);
    };
    onClickHandlers = {
        add_to_library: this.handleAddToLibrary,
        install: this.handleInstall,
        update: this.handleUpdate,
    };
    handleClick = (e, t) => {
        let { onClick: n } = this.props;
        n?.(e), t(e);
    };
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return "add_to_library";
        if (e.isPreorder()) return "preorder_wait";
        let i = null != n ? j[n] : null;
        return null != i
            ? i
            : null != t && t.type === T.WTw.UNINSTALLING
              ? "uninstalling"
              : (0, E.isWeb)()
                ? "play"
                : "unsupported_os";
    }
    renderPlayButton() {
        let {
            libraryApplication: e,
            fullWidth: t,
            size: n,
            playButtonVariant: i = "secondary",
            disabledVariant: s,
            onDropdownOpen: a,
            onDropdownClose: r,
            analyticsListSort: o,
            analyticsListIndex: d,
        } = this.props;
        return (0, l.jsx)(b.A, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            variant: i,
            disabledVariant: s,
            onDropdownOpen: a,
            onDropdownClose: r,
            analyticsListSort: o,
            analyticsListIndex: d,
        });
    }
    renderDisabledButton(e, t) {
        let { fullWidth: n, size: i, disabledVariant: s = "secondary", tooltipPosition: r } = this.props,
            o = this.renderProgressBar();
        return (0, l.jsxs)("div", {
            className: null != o ? N.c : void 0,
            children: [
                (0, l.jsxs)("div", {
                    className: N.Yr,
                    children: [
                        (0, l.jsx)(a.$nd, { text: this.getText(e), fullWidth: n, size: i, variant: s, disabled: !0 }),
                        (0, l.jsx)(d.m, { text: t, position: r, children: (0, l.jsx)("div", { className: N.p5 }) }),
                    ],
                }),
                o,
            ],
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = C.z0(t);
        if (null == n) return null;
        let i = n.type === T.WTw.UNINSTALLING ? c.iCB.INDETERMINATE : C.uA(Number(n.progress), Number(n.total));
        return (0, l.jsx)(c.iCB, {
            percent: i,
            size: c.iCB.Sizes.XSMALL,
            foregroundColor: n.paused ? o.A.unsafe_rawColors.PRIMARY_500.css : o.A.unsafe_rawColors.GREEN_360.css,
            backgroundColor: o.A.unsafe_rawColors.TRANSPARENT.css,
            className: N.qB,
        });
    }
    renderActionButton(e, t) {
        let { fullWidth: n, size: i, actionButtonVariant: s = "primary", isCloudSyncing: r } = this.props,
            o = this.renderProgressBar();
        return (0, l.jsxs)("div", {
            className: null != o ? N.c : void 0,
            children: [
                (0, l.jsx)(a.$nd, {
                    text: this.getText(e),
                    fullWidth: n,
                    size: i,
                    variant: s,
                    loading: "uninstalling" === e || r,
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
                null != (e = I.zJ(t.sku)) ? y.intl.formatToPlainString(y.t.Aqe2ZC, { date: e }) : null,
            );
        }
        if ("unsupported_os" === n)
            return this.renderDisabledButton(
                n,
                y.intl.formatToPlainString(y.t.LBm0A4, { operatingSystem: y.intl.string(y.t["0/xHFO"]) }),
            );
        if ("install" === n && e) return this.renderDisabledButton(n, y.intl.string(y.t.QUSQIA));
        let i = this.onClickHandlers[n];
        return null == i ? this.renderDisabledButton(n) : this.renderActionButton(n, i);
    }
}
function R(e) {
    let { libraryApplication: t } = e,
        n = (0, _.p)(),
        [i, s] = (0, r.yK)([x.A, f.A], () => [(0, g.F)(t, x.A, f.A), x.A.getState(t.id, t.branchId)], [t]),
        a = (0, r.bG)([A.A], () => A.A.isSyncing(t.id, t.branchId), [t]),
        o = (0, r.bG)([p.A], () => p.A.hasNoBuild(t.id, t.branchId), [t]);
    return (0, l.jsx)(L, {
        ...e,
        analyticsContext: n,
        actionState: i,
        dispatchState: s,
        isCloudSyncing: a,
        hasNoBuild: o,
    });
}
