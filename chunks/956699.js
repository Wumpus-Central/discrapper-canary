(n.d(t, { Z: () => ef }), n(388685), n(49124), n(35282), n(781311), n(415506));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n.n(a),
    c = n(268146),
    d = n(442837),
    u = n(433517),
    m = n(692547),
    g = n(481060),
    p = n(570140),
    h = n(661111),
    f = n(179658),
    b = n(491428),
    x = n(225433),
    _ = n(484614),
    E = n(615287),
    j = n(386506),
    C = n(865427),
    O = n(802098),
    S = n(663993),
    v = n(600164),
    T = n(482215),
    N = n(38618),
    I = n(375657),
    y = n(171393),
    A = n(32300),
    P = n(371651),
    R = n(398269),
    D = n(921801),
    Z = n(857192),
    w = n(558724),
    k = n(808506),
    L = n(626135),
    B = n(709054),
    M = n(998502),
    U = n(210887),
    V = n(695346),
    G = n(306052),
    F = n(10298),
    H = n(526156),
    z = n(726985),
    Y = n(981631),
    W = n(908442),
    K = n(121306),
    q = n(588866),
    X = n(20493),
    Q = n(283574);
function J(e, t, n) {
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
function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                J(e, t, n[t]);
            }));
    }
    return e;
}
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let et = ['discord_web', 'discord_marketing', 'discord_developers', 'discord_ios', 'discord_android'],
    en = [
        {
            value: 'branch',
            label: 'Branch Name'
        },
        {
            value: 'id',
            label: 'Commit SHA'
        }
    ];
