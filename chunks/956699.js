n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(268146),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    g = n(570140),
    h = n(661111),
    p = n(179658),
    x = n(491428),
    f = n(225433),
    E = n(484614),
    _ = n(615287),
    C = n(386506),
    T = n(865427),
    S = n(802098),
    b = n(663993),
    I = n(600164),
    N = n(118012),
    v = n(482215),
    A = n(38618),
    j = n(32300),
    O = n(371651),
    R = n(388627),
    P = n(921801),
    D = n(857192),
    y = n(558724),
    B = n(808506),
    Z = n(998502),
    L = n(210887),
    M = n(601948),
    k = n(726985),
    w = n(981631),
    F = n(908442),
    U = n(282535),
    V = n(684309),
    G = n(232186),
    H = n(763971);
function Y(e, t, n) {
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
let W = ['discord_web', 'discord_marketing', 'discord_developers', 'discord_ios', 'discord_android'],
    z = [
        {
            value: 'branch',
            label: 'Branch Name'
        },
        {
            value: 'id',
            label: 'Commit SHA'
        }
    ];
function K(e) {
    return 'discord_ios' in e || 'discord_android' in e;
}
class q extends r.Component {
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: r, error: s } = this.props;
        return (0, i.jsxs)(I.Z, {
            direction: I.Z.Direction.VERTICAL,
            className: a()(U.buildOverrideGroup, G.marginBottom20, V.card, U.row),
            children: [
                (0, i.jsx)(f.Z, {
                    className: a()(U.removeBuildOverride, { [U.removeBuildOverrideDisabled]: r }),
                    onClick: r ? void 0 : this.handleRemoveBuildOverride
                }),
                (0, i.jsxs)(I.Z, {
                    className: G.marginBottom8,
                    children: [
                        (0, i.jsx)(I.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(m.FormItem, {
                                title: 'Override Type',
                                className: U.item,
                                children: (0, i.jsx)(m.SingleSelect, {
                                    options: z,
                                    onChange: this.handleOverrideTypeChanged,
                                    value: t,
                                    isDisabled: r
                                })
                            })
                        }),
                        (0, i.jsx)(I.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(m.FormItem, {
                                title: 'branch' === t ? 'Branch Name' : 'Commit SHA',
                                className: U.item,
                                children: (0, i.jsx)(m.TextInput, {
                                    value: n,
                                    onChange: this.handleOverrideIdChanged,
                                    disabled: r
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(I.Z.Child, {
                    children: [
                        null != s &&
                            '' !== s &&
                            (0, i.jsx)(m.FormText, {
                                className: U.item,
                                style: { color: u.Z.unsafe_rawColors.RED_400.css },
                                type: m.FormText.Types.DESCRIPTION,
                                children: s
                            }),
                        (0, i.jsxs)(m.FormText, {
                            className: U.item,
                            type: m.FormText.Types.DESCRIPTION,
                            children: ['This controls the build that will be served for the ', (0, i.jsx)('code', { children: e }), ' project.']
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            Y(this, 'handleRemoveBuildOverride', () => {
                this.props.onBuildOverrideRemoved(this.props.project);
            }),
            Y(this, 'handleOverrideIdChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, { id: e });
            }),
            Y(this, 'handleOverrideTypeChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, {
                    type: e,
                    id: ''
                });
            });
    }
}
class Q extends r.Component {
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, T.Ce)();
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
        return o().without(W, ...t);
    }
    renderEmpty() {
        return (0, i.jsxs)(m.EmptyState, {
            theme: L.Z.theme,
            className: a()(G.marginTop40, G.marginBottom20),
            children: [
                (0, i.jsx)(m.EmptyStateImage, {
                    darkSrc: n(770227),
                    lightSrc: n(398684),
                    width: 294,
                    height: 192
                }),
                (0, i.jsx)(m.EmptyStateText, { children: 'You have no build overrides configured.' })
            ]
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : o().map(e, (e, r) =>
                  (0, i.jsx)(
                      q,
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
            : (0, i.jsx)(I.Z, {
                  grow: 0,
                  direction: I.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(I.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(m.Button, {
                          onClick: () => location.reload(),
                          color: m.Button.Colors.PRIMARY,
                          children: 'Reload App'
                      })
                  })
              });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, i.jsx)(I.Z, {
                  grow: 0,
                  direction: I.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(I.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(m.Button, {
                          onClick: this.handleLinkGeneration,
                          color: m.Button.Colors.BRAND,
                          children: 'Generate Public Link'
                      })
                  })
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, i.jsxs)(I.Z, {
            grow: 0,
            direction: I.Z.Direction.HORIZONTAL_REVERSE,
            children: [
                (0, i.jsx)(I.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(m.Button, {
                        disabled: K(null != t ? t : {}),
                        onClick: this.handleSaveChanges,
                        submitting: e,
                        color: m.Button.Colors.GREEN,
                        children: 'Save Build Overrides'
                    })
                }),
                (0, i.jsx)(I.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(m.Button, {
                        onClick: this.handleDiscardChanges,
                        disabled: e,
                        color: m.Button.Colors.RED,
                        children: 'Discard Changes'
                    })
                })
            ]
        });
    }
    render() {
        let e;
        let { loading: t, saving: n, buildOverrides: r } = this.state;
        e = t ? (0, i.jsx)(m.Spinner, { className: G.marginTop20 }) : null != r && 0 === Object.keys(r).length ? this.renderEmpty() : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            a =
                K(null != r ? r : {}) && 'stable' !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, i.jsx)(m.Text, {
                          color: 'text-danger',
                          variant: 'text-md/normal',
                          children: 'Mobile build overrides must be generated using the desktop/web stable client for now!'
                      })
                    : null;
        return (0, i.jsx)(P.F, {
            setting: k.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, i.jsxs)(m.FormSection, {
                className: G.marginTop60,
                children: [
                    (0, i.jsxs)(I.Z, {
                        className: G.marginBottom20,
                        children: [
                            (0, i.jsx)(I.Z.Child, {
                                children: (0, i.jsx)(m.FormTitle, {
                                    tag: m.FormTitleTags.H1,
                                    children: 'Build Overrides'
                                })
                            }),
                            (0, i.jsx)(I.Z.Child, {
                                grow: 0,
                                children: (0, i.jsx)(m.Button, {
                                    size: m.ButtonSizes.SMALL,
                                    onClick: this.handleAddBuildOverride,
                                    disabled: !s,
                                    children: 'Add Build Override'
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(m.FormDivider, {}),
                    (0, i.jsxs)(I.Z, {
                        direction: I.Z.Direction.VERTICAL,
                        children: [
                            a,
                            e,
                            (0, i.jsxs)(I.Z, {
                                grow: 0,
                                direction: I.Z.Direction.HORIZONTAL_REVERSE,
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
            Y(this, 'state', {
                loading: !0,
                buildOverrides: {},
                loadedBuildOverrides: {},
                errors: {},
                saving: !1,
                didSave: !1
            }),
            Y(this, 'handleAddBuildOverride', async () => {
                var e;
                let t = await ((e = this.getAvailableProjects()),
                new Promise((t) => {
                    (0, m.openModal)((n) => {
                        let r = (e) => {
                            n.onClose(), t(e);
                        };
                        return (0, i.jsxs)(m.ModalRoot, {
                            ...n,
                            'aria-label': 'Choose A Project to Override',
                            children: [
                                (0, i.jsx)(m.ModalHeader, {
                                    separator: !1,
                                    children: (0, i.jsx)(m.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: 'Choose A Project to Override'
                                    })
                                }),
                                (0, i.jsx)(m.ModalContent, {
                                    children: (0, i.jsx)('div', {
                                        className: U.buildOverrideList,
                                        children: e.map((e) =>
                                            (0, i.jsx)(
                                                m.Button,
                                                {
                                                    value: e,
                                                    color: m.Button.Colors.GREEN,
                                                    onClick: () => r(e),
                                                    children: e
                                                },
                                                e
                                            )
                                        )
                                    })
                                }),
                                (0, i.jsx)(m.ModalFooter, {
                                    children: (0, i.jsx)(m.Button, {
                                        color: m.Button.Colors.PRIMARY,
                                        look: m.Button.Looks.LINK,
                                        onClick: () => r(null),
                                        children: 'Nevermind'
                                    })
                                })
                            ]
                        });
                    });
                }));
                if (null == t) return;
                let n = {
                    ...this.state.buildOverrides,
                    [t]: {
                        type: 'branch',
                        id: ''
                    }
                };
                this.setState({ buildOverrides: n });
            }),
            Y(this, 'handleBuildOverrideUpdated', (e, t) => {
                let { buildOverrides: n } = this.state,
                    i = {
                        ...(null != n ? n[e] : {}),
                        ...t
                    },
                    r = {
                        ...this.state.buildOverrides,
                        [e]: i
                    };
                this.setState({ buildOverrides: r });
            }),
            Y(this, 'handleBuildOverrideRemoved', (e) => {
                let t = { ...this.state.buildOverrides };
                delete t[e], this.setState({ buildOverrides: t });
            }),
            Y(this, 'handleDiscardChanges', () => {
                this.setState({
                    buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1
                });
            }),
            Y(this, 'handleSaveChanges', async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, C.aD)(e);
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
            Y(this, 'handleLinkGeneration', () => {
                let { buildOverrides: e } = this.state;
                (0, m.openModal)((t) =>
                    (0, i.jsx)(X, {
                        ...t,
                        buildOverrides: e
                    })
                );
            });
    }
}
class X extends r.Component {
    isMobile() {
        var e;
        return K(null !== (e = this.props.buildOverrides) && void 0 !== e ? e : {});
    }
    renderSettingsForm() {
        let { ttlSeconds: e, releaseChannel: t, userIdEntry: n, userIdEntryError: r, allowedVersions: s, allowedVersionEntry: a, allowedVersionEntryError: l, allowLoggedOut: o, experiments: c, experimentsError: d } = this.state,
            u = F.S6.find((t) => t.value === e),
            g = s.map((e) => ({
                label: e,
                value: e
            }));
        return (0, i.jsxs)(I.Z.Child, {
            basis: '70%',
            children: [
                (0, i.jsx)(m.FormItem, {
                    title: 'Expire After',
                    className: G.marginBottom20,
                    children: (0, i.jsx)(m.SingleSelect, {
                        value: null != u ? u.value : null,
                        options: F.S6,
                        onChange: this.handleExpirationChange
                    })
                }),
                this.isMobile()
                    ? null
                    : (0, i.jsx)(m.FormItem, {
                          title: 'Release Channel',
                          className: G.marginBottom20,
                          children: (0, i.jsx)(m.SingleSelect, {
                              value: t,
                              options: F.F$,
                              onChange: this.handleReleaseChannelChange
                          })
                      }),
                this.isMobile()
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(m.FormItem, {
                                  title: 'Add allowed app version (required)',
                                  className: G.marginBottom20,
                                  children: (0, i.jsxs)(I.Z, {
                                      direction: I.Z.Direction.HORIZONTAL,
                                      children: [
                                          (0, i.jsx)(I.Z.Child, {
                                              wrap: !0,
                                              basis: '90%',
                                              children: (0, i.jsx)(m.TextInput, {
                                                  autoFocus: !0,
                                                  value: a,
                                                  onKeyPress: this.handleAllowedVersionEnter,
                                                  error: l,
                                                  onChange: this.handleAllowedVersionEntry,
                                                  placeholder: 'Example: 34'
                                              })
                                          }),
                                          (0, i.jsx)(m.Button, {
                                              onClick: this.handleAddAllowedVersion,
                                              children: 'Add'
                                          })
                                      ]
                                  })
                              }),
                              (0, i.jsx)(m.FormItem, {
                                  title: 'Remove allowed app version',
                                  className: G.marginBottom20,
                                  children: (0, i.jsx)(m.SingleSelect, {
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
                    : (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)(m.FormItem, {
                              title: 'Limit to User IDs (optional)',
                              className: G.marginBottom20,
                              children: [
                                  (0, i.jsx)(I.Z, {
                                      direction: I.Z.Direction.HORIZONTAL,
                                      children: (0, i.jsx)(I.Z.Child, {
                                          wrap: !0,
                                          basis: '90%',
                                          children: (0, i.jsx)(m.TextArea, {
                                              value: n,
                                              error: r,
                                              onBlur: () => this.setUserEntryError(''),
                                              onChange: this.handleUserIDEntry
                                          })
                                      })
                                  }),
                                  (0, i.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      className: G.marginTop8,
                                      children: 'User IDs can be separated by whitespace or commas.'
                                  })
                              ]
                          })
                      }),
                (0, i.jsxs)(m.FormItem, {
                    title: 'Client Experiment Override',
                    className: G.marginBottom20,
                    children: [
                        (0, i.jsx)(I.Z, {
                            direction: I.Z.Direction.HORIZONTAL,
                            children: (0, i.jsx)(I.Z.Child, {
                                wrap: !0,
                                basis: '90%',
                                children: (0, i.jsx)(m.TextArea, {
                                    value: c,
                                    error: d,
                                    onChange: this.handleExperiments,
                                    placeholder: '{"2022-01_threads":1}'
                                })
                            })
                        }),
                        (0, i.jsx)(m.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: G.marginTop8,
                            children: 'Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.'
                        })
                    ]
                }),
                (0, i.jsx)(m.FormSwitch, {
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
            r = (0, i.jsx)(b.GI, {
                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                webpackId: 364964,
                renderFallback: t,
                render: (n) => {
                    let r = n.highlight('json', e, !0);
                    return null == r
                        ? t()
                        : (0, i.jsx)('code', {
                              className: 'hljs scroller '.concat(r.language, ' ').concat(H.scrollbarGhost, ' ').concat(U.codebox),
                              dangerouslySetInnerHTML: { __html: r.value }
                          });
                }
            });
        return (0, i.jsx)(I.Z.Child, { children: (0, i.jsx)(m.Card, { children: (0, i.jsx)('pre', { children: r }) }) });
    }
    renderLinkForm() {
        let { statusTextColor: e, statusText: t, publicLink: n } = this.state;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(m.FormItem, {
                    title: 'Signed Link',
                    children: (0, i.jsxs)(I.Z, {
                        children: [
                            (0, i.jsx)(I.Z.Child, {
                                wrap: !0,
                                basis: '75%',
                                children: (0, i.jsx)(E.Z, { value: n })
                            }),
                            (0, i.jsx)(m.Button, {
                                onClick: this.handleGenerateLink,
                                children: 'Generate Link'
                            })
                        ]
                    })
                }),
                (0, i.jsx)(N.Z, {
                    color: e,
                    className: ''.concat(G.marginBottom8, ' ').concat(G.marginTop8),
                    children: t
                })
            ]
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props;
        return (0, i.jsxs)(m.ModalRoot, {
            size: m.ModalSize.LARGE,
            transitionState: t,
            'aria-label': 'Generate Public Build Override Link',
            children: [
                (0, i.jsxs)(m.ModalHeader, {
                    justify: I.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, i.jsx)(m.Heading, {
                            variant: 'heading-lg/semibold',
                            children: 'Generate Public Build Override Link'
                        }),
                        (0, i.jsx)(m.ModalCloseButton, { onClick: e })
                    ]
                }),
                (0, i.jsxs)(m.ModalContent, {
                    children: [
                        (0, i.jsxs)(I.Z, {
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
            Y(this, 'state', {
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
                statusTextColor: N.Z.Colors.STATUS_RED,
                allowLoggedOut: !1
            }),
            Y(this, 'setUserEntryError', (e) => {
                this.setState({ userIdEntryError: e });
            }),
            Y(this, 'setStatusMessage', (e, t) => {
                this.setState({
                    statusText: e,
                    statusTextColor: null != t ? t : N.Z.Colors.STATUS_RED
                });
            }),
            Y(this, 'handleUserIDEntry', (e) => {
                if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError('User IDs are numbers!');
                let t = new Set(e.split(/[,\s]+/).filter(Boolean));
                this.setState({
                    userIdEntry: e,
                    userIds: t
                });
            }),
            Y(this, 'setAllowedVersionError', (e) => {
                this.setState({ allowedVersionEntryError: e });
            }),
            Y(this, 'handleAllowedVersionEntry', (e) => {
                this.setState({ allowedVersionEntry: e });
            }),
            Y(this, 'handleAllowedVersionEnter', (e) => {
                e.charCode === w.yXg.ENTER && this.handleAddAllowedVersion();
            }),
            Y(this, 'handleAddAllowedVersion', () => {
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
            Y(this, 'handleRemoveAllowedVersion', (e) => {
                let { allowedVersions: t } = this.state;
                (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
            }),
            Y(this, 'handleAllowLoggedOut', (e) => {
                this.setState({ allowLoggedOut: e });
            }),
            Y(this, 'handleExpirationChange', (e) => {
                this.setState({ ttlSeconds: e });
            }),
            Y(this, 'handleReleaseChannelChange', (e) => {
                this.setState({ releaseChannel: e });
            }),
            Y(this, 'handleExperiments', (e) => {
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
            Y(this, 'generatePayload', () => ({
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
            Y(this, 'handleGenerateLink', async () => {
                if (this.isMobile() && 0 === this.state.allowedVersions.length) {
                    this.setAllowedVersionError('You must add at least one allowed version for iOS');
                    return;
                }
                this.setStatusMessage(null);
                let e = this.generatePayload(),
                    t = await (0, C.M3)(e);
                !1 !== t.error ? this.setStatusMessage(JSON.stringify(t.error), N.Z.Colors.STATUS_RED) : (this.setState({ publicLink: t.url.toString() }), 0 === e.meta.user_ids.length && this.setStatusMessage('Warning! No users added to the whitelist! This link could be used by anyone to override their build.', N.Z.Colors.STATUS_YELLOW));
            });
    }
}
function J(e) {
    let { layoutDebuggingEnabled: t, cssDebuggingEnabled: n } = e,
        { horizontalSpacing: s, verticalSpacing: a, maxHorizontalSpacing: l, maxVerticalSpacing: o } = (0, v.i)(),
        c = r.useMemo(() => Array.from({ length: l + 1 }, (e, t) => t), [l]),
        d = r.useMemo(() => Array.from({ length: o + 1 }, (e, t) => t), [o]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.FormTitle, {
                tag: m.FormTitleTags.H1,
                children: 'Design Tools'
            }),
            (0, i.jsx)(P.F, {
                setting: k.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, i.jsx)(m.FormSwitch, {
                    value: n,
                    note: 'Display raw colors as pink. Toggling this will refresh the browser.',
                    onChange: (e) => {
                        (0, p.y)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                    children: 'Enable CSS Debugging'
                })
            }),
            (0, i.jsx)(P.F, {
                setting: k.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, i.jsx)(m.FormSwitch, {
                    value: t,
                    note: 'Renders a grid on top of the app to help debug layout alignment issues.',
                    onChange: (e) => {
                        (0, p.y)({ layoutDebuggingEnabled: e });
                    },
                    children: 'Enable Layout Debugging'
                })
            }),
            (0, i.jsxs)(P.F, {
                setting: k.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, i.jsxs)(m.FormSection, {
                        className: G.marginBottom20,
                        children: [
                            (0, i.jsx)(m.FormTitle, { children: 'Horizontal Grid Spacing' }),
                            (0, i.jsx)(m.FormText, {
                                className: G.marginBottom20,
                                type: m.FormTextTypes.DESCRIPTION,
                                children: 'Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.'
                            }),
                            (0, i.jsx)(m.Slider, {
                                initialValue: s,
                                minValue: 0,
                                maxValue: l,
                                markers: c,
                                onValueChange: (e) => v.i.getState().setHorizontalSpacing(e),
                                onValueRender: (e) => ''.concat(Math.round(e), 'px'),
                                onMarkerRender: (e) => (e % 4 == 0 ? ''.concat(e) : void 0),
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)(m.FormSection, {
                        className: G.marginBottom20,
                        children: [
                            (0, i.jsx)(m.FormTitle, { children: 'Vertical Grid Spacing' }),
                            (0, i.jsx)(m.FormText, {
                                className: G.marginBottom20,
                                type: m.FormTextTypes.DESCRIPTION,
                                children: 'Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.'
                            }),
                            (0, i.jsx)(m.Slider, {
                                initialValue: a,
                                minValue: 0,
                                maxValue: o,
                                markers: d,
                                onValueChange: (e) => v.i.getState().setVerticalSpacing(e),
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
function $() {
    throw Error('Send help');
}
function ee() {
    let e = (0, j.XE)('developer_settings'),
        t = (0, d.e7)([O.Z], () => O.Z.getForcedRenderMode()),
        [n, s] = r.useState(!1),
        [a, l] = r.useState(''),
        o = e || t === _.R5.OUT_OF_PROCESS_V2 || t === _.R5.OUT_OF_PROCESS_V3;
    return (r.useEffect(() => {
        (async () => {
            l(await (0, B.Y)());
        })();
    }, []),
    n)
        ? {}
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: [U.buttonsContainer, G.marginBottom20].join(' '),
                      children: [
                          (0, i.jsx)(P.F, {
                              setting: k.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: o
                                  ? (0, i.jsx)(m.Button, {
                                        onClick: () => (0, R.fK)(),
                                        children: 'Open Overlay'
                                    })
                                  : (0, i.jsx)(m.Button, {
                                        onClick: () => window.open(a, '_blank'),
                                        disabled: '' === a,
                                        children: 'Open Overlay'
                                    })
                          }),
                          (0, i.jsx)(P.F, {
                              setting: k.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, i.jsx)(m.Button, {
                                  onClick: () => {
                                      A.Z.getSocket().close(), A.Z.getSocket().connect();
                                  },
                                  children: 'Reset Socket'
                              })
                          }),
                          (0, i.jsx)(P.F, {
                              setting: k.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, i.jsx)(m.Button, {
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
                  (0, i.jsx)(P.F, {
                      setting: k.s6.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, i.jsx)(m.FormSection, {
                          title: 'Crashes',
                          tag: m.FormTitleTags.H1,
                          children: (0, i.jsxs)('div', {
                              className: U.buttonsContainer,
                              children: [
                                  (0, i.jsx)(m.SingleSelect, {
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
                                      onChange: (e) => null != e && Z.ZP.crash(e)
                                  }),
                                  (0, i.jsx)(m.SingleSelect, {
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
                                      onChange: (e) => {
                                          var t;
                                          return null != e ? ((t = e), void Z.ZP.triggerJSException(t)) : void 0;
                                      }
                                  }),
                                  (0, i.jsx)(m.Button, {
                                      onClick: () => s(!0),
                                      children: 'React Crash'
                                  }),
                                  (0, i.jsx)(m.Button, {
                                      onClick: $,
                                      children: 'onClick Throw'
                                  })
                              ]
                          })
                      })
                  })
              ]
          });
}
let et = d.ZP.connectStores([D.default], () => ({
    isTracingRequests: D.default.isTracingRequests,
    isForcedCanary: D.default.isForcedCanary,
    isLoggingGatewayEvents: D.default.isLoggingGatewayEvents,
    isLoggingOverlayEvents: D.default.isLoggingOverlayEvents,
    isLoggingAnalyticsEvents: D.default.isLoggingAnalyticsEvents,
    isAxeEnabled: D.default.isAxeEnabled,
    cssDebuggingEnabled: D.default.cssDebuggingEnabled,
    layoutDebuggingEnabled: D.default.layoutDebuggingEnabled,
    isSourceMapsEnabled: D.default.sourceMapsEnabled,
    isAnalyticsDebuggerEnabled: D.default.isAnalyticsDebuggerEnabled,
    isIdleStatusIndicatorEnabled: D.default.isIdleStatusIndicatorEnabled,
    onlyShowPreviewAppCollections: D.default.onlyShowPreviewAppCollections,
    disableAppCollectionsCache: D.default.disableAppCollectionsCache,
    preventPopoutClose: D.default.preventPopoutClose
}))((e) => {
    let { isTracingRequests: t, isForcedCanary: n, isLoggingGatewayEvents: r, isLoggingOverlayEvents: s, isLoggingAnalyticsEvents: a, isAxeEnabled: l, cssDebuggingEnabled: o, layoutDebuggingEnabled: c, isSourceMapsEnabled: d, isAnalyticsDebuggerEnabled: u, isIdleStatusIndicatorEnabled: g, onlyShowPreviewAppCollections: h, disableAppCollectionsCache: x, preventPopoutClose: f } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(P.F, {
                setting: k.s6.DEVELOPER_OPTIONS_FLAGS,
                children: (0, i.jsxs)(m.FormSection, {
                    title: 'Developer Flags',
                    tag: m.FormTitleTags.H1,
                    children: [
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: t,
                                note: 'Force trace all client requests with APM',
                                onChange: (e) => (0, p.y)({ trace: e }),
                                children: 'Enable Tracing Requests'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: n,
                                note: 'Force all API requests to canary instances',
                                onChange: (e) => (0, p.y)({ canary: e }),
                                children: 'Enable Forced Canary'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: r,
                                note: 'Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.',
                                onChange: (e) => (0, p.y)({ logGatewayEvents: e }),
                                children: 'Enable Logging of Gateway Events to Console'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: s,
                                note: 'Logs all overlay related RPC events. Super noisy if an overlay is connected',
                                onChange: (e) => (0, p.y)({ logOverlayEvents: e }),
                                children: 'Enable Logging of Overlay RPC Events & Commands'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: a,
                                note: 'Logs all analytics events to the developer console',
                                onChange: (e) => (0, p.y)({ logAnalyticsEvents: e }),
                                children: 'Enable Logging of Analytics Events'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: d,
                                note: 'Only enable on devices you trust.',
                                onChange: (e) => (0, p.y)({ sourceMapsEnabled: e }),
                                children: 'Enable source maps to be loaded on this client'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: u,
                                note: 'Displays a floating debugger with viewed impressions',
                                onChange: (e) => (0, p.y)({ analyticsDebuggerEnabled: e }),
                                children: 'Enable standard analytics debugger view'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: g,
                                note: 'Displays a floating idle status indicator',
                                onChange: (e) => (0, p.y)({ idleStatusIndicatorEnabled: e }),
                                children: 'Enable idle status indicator'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: l,
                                note: 'Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development',
                                onChange: (e) => (0, p.y)({ axeEnabled: e }),
                                children: 'Enable Accessibility Auditing'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: f,
                                note: 'This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.',
                                onChange: (e) => (0, p.y)({ preventPopoutClose: e }),
                                children: 'Prevent Popouts From Closing Automatically'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: h,
                                note: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                                onChange: (e) => (0, p.y)({ onlyShowPreviewAppCollections: e }),
                                children: 'Preview unpublished application collections'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                            children: (0, i.jsx)(m.FormSwitch, {
                                value: x,
                                note: 'Disable application collections cache so that you can see updates to collections immediately.',
                                onChange: (e) => (0, p.y)({ disableAppCollectionsCache: e }),
                                children: 'Disable application collections cache'
                            })
                        }),
                        (0, i.jsxs)(P.F, {
                            setting: k.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                            children: [
                                (0, i.jsx)('div', {
                                    className: [U.buttonsContainer, G.marginBottom20].join(' '),
                                    children: (0, i.jsx)(M.S, {})
                                }),
                                (0, i.jsx)(m.FormDivider, { className: U.divider })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(J, {
                layoutDebuggingEnabled: c,
                cssDebuggingEnabled: o
            })
        ]
    });
});
function en() {
    let e = (0, d.e7)([y.Z], () => y.Z.getSurveyOverride()),
        [t, n] = r.useState(null != e ? e : '');
    return (0, i.jsx)(P.F, {
        setting: k.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, i.jsxs)(m.FormSection, {
            tag: m.FormTitleTags.H1,
            title: 'Survey Override',
            className: G.marginTop60,
            children: [
                (0, i.jsx)(m.FormTitle, { children: 'Copy the ID of the Survey you want to test:' }),
                (0, i.jsxs)('form', {
                    className: U.surveyOverride,
                    onSubmit: (e) => {
                        e.preventDefault(), t.length > 0 ? x.Xq(t) : x.Xq(null);
                    },
                    children: [
                        (0, i.jsx)(m.TextInput, {
                            className: U.surveyOverrideInput,
                            value: t,
                            onChange: n
                        }),
                        (0, i.jsx)(m.Button, {
                            type: 'submit',
                            children: 'Save Override'
                        })
                    ]
                })
            ]
        })
    });
}
function ei() {
    var e;
    let t = (0, d.e7)([S.Z], () => S.Z.overrideId()),
        [n, s] = r.useState(null !== (e = S.Z.overrideId()) && void 0 !== e ? e : '');
    return (0, i.jsx)(P.F, {
        setting: k.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, i.jsxs)(m.FormSection, {
            tag: m.FormTitleTags.H1,
            title: 'Changelog Override',
            className: G.marginTop60,
            children: [
                (0, i.jsx)(m.FormTitle, { children: 'Enter the ID of the changelog you want to test' }),
                (0, i.jsxs)('div', {
                    className: U.surveyOverride,
                    children: [
                        (0, i.jsx)(m.TextInput, {
                            className: U.surveyOverrideInput,
                            value: n,
                            onChange: s
                        }),
                        (0, i.jsx)(m.Button, {
                            onClick: () => {
                                '' === n ? h.Z.setChangelogOverride(null) : h.Z.setChangelogOverride(n);
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
class er extends r.PureComponent {
    render() {
        return (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsx)(et, {}), (0, i.jsx)(ee, {}), (0, i.jsx)(en, {}), (0, i.jsx)(ei, {}), (0, i.jsx)(Q, {})]
        });
    }
}
t.Z = er;
