(n.d(t, { Z: () => R }), n(415506), n(388685));
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
    g = n(7956),
    _ = n(293245),
    h = n(417363),
    b = n(941128),
    E = n(780570),
    y = n(358085),
    C = n(814225),
    x = n(346329),
    v = n(701560),
    O = n(981631),
    j = n(388032),
    I = n(207178);
function S(e, t, n) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            }));
    }
    return e;
}
function N(e, t) {
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
        [O.apO.PLAY]: 'play',
        [O.apO.INSTALL]: 'install',
        [O.apO.UPDATE]: 'update',
        [O.apO.PAUSE]: 'downloading',
        [O.apO.MOVE_UP]: 'queued',
        [O.apO.RESUME]: 'paused'
    }),
    w = () => [j.intl.string(j.t.r9wmKi), j.intl.string(j.t['6CpimZ']), j.intl.string(j.t.ysbNDQ), j.intl.string(j.t.TLnXx8), j.intl.string(j.t.Qi8mnZ), j.intl.string(j.t.yvMu3d), j.intl.string(j.t.PnNUZ2), j.intl.string(j.t.hU2TEB), j.intl.string(j.t.YyY519), j.intl.string(j.t.PbHJb2)];
class Z extends (r = a.Component) {
    get analyticsLocation() {
        return N(T({}, this.props.analyticsContext.location), { object: O.qAy.BUTTON_CTA });
    }
    getText(e) {
        switch (('uninstalling' !== e && (this._uninstallStringIndex = null), e)) {
            case 'install':
            case 'unsupported_os':
                return j.intl.string(j.t.nL0WvL);
            case 'update':
                return j.intl.string(j.t.tkhwp6);
            case 'paused':
                return j.intl.string(j.t['6EKrh4']);
            case 'locate':
                return j.intl.string(j.t['nIj+a2']);
            case 'uninstalling':
                let t = w();
                return (null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex]);
            case 'queued':
                return j.intl.string(j.t.TiJg5u);
            case 'downloading':
                return j.intl.string(j.t.Tdhepa);
            case 'preorder_wait':
                return j.intl.string(j.t.xiXyPT);
            case 'add_to_library':
                return j.intl.string(j.t.r3fwub);
            default:
                throw Error('Unexpected button state');
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return 'add_to_library';
        if (e.isPreorder()) return 'preorder_wait';
        let r = null != n ? A[n] : null;
        return null != r ? r : null != t && t.type === O.vxO.UNINSTALLING ? 'uninstalling' : (0, y.isWeb)() ? 'play' : 'unsupported_os';
    }
    renderPlayButton() {
        let { libraryApplication: e, fullWidth: t, size: n, color: r, customDisabledColor: i, isPlayShiny: a, onDropdownOpen: o, onDropdownClose: s, analyticsListSort: c, analyticsListIndex: u } = this.props;
        return (0, l.jsx)(v.Z, {
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
            className: I.disabledButtonWrapper,
            children: [
                (0, l.jsxs)(c.zxk, {
                    className: n,
                    fullWidth: r,
                    size: i,
                    color: null != a ? a : I.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()]
                }),
                (0, l.jsx)(c.ua7, {
                    text: t,
                    position: o,
                    children: (e) => (0, l.jsx)('div', T({ className: I.disabledButtonOverlay }, e))
                })
            ]
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = E.KJ(t);
        if (null == n) return null;
        let r = n.type === O.vxO.UNINSTALLING ? c.Exd.INDETERMINATE : E.xI(Number(n.progress), Number(n.total));
        return (0, l.jsx)(c.Exd, {
            percent: r,
            size: c.Exd.Sizes.XSMALL,
            foregroundColor: n.paused ? s.Z.unsafe_rawColors.PRIMARY_500.css : s.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: s.Z.unsafe_rawColors.TRANSPARENT.css,
            className: I.progress
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
                    let t = C.en(e.sku);
                    return null != t ? j.intl.formatToPlainString(j.t.Aqe2ZG, { date: t }) : null;
                })(t)
            );
        if ('unsupported_os' === n) return this.renderDisabledButton(n, j.intl.formatToPlainString(j.t.LBm0Aw, { operatingSystem: j.intl.string(j.t['0/xHFB']) }));
        if ('install' === n && e) return this.renderDisabledButton(n, j.intl.string(j.t.QUSQIC));
        let r = this.onClickHandlers[n];
        return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r);
    }
    constructor(...e) {
        (super(...e),
            S(this, '_uninstallStringIndex', null),
            S(this, 'handleAddToLibrary', async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    (await u.h(e.id, e.branchId, e.getFlags() & ~O.eHb.HIDDEN), (0, m.uL)(O.Z5c.APPLICATION_LIBRARY));
                } catch (e) {
                    new p.Z('LibraryApplicationButton').error(e);
                }
            }),
            S(this, 'handleInstall', () => {
                let { libraryApplication: e, source: t } = this.props;
                x.installApplication(e.id, e.branchId, t);
            }),
            S(this, 'handleUpdate', () => {
                let { libraryApplication: e } = this.props;
                x.updateApplication(e.id, e.branchId);
            }),
            S(this, 'onClickHandlers', {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate
            }),
            S(this, 'handleClick', (e, t) => {
                let { onClick: n } = this.props;
                (null == n || n(e), t(e));
            }));
    }
}
function R(e) {
    let { libraryApplication: t } = e,
        n = (0, d.O)(),
        [r, i] = (0, o.Wu)([h.Z, b.Z], () => [(0, g.i)(t, h.Z, b.Z), h.Z.getState(t.id, t.branchId)], [t]),
        a = (0, o.e7)([_.Z], () => _.Z.isSyncing(t.id, t.branchId), [t]),
        s = (0, o.e7)([f.Z], () => f.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, l.jsx)(
        Z,
        N(T({}, e), {
            analyticsContext: n,
            actionState: r,
            dispatchState: i,
            isCloudSyncing: a,
            hasNoBuild: s
        })
    );
}
(S(Z, 'defaultProps', {
    fullWidth: !1,
    size: c.zxk.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: 'top'
}),
    S(Z, 'ButtonStates', P));
