n.d(t, {
    D3: () => I,
    DP: () => T,
    EW: () => E,
    cu: () => v,
    eW: () => S,
    j8: () => A,
    s$: () => y,
    v7: () => O,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(71393),
    s = n(403362),
    o = n(827785),
    l = n(264322),
    c = n(210978),
    u = n(392054),
    d = n(168186),
    f = n(73510),
    p = n(652215);

function _(e, t, n) {
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

function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}

function m(e, t) {
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

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function E(e, t, n) {
    var r, i, a, s;
    if (null == t)
        return {
            application: void 0,
            command: void 0,
        };
    let o = l.Ay.getUserState(),
        c = l.Ay.getContextState(e),
        u = Object.values(null != (r = null == (a = o.result) ? void 0 : a.sections) ? r : {}).concat(
            Object.values(null != (i = null == (s = c.result) ? void 0 : s.sections) ? i : {}),
        );
    if (null != n) {
        let e = u.find((e) => {
            var t;
            return (null == (t = e.descriptor.application) ? void 0 : t.id) === n;
        });
        if (null != e) {
            let n = b(e, t);
            return {
                application: e.descriptor.application,
                command: n,
            };
        }
    } else
        for (let e of u) {
            let n = b(e, t);
            if (null != n)
                return {
                    application: e.descriptor.application,
                    command: n,
                };
        }
    return {
        application: void 0,
        command: void 0,
    };
}

function b(e, t) {
    var n, r, i;
    if (null == t) return;
    if (null != e.commands[t]) return e.commands[t];
    let a =
        null ==
        (r = Object.values(e.commands).find((e) => {
            var n;
            return (null == (n = e.rootCommand) ? void 0 : n.id) === t;
        }))
            ? void 0
            : r.rootCommand;
    return null != a
        ? (0, d.Oe)({
              rootCommand: a,
              command: a,
              applicationId: null != (n = null == (i = e.descriptor.application) ? void 0 : i.id) ? n : "",
          })
        : void 0;
}

function y(e, t, n) {
    var r, i, a, s, o, c, u, d;
    let f = l.Ay.getUserState(),
        p = l.Ay.getContextState(e),
        _ = l.Ay.getApplicationState(n),
        h =
            null !=
            (r =
                null != (i = null == (s = f.result) || null == (a = s.sections) ? void 0 : a[n])
                    ? i
                    : null == (c = p.result) || null == (o = c.sections)
                      ? void 0
                      : o[n])
                ? r
                : null == (d = _.result) || null == (u = d.sections)
                  ? void 0
                  : u[n];
    return null == h ? void 0 : h.descriptor;
}

function O(e, t, n) {
    let r = l.Ay.query(
        e,
        {
            commandTypes: [t],
            text: n,
        },
        {
            scoreMethod: c.M.COMMAND_OR_APPLICATION,
            allowFetch: !1,
        },
    );
    return {
        commands: r.commands,
        sections: r.descriptors,
    };
}

function A(e) {
    let t = l.Ay.getUserState(),
        n = l.Ay.getContextState(e);
    return [null == t ? void 0 : t.result, null == n ? void 0 : n.result];
}

function v(e) {
    let { context: t, filters: n, options: s, allowFetch: c } = e,
        u = "channel" === t.type ? t.channel.guild_id : null,
        d = (0, i.bG)([a.A], () => a.A.getGuild(u), [u]),
        {
            descriptors: _,
            commands: m,
            sectionedCommands: E,
            loading: b,
        } = (0, l.XC)(
            t,
            d,
            n,
            g(h({}, s), {
                allowFetch: c,
            }),
        ),
        [y, O] = r.useState(null),
        A = r.useMemo(() => {
            var e;
            return N(null != (e = s.placeholderCount) ? e : 0, n.commandTypes[0]);
        }, [n.commandTypes, s.placeholderCount]);
    return r.useMemo(() => {
        let e = {
            loading: b,
            commands: m,
            activeSections: _,
            commandsByActiveSection: E,
            filteredSectionId: y,
            hasMoreAfter: !1,
            placeholders: b ? A : [],
            sectionDescriptors: _,
            filterSection: (e) => {
                O(e);
            },
            scrollDown: p.tEg,
        };
        if (null != y) {
            let t = E.find((e) => e.section.id === y);
            (e.activeSections = null != t ? [t.section] : []), (e.commandsByActiveSection = null != t ? [t] : []);
        }
        if (b) {
            let t = E[0];
            if (null != t)
                e.commandsByActiveSection = [
                    {
                        section: t.section,
                        data: [...t.data, ...A],
                    },
                    ...E.slice(1),
                ];
            else {
                let t = o.gZ[f.Ik.BUILT_IN];
                (e.activeSections = [t]),
                    (e.commandsByActiveSection = [
                        {
                            section: t,
                            data: A,
                        },
                    ]);
            }
            e.commands = [...m, ...A];
        }
        return e;
    }, [b, m, _, E, y, A]);
}

function S(e, t, n) {
    var r;
    let { descriptors: i, commands: a, loading: s } = l.Ay.query(e, t, n),
        c = N(s && null != (r = n.placeholderCount) ? r : 0, t.commandTypes[0]);
    return {
        commands: s ? [...a, ...c] : a,
        sections: s && 0 === i.length ? [o.gZ[f.Ik.BUILT_IN]] : i,
    };
}

function I(e, t) {
    let n = (0, l.A4)(!0, !0),
        i = (0, l.SD)(e, !0, !0);
    return r.useMemo(() => {
        if (null != t) {
            var e, r, a, s;
            for (let o of Object.values(null != (e = null == (a = n.result) ? void 0 : a.sections) ? e : {}).concat(
                Object.values(null != (r = null == (s = i.result) ? void 0 : s.sections) ? r : {}),
            )) {
                let e = o.commands[t];
                if (null != e)
                    return {
                        command: e,
                        application: o.descriptor.application,
                    };
            }
        }
        return {
            command: void 0,
            application: void 0,
        };
    }, [i.result, n.result, t]);
}

function T(e, t, n) {
    let i = (0, l.A4)(!0, !0),
        a = (0, l.SD)(e, !0, !0);
    return r.useMemo(() => {
        var e, r, o, l, c, u;
        let f =
                null != (e = null == (l = i.result) || null == (o = l.sections) ? void 0 : o[t])
                    ? e
                    : null == (c = a.result)
                      ? void 0
                      : c.sections[t],
            p = Object.values(null != (r = null == f ? void 0 : f.commands) ? r : {})
                .map((e) =>
                    null == e.rootCommand
                        ? e
                        : (0, d.Oe)({
                              rootCommand: e.rootCommand,
                              command: e.rootCommand,
                              applicationId: e.applicationId,
                          }),
                )
                .reduce((e, t) => ((e[t.id] = t), e), {});
        return {
            application: null == f || null == (u = f.descriptor) ? void 0 : u.application,
            commands: n.map((e) => p[e]).filter(s.Vq),
        };
    }, [null == i ? void 0 : i.result, null == a ? void 0 : a.result, t, n]);
}
let C = {
    id: "placeholder-section",
    type: u.Hf.APPLICATION,
    name: "",
};

function N(e, t) {
    let n = [];
    for (let r = 0; r < e; r++) n.push(R(r, t));
    return n;
}

function R(e, t) {
    return {
        type: t,
        inputType: u.y$.PLACEHOLDER,
        id: "placeholder-".concat(e),
        untranslatedName: "",
        displayName: "",
        untranslatedDescription: "",
        displayDescription: "",
        applicationId: "",
        section: C,
    };
}
