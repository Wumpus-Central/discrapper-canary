n.d(t, { Z: () => eg }), n(388685), n(35282), n(781311), n(49124), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(793030),
    u = n(268146),
    d = n(442837),
    f = n(544891),
    p = n(433517),
    _ = n(681715),
    h = n(481060),
    m = n(570140),
    g = n(661111),
    E = n(179658),
    b = n(491428),
    y = n(225433),
    O = n(484614),
    v = n(386506),
    S = n(865427),
    I = n(802098),
    T = n(600164),
    C = n(482215),
    A = n(581612),
    N = n(580747),
    P = n(38618),
    w = n(375657),
    R = n(171393),
    D = n(398269),
    x = n(921801),
    L = n(857192),
    j = n(558724),
    M = n(626135),
    k = n(709054),
    U = n(998502),
    G = n(210887),
    Z = n(695346),
    F = n(306052),
    B = n(10298),
    V = n(526156),
    H = n(202858),
    Y = n(726985),
    W = n(981631),
    K = n(908442),
    z = n(431958),
    q = n(579480),
    Q = n(478411);
function X(e, t, n) {
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
function J(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}
function $(e, t) {
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
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : $(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let et = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    en = [
        {
            id: "branch",
            value: "branch",
            label: "Branch Name",
        },
        {
            id: "id",
            value: "id",
            label: "Commit SHA",
        },
    ];
function er(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class ei extends i.Component {
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: i, error: a } = this.props,
            s = "branch" === t ? "Branch Name" : "Commit SHA";
        return (0, r.jsxs)(T.Z, {
            direction: T.Z.Direction.VERTICAL,
            className: o()(z.buildOverrideGroup, Q.marginBottom20, q.card, z.row),
            children: [
                (0, r.jsx)(y.Z, {
                    className: o()(z.removeBuildOverride, { [z.removeBuildOverrideDisabled]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, r.jsxs)(T.Z, {
                    className: Q.marginBottom8,
                    children: [
                        (0, r.jsx)(T.Z.Child, {
                            basis: "50%",
                            children: (0, r.jsx)(h.PhF, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: en,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: i,
                            }),
                        }),
                        (0, r.jsx)(T.Z.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, r.jsx)(h.oil, {
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
                            (0, r.jsx)(h.Text, {
                                className: z.item,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: a,
                            }),
                        (0, r.jsxs)(h.Text, {
                            variant: "text-sm/normal",
                            className: z.item,
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
            X(this, "handleRemoveBuildOverride", () => {
                this.props.onBuildOverrideRemoved(this.props.project);
            }),
            X(this, "handleOverrideIdChanged", (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, { id: e });
            }),
            X(this, "handleOverrideTypeChanged", (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, {
                    type: e,
                    id: "",
                });
            });
    }
}
class ea extends i.Component {
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, S.Ce)();
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
        return l().without(et, ...t);
    }
    renderEmpty() {
        return (0, r.jsx)(h.ubH, {
            theme: G.Z.theme,
            className: o()(Q.marginTop40, Q.marginBottom20),
            children: (0, r.jsx)(h.OZU, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : l().map(e, (e, i) =>
                  (0, r.jsx)(
                      ei,
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
            : (0, r.jsx)(h.Button, {
                  variant: "secondary",
                  text: "Reload App",
                  onClick: () => location.reload(),
              });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, r.jsx)(_.u, {
                  text: "Generate Public Link",
                  children: (0, r.jsx)(h.hU, {
                      variant: "secondary",
                      icon: h.xPt,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.Button, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, r.jsx)(h.Button, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: er(null != t ? t : {}),
                    onClick: this.handleSaveChanges,
                    loading: e,
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: n, buildOverrides: i } = this.state;
        e = t
            ? (0, r.jsx)(h.$jN, { className: Q.marginTop20 })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let a = !n && !t && this.getAvailableProjects().length > 0,
            o =
                er(null != i ? i : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, r.jsx)(h.Text, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, r.jsx)(x.F, {
            setting: Y.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, r.jsx)(h.C3N, {
                label: "Build Overrides",
                children: (0, r.jsxs)(h.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(h.PhF, {
                            selectionMode: "single",
                            label: "Add Build Override",
                            placeholder: "discord_project",
                            description: "Select a project to create a build override for.",
                            value: void 0,
                            options: this.getAvailableProjects().map((e) => ({
                                id: e,
                                label: e,
                                value: e,
                            })),
                            onSelectionChange: this.handleAddBuildOverride,
                            disabled: !a,
                        }),
                        o,
                        e,
                        (0, r.jsxs)(h.ButtonGroup, {
                            justify: "end",
                            children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                        }),
                    ],
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            X(this, "state", {
                loading: !0,
                buildOverrides: {},
                loadedBuildOverrides: {},
                errors: {},
                saving: !1,
                didSave: !1,
            }),
            X(this, "handleAddBuildOverride", (e) => {
                if (null == e) return;
                let t = ee(J({}, this.state.buildOverrides), {
                    [e]: {
                        type: "branch",
                        id: "",
                    },
                });
                this.setState({ buildOverrides: t });
            }),
            X(this, "handleBuildOverrideUpdated", (e, t) => {
                let { buildOverrides: n } = this.state,
                    r = J({}, null != n ? n[e] : {}, t),
                    i = ee(J({}, this.state.buildOverrides), { [e]: r });
                this.setState({ buildOverrides: i });
            }),
            X(this, "handleBuildOverrideRemoved", (e) => {
                let t = J({}, this.state.buildOverrides);
                delete t[e], this.setState({ buildOverrides: t });
            }),
            X(this, "handleDiscardChanges", () => {
                this.setState({
                    buildOverrides: l().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1,
                });
            }),
            X(this, "handleSaveChanges", async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, v.aD)(e);
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
            X(this, "handleLinkGeneration", () => {
                let { buildOverrides: e } = this.state;
                (0, h.h7j)((t) => (0, r.jsx)(eo, ee(J({}, t), { buildOverrides: e })));
            });
    }
}
class eo extends i.Component {
    isMobile() {
        var e;
        return er(null != (e = this.props.buildOverrides) ? e : {});
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
            d = K.S6.find((t) => t.value === e),
            f = a.map((e) => ({
                id: e,
                label: e,
                value: e,
            }));
        return (0, r.jsxs)(h.Kqy, {
            gap: 20,
            children: [
                (0, r.jsx)(h.PhF, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: K.S6,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, r.jsx)(h.PhF, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: K.F$,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, r.jsxs)(h.Kqy, {
                          gap: 20,
                          children: [
                              (0, r.jsx)(h.oil, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: o,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: s,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: {
                                      icon: h.qJs,
                                      onClick: this.handleAddAllowedVersion,
                                      "aria-label": "Add",
                                  },
                              }),
                              (0, r.jsx)(h.PhF, {
                                  selectionMode: "single",
                                  label: "Remove allowed app version",
                                  value: void 0,
                                  options: f,
                                  onSelectionChange: this.handleRemoveAllowedVersion,
                                  disabled: 0 === a.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, r.jsx)(h.Kx8, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, r.jsx)(h.Kx8, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: c,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, r.jsx)(h.rsf, {
                    label: "Allow logged out users",
                    checked: l,
                    onChange: this.handleAllowLoggedOut,
                }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, r.jsx)("div", {});
        let n = h.QYI.INFO;
        switch (t) {
            case 0:
                n = h.QYI.ERROR;
                break;
            case 1:
                n = h.QYI.WARNING;
        }
        return (0, r.jsx)(h.Wn, {
            messageType: n,
            children: e,
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, r.jsx)(c.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, r.jsx)(O.Z, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [
                {
                    variant: "primary",
                    text: "Generate Link",
                    onClick: this.handleGenerateLink,
                },
            ],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            X(this, "state", {
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
            X(this, "setUserEntryError", (e) => {
                this.setState({ userIdEntryError: e });
            }),
            X(this, "setStatusMessage", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                t.setState({
                    statusText: e,
                    status: n,
                });
            }),
            X(this, "handleUserIDEntry", (e) => {
                if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
                let t = new Set(e.split(/[,\s]+/).filter(Boolean));
                this.setState({
                    userIdEntry: e,
                    userIds: t,
                });
            }),
            X(this, "setAllowedVersionError", (e) => {
                this.setState({ allowedVersionEntryError: e });
            }),
            X(this, "handleAllowedVersionEntry", (e) => {
                this.setState({ allowedVersionEntry: e });
            }),
            X(this, "handleAllowedVersionEnter", (e) => {
                e.charCode === W.yXg.ENTER && this.handleAddAllowedVersion();
            }),
            X(this, "handleAddAllowedVersion", () => {
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
            X(this, "handleRemoveAllowedVersion", (e) => {
                let { allowedVersions: t } = this.state;
                (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
            }),
            X(this, "handleAllowLoggedOut", (e) => {
                this.setState({ allowLoggedOut: e });
            }),
            X(this, "handleExpirationChange", (e) => {
                this.setState({ ttlSeconds: e });
            }),
            X(this, "handleReleaseChannelChange", (e) => {
                this.setState({ releaseChannel: e });
            }),
            X(this, "handleExperiments", (e) => {
                if (0 === e.trim().length) return void this.setState({ experimentsError: void 0 });
                try {
                    let t = JSON.parse(e);
                    for (let e in t) {
                        if (null == e.match(/^[0-9]{4}\-[0-9]{2}(-|_)[a-z0-9_-]+$/))
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
            X(this, "generatePayload", () => ({
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
            X(this, "handleGenerateLink", async () => {
                if (this.isMobile() && 0 === this.state.allowedVersions.length)
                    return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
                this.setStatusMessage(null);
                let e = this.generatePayload(),
                    t = await (0, v.M3)(e);
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
function es() {
    let { horizontalSpacing: e, verticalSpacing: t, maxHorizontalSpacing: n, maxVerticalSpacing: a } = (0, C.i)(),
        o = i.useMemo(() => Array.from({ length: n + 1 }, (e, t) => t), [n]),
        s = i.useMemo(() => Array.from({ length: a + 1 }, (e, t) => t), [a]),
        { cssDebuggingEnabled: l, layoutDebuggingEnabled: c } = (0, d.cj)([L.default], () => ({
            cssDebuggingEnabled: L.default.cssDebuggingEnabled,
            layoutDebuggingEnabled: L.default.layoutDebuggingEnabled,
        })),
        u = (0, N.Z)("highlight_void_toggleables"),
        f = (0, N.Z)("highlight_mana_components");
    return (0, r.jsxs)(h.C3N, {
        label: "Design Tools",
        children: [
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, r.jsx)(h.rsf, {
                    label: "Enable CSS Debugging",
                    description: "Display raw colors as pink. Toggling this will refresh the browser.",
                    checked: l,
                    onChange: (e) => {
                        (0, E.y)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, r.jsx)(h.rsf, {
                    label: "Enable Layout Debugging",
                    description: "Renders a grid on top of the app to help debug layout alignment issues.",
                    checked: c,
                    onChange: (e) => {
                        (0, E.y)({ layoutDebuggingEnabled: e });
                    },
                }),
            }),
            (0, r.jsxs)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, r.jsx)(h.iRW, {
                        label: "Horizontal Grid Spacing",
                        description:
                            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
                        initialValue: e,
                        minValue: 0,
                        maxValue: n,
                        markers: o,
                        onValueChange: (e) => C.i.getState().setHorizontalSpacing(e),
                        onValueRender: (e) => "".concat(Math.round(e), "px"),
                        onMarkerRender: (e) => (e % 4 == 0 ? "".concat(e) : void 0),
                        equidistant: !0,
                    }),
                    (0, r.jsx)(h.iRW, {
                        label: "Vertical Grid Spacing",
                        description:
                            "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
                        initialValue: t,
                        minValue: 0,
                        maxValue: a,
                        markers: s,
                        onValueChange: (e) => C.i.getState().setVerticalSpacing(e),
                        onValueRender: (e) => "".concat(Math.round(e), "px"),
                        onMarkerRender: (e) => (e % 4 == 0 ? "".concat(e) : void 0),
                        equidistant: !0,
                    }),
                ],
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS,
                children: (0, r.jsx)(h.rsf, {
                    label: "Highlight Mana Components",
                    description: "Highlights all Mana design system components for easier debugging",
                    checked: f,
                    onChange: (e) => (0, A.Z)("highlight_mana_components", e),
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES,
                children: (0, r.jsx)(h.rsf, {
                    label: "Highlight Void Toggleable Components",
                    description:
                        "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue)",
                    checked: u,
                    onChange: (e) => (0, A.Z)("highlight_void_toggleables", e),
                }),
            }),
        ],
    });
}
function el() {
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
        } = (0, d.cj)([L.default], () => ({
            isTracingRequests: L.default.isTracingRequests,
            isForcedCanary: L.default.isForcedCanary,
            isAxeEnabled: L.default.isAxeEnabled,
            isSourceMapsEnabled: L.default.sourceMapsEnabled,
            isIdleStatusIndicatorEnabled: L.default.isIdleStatusIndicatorEnabled,
            onlyShowPreviewAppCollections: L.default.onlyShowPreviewAppCollections,
            disableAppCollectionsCache: L.default.disableAppCollectionsCache,
            preventPopoutClose: L.default.preventPopoutClose,
            logKeyboardMismatches: L.default.logKeyboardMismatches,
        })),
        u = (0, R.Z)("go_back_to_regular_input"),
        f = Z.zY.useSetting();
    return (0, r.jsxs)(h.C3N, {
        label: "Developer Flags",
        children: [
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                children: (0, r.jsx)(h.rsf, {
                    label: "Enable Tracing Requests",
                    description: "Force trace all client requests with APM",
                    checked: e,
                    onChange: (e) => (0, E.y)({ trace: e }),
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
                children: (0, r.jsx)(h.rsf, {
                    label: "Enable Forced Canary",
                    description: "Force all API requests to canary instances",
                    checked: t,
                    onChange: (e) => (0, E.y)({ canary: e }),
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER,
                children: (0, r.jsx)(h.rsf, {
                    label: "Ads auto-targeting",
                    description: "Make user targetable for all active ads",
                    checked: f,
                    onChange: (e) => Z.zY.updateSetting(e),
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
                children: (0, r.jsx)(h.rsf, {
                    label: "Enable source maps to be loaded on this client",
                    description: "Only enable on devices you trust.",
                    checked: i,
                    onChange: (e) => (0, E.y)({ sourceMapsEnabled: e }),
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                children: (0, r.jsx)(h.rsf, {
                    label: "Enable idle status indicator",
                    description: "Displays a floating idle status indicator",
                    checked: a,
                    onChange: (e) => (0, E.y)({ idleStatusIndicatorEnabled: e }),
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                children: (0, r.jsx)(h.rsf, {
                    label: "Enable Accessibility Auditing",
                    description:
                        "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
                    checked: n,
                    onChange: (e) => (0, E.y)({ axeEnabled: e }),
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                children: (0, r.jsx)(h.rsf, {
                    label: "Prevent Popouts From Closing Automatically",
                    description:
                        "This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.",
                    checked: l,
                    onChange: (e) => (0, E.y)({ preventPopoutClose: e }),
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES,
                children: (0, r.jsx)(h.rsf, {
                    label: "Enable Logging of Keyboard Mismatches",
                    description: "Logs mismatches in detected keyboard codes to the console",
                    checked: c,
                    onChange: (e) => (0, E.y)({ logKeyboardMismatches: e }),
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                children: (0, r.jsx)(h.rsf, {
                    label: "Preview unpublished application collections",
                    description:
                        "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                    checked: o,
                    onChange: (e) => (0, E.y)({ onlyShowPreviewAppCollections: e }),
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                children: (0, r.jsx)(h.rsf, {
                    label: "Disable application collections cache",
                    description:
                        "Disable application collections cache so that you can see updates to collections immediately.",
                    checked: s,
                    onChange: (e) => (0, E.y)({ disableAppCollectionsCache: e }),
                }),
            }),
            (0, r.jsx)(x.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT,
                children: (0, r.jsx)(h.rsf, {
                    label: "Disable aligning chat input to the bottom of the screen",
                    description: "Disable aligning chat input to the bottom of the screen",
                    checked: u,
                    onChange: (e) => {
                        M.default.track(W.rMx.GUILD_JOIN_FEEDBACK, {
                            reason: "disable-align-chat-input",
                            rating: e ? "yes" : "no",
                        }),
                            (0, w.s)("go_back_to_regular_input", { enabled: e });
                    },
                }),
            }),
        ],
    });
}
function ec() {
    let {
        isLoggingGatewayEvents: e,
        isLoggingOverlayEvents: t,
        isLoggingAnalyticsEvents: n,
        isAnalyticsDebuggerEnabled: i,
    } = (0, d.cj)([L.default], () => ({
        isLoggingGatewayEvents: L.default.isLoggingGatewayEvents,
        isLoggingOverlayEvents: L.default.isLoggingOverlayEvents,
        isLoggingAnalyticsEvents: L.default.isLoggingAnalyticsEvents,
        isAnalyticsDebuggerEnabled: L.default.isAnalyticsDebuggerEnabled,
    }));
    return (0, r.jsx)(x.F, {
        setting: Y.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
        children: (0, r.jsxs)(h.C3N, {
            label: "Logging",
            children: [
                (0, r.jsx)(x.F, {
                    setting: Y.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                    children: (0, r.jsx)(h.rsf, {
                        label: "Enable Logging of Gateway Events to Console",
                        description:
                            "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
                        checked: e,
                        onChange: (e) => (0, E.y)({ logGatewayEvents: e }),
                    }),
                }),
                (0, r.jsx)(x.F, {
                    setting: Y.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                    children: (0, r.jsx)(h.rsf, {
                        label: "Enable Logging of Overlay RPC Events & Commands",
                        description: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
                        checked: t,
                        onChange: (e) => (0, E.y)({ logOverlayEvents: e }),
                    }),
                }),
                (0, r.jsx)(x.F, {
                    setting: Y.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                    children: (0, r.jsx)(h.rsf, {
                        label: "Enable Logging of Analytics Events",
                        description: "Logs all analytics events to the developer console",
                        checked: n,
                        onChange: (e) => (0, E.y)({ logAnalyticsEvents: e }),
                    }),
                }),
                (0, r.jsx)(x.F, {
                    setting: Y.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                    children: (0, r.jsx)(h.rsf, {
                        label: "Enable standard analytics debugger view",
                        description: "Displays a floating debugger with viewed impressions",
                        checked: i,
                        onChange: (e) => (0, E.y)({ analyticsDebuggerEnabled: e }),
                    }),
                }),
            ],
        }),
    });
}
function eu() {
    throw Error("Send help");
}
function ed(e) {
    U.ZP.triggerJSException(e);
}
function ef() {
    let [e, t] = i.useState(!1),
        n = () => {
            f.tn.post({
                url: W.ANM.AUTH_SESSION_NOTIFICATIONS_DEBUG,
                rejectWithError: !0,
            });
        };
    return e
        ? {}
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: [z.buttonsContainer, Q.marginBottom20].join(" "),
                      children: [
                          (0, r.jsx)(x.F, {
                              setting: Y.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: (0, r.jsx)(h.Button, {
                                  variant: "primary",
                                  text: "Open Overlay",
                                  onClick: () => (0, D.f)(),
                              }),
                          }),
                          (0, r.jsx)(x.F, {
                              setting: Y.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, r.jsx)(h.Button, {
                                  variant: "primary",
                                  text: "Reset Socket",
                                  onClick: () => {
                                      P.Z.getSocket().close(), P.Z.getSocket().connect();
                                  },
                              }),
                          }),
                          (0, r.jsx)(x.F, {
                              setting: Y.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, r.jsx)(h.Button, {
                                  variant: "primary",
                                  text: "Clear Caches",
                                  onClick: () => {
                                      m.Z.dispatch({
                                          type: "CLEAR_CACHES",
                                          reason: "Requested by user",
                                          preventWritingCachesAgainThisSession: !0,
                                          resetSocket: !0,
                                      });
                                  },
                              }),
                          }),
                          (0, r.jsx)(x.F, {
                              setting: Y.s6.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS,
                              children: (0, r.jsx)(h.Button, {
                                  variant: "primary",
                                  text: "Show TOTP Success",
                                  onClick: () => (0, H.Yn)(!0),
                              }),
                          }),
                          (0, r.jsx)(x.F, {
                              setting: Y.s6.DEVELOPER_OPTIONS_TRIGGER_SUSPICIOUS_SESSIONS,
                              children: (0, r.jsx)(h.Button, {
                                  variant: "primary",
                                  text: "Trigger Suspicious Sessions Notifications",
                                  onClick: n,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(x.F, {
                      setting: Y.s6.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, r.jsx)(h.C3N, {
                          label: "Crashes",
                          children: (0, r.jsxs)("div", {
                              className: z.buttonsContainer,
                              children: [
                                  (0, r.jsx)(h.PhF, {
                                      label: "Native libdiscord crash",
                                      hideLabel: !0,
                                      selectionMode: "single",
                                      value: void 0,
                                      options: [
                                          {
                                              id: "none",
                                              value: void 0,
                                              label: "Native libdiscord crash",
                                          },
                                          {
                                              id: "abort",
                                              value: 0,
                                              label: "Abort()",
                                          },
                                          {
                                              id: "sigsegv",
                                              value: 1,
                                              label: "SIGSEGV()",
                                          },
                                          {
                                              id: "exception",
                                              value: 2,
                                              label: "EXCEPTION_ACCESS_VIOLATION",
                                          },
                                          {
                                              id: "fail",
                                              value: 3,
                                              label: "RaiseFailFastException",
                                          },
                                          {
                                              id: "out-of-memory",
                                              value: 4,
                                              label: "Out of Memory",
                                          },
                                      ],
                                      onSelectionChange: (e) => null != e && U.ZP.crash(e),
                                  }),
                                  (0, r.jsx)(h.PhF, {
                                      selectionMode: "single",
                                      label: "Native JS crash",
                                      hideLabel: !0,
                                      value: void 0,
                                      options: [
                                          {
                                              id: "none",
                                              value: void 0,
                                              label: "Native JS crash",
                                          },
                                          {
                                              id: "delayed-exception-in-renderer-process",
                                              value: u.Xo.RendererProcessDelayed,
                                              label: "Delayed exception in renderer process",
                                          },
                                          {
                                              id: "exception-in-renderer-process",
                                              value: u.Xo.RendererProcess,
                                              label: "Exception in renderer process",
                                          },
                                          {
                                              id: "exception-in-main-process",
                                              value: u.Xo.MainProcess,
                                              label: "Exception in main process",
                                          },
                                      ],
                                      onSelectionChange: (e) => (null != e ? ed(e) : void 0),
                                  }),
                                  (0, r.jsx)(h.Button, {
                                      variant: "primary",
                                      text: "React Crash",
                                      onClick: () => t(!0),
                                  }),
                                  (0, r.jsx)(h.Button, {
                                      variant: "primary",
                                      text: "onClick Throw",
                                      onClick: eu,
                                  }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function ep() {
    let e = (0, d.e7)([j.ZP], () => j.ZP.getSurveyOverride()),
        [t, n] = i.useState(null != e ? e : ""),
        a = (e) => {
            e.preventDefault(), t.length > 0 ? b.Xq(t) : b.Xq(null);
        };
    return (0, r.jsx)(x.F, {
        setting: Y.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, r.jsx)("form", {
            className: z.surveyOverride,
            onSubmit: a,
            children: (0, r.jsx)(h.C3N, {
                label: "Survey Override",
                description: "Copy the ID of the Survey you want to test:",
                children: (0, r.jsxs)(h.Kqy, {
                    direction: "horizontal",
                    gap: 8,
                    children: [
                        (0, r.jsx)(h.oil, {
                            fullWidth: !0,
                            value: t,
                            onChange: n,
                        }),
                        (0, r.jsx)(h.Button, {
                            variant: "primary",
                            text: "Save Override",
                            type: "submit",
                        }),
                    ],
                }),
            }),
        }),
    });
}
function e_() {
    var e;
    let t = (0, d.e7)([I.Z], () => I.Z.overrideId()),
        [n, a] = i.useState(null != (e = I.Z.overrideId()) ? e : ""),
        o = () => {
            "" === n ? g.Z.setChangelogOverride(null) : g.Z.setChangelogOverride(n);
        },
        s = () => {
            let e = new Date("2018-01-01");
            Z.l4.updateSetting(k.default.fromTimestamp(e.getTime())), p.K.set("lastChangeLogDate", e);
        };
    return (0, r.jsx)(x.F, {
        setting: Y.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, r.jsxs)(h.C3N, {
            label: "Changelog",
            children: [
                (0, r.jsxs)(h.Kqy, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(h.oil, {
                            label: "Changelog Override",
                            description:
                                "Enter the ID of the changelog you want to test This will override the changelog that is shown to the user.",
                            fullWidth: !0,
                            value: n,
                            onChange: a,
                        }),
                        (0, r.jsx)(h.Button, {
                            variant: "primary",
                            text: "Update Changelog",
                            onClick: o,
                            disabled: t === n,
                        }),
                    ],
                }),
                (0, r.jsx)(c.gNt, {
                    label: "Reset Changelog",
                    description: "This will reset the changelog, so it will show again on the next startup.",
                    children: (0, r.jsx)(h.Button, {
                        variant: "primary",
                        text: "Reset Changelog",
                        onClick: s,
                    }),
                }),
            ],
        }),
    });
}
function eh() {
    return (0, r.jsx)(x.F, {
        setting: Y.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        children: (0, r.jsx)(h.C3N, {
            label: "Client-Side Overrides",
            children: (0, r.jsx)(F.g, {}),
        }),
    });
}
function em() {
    return (0, r.jsxs)(h.Kqy, {
        gap: 24,
        children: [
            (0, r.jsx)(ea, {}),
            (0, r.jsx)(c.izJ, {}),
            (0, r.jsx)(ep, {}),
            (0, r.jsx)(c.izJ, {}),
            (0, r.jsx)(e_, {}),
            (0, r.jsx)(c.izJ, {}),
            (0, r.jsx)(eh, {}),
        ],
    });
}
let eg = function () {
    return (0, r.jsx)(B.N, {
        header: "Developer Options",
        children: (0, r.jsx)(V.Z, {
            parentSetting: Y.s6.DEVELOPER_OPTIONS,
            settingsSection: W.oAB.DEVELOPER_OPTIONS,
            tabs: [
                {
                    title: "Overrides",
                    component: em,
                    setting: Y.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                },
                {
                    title: "Manual Triggers",
                    component: ef,
                    setting: Y.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                },
                {
                    title: "Developer Flags",
                    component: el,
                    setting: Y.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                },
                {
                    title: "Logging",
                    component: ec,
                    setting: Y.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                },
                {
                    title: "Design Tools",
                    component: es,
                    setting: Y.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                },
            ],
        }),
    });
};
