n.d(t, { Z: () => eO }), n(388685), n(49124), n(35282), n(781311), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(268146),
    u = n(442837),
    d = n(433517),
    f = n(692547),
    _ = n(481060),
    p = n(570140),
    h = n(661111),
    m = n(179658),
    g = n(491428),
    E = n(225433),
    b = n(484614),
    y = n(386506),
    O = n(865427),
    v = n(802098),
    I = n(663993),
    T = n(600164),
    S = n(482215),
    A = n(581612),
    C = n(580747),
    N = n(38618),
    R = n(375657),
    P = n(171393),
    w = n(837268),
    D = n(32300),
    x = n(371651),
    L = n(398269),
    j = n(921801),
    M = n(857192),
    k = n(558724),
    U = n(808506),
    G = n(626135),
    B = n(709054),
    Z = n(998502),
    F = n(210887),
    V = n(695346),
    H = n(306052),
    Y = n(10298),
    W = n(526156),
    K = n(726985),
    z = n(981631),
    q = n(908442),
    X = n(674336),
    Q = n(620842),
    J = n(197571),
    $ = n(154257);
function ee(e, t, n) {
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
function et(e) {
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
                ee(e, t, n[t]);
            });
    }
    return e;
}
function en(e, t) {
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
function er(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : en(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ei = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    ea = [
        {
            value: "branch",
            label: "Branch Name",
        },
        {
            value: "id",
            label: "Commit SHA",
        },
    ];
function eo(e) {
    return "discord_ios" in e || "discord_android" in e;
}
function es(e) {
    return new Promise((t) => {
        (0, _.h7j)((n) => {
            let i = (e) => {
                n.onClose(), t(e);
            };
            return (0, r.jsxs)(
                _.Y0X,
                er(et({}, n), {
                    "aria-label": "Choose A Project to Override",
                    parentComponent: "UserSettingsDeveloperOptions",
                    children: [
                        (0, r.jsx)(_.xBx, {
                            separator: !1,
                            children: (0, r.jsx)(_.X6q, {
                                variant: "heading-lg/semibold",
                                children: "Choose A Project to Override",
                            }),
                        }),
                        (0, r.jsx)(_.hzk, {
                            children: (0, r.jsx)("div", {
                                className: X.buildOverrideList,
                                children: e.map((e) =>
                                    (0, r.jsx)(
                                        _.zxk,
                                        {
                                            variant: "active",
                                            text: e,
                                            value: e,
                                            onClick: () => i(e),
                                        },
                                        e,
                                    ),
                                ),
                            }),
                        }),
                        (0, r.jsx)(_.mzw, {
                            children: (0, r.jsx)(_.zxk, {
                                variant: "secondary",
                                text: "Nevermind",
                                onClick: () => i(null),
                            }),
                        }),
                    ],
                }),
            );
        });
    });
}
class el extends i.Component {
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: i, error: a } = this.props,
            s = "branch" === t ? "Branch Name" : "Commit SHA";
        return (0, r.jsxs)(T.Z, {
            direction: T.Z.Direction.VERTICAL,
            className: o()(X.buildOverrideGroup, J.marginBottom20, Q.card, X.row),
            children: [
                (0, r.jsx)(E.Z, {
                    className: o()(X.removeBuildOverride, { [X.removeBuildOverrideDisabled]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, r.jsxs)(T.Z, {
                    className: J.marginBottom8,
                    children: [
                        (0, r.jsx)(T.Z.Child, {
                            basis: "50%",
                            children: (0, r.jsx)(_.xJW, {
                                title: "Override Type",
                                className: X.item,
                                children: (0, r.jsx)(_.q4e, {
                                    options: ea,
                                    onChange: this.handleOverrideTypeChanged,
                                    value: t,
                                    isDisabled: i,
                                }),
                            }),
                        }),
                        (0, r.jsx)(T.Z.Child, {
                            basis: "50%",
                            children: (0, r.jsx)(_.oil, {
                                label: s,
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(T.Z.Child, {
                    children: [
                        null != a &&
                            "" !== a &&
                            (0, r.jsx)(_.R94, {
                                className: X.item,
                                style: { color: f.Z.unsafe_rawColors.RED_400.css },
                                type: _.R94.Types.DESCRIPTION,
                                children: a,
                            }),
                        (0, r.jsxs)(_.R94, {
                            className: X.item,
                            type: _.R94.Types.DESCRIPTION,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, r.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            ee(this, "handleRemoveBuildOverride", () => {
                this.props.onBuildOverrideRemoved(this.props.project);
            }),
            ee(this, "handleOverrideIdChanged", (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, { id: e });
            }),
            ee(this, "handleOverrideTypeChanged", (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, {
                    type: e,
                    id: "",
                });
            });
    }
}
class ec extends i.Component {
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, O.Ce)();
        this.setState({
            loading: !1,
            buildOverrides: e,
            loadedBuildOverrides: l().cloneDeep(e),
            errors: {},
        });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !l().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return l().without(ei, ...t);
    }
    renderEmpty() {
        return (0, r.jsx)(_.ubH, {
            theme: F.Z.theme,
            className: o()(J.marginTop40, J.marginBottom20),
            children: (0, r.jsx)(_.OZU, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : l().map(e, (e, i) =>
                  (0, r.jsx)(
                      el,
                      {
                          project: i,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[i],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved,
                      },
                      i,
                  ),
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, r.jsx)(T.Z, {
                  grow: 0,
                  direction: T.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, r.jsx)(T.Z.Child, {
                      grow: 0,
                      children: (0, r.jsx)(_.zxk, {
                          variant: "secondary",
                          text: "Reload App",
                          onClick: () => location.reload(),
                      }),
                  }),
              });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, r.jsx)(T.Z, {
                  grow: 0,
                  direction: T.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, r.jsx)(T.Z.Child, {
                      grow: 0,
                      children: (0, r.jsx)(_.zxk, {
                          variant: "primary",
                          text: "Generate Public Link",
                          onClick: this.handleLinkGeneration,
                      }),
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, r.jsxs)(T.Z, {
            grow: 0,
            direction: T.Z.Direction.HORIZONTAL_REVERSE,
            children: [
                (0, r.jsx)(T.Z.Child, {
                    grow: 0,
                    children: (0, r.jsx)(_.zxk, {
                        variant: "active",
                        text: "Save Build Overrides",
                        disabled: eo(null != t ? t : {}),
                        onClick: this.handleSaveChanges,
                        loading: e,
                    }),
                }),
                (0, r.jsx)(T.Z.Child, {
                    grow: 0,
                    children: (0, r.jsx)(_.zxk, {
                        variant: "critical-primary",
                        text: "Discard Changes",
                        onClick: this.handleDiscardChanges,
                        disabled: e,
                    }),
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: n, buildOverrides: i } = this.state;
        e = t
            ? (0, r.jsx)(_.$jN, { className: J.marginTop20 })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let a = !n && !t && this.getAvailableProjects().length > 0,
            o =
                eo(null != i ? i : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, r.jsx)(_.Text, {
                          color: "text-danger",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, r.jsx)(j.F, {
            setting: K.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, r.jsxs)(_.hjN, {
                className: J.marginTop60,
                children: [
                    (0, r.jsxs)(T.Z, {
                        className: J.marginBottom20,
                        children: [
                            (0, r.jsx)(T.Z.Child, {
                                children: (0, r.jsx)(_.vwX, {
                                    tag: _.RB0.H1,
                                    children: "Build Overrides",
                                }),
                            }),
                            (0, r.jsx)(T.Z.Child, {
                                grow: 0,
                                children: (0, r.jsx)(_.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Add Build Override",
                                    onClick: this.handleAddBuildOverride,
                                    disabled: !a,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(T.Z, {
                        direction: T.Z.Direction.VERTICAL,
                        children: [
                            o,
                            e,
                            (0, r.jsxs)(T.Z, {
                                grow: 0,
                                direction: T.Z.Direction.HORIZONTAL_REVERSE,
                                children: [
                                    this.renderRefreshButton(),
                                    this.renderSaveButton(),
                                    this.renderLinkButton(),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            ee(this, "state", {
                loading: !0,
                buildOverrides: {},
                loadedBuildOverrides: {},
                errors: {},
                saving: !1,
                didSave: !1,
            }),
            ee(this, "handleAddBuildOverride", async () => {
                let e = await es(this.getAvailableProjects());
                if (null == e) return;
                let t = er(et({}, this.state.buildOverrides), {
                    [e]: {
                        type: "branch",
                        id: "",
                    },
                });
                this.setState({ buildOverrides: t });
            }),
            ee(this, "handleBuildOverrideUpdated", (e, t) => {
                let { buildOverrides: n } = this.state,
                    r = et({}, null != n ? n[e] : {}, t),
                    i = er(et({}, this.state.buildOverrides), { [e]: r });
                this.setState({ buildOverrides: i });
            }),
            ee(this, "handleBuildOverrideRemoved", (e) => {
                let t = et({}, this.state.buildOverrides);
                delete t[e], this.setState({ buildOverrides: t });
            }),
            ee(this, "handleDiscardChanges", () => {
                this.setState({
                    buildOverrides: l().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1,
                });
            }),
            ee(this, "handleSaveChanges", async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, y.aD)(e);
                if (200 === t.status) {
                    let e = t.body;
                    this.setState({
                        buildOverrides: e,
                        loadedBuildOverrides: l().cloneDeep(e),
                        errors: {},
                        didSave: !0,
                        saving: !1,
                    });
                } else if (400 === t.status) {
                    let e = t.body;
                    this.setState({
                        errors: e,
                        saving: !1,
                        didSave: !1,
                    });
                } else
                    this.setState({
                        saving: !1,
                        didSave: !1,
                    });
            }),
            ee(this, "handleLinkGeneration", () => {
                let { buildOverrides: e } = this.state;
                (0, _.h7j)((t) => (0, r.jsx)(eu, er(et({}, t), { buildOverrides: e })));
            });
    }
}
class eu extends i.Component {
    isMobile() {
        var e;
        return eo(null != (e = this.props.buildOverrides) ? e : {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: n,
                userIdEntryError: i,
                allowedVersions: a,
                allowedVersionEntry: o,
                allowedVersionEntryError: s,
                allowLoggedOut: l,
                experiments: c,
                experimentsError: u,
            } = this.state,
            d = q.S6.find((t) => t.value === e),
            f = a.map((e) => ({
                label: e,
                value: e,
            }));
        return (0, r.jsxs)(T.Z.Child, {
            basis: "70%",
            children: [
                (0, r.jsx)(_.xJW, {
                    title: "Expire After",
                    className: J.marginBottom20,
                    children: (0, r.jsx)(_.q4e, {
                        value: null != d ? d.value : null,
                        options: q.S6,
                        onChange: this.handleExpirationChange,
                    }),
                }),
                this.isMobile()
                    ? null
                    : (0, r.jsx)(_.xJW, {
                          title: "Release Channel",
                          className: J.marginBottom20,
                          children: (0, r.jsx)(_.q4e, {
                              value: t,
                              options: q.F$,
                              onChange: this.handleReleaseChannelChange,
                          }),
                      }),
                this.isMobile()
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(_.xJW, {
                                  title: "Add allowed app version (required)",
                                  className: J.marginBottom20,
                                  children: (0, r.jsxs)(T.Z, {
                                      direction: T.Z.Direction.HORIZONTAL,
                                      children: [
                                          (0, r.jsx)(T.Z.Child, {
                                              wrap: !0,
                                              basis: "90%",
                                              children: (0, r.jsx)(_.oil, {
                                                  autoFocus: !0,
                                                  value: o,
                                                  onKeyDown: this.handleAllowedVersionEnter,
                                                  error: s,
                                                  onChange: this.handleAllowedVersionEntry,
                                                  placeholder: "Example: 34",
                                              }),
                                          }),
                                          (0, r.jsx)(_.zxk, {
                                              variant: "primary",
                                              text: "Add",
                                              onClick: this.handleAddAllowedVersion,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, r.jsx)(_.xJW, {
                                  title: "Remove allowed app version",
                                  className: J.marginBottom20,
                                  children: (0, r.jsx)(_.q4e, {
                                      value: null,
                                      options: f,
                                      onChange: this.handleRemoveAllowedVersion,
                                      isDisabled: 0 === a.length,
                                  }),
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, r.jsxs)(_.xJW, {
                          title: "Limit to User IDs (optional)",
                          className: J.marginBottom20,
                          children: [
                              (0, r.jsx)(T.Z, {
                                  direction: T.Z.Direction.HORIZONTAL,
                                  children: (0, r.jsx)(T.Z.Child, {
                                      wrap: !0,
                                      basis: "90%",
                                      children: (0, r.jsx)(_.Kx8, {
                                          value: n,
                                          error: i,
                                          onBlur: () => this.setUserEntryError(""),
                                          onChange: this.handleUserIDEntry,
                                      }),
                                  }),
                              }),
                              (0, r.jsx)(_.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  className: J.marginTop8,
                                  children: "User IDs can be separated by whitespace or commas.",
                              }),
                          ],
                      }),
                (0, r.jsxs)(_.xJW, {
                    title: "Client Experiment Override",
                    className: J.marginBottom20,
                    children: [
                        (0, r.jsx)(T.Z, {
                            direction: T.Z.Direction.HORIZONTAL,
                            children: (0, r.jsx)(T.Z.Child, {
                                wrap: !0,
                                basis: "90%",
                                children: (0, r.jsx)(_.Kx8, {
                                    value: c,
                                    error: u,
                                    onChange: this.handleExperiments,
                                    placeholder: '{"2022-01_threads":1}',
                                }),
                            }),
                        }),
                        (0, r.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: J.marginTop8,
                            children:
                                "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                        }),
                    ],
                }),
                (0, r.jsx)(_.j7V, {
                    onChange: this.handleAllowLoggedOut,
                    value: l,
                    children: "Allow logged out users",
                }),
            ],
        });
    }
    renderPayloadBlock() {
        let e = JSON.stringify(this.generatePayload(), null, 2),
            t = () => e,
            i = (0, r.jsx)(I.GI, {
                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                webpackId: 364964,
                renderFallback: t,
                render: (n) => {
                    let i = n.highlight("json", e, !0);
                    return null == i
                        ? t()
                        : (0, r.jsx)("code", {
                              className: "hljs scroller "
                                  .concat(i.language, " ")
                                  .concat($.scrollbarGhost, " ")
                                  .concat(X.codebox),
                              dangerouslySetInnerHTML: { __html: i.value },
                          });
                },
            });
        return (0, r.jsx)(T.Z.Child, { children: (0, r.jsx)(_.Zbd, { children: (0, r.jsx)("pre", { children: i }) }) });
    }
    renderLinkForm() {
        let { status: e, statusText: t, publicLink: n } = this.state,
            i = "text-default";
        switch (e) {
            case 0:
                i = "text-feedback-critical";
                break;
            case 1:
                i = "text-feedback-warning";
        }
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(_.xJW, {
                    title: "Signed Link",
                    children: (0, r.jsxs)(T.Z, {
                        children: [
                            (0, r.jsx)(T.Z.Child, {
                                wrap: !0,
                                basis: "75%",
                                children: (0, r.jsx)(b.Z, { value: n }),
                            }),
                            (0, r.jsx)(_.zxk, {
                                variant: "primary",
                                text: "Generate Link",
                                onClick: this.handleGenerateLink,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(_.Text, {
                    variant: "text-md/normal",
                    color: i,
                    className: o()(J.marginBottom8, J.marginTop8),
                    children: t,
                }),
            ],
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props;
        return (0, r.jsxs)(_.Y0X, {
            size: _.CgR.LARGE,
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            parentComponent: "UserSettingsDeveloperOptions",
            children: [
                (0, r.jsxs)(_.xBx, {
                    justify: T.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, r.jsx)(_.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Generate Public Build Override Link",
                        }),
                        (0, r.jsx)(_.olH, { onClick: e }),
                    ],
                }),
                (0, r.jsxs)(_.hzk, {
                    children: [
                        (0, r.jsxs)(T.Z, {
                            children: [this.renderSettingsForm(), this.renderPayloadBlock()],
                        }),
                        this.renderLinkForm(),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            ee(this, "state", {
                ttlSeconds: 3600,
                releaseChannel: "all",
                userIds: new Set(),
                userIdEntry: "",
                userIdEntryError: null,
                allowedVersions: [],
                allowedVersionEntry: "",
                allowedVersionEntryError: null,
                publicLink: " ",
                statusText: null,
                status: 0,
                allowLoggedOut: !1,
            }),
            ee(this, "setUserEntryError", (e) => {
                this.setState({ userIdEntryError: e });
            }),
            ee(this, "setStatusMessage", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                t.setState({
                    statusText: e,
                    status: n,
                });
            }),
            ee(this, "handleUserIDEntry", (e) => {
                if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
                let t = new Set(e.split(/[,\s]+/).filter(Boolean));
                this.setState({
                    userIdEntry: e,
                    userIds: t,
                });
            }),
            ee(this, "setAllowedVersionError", (e) => {
                this.setState({ allowedVersionEntryError: e });
            }),
            ee(this, "handleAllowedVersionEntry", (e) => {
                this.setState({ allowedVersionEntry: e });
            }),
            ee(this, "handleAllowedVersionEnter", (e) => {
                e.charCode === z.yXg.ENTER && this.handleAddAllowedVersion();
            }),
            ee(this, "handleAddAllowedVersion", () => {
                let { allowedVersions: e, allowedVersionEntry: t } = this.state;
                return 0 === (t = t.trim()).length
                    ? this.setAllowedVersionError("Enter a valid version number!")
                    : e.indexOf(t) >= 0
                      ? this.setAllowedVersionError("You already added that version!")
                      : void this.setState({
                            allowedVersions: [...e, t],
                            allowedVersionEntry: "",
                            allowedVersionEntryError: "",
                        });
            }),
            ee(this, "handleRemoveAllowedVersion", (e) => {
                let { allowedVersions: t } = this.state;
                (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
            }),
            ee(this, "handleAllowLoggedOut", (e) => {
                this.setState({ allowLoggedOut: e });
            }),
            ee(this, "handleExpirationChange", (e) => {
                this.setState({ ttlSeconds: e });
            }),
            ee(this, "handleReleaseChannelChange", (e) => {
                this.setState({ releaseChannel: e });
            }),
            ee(this, "handleExperiments", (e) => {
                if (0 === e.trim().length) return void this.setState({ experimentsError: void 0 });
                try {
                    let t = JSON.parse(e);
                    for (let e in t) {
                        if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/))
                            return void this.setState({
                                experimentsError: "".concat(e, " is an invalid experiment name"),
                            });
                        if ("number" != typeof t[e])
                            return void this.setState({
                                experimentsError: "".concat(e, " has an invalid bucket override"),
                            });
                    }
                } catch (e) {
                    this.setState({ experimentsError: "Unable to parse experiments ".concat(e.message) });
                    return;
                }
                this.setState({
                    experiments: e,
                    experimentsError: void 0,
                });
            }),
            ee(this, "generatePayload", () => ({
                overrides: this.props.buildOverrides,
                meta: {
                    release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
                    ttl_seconds: this.state.ttlSeconds,
                    user_ids: Array.from(this.state.userIds),
                    allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
                    allow_logged_out: this.state.allowLoggedOut,
                    experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments),
                },
            })),
            ee(this, "handleGenerateLink", async () => {
                if (this.isMobile() && 0 === this.state.allowedVersions.length)
                    return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
                this.setStatusMessage(null);
                let e = this.generatePayload(),
                    t = await (0, y.M3)(e);
                !1 !== t.error
                    ? this.setStatusMessage(JSON.stringify(t.error), 0)
                    : (this.setState({ publicLink: t.url.toString() }),
                      0 === e.meta.user_ids.length &&
                          this.setStatusMessage(
                              "Warning! No users added to the whitelist! This link could be used by anyone to override their build.",
                              1,
                          ));
            });
    }
}
function ed() {
    let { horizontalSpacing: e, verticalSpacing: t, maxHorizontalSpacing: n, maxVerticalSpacing: a } = (0, S.i)(),
        o = i.useMemo(() => Array.from({ length: n + 1 }, (e, t) => t), [n]),
        s = i.useMemo(() => Array.from({ length: a + 1 }, (e, t) => t), [a]),
        { cssDebuggingEnabled: l, layoutDebuggingEnabled: c } = (0, u.cj)([M.default], () => ({
            cssDebuggingEnabled: M.default.cssDebuggingEnabled,
            layoutDebuggingEnabled: M.default.layoutDebuggingEnabled,
        })),
        d = (0, C.Z)("highlight_void_toggleables");
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, r.jsx)(_.j7V, {
                    value: l,
                    note: "Display raw colors as pink. Toggling this will refresh the browser.",
                    onChange: (e) => {
                        (0, m.y)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                    children: "Enable CSS Debugging",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, r.jsx)(_.j7V, {
                    value: c,
                    note: "Renders a grid on top of the app to help debug layout alignment issues.",
                    onChange: (e) => {
                        (0, m.y)({ layoutDebuggingEnabled: e });
                    },
                    children: "Enable Layout Debugging",
                }),
            }),
            (0, r.jsxs)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, r.jsxs)(_.hjN, {
                        className: J.marginBottom20,
                        children: [
                            (0, r.jsx)(_.vwX, { children: "Horizontal Grid Spacing" }),
                            (0, r.jsx)(_.R94, {
                                className: J.marginBottom20,
                                type: _.geA.DESCRIPTION,
                                children:
                                    "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
                            }),
                            (0, r.jsx)(_.iRW, {
                                initialValue: e,
                                minValue: 0,
                                maxValue: n,
                                markers: o,
                                onValueChange: (e) => S.i.getState().setHorizontalSpacing(e),
                                onValueRender: (e) => "".concat(Math.round(e), "px"),
                                onMarkerRender: (e) => (e % 4 == 0 ? "".concat(e) : void 0),
                                equidistant: !0,
                            }),
                        ],
                    }),
                    (0, r.jsxs)(_.hjN, {
                        className: J.marginBottom20,
                        children: [
                            (0, r.jsx)(_.vwX, { children: "Vertical Grid Spacing" }),
                            (0, r.jsx)(_.R94, {
                                className: J.marginBottom20,
                                type: _.geA.DESCRIPTION,
                                children:
                                    "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
                            }),
                            (0, r.jsx)(_.iRW, {
                                initialValue: t,
                                minValue: 0,
                                maxValue: a,
                                markers: s,
                                onValueChange: (e) => S.i.getState().setVerticalSpacing(e),
                                onValueRender: (e) => "".concat(Math.round(e), "px"),
                                onMarkerRender: (e) => (e % 4 == 0 ? "".concat(e) : void 0),
                                equidistant: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES,
                children: (0, r.jsx)(_.j7V, {
                    value: d,
                    note: "Highlights toggleable components: Checkbox (green), RadioGroup (yellow), Switch (blue)",
                    onChange: (e) => (0, A.Z)("highlight_void_toggleables", e),
                    children: "Highlight Toggleable Components",
                }),
            }),
        ],
    });
}
function ef() {
    let {
            isTracingRequests: e,
            isForcedCanary: t,
            isAxeEnabled: n,
            isSourceMapsEnabled: i,
            isIdleStatusIndicatorEnabled: a,
            onlyShowPreviewAppCollections: o,
            disableAppCollectionsCache: s,
            preventPopoutClose: l,
            logKeyboardMismatches: c,
        } = (0, u.cj)([M.default], () => ({
            isTracingRequests: M.default.isTracingRequests,
            isForcedCanary: M.default.isForcedCanary,
            isAxeEnabled: M.default.isAxeEnabled,
            isSourceMapsEnabled: M.default.sourceMapsEnabled,
            isIdleStatusIndicatorEnabled: M.default.isIdleStatusIndicatorEnabled,
            onlyShowPreviewAppCollections: M.default.onlyShowPreviewAppCollections,
            disableAppCollectionsCache: M.default.disableAppCollectionsCache,
            preventPopoutClose: M.default.preventPopoutClose,
            logKeyboardMismatches: M.default.logKeyboardMismatches,
        })),
        d = (0, P.Z)("go_back_to_regular_input"),
        f = V.zY.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                children: (0, r.jsx)(_.j7V, {
                    value: e,
                    note: "Force trace all client requests with APM",
                    onChange: (e) => (0, m.y)({ trace: e }),
                    children: "Enable Tracing Requests",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
                children: (0, r.jsx)(_.j7V, {
                    value: t,
                    note: "Force all API requests to canary instances",
                    onChange: (e) => (0, m.y)({ canary: e }),
                    children: "Enable Forced Canary",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER,
                children: (0, r.jsx)(_.j7V, {
                    value: f,
                    note: "Make user targetable for all active ads",
                    onChange: (e) => V.zY.updateSetting(e),
                    children: "Ads auto-targeting",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
                children: (0, r.jsx)(_.j7V, {
                    value: i,
                    note: "Only enable on devices you trust.",
                    onChange: (e) => (0, m.y)({ sourceMapsEnabled: e }),
                    children: "Enable source maps to be loaded on this client",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                children: (0, r.jsx)(_.j7V, {
                    value: a,
                    note: "Displays a floating idle status indicator",
                    onChange: (e) => (0, m.y)({ idleStatusIndicatorEnabled: e }),
                    children: "Enable idle status indicator",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                children: (0, r.jsx)(_.j7V, {
                    value: n,
                    note: "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
                    onChange: (e) => (0, m.y)({ axeEnabled: e }),
                    children: "Enable Accessibility Auditing",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                children: (0, r.jsx)(_.j7V, {
                    value: l,
                    note: "This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.",
                    onChange: (e) => (0, m.y)({ preventPopoutClose: e }),
                    children: "Prevent Popouts From Closing Automatically",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES,
                children: (0, r.jsx)(_.j7V, {
                    value: c,
                    note: "Logs mismatches in detected keyboard codes to the console",
                    onChange: (e) => (0, m.y)({ logKeyboardMismatches: e }),
                    children: "Enable Logging of Keyboard Mismatches",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                children: (0, r.jsx)(_.j7V, {
                    value: o,
                    note: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                    onChange: (e) => (0, m.y)({ onlyShowPreviewAppCollections: e }),
                    children: "Preview unpublished application collections",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                children: (0, r.jsx)(_.j7V, {
                    value: s,
                    note: "Disable application collections cache so that you can see updates to collections immediately.",
                    onChange: (e) => (0, m.y)({ disableAppCollectionsCache: e }),
                    children: "Disable application collections cache",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT,
                children: (0, r.jsx)(_.j7V, {
                    value: d,
                    note: "Disable aligning chat input to the bottom of the screen",
                    onChange: (e) => {
                        G.default.track(z.rMx.GUILD_JOIN_FEEDBACK, {
                            reason: "disable-align-chat-input",
                            rating: e ? "yes" : "no",
                        }),
                            (0, R.s)("go_back_to_regular_input", { enabled: e });
                    },
                    children: "Disable aligning chat input to the bottom of the screen",
                }),
            }),
        ],
    });
}
function e_() {
    let {
        isLoggingGatewayEvents: e,
        isLoggingOverlayEvents: t,
        isLoggingAnalyticsEvents: n,
        isAnalyticsDebuggerEnabled: i,
    } = (0, u.cj)([M.default], () => ({
        isLoggingGatewayEvents: M.default.isLoggingGatewayEvents,
        isLoggingOverlayEvents: M.default.isLoggingOverlayEvents,
        isLoggingAnalyticsEvents: M.default.isLoggingAnalyticsEvents,
        isAnalyticsDebuggerEnabled: M.default.isAnalyticsDebuggerEnabled,
    }));
    return (0, r.jsxs)(j.F, {
        setting: K.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
        children: [
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                children: (0, r.jsx)(_.j7V, {
                    value: e,
                    note: "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
                    onChange: (e) => (0, m.y)({ logGatewayEvents: e }),
                    children: "Enable Logging of Gateway Events to Console",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                children: (0, r.jsx)(_.j7V, {
                    value: t,
                    note: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
                    onChange: (e) => (0, m.y)({ logOverlayEvents: e }),
                    children: "Enable Logging of Overlay RPC Events & Commands",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                children: (0, r.jsx)(_.j7V, {
                    value: n,
                    note: "Logs all analytics events to the developer console",
                    onChange: (e) => (0, m.y)({ logAnalyticsEvents: e }),
                    children: "Enable Logging of Analytics Events",
                }),
            }),
            (0, r.jsx)(j.F, {
                setting: K.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                children: (0, r.jsx)(_.j7V, {
                    value: i,
                    note: "Displays a floating debugger with viewed impressions",
                    onChange: (e) => (0, m.y)({ analyticsDebuggerEnabled: e }),
                    children: "Enable standard analytics debugger view",
                }),
            }),
        ],
    });
}
function ep() {
    throw Error("Send help");
}
function eh(e) {
    Z.ZP.triggerJSException(e);
}
function em() {
    let e = (0, D.XE)("developer_settings"),
        t = (0, u.e7)([x.default], () => x.default.getForcedRenderMode()),
        [n, a] = i.useState(!1),
        [o, s] = i.useState(""),
        l = e || t === w.R5.OUT_OF_PROCESS_V3 || t === w.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
    return (i.useEffect(() => {
        (async () => {
            s(await (0, U.getOverlayURL)());
        })();
    }, []),
    n)
        ? {}
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: [X.buttonsContainer, J.marginBottom20].join(" "),
                      children: [
                          (0, r.jsx)(j.F, {
                              setting: K.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: l
                                  ? (0, r.jsx)(_.zxk, {
                                        variant: "primary",
                                        text: "Open Overlay",
                                        onClick: () => (0, L.f)(t),
                                    })
                                  : (0, r.jsx)(_.zxk, {
                                        variant: "primary",
                                        text: "Open Overlay",
                                        onClick: () => window.open(o, "_blank"),
                                        disabled: "" === o,
                                    }),
                          }),
                          (0, r.jsx)(j.F, {
                              setting: K.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, r.jsx)(_.zxk, {
                                  variant: "primary",
                                  text: "Reset Socket",
                                  onClick: () => {
                                      N.Z.getSocket().close(), N.Z.getSocket().connect();
                                  },
                              }),
                          }),
                          (0, r.jsx)(j.F, {
                              setting: K.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, r.jsx)(_.zxk, {
                                  variant: "primary",
                                  text: "Clear Caches",
                                  onClick: () => {
                                      p.Z.dispatch({
                                          type: "CLEAR_CACHES",
                                          reason: "Requested by user",
                                          preventWritingCachesAgainThisSession: !0,
                                          resetSocket: !0,
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(j.F, {
                      setting: K.s6.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, r.jsx)(_.hjN, {
                          title: "Crashes",
                          tag: _.RB0.H1,
                          children: (0, r.jsxs)("div", {
                              className: X.buttonsContainer,
                              children: [
                                  (0, r.jsx)(_.q4e, {
                                      value: void 0,
                                      options: [
                                          {
                                              value: void 0,
                                              label: "Native libdiscord crash",
                                          },
                                          {
                                              value: 0,
                                              label: "Abort()",
                                          },
                                          {
                                              value: 1,
                                              label: "SIGSEGV()",
                                          },
                                          {
                                              value: 2,
                                              label: "EXCEPTION_ACCESS_VIOLATION",
                                          },
                                          {
                                              value: 3,
                                              label: "RaiseFailFastException",
                                          },
                                          {
                                              value: 4,
                                              label: "Out of Memory",
                                          },
                                      ],
                                      onChange: (e) => null != e && Z.ZP.crash(e),
                                  }),
                                  (0, r.jsx)(_.q4e, {
                                      value: void 0,
                                      options: [
                                          {
                                              value: void 0,
                                              label: "Native JS crash",
                                          },
                                          {
                                              value: c.Xo.RendererProcessDelayed,
                                              label: "Delayed exception in renderer process",
                                          },
                                          {
                                              value: c.Xo.RendererProcess,
                                              label: "Exception in renderer process",
                                          },
                                          {
                                              value: c.Xo.MainProcess,
                                              label: "Exception in main process",
                                          },
                                      ],
                                      onChange: (e) => (null != e ? eh(e) : void 0),
                                  }),
                                  (0, r.jsx)(_.zxk, {
                                      variant: "primary",
                                      text: "React Crash",
                                      onClick: () => a(!0),
                                  }),
                                  (0, r.jsx)(_.zxk, {
                                      variant: "primary",
                                      text: "onClick Throw",
                                      onClick: ep,
                                  }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function eg() {
    let e = (0, u.e7)([k.Z], () => k.Z.getSurveyOverride()),
        [t, n] = i.useState(null != e ? e : ""),
        a = (e) => {
            e.preventDefault(), t.length > 0 ? g.Xq(t) : g.Xq(null);
        };
    return (0, r.jsx)(j.F, {
        setting: K.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, r.jsxs)(_.hjN, {
            tag: _.RB0.H1,
            title: "Survey Override",
            className: J.marginTop60,
            children: [
                (0, r.jsx)(_.vwX, { children: "Copy the ID of the Survey you want to test:" }),
                (0, r.jsx)("form", {
                    className: X.surveyOverride,
                    onSubmit: a,
                    children: (0, r.jsxs)(_.Kqy, {
                        direction: "horizontal",
                        gap: 8,
                        children: [
                            (0, r.jsx)(_.oil, {
                                fullWidth: !0,
                                value: t,
                                onChange: n,
                            }),
                            (0, r.jsx)(_.zxk, {
                                variant: "primary",
                                text: "Save Override",
                                type: "submit",
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function eE() {
    var e;
    let t = (0, u.e7)([v.Z], () => v.Z.overrideId()),
        [n, a] = i.useState(null != (e = v.Z.overrideId()) ? e : ""),
        o = () => {
            "" === n ? h.Z.setChangelogOverride(null) : h.Z.setChangelogOverride(n);
        },
        s = () => {
            let e = new Date("2018-01-01");
            V.l4.updateSetting(B.default.fromTimestamp(e.getTime())), d.K.set("lastChangeLogDate", e);
        };
    return (0, r.jsx)(j.F, {
        setting: K.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, r.jsx)(_.hjN, {
            tag: _.RB0.H1,
            title: "Changelog",
            className: J.marginTop60,
            children: (0, r.jsxs)(_.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsxs)(_.Kqy, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(_.vwX, { children: "Changelog Override" }),
                            (0, r.jsx)(_.R94, {
                                children:
                                    "Enter the ID of the changelog you want to test This will override the changelog that is shown to the user.",
                            }),
                            (0, r.jsxs)(_.Kqy, {
                                direction: "horizontal",
                                gap: 8,
                                children: [
                                    (0, r.jsx)(_.oil, {
                                        fullWidth: !0,
                                        value: n,
                                        onChange: a,
                                    }),
                                    (0, r.jsx)(_.zxk, {
                                        variant: "primary",
                                        text: "Update Changelog",
                                        onClick: o,
                                        disabled: t === n,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(_.Kqy, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(_.vwX, { children: "Reset Changelog" }),
                            (0, r.jsx)(_.R94, {
                                children: "This will reset the changelog, so it will show again on the next startup.",
                            }),
                            (0, r.jsx)(_.zxk, {
                                variant: "primary",
                                text: "Reset Changelog",
                                onClick: s,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function eb() {
    return (0, r.jsx)(j.F, {
        setting: K.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        children: (0, r.jsx)(_.hjN, {
            tag: _.RB0.H1,
            title: "Client-Side Overrides",
            className: J.marginTop60,
            children: (0, r.jsx)(_.Kqy, {
                gap: 16,
                children: (0, r.jsx)("div", {
                    className: [X.buttonsContainer, J.marginBottom20].join(" "),
                    children: (0, r.jsx)(H.g, {}),
                }),
            }),
        }),
    });
}
function ey() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(ec, {}), (0, r.jsx)(eg, {}), (0, r.jsx)(eE, {}), (0, r.jsx)(eb, {})],
    });
}
let eO = function () {
    return (0, r.jsx)(Y.N, {
        header: "Developer Options",
        children: (0, r.jsx)(W.Z, {
            parentSetting: K.s6.DEVELOPER_OPTIONS,
            settingsSection: z.oAB.DEVELOPER_OPTIONS,
            tabs: [
                {
                    title: "Overrides",
                    component: ey,
                    setting: K.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                },
                {
                    title: "Manual Triggers",
                    component: em,
                    setting: K.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                },
                {
                    title: "Developer Flags",
                    component: ef,
                    setting: K.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                },
                {
                    title: "Logging",
                    component: e_,
                    setting: K.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                },
                {
                    title: "Design Tools",
                    component: ed,
                    setting: K.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                },
            ],
        }),
    });
};
