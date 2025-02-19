n.d(t, { Z: () => el }), n(47120), n(26686), n(301563), n(566702), n(411104);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(268146),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    g = n(570140),
    p = n(661111),
    h = n(179658),
    f = n(491428),
    N = n(225433),
    x = n(484614),
    b = n(615287),
    _ = n(386506),
    E = n(865427),
    j = n(802098),
    C = n(663993),
    O = n(600164),
    v = n(118012),
    S = n(482215),
    T = n(38618),
    I = n(32300),
    y = n(371651),
    A = n(388627),
    P = n(921801),
    R = n(857192),
    D = n(558724),
    Z = n(808506),
    w = n(998502),
    k = n(210887),
    W = n(601948),
    L = n(726985),
    B = n(981631),
    M = n(908442),
    U = n(191714),
    V = n(921534),
    G = n(455812),
    F = n(28149);
function H(e, t, n) {
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
function z(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
let K = ['discord_web', 'discord_marketing', 'discord_developers', 'discord_ios', 'discord_android'],
    q = [
        {
            value: 'branch',
            label: 'Branch Name'
        },
        {
            value: 'id',
            label: 'Commit SHA'
        }
    ];
function X(e) {
    return 'discord_ios' in e || 'discord_android' in e;
}
class J extends i.Component {
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: i, error: s } = this.props;
        return (0, r.jsxs)(O.Z, {
            direction: O.Z.Direction.VERTICAL,
            className: a()(U.buildOverrideGroup, G.marginBottom20, V.card, U.row),
            children: [
                (0, r.jsx)(N.Z, {
                    className: a()(U.removeBuildOverride, { [U.removeBuildOverrideDisabled]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride
                }),
                (0, r.jsxs)(O.Z, {
                    className: G.marginBottom8,
                    children: [
                        (0, r.jsx)(O.Z.Child, {
                            basis: '50%',
                            children: (0, r.jsx)(m.xJW, {
                                title: 'Override Type',
                                className: U.item,
                                children: (0, r.jsx)(m.q4e, {
                                    options: q,
                                    onChange: this.handleOverrideTypeChanged,
                                    value: t,
                                    isDisabled: i
                                })
                            })
                        }),
                        (0, r.jsx)(O.Z.Child, {
                            basis: '50%',
                            children: (0, r.jsx)(m.xJW, {
                                title: 'branch' === t ? 'Branch Name' : 'Commit SHA',
                                className: U.item,
                                children: (0, r.jsx)(m.oil, {
                                    value: n,
                                    onChange: this.handleOverrideIdChanged,
                                    disabled: i
                                })
                            })
                        })
                    ]
                }),
                (0, r.jsxs)(O.Z.Child, {
                    children: [
                        null != s &&
                            '' !== s &&
                            (0, r.jsx)(m.R94, {
                                className: U.item,
                                style: { color: u.Z.unsafe_rawColors.RED_400.css },
                                type: m.R94.Types.DESCRIPTION,
                                children: s
                            }),
                        (0, r.jsxs)(m.R94, {
                            className: U.item,
                            type: m.R94.Types.DESCRIPTION,
                            children: ['This controls the build that will be served for the ', (0, r.jsx)('code', { children: e }), ' project.']
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            H(this, 'handleRemoveBuildOverride', () => {
                this.props.onBuildOverrideRemoved(this.props.project);
            }),
            H(this, 'handleOverrideIdChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, { id: e });
            }),
            H(this, 'handleOverrideTypeChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, {
                    type: e,
                    id: ''
                });
            });
    }
}
class Q extends i.Component {
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, E.Ce)();
        this.setState({
            loading: !1,
            buildOverrides: e,
            loadedBuildOverrides: o().cloneDeep(e),
            errors: {}
        });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !o().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return o().without(K, ...t);
    }
    renderEmpty() {
        return (0, r.jsxs)(m.ubH, {
            theme: k.Z.theme,
            className: a()(G.marginTop40, G.marginBottom20),
            children: [
                (0, r.jsx)(m.oxh, {
                    darkSrc: n(770227),
                    lightSrc: n(398684),
                    width: 294,
                    height: 192
                }),
                (0, r.jsx)(m.OZU, { children: 'You have no build overrides configured.' })
            ]
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : o().map(e, (e, i) =>
                  (0, r.jsx)(
                      J,
                      {
                          project: i,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[i],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved
                      },
                      i
                  )
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, r.jsx)(O.Z, {
                  grow: 0,
                  direction: O.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, r.jsx)(O.Z.Child, {
                      grow: 0,
                      children: (0, r.jsx)(m.zxk, {
                          onClick: () => location.reload(),
                          color: m.zxk.Colors.PRIMARY,
                          children: 'Reload App'
                      })
                  })
              });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, r.jsx)(O.Z, {
                  grow: 0,
                  direction: O.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, r.jsx)(O.Z.Child, {
                      grow: 0,
                      children: (0, r.jsx)(m.zxk, {
                          onClick: this.handleLinkGeneration,
                          color: m.zxk.Colors.BRAND,
                          children: 'Generate Public Link'
                      })
                  })
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, r.jsxs)(O.Z, {
            grow: 0,
            direction: O.Z.Direction.HORIZONTAL_REVERSE,
            children: [
                (0, r.jsx)(O.Z.Child, {
                    grow: 0,
                    children: (0, r.jsx)(m.zxk, {
                        disabled: X(null != t ? t : {}),
                        onClick: this.handleSaveChanges,
                        submitting: e,
                        color: m.zxk.Colors.GREEN,
                        children: 'Save Build Overrides'
                    })
                }),
                (0, r.jsx)(O.Z.Child, {
                    grow: 0,
                    children: (0, r.jsx)(m.zxk, {
                        onClick: this.handleDiscardChanges,
                        disabled: e,
                        color: m.zxk.Colors.RED,
                        children: 'Discard Changes'
                    })
                })
            ]
        });
    }
    render() {
        let e;
        let { loading: t, saving: n, buildOverrides: i } = this.state;
        e = t ? (0, r.jsx)(m.$jN, { className: G.marginTop20 }) : null != i && 0 === Object.keys(i).length ? this.renderEmpty() : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            a =
                X(null != i ? i : {}) && 'stable' !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, r.jsx)(m.Text, {
                          color: 'text-danger',
                          variant: 'text-md/normal',
                          children: 'Mobile build overrides must be generated using the desktop/web stable client for now!'
                      })
                    : null;
        return (0, r.jsx)(P.F, {
            setting: L.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, r.jsxs)(m.hjN, {
                className: G.marginTop60,
                children: [
                    (0, r.jsxs)(O.Z, {
                        className: G.marginBottom20,
                        children: [
                            (0, r.jsx)(O.Z.Child, {
                                children: (0, r.jsx)(m.vwX, {
                                    tag: m.RB0.H1,
                                    children: 'Build Overrides'
                                })
                            }),
                            (0, r.jsx)(O.Z.Child, {
                                grow: 0,
                                children: (0, r.jsx)(m.zxk, {
                                    size: m.PhG.SMALL,
                                    onClick: this.handleAddBuildOverride,
                                    disabled: !s,
                                    children: 'Add Build Override'
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(m.$i$, {}),
                    (0, r.jsxs)(O.Z, {
                        direction: O.Z.Direction.VERTICAL,
                        children: [
                            a,
                            e,
                            (0, r.jsxs)(O.Z, {
                                grow: 0,
                                direction: O.Z.Direction.HORIZONTAL_REVERSE,
                                children: [this.renderRefreshButton(), this.renderSaveButton(), this.renderLinkButton()]
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            H(this, 'state', {
                loading: !0,
                buildOverrides: {},
                loadedBuildOverrides: {},
                errors: {},
                saving: !1,
                didSave: !1
            }),
            H(this, 'handleAddBuildOverride', async () => {
                var e;
                let t = await ((e = this.getAvailableProjects()),
                new Promise((t) => {
                    (0, m.h7j)((n) => {
                        let i = (e) => {
                            n.onClose(), t(e);
                        };
                        return (0, r.jsxs)(
                            m.Y0X,
                            Y(z({}, n), {
                                'aria-label': 'Choose A Project to Override',
                                children: [
                                    (0, r.jsx)(m.xBx, {
                                        separator: !1,
                                        children: (0, r.jsx)(m.X6q, {
                                            variant: 'heading-lg/semibold',
                                            children: 'Choose A Project to Override'
                                        })
                                    }),
                                    (0, r.jsx)(m.hzk, {
                                        children: (0, r.jsx)('div', {
                                            className: U.buildOverrideList,
                                            children: e.map((e) =>
                                                (0, r.jsx)(
                                                    m.zxk,
                                                    {
                                                        value: e,
                                                        color: m.zxk.Colors.GREEN,
                                                        onClick: () => i(e),
                                                        children: e
                                                    },
                                                    e
                                                )
                                            )
                                        })
                                    }),
                                    (0, r.jsx)(m.mzw, {
                                        children: (0, r.jsx)(m.zxk, {
                                            color: m.zxk.Colors.PRIMARY,
                                            look: m.zxk.Looks.LINK,
                                            onClick: () => i(null),
                                            children: 'Nevermind'
                                        })
                                    })
                                ]
                            })
                        );
                    });
                }));
                if (null == t) return;
                let n = Y(z({}, this.state.buildOverrides), {
                    [t]: {
                        type: 'branch',
                        id: ''
                    }
                });
                this.setState({ buildOverrides: n });
            }),
            H(this, 'handleBuildOverrideUpdated', (e, t) => {
                let { buildOverrides: n } = this.state,
                    r = z({}, null != n ? n[e] : {}, t),
                    i = Y(z({}, this.state.buildOverrides), { [e]: r });
                this.setState({ buildOverrides: i });
            }),
            H(this, 'handleBuildOverrideRemoved', (e) => {
                let t = z({}, this.state.buildOverrides);
                delete t[e], this.setState({ buildOverrides: t });
            }),
            H(this, 'handleDiscardChanges', () => {
                this.setState({
                    buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1
                });
            }),
            H(this, 'handleSaveChanges', async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, _.aD)(e);
                if (200 === t.status) {
                    let e = t.body;
                    this.setState({
                        buildOverrides: e,
                        loadedBuildOverrides: o().cloneDeep(e),
                        errors: {},
                        didSave: !0,
                        saving: !1
                    });
                } else if (400 === t.status) {
                    let e = t.body;
                    this.setState({
                        errors: e,
                        saving: !1,
                        didSave: !1
                    });
                } else
                    this.setState({
                        saving: !1,
                        didSave: !1
                    });
            }),
            H(this, 'handleLinkGeneration', () => {
                let { buildOverrides: e } = this.state;
                (0, m.h7j)((t) => (0, r.jsx)($, Y(z({}, t), { buildOverrides: e })));
            });
    }
}
class $ extends i.Component {
    isMobile() {
        var e;
        return X(null !== (e = this.props.buildOverrides) && void 0 !== e ? e : {});
    }
    renderSettingsForm() {
        let { ttlSeconds: e, releaseChannel: t, userIdEntry: n, userIdEntryError: i, allowedVersions: s, allowedVersionEntry: a, allowedVersionEntryError: l, allowLoggedOut: o, experiments: c, experimentsError: d } = this.state,
            u = M.S6.find((t) => t.value === e),
            g = s.map((e) => ({
                label: e,
                value: e
            }));
        return (0, r.jsxs)(O.Z.Child, {
            basis: '70%',
            children: [
                (0, r.jsx)(m.xJW, {
                    title: 'Expire After',
                    className: G.marginBottom20,
                    children: (0, r.jsx)(m.q4e, {
                        value: null != u ? u.value : null,
                        options: M.S6,
                        onChange: this.handleExpirationChange
                    })
                }),
                this.isMobile()
                    ? null
                    : (0, r.jsx)(m.xJW, {
                          title: 'Release Channel',
                          className: G.marginBottom20,
                          children: (0, r.jsx)(m.q4e, {
                              value: t,
                              options: M.F$,
                              onChange: this.handleReleaseChannelChange
                          })
                      }),
                this.isMobile()
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.xJW, {
                                  title: 'Add allowed app version (required)',
                                  className: G.marginBottom20,
                                  children: (0, r.jsxs)(O.Z, {
                                      direction: O.Z.Direction.HORIZONTAL,
                                      children: [
                                          (0, r.jsx)(O.Z.Child, {
                                              wrap: !0,
                                              basis: '90%',
                                              children: (0, r.jsx)(m.oil, {
                                                  autoFocus: !0,
                                                  value: a,
                                                  onKeyPress: this.handleAllowedVersionEnter,
                                                  error: l,
                                                  onChange: this.handleAllowedVersionEntry,
                                                  placeholder: 'Example: 34'
                                              })
                                          }),
                                          (0, r.jsx)(m.zxk, {
                                              onClick: this.handleAddAllowedVersion,
                                              children: 'Add'
                                          })
                                      ]
                                  })
                              }),
                              (0, r.jsx)(m.xJW, {
                                  title: 'Remove allowed app version',
                                  className: G.marginBottom20,
                                  children: (0, r.jsx)(m.q4e, {
                                      value: null,
                                      options: g,
                                      onChange: this.handleRemoveAllowedVersion,
                                      isDisabled: 0 === s.length
                                  })
                              })
                          ]
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, r.jsx)(r.Fragment, {
                          children: (0, r.jsxs)(m.xJW, {
                              title: 'Limit to User IDs (optional)',
                              className: G.marginBottom20,
                              children: [
                                  (0, r.jsx)(O.Z, {
                                      direction: O.Z.Direction.HORIZONTAL,
                                      children: (0, r.jsx)(O.Z.Child, {
                                          wrap: !0,
                                          basis: '90%',
                                          children: (0, r.jsx)(m.Kx8, {
                                              value: n,
                                              error: i,
                                              onBlur: () => this.setUserEntryError(''),
                                              onChange: this.handleUserIDEntry
                                          })
                                      })
                                  }),
                                  (0, r.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      className: G.marginTop8,
                                      children: 'User IDs can be separated by whitespace or commas.'
                                  })
                              ]
                          })
                      }),
                (0, r.jsxs)(m.xJW, {
                    title: 'Client Experiment Override',
                    className: G.marginBottom20,
                    children: [
                        (0, r.jsx)(O.Z, {
                            direction: O.Z.Direction.HORIZONTAL,
                            children: (0, r.jsx)(O.Z.Child, {
                                wrap: !0,
                                basis: '90%',
                                children: (0, r.jsx)(m.Kx8, {
                                    value: c,
                                    error: d,
                                    onChange: this.handleExperiments,
                                    placeholder: '{"2022-01_threads":1}'
                                })
                            })
                        }),
                        (0, r.jsx)(m.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: G.marginTop8,
                            children: 'Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.'
                        })
                    ]
                }),
                (0, r.jsx)(m.j7V, {
                    onChange: this.handleAllowLoggedOut,
                    value: o,
                    children: 'Allow logged out users'
                })
            ]
        });
    }
    renderPayloadBlock() {
        let e = JSON.stringify(this.generatePayload(), null, 2),
            t = () => e,
            i = (0, r.jsx)(C.GI, {
                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                webpackId: 364964,
                renderFallback: t,
                render: (n) => {
                    let i = n.highlight('json', e, !0);
                    return null == i
                        ? t()
                        : (0, r.jsx)('code', {
                              className: 'hljs scroller '.concat(i.language, ' ').concat(F.scrollbarGhost, ' ').concat(U.codebox),
                              dangerouslySetInnerHTML: { __html: i.value }
                          });
                }
            });
        return (0, r.jsx)(O.Z.Child, { children: (0, r.jsx)(m.Zbd, { children: (0, r.jsx)('pre', { children: i }) }) });
    }
    renderLinkForm() {
        let { statusTextColor: e, statusText: t, publicLink: n } = this.state;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(m.xJW, {
                    title: 'Signed Link',
                    children: (0, r.jsxs)(O.Z, {
                        children: [
                            (0, r.jsx)(O.Z.Child, {
                                wrap: !0,
                                basis: '75%',
                                children: (0, r.jsx)(x.Z, { value: n })
                            }),
                            (0, r.jsx)(m.zxk, {
                                onClick: this.handleGenerateLink,
                                children: 'Generate Link'
                            })
                        ]
                    })
                }),
                (0, r.jsx)(v.Z, {
                    color: e,
                    className: ''.concat(G.marginBottom8, ' ').concat(G.marginTop8),
                    children: t
                })
            ]
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props;
        return (0, r.jsxs)(m.Y0X, {
            size: m.CgR.LARGE,
            transitionState: t,
            'aria-label': 'Generate Public Build Override Link',
            children: [
                (0, r.jsxs)(m.xBx, {
                    justify: O.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, r.jsx)(m.X6q, {
                            variant: 'heading-lg/semibold',
                            children: 'Generate Public Build Override Link'
                        }),
                        (0, r.jsx)(m.olH, { onClick: e })
                    ]
                }),
                (0, r.jsxs)(m.hzk, {
                    children: [
                        (0, r.jsxs)(O.Z, {
                            children: [this.renderSettingsForm(), this.renderPayloadBlock()]
                        }),
                        this.renderLinkForm()
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            H(this, 'state', {
                ttlSeconds: 3600,
                releaseChannel: 'all',
                userIds: new Set(),
                userIdEntry: '',
                userIdEntryError: null,
                allowedVersions: [],
                allowedVersionEntry: '',
                allowedVersionEntryError: null,
                publicLink: ' ',
                statusText: null,
                statusTextColor: v.Z.Colors.STATUS_RED,
                allowLoggedOut: !1
            }),
            H(this, 'setUserEntryError', (e) => {
                this.setState({ userIdEntryError: e });
            }),
            H(this, 'setStatusMessage', (e, t) => {
                this.setState({
                    statusText: e,
                    statusTextColor: null != t ? t : v.Z.Colors.STATUS_RED
                });
            }),
            H(this, 'handleUserIDEntry', (e) => {
                if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError('User IDs are numbers!');
                let t = new Set(e.split(/[,\s]+/).filter(Boolean));
                this.setState({
                    userIdEntry: e,
                    userIds: t
                });
            }),
            H(this, 'setAllowedVersionError', (e) => {
                this.setState({ allowedVersionEntryError: e });
            }),
            H(this, 'handleAllowedVersionEntry', (e) => {
                this.setState({ allowedVersionEntry: e });
            }),
            H(this, 'handleAllowedVersionEnter', (e) => {
                e.charCode === B.yXg.ENTER && this.handleAddAllowedVersion();
            }),
            H(this, 'handleAddAllowedVersion', () => {
                let { allowedVersions: e, allowedVersionEntry: t } = this.state;
                return 0 === (t = t.trim()).length
                    ? this.setAllowedVersionError('Enter a valid version number!')
                    : e.indexOf(t) >= 0
                      ? this.setAllowedVersionError('You already added that version!')
                      : void this.setState({
                            allowedVersions: [...e, t],
                            allowedVersionEntry: '',
                            allowedVersionEntryError: ''
                        });
            }),
            H(this, 'handleRemoveAllowedVersion', (e) => {
                let { allowedVersions: t } = this.state;
                (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
            }),
            H(this, 'handleAllowLoggedOut', (e) => {
                this.setState({ allowLoggedOut: e });
            }),
            H(this, 'handleExpirationChange', (e) => {
                this.setState({ ttlSeconds: e });
            }),
            H(this, 'handleReleaseChannelChange', (e) => {
                this.setState({ releaseChannel: e });
            }),
            H(this, 'handleExperiments', (e) => {
                if (0 === e.trim().length) {
                    this.setState({ experimentsError: void 0 });
                    return;
                }
                try {
                    let t = JSON.parse(e);
                    for (let e in t) {
                        if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/)) {
                            this.setState({ experimentsError: ''.concat(e, ' is an invalid experiment name') });
                            return;
                        }
                        if ('number' != typeof t[e]) {
                            this.setState({ experimentsError: ''.concat(e, ' has an invalid bucket override') });
                            return;
                        }
                    }
                } catch (e) {
                    this.setState({ experimentsError: 'Unable to parse experiments '.concat(e.message) });
                    return;
                }
                this.setState({
                    experiments: e,
                    experimentsError: void 0
                });
            }),
            H(this, 'generatePayload', () => ({
                overrides: this.props.buildOverrides,
                meta: {
                    release_channel: 'all' === this.state.releaseChannel ? null : this.state.releaseChannel,
                    ttl_seconds: this.state.ttlSeconds,
                    user_ids: Array.from(this.state.userIds),
                    allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
                    allow_logged_out: this.state.allowLoggedOut,
                    experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
                }
            })),
            H(this, 'handleGenerateLink', async () => {
                if (this.isMobile() && 0 === this.state.allowedVersions.length) {
                    this.setAllowedVersionError('You must add at least one allowed version for iOS');
                    return;
                }
                this.setStatusMessage(null);
                let e = this.generatePayload(),
                    t = await (0, _.M3)(e);
                !1 !== t.error ? this.setStatusMessage(JSON.stringify(t.error), v.Z.Colors.STATUS_RED) : (this.setState({ publicLink: t.url.toString() }), 0 === e.meta.user_ids.length && this.setStatusMessage('Warning! No users added to the whitelist! This link could be used by anyone to override their build.', v.Z.Colors.STATUS_YELLOW));
            });
    }
}
function ee(e) {
    let { layoutDebuggingEnabled: t, cssDebuggingEnabled: n } = e,
        { horizontalSpacing: s, verticalSpacing: a, maxHorizontalSpacing: l, maxVerticalSpacing: o } = (0, S.i)(),
        c = i.useMemo(() => Array.from({ length: l + 1 }, (e, t) => t), [l]),
        d = i.useMemo(() => Array.from({ length: o + 1 }, (e, t) => t), [o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.vwX, {
                tag: m.RB0.H1,
                children: 'Design Tools'
            }),
            (0, r.jsx)(P.F, {
                setting: L.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, r.jsx)(m.j7V, {
                    value: n,
                    note: 'Display raw colors as pink. Toggling this will refresh the browser.',
                    onChange: (e) => {
                        (0, h.y)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                    children: 'Enable CSS Debugging'
                })
            }),
            (0, r.jsx)(P.F, {
                setting: L.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, r.jsx)(m.j7V, {
                    value: t,
                    note: 'Renders a grid on top of the app to help debug layout alignment issues.',
                    onChange: (e) => {
                        (0, h.y)({ layoutDebuggingEnabled: e });
                    },
                    children: 'Enable Layout Debugging'
                })
            }),
            (0, r.jsxs)(P.F, {
                setting: L.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, r.jsxs)(m.hjN, {
                        className: G.marginBottom20,
                        children: [
                            (0, r.jsx)(m.vwX, { children: 'Horizontal Grid Spacing' }),
                            (0, r.jsx)(m.R94, {
                                className: G.marginBottom20,
                                type: m.geA.DESCRIPTION,
                                children: 'Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.'
                            }),
                            (0, r.jsx)(m.iRW, {
                                initialValue: s,
                                minValue: 0,
                                maxValue: l,
                                markers: c,
                                onValueChange: (e) => S.i.getState().setHorizontalSpacing(e),
                                onValueRender: (e) => ''.concat(Math.round(e), 'px'),
                                onMarkerRender: (e) => (e % 4 == 0 ? ''.concat(e) : void 0),
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, r.jsxs)(m.hjN, {
                        className: G.marginBottom20,
                        children: [
                            (0, r.jsx)(m.vwX, { children: 'Vertical Grid Spacing' }),
                            (0, r.jsx)(m.R94, {
                                className: G.marginBottom20,
                                type: m.geA.DESCRIPTION,
                                children: 'Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.'
                            }),
                            (0, r.jsx)(m.iRW, {
                                initialValue: a,
                                minValue: 0,
                                maxValue: o,
                                markers: d,
                                onValueChange: (e) => S.i.getState().setVerticalSpacing(e),
                                onValueRender: (e) => ''.concat(Math.round(e), 'px'),
                                onMarkerRender: (e) => (e % 4 == 0 ? ''.concat(e) : void 0),
                                equidistant: !0
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function et() {
    throw Error('Send help');
}
function en() {
    let e = (0, I.XE)('developer_settings'),
        t = (0, d.e7)([y.default], () => y.default.getForcedRenderMode()),
        [n, s] = i.useState(!1),
        [a, l] = i.useState(''),
        o = e || t === b.R5.OUT_OF_PROCESS_V2 || t === b.R5.OUT_OF_PROCESS_V3 || t === b.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
    return (i.useEffect(() => {
        (async () => {
            l(await (0, Z.Y)());
        })();
    }, []),
    n)
        ? {}
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: [U.buttonsContainer, G.marginBottom20].join(' '),
                      children: [
                          (0, r.jsx)(P.F, {
                              setting: L.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: o
                                  ? (0, r.jsx)(m.zxk, {
                                        onClick: () => (0, A.fK)(),
                                        children: 'Open Overlay'
                                    })
                                  : (0, r.jsx)(m.zxk, {
                                        onClick: () => window.open(a, '_blank'),
                                        disabled: '' === a,
                                        children: 'Open Overlay'
                                    })
                          }),
                          (0, r.jsx)(P.F, {
                              setting: L.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, r.jsx)(m.zxk, {
                                  onClick: () => {
                                      T.Z.getSocket().close(), T.Z.getSocket().connect();
                                  },
                                  children: 'Reset Socket'
                              })
                          }),
                          (0, r.jsx)(P.F, {
                              setting: L.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, r.jsx)(m.zxk, {
                                  onClick: () => {
                                      g.Z.dispatch({
                                          type: 'CLEAR_CACHES',
                                          reason: 'Requested by user',
                                          preventWritingCachesAgainThisSession: !0,
                                          resetSocket: !0
                                      });
                                  },
                                  children: 'Clear Caches'
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)(P.F, {
                      setting: L.s6.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, r.jsx)(m.hjN, {
                          title: 'Crashes',
                          tag: m.RB0.H1,
                          children: (0, r.jsxs)('div', {
                              className: U.buttonsContainer,
                              children: [
                                  (0, r.jsx)(m.q4e, {
                                      value: void 0,
                                      options: [
                                          {
                                              value: void 0,
                                              label: 'Native libdiscord crash'
                                          },
                                          {
                                              value: 0,
                                              label: 'Abort()'
                                          },
                                          {
                                              value: 1,
                                              label: 'SIGSEGV()'
                                          },
                                          {
                                              value: 2,
                                              label: 'EXCEPTION_ACCESS_VIOLATION'
                                          },
                                          {
                                              value: 3,
                                              label: 'RaiseFailFastException'
                                          },
                                          {
                                              value: 4,
                                              label: 'Out of Memory'
                                          }
                                      ],
                                      onChange: (e) => null != e && w.ZP.crash(e)
                                  }),
                                  (0, r.jsx)(m.q4e, {
                                      value: void 0,
                                      options: [
                                          {
                                              value: void 0,
                                              label: 'Native JS crash'
                                          },
                                          {
                                              value: c.Xo.RendererProcessDelayed,
                                              label: 'Delayed exception in renderer process'
                                          },
                                          {
                                              value: c.Xo.RendererProcess,
                                              label: 'Exception in renderer process'
                                          },
                                          {
                                              value: c.Xo.MainProcess,
                                              label: 'Exception in main process'
                                          }
                                      ],
                                      onChange: (e) => (null != e ? void w.ZP.triggerJSException(e) : void 0)
                                  }),
                                  (0, r.jsx)(m.zxk, {
                                      onClick: () => s(!0),
                                      children: 'React Crash'
                                  }),
                                  (0, r.jsx)(m.zxk, {
                                      onClick: et,
                                      children: 'onClick Throw'
                                  })
                              ]
                          })
                      })
                  })
              ]
          });
}
let er = d.ZP.connectStores([R.default], () => ({
    isTracingRequests: R.default.isTracingRequests,
    isForcedCanary: R.default.isForcedCanary,
    isLoggingGatewayEvents: R.default.isLoggingGatewayEvents,
    isLoggingOverlayEvents: R.default.isLoggingOverlayEvents,
    isLoggingAnalyticsEvents: R.default.isLoggingAnalyticsEvents,
    isAxeEnabled: R.default.isAxeEnabled,
    cssDebuggingEnabled: R.default.cssDebuggingEnabled,
    layoutDebuggingEnabled: R.default.layoutDebuggingEnabled,
    isSourceMapsEnabled: R.default.sourceMapsEnabled,
    isAnalyticsDebuggerEnabled: R.default.isAnalyticsDebuggerEnabled,
    isIdleStatusIndicatorEnabled: R.default.isIdleStatusIndicatorEnabled,
    onlyShowPreviewAppCollections: R.default.onlyShowPreviewAppCollections,
    disableAppCollectionsCache: R.default.disableAppCollectionsCache,
    preventPopoutClose: R.default.preventPopoutClose
}))((e) => {
    let { isTracingRequests: t, isForcedCanary: n, isLoggingGatewayEvents: i, isLoggingOverlayEvents: s, isLoggingAnalyticsEvents: a, isAxeEnabled: l, cssDebuggingEnabled: o, layoutDebuggingEnabled: c, isSourceMapsEnabled: d, isAnalyticsDebuggerEnabled: u, isIdleStatusIndicatorEnabled: g, onlyShowPreviewAppCollections: p, disableAppCollectionsCache: f, preventPopoutClose: N } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P.F, {
                setting: L.s6.DEVELOPER_OPTIONS_FLAGS,
                children: (0, r.jsxs)(m.hjN, {
                    title: 'Developer Flags',
                    tag: m.RB0.H1,
                    children: [
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                            children: (0, r.jsx)(m.j7V, {
                                value: t,
                                note: 'Force trace all client requests with APM',
                                onChange: (e) => (0, h.y)({ trace: e }),
                                children: 'Enable Tracing Requests'
                            })
                        }),
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
                            children: (0, r.jsx)(m.j7V, {
                                value: n,
                                note: 'Force all API requests to canary instances',
                                onChange: (e) => (0, h.y)({ canary: e }),
                                children: 'Enable Forced Canary'
                            })
                        }),
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                            children: (0, r.jsx)(m.j7V, {
                                value: i,
                                note: 'Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.',
                                onChange: (e) => (0, h.y)({ logGatewayEvents: e }),
                                children: 'Enable Logging of Gateway Events to Console'
                            })
                        }),
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                            children: (0, r.jsx)(m.j7V, {
                                value: s,
                                note: 'Logs all overlay related RPC events. Super noisy if an overlay is connected',
                                onChange: (e) => (0, h.y)({ logOverlayEvents: e }),
                                children: 'Enable Logging of Overlay RPC Events & Commands'
                            })
                        }),
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                            children: (0, r.jsx)(m.j7V, {
                                value: a,
                                note: 'Logs all analytics events to the developer console',
                                onChange: (e) => (0, h.y)({ logAnalyticsEvents: e }),
                                children: 'Enable Logging of Analytics Events'
                            })
                        }),
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
                            children: (0, r.jsx)(m.j7V, {
                                value: d,
                                note: 'Only enable on devices you trust.',
                                onChange: (e) => (0, h.y)({ sourceMapsEnabled: e }),
                                children: 'Enable source maps to be loaded on this client'
                            })
                        }),
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                            children: (0, r.jsx)(m.j7V, {
                                value: u,
                                note: 'Displays a floating debugger with viewed impressions',
                                onChange: (e) => (0, h.y)({ analyticsDebuggerEnabled: e }),
                                children: 'Enable standard analytics debugger view'
                            })
                        }),
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                            children: (0, r.jsx)(m.j7V, {
                                value: g,
                                note: 'Displays a floating idle status indicator',
                                onChange: (e) => (0, h.y)({ idleStatusIndicatorEnabled: e }),
                                children: 'Enable idle status indicator'
                            })
                        }),
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                            children: (0, r.jsx)(m.j7V, {
                                value: l,
                                note: 'Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development',
                                onChange: (e) => (0, h.y)({ axeEnabled: e }),
                                children: 'Enable Accessibility Auditing'
                            })
                        }),
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                            children: (0, r.jsx)(m.j7V, {
                                value: N,
                                note: 'This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.',
                                onChange: (e) => (0, h.y)({ preventPopoutClose: e }),
                                children: 'Prevent Popouts From Closing Automatically'
                            })
                        }),
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                            children: (0, r.jsx)(m.j7V, {
                                value: p,
                                note: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                                onChange: (e) => (0, h.y)({ onlyShowPreviewAppCollections: e }),
                                children: 'Preview unpublished application collections'
                            })
                        }),
                        (0, r.jsx)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                            children: (0, r.jsx)(m.j7V, {
                                value: f,
                                note: 'Disable application collections cache so that you can see updates to collections immediately.',
                                onChange: (e) => (0, h.y)({ disableAppCollectionsCache: e }),
                                children: 'Disable application collections cache'
                            })
                        }),
                        (0, r.jsxs)(P.F, {
                            setting: L.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                            children: [
                                (0, r.jsx)('div', {
                                    className: [U.buttonsContainer, G.marginBottom20].join(' '),
                                    children: (0, r.jsx)(W.S, {})
                                }),
                                (0, r.jsx)(m.$i$, { className: U.divider })
                            ]
                        })
                    ]
                })
            }),
            (0, r.jsx)(ee, {
                layoutDebuggingEnabled: c,
                cssDebuggingEnabled: o
            })
        ]
    });
});
function ei() {
    let e = (0, d.e7)([D.Z], () => D.Z.getSurveyOverride()),
        [t, n] = i.useState(null != e ? e : '');
    return (0, r.jsx)(P.F, {
        setting: L.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, r.jsxs)(m.hjN, {
            tag: m.RB0.H1,
            title: 'Survey Override',
            className: G.marginTop60,
            children: [
                (0, r.jsx)(m.vwX, { children: 'Copy the ID of the Survey you want to test:' }),
                (0, r.jsxs)('form', {
                    className: U.surveyOverride,
                    onSubmit: (e) => {
                        e.preventDefault(), t.length > 0 ? f.Xq(t) : f.Xq(null);
                    },
                    children: [
                        (0, r.jsx)(m.oil, {
                            className: U.surveyOverrideInput,
                            value: t,
                            onChange: n
                        }),
                        (0, r.jsx)(m.zxk, {
                            type: 'submit',
                            children: 'Save Override'
                        })
                    ]
                })
            ]
        })
    });
}
function es() {
    var e;
    let t = (0, d.e7)([j.Z], () => j.Z.overrideId()),
        [n, s] = i.useState(null !== (e = j.Z.overrideId()) && void 0 !== e ? e : '');
    return (0, r.jsx)(P.F, {
        setting: L.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, r.jsxs)(m.hjN, {
            tag: m.RB0.H1,
            title: 'Changelog Override',
            className: G.marginTop60,
            children: [
                (0, r.jsx)(m.vwX, { children: 'Enter the ID of the changelog you want to test' }),
                (0, r.jsxs)('div', {
                    className: U.surveyOverride,
                    children: [
                        (0, r.jsx)(m.oil, {
                            className: U.surveyOverrideInput,
                            value: n,
                            onChange: s
                        }),
                        (0, r.jsx)(m.zxk, {
                            onClick: () => {
                                '' === n ? p.Z.setChangelogOverride(null) : p.Z.setChangelogOverride(n);
                            },
                            disabled: t === n,
                            children: 'Update Changelog'
                        })
                    ]
                })
            ]
        })
    });
}
class ea extends i.PureComponent {
    render() {
        return (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(er, {}), (0, r.jsx)(en, {}), (0, r.jsx)(ei, {}), (0, r.jsx)(es, {}), (0, r.jsx)(Q, {})]
        });
    }
}
let el = ea;
