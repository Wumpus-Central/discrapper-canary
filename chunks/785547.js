n.d(t, { Z: () => R }), n(415506), n(388685);
var r,
    i,
    l = n(255367),
    a = n(73800),
    o = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(58642),
    d = n(2052),
    p = n(710845),
    m = n(703656),
    f = n(173747),
    h = n(7956),
    g = n(293245),
    _ = n(417363),
    b = n(941128),
    x = n(780570),
    y = n(358085),
    E = n(814225),
    v = n(346329),
    O = n(701560),
    j = n(981631),
    C = n(388032),
    S = n(207178);
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
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
var P = (((i = P || {}).PLAY = 'play'), (i.NOW_PLAYING = 'now_playing'), (i.INSTALL = 'install'), (i.UPDATE = 'update'), (i.PAUSED = 'paused'), (i.LOCATE = 'locate'), (i.UNINSTALLING = 'uninstalling'), (i.QUEUED = 'queued'), (i.DOWNLOADING = 'downloading'), (i.UNSUPPORTED_OS = 'unsupported_os'), (i.ADD_TO_LIBRARY = 'add_to_library'), (i.PREORDER_WAIT = 'preorder_wait'), i);
let A = Object.freeze({
        [j.apO.PLAY]: 'play',
        [j.apO.INSTALL]: 'install',
        [j.apO.UPDATE]: 'update',
        [j.apO.PAUSE]: 'downloading',
        [j.apO.MOVE_UP]: 'queued',
        [j.apO.RESUME]: 'paused'
    }),
    w = () => [C.intl.string(C.t.r9wmKi), C.intl.string(C.t['6CpimZ']), C.intl.string(C.t.ysbNDQ), C.intl.string(C.t.TLnXx8), C.intl.string(C.t.Qi8mnZ), C.intl.string(C.t.yvMu3d), C.intl.string(C.t.PnNUZ2), C.intl.string(C.t.hU2TEB), C.intl.string(C.t.YyY519), C.intl.string(C.t.PbHJb2)];
