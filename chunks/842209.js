"use strict";
n.d(t, { D3: () => v, EW: () => E, ZV: () => R, cu: () => S, eW: () => y, j8: () => T, s$: () => A, v7: () => I }),
    n(321073);
var r = n(64700),
    i = n(311907),
    s = n(155718),
    a = n(71393),
    o = n(403362),
    l = n(827785),
    u = n(264322),
    c = n(210978),
    d = n(392054),
    _ = n(168186),
    f = n(240591),
    p = n(46477),
    h = n(73510),
    m = n(652215);
function E(e, t, n) {
    if (null == t) return { application: void 0, command: void 0 };
    let r = u.Ay.getUserState(),
        i = u.Ay.getContextState(e),
        s = Object.values(r.result?.sections ?? {}).concat(Object.values(i.result?.sections ?? {}));
    if (null != n) {
        let e = s.find((e) => e.descriptor.application?.id === n);
        if (null != e) {
            let n = g(e, t);
            return { application: e.descriptor.application, command: n };
        }
    } else
        for (let e of s) {
            let n = g(e, t);
            if (null != n) return { application: e.descriptor.application, command: n };
        }
    return { application: void 0, command: void 0 };
}
function g(e, t) {
    if (null == t) return;
    if (null != e.commands[t]) return e.commands[t];
    let n = Object.values(e.commands).find((e) => e.rootCommand?.id === t)?.rootCommand;
    return null != n
        ? (0, _.Oe)({ rootCommand: n, command: n, applicationId: e.descriptor.application?.id ?? "" })
        : void 0;
}
function A(e, t, n) {
    let r = u.Ay.getUserState(),
        i = u.Ay.getContextState(e),
        s = u.Ay.getApplicationState(n),
        a = r.result?.sections?.[n] ?? i.result?.sections?.[n] ?? s.result?.sections?.[n];
    return a?.descriptor;
}
function I(e, t, n) {
    let r = u.Ay.query(e, { commandTypes: [t], text: n }, { scoreMethod: c.M.COMMAND_OR_APPLICATION, allowFetch: !1 });
    return { commands: r.commands, sections: r.descriptors };
}
function T(e) {
    let t = u.Ay.getUserState(),
        n = u.Ay.getContextState(e);
    return [t?.result, n?.result];
}
function S(e) {
    let { context: t, filters: n, options: s, allowFetch: o } = e,
        c = "channel" === t.type ? t.channel.guild_id : null,
        d = (0, i.bG)([a.A], () => a.A.getGuild(c), [c]),
        { descriptors: _, commands: f, sectionedCommands: p, loading: E } = (0, u.XC)(t, d, n, { ...s, allowFetch: o }),
        [g, A] = r.useState(null),
        I = r.useMemo(() => b(s.placeholderCount ?? 0, n.commandTypes[0]), [n.commandTypes, s.placeholderCount]);
    return r.useMemo(() => {
        let e = {
            loading: E,
            commands: f,
            activeSections: _,
            commandsByActiveSection: p,
            filteredSectionId: g,
            hasMoreAfter: !1,
            placeholders: E ? I : [],
            sectionDescriptors: _,
            filterSection: (e) => {
                A(e);
            },
            scrollDown: m.tEg,
        };
        if (null != g) {
            let t = p.find((e) => e.section.id === g);
            (e.activeSections = null != t ? [t.section] : []), (e.commandsByActiveSection = null != t ? [t] : []);
        }
        if (E) {
            let t = p[0];
            if (null != t) e.commandsByActiveSection = [{ section: t.section, data: [...t.data, ...I] }, ...p.slice(1)];
            else {
                let t = l.gZ[h.Ik.BUILT_IN];
                (e.activeSections = [t]), (e.commandsByActiveSection = [{ section: t, data: I }]);
            }
            e.commands = [...f, ...I];
        }
        return e;
    }, [E, f, _, p, g, I]);
}
function y(e, t, n) {
    let { descriptors: r, commands: i, loading: s } = u.Ay.query(e, t, n),
        a = b(s ? (n.placeholderCount ?? 0) : 0, t.commandTypes[0]);
    return { commands: s ? [...i, ...a] : i, sections: s && 0 === r.length ? [l.gZ[h.Ik.BUILT_IN]] : r };
}
function v(e, t) {
    let n = (0, u.A4)(!0, !0),
        i = (0, u.SD)(e, !0, !0);
    return r.useMemo(() => {
        if (null != t)
            for (let e of Object.values(n.result?.sections ?? {}).concat(Object.values(i.result?.sections ?? {}))) {
                let n = e.commands[t];
                if (null != n) return { command: n, application: e.descriptor.application };
            }
        return { command: void 0, application: void 0 };
    }, [i.result, n.result, t]);
}
function N(e, t, n) {
    let i = (0, u.A4)(!0, !0),
        s = (0, u.SD)(e, !0, !0);
    return r.useMemo(() => {
        let e = i.result?.sections?.[t] != null,
            r = s.result?.sections?.[t] != null,
            a = i.result?.sections?.[t] ?? s.result?.sections[t],
            l = Object.values(a?.commands ?? {})
                .map((e) =>
                    null == e.rootCommand
                        ? e
                        : (0, _.Oe)({
                              rootCommand: e.rootCommand,
                              command: e.rootCommand,
                              applicationId: e.applicationId,
                          }),
                )
                .reduce((e, t) => ((e[t.id] = t), e), {});
        return {
            application: a?.descriptor?.application,
            commands: n.map((e) => l[e]).filter(o.Vq),
            sectionDescriptor: a?.descriptor,
            isGuildInstalled: r,
            isUserInstalled: e,
        };
    }, [i?.result, s?.result, t, n]);
}
let C = [s.kc.CHAT];
function R(e, t, n) {
    let {
            commands: i,
            application: s,
            sectionDescriptor: a,
            isGuildInstalled: o,
            isUserInstalled: l,
        } = N(
            r.useMemo(() => ({ channel: e, type: "channel" }), [e]),
            t,
            n,
        ),
        u = (0, f.MW)(e, C);
    return {
        application: s,
        commands: r.useMemo(() => {
            if (null == i) return;
            let t =
                    null != e.guild_id && a?.permissions != null
                        ? p.we(a.permissions, e.guild_id, u.userId, u.roleIds, u.isImpersonating)
                        : null,
                n = null != e.guild_id && a?.permissions != null ? p._W(a.permissions, e, e.guild_id) : null;
            return i.filter(
                (e) =>
                    p.zl(e, u, {
                        applicationAllowedForUser: t,
                        applicationAllowedForChannel: n,
                        isGuildInstalled: o,
                        isUserInstalled: l,
                        commandBotId: a?.botId,
                    }) === p.CA.ALLOWED,
            );
        }, [i, u, a, o, l, e]),
    };
}
let O = { id: "placeholder-section", type: d.Hf.APPLICATION, name: "" };
function b(e, t) {
    let n = [];
    for (let r = 0; r < e; r++) n.push(D(r, t));
    return n;
}
function D(e, t) {
    return {
        type: t,
        inputType: d.y$.PLACEHOLDER,
        id: `placeholder-${e}`,
        untranslatedName: "",
        displayName: "",
        untranslatedDescription: "",
        displayDescription: "",
        applicationId: "",
        section: O,
    };
}
