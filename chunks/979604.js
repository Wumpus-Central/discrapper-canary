n.d(t, { A: () => R });
var i,
    l = n(627968),
    a = n(64700),
    s = n(821609),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(5373),
    u = n(59636),
    m = n(212245),
    _ = n(626584),
    h = n(976860),
    p = n(568004),
    g = n(227841),
    A = n(465797),
    f = n(194871),
    x = n(966846),
    C = n(674378),
    E = n(723702),
    I = n(541830),
    v = n(715671),
    b = n(598429),
    T = n(652215),
    S = n(985018),
    y = n(170677),
    N =
        (((i = N || {}).PLAY = "play"),
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
class L extends a.Component {
    static defaultProps = { fullWidth: !1, size: "md", hideProgress: !1, tooltipPosition: "top" };
    static ButtonStates = N;
    get analyticsLocation() {
        return { ...this.props.analyticsContext.location, object: T.ZSU.BUTTON_CTA };
    }
    _uninstallStringIndex = null;
    getText(e) {
        switch (("uninstalling" !== e && (this._uninstallStringIndex = null), e)) {
            case "install":
            case "unsupported_os":
                return S.intl.string(S.t.nL0WvC);
            case "update":
                return S.intl.string(S.t.tkhwp9);
            case "paused":
                return S.intl.string(S.t["6EKrh4"]);
            case "locate":
                return S.intl.string(S.t["nIj+a0"]);
            case "uninstalling":
                let t = [
                    S.intl.string(S.t.r9wmKn),
                    S.intl.string(S.t["6CpimS"]),
                    S.intl.string(S.t.ysbNDc),
                    S.intl.string(S.t["TLnXx/"]),
                    S.intl.string(S.t.Qi8mne),
                    S.intl.string(S.t.yvMu3S),
                    S.intl.string(S.t["PnNUZ/"]),
                    S.intl.string(S.t.hU2TEJ),
                    S.intl.string(S.t["YyY51/"]),
                    S.intl.string(S.t.PbHJb3),
                ];
                return (
                    null == this._uninstallStringIndex &&
                        (this._uninstallStringIndex = Math.floor(Math.random() * t.length)),
                    t[this._uninstallStringIndex]
                );
            case "queued":
                return S.intl.string(S.t.TiJg5l);
            case "downloading":
                return S.intl.string(S.t.Tdhepf);
            case "preorder_wait":
                return S.intl.string(S.t.xiXyPc);
            case "add_to_library":
                return S.intl.string(S.t.r3fwuQ);
            default:
                throw Error("Unexpected button state");
        }
    }
    handleAddToLibrary = async () => {
        try {
            let { libraryApplication: e } = this.props;
            await u.V(e.id, e.branchId, e.getFlags() & ~T.hM6.HIDDEN), (0, h.pX)(T.BVt.APPLICATION_LIBRARY);
        } catch (e) {
            new _.A("LibraryApplicationButton").error(e);
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
            disabledVariant: a,
            onDropdownOpen: s,
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
            disabledVariant: a,
            onDropdownOpen: s,
            onDropdownClose: r,
            analyticsListSort: o,
            analyticsListIndex: d,
        });
    }
    renderDisabledButton(e, t) {
        let { fullWidth: n, size: i, disabledVariant: a = "secondary", tooltipPosition: r } = this.props,
            o = this.renderProgressBar();
        return (0, l.jsxs)("div", {
            className: null != o ? y.c : void 0,
            children: [
                (0, l.jsxs)("div", {
                    className: y.Yr,
                    children: [
                        (0, l.jsx)(s.$, { text: this.getText(e), fullWidth: n, size: i, variant: a, disabled: !0 }),
                        (0, l.jsx)(d.m, { text: t, position: r, children: (0, l.jsx)("div", { className: y.p5 }) }),
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
        let i = n.type === T.WTw.UNINSTALLING ? c.i.INDETERMINATE : C.uA(Number(n.progress), Number(n.total));
        return (0, l.jsx)(c.i, {
            percent: i,
            size: c.i.Sizes.XSMALL,
            foregroundColor: n.paused ? o.A.unsafe_rawColors.PRIMARY_500.css : o.A.unsafe_rawColors.GREEN_360.css,
            backgroundColor: o.A.unsafe_rawColors.TRANSPARENT.css,
            className: y.qB,
        });
    }
    renderActionButton(e, t) {
        let { fullWidth: n, size: i, actionButtonVariant: a = "primary", isCloudSyncing: r } = this.props,
            o = this.renderProgressBar();
        return (0, l.jsxs)("div", {
            className: null != o ? y.c : void 0,
            children: [
                (0, l.jsx)(s.$, {
                    text: this.getText(e),
                    fullWidth: n,
                    size: i,
                    variant: a,
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
                null != (e = I.zJ(t.sku)) ? S.intl.formatToPlainString(S.t.Aqe2ZC, { date: e }) : null,
            );
        }
        if ("unsupported_os" === n)
            return this.renderDisabledButton(
                n,
                S.intl.formatToPlainString(S.t.LBm0A4, { operatingSystem: S.intl.string(S.t["0/xHFO"]) }),
            );
        if ("install" === n && e) return this.renderDisabledButton(n, S.intl.string(S.t.QUSQIA));
        let i = this.onClickHandlers[n];
        return null == i ? this.renderDisabledButton(n) : this.renderActionButton(n, i);
    }
}
function R(e) {
    let { libraryApplication: t } = e,
        n = (0, m.p)(),
        [i, a] = (0, r.yK)([f.A, x.A], () => [(0, g.F)(t, f.A, x.A), f.A.getState(t.id, t.branchId)], [t]),
        s = (0, r.bG)([A.A], () => A.A.isSyncing(t.id, t.branchId), [t]),
        o = (0, r.bG)([p.A], () => p.A.hasNoBuild(t.id, t.branchId), [t]);
    return (0, l.jsx)(L, {
        ...e,
        analyticsContext: n,
        actionState: i,
        dispatchState: a,
        isCloudSyncing: s,
        hasNoBuild: o,
    });
}
