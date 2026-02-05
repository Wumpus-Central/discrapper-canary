"use strict";
n.d(t, { D3: () => T, DP: () => y, EW: () => p, cu: () => A, eW: () => I, j8: () => E, s$: () => m, v7: () => g }),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(71393),
    s = n(403362),
    o = n(827785),
    l = n(264322),
    u = n(210978),
    c = n(392054),
    d = n(168186),
    _ = n(73510),
    f = n(652215);
function p(e, t, n) {
    if (null == t) return { application: void 0, command: void 0 };
    let r = l.Ay.getUserState(),
        i = l.Ay.getContextState(e),
        a = Object.values(r.result?.sections ?? {}).concat(Object.values(i.result?.sections ?? {}));
    if (null != n) {
        let e = a.find((e) => e.descriptor.application?.id === n);
        if (null != e) {
            let n = h(e, t);
            return { application: e.descriptor.application, command: n };
        }
    } else
        for (let e of a) {
            let n = h(e, t);
            if (null != n) return { application: e.descriptor.application, command: n };
        }
    return { application: void 0, command: void 0 };
}
function h(e, t) {
    if (null == t) return;
    if (null != e.commands[t]) return e.commands[t];
    let n = Object.values(e.commands).find((e) => e.rootCommand?.id === t)?.rootCommand;
    return null != n
        ? (0, d.Oe)({ rootCommand: n, command: n, applicationId: e.descriptor.application?.id ?? "" })
        : void 0;
}
function m(e, t, n) {
    let r = l.Ay.getUserState(),
        i = l.Ay.getContextState(e),
        a = l.Ay.getApplicationState(n),
        s = r.result?.sections?.[n] ?? i.result?.sections?.[n] ?? a.result?.sections?.[n];
    return s?.descriptor;
}
function g(e, t, n) {
    let r = l.Ay.query(e, { commandTypes: [t], text: n }, { scoreMethod: u.M.COMMAND_OR_APPLICATION, allowFetch: !1 });
    return { commands: r.commands, sections: r.descriptors };
}
function E(e) {
    let t = l.Ay.getUserState(),
        n = l.Ay.getContextState(e);
    return [t?.result, n?.result];
}
function A(e) {
    let { context: t, filters: n, options: s, allowFetch: u } = e,
        c = "channel" === t.type ? t.channel.guild_id : null,
        d = (0, i.bG)([a.A], () => a.A.getGuild(c), [c]),
        { descriptors: p, commands: h, sectionedCommands: m, loading: g } = (0, l.XC)(t, d, n, { ...s, allowFetch: u }),
        [E, A] = r.useState(null),
        I = r.useMemo(() => v(s.placeholderCount ?? 0, n.commandTypes[0]), [n.commandTypes, s.placeholderCount]);
    return r.useMemo(() => {
        let e = {
            loading: g,
            commands: h,
            activeSections: p,
            commandsByActiveSection: m,
            filteredSectionId: E,
            hasMoreAfter: !1,
            placeholders: g ? I : [],
            sectionDescriptors: p,
            filterSection: (e) => {
                A(e);
            },
            scrollDown: f.tEg,
        };
        if (null != E) {
            let t = m.find((e) => e.section.id === E);
            (e.activeSections = null != t ? [t.section] : []), (e.commandsByActiveSection = null != t ? [t] : []);
        }
        if (g) {
            let t = m[0];
            if (null != t) e.commandsByActiveSection = [{ section: t.section, data: [...t.data, ...I] }, ...m.slice(1)];
            else {
                let t = o.gZ[_.Ik.BUILT_IN];
                (e.activeSections = [t]), (e.commandsByActiveSection = [{ section: t, data: I }]);
            }
            e.commands = [...h, ...I];
        }
        return e;
    }, [g, h, p, m, E, I]);
}
function I(e, t, n) {
    let { descriptors: r, commands: i, loading: a } = l.Ay.query(e, t, n),
        s = v(a ? (n.placeholderCount ?? 0) : 0, t.commandTypes[0]);
    return { commands: a ? [...i, ...s] : i, sections: a && 0 === r.length ? [o.gZ[_.Ik.BUILT_IN]] : r };
}
function T(e, t) {
    let n = (0, l.A4)(!0, !0),
        i = (0, l.SD)(e, !0, !0);
    return r.useMemo(() => {
        if (null != t)
            for (let e of Object.values(n.result?.sections ?? {}).concat(Object.values(i.result?.sections ?? {}))) {
                let n = e.commands[t];
                if (null != n) return { command: n, application: e.descriptor.application };
            }
        return { command: void 0, application: void 0 };
    }, [i.result, n.result, t]);
}
function y(e, t, n) {
    let i = (0, l.A4)(!0, !0),
        a = (0, l.SD)(e, !0, !0);
    return r.useMemo(() => {
        let e = i.result?.sections?.[t] ?? a.result?.sections[t],
            r = Object.values(e?.commands ?? {})
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
        return { application: e?.descriptor?.application, commands: n.map((e) => r[e]).filter(s.Vq) };
    }, [i?.result, a?.result, t, n]);
}
let S = { id: "placeholder-section", type: c.Hf.APPLICATION, name: "" };
function v(e, t) {
    let n = [];
    for (let r = 0; r < e; r++) n.push(C(r, t));
    return n;
}
function C(e, t) {
    return {
        type: t,
        inputType: c.y$.PLACEHOLDER,
        id: `placeholder-${e}`,
        untranslatedName: "",
        displayName: "",
        untranslatedDescription: "",
        displayDescription: "",
        applicationId: "",
        section: S,
    };
}