function ei(e) {
    return 'discord_ios' in e || 'discord_android' in e;
}
class er extends r.Component {
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: r, error: s } = this.props;
        return (0, i.jsxs)(v.Z, {
            direction: v.Z.Direction.VERTICAL,
            className: l()(K.buildOverrideGroup, X.marginBottom20, q.card, K.row),
            children: [
                (0, i.jsx)(x.Z, {
                    className: l()(K.removeBuildOverride, { [K.removeBuildOverrideDisabled]: r }),
                    onClick: r ? void 0 : this.handleRemoveBuildOverride
                }),
                (0, i.jsxs)(v.Z, {
                    className: X.marginBottom8,
                    children: [
                        (0, i.jsx)(v.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(g.xJW, {
                                title: 'Override Type',
                                className: K.item,
                                children: (0, i.jsx)(g.q4e, {
                                    options: en,
                                    onChange: this.handleOverrideTypeChanged,
                                    value: t,
                                    isDisabled: r
                                })
                            })
                        }),
                        (0, i.jsx)(v.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(g.xJW, {
                                title: 'branch' === t ? 'Branch Name' : 'Commit SHA',
                                className: K.item,
                                children: (0, i.jsx)(g.oil, {
                                    value: n,
                                    onChange: this.handleOverrideIdChanged,
                                    disabled: r
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(v.Z.Child, {
                    children: [
                        null != s &&
                            '' !== s &&
                            (0, i.jsx)(g.R94, {
                                className: K.item,
                                style: { color: m.Z.unsafe_rawColors.RED_400.css },
                                type: g.R94.Types.DESCRIPTION,
                                children: s
                            }),
                        (0, i.jsxs)(g.R94, {
                            className: K.item,
                            type: g.R94.Types.DESCRIPTION,
                            children: ['This controls the build that will be served for the ', (0, i.jsx)('code', { children: e }), ' project.']
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            J(this, 'handleRemoveBuildOverride', () => {
                this.props.onBuildOverrideRemoved(this.props.project);
            }),
            J(this, 'handleOverrideIdChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, { id: e });
            }),
            J(this, 'handleOverrideTypeChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, {
                    type: e,
                    id: ''
                });
            }));
    }
}
class es extends r.Component {
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, C.Ce)();
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
        return o().without(et, ...t);
    }
    renderEmpty() {
        return (0, i.jsx)(g.ubH, {
            theme: U.Z.theme,
            className: l()(X.marginTop40, X.marginBottom20),
            children: (0, i.jsx)(g.OZU, { children: 'You have no build overrides configured.' })
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : o().map(e, (e, r) =>
                  (0, i.jsx)(
                      er,
                      {
                          project: r,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[r],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved
                      },
                      r
                  )
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, i.jsx)(v.Z, {
                  grow: 0,
                  direction: v.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(v.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(g.zxk, {
                          onClick: () => location.reload(),
                          color: g.zxk.Colors.PRIMARY,
                          children: 'Reload App'
                      })
                  })
              });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, i.jsx)(v.Z, {
                  grow: 0,
                  direction: v.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(v.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(g.zxk, {
                          onClick: this.handleLinkGeneration,
                          color: g.zxk.Colors.BRAND,
                          children: 'Generate Public Link'
                      })
                  })
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, i.jsxs)(v.Z, {
            grow: 0,
            direction: v.Z.Direction.HORIZONTAL_REVERSE,
            children: [
                (0, i.jsx)(v.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(g.zxk, {
                        disabled: ei(null != t ? t : {}),
                        onClick: this.handleSaveChanges,
                        submitting: e,
                        color: g.zxk.Colors.GREEN,
                        children: 'Save Build Overrides'
                    })
                }),
                (0, i.jsx)(v.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(g.zxk, {
                        onClick: this.handleDiscardChanges,
                        disabled: e,
                        color: g.zxk.Colors.RED,
                        children: 'Discard Changes'
                    })
                })
            ]
        });
    }
    render() {
        let e,
            { loading: t, saving: n, buildOverrides: r } = this.state;
        e = t ? (0, i.jsx)(g.$jN, { className: X.marginTop20 }) : null != r && 0 === Object.keys(r).length ? this.renderEmpty() : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            l =
                ei(null != r ? r : {}) && 'stable' !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, i.jsx)(g.Text, {
                          color: 'text-danger',
                          variant: 'text-md/normal',
                          children: 'Mobile build overrides must be generated using the desktop/web stable client for now!'
                      })
                    : null;
        return (0, i.jsx)(D.F, {
            setting: z.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, i.jsxs)(g.hjN, {
                className: X.marginTop60,
                children: [
                    (0, i.jsxs)(v.Z, {
                        className: X.marginBottom20,
                        children: [
                            (0, i.jsx)(v.Z.Child, {
                                children: (0, i.jsx)(g.vwX, {
                                    tag: g.RB0.H1,
                                    children: 'Build Overrides'
                                })
                            }),
                            (0, i.jsx)(v.Z.Child, {
                                grow: 0,
                                children: (0, i.jsx)(g.zxk, {
                                    size: g.PhG.SMALL,
                                    onClick: this.handleAddBuildOverride,
                                    disabled: !s,
                                    children: 'Add Build Override'
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(v.Z, {
                        direction: v.Z.Direction.VERTICAL,
                        children: [
                            l,
                            e,
                            (0, i.jsxs)(v.Z, {
                                grow: 0,
                                direction: v.Z.Direction.HORIZONTAL_REVERSE,
                                children: [this.renderRefreshButton(), this.renderSaveButton(), this.renderLinkButton()]
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        (super(...e),
            J(this, 'state', {
                loading: !0,
                buildOverrides: {},
                loadedBuildOverrides: {},
                errors: {},
                saving: !1,
                didSave: !1
            }),
            J(this, 'handleAddBuildOverride', async () => {
                var e;
                let t = await ((e = this.getAvailableProjects()),
                new Promise((t) => {
                    (0, g.h7j)((n) => {
                        let r = (e) => {
                            (n.onClose(), t(e));
                        };
                        return (0, i.jsxs)(
                            g.Y0X,
                            ee($({}, n), {
                                'aria-label': 'Choose A Project to Override',
                                parentComponent: 'UserSettingsDeveloperOptions',
                                children: [
                                    (0, i.jsx)(g.xBx, {
                                        separator: !1,
                                        children: (0, i.jsx)(g.X6q, {
                                            variant: 'heading-lg/semibold',
                                            children: 'Choose A Project to Override'
                                        })
                                    }),
                                    (0, i.jsx)(g.hzk, {
                                        children: (0, i.jsx)('div', {
                                            className: K.buildOverrideList,
                                            children: e.map((e) =>
                                                (0, i.jsx)(
                                                    g.zxk,
                                                    {
                                                        value: e,
                                                        color: g.zxk.Colors.GREEN,
                                                        onClick: () => r(e),
                                                        children: e
                                                    },
                                                    e
                                                )
                                            )
                                        })
                                    }),
                                    (0, i.jsx)(g.mzw, {
                                        children: (0, i.jsx)(g.zxk, {
                                            color: g.zxk.Colors.PRIMARY,
                                            look: g.zxk.Looks.LINK,
                                            onClick: () => r(null),
                                            children: 'Nevermind'
                                        })
                                    })
                                ]
                            })
                        );
                    });
                }));
                if (null == t) return;
                let n = ee($({}, this.state.buildOverrides), {
                    [t]: {
                        type: 'branch',
                        id: ''
                    }
                });
                this.setState({ buildOverrides: n });
            }),
            J(this, 'handleBuildOverrideUpdated', (e, t) => {
                let { buildOverrides: n } = this.state,
                    i = $({}, null != n ? n[e] : {}, t),
                    r = ee($({}, this.state.buildOverrides), { [e]: i });
                this.setState({ buildOverrides: r });
            }),
            J(this, 'handleBuildOverrideRemoved', (e) => {
                let t = $({}, this.state.buildOverrides);
                (delete t[e], this.setState({ buildOverrides: t }));
            }),
            J(this, 'handleDiscardChanges', () => {
                this.setState({
                    buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1
                });
            }),
            J(this, 'handleSaveChanges', async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, j.aD)(e);
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
            J(this, 'handleLinkGeneration', () => {
                let { buildOverrides: e } = this.state;
                (0, g.h7j)((t) => (0, i.jsx)(el, ee($({}, t), { buildOverrides: e })));
            }));
    }
}
class el extends r.Component {
    isMobile() {
        var e;
        return ei(null != (e = this.props.buildOverrides) ? e : {});
    }
    renderSettingsForm() {
        let { ttlSeconds: e, releaseChannel: t, userIdEntry: n, userIdEntryError: r, allowedVersions: s, allowedVersionEntry: l, allowedVersionEntryError: a, allowLoggedOut: o, experiments: c, experimentsError: d } = this.state,
            u = W.S6.find((t) => t.value === e),
            m = s.map((e) => ({
                label: e,
                value: e
            }));
        return (0, i.jsxs)(v.Z.Child, {
            basis: '70%',
            children: [
                (0, i.jsx)(g.xJW, {
                    title: 'Expire After',
                    className: X.marginBottom20,
                    children: (0, i.jsx)(g.q4e, {
                        value: null != u ? u.value : null,
                        options: W.S6,
                        onChange: this.handleExpirationChange
                    })
                }),
                this.isMobile()
                    ? null
                    : (0, i.jsx)(g.xJW, {
                          title: 'Release Channel',
                          className: X.marginBottom20,
                          children: (0, i.jsx)(g.q4e, {
                              value: t,
                              options: W.F$,
                              onChange: this.handleReleaseChannelChange
                          })
                      }),
                this.isMobile()
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.xJW, {
                                  title: 'Add allowed app version (required)',
                                  className: X.marginBottom20,
                                  children: (0, i.jsxs)(v.Z, {
                                      direction: v.Z.Direction.HORIZONTAL,
                                      children: [
                                          (0, i.jsx)(v.Z.Child, {
                                              wrap: !0,
                                              basis: '90%',
                                              children: (0, i.jsx)(g.oil, {
                                                  autoFocus: !0,
                                                  value: l,
                                                  onKeyPress: this.handleAllowedVersionEnter,
                                                  error: a,
                                                  onChange: this.handleAllowedVersionEntry,
                                                  placeholder: 'Example: 34'
                                              })
                                          }),
                                          (0, i.jsx)(g.zxk, {
                                              onClick: this.handleAddAllowedVersion,
                                              children: 'Add'
                                          })
                                      ]
                                  })
                              }),
                              (0, i.jsx)(g.xJW, {
                                  title: 'Remove allowed app version',
                                  className: X.marginBottom20,
                                  children: (0, i.jsx)(g.q4e, {
                                      value: null,
                                      options: m,
                                      onChange: this.handleRemoveAllowedVersion,
                                      isDisabled: 0 === s.length
                                  })
                              })
                          ]
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, i.jsxs)(g.xJW, {
                          title: 'Limit to User IDs (optional)',
                          className: X.marginBottom20,
                          children: [
                              (0, i.jsx)(v.Z, {
                                  direction: v.Z.Direction.HORIZONTAL,
                                  children: (0, i.jsx)(v.Z.Child, {
                                      wrap: !0,
                                      basis: '90%',
                                      children: (0, i.jsx)(g.Kx8, {
                                          value: n,
                                          error: r,
                                          onBlur: () => this.setUserEntryError(''),
                                          onChange: this.handleUserIDEntry
                                      })
                                  })
                              }),
                              (0, i.jsx)(g.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-muted',
                                  className: X.marginTop8,
                                  children: 'User IDs can be separated by whitespace or commas.'
                              })
                          ]
                      }),
                (0, i.jsxs)(g.xJW, {
                    title: 'Client Experiment Override',
                    className: X.marginBottom20,
                    children: [
                        (0, i.jsx)(v.Z, {
                            direction: v.Z.Direction.HORIZONTAL,
                            children: (0, i.jsx)(v.Z.Child, {
                                wrap: !0,
                                basis: '90%',
                                children: (0, i.jsx)(g.Kx8, {
                                    value: c,
                                    error: d,
                                    onChange: this.handleExperiments,
                                    placeholder: '{"2022-01_threads":1}'
                                })
                            })
                        }),
                        (0, i.jsx)(g.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: X.marginTop8,
                            children: 'Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.'
                        })
                    ]
                }),
                (0, i.jsx)(g.j7V, {
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
            r = (0, i.jsx)(S.GI, {
                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                webpackId: 364964,
                renderFallback: t,
                render: (n) => {
                    let r = n.highlight('json', e, !0);
                    return null == r
                        ? t()
                        : (0, i.jsx)('code', {
                              className: 'hljs scroller '.concat(r.language, ' ').concat(Q.scrollbarGhost, ' ').concat(K.codebox),
                              dangerouslySetInnerHTML: { __html: r.value }
                          });
                }
            });
        return (0, i.jsx)(v.Z.Child, { children: (0, i.jsx)(g.Zbd, { children: (0, i.jsx)('pre', { children: r }) }) });
    }
    renderLinkForm() {
        let { status: e, statusText: t, publicLink: n } = this.state,
            r = 'text-default';
        switch (e) {
            case 0:
                r = 'text-feedback-critical';
                break;
            case 1:
                r = 'text-feedback-warning';
        }
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(g.xJW, {
                    title: 'Signed Link',
                    children: (0, i.jsxs)(v.Z, {
                        children: [
                            (0, i.jsx)(v.Z.Child, {
                                wrap: !0,
                                basis: '75%',
                                children: (0, i.jsx)(_.Z, { value: n })
                            }),
                            (0, i.jsx)(g.zxk, {
                                onClick: this.handleGenerateLink,
                                children: 'Generate Link'
                            })
                        ]
                    })
                }),
                (0, i.jsx)(g.Text, {
                    variant: 'text-md/normal',
                    color: r,
                    className: l()(X.marginBottom8, X.marginTop8),
                    children: t
                })
            ]
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props;
        return (0, i.jsxs)(g.Y0X, {
            size: g.CgR.LARGE,
            transitionState: t,
            'aria-label': 'Generate Public Build Override Link',
            parentComponent: 'UserSettingsDeveloperOptions',
            children: [
                (0, i.jsxs)(g.xBx, {
                    justify: v.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, i.jsx)(g.X6q, {
                            variant: 'heading-lg/semibold',
                            children: 'Generate Public Build Override Link'
                        }),
                        (0, i.jsx)(g.olH, { onClick: e })
                    ]
                }),
                (0, i.jsxs)(g.hzk, {
                    children: [
                        (0, i.jsxs)(v.Z, {
                            children: [this.renderSettingsForm(), this.renderPayloadBlock()]
                        }),
                        this.renderLinkForm()
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            J(this, 'state', {
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
                status: 0,
                allowLoggedOut: !1
            }),
            J(this, 'setUserEntryError', (e) => {
                this.setState({ userIdEntryError: e });
            }),
            J(this, 'setStatusMessage', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                t.setState({
                    statusText: e,
                    status: n
                });
            }),
            J(this, 'handleUserIDEntry', (e) => {
                if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError('User IDs are numbers!');
                let t = new Set(e.split(/[,\s]+/).filter(Boolean));
                this.setState({
                    userIdEntry: e,
                    userIds: t
                });
            }),
            J(this, 'setAllowedVersionError', (e) => {
                this.setState({ allowedVersionEntryError: e });
            }),
            J(this, 'handleAllowedVersionEntry', (e) => {
                this.setState({ allowedVersionEntry: e });
            }),
            J(this, 'handleAllowedVersionEnter', (e) => {
                e.charCode === Y.yXg.ENTER && this.handleAddAllowedVersion();
            }),
            J(this, 'handleAddAllowedVersion', () => {
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
            J(this, 'handleRemoveAllowedVersion', (e) => {
                let { allowedVersions: t } = this.state;
                ((t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t }));
            }),
            J(this, 'handleAllowLoggedOut', (e) => {
                this.setState({ allowLoggedOut: e });
            }),
            J(this, 'handleExpirationChange', (e) => {
                this.setState({ ttlSeconds: e });
            }),
            J(this, 'handleReleaseChannelChange', (e) => {
                this.setState({ releaseChannel: e });
            }),
            J(this, 'handleExperiments', (e) => {
                if (0 === e.trim().length) return void this.setState({ experimentsError: void 0 });
                try {
                    let t = JSON.parse(e);
                    for (let e in t) {
                        if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/)) return void this.setState({ experimentsError: ''.concat(e, ' is an invalid experiment name') });
                        if ('number' != typeof t[e]) return void this.setState({ experimentsError: ''.concat(e, ' has an invalid bucket override') });
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
            J(this, 'generatePayload', () => ({
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
            J(this, 'handleGenerateLink', async () => {
                if (this.isMobile() && 0 === this.state.allowedVersions.length) return void this.setAllowedVersionError('You must add at least one allowed version for iOS');
                this.setStatusMessage(null);
                let e = this.generatePayload(),
                    t = await (0, j.M3)(e);
                !1 !== t.error ? this.setStatusMessage(JSON.stringify(t.error), 0) : (this.setState({ publicLink: t.url.toString() }), 0 === e.meta.user_ids.length && this.setStatusMessage('Warning! No users added to the whitelist! This link could be used by anyone to override their build.', 1));
            }));
    }
}
function ea() {
    let { horizontalSpacing: e, verticalSpacing: t, maxHorizontalSpacing: n, maxVerticalSpacing: s } = (0, T.i)(),
        l = r.useMemo(() => Array.from({ length: n + 1 }, (e, t) => t), [n]),
        a = r.useMemo(() => Array.from({ length: s + 1 }, (e, t) => t), [s]),
        { cssDebuggingEnabled: o, layoutDebuggingEnabled: c } = (0, d.cj)([Z.default], () => ({
            cssDebuggingEnabled: Z.default.cssDebuggingEnabled,
            layoutDebuggingEnabled: Z.default.layoutDebuggingEnabled
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, i.jsx)(g.j7V, {
                    value: o,
                    note: 'Display raw colors as pink. Toggling this will refresh the browser.',
                    onChange: (e) => {
                        ((0, f.y)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500));
                    },
                    children: 'Enable CSS Debugging'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, i.jsx)(g.j7V, {
                    value: c,
                    note: 'Renders a grid on top of the app to help debug layout alignment issues.',
                    onChange: (e) => {
                        (0, f.y)({ layoutDebuggingEnabled: e });
                    },
                    children: 'Enable Layout Debugging'
                })
            }),
            (0, i.jsxs)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, i.jsxs)(g.hjN, {
                        className: X.marginBottom20,
                        children: [
                            (0, i.jsx)(g.vwX, { children: 'Horizontal Grid Spacing' }),
                            (0, i.jsx)(g.R94, {
                                className: X.marginBottom20,
                                type: g.geA.DESCRIPTION,
                                children: 'Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.'
                            }),
                            (0, i.jsx)(g.iRW, {
                                initialValue: e,
                                minValue: 0,
                                maxValue: n,
                                markers: l,
                                onValueChange: (e) => T.i.getState().setHorizontalSpacing(e),
                                onValueRender: (e) => ''.concat(Math.round(e), 'px'),
                                onMarkerRender: (e) => (e % 4 == 0 ? ''.concat(e) : void 0),
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)(g.hjN, {
                        className: X.marginBottom20,
                        children: [
                            (0, i.jsx)(g.vwX, { children: 'Vertical Grid Spacing' }),
                            (0, i.jsx)(g.R94, {
                                className: X.marginBottom20,
                                type: g.geA.DESCRIPTION,
                                children: 'Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.'
                            }),
                            (0, i.jsx)(g.iRW, {
                                initialValue: t,
                                minValue: 0,
                                maxValue: s,
                                markers: a,
                                onValueChange: (e) => T.i.getState().setVerticalSpacing(e),
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
function eo() {
    let {
            isTracingRequests: e,
            isForcedCanary: t,
            isAxeEnabled: n,
            isSourceMapsEnabled: r,
            isIdleStatusIndicatorEnabled: s,
            onlyShowPreviewAppCollections: l,
            disableAppCollectionsCache: a,
            preventPopoutClose: o,
            logKeyboardMismatches: c
        } = (0, d.cj)([Z.default], () => ({
            isTracingRequests: Z.default.isTracingRequests,
            isForcedCanary: Z.default.isForcedCanary,
            isAxeEnabled: Z.default.isAxeEnabled,
            isSourceMapsEnabled: Z.default.sourceMapsEnabled,
            isIdleStatusIndicatorEnabled: Z.default.isIdleStatusIndicatorEnabled,
            onlyShowPreviewAppCollections: Z.default.onlyShowPreviewAppCollections,
            disableAppCollectionsCache: Z.default.disableAppCollectionsCache,
            preventPopoutClose: Z.default.preventPopoutClose,
            logKeyboardMismatches: Z.default.logKeyboardMismatches
        })),
        u = (0, y.Z)('go_back_to_regular_input'),
        m = V.zY.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                children: (0, i.jsx)(g.j7V, {
                    value: e,
                    note: 'Force trace all client requests with APM',
                    onChange: (e) => (0, f.y)({ trace: e }),
                    children: 'Enable Tracing Requests'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
                children: (0, i.jsx)(g.j7V, {
                    value: t,
                    note: 'Force all API requests to canary instances',
                    onChange: (e) => (0, f.y)({ canary: e }),
                    children: 'Enable Forced Canary'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER,
                children: (0, i.jsx)(g.j7V, {
                    value: m,
                    note: 'Make user targetable for all active ads',
                    onChange: (e) => V.zY.updateSetting(e),
                    children: 'Ads auto-targeting'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
                children: (0, i.jsx)(g.j7V, {
                    value: r,
                    note: 'Only enable on devices you trust.',
                    onChange: (e) => (0, f.y)({ sourceMapsEnabled: e }),
                    children: 'Enable source maps to be loaded on this client'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                children: (0, i.jsx)(g.j7V, {
                    value: s,
                    note: 'Displays a floating idle status indicator',
                    onChange: (e) => (0, f.y)({ idleStatusIndicatorEnabled: e }),
                    children: 'Enable idle status indicator'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                children: (0, i.jsx)(g.j7V, {
                    value: n,
                    note: 'Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development',
                    onChange: (e) => (0, f.y)({ axeEnabled: e }),
                    children: 'Enable Accessibility Auditing'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                children: (0, i.jsx)(g.j7V, {
                    value: o,
                    note: 'This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.',
                    onChange: (e) => (0, f.y)({ preventPopoutClose: e }),
                    children: 'Prevent Popouts From Closing Automatically'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES,
                children: (0, i.jsx)(g.j7V, {
                    value: c,
                    note: 'Logs mismatches in detected keyboard codes to the console',
                    onChange: (e) => (0, f.y)({ logKeyboardMismatches: e }),
                    children: 'Enable Logging of Keyboard Mismatches'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                children: (0, i.jsx)(g.j7V, {
                    value: l,
                    note: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                    onChange: (e) => (0, f.y)({ onlyShowPreviewAppCollections: e }),
                    children: 'Preview unpublished application collections'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                children: (0, i.jsx)(g.j7V, {
                    value: a,
                    note: 'Disable application collections cache so that you can see updates to collections immediately.',
                    onChange: (e) => (0, f.y)({ disableAppCollectionsCache: e }),
                    children: 'Disable application collections cache'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT,
                children: (0, i.jsx)(g.j7V, {
                    value: u,
                    note: 'Disable aligning chat input to the bottom of the screen',
                    onChange: (e) => {
                        (L.default.track(Y.rMx.GUILD_JOIN_FEEDBACK, {
                            reason: 'disable-align-chat-input',
                            rating: e ? 'yes' : 'no'
                        }),
                            (0, I.s)('go_back_to_regular_input', { enabled: e }));
                    },
                    children: 'Disable aligning chat input to the bottom of the screen'
                })
            })
        ]
    });
}
function ec() {
    let {
        isLoggingGatewayEvents: e,
        isLoggingOverlayEvents: t,
        isLoggingAnalyticsEvents: n,
        isAnalyticsDebuggerEnabled: r
    } = (0, d.cj)([Z.default], () => ({
        isLoggingGatewayEvents: Z.default.isLoggingGatewayEvents,
        isLoggingOverlayEvents: Z.default.isLoggingOverlayEvents,
        isLoggingAnalyticsEvents: Z.default.isLoggingAnalyticsEvents,
        isAnalyticsDebuggerEnabled: Z.default.isAnalyticsDebuggerEnabled
    }));
    return (0, i.jsxs)(D.F, {
        setting: z.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
        children: [
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                children: (0, i.jsx)(g.j7V, {
                    value: e,
                    note: 'Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.',
                    onChange: (e) => (0, f.y)({ logGatewayEvents: e }),
                    children: 'Enable Logging of Gateway Events to Console'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                children: (0, i.jsx)(g.j7V, {
                    value: t,
                    note: 'Logs all overlay related RPC events. Super noisy if an overlay is connected',
                    onChange: (e) => (0, f.y)({ logOverlayEvents: e }),
                    children: 'Enable Logging of Overlay RPC Events & Commands'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                children: (0, i.jsx)(g.j7V, {
                    value: n,
                    note: 'Logs all analytics events to the developer console',
                    onChange: (e) => (0, f.y)({ logAnalyticsEvents: e }),
                    children: 'Enable Logging of Analytics Events'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: z.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                children: (0, i.jsx)(g.j7V, {
                    value: r,
                    note: 'Displays a floating debugger with viewed impressions',
                    onChange: (e) => (0, f.y)({ analyticsDebuggerEnabled: e }),
                    children: 'Enable standard analytics debugger view'
                })
            })
        ]
    });
}
function ed() {
    throw Error('Send help');
}
function eu() {
    let e = (0, A.XE)('developer_settings'),
        t = (0, d.e7)([P.default], () => P.default.getForcedRenderMode()),
        [n, s] = r.useState(!1),
        [l, a] = r.useState(''),
        o = e || t === E.R5.OUT_OF_PROCESS_V3 || t === E.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
    return (r.useEffect(() => {
        (async () => {
            a(await (0, k.getOverlayURL)());
        })();
    }, []),
    n)
        ? {}
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: [K.buttonsContainer, X.marginBottom20].join(' '),
                      children: [
                          (0, i.jsx)(D.F, {
                              setting: z.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: o
                                  ? (0, i.jsx)(g.zxk, {
                                        onClick: () => (0, R.f)(t),
                                        children: 'Open Overlay'
                                    })
                                  : (0, i.jsx)(g.zxk, {
                                        onClick: () => window.open(l, '_blank'),
                                        disabled: '' === l,
                                        children: 'Open Overlay'
                                    })
                          }),
                          (0, i.jsx)(D.F, {
                              setting: z.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, i.jsx)(g.zxk, {
                                  onClick: () => {
                                      (N.Z.getSocket().close(), N.Z.getSocket().connect());
                                  },
                                  children: 'Reset Socket'
                              })
                          }),
                          (0, i.jsx)(D.F, {
                              setting: z.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, i.jsx)(g.zxk, {
                                  onClick: () => {
                                      p.Z.dispatch({
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
                  (0, i.jsx)(D.F, {
                      setting: z.s6.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, i.jsx)(g.hjN, {
                          title: 'Crashes',
                          tag: g.RB0.H1,
                          children: (0, i.jsxs)('div', {
                              className: K.buttonsContainer,
                              children: [
                                  (0, i.jsx)(g.q4e, {
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
                                      onChange: (e) => null != e && M.ZP.crash(e)
                                  }),
                                  (0, i.jsx)(g.q4e, {
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
                                      onChange: (e) => (null != e ? void M.ZP.triggerJSException(e) : void 0)
                                  }),
                                  (0, i.jsx)(g.zxk, {
                                      onClick: () => s(!0),
                                      children: 'React Crash'
                                  }),
                                  (0, i.jsx)(g.zxk, {
                                      onClick: ed,
                                      children: 'onClick Throw'
                                  })
                              ]
                          })
                      })
                  })
              ]
          });
}
function em() {
    let e = (0, d.e7)([w.Z], () => w.Z.getSurveyOverride()),
        [t, n] = r.useState(null != e ? e : '');
    return (0, i.jsx)(D.F, {
        setting: z.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, i.jsxs)(g.hjN, {
            tag: g.RB0.H1,
            title: 'Survey Override',
            className: X.marginTop60,
            children: [
                (0, i.jsx)(g.vwX, { children: 'Copy the ID of the Survey you want to test:' }),
                (0, i.jsxs)('form', {
                    className: K.surveyOverride,
                    onSubmit: (e) => {
                        (e.preventDefault(), t.length > 0 ? b.Xq(t) : b.Xq(null));
                    },
                    children: [
                        (0, i.jsx)(g.oil, {
                            className: K.surveyOverrideInput,
                            value: t,
                            onChange: n
                        }),
                        (0, i.jsx)(g.zxk, {
                            type: 'submit',
                            children: 'Save Override'
                        })
                    ]
                })
            ]
        })
    });
}
function eg() {
    var e;
    let t = (0, d.e7)([O.Z], () => O.Z.overrideId()),
        [n, s] = r.useState(null != (e = O.Z.overrideId()) ? e : '');
    return (0, i.jsx)(D.F, {
        setting: z.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, i.jsx)(g.hjN, {
            tag: g.RB0.H1,
            title: 'Changelog',
            className: X.marginTop60,
            children: (0, i.jsxs)(g.Kqy, {
                gap: 16,
                children: [
                    (0, i.jsxs)(g.Kqy, {
                        gap: 8,
                        children: [
                            (0, i.jsx)(g.vwX, { children: 'Changelog Override' }),
                            (0, i.jsx)(g.R94, { children: 'Enter the ID of the changelog you want to test This will override the changelog that is shown to the user.' }),
                            (0, i.jsxs)('div', {
                                className: K.surveyOverride,
                                children: [
                                    (0, i.jsx)(g.oil, {
                                        className: K.surveyOverrideInput,
                                        value: n,
                                        onChange: s
                                    }),
                                    (0, i.jsx)(g.zxk, {
                                        onClick: () => {
                                            '' === n ? h.Z.setChangelogOverride(null) : h.Z.setChangelogOverride(n);
                                        },
                                        disabled: t === n,
                                        children: 'Update Changelog'
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(g.Kqy, {
                        gap: 8,
                        children: [
                            (0, i.jsx)(g.vwX, { children: 'Reset Changelog' }),
                            (0, i.jsx)(g.R94, { children: 'This will reset the changelog, so it will show again on the next startup.' }),
                            (0, i.jsx)(g.zxk, {
                                onClick: () => {
                                    let e = new Date('2018-01-01');
                                    (V.l4.updateSetting(B.default.fromTimestamp(e.getTime())), u.K.set('lastChangeLogDate', e));
                                },
                                children: 'Reset Changelog'
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function ep() {
    return (0, i.jsx)(D.F, {
        setting: z.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        children: (0, i.jsx)(g.hjN, {
            tag: g.RB0.H1,
            title: 'Client-Side Overrides',
            className: X.marginTop60,
            children: (0, i.jsx)(g.Kqy, {
                gap: 16,
                children: (0, i.jsx)('div', {
                    className: [K.buttonsContainer, X.marginBottom20].join(' '),
                    children: (0, i.jsx)(G.g, {})
                })
            })
        })
    });
}
function eh() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(es, {}), (0, i.jsx)(em, {}), (0, i.jsx)(eg, {}), (0, i.jsx)(ep, {})]
    });
}
let ef = function () {
    return (0, i.jsx)(F.N, {
        header: 'Developer Options',
        children: (0, i.jsx)(H.Z, {
            parentSetting: z.s6.DEVELOPER_OPTIONS,
            settingsSection: Y.oAB.DEVELOPER_OPTIONS,
            tabs: [
                {
                    title: 'Overrides',
                    component: eh,
                    setting: z.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB
                },
                {
                    title: 'Manual Triggers',
                    component: eu,
                    setting: z.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB
                },
                {
                    title: 'Developer Flags',
                    component: eo,
                    setting: z.s6.DEVELOPER_OPTIONS_FLAGS_TAB
                },
                {
                    title: 'Logging',
                    component: ec,
                    setting: z.s6.DEVELOPER_OPTIONS_LOGGING_TAB
                },
                {
                    title: 'Design Tools',
                    component: ea,
                    setting: z.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB
                }
            ]
        })
    });
};