class Z extends (r = a.Component) {
    get analyticsLocation() {
        return T(N({}, this.props.analyticsContext.location), { object: j.qAy.BUTTON_CTA });
    }
    getText(e) {
        switch (('uninstalling' !== e && (this._uninstallStringIndex = null), e)) {
            case 'install':
            case 'unsupported_os':
                return C.intl.string(C.t.nL0WvL);
            case 'update':
                return C.intl.string(C.t.tkhwp6);
            case 'paused':
                return C.intl.string(C.t['6EKrh4']);
            case 'locate':
                return C.intl.string(C.t['nIj+a2']);
            case 'uninstalling':
                let t = w();
                return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
            case 'queued':
                return C.intl.string(C.t.TiJg5u);
            case 'downloading':
                return C.intl.string(C.t.Tdhepa);
            case 'preorder_wait':
                return C.intl.string(C.t.xiXyPT);
            case 'add_to_library':
                return C.intl.string(C.t.r3fwub);
            default:
                throw Error('Unexpected button state');
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return 'add_to_library';
        if (e.isPreorder()) return 'preorder_wait';
        let r = null != n ? A[n] : null;
        return null != r ? r : null != t && t.type === j.vxO.UNINSTALLING ? 'uninstalling' : (0, y.isWeb)() ? 'play' : 'unsupported_os';
    }
    renderPlayButton() {
        let { libraryApplication: e, fullWidth: t, size: n, color: r, customDisabledColor: i, isPlayShiny: a, onDropdownOpen: o, onDropdownClose: s, analyticsListSort: c, analyticsListIndex: u } = this.props;
        return (0, l.jsx)(O.Z, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            color: r,
            customDisabledColor: i,
            isShiny: a,
            onDropdownOpen: o,
            onDropdownClose: s,
            analyticsListSort: c,
            analyticsListIndex: u
        });
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: r, size: i, customDisabledColor: a, tooltipPosition: o } = this.props;
        return (0, l.jsxs)('div', {
            className: S.disabledButtonWrapper,
            children: [
                (0, l.jsxs)(c.zxk, {
                    className: n,
                    fullWidth: r,
                    size: i,
                    color: null != a ? a : S.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()]
                }),
                (0, l.jsx)(c.ua7, {
                    text: t,
                    position: o,
                    children: (e) => (0, l.jsx)('div', N({ className: S.disabledButtonOverlay }, e))
                })
            ]
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = x.KJ(t);
        if (null == n) return null;
        let r = n.type === j.vxO.UNINSTALLING ? c.Exd.INDETERMINATE : x.xI(Number(n.progress), Number(n.total));
        return (0, l.jsx)(c.Exd, {
            percent: r,
            size: c.Exd.Sizes.XSMALL,
            foregroundColor: n.paused ? s.Z.unsafe_rawColors.PRIMARY_500.css : s.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: s.Z.unsafe_rawColors.TRANSPARENT.css,
            className: S.progress
        });
    }
    renderActionButton(e, t) {
        let { className: n, fullWidth: r, size: i, color: a, isCloudSyncing: o } = this.props;
        return (0, l.jsxs)(c.zxk, {
            className: n,
            fullWidth: r,
            size: i,
            color: null != a ? a : c.zxk.Colors.GREEN,
            submitting: 'uninstalling' === e || o,
            onClick: (e) => this.handleClick(e, t),
            children: [this.getText(e), this.renderProgressBar()]
        });
    }
    render() {
        let { hasNoBuild: e, libraryApplication: t } = this.props,
            n = this.getButtonState();
        if ('play' === n) return this.renderPlayButton();
        if ('preorder_wait' === n)
            return this.renderDisabledButton(
                n,
                (function (e) {
                    let t = E.en(e.sku);
                    return null != t ? C.intl.formatToPlainString(C.t.Aqe2ZG, { date: t }) : null;
                })(t)
            );
        if ('unsupported_os' === n) return this.renderDisabledButton(n, C.intl.formatToPlainString(C.t.LBm0Aw, { operatingSystem: C.intl.string(C.t['0/xHFB']) }));
        if ('install' === n && e) return this.renderDisabledButton(n, C.intl.string(C.t.QUSQIC));
        let r = this.onClickHandlers[n];
        return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r);
    }
    constructor(...e) {
        super(...e),
            I(this, '_uninstallStringIndex', null),
            I(this, 'handleAddToLibrary', async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await u.h(e.id, e.branchId, e.getFlags() & ~j.eHb.HIDDEN), (0, m.uL)(j.Z5c.APPLICATION_LIBRARY);
                } catch (e) {
                    new p.Z('LibraryApplicationButton').error(e);
                }
            }),
            I(this, 'handleInstall', () => {
                let { libraryApplication: e, source: t } = this.props;
                v.installApplication(e.id, e.branchId, t);
            }),
            I(this, 'handleUpdate', () => {
                let { libraryApplication: e } = this.props;
                v.updateApplication(e.id, e.branchId);
            }),
            I(this, 'onClickHandlers', {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate
            }),
            I(this, 'handleClick', (e, t) => {
                let { onClick: n } = this.props;
                null == n || n(e), t(e);
            });
    }
}
function R(e) {
    let { libraryApplication: t } = e,
        n = (0, d.O)(),
        [r, i] = (0, o.Wu)([_.Z, b.Z], () => [(0, h.i)(t, _.Z, b.Z), _.Z.getState(t.id, t.branchId)], [t]),
        a = (0, o.e7)([g.Z], () => g.Z.isSyncing(t.id, t.branchId), [t]),
        s = (0, o.e7)([f.Z], () => f.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, l.jsx)(
        Z,
        T(N({}, e), {
            analyticsContext: n,
            actionState: r,
            dispatchState: i,
            isCloudSyncing: a,
            hasNoBuild: s
        })
    );
}
I(Z, 'defaultProps', {
    fullWidth: !1,
    size: c.zxk.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: 'top'
}),
    I(Z, 'ButtonStates', P);
